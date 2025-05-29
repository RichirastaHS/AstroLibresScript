---
title: Variables
sidebar:
  order: 2
---

## Variables

En librescript, se deben tener en cuenta las siguientes reglas que debe cumplir una variable:

1. Es obligatorio el uso del signo `$` para declarar una variable.
2. La declaración de variables es explícita, lo que significa que siempre debe indicarse el tipo de dato de la variable.
3. No puede comenzar con un número ni contener caracteres especiales excepto ( `_` ).  
4. El lenguaje es sensible a mayúsculas y minúsculas, por lo que `$variable`, `$Variable` y `$VARIABLE` serían identificadores distintos.

### Sintaxis

En Librescript, la sintaxis de para la declaración de variables deben hacerse con los elementos en el siguiente orden:

1. **El símbolo `$`:** que indica la declaración de una variable mutable, `$$` indica la declaración de una constante.

~~~javascript
    $nombre = "Juan";  // Variable mutable

    $$PI = 3.1416;     // Constante (doble '$')
~~~

2. **El nombre de la variable**, que debe seguir las reglas de nomenclatura del lenguaje.

3. **`:` (anotación de tipo):** Especifica el tipo de dato de la variable. Es obligatorio y debe colocarse después del nombre de la variable.

4. **El tipo de dato:** que puede ser `numero`, `texto` o `booleano`.

5. **El operador de asignación `=`**, que se usa para asignar un valor inicial obligatorio a la variable.

Correcto

~~~javascript
    Correcto:
    $edad: numero = 25;
    $nombre: texto = "Juan";
    $activo: booleano = verdadero;
~~~

Incorrecto

~~~javascript
    edad: numero = 25; //No se usa el simbolo $ para declarar la variable
    $nombre = "Juan"; //No se especifica el tipo de dato
    $activo@: booleano = 12; //El nombre de la variable no es válido
~~~
