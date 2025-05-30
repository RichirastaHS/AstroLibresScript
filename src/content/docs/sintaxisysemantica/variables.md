---
title: Variables
sidebar:
  order: 2
---
## Declaración y Asignación de Variables en LibreScript

**Prefijo para Variables:** El signo de **dólar (`$`)** es un prefijo **obligatorio** para todas las variables.

* Ejemplo:

    ```ts
    $miVariable
    ```

**Separador de Tipo y Nombre:** El **colon (`:`)** es el separador entre el nombre de la variable y su tipo.

* Ejemplo:

    ```ts
        $nombre: texto
    ```

### Declaración Explícita

La declaración de variables es **explícita**, lo que significa que siempre debe indicarse el tipo de dato de la variable. No se utilizan palabras clave como `var`, `let` o `const`. La mera presencia de `$nombre: tipo` ya indica una declaración.

* Ejemplo:

    ```ts
        $cantidad: numero = 100;
    ```

**Tipado Obligatorio e Inmutable:** En LibreScript, el tipo de cada variable debe ser declarado explícitamente y **no se puede cambiar** una vez asignado.

* Ejemplo:

    ```ts
        $edad: numero = 25; //(No puedes cambiar `$edad` a tipo `texto` más tarde).
    ```

**Declaración de Constantes:** Se utiliza el prefijo **doble dólar (`$$`)** para declarar una constante. Una constante **no puede cambiar su valor** una vez definido.

* Ejemplo:

    ```ts
        $$PI: numero = 3.1416;
    ```

**Conversión de Tipos:** La conversión de tipos debe ser **explícita** y se realiza mediante funciones específicas: `aNum()`, `aTxt()`, `aBool()`.

* Ejemplo:

    ```ts
        $a: numero \= 5;

        $b: texto \= "5";

        $suma: numero \= $a \+ aNum($b);
    ```

**Reasignación:** Una vez declarada una variable (que no sea una constante `$$`), se le puede asignar un nuevo valor utilizando el **operador de asignación (`=`)**. Es importante que el nuevo valor **coincida con el tipo declarado** de la variable.

```ts
    $a: numero \= 10; // Declaración inicial

    $a \= 20;         // Reasignación del valor (el tipo de $a sigue siendo 'numero')

    $mensaje: texto \= "Hola";

    $mensaje \= "Adiós"; // Reasignación de una cadena
    
```
