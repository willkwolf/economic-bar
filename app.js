/**
 * BAR DE ESCUELAS ECONÓMICAS - ELIXIRES DE LA RAZÓN
 * app.js - Lógica interactiva, simulador de fluidos y motor de scoring
 */

import { ESCUELAS, COCTELES, PROBLEMAS, PREGUNTAS, PERFILES_COGNITIVOS, PERFILES_CUADRANTES, PERFILES_CONCENTRACION } from './data.js';

// ── ESTADO GLOBAL DE LA APLICACIÓN ─────────────────────────────────────────
const state = {
  currentTestQuestion: 0,
  answers: {}, // Guardará las respuestas { qId: valor }
  mixingAnimationId: null,
  activeDossierId: null
};

// ── INICIALIZACIÓN ────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  // Inicializar Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  initNavScroll();
  initBottleShelf();
  initCocktailMenu();
  initApothecaryChest();
  initTestEngine();
  initScrollReveal();
});

// ── NAVEGACIÓN REACTIVA AL SCROLL ──────────────────────────────────────────
function initNavScroll() {
  const nav = document.querySelector(".nav-bar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  // Toggle menú móvil
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("hidden");
      navLinks.classList.toggle("mobile-open");
    });
  }
}

// ── HERO: APARADOR DE BOTELLAS INTERACTIVAS ────────────────────────────────
function initBottleShelf() {
  const shelf = document.getElementById("bottles-shelf");
  if (!shelf) return;

  shelf.innerHTML = ""; // Limpiar loading

  // Renderizar las 12 botellas
  Object.values(ESCUELAS).forEach(escuela => {
    const bottleItem = document.createElement("div");
    bottleItem.className = "bottle-item";
    bottleItem.dataset.schoolId = escuela.id;
    
    // Configurar variables CSS individuales para colores reactivos
    bottleItem.style.setProperty("--school-color", escuela.color);
    // Generar color de brillo con opacidad baja
    const r = parseInt(escuela.color.slice(1, 3), 16);
    const g = parseInt(escuela.color.slice(3, 5), 16);
    const b = parseInt(escuela.color.slice(5, 7), 16);
    bottleItem.style.setProperty("--school-color-glow", `rgba(${r}, ${g}, ${b}, 0.25)`);

    bottleItem.innerHTML = `
      <div class="bottle-flask">
        <div class="bottle-neck"></div>
        <div class="bottle-cork"></div>
        <div class="bottle-liquid"></div>
        <div class="bottle-label">${escuela.nombre.substring(0, 4)}.</div>
      </div>
      <span class="bottle-title">${escuela.nombre}</span>
    `;

    // Eventos de Hover para desplegar el Ticket de Boticario (Tooltip)
    bottleItem.addEventListener("mouseenter", (e) => showTastingTooltip(e, escuela));
    bottleItem.addEventListener("mouseleave", hideTastingTooltip);
    
    // Agregar clic para añadir ingrediente al test o al vaso
    bottleItem.addEventListener("click", () => {
      // Si el test está abierto, podemos interactuar de alguna forma divertida o mandar scroll al test
      const testSection = document.getElementById("test");
      if (testSection) {
        testSection.scrollIntoView({ behavior: 'smooth' });
      }
    });

    shelf.appendChild(bottleItem);
  });
}

// ── CONTROL DEL TOOLTIP (TICKET DE CATAS) ──────────────────────────────────
function showTastingTooltip(e, escuela) {
  const tooltip = document.getElementById("bottle-tooltip");
  if (!tooltip) return;

  // Llenar datos
  document.getElementById("tooltip-name").textContent = `Escuela ${escuela.nombre}`;
  document.getElementById("tooltip-founder").textContent = escuela.fundador;
  document.getElementById("tooltip-abv").textContent = escuela.abv;
  document.getElementById("tooltip-notes").textContent = escuela.tastingNotes;
  document.getElementById("tooltip-effects").textContent = escuela.sideEffects;

  // Reposicionar tooltip reactivamente con coordenadas de viewport
  tooltip.classList.add("visible");
  
  const rect = e.currentTarget.getBoundingClientRect();
  const tooltipWidth = tooltip.offsetWidth;
  const tooltipHeight = tooltip.offsetHeight;
  const scrollY = window.scrollY;

  let xPos = rect.left + rect.width / 2 - tooltipWidth / 2;
  let yPos = rect.top + scrollY - tooltipHeight - 15; // 15px de holgura superior

  // Evitar desbordamiento por la izquierda/derecha de la pantalla
  if (xPos < 10) xPos = 10;
  if (xPos + tooltipWidth > window.innerWidth - 10) {
    xPos = window.innerWidth - tooltipWidth - 10;
  }

  // Evitar desbordamiento superior
  if (rect.top - tooltipHeight < 80) {
    yPos = rect.bottom + scrollY + 15; // Colocar debajo de la botella si no cabe arriba
  }

  tooltip.style.left = `${xPos}px`;
  tooltip.style.top = `${yPos}px`;
}

function hideTastingTooltip() {
  const tooltip = document.getElementById("bottle-tooltip");
  if (tooltip) {
    tooltip.classList.remove("visible");
  }
}

