---
title: Herramientas de generación léxica 
sidebar:
  order: 6
---
### Moo.js

Para la creación del analizador léxico de LibreScript, se ha utilizado la librería **Moo.js**. Moo es un lexer generador escrito en JavaScript, diseñado para ser rápido, ligero y fácil de usar, ideal para proyectos basados en Node.js y entornos de navegador.


* **Naturaleza:** Moo.js es una librería que permite definir un analizador léxico directamente en código, sin la necesidad de archivos de especificación externos complejos como los utilizados por herramientas más tradicionales.
* **Características Principales:**
    * **Definición de Reglas Clara:** Las reglas léxicas se definen como un objeto simple, donde las claves son los nombres de los tokens y los valores son sus expresiones regulares correspondientes o configuraciones más avanzadas para el manejo de líneas y estados.
    * **Rendimiento:** Está optimizado para la velocidad.
    * **Información de Posición:** Los tokens generados incluyen automáticamente información detallada como el tipo, valor (lexema), línea, columna y desplazamiento (`offset`), lo que es crucial para el reporte de errores preciso.
    * **Integración Sencilla:** Dada su naturaleza, se integra sin problemas en proyectos Node.js, como es el caso del compilador de LibreScript.

### Uso con Node.js
La integración de Moo.js en un proyecto Node.js es directa:

1.  **Instalación:** Se instala vía npm: `npm install moo`
2.  **Definición del Lexer:** Se crea un archivo JavaScript (ej., `lexer.js`) donde se importa `moo` y se define el analizador léxico usando `moo.compile()`:

    ```javascript
    // lexer.js
    import moo from 'moo';

    const lexer = moo.compile({
      // Definición de todas las reglas de tokens aquí
    });

    export default lexer; // Para poder importarlo en otros módulos

    **Uso en el Compilador:** Otros módulos del compilador (ej., `parser.js` o `main.js`) importan este objeto `lexer` y lo utilizan para tokenizar el código fuente.

    ```javascript
    // parser.js o main.js
    import lexer from './lexer.js';

    function analizarCodigo(codigoFuente) {
      lexer.reset(codigoFuente); // Carga el código fuente en el lexer
      const tokens = [];
      let token;
      while ((token = lexer.next())) { // Itera sobre los tokens
        tokens.push(token);
      }
      return tokens;
    }
    ``` 
