---
title: Gramática libre de contexto
sidebar:
  order: 2
---
La sintaxis de LibreScript se define formalmente mediante una **Gramática Libre de Contexto (GLC)**. Una GLC es un modelo formal que describe la estructura de un lenguaje mediante un conjunto de reglas de producción.

### Notación de Backus-Naur Form (BNF) Extendida (EBNF)

La gramática de LibreScript se presenta a continuación utilizando una notación EBNF, que es una extensión de la BNF tradicional.

**Convenciones utilizadas:**

* Los **símbolos no terminales** están escritos con la primera letra en mayúscula (ej., `Programa`, `Sentencia`).
* Los **símbolos terminales** (tokens) están escritos en `MAYÚSCULAS_CON_GUIONES_BAJOS` tal como se definen en el analizador léxico (ej., `PR_IMPRIMIR`, `IDENTIFICADOR_VAR`).
* `::=` significa "se define como".
* `|` significa "o" (alternativa).
* `(...)` agrupa elementos.
* `[...]` indica un elemento opcional (cero o una vez).
* `{...}` indica cero o más repeticiones del elemento.
* Los elementos `_` y `_nl` representan el manejo de espacios en blanco y saltos de línea, que son consumidos por el parser pero no añaden nodos significativos al AST en la mayoría de los casos. Se omiten explícitamente en algunas reglas para mayor claridad de la estructura sintáctica principal, o se indican como `_` (para cualquier espacio) o `_nl` (para al menos un salto de línea/espacio). Por simplicidad, aquí se representan como `_espacio_`.

### Gramática de LibreScript (EBNF)

