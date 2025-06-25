---
title: Bloques de Código
sidebar:
  order: 3
---

## Bloques de Código

Los bloques de código se delimitan utilizando llaves `{}`. Un bloque de código agrupa varias sentencias y las trata como una sola. Se utiliza en estructuras como funciones, condiciones y bucles.

### Características

- Se pueden anidar múltiples bloques dentro de otros, permitiendo estructuras más complejas.
- Los bloques de código se marcan dentro de funciones, condicionales (`si`), bucles (`mientras`, `para`), y otras estructuras de control.
- Las variables declaradas dentro de un bloque `{}` tienen un **alcance local** y no son accesibles fuera de él.
- Las **variables globales** pueden ser usadas dentro de un bloque, pero si se redeclaran dentro, se creará una nueva variable local.

### Sintaxis

- Delimitación con `{}`: Todo bloque de código debe iniciarse con `{` y finalizar con `}`.

```js
  $estatura: numero = 1.60;
  si ($estatura >= 1.50) { 
      imprimir("Eres chaparro");
  } siNo {
      imprimir("Eres alto");
  }
```
