# AI Product Studio

AI Product Studio es un framework agentico para transformar oportunidades ambiguas en decisiones de producto claras, disenables, desarrollables y medibles.

El sistema combina agentes de investigacion, sintesis, decision, diseno, delivery, medicion y aprendizaje. Su objetivo no es reemplazar el criterio del equipo, sino acelerar el trabajo operativo y hacer mas explicitas las decisiones humanas.

## Para que sirve

AI Product Studio ayuda a equipos de producto a:

- Entender problemas ambiguos.
- Ordenar evidencia dispersa.
- Formular decisiones de producto.
- Comparar alternativas y trade-offs.
- Convertir decisiones en PDR, PRD o feature briefs.
- Generar estructura inicial de solucion.
- Preparar handoff para desarrollo.
- Definir medicion e hipotesis de validacion.
- Preparar lanzamiento o piloto.
- Capturar aprendizajes reutilizables.

## Principio central

Cada iniciativa debe avanzar desde contexto desordenado hacia una decision trazable.

El flujo base es:

```text
Intake -> Discovery -> Decision Framing -> PDR -> Diseno -> Delivery -> Measurement -> Learning Loop
```

La IA investiga, ordena, sintetiza y propone. El equipo humano decide foco, alcance, prioridad, trade-offs, riesgos aceptables y responsabilidad final.

## Como usar el framework

### 1. Ingresar la oportunidad

El proceso parte con una solicitud inicial. Puede venir desde Jira, una conversacion con un PO, feedback de usuarios, un dato operacional, una minuta o una necesidad estrategica.

La primera pregunta es:

```text
Que tipo de iniciativa esta entrando?
```

Puede ser:

- Mejora.
- Funcionalidad nueva.
- Proyecto nuevo.
- Iniciativa estrategica.

### 2. Clasificar profundidad

No toda iniciativa necesita el mismo nivel de analisis.

El framework permite trabajar en tres profundidades:

- Light: para mejoras acotadas o decisiones rapidas.
- Standard: para funcionalidades o cambios con impacto medio.
- Deep: para proyectos nuevos, redisenos o iniciativas estrategicas.

### 3. Ejecutar discovery

Discovery busca entender el problema antes de saltar a la solucion.

Aqui se ordena contexto, se revisa evidencia, se sintetizan necesidades, se mapea experiencia y se conecta la oportunidad con valor de negocio.

### 4. Formular la decision

Antes de escribir un PDR o avanzar a diseno, el equipo debe explicitar la decision de producto.

La decision debe incluir:

- Que se debe decidir.
- Que opciones existen.
- Que evidencia apoya cada opcion.
- Que trade-offs implica cada camino.
- Que riesgos existen.
- Que pasa si no se hace nada.
- Cual es la recomendacion.

### 5. Convertir la decision en PDR

El PDR no es solo una sintesis del discovery. Es la consecuencia de una decision clara.

Debe convertir problema, evidencia, decision, alcance, requerimientos, riesgos y criterios de aceptacion en un documento accionable.

### 6. Disenar la solucion

Diseno Agentico traduce el PDR en estructura de experiencia.

Primero se define el flujo, pantallas, estados y jerarquia. Luego se generan wireframes o direcciones de diseno. Antes de pasar a delivery, la solucion se revisa como puerta de calidad.

### 7. Preparar delivery

Delivery convierte la solucion en insumos claros para desarrollo, medicion, validacion y lanzamiento.

Incluye historias, criterios de aceptacion, casos borde, plan de medicion, plan de validacion, checklist de release y riesgos.

### 8. Medir y validar

Cada iniciativa debe declarar como sabremos si funciono.

La medicion debe incluir:

- Metrica principal.
- Metric tree.
- Baseline.
- Target.
- Fuente de datos.
- Ventana de medicion.
- Criterio de decision.
- Riesgos de medicion.

### 9. Cerrar con aprendizaje

El trabajo no termina cuando se lanza.

