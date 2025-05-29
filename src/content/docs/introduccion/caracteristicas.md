---
title: Características Principales
sidebar:
  order: 2
---

### Paradigma de Programación

Imperativo con soporte limitado para Programación Orientada a Objetos (POO).

### Funciones "Lite"

Sintaxis simplificada:

~~~js
  funcion $suma(a, b) => a + b; 

  funcion $suma(a, b) => a + b;
~~~

### Programación Orientada a Objetos Reducida

1. Se permiten clases, pero sin herencia múltiple ni super().
2. Los métodos pueden ser public o private, sin protected.
3. No hay this, sólo referencias explícitas.

Ejemplo de uso:

~~~javascript
  clase Circulo{
  $radio; // Propiedad privada usando #
    constructor(r) {
        Circulo.#radio = r;
    }

    area() {
        return 3.1416 * cuadrado(Circulo.#radio);
    }
  }

  $c = nuevo Circulo(5);
  imprimir($c.area());
~~~

### Soporte Matemático Mejorado

1. Funciones matemáticas integradas (raiz(x), potencia(a, b)).
2. Soporte para matrices y cálculos algebraicos.
