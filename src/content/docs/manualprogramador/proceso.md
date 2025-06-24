---
title: Proceso de construcción y ejecución 
sidebar:
  order: 6
---

## Procesos De Construcción Y Ejecución

### Requisitos previos

Descargar el compilador del siguiente repositorio de github: [Repositorio de LibreScript](https://github.com/AdrCrz/librescript)
Tener instalado Node.js versión 14 o superior
Para verificar que se tenga instalado `node.js` pede utilizar el siguiente comando en una terminal:

```bash
 node -v
```

### Pasos de ejecución

Dentro de la estructura del copilador ingresar a la carpeta examples que es donde va el código fuente de LibreScript para crear un archivo nuevo siempre debe ir en dicha carpeta y con la extensión `.ls`
Si se modifica el archivo grammar.ne que es el archivo para el analizar sintáctico y que contine las reglas gramaticales se debe realizar un compilado del código completo, este se realiza con la siguiente línea:

```bash
npx nearleyc src/grammar.ne -o src/grammar.js
```

:::note

```bash
    node main.js
```

Esta linea se usa para ver el funcionamiento del compilador de libreScript
:::

