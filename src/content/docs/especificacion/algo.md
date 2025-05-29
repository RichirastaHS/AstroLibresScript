---
title: uabjo
---


## **2.4. Operadores Matemáticos y Lógicos**

### **2.4.1. Operadores Matemáticos**

Los operadores matemáticos se utilizan para realizar operaciones aritméticas. Ejemplos:

`+	Suma	$total = $a + $b`

`-	Resta	$diferencia = $a - $b`

`*	Multiplicación	$producto = $a * $b`

`/	División	$cociente = $a / $b`

`%	Módulo (residuo)	$resto = $a % $b`

`**	Potencia	$resultado = $a ** $b`

| `Operador` | `Operación` | `Ejemplo` |
| :---- | :---- | :---- |
| `+` | `Suma` | `$total = $a + $b;` |
| `-` | `Resta` | `$diferencia = $a - $b;` |
| `*` | `Multiplicación` | `$producto = $a * $b;` |
| `/` | `División` | `$cociente = $a / $b;` |
| `%` | `Módulo (residuo)` | `$resto = $a % $b;` |
| `**` | `Potencia` | `$resultado = $a ** $b;` |

### 

### **2.4.2. Operadores de Comparación**

Los operadores de comparación se utilizan para comparar valores:

`==	Igual a	si ($a == $b)`

`!=	Distinto de	si ($a != $b)`

`<	Menor que	si ($a < $b)`

`>	Mayor que	si ($a > $b)`

`<=	Menor o igual que	si ($a <= $b)`

`>=	Mayor o igual que	si ($a >= $b)`

| `Operador` | `Operación` | `Ejemplo` |
| :---- | :---- | :---- |
| `==` | `Igual a` | `si ($a == $b)` |
| `!=` | `Distinto de` | `si ($a != $b)` |
| `<`  | `Menor que` | `si ($a < $b)` |
| `>`  | `Mayor que` | `si ($a > $b)` |
| `<=` | `Menor o igual que` | `si ($a <= $b)` |
| `>=` | `Mayor o igual que` | `si ($a >= $b)` |

### 

### 

### **2.4.3. Operadores Lógicos**

Los operadores lógicos se usan para realizar combinaciones de condiciones:

`&&	Y lógico (AND)	si ($a > 0 && $b > 0)`	

`||	O lógico (OR)		si ($a > 0 || $b > 0)`	

`!	Negación (NOT)	si (! $activo)`

