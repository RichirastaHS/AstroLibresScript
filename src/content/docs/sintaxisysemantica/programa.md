---
title: Estructura de un Programa
sidebar:
    order: 0
---

Un programa en LibreScript se organiza como una secuencia de sentencias que son ejecutadas de forma secuencial, la ejecución comienza desde la primera sentencia del archivo y procede hacia abajo.

## Componentes de un Programa

Un programa LibreScript se compone principalmente de las siguientes sentencias y estructuras, que pueden aparecer a nivel global:

* **Declaraciones de Variables y Constantes:** Definición de datos.
* **Asignaciones:** Modificación de valores de variables.
* **Llamadas a Funciones:** Ejecución de bloques de código reutilizables (incluyendo `imprimir()` y `leer()`).
* **Estructuras de Control de Flujo:** Condicionales (`si`, `siNo`, `segun`) y bucles (`mientras`, `para`).
* **Declaraciones de Funciones:** Definición de subrutinas.
Un programa simple puede ser solo una secuencia de sentencias, mientras que uno más complejo podría organizarse en funciones.

### Ejemplo de Estructura de Programa Básico

Este es un programa simple que demuestra la secuencia de ejecución y las declaraciones a nivel global.

```javascript
// Comentario de una línea: Inicia el programa LibreScript

// Declaración de una variable global
$saludo: texto = "¡Hola, LibreScript!"; // IDENTIFICADOR_VAR DOS_PUNTOS TIPO_TEXTO OP_ASIGNACION TEXTO_LITERAL PUNTO_Y_COMA

// Llamada a una función global (imprimir)
imprimir($saludo); // PR_IMPRIMIR LPAREN IDENTIFICADOR_VAR RPAREN PUNTO_Y_COMA

// Estructura de control
si ($saludo.longitud > 10) { // PR_SI LPAREN IDENTIFICADOR_VAR PUNTO IDENTIFICADOR_GRAL OP_MAYOR_QUE NUMERO_LITERAL RPAREN LBRACE
    imprimir("El saludo es largo."); // PR_IMPRIMIR LPAREN TEXTO_LITERAL RPAREN PUNTO_Y_COMA
} // RBRACE

// Fin del programa
```

---

## Estructura de una Función

Las funciones en LibreScript son bloques de código reutilizables que realizan una tarea específica y pueden aceptar parámetros y devolver un valor.

### Sintaxis y Estructura de Tokens

1. La **palabra reservada `funcion`** (`PR_FUNCION` token) para iniciar la declaración.
2. Un **identificador** (`IDENTIFICADOR_GRAL` token) que es el **nombre de la función**.
3. **Paréntesis `()`** (`LPAREN`, `RPAREN` tokens) que encierran una **lista de parámetros opcionales**, separados por comas `,`. Cada parámetro se define con un identificador de variable (`IDENTIFICADOR_VAR`), seguido de dos puntos `:` (`DOS_PUNTOS` token) y su tipo (`Tipo`).
4. **Dos puntos `:`** (`DOS_PUNTOS` token), seguido del **tipo de retorno** (`Tipo`) de la función. Si la función no devuelve un valor, se utiliza el tipo `vacio` (`PR_VACIO` token).
5. **Llaves `{}`** (`LBRACE`, `RBRACE` tokens) para delimitar el **cuerpo de la función**, donde se encuentra el código a ejecutar.
6. Opcionalmente, la **palabra reservada `devolver`** (`PR_DEVOLVER` token), seguida de una expresión y un punto y coma `;`, se utiliza para retornar un valor.

### Ejemplo

```javascript
// Declaración de una función
funcion sumar( $a: numero, $b: numero ): numero { // PR_FUNCION IDENTIFICADOR_GRAL LPAREN IDENTIFICADOR_VAR DOS_PUNTOS TIPO_NUMERO COMA IDENTIFICADOR_VAR DOS_PUNTOS TIPO_NUMERO RPAREN DOS_PUNTOS TIPO_NUMERO LBRACE
    $resultado: numero = $a + $b; // IDENTIFICADOR_VAR DOS_PUNTOS TIPO_NUMERO OP_ASIGNACION IDENTIFICADOR_VAR OP_SUMA IDENTIFICADOR_VAR PUNTO_Y_COMA
    devolver $resultado; // PR_DEVOLVER IDENTIFICADOR_VAR PUNTO_Y_COMA
} // RBRACE

// Llamada a la función
$total: numero = sumar(10, 20); // IDENTIFICADOR_VAR DOS_PUNTOS TIPO_NUMERO OP_ASIGNACION IDENTIFICADOR_GRAL LPAREN NUMERO_LITERAL COMA NUMERO_LITERAL RPAREN PUNTO_Y_COMA
imprimir("El total es:", $total); // PR_IMPRIMIR LPAREN TEXTO_LITERAL COMA IDENTIFICADOR_VAR RPAREN PUNTO_Y_COMA
```
