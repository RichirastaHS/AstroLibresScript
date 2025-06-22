---
title: Manual de Programador
sidebar:
  order: 1
---

Este sección está dirigido a desarrolladores que deseen mantener, adaptar o extender el compilador de LibreScript. Abarca desde una descripción general hasta detalles sobre su arquitectura, componentes léxicos y sintácticos, errores comunes, y consideraciones para mantenimiento a futuro.

El compilador **LibreScript** es un sistema desarrollado en JavaScript con Node.js que permite analizar, validar y extender código fuente escrito en un lenguaje personalizado llamado LibreScript. El lenguaje LibreScript tiene una sintaxis inspirada en lenguajes modernos como JavaScript y Python, pero adaptado a una estructura simple que facilita su comprensión y validación en entornos académicos.

## Descripción General

El compilador está dividido en las siguientes fases principales:

1. Análisis léxico: Utiliza expresiones regulares para dividir el código en tokens significativos como palabras clave, identificadores, literales y operadores.

2. Análisis sintáctico: Utiliza reglas gramaticales para construir un árbol de sintaxis abstracta (AST) que represente la estructura jerárquica del código.

3. Análisis semántico: Recorre el AST para verificar tipos, ámbitos, definiciones de variables, tipos de retorno, y consistencia general del programa.

4. Manejo de errores: Durante cada fase, el sistema captura errores léxicos, sintácticos o semánticos y muestra mensajes claros al usuario.

Ejemplo de código con LibreScript

```ts
    funcion saludar(){
        imprimir("Hola mundo")
    }
```

### Arquitectura del sistema

Este fragmento de código define una función llamada saludar sin parámetros que imprime el mensaje Hola Mundo.

![Mapa de arquitectura](/AstroLibresScript/img/mapa.jpg)

#### Módulos Principales

- `lexer.js:` Tokeniza el texto fuente utilizando reglas de expresiones regulares.

- `parser.js:` Analiza la secuencia de tokens y construye un árbol sintáctico.

- `.js:` Archivo de ejecución que orquesta la lectura del archivo, tokenización, parseo y análisis semántico.

- `SymbolTable:` Clase que gestiona los ámbitos y la declaración de identificadores.

- `analyzeSemantics:` Función central que recorre el AST y aplica todas las validaciones semánticas.

### Especificaciones del análisis léxico

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

### Especificación del análisis sintáctico

Este compilador utiliza la herramienta Nearley.js para definir la gramática del lenguaje LibreScript. A continuación, se explica cada una de las partes importantes de estas reglas:

```regex
_  -> %ws:*        // Cero o más espacios
__ -> %ws:+        // Uno o más espacios obligatorios
_nl -> (%ws | %nl | %comentario_linea | %comentario_bloque):*
```

### Reglas auxiliares

Estas reglas permiten que el analizador ignore espacios y saltos de línea de forma flexible. _nl permite múltiples líneas en blanco y comentarios.

### Programa y Sentencias

```regex
Programa -> _nl Sentencias _nl
Sentencias -> Sentencia _nl | Sentencias Sentencia _nl | %empty
```

Un programa es una lista de sentencias separadas por líneas o espacios. Si no hay ninguna sentencia, se considera un programa vacío.

### Declaraciones

```regex
DeclaracionVariable -> %IDENTIFICADOR_VAR _ : _ Tipo _ = _ Expresion _ ;
DeclaracionConstante -> %IDENTIFICADOR_CONST _ : _ Tipo _ = _ Expresion _ ;
```

Permiten definir variables mutables (`$x`) y constantes (`$$PI`) con tipo y valor inicial.

### Tipos

```regex
Tipo -> TipoBase | TipoBase [] | TipoBase [][]
TipoBase -> numero | texto | booleano | objeto | Identificador personalizado
```

Soporta tipos primitivos, arreglos y matrices.

### Asignaciones

```regex
Asignacion -> Designable = Expresion ;
Designable -> variable, constante, acceso a arreglo o propiedad
```

Permite asignar valores a elementos designables.

### Estructuras de control

```regex
CondicionalSi -> si (condición) {bloque} [sino_si]* [sino]
BucleMientras -> mientras (condición) {bloque}
BuclePara -> para (inicio; condición; incremento) {bloque}
EstructuraSegun -> segun (expresión) {casos...}
```

