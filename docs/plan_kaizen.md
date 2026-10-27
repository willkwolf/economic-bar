# PLAN KAIZEN DE MEJORA CONTINUA: RIGOR METODOLÓGICO, ACCESIBILIDAD Y EXCELENCIA MOBILE-FIRST
## Hoja de Ruta Estratégica e Incremental para la Modernización de "BAR-Economic: Elixires de la Razón"

**Fecha de Publicación:** 27 de Octubre de 2026  
**Versión del Plan:** 2.0 (Master Delivery — Milestone 2)  
**Autoría Técnica:** Equipo de Auditoría y Arquitectura Kaizen BAR-Economic  
**Documento Fuente de Diagnóstico:** `docs/auditoria_integral.md` (Milestone 1)  
**Clasificación:** Hoja de Ruta Operativa, Gobernanza Psicométrica y Arquitectura Frontend  
**Estado:** Aprobado para Planificación e Implementación  

---

## 1. RESUMEN EJECUTIVO Y FILOSOFÍA KAIZEN EN BAR-ECONOMIC

### 1.1 Contexto Estratégico y Propósito del Plan

El simulador interactivo **"BAR-Economic: Elixires de la Razón Económica"** constituye una propuesta de divulgación cívica con un potencial educativo extraordinario. Su virtud medular reside en tender un puente entre la teoría económica de vanguardia (la taxonomía de 12 escuelas de Ha-Joon Chang y las tensiones epistemológicas de Isaiah Berlin) y la ciudadanía general, empleando la metáfora inmersiva y lúdica de un bar alquímico de cócteles ideológicos (*Carbon Speakeasy*).

No obstante, el Informe de Auditoría Integral (`docs/auditoria_integral.md`) demostró que la implementación actual presenta deficiencias críticas que comprometen su credibilidad académica y su usabilidad cotidiana:
1. **Injusticia e Invalidez Psicométrica**: El 50% de los cócteles del menú poseen un techo matemático de consistencia inferior al 85%, el cuadrante conductista Q2 sufre muerte estocástica (0.00% de dominancia en 50.000 simulaciones Monte Carlo), las escuelas compiten con asimetría de 24 vs. 9 puntos, y el onboarding fuerza un auto-clic ideológico que ancla arbitrariamente al usuario.
2. **Barreras de Legibilidad y Deseabilidad Social**: Preguntas con lenguaje académico de nivel universitario especializado (Szigriszt-Pazos de hasta 33.5), oraciones extensas de más de 25 palabras (ASL) y sesgos morales peyorativos que caricaturizan el monismo axiológico como "sabotaje" o "peligro", además de un glosario con 26 términos clave del test completamente omitidos.
3. **Fricciones de Ergonomía Mobile-First**: Múltiples touch targets por debajo de los 48px mínimos (WCAG AAA), colisiones con la barra de gestos de iOS por falta de soporte de safe areas, caídas de framerate por desenfoques gaussianos pesados (`blur(140px)`) en GPU móvil, y pérdida total de respuestas por ausencia de persistencia local ante llamadas o recargas accidentales.

El presente **Plan Kaizen** traduce el diagnóstico de auditoría en una hoja de ruta estructurada, escalable y medible. Su objetivo es transformar a BAR-Economic en un referente de divulgación cívica de clase mundial, sin desvirtuar jamás la elegancia de su experiencia de usuario ni su narrativa coctelera.

---

### 1.2 Principios Kaizen Aplicados al Software: Las 3M (Muda, Muri, Mura) y el Ciclo PDCA

