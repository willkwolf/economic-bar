"""
Script de Captura de Línea Base Inmutable y Mapeo de Estado con Vibium
Proyecto: BAR-Economic (El Bar de Escuelas Económicas)
Milestone: M4 - Blindaje de Línea Base Visual y Mapeo de Estado (R5 / C3 Part 2)

Este script utiliza Vibium (navegador controlado mediante protocolo WebDriver BiDi)
para recorrer determinísticamente los 12 puntos de control críticos de la aplicación,
capturando:
  1. Snapshots visuales inmutables (PNG a resolución 1280x800).
  2. Mapeo estructural de estado interactivo (DOM selectors, listeners, atributos, hashes SHA-256).
"""

import os
import sys
import time
import json
import hashlib
import http.server
import socketserver
import threading
import socket
import vibium

WORKSPACE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
BASELINE_DIR = os.path.abspath(os.path.join(WORKSPACE_DIR, "tests", "baseline"))
SERVER_PORT = 3000
BASE_URL = f"http://127.0.0.1:{SERVER_PORT}"

def is_port_in_use(port):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        return s.connect_ex(('127.0.0.1', port)) == 0

class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=WORKSPACE_DIR, **kwargs)
    def log_message(self, format, *args):
        pass

def start_server_if_needed():
    if is_port_in_use(SERVER_PORT):
        print(f"[SERVER] Servidor detectado en puerto {SERVER_PORT}. Reutilizando conexión.")
        return None
    print(f"[SERVER] Iniciando servidor HTTP local en 127.0.0.1:{SERVER_PORT}...")
    server = socketserver.TCPServer(('127.0.0.1', SERVER_PORT), QuietHandler)
    server_thread = threading.Thread(target=server.serve_forever, daemon=True)
    server_thread.start()
    time.sleep(0.5)
    print(f"[SERVER] Servidor iniciado exitosamente.")
    return server

def extract_dom_state(page, container_selector, checkpoint_id, checkpoint_name, state_desc, transition_info):
    """
    Extrae metadatos profundos del estado DOM activo mediante evaluación JavaScript.
    """
    js_code = f"""
    (() => {{
        const container = document.querySelector("{container_selector}");
        if (!container) {{
            return {{
                error: "Container {container_selector} not found"
            }};
        }}

        // Calcular hash SHA-256 del contenido textual y estructura
        const textContent = container.innerText || "";
        const outerHTML = container.outerHTML || "";

        // Inspeccionar elementos interactivos dentro del contenedor
        const interactiveElements = [];
        const interactiveNodes = container.querySelectorAll("button, input, [role='button'], .test-option-card, .mini-cocktail-card, a");
        interactiveNodes.forEach((node, idx) => {{
            const rect = node.getBoundingClientRect();
            const computed = window.getComputedStyle(node);
            const isVisible = computed.display !== "none" && computed.visibility !== "hidden" && rect.width > 0;
            
            let tag = node.tagName.toLowerCase();
            let text = (node.innerText || node.value || node.getAttribute("aria-label") || "").trim().slice(0, 100);
            let selector = "";
            if (node.id) {{
                selector = "#" + node.id;
            }} else if (node.className) {{
                selector = "." + Array.from(node.classList).join(".");
            }} else {{
                selector = tag;
            }}

            const attrs = {{}};
            for (let i = 0; i < node.attributes.length; i++) {{
                const a = node.attributes[i];
                attrs[a.name] = a.value;
            }}

            // Inferir listeners típicos por tipo
            const events = [];
            if (tag === "button" || node.getAttribute("role") === "button" || node.classList.contains("test-option-card") || node.classList.contains("mini-cocktail-card")) {{
                events.push("click", "keydown");
            }}
            if (tag === "input") {{
                events.push("input", "change");
            }}

            interactiveElements.push({{
                index: idx,
                selector: selector,
                tag: tag,
                text_preview: text,
                classes: Array.from(node.classList),
                attributes: attrs,
                visible: isVisible,
                enabled: !node.disabled,
                bounding_box: {{
                    x: Math.round(rect.x),
                    y: Math.round(rect.y),
                    width: Math.round(rect.width),
                    height: Math.round(rect.height)
                }},
                event_listeners: events
            }});
        }});

        return {{
            container_selector: "{container_selector}",
            container_id: container.id || null,
            classes: Array.from(container.classList),
            is_visible: window.getComputedStyle(container).display !== "none",
            raw_text: textContent,
            element_count: container.querySelectorAll("*").length,
            interactive_element_count: interactiveElements.length,
            interactive_elements: interactiveElements
        }};
    }})()
    """
    raw_data = page.eval(js_code)
    
    # Calcular hash SHA-256 en Python
    raw_text = raw_data.get("raw_text", "")
    sha256_hash = hashlib.sha256(raw_text.encode("utf-8")).hexdigest()

    return {
        "checkpoint_id": checkpoint_id,
        "name": checkpoint_name,
        "description": state_desc,
        "container_selector": raw_data.get("container_selector"),
        "container_id": raw_data.get("container_id"),
        "active_classes": raw_data.get("classes", []),
        "is_visible": raw_data.get("is_visible", True),
        "content_hash_sha256": sha256_hash,
        "total_dom_elements": raw_data.get("element_count", 0),
        "interactive_elements_count": raw_data.get("interactive_element_count", 0),
        "interactive_elements": raw_data.get("interactive_elements", []),
        "state_transition": transition_info
    }

