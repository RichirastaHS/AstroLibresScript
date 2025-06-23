---
title: Árboles de derivación 
sidebar:
  order: 4
---
Un árbol de derivación (o árbol sintáctico) es una representación gráfica de cómo una cadena de entrada puede ser derivada a partir del símbolo inicial de una gramática libre de contexto. Cada nodo interno del árbol corresponde a un no terminal en una regla de producción, y los nodos hoja corresponden a los símbolos terminales (tokens) de la cadena de entrada.

Los árboles de derivación son una forma visual de entender la estructura sintáctica de un programa y cómo el analizador sintáctico lo ha interpretado.

**Ejemplo de Árbol de Derivación**
Consideremos la misma sentencia de LibreScript:
`$a: numero = 10;`

```bash
     <Programa>
          |
        <_nl>
          |
      <Sentencias>
          |
      <Sentencia> ----- <_nl>
          |
   <DeclaracionVariable> --- <_PUNTO_Y_COMA>
          |
  <_IDENTIFICADOR_VAR> -- <_> -- <_DOS_PUNTOS> -- <_> -- <Tipo> -- <_> -- <_OP_ASIGNACION> -- <_> -- <Expresion> -- <_>
        |                                                 |                                                  |
      "$a"                                           <TipoBase>                                          <ExpresionLogicaOr>
                                                        |                                                       |
                                                  <_TIPO_NUMERO>                                        <ExpresionLogicaAnd>
                                                        |                                                       |
                                                      "numero"                                          <ExpresionIgualdad>
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
                                                                                                         <ExpresionPostfija>
                                                                                                                |
                                                                                                          <LiteralPrimario>
                                                                                                                |
                                                                                                              <_numero>
                                                                                                                |
                                                                                                               "10"

(* Nota: Los nodos `_` representan espacios/saltos de línea opcionales o requeridos. En un AST, estos nodos de espacio suelen ser omitidos para simplificar la estructura. En este diagrama, se incluyen para reflejar la derivación completa según la gramática. *)

```

Otro Ejemplo: Condicional si
Consideremos un si simple:
si ($cond: booleano = verdadero) {
    imprimir("Es verdadero");
}
```bash
      <Programa>
          |
        <_nl>
          |
      <Sentencias>
          |
      <Sentencia> ----------- <_nl>
          |
   <EstructuraControl>
          |
    <CondicionalSi>
          |
  <_PR_SI> -- <_> -- <_LPAREN> -- <_> -- <Expresion> -- <_> -- <_RPAREN> -- <_> -- <BloqueCodigo>
    |                                    |                                         |
   "si"                           <Asignacion>                                  <_LBRACE> -- <_nl> -- <Sentencias> -- <_nl> -- <_RBRACE>
                                       |                                                       |
                            <DeclaracionVariable>                                         <Sentencia> ----- <_nl>
                                       |                                                       |
                            "$cond: booleano = verdadero" (simplificado)                <LlamadaImprimir>
                                                                                                 |
                                                                               <_PR_IMPRIMIR> -- <_> -- <_LPAREN> -- <_> -- <ListaArgumentosOpcional> -- <_> -- <_RPAREN> -- <_> -- <_PUNTO_Y_COMA>
                                                                                     |                                     |
                                                                                   "imprimir"                        <ListaArgumentos>
                                                                                                                             |
                                                                                                                          <Expresion>
                                                                                                                             |
                                                                                                                      <ExpresionLogicaOr>
                                                                                                                             |
                                                                                                                          ...
                                                                                                                             |
                                                                                                                       <LiteralPrimario>
                                                                                                                             |
                                                                                                                             <_texto>
                                                                                                                             |
                                                                                                                      "\"Es verdadero\""
```