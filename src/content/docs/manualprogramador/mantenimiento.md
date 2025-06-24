---
title: Mantenimiento  
sidebar:
  order: 8
---

## Mantenimiento

**Consideraciones para modificar o extender el lenguaje:**

La modificación de la gramática (lexer y parser) es un proceso delicado que requiere una comprensión profunda de cómo Moo y Nearley funcionan y cómo interactúan con las fases semánticas.

### Modificaciones del Analizador Léxico (`lexer.js` - Moo)

Al modificar `lexer.js`, ten en cuenta lo siguiente:

1.  **Orden de las Reglas:** Moo procesa las reglas en el orden en que están definidas. Las reglas más específicas o más largas deben ir antes que las más generales para evitar que una expresión regular capture un token incorrecto. 
2.  **Expresiones Regulares:**
    * **Cuidado con `.` y `*`:** El uso de `.` (cualquier carácter excepto salto de línea) y `*` (cero o más) puede ser muy permisivo y llevar a que los tokens capturen más de lo esperado.
3.  **Impacto en el Parser:** Cualquier cambio en los nombres o tipos de tokens en `lexer.js` *debe* reflejarse en `grammar.js`. Nearley depende de que los nombres de los tokens en la gramática (`%NOMBRE_TOKEN`) coincidan con los definidos en el lexer.
4.  **Pruebas Exhaustivas:** Después de cualquier modificación, es fundamental ejecutar una batería de pruebas léxicas para asegurar que todos los tokens se reconocen correctamente y que no hay ambigüedades o fallos de reconocimiento.

### Modificaciones del Analizador Sintáctico (`erroneo.txt` o `grammar.js` - Nearley)

Al modificar la gramática en Nearley, considera lo siguiente:

1.  **Regeneración del Parser:** Cualquier cambio en el archivo `.ne` *requiere* la regeneración del archivo `grammar.js` usando `nearleyc`. No olvides este paso.
2.  **Errores de `Unexpected Token`:** Estos errores indican que el parser encontró un token que no esperaba en ese punto de la secuencia, según las reglas definidas. Revisa la regla gramatical que se estaba procesando y el token que se encontró, comparándolo con lo que *realmente* esperaba la gramática. A menudo, esto significa que una regla es demasiado estricta o que falta una alternativa.
3.  **Pruebas de Unidad para la Gramática:** Para modificaciones significativas, considera escribir pruebas de unidad que validen partes específicas de la gramática, asegurando que patrones sintácticos complejos sean parseados correctamente en el AST esperado.

### Impacto en el Analizador Semántico

Cualquier cambio en la estructura del AST (nombres de nodos, propiedades de nodos) causado por modificaciones en el parser *debe* reflejarse en el analizador semántico (`analyzeSemantics` y funciones auxiliares).

* Si un nodo AST cambia de `tipo: "MiNodoViejo"` a `tipo: "MiNodoNuevo"`, el analizador semántico debe actualizar su lógica para reconocer y procesar `MiNodoNuevo`.
* Si se añaden o eliminan propiedades de un nodo AST, el analizador semántico debe ajustarse para acceder o ignorar esas propiedades.
* Nuevas estructuras del lenguaje (ej., una nueva estructura de bucle) requerirán nuevas reglas en el analizador semántico para verificar su corrección.

---

**Buenas prácticas de extensión:**

Para garantizar la mantenibilidad y facilitar futuras extensiones del compilador de LibreScript, se recomiendan las siguientes prácticas:

1.  **Modularización Clara:**
    * Mantén el lexer, parser, analizador semántico y la tabla de símbolos en archivos separados.
2.  **Comentarios Detallados:**
    * Comenta extensivamente las reglas del lexer y parser, explicando su propósito y cualquier consideración especial.
    * Comenta la lógica del analizador semántico, especialmente las verificaciones de tipos complejas y el manejo de contextos.
3.  **Conveniencia para la Extensión:**
    * **Gramática extensible:** Diseña la gramática de Nearley para que sea fácil añadir nuevas sentencias, expresiones u otras construcciones del lenguaje sin requerir reescrituras masivas. Las reglas genéricas (ej., `Sentencia -> ...`) son clave.
    * **AST bien definido:** Asegúrate de que los nodos AST sean lo suficientemente expresivos para contener toda la información semántica necesaria para futuras fases.
4.  **Manejo de Errores Mejorado:**
    * Extiende el sistema de manejo de errores para proporcionar mensajes más descriptivos y sugerencias de corrección cuando sea posible.
5.  **Documentación Actualizada:** Mantén esta documentación (Manual del Programador) siempre actualizada con cualquier cambio en la arquitectura, la gramática, los tokens o la lógica del analizador semántico.

Seguir estas prácticas facilitará enormemente la evolución de LibreScript y su compilador.
