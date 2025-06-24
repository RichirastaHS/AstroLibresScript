---
    title: Manejo de errores
    sidebar:
        order: 18
---

El manejo de errores en LibreScript se aborda principalmente a través de su diseño de **tipado fuerte y estático**, lo que permite que la mayoría de los errores lógicos y de tipo sean detectados en la **fase de compilación** (antes de la ejecución del programa). LibreScript, en su diseño actual, se centra en la prevención de errores mediante la validación temprana, en lugar de proporcionar mecanismos complejos para el manejo de excepciones en tiempo de ejecución.

---

## Errores Sintácticos

Los errores sintácticos se producen cuando el código fuente no cumple con las reglas gramaticales definidas por LibreScript. Estos errores impiden que el compilador construya una representación válida del programa.

* **Detección a Nivel de Compilación:** LibreScript no posee construcciones de lenguaje para "gestionar" o "capturar" errores sintácticos directamente dentro del código. Es responsabilidad del **compilador** (específicamente, sus fases léxica y sintáctica) detectar estas anomalías.
* **Reporte del Compilador:** El compilador proporciona mensajes de error detallados, incluyendo la línea y columna exactas donde se detectó el error, el token inesperado y los tokens esperados, para facilitar la depuración por parte del programador. (Para más detalles sobre los errores léxicos y sintácticos reportados por el compilador, consulte la sección [Errores detectados](/manualprogramador/errores) y [Mensajes de Error](/manual/errores).)
