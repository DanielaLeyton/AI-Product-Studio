const stages = [
  {
    code: "P00",
    title: "Intake & Triage",
    block: "Setup",
    mode: "HÍBRIDO",
    depth: "Light / Standard / Deep",
    description: "Clasifica la solicitud y define qué profundidad de proceso necesita.",
    output: "Tipo de iniciativa + ruta recomendada.",
    objective: "Entender qué tipo de iniciativa está entrando y seleccionar el camino de trabajo correcto.",
    agent: [
      "Lee el requerimiento inicial.",
      "Detecta si es mejora, funcionalidad nueva, proyecto nuevo o iniciativa estratégica.",
      "Identifica riesgos iniciales, ambigüedades y contexto faltante.",
      "Recomienda qué fases ejecutar y cuáles omitir."
    ],
    human: ["Si la clasificación hace sentido.", "Qué profundidad aplicar.", "Qué restricciones o urgencias considerar."],
    inputs: ["Jira", "Brief inicial", "Conversación con PO", "Minuta", "Dato operacional", "Feedback de usuario"],
    outputs: ["Tipo de iniciativa", "Nivel de profundidad", "Ruta recomendada", "Riesgos iniciales", "Preguntas abiertas"],
    quality: [
      "¿El tipo de iniciativa está bien clasificado?",
      "¿Hay suficiente contexto para avanzar?",
      "¿Se detectaron dependencias críticas?",
      "¿Se declararon supuestos?"
    ]
  },
  {
    code: "P01",
    title: "Product Strategy",
    block: "Discovery",
    mode: "HITL",
    depth: "Standard / Deep",
    description: "Define el norte estratégico de la iniciativa.",
    output: "Visión + HMW + Problem Statement.",
    objective: "Definir el problema, el foco estratégico y la oportunidad de producto.",
    agent: [
      "Ordena el contexto disponible.",
      "Identifica usuarios, problemas, restricciones y oportunidades.",
      "Genera problem statements.",
      "Propone How Might We.",
      "Explicita supuestos y decisiones pendientes."
    ],
    human: ["El foco del problema.", "Los trade-offs estratégicos.", "La prioridad.", "La dirección de producto."],
    inputs: ["Brief", "Roadmap", "OKRs", "Jira", "Contexto operacional", "Objetivos de negocio"],
    outputs: ["Visión", "Problem Statement", "HMW", "Frame Canvas", "Supuestos", "Decisiones pendientes"],
    quality: [
      "¿El problema está formulado con claridad?",
      "¿El problema está conectado a negocio y usuario?",
      "¿Hay evidencia o solo opinión?",
      "¿Se declaró lo que queda fuera del alcance?"
    ]
  },
  {
    code: "P02",
    title: "Market & Benchmark",
    block: "Discovery",
    mode: "HÍBRIDO",
    depth: "Standard / Deep",
    description: "Identifica referentes, patrones y oportunidades del mercado.",
    output: "Benchmark + aprendizajes aplicables.",
    objective: "Entender cómo otras soluciones resuelven problemas similares y qué patrones podrían inspirar la solución.",
    agent: [
      "Investiga referentes.",
      "Compara patrones de experiencia.",
      "Extrae heurísticas.",
      "Identifica oportunidades y riesgos de copia.",
      "Resume aprendizajes aplicables."
    ],
    human: ["Qué referentes son relevantes.", "Qué patrones aplican al contexto.", "Qué aprendizajes se descartan."],
    inputs: ["Baymard", "NNGroup", "AppHub", "Productos internos", "Competidores", "Capturas de pantalla", "Referencias de mercado"],
    outputs: ["Benchmark", "Patrones", "Oportunidades", "Riesgos", "Principios aplicables"],
    quality: [
      "¿Los referentes son comparables?",
      "¿Se analizó experiencia, no solo UI?",
      "¿Se explicita qué no aplica?",
      "¿Hay aprendizajes accionables?"
    ]
  },
  {
    code: "P03",
    title: "User & Research Synthesis",
    block: "Discovery",
    mode: "HITL",
    depth: "Standard / Deep",
    description: "Convierte evidencia cualitativa y cuantitativa en necesidades claras.",
    output: "Pains + JTBD + Oportunidades + Evidencia.",
    objective: "Transformar distintas fuentes de información en necesidades de usuario claras, priorizadas y trazables.",
    agent: [
      "Cruza entrevistas, encuestas, tickets, NPS, CSAT y analytics.",
      "Detecta pains, necesidades, patrones y contradicciones.",
      "Agrupa hallazgos por tema, rol y momento del journey.",
      "Marca evidencia fuerte, hipótesis e inferencias."
    ],
    human: [
      "Qué hallazgos son realmente relevantes.",
      "Qué hipótesis deben validarse.",
      "Qué dolores son prioritarios para producto.",
      "Qué evidencia es insuficiente."
    ],
    inputs: ["Entrevistas", "Surveys", "NPS", "CSAT", "Analytics", "Tickets", "Notas de terreno"],
    outputs: ["Research synthesis", "JTBD", "Pains", "Needs", "Opportunities", "Quotes", "Evidence map"],
    quality: [
      "¿Cada hallazgo tiene evidencia?",
      "¿Se separan hechos de hipótesis?",
      "¿Hay nivel de confianza declarado?",
      "¿Existe riesgo de sesgo?",
      "¿Faltan usuarios o roles críticos?"
    ]
  },
  {
    code: "P04",
    title: "Journey & Service Mapping",
    block: "Discovery",
    mode: "HÍBRIDO",
    depth: "Standard / Deep",
    description: "Mapea experiencia, roles, fricciones y momentos críticos.",
    output: "Journey + Blueprint + Puntos de intervención.",
    objective: "Visualizar la experiencia end-to-end y detectar dónde intervenir.",
    agent: [
      "Construye journey.",
      "Mapea actores, acciones, sistemas y estados.",
      "Detecta fricciones, frustraciones y momentos de verdad.",
      "Identifica dependencias backstage y frontline."
    ],
    human: ["Qué tramo del journey se prioriza.", "Qué fricciones son críticas.", "Qué puntos requieren validación operacional."],
    inputs: ["Flujos actuales", "Procesos operativos", "Roles", "Sistemas", "Observación en terreno", "Entrevistas"],
    outputs: ["Journey map", "Service blueprint", "Pain points", "Momentos de verdad", "Oportunidades", "Dependencias"],
    quality: [
      "¿Están representados todos los roles críticos?",
      "¿Se conectan acciones con sistemas y estados?",
      "¿Se diferencia pantalla, proceso y operación física?",
      "¿Se identificaron puntos de riesgo?"
    ]
  },
  {
    code: "P05",
    title: "Business Value",
    block: "Discovery",
    mode: "HÍBRIDO",
    depth: "Standard / Deep",
    description: "Traduce oportunidades en impacto, prioridad y métricas.",
    output: "MoSCoW + OKRs + Hipótesis de impacto.",
    objective: "Conectar hallazgos de usuario con valor de negocio y priorización.",
    agent: [
      "Propone hipótesis de impacto.",
      "Genera matriz MoSCoW.",
      "Sugiere OKRs.",
      "Identifica métricas leading y lagging.",
      "Estima ROI si existen KPIs claros."
    ],
    human: ["Qué oportunidad priorizar.", "Qué trade-offs aceptar.", "Qué métrica será usada como éxito."],
    inputs: ["KPIs", "Costos", "Volumen", "SLA", "Conversión", "Tickets", "Errores", "Datos operacionales"],
    outputs: ["Matriz de valor", "MoSCoW", "OKRs", "Métricas", "Hipótesis de impacto", "Priorización"],
    quality: [
      "¿La oportunidad conecta con una métrica?",
      "¿Hay impacto claro para negocio?",
      "¿La estimación declara supuestos?",
      "¿Se diferencian métricas de uso, eficiencia y resultado?"
    ]
  },
  {
    code: "P06",
    title: "Decision Framing",
    block: "Discovery",
    mode: "HITL",
    depth: "Standard / Deep",
    description: "Convierte evidencia y oportunidades en una decisión clara de producto.",
    output: "Opciones + trade-offs + recomendación.",
    objective: "Ayudar al equipo a decidir qué camino tomar antes de escribir el PDR o avanzar a diseño.",
    agent: [
      "Formula la decisión que se debe tomar.",
      "Identifica opciones posibles.",
      "Compara beneficios, riesgos y costos de cada opción.",
      "Declara evidencia disponible y vacíos de información.",
      "Propone una recomendación razonada.",
      "Explicita qué pasa si no se hace nada."
    ],
    human: ["Qué alternativa seguir.", "Qué trade-offs aceptar.", "Qué riesgos asumir.", "Qué decisión queda documentada."],
    inputs: ["Product Strategy", "Research synthesis", "Journey", "Business Value", "Restricciones técnicas", "Stakeholders"],
    outputs: ["Decision statement", "Opciones comparadas", "Trade-offs", "Riesgos", "Recomendación", "Decisión tomada", "Rationale"],
    quality: [
      "¿La decisión está formulada claramente?",
      "¿Hay más de una opción real?",
      "¿Se explicitan trade-offs?",
      "¿La recomendación está basada en evidencia?",
      "¿Queda claro qué pasa si no se hace nada?"
    ],
    example: {
      title: "Ejemplo de contenido",
      items: [
        "Decisión a tomar: ¿Creamos una experiencia única transversal o una base común extensible por negocio?",
        "Opciones: A. Unificar todo en una sola experiencia. B. Crear una base común con extensiones por negocio. C. Mantener productos separados y solo homologar componentes.",
        "Recomendación: Opción B, porque permite escalar consistencia sin perder reglas particulares por negocio."
      ]
    }
  },
  {
    code: "P07",
    title: "PDR Synthesizer",
    block: "Discovery",
    mode: "AUTO + aprobación",
    depth: "Light / Standard / Deep",
    description: "Consolida el discovery y la decisión tomada en un requerimiento accionable.",
    output: "PDR / PRD / Feature Brief.",
    objective: "Sintetizar todo el discovery en un documento claro, trazable y listo para diseño o desarrollo.",
    agent: [
      "Integra outputs de P01 a P06.",
      "Ordena problema, usuarios, decisión, alcance y requerimientos.",
      "Genera criterios de aceptación iniciales.",
      "Declara riesgos, dependencias y supuestos.",
      "Convierte la decisión tomada en requerimientos accionables."
    ],
    human: ["Qué queda dentro y fuera del alcance.", "Si el PDR está aprobado.", "Qué necesita más validación."],
    inputs: ["Product Strategy", "Benchmark", "Research synthesis", "Journey", "Business value", "Decision framing"],
    outputs: ["PDR", "PRD", "Feature Brief", "JSON estructurado", "Criterios de aceptación"],
    quality: [
      "¿El PDR es accionable?",
      "¿Hay trazabilidad desde problema a decisión?",
      "¿El alcance está claro?",
      "¿Hay criterios de aceptación?",
      "¿Se declaran supuestos y riesgos?"
    ]
  },
  {
    code: "D01",
    title: "Solution Framing",
    block: "Diseño",
    mode: "HÍBRIDO",
    depth: "Standard / Deep",
    description: "Traduce el PDR en estructura de experiencia.",
    output: "Inventario de pantallas + flujo + estados.",
    objective: "Convertir el requerimiento en una estructura de solución clara antes de diseñar visualmente.",
    agent: [
      "Define pantallas necesarias.",
      "Identifica decisiones del usuario.",
      "Propone jerarquía de información.",
      "Lista estados: vacío, carga, error, éxito.",
      "Recomienda componentes del sistema de diseño."
    ],
    human: ["La dirección de experiencia.", "Qué pantallas son necesarias.", "Qué flujo se usará."],
    inputs: ["PDR", "Journey", "Design system", "Restricciones técnicas", "Roles"],
    outputs: ["Inventario de pantallas", "Flujo", "Jerarquía", "Wireframe brief", "Estados", "Decisiones abiertas"],
    quality: ["¿Cada pantalla responde a una necesidad?", "¿El flujo refleja el PDR?", "¿Los estados están considerados?", "¿Hay decisiones pendientes?"]
  },
  {
    code: "D02",
    title: "Low Fidelity Generator",
    block: "Diseño",
    mode: "AUTO",
    depth: "Standard / Deep",
    description: "Genera una primera versión navegable en baja fidelidad.",
    output: "Wireframe HTML + anotaciones + estados.",
    objective: "Crear una versión navegable de baja fidelidad para validar estructura antes del diseño visual.",
    agent: ["Genera wireframes HTML.", "Crea flujos navegables.", "Agrega anotaciones.", "Incluye estados de error, vacío y carga."],
    human: ["Si la estructura responde al problema.", "Si el flujo es comprensible.", "Si se avanza a exploración visual."],
    inputs: ["Wireframe brief", "Componentes disponibles", "Tokens", "Reglas del sistema"],
    outputs: ["HTML navegable", "Wireframes baja fidelidad", "Anotaciones", "Estados"],
    quality: [
      "¿La navegación es clara?",
      "¿El flujo permite completar la tarea?",
      "¿Se representan errores y estados críticos?",
      "¿No se sobrediseñó antes de validar estructura?"
    ]
  },
  {
    code: "D03",
    title: "Design Directions",
    block: "Diseño",
    mode: "HÍBRIDO",
    depth: "Standard / Deep",
    description: "Explora alternativas de solución y caminos visuales.",
    output: "3 direcciones + prompts para Figma Make.",
    objective: "Proponer alternativas de experiencia para elegir una dirección antes de producir diseño final.",
    agent: [
      "Genera 3 alternativas: minimal, estándar y avanzada.",
      "Compara ventajas y riesgos.",
      "Produce prompts para Figma Make u otra herramienta.",
      "Recomienda componentes del sistema de diseño."
    ],
    human: ["Qué dirección seguir.", "Qué alternativas combinar.", "Qué camino descartar."],
    inputs: ["Wireframes", "Sistema de diseño", "Marca", "Restricciones", "PDR"],
    outputs: ["3 direcciones de diseño", "Prompts para Figma Make", "Comparación de alternativas", "Recomendación"],
    quality: [
      "¿Las alternativas resuelven el mismo problema?",
      "¿La opción recomendada es viable?",
      "¿Respeta el sistema de diseño?",
      "¿Considera accesibilidad y consistencia?"
    ]
  },
  {
    code: "D04",
    title: "Solution Review",
    block: "Diseño",
    mode: "HITL",
    depth: "Standard / Deep",
    description: "Evalúa si la solución está lista para pasar a delivery.",
    output: "Revisión UX + riesgos + decisión de avance.",
    objective: "Funcionar como puerta de calidad antes del handoff a desarrollo.",
    agent: [
      "Revisa si la solución responde al PDR.",
      "Evalúa cobertura de casos principales y casos borde.",
      "Detecta riesgos de usabilidad, accesibilidad y consistencia.",
      "Revisa alineación con sistema de diseño.",
      "Identifica riesgos técnicos u operacionales.",
      "Lista decisiones pendientes."
    ],
    human: ["Si la solución pasa a delivery.", "Qué ajustes son necesarios.", "Qué riesgos se aceptan.", "Qué debe volver a exploración."],
    inputs: ["PDR", "Wireframes", "Diseño propuesto", "Design directions", "Sistema de diseño", "Restricciones técnicas"],
    outputs: ["Solution review", "Riesgos UX", "Riesgos técnicos", "Riesgos operacionales", "Decisiones pendientes", "Go / Iterate / Stop"],
    quality: [
      "¿La solución responde al problema definido?",
      "¿Cubre casos principales y casos borde?",
      "¿Incluye estados vacío, carga, error y éxito?",
      "¿Es accesible?",
      "¿Respeta el sistema de diseño?",
      "¿Es viable técnicamente?",
      "¿Hay riesgos operacionales?"
    ]
  },
  {
    code: "E01",
    title: "Delivery Handoff",
    block: "Delivery",
    mode: "HÍBRIDO",
    depth: "Standard / Deep",
    description: "Convierte la solución en insumos claros para desarrollo.",
    output: "Historias + criterios + casos borde.",
    objective: "Preparar el traspaso a desarrollo con claridad, trazabilidad y criterios de aceptación.",
    agent: [
      "Genera historias de usuario.",
      "Define criterios de aceptación.",
      "Lista casos borde.",
      "Explicita dependencias técnicas.",
      "Propone preguntas para refinamiento."
    ],
    human: ["Qué está listo para desarrollo.", "Qué requiere alineación técnica.", "Qué se divide en fases."],
    inputs: ["Diseño aprobado", "PDR", "Restricciones técnicas", "Jira", "Reglas de negocio"],
    outputs: ["User stories", "Acceptance criteria", "Edge cases", "Technical questions", "Release risks"],
    quality: [
      "¿Desarrollo puede estimar?",
      "¿Los criterios son verificables?",
      "¿Hay casos borde?",
      "¿Las dependencias están claras?",
      "¿Existe trazabilidad con el PDR?"
    ]
  },
  {
    code: "E02",
    title: "Measurement Plan",
    block: "Delivery",
    mode: "HÍBRIDO",
    depth: "Standard / Deep",
    description: "Define cómo se medirá si la solución funcionó.",
    output: "Metric tree + tracking plan + success signals.",
    objective: "Definir cómo sabremos si la solución funcionó, qué señales observaremos y qué decisión tomaremos con los datos.",
    agent: [
      "Traduce objetivos de producto en métricas observables.",
      "Propone métricas leading y lagging.",
      "Define eventos de tracking.",
      "Sugiere baseline y meta.",
      "Identifica fuentes de datos.",
      "Declara riesgos de medición.",
      "Propone ventana de evaluación.",
      "Clasifica métricas por tipo: outcome, behavior, operational, quality, adoption, risk y experience."
    ],
    human: [
      "Qué métrica será principal.",
      "Qué meta es realista.",
      "Qué eventos se implementarán.",
      "Qué fuente de datos será confiable.",
      "Cuándo se revisarán resultados.",
      "Qué decisión se tomará con los datos."
    ],
    inputs: ["PDR", "Objetivos de negocio", "Journey", "Diseño aprobado", "KPIs actuales", "Analytics disponibles", "Datos operacionales"],
    outputs: [
      "Measurement plan",
      "Tracking plan",
      "Metric tree",
      "Success signals",
      "Baseline",
      "Target",
      "Review cadence",
      "Data risks",
      "Decision criteria"
    ],
    quality: [
      "¿La métrica responde al objetivo?",
      "¿Hay baseline?",
      "¿La fuente de datos existe?",
      "¿Se puede implementar tracking?",
      "¿Se mide resultado y no solo uso?",
      "¿Hay una ventana de evaluación?",
      "¿Está claro qué decisión se tomará con los datos?"
    ],
    metricTypes: [
      "Outcome: resultado de negocio o usuario.",
      "Behavior: comportamiento en el producto.",
      "Operational: eficiencia operacional.",
      "Quality: calidad del proceso.",
      "Adoption: uso de la funcionalidad.",
      "Risk: señales negativas.",
      "Experience: percepción o fricción."
    ],
    metricTree: {
      objective: "Mejorar la confiabilidad del proceso de creación de rutas.",
      primary: "% rutas activadas sin corrección posterior.",
      secondary: [
        "Tiempo promedio de creación de ruta.",
        "% rutas con pedidos modificados antes de activar.",
        "% rutas con error de validación.",
        "% rutas activadas dentro del SLA."
      ],
      events: [
        "route_created",
        "order_added_to_route",
        "package_registered",
        "route_completed_not_activated",
        "route_activated",
        "route_corrected_after_activation"
      ]
    }
  },
  {
    code: "E03",
    title: "Experiment & Validation Plan",
    block: "Delivery",
    mode: "HÍBRIDO",
    depth: "Standard / Deep",
    description: "Define cómo validar la solución antes o durante el lanzamiento.",
    output: "Hipótesis + método + criterio de éxito + decisión posterior.",
    objective: "Diseñar una validación clara para reducir riesgo antes de escalar la solución.",
    agent: [
      "Formula hipótesis testeables.",
      "Sugiere método de validación.",
      "Define usuarios o segmentos.",
      "Propone criterio de éxito.",
      "Identifica riesgos de prueba.",
      "Define decisión posterior."
    ],
    human: ["Qué hipótesis validar.", "Qué método usar.", "Qué muestra o segmento incluir.", "Cuándo escalar, iterar o detener."],
    inputs: ["PDR", "Diseño", "Riesgos", "Métricas", "Segmentos", "Restricciones operacionales"],
    outputs: ["Hipótesis", "Método de validación", "Segmento", "Criterio de éxito", "Riesgos de prueba", "Decisión posterior"],
    quality: [
      "¿La hipótesis es testeable?",
      "¿El método reduce riesgo real?",
      "¿El criterio de éxito está definido?",
      "¿Hay segmento o muestra clara?",
      "¿Está definida la decisión posterior?"
    ],
    methods: [
      "Entrevista",
      "Test de usabilidad",
      "Fake door",
      "Prototipo navegable",
      "Piloto operacional",
      "A/B test",
      "Shadow mode",
      "Wizard of Oz",
      "Beta controlada",
      "Piloto en tienda",
      "Shadow operation",
      "Comparación antes/después",
      "Validación con supervisor",
      "Dry run operativo"
    ]
  },
  {
    code: "E04",
    title: "Release Readiness",
    block: "Delivery",
    mode: "HITL",
    depth: "Standard / Deep",
    description: "Verifica si la solución está lista para salir a producción o piloto.",
    output: "Go / No-Go checklist + riesgos + plan de lanzamiento.",
    objective: "Evitar que una solución técnicamente lista falle por falta de preparación operacional, soporte, comunicación o medición.",
    agent: [
      "Revisa dependencias de desarrollo, QA, data, soporte y operación.",
      "Verifica tracking.",
      "Identifica riesgos de lanzamiento.",
      "Propone plan de piloto o rollout gradual.",
      "Genera checklist go/no-go."
    ],
    human: [
      "Si se lanza, se pilota o se posterga.",
      "Qué riesgos son aceptables.",
      "Qué comunicación o capacitación se necesita.",
      "Qué plan de soporte se activa."
    ],
    inputs: ["Handoff", "QA plan", "Measurement plan", "Validation plan", "Operación", "Soporte", "Data"],
    outputs: ["Checklist de lanzamiento", "Riesgos go/no-go", "Plan de piloto", "Plan de comunicación", "Plan de soporte", "Rollback plan"],
    quality: [
      "¿QA tiene casos de prueba?",
      "¿Operaciones entiende el cambio?",
      "¿Soporte tiene guías?",
      "¿Data tiene tracking?",
      "¿Hay responsables post-release?",
      "¿Hay plan de rollback?"
    ]
  },
  {
    code: "E05",
    title: "Learning & Compound",
    block: "Delivery",
    mode: "AUTO + revisión",
    depth: "Light / Standard / Deep",
    description: "Guarda decisiones, aprendizajes y patrones reutilizables.",
    output: "Decision log + aprendizajes + mejoras al playbook.",
    objective: "Capturar aprendizaje para que cada iniciativa mejore el sistema de trabajo.",
    agent: [
      "Documenta decisiones.",
      "Resume aprendizajes.",
      "Revisa métricas post-release.",
      "Detecta patrones reutilizables.",
      "Propone mejoras al playbook, sistema de diseño o memoria del agente.",
      "Identifica qué debe recordarse para futuras iniciativas."
    ],
    human: [
      "Qué aprendizaje se convierte en estándar.",
      "Qué debe actualizarse en procesos o librerías.",
      "Qué se incorpora a la memoria del agente."
    ],
    inputs: ["Resultado de la iniciativa", "Métricas", "Feedback", "Retro", "Decisiones tomadas", "Incidentes", "Cambios implementados"],
    outputs: [
      "Decision log",
      "Learning summary",
      "Metric review",
      "Patrones",
      "Recomendaciones",
      "Playbook update",
      "Design system update",
      "Reusable prompt/context packet"
    ],
    quality: [
      "¿Se registraron decisiones importantes?",
      "¿Hay aprendizajes accionables?",
      "¿Se revisaron métricas reales?",
      "¿Se identificaron cambios al proceso?",
      "¿Se puede reutilizar en otra iniciativa?",
      "¿Queda algo para memoria del agente?"
    ]
  }
];

