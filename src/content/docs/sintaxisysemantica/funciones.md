---
title: Funciones
sidebar:
  order: 4
---

## Funciones

En Librescript, las funciones se definen utilizando la palabra clave funcion. No se admite la sobrecarga de funciones, pero los parámetros pueden tener valores por defecto.

### Sintaxis

Una función en Librescript debe seguir esta estructura:

1. **La palabra reservada `funcion`** para declarar la función.
2. **El nombre de la función**.
3. **Paréntesis `()`** que encierran los parámetros esperados (si los hay).
4. Cada parámetro debe declararse con `$`, seguido de su `nombre`, `:`  y el  tipo de dato esperado como paramtero.
5. **Dos puntos `:`** después de los paréntesis para indicar el tipo de dato que la función devolverá.
6. **Llaves `{}`** para delimitar el bloque de código de la función.
7. **La palabra reservada `devolver`**, utilizada para retornar un valor de la función.

~~~typescript
    funcion calcularProducto($a: numero, $b: numero): numero { 
        devolver $a * $b; 
    }
~~~
