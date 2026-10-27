/**
 * tests/verification/verify_challenge1_detailed.js
 * In-depth adversarial stress-testing of Challenge 1 (ICC and Cosine Similarity)
 */

const fs = require('fs');
const path = require('path');

global.window = global;
eval(fs.readFileSync(path.join(__dirname, '../../data.js'), 'utf8'));
const DB = global.TRANSLATIONS.es;
const COCTELES = DB.cocteles;
const ESCUELAS = DB.escuelas;
const PREGUNTAS = DB.preguntas;
const schoolKeys = Object.keys(ESCUELAS);

const f2Questions = PREGUNTAS.filter(q => q.fase === 2);
const f3Questions = PREGUNTAS.filter(q => q.fase === 3);
const f2Opts = f2Questions.map(q => q.opciones.map(o => o.pesos));
const f3Opts = f3Questions.map(q => [q.izquierda.pesos, q.derecha.pesos]);

console.log('================================================================');
console.log('DETAILED EMPIRICAL AUDIT: CHALLENGE 1 (ICC CEILINGS)');
console.log('================================================================\n');

// For each cocktail, calculate max cosSim and inspect best answer vectors
const results = {};
COCTELES.forEach(c => {
  results[c.id] = {
    nombre: c.nombre,
    recipe: c.ingredientes,
    maxCosSim: 0,
    bestVector: null,
    bestAnswers: null,
    // Scenario A: Default sliders (0.5, 0.5)
    maxICC_Default: 0,
    // Scenario B: Recipe-aligned prior sliders
    maxICC_RecipeAligned: 0,
    // Scenario C: Global maximum across ALL possible slider positions (xPrior in [0,1], yPrior in [0,1])
    globalMaxICC: 0,
    globalBestSliders: null
  };
});

// Cocktail recipe-aligned coordinates (computed from ingredients)
const recipeCoords = {};
COCTELES.forEach(c => {
  const ing = c.ingredientes;
  const qScores = {
    Q1: (ing.marxista||0) + (ing.feminista||0) + (ing.ecologica||0),
    Q2: (ing.conductista||0),
    Q3: (ing.keynesiana||0) + (ing.tradicion_desarrollista||0) + (ing.estado_emprendedor||0) + (ing.institucionalista||0),
    Q4: (ing.clasica||0) + (ing.neoclasica||0) + (ing.austriaca||0) + (ing.schumpeteriana||0)
  };
  const axisStateScore = qScores.Q1 * 0.4 + qScores.Q3 * 0.6;
  const axisMarketScore = qScores.Q4 + qScores.Q2 * 0.5;
  const axisEquityScore = qScores.Q1 + qScores.Q2 * 0.5;
  const axisGrowthScore = qScores.Q4 * 0.3 + qScores.Q3 * 0.7;
  recipeCoords[c.id] = {
    x: axisStateScore / (axisStateScore + axisMarketScore || 1),
    y: axisEquityScore / (axisEquityScore + axisGrowthScore || 1)
  };
});

