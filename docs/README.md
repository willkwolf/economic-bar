# Arquitectura Documental y Marco de Conocimiento
## El Bar Económico: Elixires de la Razón

Este directorio constituye el repositorio canónico de documentación técnica, epistemológica y de gobernanza para **"Elixires de la Razón: El Bar Económico"** (*Elixirs of Reason: The Economic Bar*). 

Siguiendo el estándar de artefactos y ensayos interactivos de divulgación cívica y académica (inspirado en la arquitectura de [isaiah-berlin-liberty-infographic](https://github.com/willkwolf/isaiah-berlin-liberty-infographic)), la documentación está estrictamente segregada en tres pilares cardinales: **Conceptualización Teórica**, **Contratos de Datos y Modelado Matemático**, y **Contratos de Gobierno y Protocolos de Agentes**.

---

## 1. Mapa de Navegación Documental

```
docs/
├── README.md                              <- Portal maestro y guía del corpus documental
│
├── conceptual/                            <- FUNDAMENTOS TEÓRICOS Y ENSAYO ACADÉMICO
│   ├── epistemological_framework.md       <- Tesis epistemológica: Ha-Joon Chang, Isaiah Berlin y Alquimia Conceptual
│   ├── taxonomy_economic_schools.md       <- Las 12 Doctrinas: Axiomas, ABV, pH, Toxicidad y Dimensiones Sensoriales
│   ├── cocktail_doctrinal_blends.md       <- Las 8 Fórmulas de Política Pública y Dialéctica de Crisis de Gabinete
│   └── cognitive_diagnostics.md           <- Motor Psicométrico: Erizos vs. Zorros, Cuadrantes y Calibración Bayesiana
│
├── data/                                  <- CONTRATOS DE DATOS Y FORMULACIÓN MATEMÁTICA
│   ├── data_contracts.md                  <- Esquemas JSON/JS formales e invariantes de estructura (data.js)
│   ├── mathematical_models.md             <- Especificación formal de métricas (HHI, ICC, Similitud Coseno, Radar 2D)
│   └── i18n_governance.md                 <- Contrato de Internacionalización Dual (ES/EN) y Política de Cero Fugas
│
└── governance/                            <- GOBERNANZA DEL SITIO Y PROTOCOLOS DE AGENTES
    ├── website_governance_contracts.md    <- Constitución editorial, gestión de cambios (RFC) y compuertas de calidad
    └── agent_rules.md                     <- Directrices para agentes autónomos de IA (OpenWiki, Claude, Antigravity)
```

---

## 2. Resumen de Pilares

### Pilar I: Conceptualización Teórica (`docs/conceptual/`)
Articula el rigor académico del proyecto, concibiéndolo como un ensayo filosófico interactivo:
* **[Marco Epistemológico](conceptual/epistemological_framework.md):** Fundamenta la economía no como ciencia monotemática, sino como un mosaico de tradiciones pluralistas en tensión dialéctica (tesis de Ha-Joon Chang), articulada con la teoría del conocimiento de Isaiah Berlin.
* **[Taxonomía de Escuelas](conceptual/taxonomy_economic_schools.md):** Fichas analíticas de las 12 escuelas de pensamiento económico, cuantificadas en cuatro dimensiones: Graduación Doctrinal (ABV), Acidez Reguladora (pH), Notas Organolépticas y Toxicidad Colateral.
* **[Cócteles Doctrinales](conceptual/cocktail_doctrinal_blends.md):** Racionalidad histórica y filosófica de las 8 recetas de política pública (*Silicon Valley Sour*, *Socialdemocracia Nórdica*, *Martillo Dialéctico*, etc.).
* **[Diagnóstico Cognitivo](conceptual/cognitive_diagnostics.md):** Modelo de categorización en 4 arquetipos de razonamiento (Erizo Doctrinal, Zorro Sistémico, Erizo Híbrido, Zorro Operativo) y proyección en 4 cuadrantes del espacio socioeconómico.

### Pilar II: Contratos de Datos y Modelado (`docs/data/`)
Separa con total nitidez las estructuras de datos de la prosa explicativa:
* **[Contratos de Datos](data/data_contracts.md):** Especificación estricta de las interfaces de datos expuestas en `data.js` (`SCHOOLS`, `COCKTAILS`, `DIAGNOSTIC_QUESTIONS`, `GLOSSARY`, `TRANSLATIONS`), con reglas de invariancia de masa y suma 1.0.
* **[Modelado Matemático](data/mathematical_models.md):** Deducciones y fórmulas exactas:
  * Índice de Concentración de Herfindahl-Hirschman ($HHI = \sum s_i^2$).
  * Índice de Consistencia Cognitiva ($ICC = 0.6 \cdot \text{CosineSim} + 0.4 \cdot \text{AxisSim}$).
  * Proyección de Vectores en Espacio Polar 2D (Equidad, Mercado, Crecimiento, Estado).
  * Escala Likert de Diferencial Semántico de 7 puntos con suavizado continuo.
* **[Gobernanza de Internacionalización (i18n)](data/i18n_governance.md):** Reglas de paridad semántica entre el español y el inglés, verificación de claves ausentes y estándares tipográficos para evitar saltos de línea antiestéticos.

### Pilar III: Gobernanza y Protocolos de Agentes (`docs/governance/`)
Garantiza la longevidad y mantenimiento automatizado del simulador:
* **[Contratos de Gobierno del Sitio](governance/website_governance_contracts.md):** Procedimientos formales de revisión editorial, compuertas de integración continua (Playwright E2E y baseline visual), y mitigación estricta de sesgos de deseabilidad social.
* **[Reglas de Interacción para Agentes de IA](governance/agent_rules.md):** Manual operativo para herramientas como OpenWiki, Claude, Gemini y Antigravity, definiendo zonas de código de solo lectura, políticas de cero compiladores externos (Vanilla ES6+) y salvaguardas arquitectónicas.

---

## 3. Integración con OpenWiki

El repositorio cuenta con la herramienta de documentación contextual **OpenWiki** instalada en sus dependencias de desarrollo (`package.json`). Los archivos de contexto e instrucciones para agentes inteligentes se encuentran indexados bajo el directorio [`openwiki/`](../openwiki/), asegurando que cualquier modelo o agente que inspeccione este repositorio disponga de verdades fundamentadas (*grounded claims*) y navegación libre de alucinaciones.

---

## 4. Cómo Citar este Artefacto Académico

```bibtex
@software{artunduaga2026bar,
  author = {Artunduaga Viana, William Camilo},
  title = {Elixires de la Razon: El Bar de Escuelas Economicas e Hibridacion Conceptual},
  year = {2026},
  publisher = {GitHub},
  url = {https://github.com/willkwolf/economic-bar},
  note = {Simulador cognitivo interactivo y ensayo de epistemologia economica}
}
```
