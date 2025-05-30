---
    title: Clases y Objetos
    sidebar: 
        order: 15
---

LibreScript soporta la Programación Orientada a Objetos (POO) a través de clases, permitiendo la creación de objetos que encapsulan datos (propiedades) y comportamiento (métodos).

* **Declaración de Clase:** Se usa la palabra clave `clase` seguida del nombre de la clase (que usará `IDENTIFICADOR_GRAL`). El cuerpo de la clase se encierra entre llaves `{}`.

  * **Propiedades:** Las propiedades se declaran con un nombre (que usará `IDENTIFICADOR_GRAL`) seguido de dos puntos `:` y su tipo.  
    * **Propiedades Privadas:** Se usa el prefijo `#` para indicar que una propiedad es privada (ej: `#nombrePrivado`). Estas propiedades solo son accesibles desde dentro de la clase. El lexer ya tokeniza esto, y el analizador semántico deberá aplicar la restricción de acceso.  
    * **Propiedades Públicas:** No llevan prefijo (ej: `edad`). Son accesibles desde cualquier lugar.  
* **Constructor:** Es un método especial nombrado **`constructor`** que se ejecuta al crear una nueva instancia de la clase. Recibe parámetros para inicializar las propiedades del objeto. Dentro del constructor y otros métodos de instancia, se utiliza la palabra clave **`este`** para referirse al objeto actual y acceder a sus propiedades y métodos.  
* **Métodos:** Son funciones declaradas dentro de una clase. Siguen la misma sintaxis que las funciones globales (excepto por la palabra clave `funcion` dentro de la clase).  
  * Ejemplo: `nombreDeMetodo(parametros): tipoRetorno { ... }`  
  * Los métodos pueden ser públicos o privados. Por defecto serán públicos.

**Creación de Objetos:** Se utiliza la palabra clave **`nuevo`** seguida del nombre de la clase y los argumentos para el constructor entre paréntesis `()`.

* Ejemplo: `$juan: Persona = nuevo Persona("Juan", 30);`

**Acceso a Miembros:**

* Se utiliza el operador de punto (`.`) para acceder a las propiedades y métodos de un objeto.  
* Ejemplo de acceso a propiedad: `$juan.edad`  
* Ejemplo de llamada a método: `$juan.saludar()`

**Declaración de clase simple:**

```ts
clase Persona {  
  #nombrePrivado: texto; // Propiedad privada (para verificación semántica)  
  edad: numero; // Propiedad pública

  constructor($nombre: texto, $edadInicial: numero) {  
    este.nombrePrivado \= $nombre;  
    este.edad \= $edadInicial;  
  }

  saludar(): texto { //metodo publico  
    devolver "Hola, mi nombre es " \+ este.nombrePrivado \+ " y tengo " \+ este.edad \+ " años.";  
  }

  // Ejemplo de método con parámetro  
  cambiarEdad($nuevaEdad: numero): vacio {  
      este.edad \= $nuevaEdad;  
  }  
}
```

**Creación de objeto:**

```ts
    $juan: Persona \= nuevo Persona("Juan", 30);  
    imprimir($juan.saludar());

    // Acceso y asignación de propiedad pública  
    $juan.edad \= 31;  
    imprimir("Nueva edad de Juan: " \+ $juan.edad);

    // Llamada a método  
    $juan.cambiarEdad(32);  
    imprimir($juan.saludar());
```