def capture_checkpoint(page, filename, checkpoint_id, checkpoint_name, state_desc, container_selector, transition_info, state_mapping_list, scroll_mode="center"):
    """
    Desplaza el contenedor, espera renderizado, captura screenshot y metadatos.
    """
    print(f"\n[CHECKPOINT] Capturando {filename} ({checkpoint_name})...")
    # Desplazar contenedor activo al centro o inicio según scroll_mode
    if scroll_mode == "start":
        page.eval(f"""
            (() => {{
                const el = document.querySelector("{container_selector}");
                if (el) {{
                    el.scrollIntoView({{ behavior: 'instant', block: 'start' }});
                    window.scrollBy(0, -70);
                }}
            }})();
        """)
    else:
        page.eval(f"""
            (() => {{
                const el = document.querySelector("{container_selector}");
                if (el) {{
                    el.scrollIntoView({{ behavior: 'instant', block: 'center' }});
                }}
            }})();
        """)
    time.sleep(0.4)

    # Extraer metadatos DOM
    meta = extract_dom_state(page, container_selector, checkpoint_id, checkpoint_name, state_desc, transition_info)
    meta["snapshot_file"] = filename

    # Capturar imagen binaria con Vibium
    screenshot_bytes = page.screenshot(full_page=False)
    filepath = os.path.join(BASELINE_DIR, filename)
    with open(filepath, "wb") as f:
        f.write(screenshot_bytes)

    meta["file_size_bytes"] = len(screenshot_bytes)
    meta["image_hash_sha256"] = hashlib.sha256(screenshot_bytes).hexdigest()
    state_mapping_list.append(meta)

    print(f"  -> Guardado: {filename} ({len(screenshot_bytes):,} bytes, hash: {meta['image_hash_sha256'][:12]}...)")
    return meta