const executionModes = [
  {
    name: "Mejora",
    description: "Optimizar algo que ya existe.",
    output: "Feature Brief + hipótesis + criterios de aceptación.",
    duration: "2 a 3 horas.",
    jira: "Bug / Improvement.",
    recommendation: "Ruta liviana para mejorar algo existente sin sobredimensionar el proceso.",
    phases: [
      { code: "P00", label: "P00 Intake" },
      { code: "P03", label: "P03 Research light" },
      { code: "P05", label: "P05 Business Value light" },
      { code: "P07", label: "P07 Feature Brief" },
      { code: "D01", label: "D01 Solution Framing" },
      { code: "D04", label: "D04 Solution Review" },
      { code: "E01", label: "E01 Handoff" },
      { code: "E02", label: "E02 Measurement light" },
      { code: "E05", label: "E05 Learning" }
    ]
  },
  {
    name: "Funcionalidad nueva",
    description: "Nueva capacidad sobre producto existente.",
    output: "PDR acotado + journey + propuesta de solución.",
    duration: "4 a 6 horas.",
    jira: "Story / Feature.",
    recommendation: "Ruta estándar para convertir una capacidad nueva en decisión, solución, handoff y medición.",
    phases: [
      { code: "P00", label: "P00 Intake" },
      { code: "P01", label: "P01 Strategy light" },
      { code: "P03", label: "P03 Research Synthesis" },
      { code: "P04", label: "P04 Journey" },
      { code: "P05", label: "P05 Business Value" },
      { code: "P06", label: "P06 Decision Framing" },
      { code: "P07", label: "P07 PDR" },
      { code: "D01", label: "D01 Solution Framing" },
      { code: "D02", label: "D02 Low Fidelity" },
      { code: "D03", label: "D03 Design Directions" },
      { code: "D04", label: "D04 Solution Review" },
      { code: "E01", label: "E01 Handoff" },
      { code: "E02", label: "E02 Measurement Plan" },
      { code: "E03", label: "E03 Validation Plan" },
      { code: "E04", label: "E04 Release Readiness" },
      { code: "E05", label: "E05 Learning" }
    ]
  },
  {
    name: "Proyecto nuevo",
    description: "App, módulo o flujo desde cero.",
    output: "PDR completo + estrategia + benchmark + journey + diseño inicial.",
    duration: "8 a 16 horas.",
    jira: "Epic.",
    recommendation: "Ruta profunda para construir contexto, tomar decisión, diseñar solución y preparar delivery completo.",
    phases: [
      { code: "P00", label: "P00 Intake" },
      { code: "P01", label: "P01 Strategy" },
      { code: "P02", label: "P02 Benchmark" },
      { code: "P03", label: "P03 Research" },
      { code: "P04", label: "P04 Journey" },
      { code: "P05", label: "P05 Business Value" },
      { code: "P06", label: "P06 Decision Framing" },
      { code: "P07", label: "P07 PDR completo" },
      { code: "D01", label: "D01 Solution Framing" },
      { code: "D02", label: "D02 Low Fidelity" },
      { code: "D03", label: "D03 Design Directions" },
      { code: "D04", label: "D04 Solution Review" },
      { code: "E01", label: "E01 Handoff" },
      { code: "E02", label: "E02 Measurement" },
      { code: "E03", label: "E03 Validation" },
      { code: "E04", label: "E04 Release Readiness" },
      { code: "E05", label: "E05 Learning" }
    ]
  },
  {
    name: "Iniciativa estratégica",
    description: "Unificación, plataforma, sistema o rediseño mayor.",
    output: "Product Strategy Doc + roadmap + principios + governance.",
    duration: "2 a 5 días.",
    jira: "Initiative / Epic.",
    recommendation: "Ruta extendida para decisiones de plataforma, gobernanza, pilotos y aprendizaje sistemático.",
    phases: [
      { code: "P00", label: "P00 Intake" },
      { code: "P01", label: "P01 Strategy profundo" },
      { code: "P02", label: "P02 Market & Benchmark" },
      { code: "P03", label: "P03 Research + stakeholders" },
      { code: "P04", label: "P04 Service Blueprint" },
      { code: "P05", label: "P05 Business Case" },
      { code: "P06", label: "P06 Decision Framing" },
      { code: "P07", label: "P07 Product Strategy Doc / PDR estratégico" },
      { code: "D01", label: "D01 Principles & Experience Architecture" },
      { code: "D03", label: "D03 Directional Concepts" },
      { code: "D04", label: "D04 Solution Review" },
      { code: "E02", label: "E02 Measurement Framework" },
      { code: "E03", label: "E03 Pilot Strategy" },
      { code: "E04", label: "E04 Governance & Rollout" },
      { code: "E05", label: "E05 Learning System" }
    ]
  }
];

