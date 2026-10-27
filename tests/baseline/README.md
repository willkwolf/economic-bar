# Línea Base Inmutable de Interfaz y Mapeo de Estado (Vibium / BiDi)

**Proyecto:** BAR-Economic (El Bar de Escuelas Económicas)  
**Módulo:** Blindaje de Línea Base Visual y Funcional (`tests/baseline/`)  
**Requisitos Satisfechos:** Requerimiento **R5** y Criterio de Aceptación **C3 (Parte 2)**  
**Herramienta de Automatización:** Vibium v26.8.21 (Protocolo WebDriver BiDi sobre Chromium Headless)  
**Resolución Estandarizada:** $1280 \times 800$ píxeles (Desktop Viewport)

---

## 1. Resumen Ejecutivo y Propósito

La **Línea Base Inmutable** de BAR-Economic constituye el blindaje visual y estructural del estado actual de la aplicación antes de la ejecución de cualquier refactorización Kaizen (sprints futuros). 

Su propósito central es **congelar con rigor forense e integridad criptográfica** la apariencia estética, el comportamiento interactivo y el árbol DOM en los 12 momentos críticos del recorrido de usuario. Esto asegura que cualquier modificación futura en diseño, accesibilidad o cálculo psicométrico sea contrastada directamente contra un estándar de oro intocado.

### Principios Rectores:
1. **Inmutabilidad Absoluta del Código Fuente:** El código base original (`index.html`, `styles.css`, `app.js`, `data.js`) permanece estrictamente inalterado durante la captura.
2. **Generación Genuina:** Cero simulación, facades o hardcoding; cada captura es el resultado de una sesión real de navegación automatizada con un servidor web local y un motor de renderizado de navegador.
3. **Verificabilidad Criptográfica:** Cada snapshot PNG y cada árbol de texto DOM cuenta con un hash SHA-256 unívoco que permite a los auditores y al pipeline de CI/CD detectar cualquier alteración no autorizada.

---

## 2. Puntos de Control de la Línea Base (12 Checkpoints Críticos)

A continuación se detalla la matriz de los 12 estados congelados que cubren el ciclo de vida completo del Test de Sobriedad:

