---
title: Tokens y lexemas 
sidebar:
  order: 2
---
Para comprender mejor el análisis léxico, es importante distinguir entre **lexema** y **token**:

* **Lexema:** Es la secuencia de caracteres en el código fuente que coincide con un patrón para un token. Por ejemplo, en la sentencia `imprimir("Hola");`, `imprimir` es un lexema.
* **Token:** Es una unidad atómica que el analizador léxico produce. Consiste en un tipo de token y, opcionalmente, un valor asociado (el lexema en sí). Por ejemplo, `(PR_IMPRIMIR, "imprimir")` o `(TEXTO, "Hola")`.

En LibreScript, los tokens se clasifican de la siguiente manera:

1. **Palabras Reservadas (Keywords):**
    Palabras con un significado predefinido y fijo en el lenguaje. No pueden ser utilizadas como identificadores.
    * Ejemplos: `si`, `siNo`, `funcion`, `imprimir`, `leer`, `devolver`, `nuevo`, `este`, `vacio`, `caso`, `pordefecto`, `romper`, `mientras`, `para`.

2. **Palabras Clave de Tipo de Datos (Type Keywords):**
    Palabras reservadas que definen los tipos de datos fundamentales.
    * Ejemplos: `numero`, `texto`, `booleano`.

3. **Identificadores:**
    Nombres definidos por el programador para variables, constantes, funciones, propiedades de objetos. Siguen reglas específicas de prefijo.
    * **Variables:** Prefijo `$`. Ejemplo: `$miVariable`, `$contador`.
    * **Constantes:** Prefijo `$$`. Ejemplo: `$$PI`, `$$MAX_VALOR`.
    * **Generales:** Nombres de funciones (sin prefijo `$`). Ejemplo: `saludar`.

4. **Literales:**
    Representaciones directas de valores en el código fuente.
    * **Números:** Enteros o decimales. Ejemplo: `10`, `3.14`, `0`.
    * **Textos (Cadenas):** Secuencias de caracteres encerradas entre comillas dobles o simples. Ejemplo: `"Hola Mundo"`, `'LibreScript'`.
    * **Booleanos:** `verdadero`, `falso`.

5. **Operadores:**
    Símbolos o combinaciones de símbolos que realizan operaciones.
    * **Aritméticos:** `+`, `-`, `*`, `/`, `%`, `**` (potencia).
    * **Relacionales:** `==` (igual), `!=` (diferente), `>` (mayor que), `<` (menor que), `>=` (mayor o igual), `<=` (menor o igual).
    * **Lógicos:** `&&` (AND), `||` (OR), `!` (NOT).
    * **Asignación:** `=`, `+=`, `-=`, `*=`, `/=`, `%=`.
    * **Incremento/Decremento:** `++`, `--`.

6. **Delimitadores y Puntuación:**
    Símbolos que estructuran el código y separan elementos.
    * Ejemplos: `(`, `)`, `{`, `}`, `[`, `]`, `;` (punto y coma), `,` (coma), `:` (dos puntos).

7. **Elementos Ignorables:**
    Caracteres que el lexer consume pero no genera tokens para ellos, ya que son significativos solo para la legibilidad.
    * Espacios en blanco (`ws`), saltos de línea (`nl`), comentarios de línea (`//`) y comentarios de bloque (`/* ... */`).
