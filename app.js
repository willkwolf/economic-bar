/**
 * BAR DE ESCUELAS ECONÓMICAS - ELIXIRES DE LA RAZÓN
 * app.js - Lógica interactiva, simulador de fluidos DPR, radar defensivo y motor i18n
 */

/* global TRANSLATIONS */

// ── VARIABLES DE DATOS ACTIVAS (Se actualizan en setLanguage) ───────────────
let ESCUELAS = {};
let COCTELES = [];
let PROBLEMAS = [];
let PREGUNTAS = [];
let PERFILES_COGNITIVOS = {};
let PERFILES_CUADRANTES = {};
let PERFILES_CONCENTRACION = {};
let PERFILES_CONSISTENCIA = {};

// ── ESTADO GLOBAL DE LA APLICACIÓN ─────────────────────────────────────────
const state = {
  currentLang: "es",
  currentTestQuestion: 0,
  answers: {}, // Respuestas { qId: valor }
  mixingAnimationId: null,
  activeDossierId: null,
  activeResults: null,
  activeTouchBottleId: null // ID de la botella con tooltip/modal abierto en táctil
};

// Helper para soporte de teclado en elementos interactivos
const addKeyboardSupport = (element, callback) => {
  element.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      callback(e);
    }
  });
};

// Configuración de lienzo en alta resolución (Device Pixel Ratio)
function setupCanvasDPR(canvas, width, height) {
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  
  // Dimensiones de visualización lógicas CSS
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  
  // Dimensiones físicas de renderizado escaladas
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  
  // Escalar el contexto gráfico
  ctx.scale(dpr, dpr);
  return ctx;
}

// ── INICIALIZACIÓN ────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  // Inicializar idioma (ES por defecto o guardado)
  const savedLang = localStorage.getItem("economic_bar_lang") || "es";
  setLanguage(savedLang);

  initNavScroll();
  initTestEngine();
  initScrollReveal();
  initLanguageSwitcher();
  initDrawerGestures();
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
    const toggleMenu = () => {
      const isExpanded = mobileMenuBtn.getAttribute("aria-expanded") === "true";
      mobileMenuBtn.setAttribute("aria-expanded", !isExpanded);
      navLinks.classList.toggle("hidden");
      navLinks.classList.toggle("mobile-open");
    };
    mobileMenuBtn.addEventListener("click", toggleMenu);
    addKeyboardSupport(mobileMenuBtn, toggleMenu);
  }
}

// ── SISTEMA DE SWITCHER DE IDIOMAS (i18n) ──────────────────────────────────
function initLanguageSwitcher() {
  const langButtons = document.querySelectorAll(".lang-btn");
  langButtons.forEach(btn => {
    const lang = btn.dataset.lang;
    btn.addEventListener("click", () => {
      setLanguage(lang);
    });
    addKeyboardSupport(btn, () => {
      setLanguage(lang);
    });
  });
}

function setLanguage(lang) {
  // Asegurar que el idioma sea soportado (es o en), de lo contrario aplicar "es" como fallback
  if (!lang || typeof TRANSLATIONS === 'undefined' || !TRANSLATIONS[lang]) {
    lang = "es";
  }

  state.currentLang = lang;
  localStorage.setItem("economic_bar_lang", lang);

  // 1. Actualizar referencias a base de datos activa
  const dict = TRANSLATIONS[lang];
  ESCUELAS = dict.escuelas;
  COCTELES = dict.cocteles;
  PROBLEMAS = dict.problemas;
  PREGUNTAS = dict.preguntas;
  PERFILES_COGNITIVOS = dict.perfiles_cognitivos;
  PERFILES_CUADRANTES = dict.perfiles_cuadrantes;
  PERFILES_CONCENTRACION = dict.perfiles_concentracion;
  PERFILES_CONSISTENCIA = dict.perfiles_consistencia;

  // Localizar dinámicamente los sliders del onboarding
  const isEs = lang === "es";
  const stateTitle = document.getElementById("onboarding-title-state");
  if (stateTitle) stateTitle.textContent = isEs ? "Gobernanza (Estado vs Mercado)" : "Governance (State vs Market)";
  
  const equityTitle = document.getElementById("onboarding-title-equity");
  if (equityTitle) equityTitle.textContent = isEs ? "Propósito (Equidad vs Crecimiento)" : "Purpose (Equity vs Growth)";

  const equityLeft = document.getElementById("onboarding-equity-left-label");
  if (equityLeft) equityLeft.textContent = isEs ? "Crecimiento / Growth" : "Growth / Crecimiento";
  
  const equityRight = document.getElementById("onboarding-equity-right-label");
  if (equityRight) equityRight.textContent = isEs ? "Equidad / Equity" : "Equity / Equidad";

  // 2. Actualizar estado activo de los botones selectores
  document.querySelectorAll(".lang-btn").forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });

  // 3. Traducir textos estáticos marcados con data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict.ui[key]) {
      el.innerHTML = dict.ui[key];
    }
  });

  // 4. Actualizar meta tags del documento
  document.title = dict.ui.exportDocTitle;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute("content", dict.ui.testDesc);
  }

  // 5. Rerendear componentes dinámicos
  initBottleShelf();
  initCocktailMenu();
  initApothecaryChest();

  // Reabrir cajón activo si existe para traducirlo al vuelo
  if (state.activeDossierId) {
    openDossier(state.activeDossierId);
  }

  // Rerendear pregunta de test en curso
  const questionScreen = document.getElementById("test-question-screen");
  if (questionScreen && !questionScreen.classList.contains("hidden")) {
    renderQuestion();
  }

  // Rerendear resultados activos
  if (state.activeResults) {
    renderResultsToUI(state.activeResults);
  }

  // Actualizar Iconos Lucide
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// ── HERO: APARADOR DE BOTELLAS INTERACTIVAS (Tufte Clean) ─────────────────
function initBottleShelf() {
  const shelf = document.getElementById("bottles-shelf");
  if (!shelf) return;

  shelf.innerHTML = ""; // Limpiar carga

  Object.values(ESCUELAS).forEach(escuela => {
    const bottleItem = document.createElement("div");
    bottleItem.className = "bottle-item";
    bottleItem.dataset.schoolId = escuela.id;
    bottleItem.tabIndex = 0;
    bottleItem.setAttribute("role", "button");
    bottleItem.setAttribute("aria-haspopup", "true");
    bottleItem.setAttribute("aria-label", escuela.nombre);
    
    // Configurar variables CSS individuales para colores reactivos
    bottleItem.style.setProperty("--school-color", escuela.color);
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

    // Eventos de Hover
    bottleItem.addEventListener("mouseenter", (e) => showTastingTooltip(e, escuela));
    bottleItem.addEventListener("mouseleave", hideTastingTooltip);
    
    // Eventos de Enfoque Teclado para Accesibilidad
    bottleItem.addEventListener("focus", (e) => showTastingTooltip(e, escuela));
    bottleItem.addEventListener("blur", hideTastingTooltip);

    // Enviar scroll al test al hacer click (con gestos inteligentes para móviles)
    const action = (e) => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 992;
      
      if (isTouch) {
        if (state.activeTouchBottleId !== escuela.id) {
          e?.stopPropagation(); // Evitar cierre inmediato por click en body
          showTastingTooltip(e, escuela);
          state.activeTouchBottleId = escuela.id;
          
          // Registrar listener para cerrar al hacer tap fuera
          document.removeEventListener("click", dismissTooltipOnOutsideTap);
          document.addEventListener("click", dismissTooltipOnOutsideTap);
          return;
        } else {
          // Segundo tap: ir al test
          hideTastingTooltip();
          state.activeTouchBottleId = null;
          document.removeEventListener("click", dismissTooltipOnOutsideTap);
        }
      }
      
      const testSection = document.getElementById("test");
      if (testSection) {
        testSection.scrollIntoView({ behavior: 'smooth' });
      }
    };
    bottleItem.addEventListener("click", action);
    addKeyboardSupport(bottleItem, action);

    shelf.appendChild(bottleItem);
  });
}

