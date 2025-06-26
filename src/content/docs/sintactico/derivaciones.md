---
title: Derivaciones
sidebar:
  order: 3
---

Una derivación es una secuencia de aplicaciones de reglas de producción de la gramática, comenzando desde el símbolo inicial, que lleva a una cadena de símbolos terminales (o una forma sentencial). El analizador sintáctico realiza implícitamente estas derivaciones para verificar la corrección de la entrada.

Existen dos tipos principales de derivaciones, que se refieren al orden en que se expanden los no terminales:

* **Derivación más a la izquierda:** En cada paso, se reemplaza el no terminal más a la izquierda de la forma sentencial actual.
* **Derivación más a la derecha:** En cada paso, se reemplaza el no terminal más a la derecha de la forma sentencial actual.

## Declaración de variable (numero) Derecha

```go
<Programa>
=> <_nl> <Sentencias> <_nl>
=> <_nl> <Sentencia> <_nl>
=> <_nl> <DeclaracionVariable> <_nl>
=> <_nl> <_IDENTIFICADOR_VAR> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $edad <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $edad : <_> <Tipo> <_> = <_> <Expresion> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $edad : <_> <TipoBase> <_> = <_> <Expresion> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $edad : <_> numero <_> = <_> <Expresion> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $edad : numero <_> = <_> <Expresion> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $edad : numero = <_> <ExpresionLogicaOr> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $edad : numero = <_> <ExpresionLogicaAnd> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $edad : numero = <_> <ExpresionIgualdad> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $edad : numero = <_> <ExpresionRelacional> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $edad : numero = <_> <ExpresionAditiva> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $edad : numero = <_> <ExpresionMultiplicativa> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $edad : numero = <_> <ExpresionPotencia> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $edad : numero = <_> <ExpresionUnaria> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $edad : numero = <_> <ExpresionPostfija> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $edad : numero = <_> <LiteralPrimario> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $edad : numero = <_> <_numero> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $edad : numero = <_> 25 <_> ; <_nl>
=> $edad : numero = 25 ;

```

## Declaración de variable (numero) Izquierda

```go
<Programa>
=> <_nl> <Sentencias> <_nl>
=> <_nl> <Sentencia> <_nl>
=> <_nl> <DeclaracionVariable> <_nl>
=> <_nl> <_IDENTIFICADOR_VAR> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA> <_nl>
=> $edad <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA>
=> $edad : <_> <Tipo> <_> = <_> <Expresion> <_> <_PUNTO_Y_COMA>
=> $edad : <_> <TipoBase> <_> = <_> <Expresion> <_> <_PUNTO_Y_COMA>
=> $edad : <_> numero <_> = <_> <Expresion> <_> <_PUNTO_Y_COMA>
=> $edad : numero = <_> <ExpresionLogicaOr> <_> <_PUNTO_Y_COMA>
=> $edad : numero = <_> <ExpresionLogicaAnd> <_> <_PUNTO_Y_COMA>
=> $edad : numero = <_> <ExpresionIgualdad> <_> <_PUNTO_Y_COMA>
=> $edad : numero = <_> <ExpresionRelacional> <_> <_PUNTO_Y_COMA>
=> $edad : numero = <_> <ExpresionAditiva> <_> <_PUNTO_Y_COMA>
=> $edad : numero = <_> <ExpresionMultiplicativa> <_> <_PUNTO_Y_COMA>
=> $edad : numero = <_> <ExpresionPotencia> <_> <_PUNTO_Y_COMA>
=> $edad : numero = <_> <ExpresionUnaria> <_> <_PUNTO_Y_COMA>
=> $edad : numero = <_> <ExpresionPostfija> <_> <_PUNTO_Y_COMA>
=> $edad : numero = <_> <LiteralPrimario> <_> <_PUNTO_Y_COMA>
=> $edad : numero = <_> <_numero> <_> <_PUNTO_Y_COMA>
=> $edad : numero = <_> 25 <_> <_PUNTO_Y_COMA>
=> $edad : numero = 25 <_> ;
=> $edad : numero = 25 ;
```

## Declaración de variable (texto)Derecha

```go
<Programa>
=> <_nl> <Sentencias> <_nl>
=> <_nl> <Sentencia> <_nl>
=> <_nl> <DeclaracionVariable> <_nl>
=> <_nl> <_IDENTIFICADOR_VAR> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $saludo <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $saludo : <_> <Tipo> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $saludo : <_> <TipoBase> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $saludo : <_> texto <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $saludo : texto <_> = <_> <Expresion> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $saludo : texto = <_> <ExpresionLogicaOr> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $saludo : texto = <_> <ExpresionLogicaAnd> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $saludo : texto = <_> <ExpresionIgualdad> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $saludo : texto = <_> <ExpresionRelacional> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $saludo : texto = <_> <ExpresionAditiva> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $saludo : texto = <_> <ExpresionMultiplicativa> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $saludo : texto = <_> <ExpresionPotencia> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $saludo : texto = <_> <ExpresionUnaria> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $saludo : texto = <_> <ExpresionPostfija> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $saludo : texto = <_> <LiteralPrimario> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $saludo : texto = <_> <_texto> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $saludo : texto = <_> "Hola mundo" <_> ; <_nl>
=> $saludo : texto = "Hola mundo" ;

```

## Declaración de variable (texto) Izquierda

```go
<Programa> 
=> <_nl> <Sentencias> <_nl> 
=> <_nl> <Sentencia> <_nl> 
=> <_nl> <DeclaracionVariable> <_nl> 
=> <_nl> <_IDENTIFICADOR_VAR> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA> <_nl>
=> $saludo <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA> 
=> $saludo : <_> <Tipo> <_> = <_> <Expresion> <_> <_PUNTO_Y_COMA> 
=> $saludo : <_> <TipoBase> <_> = <_> <Expresion> <_> <_PUNTO_Y_COMA> 
=> $saludo : <_> <_TIPO_TEXTO> <_> = <_> <Expresion> <_> <_PUNTO_Y_COMA> 
=> $saludo : texto <_> = <_> <Expresion> <_> <_PUNTO_Y_COMA> 
=> $saludo : texto = <_> <ExpresionLogicaOr> <_> <_PUNTO_Y_COMA> 
=> $saludo : texto = <_> <ExpresionLogicaAnd> <_> <_PUNTO_Y_COMA> 
=> $saludo : texto = <_> <ExpresionIgualdad> <_> <_PUNTO_Y_COMA> 
=> $saludo : texto = <_> <ExpresionRelacional> <_> <_PUNTO_Y_COMA> 
=> $saludo : texto = <_> <ExpresionAditiva> <_> <_PUNTO_Y_COMA> 
=> $saludo : texto = <_> <ExpresionMultiplicativa> <_> <_PUNTO_Y_COMA> 
=> $saludo : texto = <_> <ExpresionPotencia> <_> <_PUNTO_Y_COMA> 
=> $saludo : texto = <_> <ExpresionUnaria> <_> <_PUNTO_Y_COMA> 
=> $saludo : texto = <_> <ExpresionPostfija> <_> <_PUNTO_Y_COMA> 
=> $saludo : texto = <_> <LiteralPrimario> <_> <_PUNTO_Y_COMA> 
=> $saludo : texto = <_> <_texto> <_> <_PUNTO_Y_COMA> 
=> $saludo : texto = <_> "Hola mundo" <_> <_PUNTO_Y_COMA> 
=> $saludo : texto = "Hola mundo" <_> ; 
=> $saludo : texto = "Hola mundo" ;
```

## Declaración de variable (booleano)Derecha

```go
<Programa>
=> <_nl> <Sentencias> <_nl>
=> <_nl> <Sentencia> <_nl>
=> <_nl> <DeclaracionVariable> <_nl>
=> <_nl> <_IDENTIFICADOR_VAR> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $activo <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $activo : <_> <Tipo> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $activo : <_> <TipoBase> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $activo : <_> booleano <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $activo : booleano <_> = <_> <Expresion> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $activo : booleano = <_> <ExpresionLogicaOr> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $activo : booleano = <_> <ExpresionLogicaAnd> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $activo : booleano = <_> <ExpresionIgualdad> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $activo : booleano = <_> <ExpresionRelacional> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $activo : booleano = <_> <ExpresionAditiva> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $activo : booleano = <_> <ExpresionMultiplicativa> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $activo : booleano = <_> <ExpresionPotencia> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $activo : booleano = <_> <ExpresionUnaria> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $activo : booleano = <_> <ExpresionPostfija> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $activo : booleano = <_> <LiteralPrimario> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $activo : booleano = <_> <_LIT_VERDADERO> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> $activo : booleano = <_> verdadero <_> ; <_nl>
=> $activo : booleano = verdadero ;
```

## Declaración de variable (booleano) Izquierda

```go
<Programa>
=> <_nl> <Sentencias> <_nl>
=> <_nl> <Sentencia> <_nl>
=> <_nl> <DeclaracionVariable> <_nl>
=> <_nl> <_IDENTIFICADOR_VAR> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA> <_nl>
=> $activo <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA>
=> $activo : <_> <Tipo> <_> = <_> <Expresion> <_> <_PUNTO_Y_COMA>
=> $activo : <_> <TipoBase> <_> = <_> <Expresion> <_> <_PUNTO_Y_COMA>
=> $activo : <_> booleano <_> = <_> <Expresion> <_> <_PUNTO_Y_COMA>
=> $activo : booleano = <_> <ExpresionLogicaOr> <_> <_PUNTO_Y_COMA>
=> $activo : booleano = <_> <ExpresionLogicaAnd> <_> <_PUNTO_Y_COMA>
=> $activo : booleano = <_> <ExpresionIgualdad> <_> <_PUNTO_Y_COMA>
=> $activo : booleano = <_> <ExpresionRelacional> <_> <_PUNTO_Y_COMA>
=> $activo : booleano = <_> <ExpresionAditiva> <_> <_PUNTO_Y_COMA>
=> $activo : booleano = <_> <ExpresionMultiplicativa> <_> <_PUNTO_Y_COMA>
=> $activo : booleano = <_> <ExpresionPotencia> <_> <_PUNTO_Y_COMA>
=> $activo : booleano = <_> <ExpresionUnaria> <_> <_PUNTO_Y_COMA>
=> $activo : booleano = <_> <ExpresionPostfija> <_> <_PUNTO_Y_COMA>
=> $activo : booleano = <_> <LiteralPrimario> <_> <_PUNTO_Y_COMA>
=> $activo : booleano = <_> <_LIT_VERDADERO> <_> <_PUNTO_Y_COMA>
=> $activo : booleano = <_> verdadero <_> <_PUNTO_Y_COMA>
=> $activo : booleano = verdadero <_> ;
=> $activo : booleano = verdadero ;
```

## Gramatica base: Declaración de constante (numero)

```go

```

## Declaración de constante (numero) Derecha

```go
<Programa>
⇒ <_nl> <Sentencias> <_nl>
⇒ <_nl> <Sentencia> <_nl>
⇒ <_nl> <DeclaracionConstante> <_nl>
⇒ <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA> <_nl>
⇒ <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <Expresion> <_> ;<_nl>
⇒ <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <ExpresionLogicaOr><_> ;<_nl>
⇒ <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <ExpresionLogicaAnd><_> ;<_nl>
⇒ <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <ExpresionIgualdad><_> ;<_nl>
⇒ <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <ExpresionRelacional><_> ;<_nl>
⇒ <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <ExpresionAditiva><_> ;<_nl>
⇒ <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <ExpresionMultiplicativa><_> ;<_nl>
⇒ <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <ExpresionPotencia><_> ;<_nl>
⇒ <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <ExpresionUnaria><_> ;<_nl>
⇒ <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <ExpresionPostfija> <_> ;<_nl>
⇒ <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <LiteralPrimario><_> ;<_nl>
⇒ <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <_numero><_> ;<_nl>
⇒ <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> 25 <_> ;<_nl>
⇒ <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> =<_> 25 <_> ;<_nl>
⇒ <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <TipoBase> <_> =<_> 25<_> ;<_nl>
⇒ <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <_TIPO_NUMERO> <_> =<_> 25<_> ;<_nl>
⇒ <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> numero <_> =<_> 25<_> ;<_nl>
⇒ <_nl> <_IDENTIFICADOR_CONST> <_> :<_> numero <_> =<_> 25<_> ;<_nl>
⇒ <_nl> $$edad <_> :<_> numero <_> =<_> 25<_> ;<_nl>
=> $$edad : numero =  25; 

```

## Declaración de constante (numero) Izquierda

```go
<Programa>
=> <_nl> <Sentencias> <_nl>
=> <Sentencia> <_nl>
=> <DeclaracionConstante> <_nl>
=> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA> <_nl>
=> $$edad <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA> <_nl>
=> $$edad : <_> <Tipo> <_> = <_> <Expresion> <_> <_> <_PUNTO_Y_COMA> <_nl>
=> $$edad : <_> <TipoBase> <_> = <_> <Expresion> <_> <_PUNTO_Y_COMA> <_nl>
=> $$edad : <_> <_TIPO_NUMERO> <_> = <_> <Expresion> <_> <_PUNTO_Y_COMA> <_nl>
=> $$edad : numero = <_> <Expresion>  <_> <_PUNTO_Y_COMA> <_nl>
=> $$edad : numero = <_> <ExpresionLogicaOr> <_> <_PUNTO_Y_COMA> <_nl>
=> $$edad : numero = <_> <ExpresionLogicaAnd> <_> <_PUNTO_Y_COMA> <_nl>
=> $$edad : numero = <_> <ExpresionIgualdad> <_> <_PUNTO_Y_COMA> <_nl>
=> $$edad : numero = <_> <ExpresionRelacional> <_> <_PUNTO_Y_COMA> <_nl>
=> $$edad : numero = <_> <ExpresionAditiva> <_> <_PUNTO_Y_COMA> <_nl>
=> $$edad : numero = <_> <ExpresionMultiplicativa> <_> <_PUNTO_Y_COMA> <_nl>
=> $$edad : numero = <_> <ExpresionPotencia> <_> <_PUNTO_Y_COMA> <_nl>
=> $$edad : numero = <_> <ExpresionUnaria> <_> <_PUNTO_Y_COMA> <_nl>

=> $$edad : numero = <_> <ExpresionPostfija> <_> <_PUNTO_Y_COMA> <_nl>
=> $$edad : numero = <_> <LiteralPrimario> <_> <_PUNTO_Y_COMA> <_nl>
=> $$edad : numero = <_> <_numero> <_> <_PUNTO_Y_COMA> <_nl>
=> $$edad : numero = <_> 25 <_> <_PUNTO_Y_COMA> <_nl>
=> $$edad : numero = <_> 25 <_> ;<_nl>
=> $$edad : numero =  25; 
```

## Declaración de constante (texto)Derecha

