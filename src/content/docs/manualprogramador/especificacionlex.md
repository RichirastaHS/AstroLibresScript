---
title: Especificación del análisis léxico 
sidebar:
  order: 4
---


El análisis léxico se realiza en el archivo `lexer.js`, que implementa una serie de reglas que define como reconocer:

- **Palabras clave:** como si, sino, mientras, para, funcion, clase, devolver, romper, nuevo, etc.

- **Identificadores:** que representan variables ($x), constantes ($$Pi), funciones o nombres de clases.

- **Literales:** valores como 123, "texto", true, false, [].

-**Operadores:** +, -, *, /, =, ==, !=, &&, ||, ++, --, etc.
Separadores y delimitadores: ;, ,, (, ), {, }.

### Expresiones regulares usadas para los tokens (están escritas usando el formato que proporciona regex)

#### Comentarios

```regex
comentario_linea: /\/\/.*/,
comentario_bloque: /\/\*[^]*?\*\//
```

#### Literales

```regex
numero: /[0-9]+(?:\.[0-9]+)?/,
 texto: /\"(?:[^\"\\]|\\.)*\"|'(?:[^'\\]|\\.)*'/
```

#### Palabras reservadas

Para definir el token con su expresión regular seguimos el formato ya definido comenzamos nombrando el token con el sufijo PR para identificarlo como Palabra Reservada, seguimos con un guion bajo para separar el sufijo del nombre que le vamos a dar al token. En seguida codificamos la expresión regular encerrándola entre diagonales invertidas para que sea entendida por el lexer.js

```regex
  PR_SINO_SI:   /\bsiNo\s*si\b/,     
  PR_CONSTRUCTOR: /\bconstructor\b/, 
  PR_IMPRIMIR:  /\bimprimir\b/,
  PR_LEER:      /\bleer\b/,         
  PR_DEVOLVER:  /\bdevolver\b/,
  PR_FUNCION:   /\bfuncion\b/,
  PR_CLASE:     /\bclase\b/,
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
```

#### Identificadores

Los identificadores deben estar escritos con notación cameCase, es decir la primera palabra debe ser minúscula posterior mente la primera letra de cada palabra deberá ser mayúscula y no se aceptan espacios entre palabras. Ejemplo: estaEsUnIdentificador

```regex
  IDENTIFICADOR_CONST: /\$\$[a-z_][a-zA-Z0-9_]*/     
  IDENTIFICADOR_VAR:   /\$[a-z_][a-zA-Z0-9_]*/
  IDENTIFICADOR_GRAL:  /[a-z_][a-zA-Z0-9_]*/
```
