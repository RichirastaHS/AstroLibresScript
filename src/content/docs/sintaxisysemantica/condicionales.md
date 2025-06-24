---
title: Condicionales
sidebar:
    order: 10
---
## Condicional `si`

El condicional básico si permite ejecutar un bloque de código si una condición es verdadera.

### Sintaxis

1.  La **palabra reservada `si`** (`PR_SI` token) para iniciar la condición.
2.  **Paréntesis `()`** (`LPAREN`, `RPAREN` tokens) que encierran la **condición a evaluar**. La condición dentro de `si` debe evaluar un valor de tipo booleano.
3.  **Llaves `{}`** (`LBRACE`, `RBRACE` tokens) para delimitar el **bloque de código** que se ejecutará si la condición es verdadera.
4.  Opcionalmente, se puede agregar una estructura `siNo` para ejecutar otro bloque de código si la condición es falsa.


~~~javascript
    si ($x > 0) { 
        imprimir("Positivo"); 
    }
~~~

## Condicional `siNo`

El condicional siNo se utiliza para ejecutar un bloque de código cuando la condición del si no se cumple:

Sintaxis:

1.  La **palabra reservada `si`** (`PR_SI` token) para evaluar una condición.
2.  **Paréntesis `()`** (`LPAREN`, `RPAREN` tokens) que encierran la **condición a evaluar**.
3.  **Llaves `{}`** (`LBRACE`, `RBRACE` tokens) que delimitan el **bloque de código** que se ejecutará si la condición es verdadera.
4.  La **palabra reservada `siNo`** (`PR_SINO` token), seguida de otro **bloque de código** entre llaves `{}`, que se ejecutará si la condición es falsa.


~~~javascript
    si ($x > 0) { 
        imprimir("Positivo");
    } 
    siNo { 
        imprimir("Negativo"); 
    }
~~~

## Estructura `segun`

La estructura segun es equivalente a un switch y se utiliza para comparar múltiples casos:

Sintaxis:

1.  La **palabra reservada `segun`** (`PR_SEGUN` token) para iniciar la evaluación.
2.  **Paréntesis `()`** (`LPAREN`, `RPAREN` tokens) que encierran la **expresión a evaluar**.
3.  **Llaves `{}`** (`LBRACE`, `RBRACE` tokens) para delimitar los **bloques de `caso` y `pordefecto`**.
4.  Cada **`caso`** se define con la **palabra reservada `caso`** (`PR_CASO` token), seguida de su **valor de comparación** (literal o constante) y **dos puntos `:`** (`DOS_PUNTOS` token).
5.  Un **bloque de código asociado a cada `caso`** (`LBRACE`, `RBRACE` tokens), que se ejecutará si la expresión coincide con el valor especificado.
6.  La **palabra reservada `romper`** (`PR_ROMPER` token), seguida de un **punto y coma `;`** (`PUNTO_Y_COMA` token), para salir de la estructura después de ejecutar un caso y evitar "caída" al siguiente.
7.  Un caso opcional **`pordefecto`** (`PR_PORDEFECTO` token), seguido de **dos puntos `:`**, que se ejecuta si ninguno de los casos anteriores coincide.


~~~javascript
    $dia: texto = "Lunes";
    segun ($dia) {
    caso "Lunes": {
        imprimir("Hoy es lunes de trabajo.");
    } romper; 
    caso "Viernes": {
        imprimir("¡Casi fin de semana!");
    } romper; 
    pordefecto: {
        imprimir("Otro día de la semana.");
    }
}
~~~

## Bucle `mientras`

El bucle `mientras` permite repetir un bloque de código mientras se cumpla una condición específica. 
1.  La **palabra reservada `mientras`** (`PR_MIENTRAS` token) para iniciar el bucle.
2.  **Paréntesis `()`** (`LPAREN`, `RPAREN` tokens) que encierran la **condición a evaluar**. La condición debe ser de tipo booleano.
3.  **Llaves `{}`** (`LBRACE`, `RBRACE` tokens) para delimitar el **bloque de código** que se ejecutará repetidamente mientras la condición sea verdadera.

Aquí un ejemplo:

~~~javascript
    $i: Número = 1;
    mientras ($i <= 5) {
        imprimir("Contando: " + $i);
        $i = $i + 1;
    }
~~~