```go
<Programa>  
⇒ <_nl> <Sentencias> <_nl>⇒ <_nl> <Sentencia> <_nl>⇒ <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA> <_nl>⇒ <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA> <_nl>⇒ <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <Expresion> <_> ; <_nl>⇒ <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <ExpresionLogicaOr> <_> ; <_nl>⇒ <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <ExpresionLogicaAnd><_> ; <_nl>⇒ <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <ExpresionIgualdad><_> ; <_nl>⇒ <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <ExpresionRelacional><_> ; <_nl>⇒ <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <ExpresionAditiva><_> ; <_nl>⇒ <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <ExpresionMultiplicativa><_> ; <_nl>⇒ <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <ExpresionPotencia><_> ; <_nl>⇒ <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <ExpresionUnaria><_> ; <_nl>⇒ <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <ExpresionPostfija><_> ; <_nl>⇒ <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <LiteralPrimario><_> ; <_nl>⇒ <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <_texto><_> ; <_nl>⇒ <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> "Hola mundo" <_> ; <_nl>⇒ <_nl> <_IDENTIFICADOR_CONST><_> <_DOS_PUNTOS> <_> <Tipo> <_> =<_> "Hola mundo" <_> ; <_nl>⇒ <_nl> <_IDENTIFICADOR_CONST>: <_> <Tipo> <_> =<_> "Hola mundo" <_> ; <_nl>⇒ <_nl> <_IDENTIFICADOR_CONST>: <_> <TipoBase> <_> =<_> "Hola mundo" <_> ; <_nl>⇒ <_nl> <_IDENTIFICADOR_CONST>: <_> <TipoTexto> <_> =<_> "Hola mundo" <_> ; <_nl>⇒ <_nl> <_IDENTIFICADOR_CONST>: <_> Texto<_> =<_> "Hola mundo" <_> ; <_nl>⇒ <_nl><_IDENTIFICADOR_CONST>: texto <_> = <_> "Hola mundo" <_> ; <_nl>⇒ <_nl> $$saludo : texto <_> = <_> "Hola mundo" <_> ; <_nl>⇒ $$saludo : texto = "Hola mundo" ;
```

## Declaración de constante (texto) Izquierda

```go
$$saludo: texto = "Hola mundo";

Derivacion por la izquierda
<Programa> => <_nl> <Sentencias> <_nl>=> <Sentencia> <_nl>=> <DeclaracionConstante><_nl> => <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA> =>  $$saludo <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA>=> $$saludo : <_> <Tipo> <_> = <_> <Expresion> <_><_PUNTO_Y_COMA>>=> $$saludo : <_> <TipoBase> <_> = <_> <Expresion> <_><_PUNTO_Y_COMA>=> $$saludo : <_> <TipoTexto> <_> = <_> <Expresion> <_><_PUNTO_Y_COMA>  $$saludo : texto <_> = <_> <Expresion> <_><_PUNTO_Y_COMA>=> $$saludo : texto = <_> <ExpresionLogicaOr> <_> <_PUNTO_Y_COMA>=>$$saludo : texto = <_>  <ExpresionLogicaAnd> <_> <_PUNTO_Y_COMA> =>$$saludo : texto = <_> <ExpresionIgualdad> <_> <_PUNTO_Y_COMA>=>$$saludo : texto = <_> <ExpresionRelacional> <_> <_PUNTO_Y_COMA>=>$$saludo : texto = <_> <ExpresionAditiva> <_> <_PUNTO_Y_COMA>=>$$saludo : texto = <_> <ExpresionMultiplicativa> <_> <_PUNTO_Y_COMA>=>$$saludo : texto = <_> <ExpresionPotencia> <_> <_PUNTO_Y_COMA>=>$$saludo : texto = <_> <ExpresionUnaria> <_> <_PUNTO_Y_COMA>=>$$saludo : texto = <_> <ExpresionPostfija> <_> <_PUNTO_Y_COMA>=>$$saludo : texto = <_> <LiteralPrimario> <_> <_PUNTO_Y_COMA>=>$$saludo : texto = <_> <_texto> <_> <_PUNTO_Y_COMA>=>$$saludo : texto = <_> "Hola mundo" <_> <_PUNTO_Y_COMA>=>$$saludo : texto = "Hola mundo" <_> ; =>  
```

## Gramatica basde: Declaración de constante (booleano)

```go

```

## Declaración de constante (booleano)Derecha

```go
<Programa>
=> <_nl> <Sentencias> <_nl>
=> <_nl> <Sentencia> <_nl>
=> <_nl> <DeclaracionConstante> <_nl>
=> <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA> <_nl>
=> <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <Expresion> <_> ; <_nl>
=> <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION>  <_> <ExpresionLogicaOr> <_> ; <_nl>
=> <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_><_OP_ASIGNACION>  <_> <ExpresionLogicaAnd> <_> ; <_nl>
=> <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo>  <_> <_OP_ASIGNACION>  <_> <ExpresionIgualdad> <_> ; <_nl>
=> <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo>  <_> <_OP_ASIGNACION>  <_> <ExpresionRelacional> <_> ; <_nl>
=> <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <ExpresionAditiva> <_> ; <_nl>
=> <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION>  <_> <ExpresionMultiplicativa> <_> ; <_nl>
=> <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION>  <_> <ExpresionPotencia> <_> ; <_nl>
=> <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo>  <_> <_OP_ASIGNACION>  <_> <ExpresionUnaria> <_> ; <_nl>
=> <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo>  <_> <_OP_ASIGNACION>  <_> <ExpresionPostfija> <_> ; <_nl>
=> <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo>  <_> <_OP_ASIGNACION>  <_> <LiteralPrimario> <_> ; <_nl>
=> <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo>  <_> <_OP_ASIGNACION>  <_> <_booleano> <_> ; <_nl>
=> <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_><Tipo> <_> <_OP_ASIGNACION>  <_> verdadero <_> ; <_nl>
=> <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> = <_> verdadero <_> ; <_nl>
=> <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <TipoBase> <_> = <_> verdadero<_> ; <_nl>
=> <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <_TIPO_BOOLEANO><_> = <_> verdadero<_> ; <_nl>=> <_nl> <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> booleano<_> = <_> verdadero<_> ; <_nl>>=> <_nl> <_IDENTIFICADOR_CONST> <_> : <_> booleano<_> = <_> verdadero<_> ; <_nl>>=> <_nl> $$activo<_> <_DOS_PUNTOS> <_> booleano<_> = <_> verdadero<_> ; <_nl>=> <_nl> $$activo : booleano = verdadero ; <_nl>=>  $$activo : booleano = verdadero ; 
```

## Declaración de constante (booleano) Izquierda

```go
<Programa>  => <_nl> <Sentencias> <_nl> =>  <Sentencias> =>  <Sentencia> <_nl> => <DeclaracionConstante> <_nl> => <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA> <_nl> =>  $$activo <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA> <_nl> =>  $$activo : <_> <Tipo> <_> = <_> <Expresion> <_><_PUNTO_Y_COMA> <_nl>=>  $$activo : <_> <TipoBase> <_> = <_> <Expresion> <_><_PUNTO_Y_COMA> <_nl>=>  $$activo : <_> <_TIPO_BOOLEANO><_> = <_> <Expresion> <_><_PUNTO_Y_COMA> <_nl>  => $$activo : booleano <_> = <_> <Expresion> <_><_PUNTO_Y_COMA>  <_nl> => $$activo : booleano <_> = <_> <ExpresionLogicaOr><_><_PUNTO_Y_COMA>  <_nl>=> $$activo : booleano <_> = <_> <Expresion> <_><_PUNTO_Y_COMA>  <_nl> => $$activo : booleano <_> = <_> <ExpresionLogicaAnd><_><_PUNTO_Y_COMA>  <_nl> => $$activo : booleano <_> = <_> <<ExpresionIgualdad><_><_PUNTO_Y_COMA>  <_nl> => $$activo : booleano <_> = <_> <ExpresionRelacional> <_><_PUNTO_Y_COMA>  <_nl> => $$activo : booleano <_> = <_> <ExpresionAditiva><_><_PUNTO_Y_COMA>  <_nl> => $$activo : booleano <_> = <_> <ExpresionMultiplicativa><_><_PUNTO_Y_COMA>  <_nl>=> $$activo : booleano <_> = <_> <ExpresionPotencia><_><_PUNTO_Y_COMA>  <_nl>=> $$activo : booleano <_> = <_> <ExpresionUnaria><_><_PUNTO_Y_COMA>  <_nl>=> $$activo : booleano <_> = <_> <ExpresionPostfija><_><_PUNTO_Y_COMA>  <_nl>=> $$activo : booleano <_> = <_> <LiteralPrimario><_><_PUNTO_Y_COMA>  <_nl>=> $$activo : booleano <_> = <_> <_booleano><_><_PUNTO_Y_COMA>  <_nl>=> $$activo : booleano <_> = <_> <verdadero><_><_PUNTO_Y_COMA>  <_nl> => $$activo : booleano <_> = <_> <verdadero><_>;<_nl>=> $$activo: booleano = verdadero;
```

## Reasignación de variable Derecha

```go
<Programa> => <_nl> <Sentencias> <_nl> (Aplicando <Programa> ::= <_nl> <Sentencias> <_nl>) => <_nl> <Sentencia> <_nl> (Aplicando <Sentencias> ::= <Sentencia> <_nl>) => <_nl> <Asignacion> <_nl> (Aplicando <Sentencia> ::= <Asignacion>) => <_nl> <Designable> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA> <_nl> (Aplicando <Asignacion> ::= <Designable> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA>) => <_nl> <Designable> <_> <_OP_ASIGNACION> <_> <Expresion> <_> ; <_nl> (Reemplazando _PUNTO_Y_COMA por ;) => <_nl> <Designable> <_> <_OP_ASIGNACION> <_> <Expresion> _ ; <_nl> (Reemplazando _ por un espacio) => <_nl> <Designable> <_> <_OP_ASIGNACION> <_> <ExpresionLogicaOr> _ ; <_nl> (Aplicando <Expresion> ::= <ExpresionLogicaOr>) => <_nl> <Designable> <_> <_OP_ASIGNACION> <_> <ExpresionLogicaAnd> _ ; <_nl> (Aplicando <ExpresionLogicaOr> ::= <ExpresionLogicaAnd>) => <_nl> <Designable> <_> <_OP_ASIGNACION> <_> <ExpresionIgualdad> _ ; <_nl> (Aplicando <ExpresionLogicaAnd> ::= <ExpresionIgualdad>) => <_nl> <Designable> <_> <_OP_ASIGNACION> <_> <ExpresionRelacional> _ ; <_nl> (Aplicando <ExpresionIgualdad> ::= <ExpresionRelacional>) => <_nl> <Designable> <_> <_OP_ASIGNACION> <_> <ExpresionAditiva> _ ; <_nl> (Aplicando <ExpresionRelacional> ::= <ExpresionAditiva>) => <_nl> <Designable> <_> <_OP_ASIGNACION> <_> <ExpresionMultiplicativa> _ ; <_nl> (Aplicando <ExpresionAditiva> ::= <ExpresionMultiplicativa>) => <_nl> <Designable> <_> <_OP_ASIGNACION> <_> <ExpresionPotencia> _ ; <_nl> (Aplicando <ExpresionMultiplicativa> ::= <ExpresionPotencia>) => <_nl> <Designable> <_> <_OP_ASIGNACION> <_> <ExpresionUnaria> _ ; <_nl> (Aplicando <ExpresionPotencia> ::= <ExpresionUnaria>) => <_nl> <Designable> <_> <_OP_ASIGNACION> <_> <ExpresionPostfija> _ ; <_nl> (Aplicando <ExpresionUnaria> ::= <ExpresionPostfija>) => <_nl> <Designable> <_> <_OP_ASIGNACION> <_> <LiteralPrimario> _ ; <_nl> (Aplicando <ExpresionPostfija> ::= <LiteralPrimario>) => <_nl> <Designable> <_> <_OP_ASIGNACION> <_> <_numero> _ ; <_nl> (Aplicando <LiteralPrimario> ::= <_numero>) => <_nl> <Designable> <_> <_OP_ASIGNACION> <_> 123 _ ; <_nl> (Reemplazando _numero por 123) => <_nl> <Designable> _ <_OP_ASIGNACION> <_> 123 _ ; <_nl> (Reemplazando _ por un espacio) => <_nl> <Designable> _ = <_> 123 _ ; <_nl> (Reemplazando _OP_ASIGNACION por =) => <_nl> <Designable> _ = _ 123 _ ; <_nl> (Reemplazando _ por un espacio) => <_nl> <_IDENTIFICADOR_VAR> _ = _ 123 _ ; <_nl> (Aplicando <Designable> ::= <_IDENTIFICADOR_VAR>) => <_nl> $variable _ = _ 123 _ ; <_nl> (Reemplazando _IDENTIFICADOR_VAR por $variable)
```

## Reasignación de variable Izquierda

```go
<Programa> => <_nl> <Sentencias> <_nl> (Aplicando <Programa> ::= <_nl> <Sentencias> <_nl>) => <_nl> <Sentencia> <_nl> (Aplicando <Sentencias> ::= <Sentencia> <_nl>) => <_nl> <Asignacion> <_nl> (Aplicando <Sentencia> ::= <Asignacion>) => <_nl> <Designable> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA> <_nl> (Aplicando <Asignacion> ::= <Designable> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA>) => <_nl> <_IDENTIFICADOR_VAR> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA> <_nl> (Aplicando <Designable> ::= <_IDENTIFICADOR_VAR>) => <_nl> $variable <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA> <_nl> (Reemplazando _IDENTIFICADOR_VAR por $variable) => <_nl> $variable _ <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA> <_nl> (Reemplazando _ por un espacio) => <_nl> $variable _ = <_> <Expresion> <_> <_PUNTO_Y_COMA> <_nl> (Reemplazando _OP_ASIGNACION por =) => <_nl> $variable _ = _ <Expresion> <_> <_PUNTO_Y_COMA> <_nl> (Reemplazando _ por un espacio) => <_nl> $variable _ = _ <ExpresionLogicaOr> <_> <_PUNTO_Y_COMA> <_nl> (Aplicando <Expresion> ::= <ExpresionLogicaOr>) => <_nl> $variable _ = _ <ExpresionLogicaAnd> <_> <_PUNTO_Y_COMA> <_nl> (Aplicando <ExpresionLogicaOr> ::= <ExpresionLogicaAnd>) => <_nl> $variable _ = _ <ExpresionIgualdad> <_> <_PUNTO_Y_COMA> <_nl> (Aplicando <ExpresionLogicaAnd> ::= <ExpresionIgualdad>) => <_nl> $variable _ = _ <ExpresionRelacional> <_> <_PUNTO_Y_COMA> <_nl> (Aplicando <ExpresionIgualdad> ::= <ExpresionRelacional>) => <_nl> $variable _ = _ <ExpresionAditiva> <_> <_PUNTO_Y_COMA> <_nl> (Aplicando <ExpresionRelacional> ::= <ExpresionAditiva>) => <_nl> $variable _ = _ <ExpresionMultiplicativa> <_> <_PUNTO_Y_COMA> <_nl> (Aplicando <ExpresionAditiva> ::= <ExpresionMultiplicativa>) => <_nl> $variable _ = _ <ExpresionPotencia> <_> <_PUNTO_Y_COMA> <_nl> (Aplicando <ExpresionMultiplicativa> ::= <ExpresionPotencia>) => <_nl> $variable _ = _ <ExpresionUnaria> <_> <_PUNTO_Y_COMA> <_nl> (Aplicando <ExpresionPotencia> ::= <ExpresionUnaria>) => <_nl> $variable _ = _ <ExpresionPostfija> <_> <_PUNTO_Y_COMA> <_nl> (Aplicando <ExpresionUnaria> ::= <ExpresionPostfija>) => <_nl> $variable _ = _ <LiteralPrimario> <_> <_PUNTO_Y_COMA> <_nl> (Aplicando <ExpresionPostfija> ::= <LiteralPrimario>) => <_nl> $variable _ = _ <_numero> <_> <_PUNTO_Y_COMA> <_nl> (Aplicando <LiteralPrimario> ::= <_numero>) => <_nl> $variable _ = _ 123 <_> <_PUNTO_Y_COMA> <_nl> (Reemplazando _numero por 123) => <_nl> $variable _ = _ 123 _ <_PUNTO_Y_COMA> <_nl> (Reemplazando _ por un espacio) => <_nl> $variable _ = _ 123 _ ; <_nl> (Reemplazando _PUNTO_Y_COMA por ;)
```