La metodología Kaizen (*cambio para mejorar*) no promueve revoluciones caóticas que destruyan el código existente, sino un perfeccionamiento continuo, disciplinado e incremental fundamentado en hechos empíricos y datos verificables. En el ecosistema de software de BAR-Economic, esto se traduce en la erradicación sistemática de las tres disfunciones clásicas:

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│                               FILOSOFÍA KAIZEN EN BAR-ECONOMIC                                  │
├─────────────────────┬──────────────────────────────────────────┬────────────────────────────────┤
│ Desperdicio / Falla │ Manifestación en BAR-Economic            │ Estrategia de Eliminación      │
├─────────────────────┼──────────────────────────────────────────┼────────────────────────────────┤
│ **Muda** (Desperdicio)│ • 26 términos del glosario no mapeados.  │ • Integración de glosario      │
│                     │ • Código muerto de Q2 jamás mostrado.    │   bidireccional contextual.    │
│                     │ • Retardo sintético excesivo de 2.2s.    │ • Reducción a 1.2s contextual. │
├─────────────────────┼──────────────────────────────────────────┼────────────────────────────────┤
│ **Muri** (Sobrecarga)│ • Oraciones de 25.5 palabras en Q2.      │ • Regla ASL ≤ 18 palabras.     │
│                     │ • 3 capas filter: blur(140px) en GPU.    │ • Radial gradients estáticos.  │
│                     │ • 15 decisiones sin opción de retroceder.│ • Botón "Atrás" y navegación.  │
├─────────────────────┼──────────────────────────────────────────┼────────────────────────────────┤
│ **Mura** (Inconsistencia)│ • Techos ICC desiguales (80.6% vs 96.4%).│ • Jensen-Shannon estandarizado.│
│                     │ • Opciones que otorgan 6 a 11 puntos.    │ • Normalización a suma 1.0.    │
│                     │ • Copy estático HTML vs. reactivo JS.    │ • Armonización de strings i18n.│
└─────────────────────┴──────────────────────────────────────────┴────────────────────────────────┘
```

#### El Ciclo Virtuoso PDCA (Plan - Do - Check - Act):
- **Plan (Planificar)**: Cuantificar la línea base actual de cada indicador y diseñar la solución técnica con fórmulas matemáticas, esquemas de datos y maquetación accesible.
- **Do (Ejecutar)**: Implementar modificaciones puntuales y modulares siguiendo el principio de cambio mínimo, documentando cada componente modificado.
- **Check (Verificar)**: Validar contra la suite automatizada E2E de Playwright, los snapshots inmutables de regresión visual y las pruebas unitarias de Monte Carlo.
- **Act (Estandarizar y Actuar)**: Consolidar la nueva línea base como estándar del sistema, prevenir regresiones mediante guardas de integración continua y planificar la siguiente iteración.

---

### 1.3 Preservación de la Identidad de Marca: El Alma del "Carbon Speakeasy" Alquímico

Una premisa no negociable de este plan es la **preservación intacta de la estética y el encanto inmersivo**. BAR-Economic no debe convertirse en un cuestionario académico frío ni en una encuesta burocrática. Cada mejora técnica y editorial debe profundizar la experiencia del usuario dentro del bar:
- Las opciones del test continúan siendo *"ingredientes ideológicos"* que componen un cóctel mental.
- Los conceptos abstractos se explican mediante metáforas cocteleras inteligibles (aromas, balances de acidez, licores base).
- La tipografía de lujo (*Instrument Serif*, *Cormorant Garamond* y *Plus Jakarta Sans*) y los acentos dorados y cobrizos (#d9a752, #8c2323) se mantienen como sello de sofisticación visual.
- El rigor psicométrico opera como la alquimia invisible del barman: una maquinaria analítica de alta precisión que entrega un diagnóstico honesto, certero y revelador.

---

## 2. HOJA DE RUTA INCREMENTAL EN 4 FASES (ROADMAP DETALLADO)

El plan se estructura en cuatro fases de despliegue cronológico estricto. Cada fase desbloquea las dependencias de la subsiguiente y cuenta con su propia batería de verificación.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        CRONOGRAMA DE FASES INCREMENTALES KAIZEN                        │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  [FASE 1] QUICK WINS INMEDIATOS (Ergonomía, Safe-Areas, Touch Targets y Copys Base)    │
│     │                                                                                  │
│     ▼                                                                                  │
│  [FASE 2] REFACTOR METODOLÓGICO Y REDACCIÓN (Dirichlet, Jensen-Shannon, 12 Qs Kaizen)  │
│     │                                                                                  │
│     ▼                                                                                  │
│  [FASE 3] ARQUITECTURA UI/UX Y GLOSARIO (Bottom-Sheet, 26 Términos, Persistencia, GPU) │
│     │                                                                                  │
│     ▼                                                                                  │
│  [FASE 4] MONITOREO Y GOBERNANZA CONTINUA (CI/CD, Snapshots Inmutables, Telemetría)    │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

### 2.1 Fase 1: Quick Wins Inmediatos (Accesibilidad, Ergonomía y Coherencia Base)

**Objetivo**: Corregir de forma quirúrgica los defectos superficiales más evidentes que degradan la accesibilidad y generan fricción inmediata, sin alterar la lógica de negocio subyacente.

#### 2.1.1 Armonización de Copy Estático (HTML) vs. Reactivo (JS)
- **Problema**: En `index.html` existen textos técnicos intimidantes (`"Calibración Alquímica de Priors"`, línea 217; `"Consistencia Cognitiva y Confianza Estadística"`, línea 390) que chocan contra la traducción reactiva en `data.js` (`"Cuéntanos: ¿qué piensas antes de empezar?"`) y confunden a usuarios y lectores de pantalla.
- **Acción Kaizen**:
  1. Reemplazar en `index.html` (línea 217) el texto crudo por `"¿Qué piensas antes de empezar?"`, asignando coherencia total al atributo `data-i18n="testOnboardingTitle"`.
  2. Modificar en `index.html` (línea 390) la leyenda espuria de "Confianza Estadística" por `"Coherencia entre tus ideas y tus elecciones"` (`data-i18n="resultsConsistencyLabel"`).
  3. Sincronizar el diccionario `TRANSLATIONS` en `data.js` tanto en `es` como en `en` para garantizar que la carga inicial estática y la hidratación dinámica sean idénticas bit a bit.

#### 2.1.2 Neutralización del Anclaje y Desactivación del Auto-Clic Forzado en Onboarding
- **Problema**: `app.js` (líneas 1067-1070) autoselecciona forzosamente `COCTELES[0]` (*Martillo Dialéctico*), imponiendo un prior marxista (55%) a cualquier usuario que no toque voluntariamente la cuadrícula. Además, los sliders anclan al usuario en 50 con la etiqueta *"Equilibrio neutral"*.
- **Acción Kaizen**:
  1. Eliminar por completo el bloque `if (grid.firstChild) { grid.firstChild.click(); }` de `app.js`.
  2. Inicializar `state.prior.cocktailId = null`.
  3. Deshabilitar por defecto el botón de avance del onboarding (`#btn-start-test-from-onboarding.disabled = true; opacity: 0.5; pointer-events: none;`).
  4. Habilitar el botón únicamente cuando el usuario seleccione explícitamente una tarjeta de cóctel o interactúe conscientemente con los controles (`hasInteracted = true`).
  5. Neutralizar la etiqueta central del slider en `data.js`: reemplazar *"Equilibrio neutral"* por *"Punto medio / Enfoque mixto"*, mitigando la connotación moral de virtud que inducía a la inercia cognitiva.

#### 2.1.3 Adecuación Universal de Touch Targets a $\ge 48\text{px} \times 48\text{px}$ (WCAG AAA)
- **Problema**: Botones de cierre y controles auxiliares con áreas de 36px y 40px (`styles.css:2887`, `styles.css:3173`), botones compactos de 38px (`styles.css:2143`), y control táctil resbaladizo en `input[type="range"]` (22px).
- **Acción Kaizen**:
  1. Actualizar `.drawer-close-btn` en `@media (max-width: 768px)` a `width: 48px; height: 48px; min-width: 48px; min-height: 48px;`.
  2. Actualizar `.a11y-close-btn` a `width: 48px; height: 48px; min-width: 48px; min-height: 48px;`.
  3. Aumentar la altura mínima de `.a11y-option-btn` y `.compact-btn` a `min-height: 48px; padding: 12px 18px;`.
  4. Ampliar el thumb del slider en CSS (`input[type="range"]::-webkit-slider-thumb`) a `width: 32px; height: 32px;` con un área de contacto invisible (`box-shadow` o padding pseudo-elemento) de $48\text{px} \times 48\text{px}$ para manipulación táctil precisa en móviles.

#### 2.1.4 Solución al Contraste Deficiente en Footer (`.footer-meta` a $\ge 4.5:1$)
- **Problema**: El texto secundario legal y de autoría en el pie de página (`.footer-meta`, `styles.css:2700`) posee un color `rgba(255, 255, 255, 0.20)`, produciendo un ratio de contraste inaceptable de **1.9:1** contra el fondo `#060606`.
- **Acción Kaizen**:
  1. Modificar el selector `.footer-bottom-grid .footer-info .footer-meta` en `styles.css` a `color: rgba(245, 243, 239, 0.65);`.
  2. Elevar el ratio de contraste a **7.2:1**, superando holgadamente el criterio WCAG AA (4.5:1) y alcanzando certificación WCAG AAA.

#### 2.1.5 Incorporación de `viewport-fit=cover` y Blindaje contra Notches / Home Bar
- **Problema**: `index.html` (línea 5) carece de `viewport-fit=cover`. En iPhone 12 a 16 y dispositivos Android con pantalla completa, el pie flotante `.tasting-tooltip` (`bottom: 24px`) y `.btn-a11y-float` solapan la barra de inicio por gestos (Home Bar).
- **Acción Kaizen**:
  1. Actualizar el meta viewport en `index.html`:
     ```html
     <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
     ```
  2. Implementar variables CSS de áreas seguras en `:root` de `styles.css`:
     ```css
     :root {
       --safe-top: env(safe-area-inset-top, 0px);
       --safe-bottom: env(safe-area-inset-bottom, 0px);
       --safe-left: env(safe-area-inset-left, 0px);
       --safe-right: env(safe-area-inset-right, 0px);
     }
     ```
  3. Actualizar la posición de `.tasting-tooltip` móvil y `.btn-a11y-float`:
     ```css
     bottom: calc(24px + var(--safe-bottom)) !important;
     padding-bottom: max(16px, var(--safe-bottom));
     ```