```ebnf
<Programa> ::= <_nl> <Sentencias> <_nl>

<Sentencias> ::= <Sentencia> <_nl>
               | <Sentencias> <Sentencia> <_nl>
               | ε

---

<Sentencia> ::= <DeclaracionVariable>
              | <DeclaracionConstante>
              | <Asignacion>
              | <EstructuraControl>
              | <LlamadaImprimir>
              | <DeclaracionFuncion>
              | <DeclaracionClase>
              | <SentenciaDevolver>
              | <SentenciaRomper>
              | <ExpresionSentencia>

<ExpresionSentencia> ::= <Expresion> <_PUNTO_Y_COMA>

---

<DeclaracionVariable> ::= <_IDENTIFICADOR_VAR> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA>

<DeclaracionConstante> ::= <_IDENTIFICADOR_CONST> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA>

---

<Tipo> ::= <TipoBase>
         | <TipoBase> <_> <_LBRACKET> <_> <_RBRACKET>
         | <TipoBase> <_> <_LBRACKET> <_> <_RBRACKET> <_> <_LBRACKET> <_> <_RBRACKET>
         | <_TIPO_ARREGLO> <_> <_LBRACKET> <_> <_RBRACKET>

<TipoBase> ::= <_TIPO_NUMERO>
             | <_TIPO_TEXTO>
             | <_TIPO_BOOLEANO>
             | <_TIPO_OBJETO>
             | <_IDENTIFICADOR_GRAL>

---

<Asignacion> ::= <Designable> <_> <OperadorAsignacionCompuesto> <_> <Expresion> <_> <_PUNTO_Y_COMA>
               | <Designable> <_> <_OP_ASIGNACION> <_> <Expresion> <_> <_PUNTO_Y_COMA>

<OperadorAsignacionCompuesto> ::= <_OP_ASIG_SUMA>
                                | <_OP_ASIG_RESTA>
                                | <_OP_ASIG_MULT>
                                | <_OP_ASIG_DIV>

<Designable> ::= <_IDENTIFICADOR_VAR>
               | <_IDENTIFICADOR_CONST>
               | <AccesoMiembro>
               | <AccesoArreglo>

---

<EstructuraControl> ::= <CondicionalSi>
                      | <BucleMientras>
                      | <BuclePara>
                      | <EstructuraSegun>

<CondicionalSi> ::= <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo> <ClausulasSiNoSi>? <ClausulaSiNo>?

<ClausulasSiNoSi> ::= <ClausulaSiNoSi>
                    | <ClausulasSiNoSi> <_> <ClausulaSiNoSi>

<ClausulaSiNoSi> ::= <_PR_SINO> <__> <_PR_SI> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo>

<ClausulaSiNo> ::= <_PR_SINO> <__> <BloqueCodigo>

<BloqueCodigo> ::= <_LBRACE> <_nl> <Sentencias> <_nl> <_RBRACE>
                 | <_LBRACE> <_nl> <_RBRACE>

<BucleMientras> ::= <_PR_MIENTRAS> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <BloqueCodigo>

<BuclePara> ::= <_PR_PARA> <_> <_LPAREN> <_> <InicializadorPara>? <_> <_PUNTO_Y_COMA> <_> <CondicionPara>? <_> <_PUNTO_Y_COMA> <_> <IncrementoPara>? <_> <_RPAREN> <_> <BloqueCodigo>

<InicializadorPara> ::= <DeclaracionVariableSinPuntoComa>
                      | <AsignacionSinPuntoComa>

<DeclaracionVariableSinPuntoComa> ::= <_IDENTIFICADOR_VAR> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <_OP_ASIGNACION> <_> <Expresion>

<AsignacionSinPuntoComa> ::= <Designable> <_> <_OP_ASIGNACION> <_> <Expresion>

<CondicionPara> ::= <Expresion>

<IncrementoPara> ::= <Expresion>

<EstructuraSegun> ::= <_PR_SEGUN> <_> <_LPAREN> <_> <Expresion> <_> <_RPAREN> <_> <_LBRACE> <_nl> <CasosSegun>? <_nl> <OpcionPorDefectoSegun>? <_nl> <_RBRACE>

<CasosSegun> ::= <CasoSegun>
               | <CasosSegun> <_nl> <CasoSegun>

<CasoSegun> ::= <_PR_CASO> <__> <Expresion> <_> <_DOS_PUNTOS> <_> <BloqueCodigo> <_> <_PR_ROMPER> <_> <_PUNTO_Y_COMA>

<OpcionPorDefectoSegun> ::= <_PR_PORDEFECTO> <_> <_DOS_PUNTOS> <_> <BloqueCodigo>

<SentenciaDevolver> ::= <_PR_DEVOLVER> <__> <Expresion>? <_> <_PUNTO_Y_COMA>

<SentenciaRomper> ::= <_PR_ROMPER> <_> <_PUNTO_Y_COMA>

—------

<DeclaracionFuncion> ::= <_PR_FUNCION> <__> <_IDENTIFICADOR_GRAL> <_> <_LPAREN> <_> <ListaParametrosOpcional> <_> <_RPAREN> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <BloqueCodigo>

<ListaParametrosOpcional> ::= <ListaParametros>
                            | ε

<ListaParametros> ::= <Parametro>
                    | <ListaParametros> <_> <_COMA> <_> <Parametro>

<Parametro> ::= <_IDENTIFICADOR_VAR> <_> <_DOS_PUNTOS> <_> <Tipo>

---

<DeclaracionClase> ::= <_PR_CLASE> <__> <_IDENTIFICADOR_GRAL> <_> <BloqueClase>

<BloqueClase> ::= <_LBRACE> <_nl> <MiembrosClase> <_nl> <_RBRACE>

<MiembrosClase> ::= <MiembroClase> <_nl>
                  | <MiembrosClase> <MiembroClase> <_nl>
                  | ε

<MiembroClase> ::= <PropiedadClase>
                 | <ConstructorClase>
                 | <MetodoClase>

<PropiedadClase> ::= <_ALMOHADILLA> <_> <_IDENTIFICADOR_GRAL> <_> <_PUNTO_Y_COMA>
                   | <_IDENTIFICADOR_GRAL> <_> <_PUNTO_Y_COMA>

<ConstructorClase> ::= <_PR_CONSTRUCTOR> <_> <_LPAREN> <_> <ListaParametrosOpcional> <_> <_RPAREN> <_> <BloqueCodigo>

<MetodoClase> ::= <_IDENTIFICADOR_GRAL> <_> <_LPAREN> <_> <ListaParametrosOpcional> <_> <_RPAREN> <_> <_DOS_PUNTOS> <_> <Tipo> <_> <BloqueCodigo>

---

<LlamadaImprimir> ::= <_PR_IMPRIMIR> <_> <_LPAREN> <_> <ListaArgumentosOpcional> <_> <_RPAREN> <_> <_PUNTO_Y_COMA>

---

<Expresion> ::= <ExpresionLogicaOr>

<ExpresionLogicaOr> ::= <ExpresionLogicaAnd>
                      | <ExpresionLogicaOr> <_> <_OP_OR> <_> <ExpresionLogicaAnd>

<ExpresionLogicaAnd> ::= <ExpresionIgualdad>
                       | <ExpresionLogicaAnd> <_> <_OP_AND> <_> <ExpresionIgualdad>

<ExpresionIgualdad> ::= <ExpresionRelacional>
                      | <ExpresionIgualdad> <_> <_OP_EQ> <_> <ExpresionRelacional>
                      | <ExpresionIgualdad> <_> <_OP_NEQ> <_> <ExpresionRelacional>

<ExpresionRelacional> ::= <ExpresionAditiva>
                        | <ExpresionRelacional> <_> <_OP_LT> <_> <ExpresionAditiva>
                        | <ExpresionRelacional> <_> <_OP_GT> <_> <ExpresionAditiva>
                        | <ExpresionRelacional> <_> <_OP_LTE> <_> <ExpresionAditiva>
                        | <ExpresionRelacional> <_> <_OP_GTE> <_> <ExpresionAditiva>

<ExpresionAditiva> ::= <ExpresionMultiplicativa>
                     | <ExpresionAditiva> <_> <_OP_SUMA> <_> <ExpresionMultiplicativa>
                     | <ExpresionAditiva> <_> <_OP_RESTA> <_> <ExpresionMultiplicativa>

<ExpresionMultiplicativa> ::= <ExpresionPotencia>
                            | <ExpresionMultiplicativa> <_> <_OP_MULT> <_> <ExpresionPotencia>
                            | <ExpresionMultiplicativa> <_> <_OP_DIV> <_> <ExpresionPotencia>
                            | <ExpresionMultiplicativa> <_> <_OP_MODULO> <_> <ExpresionPotencia>

<ExpresionPotencia> ::= <ExpresionUnaria>
                      | <ExpresionUnaria> <_> <_OP_POTENCIA> <_> <ExpresionPotencia>

<ExpresionUnaria> ::= <ExpresionPostfija>
                    | <_OP_NOT> <_> <ExpresionUnaria>
                    | <_OP_RESTA> <_> <ExpresionUnaria>

<ExpresionPostfija> ::= <LiteralPrimario>
                      | <ExpresionPostfija> <_> <_OP_INCREMENTO>
                      | <ExpresionPostfija> <_> <_OP_DECREMENTO>

<LiteralPrimario> ::= <_numero>
                    | <_texto>
                    | <_LIT_VERDADERO>
                    | <_LIT_FALSO>
                    | <_IDENTIFICADOR_VAR>
                    | <_IDENTIFICADOR_CONST>
                    | <_IDENTIFICADOR_GRAL>
                    | <_LPAREN> <_> <Expresion> <_> <_RPAREN>
                    | <LlamadaFuncion>
                    | <AccesoMiembro>
                    | <AccesoArreglo>
                    | <CreacionObjeto>
                    | <CreacionArreglo>
                    | <CreacionObjetoLiteral>
                    | <LlamadaEntrada>

<LlamadaFuncion> ::= <DesignableLlamada> <_> <_LPAREN> <_> <ListaArgumentosOpcional> <_> <_RPAREN>

<DesignableLlamada> ::= <_IDENTIFICADOR_GRAL>
                      | <AccesoMiembro>

<ListaArgumentosOpcional> ::= <ListaArgumentos>
                            | ε

<ListaArgumentos> ::= <Expresion>
                    | <ListaArgumentos> <_> <_COMA> <_> <Expresion>

<AccesoMiembro> ::= <LiteralPrimario> <_> <_PUNTO> <_> <_IDENTIFICADOR_GRAL>

<AccesoArreglo> ::= <LiteralPrimario> <_> <_LBRACKET> <_> <Expresion> <_> <_RBRACKET>
                  | <LiteralPrimario> <_> <_LBRACKET> <_> <Expresion> <_> <_RBRACKET> <_> <_LBRACKET> <_> <Expresion> <_> <_RBRACKET>

<CreacionObjeto> ::= <_PR_NUEVO> <__> <_IDENTIFICADOR_GRAL> <_> <_LPAREN> <_> <ListaArgumentosOpcional> <_> <_RPAREN>

<CreacionArreglo> ::= <_LBRACKET> <_> <ListaArgumentosOpcional> <_> <_RBRACKET>

<CreacionObjetoLiteral> ::= <_LBRACE> <_> <ParesClaveValorOpcional> <_> <_RBRACE>

<ParesClaveValorOpcional> ::= <ParesClaveValor>
                            | ε

<ParesClaveValor> ::= <ParClaveValor>
                    | <ParesClaveValor> <_> <_COMA> <_> <ParClaveValor>

<ParClaveValor> ::= <_IDENTIFICADOR_GRAL> <_> <_DOS_PUNTOS> <_> <Expresion>
                  | <_texto> <_> <_DOS_PUNTOS> <_> <Expresion>

<LlamadaEntrada> ::= <_PR_ENTRADA> <_> <_LPAREN> <_> <Expresion>? <_> <_RPAREN>

---

<__> ::= <_ws>+
<_> ::= <_ws>*
<_nl> ::= (<_ws> | <_nl> | <_comentario_linea> | <_comentario_bloque>)*