## Arreglo de datos (numero) Derecha

```go
$matriz: numero[][] = [[1, 2], [3, 4]];

<Programa>
→ _nl <Sentencias> _nl
→ _nl <Sentencia> _nl _nl
→ _nl <DeclaracionVariable> _nl _nl
→ _nl <_IDENTIFICADOR_VAR> _ <_DOS_PUNTOS> _ <Tipo> _ <_OP_ASIGNACION> _ <Expresion> _ <_PUNTO_Y_COMA> _nl _nl
→ _nl $matriz _ <_DOS_PUNTOS> _ <Tipo> _ <_OP_ASIGNACION> _ <Expresion> _ ; _nl _nl
→ _nl $matriz _ : _ <Tipo> _ = _ <Expresion> _ ; _nl _nl
→ _nl $matriz _ : _ numero <_LBRACKET> _ <_RBRACKET> <_LBRACKET> _ <_RBRACKET> _ = _ <Expresion> _ ; _nl _nl
→ _nl $matriz _ : _ numero [ ] [ ] _ = _ <Expresion> _ ; _nl _nl
→ _nl $matriz _ : _ numero [ ] [ ] _ = _ <CreacionArreglo> _ ; _nl _nl
→ _nl $matriz _ : _ numero [ ] [ ] _ = _ [ <ListaArgumentos> ] _ ; _nl _nl
→ _nl $matriz _ : _ numero [ ] [ ] _ = _ [ <Expresion> , <Expresion> ] _ ; _nl _nl
→ _nl $matriz _ : _ numero [ ] [ ] _ = _ [ [ <ListaArgumentos> ] , [ <ListaArgumentos> ] ] _ ; _nl _nl
→ _nl $matriz _ : _ numero [ ] [ ] _ = _ [ [ 1 , 2 ] , [ 3 , 4 ] ] _ ; _nl _nl

```

## Arreglo de datos (numero) Izquierda

```go
$matriz: numero[][] = [[1, 2], [3, 4]];

<Programa>
→ _nl <Sentencias> _nl
→ _nl <Sentencia> _nl _nl
→ _nl <DeclaracionVariable> _nl _nl
→ _nl <_IDENTIFICADOR_VAR> _ <_DOS_PUNTOS> _ <Tipo> _ <_OP_ASIGNACION> _ <Expresion> _ <_PUNTO_Y_COMA> _nl _nl
→ _nl <_IDENTIFICADOR_VAR> _ <_DOS_PUNTOS> _ <Tipo> _ <_OP_ASIGNACION> _ <CreacionArreglo> _ ; _nl _nl
→ _nl <_IDENTIFICADOR_VAR> _ <_DOS_PUNTOS> _ <TipoBase> <_LBRACKET> <_RBRACKET> <_LBRACKET> <_RBRACKET> _ = _ [ <ListaArgumentos> ] _ ; _nl _nl
→ _nl $matriz _ : _ numero [ ] [ ] _ = _ [ <Expresion> , <Expresion> ] _ ; _nl _nl
→ _nl $matriz _ : _ numero [ ] [ ] _ = _ [ <CreacionArreglo> , <CreacionArreglo> ] _ ; _nl _nl
→ _nl $matriz _ : _ numero [ ] [ ] _ = _ [ [ <ListaArgumentos> ] , [ <ListaArgumentos> ] ] _ ; _nl _nl
→ _nl $matriz _ : _ numero [ ] [ ] _ = _ [ [ <Expresion> , <Expresion> ] , [ <Expresion> , <Expresion> ] ] _ ; _nl _nl
→ _nl $matriz _ : _ numero [ ] [ ] _ = _ [ [ 1 , 2 ] , [ 3 , 4 ] ] _ ; _nl _nl
```

## Concatenación Derecha

```go
$saludo: texto = "Hola" + " " + "Mundo";

<DeclaracionVariable>
→ <_IDENTIFICADOR_VAR> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA>
→ "$saludo" <_> ":" <_> <Tipo> <_> "=" <_> <Expresion> <_> ";"
→ "$saludo" " " ":" " " <Tipo> " " "=" " " <Expresion> " " ";"
→ "$saludo" " " ":" " " <TipoBase> " " "=" " " <Expresion> " " ";"
→ "$saludo" " " ":" " " "texto" " " "=" " " <ExpresionLogicaOr> " " ";"
→ "$saludo" " " ":" " " "texto" " " "=" " " <ExpresionLogicaAnd> " " ";"
→ "$saludo" " " ":" " " "texto" " " "=" " " <ExpresionIgualdad> " " ";"
→ "$saludo" " " ":" " " "texto" " " "=" " " <ExpresionRelacional> " " ";"
→ "$saludo" " " ":" " " "texto" " " "=" " " <ExpresionAditiva> " " ";"
→ "$saludo" " " ":" " " "texto" " " "=" " " <ExpresionAditiva> "+" " " <ExpresionMultiplicativa> " " ";"
→ "$saludo" " " ":" " " "texto" " " "=" " " <ExpresionAditiva> "+" " " <ExpresionPostfija> " " ";"
→ "$saludo" " " ":" " " "texto" " " "=" " " <ExpresionAditiva> "+" " " "\"Mundo\"" " " ";"
→ "$saludo" " " ":" " " "texto" " " "=" " " <ExpresionAditiva> "+" " " "\" \"" "+" " " "\"Mundo\"" " " ";"
→ "$saludo" " " ":" " " "texto" " " "=" " " "\"Hola\"" "+" " " "\" \"" "+" " " "\"Mundo\"" " " ";"
```

## Concatenación Izquierda

```go
<DeclaracionVariable>
→ <_IDENTIFICADOR_VAR> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA>
→ "$saludo" <_> ":" <_> <Tipo> <_> "=" <_> <Expresion> <_> ";"
→ "$saludo" " " ":" " " <TipoBase> <_> "=" " " <Expresion> " " ";"
→ "$saludo" " " ":" " " "texto" " " "=" " " <ExpresionLogicaOr> " " ";"
→ "$saludo" " " ":" " " "texto" " " "=" " " <ExpresionLogicaAnd> " " ";"
→ "$saludo" " " ":" " " "texto" " " "=" " " <ExpresionIgualdad> " " ";"
→ "$saludo" " " ":" " " "texto" " " "=" " " <ExpresionRelacional> " " ";"
→ "$saludo" " " ":" " " "texto" " " "=" " " <ExpresionAditiva> " " ";"
→ "$saludo" " " ":" " " "texto" " " "=" " " <ExpresionAditiva> "+" <_> <ExpresionMultiplicativa> " " ";"
→ "$saludo" " " ":" " " "texto" " " "=" " " <ExpresionAditiva> "+" " " <ExpresionMultiplicativa> " " ";"
→ "$saludo" " " ":" " " "texto" " " "=" " " <ExpresionMultiplicativa> "+" " " <ExpresionMultiplicativa> " " ";"
→ "$saludo" " " ":" " " "texto" " " "=" " " <ExpresionPostfija> "+" " " <ExpresionMultiplicativa> " " ";"
→ "$saludo" " " ":" " " "texto" " " "=" " " "\"Hola\"" "+" " " <ExpresionMultiplicativa> " " ";"
→ "$saludo" " " ":" " " "texto" " " "=" " " "\"Hola\"" "+" " " <ExpresionAditiva> " " ";"
→ "$saludo" " " ":" " " "texto" " " "=" " " "\"Hola\"" "+" " " <ExpresionAditiva> "+" <_> <ExpresionMultiplicativa> " " ";"
→ "$saludo" " " ":" " " "texto" " " "=" " " "\"Hola\"" "+" " " "\" \"" "+" " " "\"Mundo\"" " " ";"
```

## Gramatica base: Condicional `si`

```go
<Programa>        ::= <Sentencia>*
<Sentencia>       ::= <CondicionalSi> | <DeclaracionVariable> | <Expresion>
<CondicionalSi>   ::= "si" "(" <Expresion> ")" "{" <Sentencia>* "}"
<DeclaracionVariable> ::= "$" <IDENTIFICADOR> ":" <Tipo> "=" <Expresion> ";"
<Expresion>       ::= <ExpresionLogica>
<ExpresionLogica> ::= <ExpresionRelacional> (<OperadorLogico> <ExpresionRelacional>)*
<ExpresionRelacional> ::= <ExpresionAditiva> (<OperadorRelacional> <ExpresionAditiva>)*
<ExpresionAditiva> ::= <ExpresionMultiplicativa> (<OperadorAditivo> <ExpresionMultiplicativa>)*
<ExpresionMultiplicativa> ::= <ExpresionUnaria> (<OperadorMultiplicativo> <ExpresionUnaria>)*
<ExpresionUnaria> ::= <OperadorUnario>? <ExpresionPrimaria>
<ExpresionPrimaria> ::= <Literal> | <Variable> | "(" <Expresion> ")"
<Literal>         ::= <numero> | <texto> | <booleano>
<Variable>        ::= "$" <IDENTIFICADOR>
```

## Condicional `si`Derecha

```go
<Programa>
→ <Sentencia>*
→ <Sentencia>* <CondicionalSi>
→ <Sentencia>* "si" "(" <Expresion> ")" "{" <Sentencia>* "}"
→ <Sentencia>* "si" "(" <ExpresionLogica> ")" "{" <Sentencia>* "}"
→ <Sentencia>* "si" "(" <ExpresionRelacional> (<OperadorLogico> <ExpresionRelacional>)* ")" "{" <Sentencia>* "}"
→ <Sentencia>* "si" "(" <ExpresionAditiva> (<OperadorRelacional> <ExpresionAditiva>)* (<OperadorLogico> <ExpresionRelacional>)* ")" "{" <Sentencia>* "}"
→ ... (se expande hasta terminales)

```

## Condicional `si` Izquierda

```go
<Programa>
→ <Sentencia>*
→ <CondicionalSi> <Sentencia>*
→ "si" "(" <Expresion> ")" "{" <Sentencia>* "}" <Sentencia>*
→ "si" "(" <ExpresionLogica> ")" "{" <Sentencia>* "}" <Sentencia>*
→ "si" "(" <ExpresionRelacional> (<OperadorLogico> <ExpresionRelacional>)* ")" "{" <Sentencia>* "}" <Sentencia>*
→ "si" "(" <ExpresionAditiva> (<OperadorRelacional> <ExpresionAditiva>)* (<OperadorLogico> <ExpresionRelacional>)* ")" "{" <Sentencia>* "}" <Sentencia>*

```

## Condicional `si-siNo` `si-siNo`Derecha

```ts
si (verdadero) {
  imprimir("Hola");
} siNo si (falso) {
  imprimir("Adios");
} siNo {
  imprimir("Que haces?");
}
```

