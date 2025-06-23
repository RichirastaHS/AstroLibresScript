---
title: Implementación concreta 
sidebar:
  order: 6
---
La implementación concreta del analizador sintáctico en LibreScript se basa en el archivo `grammar.js` generado por Nearley y su integración fluida con el analizador léxico (`lexer.js`) de Moo.js.

### Código Generado del Analizador Sintáctico (`grammar.js`)

El archivo `grammar.js` es la piedra angular del analizador sintáctico. Como se explicó anteriormente, este archivo no es escrito manualmente, sino que es el resultado de compilar la gramática de LibreScript (definida en `grammar.ne`) utilizando la herramienta `nearleyc`.

El `grammar.js` contiene la representación interna de la gramática, incluyendo:
* La referencia al objeto `lexer` (de Moo.js) que Nearley utilizará.
* Un array de `ParserRules`, donde cada elemento es una regla de producción de la gramática con sus símbolos terminales y no terminales, y la lógica (la función *postprocessor*) para construir el nodo del Árbol de Sintaxis Abstracta (AST) correspondiente.
* Funciones auxiliares definidas en el encabezado del archivo `.ne` (como `nodo`, `id`, `opBinaria`, etc.) que son cruciales para la transformación de la secuencia de tokens en el AST.

Este archivo `grammar.js` es el "código generado" que encapsula toda la inteligencia del *parser*. Es importado y utilizado por el módulo principal de análisis sintáctico (normalmente `parser.js` o directamente `main.js`) para procesar el código fuente de LibreScript. Puedes examinar el contenido completo de este archivo en el repositorio del proyecto.

### Integración con el Analizador Léxico

La cohesión entre el analizador léxico y el sintáctico es fundamental para el funcionamiento del compilador. El *parser* de Nearley no opera directamente sobre la cadena de texto original, sino que espera un flujo de *tokens* previamente identificados por el *lexer*.

El proceso de integración en LibreScript se desarrolla de la siguiente manera:

1.  **Carga del Código Fuente:** El `main.js` del compilador se encarga de leer el código fuente del programa LibreScript (ej. desde un archivo `.ls`).
2.  **Preparación del Lexer:** El objeto `lexer` (instanciado desde `lexer.js` que usa Moo.js) se inicializa con la cadena de código fuente mediante el método `lexer.reset(codigoFuente)`. Esto prepara al léxico para entregar tokens a demanda.
3.  **Instanciación del Parser:** El módulo `parser.js` (que es el encargado de la lógica de *parsing*) importa la gramática compilada desde `grammar.js`. Luego, crea una nueva instancia del *parser* de Nearley, pasándole la gramática y, crucialmente, el objeto `lexer` configurado. Esta configuración permite a Nearley invocar el lexer para obtener los tokens a medida que los necesita.
4.  **Alimentación del Parser:** El método `parser.feed(codigoFuente)` se llama con la cadena de código fuente completa. Internamente, Nearley utilizará el `lexer` provisto para tokenizar la entrada y procesar los tokens de acuerdo con las reglas de la gramática.
5.  **Construcción del AST:** A medida que el *parser* reconoce secuencias de tokens que coinciden con las reglas de producción, ejecuta las funciones *postprocessor* asociadas a esas reglas. Estas funciones son responsables de construir los nodos del Árbol de Sintaxis Abstracta (AST), combinando los resultados de sub-reglas en una estructura jerárquica que representa el significado del código.

Aquí se muestra un fragmento del código de la gramatica `grammar.js` que ilustra esta integración:

```javascript
// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley



  import lexer from "./lexer.js";
  const nodo = (type, properties, value) => {
    if (value !== undefined) return { type, ...properties, value };
    return { type, ...properties };
  };
  function id(x) { return x[0]; }
  const opBinaria = (op, izq, der) => nodo("OpBinaria", { operador: op, izquierda: izq, derecha: der });
  const opUnaria = (op, operando) => nodo("OpUnaria", { operador: op, operando: operando });
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "Programa", "symbols": ["_nl", "Sentencias", "_nl"], "postprocess": (d) => nodo("Programa", { sentencias: d[1] })},
    {"name": "Sentencias", "symbols": ["Sentencia", "_nl"], "postprocess": (d) => [d[0]]},
    {"name": "Sentencias", "symbols": ["Sentencias", "Sentencia", "_nl"], "postprocess": (d) => [...d[0], d[1]]},
    {"name": "Sentencias", "symbols": [(lexer.has("empty") ? {type: "empty"} : empty)], "postprocess": () => []},
    {"name": "Sentencia", "symbols": ["DeclaracionVariable"], "postprocess": id},
    {"name": "Sentencia", "symbols": ["DeclaracionConstante"], "postprocess": id},
    {"name": "Sentencia", "symbols": ["Asignacion"], "postprocess": id},
    {"name": "Sentencia", "symbols": ["EstructuraControl"], "postprocess": id},
    **Resto de reglas**
    {"name": "_nl", "symbols": ["_nl$ebnf$1"], "postprocess": () => null}
]
  , ParserStart: "Programa"
};
export default grammar;
