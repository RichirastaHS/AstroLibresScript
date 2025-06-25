---
 title: Tipos de datos
 sidebar:
    order: 0

---
En librescript, el **tipado es obligatorio**.

**`numero`**: Abarca tanto enteros como números con decimales.

* Ejemplo de declaración y asignación:

    ```ts

    $a: numero = 0;

    ```

**`texto`**: Para cadenas de texto.

* Ejemplo de declaración y asignación:

    ```ts
    $mensaje: texto = "Hola, librescript!";
    ```

**`booleano`**: Para valores lógicos verdadero y falso.

* Ejemplo de declaración y asignación:

    ```ts
    $estaHecho: booleano = falso;
    $ejemplo: booleano = verdadero;
    ```

**`Objeto`**: Para representar estructuras de datos con pares clave-valor.

* Ejemplo de declaración y asignación:

    ```ts
    $persona: Objeto = {nombre: "Ana"};
    ```

**`Arreglos (Arrays)`**: Se definen con `[]` después del tipo base.

* Ejemplo de declaración y asignación de un arreglo de texto:

    ```ts
    $nombres: texto[] = ["Ana", "Luis", "Carlos"];
    ```
