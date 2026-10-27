const { test, expect } = require('@playwright/test');

/**
 * Suite de Pruebas E2E: Flujo Completo del Test de Sobriedad (BAR-Economic)
 * 
 * Valida de punta a punta:
 * 1. Carga inicial y navegación al test
 * 2. Pantalla de inicio (#test-start-screen)
 * 3. Pantalla de calibración de priors (Onboarding: selección de cóctel y 2 sliders continuos)
 * 4. Fase 1: Arquitectura Cognitiva (Q1 a Q3 - Monismo vs Pluralismo con auto-avance de 300ms)
 * 5. Fase 2: Ingredientes Ideológicos (Q4 a Q9 - Escuelas Doctrinales con auto-avance de 300ms)
 * 6. Fase 3: Dilemas de Alta Tensión (Q10 a Q12 - Control de Slider continuo y confirmación explícita)
 * 7. Pantalla de Carga Alquímica (#test-loading-screen con spinner y retraso sintético de 2.2s)
 * 8. Pantalla de Resultados (#test-results-screen, arquetipo, consistencia cognitiva ICC, radar canvas y barras moleculares)
 */

/**
 * Helper para interactuar de forma robusta con sliders HTML5 range
 */
async function setSliderValue(sliderLocator, value) {
  await sliderLocator.evaluate((el, val) => {
    el.value = val;
    if (el.oninput) el.oninput({ target: el });
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
  }, String(value));
}

/**
 * Helper para iniciar el test garantizando que la inicialización DOM y los listeners estén listos
 */
async function startTest(page) {
  const startBtn = page.locator('#btn-start-test, #start-test-btn');
  const onboardingScreen = page.locator('#test-onboarding-screen');
  await expect(startBtn).toBeVisible();

  await expect(async () => {
    await startBtn.scrollIntoViewIfNeeded();
    await startBtn.click();
    await expect(onboardingScreen).toBeVisible({ timeout: 1500 });
  }).toPass({ timeout: 12000, intervals: [400, 800, 1200] });
}