| `Operador` | `Operación` | `Ejemplo` |
| :---- | :---- | :---- |
| \== | && Y lógico (AND | si ($a \> 0 && $b \> 0\) |
| || | || O lógico (OR) | si ($a \> 0 || $b \> 0\)   |
| \! | \! Negación (NOT) |  si (\! $activo)   |

## 

## **2.5. Manejo de Cadenas de Texto**

Las cadenas de texto se pueden manejar utilizando comillas dobles o simples. Aquí tienes un ejemplo de cómo concatenar texto en CodeScript:

`texto: texto= "Hola, mundo";   // También se puede hacer con comillas simples`

`nombre: texto = 'Juan';`

`saludo: texto = "Hola, " + $nombre + "!";` 

`saludo: texto = "Hola,  {{$nombre}}  !";`  

`imprimir(saludo);  // Salida: "Hola, Juan!"`

Ambos métodos de concatenación deben ser válidos.

## **2.6. Estructuras de Datos**

### **2.6.1. Arreglos (Arrays)**

Los arreglos se utilizan para almacenar múltiples valores. Aquí un ejemplo de un arreglo de números y cómo acceder o modificar elementos:

`$numeros: arreglo[] = [1, 2, 3, 4, 5];` 

`$numeros[2] = 10; // Para cambiar un valor`

`longitud = $numeros.longitud;`

`$numeros.agregar(6);`

`$numeros.eliminarUltimo();`

### 

### **2.6.2. Objetos**

Un objeto se utiliza para agrupar datos relacionados, y se define con una lista de propiedades y valores:

`$nombres: texto[] = ["Ana", "Luis", "Carlos"];`

`$persona: Objeto = {`

    `nombre: "Juan",`

    `edad: 30,`

    `activo: verdadero`

`};`

### **2.6.3. Matrices**

Las matrices bidimensionales son arreglos de arreglos, y se pueden usar para almacenar datos en forma de tabla:

`$matriz: Número[][] = [`

    `[1, 2, 3],`

    `[4, 5, 6],`

    `[7, 8, 9]`

`];`

## 

## **2.2 Semántica: Cómo funciona el código**

### **2.1. Manejo de tipos**

En librescript, el **tipado es obligatorio**. Esto significa que no se permite la inferencia de tipos, y todas las variables deben ser explícitamente declaradas con un tipo específico. Esta restricción mejora la claridad y la previsibilidad del código. 

Ejemplo:

`$nombre: texto = "Ana";`

`$edad: Número = 22;`

`$activo: Booleano = verdadero;`

La conversión de tipos debe ser explícita. Con una función como `convertir_a(tipo, valor)`. Ejemplo:

`$a: numero = 5;`  
`$b: texto = ”5”`

`$suma: numero = $a + aNum($b); // Función dedicada para convertir a número`

`$booleano = aBool($num); // Función para convertir a booleano`

### **2.2. Ámbito de variables y alcance**

Las **variables locales** están restringidas al bloque de código donde fueron declaradas. Las **variables globales** son accesibles desde cualquier parte del programa, pero su uso debe ser manejado con cuidado para evitar confusión o errores de alcance.

* Las variables declaradas dentro de una función no son accesibles fuera de ella.  
* Las variables globales son accesibles dentro de funciones, pero no se recomienda su uso extensivo.

Ejemplo:

`// Variable global`

`$global:texto = "Variable global";`

`funcion miFuncion() {`

    `// Variable local`

    `$local:texto = "Variable local";`

    

    `si ($global == "Variable global") {`

        `$mensaje:texto = "Acceso a variable global dentro de la función";`

        `imprimir($mensaje);  // "Acceso a variable global dentro de la función"`

    `}`

    `imprimir($local);  // "Variable local"`

`}`

`miFuncion();`

`imprimir($global);  // "Variable global"`

`imprimir($local);  // Error: $local no está definido fuera de la función`

### **2.3. Manejo de Memoria**

librescript gestiona la memoria de manera **automática**. No hay punteros como en lenguajes como C, lo que simplifica el manejo de la memoria y reduce el riesgo de errores de memoria, como los desbordamientos de búfer.

### **2.4. Evaluación de Expresiones**

La evaluación de expresiones sigue un **orden de operaciones estándar**, de izquierda a derecha, siguiendo las prioridades de los operadores matemáticos y lógicos.

Ejemplo:

`$resultado: numero = 2 + 3 * 4;  // Resultado = 2 + (3 * 4) = 14`

`$valor: numero = (2 + 3) * 4;     // Resultado = (2 + 3) * 4 = 20`

`$texto: texto = "Hola" + " Mundo";  // Concatenación de cadenas`

### **2.5. Paso de Parámetros en Funciones**

En librescript, el paso de parámetros en funciones se realiza **por valor**. Esto significa que cualquier cambio realizado sobre los parámetros dentro de la función no afecta las variables originales fuera de ella.

Ejemplo:

`funcion incrementar($numero: numero) {`

    `$numero = $numero + 1;`

    `imprimir("Dentro de la función: " + $numero);`

`}`

`$x: numero = 5;`

`incrementar($x);`

`imprimir("Fuera de la función: " + $x);  // Sigue siendo 5`

### **2.6. Evaluación de Expresiones Booleanas y Cortocircuito**

En las expresiones booleanas, librescript realiza **evaluación de cortocircuito**, es decir, si una condición ya es suficiente para determinar el resultado de la expresión, no evalúa el resto de las condiciones. Esto puede optimizar el rendimiento y evitar errores.

Ejemplo:

`$a: numero = 0;`

`$b: numero = 5;`

`si ($a != 0 && $b / $a > 2) {`

    `imprimir("Se cumple");`

`} siNo {`

    `imprimir("No se cumple"); // Se imprime esto, porque $a != 0 es falso y no evalúa el segundo.`

`}`

# **3\. Crear la Especificación Formal**

## **3.1 Elementos Fundamentales de la Especificación**

### **3.1.1. Palabras clave reservadas:**

* **si**: Condicional  
* **siNo**: Condicional alternativo  
* **segun**: Switch  
* **caso**: Caso dentro de un switch  
* **porDefecto**: Default en un switch  
* **romper**: Para salir de un switch o bucle  
* **mientras**: While loop  
* **para**: For loop  
* devolver  
* 

### **3.1.2. Reglas para la Declaración de Variables**

Las variables deben declararse con un tipo específico (número, texto, booleano). No se permite la inferencia automática.

Siempre tiene que usarse el signo $ en cada inicio de variable.

si es una variable constante se le asigna doble signo $$

Ejemplo:

`$color: texto = "verde";`

`$$pi: numero = “3.1416”;`

### **3.1.3. Operadores y su Prioridad**

Los operadores matemáticos y lógicos siguen una prioridad estándar. La prioridad de los operadores es importante para evitar errores en la evaluación de las expresiones.

Ejemplo:

`$valor: numero = 3 + 2 * 4;  // Resultado = 3 + (2 * 4) = 11`

### **3.1.4. Reglas de Bloques de Código**

Los bloques de código se definen utilizando **llaves** `{}`. Cada bloque es independiente y se ejecuta de acuerdo con las condiciones que se definan.

Ejemplo:

`segun ($color) {`

    `caso "rojo": imprimir("Color cálido"); romper;`

    `caso "azul": imprimir("Color frío"); romper;`

    `caso "verde": imprimir("Color neutro"); romper;`

    `pordefecto: imprimir("Color desconocido");`

`}`

### **3.1.5. Reglas de Funciones**

Las funciones deben declararse explícitamente con la palabra clave **funcion**, seguida de los parámetros que aceptan. El tipo de datos de los parámetros y el tipo de retorno son obligatorios.

Ejemplo:

`funcion sumar($a: numero, $b: numero): numero {`

    `devolver $a + $b;`

`}`

### **3.1.6. Tipos de Datos Soportados**

**librescript** tiene un sistema de tipado **estricto**, lo que significa que cada variable debe declararse explícitamente con su tipo. Esto ayuda a evitar errores que podrían surgir si se permitiera la inferencia automática de tipos.

Los tipos de datos que se soportan en **librescript** son:

1. **texto** (cadena de texto): Se utiliza para almacenar secuencias de caracteres.

   * Ejemplo: `$mensaje: texto = "Hola, librescript!"`  
2. **numero** (números enteros y flotantes): Este tipo cubre tanto enteros como números con decimales.

   * Ejemplo: `$contador: numero = 42`  
3. **booleano** (valor verdadero o falso): Este tipo es utilizado para almacenar valores lógicos de **verdadero** o **falso**.

   * Ejemplo: `$estaHecho: booleano = falso`

**Reglas Importantes**

* **Tipado Obligatorio:** En **librescript**, el tipo de cada variable debe ser declarado explícitamente, y no se puede cambiar una vez asignado.  
  * Ejemplo: `$edad: numero = 25;` No puedes cambiar `$edad` a tipo `texto` más tarde.  
* **Notación de Tipo:** Para declarar una variable con su tipo, se usa el símbolo **:** seguido del tipo de dato.  
  * Ejemplo: `$nombre: texto = "Ana";`

### **3.1.7. Reglas de Control de Flujo**

Los controles de flujo son fundamentales para la toma de decisiones y la iteración en librescript. Las estructuras `si`, `siNo`, `segun`, `mientras`, y `para` controlan el flujo del programa.

Ejemplo:

`$i: numero = 1;`

`mientras ($i <= 3) {`

    `imprimir("Iteración: " + $i);`

    `$i = $i + 1;`

`}`

`para ($i: numero = 0; $i < 5; $i = $i + 1) {`

    `imprimir("Valor de i: " + $i);`

`}`

### **3.1.8. Gestión de Memoria**

librescript maneja la memoria de manera automática y no requiere intervención directa del programador. No existen punteros como en otros lenguajes (como C), lo que simplifica la programación y evita errores comunes relacionados con la memoria.

### **3.1.9. Paralelismo y Concurrencia**

librescript está diseñado para ser un lenguaje **secuencial**, lo que significa que no tiene una gestión explícita de paralelismo o concurrencia. Si se necesita manejar tareas en paralelo, se tendría que recurrir a mecanismos externos o bibliotecas especializadas, que podrían crearse en el proceso.

### **3.1.10. Sistema de Entrada y Salida**

La entrada y salida de datos se maneja a través de la función **imprimir** para mostrar información al usuario. No se especifica cómo se maneja la entrada de datos, ya que esto puede depender de la implementación del entorno donde se ejecute librescript.

### **3.1.11. Ecosistema y Herramientas**

librescript es un lenguaje de propósito general que permite la creación de scripts sencillos y rápidos. Las herramientas de desarrollo y el ecosistema alrededor de librescript podrían incluir un entorno de ejecución, depuradores y documentación en línea.

| Palabras Reservadas |  |  |  |
| :---: | :---: | ----- | ----- |
| **Palabra Reservada** | **Lenguaje español** | **Descripción** | **Ejemplo de Uso** |
| **`if`** | **si** | Define una condición en una estructura de control. | `si ($x > 0) { imprimir("Positivo"); }` |
| **`else`** | **sino** | Se usa junto con `if` para definir una alternativa. | `si ($x > 0) {...} siNo { imprimir("Negativo"); }` |
| **`for`** | **para** | Inicia un bucle de repetición con un contador. | `para ($i:numero = 0; $i < 10; $i++) { ... }` |
| **`while`** | **mientras** | Ejecuta un bloque de código mientras una condición sea verdadera. | `mientras ($x < 5) { $x++; }` |
| **`switch`** | **según** | Controla el flujo de ejecución mediante casos específicos. | `segun ($opcion) { caso "a": imprimir("A"); romper; }` |
| **`return`** | **devolver** | Devuelve un valor desde una función o método. | `devolver $suma;` |
| **`class`** | **clase** | Define una nueva clase en programación orientada a objetos. | `clase Persona { ... }` |
| **`new`** | **nuevo** | Crea una nueva instancia de un objeto. | `$p = nuevo Persona();` |
| **`break`** | **romper** | Termina un bloque dentro de `segun` | `romper;` |
| `case` | **caso** | Marca cada opción en `segun`. | `caso "X": imprimir("Caso X");` |
| **`default`** | **pordefecto** | caso por defecto | `pordefecto: imprimir("Otro caso");` |
| **`function`** | **funcion** | funcion | `funcion sumar($a: numero, $b: numero)` |
| **`object`** | **objeto** |  | `$numeros: arreglo[] = [1, 2, 3, 4, 5];` |
| **`array`** | **arreglo** |  | `$persona: Objeto = {}` |

 

| `Tipos de Datos` |  |  |  |
| :---: | :---: | :---: | :---: |
| **Palabra Clave** | **Lenguaje español** | **Descripción** | **Ejemplo de Uso** |
| **string** | texto | Secuencia de caracteres utilizada para representar texto. | $mensaje: texto= "Hola, Nestor" |
| **number** | numero | Representar todos los números enteros o de coma flotante. | $num: numero \= 1; |
| **boolean** | booleano | Dato que solo puede tener dos valores: verdadero o falso. | $a: booleano \= verdadero $b: booleano \= falso |
| **array\[\]** | arreglo\[\] | Lista de elementos del mismo tipo | $numeros: numero\[\] \= \[1,2,3\]; |
| **Object** | objeto | Colección clave-valor | $persona: Objeto \= {nombre: "Ana"} |
| **Matrix** | matriz | Arreglo bidimensional | $matriz: numero\[\]\[\] \= \[\[1,2\]\]; |

| Operadores Matemáticos |  |  |
| :---: | ----- | ----- |
| **Signo** | **Descripción** | **Ejemplo de uso** |
| **\+** | suma de operandos o concatenación | $a: numero \= 2; $b: numero \= 3;  $suma: numero \= a \+ b; |
| **\-** | resta el segundo operando del primero | $resta: numero \= a \- b; |
| **\*** | multiplicación de operandos | $multiplica: numero \= a \* b; |
| **/** | divide el primer operando del segundo | $divide: numero \= a / b; |
| **%** | Obtiene el residuo de una división | $residuo: numero \= a % b; |
| **\*\*** | potencia | $potencia: numero \= 2 \*\* 3; // igual a 8 |
| **\++** | incremento | $x++;  // igual a 6 |
| **\--** | decremento | $x--;  // igual a 5 |

| Operadores de comparación |  |  |  |
| :---: | :---: | ----- | ----- |
| **Signo** | **Nombre** | **Descripción** | **Ejemplo** |
| \= | Igual | Asigna un valor a una variable. | $entero x \= 10 |
| \> | Mayor que | Comprueba si el valor de la izquierda es mayor que el de la derecha. | si($a \> $b) devolver falso |
| \< | Menor que | Comprueba si el valor de la izquierda es menor que el de la derecha. | si($a \> $b) devolver verdadero |
| \<= | Menor o igual que | Comprueba si el valor de la izquierda es menor o igual al de la derecha. | si($a \<= $b) devolver falso |
| \>= | Mayor o igual que | Comprueba si el valor de la izquierda es mayor o igual al de la derecha. | si($a \>= $b) devolver verdadero |
| \== | Comparación | Verifica si dos valores son iguales. | si($a \== $b) {  devolver “Son iguales”  } |

| Operadores Lógicos |  |  |  |
| :---: | :---: | ----- | ----- |
| **Signo** | **Lenguaje español** | **Descripción (en español)** | **Ejemplo** |
| `&&` | Y | Devuelve `verdadero`  si ambas condiciones son verdaderas. | si($var1==nulo && $var2==nulo) {   devolver verdadero } sino {    devolver falso  } |
| || | O | Devuelve `verdadero` si alguna de las condiciones son verdaderas. | si($var1==nulo || $var2==nulo) {   devolver verdadero } sino {    devolver false } |
| `!` | NO | Invierte el valor de la condición (`verdadero`  a `falso` y viceversa). | si(\!$variable) {    devolver veradero } |

| Funciones Preestablecidas |  |  |  |
| :---: | ----- | ----- | ----- |
| **Función** | **Lenguaje español** | **Descripción** | **Ejemplo** |
| **Math.sqrt()** | Mate.raiz() | Se obtiene la raíz cuadrada de la variable de entrada, el primer atributo de la función será la que se le radicará, el segundo atributo será la raíz. | $variable: numero=16 imprimir(Mate.raiz($variable, 2)) //4  |
| Math.sbrt() | Mate.potencia() | Se eleva a la potencia de la variable de entrada, el primer atributo de la función será la variable a elevar,, el segundo atributo será la potencia. | $variable: numero=4 imprimir(Mate.potencia($variable, 2)) //16  |
| print() | imprimir() | Será la función que imprimirá en consola | imprimir(“Hola ”) //Hola |
| input() | entrada() | será la función que determina los datos de entrada   | $a: numero \= entrada(“ingrese un número”) |

| Comentarios |  |  |
| :---: | ----- | ----- |
| **sintaxis** | **Descripción** | **Ejemplo** |
| “” | se utiliza para representar una cadena vacía o sin sentido | imprimir($texto=“cadena vacía”); |
| // | se utiliza para escribir comentarios de una sola línea después de esto ignorado por el intérprete | //Comentario de una línea |
| /\* \*/ | se utiliza para escribir comentarios de varias líneas de igual manera es ignorado por el intérprete | /\*  Comentario de varias líneas \*/ |
| {}  | se utilizan como delimitadores de código, estas llaves agrupan declaraciones y se usan para estructuras de control, funciones y objetos | si (verdadero){ imprimir(”Es verdadero”); } sino(falso) { imprimir(”Es falso”); }  |
| ; | es un delimitador de funciones se ocupa para poner el final de una sentencia | imprimir(“Final”); |
| \\n | se utiliza para separar el texto en líneas diferentes | imprimir(“Primer salto de linea\\nSegunda linea”); |

**.**

| Categoría de Token | Ejemplos | Descripción |
| ----- | ----- | ----- |
| Palabras reservadas | si, siNo, para, mientras, funcion, devolver, clase, nuevo, segun, caso, pordefecto, romper, entrada | Instrucciones clave del lenguaje |
| Identificadores | nombre, $edad, sumaDeNumeros, $miVariable | Variables, funciones, clases |
| Operadores aritméticos | \+, \-, \*, /, %, \*\*, \++, \-- | Operaciones matemáticas |
| Operadores de comparación | \==, \!=, \>, \<, \>=, \<= | Comparación de valores |
| Operadores lógicos | &&, ||, \! | Operaciones booleanas |
| Operador de asignación | \= | Asignación de valores |
| Delimitadores | { }, ( ), ;, : | Agrupadores, separación y tipo de dato |
| Literales numéricos | 123, 45.67 | Valores numéricos |
| Literales de texto | "Hola mundo", 'mensaje' | Cadenas de texto |
| Literales booleanos | verdadero, falso | Valores lógicos |
| Comentarios | // Comentario simple, /\* comentario multilinea \*/ | Ignorados por el intérprete |

EJEMPLO:

$suma: numero \= $x \+ 5;

si ($x \< 10\) {

    imprimir(x);

}

TOKEN: IDENTIFICADOR ($)

TOKEN: IDENTIFICADOR (x)

TOKEN: ASIGNACIÓN (:)

TOKEN: OPERADOR (+)

TOKEN: NÚMERO (5)

TOKEN: OPERADOR (=)

TOKEN: PUNTO Y COMA (;)

TOKEN: SI

TOKEN: IDENTIFICADOR (x)

TOKEN: COMPARACIÓN (\<)

TOKEN: NÚMERO (10)

TOKEN: LLAVE ABIERTA ({)

TOKEN: IMPRIMIR

TOKEN: IDENTIFICADOR (x)

TOKEN: PUNTO Y COMA (;)

TOKEN: LLAVE CERRADA (})

#### *El Generador de Analizadores Léxicos*

Dado que librescript está basado en typeScript, utilizaremos Nearley.js

| @{ const moo \= require("moo"); const lexer \= moo.compile({   espacio:      /\[ \\t\\r\\n\]+/,   numero:       /\[0-9\]+(\\.\[0-9\]+)?/,   booleano:     /\\b(verdadero|falso)\\b/,   texto:        /"(?:\[^"\\\\\]|\\\\.)\*"/,   palabra\_reservada: {     match: /\\b(siNo|si|mientras|para|funcion|devolver|imprimir|entrada|clase|nuevo|segun|caso|pordefecto|romper)\\b/,     type: moo.keywords({       SINO:        'siNo',       SI:          'si',       MIENTRAS:    'mientras',       PARA:        'para',       FUNCION:     'funcion',       DEVOLVER:    'devolver',       IMPRIMIR:    'imprimir',       ENTRADA:     'entrada',       CLASE:       'clase',       NUEVO:       'nuevo',       SEGUN:       'segun',       CASO:        'caso',       PORDEFECTO:  'pordefecto',       ROMPER:      'romper'     })   },   identificador: /\\$\[a-zA-Z\_\]\[a-zA-Z0-9\_\]\*/,   asignacion:    /=/,   operador\_matematico: /\\+|\\-|\\\*|\\/|%|\\\*\\\*/,   operador\_comparacion: /==|\!=|\>=|\<=|\>|\</,   operador\_logico: /&&|\\|\\||\!/,   punto\_y\_coma:  /;/,   parentesis\_abrir:  /\\(/,   parentesis\_cerrar: /\\)/,   llave\_abrir:   /\\{/,   llave\_cerrar:  /\\}/,   comentario:    /\\/\\/.\*|\\/\\\*\[\\s\\S\]\*?\\\*\\// }); %}  |
| :---- |

GRAMATICA INICIAN: EJEMPLO

| @lexer lexer programa \-\> instruccion:+ {% d \=\> d %} instruccion \-\> imprimir\_stmt              | operacion\_stmt              | asignacion\_stmt imprimir\_stmt \-\> "imprimir" espacio? texto punto\_y\_coma {% (\[, , txt\]) \=\> \`Imprimir: ${txt}\` %} operacion\_stmt \-\> identificador espacio? asignacion espacio? expresion punto\_y\_coma {% (\[id, , , , expr\]) \=\> \`${id} \= ${expr}\` %} asignacion\_stmt \-\> identificador espacio? asignacion espacio? valor punto\_y\_coma {% (\[id, , , , val\]) \=\> \`${id} \= ${val}\` %} expresion \-\> valor espacio? operador\_matematico espacio? valor {% (\[v1, , op, , v2\]) \=\> \`(${v1} ${op} ${v2})\` %} valor \-\> numero | texto | booleano | identificador  |
| :---- |

COMPILACION:  
const nearley \= require("nearley");

const grammar \= require("./librescript.js"); // compilado previamente con nearleyc

async function parseCode(input) {

    const parser \= new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

    try {

        parser.feed(input);

        console.log("Tokens generados:", parser.results);

    } catch (err) {

        console.error("Error en el análisis:", err.message);

    }

}

const code \= \`imprimir "Hola, mundo";\`;

parseCode(code);

 (si trabajas con entradas asíncronas, aunque no es común para AFD/AFN básicos).

**Declaración de variables**

**Ejemplo de tabla de tokens y lexemas:**

| Token | Lexemas | Expresión Regular | Descripción |
| ----- | :---: | ----- | ----- |
| **TIPO\_DATO** | `numero` | numero | tipo de dato entero o flotante |
| **TIPO\_DATO** | `texto` | texto | tipo de dato en cadena de texto |
| **TIPO\_DATO** | `booleano` | booleano | tipo de dato lógico |
| **IDENTIFICADOR** | `variable`  | `^\$[a-zA-Z_$][a-zA-Z0-9_$]*$`   | Nombre de la variable o función. |
| **ASIGNACIÓN** | `=` | `^=$` | Operador de asignación. |
| **NUMERO** | `25` | `^-?\d+$` | Número entero. |
| **NUMERO** | `1.75` |  `^-?\d+\.\d+$`          | Número flotante. |
| **TEXTO** | `"Juan"` | `^".*"$`   | Cadena de texto entre comillas dobles. |
| **PUNTO\_Y\_COMA** | `;` | `^;$` | Separador de declaraciones. |
| **BOOLEANO** | `verdadero` | `^(verdadero)$`   |  |
| **BOOLEANO** | `falso` | `^(falso)$`  |  |
| **ESPACIO** | `\s` | `\s` | Agregar espacio |
| **SALTO\_DE\_LINEA** | `\n` | `\n` | Salto de línea |
| **COMENTARIO** | `// /* comentario */` |              `//.*`  `/\*[\s\S]*?\*/`  | Comentario |

Para cada categoría, se definen reglas:

1. Palabras clave: numero , booleano, texto

   * Si una palabra coincide con alguna de estas palabras clave → es un TIPO\_DATO .

2. Identificadores: deben comenzar con una letra o\_ y pueden contener números ( edad, \_nombre, x1).

3. Números:

   En librescript el tipo de dato “número” es flexible y puede manejar tanto numeros enteros como flotantes. Es decir

   * Si solo tiene dígitos ( 123\) → Lo toma como tipo numero.

   * Si tiene un punto ( 3.14) → Lo toma como tipo numero.

De esta manera, no es necesario especificar si un número es entero o flotante, ya que el tipo de dato “numero” acepta ambos.

$xy:numero \= 123.456;

El analizador léxico debe:

1. Leer $ indicar que es una variable

2. Leer xy  y reconocerlo como identificador .

3. Leer : y especificar anotación de tipo de dato

4. Leer numero  y reconocerlo como palabra clave .

5. Leer \= y reconocerlo como operador de asignación .

6. Leer 123.456 y reconocerlo como número .

7. Leer ; y reconocerlo como término de una instrucción .

| Indentificador de variable | variable | Operador de anotación de tipo | tipo de dato | Operador de asignación | valor de la variable | indicador de termino |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| $ | letra | **:** | texto | \= | “abdc” | ; |
| $ | num | : | numero | \= | 123 | ; |
| $ | hecho | : | boolean | \= | verdadero | ; |

tipo nombre \= valor;

int edad \= 25;

float altura \= 1.75;

string nombre \= "Juan";

boolean activo \= true;

una expresión regular quedaría de la siguiente forma:

(Indentificador de variable)(variable)(Operador de anotación de tipo)(tipo de dato)(=  valor de la variable)?;

(tipo\_dato) (identificador) (= valor)?;

tipo de dato \=  numero|texto|booleano

identificador:\[a-zA-Z\_\]\[a-zA-Z0-9\_\]\* 

valor: 

* Numero: ^-?\\d+(\\.\\d+)?$

* Cadena: \\"\[^\\"\]\*\\"

* Booleano: true|false

; indica el fin de la declaración .

**Tabla de Tokens, lexemas.**

| Token | Lexema | Expresión Regular | Descripción |
| ----- | ----- | ----- | ----- |
| **PALABRA\_CLAVE** | `mientras` | `mientras` | Palabra clave `while`. |
| **PALABRA\_CLAVE** | `para` | `para` | Palabra clave `for`. |
| **PALABRA\_CLAVE** | `si` | `si` | Palabra clave `if`. |
| **PALABRA\_CLAVE** | `siNo` | `siNo` | Palabra clave `else`. |
| **PALABRA\_CLAVE** | `entrada` | `entrada` | palabra clave para ingresar datos |
| **PALABRA\_CLAVE** | `clase` | `clase` | palabra clave para Palabra clave que define el inicio de una clase. |
| **PALABRA\_CLAVE** | `romper` | `romper` | Palabra clave que termina un bloque  |
| **PALABRA\_CLAVE** | `pordefecto` | `pordefecto` | Palabra clave para la opción por defecto. |
| **PALABRA\_CLAVE** | `caso` | `caso` | Palabra clave que define una opción. |
| **PALABRA\_CLAVE** | `retornar` | `retornar` | retorno de valor. |
| **PARENTESIS\_ABIERTO** | `(` | `\(` | Paréntesis abierto `(`. |
| **PARENTESIS\_CERRADO** | `)` | `\)` | Paréntesis cerrado `)`. |
| **LLAVE\_ABIERTA** | `{` | `\{` | Llave abierta `{`. |
| **LLAVE\_CERRADA** | `}` | `\}` | Llave cerrada `}`. |
| **DOS\_PUNTOS** | `:` | `\:` | dos puntos : |
| **PUNTO\_Y\_COMA** | `;` | `\;` | punto y coma ; |
| **COMA** | `,` | `\,` | coma, |

**Tabla de Tokens para Operadores Aritméticos y Lógicos:**

| Token | Lexema | Expresión Regular | Descripción | EJEMPLOS:  |
| ----- | :---: | :---: | :---: | :---: |
| **OPERADOR\_ARITMETICO** | `+` | `\+` | Suma (adición) |  |
| **OPERADOR\_ARITMETICO** | `-` | `\-` | Resta (sustracción) |  |
| **OPERADOR\_ARITMETICO** | `*` | `\*` | Multiplicación |  |
| **OPERADOR\_ARITMETICO** | `/` | `/` | División |  |
| **OPERADOR\_ARITMETICO** | `%` | `%` | Módulo (resto de la división) |  |
| **OPERADOR\_LOGICO** | `&&` | `&&` | Operador lógico AND (Y) | `si(var1==nulo && var2==nulo) {   devolver verdadero } sino {    devolver falso  }` |
| **OPERADOR\_LOGICO** | || | \\|\\| | Operador lógico OR (O) | `si(var1==nulo || var2==nulo) {   devolver verdadero } sino {    devolver false }` |
| **OPERADOR\_LOGICO** | `!` | `!` | Operador lógico NOT (Negación) | `si(!variable) {    devolver true  }` |
| **OPERADOR\_COMPARACION** | `=` | `==`  | Asigna un valor a una variable. | entero x \= 10 |
| **OPERADOR\_COMPARACION** | `>` | `>` | Comprueba si el valor de la izquierda es mayor que el de la derecha. | si(a \> b) devolver falso |
| **OPERADOR\_COMPARACION** | `<` | `<`  | Comprueba si el valor de la izquierda es menor que el de la derecha. | si(a \> b) devolver verdadero |
| **OPERADOR\_COMPARACION** | `<=` | `<=`    | Comprueba si el valor de la izquierda es menor o igual al de la derecha. | si(a \<= b) devolver falso |
| **OPERADOR\_COMPARACION** | `>=` | `>=` | Verifica si dos valores son iguales. | si(a \>= b) devolver verdadero |
| **OPERADOR\_RELACIONAL** | `==` | `==` | Operador de comparación de igualdad `==`. |  |
| **OPERADOR\_RELACIONAL** | `!=` | `!=` | Operador de comparación de desigualdad `!=`. |  |
| **OPERADOR\_RELACIONAL** | `>` | `>` | Operador mayor que `>`. |  |
| **OPERADOR\_RELACIONAL** | `<` | `<` | Operador menor que `<`. |  |

# Expresiónes regulares:

##### Declaración de variables

numerica

^\\$\[a-z\]\[a-zA-Z0-9\_\]\*\\s\*:\\s\*numero\\s\*=\\s\*-?\\d+(?:\\.\\d+)?\\s\*;$

booleano

^\\$\[a-z\]\[a-zA-Z0-9\_\]\*\\s\*:\\s\*booleano\\s\*=\\s\*(verdadero|falso)\\s\*;$

texto

^\\$\[a-z\]\[a-zA-Z0-9\_\]\*\\s\*:\\s\*texto\\s\*=\\s\*"\[^"\]\*"\\s\*;$

##### Programación Orientada a Objetos

~~^clase\\s+\[A-Z\]\[a-zA-Z0-9\_\]\*\\s\*\\{\\s\*(\#?\[a-zA-Z\_\]\[a-zA-Z0-9\_\]\*;|\\s\*constructor\\s\*\\(.\*\\)\\s\*\\{\[^}\]\*\\}|\\s\*\[a-zA-Z\_\]\[a-zA-Z0-9\_\]\*\\s\*\\(\\)\\s\*\\{\[^}\]\*\\})\*\\s\*\\}$~~

^clase\\s+\[A-Z\]\[a-zA-Z0-9\_\]\*\\s\*\\{\[\\s\\S\]\*\\}$ 

##### Estructura de Funciones

^funcion\\s+\\$\\w+\\s\*\\(\\s\*(?:\\$\\w+\\s\*:\\s\*(numero|texto|booleano)\\s\*(?:,\\s\*\\$\\w+\\s\*:\\s\*(numero|texto|booleano))\*)?\\s\*\\)\\s\*:\\s\*(numero|texto|booleano)\\s\*\\{\[\\s\\S\]\*\\}$

funcion $miFuncion($param1 : numero, $param2 : texto) : booleano {

    // código 

    return true;

}

##### Bloques de Código

^\\{\[\\s\\S\]\*\\}$ 

##### Estructuras de Control (`si`, `siNo`, `segun`)

 ^si\\s\*\\(\\s\*.+\\s\*\\)\\s\*\\{\[\\s\\S\]\*\\}(?:\\s\*siNo\\s\*\\{\[\\s\\S\]\*\\})?$

si ($condicion) {

    hacerAlgo();

} siNo {

    hacerOtraCosa();

}

—----------------

  ^mientras\\s\*\\(\\s\*.+\\s\*\\)\\s\*\\{\[\\s\\S\]\*\\}$  

mientras ($condicion) {

    ejecutarAccion();

}

—--------------

 ^para\\s\*\\(.\*\\)\\s\*\\{\[\\s\\S\]\*\\}$

para ($i \= 0; $i \< 10; $i++) {

    imprimir($i);

}

—----------

^segun\\s\*\\(\\s\*.+\\s\*\\)\\s\*\\{\\s\*(?:caso\\s+\[^:\]+:\\s\*\\{\[\\s\\S\]\*\\}\\s\*romper\\s\*;)+\\s\*(?:pordefecto\\s\*:\\s\*\\{\[\\s\\S\]\*\\})?\\s\*\\}$

segun ($opcion) {

    caso 1:

    {

        ejecutarAccion1();

        romper;

    }

    caso 2:

    {

        ejecutarAccion2();

        romper;

    }

    pordefecto:

    {

        ejecutarAccionPorDefecto();

    }

}

##### Comentarios

^//.\*$

^/\\\*\[\\s\\S\]\*?\\\*/$

##### Operadores Aritméticos ,Lógicos y Comparacion

 ^\\+|-$|^\\\*$|^/$|^%$|^\\\*\\\*$

^(?:&&|\\|\\||\!)$

^(==|\!=|\<|\>|\<=|\>=)$

##### Cadenas de texto

^".\*"$

"Hola, \\"librescript\\"\!"

##### Arreglos

^\\$\[a-z\]\[a-zA-Z0-9\_\]\*\\s\*:\\s\*arreglo\\\[\\\]\\s\*=\\s\*\\\[\[^\\\]\]\*\\\]\\s\*;$

^\\$\[a-z\]\[a-zA-Z0-9\_\]\*\\s\*:\\s\*arreglo\\\[\\\]\\s\*=\\s\*\\\[\[^\\\]\\s\]+(?:\\s\*,\\s\*\[^\\\]\\s\]+)\*\\\]\\s\*;$