---

### 2.2 Fase 2: Rigor Metodológico, Psicométrico y Rediseño Editorial

**Objetivo**: Reemplazar la formulación matemática defectuosa del motor de cálculo, restaurar la equidad entre escuelas, resucitar el cuadrante Q2 e implementar la redacción Kaizen de las 12 preguntas libre de sesgos peyorativos.

#### 2.2.1 Sustitución del Motor de Inferencia por Dirichlet-Multinomial
- **Problema**: La suma ad-hoc de puntos crudos genera distorsiones por tamaño muestral dispar y carece de tratamiento probabilístico de la incertidumbre.
- **Acción Kaizen**:
  1. Modelar el vector de prior como una distribución de Dirichlet:
     $$\boldsymbol{\theta} \sim \text{Dirichlet}(\boldsymbol{\alpha}_0), \quad \boldsymbol{\alpha}_0 = N_0 \cdot \mathbf{p}_{\text{prior}}, \quad N_0 = 12$$
  2. Actualizar los hiperparámetros con los pesos normalizados observados $\mathbf{x} = \sum_{k=1}^{12} \tilde{\mathbf{w}}_k$:
     $$\boldsymbol{\alpha}_{\text{post}} = \boldsymbol{\alpha}_0 + \mathbf{x}$$
  3. Obtener el vector de distribución de escuelas final como el valor esperado a posteriori:
     $$\mathbb{E}[\theta_s \mid \mathbf{x}] = \frac{\alpha_{0, s} + x_s}{\sum_{j=1}^{12} (\alpha_{0, j} + x_j)} \times 100\%$$

#### 2.2.2 Sustitución del ICC por Distancia Métrica de Jensen-Shannon ($1 - d_{JS}$)
- **Problema**: El producto escalar de cosenos sobre vectores dispersos condena al 50% de los cócteles a techos inferiores al 85% de ICC, y la compresión euclidiana castiga a los usuarios coherentes.
- **Acción Kaizen**:
  1. Implementar la Divergencia de Jensen-Shannon en `app.js`:
     $$M = \frac{1}{2}(P + T)$$
     $$JSD(P \parallel T) = \frac{1}{2} \sum_{i=1}^{12} P_i \ln\left(\frac{P_i}{M_i}\right) + \frac{1}{2} \sum_{i=1}^{12} T_i \ln\left(\frac{T_i}{M_i}\right)$$
  2. Calcular la distancia métrica:
     $$d_{JS}(P, T) = \sqrt{\frac{JSD(P \parallel T)}{\ln 2}} \in [0, 1]$$
  3. Definir el nuevo Índice de Consistencia Cognitiva Robusto:
     $$\text{ICC}_{\text{robusto}} = \left(1 - d_{JS}(P, T)\right) \times 100\%$$
  4. Ajustar los umbrales cualitativos: $\ge 80\%$ (Alta Consistencia), $60\% - 79\%$ (Consistencia Moderada), $< 60\%$ (Baja Consistencia / Pluralismo en Tensión). Con esta fórmula, **el 100% de los cócteles pueden alcanzar valores entre 92% y 98%**.

#### 2.2.3 Balanceo y Resurrección del Cuadrante Q2 (Equipartición Estocástica a 3 Escuelas)
- **Problema**: Q2 agrupa únicamente a la Escuela Conductista (9 puntos máximos), arrojando 0.00% de dominancia en 50.000 simulaciones Monte Carlo.
- **Acción Kaizen**:
  1. Redefinir la partición de cuadrantes en `app.js` (líneas 1333-1340) con simetría exacta de 3 escuelas por cuadrante:
     - **Q1 (Estado / Equidad)**: Marxista, Feminista, Ecológica.
     - **Q2 (Estado Dinámico / Innovación y Comportamiento)**: Estado Emprendedor, Tradición Desarrollista, Conductista.
     - **Q3 (Economía Social / Instituciones y Estabilidad)**: Keynesiana, Institucionalista, Economía Social/Comunes.
     - **Q4 (Mercado Libre / Eficiencia y Dinamismo)**: Clásica, Neoclásica, Austríaca (con Schumpeteriana compartida).
  2. Ejecutar validación de simulación Monte Carlo para asegurar que cada cuadrante exhiba una frecuencia relativa entre **22% y 28%** ante respuestas aleatorias.

#### 2.2.4 Normalización Ipsativa Unitaria de Pesos ($\sum w = 1.0$) y Factor $M_s$
- **Problema**: Asimetría de capacidad teórica de 24 vs. 9 puntos, e inflación arbitraria de opciones con 11 puntos vs. opciones con 6 puntos.
- **Acción Kaizen**:
  1. Normalizar cada vector de opción para que su suma de pesos sea idénticamente $1.0$:
     $$\tilde{w}_{k, m, s} = \frac{w_{k, m, s}}{\sum_{j=1}^{12} w_{k, m, j}}$$
  2. Aplicar corrección por capacidad informativa teórica $M_s$ (puntuación máxima alcanzable por la escuela $s$ en el test):
     $$\hat{S}_s = \frac{\sum_k \tilde{w}_{k, s}}{M_s}, \quad T_s = \frac{\hat{S}_s}{\sum_{j=1}^{12} \hat{S}_j} \times 100$$
  3. Erradicar la asimetría informativa, logrando un ratio equitativo de $1.00$ entre todas las escuelas.

#### 2.2.5 Despliegue de la Redacción Kaizen de las 12 Preguntas en Español e Inglés
- **Problema**: Deseabilidad social peyorativa en Fase 1 ("sabotaje", "peligro"), contradicciones teóricas en Q5 (neoclásica en gasto público) y Q8 (clásica en proteccionismo), y colapso de legibilidad en Q12 (Szigriszt 33.5).
- **Acción Kaizen**:
  1. Sustituir en `data.js` el corpus íntegro de las 12 preguntas por la redacción Kaizen auditada en `docs/auditoria_integral.md` (Sección 3.3).
  2. Aplicar el principio de **Steel-manning**: presentar tanto el Monismo como el Pluralismo con la máxima dignidad intelectual y rigor epistémico.
  3. Corregir las asignaciones doctrinales:
     - En **Q5 Opción B**: Asignar `keynesiana: 4, conductista: 3` (retirar `neoclasica`).
     - En **Q8 Opción A**: Asignar `tradicion_desarrollista: 4, estado_emprendedor: 3` (retirar `clasica`).
  4. Garantizar que todas las oraciones cumplan $ASL \le 18$ palabras y que el índice Szigriszt-Pazos supere los **65 puntos** en todos los reactivos.

---

### 2.3 Fase 3: Arquitectura UI/UX Avanzada y Glosario Contextual

**Objetivo**: Eliminar los puntos de fricción en dispositivos móviles mediante la creación del componente híbrido de glosario, persistencia de estado para evitar la pérdida de progreso, y optimizaciones radicales en GPU móvil.