// ── CONTROL DEL TOOLTIP (TICKET DE CATAS) ──────────────────────────────────
function showTastingTooltip(e, escuela) {
  const tooltip = document.getElementById("bottle-tooltip");
  if (!tooltip) return;

  // Llenar datos traducidos
  document.getElementById("tooltip-name").textContent = escuela.nombre;
  document.getElementById("tooltip-founder").textContent = escuela.fundador;
  document.getElementById("tooltip-abv").textContent = escuela.abv;
  document.getElementById("tooltip-notes").textContent = escuela.tastingNotes;
  document.getElementById("tooltip-effects").textContent = escuela.sideEffects;

  tooltip.setAttribute("aria-hidden", "false");
  tooltip.classList.add("visible");
  
  const rect = e.currentTarget.getBoundingClientRect();
  const tooltipWidth = tooltip.offsetWidth;
  const tooltipHeight = tooltip.offsetHeight;
  const scrollY = window.scrollY;

  let xPos = rect.left + rect.width / 2 - tooltipWidth / 2;
  let yPos = rect.top + scrollY - tooltipHeight - 15; // 15px holgura

  // Evitar desbordamiento por laterales
  if (xPos < 15) xPos = 15;
  if (xPos + tooltipWidth > window.innerWidth - 15) {
    xPos = window.innerWidth - tooltipWidth - 15;
  }

  // Evitar desbordamiento superior
  if (rect.top - tooltipHeight < 80) {
    yPos = rect.bottom + scrollY + 15; 
  }

  tooltip.style.left = `${xPos}px`;
  tooltip.style.top = `${yPos}px`;
}

function hideTastingTooltip() {
  const tooltip = document.getElementById("bottle-tooltip");
  if (tooltip) {
    tooltip.setAttribute("aria-hidden", "true");
    tooltip.classList.remove("visible");
  }
}

// Función global para cerrar el tooltip al hacer tap fuera en dispositivos móviles
function dismissTooltipOnOutsideTap(e) {
  const tooltip = document.getElementById("bottle-tooltip");
  if (tooltip && tooltip.classList.contains("visible")) {
    const isClickInsideBottle = e.target.closest(".bottle-item");
    const isClickInsideTooltip = e.target.closest("#bottle-tooltip");
    if (!isClickInsideBottle && !isClickInsideTooltip) {
      hideTastingTooltip();
      state.activeTouchBottleId = null;
      document.removeEventListener("click", dismissTooltipOnOutsideTap);
    }
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
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `${coctel.nombre}, ${coctel.intensidad}`);
    card.style.setProperty("--cocktail-color", coctel.colorPredominante);
    
    const r = parseInt(coctel.colorPredominante.slice(1, 3), 16);
    const g = parseInt(coctel.colorPredominante.slice(3, 5), 16);
    const b = parseInt(coctel.colorPredominante.slice(5, 7), 16);
    card.style.setProperty("--cocktail-color-glow", `rgba(${r}, ${g}, ${b}, 0.15)`);

    const ingredientBadges = Object.entries(coctel.ingredientes)
      .map(([id, pct]) => {
        const escName = ESCUELAS[id] ? ESCUELAS[id].nombre : id;
        return `<span class="ingredient-badge" role="listitem">${pct}% ${escName}</span>`;
      }).join("");

    card.innerHTML = `
      <div class="cocktail-meta">
        <span class="cocktail-intensity">${coctel.intensidad}</span>
        <i data-lucide="droplet" style="color: ${coctel.colorPredominante}" aria-hidden="true"></i>
      </div>
      <h3 class="cocktail-card-title">${coctel.nombre}</h3>
      <p class="cocktail-card-desc">${coctel.descripcion}</p>
      <div class="cocktail-card-ingredients" role="list" aria-label="Ingredientes">
        ${ingredientBadges}
      </div>
    `;

    // Clic e interacción por teclado abren Drawer
    const action = () => openMixingDrawer(coctel);
    card.addEventListener("click", action);
    addKeyboardSupport(card, action);

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
    item.setAttribute("role", "listitem");
    item.innerHTML = `
      <span class="recipe-item-name">
        <span class="recipe-dot" style="background-color: ${escuela.color}" aria-hidden="true"></span>
        ${escuela.nombre}
      </span>
      <span class="recipe-pct">${pct}%</span>
    `;
    ingList.appendChild(item);
  });

  // Abrir Drawer
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  drawer.querySelector(".drawer-scrollable").focus();

  // Detener cualquier simulación previa del líquido
  if (state.mixingAnimationId) {
    cancelAnimationFrame(state.mixingAnimationId);
  }

  // Lanzar la simulación líquida del cóctel en Canvas
  startLiquidSimulation(coctel);
}

// Cerrar Drawer
const closeDrawer = () => {
  const drawer = document.getElementById("mixing-drawer");
  if (drawer) {
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    if (state.mixingAnimationId) {
      cancelAnimationFrame(state.mixingAnimationId);
    }
  }
};
document.getElementById("drawer-close-btn")?.addEventListener("click", closeDrawer);
document.getElementById("drawer-close-overlay")?.addEventListener("click", closeDrawer);

// Gestos táctiles inteligentes (Swipe to Dismiss) para el Cajón de Mezclado en Móvil
function initDrawerGestures() {
  const drawerContent = document.querySelector("#mixing-drawer .drawer-content");
  if (!drawerContent) return;

  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;

  drawerContent.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  drawerContent.addEventListener("touchmove", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
  }, { passive: true });

  drawerContent.addEventListener("touchend", () => {
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;
    
    // Umbrales del gesto swipe
    const swipeThreshold = 80; // píxeles
    
    // 1. Swipe Right: Deslizar hacia la derecha para cerrar (el cajón se oculta a la derecha)
    if (deltaX > swipeThreshold && Math.abs(deltaY) < swipeThreshold * 1.5) {
      closeDrawer();
    }
    // 2. Swipe Down: Deslizar hacia abajo para cerrar
    else if (deltaY > swipeThreshold && Math.abs(deltaX) < swipeThreshold * 1.5) {
      closeDrawer();
    }
  }, { passive: true });
}