| # | Archivo Snapshot | ID Checkpoint | Pantalla / Fase | Selector Contenedor | Elementos Clave Mapeados | Transición Saliente |
|---|------------------|---------------|-----------------|---------------------|--------------------------|---------------------|
| **01** | `01_start_screen.png` | `01_start_screen` | Pantalla Inicial | `#test-start-screen` | Insignia de Balanza, Título, Copy intro, Botón `#start-test-btn` | Clic en botón de inicio $\to$ Onboarding |
| **02** | `02_onboarding_priors_default.png` | `02_onboarding_priors_default` | Onboarding (Priors Default) | `#test-onboarding-screen` | Cuadrícula 8 cócteles (primer cóctel activo), Sliders al 50% ("Equilibrio neutral") | Manipulación de sliders |
| **03** | `03_onboarding_sliders_adjusted.png` | `03_onboarding_sliders_adjusted` | Onboarding (Sliders Ajustados) | `#test-onboarding-screen` | Sliders al 75% (Mercado) y 30% (Equidad), descripciones dinámicas actualizadas | Selección de cóctel explícito |
| **04** | `04_onboarding_cocktail_selected.png` | `04_onboarding_cocktail_selected` | Onboarding (Cóctel Seleccionado) | `#test-onboarding-screen` | Segundo cóctel (*Libertad Líquida*) seleccionado con halo dorado `.selected`, botón `#onboarding-next-btn` | Clic en confirmar $\to$ Pregunta 1 |
| **05** | `05_phase1_q1_monism_pluralism.png` | `05_phase1_q1_monism_pluralism` | Fase 1: Pregunta 1 | `#test-question-screen` | Indicador `PREGUNTA 1 DE 12`, etiqueta de fase, 2 tarjetas de dilema metodológico (Monismo vs Pluralismo) | Clic en opción $\to$ Auto-avance 300ms |
| **06** | `06_phase1_q2.png` | `06_phase1_q2` | Fase 1: Pregunta 2 | `#test-question-screen` | Indicador `PREGUNTA 2 DE 12`, 2 opciones sobre Racionalidad vs Sesgos Conductuales | Clic en opción $\to$ Auto-avance 300ms |
| **07** | `07_phase1_q3.png` | `07_phase1_q3` | Fase 1: Pregunta 3 | `#test-question-screen` | Indicador `PREGUNTA 3 DE 12`, 2 opciones sobre Neutralidad vs Conflicto de Poder | Clic en opción $\to$ Cambio de Fase |
| **08** | `08_phase2_q4_escuelas.png` | `08_phase2_q4_escuelas` | Fase 2: Pregunta 4 | `#test-question-screen` | Indicador `PREGUNTA 4 DE 12`, 4 tarjetas de escuelas doctrinales (coordinación social) | Avance secuencial Q4 a Q8 |
| **09** | `09_phase2_q9.png` | `09_phase2_q9` | Fase 2: Pregunta 9 | `#test-question-screen` | Indicador `PREGUNTA 9 DE 12`, 4 tarjetas sobre propiedad y bienes comunes | Clic en opción $\to$ Cambio a Fase 3 |
| **10** | `10_phase3_q10_luxury_slider.png` | `10_phase3_q10_luxury_slider` | Fase 3: Pregunta 10 | `#test-question-screen` | Indicador `PREGUNTA 10 DE 12`, Opciones ocultas, Slider continuo `#luxury-slider` visible con polos y botón confirmar | Confirmación explícita con botón |
| **11** | `11_loading_screen_alchemical_delay.png` | `11_loading_screen_alchemical_delay` | Pantalla de Carga Alquímica | `#test-loading-screen` | Spinner concéntrico de 3 anillos en rotación, mensaje de destilación, barra al 100% (2.2s de retraso) | Expiración de temporizador (2200ms) |
| **12** | `12_results_screen_dashboard.png` | `12_results_screen_dashboard` | Dashboard de Resultados | `#test-results-screen` | Acta de sobriedad, Arquetipo (*Combinación Abierta*), Botella con estratos líquidos, Radar, Barras de escuelas | Botones de compartir o reiniciar |

---

## 3. Estructura y Esquema del Mapeo de Estado (`state_mapping.json`)

El archivo `state_mapping.json` proporciona la representación programática e indexable de cada checkpoint. Cada entrada contiene:

```json
{
  "checkpoint_id": "01_start_screen",
  "name": "Pantalla Inicial del Test de Sobriedad",
  "description": "Pantalla de bienvenida...",
  "container_selector": "#test-start-screen",
  "container_id": "test-start-screen",
  "active_classes": ["test-intro-card"],
  "is_visible": true,
  "content_hash_sha256": "a7e159ebfc13d5cd145f0b08acd56efdb80e41a100a2255d1c8b6cb7b9760947",
  "total_dom_elements": 10,
  "interactive_elements_count": 1,
  "interactive_elements": [
    {
      "index": 0,
      "selector": "#start-test-btn",
      "tag": "button",
      "text_preview": "INICIAR DESTILACIÓN MENTAL",
      "classes": ["btn", "btn-primary"],
      "attributes": {
        "class": "btn btn-primary",
        "id": "start-test-btn",
        "data-i18n": "testIntroBtn"
      },
      "visible": true,
      "enabled": true,
      "bounding_box": { "x": 496, "y": 526, "width": 279, "height": 44 },
      "event_listeners": ["click", "keydown"]
    }
  ],
  "state_transition": {
    "trigger": "click(#start-test-btn)",
    "target": "02_onboarding_priors_default",
    "type": "sync-dom-switch"
  },
  "snapshot_file": "01_start_screen.png",
  "file_size_bytes": 94120,
  "image_hash_sha256": "83c60248398050c5db02c53397b8c19128d6d0f4e16f8dc8589370b8a207dd3a"
}
```

