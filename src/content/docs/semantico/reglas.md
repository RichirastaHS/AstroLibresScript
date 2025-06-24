---
title: Reglas semánticas del lenguaje 
sidebar:
  order: 2
---
LibreScript, como lenguaje de tipado fuerte y explícito, debe cumplir con varias reglas semánticas para que un programa sea considerado válido y tenga un significado consistente. El analizador semántico es la fase del compilador responsable de hacer cumplir estas reglas. A continuación, se enumeran las principales categorías de reglas semánticas que LibreScript valida, junto con ejemplos de código que cumplen con ellas y ejemplos que generarán errores semánticos.

### Reglas de Declaración y Ámbitos

Todos los identificadores (variables, constantes, funciones, clases) deben ser declarados antes de su uso. La redeclaración de un identificador en el mismo ámbito no está permitida. Los ámbitos definen la visibilidad y el tiempo de vida de los identificadores.

* **Variables y Constantes Declaradas Únicamente:**
  * **Cumplimiento:**
        ```librescript
        $contador: numero = 0; // Declaración válida y única
        $contador = $contador + 1; // Uso válido de la variable declarada
        ```
  * **Error (Redeclaración):**
        ```librescript
        $miVar: texto = "Hola";
        $miVar: numero = 123; // Error: '$miVar' ya ha sido declarado en este ámbito.
        ```
  * **Error (Uso antes de Declaración):**
        ```librescript
        imprimir($desconocida); // Error: El identificador '$desconocida' no ha sido declarado.
        ```

* **Ámbitos de Bloque:** Los identificadores declarados dentro de bloques (`{...}` asociados a `si`, `mientras`, `funcion`, `clase`, etc.) son locales a ese bloque y no son visibles fuera de él una vez que el bloque finaliza.
  * **Cumplimiento:**
        ```librescript
        si (verdadero) {
            $temp: numero = 10;
            imprimir($temp); // Válido: $temp está en su ámbito de declaración
        }
        // Después de este bloque, $temp ya no es accesible.
        ```
  * **Error (Acceso fuera de Ámbito):**
        ```librescript
        si (verdadero) {
            $temp: numero = 10;
        }
        imprimir($temp); // Error: El identificador '$temp' no ha sido declarado en este ámbito.
        ```

### Reglas de Tipado

LibreScript impone un sistema de tipado estático y fuerte. Esto significa que las operaciones y asignaciones deben respetar la compatibilidad de tipos en tiempo de compilación.

* **Asignaciones Consistentes:** El tipo del valor en el lado derecho de una asignación debe ser compatible con el tipo declarado de la variable o constante en el lado izquierdo.
  * **Cumplimiento:**
        ```librescript
        $edad: numero = 25; // OK: Asignación de 'numero' a 'numero'
        $nombre: texto = "Juan"; // OK: Asignación de 'texto' a 'texto'
        ```
  * **Error (Tipo Inconsistente en Asignación):**
        ```librescript
        $edad: numero = "veinte"; // Error: No se puede asignar 'texto' a una variable de tipo 'numero'.
        ```

* **Operaciones Aritméticas y Lógicas:** Los operadores binarios y unarios tienen requisitos específicos sobre los tipos de sus operandos.
  * **Cumplimiento:**
        ```librescript
        $a: numero = 10;
        $b: numero = 20;
        $res: numero = $a + $b; // OK: Suma de dos números
        $esMayor: booleano = ($a > $b); // OK: Comparación relacional de números
        $x: booleano = verdadero;
        $y: booleano = falso;
        $z: booleano = $x && $y; // OK: Operación lógica AND de booleanos
        ```
  * **Error (Operación de Tipos Incompatibles):**
        ```librescript
        $num: numero = 5;
        $cad: texto = "abc";
        $res: numero = $num * $cad; // Error: Operación '*' no definida para 'numero' y 'texto'.
        ```
  * **Error (Operador Unario Incompatible):**
        ```librescript
        $estaListo: booleano = verdadero;
        $negado: numero = -$estaListo; // Error: Operador unario '-' no definido para 'booleano'.
        ```

* **Conversiones Implícitas (Limitadas):** LibreScript minimiza las conversiones implícitas para evitar comportamientos inesperados. Las conversiones entre tipos numéricos (ej., entero a flotante si `numero` se subdivide) pueden ser implícitas, pero las conversiones entre tipos fundamentalmente diferentes (ej., `numero` a `texto` o viceversa) generalmente requerirán el uso de funciones de conversión explícitas.

### Reglas de Llamadas a Funciones y Métodos

Las llamadas a funciones y métodos deben coincidir con su definición en términos del número de argumentos y sus tipos.

* **Número de Argumentos Correcto:**
  * **Cumplimiento:**
        ```librescript
        funcion saludar($nombre: texto) { imprimir("Hola", $nombre); }
        saludar("Ana"); // OK: Coincide el número de argumentos (1)
        ```
  * **Error (Número Incorrecto de Argumentos):**
        ```librescript
        saludar(); // Error: La función 'saludar' espera 1 argumento, pero recibió 0.
        saludar("Ana", "Luis"); // Error: La función 'saludar' espera 1 argumento, pero recibió 2.
        ```
* **Tipos de Argumentos Correctos:**
  * **Cumplimiento:**
        ```librescript
        funcion sumar($a: numero, $b: numero): numero { devolver $a + $b; }
        $resultado: numero = sumar(5, 10); // OK: Tipos de argumentos coinciden
        ```
  * **Error (Tipo de Argumento Incorrecto):**
        ```librescript
        $resultado: numero = sumar(5, "diez"); // Error: El argumento 2 de 'sumar' debe ser 'numero', pero se recibió 'texto'.
        ```

### Reglas para Estructuras de Control

Ciertas partes de las estructuras de control tienen requisitos de tipo específicos para asegurar un flujo de ejecución coherente.

* **Condiciones Booleanas:** Las expresiones utilizadas como condiciones en estructuras como `si`, `mientras` y `para` deben evaluarse a un tipo booleano.
  * **Cumplimiento:**
        ```librescript
        $esValido: booleano = verdadero;
        si ($esValido) { // OK: La condición es booleana
            // ...
        }
        ```
  * **Error (Condición No Booleana):**
        ```librescript
        $num: numero = 10;
        mientras ($num) { // Error: La condición del bucle 'mientras' debe ser de tipo 'booleano'.
            // ...
        }
        ```

* **Sentencias `romper` y `devolver`:**
  * **`romper`:** Solo puede aparecer dentro de un contexto de bucle (`mientras`, `para`) o una sentencia `segun`.
    * **Error (`romper` fuera de contexto):**
            ```librescript
            romper; // Error: La sentencia 'romper' debe estar dentro de un bucle o 'segun'.
            ```
  * **`devolver`:** Solo puede aparecer dentro del cuerpo de una función. Si la función declara un tipo de retorno, el valor devuelto por `devolver` debe ser compatible con ese tipo.
    * **Error (`devolver` fuera de función):**
            ```librescript
            $a: numero = 10;
            devolver $a; // Error: La sentencia 'devolver' debe estar dentro de una función.
            ```
    * **Error (Tipo de Retorno Inconsistente):**
            ```librescript
            funcion obtenerTexto(): texto {
                devolver 123; // Error: La función 'obtenerTexto' debe devolver 'texto', pero se devuelve 'numero'.
            }
            ```

La aplicación rigurosa de estas reglas semánticas es fundamental para garantizar que el código de LibreScript sea robusto, predecible y que los errores lógicos se capturen lo antes posible en el ciclo de desarrollo.
