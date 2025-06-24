---
title: Concatenación de Cadenas
sidebar:
    order: 7
---

Las cadenas de texto en LibreScript pueden manejarse utilizando **comillas dobles (`"`) o simples (`'`)**.  

* El operador **`+`** se utiliza para concatenar (unir) cadenas de texto.  
  Ejemplo:
  
  ```ts
  $saludo: texto = "Hola" + " " + "Mundo";
  ```

| Nivel de Prioridad | Operadores | Asociatividad |
| ----- | ----- | ----- |
| **Más alta** | `( )` (paréntesis para agrupamiento) | Izquierda |
|  | `++`, `--`, `!` (unarios) | Derecha |
|  | `**` (Potencia) | Derecha |
|  | `*`, `/`, `%` | Izquierda |
|  | `+`, `-` | Izquierda |
|  | `>`, `<`, `>=`, `<=` | Izquierda |
|  | `==`, `!=` | Izquierda |
|  | `&&` | Izquierda |
| **Más baja** | `=`, `+=`, `-=`, `*=`, `/=` (Asignación) | Derecha |
