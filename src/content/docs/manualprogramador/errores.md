---
title: Errores detectados
sidebar:
  order: 7
---

## Errores en Fase Léxica

Los errores léxicos ocurren cuando el analizador léxico (lexer) encuentra caracteres o secuencias de caracteres que no corresponden a ningún token válido definido en el lenguaje. Estos son los errores más tempranos detectados.

**Causas Comunes:**

- **Caracteres inválidos:** Símbolos que no forman parte del alfabeto permitido del lenguaje.
- **Literales mal formados:** Cadenas de texto sin cerrar, números con formato incorrecto, o comentarios de bloque no terminados.

**Formato del Reporte de Error Léxico:**

El compilador reportará el tipo de error (usualmente `Error léxico`), la línea y columna exactas donde se detectó el problema, y una descripción del carácter o la secuencia inesperada.

### Carácter Inválido

Intentar usar un símbolo no reconocido por el lexer.

**Código LibreScript con error:**

```ts
$a: numero = 10;
$b: texto = "hola"; // Esto es un comentario
$c: numero = $a @ 5; // El '@' no es un operador válido
```

**Salida de Error (Ejemplo Esperado):**

```bash
{ type: 'OP_ASIGNACION', value: '=', text: '=', line: 3, col: 16 },
{
  type: 'IDENTIFICADOR_VAR',
  value: '$a',
  text: '$a',
  line: 3,
  col: 18
},
{ type: 'error', value: '@ 5;', text: '@ 5;', line: 3, col: 21 }
```

### Cadena de Texto sin Terminar

Olvidar cerrar una cadena con comillas.

**Código LibreScript con error:**

```js
imprimir("Este es un mensaje sin cerrar;
```

**Salida de Error (Ejemplo Esperado):**

```bash
  {
    type: 'error',
    value: '"Este es un mensaje sin cerrar;',
    text: '"Este es un mensaje sin cerrar;',
    line: 1,
    col: 10
  }
```

---

## Errores en Fase Sintáctica

Los errores sintácticos (también conocidos como errores de parseo) ocurren cuando el flujo de tokens es léxicamente válido, pero la secuencia de estos tokens no se ajusta a las reglas gramaticales del lenguaje. El analizador sintáctico (parser) es el encargado de detectar estas inconsistencias.

### Causas Comunes

- **Sentencias incompletas:** Falta de un punto y coma al final de una sentencia, o expresiones a medio construir.
- **Paréntesis o llaves no balanceados:** Falta un `)` para cada `(` o un `}` para cada `{`.
- **Uso incorrecto de palabras clave o operadores:** Por ejemplo, usar `si` sin una condición entre paréntesis, o un operador binario sin un operando a la derecha.
- **Estructuras de control mal formadas:** Un `segun` sin `caso`, o un `para` con los separadores incorrectos.

### Formato del Reporte de Error Sintáctico

El compilador, a través de Nearley, reportará un `Error de parseo` indicando la línea y columna del token inesperado, el token que se encontró (`Unexpected TOKEN token`), y una lista de los tokens que se esperaban en su lugar (`Instead, I was expecting to see one of the following:`).

**Ejemplos:**

1. **Punto y Coma Faltante:** Una de las causas más comunes de errores sintácticos.

   **Código LibreScript con error:**

   ```javascript
   $valor: numero = 10;
   imprimir($valor);
   ```

   **Salida de Error (Ejemplo Esperado):**

   ```bash
   Error de parseo: Syntax error at line 1 col 20:
    1  $valor: numero = 10
                     ^
    2  imprimir($valor);
    Unexpected nl token: "\n". Instead, I was expecting to see one of the following:
    A PUNTO_Y_COMA token based on:
   DeclaracionVariable → %IDENTIFICADOR_VAR _ %DOS_PUNTOS _ Tipo _ %OP_ASIGNACION _ Expresion _ ● %PUNTO_Y_COMA
   Sentencia →  ● DeclaracionVariable
   Sentencias →  ● Sentencia _nl
   Programa → _nl ● Sentencias _nl
   Error cerca de la línea 1, columna 20 (offset 19). Token: '
   ' (tipo: nl)
   No se pudo generar el AST debido a errores de parseo.
   ```

2. **Condicional `si` mal Formado (sin condición):**

   **Código LibreScript con error:**

   ```javascript
   si {
       imprimir("Esto no es válido");
   }
   ```

   **Salida de Error (Ejemplo Esperado):**

   ```bash
    Error de parseo: Syntax error at line 1 col 4:
    1  si {
       ^
    2       imprimir("Esto no es válido");
    3    }
    Unexpected LBRACE token: "{". Instead, I was expecting to see one of the following:
    A LPAREN token based on:
   CondicionalSi → %PR_SI _ ● %LPAREN _ Expresion _ %RPAREN _ BloqueCodigo _ CondicionalSi$ebnf$1 _ CondicionalSi$ebnf$2
   EstructuraControl →  ● CondicionalSi
   Sentencia →  ● EstructuraControl
   Sentencias →  ● Sentencia _nl
   Programa → _nl ● Sentencias _nl

   Error cerca de la línea 1, columna 4 (offset 3). Token: '{' (tipo: LBRACE)
   No se pudo generar el AST debido a errores de parseo.
   ```
