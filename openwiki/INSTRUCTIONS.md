# OpenWiki Instructions & Grounding Facts
## BAR-Economic: Elixires de la Razón

This document provides system instructions, grounded facts, and architectural invariants for **OpenWiki** and autonomous AI agents navigating the **BAR-Economic** codebase.

---

## 1. Project Purpose & Academic Identity
* **Repository Name:** `BAR-Economic` (El Bar de Escuelas Económicas / The Economic Bar)
* **Author:** William Camilo Artunduaga Viana (`@willkwolf`)
* **Role in Educational Ecosystem:** Step 2 of the 5-step Critical Thinking Educational Pathway:
  1. *EcoSchoolMap* (Understanding)
  2. *BAR-Economic* (Mixing & Cognitive Diagnostics)
  3. *Isaiah Berlin: Liberty Infographic* (Contrasting)
  4. *Global Economic Inequality* (Scaling)
  5. *Territorial Palma Ratio in Colombia* (Grounding)
* **Epistemological Foundation:** Combines Ha-Joon Chang's 12 economic schools (*Economics: The User's Guide*, 2014) with Isaiah Berlin's Hedgehog vs. Fox cognitive dilemma (*The Hedgehog and the Fox*, 1953).

---

## 2. Technical Stack & Architectural Constraints
* **Pure Static Vanilla Web:** Zero compilation dependencies. Built strictly with standard HTML5, CSS3, and modern Vanilla ES6+ JavaScript.
* **Hosting:** Directly servable via `python -m http.server`, GitHub Pages, or local browser execution.
* **Testing Infrastructure:** Automated end-to-end tests using Playwright (`npm test`) covering desktop and mobile viewports.
* **Dual i18n:** 100% bilingual parity (Spanish / English) managed reactively in `data.js` via the `TRANSLATIONS` dictionary and `data-i18n` DOM attributes.

---

## 3. Core Data Contracts (`data.js`)
* `TRANSLATIONS.es` and `TRANSLATIONS.en` contain:
  * `ui`: User interface labels, buttons, headers, footers.
  * `escuelas`: The 12 economic schools with ABV, pH, organoleptic notes, and systemic toxicity.
  * `cocteles`: The 8 doctrinal blends with exact percentage ingredient formulas ($\sum = 100\%$).
  * `problemas`: The 6 dossiers of the apothecary confronting historical cabinet crises.
  * `preguntas`: The 12 diagnostic questions (Phase 1: Cognitive Monism/Pluralism, Phase 2: School weighting, Phase 3: Continuous Likert sliders).
  * `perfiles_cognitivos`: 4 cognitive archetypes (Doctrinal Monist, Systemic Pluralist, Eclectic Hedgehog, Pragmatic Fox).
  * `perfiles_cuadrantes`: 4 quadrants of the political-economic coordinate plane.
  * `perfiles_concentracion`: 3 concentration profiles based on the Herfindahl-Hirschman Index ($HHI$).
  * `perfiles_consistencia`: 3 consistency profiles based on the Cognitive Consistency Index ($ICC$).
* `GLOSSARY`: Contextual tooltip definitions in both languages for over 60 complex economic terms.

---

## 4. Key Mathematical Formulations (`app.js`)
1. **Herfindahl-Hirschman Index ($HHI$):**
   $$HHI = \sum_{i=1}^{12} s_i^2 \quad (\text{Thresholds: } > 2500 \text{ Monoculture, } 1500-2500 \text{ Balanced, } < 1500 \text{ Dispersed})$$
2. **Cognitive Consistency Index ($ICC$):**
   $$ICC = 0.60 \cdot \text{CosineSimilarity} + 0.40 \cdot \text{AxisSimilarity}$$
   Measures Bayesian prior alignment between onboarding choices and revealed answers.
3. **2D Polar Vector Space:**
   Projects the user's worldview onto 4 polar axes: State, Market, Equity, and Growth.

---

## 5. Agent Governance Mandates
1. Never alter the 12 school snake_case IDs.
2. Never add front-end build steps or bundlers.
3. Always verify that `npm test` passes 12/12 before committing.
4. Keep all canonical documentation updated under `/docs`.
