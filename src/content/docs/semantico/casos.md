---
title: Casos de Prueba y Errores Semánticos Detectados
sidebar:
    order: 8
---

El análisis semántico es la fase del compilador donde se detectan errores que, aunque el código sea sintácticamente correcto, violan las reglas de significado o coherencia del lenguaje (como la compatibilidad de tipos, la declaración de identificadores, o las reglas de ámbito). A continuación, se presentan ejemplos de código en LibreScript que contienen errores semánticos y los respectivos mensajes que el compilador generaría. Estos casos de prueba demuestran la capacidad del analizador semántico para identificar y reportar problemas de significado.

### Ejemplo 1: Error de Tipo en Asignación (Tipo Primitivo)

Este es un error fundamental de tipado donde se intenta asignar un valor de un tipo incompatible a una variable o constante previamente declarada con un tipo diferente.

**Código LibreScript:**

```ts
$miNumero: numero = "hola";
```

**Mensaje de Error Generado por el Compilador:**

```bash
Error Semántico: Tipo incompatible para variable '$miNumero'. Se esperaba 'numero' pero obtuvo 'texto'.
```

**Explicación:**
La variable `$miNumero` ha sido declarada explícitamente con el tipo `numero`. Sin embargo, se le intenta asignar un literal de `texto` (`"hola"`). El analizador semántico, al comparar los tipos, detecta esta incompatibilidad directa y reporta el error, impidiendo que el programa se compile.

### Ejemplo 2: Error de Tipo en Asignación (con Arreglos)

Este ejemplo muestra un error de tipo específico para la asignación de arreglos, donde el tipo del arreglo no coincide con el tipo del valor asignado.

**Código LibreScript:**

```ts
$nombres: texto[] = "Ana";
```

**Mensaje de Error Generado por el Compilador:**

```bash
Error Semántico : Tipo incompatible para variable '$nombres'. Se esperaba 'texto[]' pero se obtuvo 'texto'.
```

**Explicación:**
La variable `$nombres` se declara como un arreglo de `texto` (`texto[]`). Sin embargo, se le asigna un simple literal de `texto` (`"Ana"`) en lugar de un arreglo de textos (ej., `["Ana"]`). El analizador semántico reconoce que un `texto` no es compatible con un `texto[]` y genera el error.

### Ejemplo 3: Error en Llamada a Función (Tipo de Argumento Incorrecto)

Este caso ilustra un error común de interfaz de función, donde una función es invocada con un argumento cuyo tipo no coincide con el tipo del parámetro esperado en la definición de la función.

**Código LibreScript:**

```ts
funcion saludar($nombre: texto) {
    imprimir("Hola, ", $nombre);
}

saludar(123); // Intentando pasar un número donde se espera texto
```

**Mensaje de Error Generado por el Compilador:**

```bash
Error Semántico: El argumento 1 de 'saludar' debe ser 'texto', pero se recibió 'numero'.
```

**Explicación:**
La función `saludar` ha sido definida para aceptar un único argumento de tipo `texto`. Al llamarla con el literal `123`, que es de tipo `numero`, el analizador semántico detecta la disparidad de tipos entre el argumento proporcionado y el parámetro esperado, emitiendo el error correspondiente.

---

### Ejemplo 4:Error en Retorno de Función (Tipo de Retorno Incompatible)

Este error ocurre cuando una función, que ha sido declarada para devolver un tipo específico, intenta devolver un valor de un tipo diferente.

**Código LibreScript:**

```ts
funcion getNumero(): numero {
    devolver "hola"; // La función promete devolver un 'numero', pero devuelve un 'texto'
}
```

**Mensaje de Error Generado por el Compilador:**

```bash
Error Semántico: La función 'getNumero' debe devolver 'numero', pero se devuelve 'texto'.
```

**Explicación:**
La firma de la función `getNumero` especifica claramente que su valor de retorno será de tipo `numero`. Sin embargo, la sentencia `devolver` dentro de su cuerpo intenta retornar un `texto` (`"hola"`). El analizador semántico detecta esta inconsistencia entre el tipo de retorno declarado y el tipo de valor efectivamente devuelto.

### Ejemplo 5: Condición No Booleana en Estructura Condicional

Las estructuras de control que dependen de una condición (como `si` o `mientras`) exigen que la expresión de la condición sea de tipo `booleano`. Usar una expresión de otro tipo genera un error semántico.

**Código LibreScript:**

```ts
$valor: numero = 1;

si ($valor) { // La sentencia 'si' espera una condición booleana
    imprimir("Esto no debería ejecutarse con un número.");
}
```

**Mensaje de Error Generado por el Compilador:**

```bash
Error Semántico: La condición de la sentencia 'si' debe ser de tipo 'booleano'.
```

**Explicación:**
La construcción `si` en LibreScript requiere una expresión que se evalúe a un `booleano` para determinar el flujo de control. En este caso, la variable `$valor` es de tipo `numero`. El analizador semántico identifica que un `numero` no es un tipo válido para una condición booleana y reporta el error. Un error similar ocurriría con un bucle `mientras`.

Estos casos de prueba y sus respectivos mensajes demuestran la robustez del analizador semántico de LibreScript para asegurar que el código no solo sea gramaticalmente correcto, sino que también respete las reglas de significado y tipo del lenguaje, contribuyendo a la creación de programas más fiables.
