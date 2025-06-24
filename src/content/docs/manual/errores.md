---
title: Mensajes de Error
sidebar:
  order: 5
---

El compilador de LibreScript está diseñado para proporcionar mensajes de error útiles. Aquí se explican algunos de los errores comunes y cómo interpretarlos:

## Errores de Parseo (Sintácticos)

Estos errores ocurren cuando el código no sigue las reglas gramaticales del lenguaje.

### Error de parseo:Unexpected token

  ⚠️ **Interpretación:**
  
  El compilador encontró un símbolo o palabra donde no lo esperaba. Esto a menudo indica un error de sintaxis, como una palabra clave mal escrita, un operador fuera de lugar, una coma faltante, o un punto y coma extra.

  ✅ **Solución:**
  
  Examine la línea y columna indicadas en el mensaje de error. Verifique la sintaxis alrededor de error.token y asegúrese de que coincide con las reglas de LibreScript.

  Ejemplo de error:
  
  ```bash
  Error de parseo: Unexpected token: type: ‘NUMERO’, value: ‘123’, text: ‘123’, offset: 23, line: 2, col: 1

  Error cerca de la línea 2, columna 1 (offset 23). Token: ‘123’ (tipo: numero)
  ```

  Esto podría significar que 123 apareció en un lugar donde se esperaba un identificador, una palabra clave, etc.

### Error de parseo:Unexpected end of input

  ⚠️ **Interpretación:**
  
  El compilador llegó al final del archivo antes de esperar que el programa terminara. Esto generalmente significa que falta un cierre de bloque (llave `}`), paréntesis `)`, corchete `]`, o un punto y coma `;` al final de una sentencia.

   ✅ **Solución:**

   Revise el código desde la línea del error hacia atrás, buscando bloques sin cerrar o sentencias incompletas.

## Errores Semánticos

Estos errores ocurren cuando el código es sintácticamente correcto, pero su significado es inválido (por ejemplo, usar una variable no declarada, incompatibilidad de tipos, etc.). El compilador de **LibreScript** utiliza una tabla de símbolos para detectarlos.

### SemanticError: El identificador `${name}` ya ha sido declarado en este ámbito

  ⚠️ **Interpretación:**
  
  Se intentó declarar una variable, constante o función con el mismo nombre que una ya existente en el mismo ámbito.

  ✅ **Solución:**

 Renombre una de las declaraciones para que sean únicas en ese ámbito.

  ```ts
  $contador: numero = 0;

  $contador: numero = 10;  
  ```

  ```bash
  --- Análisis Semántico ---
  Error Semántico 🔴: El identificador '$contador' ya ha sido declarado en este ámbito.
  ```

### SemanticError: La variable ‘${name}’ no ha sido declarada

  ⚠️ **Interpretación:**
  
  Se intentó usar una variable que no ha sido declarada previamente en el ámbito actual o en uno superior.

  ```ts
  $a: numero = 10;
  $b: numero = 20;
  $res1: numero = $a + $b * $c; 
  ```

  ```bash
  --- Análisis Semántico ---
  Error Semántico 🔴: El identificador '$c' no ha sido declarado.
  ```

  ✅ **Solución:**
  
  Declare la variable `$C` con su tipo antes de usarla.

### SemanticError: Tipo incompatible: se esperaba `${expectedType}` pero se recibió `${receivedType}`

  ⚠️ **Interpretación:**
  
  Se intentó realizar una asignación o una operación con tipos de datos que no son compatibles. Por ejemplo, asignar un texto a una variable de tipo numero.

   ```ts
  $miNumero: numero = 'cinco';
  ```

  ```bash
  --- Análisis Semántico ---
  Error Semántico 🔴: Tipo incompatible para variable '$miNumero'. Se esperaba 'numero' pero se obtuvo 'texto'.
  ```

  ✅ **Solución:**
  
  Asegúrese de que los tipos de datos coincidan. Utilice las funciones de conversión (`aNum`, `aTxt`, `aBool`) si es necesario.

### SemanticError: No se puede reasignar un valor a la constante `${name}`

 ⚠️ **Interpretación:**

 Se intentó cambiar el valor de una constante declarada con $$.

 ✅ **Solución:**

 Las constantes son inmutables. Si necesita cambiar el valor, utilice una variable ($) en su lugar.

### SemanticError: La función/método `${name}` no existe o los argumentos no coinciden con la definición

  ⚠️ **Interpretación:**

  Se intentó llamar a una función o método que no está definida, o los argumentos proporcionados (número o tipo) no coinciden con la firma de la función.
  
  ```ts
  $miAncho: numero = 10;
  $miAlto: numero = 5;
  $resultadoArea: numero = calcularArea($miAncho, $miAlto); 
  imprimir("El área es: " + $resultadoArea);
  ```

  ```bash
  --- Análisis Semántico ---
  Error Semántico 🔴: 'calcularArea' no es una función o método, o no ha sido declarada. Se
  obtuvo: null
  ```

 ✅ **Solución:**

 Verifique el nombre de la función y asegúrese de que esté declarada. Revise la cantidad y los tipos de los argumentos que está pasando a la función y compárelos con la definición de la función.

### SemanticError: La sentencia `devolver` debe estar dentro de una función

 ⚠️ **Interpretación:**

 La palabra clave devolver se usó fuera del cuerpo de una función.

   ```ts
  funcion calcularArea($ancho: numero, $alto: numero): numero {
  $area: numero = $ancho * $alto;
  }
  devolver $area;
  ```

  ```bash
  --- Análisis Semántico ---
  Error Semántico 🔴: Sentencia 'devolver' fuera de una función o método.
  ```

 ✅ **Solución:**

 Devolver solo puede usarse para retornar un valor de una función.
