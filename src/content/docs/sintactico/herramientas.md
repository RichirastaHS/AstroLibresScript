---
title: Herramientas de generación sintáctica 
sidebar:
  order: 5
---
Para la construcción del analizador sintáctico de LibreScript, se ha empleado la herramienta **Nearley.js**. Nearley es un generador de *parsers* (analizadores sintácticos) para JavaScript, que es altamente flexible y puede construir analizadores a partir de gramáticas definidas en una sintaxis cercana a EBNF.

### Descripción de Nearley.js

* **Basado en LALR(1):** Utiliza un algoritmo de *parsing* LALR(1), lo que le permite manejar una amplia gama de gramáticas libres de contexto, incluidas muchas que son ambiguas de forma natural, siempre que la ambigüedad pueda resolverse con un *look-ahead* de un token.
* **Manejo de Ambigüedades:** Permite definir prioridades y asociaciones para operadores directamente en la gramática, y ofrece mecanismos para resolver ambigüedades mediante *postprocessors* o `$fuentes` para elegir la derivación correcta cuando existen múltiples caminos de análisis.

### Estructura de Archivos `.ne` (y su equivalente en `grammar.js`)

Nearley utiliza archivos con extensión `.ne` para definir la gramática. Estos archivos son compilados por la herramienta `nearleyc` en archivos JavaScript (`.js`) que pueden ser importados y utilizados directamente en el proyecto.

Un archivo `.ne` típicamente tiene la siguiente estructura conceptual:

```js
// Sección de Encabezado (equivalente a las declaraciones en .cup/.y)
// Código JavaScript que se insertará al principio del archivo .js generado.
// Aquí se importan utilidades, como el lexer o una función para crear nodos AST.
@{
  import lexer from "./lexer.js"; // Importa el lexer de Moo.js
  const nodo = (type, properties, value) => { /* ... */ }; // Función para crear nodos del AST
  // ... otras funciones auxiliares ...
@}

// Declaración del Lexer
// Indica a Nearley qué lexer debe usar para tokenizar la entrada.
@lexer lexer

// Reglas de la Gramática
// Se definen las reglas de producción en una sintaxis similar a EBNF.
// Cada regla puede tener un postprocessor para construir el AST.

// Ejemplo de regla con postprocessor complejo
DeclaracionVariable -> IDENTIFICADOR_VAR _ DOS_PUNTOS _ Tipo _ OP_ASIGNACION _ Expresion _ PUNTO_Y_COMA
  {% (d) => nodo("DeclaracionVariable", {
      nombre: d[0],
      tipo: d[4],
      valor: d[8]
    })
  %}

// Definiciones de tokens (terminales) directamente si no se usa @lexer
// O simplemente se referencian los tokens del lexer.
// Por ejemplo, `_nl` se define con `@lexer`
// _nl -> %nl | %ws:*:* | %comentario_linea | %comentario_bloque
// _ws -> %ws:+
// _ -> %ws:*
```
