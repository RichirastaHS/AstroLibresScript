---
title: Arquitectura del sistema 
sidebar:
  order: 3
---


### Arquitectura del sistema

Este fragmento de código define una función llamada saludar sin parámetros que imprime el mensaje Hola Mundo.

![Mapa de arquitectura](/AstroLibresScript/img/mapa.jpg)

**Descripción de los Módulos:**

* **Entrada:** Este módulo se encarga de leer el código fuente de LibreScript (`main.js`) desde archivos `.ls`.
* **Analizador Léxico (Moo):** El analizador léxico, implementado con la librería Moo, toma el código fuente como entrada y lo divide en una secuencia de tokens. Cada token representa una unidad léxica significativa, como palabras clave, identificadores, operadores, literales, etc.
* **Analizador Sintáctico (Nearley):** El analizador sintáctico, implementado con la librería Nearley, recibe el flujo de tokens del analizador léxico y construye un Árbol de Sintaxis Abstracta (AST). El AST representa la estructura jerárquica del programa, facilitando el análisis semántico posterior.
* **Analizador Semántico:** Este módulo recorre el AST, realizando verificaciones cruciales para asegurar la coherencia del programa. Esto incluye:
    * **Verificación de tipos:** Asegura que las operaciones se realizan con tipos compatibles.
    * **Resolución de símbolos:** Asocia identificadores con sus declaraciones (variables, funciones, clases, etc.). Utiliza una Tabla de Símbolos para almacenar esta información.
* **Manejo de Errores:** Este módulo recopila y reporta cualquier error encontrado durante el análisis léxico, sintáctico o semántico. Los mensajes de error incluyen la ubicación (línea y columna) y una descripción del problema.
* **Salida:** En la versión actual, la salida principal del compilador es un mensaje indicando si el análisis fue exitoso o si hubo errores.