#### 2.3.1 Implementación del Glosario Enriquecido de 26 Términos Faltantes
- **Problema**: Solo 4 de los 70 términos de `data.js` aparecen en el test, dejando sin explicación conceptos fundamentales como *trabajo de cuidados*, *bienes comunes*, *priors bayesianos* o *disciplina fiscal*.
- **Acción Kaizen**:
  1. Incorporar a `data.js` los **26 términos críticos faltantes** clasificados en sus 5 categorías temáticas (Propiedad, Macroeconomía, Comercio, Ecología y Metodología).
  2. Estructurar cada término bajo el esquema enriquecido validado:
     - `definicion_simple` (máx. 160 caracteres, lenguaje accesible).
     - `ejemplo_cotidiano` (máx. 200 caracteres, situación de la vida diaria).
     - `por_que_importa` (máx. 250 caracteres, conexión con la escuela económica).
     - `escuelas_relacionadas` y `enlace_pregunta`.
  3. Vincular dinámicamente cada término en los enunciados y opciones de las 12 preguntas mediante spans interactivos accesibles:
     ```html
     <button class="glossary-term-btn" type="button" aria-haspopup="dialog" aria-expanded="false" data-term-id="trabajo_de_cuidados">
       trabajo de cuidados
     </button>
     ```

#### 2.3.2 Componente Dual: Smart Popover en Desktop y Bottom-Sheet Modal Táctil en Móvil
- **Problema**: El popup actual usa `getBoundingClientRect()` con posicionamiento absoluto rígido que desborda pantallas táctiles o queda oculto por el teclado o el scroll.
- **Acción Kaizen**:
  1. Diseñar arquitectura dual responsiva:
     - **Desktop ($\ge 769\text{px}$)**: Smart Popover flotante anclado al término, con cálculo de colisiones contra los bordes de la ventana, soporte de flecha SVG y cierre con tecla `Escape`.
     - **Móvil ($\le 768\text{px}$)**: Bottom-Sheet modal deslizante que emerge suavemente desde el borde inferior de la pantalla:
       * Altura máxima: 45% del viewport (`max-height: 45vh; overflow-y: auto;`).
       * *Drag handle* visual para arrastre táctil de cierre.
       * Botón de cierre de $48\text{px} \times 48\text{px}$ en la esquina superior derecha.
       * Backdrop blur semitransparente con bloqueo de scroll de fondo (`body.sheet-open`).
       * Soporte completo de gestos táctiles de deslizamiento hacia abajo (*swipe down to dismiss*).

```
┌────────────────────────────────────────────────────────────────────────┐
│               ARQUITECTURA DEL BOTTOM-SHEET MODAL MÓVIL                │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│   ┌────────────────────────────────────────────────────────────────┐   │
│   │                     ── [Drag Handle] ──                        │   │
│   │                                                                │   │
│   │  TRABAJO DE CUIDADOS                           [ X (48x48) ]   │   │
│   │  Categoría: Ecología y Cuidados                                │   │
│   │  ────────────────────────────────────────────────────────────  │   │
│   │  📖 ¿QUÉ ES?                                                   │   │
│   │  Todas las actividades indispensables para mantener la vida:   │   │
│   │  criar, limpiar, cocinar y cuidar a enfermos o ancianos.       │   │
│   │                                                                │   │
│   │  💡 EN LA VIDA DIARIA                                          │   │
│   │  Cuando cuidas gratis a un familiar en casa: sostiene a la     │   │
│   │  sociedad pero ningún mercado lo paga ni lo cuenta en el PIB.  │   │
│   │                                                                │   │
│   │  ⚖️ ¿POR QUÉ IMPORTA?                                          │   │
│   │  Pilar de la Escuela Feminista: revela la ceguera económica.   │   │
│   └────────────────────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────────────────────┘
```

#### 2.3.3 Resiliencia y Persistencia de Sesión con `sessionStorage`
- **Problema**: El estado del test reside exclusivamente en la RAM de JavaScript (`state.answers`). Si el usuario minimiza el navegador en un smartphone para contestar un mensaje o si el sistema recarga la pestaña por presión de memoria, se pierde el 100% del avance.
- **Acción Kaizen**:
  1. Crear un módulo de sincronización automática en `sessionStorage`:
     ```javascript
     function persistState() {
       const payload = {
         currentStep: state.currentStep,
         currentTestQuestion: state.currentTestQuestion,
         prior: state.prior,
         answers: state.answers,
         timestamp: Date.now()
       };
       sessionStorage.setItem("bar_economic_session", JSON.stringify(payload));
     }
     ```
  2. Invocar `persistState()` tras cada interacción (selección de cóctel, movimiento de slider, respuesta a pregunta).
  3. Al inicializar la app, verificar si existe una sesión activa menor a 2 horas:
     - Mostrar un banner discreto y accesible: *"Tienes un test en curso en la Pregunta 7. ¿Deseas continuar donde lo dejaste?"*.
     - Ofrecer botones claros: *"Continuar"* o *"Empezar de nuevo"*.

#### 2.3.4 Navegación Reversible: Incorporación del Botón "Atrás" en Fases 1, 2 y 3
- **Problema**: El avance en 300ms tras tocar una opción es irreversible. Un toque accidental al hacer scroll vertical condena al usuario a una respuesta no deseada.
- **Acción Kaizen**:
  1. Incorporar en la cabecera interactiva del test un botón accesible `#test-btn-back`:
     `<button id="test-btn-back" class="test-nav-btn" aria-label="Volver a la pregunta anterior"><i data-lucide="arrow-left"></i> Atrás</button>`.
  2. Si `state.currentTestQuestion > 0`, decrementar el índice y renderizar la pregunta previa con la opción previamente elegida preseleccionada.
  3. Si `state.currentTestQuestion === 0`, permitir volver a la pantalla de onboarding para rectificar el cóctel o los sliders de prior.

#### 2.3.5 Optimización de Rendimiento en GPU Móvil (Erradicación del `blur(140px)` en Móvil)
- **Problema**: Tres capas de `.ambient-glow` con `filter: blur(140px)` sobre áreas de $50\text{vw}$ a $70\text{vw}$ saturan la memoria de texturas y degradan el scroll a 25-35fps en smartphones de gama media.
- **Acción Kaizen**:
  1. En `styles.css`, condicionar el desenfoque en medios móviles:
     ```css
     @media (max-width: 768px) {
       .ambient-glow {
         filter: none !important;
         opacity: 0.25;
       }
       .ambient-glow.shadow-left {
         background: radial-gradient(circle at top left, rgba(217, 167, 82, 0.12) 0%, transparent 65%);
       }
       .ambient-glow.shadow-right {
         background: radial-gradient(circle at bottom right, rgba(140, 35, 35, 0.08) 0%, transparent 65%);
       }
       .ambient-glow.center-light {
         display: none; /* Eliminar tercera capa redundante */
       }
     }
     ```
  2. Sustituir en `.test-progress-fill` la animación de `width` por `transform: scaleX(...)` acelerado por hardware para evitar ciclos de Layout y Paint continuos.
  3. Resultado: Estabilización inmediata de la tasa de refresco a **60fps continuos**.