const governance = [
  {
    title: "Delegación",
    question: "¿Qué le delego a la IA y qué hago yo?",
    description: "La IA puede investigar, ordenar, sintetizar y proponer. El humano decide foco, trade-offs, alcance, prioridad y dirección."
  },
  {
    title: "Descripción",
    question: "¿Le di contexto, ejemplos y criterios de éxito?",
    description: "El agente necesita problema, negocio, usuarios, restricciones, métricas, sistema actual y formato esperado."
  },
  {
    title: "Discernimiento",
    question: "¿El output es preciso, útil y alcanzable?",
    description: "El equipo revisa si la propuesta tiene sentido, si hay evidencia, si responde al problema y si es viable."
  },
  {
    title: "Diligencia",
    question: "¿Es ético, seguro y responsable?",
    description: "No usar datos sensibles sin cuidado, no inventar evidencia, declarar hipótesis, sesgos, nivel de confianza y límites del análisis."
  }
];

let activeBlock = "all";
let activeMode = "Mejora";
let searchTerm = "";
let selectedStageCode = "P00";

const grid = document.getElementById("cardsGrid");
const panel = document.getElementById("detailPanel");
const panelContent = document.getElementById("panelContent");
const closePanel = document.getElementById("closePanel");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const modeTitle = document.getElementById("modeTitle");
const modeDescription = document.getElementById("modeDescription");
const recommendedPhases = document.getElementById("recommendedPhases");