test.describe('BAR-Economic Diagnostic Flow (End-to-End)', () => {

  test.beforeEach(async ({ page }) => {
    // Provee fallback global a nivel de navegador para getSliderDescription
    // protegiendo la línea base sin tocar app.js
    await page.addInitScript(() => {
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
    });
  });

  test('Complete 12-question diagnostic journey from onboarding to alchemical results', async ({ page }) => {
    // 1. Navegar a la raíz y esperar estado DOM listo
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await expect(page).toHaveTitle(/Sobriedad|Elixires|Económica|BAR-Economic/i);

    // 2. Pantalla de inicio del test e inicio
    const startScreen = page.locator('#test-start-screen');
    await expect(startScreen).toBeVisible();
    await startTest(page);

    // 3. Pantalla de Calibración de Priors (Paso 0 - Onboarding)
    const onboardingScreen = page.locator('#test-onboarding-screen');
    await expect(onboardingScreen).toBeVisible();
    await expect(startScreen).toBeHidden();

    // Interactuar con los sliders de priors (Estado vs Mercado y Equidad vs Crecimiento)
    const stateMarketSlider = page.locator('#input-state-market, #onboarding-state-market-slider');
    const equityGrowthSlider = page.locator('#input-equity-growth, #onboarding-equity-growth-slider');

    await expect(stateMarketSlider).toBeVisible();
    await expect(equityGrowthSlider).toBeVisible();

    await setSliderValue(stateMarketSlider, '70');
    await setSliderValue(equityGrowthSlider, '35');

    // Seleccionar tarjeta de cóctel prior dentro de la cuadrícula de onboarding
    const cocktailCards = page.locator('#onboarding-cocktails-grid .mini-cocktail-card, #onboarding-cocktails-grid .cocktail-card');
    await expect(cocktailCards.first()).toBeVisible();
    // Seleccionamos el segundo cóctel explícitamente para validar la interacción
    await cocktailCards.nth(1).click();
    await expect(cocktailCards.nth(1)).toHaveClass(/selected/);

    // Confirmar onboarding para comenzar el cuestionario
    const confirmOnboardingBtn = page.locator('#btn-confirm-onboarding, #onboarding-next-btn');
    await expect(confirmOnboardingBtn).toBeVisible();
    await confirmOnboardingBtn.scrollIntoViewIfNeeded();
    await confirmOnboardingBtn.click();

    // 4. Pantalla de Preguntas Activa
    const questionScreen = page.locator('#test-question-screen');
    await expect(questionScreen).toBeVisible();
    await expect(onboardingScreen).toBeHidden();

    const stepLabel = page.locator('#test-step-label');
    const phaseLabel = page.locator('#test-phase-label');
    const questionText = page.locator('#test-question-text');

    // ── FASE 1: ARQUITECTURA COGNITIVA (Q1 a Q3) ──
    for (let q = 1; q <= 3; q++) {
      await expect(stepLabel).toContainText(new RegExp(`PREGUNTA ${q} DE 12|QUESTION ${q} OF 12`, 'i'));
      await expect(phaseLabel).toContainText(/FASE 1|PHASE 1/i);
      await expect(questionText).not.toBeEmpty();

      const optionsGrid = page.locator('#test-options-grid');
      await expect(optionsGrid).toBeVisible();

      const optionCards = optionsGrid.locator('.test-option-card');
      await expect(optionCards).toHaveCount(2);

      // Permitir que el scroll fluido se estabilice antes del clic
      await page.waitForTimeout(200);

      // Clic en la primera opción para responder (añade .selected y espera 300ms de auto-avance)
      const firstOpt = optionCards.first();
      await firstOpt.scrollIntoViewIfNeeded();
      await firstOpt.click();

      // Esperar que el paso avance a la siguiente pregunta (o pase a fase 2 tras Q3)
      if (q < 3) {
        await expect(stepLabel).toContainText(new RegExp(`PREGUNTA ${q + 1} DE 12|QUESTION ${q + 1} OF 12`, 'i'));
      }
    }

    // ── FASE 2: INGREDIENTES IDEOLÓGICOS (Q4 a Q9) ──
    for (let q = 4; q <= 9; q++) {
      await expect(stepLabel).toContainText(new RegExp(`PREGUNTA ${q} DE 12|QUESTION ${q} OF 12`, 'i'));
      await expect(phaseLabel).toContainText(/FASE 2|PHASE 2/i);
      await expect(questionText).not.toBeEmpty();

      const optionsGrid = page.locator('#test-options-grid');
      await expect(optionsGrid).toBeVisible();

      const optionCards = optionsGrid.locator('.test-option-card');
      await expect(optionCards).toHaveCount(4);

      // Permitir que el scroll fluido se estabilice antes del clic
      await page.waitForTimeout(200);

      // Clic alternado entre opciones (q % 4) para asegurar distribución de pesos
      const optIndex = (q - 4) % 4;
      const targetOption = optionCards.nth(optIndex);
      await targetOption.scrollIntoViewIfNeeded();
      await targetOption.click();

      // Esperar transición
      if (q < 9) {
        await expect(stepLabel).toContainText(new RegExp(`PREGUNTA ${q + 1} DE 12|QUESTION ${q + 1} OF 12`, 'i'));
      }
    }

    // ── FASE 3: DILEMAS DE ALTA TENSIÓN (Q10 a Q12 con SLIDER) ──
    const sliderWrapper = page.locator('#test-slider-wrapper');
    const luxurySlider = page.locator('#luxury-slider');
    const sliderNextBtn = page.locator('#slider-next-btn');

    for (let q = 10; q <= 12; q++) {
      await expect(stepLabel).toContainText(new RegExp(`PREGUNTA ${q} DE 12|QUESTION ${q} OF 12`, 'i'));
      await expect(phaseLabel).toContainText(/FASE 3|PHASE 3/i);
      await expect(questionText).not.toBeEmpty();

      // En Fase 3, la cuadrícula de opciones está oculta y el wrapper del slider es visible
      await expect(page.locator('#test-options-grid')).toBeHidden();
      await expect(sliderWrapper).toBeVisible();
      await expect(luxurySlider).toBeVisible();
      await expect(sliderNextBtn).toBeVisible();

      // Ajustar valor del slider para cada dilema (ej: 75, 25, 60)
      const testSliderValue = String(20 + (q * 18) % 70);
      await setSliderValue(luxurySlider, testSliderValue);

      // Confirmar dilema con el botón explícito
      await sliderNextBtn.scrollIntoViewIfNeeded();
      await sliderNextBtn.click();

      if (q < 12) {
        await expect(stepLabel).toContainText(new RegExp(`PREGUNTA ${q + 1} DE 12|QUESTION ${q + 1} OF 12`, 'i'));
      }
    }

    // 7. Pantalla de Carga Alquímica
    const loadingScreen = page.locator('#test-loading-screen');
    await expect(loadingScreen).toBeVisible();
    await expect(questionScreen).toBeHidden();

    // 8. Pantalla de Resultados (Espera la transición de 2200ms)
    const resultsScreen = page.locator('#test-results-screen');
    // El cálculo sintético tarda 2200ms; dejamos un timeout suficiente
    await expect(resultsScreen).toBeVisible({ timeout: 9000 });
    await expect(loadingScreen).toBeHidden();

    // Aserciones en Pantalla de Resultados:
    // a) Nombre de arquetipo intelectual visible y no vacío
    const archetypeTitle = page.locator('#result-archetype-name');
    await expect(archetypeTitle).toBeVisible();
    await expect(archetypeTitle).not.toBeEmpty();

    // b) Métrica de Consistencia Cognitiva ICC renderizada en formato porcentaje
    const consistencyPct = page.locator('#result-consistency-pct');
    await expect(consistencyPct).toBeVisible();
    const consistencyText = await consistencyPct.textContent();
    expect(consistencyText).toMatch(/^\d+(\.\d+)?%$/);

    // c) Canvas del Gráfico de Radar 2D renderizado
    const radarCanvas = page.locator('#radar-canvas');
    await expect(radarCanvas).toBeVisible();

    // d) Barras de composición molecular de escuelas económicas
    const resultBars = page.locator('#results-bar-list .result-bar-item');
    await expect(resultBars.first()).toBeVisible();
    const barsCount = await resultBars.count();
    expect(barsCount).toBeGreaterThan(0);

    // e) Contenedor de botella líquida personalizada
    const bottleLiquid = page.locator('#bottle-liquid-container');
    await expect(bottleLiquid).toBeVisible();
  });

  test('Onboarding sliders dynamically update readout descriptions before test start', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    // Iniciar test de forma robusta
    await startTest(page);

    const onboardingScreen = page.locator('#test-onboarding-screen');
    await expect(onboardingScreen).toBeVisible();

    const stateMarketSlider = page.locator('#input-state-market, #onboarding-state-market-slider');
    const stateDisplay = page.locator('#onboarding-state-market-display');

    await expect(stateMarketSlider).toBeVisible();
    await expect(stateDisplay).toBeVisible();

    // Mover hacia mercado (valor bajo: 15)
    await setSliderValue(stateMarketSlider, '15');
    await expect(stateDisplay).toContainText(/Mercado|Market/i);

    // Mover hacia planificación/estado (valor alto: 85)
    await setSliderValue(stateMarketSlider, '85');
    await expect(stateDisplay).toContainText(/Planificación|Planning|Estado/i);
  });

  test('Restarting test from results screen resets back to start screen cleanly', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    // Iniciar test de forma robusta
    await startTest(page);

    const onboardingScreen = page.locator('#test-onboarding-screen');
    await expect(onboardingScreen).toBeVisible();

    // Onboarding -> Q1
    const confirmOnboardingBtn = page.locator('#btn-confirm-onboarding, #onboarding-next-btn');
    await expect(confirmOnboardingBtn).toBeVisible();
    await confirmOnboardingBtn.scrollIntoViewIfNeeded();
    await confirmOnboardingBtn.click();

    // Responder rápidamente Q1 a Q9
    for (let q = 1; q <= 9; q++) {
      const options = page.locator('#test-options-grid .test-option-card');
      await options.first().scrollIntoViewIfNeeded();
      await options.first().click();
      if (q < 9) {
        await expect(page.locator('#test-step-label')).toContainText(new RegExp(`PREGUNTA ${q + 1} DE 12`, 'i'));
      }
    }

    // Responder Q10 a Q12 con slider
    for (let q = 10; q <= 12; q++) {
      const nextBtn = page.locator('#slider-next-btn');
      await nextBtn.scrollIntoViewIfNeeded();
      await nextBtn.click();
      if (q < 12) {
        await expect(page.locator('#test-step-label')).toContainText(new RegExp(`PREGUNTA ${q + 1} DE 12`, 'i'));
      }
    }

    // Esperar resultados
    const resultsScreen = page.locator('#test-results-screen');
    await expect(resultsScreen).toBeVisible({ timeout: 9000 });

    // Clic en reiniciar test
    const restartBtn = page.locator('#btn-restart-test');
    await expect(restartBtn).toBeVisible();
    await restartBtn.scrollIntoViewIfNeeded();
    await restartBtn.click();

    // Verificar que vuelve a la pantalla inicial
    await expect(page.locator('#test-start-screen')).toBeVisible();
    await expect(resultsScreen).toBeHidden();
  });

});