El Learning Loop revisa resultados, metricas, decisiones, incidentes y patrones reutilizables. El objetivo es mejorar futuras iniciativas, playbooks, sistema de diseno y memoria del agente.

## Fases del framework

## Intake

### P00 · Intake & Triage

Clasifica la solicitud y define que profundidad de proceso necesita.

**Output principal:** tipo de iniciativa + ruta recomendada.

Se usa para entender que esta entrando, detectar riesgos iniciales, identificar ambiguedades y decidir que fases ejecutar u omitir.

## Discovery Agentico

### P01 · Product Strategy

Define el norte estrategico de la iniciativa.

**Output principal:** vision + HMW + problem statement.

Ayuda a formular el problema, conectar usuario y negocio, declarar supuestos y definir foco estrategico.

### P02 · Market & Benchmark

Identifica referentes, patrones y oportunidades del mercado.

**Output principal:** benchmark + aprendizajes aplicables.

Sirve para entender como otras soluciones resuelven problemas similares sin copiar patrones fuera de contexto.

### P03 · User & Research Synthesis

Convierte evidencia cualitativa y cuantitativa en necesidades claras.

**Output principal:** pains + JTBD + oportunidades + evidencia.

Cruza entrevistas, encuestas, tickets, NPS, CSAT, analytics y notas de terreno para detectar patrones, dolores y oportunidades.

### P04 · Journey & Service Mapping

Mapea experiencia, roles, fricciones y momentos criticos.

**Output principal:** journey + blueprint + puntos de intervencion.

Permite visualizar la experiencia end-to-end, incluyendo acciones, sistemas, roles, estados y dependencias operacionales.

### P05 · Business Value

Traduce oportunidades en impacto, prioridad y metricas.

**Output principal:** MoSCoW + OKRs + hipotesis de impacto.

Conecta hallazgos de usuario con valor de negocio, priorizacion, metricas leading/lagging y supuestos de impacto.

### P06 · Decision Framing

Convierte evidencia y oportunidades en una decision clara de producto.

**Output principal:** opciones + trade-offs + recomendacion.

Esta fase obliga a comparar alternativas, explicitar riesgos, declarar evidencia y documentar la decision que el equipo tomara.

### P07 · PDR Synthesizer

Consolida el discovery y la decision tomada en un requerimiento accionable.

**Output principal:** PDR / PRD / Feature Brief.

Integra problema, usuarios, decision, alcance, requerimientos, criterios de aceptacion, riesgos, dependencias y supuestos.

## Diseno Agentico

### D01 · Solution Framing

Traduce el PDR en estructura de experiencia.

**Output principal:** inventario de pantallas + flujo + estados.

Define pantallas, decisiones del usuario, jerarquia de informacion, estados y componentes del sistema de diseno.

### D02 · Low Fidelity Generator

Genera una primera version navegable en baja fidelidad.

**Output principal:** wireframe HTML + anotaciones + estados.

Permite validar estructura antes de invertir en detalle visual.

### D03 · Design Directions

Explora alternativas de solucion y caminos visuales.

**Output principal:** tres direcciones + prompts para Figma Make.

Compara caminos minimal, estandar y avanzado, con ventajas, riesgos y recomendacion.

### D04 · Solution Review

Evalua si la solucion esta lista para pasar a delivery.

**Output principal:** revision UX + riesgos + decision de avance.

Funciona como puerta de calidad. Revisa alineacion con PDR, casos principales, casos borde, accesibilidad, sistema de diseno, factibilidad tecnica y riesgos operacionales.

## Delivery Agentico

### E01 · Delivery Handoff

Convierte la solucion en insumos claros para desarrollo.

**Output principal:** historias + criterios + casos borde.

Prepara user stories, acceptance criteria, edge cases, preguntas tecnicas, dependencias y riesgos de release.

### E02 · Measurement Plan

Define como se medira si la solucion funciono.

**Output principal:** metric tree + tracking plan + success signals.