```go
<Programa>
::= <_nl> <Sentencias> <_nl>
::= <_nl><Sentencias> 
::= <_nl> <Sentencia>  <_nl>
::= <_nl> <Sentencia> 
::= <_nl> <EstructuraControl>
::= <_nl> <CondicionalSi>
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <ClausulaSiNo>?
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <_PR_SINO> <__> <BloqueCodigo>
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <_PR_SINO> <__> <_LBRACE> <_nl> <Sentencias> <_nl> <_RBRACE>
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <_PR_SINO> <__> <_LBRACE> <_nl> <Sentencias> <_nl> }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <_PR_SINO> <__> <_LBRACE> <_nl> <Sentencias> }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <_PR_SINO> <__> <_LBRACE> <_nl> <Sentencia>  }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <_PR_SINO> <__> <_LBRACE> <_nl> <LlamadaImprimir> }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <_PR_SINO> <__> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ListaArgumentosOpcional> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <_PR_SINO> <__> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ListaArgumentosOpcional> <_> <_RPAREN> ; }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <_PR_SINO> <__> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ListaArgumentosOpcional> ) ; }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <_PR_SINO> <__> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ListaArgumentos> ) ; }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <_PR_SINO> <__> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionL> ) ; }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <_PR_SINO> <__> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionLogicaOr> ) ; }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <_PR_SINO> <__> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionLogicaAnd> ) ; }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <_PR_SINO> <__> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionIgualdad> ) ; }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <_PR_SINO> <__> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionRelacional> ) ; }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <_PR_SINO> <__> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionAditiva> ) ; }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <_PR_SINO> <__> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionMultiplicativa> ) ; }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <_PR_SINO> <__> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionPotencia> ) ; }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <_PR_SINO> <__> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionUnaria> ) ; }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <_PR_SINO> <__> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionPostfija> ) ; }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <_PR_SINO> <__> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <LiteralPrimario> ) ; }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <_PR_SINO> <__> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <_texto> ) ; }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <_PR_SINO> <__> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> "Que haces?" ) ; }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <_PR_SINO> <__> <_LBRACE> <_nl> <_PR_IMPRIMIR> ( "Que haces?" ) ; }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <_PR_SINO> <__> <_LBRACE> <_nl> imprimir ( "Que haces?" ) ; }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi> siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulaSiNoSi> siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <Sentencias> <_nl> <_RBRACE> siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <Sentencias> <_nl> } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <Sentencias> } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <Sentencia>  } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <LlamadaImprimir> } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ListaArgumentosOpcional> <_> 
<_RPAREN> <_> <_PUNTO_Y_COMA> } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ListaArgumentosOpcional> <_> 
<_RPAREN> ; } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ListaArgumentosOpcional> ) ; } siNo 
{ imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ListaArgumentos> ) ; } siNo { 
imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> <_> <ExpresionL> ) ; } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> <_> <ExpresionLogicaOr> ) ; } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> <_> <ExpresionLogicaAnd> ) ; } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> <_> <ExpresionIgualdad> ) ; } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> <_> <ExpresionRelacional> ) ; } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> <_> <ExpresionAditiva> ) ; } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> <_> <ExpresionMultiplicativa> ) ; } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> <_> <ExpresionPotencia> ) ; } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> <_> <ExpresionUnaria> ) ; } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> <_> <ExpresionPostfija> ) ; } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> <_> <LiteralPrimario> ) ; } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> <_> <_texto> ) ; } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> "Adios" ) ; } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> imprimir ( "Adios" ) ; } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> <_> <Expresion> ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> <_> <ExpresionLogicaOr> ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> <_> <ExpresionLogicaAnd> ){ imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> <_> <ExpresionIgualdad>){ imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> <_> <ExpresionRelacional> ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> <_> <ExpresionAditiva> ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> <_> <ExpresionMultiplicativa> ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> <_> <ExpresionPotencia> ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> <_> <ExpresionUnaria> ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> <_> <ExpresionPostfija> ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> <_> <LiteralPrimario> ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> <_> <_LIT_FALSO> ){ imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> falso) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> <_PR_SI> ( falso ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> <__> si  ( falso )  { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_PR_SINO> si ( falso ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> siNo si ( falso ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI>  <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <Sentencias> <_nl> <_RBRACE> siNo si ( falso ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI>  <_> <_LPAREN> <_>  <Expresion> <_> <_RPAREN> <_><_LBRACE> <_nl> <Sentencias> } siNo si ( falso ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI>  <_> <_LPAREN> <_>  <Expresion> <_> <_RPAREN> <_><_LBRACE> <_nl> <Sentencia> } siNo si ( falso ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI>  <_> <_LPAREN> <_>  <Expresion> <_> <_RPAREN> <_><_LBRACE> <_nl> <LlamadaImprimir> } siNo si ( falso ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI>  <_> <_LPAREN> <_>  <Expresion> <_> <_RPAREN> <_><_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ListaArgumentosOpcional> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> } siNo si ( falso ) { imprimir("Adios"); } siNo { imprimir("Que 
haces?"); }
::= <_nl> <_PR_SI>  <_> <_LPAREN> <_>  <Expresion> <_> <_RPAREN> <_><_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ListaArgumentosOpcional> <_> <_RPAREN>; } siNo si ( falso ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI>  <_> <_LPAREN> <_>  <Expresion> <_> <_RPAREN> <_><_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ListaArgumentosOpcional> ); } siNo si ( falso ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI>  <_> <_LPAREN> <_>  <Expresion> <_> <_RPAREN> <_><_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ListaArgumentos> ) ; } siNo si ( falso ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI>  <_> <_LPAREN> <_>  <Expresion> <_> <_RPAREN> <_><_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <Expresion> ) ; } siNo si ( falso ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI>  <_> <_LPAREN> <_>  <Expresion> <_> <_RPAREN> <_><_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionLogicaOr> ) ; } siNo si ( falso ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI>  <_> <_LPAREN> <_>  <Expresion> <_> <_RPAREN> <_><_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionLogicaAnd> ) ; } siNo si ( falso ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI>  <_> <_LPAREN> <_>  <Expresion> <_> <_RPAREN> <_><_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionIgualdad> ) ; } siNo si ( falso ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI>  <_> <_LPAREN> <_>  <Expresion> <_> <_RPAREN> <_><_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionRelacional> ) ; } siNo si ( falso ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI>  <_> <_LPAREN> <_>  <Expresion> <_> <_RPAREN> <_><_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionAditiva> ) ; } siNo si ( falso ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI>  <_> <_LPAREN> <_>  <Expresion> <_> <_RPAREN> <_><_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionMultiplicativa> ) ; } siNo si ( falso ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI>  <_> <_LPAREN> <_>  <Expresion> <_> <_RPAREN> <_><_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionPotencia> ) ; } siNo si ( falso ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI>  <_> <_LPAREN> <_>  <Expresion> <_> <_RPAREN> <_><_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionUnaria> ) ; } siNo si ( falso ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI>  <_> <_LPAREN> <_>  <Expresion> <_> <_RPAREN> <_><_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionPostfija> ) ; } siNo si ( falso ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI>  <_> <_LPAREN> <_>  <Expresion> <_> <_RPAREN> <_><_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <LiteralPrimario> ) ; } siNo si ( falso ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI>  <_> <_LPAREN> <_>  <Expresion> <_> <_RPAREN> <_><_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <_texto> ) ; } siNo si ( falso ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI>  <_> <_LPAREN> <_>  <Expresion> <_> <_RPAREN> <_><_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> “Hola” ) ; } siNo si ( falso ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI>  <_> <_LPAREN> <_>  <Expresion> <_> <_RPAREN> <_><_LBRACE> <_nl> <_PR_IMPRIMIR> (“Hola” ) ; } siNo si ( falso ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI>  <_> <_LPAREN> <_>  <Expresion> <_> <_RPAREN> <_><_LBRACE> imprimir (“Hola” ) ; } siNo si ( falso ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI>  <_> <_LPAREN> <_>  <Expresion> <_> <_RPAREN> { imprimir (“Hola” ) ; } siNo si ( falso ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI>  <_> <_LPAREN> <_>  <Expresion> ) { imprimir (“Hola” ) ; } siNo si ( falso ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= <_nl> <_PR_SI> <_>  <_LPAREN> <_> <ExpresionLogicaOr> ) { imprimir (“Hola” ) ; } siNo si ( falso ) { imprimir(“Adios”); } siNo { imprimir(“Que haces?”); }
::= <_nl> <_PR_SI> <_>  <_LPAREN> <_> <ExpresionLogicaAnd> ) { imprimir (“Hola” ) ; } siNo si ( falso ) { imprimir(“Adios”); } siNo { imprimir(“Que haces?”); }
::= <_nl> <_PR_SI> <_>  <_LPAREN> <_> <ExpresionIgualdad> ) { imprimir (“Hola” ) ; } siNo si ( falso ) { imprimir(“Adios”); } siNo { imprimir(“Que haces?”); }
::= <_nl> <_PR_SI> <_>  <_LPAREN> <_> <ExpresionRelacional> ) { imprimir (“Hola” ) ; } siNo si ( falso ) { imprimir(“Adios”); } siNo { imprimir(“Que haces?”); }
::= <_nl> <_PR_SI> <_>  <_LPAREN> <_> <ExpresionAditiva> ) { imprimir (“Hola” ) ; } siNo si ( falso ) { imprimir(“Adios”); } siNo { imprimir(“Que haces?”); }
::= <_nl> <_PR_SI> <_>  <_LPAREN> <_> ExpresionMultiplicativa> ) { imprimir (“Hola” ) ; } siNo si ( falso ) { imprimir(“Adios”); } siNo { imprimir(“Que haces?”); }
::= <_nl> <_PR_SI> <_>  <_LPAREN> <_> <ExpresionPotencia> ) { imprimir (“Hola” ) ; } siNo si ( falso ) { imprimir(“Adios”); } siNo { imprimir(“Que haces?”); }
::= <_nl> <_PR_SI> <_> <_LPAREN> <_>  <ExpresionUnaria> ) { imprimir (“Hola” ) ; } siNo si ( falso ) { imprimir(“Adios”); } siNo { imprimir(“Que haces?”); }
::= <_nl> <_PR_SI> <_>  <_LPAREN> <_> <ExpresionPostfija> ) { imprimir (“Hola” ) ; } siNo si ( falso ) { imprimir(“Adios”); } siNo { imprimir(“Que haces?”); }
::= <_nl> <_PR_SI> <_>  <_LPAREN> <_> <LiteralPrimario> ) { imprimir (“Hola” ) ; } siNo si ( falso ) { imprimir(“Adios”); } siNo { imprimir(“Que haces?”); }
::= <_nl> <_PR_SI> <_>  <_LPAREN> <_> <_LIT_VERDADERO> ) { imprimir (“Hola” ) ; } siNo si ( falso ) { imprimir(“Adios”); } siNo { imprimir(“Que haces?”); }
::= <_nl> <_PR_SI> <_> verdadero ) { imprimir (“Hola” ) ; } siNo si ( falso ) { imprimir(“Adios”); } siNo { imprimir(“Que haces?”); }
::= <_nl> si ( verdadero ) { imprimir ( "Hola" ) ; } siNo si ( falso ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
::= si ( verdadero ){ { imprimir("Hola"); } siNo si ( falso ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); }
```

## Condicional `si-siNo` `si-siNo` Izquierda

```go
<Programa>  
 
::= <Sentencias> <_nl>  
 
::= <Sentencia> <_nl> <_nl>  
 
::= <EstructuraControl> <_nl> <_nl>  
 
::= <CondicionalSi> <_nl> <_nl>  
 
::= <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( <ExpresionLogicaOr> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( <ExpresionLogicaAnd> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( <ExpresionIgualdad> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( <ExpresionRelacional> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( <ExpresionAditiva> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( <ExpresionMultiplicativa> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( <ExpresionPotencia> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( <ExpresionUnaria> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( <ExpresionPostfija> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( <LiteralPrimario> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( <_LIT_VERDADERO> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( verdadero <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( verdadero ) <_> <BloqueCodigo> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( verdadero ) <BloqueCodigo> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( verdadero ) <_LBRACE> <_nl> <Sentencias> <_nl> <_RBRACE> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( verdadero ) { <_nl> <Sentencias> <_nl> <_RBRACE> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( verdadero ) { <_nl> <Sentencia> <_nl> <_RBRACE> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( verdadero ) { <_nl> <LlamadaImprimir> <_nl> <_RBRACE> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( verdadero ) { <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ListaArgumentosOpcional> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( verdadero ) { <_nl> imprimir <_> <_LPAREN> <_> <ListaArgumentosOpcional> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( verdadero ) { <_nl> imprimir ( <_> <ListaArgumentosOpcional> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( verdadero ) { <_nl> imprimir ( <ListaArgumentosOpcional> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( verdadero ) { <_nl> imprimir ( <ListaArgumentos> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( verdadero ) { <_nl> imprimir ( <Expresion> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( verdadero ) { <_nl> imprimir ( <ExpresionLogicaOr> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( verdadero ) { <_nl> imprimir ( <ExpresionLogicaAnd> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( verdadero ) { <_nl> imprimir ( <ExpresionIgualdad> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( verdadero ) { <_nl> imprimir ( <ExpresionRelacional> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( verdadero ) { <_nl> imprimir ( <ExpresionAditiva> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( verdadero ) { <_nl> imprimir ( <ExpresionMultiplicativa> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( verdadero ) { <_nl> imprimir ( <ExpresionPotencia> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( verdadero ) { <_nl> imprimir ( <ExpresionUnaria> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( verdadero ) { <_nl> imprimir ( <ExpresionPostfija> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( verdadero ) { <_nl> imprimir ( <LiteralPrimario> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( verdadero ) { <_nl> imprimir ( <_texto> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( verdadero ) { <_nl> imprimir ( "Hola" <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( verdadero ) { <_nl> imprimir ( "Hola" ) <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( verdadero ) { <_nl> imprimir ( "Hola" ) ; <_nl> <_RBRACE> <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( verdadero ) { <_nl> imprimir ( "Hola" ) ; <_nl> } <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( verdadero ) { imprimir("Hola"); } <ClausulasSiNoSi>? <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( verdadero ) { imprimir("Hola"); } <ClausulaSiNoSi> <_nl> <_nl>  
 
::= si ( verdadero ) { imprimir("Hola"); } <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( verdadero ) { imprimir("Hola"); } siNo <__> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( verdadero ) { imprimir("Hola"); } siNo <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( verdadero ) { imprimir("Hola"); } siNo si <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulaSiNo>? <_nl> <_nl>  
 
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( <ExpresionLogicaOr> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( <ExpresionLogicaAnd> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( <ExpresionIgualdad> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( <ExpresionRelacional> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( <ExpresionAditiva> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( <ExpresionMultiplicativa> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( <ExpresionPotencia> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( <ExpresionUnaria> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( <ExpresionPostfija> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( <LiteralPrimario> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( <_LIT_FALSO> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso <_> <_RPAREN> <_> <BloqueCodigo> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) <_> <BloqueCodigo> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) <BloqueCodigo> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) <_LBRACE> <_nl> <Sentencias> <_nl> <_RBRACE> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { <_nl> <Sentencias> <_nl> <_RBRACE> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { <_nl> <Sentencia> <_nl> <_RBRACE> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { <_nl> <LlamadaImprimir> <_nl> <_RBRACE> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ListaArgumentosOpcional> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { <_nl> imprimir <_> <_LPAREN> <_> <ListaArgumentosOpcional> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { <_nl> imprimir ( <_> <ListaArgumentosOpcional> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { <_nl> imprimir ( <ListaArgumentosOpcional> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { <_nl> imprimir ( <ListaArgumentos> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { <_nl> imprimir ( <Expresion> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { <_nl> imprimir ( <ExpresionLogicaOr> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { <_nl> imprimir ( <ExpresionLogicaAnd> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { <_nl> imprimir ( <ExpresionIgualdad> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { <_nl> imprimir ( <ExpresionRelacional> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { <_nl> imprimir ( <ExpresionAditiva> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { <_nl> imprimir ( <ExpresionMultiplicativa> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { <_nl> imprimir ( <ExpresionPotencia> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { <_nl> imprimir ( <ExpresionUnaria> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { <_nl> imprimir ( <ExpresionPostfija> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { <_nl> imprimir ( <LiteralPrimario> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { <_nl> imprimir ( <_texto> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { <_nl> imprimir ( "Adios" <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { <_nl> imprimir ( "Adios" ) <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { <_nl> imprimir ( "Adios" ) ; <_nl> <_RBRACE> <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { <_nl> imprimir ( "Adios" ) ; <_nl> } <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { imprimir("Adios"); } <ClausulaSiNo>? <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { imprimir("Adios"); } <_PR_SINO> <__> <BloqueCodigo> <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { imprimir("Adios"); } siNo <__> <BloqueCodigo> <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { imprimir("Adios"); } siNo <_LBRACE> <_nl> <Sentencias> <_nl> <_RBRACE> <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { imprimir("Adios"); } siNo { <_nl> <Sentencias> <_nl> <_RBRACE> <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { imprimir("Adios"); } siNo { <_nl> <Sentencia> <_nl> <_RBRACE> <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { imprimir("Adios"); } siNo { <_nl> <LlamadaImprimir> <_nl> <_RBRACE> <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { imprimir("Adios"); } siNo { <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ListaArgumentosOpcional> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { imprimir("Adios"); } siNo { <_nl> imprimir <_> <_LPAREN> <_> <ListaArgumentosOpcional> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { imprimir("Adios"); } siNo { <_nl> imprimir ( <_> <ListaArgumentosOpcional> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { imprimir("Adios"); } siNo { <_nl> imprimir ( <ListaArgumentosOpcional> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { imprimir("Adios"); } siNo { <_nl> imprimir ( <ListaArgumentos> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { imprimir("Adios"); } siNo { <_nl> imprimir ( <Expresion> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { imprimir("Adios"); } siNo { <_nl> imprimir ( <ExpresionLogicaOr> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { imprimir("Adios"); } siNo { <_nl> imprimir ( <ExpresionLogicaAnd> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { imprimir("Adios"); } siNo { <_nl> imprimir ( <ExpresionIgualdad> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { imprimir("Adios"); } siNo { <_nl> imprimir ( <ExpresionRelacional> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { imprimir("Adios"); } siNo { <_nl> imprimir ( <ExpresionAditiva> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { imprimir("Adios"); } siNo { <_nl> imprimir ( <ExpresionMultiplicativa> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { imprimir("Adios"); } siNo { <_nl> imprimir ( <ExpresionPotencia> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { imprimir("Adios"); } siNo { <_nl> imprimir ( <ExpresionUnaria> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { imprimir("Adios"); } siNo { <_nl> imprimir ( <ExpresionPostfija> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { imprimir("Adios"); } siNo { <_nl> imprimir ( <LiteralPrimario> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { imprimir("Adios"); } siNo { <_nl> imprimir ( <_texto> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { imprimir("Adios"); } siNo { <_nl> imprimir ( "Que haces?" <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { imprimir("Adios"); } siNo { <_nl> imprimir ( "Que haces?" ) <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { imprimir("Adios"); } siNo { <_nl> imprimir ( "Que haces?" ) ; <_nl> <_RBRACE> <_nl> <_nl>  
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { imprimir("Adios"); } siNo { <_nl> imprimir ( "Que haces?" ) ; } <_nl> <nl> 
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); } <_nl>
::= si ( verdadero ) { imprimir("Hola"); } siNo si ( falso ) { imprimir("Adios"); } siNo { imprimir("Que haces?"); } 
```

