---
title: Derivaciones
sidebar:
  order: 3
---
Una derivación es una secuencia de aplicaciones de reglas de producción de la gramática, comenzando desde el símbolo inicial, que lleva a una cadena de símbolos terminales (o una forma sentencial). El analizador sintáctico realiza implícitamente estas derivaciones para verificar la corrección de la entrada.

Existen dos tipos principales de derivaciones, que se refieren al orden en que se expanden los no terminales:

* **Derivación más a la izquierda:** En cada paso, se reemplaza el no terminal más a la izquierda de la forma sentencial actual.
* **Derivación más a la derecha:** En cada paso, se reemplaza el no terminal más a la derecha de la forma sentencial actual.

Para los ejemplos, utilizaremos un fragmento de tu gramática. Consideremos la sentencia de LibreScript:
`$a: numero = 10;`

Los tokens de esta sentencia, después del análisis léxico (simplificados para la derivación), son:
`<_IDENTIFICADOR_VAR> <_DOS_PUNTOS> <_TIPO_NUMERO> <_OP_ASIGNACION> <_numero> <_PUNTO_Y_COMA>`

### Ejemplo de Derivación Más a la Izquierda

Partiendo del símbolo inicial simplificado para una sentencia: `<Sentencia>`.

Gramática relevante para este ejemplo:
```ebnf
<Programa> ::= <_nl> <Sentencias> <_nl>
<Sentencias> ::= <Sentencia> <_nl> | <Sentencias> <Sentencia> <_nl> | ε
<Sentencia> ::= <DeclaracionVariable>
<DeclaracionVariable> ::= <_IDENTIFICADOR_VAR> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA>
<Tipo> ::= <TipoBase>
<TipoBase> ::= <_TIPO_NUMERO>
<Expresion> ::= <ExpresionLogicaOr>
<ExpresionLogicaOr> ::= <ExpresionLogicaAnd>
<ExpresionLogicaAnd> ::= <ExpresionIgualdad>
<ExpresionIgualdad> ::= <ExpresionRelacional>
<ExpresionRelacional> ::= <ExpresionAditiva>
<ExpresionAditiva> ::= <ExpresionMultiplicativa>
<ExpresionMultiplicativa> ::= <ExpresionPotencia>
<ExpresionPotencia> ::= <ExpresionUnaria>
<ExpresionUnaria> ::= <ExpresionPostfija>
<ExpresionPostfija> ::= <LiteralPrimario>
<LiteralPrimario> ::= <_numero>
<_> ::= <_ws>* (* espacio opcional *)
<_nl> ::= (<_ws> | <_nl> | <_comentario_linea> | <_comentario_bloque>)* (* salto de línea/espacio significativo *)
```

Derivación:
```
<Programa>
_nl <Sentencias> _nl (aplicando Programa ::= _nl Sentencias _nl)
_nl <Sentencia> _nl _nl (aplicando Sentencias ::= Sentencia _nl) - asumiendo solo una sentencia para simplificar
_nl <DeclaracionVariable> _nl _nl (aplicando Sentencia ::= DeclaracionVariable)
_nl <_IDENTIFICADOR_VAR> _ <_DOS_PUNTOS> _ <Tipo> _ <_OP_ASIGNACION> _ <Expresion> _ <_PUNTO_Y_COMA> _nl _nl (aplicando DeclaracionVariable)
_nl <_IDENTIFICADOR_VAR> _ <_DOS_PUNTOS> _ <TipoBase> _ <_OP_ASIGNACION> _ <Expresion> _ <_PUNTO_Y_COMA> _nl _nl (aplicando Tipo ::= TipoBase)
_nl <_IDENTIFICADOR_VAR> _ <_DOS_PUNTOS> _ <_TIPO_NUMERO> _ <_OP_ASIGNACION> _ <Expresion> _ <_PUNTO_Y_COMA> _nl _nl (aplicando TipoBase ::= _TIPO_NUMERO)
_nl <_IDENTIFICADOR_VAR> _ <_DOS_PUNTOS> _ <_TIPO_NUMERO> _ <_OP_ASIGNACION> _ <ExpresionLogicaOr> _ <_PUNTO_Y_COMA> _nl _nl (aplicando Expresion ::= ExpresionLogicaOr)
... (continúa expandiendo ExpresionLogicaOr a ExpresionLogicaAnd, etc., hasta LiteralPrimario)
... _ <_numero> _ <_PUNTO_Y_COMA> _nl _nl (llegando al token numérico)
... (reemplazando _ y _nl con sus lexemas de espacio/salto de línea)
```
Ejemplo de Derivación Más a la Derecha
```
Partiendo del símbolo inicial: <Programa>

Derivación:

<Programa>
_nl <Sentencias> _nl
_nl <Sentencias> <Sentencia> _nl _nl (aplicando Sentencias ::= Sentencias Sentencia _nl - expandiendo el _nl más a la derecha de la primera sentencia antes de la segunda)
_nl <Sentencias> <Sentencia> _ws* _nl (expandiendo el _nl más a la derecha)
_nl <Sentencias> <Sentencia> _ws* \n (ejemplificando el lexema de _nl)
_nl <Sentencias> <DeclaracionVariable> _ws* \n (aplicando Sentencia ::= DeclaracionVariable)
_nl <Sentencias> <_IDENTIFICADOR_VAR> _ <_DOS_PUNTOS> _ <Tipo> _ <_OP_ASIGNACION> _ <Expresion> _ <_PUNTO_Y_COMA> _ws* \n
_nl <Sentencias> <_IDENTIFICADOR_VAR> _ <_DOS_PUNTOS> _ <Tipo> _ <_OP_ASIGNACION> _ <ExpresionLogicaOr> _ <_PUNTO_Y_COMA> _ws* \n (expande Expresion que es el no terminal más a la derecha en la producción de DeclaracionVariable)
... (continúa expandiendo ExpresionLogicaOr a ExpresionLogicaAnd, etc., hasta LiteralPrimario)
_nl <Sentencias> <_IDENTIFICADOR_VAR> _ <_DOS_PUNTOS> _ <Tipo> _ <_OP_ASIGNACION> _ <_numero> _ <_PUNTO_Y_COMA> _ws* \n (llega al lexema 10)
_nl <Sentencias> <_IDENTIFICADOR_VAR> _ <_DOS_PUNTOS> _ <TipoBase> _ <_OP_ASIGNACION> _ <_numero> _ <_PUNTO_Y_COMA> _ws* \n (expande Tipo que es el siguiente no terminal más a la derecha)
_nl <Sentencias> <_IDENTIFICADOR_VAR> _ <_DOS_PUNTOS> _ <_TIPO_NUMERO> _ <_OP_ASIGNACION> _ <_numero> _ <_PUNTO_Y_COMA> _ws* \n (llega al lexema numero)
... (y así sucesivamente hasta que solo quedan terminales y los espacios/saltos de línea se resuelven a sus lexemas).
```