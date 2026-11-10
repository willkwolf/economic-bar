# Directrices y Protocolos para Agentes de IA
## Reglas Operativas para OpenWiki, Antigravity, Claude, Gemini y Cursor

---

## 1. Propósito y Alcance

Este manual define los **contratos operativos inviolables** para cualquier agente inteligente o asistente automatizado que interactúe con el repositorio de **BAR-Economic**. El propósito es garantizar que la autonomía del agente no degrade la pureza arquitectónica, el rigor matemático ni la experiencia del usuario final.

---

## 2. Los Diez Mandamientos del Agente en BAR-Economic

1. **Mantener la Arquitectura Vanilla Estática:**
   No introduzcas Vite, Webpack, Parcel, Babel, Tailwind ni frameworks como React, Vue o Svelte en el código de producción. `index.html` debe continuar abriéndose y ejecutándose limpiamente con un simple servidor HTTP estático (`python -m http.server`) o mediante GitHub Pages.
2. **Inmutabilidad de Identificadores Doctrinales:**
   No modifiques los IDs en snake_case de las 12 escuelas en `data.js` (`clasica`, `marxista`, `neoclasica`, `tradicion_desarrollista`, `austriaca`, `schumpeteriana`, `keynesiana`, `institucionalista`, `conductista`, `feminista`, `ecologica`, `estado_emprendedor`).
3. **Paridad Lingüística Invariable:**
   Si modificas o añades una clave en `TRANSLATIONS.es`, estás obligado en el mismo commit a añadir y traducir su homólogo exacto en `TRANSLATIONS.en`.
4. **Conservación de Masa en Pesos Vectoriales:**
   Toda opción de pregunta en Fase 2 o fórmula de cóctel debe sumar exactamente $1.0$ (o $100\%$). No crees opciones que otorguen ventajas asimétricas de puntaje a ninguna escuela.
5. **Preservación de la Suite de Pruebas de Playwright:**
   Antes de dar por concluida cualquier tarea o emitir una respuesta final, debes ejecutar localmente `npm test` y verificar que las **12 pruebas E2E pasen al 100%**.
6. **Prohibición de Archivos Efímeros en Git:**
   Bajo ninguna circunstancia agregues al control de versiones carpetas de orquestación de agentes (`.agents/`, `.claude/`, `.gitclaude*`), volcados de conversaciones o scripts temporales (`scratch/`). Si requieres scripts de verificación, almacénalos bajo rutas ignoradas o elimínalos al finalizar la verificación.
7. **Equipolencia en el Rediseño de Preguntas:**
   Nunca redactes opciones de respuesta caricaturescas o moralizantes. Sigue los lineamientos de legibilidad editorial: oraciones de longitud moderada ($\text{ASL} \le 18$ palabras) y nivel de comprensión cívico accesible.
8. **Respeto a las Áreas Seguras Móviles:**
   Cualquier ajuste de estilos CSS en cabecera o pie de página debe respetar las variables de safe area (`env(safe-area-inset-top)` y `env(safe-area-inset-bottom)`) y mantener touch targets $\ge 48\text{px}$.
9. **Cero Dependencias de Red en Tiempo de Ejecución:**
   No agregues CDNs externas de fuentes o librerías que bloqueen la ejecución offline o que provoquen fallos de CORS si el usuario abre la aplicación mediante el protocolo `file://`.
10. **Documentar antes de Cerrar:**
    Cualquier cambio en la lógica de cálculo o en las estructuras de datos debe reflejarse de inmediato en los documentos canónicos bajo `/docs/data/` o `/docs/conceptual/`.

---

## 3. Zonas de Archivo del Repositorio

```
┌──────────────────────────────────────┬─────────────────────────────────────────────────────────┐
│ Archivo / Directorio                 │ Clasificación de Modificación para Agentes              │
├──────────────────────────────────────┼─────────────────────────────────────────────────────────┤
│ `index.html`                         │ Interfaz declarativa. Permitido editar estructura/WAI. │
│ `styles.css`                         │ Diseño visual. Permitido editar respetando WCAG AAA.    │
│ `app.js`                             │ Lógica funcional cliente. Edición con máxima cautela.   │
│ `data.js`                            │ Fuente canónica de verdad. Obligatorio paridad i18n.    │
│ `docs/`                              │ Documentación canónica. Mantener siempre al día.        │
│ `openwiki/`                          │ Contexto e índices para agentes inteligentes.          │
│ `tests/e2e/diagnostic-flow.spec.js`  │ Suite E2E de Playwright. Solo ampliar, nunca rebajar.   │
│ `tests/baseline/`                    │ Snapshots de regresión visual inmutables.              │
└──────────────────────────────────────┴─────────────────────────────────────────────────────────┘
```