$numeros: arreglo\[\] \= \[1, 2, 3, 4, 5\];

$colores : arreglo\[\] \= \["rojo", "verde", "azul"\];

##### Objetos

^\\$\[a-zA-Z\]\[a-zA-Z0-9\_\]\*\\s\*:\\s\*Objeto\\s\*=\\s\*\\{\[\\s\\S\]\*\\}\\s\*;$

$persona : Objeto \= { nombre: "Juan", edad: 30 };

##### Matrices

^\\$\[a-zA-Z\]\[a-zA-Z0-9\_\]\*\\s\*:\\s\*numero\\\[\\\]\\\[\\\]\\s\*=\\s\*\\\[\[\\s\\S\]\*\\\]\\s\*;$

$numeros : numero\[\]\[\] \= \[\[1, 2, 3\], \[4, 5, 6\]\];

# [automatas](https://docs.google.com/document/d/1ELBAo8oLE86ILyrdkR9lrFdRQb4U-nQDqkYFI37d1Q8/edit?usp=sharing)

## Gramática  LibreScript

##### 

\<programa\>       ::= { \<sentencia\> }

\<sentencia\>      ::= \<declaracion\_variable\>

                   | \<declaracion\_constante\>

                   | \<declaracion\_funcion\>

                   | \<sentencia\_control\>

                   | \<asignacion\>

                   | \<expresion\> ";"

                   | \<bloque\>