// ── CARTA DE CÓCTELES ──────────────────────────────────────────────────────
function initCocktailMenu() {
  const grid = document.getElementById("cocktails-grid");
  if (!grid) return;

  grid.innerHTML = "";

  COCTELES.forEach(coctel => {
    const card = document.createElement("div");
    card.className = "cocktail-card";
    card.style.setProperty("--cocktail-color", coctel.colorPredominante);
    
    // Configurar color de brillo
    const r = parseInt(coctel.colorPredominante.slice(1, 3), 16);
    const g = parseInt(coctel.colorPredominante.slice(3, 5), 16);
    const b = parseInt(coctel.colorPredominante.slice(5, 7), 16);
    card.style.setProperty("--cocktail-color-glow", `rgba(${r}, ${g}, ${b}, 0.15)`);

    // Traducir ingredientes a badges
    const ingredientBadges = Object.entries(coctel.ingredientes)
      .map(([id, pct]) => {
        const escName = ESCUELAS[id] ? ESCUELAS[id].nombre : id;
        return `<span class="ingredient-badge">${pct}% ${escName}</span>`;
      }).join("");

    card.innerHTML = `
      <div class="cocktail-meta">
        <span class="cocktail-intensity">${coctel.intensidad}</span>
        <i data-lucide="droplet" style="color: ${coctel.colorPredominante}"></i>
      </div>
      <h3 class="cocktail-card-title">${coctel.nombre}</h3>
      <p class="cocktail-card-desc">${coctel.descripcion}</p>
      <div class="cocktail-card-ingredients">
        ${ingredientBadges}
      </div>
    `;

    // Clic abre el Cajón Lateral de Mezclado
    card.addEventListener("click", () => openMixingDrawer(coctel));

    grid.appendChild(card);
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// ── CAJÓN LATERAL DE MEZCLADO Y ANIMACIÓN CANVAS ────────────────────────────
function openMixingDrawer(coctel) {
  const drawer = document.getElementById("mixing-drawer");
  if (!drawer) return;

  // Llenar información detallada
  document.getElementById("mix-title").textContent = coctel.nombre;
  document.getElementById("mix-intensity").textContent = coctel.intensidad;
  document.getElementById("mix-vector-x").textContent = coctel.vectores.x;
  document.getElementById("mix-vector-y").textContent = coctel.vectores.y;
  document.getElementById("mix-notes").textContent = coctel.tastingNotes;
  document.getElementById("mix-risks").textContent = coctel.riesgosSistemicos;

  // Llenar lista de ingredientes
  const ingList = document.getElementById("mix-ingredients");
  ingList.innerHTML = "";
  Object.entries(coctel.ingredientes).forEach(([schoolId, pct]) => {
    const escuela = ESCUELAS[schoolId];
    if (!escuela) return;
    
    const item = document.createElement("div");
    item.className = "recipe-item";
    item.innerHTML = `
      <span class="recipe-item-name">
        <span class="recipe-dot" style="background-color: ${escuela.color}"></span>
        ${escuela.nombre}
      </span>
      <span class="recipe-pct">${pct}%</span>
    `;
    ingList.appendChild(item);
  });

  // Abrir Drawer
  drawer.classList.add("open");

  // Detener cualquier animación previa del líquido
  if (state.mixingAnimationId) {
    cancelAnimationFrame(state.mixingAnimationId);
  }

  // Lanzar la simulación líquida del cóctel en Canvas
  startLiquidSimulation(coctel);

  // Botón volver a mezclar
  const reheatBtn = document.getElementById("mix-reheat-btn");
  reheatBtn.onclick = () => {
    startLiquidSimulation(coctel);
  };
}

// Cerrar Drawer
const closeDrawer = () => {
  const drawer = document.getElementById("mixing-drawer");
  if (drawer) {
    drawer.classList.remove("open");
    if (state.mixingAnimationId) {
      cancelAnimationFrame(state.mixingAnimationId);
    }
  }
};
document.getElementById("drawer-close-btn")?.addEventListener("click", closeDrawer);
document.getElementById("drawer-close-overlay")?.addEventListener("click", closeDrawer);

// ── SIMULADOR DE FLUIDOS EN CANVAS 2D ──────────────────────────────────────
function startLiquidSimulation(coctel) {
  const canvas = document.getElementById("liquid-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;

  // Estructura de capas basada en los ingredientes del cóctel
  // Cada ingrediente tiene color y porcentaje de volumen
  let totalPct = 0;
  const layers = Object.entries(coctel.ingredientes).map(([id, pct]) => {
    totalPct += pct;
    const esc = ESCUELAS[id];
    return {
      color: esc ? esc.color : "#d9a752",
      targetVolume: pct / 100,
      currentVolume: 0, // Inicia vacío
      waveOffset: Math.random() * 100
    };
  });

  let fillProgress = 0; // Progreso general de llenado de 0 a 1
  let bubbles = []; // Array para burbujas ascendentes
  let splashParticles = []; // Partículas de salpicadura

  // Geometría del Vaso de Cóctel (Forma trapezoidal de lujo)
  const glassPadding = 30;
  const glassBottomY = height - 30;
  const glassTopY = 40;
  const glassBottomWidth = 120;
  const glassTopWidth = 190;

  // Función para obtener el ancho del vaso a una altura Y específica
  const getGlassWidthAtY = (y) => {
    const pct = (glassBottomY - y) / (glassBottomY - glassTopY);
    return glassBottomWidth + (glassTopWidth - glassBottomWidth) * pct;
  };

  const drawGlassOutline = () => {
    ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.beginPath();
    // Borde izquierdo
    ctx.moveTo(width / 2 - glassTopWidth / 2, glassTopY);
    ctx.lineTo(width / 2 - glassBottomWidth / 2, glassBottomY);
    // Base curva
    ctx.arcTo(width / 2, glassBottomY + 12, width / 2 + glassBottomWidth / 2, glassBottomY, 40);
    // Borde derecho
    ctx.lineTo(width / 2 + glassTopWidth / 2, glassTopY);
    ctx.stroke();

    // Fondo del vaso pesado
    ctx.fillStyle = "rgba(255, 255, 255, 0.02)";
    ctx.beginPath();
    ctx.moveTo(width / 2 - glassBottomWidth / 2 + 3, glassBottomY - 2);
    ctx.arcTo(width / 2, glassBottomY + 10, width / 2 + glassBottomWidth / 2 - 3, glassBottomY - 2, 38);
    ctx.closePath();
    ctx.fill();
  };

  let tick = 0;

  const animate = () => {
    tick++;
    ctx.clearRect(0, 0, width, height);

    // 1. Incrementar el volumen de llenado de forma secuencial
    fillProgress = Math.min(fillProgress + 0.007, 1);

    // Calcular la acumulación de capas
    let currentY = glassBottomY;

    // Dibujar las capas líquidas
    layers.forEach((layer, index) => {
      // Llenado dinámico paulatino de cada capa
      layer.currentVolume = Math.min(layer.targetVolume * fillProgress * 1.05, layer.targetVolume);
      
      const layerHeight = layer.currentVolume * (glassBottomY - glassTopY - 20);
      if (layerHeight <= 0) return;

      const layerTopY = currentY - layerHeight;
      const layerBottomY = currentY;

      // Dibujar la masa del líquido
      ctx.fillStyle = layer.color;
      ctx.globalAlpha = 0.75;

      ctx.beginPath();
      
      // Mapear geometría para seguir la forma trapezoidal del vaso
      const leftTopX = width / 2 - getGlassWidthAtY(layerTopY) / 2;
      const rightTopX = width / 2 + getGlassWidthAtY(layerTopY) / 2;
      const leftBottomX = width / 2 - getGlassWidthAtY(layerBottomY) / 2;
      const rightBottomX = width / 2 + getGlassWidthAtY(layerBottomY) / 2;

      // Curva superior interactiva (Ondulación sinodal)
      const waveFreq = 0.04;
      const waveAmp = fillProgress < 1 ? 2.5 : 1.2; // Menos ola al estabilizar
      const waveSpeed = 0.08;

      ctx.moveTo(leftTopX, layerTopY);
      
      // Dibujar ola senoidal desde izquierda a derecha
      for (let x = leftTopX; x <= rightTopX; x += 5) {
        const relativeX = (x - leftTopX) / (rightTopX - leftTopX);
        const wave = Math.sin(tick * waveSpeed + relativeX * Math.PI * 2 + layer.waveOffset) * waveAmp;
        ctx.lineTo(x, layerTopY + wave);
      }

      ctx.lineTo(rightBottomX, layerBottomY);
      ctx.lineTo(leftBottomX, layerBottomY);
      ctx.closePath();
      ctx.fill();

      // Efecto brillo/borde de la capa líquida
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Guardar Y superior para la siguiente capa
      currentY = layerTopY;
    });

    ctx.globalAlpha = 1.0;

    // 2. Simulación de Chorro de Vertido Alquímico (pouring stream)
    if (fillProgress < 0.95) {
      ctx.fillStyle = layers[layers.length - 1].color;
      ctx.globalAlpha = 0.8;
      
      // Dibujar un chorro dinámico cayendo del cielo
      ctx.beginPath();
      const streamX = width / 2 + Math.sin(tick * 0.1) * 3;
      ctx.moveTo(streamX - 2.5, 0);
      ctx.lineTo(streamX - 1.5, currentY);
      ctx.lineTo(streamX + 1.5, currentY);
      ctx.lineTo(streamX + 2.5, 0);
      ctx.closePath();
      ctx.fill();
      
      ctx.globalAlpha = 1.0;

      // Partículas de Salpicadura en el impacto del chorro
      if (Math.random() < 0.4) {
        splashParticles.push({
          x: width / 2 + (Math.random() - 0.5) * 20,
          y: currentY,
          vx: (Math.random() - 0.5) * 4,
          vy: -Math.random() * 3 - 1,
          color: layers[layers.length - 1].color,
          alpha: 1.0,
          size: Math.random() * 2.5 + 1
        });
      }
    }

    // 3. Renderizar y actualizar partículas de salpicadura
    splashParticles.forEach((p, idx) => {
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();

      // Gravedad
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.12; // Gravedad
      p.alpha -= 0.025;

      if (p.alpha <= 0 || p.y > glassBottomY) {
        splashParticles.splice(idx, 1);
      }
    });

    ctx.globalAlpha = 1.0;

    // 4. Renderizar y actualizar burbujas gaseosas ascendentes
    if (Math.random() < 0.12 && fillProgress > 0.1) {
      // Spawn en capas aleatorias
      bubbles.push({
        x: width / 2 + (Math.random() - 0.5) * (glassBottomWidth - 10),
        y: glassBottomY - 10,
        vy: -Math.random() * 1.5 - 0.6,
        size: Math.random() * 2.5 + 0.8,
        alpha: Math.random() * 0.4 + 0.2
      });
    }

    bubbles.forEach((b, idx) => {
      ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
      ctx.globalAlpha = b.alpha;
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.size, 0, Math.PI * 2);
      ctx.stroke();

      b.y += b.vy;
      b.x += Math.sin(tick * 0.05 + b.size) * 0.3; // Oscilación horizontal suave

      // Desaparecer si sube del nivel de líquido superior
      if (b.y < currentY || b.y < glassTopY) {
        bubbles.splice(idx, 1);
      }
    });

    ctx.globalAlpha = 1.0;

    // 5. Dibujar el vaso al final para que la cristalería encuadre el líquido
    drawGlassOutline();

    state.mixingAnimationId = requestAnimationFrame(animate);
  };

  animate();
}

// ── SECCIÓN 3: APOTHECARY CHEST (Gabinete de Problemas) ───────────────────
function initApothecaryChest() {
  const chest = document.getElementById("apothecary-chest");
  if (!chest) return;

  chest.innerHTML = "";

  PROBLEMAS.forEach((prob, index) => {
    const drawer = document.createElement("div");
    drawer.className = "cabinet-drawer";
    drawer.dataset.probId = prob.id;
    
    // Engravado de número elegante en romano
    const romNum = ["I", "II", "III", "IV", "V", "VI"][index] || (index + 1);

    drawer.innerHTML = `
      <div class="drawer-handle"></div>
      <span class="drawer-label">${romNum}. ${prob.titulo}</span>
    `;

    // Clic abre expediente
    drawer.addEventListener("click", () => openDossier(prob.id));

    chest.appendChild(drawer);
  });
}

function openDossier(probId) {
  const prob = PROBLEMAS.find(p => p.id === probId);
  if (!prob) return;

  // Desactivar cajón anterior y activar nuevo
  document.querySelectorAll(".cabinet-drawer").forEach(dr => {
    if (dr.dataset.probId === probId) {
      dr.classList.add("active");
    } else {
      dr.classList.remove("active");
    }
  });

  const emptyState = document.getElementById("dossier-empty");
  const sheet = document.getElementById("dossier-sheet");

  // Esconder empty y animar entrada del pergamino
  emptyState.classList.add("hidden");
  sheet.classList.remove("hidden");

  // Llenar cabecera del pergamino
  document.getElementById("dossier-title").textContent = prob.titulo;
  document.getElementById("dossier-question").textContent = prob.pregunta;

  // Llenar las 3 prescripciones escolares
  const presList = document.getElementById("dossier-prescriptions");
  presList.innerHTML = "";

  prob.dossier.forEach(pres => {
    const item = document.createElement("div");
    item.className = "prescription-item";
    
    // Configurar pH visual (acidez regulatoria estatal vs alcalinidad de mercado)
    const phWidth = pres.ph; // % de 0 a 100

    item.innerHTML = `
      <div class="prescription-header">
        <span class="prescription-school">PRESCRIPCIÓN: Escuela ${pres.escuela}</span>
        <div class="ph-metric">
          <span class="ph-label">pH Estatal:</span>
          <div class="ph-bar-track" title="Nivel de intervención del Estado">
            <div class="ph-bar-fill" style="width: ${phWidth}%;"></div>
          </div>
        </div>
      </div>
      <p class="prescription-desc">${pres.remedio}</p>
      <span class="prescription-toxicity"><i data-lucide="shield-alert" class="icon-inline"></i> Toxicidad Colateral: ${pres.toxicidad}</span>
    `;

    presList.appendChild(item);
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// ── SECCIÓN 4: MOTOR DE PREGUNTAS DEL TEST ────────────────────────────────
function initTestEngine() {
  const startBtn = document.getElementById("start-test-btn");
  const startScreen = document.getElementById("test-start-screen");
  const questionScreen = document.getElementById("test-question-screen");

  if (!startBtn) return;

  // Iniciar Test
  startBtn.addEventListener("click", () => {
    startScreen.classList.add("hidden");
    questionScreen.classList.remove("hidden");
    state.currentTestQuestion = 0;
    state.answers = {};
    renderQuestion();
  });

  // Listener para el Slider de la Fase 3
  const slider = document.getElementById("luxury-slider");
  const readout = document.getElementById("slider-value-readout");
  if (slider && readout) {
    slider.addEventListener("input", (e) => {
      const val = parseInt(e.target.value);
      let text = "Equilibrio Central (50%)";
      if (val < 40) {
        text = `Sesgo Mercado (${100 - val * 2}%)`;
      } else if (val > 60) {
        text = `Sesgo Planificación (${(val - 50) * 2}%)`;
      }
      readout.textContent = text;
    });
  }

  // Clic en Siguiente Pregunta para el Slider
  const sliderNextBtn = document.getElementById("slider-next-btn");
  if (sliderNextBtn) {
    sliderNextBtn.addEventListener("click", () => {
      const val = parseInt(slider.value) / 100; // Normalizar a [0, 1]
      const q = PREGUNTAS[state.currentTestQuestion];
      
      state.answers[q.id] = val; // Guardar valor analógico del slider
      
      state.currentTestQuestion++;
      if (state.currentTestQuestion < PREGUNTAS.length) {
        renderQuestion();
      } else {
        triggerAlchemicalCalculation();
      }
    });
  }
}

// RENDERIZADOR DE PREGUNTA DEL TEST
function renderQuestion() {
  const q = PREGUNTAS[state.currentTestQuestion];
  if (!q) return;

  // Actualizar indicadores visuales
  document.getElementById("test-step-label").textContent = `PREGUNTA ${state.currentTestQuestion + 1} DE ${PREGUNTAS.length}`;
  
  // Traducir nombre de Fase
  let phaseText = "FASE 1: ARQUITECTURA COGNITIVA";
  if (q.fase === 2) phaseText = "FASE 2: INGREDIENTES IDEOLÓGICOS";
  if (q.fase === 3) phaseText = "FASE 3: DILEMAS DE ALTA TENSIÓN";
  document.getElementById("test-phase-label").textContent = phaseText;

  // Rellenar barra de progreso
  const pct = ((state.currentTestQuestion) / PREGUNTAS.length) * 100;
  document.getElementById("test-progress-fill").style.width = `${pct}%`;

  // Rellenar texto de pregunta
  document.getElementById("test-question-text").textContent = q.texto;

  const optionsGrid = document.getElementById("test-options-grid");
  const sliderWrapper = document.getElementById("test-slider-wrapper");

  // Reset del slider
  const slider = document.getElementById("luxury-slider");
  if (slider) {
    slider.value = 50;
    document.getElementById("slider-value-readout").textContent = "Equilibrio Central (50%)";
  }

  if (q.fase === 1 || q.fase === 2) {
    // Mostrar GRID y ocultar SLIDER
    optionsGrid.classList.remove("hidden");
    sliderWrapper.classList.add("hidden");

    optionsGrid.innerHTML = "";
    
    q.opciones.forEach((opt, idx) => {
      const card = document.createElement("div");
      card.className = "test-option-card";
      
      card.innerHTML = `
        <div class="option-marker"></div>
        <p class="option-text">${opt.texto}</p>
      `;

      card.addEventListener("click", () => {
        // Añadir clase seleccionada y retrasar ligeramente el paso para feedback visual
        card.classList.add("selected");
        
        // Guardar respuesta
        if (q.fase === 1) {
          state.answers[q.id] = opt.tipo; // "erizo" o "zorro"
        } else {
          state.answers[q.id] = opt.pesos; // Guardar objeto de pesos { escuela: valor }
        }

        setTimeout(() => {
          state.currentTestQuestion++;
          if (state.currentTestQuestion < PREGUNTAS.length) {
            renderQuestion();
          } else {
            triggerAlchemicalCalculation();
          }
        }, 300);
      });

      optionsGrid.appendChild(card);
    });

  } else if (q.fase === 3) {
    // Mostrar SLIDER y ocultar GRID
    optionsGrid.classList.add("hidden");
    sliderWrapper.classList.remove("hidden");

    // Llenar los polos conceptuales del Slider
    document.getElementById("slider-left-text").textContent = q.izquierda.texto;
    document.getElementById("slider-right-text").textContent = q.derecha.texto;
  }
}

// ── SPINNER DE ALQUIMIA Y CÁLCULOS ─────────────────────────────────────────
function triggerAlchemicalCalculation() {
  const questionScreen = document.getElementById("test-question-screen");
  const loadingScreen = document.getElementById("test-loading-screen");
  const resultsScreen = document.getElementById("test-results-screen");

  questionScreen.classList.add("hidden");
  loadingScreen.classList.remove("hidden");

  // Barra de progreso llena
  document.getElementById("test-progress-fill").style.width = "100%";

  setTimeout(() => {
    // Ejecutar motor matemático vectorial de alcoholemia
    const results = calculateAlchemicalResults();

    loadingScreen.classList.add("hidden");
    resultsScreen.classList.remove("hidden");

    // Renderizar los resultados detallados en UI
    renderResultsToUI(results);

  }, 2200); // 2.2 segundos para atmósfera dramática de mezcla
}

// ── MOTOR DE CÁLCULO VECTORIAL HHI ─────────────────────────────────────────
function calculateAlchemicalResults() {
  // Inicializar vector de pesos de escuelas con ceros
  const w = {};
  Object.keys(ESCUELAS).forEach(id => {
    w[id] = 0;
  });

  let zorroAnswersCount = 0;

  // Procesar respuestas
  Object.entries(state.answers).forEach(([qId, val]) => {
    const q = PREGUNTAS.find(p => p.id === qId);
    if (!q) return;

    if (q.fase === 1) {
      if (val === "zorro") zorroAnswersCount++;
    } else if (q.fase === 2) {
      // Sumar pesos de afinidad ideológica directos
      Object.entries(val).forEach(([schoolId, weight]) => {
        if (w[schoolId] !== undefined) {
          w[schoolId] += weight;
        }
      });
    } else if (q.fase === 3) {
      // Interpolador continuo lineal de Sliders: t de 0 a 1
      const t = val; // Posición de slider (0 es izquierda extrema, 1 derecha extrema)
      
      // Lado Izquierdo
      Object.entries(q.izquierda.pesos).forEach(([schoolId, weight]) => {
        if (w[schoolId] !== undefined) {
          w[schoolId] += (1 - t) * weight;
        }
      });
      // Lado Derecho
      Object.entries(q.derecha.pesos).forEach(([schoolId, weight]) => {
        if (w[schoolId] !== undefined) {
          w[schoolId] += t * weight;
        }
      });
    }
  });

  // Asegurar que no quede todo en cero (fallback preventivo)
  let sumW = Object.values(w).reduce((acc, val) => acc + val, 0);
  if (sumW === 0) {
    w.neoclasica = 1;
    w.keynesiana = 1;
    sumW = 2;
  }

  // 1. Normalizar porcentajes de ingredientes (suma 100)
  const porcentajes = {};
  Object.entries(w).forEach(([id, val]) => {
    porcentajes[id] = Math.round((val / sumW) * 100);
  });

  // Ajustar redondeos para asegurar suma exacta de 100
  let currentSum = Object.values(porcentajes).reduce((acc, val) => acc + val, 0);
  if (currentSum !== 100) {
    const diff = 100 - currentSum;
    // Buscar la escuela más alta y sumarle la diferencia
    const highestSchool = Object.keys(porcentajes).reduce((a, b) => porcentajes[a] > porcentajes[b] ? a : b);
    porcentajes[highestSchool] += diff;
  }

  // 2. Calcular Índice de Herfindahl-Hirschman (HHI) para medir Entropía
  let hhi = 0;
  Object.values(porcentajes).forEach(pct => {
    hhi += Math.pow(pct / 100, 2);
  });

  // 3. Determinar Arquetipo Epistémico de Isaiah Berlin
  const epistemicStyle = zorroAnswersCount >= 2 ? "zorro" : "erizo";
  const realPurity = hhi >= 0.18 ? "erizo" : "zorro"; // HHI >= 0.18 es concentrado (erizo)

  let finalArchetypeKey = "zorro_sistemico";
  if (epistemicStyle === "erizo" && realPurity === "erizo") finalArchetypeKey = "erizo_doctrinal";
  else if (epistemicStyle === "zorro" && realPurity === "zorro") finalArchetypeKey = "zorro_sistemico";
  else if (epistemicStyle === "erizo" && realPurity === "zorro") finalArchetypeKey = "erizo_tension";
  else if (epistemicStyle === "zorro" && realPurity === "erizo") finalArchetypeKey = "zorro_pragmatico";

  // 4. Mapear Centro de Gravedad por Cuadrantes
  const qScores = {
    Q1: porcentajes.marxista + porcentajes.feminista + porcentajes.ecologica,
    Q2: porcentajes.conductista,
    Q3: porcentajes.keynesiana + porcentajes.tradicion_desarrollista + porcentajes.estado_emprendedor + porcentajes.institucionalista,
    Q4: porcentajes.clasica + porcentajes.neoclasica + porcentajes.austriaca + porcentajes.schumpeteriana
  };

  const dominantQuadrant = Object.keys(qScores).reduce((a, b) => qScores[a] > qScores[b] ? a : b);

  // 5. Mapear Perfil de Concentración y su Resaca
  let concentrationKey = "sintetico";
  if (hhi >= 0.25) concentrationKey = "monocultura";
  else if (hhi < 0.12) concentrationKey = "disperso";

  return {
    porcentajes,
    hhi,
    archetype: PERFILES_COGNITIVOS[finalArchetypeKey],
    quadrant: PERFILES_CUADRANTES[dominantQuadrant],
    concentration: PERFILES_CONCENTRACION[concentrationKey],
    qScores
  };
}

// ── RENDERIZAR RESULTADOS A LA INTERFAZ ───────────────────────────────────
function renderResultsToUI(results) {
  // 1. Cabecera de Arquetipo
  document.getElementById("result-archetype-name").textContent = results.archetype.nombre;
  document.getElementById("result-archetype-sub").textContent = results.archetype.subtitulo;
  document.getElementById("result-archetype-desc").textContent = `${results.archetype.descripcion} ${results.quadrant.descripcion}`;

  document.getElementById("result-virtue").textContent = results.archetype.virtud;

  // 2. Resacas y Riesgos
  document.getElementById("result-hangover-title").innerHTML = `<i data-lucide="alert-octagon"></i> RIESGO DE RESACA: ${results.concentration.riesgo}`;
  document.getElementById("result-hangover-desc").textContent = `${results.concentration.narrativa} ${results.archetype.resaca}`;

  // 3. Renderizar Lista de Barras de Ingredientes (Filtrar > 0%)
  const barList = document.getElementById("results-bar-list");
  barList.innerHTML = "";

  // Ordenar escuelas de mayor a menor porcentaje
  const sortedSchools = Object.entries(results.porcentajes)
    .filter(([_, pct]) => pct > 0)
    .sort((a, b) => b[1] - a[1]);

  sortedSchools.forEach(([schoolId, pct]) => {
    const escuela = ESCUELAS[schoolId];
    if (!escuela) return;

    const item = document.createElement("div");
    item.className = "result-bar-item";
    
    item.innerHTML = `
      <div class="result-bar-header">
        <span class="result-bar-name">${escuela.nombre}</span>
        <span class="result-bar-val">${pct}%</span>
      </div>
      <div class="result-bar-track">
        <div class="result-bar-fill" style="--bar-color: ${escuela.color}"></div>
      </div>
    `;

    barList.appendChild(item);

    // Animación de rampa progresiva en barra de progreso
    setTimeout(() => {
      item.querySelector(".result-bar-fill").style.width = `${pct}%`;
    }, 100);
  });

  // 4. Inyectar Líquidos de Capas en la Botella Personalizada
  const bottleLiquid = document.getElementById("bottle-liquid-container");
  bottleLiquid.innerHTML = "";

  // Usar los 4 principales ingredientes ordenados para las capas
  const topIngredients = sortedSchools.slice(0, 4);
  const totalVolumeInBottle = topIngredients.reduce((acc, curr) => acc + curr[1], 0);

  topIngredients.forEach(([schoolId, pct]) => {
    const escuela = ESCUELAS[schoolId];
    if (!escuela) return;

    // Calcular proporción relativa dentro del frasco (que se llena un 80% total)
    const relativeHeight = (pct / totalVolumeInBottle) * 100;

    const layer = document.createElement("div");
    layer.className = "liquid-layer";
    layer.style.setProperty("--layer-color", escuela.color);
    layer.style.setProperty("--layer-height", "0%");

    bottleLiquid.appendChild(layer);

    // Animación de llenado progresivo
    setTimeout(() => {
      layer.style.setProperty("--layer-height", `${relativeHeight}%`);
    }, 150);
  });

  // 5. Dibujar Gráfico de Radar en el Canvas nativo
  renderRadarChart(results.qScores);

  // Botón Reiniciar
  document.getElementById("btn-restart-test").onclick = () => {
    document.getElementById("test-results-screen").classList.add("hidden");
    document.getElementById("test-start-screen").classList.remove("hidden");
  };

  // Botón Exportar Tarjeta
  document.getElementById("btn-export-card").onclick = () => {
    exportTastingCard(results);
  };

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// ── RENDER DEL GRÁFICO DE RADAR EN CANVAS NATIVO ───────────────────────────
function renderRadarChart(qScores) {
  const canvas = document.getElementById("radar-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const cx = width / 2;
  const cy = height / 2;
  const radius = Math.min(width, height) / 2 - 30; // 30px margen para etiquetas

  ctx.clearRect(0, 0, width, height);

  // Ejes del Radar: 
  // Arriba (Q1): Equidad
  // Derecha (Q2 / Q2 no es un cuadrante complejo en Chang pero lo mapeamos a individual/mercado):
  // Usamos el mapeo coordinado del spec:
  // Eje Y+ (Arriba): Equidad y Sostenibilidad
  // Eje X+ (Derecha): Mercado libre y Descentralización
  // Eje Y- (Abajo): Productividad y Crecimiento
  // Eje X- (Izquierda): Estado y Planificación
  const axes = [
    { label: "Equidad", score: qScores.Q1 + qScores.Q2 * 0.5 },
    { label: "Mercado", score: qScores.Q4 + qScores.Q2 * 0.5 },
    { label: "Crecimiento", score: qScores.Q4 * 0.3 + qScores.Q3 * 0.7 },
    { label: "Estado", score: qScores.Q1 * 0.4 + qScores.Q3 * 0.6 }
  ];

  const maxVal = 100;
  const levels = 4;

  // 1. Dibujar círculos concéntricos de niveles
  ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
  ctx.lineWidth = 1;
  for (let i = 1; i <= levels; i++) {
    const r = (radius / levels) * i;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();
  }

  // 2. Dibujar líneas de los ejes
  ctx.strokeStyle = "rgba(217, 167, 82, 0.12)";
  ctx.beginPath();
  axes.forEach((_, idx) => {
    const angle = (Math.PI / 2) * idx - Math.PI / 2; // Iniciar en el eje Y+ (arriba)
    const ax = cx + Math.cos(angle) * radius;
    const ay = cy + Math.sin(angle) * radius;
    ctx.moveTo(cx, cy);
    ctx.lineTo(ax, ay);
  });
  ctx.stroke();

  // 3. Calcular puntos del polígono del usuario
  const points = axes.map((axis, idx) => {
    const angle = (Math.PI / 2) * idx - Math.PI / 2;
    // Ponderar puntaje para que siempre brille en el gráfico de forma proporcional
    const normScore = Math.max(axis.score, 10); // mínimo visual
    const dist = (normScore / maxVal) * radius * 1.5; // multiplicador de escala
    const clampedDist = Math.min(dist, radius);
    return {
      x: cx + Math.cos(angle) * clampedDist,
      y: cy + Math.sin(angle) * clampedDist
    };
  });

  // 4. Dibujar polígono relleno con gradiente
  ctx.fillStyle = "rgba(217, 167, 82, 0.2)";
  ctx.strokeStyle = "#d9a752";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Dibujar pequeños diamantes en los vértices del polígono
  ctx.fillStyle = "#fcd34d";
  points.forEach(pt => {
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, 3, 0, Math.PI * 2);
    ctx.fill();
  });

  // 5. Dibujar etiquetas de texto para los ejes
  ctx.fillStyle = "rgba(245, 243, 239, 0.4)";
  ctx.font = "bold 9px 'JetBrains Mono', monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  const offsets = [
    { x: 0, y: -15 },  // Equidad (arriba)
    { x: 25, y: 0 },   // Mercado (derecha)
    { x: 0, y: 15 },   // Crecimiento (abajo)
    { x: -25, y: 0 }   // Estado (izquierda)
  ];

  axes.forEach((axis, idx) => {
    const angle = (Math.PI / 2) * idx - Math.PI / 2;
    const tx = cx + Math.cos(angle) * (radius + 20) + offsets[idx].x;
    const ty = cy + Math.sin(angle) * (radius + 12) + offsets[idx].y;
    ctx.fillText(axis.label.toUpperCase(), tx, ty);
  });
}

// ── EXPORTACIÓN DE LA TARJETA DE CATAS (Browser Print) ──────────────────────
function exportTastingCard(results) {
  // Formatear ingredientes ordenados en texto legible
  const topIngredients = Object.entries(results.porcentajes)
    .filter(([_, pct]) => pct > 0)
    .sort((a, b) => b[1] - a[1])
    .map(([id, pct]) => `${pct}% ${ESCUELAS[id].nombre}`)
    .join(" / ");

  // Crear una ventana estilizada optimizada para impresión (estilo tarjeta de lujo speakeasy)
  const printWindow = window.open("", "_blank");
  printWindow.document.write(`
    <html>
      <head>
        <title>Mi Tarjeta de Alcoholemia Política - Elixires de la Razón</title>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Plus+Jakarta+Sans:wght@300;500;700&family=JetBrains+Mono&display=swap" rel="stylesheet">
        <style>
          body {
            background-color: #060606;
            color: #f5f3ef;
            font-family: 'Plus Jakarta Sans', sans-serif;
            padding: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          .ticket-card {
            border: 2px solid #b88628;
            padding: 40px;
            max-width: 540px;
            width: 100%;
            background-color: #0d0d0c;
            box-shadow: 0 20px 50px rgba(0,0,0,0.8);
            position: relative;
          }
          .card-header {
            border-bottom: 1px solid #b88628;
            padding-bottom: 20px;
            margin-bottom: 25px;
            text-align: center;
          }
          .title-tag {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.65rem;
            color: #d9a752;
            letter-spacing: 0.2em;
          }
          h1 {
            font-family: 'Cormorant Garamond', serif;
            font-size: 2.8rem;
            margin: 10px 0 5px 0;
            font-weight: 400;
          }
          .archetype-sub {
            font-family: 'Cormorant Garamond', serif;
            font-style: italic;
            font-size: 1.4rem;
            color: #d9a752;
          }
          .card-block {
            margin-bottom: 20px;
          }
          .block-label {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.65rem;
            color: #d9a752;
            letter-spacing: 0.1em;
            display: block;
            margin-bottom: 5px;
          }
          .block-text {
            font-size: 0.85rem;
            line-height: 1.5;
            color: rgba(245,243,239,0.8);
            font-weight: 300;
          }
          .watermark {
            text-align: center;
            margin-top: 30px;
            border-top: 1px dashed rgba(255,255,255,0.08);
            padding-top: 20px;
            font-size: 0.65rem;
            color: rgba(245,243,239,0.3);
          }
          @media print {
            body { background: white; color: black; }
            .ticket-card { border-color: black; background: white; color: black; box-shadow: none; }
            .block-text { color: black; }
            .title-tag, .block-label, .archetype-sub { color: black; }
          }
        </style>
      </head>
      <body>
        <div class="ticket-card">
          <div class="card-header">
            <span class="title-tag">ACTA OFICIAL DE ALCOHOLEMIA</span>
            <h1>${results.archetype.nombre}</h1>
            <span class="archetype-sub">${results.archetype.subtitulo}</span>
          </div>

          <div class="card-block">
            <span class="block-label">FÓRMULA MOLECULAR DE DOCTRINAS</span>
            <p class="block-text" style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem;">${topIngredients}</p>
          </div>

          <div class="card-block">
            <span class="block-label">DIAGNÓSTICO COGNITIVO</span>
            <p class="block-text">${results.archetype.descripcion} ${results.quadrant.descripcion}</p>
          </div>

          <div class="card-block">
            <span class="block-label">VIRTUD INTELECTUAL</span>
            <p class="block-text">${results.archetype.virtud}</p>
          </div>

          <div class="card-block">
            <span class="block-label">RIESGO LATENTE DE RESACA</span>
            <p class="block-text">${results.concentration.riesgo}: ${results.concentration.narrativa} ${results.archetype.resaca}</p>
          </div>

          <div class="watermark">
            CÁTEDRA DE COCTELERÍA ECONÓMICA • ELIXIRES DE LA RAZÓN
          </div>
        </div>
        <script>
          window.onload = function() {
            window.print();
          }
        </script>
      </body>
    </html>
  `);
  printWindow.document.close();
}

// ── INTERSECTION OBSERVER PARA TRANSICIONES REVEAL ─────────────────────────
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        // Desregistrar para no recalcular
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12 // Activa cuando el 12% del componente está en viewport
  });

  document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
  });
}