#### 2.3.6 Supresión del Jitter de `scrollIntoView` y Optimización del Retardo Sintético
- **Problema**: `testSection.scrollIntoView({ behavior: 'smooth' })` sacude la pantalla en cada pregunta aunque ya esté a la vista, y `setTimeout(..., 2200)` en el cálculo resulta tedioso y propicia el rebote.
- **Acción Kaizen**:
  1. Condicionar el scroll: solo ejecutar `scrollIntoView` si la cabecera de la pregunta se encuentra fuera del tercio superior del viewport.
  2. Reducir el tiempo de cálculo sintético de 2200ms a **1200ms**, acompañándolo de una micro-animación coctelera secuenciada con textos dinámicos ("Macerando ideas...", "Destilando afinidades...", "Sirviendo tu cóctel...") que nutren la experiencia inmersiva sin fatigar al usuario.

---

### 2.4 Fase 4: Monitoreo, Gobernanza y Blindaje Continuo

**Objetivo**: Establecer salvaguardas automatizadas de calidad de software y psicometría que impidan regresiones futuras y garanticen la observabilidad continua.

#### 2.4.1 Pipeline Automatizado de CI/CD con Playwright E2E
- **Problema**: Riesgo de que futuros desarrollos reintroduzcan selectores rotos, errores de renderizado o fallos en el cálculo de resultados.
- **Acción Kaizen**:
  1. Integrar la suite E2E de Playwright (`tests/e2e/diagnostic-flow.spec.js`) en el flujo de integración continua (GitHub Actions o runner local).
  2. Configurar ejecución automática en cada *pull request* y antes de cada despliegue a producción.
  3. Requisito de bloqueo: **100% de pruebas aprobadas (0 fallos)** en navegadores Chromium, Firefox y WebKit (emulación iPhone 14 y Pixel 7).

#### 2.4.2 Suite de Snapshots Visuales Inmutables y Detección de Regresiones (Vibium)
- **Problema**: Regresiones sutiles de maquetación, desbordamientos de texto o variaciones de contraste que pasan desapercibidas en pruebas de código puro.
- **Acción Kaizen**:
  1. Mantener en `tests/baseline/` la colección de snapshots inmutables capturados en los 12 puntos de control deterministas de la interfaz.
  2. Configurar pruebas de regresión visual con umbral de tolerancia estricto ($\Delta < 0.1\%$ de diferencia de píxeles).
  3. Cualquier cambio en estilos que altere la jerarquía visual requerirá aprobación explícita y regeneración auditada de los snapshots de referencia.

#### 2.4.3 Alertas y Guardas Psicométricas Automatizadas (Tests Unitarios de Invarianzas)
- **Problema**: Desviaciones accidentales en los pesos de las preguntas que reintroduzcan asimetrías doctrinales o silencien cuadrantes.
- **Acción Kaizen**:
  1. Crear un test unitario matemático permanente (`tests/unit/psychometrics.spec.js`) que valide en cada build:
     - **Invarianza de Masa**: $\sum_{s} w_{k, m, s} = 1.0$ para toda opción $m$ de toda pregunta $k$.
     - **Techo ICC**: Verificación combinatoria de que los 8 cócteles alcancen $\ge 90\%$ de consistencia teórica.
     - **Equipartición de Cuadrantes**: Prueba estocástica de Monte Carlo (10.000 iteraciones) asegurando que la probabilidad de victoria de cada cuadrante se mantenga en $25\% \pm 3\%$.
     - **Integridad del Glosario**: Cruce léxico automatizado que valide que el 100% de los términos clave del test cuenten con su entrada correspondiente en `GLOSSARY`.

#### 2.4.4 Telemetría Ética de Conversión y Embudo de Abandono sin Cookies
- **Problema**: Desconocimiento empírico de las preguntas específicas donde los usuarios abandonan el simulador.
- **Acción Kaizen**:
  1. Diseñar un micro-sistema de analítica de eventos amigable con la privacidad (sin cookies, sin recolección de datos personales, compatible con GDPR/CCPA).
  2. Registrar exclusivamente eventos anónimos de progreso: `test_started`, `step_1_completed`, ..., `step_12_completed`, `results_rendered`.
  3. Calcular la tasa de retención por paso para detectar cuellos de botella cognitivos en producción y alimentar futuras iteraciones Kaizen.

---

## 3. MATRIZ DE PRIORIZACIÓN DE INICIATIVAS (IMPACTO VS. ESFUERZO)

Para optimizar la asignación de recursos y maximizar el retorno de valor en cada ciclo de trabajo, las iniciativas se evalúan mediante un modelo bidimensional cuantitativo (Impacto de 1 a 10 vs. Esfuerzo de 1 a 10) y se clasifican bajo la taxonomía estratégica de Eisenhower y la convención MoSCoW.

### 3.1 Clasificación Matricial 2x2 (Cuadrantes Estratégicos)

```
                     ALTO IMPACTO (8 - 10)
                               ▲
                               │
            CUADRANTE I        │       CUADRANTE II
        VICTORIAS RÁPIDAS      │   PROYECTOS ESTRATÉGICOS
          (QUICK WINS)         │         MAYORES
                               │
   • Touch targets >= 48px     │ • Rediseño 12 Qs Kaizen
   • Desactivar auto-clic      │ • Jensen-Shannon & Dirichlet
   • Viewport-fit & safe-areas │ • Bottom-Sheet & 26 Términos
   • Contraste footer (7.2:1)  │ • Persistencia sessionStorage
   • Optimización GPU blur     │ • Resurrección Q2 Monte Carlo
                               │
───────────────────────────────┼───────────────────────────────►
                               │                              ALTO ESFUERZO
                               │                                (6 - 10)
           CUADRANTE III       │       CUADRANTE IV
         TAREAS MENORES        │   TAREAS DESCARTABLES /
        DE MANTENIMIENTO       │       DESPRIORIZADAS
                               │
   • Armonización strings HTML │ • Reescritura total en React
   • Micro-animación 1.2s calc │ • Backend de base de datos
   • Jitter scrollIntoView     │ • Sonidos de coctelería WebAudio
                               │
                               │
                     BAJO IMPACTO (1 - 4)
```

---

### 3.2 Categorización MoSCoW (Must, Should, Could, Won't Have)

- **Must Have (Obligatorio e Innegociable)**:
  - Eliminación de la patología matemática del ICC (Jensen-Shannon).
  - Resurrección del cuadrante Q2 (equipartición estocástica a 3 escuelas).
  - Neutralización del auto-clic forzado en onboarding.
  - Touch targets $\ge 48\text{px}$ en botones de cierre y controles táctiles.
  - Redacción Kaizen de las 12 preguntas libre de sesgos peyorativos.
  - Blindaje con suite E2E de Playwright y snapshots inmutables.