\<declaracion\_variable\>  ::= "$" \<identificador\> ":" \<tipo\> "=" \<expresion\> ";"

\<declaracion\_constante\> ::= "$$" \<identificador\> ":" \<tipo\> "=" \<expresion\> ";"

\<tipo\>           ::= "numero" | "texto" | "booleano" | \<tipo\_compuesto\>

\<tipo\_compuesto\> ::= "arreglo" "\[\]" | "Objeto" | "Numero" "\[\]\[\]"  // Por ejemplo, para arreglos, objetos y matrices.

\<asignacion\>     ::= \<identificador\> "=" \<expresion\> ";"

\<identificador\>  ::= \[a-zA-Z\_$\]\[a-zA-Z0-9\_$\]\*  

                    /\* Nota: para variables se exige que inicien con "$" o "$$". \*/

\<expresion\>      ::= \<exp\_aritmetica\>

                   | \<exp\_logica\>

                   | \<exp\_cadena\>

                   | \<llamada\_funcion\>

                   | \<acceso\_objeto\>

                   | \<acceso\_arreglo\>

                   | "(" \<expresion\> ")"

\<exp\_aritmetica\> ::= \<exp\_aritmetica\> \<op\_suma\> \<termino\> 

                   | \<exp\_aritmetica\> \<op\_resta\> \<termino\>

                   | \<termino\>

