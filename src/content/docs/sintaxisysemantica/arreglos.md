---
title: Arreglos
sidebar:
    order: 5
---

LibreScript soporta arreglos para almacenar colecciones ordenadas de elementos del mismo tipo.

* **Declaración:** Se declara el tipo de los elementos seguido de corchetes `[]`.  
  * Ejemplo: `$numeros: numero[];`  
* **Inicialización:** No pueden inicializarse vacíos (`[]`) Deben hacerlo con una lista de valores separados por comas entre corchetes.  
  * Ejemplo: `$edades: numero[] = [25, 30, 22, 40];`  
* **Acceso a Elementos:** Se usa el nombre del arreglo seguido de un índice numérico entre corchetes `[]`. Los índices son base 0 (el primer elemento está en el índice 0).  
  * Ejemplo: `$edades[0]`  
* **Asignación a Elementos:** Se puede asignar un nuevo valor a un elemento específico utilizando su índice.  
  * Ejemplo: `$edades[1] = 31;`  
* **Arreglos Multidimensionales (Matrices):** Se declaran añadiendo pares de corchetes por cada dimensión.  
  * Ejemplo: `$matriz: numero[][] = [[1, 2], [3, 4]];`  
  * Acceso a elementos multidimensionales: `$matriz[1][0]`

```ts
// Declaración e inicialización de arreglo de números  
$edades: numero[] = [25, 30, 22, 40];  
// Acceso a elementos del arreglo  
imprimir("Primera edad: " + $edades[0]);  
imprimir("Última edad: " + $edades[3]);  
// Asignación a un elemento  
$edades[1] = 31;  
imprimir("Nueva segunda edad: " + $edades[1]);

// Arreglos de texto  
$nombres: texto[] = ["Ana", "Luis", "Marta"];  
imprimir("Primer nombre: " + $nombres[0]);

// Arreglo de arreglos (matriz)  
$matriz: numero[][] = [[1, 2], [3, 4]];  
imprimir("Elemento central: " + $matriz[1][0]);  
$matriz[0][1] = 99;  
imprimir("Elemento modificado: " + $matriz[0][1]);

```