Permite control de flujo como condicionales y bucles anidados.

### Funciones y Clases

```regex
DeclaracionFuncion -> funcion nombre(parámetros): tipo {bloque}
DeclaracionClase -> clase Nombre { propiedades, constructor, métodos }
```

La gramática permite declarar funciones con tipo de retorno y clases con visibilidad pública o privada.

### Expresiones

```regex
Expresiones están divididas por niveles de precedencia:
Lógica: &&, ||
Igualdad: ==, !=
Relacional: >, <, >=, <=
Aritmética: +, -, *, /, %, **
Unarias: -x, !x
Postfijas: x++, x--
```

### Literales y llamadas

```regex
LiteralPrimario -> números, textos, booleanos, variables, objetos
LlamadaFuncion -> nombre o propiedad seguido de paréntesis con argumentos
```

Estas reglas permiten formar expresiones completas y ejecutar funciones.

### Creación de estructuras

```regex
CreacionObjeto -> nuevo Clase(...)
CreacionArreglo -> [elem1, elem2, ...]
CreacionObjetoLiteral -> {clave: valor, ...}
```

El lenguaje soporta estructuras modernas como arreglos literales y objetos con pares clave-valor.
Con esta gramática definida en Nearley, el compilador puede transformar código fuente en una representación estructurada (AST).

## Procesos De Construcción Y Ejecución

### Requisitos previos

Descargar el compilador del siguiente repositorio de github: [Repositorio de LibreScript](https://github.com/AdrCrz/librescript)
Tener instalado Node.js versión 14 o superior
Para verificar que se tenga instalado `node.js` pede utilizar el siguiente comando en una terminal:

```bash
 node -v
```

### Pasos de ejecución

Dentro de la estructura del copilador ingresar a la carpeta examples que es donde va el código fuente de LibreScript para crear un archivo nuevo siempre debe ir en dicha carpeta y con la extensión `.ls`
Si se modifica el archivo grammar.ne que es el archivo para el analizar sintáctico y que contine las reglas gramaticales se debe realizar un compilado del código completo, este se realiza con la siguiente línea:

```bash
npx nearleyc src/grammar.ne -o src/grammar.js
```

:::note

```bash
    node main.js
```

Esta linea se usa para ver el funcionamiento del compilador de libreScript
:::

### Errores detectados

**Fase léxica:**

Errores producidos al encontrar caracteres o secuencias no válidas.
Ejemplo:

`$var := 3 // Error: operador := no reconocido`

**Fase sintáctica:**

Errores producidos al romper la estructura gramatical.
Ejemplo:

`si 3 { imprimir("Hola"); } // Error: la condición debe ser booleana`

**Fase semántica:**

Errores relacionados con el significado y contexto del programa.
Ejemplos:

- Uso de variables no declaradas
- Asignación a constantes
- Tipo de retorno incorrecto

```ts
funcion ejemplo(): numero {
  devolver "texto"; // Error: tipo esperado es numero
}
```

## Mantenimiento

**Consideraciones para modificar o extender el lenguaje:**

- Análisis léxico: agregar nueva palabra clave o símbolo al archivo lexer.js.
- Análisis sintáctico: agregar una nueva regla en parser.js que describa la sintaxis esperada.
- Semántica: en analyzeSemantics() crear un nuevo case que valide el nuevo nodo.

**Buenas prácticas de extensión:**

- Seguir una nomenclatura coherente para identificadores y tipos.
- Utilizar SymbolTable para registrar nuevas entidades (tipos, clases, funciones).
- Escribir pruebas para cada nuevo componente gramatical.
- Comentar y documentar claramente cualquier modificación en el AST.

**Ejemplo de extensión: agregar soporte para hacer ... mientras:**

1. **En `lexer.js`:**
`['hacer', 'KW_HACER']`

2. **En `parser.js`:**
`Sentencia → 'hacer' Bloque 'mientras' '(' Expresion ')'`

3. **En `analyzeSemantics()`:**

```ts
case 'BucleHacerMientras':
 // Validar que la condición sea booleana
 // Validar el bloque
```

Con estas pautas, el sistema puede mantenerse y evolucionar con facilidad,