\<termino\>      ::= \<termino\> \<op\_mul\> \<factor\>

                   | \<termino\> \<op\_div\> \<factor\>

                   | \<factor\>

\<factor\>       ::= \<numero\>

                   | \<identificador\>

                   | "(" \<expresion\> ")"

\<numero\>       ::= ( "-" )? \<digito\> { \<digito\> } \[ "." \<digito\> { \<digito\> } \]

\<digito\>       ::= "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"

\<op\_suma\>      ::= "+"

\<op\_resta\>     ::= "-"

\<op\_mul\>       ::= "\*"

\<op\_div\>       ::= "/"

\<exp\_logica\>   ::= \<exp\_relacional\> { \<op\_logico\> \<exp\_relacional\> }

\<op\_logico\>    ::= "&&" | "||"

\<exp\_relacional\> ::= \<exp\_aritmetica\> \<op\_comparacion\> \<exp\_aritmetica\>

                   | \<exp\_aritmetica\>

\<op\_comparacion\>  ::= "==" | "\!=" | "\<" | "\>" | "\<=" | "\>="

\<exp\_cadena\>   ::= \<texto\>

\<texto\>        ::= '"' { \<caracter\> } '"'

\<caracter\>     ::= cualquier carácter excepto ( " y \\ ) | "\\" ( "\\"" | "\\" )

\<llamada\_funcion\>  ::= "funcion" \<identificador\> "(" \[ \<lista\_parametros\> \] ")" ":" \<tipo\> \<bloque\>

\<lista\_parametros\> ::= \<parametro\> { "," \<parametro\> }

\<parametro\>    ::= "$" \<identificador\> ":" \<tipo\>

\<declaracion\_funcion\>  ::= \<llamada\_funcion\>

\<sentencia\_control\>  ::= \<if\> | \<while\> | \<para\> | \<segun\>

\<if\>           ::= "si" "(" \<expresion\> ")" \<bloque\> \[ "siNo" \<bloque\> \]

\<while\>        ::= "mientras" "(" \<expresion\> ")" \<bloque\>

\<para\>         ::= "para" "(" \<declaracion\_variable\> \<expresion\> ";" \<asignacion\> ")" \<bloque\>

\<segun\>        ::= "segun" "(" \<expresion\> ")" "{" { \<caso\> } \[ "pordefecto" ":" \<bloque\> \] "}"

\<caso\>         ::= "caso" \<exp\_cadena\> ":" \<bloque\> "romper" ";"

\<acceso\_objeto\>  ::= \<identificador\> "." \<identificador\>

\<acceso\_arreglo\> ::= \<identificador\> "\[" \<expresion\> "\]"

\<bloque\>       ::= "{" { \<sentencia\> } "}"

**Gramatica Libre de Contexto (GLC)**

G=(N,Σ,P,S), donde:

s-\>`<programa>`

`N-> { <programa>, <sentencia>, <declaracion_variable>, <declaracion_constante>,` 

      `<declaracion_funcion>, <sentencia_control>, <asignacion>, <expresion>,` 

      `<exp_aritmetica>, <exp_logica>, <exp_cadena>, <llamada_funcion>,` 

      `<acceso_objeto>, <acceso_arreglo>, <bloque>, <tipo>, <identificador>,` 

      `<numero>, <operador>, <comparador>, <caracter> }`

`Σ -> { letras (a-z, A-Z), dígitos (0-9), símbolos especiales ($, {, }, (, ), [, ],` 

      `,, ;, :, ., =, +, -, *, /, ", ', !, <, >, &, |, espacio, tabulador, salto de línea) }`


`P->`

`<programa> ::= { <sentencia> }`

`<sentencia> ::= <declaracion_variable>`

              `| <declaracion_constante>`

              `| <declaracion_funcion>`

              `| <sentencia_control>`

              `| <asignacion>`

              `| <expresion> ";"`

              `| <bloque>`

 `<declaracion_variable> ::= "$" <identificador> ":" <tipo> "=" <expresion> ";"`

`<declaracion_constante> ::= "$$" <identificador> ":" <tipo> "=" <expresion> ";"`

`<tipo> ::= "numero" | "texto" | "booleano" | <tipo_compuesto>`

`<tipo_compuesto> ::= "arreglo" "[" "]" <tipo> | "Objeto" | "matriz" "[" "]" "[" "]" <tipo>`

`=GRAMATICA=`

