# OpenWiki Knowledge Map & Semantic Index
## Navigation Graph of the BAR-Economic Repository

---

## 1. Top-Level Taxonomy

```
BAR-Economic/
├── index.html                      <- Accessible HTML5 entrypoint and DOM hierarchy
├── styles.css                      <- Glassmorphic styling, animations, WCAG AAA contrast
├── app.js                          <- Client-side application logic, math engine, Canvas radar
├── data.js                         <- Canonical data repository, bilingual dictionaries, glossary
├── docs/                           <- Master documentation corpus
│   ├── README.md                   <- Documentation portal and index
│   ├── conceptual/                 <- Theoretical foundations and academic essays
│   │   ├── epistemological_framework.md
│   │   ├── taxonomy_economic_schools.md
│   │   ├── cocktail_doctrinal_blends.md
│   │   └── cognitive_diagnostics.md
│   ├── data/                       <- Formal data schemas, mathematical specifications
│   │   ├── data_contracts.md
│   │   ├── mathematical_models.md
│   │   └── i18n_governance.md
│   └── governance/                 <- Quality gates, editorial constitution, agent rules
│       ├── website_governance_contracts.md
│       └── agent_rules.md
├── openwiki/                       <- OpenWiki agent configuration and grounding
│   ├── INSTRUCTIONS.md             <- Agent prompt context and grounding facts
│   └── wiki_map.md                 <- This semantic navigation index
└── tests/                          <- Automated verification suite
    ├── e2e/diagnostic-flow.spec.js <- Playwright test suite (12 tests)
    └── baseline/                   <- Visual regression reference captures
```

---

## 2. Topic Cross-Reference Index

| Concept / Domain | Primary Canonical Document | Secondary Code References |
| :--- | :--- | :--- |
| **Ha-Joon Chang Taxonomy** | [epistemological_framework.md](../docs/conceptual/epistemological_framework.md) | `data.js` (`escuelas`), `app.js` |
| **12 Economic Schools** | [taxonomy_economic_schools.md](../docs/conceptual/taxonomy_economic_schools.md) | `data.js` (`escuelas`), `index.html` |
| **8 Cocktail Recipes** | [cocktail_doctrinal_blends.md](../docs/conceptual/cocktail_doctrinal_blends.md) | `data.js` (`cocteles`), `app.js` |
| **Berlin Hedgehogs vs Foxes** | [cognitive_diagnostics.md](../docs/conceptual/cognitive_diagnostics.md) | `data.js` (`perfiles_cognitivos`), `app.js` |
| **Bayesian Onboarding** | [cognitive_diagnostics.md](../docs/conceptual/cognitive_diagnostics.md) | `app.js` (`onboardingScreen`) |
| **Data Schemas & Types** | [data_contracts.md](../docs/data/data_contracts.md) | `data.js` (`TRANSLATIONS`) |
| **HHI & ICC Mathematics** | [mathematical_models.md](../docs/data/mathematical_models.md) | `app.js` (`calculateResults`) |
| **2D Radar Canvas** | [mathematical_models.md](../docs/data/mathematical_models.md) | `app.js` (`drawRadarChart`) |
| **Bilingual Parity (i18n)** | [i18n_governance.md](../docs/data/i18n_governance.md) | `data.js`, `app.js` (`setLanguage`) |
| **Quality & CI Gates** | [website_governance_contracts.md](../docs/governance/website_governance_contracts.md) | `tests/e2e/diagnostic-flow.spec.js` |
| **AI Agent Guidelines** | [agent_rules.md](../docs/governance/agent_rules.md) | `.gitignore`, `openwiki/` |
