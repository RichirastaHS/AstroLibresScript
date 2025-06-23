---
title: Tabla de símbolos 
sidebar:
  order: 3
---


La **tabla de símbolos** es una estructura de datos central en el análisis semántico. Actúa como un repositorio que almacena información sobre todos los identificadores (variables, constantes, funciones, clases, etc.) encontrados en el código fuente. El analizador semántico utiliza la tabla de símbolos para verificar que los identificadores se utilicen de manera consistente y de acuerdo con las reglas del lenguaje.

### ¿Qué es y cómo se construye?

La tabla de símbolos es esencialmente un conjunto de mapeos (diccionarios) que asocian nombres de identificadores con información detallada sobre ellos. En un lenguaje con ámbitos anidados como LibreScript, la tabla de símbolos se organiza jerárquicamente, con una tabla global y tablas locales para cada ámbito (funciones, clases, bloques).

**Construcción:**

1.  **Inicialización:** El compilador comienza con una tabla de símbolos global vacía.
2.  **Declaración de Identificadores:** Cuando el analizador semántico encuentra una declaración (ej., `$x: numero = 10;`, `funcion saludar($nombre: texto)`), crea una nueva entrada en la tabla de símbolos *actual*. El ámbito actual depende del contexto de la declaración (global, función, clase, bloque).
3.  **Entrada de Ámbitos:** Cuando el analizador entra en un nuevo ámbito (ej., al procesar el cuerpo de una función o un bloque `{...}`), crea una nueva tabla de símbolos *local* y la enlaza a la tabla de símbolos del ámbito padre. Esta tabla local se convierte en la tabla de símbolos *actual*.
4.  **Salida de Ámbitos:** Cuando el analizador sale de un ámbito, la tabla de símbolos local se "desactiva" (pero se mantiene para futuras referencias si es necesario), y la tabla de símbolos del ámbito padre se convierte en la tabla de símbolos *actual*.
5.  **Uso de Identificadores:** Cuando el analizador encuentra el *uso* de un identificador (ej., en una expresión o una llamada a función), busca el identificador en la tabla de símbolos *actual*. Si no lo encuentra, busca en las tablas de símbolos de los ámbitos padres, hasta llegar a la tabla global. Si no se encuentra en ningún ámbito, se reporta un error de "identificador no declarado".

### Campos de la Tabla de Símbolos

Cada entrada en la tabla de símbolos contiene información relevante sobre el identificador. Los campos típicos incluyen:

* **Nombre:** El nombre del identificador (ej., `$x`, `saludar`, `Persona`).
* **Tipo:** El tipo de dato del identificador (ej., `numero`, `texto`, `booleano`, `funcion`, `clase`). Para funciones, incluye el tipo de retorno y los tipos de los parámetros.
* **Ámbito:** Una referencia a la tabla de símbolos que representa el ámbito donde el identificador fue declarado. Esto permite el manejo correcto de la visibilidad.
* **Valor:** Para constantes y variables, puede almacenar el valor (si se conoce en tiempo de compilación).
* **Clase (para miembros de clase):** Para atributos y métodos de clase, una referencia a la tabla de símbolos de la clase a la que pertenecen.
* **Otros atributos:** Puede incluir información adicional como si un identificador es mutable o inmutable (variable o constante), si es un parámetro de una función, etc.

**Ejemplo simplificado de una tabla de símbolos (representación conceptual):**
```bash
Tabla de Símbolos Global:
$x : { tipo: numero, ámbito: global, valor: 10 }
saludar : { tipo: funcion, ámbito: global, tipoRetorno: vacio, parámetros: [ { nombre: $nombre, tipo: texto } ] }
Persona : { tipo: clase, ámbito: global, ... }

Tabla de Símbolos para la función saludar:
$nombre : { tipo: texto, ámbito: saludar, ... }

Tabla de Símbolos para la clase Persona:
nombre : { tipo: texto, ámbito: Persona, ... }
constructor : { tipo: funcion, ámbito: Persona, ... }
```