\<asignacion\> ::= \<identificador\> \<op\_asignacion\> \<expresion\> ";"

\<op\_asignacion\> ::= "=" | "+=" | "-=" | "\*=" | "/="

\<expresion\> ::= \<exp\_aritmetica\>

              | \<exp\_logica\>

              | \<exp\_cadena\>

              | \<llamada\_funcion\>

              | \<acceso\_objeto\>

              | \<acceso\_arreglo\>

              | "(" \<expresion\> ")"

\<exp\_aritmetica\> ::= \<exp\_aritmetica\> \<op\_suma\> \<termino\>

                   | \<exp\_aritmetica\> \<op\_resta\> \<termino\>

                   | \<termino\>

\<termino\> ::= \<termino\> \<op\_mul\> \<factor\>

            | \<termino\> \<op\_div\> \<factor\>

            | \<factor\>

\<factor\> ::= \<numero\>

           | \<identificador\>

           | "(" \<expresion\> ")"

\<exp\_logica\> ::= \<exp\_relacional\> { \<op\_logico\> \<exp\_relacional\> }

\<op\_logico\> ::= "&&" | "||"

\<exp\_relacional\> ::= \<exp\_aritmetica\> \<op\_comparacion\> \<exp\_aritmetica\>

                 | \<exp\_aritmetica\>

\<op\_comparacion\> ::= "==" | "\!=" | "\<" | "\>" | "\<=" | "\>="

\<exp\_cadena\> ::= \<texto\>

\<texto\> ::= '"' { \<caracter\> } '"'

\<caracter\> ::= cualquier carácter excepto ( " y \\ ) | "\\" ( "\\"" | "\\" )

\<declaracion\_funcion\> ::= "funcion" \<identificador\> "(" \[ \<lista\_parametros\> \] ")" ":" \<tipo\> \<bloque\>

\<llamada\_funcion\> ::= \<identificador\> "(" \[ \<lista\_argumentos\> \] ")"

\<lista\_parametros\> ::= \<parametro\> { "," \<parametro\> }

\<parametro\> ::= "$" \<identificador\> ":" \<tipo\>

\<sentencia\_control\> ::= \<if\> | \<while\> | \<para\> | \<segun\>

\<if\> ::= "si" "(" \<expresion\> ")" \<bloque\> \[ "siNo" \<bloque\> \]

\<while\> ::= "mientras" "(" \<expresion\> ")" \<bloque\>

\<para\> ::= "para" "(" \<declaracion\_variable\> \<expresion\> ";" \<asignacion\> ")" \<bloque\>

\<segun\> ::= "segun" "(" \<expresion\> ")" "{" { \<caso\> } \[ "pordefecto" ":" \<bloque\> \] "}"

\<caso\> ::= "caso" \<expresion\> ":" \<bloque\> "romper" ";"

\<acceso\_objeto\> ::= \<identificador\> "." \<identificador\>

\<acceso\_arreglo\> ::= \<identificador\> "\[" \<expresion\> "\]" \[ "\[" \<expresion\> "\]" \]

\<bloque\> ::= "{" { \<sentencia\> } "}"

Para generar un **analizador sintáctico** para **Librescript**, debes seguir estos pasos clave:

---

### **1\. Definir la Gramática del Lenguaje**

Antes de construir el analizador, necesitas definir la **gramática formal** en **BNF (Backus-Naur Form)** o **EBNF (Extended BNF)**. Basado en la sintaxis de Librescript, podríamos definir algunas reglas como:

#### **Ejemplo de Gramática Simplificada en EBNF**

ebnf

CopiarEditar

`<programa> ::= (<declaracion> | <expresion> | <estructura_control>)*`

`<declaracion> ::= "$" <identificador> ":" <tipo> "=" <expresion> ";"`

`<tipo> ::= "numero" | "texto" | "booleano"`

`<expresion> ::= <identificador> | <numero> | <cadena> | <operacion>`

`<operacion> ::= <expresion> ("+" | "-" | "*" | "/" | "%") <expresion>`

`<estructura_control> ::= <si> | <segun> | <mientras>`

`<si> ::= "si" "(" <expresion_booleana> ")" "{" <bloque_codigo> "}"`

`<segun> ::= "segun" "(" <identificador> ")" "{" <casos> "}"`

`<mientras> ::= "mientras" "(" <expresion_booleana> ")" "{" <bloque_codigo> "}"`

Aquí definimos cómo se estructuran declaraciones, expresiones y estructuras de control.

BNF DE PALABRAS RESERVADAS(?)  
\<palabra\_reservada\> ::= \<control\_flujo\> 

                      | \<definicion\> 

                      | \<funcion\>

                      | \<logica\_programacion\> 

                      | \<otros\>

\<control\_flujo\> ::= "si" 

                  | "siNo" 

                  | "segun" 

                  | "caso"

                  | "pordefecto"

                  | "mientras" 

                  | "para" 

                  | "hacer"

                  | "detener"

\<definicion\> ::= "clase" 

               | "funcion" 

               | "retornar" 

               | "nuevo"

\<funcion\> ::= "imprimir" 

            | "entrada" 

            | "longitud"

            | "convertir"

\<logica\_programacion\> ::= "verdadero" 

                        | "falso" 

                        | "y" 

                        | "o" 

                        | "no"

\<otros\> ::= "importar" 

          | "exportar" 

          | "romper"

          | "continuar"

Palabras reservadas

@Rkrdtl y yo

tipos ee datos y comentarios

@Diana JF @Yael 

Operadores matemáticos y comparacion

@Cysars\_Ack @Nєstr 

Operadores lógicos y funciones preestablecidas 

@Elielllsss @B0N3R

\<if\>           ::= "si" "(" \<expresion\> ")" \<bloque\> \[ "siNo" \<bloque\> \]

Palabras reservadas: Control de flujo

|  | Reglas |  |
| :---: | :---: | :---: |
| 1 | s | palabra\_control |
| 2 | palabra\_control | sentencia\_si | otro |
| 3 | sentencia\_si | si( sentencia ) { bloque\_codigo }  palabra\_control| si( sentencia ) { bloque\_codigo } sentencia\_sino { bloque\_codigo } |
| 4 | sentencia\_sino  | sino |
| 5 | sentencia  | verdadero | falso |

\<palabra\_condicional\> ::= \<sentencia\_si\> | \<otro\>

\<sentencia\_si\>   ::= "si" "(" \<condicion\> ")" "{" \<bloque\_codigo\> "}" \[ "siNo" "{" \<bloque\_codigo\> "}" \]

\<condicion\>      ::= \<expresion\>

\<expresion\>      ::= \<variable\> \<operador\_condicional\> \<valor\>

\<variable\>       ::= "$" \<identificador\>

\<operador\_condicional\> ::= "\<" | "\>" | "\<=" | "\>="

\<valor\>          ::= \<variable\> | \<numero\>

\<identificador\>  ::= \[a-zA-Z\]\[a-zA-Z0-9\_\]\*

\<numero\>         ::= ( "-" )? \<digito\> { \<digito\> } \[ "." \<digito\> { \<digito\> } \]

\<digito\>         ::= "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"

\<bloque\_codigo\>  ::= "{" { \<sentencia\> } "}"

\<sentencia\>      ::= \<declaracion\_variable\> | \<declaracion\_funcion\> | \<sentencia\_control\> | \<asignacion\> | \<expresion\> ";"

`si ($x > 0) {` 

    `imprimir("Positivo");` 

Palabras reservadas: Ciclos 

|  | Reglas |  |
| :---: | :---: | :---: |
| 1 | s | palabra\_ciclos |
| 2 | palabra\_ciclos | sentencia\_mientras | sentencia\_para | otro |
| 3 | sentencia\_mientras  | mientras (sentencia) { bloque\_codigo } |
| 4 | sentencia  | verdadero | falso |

\<palabra\_ciclos\>     ::= \<sentencia\_mientras\> | \<sentencia\_para\> | \<otro\>

\<sentencia\_mientras\> ::= "mientras" "(" \<sentencia\> ")" "{" \<bloque\_codigo\> "}"

\<sentencia\>         ::= "verdadero" | "falso"

|  | Reglas |  |
| :---: | :---: | :---: |
| 1 | s | palabra\_ciclos |
| 2 | palabra\_ciclos | sentencia\_para | otro |
| 3 | sentencia\_para | para (expresion\_inicial; condicion; expresion\_final) { bloque\_codigo } |
| 4 | expresion\_inicial | $variable : numero \= valor |
| 5 | condicion  | $variable operador\_condicional valor |
|  | expresion\_final | $variable operador\_incremento |
|  | operador\_condicional  | \< | \> | \<= | \>=  |
|  | operador\_incremento  | \++ | \- \-  |
|  | valor | $variable | numero |

\<palabra\_ciclos\>      ::= \<sentencia\_para\> | \<otro\>

\<sentencia\_para\>      ::= "para" "(" \<expresion\_inicial\> ";" \<condicion\> ";" \<expresion\_final\> ")" "{" \<bloque\_codigo\> "}"