### Campos Clave:
- **`content_hash_sha256`**: Hash del contenido textual y estructura visible en el DOM. Detecta mutaciones en el copy o en el vocabulario sin necesidad de procesar imágenes.
- **`interactive_elements`**: Catálogo de todos los controles accionables (botones, sliders, tarjetas seleccionables) con sus dimensiones y coordenadas de pantalla (`bounding_box`), útil para auditar el cumplimiento del tamaño mínimo de touch targets ($\ge 44\text{px}$).
- **`state_transition`**: Modelo formal de la máquina de estados que gobierna la SPA, documentando el evento detonador (`trigger`), el estado de destino (`target`) y la naturaleza de la transición (`type`).

---

## 4. Instrucciones de Reproducción de la Captura

Para re-ejecutar la captura completa de los snapshots y regenerar `state_mapping.json` desde cero:

### Requisitos Previos:
1. **Python 3.10+** (probado en Python 3.13).
2. Paquete **`vibium`** instalado:
   ```bash
   python -m pip install vibium
   ```
   *Nota: Vibium incluye el binario autónomo para Windows x64 y utiliza el protocolo WebDriver BiDi.*

### Comando de Ejecución:
Desde la raíz del repositorio (`c:\Dev\BAR-Economic`):
```bash
python tests/baseline/capture_baseline.py
```

### Comportamiento del Script:
1. **Detección Automática de Servidor:** Verifica si el puerto 3000 ya está activo. Si no, inicia un servidor HTTP multi-hilo en segundo plano sirviendo los archivos del proyecto.
2. **Lanzamiento Headless:** Arranca una instancia limpia de Chromium mediante BiDi y ajusta el viewport a 1280x800.
3. **Navegación Determinista:** Avanza por cada estado esperando que las animaciones CSS se asienten.
4. **Captura Dual:** Guarda simultáneamente los archivos `.png` binarios y extrae los metadatos de accesibilidad e interacción hacia `state_mapping.json`.
5. **Cierre Limpio:** Detiene la sesión del navegador y apaga el servidor local.

---

## 5. Metodología de Pruebas de Regresión Visual (Visual Regression Testing)

Para comparar futuras versiones de la interfaz contra esta línea base inmutable, se recomiendan dos metodologías complementarias:

### A. Auditoría Rápida Criptográfica y de Integridad
Ejecutar el script verificador incluido:
```bash
python tests/baseline/verify_baseline.py
```
Este script valida:
- Existencia y formato de los 12 archivos PNG.
- Dimensiones exactas (1280x800).
- Tamaño mínimo aceptable (>20 KB).
- Coincidencia bit-a-bit del hash SHA-256 entre los archivos en disco y `state_mapping.json`.
- Integridad de la documentación `README.md`.

### B. Pruebas de Regresión Visual Continua (Pixel Diffing / Playwright)
En flujos de CI/CD, las capturas de la suite Playwright pueden contrastarse contra estos snapshots:
1. **Tolerancia de Umbral (Pixelmatch):** Configurar un `maxDiffPixelRatio: 0.02` (2% de tolerancia) para absorber diferencias de rasterizado entre distintas versiones del motor Blink.
2. **Máscara de Elementos Dinámicos:** En la Pantalla 11 (Carga Alquímica), el spinner animado de tres anillos rota continuamente a alta velocidad; se recomienda evaluar la visibilidad del contenedor `#test-loading-screen` o enmascarar el elemento rotatorio mediante `mask: [page.locator('.alchemical-spinner')]`.
3. **Validación de Touch Targets:** Comparar el campo `bounding_box` en `state_mapping.json` entre versiones para alertar si alguna refactorización reduce los botones por debajo de 44px o 48px.

---

## 6. Integridad Forense y Certificación

La presente línea base visual ha sido capturada de forma completamente determinista y verificada sin introducir ninguna modificación en los archivos de producción de BAR-Economic. Los 12 snapshots representan fielmente la experiencia visual y funcional original del aplicativo.