## Condicional `mientras`Derecha

```ts
mientras ($i <= 5) {
    imprimir("Contando: " + $i);
}
```

```go
1 <Programa> ::=
2 <_nl> <Sentencias> <_nl> ::=
3 <_nl> <Sentencia> <_nl> <_nl> ::=
4 <_nl> <EstructuraControl> <_nl> <_nl> ::=
5 <_nl> <BucleMientras> <_nl> <_nl> ::=
6 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_nl> <_nl> ::=
7 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <Sentencias> <_nl> <_RBRACE> <_nl> <_nl> ::=
8 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <Sentencias> <_nl> < } > <_nl> <_nl> ::=
9 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <Sentencia> <_nl> < } > <_nl> <_nl> ::=
10 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <LlamadaImprimir> <_nl> < } > <_nl> <_nl> ::=
11 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ListaArgumentosOpcional> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> < } > <_nl> <_nl> ::=
12 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ListaArgumentosOpcional> <_> <_RPAREN> <_> < ; > <_nl> < } > <_nl> <_nl> ::=
13 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ListaArgumentosOpcional> <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
14 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ListaArgumentos> <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
15 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <Expresion> <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
16 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionLogicaOr> <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
17 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionLogicaAnd> <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
18 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionIgualdad> <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
19 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionRelacional> <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
20 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionAditiva> <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
21 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionAditiva> <_> <_OP_SUMA> <_> <ExpresionMultiplicativa> <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
22 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionAditiva> <_> <_OP_SUMA> <_> <ExpresionPotencia> <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
23 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionAditiva> <_> <_OP_SUMA> <_> <ExpresionUnaria> <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
24 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionAditiva> <_> <_OP_SUMA> <_> <ExpresionPostfija> <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
25 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionAditiva> <_> <_OP_SUMA> <_> <LiteralPrimero> <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
26 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionAditiva> <_> <_OP_SUMA> <_> <_IDENTIFICADOR_VAR> <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
27 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionAditiva> <_> <_OP_SUMA> <_> < $i > <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
28 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionAditiva> <_> < + > <_> < $i > <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
29 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionMultiplicativa> <_> < + > <_> < $i > <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
30 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionPotencia> <_> < + > <_> < $i > <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
31 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionUnaria> <_> < + > <_> < $i > <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
32 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionPostfija> <_> < + > <_> < $i > <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
33 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <LiteralPrimario> <_> < + > <_> < $i > <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
34 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <_texto> <_> < + > <_> < $i > <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
35 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> < Contando: > <_> < + > <_> < $i > <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
36 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> < ( > <_> < Contando: > <_> < + > <_> < $i > <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
37 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> < imprimir > <_> < ( > <_> < Contando: > <_> < + > <_> < $i > <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
38 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> < { > <_nl> < imprimir > <_> < ( > <_> < Contando: > <_> < + > <_> < $i > <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
39 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <Expresion> <_> < ) > <_> < { > <_nl> < imprimir > <_> < ( > <_> < Contando: > <_> < + > <_> < $i > <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
40 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <ExpresionLogicaOr> <_> < ) > <_> < { > <_nl> < imprimir > <_> < ( > <_> < Contando: > <_> < + > <_> < $i > <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
41 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <ExpresionLogicaAnd> <_> < ) > <_> < { > <_nl> < imprimir > <_> < ( > <_> < Contando: > <_> < + > <_> < $i > <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
42 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <ExpresionIgualdad> <_> < ) > <_> < { > <_nl> < imprimir > <_> < ( > <_> < Contando: > <_> < + > <_> < $i > <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
43 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <ExpresionRelacional> <_> < ) > <_> < { > <_nl> < imprimir > <_> < ( > <_> < Contando: > <_> < + > <_> < $i > <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
44 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <ExpresionRelacional> <_> <_OP_LTE> <_> <ExpresionAditiva> <_> < ) > <_> < { > <_nl> < imprimir > <_> < ( > <_> < Contando: > <_> < + > <_> < $i > <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=

45 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <ExpresionRelacional> <_> <_OP_LTE> <_> <ExpresionMultiplicativa> <_> < ) > <_> < { > <_nl> < imprimir > <_> < ( > <_> < Contando: > <_> < + > <_> < $i > <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
46 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <ExpresionRelacional> <_> <_OP_LTE> <_> <ExpresionPotencia> <_> < ) > <_> < { > <_nl> < imprimir > <_> < ( > <_> < Contando: > <_> < + > <_> < $i > <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
47 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <ExpresionRelacional> <_> <_OP_LTE> <_> <ExpresionUnaria> <_> < ) > <_> < { > <_nl> < imprimir > <_> < ( > <_> < Contando: > <_> < + > <_> < $i > <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
48 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <ExpresionRelacional> <_> <_OP_LTE> <_> <ExpresionPostfija> <_> < ) > <_> < { > <_nl> < imprimir > <_> < ( > <_> < Contando: > <_> < + > <_> < $i > <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
49 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <ExpresionRelacional> <_> <_OP_LTE> <_> <LiteralPrimario> <_> < ) > <_> < { > <_nl> < imprimir > <_> < ( > <_> < Contando: > <_> < + > <_> < $i > <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
50 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <ExpresionRelacional> <_> <_OP_LTE> <_> <_numero> <_> < ) > <_> < { > <_nl> < imprimir > <_> < ( > <_> < Contando: > <_> < + > <_> < $i > <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
51 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <ExpresionRelacional> <_> <_OP_LTE> <_> < 5 > <_> < ) > <_> < { > <_nl> < imprimir > <_> < ( > <_> < Contando: > <_> < + > <_> < $i > <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
52 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <ExpresionRelacional> <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> < imprimir > <_> < ( > <_> < Contando: > <_> < + > <_> < $i > <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
53 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <ExpresionAditiva> <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> < imprimir > <_> < ( > <_> < Contando: > <_> < + > <_> < $i > <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
54 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <ExpresionMultiplicativa> <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> < imprimir > <_> < ( > <_> < Contando: > <_> < + > <_> < $i > <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
55 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <ExpresionPotencia> <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> < imprimir > <_> < ( > <_> < Contando: > <_> < + > <_> < $i > <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
56 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <ExpresionUnaria> <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> < imprimir > <_> < ( > <_> < Contando: > <_> < + > <_> < $i > <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=

57 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <ExpresionPostfija> <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> < imprimir > <_> < ( > <_> < Contando: > <_> < + > <_> < $i > <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
57 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <LiteralPrimario> <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> < imprimir > <_> < ( > <_> < Contando: > <_> < + > <_> < $i > <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
58 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <_IDENTIFICADOR_VAR> <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> < imprimir > <_> < ( > <_> < Contando: > <_> < + > <_> < $i > <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
59 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> < $ i> <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> < imprimir > <_> < ( > <_> < Contando: > <_> < + > <_> < $i > <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
60 <_nl> <_PR_MIENTRAS> <_> < ( > <_> < $ i> <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> < imprimir > <_> < ( > <_> < Contando: > <_> < + > <_> < $i > <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
61 <_nl> < mientras > <_> < ( > <_> < $ i> <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> < imprimir > <_> < ( > <_> < Contando: > <_> < + > <_> < $i > <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=
```

## Condicional `mientras` Izquierda

```go
1 <Programa> ::=
2 <_nl> <Sentencias> <_nl> ::=
3 <_nl> <Sentencia> <_nl> <_nl> ::=
4 <_nl> <EstructuraControl> <_nl> <_nl> ::=
5 <_nl> <BucleMientras> <_nl> <_nl> ::=
6 <_nl> <_PR_MIENTRAS> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_nl> <_nl> ::=
7 <_nl> < mientras > <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_nl> <_nl> ::=
8 <_nl> < mientras > <_> < ( > <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <_nl> <_nl> ::=
9 <_nl> < mientras > <_> < ( > <_> <ExpresionLogicaOr> <_> <_RPAREN> <_> <BloqueCodigo> <_nl> <_nl> ::=
10 <_nl> < mientras > <_> < ( > <_> <ExpresionLogicaAnd> <_> <_RPAREN> <_> <BloqueCodigo> <_nl> <_nl> ::=
11 <_nl> < mientras > <_> < ( > <_> <ExpresionIgualdad> <_> <_RPAREN> <_> <BloqueCodigo> <_nl> <_nl> ::=
12 <_nl> < mientras > <_> < ( > <_> <ExpresionRelacional> <_> <_RPAREN> <_> <BloqueCodigo> <_nl> <_nl> ::=
13 <_nl> < mientras > <_> < ( > <_><ExpresionRelacional> <_> <_OP_LTE> <_> <ExpresionAditiva> <_> <_RPAREN> <_> <BloqueCodigo> <_nl> <_nl> ::=
14 <_nl> < mientras > <_> < ( > <_><ExpresionAditiva> <_> <_OP_LTE> <_> <ExpresionAditiva> <_> <_RPAREN> <_> <BloqueCodigo> <_nl> <_nl> ::=
15<_nl> < mientras > <_> < ( > <_><ExpresionMultiplicativa> <_> <_OP_LTE> <_> <ExpresionAditiva> <_> <_RPAREN> <_> <BloqueCodigo> <_nl> <_nl> ::=

16 <_nl> < mientras > <_> < ( > <_><ExpresionPotencia> <_> <_OP_LTE> <_> <ExpresionAditiva> <_> <_RPAREN> <_> <BloqueCodigo> <_nl> <_nl> ::=
17 <_nl> < mientras > <_> < ( > <_><ExpresionUnaria> <_> <_OP_LTE> <_> <ExpresionAditiva> <_> <_RPAREN> <_> <BloqueCodigo> <_nl> <_nl> ::=
18 <_nl> < mientras > <_> < ( > <_><ExpresionPostfija> <_> <_OP_LTE> <_> <ExpresionAditiva> <_> <_RPAREN> <_> <BloqueCodigo> <_nl> <_nl> ::=
19 <_nl> < mientras > <_> < ( > <_><LiteralPrimario> <_> <_OP_LTE> <_> <ExpresionAditiva> <_> <_RPAREN> <_> <BloqueCodigo> <_nl> <_nl> ::=
20 <_nl> < mientras > <_> < ( > <_><_IDENTIFICADOR_VAR> <_> <_OP_LTE> <_> <ExpresionAditiva> <_> <_RPAREN> <_> <BloqueCodigo> <_nl> <_nl> ::=
21 <_nl> < mientras > <_> < ( > <_>< $i > <_> <_OP_LTE> <_> <ExpresionAditiva> <_> <_RPAREN> <_> <BloqueCodigo> <_nl> <_nl> ::=
22 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> <ExpresionAditiva> <_> <_RPAREN> <_> <BloqueCodigo> <_nl> <_nl> ::=
23 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> <ExpresionMultiplicativa> <_> <_RPAREN> <_> <BloqueCodigo> <_nl> <_nl> ::=
24 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> <ExpresionPotencia> <_> <_RPAREN> <_> <BloqueCodigo> <_nl> <_nl> ::=
25 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> <ExpresionUnaria> <_> <_RPAREN> <_> <BloqueCodigo> <_nl> <_nl> ::=
26 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> <ExpresionPostfija> <_> <_RPAREN> <_> <BloqueCodigo> <_nl> <_nl> ::=
27 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> <LiteralPrimario> <_> <_RPAREN> <_> <BloqueCodigo> <_nl> <_nl> ::=
28 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> <_numero> <_> <_RPAREN> <_> <BloqueCodigo> <_nl> <_nl> ::=
29 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> < 5 > <_> <_RPAREN> <_> <BloqueCodigo> <_nl> <_nl> ::=
30 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> < 5 > <_> < ) > <_> <BloqueCodigo> <_nl> <_nl> ::=
31 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> < 5 > <_> < ) > <_> <_LBRACE> <_nl> <Sentencias> <_nl> <_RBRACE> <_nl> <_nl> ::=
32 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> <Sentencias> <_nl> <_RBRACE> <_nl> <_nl> ::=

33 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> <Sentencia> <_nl> <_RBRACE> <_nl> <_nl> ::=
34 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> <LlamadaImprimir> <_nl> <_RBRACE> <_nl> <_nl> ::=
35 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> <LlamadaImprimir> <_nl> <_RBRACE> <_nl> <_nl> ::=
36 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ListaArgumentosOpcional> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl> ::=
37 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> <imprimir> <_> <_LPAREN> <_> <ListaArgumentosOpcional> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl> ::=
38 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> <imprimir> <_> < ( > <_> <ListaArgumentosOpcional> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl> ::=
39 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <ListaArgumentosOpcional> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl> ::=
40 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <ListaArgumentos> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl> ::=
41 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Expresion> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl> ::=
42 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <ExpresionLogicaOr> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl> ::=
43 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <ExpresionLogicaAnd> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl> ::=
44 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <ExpresionIgualdad> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl> ::=
45 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <ExpresionRelacional> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl> ::=
46 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <ExpresionAditiva> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl> ::=
47 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <ExpresionAditiva> <_> <_OP_SUMA> <_> <ExpresionMultiplicativa> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl> ::=
48 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <ExpresionMultiplicativa> <_> <_OP_SUMA> <_> <ExpresionMultiplicativa> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl> ::=
49 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <ExpresionPotencia> <_> <_OP_SUMA> <_> <ExpresionMultiplicativa> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl> ::=
50 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <ExpresionUnaria> <_> <_OP_SUMA> <_> <ExpresionMultiplicativa> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl> ::=
51 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <ExpresionPostfija> <_> <_OP_SUMA> <_> <ExpresionMultiplicativa> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl> ::=
52 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <LiteralPrimero> <_> <_OP_SUMA> <_> <ExpresionMultiplicativa> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl> ::=
53 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <_texto> <_> <_OP_SUMA> <_> <ExpresionMultiplicativa> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl> ::=
54 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Contando: > < “ > <_OP_SUMA> <_> <ExpresionMultiplicativa> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl> ::=
55 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Contando: > < “ > < + > <_> <ExpresionMultiplicativa> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl> ::=
56 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Contando: > < “ > < + > <_> <ExpresionMultiplicativa> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl> ::=
57 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Contando: > < “ > < + > <_> <ExpresionPotencia> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl> ::=
58 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Contando: > < “ > < + > <_> <ExpresionUnaria> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl> ::=
59 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Contando: > < “ > < + > <_> <ExpresionPostfija> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl> ::=
60 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Contando: > < “ > < + > <_> <LiteralPrimario> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl> ::=
61 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Contando: > < “ > < + > <_> <_IDENTIFICADOR_VAR> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl> ::=
62 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Contando: > < “ > < + > <_> < $i > <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl> ::=
63 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Contando: > < “ > < + > <_> < $i > <_> < ) > <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl> <_nl> ::=
64 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Contando: > < “ > < + > <_> < $i > <_> < ) > <_> < ; > <_nl> <_RBRACE> <_nl> <_nl> ::=
65 <_nl> < mientras > <_> < ( > <_>< $i > <_> < <= > <_> < 5 > <_> < ) > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Contando: > < “ > < + > <_> < $i > <_> < ) > <_> < ; > <_nl> < } > <_nl> <_nl> ::=

```

