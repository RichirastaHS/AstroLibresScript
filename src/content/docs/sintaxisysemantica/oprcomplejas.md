---
    title: Operaciones y Expresiones Complejas
    sidebar:
        order: 17
---

LibreScript maneja expresiones complejas con la **prioridad y asociatividad estándar** de operadores, permitiendo el uso de paréntesis `()` para forzar un orden de evaluación.

* **Precedencia de Operadores:**

  * `**` (Potencia) tiene mayor precedencia.  
  * `*`, `/`, `%` (Multiplicación, División, Módulo) tienen mayor precedencia que `+`, `-`.  
  * `+`, `-` (Suma, Resta)  
  * Operadores de comparación (`>`, `<`, `==`, `!=`, etc.)  
  * Operadores lógicos (`&&`, `||`)  
  * Operadores de asignación (`=`, `+=`, etc.)  
* **Operador Unario Menos (`-`):** Se usa para negar un valor numérico.

  * Ejemplo: `-$a`

```ts
    $a: numero = 10;  
    $negativo: numero = -$a;   
    imprimir($negativo); // Salida: \-10
```

```ts
$a: numero = 10;
$b: numero = 20;
$c: numero = 5;

$res1: numero = $a + $b * $c;       // Precedencia: 10 + (20 * 5) = 110
$res2: numero = ($a + $b) * $c;     // Paréntesis: (10 + 20) * 5 = 150
$res3: numero = $a ** 2;            // Potencia: 10 * 10 = 100
$res4: numero = $b / $c + $a % 3;   // División (20/5=4), Módulo (10%3=1), Suma (4+1=5)
imprimir("Resultados de expresiones:");
imprimir($res1); // Salida: 110
imprimir($res2); // Salida: 150
imprimir($res3); // Salida: 100
imprimir($res4); // Salida: 5

```

```ts
$a: numero = 10;
$b: numero = 20;
$c: numero = 5;

$cond1: booleano = ($a > $b) && ($b < $c);  // (falso) && (falso) = falso
$cond2: booleano = ($a < $b) || ($b < $c);  // (verdadero) || (falso) = verdadero
$cond3: booleano = !($a == $b);             // !(falso) = verdadero

imprimir($cond1); // Salida: falso
imprimir($cond2); // Salida: verdadero
imprimir($cond3); // Salida: verdadero

```
