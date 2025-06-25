---
title: Cómo Escribir Programas en LibreScript
sidebar:
  order: 3
---

Aquí se presenta una guía básica de la sintaxis y ejemplos para empezar a escribir código en LibreScript.

## Conceptos Básicos

**`numero`**: Abarca tanto enteros como números con decimales.

* Ejemplo de declaración:

```ts
$a: numero = 0;
```

**`texto`**: Para cadenas de texto.

* Ejemplo de declaración:

```ts
$mensaje: texto = "Hola, mundo soy: !LibreScript!";
```

**`booleano`**: Para valores lógicos verdadero y falso.

* Ejemplo de declaración :

```ts
$estaHecho: booleano = falso; 
$tienePermiso: booleano = verdadero;
```

**`Objeto`**: Para estructuras de datos con pares clave-valor

* Ejemplo de declaración y asignación:

```ts
$persona: Objeto = {
    nombre: "Juan",
    edad: 25
};
```

**`Arreglos (Arrays)`**: Para colecciones de elementos del mismo tipo.

* Ejemplo de declaración y asignación de un arreglo de texto:

```ts
$numeros: numero[] = [1, 2, 3, 4, 5];
$nombres: texto[] = ["Ana", "Luis", "Carlos"];
```

### Declaración y Asignación de Variables

* Declaración: `$nombreVariable: TipoDeDato;`

* Asignación: `$nombreVariable = valor;`

* Declaración y Asignación: `$nombreVariable: TipoDeDato = valor;`

```ts
  $cantidad: numero=200;

  $cantidad = 100;

  $mensaje: texto = "LibreScript es genial!";

  $esValido: booleano = verdadero;
```

### Constantes

Las constantes se declaran con un doble signo de dólar `$$`. Su valor no puede ser reasignado después de la inicialización.

```ts
$$PI: numero = 3.14159;
$$GRAVEDAD: numero = 9.81;
```

### Operadores

LibreScript soporta operadores aritméticos, relacionales, lógicos y de asignación.

| Tipo de Operador     | Símbolos| Descripción|
|----------------------|------------------------------------------|---------------------------------------------|
| **Aritméticos**| `+`, `-`, `*`, `/`, `**`, `%`| Suma, resta, multiplicación, división, potencia, módulo |
| **Incremento/Decremento** | `++`, `--`| Incrementa o decrementa en 1|
| **Relacionales** | `==`, `!=`, `<`, `>`, `<=`, `>=` | Comparación: igual, diferente, menor, mayor, etc. |
| **Lógicos**           | `&&`, `ll`, `!`  | AND, OR, NOT |
| **Asignación**        | `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`  | Asignación directa y compuesta|

Ejemplos:

```ts
$a: numero = 10;
$b: numero = 20;
$c: numero = 5;

$res1: numero = $a + $b * $c; // Precedencia: 10 + (20 * 5) = 110
$res2: numero = ($a + $b) * $c; // Paréntesis: (10 + 20) * 5 = 150
$res3: numero = $a ** 2; // Potencia: 10 * 10 = 100
$res4: numero = $b / $c + $a % 3; // División (20/5=4), Módulo (10%3=1), Suma (4+1=5)

$cond1: booleano = ($a>$b)&&($b<$c); // (falso)&&(falso) = falso
$cond2: booleano = ($a<$b) || ($b<$c); // (verdadero) || (falso) = verdadero
$cond3: booleano = !($a == $b); // !(falso) = verdadero
```

### Estructuras de control

**Condicional si / siNo si / siNo:**

```ts
si ($edad >= 18) {
    imprimir("Es mayor de edad.");
} siNo si ($edad >= 13) {
    imprimir("Es un adolescente.");
} siNo {
    imprimir("Es un niño.");
}
```

**Bucle mientras:**

```ts
$contador: numero = 0;
mientras ($contador<5) {
    imprimir("Contador: " + aTxt($contador));
    $contador + 1;
}
```

**Bucle para:**

```ts
para ($i: numero = 0; $i<10; $i+1) {
    imprimir("Iteración: " + aTxt($i));
}
```

**Sentencia romper: Para salir de un bucle.**

```ts
mientras (verdadero) {
    imprimir("Bucle infinito (romperá en la siguiente línea)");
    romper;
}
```

**Sentencia segun (switch):**

```ts
$opcion: numero = 2;
segun ($opcion) {
    caso 1:{
        imprimir("Seleccionaste la opción 1.");
    }romper;
    caso 2:{
        imprimir("Seleccionaste la opción 2.");
    }romper;
    pordefecto:{
        imprimir("Opción no reconocida.");
    }
}
```

### Funciones

**Declaración de Función:**

```ts
funcion saludar($nombre: texto): texto {
    devolver "Hola, " + $nombre + "!";
}

funcion sumar($a: numero, $b: numero): numero {
    devolver $a + $b;
}

funcion imprimirMensaje($msg: texto): vacio {
    imprimir("Este es un mensaje sin retorno.");
}
```

**Llamada a Función:**

```ts
$mensajePersonalizado: texto = saludar("Mundo");
imprimir($mensajePersonalizado); // Salida: "Hola, Mundo!"

$resultadoSuma: numero = sumar(5, 3);
imprimir(aTxt($resultadoSuma)); // Salida: "8"

imprimirMensaje(); // Salida: "Este es un mensaje sin retorno."
```

**Funciones Predefinidas:**
**`imprimir(valor: cualquier_tipo)`:** Imprime el valor en la consola.
**`leer()`:** Lee una línea de entrada desde la consola (suponiendo que esta función se implemente).
aNum(valor: texto): Convierte un texto a número.
**`aTxt(valor: cualquier_primitivo)`:** Convierte cualquier tipo primitivo a texto.
**`aBool(valor: cualquier_primitivo)`:** Convierte cualquier tipo primitivo a booleano.

### Objeto

**Creación de Objeto (Instanciación):**

```ts
$miPersona: Objeto = nuevo Persona("Carlos", 30);
```

### Acceso a Arreglos y Objetos Literales

**Acceso a Elementos de Arreglo:**

```ts
$colores: texto[] = ["rojo", "verde", "azul"];
imprimir($colores[0]); // Salida: "rojo"
```