## Condicional `para`Derecha

```ts
para ($i: numero = 0; $i < 10; $i = $i + 1) {
    imprimir($i);
}
```

```go
<Programa>
::= <_nl> <Sentencias <_nl>
::= <_nl> <Sentencias
::= <_nl> <Sentencia <_nl>
 
::= <_nl> <Sentencia> 
 
::= <_nl> <EstructuraControl>
 
::= <_nl> <BuclePara>
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> <Asignacion> <_> <_RPAREN> <_> <BloqueCodigo
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> <Asignacion> <_> <_RPAREN> <_> <BloqueCodigo
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> <Asignacion> <_> <_RPAREN> <_> <_LBRACE <Sentencias <_RBRACE
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> <Asignacion> <_> <_RPAREN> <_> <_LBRACE <Sentencias> }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> <Asignacion> <_> <_RPAREN> <_> <_LBRACE <Sentencia>}<_nl>
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> <Asignacion> <_> <_RPAREN> <_> <_LBRACE <LlamadaImprimir ; }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> <Asignacion> <_> <_RPAREN> <_> <_LBRACE <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ListaArgumentosOpcional> <_> <_RPAREN> 
<_> <_PUNTO_Y_COMA ; }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> <Asignacion> <_> <_RPAREN> <_> <_LBRACE <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ListaArgumentosOpcional> <_> <_RPAREN> 
<_> ; }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> <Asignacion> <_> <_RPAREN> <_> <_LBRACE <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ListaArgumentosOpcional> <_> ) <_> ; <_nl> } 
<_nl>
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> <Asignacion> <_> <_RPAREN> <_> <_LBRACE <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ListaArgumentos> <_> ) <_> ; }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> <Asignacion> <_> <_RPAREN> <_> <_LBRACE <_PR_IMPRIMIR> <_> <_LPAREN> <_> <Expresion> <_> ) <_> ; }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> <Asignacion> <_> <_RPAREN> <_> <_LBRACE <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionLogicaOr> <_> ) <_> ; }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> <Asignacion> <_> <_RPAREN> <_> <_LBRACE <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionLogicaAnd> <_> ) <_> ; }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> <Asignacion> <_> <_RPAREN> <_> <_LBRACE <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionIgualdad> <_> ) <_> ; }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> <Asignacion> <_> <_RPAREN> <_> <_LBRACE <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionRelacional> <_> ) <_> ; }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> <Asignacion> <_> <_RPAREN> <_> <_LBRACE <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionAditiva> <_> ) <_> ; }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> <Asignacion> <_> <_RPAREN> <_> <_LBRACE <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionMultiplicativa> <_> ) <_> ; <_nl> } 
<_nl>
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> <Asignacion> <_> <_RPAREN> <_> <_LBRACE <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionPotencia> <_> ) <_> ; }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> <Asignacion> <_> <_RPAREN> <_> <_LBRACE <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionUnaria> <_> ) <_> ; }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> <Asignacion> <_> <_RPAREN> <_> <_LBRACE <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionPostfija> <_> ) <_> ; }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> <Asignacion> <_> <_RPAREN> <_> <_LBRACE <_PR_IMPRIMIR> <_> <_LPAREN> <_> <Variable> <_> ) <_> ; }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> <Asignacion> <_> <_RPAREN> <_> <_LBRACE <_PR_IMPRIMIR> <_> <_LPAREN> <_> <_IDENTIFICADOR> <_> ) <_> ; }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> <Asignacion> <_> <_RPAREN> <_> <_LBRACE <_PR_IMPRIMIR> <_> <_LPAREN> <_> $i <_> ) <_> ; }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> <Asignacion> <_> <_RPAREN> <_> <_LBRACE <_PR_IMPRIMIR> <_> <_LPAREN> <_> $i ) <_> ; }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> <Asignacion> <_> <_RPAREN> <_> <_LBRACE <_PR_IMPRIMIR> <_> <_LPAREN> <_> $i ) ; }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> <Asignacion> <_> <_RPAREN> <_> <_LBRACE imprimir <_> ( <_> $i ) ; }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> <Asignacion> <_> <_RPAREN> <_> <_LBRACE imprimir(" <_> $i ") ; }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> <Asignacion> <_> <_RPAREN> <_> <_LBRACE imprimir($i) ; }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> <Asignacion> <_> <_RPAREN> <_> { <_nl> imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> <_IDENTIFICADOR> <_> <_ASIGNACION> <_> <Expresion> <_> <_RPAREN> <_> { <_nl> imprimir($i); ; }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> <_IDENTIFICADOR> <_> <_ASIGNACION> <_> <Expresion> ) <_> { <_nl> imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> <_IDENTIFICADOR> <_> = <_> <Expresion> ) <_> { <_nl> imprimir($i);}
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> <_IDENTIFICADOR> = <_> <Expresion> ) <_> { <_nl> imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> $i = <_> <Expresion> ) <_> { <_nl> imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> $i = <Expresion> ) <_> { <_nl> imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> $i = <ExpresionLogicaOr> ) <_> { <_nl> imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> $i = <ExpresionLogicaAnd> ) <_> { <_nl> imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> $i = <ExpresionIgualdad> ) <_> { <_nl> imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> $i = <ExpresionRelacional> ) <_> { <_nl> imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> $i = <ExpresionAditiva> ) <_> { <_nl> imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> $i = <ExpresionMultiplicativa> <_SUMA> <ExpresionMultiplicativa> ) <_> { <_nl> imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> $i = <ExpresionMultiplicativa> <_SUMA> <_ENTERO> ) <_> { <_nl> imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> $i = <ExpresionMultiplicativa> <_SUMA> 1 ) <_> { <_nl> imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> $i = <ExpresionMultiplicativa> + 1 ) <_> { <_nl> imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> $i = <ExpresionPotencia> + 1 ) <_> { <_nl> imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> $i = <ExpresionUnaria> + 1 ) <_> { <_nl> imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> $i = <ExpresionPostfija> + 1 ) <_> { <_nl> imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> $i = <Variable> + 1 ) <_> { <_nl> imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> $i = <_IDENTIFICADOR> + 1 ) <_> { <_nl> imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> $i = $i + 1 ) <_> { <_nl> imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_PUNTO_Y_COMA> <_> $i = $i + 1 ) { <_nl> imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_REL_MENOR_QUE> <ExpresionAditiva> <_PUNTO_Y_COMA> <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_REL_MENOR_QUE> <_ENTERO> <_PUNTO_Y_COMA> <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> <_REL_MENOR_QUE> 10 <_PUNTO_Y_COMA> <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Expresion> < 10 <_PUNTO_Y_COMA> <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <ExpresionLogicaOr> < 10 <_PUNTO_Y_COMA> <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <ExpresionLogicaAnd> < 10 <_PUNTO_Y_COMA> <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <ExpresionIgualdad> < 10 <_PUNTO_Y_COMA> <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <ExpresionRelacional> < 10 <_PUNTO_Y_COMA> <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <ExpresionAditiva> < 10 <_PUNTO_Y_COMA> <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <ExpresionMultiplicativa> < 10 <_PUNTO_Y_COMA> <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <ExpresionPotencia> < 10 <_PUNTO_Y_COMA> <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <ExpresionUnaria> < 10 <_PUNTO_Y_COMA> <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <ExpresionPostfija> < 10 <_PUNTO_Y_COMA> <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <Variable> < 10 <_PUNTO_Y_COMA> <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> <_IDENTIFICADOR> < 10 <_PUNTO_Y_COMA> <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> <_> $i < 10 <_PUNTO_Y_COMA> <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> <_PUNTO_Y_COMA> $i < 10 <_PUNTO_Y_COMA> <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> ; $i < 10 <_PUNTO_Y_COMA> <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <DeclaracionVariable> ; $i < 10 ; <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <_IDENTIFICADOR> <_> <_DOS_PUNTOS> <_> <TipoDato> <_> <_ASIGNACION> <_> <Expresion> <_PUNTO_Y_COMA> $i < 10 ; <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <_IDENTIFICADOR> <_> <_DOS_PUNTOS> <_> <TipoDato> <_> <_ASIGNACION> <_> <Expresion> ; $i < 10 ; <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <_IDENTIFICADOR> <_> <_DOS_PUNTOS> <_> <TipoDato> <_> = <_> <Expresion> ; $i < 10 ; <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <_IDENTIFICADOR> <_> <_DOS_PUNTOS> <_> <TipoDato> = <_> <Expresion> ; $i < 10 ; <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <_IDENTIFICADOR> <_> <_DOS_PUNTOS> <_> <TipoDato> = <Expresion> ; $i < 10 ; <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <_IDENTIFICADOR> <_> <_DOS_PUNTOS> <_> <TipoDato> = <ExpresionLogicaOr> ; $i < 10 ; <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <_IDENTIFICADOR> <_> <_DOS_PUNTOS> <_> <TipoDato> = <ExpresionLogicaAnd> ; $i < 10 ; <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <_IDENTIFICADOR> <_> <_DOS_PUNTOS> <_> <TipoDato> = <ExpresionIgualdad> ; $i < 10 ; <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <_IDENTIFICADOR> <_> <_DOS_PUNTOS> <_> <TipoDato> = <ExpresionRelacional> ; $i < 10 ; <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <_IDENTIFICADOR> <_> <_DOS_PUNTOS> <_> <TipoDato> = <ExpresionAditiva> ; $i < 10 ; <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <_IDENTIFICADOR> <_> <_DOS_PUNTOS> <_> <TipoDato> = <ExpresionMultiplicativa> ; $i < 10 ; <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <_IDENTIFICADOR> <_> <_DOS_PUNTOS> <_> <TipoDato> = <ExpresionPotencia> ; $i < 10 ; <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <_IDENTIFICADOR> <_> <_DOS_PUNTOS> <_> <TipoDato> = <ExpresionUnaria> ; $i < 10 ; <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <_IDENTIFICADOR> <_> <_DOS_PUNTOS> <_> <TipoDato> = <ExpresionPostfija> ; $i < 10 ; <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <_IDENTIFICADOR> <_> <_DOS_PUNTOS> <_> <TipoDato> = <LiteralPrimario> ; $i < 10 ; <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <_IDENTIFICADOR> <_> <_DOS_PUNTOS> <_> <TipoDato> = <_ENTERO> ; $i < 10 ; <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <_IDENTIFICADOR> <_> <_DOS_PUNTOS> <_> <TipoDato> = 0 ; $i < 10 ; <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <_IDENTIFICADOR> <_> <_DOS_PUNTOS> <_> <_PR_NUMERO> = 0 ; $i < 10 ; <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <_IDENTIFICADOR> <_> <_DOS_PUNTOS> numero = 0 ; $i < 10 ; <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> <_IDENTIFICADOR> <_> : numero = 0 ; $i < 10 ; <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> <_LPAREN> <_> $i <_> : numero = 0 ; $i < 10 ; <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> <_> ( <_> $i : numero = 0 ; $i < 10 ; <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> <_PR_PARA> ( <_> $i : numero = 0 ; $i < 10 ; <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> para <_> ( <_> $i : numero = 0 ; $i < 10 ; <_> $i = $i + 1 ) { imprimir($i); }
 
::= <_nl> para ( <_> $i : numero = 0 ; $i < 10 ; <_> $i = $i + 1 ) { imprimir($i); }
 
::= para ($i: numero = 0; $i < 10; $i = $i + 1) { imprimir($i); }

```

## Condicional `para` Izquierda

