---
title: Comprobación de tipos (type checking)
sidebar:
  order: 5
---
La **comprobación de tipos**  es el proceso de verificar que las operaciones, asignaciones y llamadas a funciones en un programa utilicen tipos de datos compatibles. Dado que LibreScript es un lenguaje de tipado estático, esta validación se realiza en **tiempo de compilación**, antes de que el programa se ejecute. Esto ayuda a prevenir una gran categoría de errores lógicos y de ejecución.

**¿Cómo se valida la compatibilidad de tipos?**
El analizador semántico utiliza la información de tipo almacenada en la tabla de símbolos para realizar la comprobación de tipos. El proceso general es el siguiente:

Tipos de Expresiones: Para cada expresión en el código fuente, el analizador determina su tipo. Esto puede implicar buscar el tipo de una variable en la tabla de símbolos, aplicar reglas de inferencia de tipos (ej., el tipo de 10 + 5 es numero), o verificar el tipo de retorno de una función.
Tipos Esperados: Para cada operación, asignación o llamada a función, el analizador conoce los tipos esperados de los operandos o argumentos. Por ejemplo, el operador + espera operandos de tipo numero, la asignación a una variable espera un valor del mismo tipo que la variable, y una llamada a función espera argumentos que coincidan con los tipos de los parámetros definidos en la función.
Comparación de Tipos: El analizador compara el tipo obtenido de una expresión con el tipo esperado. Si los tipos coinciden, la operación es válida. Si no, se reporta un error de tipo.

**Ejemplos de Código **Correcto** (Cumplimiento de Reglas de Tipo):**

```bash
// Asignaciones básicas y compatibles
$edad: numero = 25;       // OK: 'numero' a 'numero'
$nombre: texto = "Juan";  // OK: 'texto' a 'texto'
$esActivo: booleano = verdadero; // OK: 'booleano' a 'booleano'

// Operaciones aritméticas con tipos compatibles
$a: numero = 10;
$b: numero = 20;
$suma: numero = $a + $b; // OK: Suma de dos 'numero'

// Operaciones lógicas con tipos compatibles
$cond1: booleano = ($a > $b); // OK: Comparación de 'numero' -> 'booleano'
$cond2: booleano = ($esActivo && $cond1); // OK: AND lógico de dos 'booleano'

// Llamadas a funciones con argumentos y retorno compatibles
funcion sumarDosNumeros($x: numero, $y: numero): numero {
    devolver $x + $y;
}
$resultadoSuma: numero = sumarDosNumeros(5, 10); // OK: Argumentos 'numero', retorno 'numero'
```

**Ejemplos de Código con Errores de Tipo (Infracción de Reglas de Tipo):**

```bash
// Error: Asignación de tipo incompatible
$edad: numero = "veinte"; // Error Semántico: No se puede asignar 'texto' a una variable de tipo 'numero'.

// Error: Operación aritmética con tipos incompatibles
$num: numero = 5;
$cad: texto = "abc";
$res: numero = $num * $cad; // Error Semántico: Operación '*' no definida para operandos de tipo 'numero' y 'texto'.

// Error: Operador unario con tipo incompatible
$estaListo: booleano = verdadero;
$negado: numero = -$estaListo; // Error Semántico: Operador unario '-' no definido para operando de tipo 'booleano'.

// Error: Condición de control de flujo no booleana
$valorNumerico: numero = 1;
si ($valorNumerico) { // Error Semántico: La condición de la sentencia 'si' debe ser de tipo 'booleano'.
    imprimir("Esto no debería ejecutarse");
}
```