function autonomyClass(value) {
  if (value.includes("AUTO")) return "auto";
  if (value.includes("HITL")) return "hitl";
  return "hybrid";
}

function normalizeSearch(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function expandSearchTerm(value) {
  const normalized = normalizeSearch(value);
  const aliases = {
    metrics: "metrica metricas medicion measurement tracking baseline target",
    strategy: "estrategia estrategico vision decision",
    research: "investigacion entrevistas evidencia sintesis usuarios",
    benchmark: "mercado referentes patrones",
    journey: "viaje mapa experiencia blueprint",
    delivery: "handoff desarrollo entrega release lanzamiento",
    validation: "validacion experimento hipotesis piloto",
    learning: "aprendizaje decision log compound memoria"
  };
  return `${normalized} ${aliases[normalized] || ""}`.trim();
}

function stageSearchText(stage) {
  return normalizeSearch([
    stage.code,
    stage.title,
    stage.description,
    stage.output,
    stage.block,
    stage.mode,
    stage.depth,
    stage.inputs.join(" "),
    stage.outputs.join(" "),
    stage.quality.join(" "),
    stage.metricTypes?.join(" ") || "",
    stage.methods?.join(" ") || "",
    stage.metricTree ? Object.values(stage.metricTree).flat().join(" ") : "",
    stage.example?.items.join(" ") || ""
  ].join(" "));
}

function renderCards() {
  const filtered = stages.filter(stage => {
    const blockMatch = activeBlock === "all" || stage.block === activeBlock || (activeBlock === "Discovery" && stage.code === "P00");
    const searchTokens = expandSearchTerm(searchTerm).split(" ").filter(Boolean);
    const searchMatch = !searchTokens.length || searchTokens.some(term => stageSearchText(stage).includes(term));
    return blockMatch && searchMatch;
  });

  grid.innerHTML = "";
  resultCount.textContent = `${filtered.length} ${filtered.length === 1 ? "card" : "cards"}`;

  if (!filtered.length) {
    grid.innerHTML = '<div class="empty-state">No hay cards para este filtro. Prueba con otra búsqueda o bloque.</div>';
    return;
  }

  filtered.forEach(stage => {
    const card = document.createElement("article");
    card.className = `stage-card ${stage.code === selectedStageCode ? "selected" : ""}`;
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Abrir detalle de ${stage.title}`);
    card.innerHTML = `
      <div class="card-top">
        <span class="code">${stage.code}</span>
        <span class="dot ${autonomyClass(stage.mode)}" aria-hidden="true"></span>
      </div>
      <h2>${stage.title}</h2>
      <p class="desc">${stage.description}</p>
      <div class="tags">
        <span class="tag">${stage.block}</span>
        <span class="tag ${autonomyClass(stage.mode)}">${stage.mode}</span>
        <span class="tag">${stage.depth}</span>
      </div>
      <div class="output"><strong>Output</strong>${stage.output}</div>
    `;
    card.addEventListener("click", () => openDetail(stage));
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openDetail(stage);
      }
    });
    grid.appendChild(card);
  });
}

function list(items) {
  return `<ul class="clean">${items.map(item => `<li>${item}</li>`).join("")}</ul>`;
}

function renderOptionalSections(stage) {
  const sections = [];

  if (stage.metricTypes) {
    sections.push(`
      <div class="panel-section">
        <h3>Tipos de métricas</h3>
        ${list(stage.metricTypes)}
      </div>
    `);
  }

  if (stage.metricTree) {
    sections.push(`
      <div class="panel-section metric-tree">
        <h3>Ejemplo de metric tree</h3>
        <p><strong>Objetivo de producto:</strong> ${stage.metricTree.objective}</p>
        <p><strong>Métrica principal:</strong> ${stage.metricTree.primary}</p>
        <h4>Métricas secundarias</h4>
        ${list(stage.metricTree.secondary)}
        <h4>Eventos</h4>
        ${list(stage.metricTree.events)}
      </div>
    `);
  }

  if (stage.methods) {
    sections.push(`
      <div class="panel-section">
        <h3>Métodos posibles</h3>
        ${list(stage.methods)}
      </div>
    `);
  }

  if (stage.example) {
    sections.push(`
      <div class="panel-section">
        <h3>${stage.example.title}</h3>
        ${list(stage.example.items)}
      </div>
    `);
  }

  return sections.join("");
}

function markdownForStage(stage) {
  const optional = [
    stage.metricTypes ? `\n## Tipos de métricas\n${stage.metricTypes.map(item => `- ${item}`).join("\n")}` : "",
    stage.metricTree ? `\n## Ejemplo de metric tree\n- Objetivo de producto: ${stage.metricTree.objective}\n- Métrica principal: ${stage.metricTree.primary}\n\n### Métricas secundarias\n${stage.metricTree.secondary.map(item => `- ${item}`).join("\n")}\n\n### Eventos\n${stage.metricTree.events.map(item => `- ${item}`).join("\n")}` : "",
    stage.methods ? `\n## Métodos posibles\n${stage.methods.map(item => `- ${item}`).join("\n")}` : "",
    stage.example ? `\n## ${stage.example.title}\n${stage.example.items.map(item => `- ${item}`).join("\n")}` : ""
  ].join("");

  return `# ${stage.code} — ${stage.title}

**Bloque:** ${stage.block}
**Modo:** ${stage.mode}
**Profundidad:** ${stage.depth}
**Output principal:** ${stage.output}

## Objetivo
${stage.objective}

## Qué hace el agente
${stage.agent.map(item => `- ${item}`).join("\n")}

## Qué decide el humano
${stage.human.map(item => `- ${item}`).join("\n")}

## Inputs
${stage.inputs.map(item => `- ${item}`).join("\n")}

## Outputs
${stage.outputs.map(item => `- ${item}`).join("\n")}

## Quality Check
${stage.quality.map(item => `- ${item}`).join("\n")}${optional}
`;
}

function openDetail(stage) {
  selectedStageCode = stage.code;
  renderCards();
  panelContent.innerHTML = `
    <div class="panel-header">
      <p class="eyebrow">${stage.code} · ${stage.block}</p>
      <h2>${stage.title}</h2>
      <div class="tags">
        <span class="tag">${stage.block}</span>
        <span class="tag ${autonomyClass(stage.mode)}">${stage.mode}</span>
        <span class="tag">${stage.depth}</span>
      </div>
    </div>
    <div class="panel-section">
      <h3>Objetivo</h3>
      <p>${stage.objective}</p>
    </div>
    <div class="panel-section">
      <h3>Qué hace el agente</h3>
      ${list(stage.agent)}
    </div>
    <div class="panel-section">
      <h3>Qué decide el humano</h3>
      ${list(stage.human)}
    </div>
    <div class="panel-section">
      <h3>Inputs</h3>
      ${list(stage.inputs)}
    </div>
    <div class="panel-section">
      <h3>Outputs</h3>
      ${list(stage.outputs)}
    </div>
    <div class="panel-section">
      <h3>Quality Check</h3>
      ${list(stage.quality)}
    </div>
    ${renderOptionalSections(stage)}
    <div class="panel-actions">
      <button class="panel-action primary" type="button" id="copyStructure">Copiar estructura</button>
      <button class="panel-action secondary" type="button" id="exportPdrPanel">Exportar PDR demo</button>
      <p class="copy-feedback" id="copyFeedback" aria-live="polite"></p>
    </div>
  `;
  panel.classList.add("open");
  panel.setAttribute("aria-hidden", "false");
  document.getElementById("copyStructure").addEventListener("click", () => copyStage(stage));
  document.getElementById("exportPdrPanel").addEventListener("click", () => exportPdr(stage));
}

async function copyStage(stage) {
  const feedback = document.getElementById("copyFeedback");
  const markdown = markdownForStage(stage);

  try {
    await navigator.clipboard.writeText(markdown);
    feedback.textContent = "Estructura copiada al portapapeles.";
  } catch (error) {
    let copied = false;
    const copyListener = event => {
      event.clipboardData.setData("text/plain", markdown);
      event.preventDefault();
      copied = true;
    };
    document.addEventListener("copy", copyListener);
    const eventCopied = document.execCommand("copy");
    document.removeEventListener("copy", copyListener);

    if (eventCopied && copied) {
      feedback.textContent = "Estructura copiada al portapapeles.";
      return;
    }

    const textArea = document.createElement("textarea");
    textArea.value = markdown;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "fixed";
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.width = "1px";
    textArea.style.height = "1px";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    textArea.setSelectionRange(0, markdown.length);
    copied = document.execCommand("copy");
    textArea.remove();
    feedback.textContent = copied ? "Estructura copiada al portapapeles." : "No se pudo copiar automáticamente.";
  }
}

function exportPdr(stage = stages.find(item => item.code === selectedStageCode) || stages[0]) {
  const mode = executionModes.find(item => item.name === activeMode) || executionModes[0];
  const pdr = {
    product: "AI Product Studio",
    initiativeType: mode.name,
    selectedStage: {
      code: stage.code,
      title: stage.title,
      block: stage.block,
      mode: stage.mode,
      depth: stage.depth,
      objective: stage.objective,
      output: stage.output
    },
    recommendedRoute: mode.phases.map(phase => phase.label),
    problemStatement: "Transformar oportunidades ambiguas en decisiones de producto claras, diseñables, desarrollables y medibles.",
    decisionFraming: {
      decisionToMake: "Qué alternativa de producto debe seguir el equipo y por qué.",
      tradeOffs: ["Valor de usuario", "Complejidad técnica", "Riesgo operacional", "Impacto medible"],
      recommendation: "Avanzar solo cuando la evidencia, el alcance y el criterio de decisión sean explícitos."
    },
    measurement: {
      primaryMetric: "Definir métrica principal según objetivo.",
      baseline: "Registrar baseline antes del release o piloto.",
      target: "Definir meta realista y ventana de medición.",
      decisionCriteria: "Escalar, iterar o detener según señales acordadas."
    },
    acceptanceCriteria: stage.outputs,
    qualityChecks: stage.quality
  };

  const blob = new Blob([JSON.stringify(pdr, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "ai-product-studio-pdr-demo.json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function setActiveFilter(filter) {
  activeBlock = filter;
  document.querySelectorAll("[data-filter]").forEach(button => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });
  renderCards();
}

function renderModeContext() {
  const mode = executionModes.find(item => item.name === activeMode) || executionModes[0];
  modeTitle.textContent = mode.name;
  modeDescription.textContent = mode.recommendation;
  recommendedPhases.innerHTML = "";

  mode.phases.forEach(routePhase => {
    const stage = stages.find(item => item.code === routePhase.code);
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "phase-chip";
    chip.textContent = routePhase.label;
    chip.addEventListener("click", () => {
      if (stage) openDetail(stage);
    });
    recommendedPhases.appendChild(chip);
  });
}

function setActiveMode(mode) {
  activeMode = mode;
  document.querySelectorAll("[data-mode]").forEach(button => {
    button.classList.toggle("active", button.dataset.mode === mode);
  });
  renderModeContext();
}

function renderGovernance() {
  const governanceGrid = document.getElementById("governanceGrid");
  governanceGrid.innerHTML = governance.map(item => `
    <article class="mini-card">
      <h3>${item.title}</h3>
      <p class="question">${item.question}</p>
      <p>${item.description}</p>
    </article>
  `).join("");
}

function renderExecutionModes() {
  const executionGrid = document.getElementById("executionGrid");
  executionGrid.innerHTML = executionModes.map(mode => `
    <article class="mini-card">
      <h3>${mode.name}</h3>
      <p>${mode.description}</p>
      <dl>
        <div><dt>Output</dt><dd>${mode.output}</dd></div>
        <div><dt>Duración</dt><dd>${mode.duration}</dd></div>
        <div><dt>Jira</dt><dd>${mode.jira}</dd></div>
        <div><dt>Fases recomendadas</dt><dd>${mode.phases.map(phase => phase.label).join(" · ")}</dd></div>
      </dl>
    </article>
  `).join("");
}

document.querySelectorAll("[data-filter]").forEach(button => {
  button.addEventListener("click", () => setActiveFilter(button.dataset.filter));
});

document.querySelectorAll("[data-mode]").forEach(button => {
  button.addEventListener("click", () => setActiveMode(button.dataset.mode));
});

document.querySelectorAll("[data-scroll]").forEach(button => {
  button.addEventListener("click", () => {
    const section = document.getElementById(button.dataset.scroll);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

searchInput.addEventListener("input", event => {
  searchTerm = event.target.value;
  renderCards();
});

closePanel.addEventListener("click", () => {
  panel.classList.remove("open");
  panel.setAttribute("aria-hidden", "true");
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    panel.classList.remove("open");
    panel.setAttribute("aria-hidden", "true");
  }
});

document.getElementById("exportPdrTop").addEventListener("click", () => exportPdr());
document.getElementById("startWorkflow").addEventListener("click", () => openDetail(stages[0]));

renderGovernance();
renderExecutionModes();
renderModeContext();
renderCards();
