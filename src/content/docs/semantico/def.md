---
title:  Definición y propósito del análisis semántico
sidebar:
  order: 1
---
El **análisis semántico** es una fase crucial en el proceso de compilación, que sigue al análisis léxico y sintáctico. Su objetivo principal es verificar que el programa fuente, aunque sintácticamente correcto, también tenga un significado válido y sea coherente con las reglas de significado del lenguaje. Es en esta fase donde se detectan errores que no pueden ser identificados solo por la estructura gramatical.

El **análisis semántico** es el proceso de añadir información de significado al Árbol de Sintaxis Abstracta (AST) generado por el analizador sintáctico y de verificar la consistencia del programa con las reglas semánticas del lenguaje. Si bien el analizador sintáctico se asegura de que las palabras estén en el orden correcto, el analizador semántico se asegura de que esas palabras *tengan sentido* en su contexto.

**Función en el Proceso de Compilación:**

1. **Verificación de Tipos (Type Checking):** Una de las tareas más importantes. Asegura que las operaciones se realicen sobre tipos de datos compatibles (ej., no sumar un `numero` y un `texto` a menos que haya una conversión implícita definida), y que los valores asignados a variables coincidan con su tipo declarado.
2. **Verificación de Declaraciones:** Confirma que todas las variables, constantes y funciones utilizadas en el programa han sido previamente declaradas.
3. **Manejo de Ámbitos (Scope Management):** Gestiona la visibilidad de los identificadores. Asegura que las referencias a variables y funciones se resuelvan al identificador correcto en el ámbito adecuado (local, global, etc.).
4. **Verificación de Llamadas a Funciones/Métodos:** Comprueba que el número y los tipos de los argumentos pasados en una llamada de función coincidan con los parámetros esperados en su definición.
5. **Validación de Estructuras de Control:** Por ejemplo, verifica que la condición en un `si`, `mientras` o `para` sea de tipo booleano, o que una sentencia `romper` o `devolver` se encuentre dentro de un contexto válido (un bucle/`segun` para `romper`, una función para `devolver`).
6. **Decoración del AST:** Durante este proceso, el analizador semántico puede "decorar" el AST añadiendo información valiosa a los nodos, como los tipos inferidos de expresiones o referencias directas a las entradas de la tabla de símbolos. Este AST "decorado" es la entrada para las fases posteriores, como la generación de código intermedio.
7. **Reporte de Errores Semánticos:** Cuando se detecta una inconsistencia semántica (ej., usar una variable no declarada, asignar un tipo incorrecto, llamar a una función con argumentos erróneos), el analizador semántico genera un error y lo reporta al usuario.

### Diferencia con el Análisis Sintáctico

La distinción clave entre el análisis sintáctico y el semántico radica en el nivel de verificación:

* **Análisis Sintáctico (Forma):** Se centra en la *estructura* del programa. Responde a la pregunta: "¿Está el código gramaticalmente bien formado según las reglas de producción del lenguaje?". Por ejemplo, `$a = 10;` es sintácticamente correcto si sigue la regla `Asignacion ::= Designable OP_ASIGNACION Expresion PUNTO_Y_COMA`. No le importa si `$a` fue declarada o si `10` es un tipo válido para `$a`.
* **Análisis Semántico (Significado):** Se centra en el *significado* y la *consistencia* del programa. Responde a la pregunta: "¿Tiene sentido este código en el contexto del lenguaje y las declaraciones realizadas?". Por ejemplo, si `$a` fue declarada como `texto`, la asignación `$a = 10;` sería un error semántico de tipo, aunque sintácticamente es válida.

En resumen, el analizador sintáctico verifica la "gramática" y el analizador semántico verifica el "sentido" o la "lógica" del programa, asegurando que cumple con las reglas más profundas del lenguaje.