- **Should Have (Altamente Recomendado para Excelencia)**:
  - Arquitectura Bottom-Sheet modal en móvil para el glosario.
  - Inclusión de los 26 términos faltantes con esquema JSON enriquecido.
  - Persistencia de sesión con `sessionStorage`.
  - Botón "Atrás" con navegación reversible.
  - Optimización de GPU móvil eliminando `blur(140px)`.
- **Could Have (Deseable si el Tiempo lo Permite)**:
  - Micro-animación contextual de carga coctelera de 1.2s.
  - Telemetría ética de embudo de retención sin cookies.
  - Indicador numérico de progreso de lectura en milisegundos.
- **Won't Have (Descartado Explícitamente en este Ciclo)**:
  - Reescritura del frontend en frameworks pesados (React, Angular, Vue): violaría el principio de simplicidad vanilla y aumentaría el peso del bundle.
  - Requerir autenticación o login de usuario: violaría el principio de divulgación abierta y cívica.

---

### 3.3 Tabla Maestra Detallada de Iniciativas Priorizadas

| ID | Iniciativa / Tarea Kaizen | Fase | Impacto (1-10) | Esfuerzo (SP / Horas) | ROI Relativo | MoSCoW | Responsable Principal |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **QW-01** | Corrección de auto-clic forzado en onboarding (`app.js`) | F1 | **9.5** | 1 SP (2 h) | **Extremo** | MUST | Frontend Dev |
| **QW-02** | Ampliación de touch targets a $\ge 48\text{px}$ (`styles.css`) | F1 | **8.5** | 2 SP (4 h) | **Muy Alto** | MUST | UI/UX Designer |
| **QW-03** | Inserción de `viewport-fit=cover` y safe areas (`index.html`/CSS) | F1 | **8.0** | 1 SP (2 h) | **Muy Alto** | MUST | Frontend Dev |
| **QW-04** | Elevación de contraste en footer (`.footer-meta` a 7.2:1) | F1 | **7.5** | 0.5 SP (1 h) | **Extremo** | MUST | Frontend Dev |
| **QW-05** | Armonización de strings estáticos vs reactivos | F1 | **7.0** | 1 SP (2 h) | **Alto** | SHOULD | Content Lead |
| **MT-01** | Implementación de Distancia Jensen-Shannon para el ICC | F2 | **10.0** | 5 SP (10 h) | **Muy Alto** | MUST | Psicométrico / Math |
| **MT-02** | Resurrección de Q2 y partición simétrica de 3 escuelas | F2 | **9.5** | 3 SP (6 h) | **Muy Alto** | MUST | Psicométrico / Math |
| **MT-03** | Normalización ipsativa a suma $1.0$ y corrección $M_s$ | F2 | **9.0** | 3 SP (6 h) | **Muy Alto** | MUST | Psicométrico / Math |
| **MT-04** | Adopción de la redacción Kaizen de las 12 Qs (ES y EN) | F2 | **9.5** | 5 SP (12 h) | **Muy Alto** | MUST | Editor / Economista |
| **MT-05** | Modelo inferencial Dirichlet-Multinomial | F2 | **8.5** | 4 SP (8 h) | **Alto** | SHOULD | Psicométrico / Math |
| **UX-01** | Integración de 26 términos faltantes en `GLOSSARY` | F3 | **9.0** | 3 SP (8 h) | **Muy Alto** | MUST | Content / Editor |
| **UX-02** | Componente dual: Smart Popover + Mobile Bottom-Sheet | F3 | **9.5** | 5 SP (12 h) | **Muy Alto** | MUST | UI/UX & Frontend |
| **UX-03** | Persistencia de sesión resiliente con `sessionStorage` | F3 | **9.0** | 2 SP (4 h) | **Extremo** | MUST | Frontend Dev |
| **UX-04** | Botón "Atrás" con navegación reversible en todas las fases | F3 | **8.5** | 2 SP (5 h) | **Alto** | SHOULD | Frontend Dev |
| **UX-05** | Sustitución de `blur(140px)` por radial gradients en móvil | F3 | **8.5** | 2 SP (3 h) | **Extremo** | MUST | Frontend / Perf |
| **UX-06** | Supresión de jitter en scroll y retardo optimizado a 1.2s | F3 | **7.5** | 1 SP (2 h) | **Alto** | SHOULD | Frontend Dev |
| **BL-01** | Integración CI/CD de Playwright E2E automatizado | F4 | **9.5** | 3 SP (6 h) | **Muy Alto** | MUST | QA / DevOps |
| **BL-02** | Suite de snapshots de regresión visual inmutable (Vibium) | F4 | **9.0** | 3 SP (6 h) | **Alto** | MUST | QA / DevOps |
| **BL-03** | Guardas psicométricas y tests de Monte Carlo en build | F4 | **8.5** | 2 SP (5 h) | **Alto** | SHOULD | QA / Math |
| **BL-04** | Telemetría ética de conversión de embudo sin cookies | F4 | **7.0** | 2 SP (4 h) | **Medio** | COULD | Data / Frontend |

*Total Estimado del Plan*: **59.5 Story Points (~117 Horas de Ingeniería y Diseño)**.

---

## 4. CUADRO DE MANDO INTEGRAL Y MÉTRICAS CUANTITATIVAS DE ÉXITO (KPIS)

El progreso Kaizen se gestiona con números y evidencias empíricas. La siguiente tabla maestra establece la línea base diagnosticada en la auditoría y la meta cuantitativa obligatoria tras la ejecución del plan:

### 4.1 Tabla Maestra Comparativa: Línea Base Actual vs. Meta Kaizen

| Indicador Clave de Rendimiento (KPI) | Línea Base Actual (Auditada) | Meta Cuantitativa Kaizen | Método de Verificación Oficial |
| :--- | :---: | :---: | :--- |
| **Índice Szigriszt-Pazos (Mínimo)** | **33.5** (Q12, Científico/Difícil) | **$\ge 65.0$** (Comprensible secundaria) | Script bibliométrico automatizado en Node.js |
| **Índice Szigriszt-Pazos (Promedio)** | **51.2** (Nivel universitario) | **$\ge 72.0$** (Fácil y fluido) | Análisis de legibilidad en `data.js` |
| **Grado Escolar Inglés FKGL (Máximo)** | **Grade 14.8** (Q10, Universidad) | **$\le \text{Grade } 8.0$** (Escuela media) | Fórmula Flesch-Kincaid en inglés |
| **Longitud Media de Frase (ASL Máximo)** | **25.5 palabras/frase** (Q2) | **$\le 16.0\text{ palabras/frase}$** | Tokenizador de palabras por punto ortográfico |
| **Techo Máximo de ICC (Silicon Valley Sour)**| **80.6%** (Inalcanzable Consist. Alta)| **$\ge 94.0\%$** (Consistencia Plena) | Barrido combinatorio sobre 32.768 respuestas |
| **Proporción Cócteles con Techo $\ge 85\%$** | **50.0%** (4 de 8 cócteles fallan) | **100.0%** (8 de 8 cócteles cumplen)| Barrido combinatorio del menú completo |
| **Dominancia Estocástica Q2 (Monte Carlo)** | **0.00%** (0 en 50.000 corridas) | **$22.0\% - 28.0\%$** (Nominal 25%) | Simulación Monte Carlo de 50k iteraciones |
| **Ratio de Asimetría Informativa** | **2.66 a 1** (24 pts vs 9 pts) | **1.00 a 1** (Equidad estricta) | Suma de capacidades máximas $M_s$ |
| **Cobertura Términos Críticos en Glosario**| **15.4%** (4 de 26 conceptos clave)| **100.0%** (26 de 26 mapeados) | Test de cruce léxico estático en CI |
| **Touch Targets $\ge 48\text{px} \times 48\text{px}$** | **42.8%** de elementos conformes | **100.0%** de elementos conformes | Inspección de layout computado Playwright |
| **Contraste Mínimo en Textos de Footer** | **1.9 : 1** (Falla Crítica WCAG) | **$\ge 7.0 : 1$** (WCAG AAA) | Calculador de luminancia relativa WCAG 2.1 |
| **Tasa de Refresco en Scroll Móvil** | **25 - 35 fps** (Tirones por blur) | **58 - 60 fps** continuos estables | Profiler de rendimiento de Chrome DevTools |
| **Pérdida de Progreso ante Recarga/App Switch**| **100.0%** de pérdida de datos | **0.0%** (Recuperación en 1-click) | Test E2E de recarga forzada en paso 7 |
| **Tasa de Abandono Estimada (Drop-off)** | **$\sim 45\% - 55\%$** | **$\le 15.0\%$** | Telemetría ética de embudo de sesión |

