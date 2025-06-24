---
    title: Estructuras de Control
    sidebar:
        order: 9
---

LibreScript provee las siguientes estructuras de control para manejar el flujo de ejecución del programa:

### **Condicionales (si-siNo si-siNo)**

La estructura condicional `si` permite ejecutar bloques de código basados en la evaluación de una expresión booleana.

**Palabras clave:** `si`, `siNo si`, `siNo`.

**Sintaxis:**  

* La condición se encierra entre paréntesis `()`.  
* Los bloques de código se delimitan con llaves `{}`.  
* La cláusula `siNo si` permite encadenar múltiples condiciones.  
* La cláusula `siNo` es opcional y ejecuta un bloque de código si ninguna de las condiciones anteriores es verdadera.  

#### Estructuras de Control: `si(if)`

```ts
$temperatura: numero = 25;

si ($temperatura > 30) {
  imprimir("Hace mucho calor.");
} siNo si ($temperatura > 20) {
  imprimir("La temperatura es agradable.");
} siNo {
  imprimir("Hace frío.");
}

// If sin siNo
$lluvia: booleano = falso;
si ($lluvia) {
  imprimir("Lleva un paraguas.");
}

```

### **Bucles (mientras)**

El bucle `mientras` permite ejecutar un bloque de código repetidamente mientras una condición sea verdadera.

**Palabras clave:** `mientras`.  
**Sintaxis:**  

* La condición se encierra entre paréntesis `()`.  
* Los bloques de código se delimitan con llaves `{}`.

```ts
$contador: numero = 0;
mientras ($contador < 5) {
    imprimir($contador);
    $contador = $contador + 1;
}
```

#### **Bucles (para)**

El bucle `para` proporciona una forma concisa de iterar. Es útil para bucles con un número predefinido de iteraciones.

**Palabras clave:** `para`.  
**Sintaxis:**  

* La inicialización, condición y expresión de incremento/decremento se separan por punto y coma `;` dentro de paréntesis `()`.  
* Los bloques de código se delimitan con llaves `{}`.  

```ts
para ($i: numero = 0; $i < 10; $i = $i + 1) {
    imprimir($i);
}
```

#### **Estructura de Selección Múltiple (segun)**

La estructura `segun` permite ejecutar diferentes bloques de código basados en el valor de una expresión.

**Palabras clave:** `segun`, `caso`, `romper`, `pordefecto`.  
**Sintaxis:**  

* La expresión a evaluar se encierra entre paréntesis `()` después de `segun`.  
* Los bloques de `caso` y `pordefecto` se definen dentro de llaves `{}`.  
* Cada `caso` debe terminar con `romper` para evitar la "caída" (fall-through) al siguiente `caso`.  
* `pordefecto` es opcional y se ejecuta si ninguna de las expresiones `caso` coincide.

```ts
//Estructuras de Control: segun (Switch)
$opcion: numero = 2;
segun ($opcion) {
  caso 1:{
    imprimir("Seleccionaste la opción 1.");
    }romper;
  caso 2:{
    imprimir("Seleccionaste la opción 2.");
    }romper;
  caso 3:{
    imprimir("Seleccionaste la opción 3.");
    }romper;
  pordefecto:{
    imprimir("Opción no reconocida.");
    }
}
```
