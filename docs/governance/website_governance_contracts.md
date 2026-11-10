# Contratos de Gobierno del Sitio Web y Constitución Editorial
## Protocolos de Calidad, Mitigación de Sesgos y Gestión de Cambios (RFC)

---

## 1. Misión y Principios Constitucionales

El sitio web **"El Bar Económico: Elixires de la Razón"** es un bien público digital educativo orientado a cultivar la deliberación cívica fundamentada. Para salvaguardar su legitimidad académica y su neutralidad pedagógica, toda contribución o cambio debe ajustarse a esta constitución de gobierno.

### Principios Inviolables
1. **Equipolencia Moral y Ausencia de Sesgo:** Ninguna escuela ni opción de respuesta puede redactarse con términos despectivos, sarcásticos o con sesgo de deseabilidad social. Toda opción debe reflejar el mejor argumento plausible que un defensor honesto de dicha doctrina sostendría.
2. **Arquitectura Cero Compiladores (Vanilla Web):** La aplicación debe ejecutarse de forma autosuficiente directamente en el navegador mediante HTML5, CSS3 y JavaScript ES6+ puro. Se prohíbe la incorporación de frameworks de compilación pesados (Webpack, Vite, React, Vue) que impidan la ejecución estática directa vía `python -m http.server` o GitHub Pages.
3. **Invarianza de Compuertas de Prueba:** Ningún cambio puede ser fusionado a la rama `main` sin que la suite automatizada de Playwright (`npm test`) reporte **12 de 12 pruebas aprobadas** con cero regresiones visuales o de accesibilidad.

---

## 2. Protocolo de Gestión de Cambios (Proceso RFC)

Toda modificación sustantiva de contenido (añadir una escuela, modificar un cóctel, cambiar la redacción de una pregunta o calibrar ponderaciones de sliders) debe documentarse como una **Solicitud de Comentarios (RFC - Request For Comments)** que acredite:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                              COMPUERTAS DE VALIDACIÓN RFC                              │
├────────────────────────────────┬───────────────────────────────────────────────────────┤
│ Compuerta                      │ Criterio de Aceptación Obligatorio                    │
├────────────────────────────────┼───────────────────────────────────────────────────────┤
│ 1. Rigor Bibliográfico         │ Fuentes académicas primarias citadas en formato APA.   │
│ 2. Simetría Vectorial          │ La suma de pesos de la opción o cóctel es 1.0 (100%).  │
│ 3. Neutralidad Psicométrica    │ Aprobación de prueba de doble lectura ciega.          │
│ 4. Paridad Dual i18n           │ Textos redactados y aprobados en Español e Inglés.    │
│ 5. Cobertura de Glosario       │ Nuevos términos técnicos incorporados a GLOSSARY.     │
│ 6. Aprobación Playwright       │ 100% de la suite de pruebas E2E aprobada localmente.  │
└────────────────────────────────┴───────────────────────────────────────────────────────┘
```

---

## 3. Estándares Ergonómicos y Accesibilidad (Mobile-First)

Para garantizar un diseño cívico universal e inclusivo:
* **Dimensión de Objetivos Táctiles (Touch Targets):** Todos los elementos interactivos (botones, opciones de selección, glosario interactivo, controles de slider) deben medir como mínimo **$48 \times 48\text{ px}$** para cumplir con las pautas WCAG 2.1 AAA.
* **Ratio de Contraste Cromático:** El texto principal debe mantener un contraste superior a **$7:1$** sobre su fondo en modo estándar, y superior a **$18:1$** en modo de Alto Contraste.
* **Modo Tufte (Data-Ink Ratio):** La aplicación incluye un modo de alta densidad de datos que elimina degradados decorativos y sombras para optimizar la concentración analítica y la lectura en pantallas monocromáticas o de tinta electrónica.
* **Soporte de Safe Areas:** Se exige el uso estricto de `viewport-fit=cover` y variables de entorno CSS (`env(safe-area-inset-top)`, `env(safe-area-inset-bottom)`) para evitar colisiones con el *notch* o la barra de gestos de dispositivos móviles iOS y Android.

---

## 4. Política de Cero Errores en Consola

El entorno de producción no debe arrojar ninguna advertencia (*warning*) ni error en la consola del navegador durante un recorrido completo de la aplicación. Cualquier excepción no capturada de JavaScript invalida automáticamente la entrega.