Debe incluir metricas outcome, behavior, operational, quality, adoption, risk y experience. Tambien baseline, target, fuente de datos, ventana de medicion y criterio de decision.

### E03 · Experiment & Validation Plan

Define como validar la solucion antes o durante el lanzamiento.

**Output principal:** hipotesis + metodo + criterio de exito + decision posterior.

Puede usar entrevistas, test de usabilidad, fake door, prototipo navegable, piloto operacional, A/B test, shadow mode, Wizard of Oz o beta controlada.

### E04 · Release Readiness

Verifica si la solucion esta lista para salir a produccion o piloto.

**Output principal:** go/no-go checklist + riesgos + plan de lanzamiento.

Revisa QA, tracking, soporte, operacion, comunicacion, responsables post-release y rollback plan.

### E05 · Learning & Compound

Guarda decisiones, aprendizajes y patrones reutilizables.

**Output principal:** decision log + aprendizajes + mejoras al playbook.

Revisa resultados, metricas, feedback, retro, incidentes y cambios implementados para actualizar procesos, librerias, sistema de diseno y memoria del agente.

## Modos de ejecucion

### Mejora

Para optimizar algo existente.

Fases recomendadas:

```text
P00 -> P03 light -> P05 light -> P07 Feature Brief -> D01 -> D04 -> E01 -> E02 light -> E05
```

### Funcionalidad nueva

Para crear una nueva capacidad sobre un producto existente.

Fases recomendadas:

```text
P00 -> P01 light -> P03 -> P04 -> P05 -> P06 -> P07 -> D01 -> D02 -> D03 -> D04 -> E01 -> E02 -> E03 -> E04 -> E05
```

### Proyecto nuevo

Para una app, modulo o flujo desde cero.

Fases recomendadas:

```text
P00 -> P01 -> P02 -> P03 -> P04 -> P05 -> P06 -> P07 completo -> D01 -> D02 -> D03 -> D04 -> E01 -> E02 -> E03 -> E04 -> E05
```

### Iniciativa estrategica

Para unificacion, plataforma, sistema o rediseno mayor.

Fases recomendadas:

```text
P00 -> P01 profundo -> P02 -> P03 + stakeholders -> P04 Service Blueprint -> P05 Business Case -> P06 -> P07 estrategico -> D01 Architecture -> D03 Concepts -> D04 -> E02 Framework -> E03 Pilot Strategy -> E04 Governance & Rollout -> E05 Learning System
```

## 4D Governance

El framework se gobierna con cuatro preguntas transversales.

### Delegacion

Que se delega a la IA y que conserva el humano.

La IA puede investigar, ordenar, sintetizar y proponer. El humano decide foco, trade-offs, alcance, prioridad y direccion.

### Descripcion

Que contexto, ejemplos y criterios de exito necesita el agente.

El agente necesita problema, negocio, usuarios, restricciones, metricas, sistema actual y formato esperado.

### Discernimiento

Como se evalua criticamente el output.

El equipo revisa si la propuesta tiene sentido, si hay evidencia, si responde al problema y si es viable.

### Diligencia

Como se cuida la responsabilidad final.

No se deben usar datos sensibles sin cuidado, inventar evidencia ni ocultar hipotesis, sesgos, nivel de confianza o limites del analisis.

## Quality checks por fase

Cada fase debe responder cuatro preguntas basicas:

- Que se delega.
- Que contexto necesita.
- Como se evalua.
- Que responsabilidad conserva el humano.

Ademas, cada output debe declarar:

- Supuestos.
- Evidencia disponible.
- Riesgos.
- Decisiones pendientes.
- Criterios de aceptacion o evaluacion.
- Nivel de confianza.

## Resultado esperado

Al finalizar una iniciativa, el equipo deberia tener:

- Una decision de producto documentada.
- Un PDR o brief accionable.
- Una estructura de solucion revisada.
- Un handoff claro para desarrollo.
- Un plan de medicion.
- Un plan de validacion o lanzamiento.
- Un registro de aprendizajes reutilizables.