for (let c0 = 0; c0 < 4; c0++) {
for (let c1 = 0; c1 < 4; c1++) {
for (let c2 = 0; c2 < 4; c2++) {
for (let c3 = 0; c3 < 4; c3++) {
for (let c4 = 0; c4 < 4; c4++) {
for (let c5 = 0; c5 < 4; c5++) {
for (let s0 = 0; s0 < 2; s0++) {
for (let s1 = 0; s1 < 2; s1++) {
for (let s2 = 0; s2 < 2; s2++) {
  const w = {};
  for (const s of schoolKeys) w[s] = 0;
  const choices = [
    f2Opts[0][c0], f2Opts[1][c1], f2Opts[2][c2],
    f2Opts[3][c3], f2Opts[4][c4], f2Opts[5][c5],
    f3Opts[0][s0], f3Opts[1][s1], f3Opts[2][s2]
  ];
  for (const ch of choices) {
    for (const [s, val] of Object.entries(ch)) w[s] += val;
  }
  let sumW = 0;
  for (const s of schoolKeys) sumW += w[s];
  const pct = {};
  for (const s of schoolKeys) pct[s] = Math.round((w[s]/sumW)*100);
  let curSum = 0;
  for (const s of schoolKeys) curSum += pct[s];
  if (curSum !== 100) {
    let highest = schoolKeys[0];
    for (const s of schoolKeys) if (pct[s] > pct[highest]) highest = s;
    pct[highest] += (100 - curSum);
  }

  const qScores = {
    Q1: (pct.marxista||0) + (pct.feminista||0) + (pct.ecologica||0),
    Q2: (pct.conductista||0),
    Q3: (pct.keynesiana||0) + (pct.tradicion_desarrollista||0) + (pct.estado_emprendedor||0) + (pct.institucionalista||0),
    Q4: (pct.clasica||0) + (pct.neoclasica||0) + (pct.austriaca||0) + (pct.schumpeteriana||0)
  };
  const axisStateScore = qScores.Q1 * 0.4 + qScores.Q3 * 0.6;
  const axisMarketScore = qScores.Q4 + qScores.Q2 * 0.5;
  const axisEquityScore = qScores.Q1 + qScores.Q2 * 0.5;
  const axisGrowthScore = qScores.Q4 * 0.3 + qScores.Q3 * 0.7;
  const xFinal = axisStateScore / (axisStateScore + axisMarketScore || 1);
  const yFinal = axisEquityScore / (axisEquityScore + axisGrowthScore || 1);

  for (const c of COCTELES) {
    const res = results[c.id];
    let dot = 0, nP = 0, nT = 0;
    for (const id of schoolKeys) {
      const p = c.ingredientes[id] || 0;
      const t = pct[id] || 0;
      dot += p * t; nP += p * p; nT += t * t;
    }
    const cos = (nP > 0 && nT > 0) ? (dot / (Math.sqrt(nP) * Math.sqrt(nT))) : 1.0;

    if (cos > res.maxCosSim) {
      res.maxCosSim = cos;
      res.bestVector = { ...pct };
      res.bestAnswers = { c0, c1, c2, c3, c4, c5, s0, s1, s2, xFinal, yFinal };
    }

    // Default sliders (0.5, 0.5)
    const distDef = Math.sqrt(Math.pow(xFinal - 0.5, 2) + Math.pow(yFinal - 0.5, 2));
    const axesSimDef = Math.max(0, 1 - (distDef / Math.sqrt(2)));
    const iccDef = Math.round((0.6 * cos + 0.4 * axesSimDef) * 1000) / 10;
    if (iccDef > res.maxICC_Default) res.maxICC_Default = iccDef;

    // Recipe-aligned sliders
    const rC = recipeCoords[c.id];
    const distRec = Math.sqrt(Math.pow(xFinal - rC.x, 2) + Math.pow(yFinal - rC.y, 2));
    const axesSimRec = Math.max(0, 1 - (distRec / Math.sqrt(2)));
    const iccRec = Math.round((0.6 * cos + 0.4 * axesSimRec) * 1000) / 10;
    if (iccRec > res.maxICC_RecipeAligned) res.maxICC_RecipeAligned = iccRec;

    // Global best: if user guessed the exact xFinal, yFinal in onboarding (axesSim = 1.0)
    // Note that axesSim cannot exceed 1.0.
    const iccGlobal = Math.round((0.6 * cos + 0.4 * 1.0) * 1000) / 10;
    if (iccGlobal > res.globalMaxICC) {
      res.globalMaxICC = iccGlobal;
      res.globalBestSliders = { xFinal, yFinal };
    }
  }
}}}}}}}}}

console.log('SUMMARY TABLE:');
console.log('---------------------------------------------------------------------------------------------------------------');
console.log(`${'Cóctel'.padEnd(25)} | ${'Max CosSim'.padEnd(10)} | ${'Def Sliders (0.5)'.padEnd(18)} | ${'Recipe Sliders'.padEnd(16)} | ${'Optimal Sliders'.padEnd(16)} | Audit Value`);
console.log('---------------------------------------------------------------------------------------------------------------');

const auditReportedValues = {
  martillo_dialectico: '91.0%',
  libertad_liquida: '96.4%',
  socialdemocracia_nordica: '83.8%',
  silicon_valley_sour: '80.6%',
  equilibrio_esteril: '84.8%',
  elixir_bien_comun: '87.8%',
  destilado_desarrollista: '86.4%',
  ponche_gran_crisis: '84.9%'
};

COCTELES.forEach(c => {
  const r = results[c.id];
  console.log(
    `${r.nombre.padEnd(25)} | ` +
    `${r.maxCosSim.toFixed(4).padEnd(10)} | ` +
    `${(r.maxICC_Default.toFixed(1) + '%').padEnd(18)} | ` +
    `${(r.maxICC_RecipeAligned.toFixed(1) + '%').padEnd(16)} | ` +
    `${(r.globalMaxICC.toFixed(1) + '%').padEnd(16)} | ` +
    `${auditReportedValues[c.id]}`
  );
});
console.log('---------------------------------------------------------------------------------------------------------------');

console.log('\nANALYSIS OF DILUTION IN BEST VECTORS:');
COCTELES.forEach(c => {
  const r = results[c.id];
  console.log(`\nCocktail: ${r.nombre} (Max CosSim: ${r.maxCosSim.toFixed(4)})`);
  console.log(`  Declared Recipe:`, r.recipe);
  console.log(`  Best Test Vector Achievable:`);
  Object.entries(r.bestVector)
    .filter(([_, v]) => v > 0)
    .sort((a, b) => b[1] - a[1])
    .forEach(([s, v]) => {
      const inRecipe = r.recipe[s] !== undefined;
      console.log(`    - ${s.padEnd(24)}: ${v.toString().padStart(2)}% ${inRecipe ? '(IN RECIPE)' : '⚠️ UNWANTED DILUTION'}`);
    });
});