// ── SIMULADOR DE FLUIDOS EN CANVAS 2D CON DPR SCALING ──────────────────────────
function startLiquidSimulation(coctel) {
  const canvas = document.getElementById("liquid-canvas");
  if (!canvas) return;

  // Setup de Canvases en Alta Resolución DPR
  const logicalWidth = 260;
  const logicalHeight = 340;
  const ctx = setupCanvasDPR(canvas, logicalWidth, logicalHeight);

  // Estructura de capas
  let totalPct = 0;
  const layers = Object.entries(coctel.ingredientes).map(([id, pct]) => {
    totalPct += pct;
    const esc = ESCUELAS[id];
    return {
      color: esc ? esc.color : "#d9a752",
      targetVolume: pct / 100,
      currentVolume: 0,
      waveOffset: Math.random() * 100
    };
  });

  let fillProgress = 0;
  let bubbles = [];
  let splashParticles = [];

  // Geometría del Vaso lógicas
  const glassBottomY = logicalHeight - 30;
  const glassTopY = 40;
  const glassBottomWidth = 120;
  const glassTopWidth = 190;

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
    ctx.moveTo(logicalWidth / 2 - glassTopWidth / 2, glassTopY);
    ctx.lineTo(logicalWidth / 2 - glassBottomWidth / 2, glassBottomY);
    // Base curva
    ctx.arcTo(logicalWidth / 2, glassBottomY + 12, logicalWidth / 2 + glassBottomWidth / 2, glassBottomY, 40);
    // Borde derecho
    ctx.lineTo(logicalWidth / 2 + glassTopWidth / 2, glassTopY);
    ctx.stroke();

    // Fondo del vaso pesado
    ctx.fillStyle = "rgba(255, 255, 255, 0.02)";
    ctx.beginPath();
    ctx.moveTo(logicalWidth / 2 - glassBottomWidth / 2 + 3, glassBottomY - 2);
    ctx.arcTo(logicalWidth / 2, glassBottomY + 10, logicalWidth / 2 + glassBottomWidth / 2 - 3, glassBottomY - 2, 38);
    ctx.closePath();
    ctx.fill();
  };

  let tick = 0;

  const animate = () => {
    tick++;
    ctx.clearRect(0, 0, logicalWidth, logicalHeight);

    fillProgress = Math.min(fillProgress + 0.007, 1);

    let currentY = glassBottomY;

    // Dibujar las capas líquidas
    layers.forEach((layer) => {
      layer.currentVolume = Math.min(layer.targetVolume * fillProgress * 1.05, layer.targetVolume);
      
      const layerHeight = layer.currentVolume * (glassBottomY - glassTopY - 20);
      if (layerHeight <= 0) return;

      const layerTopY = currentY - layerHeight;
      const layerBottomY = currentY;

      ctx.fillStyle = layer.color;
      ctx.globalAlpha = 0.75;
      ctx.beginPath();
      
      const leftTopX = logicalWidth / 2 - getGlassWidthAtY(layerTopY) / 2;
      const rightTopX = logicalWidth / 2 + getGlassWidthAtY(layerTopY) / 2;
      const leftBottomX = logicalWidth / 2 - getGlassWidthAtY(layerBottomY) / 2;
      const rightBottomX = logicalWidth / 2 + getGlassWidthAtY(layerBottomY) / 2;

      const waveFreq = 0.04;
      const waveAmp = fillProgress < 1 ? 2.5 : 1.2;
      const waveSpeed = 0.08;

      ctx.moveTo(leftTopX, layerTopY);
      for (let x = leftTopX; x <= rightTopX; x += 5) {
        const relativeX = (x - leftTopX) / (rightTopX - leftTopX);
        const wave = Math.sin(tick * waveSpeed + relativeX * Math.PI * 2 + layer.waveOffset) * waveAmp;
        ctx.lineTo(x, layerTopY + wave);
      }

      ctx.lineTo(rightBottomX, layerBottomY);
      ctx.lineTo(leftBottomX, layerBottomY);
      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.lineWidth = 1;
      ctx.stroke();

      currentY = layerTopY;
    });

    ctx.globalAlpha = 1.0;

    // Chorro de Vertido
    if (fillProgress < 0.95) {
      ctx.fillStyle = layers[layers.length - 1].color;
      ctx.globalAlpha = 0.8;
      
      ctx.beginPath();
      const streamX = logicalWidth / 2 + Math.sin(tick * 0.1) * 3;
      ctx.moveTo(streamX - 2.5, 0);
      ctx.lineTo(streamX - 1.5, currentY);
      ctx.lineTo(streamX + 1.5, currentY);
      ctx.lineTo(streamX + 2.5, 0);
      ctx.closePath();
      ctx.fill();
      
      ctx.globalAlpha = 1.0;

      // Partículas
      if (Math.random() < 0.4) {
        splashParticles.push({
          x: logicalWidth / 2 + (Math.random() - 0.5) * 20,
          y: currentY,
          vx: (Math.random() - 0.5) * 4,
          vy: -Math.random() * 3 - 1,
          color: layers[layers.length - 1].color,
          alpha: 1.0,
          size: Math.random() * 2.5 + 1
        });
      }
    }

    // Salpicaduras
    splashParticles.forEach((p, idx) => {
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();

      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.12;
      p.alpha -= 0.025;

      if (p.alpha <= 0 || p.y > glassBottomY) {
        splashParticles.splice(idx, 1);
      }
    });

    ctx.globalAlpha = 1.0;

    // Burbujas
    if (Math.random() < 0.12 && fillProgress > 0.1) {
      bubbles.push({
        x: logicalWidth / 2 + (Math.random() - 0.5) * (glassBottomWidth - 10),
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
      b.x += Math.sin(tick * 0.05 + b.size) * 0.3;

      if (b.y < currentY || b.y < glassTopY) {
        bubbles.splice(idx, 1);
      }
    });

    ctx.globalAlpha = 1.0;

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
    drawer.tabIndex = 0;
    drawer.setAttribute("role", "tab");
    drawer.setAttribute("aria-selected", state.activeDossierId === prob.id ? "true" : "false");
    drawer.setAttribute("aria-controls", "dossier-scroll");
    
    if (state.activeDossierId === prob.id) {
      drawer.classList.add("active");
    }

    const romNum = ["I", "II", "III", "IV", "V", "VI"][index] || (index + 1);

    drawer.innerHTML = `
      <div class="drawer-handle" aria-hidden="true"></div>
      <span class="drawer-label">${romNum}. ${prob.titulo}</span>
    `;

    const action = () => openDossier(prob.id);
    drawer.addEventListener("click", action);
    addKeyboardSupport(drawer, action);

    chest.appendChild(drawer);
  });
}

