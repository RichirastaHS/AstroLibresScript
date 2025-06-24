---
title: Implementación del análisis semántico 
sidebar:
  order: 6
---
La implementación del análisis semántico en LibreScript se lleva a cabo como una **fase independiente** que opera sobre el Árbol de Sintaxis Abstracta (AST) generado por el analizador sintáctico. Aunque los *postprocessors* de Nearley.js (nuestras "acciones semánticas" de bajo nivel) son cruciales para *construir* el AST con la estructura correcta, el análisis semántico real que realiza las validaciones de tipos, ámbitos y declaraciones es una **segunda pasada (o recorrido)** sobre este AST ya construido.

### Recorrido del AST y Acciones Semánticas

El corazón de la implementación del análisis semántico es una función que **recorre el AST de forma recursiva** (generalmente un recorrido en profundidad, pre-orden o post-orden, dependiendo de la regla). En cada nodo del AST, se realizan las acciones semánticas específicas para ese tipo de construcción del lenguaje.

Consideremos la estructura del `main.js` que se ha utilizado en el proyecto. Existe una función principal `analyzeSemantics` (o similar, que contiene la lógica de recorrido y verificación) que toma el AST completo y el ámbito semántico global como entrada.

**Componentes clave de la implementación:**

1. **Función `analyzeSemantics` (o un Visitor Pattern):** Esta función actúa como el punto de entrada para el análisis semántico. Contiene la lógica para visitar cada tipo de nodo en el AST.
    * Cuando la función visita un nodo de tipo `DeclaracionVariable`, por ejemplo, recupera el nombre y el tipo de la variable, y luego utiliza la `Tabla de Símbolos` (`SymbolTable`) para registrar esta nueva declaración en el ámbito actual. También verifica si el identificador ya existe en el mismo ámbito.
    * Al visitar un nodo de tipo `OpBinaria` (operación binaria), la función primero analiza semánticamente los operandos izquierdo y derecho para determinar sus tipos. Luego, aplica las reglas de comprobación de tipos para el operador específico (ej., `+` requiere `numero`s) y determina el tipo resultante de la expresión.
    * Para un nodo `LlamadaFuncion`, la función `analyzeSemantics` busca la definición de la función en la tabla de símbolos (teniendo en cuenta los ámbitos), verifica el número y la compatibilidad de tipos de los argumentos con los parámetros de la función, y determina el tipo de retorno de la llamada.
    * Al entrar en bloques (`si`, `mientras`, `funcion`, `clase`), se crea un nuevo ámbito (`new SymbolTable(currentScope)`) y el `currentScope` se actualiza. Al salir del bloque, se restaura el `parentScope`.

2. **Tabla de Símbolos (`SymbolTable`):** Como se detalló en la [sección de tabla de simbolos](/AstroLibresScript/semantico/tabla/), la `SymbolTable` es la estructura de datos fundamental. La implementación de la `SymbolTable` en `main.js` maneja la adición de símbolos (`addSymbol`), la búsqueda (`lookupSymbol`) y el seguimiento de los contextos de función, bucle, clase y *switch* (`currentFunctionContext`, `currentLoopContext`, etc.). Estas propiedades de contexto son vitales para validar sentencias como `devolver` o `romper`.

3. **Manejo de Errores Semánticos:** Cuando se detecta una violación de una regla semántica (ej., tipo incompatible, variable no declarada), se lanza una instancia de `SemanticError`. Esta clase de error personalizada permite al compilador reportar mensajes de error claros y específicos al usuario, incluyendo la ubicación (línea, columna) si es posible.

**Ejemplo conceptual de la lógica de `analyzeSemantics` para un nodo `DeclaracionVariable`:**

```javascript
// Dentro de la función analyzeSemantics que recorre el AST
function analyzeNode(node, currentScope) {
    if (node.type === "DeclaracionVariable") {
        const varName = node.nombre.value;
        const varType = node.tipo; // Esto ya debería ser un objeto de tipo { base: "numero" }
        const initialValueExpr = node.valor;

        // 1. Verificar si la variable ya existe en el ámbito actual
        //    (La propia SymbolTable.addSymbol ya hace esta verificación)
        try {
            currentScope.addSymbol(varName, varType, "variable"); // kind: "variable" o "constante"
        } catch (e) {
            // Capturar SemanticError de redeclaración y quizás añadir info de línea/columna
            throw e;
        }

        // 2. Analizar semánticamente la expresión del valor inicial
        if (initialValueExpr) {
            const initialValueType = analyzeNode(initialValueExpr, currentScope); // Recursivamente obtenemos el tipo
            // 3. Comprobar la compatibilidad de tipos (type checking)
            if (!isTypeCompatible(initialValueType, varType)) {
                throw new SemanticError(
                    `Error de tipo: No se puede asignar '${initialValueType.base}' a una variable de tipo '${varType.base}' para '${varName}'.`
                );
            }
        }
        // Retornar el tipo de la declaración (puede ser útil para encadenamientos, aunque no común para declaraciones)
        return varType;

    } else if (node.type === "OpBinaria") {
        // ... lógica para operadores binarios y comprobación de tipos
        const leftType = analyzeNode(node.izquierda, currentScope);
        const rightType = analyzeNode(node.derecha, currentScope);
        const operator = node.operador.value;

        // Reglas de tipo para operadores:
        if (operator === "+" || operator === "-" || operator === "*" || operator === "/" || operator === "**") {
            if (leftType.base !== "numero" || rightType.base !== "numero") {
                throw new SemanticError(
                    `Error de tipo: Operación '${operator}' solo definida para 'numero', pero se encontró '${leftType.base}' y '${rightType.base}'.`
                );
            }
            return { base: "numero" }; // La operación numérica siempre devuelve 'numero'
        }
        // ... otras operaciones
    }
    // ... más casos para otros tipos de nodos AST
    // Para nodos que introducen un nuevo ámbito (funcion, si, mientras), se crea un new SymbolTable(currentScope)
    // y se pasa a la llamada recursiva para el cuerpo del bloque.
}
```