\<expresion\_inicial\>   ::= \<variable\> ":" "numero" "=" \<valor\>

\<condicion\>           ::= \<variable\> \<operador\_condicional\> \<valor\>

\<expresion\_final\>     ::= \<variable\> \<operador\_incremento\>

\<operador\_condicional\> ::= "\<" | "\>" | "\<=" | "\>="

\<operador\_incremento\>   ::= "++" | "--"

\<valor\>    ::= \<variable\> | \<numero\>

\<variable\>           ::= "$" \<identificador\>

\<identificador\>      ::= \[a-zA-Z\]\[a-zA-Z0-9\_\]\*

\<numero\>             ::= ( "-" )? \<digito\> { \<digito\> } \[ "." \<digito\> { \<digito\> } \]

\<digito\>             ::= "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"

DERIVACION

\<sentencia\_para\>  → "para" "(" \<expresion\_inicial\> ";" \<condicion\> ";" \<expresion\_final\> ")" "{" \<bloque\_codigo\> "}"

\<expresion\_inicial\> → "para" "(" \<variable\> ":" "numero" "=" \<valor\> ";" \<condicion\> ";" \<expresion\_final\> ")" "{" \<bloque\_codigo\> "}"

\<variable\> → "para" "("$" \<identificador\>:" "numero" "=" \<valor\> ";" \<condicion\> ";" \<expresion\_final\> ")" "{" \<bloque\_codigo\> "}"

\<identificador\>   → "para" "(" $i ":" "0" "=" \<variable\> | \<numero\> ";" \<condicion\> ";" \<expresion\_final\> ")" "{" \<bloque\_codigo\> "}"

\<numero\>   → "para" "(" $i ":" "0" "=" \<valor\> ";" \<condicion\> ";" \<expresion\_final\> ")" "{" \<bloque\_codigo\> "}"

\<numero\>   → "para" "(" $i ":" "0" "=" 10 ";" \<condicion\> ";" \<expresion\_final\> ")" "{" \<bloque\_codigo\> "}"

\<condicion\>   → "para" "(" $i ":" "0" "=" 10 ";" \<variable\> \<operador\_condicional\> \<valor\> ";" \<expresion\_final\> ")" "{" \<bloque\_codigo\> "}"

\<variable\> → "para" "(" $i ":" "0" "=" 10 ";" "$" \<identificador\> \<operador\_condicional\> \<valor\> ";" \<expresion\_final\> ")" "{" \<bloque\_codigo\> "}"

\<identificador\> → "para" "(" $i ":" "0" "=" 10 ";" "$i" \<operador\_condicional\> \<valor\> ";" \<expresion\_final\> ")" "{" \<bloque\_codigo\> "}"

 \<operador\_condicional\>→ "para" "(" $i ":" "0" "=" 10 ";" "$i" \< \<valor\> ";" \<expresion\_final\> ")" "{" \<bloque\_codigo\> "}"

 \<valor\>→ "para" "(" $i ":" "0" "=" 10 ";" "$i" \<  10 ";" \<expresion\_final\> ")" "{" \<bloque\_codigo\> "}"  
 \<expresion\_final\>→ "para" "(" $i ":" "0" "=" 10 ";" "$i" \<  10 ";"  \<variable\> \<operador\_incremento\> ")" "{" \<bloque\_codigo\> "}"

 \<variable\>→ "para" "(" $i ":" "0" "=" 10 ";" "$i" \<  10 ";"  "$" \<identificador\> \<operador\_incremento\> ")" "{" \<bloque\_codigo\> "}"

 \<identificador\>→ "para" "(" $i ":" "0" "=" 10 ";" "$i" \<  10 ";"  "$i” \<operador\_incremento\> ")" "{" \<bloque\_codigo\> "}"

 \<operador\_incremento\>→ "para" "(" $i ":" "0" "=" 10 ";" "$i" \<  10 ";"  "$i”++\> ")" "{" \<bloque\_codigo\> "}"

 \<operador\_incremento\>→ "para" "(" $i ":" "0" "=" 10 ";" "$i" \<  10 ";"  "$i”++\> ")" "{" \<bloque\_codigo\> "}"

\<caso\>         ::= "caso" \<exp\_cadena\> ":" \<bloque\> "romper" ";"

\<exp\_cadena\>   ::= \<texto\>

\<texto\>        ::= '"' { \<caracter\> } '"'