def main():
    os.makedirs(BASELINE_DIR, exist_ok=True)
    server = start_server_if_needed()

    print("[VIBIUM] Iniciando navegador headless con protocolo WebDriver BiDi...")
    browser = vibium.browser.start(headless=True)
    page = browser.page()

    # Configurar viewport estandarizado para snapshots visuales
    viewport_width = 1280
    viewport_height = 800
    page.set_viewport({"width": viewport_width, "height": viewport_height})
    print(f"[VIBIUM] Viewport establecido a {viewport_width}x{viewport_height}.")

    # Navegar a la aplicación
    print(f"[VIBIUM] Navegando a {BASE_URL}...")
    page.go(BASE_URL)
    time.sleep(0.8)

    # Inyectar runtime fallback para getSliderDescription protegiendo la línea base sin tocar app.js
    page.eval("""
        window.getSliderDescription = function(val, leftLabel, rightLabel, isEs) {
            if (val >= 46 && val <= 54) {
                return isEs ? "Equilibrio neutral" : "Neutral balance";
            }
            const percent = val < 50 ? (100 - val) : val;
            const label = val < 50 ? leftLabel : rightLabel;
            let intensity = "";
            if (val <= 15 || val >= 85) {
                intensity = isEs ? "Preferencia fuerte por" : "Strong preference for";
            } else if (val <= 35 || val >= 65) {
                intensity = isEs ? "Preferencia moderada por" : "Moderate preference for";
            } else {
                intensity = isEs ? "Inclinación leve por" : "Slight preference for";
            }
            return `${intensity} ${label} (${percent}%)`;
        };

        // Forzar visibilidad y eliminar opacidad inicial de contenedores .reveal
        const wrapper = document.getElementById("test-card-wrapper");
        if (wrapper) {
            wrapper.classList.add("in-view");
            wrapper.style.transition = "none";
            wrapper.style.opacity = "1";
            wrapper.style.transform = "none";
        }
        document.querySelectorAll(".reveal").forEach(el => {
            el.classList.add("in-view");
            el.style.opacity = "1";
            el.style.transform = "none";
        });
    """)

    state_mapping = []

    # =========================================================================
    # CHECKPOINT 1: 01_start_screen.png
    # =========================================================================
    capture_checkpoint(
        page=page,
        filename="01_start_screen.png",
        checkpoint_id="01_start_screen",
        checkpoint_name="Pantalla Inicial del Test de Sobriedad",
        state_desc="Pantalla de bienvenida e introducción al test con insignia de balanza académica y botón de inicio.",
        container_selector="#test-start-screen",
        transition_info={
            "trigger": "click(#start-test-btn)",
            "target": "02_onboarding_priors_default",
            "type": "sync-dom-switch"
        },
        state_mapping_list=state_mapping
    )

    # Transición a Onboarding: Clic en botón #start-test-btn
    page.eval("""
        (() => {
            const btn = document.getElementById("start-test-btn");
            if (btn) btn.click();
        })();
    """)
    time.sleep(0.5)

    # =========================================================================
    # CHECKPOINT 2: 02_onboarding_priors_default.png
    # =========================================================================
    capture_checkpoint(
        page=page,
        filename="02_onboarding_priors_default.png",
        checkpoint_id="02_onboarding_priors_default",
        checkpoint_name="Onboarding: Calibración de Priors (Valores por Defecto)",
        state_desc="Paso 0 de calibración alquímica con primer cóctel seleccionado por defecto y dos sliders continuos al 50% (Equilibrio neutral).",
        container_selector="#test-onboarding-screen",
        transition_info={
            "trigger": "input(#onboarding-state-market-slider, 75) & input(#onboarding-equity-growth-slider, 30)",
            "target": "03_onboarding_sliders_adjusted",
            "type": "user-slider-drag"
        },
        state_mapping_list=state_mapping
    )

    # Ajustar sliders a valores de prueba representativos
    page.eval("""
        (() => {
            const s1 = document.getElementById("onboarding-state-market-slider");
            const s2 = document.getElementById("onboarding-equity-growth-slider");
            if (s1) {
                s1.value = 75;
                if (s1.oninput) s1.oninput({ target: s1 });
                s1.dispatchEvent(new Event("input", { bubbles: true }));
                s1.dispatchEvent(new Event("change", { bubbles: true }));
            }
            if (s2) {
                s2.value = 30;
                if (s2.oninput) s2.oninput({ target: s2 });
                s2.dispatchEvent(new Event("input", { bubbles: true }));
                s2.dispatchEvent(new Event("change", { bubbles: true }));
            }
        })();
    """)
    time.sleep(0.4)

    # =========================================================================
    # CHECKPOINT 3: 03_onboarding_sliders_adjusted.png
    # =========================================================================
    capture_checkpoint(
        page=page,
        filename="03_onboarding_sliders_adjusted.png",
        checkpoint_id="03_onboarding_sliders_adjusted",
        checkpoint_name="Onboarding: Sliders de Priors Ajustados",
        state_desc="Sliders calibrados a 75% Mercado y 30% Equidad con descripciones dinámicas actualizadas en tiempo real.",
        container_selector="#test-onboarding-screen",
        transition_info={
            "trigger": "click(.mini-cocktail-card:nth-child(2))",
            "target": "04_onboarding_cocktail_selected",
            "type": "user-card-selection"
        },
        state_mapping_list=state_mapping
    )

    # Seleccionar segundo cóctel explícitamente (ej: Keynesian Pisco)
    page.eval("""
        (() => {
            const cards = document.querySelectorAll("#onboarding-cocktails-grid .mini-cocktail-card");
            if (cards.length > 1) {
                cards[1].click();
            }
        })();
    """)
    time.sleep(0.4)

    # =========================================================================
    # CHECKPOINT 4: 04_onboarding_cocktail_selected.png
    # =========================================================================
    capture_checkpoint(
        page=page,
        filename="04_onboarding_cocktail_selected.png",
        checkpoint_id="04_onboarding_cocktail_selected",
        checkpoint_name="Onboarding: Cóctel Prior Seleccionado",
        state_desc="Segundo cóctel seleccionado con halo dorado activo (.selected) y priors listos para ser fijados.",
        container_selector="#test-onboarding-screen",
        transition_info={
            "trigger": "click(#onboarding-next-btn)",
            "target": "05_phase1_q1_monism_pluralism",
            "type": "sync-question-init"
        },
        state_mapping_list=state_mapping
    )

    # Confirmar priors e iniciar cuestionario: Clic en #onboarding-next-btn
    page.eval("""
        (() => {
            const btn = document.getElementById("onboarding-next-btn");
            if (btn) btn.click();
        })();
    """)
    time.sleep(0.5)

    # =========================================================================
    # CHECKPOINT 5: 05_phase1_q1_monism_pluralism.png
    # =========================================================================
    capture_checkpoint(
        page=page,
        filename="05_phase1_q1_monism_pluralism.png",
        checkpoint_id="05_phase1_q1_monism_pluralism",
        checkpoint_name="Fase 1: Pregunta 1 (Monismo vs Pluralismo)",
        state_desc="Pregunta 1 de 12: Premisa Metodológica sobre la existencia de una única teoría universal versus múltiples marcos coexistentes.",
        container_selector="#test-question-screen",
        transition_info={
            "trigger": "click(#test-options-grid .test-option-card:first-child)",
            "target": "06_phase1_q2",
            "type": "auto-advance-300ms"
        },
        state_mapping_list=state_mapping
    )

    # Responder Q1 (Opción Monismo) y esperar auto-avance de 300ms
    page.eval("""
        (() => {
            const opts = document.querySelectorAll("#test-options-grid .test-option-card");
            if (opts.length > 0) opts[0].click();
        })();
    """)
    time.sleep(0.6)

    # =========================================================================
    # CHECKPOINT 6: 06_phase1_q2.png
    # =========================================================================
    capture_checkpoint(
        page=page,
        filename="06_phase1_q2.png",
        checkpoint_id="06_phase1_q2",
        checkpoint_name="Fase 1: Pregunta 2 (Racionalidad vs Economía Conductual)",
        state_desc="Pregunta 2 de 12: Premisa Metodológica sobre supuestos de optimización racional versus sesgos cognitivos e imperfecciones psicológicas.",
        container_selector="#test-question-screen",
        transition_info={
            "trigger": "click(#test-options-grid .test-option-card:last-child)",
            "target": "07_phase1_q3",
            "type": "auto-advance-300ms"
        },
        state_mapping_list=state_mapping
    )

    # Responder Q2 (Opción 2) y esperar auto-avance
    page.eval("""
        (() => {
            const opts = document.querySelectorAll("#test-options-grid .test-option-card");
            if (opts.length > 1) opts[1].click();
        })();
    """)
    time.sleep(0.6)

    # =========================================================================
    # CHECKPOINT 7: 07_phase1_q3.png
    # =========================================================================
    capture_checkpoint(
        page=page,
        filename="07_phase1_q3.png",
        checkpoint_id="07_phase1_q3",
        checkpoint_name="Fase 1: Pregunta 3 (Neutralidad vs Conflicto de Poder)",
        state_desc="Pregunta 3 de 12: Premisa Metodológica sobre neutralidad tecnocrática versus conflicto distributivo y economía política.",
        container_selector="#test-question-screen",
        transition_info={
            "trigger": "click(#test-options-grid .test-option-card:first-child)",
            "target": "08_phase2_q4_escuelas",
            "type": "auto-advance-300ms-phase-shift"
        },
        state_mapping_list=state_mapping
    )

    # Responder Q3 y avanzar a Fase 2 (Q4)
    page.eval("""
        (() => {
            const opts = document.querySelectorAll("#test-options-grid .test-option-card");
            if (opts.length > 0) opts[0].click();
        })();
    """)
    time.sleep(0.6)

    # =========================================================================
    # CHECKPOINT 8: 08_phase2_q4_escuelas.png
    # =========================================================================
    capture_checkpoint(
        page=page,
        filename="08_phase2_q4_escuelas.png",
        checkpoint_id="08_phase2_q4_escuelas",
        checkpoint_name="Fase 2: Pregunta 4 (Ingredientes Doctrinales)",
        state_desc="Pregunta 4 de 12: Inicio de Fase 2 con cuadrícula de 4 escuelas doctrinales (mecanismo primordial de coordinación social).",
        container_selector="#test-question-screen",
        transition_info={
            "trigger": "click(#test-options-grid .test-option-card) a lo largo de Q4 a Q8",
            "target": "09_phase2_q9",
            "type": "sequential-auto-advance"
        },
        state_mapping_list=state_mapping
    )

    # Responder Q4 a Q8 sucesivamente para llegar a Q9
    for q_idx in range(4, 9):
        # Responder opción seleccionada alternada (0, 1, 2, 3...)
        chosen = (q_idx - 4) % 4
        page.eval(f"""
            (() => {{
                const opts = document.querySelectorAll("#test-options-grid .test-option-card");
                const idx = {chosen} % opts.length;
                if (opts[idx]) opts[idx].click();
            }})();
        """)
        time.sleep(0.55)

    # =========================================================================
    # CHECKPOINT 9: 09_phase2_q9.png
    # =========================================================================
    capture_checkpoint(
        page=page,
        filename="09_phase2_q9.png",
        checkpoint_id="09_phase2_q9",
        checkpoint_name="Fase 2: Pregunta 9 (Última de Ingredientes Doctrinales)",
        state_desc="Pregunta 9 de 12: Culminación de la Fase 2 con 4 opciones sobre derechos de propiedad, bienes comunes y gestión colectiva.",
        container_selector="#test-question-screen",
        transition_info={
            "trigger": "click(#test-options-grid .test-option-card:first-child)",
            "target": "10_phase3_q10_luxury_slider",
            "type": "auto-advance-300ms-phase-shift"
        },
        state_mapping_list=state_mapping
    )

    # Responder Q9 y avanzar a Fase 3 (Q10)
    page.eval("""
        (() => {
            const opts = document.querySelectorAll("#test-options-grid .test-option-card");
            if (opts.length > 0) opts[0].click();
        })();
    """)
    time.sleep(0.6)

    # Ajustar el slider de Q10 para visibilizar el estado activo
    page.eval("""
        (() => {
            const slider = document.getElementById("luxury-slider");
            if (slider) {
                slider.value = 65;
                if (slider.oninput) slider.oninput({ target: slider });
                slider.dispatchEvent(new Event("input", { bubbles: true }));
                slider.dispatchEvent(new Event("change", { bubbles: true }));
            }
        })();
    """)
    time.sleep(0.4)

    # =========================================================================
    # CHECKPOINT 10: 10_phase3_q10_luxury_slider.png
    # =========================================================================
    capture_checkpoint(
        page=page,
        filename="10_phase3_q10_luxury_slider.png",
        checkpoint_id="10_phase3_q10_luxury_slider",
        checkpoint_name="Fase 3: Pregunta 10 (Dilema de Alta Tensión con Slider)",
        state_desc="Pregunta 10 de 12: Control deslizante de rango continuo (#luxury-slider) entre polos ideológicos con confirmación explícita.",
        container_selector="#test-question-screen",
        transition_info={
            "trigger": "click(#slider-next-btn) a través de Q10, Q11 y Q12",
            "target": "11_loading_screen_alchemical_delay",
            "type": "user-explicit-confirmation"
        },
        state_mapping_list=state_mapping
    )

    # Confirmar Q10
    page.eval("""
        (() => {
            const btn = document.getElementById("slider-next-btn");
            if (btn) btn.click();
        })();
    """)
    time.sleep(0.5)

    # Ajustar y confirmar Q11
    page.eval("""
        (() => {
            const slider = document.getElementById("luxury-slider");
            if (slider) {
                slider.value = 35;
                if (slider.oninput) slider.oninput({ target: slider });
                slider.dispatchEvent(new Event("input", { bubbles: true }));
            }
            const btn = document.getElementById("slider-next-btn");
            if (btn) btn.click();
        })();
    """)
    time.sleep(0.5)

    # Ajustar Q12
    page.eval("""
        (() => {
            const slider = document.getElementById("luxury-slider");
            if (slider) {
                slider.value = 75;
                if (slider.oninput) slider.oninput({ target: slider });
                slider.dispatchEvent(new Event("input", { bubbles: true }));
            }
        })();
    """)
    time.sleep(0.3)

    # Disparar confirmación de Q12: esto ejecuta triggerAlchemicalCalculation()
    # que muestra inmediatamente #test-loading-screen durante 2200ms
    page.eval("""
        (() => {
            const btn = document.getElementById("slider-next-btn");
            if (btn) btn.click();
        })();
    """)
    time.sleep(0.15)  # Tiempo exacto para atrapar la animación activa de carga

    # =========================================================================
    # CHECKPOINT 11: 11_loading_screen_alchemical_delay.png
    # =========================================================================
    capture_checkpoint(
        page=page,
        filename="11_loading_screen_alchemical_delay.png",
        checkpoint_id="11_loading_screen_alchemical_delay",
        checkpoint_name="Pantalla de Carga: Destilación Alquímica Sintética",
        state_desc="Pantalla de procesamiento estético (2.2s de retardo) con spinner de tres anillos concéntricos y barra de progreso al 100%.",
        container_selector="#test-loading-screen",
        transition_info={
            "trigger": "setTimeout 2200ms finalizado (triggerAlchemicalCalculation)",
            "target": "12_results_screen_dashboard",
            "type": "timer-alchemical-complete"
        },
        state_mapping_list=state_mapping
    )

    # Esperar que expire el timeout de 2200ms y se rendericen los resultados en el DOM
    print("[VIBIUM] Esperando 2500ms a que concluya el cálculo alquímico...")
    time.sleep(2.5)

    # =========================================================================
    # CHECKPOINT 12: 12_results_screen_dashboard.png
    # =========================================================================
    capture_checkpoint(
        page=page,
        filename="12_results_screen_dashboard.png",
        checkpoint_id="12_results_screen_dashboard",
        checkpoint_name="Pantalla de Resultados: Dashboard Alquímico Completo",
        state_desc="Acta de sobriedad final con arquetipo intelectual, consistencia ICC, botella de líquido estratificado, radar canvas y barras moleculares.",
        container_selector="#test-results-screen",
        transition_info={
            "trigger": "click(#btn-restart-test)",
            "target": "01_start_screen",
            "type": "full-cycle-reset"
        },
        state_mapping_list=state_mapping,
        scroll_mode="start"
    )

    # Detener el navegador
    print("[VIBIUM] Deteniendo sesión del navegador...")
    browser.stop()

    if server:
        print("[SERVER] Apagando servidor HTTP local...")
        server.shutdown()

    # Guardar archivo maestro de mapeo de estado
    mapping_payload = {
        "schema_version": "1.0.0",
        "generated_at": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "generator": "Vibium 26.8.21 (WebDriver BiDi)",
        "viewport": {
            "width": viewport_width,
            "height": viewport_height,
            "device_scale_factor": 1
        },
        "total_checkpoints": len(state_mapping),
        "checkpoints": state_mapping
    }

    mapping_file = os.path.join(BASELINE_DIR, "state_mapping.json")
    with open(mapping_file, "w", encoding="utf-8") as f:
        json.dump(mapping_payload, f, indent=2, ensure_ascii=False)

    print(f"\n[MAPA DE ESTADO] Guardado exitosamente en: {mapping_file}")
    print(f"[RESUMEN] Total de checkpoints capturados: {len(state_mapping)}/12")
    for cp in state_mapping:
        print(f"  * {cp['snapshot_file']}: {cp['file_size_bytes']:,} bytes | Hash: {cp['image_hash_sha256'][:16]} | Elementos: {cp['interactive_elements_count']}")

if __name__ == "__main__":
    main()
