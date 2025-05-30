---
    title: Funciones
    sidebar: 
        order: 12
---

En LibreScript, las **funciones** son bloques de código reutilizables diseñados para realizar tareas específicas. Permiten organizar el código de manera modular y mejorar la legibilidad.

## **Palabra clave:** **`funcion`**

**Nombre de la función:** Los nombres de las funciones siguen las reglas del token **`IDENTIFICADOR_GRAL`** (alfanumérico, empieza con letra, sin el prefijo `$`). Esto proporciona coherencia con el estilo de TypeScript para nombres de funciones.

* Ejemplo: `saludar`, `sumar`, `esMayor`.

**Parámetros:** Se declaran dentro de los paréntesis `()` después del nombre de la función. Cada parámetro debe tener un **nombre de variable con prefijo `$` y su tipo explícito**, separados por dos puntos `:`. Los parámetros se separan por comas.

* Ejemplo: `($a: numero, $b: numero)`

**Tipo de Retorno:** Es **obligatorio** especificar el tipo de valor que la función devuelve después de los paréntesis de los parámetros, usando dos puntos `:`.

* Para funciones que no devuelven explícitamente un valor, se utiliza el tipo **`vacio`**.

**Sintaxis General:**

```ts
    funcion nombreDeFuncion(parametro1: tipo1, parametro2: tipo2, ...): tipoDeRetorno {

    // Cuerpo de la función

    // ...

    devolver valor; // Obligatorio si el tipoDeRetorno no es 'vacio'
    }
```

**Ejemplos declaración de funciones:**

```ts
    funcion saludar(): texto {

        imprimir("¡Hola desde la función\!");

        devolver "Saludo completado";

    }
```

```ts
    funcion sumar($a: numero, $b: numero): numero {

    devolver $a \+ $b;

    }
```

```ts
    funcion esMayor($num1: numero, $num2: numero): booleano {

    devolver $num1 \> $num2;

    }
```

```ts
    // Función que no devuelve ningún valor

    funcion mostrarMensaje($msg: texto): vacio {

        imprimir("Mensaje:", $msg);

    }
```

### Llamada a Funciones

Para **invocar una función**, se utiliza su nombre seguido de paréntesis `()` que contienen los argumentos (valores reales) correspondientes a sus parámetros, separados por comas.

* **Sintaxis de Invocación:** `nombreDeFuncion(argumento1, argumento2, ...);`

* **Asignación de Retorno:** Si una función devuelve un valor (es decir, su tipo de retorno no es `vacio`), este valor puede ser **asignado directamente a una variable**. Es crucial que el tipo de la variable receptora coincida con el tipo de retorno de la función.

  * Sintaxis: `$variable: tipo = nombreDeFuncion(argumento1, ...);`

```ts
    // Llamada a función que devuelve texto  
    $mensaje: texto \= saludar();  
    imprimir($mensaje); // Salida: "Saludo completado"

    // Llamada a función con parámetros y retorno numérico  
    $suma: numero \= sumar(10, 5);  
    imprimir("La suma es: " \+ $suma); // Salida: "La suma es: 15"

    // Llamada a función con retorno booleano  
    $mayor: booleano \= esMayor(7, 3);  
    imprimir("¿7 es mayor que 3? " \+ $mayor); // Salida: "¿7 es mayor que 3? verdadero"

    // Llamada a función que no devuelve valor  
    mostrarMensaje("LibreScript es genial."); // Salida: "Mensaje: LibreScript es genial."
```