\<caracter\>     ::= cualquier carácter excepto ( " y \\ )

                 | "\\" ( "\\"" | "\\" )

CASO

**s**  
   s → palabra\_switch

**palabra\_switch**  
   palabra\_switch → sentencia\_switch | otro

**sentencia\_switch**  
   sentencia\_switch → segun ( \<expresion\> ) { \<lista\_casos\> \[ pordefecto: \<bloque\_codigo\> \] }

**lista\_casos**  
   lista\_casos → \<caso\> { \<caso\> }

**caso**  
   caso → caso \<exp\_cadena\> : \<bloque\_codigo\> romper ;

**exp\_cadena**  
   exp\_cadena → \<texto\>

**bloque\_codigo**  
   bloque\_codigo → { \<sentencia\> }  
 

**expresion**  
   expresion → (Definición propia del lenguaje: puede ser un identificador, una operación, etc.)

**texto**  
   texto → " { \<caracter\> } "

**sentencia**  
   sentencia → (cualquier instrucción válida en LibreScript, por ejemplo, una asignación, llamada a función, etc.)

\<segun\>         ::= "segun" "(" \<expresion\> ")" "{" \<lista\_casos\> \[ \<default\> \] "}"

\<lista\_casos\>   ::= \<caso\> { \<caso\> }

\<caso\>          ::= "caso" \<exp\_cadena\> ":" \<bloque\_codigo\> "romper" ";"

\<default\>       ::= "pordefecto" ":" \<bloque\_codigo\>

\<expresion\>     ::= \<identificador\>

                  | \<exp\_aritmetica\>

                  | \<exp\_logica\>

                  | \<exp\_cadena\>

                  | "(" \<expresion\> ")"

                  /\* Se pueden ampliar las alternativas según la complejidad deseada. \*/

\<exp\_cadena\>    ::= \<texto\>

\<texto\>         ::= '"' { \<caracter\> } '"'

\<caracter\>      ::= cualquier carácter excepto ( " y \\ )

                 | "\\" ( "\\"" | "\\" )

\<bloque\_codigo\> ::= "{" { \<sentencia\> } "}"

\<sentencia\>     ::= \<asignacion\>

                  | \<declaracion\_variable\>

                  | \<declaracion\_funcion\>

                  | \<sentencia\_control\>

                  | \<expresion\> ";"

                  | \<segun\>

                  | \<bloque\_codigo\>

\<segun\>

"segun" "(" \<expresion\> ")" "{" \<lista\_casos\> \[ \<default\> \] "}"

\<expresion\> → \<identificador\> → "$dia"

\<caso\> → "caso" \<exp\_cadena\> ":" \<bloque\_codigo\> "romper" ";"

\<exp\_cadena\> → \<texto\> → "\\"" "lunes" "\\""

\<bloque\_codigo\> → "{" \<sentencia\> "}"

\<sentencia\>imprimir("(" \<texto\> ")" ";")

\<texto\> → "\\"" "Inicio de semana" "\\""

\<caso\> → "caso" \<exp\_cadena\> ":" \<bloque\_codigo\> "romper" ";"

imprimir("(" \<texto\> ")" ";")

\<texto\> → "\\"" "Segundo día" "\\""

\<default\> → "pordefecto" ":" \<bloque\_codigo\>

imprimir("(" \<texto\> ")" ";")

\<texto\> → "\\"" "Día normal" "\\""

segun ( $dia ) { 

    caso "lunes" : { imprimir ( "Inicio de semana" ) ; } romper ;

    caso "martes" : { imprimir ( "Segundo día" ) ; } romper ;

    pordefecto : { imprimir ( "Día normal" ) ; }

}

[https://gist.github.com/Chubek/0ab33e40b01a029a7195326e89646ec5](https://gist.github.com/Chubek/0ab33e40b01a029a7195326e89646ec5)

[https://www.npmjs.com/package/ebnf](https://www.npmjs.com/package/ebnf)

[https://www.freecodecamp.org/news/what-are-bnf-and-ebnf/](https://www.freecodecamp.org/news/what-are-bnf-and-ebnf/)

[https://tomassetti.me/ebnf/](https://tomassetti.me/ebnf/)

\======OPERADOR LÓGICO AND \- && BNF======//  
\<asignacion\> ::= \<identificador\> \<op\_asignacion\> \<expresion\> ";"  
\<op\_asignacion\> ::= "=" | "+=" | "-=" | "\*=" | "/="  
\<expresion\> ::= \<exp\_aritmetica\>  
              | \<exp\_logica\>        
              | \<exp\_cadena\>  
              | \<llamada\_funcion\>  
              | \<acceso\_objeto\>  
              | \<acceso\_arreglo\>  
              | "(" \<expresion\> ")"  
\<exp\_logica\> ::= \<exp\_relacional\> { \<op\_logico\> \<exp\_relacional\> }  
\<op\_logico\> ::= "&&" | "||"  \<exp\_relacional\> ::= \<exp\_aritmetica\> \<op\_comparacion\> \<exp\_aritmetica\>  
                   | \<exp\_aritmetica\>  
\<exp\_aritmetica\> ::= \<exp\_aritmetica\> \<op\_suma\> \<termino\>  
                   | \<termino\>  
\<termino\> ::= \<termino\> \<op\_mul\> \<factor\>  
            | \<factor\>  
\<factor\> ::= \<numero\> | \<identificador\> | "(" \<expresion\> ")"  
\<op\_comparacion\> ::= "==" | "\!=" | "\<" | "\>" | "\<=" | "\>="  
\<identificador\> ::= \[a-zA-Z\_\]\[a-zA-Z0-9\_\]\*  
\<numero\> ::= \[0-9\]+  
\<booleano\> ::= "true" | "false"  
Ejemplo:  
$v1 \= ($a \> 5)&& ($b2 \> 5\)   
{  
}

\=====OPERADOR LÓGICO OR \- || BNF======//  
\<asignacion\> ::= \<identificador\> \<op\_asignacion\> \<expresion\> ";"  
\<op\_asignacion\> ::= "=" | "+=" | "-=" | "\*=" | "/="  
\<expresion\> ::= \<exp\_aritmetica\>  
              | \<exp\_logica\>                    | \<exp\_cadena\>  
              | \<llamada\_funcion\>  
              | \<acceso\_objeto\>  
              | \<acceso\_arreglo\>  
              | "(" \<expresion\> ")"  
\<exp\_logica\> ::= \<exp\_relacional\> { \<op\_logico\> \<exp\_relacional\> }  
\<op\_logico\> ::= "&&" | "||"   
\<exp\_relacional\> ::= \<exp\_aritmetica\> \<op\_comparacion\> \<exp\_aritmetica\>  
                   | \<exp\_aritmetica\>    
\<exp\_aritmetica\> ::= \<exp\_aritmetica\> \<op\_suma\> \<termino\>  
                   | \<termino\>  
\<termino\> ::= \<termino\> \<op\_mul\> \<factor\>  
            | \<factor\>  
\<factor\> ::= \<numero\> | \<identificador\> | "(" \<expresion\> ")"  
\<op\_comparacion\> ::= "==" | "\!=" | "\<" | "\>" | "\<=" | "\>="  
\<identificador\> ::= \[a-zA-Z\_\]\[a-zA-Z0-9\_\]\*  
\<numero\> ::= \[0-9\]+  
\<booleano\> ::= "true" | "false"

ejemplo  
$v1 \= ($a \== true)|| ($b2 \==  true)   
{  
}  
\========================Funciones=============//  
\<declaracion\_funcion\> ::= "funcion" \<identificador\> "(" \[\<lista\_parametros\>\] ")" ":" \<tipo\> \<bloque\>  
\<lista\_parametros\> ::= \<parametro\> { "," \<parametro\> }  
\<parametro\> ::= "$" \<identificador\> ":" \<tipo\>  
\<tipo\> ::= "entero" | "cadena" | "booleano" | "flotante" | "vacio"  
\<llamada\_funcion\> ::= \<identificador\> "(" \[\<lista\_argumentos\>\] ")"  
\<lista\_argumentos\> ::= \<expresion\> { "," \<expresion\> }  
\<bloque\> ::= "{" { \<sentencia\> } "}"  
\<sentencia\> ::= \<asignacion\>   
              | \<llamada\_funcion\> ";"   
              | \<retorno\> ";"  
              | \<sentencia\_control\>  
\<retorno\> ::= "retornar" \[\<expresion\>\]  
Ejemplo:  
funcion esMayor($edad: entero, $limite: entero): booleano {  
    si (edad \>= limite) {  
        retornar true;  
    }  
    retornar false;  
}  
// Llamada  
$validacion:booleano \= esMayor(18, 21); 

\========================matemático=============//  
\<expresion\> ::= \<exp\_aritmetica\>   
              | "(" \<expresion\> ")"  
\<exp\_aritmetica\> ::= \<exp\_aritmetica\> \<op\_suma\> \<termino\>  
                   | \<termino\>  
\<termino\> ::= \<termino\> \<op\_mul\> \<factor\>  
            | \<factor\>  
\<factor\> ::= \<numero\>   
           | \<identificador\>   
           | "(" \<expresion\> ")"  
           | \<operacion\_potencia\>  
\<operacion\_potencia\> ::= \<factor\> "^" \<factor\>  
\<op\_suma\> ::= "+" | "-"  
\<op\_mul\> ::= "\*" | "/" | "%"  
\<identificador\> ::= \[a-zA-Z\_\]\[a-zA-Z0-9\_\]\*  
\<numero\> ::= \[0-9\]+ | \[0-9\]+"."\[0-9\]+

* \<expresion\> → Es la base de la gramática, puede ser una expresión aritmética o estar encerrada entre paréntesis.  
* \<exp\_aritmetica\> → Maneja sumas y restas.  
* \<termino\> → Maneja multiplicaciones, divisiones y módulos.  
* \<factor\> → Puede ser un número, una variable, otra expresión entre paréntesis o una potencia.  
* \<operacion\_potencia\> → Define la operación de exponente (^).  
* \<op\_suma\> y \<op\_mul\> → Contienen los operadores básicos (+, \-, \*, /, %).  
* \<identificador\> → Define variables.  
* \<numero\> → Soporta enteros y decimales.

Aquí está el **árbol de derivación** para la expresión:

5 \+ 3 \* 2

                \<expresion\>  
                     │  
           ┌────────┴────────┐  
      \<exp\_aritmetica\>      \<termino\>  
           │                  │  
     ┌────┴────┐         ┌────┴────┐  
    5    \<op\_suma\>     \<termino\>  \<factor\>  
         ("+")          │          │  
                  ┌─────┴─────┐     2  
                3  \<op\_mul\>    
                   ("\*")

\========================comparación=============//

S → E "==" E

S → E "\!=" E

S → E "\>=" E

S → E "\<=" E

S → E "\>" E

S → E "\<" E

En esta forma de la gramática:

* **S** es el símbolo de inicio o la regla principal.  
* **E** representa una **expresión**, que puede ser cualquier operación o valor que se pueda comparar.  
* Los operadores de comparación (==, \!=, \>=, \<=, \>, \<) se aplican entre dos expresiones.

Este enfoque es más jerárquico y estructurado, y representa las comparaciones dentro del marco de precedencia de los operadores, en lugar de detallarlas una por una.

expresión\_comparación → expresión\_relacional ( "==" | "\!=" | "\>=" | "\<=" | "\>" | "\<" ) expresión\_relacional | expresión\_relacional

expresión\_comparación\_igualdad → expresión\_relacional "=="expresión\_relacional  
expresión\_comparación\_desigualdad → expresión\_relacional "\!=" expresión\_relacional  
expresión\_comparación\_mayor\_igual → expresión\_relacional"\>="expresión\_relacional

expresión\_comparación\_menor\_igual → expresión\_relacional "\<=" expresión\_relacional

expresión\_comparación\_mayor → expresión\_relacional "\>" expresión\_relacional

expresión\_comparación\_menor → expresión\_relacional "\<" expresión\_relacional

 \==

/  \\

E    E

    \!=

   /  \\

  E   E

    \>=

   /  \\

  E    E

    \<=

   /  \\

  E   E

    \>

   /  \\

  E    E

    \<

   /  \\

E      E

Funciones Preestablecidas BNF  
Mate.raiz()  
\<expresion\> ::= \<expresion\_aritmetica\>  
              | \<funcion\_prestablecida\>  
              | \<valor\>  
              | \<identificador\>

\<funcion\_prestablecida\> ::= "Mate.raiz" "(" \<expresion\> "," \<expresion\> ")"

Mate.potencia()  
\<expresion\> ::= \<expresion\_aritmetica\>  
              | \<funcion\_prestablecida\>  
              | \<valor\>  
              | \<identificador\>

\<funcion\_prestablecida\> ::= "Mate.potencia" "(" \<expresion\> "," \<expresion\> ")"

Arbol Sintactico  
![][image1]

imprimir()  
\<sentencia\> ::= \<asignacion\>  
              | \<declaracion\_variable\>  
              | \<declaracion\_funcion\>  
              | \<sentencia\_control\>  
              | \<expresion\> ";"  
              | \<segun\>  
              | \<bloque\_codigo\>  
              | \<sentencia\_imprimir\>

\<sentencia\_imprimir\> ::= "imprimir" "(" \<expresion\> ")" ";"

entrada()  
\<llamada\_funcion\_prestablecida\> ::= entrada" "(" ")"   
\<expresion\> ::= \<expresion\_aritmetica\>  
              | \<llamada\_funcion\_prestablecida\>  
              | \<valor\>  
              | \<identificador\>
