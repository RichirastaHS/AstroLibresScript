---
title: Entradas y Salidas
sidebar:
    order: 11
---

La función imprimir() se utiliza para mostrar información en la consola.  

**Permite múltiples argumentos:** Puedes pasar uno o varios argumentos separados por comas. Cada argumento se convertirá automáticamente a su representación de texto antes de ser mostrado.  

**Tipos de datos:** Puede imprimir cualquier tipo de dato (`numero`, `texto`, `booleano`, `Objeto`, arreglos). Para `Objeto` y arreglos, se mostrará una representación de texto genérica (similar a `[object Object]` o `1,2,3` para arreglos.  

**Salto de línea:** Cada llamada a `imprimir()` termina con un salto de línea por defecto, es decir, el siguiente `imprimir()` comenzará en una nueva línea.

```ts
    $nombre: texto \= "Mundo";  
    $edad: numero \= 30;  
    $esActivo: booleano \= verdadero;  
    $miObjeto: Objeto \= {clave: "valor"};  
    $misNumeros: numero\[\] \= \[1, 2, 3\];

    imprimir("Hola,", $nombre, "\!");  
    imprimir("Tienes", $edad, "años.");  
    imprimir("Activo:", $esActivo);  
    imprimir("Mi objeto:", $miObjeto); // Imprimirá una representación de texto del objeto  
    imprimir("Mis números:", $misNumeros); // Imprimirá una representación de texto del arreglo
```

## Entrada de Datos

La función **`leer()`** se utiliza para obtener una línea de texto del usuario a través de la consola.

**Sintaxis:** `$variable: tipo = leer();`

**Devuelve `texto`:** La función `leer()` siempre devuelve el valor introducido por el usuario como una cadena de texto (`texto`).

**Conversión explícita:** Si necesitas el valor en otro tipo (como `numero` o `booleano`), deberás usar las funciones de conversión explícita (`aNum()`, `aBool()`)

```ts
    $nombreUsuario: texto;

    imprimir("Por favor, ingresa tu nombre:");

    $nombreUsuario \= leer();

    imprimir("¡Hola,", $nombreUsuario, "\!");

    $edadTexto: texto;

    $edadNumero: numero;

    imprimir("Ingresa tu edad:");

    $edadTexto \= leer();

    $edadNumero \= aNum($edadTexto); // Convertir a número

    imprimir("Tu edad es:", $edadNumero);
```
