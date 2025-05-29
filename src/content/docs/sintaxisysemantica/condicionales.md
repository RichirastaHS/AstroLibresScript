---
title: Condicionales
sidebar:
    order: 5
---
## Condicional `si`

El condicional básico si permite ejecutar un bloque de código si una condición es verdadera.

### Sintaxis

1. **La palabra reservada `si`** para iniciar la condición.
2. **Paréntesis `()`** que encierran la condición a evaluar, la condición dentro de si debe evaluar un valor de tipo booleano;
3. cpara delimitar el bloque de código que se ejecutará si la condición es verdadera.
4. Opcionalmente, se puede agregar una estructura sino para ejecutar otro bloque de código si la condición es falsa.

~~~javascript
    si ($x > 0) { 
        imprimir("Positivo"); 
    }
~~~

## Condicional `siNo`

El condicional siNo se utiliza para ejecutar un bloque de código cuando la condición del si no se cumple:

Sintaxis:

1. **La palabra reservada `si`** para evaluar una condición.
2. **Paréntesis `()`** que encierran la condición a evaluar.
3. **Paréntesis `()`**que delimitan el bloque de código que se ejecutará si la condición es verdadera.
4. **La palabra reservada `siNo`**, seguida de otro bloque de código entre llaves `{}`, que se ejecutará si la condición es falsa.

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

1. **La palabra reservada `segun`** para iniciar la evaluación.
2. **Paréntesis `()`** que encierran la variable a evaluar.
3. **Llaves `{}`** para delimitar los casos.
4. **La palabra reservada `caso`**,  seguida de un parentesis `()` y un valor específico que se comparará con la variable.
5. **Un bloque de código asociado a cada `caso`**, que se ejecutará si la variable coincide con el valor especificado.
6. **La palabra reservada `romper`** para salir de la estructura después de ejecutar un caso.
7. Un caso opcional pordefecto, que se ejecuta si ninguno de los casos anteriores coincide.

~~~javascript
    $dia: texto = "martes";
    según ($dia) {
        caso ("lunes"):
            imprimir("Inicio de semana");
            romper;
        caso ("martes"):
            imprimir("Segundo día");
            romper;
        caso ("viernes"):
            imprimir("Casi fin de semana");
            romper;
        pordefecto:
            imprimir("Día normal");
    }
~~~

## Bucle `mientras`

El bucle `mientras` permite repetir un bloque de código mientras se cumpla una condición específica. Aquí un ejemplo:

~~~javascript
    $i: Número = 1;
    mientras ($i <= 5) {
        imprimir("Contando: " + $i);
        $i = $i + 1;
    }
~~~