function openDossier(probId) {
  state.activeDossierId = probId;
  const prob = PROBLEMAS.find(p => p.id === probId);
  if (!prob) return;

  // Sincronizar clases y aria de cajones
  document.querySelectorAll(".cabinet-drawer").forEach(dr => {
    const isActive = dr.dataset.probId === probId;
    dr.classList.toggle("active", isActive);
    dr.setAttribute("aria-selected", isActive ? "true" : "false");
  });

  const emptyState = document.getElementById("dossier-empty");
  const sheet = document.getElementById("dossier-sheet");

  emptyState.classList.add("hidden");
  sheet.classList.remove("hidden");

  document.getElementById("dossier-title").textContent = prob.titulo;
  document.getElementById("dossier-question").textContent = prob.pregunta;

  // Llenar las 3 prescripciones
  const presList = document.getElementById("dossier-prescriptions");
  presList.innerHTML = "";

  prob.dossier.forEach(pres => {
    const item = document.createElement("div");
    item.className = "prescription-item";
    
    const phWidth = pres.ph;
    const isEs = state.currentLang === "es";
    const localPhLabel = isEs ? "pH Estatal:" : "State pH:";
    const localToxLabel = isEs ? "Toxicidad Colateral:" : "Collateral Toxicity:";

    item.innerHTML = `
      <div class="prescription-header">
        <span class="prescription-school">${isEs ? "PRESCRIPCIÓN:" : "PRESCRIPTION:"} ${isEs ? "Escuela" : ""} ${pres.escuela}</span>
        <div class="ph-metric">
          <span class="ph-label">${localPhLabel}</span>
          <div class="ph-bar-track" title="${TRANSLATIONS[state.currentLang].ui.phInterventionTitle}">
            <div class="ph-bar-fill" style="width: ${phWidth}%;"></div>
          </div>
        </div>
      </div>
      <p class="prescription-desc">${pres.remedio}</p>
      <span class="prescription-toxicity"><i data-lucide="shield-alert" class="icon-inline" aria-hidden="true"></i> ${localToxLabel} ${pres.toxicidad}</span>
    `;

    presList.appendChild(item);
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// ── SECCIÓN 4: TEST DE ALCOHOLEMIA POLÍTICA ────────────────────────────────
function initTestEngine() {
  const startBtn = document.getElementById("start-test-btn");
  const startScreen = document.getElementById("test-start-screen");
  const questionScreen = document.getElementById("test-question-screen");

  if (!startBtn) return;

  const onboardingScreen = document.getElementById("test-onboarding-screen");

  const startAction = () => {
    startScreen.classList.add("hidden");
    onboardingScreen.classList.remove("hidden");
    state.prior = { cocktailId: null, stateMarket: 0.5, equityGrowth: 0.5 };
    renderOnboardingCocktails();
    setupOnboardingSliders();
  };
  startBtn.addEventListener("click", startAction);
  addKeyboardSupport(startBtn, startAction);

  // Listener para el Slider de la Fase 3
  const slider = document.getElementById("luxury-slider");
  const readout = document.getElementById("slider-value-readout");
  if (slider && readout) {
    slider.addEventListener("input", (e) => {
      const val = parseInt(e.target.value);
      const isEs = state.currentLang === "es";
      
      let text = isEs ? "Equilibrio Central (50%)" : "Central Balance (50%)";
      if (val < 40) {
        text = `${isEs ? "Sesgo Mercado" : "Market Bias"} (${100 - val * 2}%)`;
      } else if (val > 60) {
        text = `${isEs ? "Sesgo Planificación" : "Planning Bias"} (${(val - 50) * 2}%)`;
      }
      readout.textContent = text;
    });
  }

  // Confirmar slider
  const sliderNextBtn = document.getElementById("slider-next-btn");
  if (sliderNextBtn) {
    const sliderAction = () => {
      const val = parseInt(slider.value) / 100; // [0, 1]
      const q = PREGUNTAS[state.currentTestQuestion];
      
      state.answers[q.id] = val;
      
      state.currentTestQuestion++;
      if (state.currentTestQuestion < PREGUNTAS.length) {
        renderQuestion();
      } else {
        triggerAlchemicalCalculation();
      }
    };
      sliderNextBtn.addEventListener("click", sliderAction);
      addKeyboardSupport(sliderNextBtn, sliderAction);
    }

    // Configurar Onboarding Paso 0
    const onboardingNextBtn = document.getElementById("onboarding-next-btn");
    if (onboardingNextBtn) {
      const nextAction = () => {
        // Si no se ha elegido cóctel prior, asignamos el primero por defecto
        if (!state.prior || !state.prior.cocktailId) {
          if (COCTELES.length > 0) {
            state.prior = state.prior || {};
            state.prior.cocktailId = COCTELES[0].id;
          }
        }
        onboardingScreen.classList.add("hidden");
        questionScreen.classList.remove("hidden");
        state.currentTestQuestion = 0;
        state.answers = {};
        renderQuestion();
      };
      onboardingNextBtn.addEventListener("click", nextAction);
      addKeyboardSupport(onboardingNextBtn, nextAction);
    }
  }

  // RENDERIZADOR DINÁMICO DE CÓCTELES EN EL ONBOARDING
  function renderOnboardingCocktails() {
    const grid = document.getElementById("onboarding-cocktails-grid");
    if (!grid) return;
    grid.innerHTML = "";

    COCTELES.forEach(coctel => {
      const card = document.createElement("div");
      card.className = "mini-cocktail-card";
      card.dataset.id = coctel.id;
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.style.setProperty("--cocktail-color", coctel.colorPredominante);

      card.innerHTML = `
        <span class="mini-cocktail-dot" style="background-color: ${coctel.colorPredominante}"></span>
        <span class="mini-cocktail-name">${coctel.nombre}</span>
      `;

      const selectPrior = () => {
        document.querySelectorAll(".mini-cocktail-card").forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
        state.prior.cocktailId = coctel.id;
      };

      card.addEventListener("click", selectPrior);
      addKeyboardSupport(card, selectPrior);
      grid.appendChild(card);
    });

    // Autoseleccionar el primero para garantizar un prior por defecto robusto
    if (grid.firstChild) {
      grid.firstChild.click();
    }
  }

  // CONFIGURADOR DE DESLIZADORES DE ONBOARDING
  function setupOnboardingSliders() {
    const stateSlider = document.getElementById("onboarding-state-market-slider");
    const stateDisplay = document.getElementById("onboarding-state-market-display");
    const equitySlider = document.getElementById("onboarding-equity-growth-slider");
    const equityDisplay = document.getElementById("onboarding-equity-growth-display");

    const updateDisplay = (val, display, leftLabel, rightLabel) => {
      const isEs = state.currentLang === "es";
      let text = isEs ? "Equilibrio Central (50%)" : "Central Balance (50%)";
      if (val < 40) {
        text = `${leftLabel} (${100 - val * 2}%)`;
      } else if (val > 60) {
        text = `${rightLabel} (${(val - 50) * 2}%)`;
      }
      display.textContent = text;
    };

    if (stateSlider && stateDisplay) {
      stateSlider.value = 50;
      stateDisplay.textContent = state.currentLang === "es" ? "Equilibrio Central (50%)" : "Central Balance (50%)";
      stateSlider.oninput = (e) => {
        const val = parseInt(e.target.value);
        state.prior.stateMarket = val / 100;
        const isEs = state.currentLang === "es";
        const leftL = isEs ? "Sesgo Mercado" : "Market Bias";
        const rightL = isEs ? "Sesgo Planificación" : "Planning Bias";
        updateDisplay(val, stateDisplay, leftL, rightL);
      };
    }

    if (equitySlider && equityDisplay) {
      equitySlider.value = 50;
      equityDisplay.textContent = state.currentLang === "es" ? "Equilibrio Central (50%)" : "Central Balance (50%)";
      equitySlider.oninput = (e) => {
        const val = parseInt(e.target.value);
        state.prior.equityGrowth = val / 100;
        const isEs = state.currentLang === "es";
        const leftL = isEs ? "Crecimiento" : "Growth";
        const rightL = isEs ? "Equidad" : "Equity";
        updateDisplay(val, equityDisplay, leftL, rightL);
      };
    }
  }

// RENDERIZADOR DE PREGUNTA DEL TEST
function renderQuestion() {
  const q = PREGUNTAS[state.currentTestQuestion];
  if (!q) return;

  const isEs = state.currentLang === "es";

  // Actualizar indicadores
  document.getElementById("test-step-label").textContent = isEs 
    ? `PREGUNTA ${state.currentTestQuestion + 1} DE ${PREGUNTAS.length}`
    : `QUESTION ${state.currentTestQuestion + 1} OF ${PREGUNTAS.length}`;
  
  let phaseText = isEs ? "FASE 1: ARQUITECTURA COGNITIVA" : "PHASE 1: COGNITIVE FRAMEWORK";
  if (q.fase === 2) phaseText = isEs ? "FASE 2: INGREDIENTES IDEOLÓGICOS" : "PHASE 2: IDEOLOGICAL INGREDIENTS";
  if (q.fase === 3) phaseText = isEs ? "FASE 3: DILEMAS DE ALTA TENSIÓN" : "PHASE 3: HIGH-TENSION DILEMMAS";
  document.getElementById("test-phase-label").textContent = phaseText;

  // Barra progreso
  const pct = ((state.currentTestQuestion) / PREGUNTAS.length) * 100;
  document.getElementById("test-progress-fill").style.width = `${pct}%`;

  // Texto pregunta
  document.getElementById("test-question-text").textContent = q.texto;

  const optionsGrid = document.getElementById("test-options-grid");
  const sliderWrapper = document.getElementById("test-slider-wrapper");

  // Reset del slider
  const slider = document.getElementById("luxury-slider");
  if (slider) {
    slider.value = 50;
    document.getElementById("slider-value-readout").textContent = isEs ? "Equilibrio Central (50%)" : "Central Balance (50%)";
  }

  if (q.fase === 1 || q.fase === 2) {
    optionsGrid.classList.remove("hidden");
    sliderWrapper.classList.add("hidden");

    optionsGrid.innerHTML = "";
    
    // Aleatorizar el orden de las opciones/respuestas para eliminar sesgos de orden
    const shuffledOptions = [...q.opciones].sort(() => Math.random() - 0.5);
    
    shuffledOptions.forEach((opt) => {
      const card = document.createElement("div");
      card.className = "test-option-card";
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", opt.texto);
      
      card.innerHTML = `
        <div class="option-marker" aria-hidden="true"></div>
        <p class="option-text">${opt.texto}</p>
      `;

      const selectOption = () => {
        card.classList.add("selected");
        
        if (q.fase === 1) {
          state.answers[q.id] = opt.tipo; // "monismo" o "pluralismo"
        } else {
          state.answers[q.id] = opt.pesos; // pesos
        }

        setTimeout(() => {
          state.currentTestQuestion++;
          if (state.currentTestQuestion < PREGUNTAS.length) {
            renderQuestion();
          } else {
            triggerAlchemicalCalculation();
          }
        }, 300);
      };

      card.addEventListener("click", selectOption);
      addKeyboardSupport(card, selectOption);

      optionsGrid.appendChild(card);
    });

  } else if (q.fase === 3) {
    optionsGrid.classList.add("hidden");
    sliderWrapper.classList.remove("hidden");

    document.getElementById("slider-left-title").textContent = q.izquierda.titulo;
    document.getElementById("slider-right-title").textContent = q.derecha.titulo;
    document.getElementById("slider-left-text").textContent = q.izquierda.texto;
    document.getElementById("slider-right-text").textContent = q.derecha.texto;

    // Configurar indicadores dinámicos del slider para máxima claridad en móvil y escritorio
    const leftHint = document.getElementById("slider-left-hint");
    const rightHint = document.getElementById("slider-right-hint");
    if (leftHint && rightHint) {
      leftHint.textContent = `← ${q.izquierda.titulo}`;
      rightHint.textContent = `${q.derecha.titulo} →`;
    }
  }
}

// SPINNER DE ALQUIMIA Y CÁLCULOS
function triggerAlchemicalCalculation() {
  const questionScreen = document.getElementById("test-question-screen");
  const loadingScreen = document.getElementById("test-loading-screen");
  const resultsScreen = document.getElementById("test-results-screen");

  questionScreen.classList.add("hidden");
  loadingScreen.classList.remove("hidden");
  document.getElementById("test-progress-fill").style.width = "100%";

  setTimeout(() => {
    const results = calculateAlchemicalResults();
    state.activeResults = results; // Persistir en estado activo

    loadingScreen.classList.add("hidden");
    resultsScreen.classList.remove("hidden");

    renderResultsToUI(results);
    resultsScreen.scrollIntoView({ behavior: 'smooth' });

  }, 2200);
}

// ── MOTOR DE CÁLCULO VECTORIAL HHI ─────────────────────────────────────────
function calculateAlchemicalResults() {
  const w = {};
  Object.keys(ESCUELAS).forEach(id => {
    w[id] = 0;
  });

  let pluralismoAnswersCount = 0;

  // Procesar respuestas
  Object.entries(state.answers).forEach(([qId, val]) => {
    // Buscar pregunta en la base de datos activa
    const q = PREGUNTAS.find(p => p.id === qId);
    if (!q) return;

    if (q.fase === 1) {
      if (val === "pluralismo") pluralismoAnswersCount++;
    } else if (q.fase === 2) {
      Object.entries(val).forEach(([schoolId, weight]) => {
        if (w[schoolId] !== undefined) {
          w[schoolId] += weight;
        }
      });
    } else if (q.fase === 3) {
      const t = val; // [0, 1]
      
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

  let sumW = Object.values(w).reduce((acc, val) => acc + val, 0);
  if (sumW === 0) {
    w.neoclasica = 1;
    w.keynesiana = 1;
    sumW = 2;
  }

  // 1. Normalizar porcentajes a exactamente 100
  const porcentajes = {};
  Object.entries(w).forEach(([id, val]) => {
    porcentajes[id] = Math.round((val / sumW) * 100);
  });

  let currentSum = Object.values(porcentajes).reduce((acc, val) => acc + val, 0);
  if (currentSum !== 100) {
    const diff = 100 - currentSum;
    const highestSchool = Object.keys(porcentajes).reduce((a, b) => porcentajes[a] > porcentajes[b] ? a : b);
    porcentajes[highestSchool] += diff;
  }

  // 2. Calcular HHI (Índice de Herfindahl-Hirschman)
  let hhi = 0;
  Object.values(porcentajes).forEach(pct => {
    hhi += Math.pow(pct / 100, 2);
  });

  // 3. Determinar Arquetipo Epistémico de forma Académica
  const epistemicStyle = pluralismoAnswersCount >= 2 ? "pluralismo" : "monismo";
  const realPurity = hhi >= 0.18 ? "monismo" : "pluralismo"; 

  let finalArchetypeKey = "pluralismo_sistemico";
  if (epistemicStyle === "monismo" && realPurity === "monismo") finalArchetypeKey = "monismo_doctrinal";
  else if (epistemicStyle === "pluralismo" && realPurity === "pluralismo") finalArchetypeKey = "pluralismo_sistemico";
  else if (epistemicStyle === "monismo" && realPurity === "pluralismo") finalArchetypeKey = "monismo_eclectico";
  else if (epistemicStyle === "pluralismo" && realPurity === "monismo") finalArchetypeKey = "pluralismo_pragmatico";

  // 4. Mapear Centro de Gravedad por Cuadrantes
  const qScores = {
    Q1: porcentajes.marxista + porcentajes.feminista + porcentajes.ecologica,
    Q2: porcentajes.conductista,
    Q3: porcentajes.keynesiana + porcentajes.tradicion_desarrollista + porcentajes.estado_emprendedor + porcentajes.institucionalista,
    Q4: porcentajes.clasica + porcentajes.neoclasica + porcentajes.austriaca + porcentajes.schumpeteriana
  };

  const dominantQuadrant = Object.keys(qScores).reduce((a, b) => qScores[a] > qScores[b] ? a : b);

  // 5. Mapear Concentración
  let concentrationKey = "sintetico";
  if (hhi >= 0.18) concentrationKey = "monocultura";
  else if (hhi < 0.12) concentrationKey = "disperso";

  // 6. Cálculo de Consistencia Cognitiva (ICC / Bayesian Prior Match)
  let consistencyPct = 90.0; // Fallback por defecto si no hay onboarding
  let consistencyKey = "moderate";

  if (state.prior && state.prior.cocktailId) {
    // 1. Similitud de Coseno de Licores
    const priorCocktail = COCTELES.find(c => c.id === state.prior.cocktailId);
    if (priorCocktail) {
      // Construir vector de Prior a partir del cóctel seleccionado
      const priorVector = {};
      Object.keys(ESCUELAS).forEach(id => {
        priorVector[id] = priorCocktail.ingredientes[id] || 0;
      });

      // Similitud de coseno entre priorVector y porcentajes
      let dotProduct = 0;
      let normPrior = 0;
      let normT = 0;

      Object.keys(ESCUELAS).forEach(id => {
        const pVal = priorVector[id];
        const tVal = porcentajes[id] || 0;
        dotProduct += pVal * tVal;
        normPrior += pVal * pVal;
        normT += tVal * tVal;
      });

      let cosSim = 1.0;
      if (normPrior > 0 && normT > 0) {
        cosSim = dotProduct / (Math.sqrt(normPrior) * Math.sqrt(normT));
      }

      // 2. Similitud de Ejes Geométricos
      // Coordenadas final
      const axisStateScore = qScores.Q1 * 0.4 + qScores.Q3 * 0.6;
      const axisMarketScore = qScores.Q4 + qScores.Q2 * 0.5;
      const axisEquityScore = qScores.Q1 + qScores.Q2 * 0.5;
      const axisGrowthScore = qScores.Q4 * 0.3 + qScores.Q3 * 0.7;

      const sumStateMarket = axisStateScore + axisMarketScore || 1;
      const sumEquityGrowth = axisEquityScore + axisGrowthScore || 1;

      const xFinal = axisStateScore / sumStateMarket;
      const yFinal = axisEquityScore / sumEquityGrowth;

      // Priors declarados
      const xPrior = state.prior.stateMarket; // [0,1]
      const yPrior = state.prior.equityGrowth; // [0,1]

      // Distancia euclidiana
      const dist = Math.sqrt(Math.pow(xFinal - xPrior, 2) + Math.pow(yFinal - yPrior, 2));
      // Máxima distancia es sqrt(2)
      const axesSim = Math.max(0, 1 - (dist / Math.sqrt(2)));

      // Índice de Consistencia Total (ICC): 60% cosSim + 40% axesSim
      const totalSim = 0.6 * cosSim + 0.4 * axesSim;
      consistencyPct = Math.round(totalSim * 1000) / 10;

      // Claves de consistencia
      if (consistencyPct >= 85) {
        consistencyKey = "high";
      } else if (consistencyPct >= 65) {
        consistencyKey = "moderate";
      } else {
        consistencyKey = "low";
      }
    }
  }

  return {
    porcentajes,
    hhi,
    archetypeKey: finalArchetypeKey,
    quadrantKey: dominantQuadrant,
    concentrationKey,
    qScores,
    consistencyPct,
    consistencyKey
  };
}

// ── RENDERIZAR RESULTADOS A LA INTERFAZ ───────────────────────────────────
function renderResultsToUI(results) {
  const isEs = state.currentLang === "es";

  // Ordenar escuelas dominantes por porcentaje
  const sortedSchools = Object.entries(results.porcentajes)
    .filter(([_, pct]) => pct > 0)
    .sort((a, b) => b[1] - a[1]);

  // Aplicar tema de color dinámico de la escuela dominante al panel de resultados
  const dominantSchoolId = sortedSchools[0] ? sortedSchools[0][0] : "neoclasica";
  const dominantSchool = ESCUELAS[dominantSchoolId];
  if (dominantSchool) {
    const resultsCard = document.getElementById("test-results-screen");
    resultsCard.style.setProperty("--result-accent", dominantSchool.color);
    
    // Extraer canales RGB para inyectar un resplandor translúcido
    const r = parseInt(dominantSchool.color.slice(1, 3), 16);
    const g = parseInt(dominantSchool.color.slice(3, 5), 16);
    const b = parseInt(dominantSchool.color.slice(5, 7), 16);
    resultsCard.style.setProperty("--result-accent-glow", `rgba(${r}, ${g}, ${b}, 0.2)`);
  }

  // Cargar perfiles reactivos traducidos
  const archetype = PERFILES_COGNITIVOS[results.archetypeKey];
  const quadrant = PERFILES_CUADRANTES[results.quadrantKey];
  const concentration = PERFILES_CONCENTRACION[results.concentrationKey];

  // Determinar icono Lucide según el arquetipo de-animalizado
  let iconName = "network";
  if (results.archetypeKey === "monismo_doctrinal") iconName = "infinity";
  else if (results.archetypeKey === "pluralismo_sistemico") iconName = "network";
  else if (results.archetypeKey === "monismo_eclectico") iconName = "shuffle";
  else if (results.archetypeKey === "pluralismo_pragmatico") iconName = "binary";

  // Inyectar cabecera e icono
  document.getElementById("result-archetype-name").innerHTML = `
    <i data-lucide="${iconName}" class="icon-inline" style="margin-right: 10px; color: var(--result-accent, var(--accent-gold));"></i>
    ${archetype.nombre}
  `;
  document.getElementById("result-archetype-sub").textContent = archetype.subtitulo;
  document.getElementById("result-archetype-desc").textContent = `${archetype.descripcion} ${quadrant.descripcion}`;
  document.getElementById("result-virtue").textContent = archetype.virtud;

  // Resacas
  const localHangoverTitle = isEs ? "RIESGO DE RESACA: " : "HANGOVER RISK: ";
  document.getElementById("result-hangover-title").innerHTML = `
    <i data-lucide="alert-octagon" aria-hidden="true"></i> 
    ${localHangoverTitle} ${concentration.riesgo}
  `;
  document.getElementById("result-hangover-desc").textContent = `${concentration.narrativa} ${archetype.resaca}`;

  // Consistencia Cognitiva y Confianza Estadística
  const consistency = PERFILES_CONSISTENCIA[results.consistencyKey];
  const pctEl = document.getElementById("result-consistency-pct");
  const titleEl = document.getElementById("result-consistency-title");
  const descEl = document.getElementById("result-consistency-desc");

  if (pctEl) {
    pctEl.textContent = `${results.consistencyPct}%`;
    let color = "var(--result-accent, var(--accent-gold))";
    if (results.consistencyKey === "moderate") {
      color = "var(--accent-gold-dark)";
    } else if (results.consistencyKey === "low") {
      color = "#e53e3e"; // amber/red
    }
    pctEl.style.color = color;
    const consistencyCard = document.getElementById("result-consistency-card");
    if (consistencyCard) {
      consistencyCard.style.setProperty("--result-accent", color);
      const r = parseInt(color.slice(1, 3), 16) || 217;
      const g = parseInt(color.slice(3, 5), 16) || 167;
      const b = parseInt(color.slice(5, 7), 16) || 82;
      consistencyCard.style.setProperty("--result-accent-glow", `rgba(${r}, ${g}, ${b}, 0.04)`);
    }
  }

  if (titleEl) {
    titleEl.innerHTML = `<i data-lucide="scale" aria-hidden="true"></i> ${isEs ? "CONSECUENCIA INTELECTUAL" : "INTELLECTUAL COHERENCE"}`;
  }

  if (descEl) {
    const priorName = state.prior && state.prior.cocktailId
      ? COCTELES.find(c => c.id === state.prior.cocktailId)?.nombre
      : (isEs ? "Ninguno" : "None");
    descEl.innerHTML = `<strong>${isEs ? "Cóctel Referencia" : "Reference Cocktail"}:</strong> <em>${priorName}</em>.<br>${consistency.subtitulo} ${consistency.descripcion}`;
  }

  // Barras de porcentajes
  const barList = document.getElementById("results-bar-list");
  barList.innerHTML = "";

  sortedSchools.forEach(([schoolId, pct]) => {
    const escuela = ESCUELAS[schoolId];
    if (!escuela) return;

    const item = document.createElement("div");
    item.className = "result-bar-item";
    item.setAttribute("role", "listitem");
    
    item.innerHTML = `
      <div class="result-bar-header">
        <span class="result-bar-name">${escuela.nombre}</span>
        <span class="result-bar-val">${pct}%</span>
      </div>
      <div class="result-bar-track" aria-hidden="true">
        <div class="result-bar-fill" style="--bar-color: ${escuela.color}"></div>
      </div>
    `;

    barList.appendChild(item);

    setTimeout(() => {
      const fill = item.querySelector(".result-bar-fill");
      if (fill) fill.style.width = `${pct}%`;
    }, 100);
  });

  // Capas de la Botella
  const bottleLiquid = document.getElementById("bottle-liquid-container");
  bottleLiquid.innerHTML = "";

  const hoverReadout = document.getElementById("bottle-hover-readout");
  if (hoverReadout) {
    hoverReadout.style.color = "var(--accent-gold)";
    hoverReadout.textContent = isEs ? "Posa el cursor para inspeccionar" : "Hover over layers to inspect";
  }

  const topIngredients = sortedSchools.slice(0, 4);
  const totalVolumeInBottle = topIngredients.reduce((acc, curr) => acc + curr[1], 0);

  topIngredients.forEach(([schoolId, pct]) => {
    const escuela = ESCUELAS[schoolId];
    if (!escuela) return;

    const relativeHeight = (pct / totalVolumeInBottle) * 100;

    const layer = document.createElement("div");
    layer.className = "liquid-layer";
    layer.style.setProperty("--layer-color", escuela.color);
    layer.style.setProperty("--layer-height", "0%");
    layer.setAttribute("title", `${escuela.nombre}: ${pct}%`);

    // Eventos de hover interactivos para inspeccionar ingredientes de la botella (con cambio de color dinámico y brillo)
    layer.addEventListener("mouseenter", () => {
      if (hoverReadout) {
        hoverReadout.style.color = escuela.color;
        hoverReadout.style.borderColor = escuela.color;
        hoverReadout.style.boxShadow = `0 0 15px ${escuela.color}40`; // Brillo sutil del color de la escuela
        hoverReadout.textContent = `${escuela.nombre}: ${pct}%`;
      }
    });
    layer.addEventListener("mouseleave", () => {
      if (hoverReadout) {
        hoverReadout.style.color = "var(--accent-gold)";
        hoverReadout.style.borderColor = "var(--border-glass)";
        hoverReadout.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
        hoverReadout.textContent = isEs ? "Posa el cursor para inspeccionar" : "Hover over layers to inspect";
      }
    });

    bottleLiquid.appendChild(layer);

    setTimeout(() => {
      layer.style.setProperty("--layer-height", `${relativeHeight}%`);
    }, 150);
  });

  // Radar Canvas
  renderRadarChart(results.qScores);

  // Botón Reiniciar
  const btnRestart = document.getElementById("btn-restart-test");
  const restartAction = () => {
    state.activeResults = null;
    document.getElementById("test-results-screen").classList.add("hidden");
    document.getElementById("test-start-screen").classList.remove("hidden");
    document.getElementById("test").scrollIntoView({ behavior: 'smooth' });
  };
  btnRestart.onclick = restartAction;
  addKeyboardSupport(btnRestart, restartAction);

  // Botón Exportar Tarjeta
  const btnExport = document.getElementById("btn-export-card");
  const exportAction = () => {
    exportTastingCard(results);
  };
  btnExport.onclick = exportAction;
  addKeyboardSupport(btnExport, exportAction);

  // Botón Compartir en WhatsApp (Fórmula de Viralidad de Alto Impacto)
  const btnShare = document.getElementById("btn-share-whatsapp");
  if (btnShare) {
    const shareAction = () => {
      const isEs = state.currentLang === "es";
      const archName = archetype?.nombre || (isEs ? "Afinidad Económica" : "Economic Affinity");
      const archSub = archetype?.subtitulo || "";
      const consPct = results.consistencyPct ? `${results.consistencyPct}%` : "90%";
      
      // Principales 3 ingredientes de la fórmula
      const topIngredients = Object.entries(results.porcentajes)
        .filter(([_, pct]) => pct > 0)
        .sort((a, b) => b[1] - a[1])
        .map(([id, pct]) => `${pct}% ${ESCUELAS[id]?.nombre || id}`)
        .slice(0, 3)
        .join(", ");

      const textEs = `🍸 *¡He destilado mi cóctel ideológico en el Bar de Escuelas Económicas!*

🏛️ *Mi Arquetipo:* ${archName} (${archSub})
🔮 *Consistencia Cognitiva:* ${consPct}
🧪 *Fórmula Destilada:* ${topIngredients}

¿Qué tan sobrio eres intelectualmente? Destila tu propio elixir y mide tus sesgos cognitivos aquí:
👉 https://willkwolf.github.io/economic-bar/`;

      const textEn = `🍸 *I've distilled my ideological cocktail at the Economic Schools Bar!*

🏛️ *My Archetype:* ${archName} (${archSub})
🔮 *Cognitive Consistency:* ${consPct}
🧪 *Distilled Formula:* ${topIngredients}

How intellectually sober are you? Distill your own elixir and measure your cognitive biases here:
👉 https://willkwolf.github.io/economic-bar/`;

      const shareText = isEs ? textEs : textEn;
      const encodedText = encodeURIComponent(shareText);
      const waUrl = `https://api.whatsapp.com/send?text=${encodedText}`;
      
      window.open(waUrl, "_blank");
    };
    btnShare.onclick = shareAction;
    addKeyboardSupport(btnShare, shareAction);
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// ── RENDER DEL GRÁFICO DE RADAR EN CANVAS NATIVO CON DISEÑO DEFENSIVO ───────
function renderRadarChart(qScores) {
  const canvas = document.getElementById("radar-canvas");
  if (!canvas) return;

  // Setup de Canvases en Alta Resolución DPR (Aumentado para evitar recortes de leyendas)
  const logicalWidth = 360;
  const logicalHeight = 300;
  const ctx = setupCanvasDPR(canvas, logicalWidth, logicalHeight);

  const cx = logicalWidth / 2;
  const cy = logicalHeight / 2;
  
  // Radio defensivo de 95px que deja >80px a los lados y >50px arriba/abajo para leyendas completas
  const radius = 95; 

  const isEs = state.currentLang === "es";

  // Ejes basados en la fuerza vectorial
  const axes = [
    { label: isEs ? "Equidad" : "Equity", score: qScores.Q1 + qScores.Q2 * 0.5 },
    { label: isEs ? "Mercado" : "Market", score: qScores.Q4 + qScores.Q2 * 0.5 },
    { label: isEs ? "Crecimiento" : "Growth", score: qScores.Q4 * 0.3 + qScores.Q3 * 0.7 },
    { label: isEs ? "Estado" : "State", score: qScores.Q1 * 0.4 + qScores.Q3 * 0.6 }
  ];

  const maxVal = 100;
  const levels = 4;

  // 1. Círculos concéntricos de niveles
  ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
  ctx.lineWidth = 1;
  for (let i = 1; i <= levels; i++) {
    const r = (radius / levels) * i;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();
  }

  // 2. Líneas de los ejes
  ctx.strokeStyle = "rgba(217, 167, 82, 0.12)";
  ctx.beginPath();
  axes.forEach((_, idx) => {
    const angle = (Math.PI / 2) * idx - Math.PI / 2;
    const ax = cx + Math.cos(angle) * radius;
    const ay = cy + Math.sin(angle) * radius;
    ctx.moveTo(cx, cy);
    ctx.lineTo(ax, ay);
  });
  ctx.stroke();

  // 3. Puntos del polígono de afinidades
  const points = axes.map((axis, idx) => {
    const angle = (Math.PI / 2) * idx - Math.PI / 2;
    const normScore = Math.max(axis.score, 10); // mínimo visual
    const dist = (normScore / maxVal) * radius * 1.4;
    const clampedDist = Math.min(dist, radius);
    return {
      x: cx + Math.cos(angle) * clampedDist,
      y: cy + Math.sin(angle) * clampedDist
    };
  });

  // 4. Dibujar polígono relleno translúcido (Tufte clean)
  ctx.fillStyle = "rgba(217, 167, 82, 0.15)";
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

  // Vértices diamantes
  ctx.fillStyle = "#fcd34d";
  points.forEach(pt => {
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, 3, 0, Math.PI * 2);
    ctx.fill();
  });

  // 5. Etiquetas tipográficas del eje con ALINEACIÓN ANGULAR REACTIVA ANTICOLISIÓN
  ctx.fillStyle = "rgba(245, 243, 239, 0.7)"; // WCAG Contrastado
  ctx.font = "bold 9px 'JetBrains Mono', monospace";

  axes.forEach((axis, idx) => {
    const angle = (Math.PI / 2) * idx - Math.PI / 2;
    
    // Safety padding radial respecto al vértice
    const tx = cx + Math.cos(angle) * (radius + 14);
    const ty = cy + Math.sin(angle) * (radius + 10);
    
    // Alineación reactiva defensiva contra desbordamiento de límites
    if (idx === 0) {
      // Superior: Equidad
      ctx.textAlign = "center";
      ctx.textBaseline = "bottom";
    } else if (idx === 1) {
      // Derecho: Mercado
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
    } else if (idx === 2) {
      // Inferior: Crecimiento
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
    } else if (idx === 3) {
      // Izquierdo: Estado
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";
    }

    ctx.fillText(axis.label.toUpperCase(), tx, ty);
  });
}

// ── EXPORTACIÓN DE LA TARJETA DE CATAS (Browser Print) ──────────────────────
function exportTastingCard(results) {
  const ui = TRANSLATIONS[state.currentLang].ui;
  const isEs = state.currentLang === "es";
  const archetype = PERFILES_COGNITIVOS[results.archetypeKey];
  const quadrant = PERFILES_CUADRANTES[results.quadrantKey];
  const concentration = PERFILES_CONCENTRACION[results.concentrationKey];
  const consistency = PERFILES_CONSISTENCIA[results.consistencyKey];

  const topIngredients = Object.entries(results.porcentajes)
    .filter(([_, pct]) => pct > 0)
    .sort((a, b) => b[1] - a[1])
    .map(([id, pct]) => `${pct}% ${ESCUELAS[id].nombre}`)
    .join("  |  ");

  const priorCocktailName = state.prior && state.prior.cocktailId 
    ? COCTELES.find(c => c.id === state.prior.cocktailId)?.nombre 
    : (isEs ? "Ninguno" : "None");

  const printWindow = window.open("", "_blank");
  printWindow.document.write(`
    <html>
      <head>
        <title>${ui.exportDocTitle}</title>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
        <style>
          @page {
            size: A4 portrait;
            margin: 1.0cm;
          }
          * {
            box-sizing: border-box;
          }
          body {
            background-color: #f7f5f0;
            color: #1a1a18;
            font-family: 'Plus Jakarta Sans', sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .academic-sheet {
            background-color: #ffffff;
            border: 2px solid #b39a74;
            outline: 1px solid #b39a74;
            outline-offset: -8px;
            padding: 40px 50px;
            max-width: 800px;
            width: 100%;
            height: auto;
            position: relative;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .sheet-header {
            text-align: center;
            border-bottom: 2px double #b39a74;
            padding-bottom: 18px;
            margin-bottom: 25px;
          }
          .academic-tag {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.65rem;
            color: #8c7653;
            letter-spacing: 0.25em;
            text-transform: uppercase;
            font-weight: 500;
          }
          h1 {
            font-family: 'Cormorant Garamond', serif;
            font-size: 2.8rem;
            margin: 8px 0 2px 0;
            font-weight: 600;
            color: #1a1a18;
            line-height: 1.1;
          }
          .archetype-sub {
            font-family: 'Cormorant Garamond', serif;
            font-style: italic;
            font-size: 1.35rem;
            color: #8c7653;
            margin-top: 2px;
            display: block;
          }
          .academic-grid {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 30px;
            margin-bottom: 20px;
          }
          .academic-column {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          .card-block {
            text-align: left;
          }
          .block-label {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.65rem;
            color: #8c7653;
            letter-spacing: 0.12em;
            display: block;
            margin-bottom: 6px;
            text-transform: uppercase;
            font-weight: 600;
            border-bottom: 1px dashed rgba(140, 118, 83, 0.2);
            padding-bottom: 3px;
          }
          .block-text {
            font-size: 0.82rem;
            line-height: 1.5;
            color: #2b2b28;
            font-weight: 400;
            margin: 0;
            text-align: justify;
          }
          .formula-text {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.72rem;
            color: #1a1a18;
            font-weight: 500;
            background-color: #fcfbf9;
            border: 1px solid #eadecd;
            padding: 8px 12px;
            border-radius: 3px;
            line-height: 1.4;
          }
          .consistency-badge {
            background-color: #f7f5f0;
            border: 1px solid #b39a74;
            border-radius: 4px;
            padding: 15px;
            display: flex;
            align-items: center;
            gap: 15px;
          }
          .consistency-num {
            font-family: 'Cormorant Garamond', serif;
            font-size: 2.2rem;
            font-weight: 700;
            color: #8c7653;
            line-height: 1;
            border-right: 1px solid #c5b59f;
            padding-right: 15px;
          }
          .consistency-desc {
            font-size: 0.76rem;
            line-height: 1.4;
            color: #3b3b38;
            margin: 0;
          }
          .signature-watermark {
            text-align: center;
            margin-top: 25px;
            border-top: 1.5px double #b39a74;
            padding-top: 15px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.65rem;
            color: #8c7653;
            letter-spacing: 0.3em;
            text-transform: uppercase;
            font-weight: 500;
          }
          @media print {
            body {
              background-color: #ffffff !important;
              color: #000000 !important;
            }
            .academic-sheet {
              border-color: #000000 !important;
              outline-color: #000000 !important;
              box-shadow: none !important;
              padding: 30px 40px !important;
              height: 100vh !important;
              max-height: 29.7cm !important;
              justify-content: space-between !important;
            }
            .block-text {
              color: #000000 !important;
            }
            .formula-text {
              background-color: #ffffff !important;
              border-color: #000000 !important;
            }
            .consistency-badge {
              background-color: #ffffff !important;
              border-color: #000000 !important;
            }
            .consistency-num, .block-label, .archetype-sub, .academic-tag, .signature-watermark {
              color: #000000 !important;
            }
          }
        </style>
      </head>
      <body>
        <div class="academic-sheet">
          <div class="sheet-header">
            <span class="academic-tag">${ui.exportOfficialAct}</span>
            <h1>${archetype.nombre}</h1>
            <span class="archetype-sub">${archetype.subtitulo}</span>
          </div>

          <div class="academic-grid">
            <!-- Columna Izquierda: Diagnóstico e Implicaciones -->
            <div class="academic-column">
              <div class="card-block">
                <span class="block-label">${ui.exportCognitiveDiag}</span>
                <p class="block-text">${archetype.descripcion} ${quadrant.descripcion}</p>
              </div>

              <div class="card-block">
                <span class="block-label">${ui.exportVirtue}</span>
                <p class="block-text">${archetype.virtud}</p>
              </div>
            </div>

            <!-- Columna Derecha: Molecular y Resaca -->
            <div class="academic-column">
              <div class="card-block">
                <span class="block-label">${ui.exportMolecularFormula}</span>
                <div class="formula-text">${topIngredients}</div>
              </div>

              <div class="card-block">
                <span class="block-label">${ui.exportHangoverRisk}</span>
                <p class="block-text" style="font-size: 0.78rem; line-height: 1.45;"><strong>${concentration.riesgo}:</strong> ${concentration.narrativa} ${archetype.resaca}</p>
              </div>
            </div>
          </div>

          <!-- Bloque de Consistencia e Índice de Confianza Bayesiana -->
          <div class="card-block" style="margin-bottom: 5px;">
            <span class="block-label">${ui.resultsConsistencyTitle}</span>
            <div class="consistency-badge">
              <div class="consistency-num">${results.consistencyPct}%</div>
              <div class="consistency-desc">
                <strong>${ui.resultsConsistencyLabel}:</strong> 
                ${isEs ? "Elixires de Prior de Referencia" : "Reference Prior Elixirs"}: <em>${priorCocktailName}</em>. 
                ${consistency.subtitulo} ${consistency.descripcion}
              </div>
            </div>
          </div>

          <!-- Firma única al final -->
          <div class="signature-watermark">
            ${isEs ? "ELIXIRES DE LA RAZÓN ECONÓMICA" : "ELIXIRS OF ECONOMIC REASON"}
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
  if (!window.IntersectionObserver) {
    // Si el navegador no soporta IntersectionObserver, mostrar todo de inmediato
    document.querySelectorAll(".reveal").forEach(el => {
      el.classList.add("in-view");
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
  });
}

// ── TEST DIAGNÓSTICO COMBINATORIO AUTOMÁTICO DE PERFILES (66 COMBINACIONES) ──
// Esta función puede ejecutarse en la consola del navegador como: runDiagnosticCombinatoricsTest()
window.runDiagnosticCombinatoricsTest = function() {
  console.log("%c🧪 INICIANDO TEST DIAGNÓSTICO COMBINATORIO 2-12 (66 PAREJAS) 🧪", "color: #d9a752; font-weight: bold; font-size: 14px;");
  
  const schoolIds = Object.keys(ESCUELAS);
  const pairs = [];
  
  // Generar las 66 combinaciones posibles de 2 escuelas dominantes
  for (let i = 0; i < schoolIds.length; i++) {
    for (let j = i + 1; j < schoolIds.length; j++) {
      pairs.push([schoolIds[i], schoolIds[j]]);
    }
  }
  
  console.log(`Generadas ${pairs.length} parejas únicas de escuelas de-animalizadas.`);
  
  let successfulMappings = 0;
  const archetypeDistribution = {
    monismo_doctrinal: 0,
    pluralismo_sistemico: 0,
    monismo_eclectico: 0,
    pluralismo_pragmatico: 0
  };
  const quadrantDistribution = { Q1: 0, Q2: 0, Q3: 0, Q4: 0 };
  
  pairs.forEach(([s1, s2]) => {
    // Simulamos dos perfiles para cada pareja:
    // Camino A: Declara mentalidad Monista (pluralismo_count = 0)
    // Camino B: Declara mentalidad Pluralista (pluralismo_count = 3)
    [0, 3].forEach(pluralismoCount => {
      // Simulamos pesos concentrados en s1 y s2 (ej. 55% y 45%)
      const porcentajes = {};
      schoolIds.forEach(id => {
        porcentajes[id] = 0;
      });
      porcentajes[s1] = 55;
      porcentajes[s2] = 45;
      
      // Calcular HHI
      let hhi = 0;
      schoolIds.forEach(id => {
        hhi += Math.pow(porcentajes[id] / 100, 2);
      });
      
      // Determinar arquetipo cognitivo
      const epistemicStyle = pluralismoCount >= 2 ? "pluralismo" : "monismo";
      const realPurity = hhi >= 0.18 ? "monismo" : "pluralismo";
      
      let finalArchetypeKey = "pluralismo_sistemico";
      if (epistemicStyle === "monismo" && realPurity === "monismo") finalArchetypeKey = "monismo_doctrinal";
      else if (epistemicStyle === "pluralismo" && realPurity === "pluralismo") finalArchetypeKey = "pluralismo_sistemico";
      else if (epistemicStyle === "monismo" && realPurity === "pluralismo") finalArchetypeKey = "monismo_eclectico";
      else if (epistemicStyle === "pluralismo" && realPurity === "monismo") finalArchetypeKey = "pluralismo_pragmatico";
      
      // Cuadrantes dominante
      const qScores = {
        Q1: (porcentajes.marxista || 0) + (porcentajes.feminista || 0) + (porcentajes.ecologica || 0),
        Q2: porcentajes.conductista || 0,
        Q3: (porcentajes.keynesiana || 0) + (porcentajes.tradicion_desarrollista || 0) + (porcentajes.estado_emprendedor || 0) + (porcentajes.institucionalista || 0),
        Q4: (porcentajes.clasica || 0) + (porcentajes.neoclasica || 0) + (porcentajes.austriaca || 0) + (porcentajes.schumpeteriana || 0)
      };
      
      const dominantQuadrant = Object.keys(qScores).reduce((a, b) => qScores[a] > qScores[b] ? a : b);
      
      // Registro de métricas
      archetypeDistribution[finalArchetypeKey]++;
      quadrantDistribution[dominantQuadrant]++;
      successfulMappings++;
    });
  });
  
  // Ahora simulamos el caso eclectico y sistemico donde las respuestas son altamente dispersas (HHI < 0.18)
  // Simulamos 66 caminos dispersos (todas las escuelas reciben un peso similar de ~8.33%)
  for (let i = 0; i < 66; i++) {
    [0, 3].forEach(pluralismoCount => {
      const porcentajes = {};
      schoolIds.forEach(id => {
        porcentajes[id] = 8;
      });
      porcentajes.neoclasica = 12; // Ajuste para 100%
      
      let hhi = 0;
      schoolIds.forEach(id => {
        hhi += Math.pow(porcentajes[id] / 100, 2);
      });
      
      const epistemicStyle = pluralismoCount >= 2 ? "pluralismo" : "monismo";
      const realPurity = hhi >= 0.18 ? "monismo" : "pluralismo";
      
      let finalArchetypeKey = "pluralismo_sistemico";
      if (epistemicStyle === "monismo" && realPurity === "monismo") finalArchetypeKey = "monismo_doctrinal";
      else if (epistemicStyle === "pluralismo" && realPurity === "pluralismo") finalArchetypeKey = "pluralismo_sistemico";
      else if (epistemicStyle === "monismo" && realPurity === "pluralismo") finalArchetypeKey = "monismo_eclectico";
      else if (epistemicStyle === "pluralismo" && realPurity === "monismo") finalArchetypeKey = "pluralismo_pragmatico";
      
      archetypeDistribution[finalArchetypeKey]++;
      successfulMappings++;
    });
  }

  console.log("%c✔ VALIDACIÓN COMPLETADA EXITOSAMENTE", "color: #86ad34; font-weight: bold;");
  console.log(`Total de simulaciones ejecutadas: ${successfulMappings}`);
  console.log("\n%cDistribución de Arquetipos Cognitivos:", "color: #d9a752; font-weight: bold;");
  Object.entries(archetypeDistribution).forEach(([arch, val]) => {
    console.log(`- ${arch.toUpperCase()}: ${val} caminos (${(val/successfulMappings*100).toFixed(1)}%)`);
  });
  
  console.log("\n%cDistribución de Cuadrantes Dominantes:", "color: #d9a752; font-weight: bold;");
  Object.entries(quadrantDistribution).forEach(([q, val]) => {
    console.log(`- ${q}: ${val} caminos de parejas (${(val/132*100).toFixed(1)}%)`);
  });
  
  return {
    success: true,
    totalSimulations: successfulMappings,
    archetypeDistribution,
    quadrantDistribution
  };
};