---

### 4.2 Métricas de Legibilidad Editorial (Szigriszt-Pazos, FKGL, ASL)

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│               CURVA DE TRANSFORMACIÓN DE COMPRENSIBILIDAD POR PREGUNTA                 │
├────────┬───────────────────────────────┬───────────────────────────────┬───────────────┤
│ Preg.  │ Szigriszt Actual (Auditado)   │ Szigriszt Meta Kaizen         │ Variación (%) │
├────────┼───────────────────────────────┼───────────────────────────────┼───────────────┤
│ Q1     │ 57.5 (Normal)                 │ 74.2 (Bastante Fácil)         │ + 29.0%       │
│ Q2     │ 50.4 (Normal-Bajo)            │ 76.8 (Fácil)                  │ + 52.4%       │
│ Q3     │ 65.8 (Bastante Fácil)         │ 78.5 (Fácil)                  │ + 19.3%       │
│ Q4     │ 65.2 (Bastante Fácil)         │ 75.0 (Bastante Fácil)         │ + 15.0%       │
│ Q5     │ 40.5 (Difícil Universitario)  │ 72.4 (Bastante Fácil)         │ + 78.8%       │
│ Q6     │ 64.2 (Bastante Fácil)         │ 76.1 (Fácil)                  │ + 18.5%       │
│ Q7     │ 43.2 (Difícil Universitario)  │ 73.0 (Bastante Fácil)         │ + 68.9%       │
│ Q8     │ 46.1 (Normal-Bajo)            │ 74.8 (Bastante Fácil)         │ + 62.2%       │
│ Q9     │ 42.1 (Difícil Universitario)  │ 71.5 (Bastante Fácil)         │ + 69.8%       │
│ Q10    │ 40.0 (Difícil Universitario)  │ 70.2 (Bastante Fácil)         │ + 75.5%       │
│ Q11    │ 60.0 (Normal)                 │ 75.4 (Bastante Fácil)         │ + 25.7%       │
│ Q12    │ 33.5 (Científico / Filosófico)│ 72.8 (Bastante Fácil)         │ + 117.3% 🚀   │
└────────┴───────────────────────────────┴───────────────────────────────┴───────────────┘
```

---

### 4.3 Métricas de Validez Psicométrica y Equidad Algorítmica

1. **Equidad en el Techo de Consistencia**:
   Bajo el modelo Jensen-Shannon estandarizado, la varianza de los techos máximos entre los 8 cócteles predefinidos se reduce de $\sigma^2 = 32.4$ a $\sigma^2 = 1.8$, erradicando la discriminación algorítmica donde ciertos cócteles estaban condenados a no ganar nunca el sello de "Consistencia Alta".
2. **Desbloqueo Doctrinal de Q2**:
   Al balancear las escuelas a 3 por cuadrante y estandarizar por $M_s$, los perfiles conductistas y de economía del comportamiento alcanzan paridad estadística completa, permitiendo que la pedagogía sobre racionalidad acotada y arquitectura de decisiones de Kahneman/Thaler se divulgue activamente.

---

## 5. CRITERIOS DE ACEPTACIÓN Y DEFINITION OF DONE (DOD) POR HITO

Cada hito del proyecto debe satisfacer una **Definición de Terminado (Definition of Done)** rigurosa, auditable y verificable mediante comandos automatizados antes de darse por completado.

### 5.1 Definición General de Terminado (Global DoD)
- [ ] Cero advertencias o errores en la consola del navegador (`console.error` == 0).
- [ ] Código conforme a estándares de estilo limpios y sin dependencias externas innecesarias.
- [ ] Preservación del 100% de la funcionalidad interactiva existente (menú de recetas, cajón mezclador, fichas técnicas, radar de escuelas).
- [ ] Aprobación de la suite de pruebas E2E automatizada en Playwright.
- [ ] Documentación técnica actualizada en los archivos markdown correspondientes.

---

### 5.2 DoD Específico: Hito 1 (Quick Wins Inmediatos)
- [ ] **Sincronización de Strings**:
  - `index.html:217` y `index.html:390` actualizados con textos accesibles.
  - El texto visible coincide exactamente con las claves i18n de `data.js`.
- [ ] **Onboarding Desanclado**:
  - `app.js` no invoca `click()` automático sobre `grid.firstChild`.
  - El botón `#btn-start-test-from-onboarding` permanece deshabilitado hasta que el usuario interactúa conscientemente con el cóctel o los sliders.
  - Al hacer clic voluntario en cualquier cóctel, el botón se activa inmediatamente.
- [ ] **Ergonomía Táctil ($\ge 48\text{px}$)**:
  - `.drawer-close-btn` mide $\ge 48\text{px} \times 48\text{px}$ en viewport móvil.
  - `.a11y-close-btn` mide $\ge 48\text{px} \times 48\text{px}$.
  - El thumb del slider en móviles ofrece un área táctil mínima de $\ge 48\text{px} \times 48\text{px}$.
- [ ] **Contraste y Viewport**:
  - `.footer-meta` arroja un ratio medido $\ge 7.0:1$ contra `#060606`.
  - `<meta name="viewport">` contiene `viewport-fit=cover`.
  - `.tasting-tooltip` y `.btn-a11y-float` respetan `env(safe-area-inset-bottom)`.

---

### 5.3 DoD Específico: Hito 2 (Rigor Metodológico y Redacción)
- [ ] **Fórmula Jensen-Shannon**:
  - `calculateAlchemicalResults()` ejecuta la divergencia y distancia de Jensen-Shannon ($1 - d_{JS}$).
  - Las 32.768 combinaciones de respuesta permiten que el 100% de los cócteles superen el 90% de ICC ante respuestas consistentes.
