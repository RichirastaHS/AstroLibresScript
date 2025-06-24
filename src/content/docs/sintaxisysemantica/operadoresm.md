---
    title: Operadores Aritméticos y lógicos
    sidebar:
        order: 6
---

Los operadores matemáticos se utilizan para realizar operaciones aritméticas. Ejemplos:

## Operadores Aritméticos

**`+` (Suma):** Suma dos operandos numéricos. También se utiliza para la concatenación de cadenas de texto.
**`-` (Resta):** Resta el segundo operando del primero.  
**`*` (Multiplicación):** Multiplica dos operandos.  
**`/` (División):** Divide el primer operando entre el segundo.  
**`%` (Módulo):** Obtiene el residuo de una división.  
**`**` (Potencia):** Eleva el primer operando a la potencia del segundo operando.  
**`++` (Incremento):** Incrementa el valor de un operando en 1\. (Asumiremos que es un operador unario, como `$a++;` o `++$a;`).  
**`--` (Decremento):** Decrementa el valor de un operando en 1\. (Asumiremos que es un operador unario, como `$a--;` o `--$a;`).

## Operadores de Asignación Compuesta

**`+=` (Asignación con Suma):** `$a += 5;` es equivalente a `$a = $a + 5;`

**`-=` (Asignación con Resta):** `$a -= 5;` es equivalente a `$a = $a - 5;`

**`*=` (Asignación con Multiplicación):** `$a *= 5;` es equivalente a `$a = $a * 5;`

**`/=` (Asignación con División):** `$a /= 5;` es equivalente a `$a = $a / 5;`

## Operadores de Comparación

Estos operadores se utilizan para comparar dos valores y siempre devuelven un resultado de tipo `booleano`.

**`==` (Comparación de Igualdad):** Verdadero si ambos operandos son iguales.  
**`!=` (Desigualdad):** Verdadero si ambos operandos son diferentes.  
**`>` (Mayor que):** Verdadero si el primer operando es mayor que el segundo.  
**`<` (Menor que):** Verdadero si el primer operando es menor que el segundo.  
**`>=` (Mayor o igual que):** Verdadero si el primer operando es mayor o igual que el segundo.  
**`<=` (Menor o igual que):** Verdadero si el primer operando es menor o igual que el segundo.

## Operadores Lógicos

**`&&` (Y Lógico):** Verdadero si ambas expresiones son verdaderas.

**`||` (O Lógico):** Verdadero si al menos una de las expresiones es verdadera.

**`!` (NO Lógico):** Invierte el valor booleano de una expresión (verdadero se convierte en falso y viceversa).