```go
<Programa>
::= <_nl> <Sentencias> <_nl>
::= <Sentencias> <_nl>
::= <EstructuraControl> <_nl>
::= <BuclePara>
::= <_PR_PARA> <_> <_LPAREN> <_> <InicializadorPara>? <_> <_PUNTO_Y_COMA> <_> <CondicionPara>? <_> <_PUNTO_Y_COMA> <_> <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( <DeclaracionVariableSinPuntoComa> <_> <_PUNTO_Y_COMA> <_> <CondicionPara>? <_> <_PUNTO_Y_COMA> <_> <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( <_IDENTIFICADOR_VAR> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA> <_> <CondicionPara>? <_> <_PUNTO_Y_COMA> <_> <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i  <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA> <_> <CondicionPara>? <_> <_PUNTO_Y_COMA> <_> <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  <Tipo> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA> <_> <CondicionPara>? <_> <_PUNTO_Y_COMA> <_> <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  <TipoBase> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA> <_> <CondicionPara>? <_> <_PUNTO_Y_COMA> <_> <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  <_TIPO_NUMERO> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA> <_> <CondicionPara>? <_> <_PUNTO_Y_COMA> <_> <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  numero  <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA> <_> <CondicionPara>? <_> <_PUNTO_Y_COMA> <_> <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  numero  =  <Expresion> <_> <_PUNTO_Y_COMA> <_> <CondicionPara>? <_> <_PUNTO_Y_COMA> <_> <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  numero  =  <ExpresionLogicaOr> <_> <_PUNTO_Y_COMA> <_> <CondicionPara>? <_> <_PUNTO_Y_COMA> <_> <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  numero  =  <ExpresionLogicaAnd> <_> <_PUNTO_Y_COMA> <_> <CondicionPara>? <_> <_PUNTO_Y_COMA> <_> <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  numero  =  <ExpresionIgualdad> <_> <_PUNTO_Y_COMA> <_> <CondicionPara>? <_> <_PUNTO_Y_COMA> <_> <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  numero  =  <ExpresionRelacional> <_> <_PUNTO_Y_COMA> <_> <CondicionPara>? <_> <_PUNTO_Y_COMA> <_> <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  numero  =  <ExpresionAditiva> <_> <_PUNTO_Y_COMA> <_> <CondicionPara>? <_> <_PUNTO_Y_COMA> <_> <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  numero  =  <ExpresionMultiplicativa> <_> <_PUNTO_Y_COMA> <_> <CondicionPara>? <_> <_PUNTO_Y_COMA> <_> <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  numero  =  <ExpresionPotencia> <_> <_PUNTO_Y_COMA> <_> <CondicionPara>? <_> <_PUNTO_Y_COMA> <_> <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  numero  =  <ExpresionUnaria> <_> <_PUNTO_Y_COMA> <_> <CondicionPara>? <_> <_PUNTO_Y_COMA> <_> <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  numero  =  <ExpresionPostfija> <_> <_PUNTO_Y_COMA> <_> <CondicionPara>? <_> <_PUNTO_Y_COMA> <_> <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  numero  =  <LiteralPrimario> <_> <_PUNTO_Y_COMA> <_> <CondicionPara>? <_> <_PUNTO_Y_COMA> <_> <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  numero  =  <_numero> <_> <_PUNTO_Y_COMA> <_> <CondicionPara>? <_> <_PUNTO_Y_COMA> <_> <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
= para ( $i : numero = 0 <_PUNTO_Y_COMA> <_> <CondicionPara> <_> <_PUNTO_Y_COMA> <_> <IncrementoPara> <_> <_RPAREN> <_> <BloqueCodigo> <_nl>
::= para ( $i:  numero  =  0;  <CondicionPara>? <_> <_PUNTO_Y_COMA> <_> <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  numero  =  0;  <Expresion> <_> <_PUNTO_Y_COMA> <_> <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  numero  =  0;  <ExpresionLogicaOr> <_> <_PUNTO_Y_COMA> <_> <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  numero  =  0;  <ExpresionLogicaAnd> <_> <_PUNTO_Y_COMA> <_> <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  numero  =  0;  <ExpresionIgualdad> <_> <_PUNTO_Y_COMA> <_> <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  numero  =  0;  <ExpresionRelacional> <_> <_PUNTO_Y_COMA> <_> <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  numero  =  0;  <ExpresionRelacional> <_> <_PUNTO_Y_COMA> <_> <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>

::= para ( $i:  numero  =  0;  <ExpresionRelacional> <_> <_OP_LT> <_> <ExpresionAditiva> <_> <_PUNTO_Y_COMA> <_> <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  numero  =  0;  <ExpresionAditiva> <_> <_OP_LT> <_> <ExpresionAditiva>  <_> <_PUNTO_Y_COMA> <_> <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  numero  =  0;  <ExpresionMultiplicativa> <_> <_OP_LT> <_> <ExpresionAditiva> <_> <_PUNTO_Y_COMA> <_> <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  numero  =  0;  <ExpresionPotencia> <_> <_OP_LT> <_> <ExpresionAditiva>  <_> <_PUNTO_Y_COMA> <_> <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  numero  =  0;  <ExpresionUnaria> <_> <_OP_LT> <_> <ExpresionAditiva> <_> <_PUNTO_Y_COMA> <_> <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  numero  =  0;  <ExpresionPostfija> <_> <_OP_LT> <_> <ExpresionAditiva> <_> <_PUNTO_Y_COMA> <_> <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  numero  =  0;  <LiteralPrimario> <_> <_OP_LT> <_> <ExpresionAditiva> <_> <_PUNTO_Y_COMA> <_> <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  numero  =  0;  <_IDENTIFICADOR_VAR> <_> <_OP_LT> <_> <ExpresionAditiva>  <_> <_PUNTO_Y_COMA> <_> <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  numero  =  0;  $i  <_> <_OP_LT> <_> <ExpresionAditiva>  <_> <_PUNTO_Y_COMA> <_>  <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  numero  =  0;  $i: <_OP_LT> <_> <ExpresionAditiva> <_PUNTO_Y_COMA> <_>   <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  numero  =  0;  $i: < <ExpresionAditiva>  <_> <_PUNTO_Y_COMA> <_>  <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  numero  =  0;  $i: < <ExpresionMultiplicatica>  <_> <_PUNTO_Y_COMA> <_>  <IncrementoPara>?  <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  numero  =  0;  $i: < <ExpresionPotencia>   <_> <_PUNTO_Y_COMA> <_>  <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  numero  =  0;  $i: < <ExpresionUnaria>  <_> <_PUNTO_Y_COMA> <_>  <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  numero  =  0;  $i: < <ExpresionFija>  <_> <_PUNTO_Y_COMA> <_>  <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  numero  =  0;  $i: < <LiteralPrimario> >  <_> <_PUNTO_Y_COMA> <_>  <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  numero  =  0;  $i: < <_numero> >  <_> <_PUNTO_Y_COMA> <_>  <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i:  numero  =  0;  $i: < 10  <_PUNTO_Y_COMA> <_>  <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>
::= para ( $i : numero = 0 ; $i < 10 ; <IncrementoPara>  <_> <_RPAREN> <_>  <BloqueCodigo> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; <Expresion>  <_> <_RPAREN> <_>  <BloqueCodigo> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; <ExpresionLogicaOr>  <_> <_RPAREN> <_>  <BloqueCodigo> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; <ExpresionLogicaAnd>  <_> <_RPAREN> <_>  <BloqueCodigo> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; <ExpresionIgualdad>  <_> <_RPAREN> <_>  <BloqueCodigo> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; <ExpresionReacional>  <_> <_RPAREN> <_>  <BloqueCodigo> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; <ExpresionAditiva>  <_> <_RPAREN> <_>  <BloqueCodigo> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; <ExpresionAditiva> <_> <_OP_SUMA> <_> <ExpresionMultiplicativa>  <_> <_RPAREN> <_>  <BloqueCodigo> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; <ExpresionPotencia> <_> <_OP_SUMA> <_> <ExpresionMultiplicativa>  <_> <_RPAREN> <_>  <BloqueCodigo> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; <ExpresionUnaria> <_> <_OP_SUMA> <_> <ExpresionMultiplicativa> <_> <_RPAREN> <_>  <BloqueCodigo> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; <ExpresionPostfija> <_> <_OP_SUMA> <_> <ExpresionMultiplicativa> <_> <_RPAREN> <_>  <BloqueCodigo> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; <LitealPrimario>  <_<_> <_OP_SUMA> <_> <ExpresionMultiplicativa>> <_RPAREN> <_>  <BloqueCodigo> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; <_numero> <_> <_OP_SUMA> <_> <ExpresionMultiplicativa> <_> <_RPAREN> <_>  <BloqueCodigo> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; <_IDENTIFICADOR_VAR> <_> <_OP_SUMA> <_> <ExpresionMultiplicativa> <_> <_RPAREN> <_>  <BloqueCodigo> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; $i  <_> <_OP_SUMA> <_> <ExpresionMultiplicativa> <_> <_RPAREN> <_>  <BloqueCodigo> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; $i + <_> <ExpresionMultiplicativa> <_>  <BloqueCodigo> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; $i + <ExpresionMultiplicativa> <_> <_RPAREN> <_>  <BloqueCodigo> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; $i + <ExpresionPotencia> <_> <_RPAREN> <_>  <BloqueCodigo> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; $i + <ExpresionUnaria> <_> <_RPAREN> <_>  <BloqueCodigo> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; $i + <ExpresionPostfija> <_> <_RPAREN> <_>  <BloqueCodigo> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; $i + <LiteralPrimario> <_> <_RPAREN> <_>  <BloqueCodigo> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; $i + <_numero> <_> <_RPAREN> <_>  <BloqueCodigo> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; $i + 1 <_> <_RPAREN> <_>  <BloqueCodigo> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; $i + 1 ) <BloqueCodigo> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; $i + 1 ) <_LBRACE> <_nl> <Sentencias> <_nl> <_RBRACE> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; $i + 1 ) { <Sentencias> <_nl> <_RBRACE> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; $i + 1 ) { <LlamadaImprimir> <_nl> <_RBRACE> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; $i + 1 ) { <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ListaArgumentosOpcional> <_> <_RPAREN> <_> <_PUNTO_Y_COMA>
 <_nl> <_RBRACE> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; $i + 1 ) { imprimir <_> <_LPAREN> <_> <ListaArgumentosOpcional> <_> <_RPAREN> <_> <_PUNTO_Y_COMA>
 <_nl> <_RBRACE> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; $i + 1 ) { imprimir( <ListaArgumentosOpcional> <_> <_RPAREN> <_> <_PUNTO_Y_COMA>
 <_nl> <_RBRACE> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; $i + 1 ) { imprimir( <ListaArgumentos> <_> <_RPAREN> <_> <_PUNTO_Y_COMA>
 <_nl> <_RBRACE> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; $i + 1 ) { imprimir( <Expresion> <_> <_RPAREN> <_> <_PUNTO_Y_COMA>
 <_nl> <_RBRACE> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; $i + 1 ) { imprimir( <ExpresionOr> <_> <_RPAREN> <_> <_PUNTO_Y_COMA>
 <_nl> <_RBRACE> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; $i + 1 ) { imprimir( <ExpresionAnd> <_> <_RPAREN> <_> <_PUNTO_Y_COMA>
 <_nl> <_RBRACE> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; $i + 1 ) { imprimir( <ExpresionIgualdad> <_> <_RPAREN> <_> <_PUNTO_Y_COMA>
 <_nl> <_RBRACE> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; $i + 1 ) { imprimir( <ExpresionRelacional> <_> <_RPAREN> <_> <_PUNTO_Y_COMA>
 <_nl> <_RBRACE> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; $i + 1 ) { imprimir( <ExpresionAditiva> <_> <_RPAREN> <_> <_PUNTO_Y_COMA>
 <_nl> <_RBRACE> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; $i + 1 ) { imprimir( <ExpresionMultiplicativa> <_> <_RPAREN> <_> <_PUNTO_Y_COMA>
 <_nl> <_RBRACE> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; $i + 1 ) { imprimir( <ExpresionPotencia> <_> <_RPAREN> <_> <_PUNTO_Y_COMA>
 <_nl> <_RBRACE> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; $i + 1 ) { imprimir( <ExpresionUnaria> <_> <_RPAREN> <_> <_PUNTO_Y_COMA>
 <_nl> <_RBRACE> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; $i + 1 ) { imprimir( <ExpresionPOstfija> <_> <_RPAREN> <_> <_PUNTO_Y_COMA>
 <_nl> <_RBRACE> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; $i + 1 ) { imprimir( <LiteralPrimario> <_> <_RPAREN> <_> <_PUNTO_Y_COMA>
 <_nl> <_RBRACE> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; $i + 1 ) { imprimir( <_IDENTIFICADOR_VAR><_> <_RPAREN> <_> <_PUNTO_Y_COMA>
 <_nl> <_RBRACE> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; $i + 1 ) { imprimir($i) <_> <_PUNTO_Y_COMA> <_nl> <_RBRACE> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; $i + 1 ) { imprimir($i); <_nl> <_RBRACE> <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; $i + 1 ) { imprimir($i); } <_nl>
::= para ( $i : numero = 0 ; $i < 10 ; $i + 1 ) { imprimir($i); } 

```

## Condicional `segun`Derecha

```ts
segun ($dia) {
    caso "Lunes": {
        imprimir("Hoy es lunes de trabajo.");
    } romper;
}
```

```go
1 <Programa> ::= <_nl> <Sentencias> <_nl> ::=
2 <_nl> <Sentencia> <_nl> <_nl>::=
 3 <_nl> <EstructuraControl> <_nl> <_nl>::=
4 <_nl> <EstructuraSegun> <_nl> <_nl>::=
5 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <CasosSegun>? <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
6 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <CasosSegun>? <_nl> <OpcionPorDefectoSegun>? <_nl> < } >  <_nl> <_nl>::=
7 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <CasosSegun> <_nl> < } >  <_nl> <_nl>::=
8 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <CasoSegun> <_nl> < } >  <_nl> <_nl>::=
9 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <Expresion> <_> <_DOS_PUNTOS> <_> <BloqueCodigo> <_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> < } >  <_nl> <_nl>::=
10 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <Expresion> <_> <_DOS_PUNTOS> <_> <BloqueCodigo> <_> <_PR_ROMPER> <_> < ; > <_nl> < } >  <_nl> <_nl>::=
11 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <Expresion> <_> <_DOS_PUNTOS> <_> <BloqueCodigo> <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
12 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <Expresion> <_> <_DOS_PUNTOS> <_> <_LBRACE> <_nl> <Sentencias> <_nl> <_RBRACE> <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
13 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <Expresion> <_> <_DOS_PUNTOS> <_> <_LBRACE> <_nl> <Sentencias> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
14 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <Expresion> <_> <_DOS_PUNTOS> <_> <_LBRACE> <_nl> <Sentencia> <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
15 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <Expresion> <_> <_DOS_PUNTOS> <_> <_LBRACE> <_nl> <LlamadaImprimir> <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
16 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <Expresion> <_> <_DOS_PUNTOS> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ListaArgumentosOpcional> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
17 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <Expresion> <_> <_DOS_PUNTOS> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ListaArgumentosOpcional> <_> <_RPAREN> <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
18 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <Expresion> <_> <_DOS_PUNTOS> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ListaArgumentosOpcional> <_> < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
19 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <Expresion> <_> <_DOS_PUNTOS> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ListaArgumentos> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
20 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <Expresion> <_> <_DOS_PUNTOS> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <Expresion> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
21 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <Expresion> <_> <_DOS_PUNTOS> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionLogicaOr> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
22 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <Expresion> <_> <_DOS_PUNTOS> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionLogicaAnd> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
23 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <Expresion> <_> <_DOS_PUNTOS> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionIgualdad> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
24 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <Expresion> <_> <_DOS_PUNTOS> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionRelacional> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
25 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <Expresion> <_> <_DOS_PUNTOS> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionAditiva> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
26 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <Expresion> <_> <_DOS_PUNTOS> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionMultiplicativa> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
27 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <Expresion> <_> <_DOS_PUNTOS> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionPotencia> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
28 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <Expresion> <_> <_DOS_PUNTOS> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionUnaria> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
29 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <Expresion> <_> <_DOS_PUNTOS> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ExpresionPostfija> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
30 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <Expresion> <_> <_DOS_PUNTOS> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <LiteralPrimario> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
31 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <Expresion> <_> <_DOS_PUNTOS> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <_texto> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
32 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <Expresion> <_> <_DOS_PUNTOS> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
33 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <Expresion> <_> <_DOS_PUNTOS> <_> <_LBRACE> <_nl> <_PR_IMPRIMIR> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=


34 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <Expresion> <_> <_DOS_PUNTOS> <_> <_LBRACE> <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
35 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <Expresion> <_> <_DOS_PUNTOS> <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
36 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <Expresion> <_> < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
37 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <ExpresionLogicaOr> < “ > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
38 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <ExpresionLogicaAnd> < “ > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
39 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <ExpresionIgualdad> < “ > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
40 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <ExpresionRelacional> < “ > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
41 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <ExpresionAditiva> < “ > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
42 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <ExpresionMultiplicativa> < “ > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
43 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <ExpresionPotencia> < “ > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=

44 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <ExpresionUnaria> < “ > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
45 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <ExpresionPostfija> < “ > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
46 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <LiteralPrimario> < “ > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
47 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <_texto> < “ > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
48 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <_PR_CASO> <__> <Lunes> < “ > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
49 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <caso> <__> <Lunes> < “ > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
50 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> < { > <_nl> <caso> <__> <Lunes> < “ > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
51 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> < ) > <_> < { > <_nl> <caso> <__> <Lunes> < “ > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
52 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <ExpresionLogicaOr> <_> < ) > <_> < { > <_nl> <caso> <__> <Lunes> < “ > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
53 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <ExpresionLogicaAnd> <_> < ) > <_> < { > <_nl> <caso> <__> <Lunes> < “ > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
54 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <ExpresionIgualdad> <_> < ) > <_> < { > <_nl> <caso> <__> <Lunes> < “ > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
55 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <ExpresionRelacional> <_> < ) > <_> < { > <_nl> <caso> <__> <Lunes> < “ > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
56 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <ExpresionAditiva> <_> < ) > <_> < { > <_nl> <caso> <__> <Lunes> < “ > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
57 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <ExpresionMultiplicativa> <_> < ) > <_> < { > <_nl> <caso> <__> <Lunes> < “ > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
58 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <ExpresionPotencia> <_> < ) > <_> < { > <_nl> <caso> <__> <Lunes> < “ > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
59 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <ExpresionUnaria> <_> < ) > <_> < { > <_nl> <caso> <__> <Lunes> < “ > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
60 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <ExpresionPostfija> <_> < ) > <_> < { > <_nl> <caso> <__> <Lunes> < “ > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
61 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <LiteralPrimario> <_> < ) > <_> < { > <_nl> <caso> <__> <Lunes> < “ > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
62 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <_IDENTIFCADOR_VAR> <_> < ) > <_> < { > <_nl> <caso> <__> <Lunes> < “ > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
63 <_nl><_PR_SEGUN> <_> <_LPAREN> <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> <__> <Lunes> < “ > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
64 <_nl><_PR_SEGUN> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> <__> <Lunes> < “ > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
65 <_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> <__> <Lunes> < “ > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl> <_nl> < } > <_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
<segun>  < ( >  <$dia>  < ) >  < { >  <caso> < ” > < Lunes > < ” > < : >  < { >  <imprimir>  < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) >  < ; >  < } >  < romper > < ; >  < } > ::=

```

