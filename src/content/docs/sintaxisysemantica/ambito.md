---
    title: Ámbito
    sidebar: 
        order: 13
---

LibreScript manejará el ámbito de las variables siguiendo un modelo de **ámbito léxico (o estático)**, similar al de JavaScript/TypeScript.

**Variables Locales:** Las variables declaradas **dentro de una función** (incluidos sus parámetros) son **locales a esa función**. Solo son accesibles desde dentro del cuerpo de esa función.

**Acceso a Ámbitos Superiores:** Una función puede **acceder a variables declaradas en un ámbito superior** (variables globales o variables de funciones "padre" si está anidada). Sin embargo, una función **no puede modificar directamente** variables de ámbitos superiores si estas son constantes (`$$`) o si se rige por un principio de inmutabilidad estricta (que es el caso con tu tipado obligatorio). Si la variable de ámbito superior es una variable normal (`$`), la función puede leer y modificarla.

Si una variable local tiene el mismo nombre que una variable en un ámbito superior, la variable local "sombrea" a la de ámbito superior, lo que significa que dentro de la función se accederá a la versión local.  
EJEMPLO:  

```ts
$globalVar: numero = 100; // Variable global
funcion miFuncionEjemplo($param: numero): vacio {
    $localVar: numero = 20; // Variable local
    imprimir("Dentro de la función:");
    imprimir("  Parametro: " + $param);    // Acceso a parámetro
    imprimir("  Variable local: " + $localVar); // Acceso a variable local
    imprimir("  Variable global: " + $globalVar); // Acceso a variable global
    $globalVar = 101; // Modificación de variable global (si no es constante)
}
miFuncionEjemplo(5);
imprimir("Fuera de la función, globalVar es: " + $globalVar);
```
