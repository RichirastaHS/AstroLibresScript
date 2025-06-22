---
title: Introducción
sidebar:
  order: 1
---

### Propósito del Lenguaje y del Compilador

LibreScript es un lenguaje de programación diseñado con un enfoque en la claridad y el tipado estricto. Su objetivo principal es ofrecer una sintaxis intuitiva y un sistema de tipos robusto para facilitar el desarrollo de aplicaciones.
El compilador de LibreScript, "LibreScript-main", es la herramienta encargada de traducir el código fuente escrito en LibreScript a un formato ejecutable (o intermedio, dependiendo de su implementación final). Su propósito es analizar, verificar y procesar el código para asegurar su correcta estructura y semántica antes de la ejecución.

### Características Principales de LibreScript

- **Tipado Obligatorio**: LibreScript impone el tipado explícito para todas las variables, promoviendo la detección temprana de errores y una mayor claridad en el código.
- **Sintaxis Clara**: Diseñado para ser legible y fácil de entender.
- **Prefijo de Variables**: Utiliza el signo de dólar (`$`) como prefijo obligatorio para todas las variables  `$miVariable`.
- **Separador de Tipo**: Usa el colon (`:`) para separar el nombre de la variable de su tipo (`$nombre: texto`).
- **Tipos de Datos Integrados**: Soporte para tipos como `numero`, `texto`, `booleano`, `Objeto`, `arreglo`.
