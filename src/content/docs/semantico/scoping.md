---
title:  Manejo de ámbitos (scoping) 
sidebar:
  order: 4
---
El **manejo de ámbitos** es la forma en que un lenguaje determina la visibilidad y el tiempo de vida de los identificadores. LibreScript utiliza un modelo de ámbitos léxicos (o estáticos), donde el ámbito de un identificador está determinado por su posición en el código fuente, no por el flujo de ejecución.

### Niveles de Visibilidad

LibreScript tiene los siguientes niveles de visibilidad principales:

* **Global:** Los identificadores declarados fuera de cualquier función, clase o bloque tienen ámbito global. Son visibles y accesibles desde cualquier parte del programa.
* **Local:** Los identificadores declarados dentro de una función, clase o bloque tienen ámbito local. Solo son visibles y accesibles dentro de ese ámbito.

### Gestión de Ámbitos

El analizador semántico gestiona los ámbitos utilizando la tabla de símbolos jerárquica descrita en la sección 6.3.

1.  **Ámbito Actual:** El analizador mantiene una referencia a la tabla de símbolos que representa el *ámbito actual*. Inicialmente, el ámbito actual es la tabla de símbolos global.
2.  **Entrada a un Nuevo Ámbito:** Cuando el analizador entra en un nuevo ámbito (ej., al procesar una función, clase o bloque), crea una nueva tabla de símbolos local y la convierte en el ámbito actual. Esta nueva tabla se enlaza a la tabla de símbolos del ámbito padre.
3.  **Búsqueda de Identificadores:** Cuando el analizador encuentra el *uso* de un identificador, lo busca en la tabla de símbolos del ámbito actual. Si no lo encuentra, busca en las tablas de símbolos de los ámbitos padres, siguiendo la cadena de enlaces hasta la tabla global.
4.  **Salida de un Ámbito:** Cuando el analizador sale de un ámbito, la tabla de símbolos local se "desactiva" (aunque puede mantenerse en memoria para futuras referencias), y el ámbito actual vuelve a ser la tabla de símbolos del ámbito padre.

**Ejemplo con Declaraciones en Distintos Bloques:**

```bash
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
