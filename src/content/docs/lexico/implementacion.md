---
title:  Implementación concreta 
sidebar:
  order: 7
---

La implementación concreta del analizador léxico de LibreScript reside en el archivo `lexer.js`, el cual define directamente las reglas que `Moo.js` compila para formar el lexer.

### Código del Analizador Léxico (`lexer.js`)

El archivo `lexer.js` contiene la definición completa de todos los tokens de LibreScript, tal como se detalló en la sección [Expresiones Regulares](/AstroLibresScript/lexico/regex/). No se "genera" un archivo léxico separado en el sentido tradicional (como un `.c` o `.java` a partir de un `.lex` o `.flex`), sino que el objeto `lexer` es el propio analizador listo para usar.

### Ejemplo de Ejecución y Salida del Análisis Léxico

Para demostrar el funcionamiento del analizador léxico, consideremos un pequeño fragmento de código LibreScript.

**Código LibreScript de Entrada (`ejemplo.ls`):**

```
$edad: numero = 25;
imprimir("Tu edad es:", $edad);
```

**Tokens**
```bash
[
  {
    type: 'IDENTIFICADOR_VAR',
    value: '$edad',
    text: '$edad',
    line: 1,
    col: 1
  },
  { type: 'DOS_PUNTOS', value: ':', text: ':', line: 1, col: 6 },
  {
    type: 'TIPO_NUMERO',
    value: 'numero',
    text: 'numero',
    line: 1,
    col: 8
  },
  { type: 'OP_ASIGNACION', value: '=', text: '=', line: 1, col: 15 },
  { type: 'numero', value: '25', text: '25', line: 1, col: 17 },
  { type: 'PUNTO_Y_COMA', value: ';', text: ';', line: 1, col: 19 },
  {
    type: 'PR_IMPRIMIR',
    value: 'imprimir',
    text: 'imprimir',
    line: 2,
    col: 1
  },
  { type: 'LPAREN', value: '(', text: '(', line: 2, col: 9 },
  {
    type: 'texto',
    value: '"Tu edad es:"',
    text: '"Tu edad es:"',
    line: 2,
    col: 10
  },
  { type: 'COMA', value: ',', text: ',', line: 2, col: 23 },
  {
    type: 'IDENTIFICADOR_VAR',
    value: '$edad',
    text: '$edad',
    line: 2,
    col: 25
  },
  { type: 'RPAREN', value: ')', text: ')', line: 2, col: 30 },
  { type: 'PUNTO_Y_COMA', value: ';', text: ';', line: 2, col: 31 }
]
```