## Condicional `segun` Izquierda

```go
<Programa> ::= <_nl> <Sentencias> <_nl> ::=
<_nl> <Sentencia> <_nl> <_nl>::=
<_nl> <EstructuraControl> <_nl> <_nl>::=
<_nl> <EstructuraSegun> <_nl> <_nl>::=
<_nl><_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <CasosSegun>? <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <CasosSegun>? <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <CasosSegun>? <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <ExpresionLogicaOr> <_> <_RPAREN> <_> <_LBRACE> <_nl> <CasosSegun>? <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <ExpresionLogicaAnd> <_> <_RPAREN> <_> <_LBRACE> <_nl> <CasosSegun>? <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <ExpresionIgualdad> <_> <_RPAREN> <_> <_LBRACE> <_nl> <CasosSegun>? <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <ExpresionRelacional> <_> <_RPAREN> <_> <_LBRACE> <_nl> <CasosSegun>? <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <ExpresionAditiva> <_> <_RPAREN> <_> <_LBRACE> <_nl> <CasosSegun>? <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <ExpresionMultiplicativa> <_> <_RPAREN> <_> <_LBRACE> <_nl> <CasosSegun>? <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <ExpresionPotencia> <_> <_RPAREN> <_> <_LBRACE> <_nl> <CasosSegun>? <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <ExpresionUnaria> <_> <_RPAREN> <_> <_LBRACE> <_nl> <CasosSegun>? <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <ExpresionPostfija> <_> <_RPAREN> <_> <_LBRACE> <_nl> <CasosSegun>? <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <LiteralPrimario> <_> <_RPAREN> <_> <_LBRACE> <_nl> <CasosSegun>? <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <_IDENTIFICADOR_VAR> <_> <_RPAREN> <_> <_LBRACE> <_nl> <CasosSegun>? <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> <_RPAREN> <_> <_LBRACE> <_nl> <CasosSegun>? <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> <_LBRACE> <_nl> <CasosSegun>? <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <CasosSegun>? <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <CasosSegun> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <_PR_CASO> <__> <Expresion> <_> <_DOS_PUNTOS> <_> <BloqueCodigo> <_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> <__> <Expresion> <_> <_DOS_PUNTOS> <_> <BloqueCodigo> <_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > <Expresion> <_> <_DOS_PUNTOS> <_> <BloqueCodigo> <_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > <ExpresionLogicaOr> <_> <_DOS_PUNTOS> <_> <BloqueCodigo> <_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > <ExpresionLogicaAnd> <_> <_DOS_PUNTOS> <_> <BloqueCodigo> <_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > <ExpresionIgualdad> <_> <_DOS_PUNTOS> <_> <BloqueCodigo> <_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > <ExpresionRelacional> <_> <_DOS_PUNTOS> <_> <BloqueCodigo> <_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > <ExpresionAditiva> <_> <_DOS_PUNTOS> <_> <BloqueCodigo> <_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > <ExpresionMultiplicativa> <_> <_DOS_PUNTOS> <_> <BloqueCodigo> <_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > <ExpresionPotencia> <_> <_DOS_PUNTOS> <_> <BloqueCodigo> <_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > <ExpresionUnaria> <_> <_DOS_PUNTOS> <_> <BloqueCodigo> <_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > <ExpresionPostfija> <_> <_DOS_PUNTOS> <_> <BloqueCodigo> <_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > <LiteralPrimario> <_> <_DOS_PUNTOS> <_> <BloqueCodigo> <_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > <_texto> <_> <_DOS_PUNTOS> <_> <BloqueCodigo> <_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > < Lunes > <_> <_DOS_PUNTOS> <_> <BloqueCodigo> <_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > < Lunes > < ” > <_DOS_PUNTOS> <_> <BloqueCodigo> <_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > < Lunes > < ” > < : > <_> <BloqueCodigo> <_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > < Lunes > < ” > < : > <_> <_LBRACE> <_nl> <Sentencias> <_nl> <_RBRACE><_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > < Lunes > < ” > < : > <_> < { > <_nl> <Sentencias> <_nl> <_RBRACE><_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > < Lunes > < ” > < : > <_> < { > <_nl> <Sentencia> <_nl><_nl> <_RBRACE><_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > < Lunes > < ” > < : > <_> < { > <_nl> <LlamadaImprimir> <_nl><_nl> <_RBRACE><_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > < Lunes > < ” > < : > <_> < { > <_nl> <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ListaArgumentosOpcional> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl><_nl> <_RBRACE><_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > < Lunes > < ” > < : > <_> < { > <_nl> <imprimir> <_> <_LPAREN> <_> <ListaArgumentosOpcional> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl><_nl> <_RBRACE><_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > < Lunes > < ” > < : > <_> < { > <_nl> <imprimir> <_> < ( > < ” > <ListaArgumentosOpcional> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl><_nl> <_RBRACE><_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > < Lunes > < ” > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <ListaArgumentos> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl><_nl> <_RBRACE><_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > < Lunes > < ” > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Expresion > <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl><_nl> <_RBRACE><_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > < Lunes > < ” > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <ExpresionLogicaOr> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl><_nl> <_RBRACE><_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > < Lunes > < ” > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <ExpresionLogicaAnd> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl><_nl> <_RBRACE><_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > < Lunes > < ” > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <ExpresionIgualdad> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl><_nl> <_RBRACE><_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=

<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > < Lunes > < ” > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <ExpresionRelacional> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl><_nl> <_RBRACE><_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > < Lunes > < ” > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <ExpresionAditiva> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl><_nl> <_RBRACE><_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > < Lunes > < ” > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <ExpresionMultiplicativa> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl><_nl> <_RBRACE><_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > < Lunes > < ” > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <ExpresionPotencia> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl><_nl> <_RBRACE><_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > < Lunes > < ” > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <ExpresionUnaria> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl><_nl> <_RBRACE><_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > < Lunes > < ” > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <ExpresionPostfija> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl><_nl> <_RBRACE><_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > < Lunes > < ” > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <LiteralPrimario> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl><_nl> <_RBRACE><_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > < Lunes > < ” > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <_texto> <_> <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl><_nl> <_RBRACE><_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > < Lunes > < ” > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > <_RPAREN> <_> <_PUNTO_Y_COMA> <_nl><_nl> <_RBRACE><_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=


<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > < Lunes > < ” > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> <_PUNTO_Y_COMA> <_nl><_nl> <_RBRACE><_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > < Lunes > < ” > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl><_nl> <_RBRACE><_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > < Lunes > < ” > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl><_nl> < } ><_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > < Lunes > < ” > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl><_nl> < } ><_> < romper > <_> <_PUNTO_Y_COMA> <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > < Lunes > < ” > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl><_nl> < } ><_> < romper > <_> < ; > <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > < Lunes > < ” > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl><_nl> < } ><_> < romper > <_> < ; > <_nl> <_RBRACE>  <_nl> <_nl>::=
<_nl><segun> <_> < ( > <_> <$dia> <_> < ) > <_> < { > <_nl> <caso> < ” > < Lunes > < ” > < : > <_> < { > <_nl> <imprimir> <_> < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) > <_> < ; > <_nl><_nl> < } ><_> < romper > <_> < ; > <_nl> < } >  <_nl> <_nl>::=
<segun>  < ( >  <$dia>  < ) >  < { >  <caso> < ” > < Lunes > < ” > < : >  < { >  <imprimir>  < ( > < “ > <Hoy es Lunes de trabajo> < “ > < ) >  < ; >  < } >  < romper > < ; >  < } > ::=
```

## Gramatica basde: Funcion

```go

```

## `funcion` Derecha

```go
funcion esMayor($num1: numero, $num2: numero): booleano {
    devolver $num1 > $num2;
}

<Programa>
→ _nl <Sentencias> _nl
→ _nl <Sentencia> _nl _nl
→ _nl <DeclaracionFuncion> _nl _nl
→ _nl <_PR_FUNCION> __ <_IDENTIFICADOR_GRAL> _ <_LPAREN> _ <ListaParametrosOpcional> _ <_RPAREN> _ <_DOS_PUNTOS> _ <Tipo> _ <BloqueCodigo> _nl _nl
→ _nl funcion __ esMayor _ ( _ <ListaParametros> _ ) _ : _ booleano _ <BloqueCodigo> _nl _nl
→ _nl funcion __ esMayor _ ( _ <Parametro> _ , _ <Parametro> _ ) _ : _ booleano _ <BloqueCodigo> _nl _nl
→ _nl funcion __ esMayor _ ( _ $num1 : numero , $num2 : numero ) _ : _ booleano _ <BloqueCodigo> _nl _nl
→ _nl funcion __ esMayor _ ( _ $num1 : numero , $num2 : numero ) _ : _ booleano _ { _nl <Sentencias> _nl } _nl _nl
→ _nl funcion __ esMayor _ ( _ $num1 : numero , $num2 : numero ) _ : _ booleano _ { _nl <Sentencia> _nl _nl } _nl _nl
→ _nl funcion __ esMayor _ ( _ $num1 : numero , $num2 : numero ) _ : _ booleano _ { _nl <SentenciaDevolver> _nl _nl } _nl _nl
→ _nl funcion __ esMayor _ ( _ $num1 : numero , $num2 : numero ) _ : _ booleano _ { _nl devolver __ <Expresion> _ <_PUNTO_Y_COMA> _nl _nl } _nl _nl
→ _nl funcion __ esMayor _ ( _ $num1 : numero , $num2 : numero ) _ : _ booleano _ { _nl devolver __ <ExpresionRelacional> _ ; _nl _nl } _nl _nl
→ _nl funcion __ esMayor _ ( _ $num1 : numero , $num2 : numero ) _ : _ booleano _ { _nl devolver __ $num1 > $num2 ; _nl _nl } _nl _nl
```

## `funcion` Izquierda

```go

<Programa>
→ _nl <Sentencias> _nl
→ _nl <Sentencia> _nl _nl
→ _nl <DeclaracionFuncion> _nl _nl
→ _nl <_PR_FUNCION> __ <_IDENTIFICADOR_GRAL> _ <_LPAREN> _ <ListaParametrosOpcional> _ <_RPAREN> _ <_DOS_PUNTOS> _ <Tipo> _ <BloqueCodigo> _nl _nl
→ _nl funcion __ esMayor _ ( _ <ListaParametros> _ ) _ : _ booleano _ <BloqueCodigo> _nl _nl
→ _nl funcion __ esMayor _ ( _ <Parametro> _ , _ <Parametro> _ ) _ : _ booleano _ <BloqueCodigo> _nl _nl
→ _nl funcion __ esMayor _ ( _ $num1 _ : _ numero , _ $num2 _ : _ numero ) _ : _ booleano _ <BloqueCodigo> _nl _nl
→ _nl funcion __ esMayor _ ( _ $num1 : numero , $num2 : numero ) _ : _ booleano _ <_LBRACE> _nl <Sentencias> _nl <_RBRACE> _nl _nl
→ _nl funcion __ esMayor _ ( _ $num1 : numero , $num2 : numero ) _ : _ booleano _ { _nl <Sentencia> _nl _nl } _nl _nl
→ _nl funcion __ esMayor _ ( _ $num1 : numero , $num2 : numero ) _ : _ booleano _ { _nl <SentenciaDevolver> _nl _nl } _nl _nl
→ _nl funcion __ esMayor _ ( _ $num1 : numero , $num2 : numero ) _ : _ booleano _ { _nl devolver __ <Expresion> _ <_PUNTO_Y_COMA> _nl _nl } _nl _nl
→ _nl funcion __ esMayor _ ( _ $num1 : numero , $num2 : numero ) _ : _ booleano _ { _nl devolver __ <ExpresionRelacional> _ ; _nl _nl } _nl _nl
→ _nl funcion __ esMayor _ ( _ $num1 : numero , $num2 : numero ) _ : _ booleano _ { _nl devolver __ <ExpresionRelacional> _OP_GT <ExpresionAditiva> _ ; _nl _nl } _nl _nl
→ _nl funcion __ esMayor _ ( _ $num1 : numero , $num2 : numero ) _ : _ booleano _ { _nl devolver __ $num1 > $num2 ; _nl _nl } _nl _nl
```

## Gramatica basde: Operacion aritmetica

```go
<Expresion> ::= <ExpresionAsignacion>
<ExpresionAsignacion> ::= <Variable> <OP_ASIGNACION> <ExpresionAsignacion> | <ExpresionLogicaOR>
<ExpresionLogicaOR> ::= <ExpresionLogicaAND> (<OP_OR> <ExpresionLogicaAND>)*
<ExpresionLogicaAND> ::= <ExpresionIgualdad> (<OP_AND> <ExpresionIgualdad>)*
<ExpresionIgualdad> ::= <ExpresionRelacional> ((<OP_EQ> | <OP_NEQ>) <ExpresionRelacional>)*
<ExpresionRelacional> ::= <ExpresionAditiva> ((<OP_MAYOR_QUE> | <OP_MENOR_QUE> | <OP_GTE> | <OP_LTE>) <ExpresionAditiva>)*
<ExpresionAditiva> ::= <ExpresionMultiplicativa> ((<OP_SUMA> | <OP_RESTA>) <ExpresionMultiplicativa>)*
<ExpresionMultiplicativa> ::= <ExpresionPotencia> ((<OP_MULT> | <OP_DIV> | <OP_MOD>) <ExpresionPotencia>)*
<ExpresionPotencia> ::= <ExpresionUnaria> (<OP_POTENCIA> <ExpresionUnaria>)*
<ExpresionUnaria> ::= (<OP_NEGACION> | <OP_UNARIO_MENOS>)* <ExpresionPrimaria>

```

## Operacion aritmetica compleja Derecha

```go
<Expresion>
→ <ExpresionAsignacion>
→ <Variable> <OP_ASIGNACION> <ExpresionAsignacion>
→ <Variable> <OP_ASIGNACION> <ExpresionLogicaOR>
→ <Variable> <OP_ASIGNACION> <ExpresionLogicaAND> (<OP_OR> <ExpresionLogicaAND>)*
→ ...
→ <Variable> <OP_ASIGNACION> <ExpresionPrimaria> (<OP_OR> <ExpresionPrimaria>)*
→ <Variable> <OP_ASIGNACION> <Variable> (<OP_OR> <Variable>)*

```

## Operacion aritmetica compleja Izquierda

```go
<Expresion>
→ <ExpresionAsignacion>
→ <ExpresionLogicaOR>
→ <ExpresionLogicaAND>
→ <ExpresionIgualdad>
→ <ExpresionRelacional>
→ <ExpresionAditiva>
→ <ExpresionMultiplicativa>
→ <ExpresionPotencia>
→ <ExpresionUnaria>
→ <ExpresionPrimaria>
→ <Variable> | <Literal> | "(" <Expresion> ")"

```
