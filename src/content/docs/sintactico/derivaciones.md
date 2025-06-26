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

## Gramatica bas: Reasignación de variable

```go

```

## Reasignación de variable (numero)Derecha

```go

```

## Reasignación de variable (numero) Izquierda

```go

```

## Gramatica basde: Reasignación de variable (texto)

```go

```

## Reasignación de variable (texto)Derecha

```go

```

## Reasignación de variable (texto) Izquierda

```go

```

## Gramatica basde: Reasignación de variable (booleano)

```go

```

## Reasignación de variable (booleano)Derecha

```go

```

## Reasignación de variable (booleano) Izquierda

```go

```

## Gramatica basde: Arreglo de datos

```go

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

## Gramatica basde: Condicional `si-siNo` `si-siNo`

```go

```

## Condicional `si-siNo` `si-siNo`Derecha

```go

```

## Condicional `si-siNo` `si-siNo` Izquierda

```go

```

## Gramatica basde: Condicional `mientras`

```go

```

## Condicional `mientras`Derecha

```go

```

## Condicional `mientras` Izquierda

```go

```

## Gramatica basde: Condicional `para`

```go

```

## Condicional `para`Derecha

```go

```

## Condicional `para` Izquierda

```go

```

## Gramatica basde: Condicional `segun`

```go

```

## Condicional `segun`Derecha

```go

```

## Condicional `segun` Izquierda

```go

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
