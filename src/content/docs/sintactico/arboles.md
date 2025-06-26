---
title: Árboles de derivación 
sidebar:
  order: 4
---
Un árbol de derivación (o árbol sintáctico) es una representación gráfica de cómo una cadena de entrada puede ser derivada a partir del símbolo inicial de una gramática libre de contexto. Cada nodo interno del árbol corresponde a un no terminal en una regla de producción, y los nodos hoja corresponden a los símbolos terminales (tokens) de la cadena de entrada.

Los árboles de derivación son una forma visual de entender la estructura sintáctica de un programa y cómo el analizador sintáctico lo ha interpretado.

## Declaración de variable 

![LiveServer](/AstroLibresScript/img/arboles/Arbol_Declaracion.png)

## Declaración de constante (numero)

![LiveServer](/AstroLibresScript/img/arboles/arboldcb.png)

## Declaración de constante (texto)

![LiveServer](/AstroLibresScript/img/arboles/arboldct.png)

## Declaración de constante (booleano)

![LiveServer](/AstroLibresScript/img/arboles/arboldcn.png)

## Reasignación de variable (numero)

```go
                                 <Programa>
                                     |
                ------------------------------------------
                |                  |                     |
              <_nl>             <Sentencias>            <_nl>
                                     |
                                <Sentencia>
                                     |
                                <Asignacion>
                                     |
      -------------------------------------------------------------------------
      |           |           |           |           |          |            |
 <Designable>    <_>   <_OP_ASIGNACION>  <_>     <Expresion>    <_>   <_PUNTO_Y_COMA>
      |           |           |           |           |          |            |
<_IDENTIFICADOR_VAR> ( )       =         ( )    <ExpresionLogicaOr> ( )       ;
      |                                                |
  $variable                                   <ExpresionLogicaAnd>
                                                       |
                                              <ExpresionIgualdad>
                                                       |
                                             <ExpresionRelacional>
                                                       |
                                              <ExpresionAditiva>
                                                       |
                                           <ExpresionMultiplicativa>
                                                       |
                                              <ExpresionPotencia>
                                                       |
                                               <ExpresionUnaria>
                                                       |
                                              <ExpresionPostfija>e
                                                       |
                                               <LiteralPrimario>
                                                       |
                                                   <_numero>
                                                       |
                                                      123

```

## Reasignación de variable (texto)

## Reasignación de variable (booleano)

## Arreglo de datos (numero)

![Arreglo booleano](/AstroLibresScript/img/arboles/Arbol_Arreglo_numero.png)

## Arreglo de datos (texto)

![Arreglo booleano](/AstroLibresScript/img/arboles/Arbol_Arreglo_numero.png)

## Arreglo de datos (booleano)

![Arreglo booleano](/AstroLibresScript/img/arboles/Arbol_Arreglo_numero.png)

## Concatenación

![Arreglo booleano](/AstroLibresScript/img/arboles/Arbol_Concatenacion.png)

## Condicional `si`

```go
                                <Programa>
                                    |
                               <Sentencias>
                                    |
                          ---------------------
                          |                   |
                    <CondicionalSi>       <OtrasSentencias>
                          |
       ---------------------------------------------------
       |         |              |              |         |
      "si"      "("        <Expresión>        ")"       "{"    <Bloque>    "}"
                                    |
                     -----------------------------------
                     |                                 |
             <ExpresiónLogicaOr>               <OperadorLogico>?
                     |                                 |
             <ExpresiónLogicaAnd>                      |
                     |                                 |
             <ExpresiónIgualdad>               <ExpresiónRelacional>
                     |                                 |
             <ExpresiónRelacional>             ---------------------
                     |                         |                   |
             <ExpresiónAditiva>         <ExpresiónAditiva>  <OperadorRelacional>
                     |
             <ExpresiónMultiplicativa>
                     |
             <ExpresiónPotencia>
                     |
             <ExpresiónUnaria>
                     |
             <ExpresiónPostfija>
                     |
             ---------------------
             |                   |
         <Variable>          <Literal>
             |                   |
          "$<ID>"       "<numero>|<texto>|<booleano>"

                    <Bloque>
                        |
                 <Sentencia>*
                        |
                ---------------------
                |         |         |
           <Imprimir>  <Asignación>  <CondicionalSi>
```

## Condicional `si-siNo` `si-siNo`

## Condicional `mientras`

## Condicional `para`

## Condicional `segun`

## `funcion`

![Arreglo booleano](/AstroLibresScript/img/arboles/Arbol_Funciones.png)

## Operacion aritmetica compleja

```go
                                          <Expresion>
                                                |
                                         <ExpresionAsignacion>
                        /                       |                             \
                 <Variable>               <OP_ASIGNACION>           <ExpresionLogicaOR>
                                                |
                                         <ExpresionLogicaAND>
                                                |
                                         <ExpresionIgualdad>
                                                |
                                        <ExpresionRelacional>
                                                |
                                        <ExpresionAditiva>
                               /                |             \
                  <ExpresionMultiplicativa>  <OP_SUMA>  <ExpresionMultiplicativa>
                              |                                      |
                   <ExpresionPotencia>                     <ExpresionPotencia>
                              |                                      |
                   <ExpresionUnaria>                       <ExpresionUnaria>
                              |                                      |
                   <ExpresionPrimaria>                     <ExpresionPrimaria>
                              |                                      |
                         <Literal>                              <Literal>
```