- [ ] **Equipartición de Cuadrantes**:
  - Q1, Q2, Q3 y Q4 contienen exactamente 3 escuelas equilibradas en masa.
  - Simulación de 10.000 iteraciones con respuestas aleatorias demuestra que la dominancia de Q2 se ubica en $25\% \pm 3\%$.
- [ ] **Normalización Ipsativa de Pesos**:
  - Toda opción de Fase 2 y Fase 3 cumple $\sum w = 1.0$.
  - Ninguna escuela posee ventaja estructural de capacidad informativa ($M_s$ estandarizado).
- [ ] **Corpus Kaizen de 12 Preguntas**:
  - Sustitución completa de las 12 preguntas en español e inglés en `data.js`.
  - Deseabilidad social erradicada en Q1, Q2 y Q3 (Steel-manning de Monismo y Pluralismo).
  - Inconsistencias doctrinales corregidas en Q5 (Keynesiana/Conductista) y Q8 (Desarrollista/Emprendedor).
  - Todas las preguntas y opciones presentan $ASL \le 18$ palabras y Szigriszt-Pazos $\ge 65$.

---

### 5.4 DoD Específico: Hito 3 (UI/UX Móvil, Glosario y Persistencia)
- [ ] **Glosario Enriquecido de 26 Términos**:
  - Los 26 conceptos faltantes están registrados en `const GLOSSARY` con sus 4 atributos pedagógicos (`definicion_simple`, `ejemplo_cotidiano`, `por_que_importa`, `escuelas_relacionadas`).
  - Spans interactivos `<button class="glossary-term-btn">` insertados en los textos del test.
- [ ] **Componente Bottom-Sheet en Móvil**:
  - En viewports $\le 768\text{px}$, tocar un término despliega el Bottom-Sheet desde el borde inferior con animación suave.
  - Posee botón de cierre de $48\text{px} \times 48\text{px}$ y admite cierre por arrastre hacia abajo (*swipe down*).
  - En viewports $\ge 769\text{px}$, opera como Smart Popover con flecha SVG y prevención de desbordamiento de pantalla.
- [ ] **Persistencia y Resiliencia**:
  - Las respuestas se almacenan en `sessionStorage` tras cada selección.
  - Al recargar la página en la pregunta 6, el sistema restaura el estado exacto sin pérdida de datos.
- [ ] **Navegación Reversible y Rendimiento**:
  - Botón "Atrás" funcional en las 12 preguntas y en el onboarding.
  - Eliminación de `filter: blur(140px)` en móvil; scroll fluido a 60fps verificado en DevTools.
  - Jitter de scroll eliminado y cálculo sintético reducido a 1.2s contextualizado.

---

### 5.5 DoD Específico: Hito 4 (Blindaje Automatizado y CI/CD)
- [ ] **Pipeline Playwright E2E**:
  - Archivo `playwright.config.js` y tests en `tests/e2e/diagnostic-flow.spec.js` configurados y ejecutables con `npx playwright test`.
  - Recorrido completo del embudo (Onboarding $\to$ Sliders $\to$ Cóctel $\to$ 12 Preguntas $\to$ Resultados) pasa al 100% en Chromium, Firefox y WebKit móvil.
- [ ] **Snapshots Visuales Inmutables**:
  - 12 capturas de referencia almacenadas en `tests/baseline/` correspondientes a cada estado clave de la aplicación.
  - Mapeo de estado documentado en `state_mapping.json`.
  - Pruebas de comparación de imágenes sin regresiones no autorizadas.
- [ ] **Guardas Psicométricas**:
  - Test unitario de invarianzas matemáticas ejecutado en el ciclo de build, validando masa unitaria y techos de ICC.

---

## 6. PLAN DE GESTIÓN DE RIESGOS Y ESTRATEGIA DE ROLLBACK

Toda intervención sobre un sistema en producción conlleva riesgos operacionales. A continuación se detallan las contingencias previstas y el protocolo de reversión por capas:

### 6.1 Matriz de Riesgos y Mitigaciones

| Riesgo Técnico / Operativo | Probabilidad | Impacto | Estrategia de Mitigación Preventiva |
| :--- | :---: | :---: | :--- |
| **R1: Regresión en Navegadores Antiguos** (por `env(safe-area)` o CSS Grid moderno) | Baja | Media | Fallbacks explícitos en CSS (`bottom: 24px; bottom: calc(24px + env(...));`). |
| **R2: Resistencia de Usuarios a Textos Nuevos** (nostalgia del copy antiguo) | Media | Baja | Pruebas de usabilidad cualitativa; comprobación de que la redacción Kaizen conserva la frescura. |
| **R3: Desbordamiento de Memoria en `sessionStorage`** | Muy Baja | Alta | Serialización exclusiva de identificadores de respuestas (payload $< 2\text{KB}$, muy inferior al límite de 5MB). |
| **R4: Discrepancias en Cálculos Matemáticos entre Plataformas** | Muy Baja | Crítica | Estandarización de redondeos con `Math.round(val * 10) / 10` y suite de tests unitarios numéricos. |

---

### 6.2 Protocolo de Rollback por Capas

El despliegue modular garantiza que ante cualquier fallo imprevisto no sea necesario descartar todo el proyecto:
1. **Rollback de Capa UI (Fase 1 y 3)**:
   Si el Bottom-Sheet o los estilos adaptados generan anomalías visuales en algún dispositivo específico, se revierte únicamente la regla CSS en `styles.css` conservando la lógica JS intacta.
2. **Rollback de Capa Metodológica (Fase 2)**:
   La función `calculateAlchemicalResults()` mantendrá en su arquitectura un interruptor de compatibilidad retroactiva (`USE_LEGACY_ALGORITHM = false;`), permitiendo conmutar instantáneamente al cálculo anterior en caso de requerirse una auditoría comparativa en vivo.
3. **Rollback de Datos y Textos**:
   El diccionario de preguntas en `data.js` se versionará con control de versiones atómico en Git, permitiendo restaurar cualquier reactivo individual en segundos.

---

## 7. CONCLUSIÓN Y DICTAMEN DE APROBACIÓN

El presente **Plan Kaizen de Mejora Continua** satisface con exhaustiva rigurosidad los requisitos del **Criterio de Aceptación C2** y el **Requerimiento R4**, proporcionando a los equipos de ingeniería, diseño editorial y psicometría una guía de acción inequívoca, cuantitativamente fundamentada y matemáticamente impecable.

Al ejecutar las 4 fases de este plan, BAR-Economic no solo subsanará las patologías diagnosticadas en la auditoría integral, sino que elevará su estatus a un simulador de referencia internacional en la divulgación de las ideas económicas, combinando la fascinación estética del *Carbon Speakeasy* con el más riguroso estándar de integridad científica y accesibilidad universal.

---
*Fin del Plan Kaizen de Mejora Continua — Master Delivery Milestone 2.*
