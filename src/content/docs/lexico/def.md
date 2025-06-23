---
title: Definición y objetivos 
sidebar:
  order: 1
---
El análisis léxico es la primera fase del proceso de compilación, fundamental para traducir el código fuente escrito por el programador a un formato que el resto del compilador pueda entender.

El **analizador léxico** (o *escáner*) es el componente del compilador encargado de leer el código fuente carácter por carácter y agruparlos en secuencias significativas, conocidas como **tokens**. Es la interfaz entre el código de alto nivel y las fases posteriores de análisis.

**Objetivos Principales:**

1.  **Tokenización:** Transformar un flujo de caracteres en un flujo de tokens. Cada token representa una unidad léxica con un significado específico en el lenguaje (ej., una palabra clave, un identificador, un operador).
2.  **Eliminación de Elementos Irrelevantes:** Ignorar espacios en blanco, saltos de línea y comentarios, ya que no son significativos para la estructura sintáctica del programa.
3.  **Detección de Errores Léxicos:** Identificar y reportar secuencias de caracteres que no corresponden a ningún patrón de token válido.
