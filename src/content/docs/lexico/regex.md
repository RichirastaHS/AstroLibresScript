---
title: Expresiones regulares
sidebar:
  order: 3
---
El analizador léxico de LibreScript está implementado utilizando la librería [Moo.js](https://github.com/no-context/moo). Los tokens y sus patrones se definen en el archivo `lexer.js` mediante expresiones regulares. La eficiencia y corrección del analizador léxico dependen de la precisión de estas expresiones y del orden en que se definen. Las reglas más específicas o de mayor longitud deben definirse antes que las más generales para evitar la captura errónea de tokens.

A continuación, se presentan las definiciones formales de los tokens más relevantes mediante sus expresiones regulares:

```javascript
// lexer.js - Extracto de las definiciones de tokens

const lexer = moo.compile({
  // Espacios en blanco y saltos de línea (ignorados, pero importantes para seguimiento de línea/columna)
  ws: { match: /[ \t]+/, lineBreaks: false },
  nl: { match: /\n/, lineBreaks: true },

  // Comentarios (ignorados)
  comentario_linea: /\/\/.*/,
  comentario_bloque: { match: /\/\*[^]*?\*\//, lineBreaks: true },

  // Literales
  numero: /[0-9]+(?:\.[0-9]+)?/, // Números enteros o decimales
  texto: /\"(?:[^\"\\]|\\.)*\"|'(?:[^'\\]|\\.)*'/ , // Cadenas con comillas dobles o simples, soportando escapes
  LIT_VERDADERO: /\bverdadero\b/,
  LIT_FALSO: /\bfalso\b/,

  // Palabras Clave (Ordenadas por especificidad o para evitar colisiones con identificadores)
  PR_SINO_SI:   /\bsiNo\s*si\b/, // 'siNo si' debe ir antes de 'siNo' y 'si'
  PR_CONSTRUCTOR: /\bconstructor\b/,
  PR_IMPRIMIR:  /\bimprimir\b/,
  PR_LEER:      /\bleer\b/,
  PR_DEVOLVER:  /\bdevolver\b/,
  PR_FUNCION:   /\bfuncion\b/,
  PR_NUEVO:     /\bnuevo\b/,
  PR_ESTE:      /\beste\b/,
  PR_VACIO:     /\bvacio\b/,
  PR_SI:        /\bsi\b/,
  PR_SINO:      /\bsiNo\b/,
  PR_SEGUN:     /\bsegun\b/,
  PR_CASO:      /\bcaso\b/,
  PR_PORDEFECTO:/\bpordefecto\b/,
  PR_ROMPER:    /\bromper\b/,
  PR_MIENTRAS:  /\bmientras\b/,
  PR_PARA:      /\bpara\b/,



  // Palabras Clave de Tipo de Datos
  TIPO_NUMERO:  /\bnumero\b/,
  TIPO_TEXTO:   /\btexto\b/,
  TIPO_BOOLEANO:/\bbooleano\b/,
  TIPO_ARREGLO: /\barreglo\\b/, // La barra invertida en '\barreglo\b' no se escapa
  TIPO_OBJETO:  /\bObjeto\b/,

  // Identificadores (DEBEN ir DESPUÉS de las palabras clave)
  IDENTIFICADOR_CONST: /\<span class="math-inline">\\</span>[a-zA-Z_][a-zA-Z0-9_]*/, // Empieza con $<span class="math-inline">, seguido de letra/\_ y luego letra/numero/\_
IDENTIFICADOR\_VAR\:   /\\</span>[a-zA-Z_][a-zA-Z0-9_]*/,   // Empieza con $, seguido de letra/_ y luego letra/numero/_
  IDENTIFICADOR_GRAL:  /[a-zA-Z_][a-zA-Z0-9_]*/,    // Nombres de funciones, propiedades, etc.

  // Operadores (multi-carácter primero para evitar conflictos)
  OP_POTENCIA:  /\*\*/,  // Potencia
  OP_EQ:        /==/,    // Igual a
  OP_NEQ:       /!=/,    // Diferente de
  OP_GTE:       />=/,    // Mayor o igual que
  OP_LTE:       /<=/,    // Menor o igual que
  OP_AND:       /&&/,    // AND lógico
  OP_OR:        /\|\|/,  // OR lógico
  OP_INCREMENTO:/\+\+/,  // Incremento
  OP_DECREMENTO:/--/,  // Decremento
  OP_ASIGNACION_SUMA:  /\+=/, // Asignación con suma
  OP_ASIGNACION_RESTA: /-=/, // Asignación con resta
  OP_ASIGNACION_MULT:  /\*=/, // Asignación con multiplicación
  OP_ASIGNACION_DIV:   /\/=/, // Asignación con división
  OP_ASIGNACION_MOD:   /%=/, // Asignación con módulo

  // Operadores de un solo carácter
  OP_SUMA:      /\+/,
  OP_RESTA:     /-/,
  OP_MULT:      /\*/,
  OP_DIV:       /\//,
  OP_MOD:       /%/,
  OP_NEGACION:  /!/, // Negación lógica
  OP_MAYOR_QUE: />/,
  OP_MENOR_QUE: /</,
  OP_ASIGNACION:/=/, // Asignación simple

  // Delimitadores y Puntuación
  LPAREN:       /\(/,
  RPAREN:       /\)/,
  LBRACE:       /\{/,
  RBRACE:       /\}/,
  LBRACKET:     /\[/,
  RBRACKET:     /\]/,
  PUNTO_Y_COMA: /;/,
  COMA:         /,/,
  DOS_PUNTOS:   /:/,
  PUNTO:        /\./, 
});
```
