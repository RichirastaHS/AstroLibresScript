---
title: Descripción general del sistema
sidebar:
  order: 2
---

El compilador está dividido en las siguientes fases principales:

1. Análisis léxico: Utiliza expresiones regulares para dividir el código en tokens significativos como palabras clave, identificadores, literales y operadores.

2. Análisis sintáctico: Utiliza reglas gramaticales para construir un árbol de sintaxis abstracta (AST) que represente la estructura jerárquica del código.

3. Análisis semántico: Recorre el AST para verificar tipos, ámbitos, definiciones de variables, tipos de retorno, y consistencia general del programa.

4. Manejo de errores: Durante cada fase, el sistema captura errores léxicos, sintácticos o semánticos y muestra mensajes claros al usuario.

Ejemplo de código con LibreScript

```ts
    $resultado: numero = 10 + 5;
    imprimir($resultado);
```
