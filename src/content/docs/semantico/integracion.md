---
title: Integración con fases anteriores 
sidebar:
  order: 7
---
La fase de análisis semántico en el compilador de LibreScript no opera de forma aislada; es una continuación directa de las fases léxica y sintáctica. La integración entre estas etapas es fundamental para el flujo de trabajo del compilador, donde la salida de una fase se convierte en la entrada de la siguiente.

### Flujo de Integración:

1.  **Análisis Léxico → Análisis Sintáctico:**
    * La primera etapa es el **Análisis Léxico**. El módulo `lexer.js` (basado en Moo.js) toma el código fuente de LibreScript como una secuencia de caracteres sin formato.
    * La salida del analizador léxico es un **flujo o secuencia de *tokens***. Cada token es una unidad léxica significativa (ej., un identificador, una palabra clave, un operador, un literal numérico).
    * Esta secuencia de tokens es la **entrada** para el analizador sintáctico.

2.  **Análisis Sintáctico → Análisis Semántico:**
    * La segunda etapa es el **Análisis Sintáctico**. El `parser.js` (basado en Nearley.js, utilizando las reglas de `grammar.js`) recibe la secuencia de tokens del lexer.
    * El analizador sintáctico tiene dos responsabilidades clave aquí:
        * **Validar la Estructura Gramatical:** Asegurarse de que la secuencia de tokens forma una sentencia o programa válido según las Reglas de la Gramática Libre de Contexto de LibreScript.
        * **Construir el Árbol de Sintaxis Abstracta (AST):** A medida que el *parser* reconoce las reglas de producción, las "acciones semánticas" incorporadas en los *postprocessors* de Nearley.js (`grammar.js`) se encargan de ensamblar los nodos del AST. Estas funciones (`nodo`, `opBinaria`, etc.) convierten la secuencia lineal de tokens en una estructura de árbol jerárquica que representa la lógica del programa, eliminando detalles irrelevantes de la sintaxis concreta.
    * La **salida** del analizador sintáctico es este **Árbol de Sintaxis Abstracta (AST) completo**.
    * El **análisis semántico** toma este AST como su **entrada principal**. Es decir, la función `analyzeSemantics` (vista en `main.js`) recibe el AST del analizador sintáctico y comienza su recorrido para realizar las verificaciones de significado y consistencia.

### Acciones Semánticas dentro de las Reglas de la Gramática (Postprocessors de Nearley.js):

En el contexto de un generador de *parsers* como Nearley.js, las "acciones semánticas" se refieren a las funciones JavaScript (`postprocess`) asociadas a cada regla de producción en la gramática (`grammar.js`).

* **Propósito:** Estas funciones se ejecutan cuando el *parser* ha reconocido con éxito una regla de producción específica. Su propósito fundamental en esta etapa es **construir y retornar la parte del AST** que corresponde a esa regla.
* **Transformación:** Toman los valores de los símbolos que componen la regla (que pueden ser tokens del lexer o nodos AST ya construidos por sub-reglas) y los transforman en un nodo AST significativo. Por ejemplo, una regla para una declaración de variable tomará el token del identificador, el token del tipo y el sub-árbol de la expresión de inicialización, y los encapsulará en un nodo `DeclaracionVariable` en el AST.
