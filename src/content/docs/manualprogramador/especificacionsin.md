---
title: Especificación del análisis sintáctico 
sidebar:
  order: 5
---

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
