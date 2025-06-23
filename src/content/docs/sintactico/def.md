---
title: Definición y objetivos 
sidebar:
  order: 1
---
El análisis sintáctico es la segunda fase crucial del proceso de compilación. Su objetivo es verificar que la secuencia de tokens generada por el analizador léxico cumple con la estructura gramatical del lenguaje, y de ser así, construir una representación jerárquica del código fuente.


El **analizador sintáctico** (o *parser*) toma el flujo de tokens (la salida del analizador léxico) y lo agrupa de acuerdo con las reglas de la gramática del lenguaje. Su función principal es determinar si el programa fuente es sintácticamente correcto.

**Papel dentro del Compilador:**

1.  **Verificación Gramatical:** Asegura que los tokens están organizados de una manera que es gramaticalmente válida según las reglas del lenguaje. Por ejemplo, verifica que los paréntesis y llaves estén balanceados, que las sentencias terminen con un punto y coma, y que las estructuras de control (`si`, `mientras`, `clase`) estén bien formadas.
2.  **Construcción del Árbol de Sintaxis Abstracta (AST):** Si el código es sintácticamente correcto, el analizador sintáctico construye una representación jerárquica del programa, conocida como el Árbol de Sintaxis Abstracta (AST). El AST elimina detalles superfluos del código fuente (como paréntesis redundantes o la mayoría de los espacios en blanco) y se centra en la estructura esencial y el significado del programa. Este AST será la entrada para la siguiente fase: el análisis semántico.
3.  **Detección y Reporte de Errores Sintácticos:** Cuando el analizador sintáctico encuentra una secuencia de tokens que no puede ser parseada según la gramática (ej., un token inesperado o la ausencia de un token esperado), reporta un error sintáctico, indicando la ubicación y la naturaleza del problema.

El analizador sintáctico de LibreScript está implementado utilizando **Nearley.js**, un generador de parsers que trabaja con gramáticas BNF.
