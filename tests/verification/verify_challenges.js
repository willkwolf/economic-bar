/**
 * tests/verification/verify_challenges.js
 * Standalone Empirical Adversarial Verification Suite
 * 
 * Verifies:
 * - Challenge 1: ICC Ceiling and maximum cosine similarity across all 32,768 answer combinations for all 8 cocktails.
 * - Challenge 2: Dominance of Q2 (Conductista) in exhaustive sweep (32,768) and Monte Carlo (50,000 runs).
 * - Challenge 3: Onboarding code auto-selection of Martillo Dialéctico.
 * - Challenge 4: Theoretical maximum score capacity per school across the entire test.
 */

const fs = require('fs');
const path = require('path');

// 1. Load data.js
global.window = global;
const dataCode = fs.readFileSync(path.join(__dirname, '../../data.js'), 'utf8');
eval(dataCode);
const DB = global.TRANSLATIONS.es;

const ESCUELAS = DB.escuelas;
const COCTELES = DB.cocteles;
const PREGUNTAS = DB.preguntas;

console.log('================================================================');
console.log('EMPIRICAL VERIFICATION REPORT — CHALLENGER 1');
console.log('================================================================\n');

// ── CHALLENGE 4: THEORETICAL MAX SCORE CAPACITIES ACROSS SCHOOLS ──
console.log('--- CHALLENGE 4: Theoretical Max Score Capacity Per School ---');
const schoolKeys = Object.keys(ESCUELAS);
const maxCapacities = {};
const occurrences = {};

schoolKeys.forEach(s => {
  maxCapacities[s] = 0;
  occurrences[s] = 0;
});

// Q4 - Q9 (Fase 2)
const fase2Questions = PREGUNTAS.filter(q => q.fase === 2);
fase2Questions.forEach(q => {
  const schoolMaxInQ = {};
  q.opciones.forEach(opt => {
    Object.entries(opt.pesos).forEach(([s, w]) => {
      occurrences[s] = (occurrences[s] || 0) + 1;
      if (!schoolMaxInQ[s] || w > schoolMaxInQ[s]) {
        schoolMaxInQ[s] = w;
      }
    });
  });
  Object.entries(schoolMaxInQ).forEach(([s, w]) => {
    maxCapacities[s] += w;
  });
});

// Q10 - Q12 (Fase 3 Sliders: t in [0, 1])
// Max achievable is either left (t=0) or right (t=1)
const fase3Questions = PREGUNTAS.filter(q => q.fase === 3);
fase3Questions.forEach(q => {
  schoolKeys.forEach(s => {
    const leftW = q.izquierda.pesos[s] || 0;
    const rightW = q.derecha.pesos[s] || 0;
    if (leftW > 0) occurrences[s] = (occurrences[s] || 0) + 1;
    if (rightW > 0) occurrences[s] = (occurrences[s] || 0) + 1;
    maxCapacities[s] += Math.max(leftW, rightW);
  });
});

console.log('School Capacities (Ranked by Max Points):');
const rankedSchools = Object.entries(maxCapacities).sort((a, b) => b[1] - a[1]);
rankedSchools.forEach(([school, cap]) => {
  const name = ESCUELAS[school].nombre;
  console.log(`  - ${school.padEnd(24)} (${name.padEnd(20)}): Max ${cap.toString().padStart(2)} pts | Occurrences: ${occurrences[school].toString().padStart(2)}`);
});

const maxScore = rankedSchools[0][1];
const minScore = rankedSchools[rankedSchools.length - 1][1];
console.log(`\nMax Capacity Ratio: ${maxScore} / ${minScore} = ${(maxScore / minScore).toFixed(2)}x`);
console.log(`Audit Claim: 24-26 vs 9 pts. Empirical Reality: Max ${maxScore} pts (Clasica, Neoclasica, Feminista, Ecologica) vs Min ${minScore} pts (Conductista).`);


// ── CHALLENGE 1 & 2: EXHAUSTIVE SWEEP OF 32,768 COMBINATIONS ──
console.log('\n--- CHALLENGE 1 & 2: Exhaustive Combinatorial Sweep (32,768 Combinations) ---');

// Build option weights array for Fase 2
const f2Opts = fase2Questions.map(q => q.opciones.map(o => o.pesos));

// Build slider extremes for Fase 3 (t=0 and t=1)
const f3Opts = fase3Questions.map(q => [
  q.izquierda.pesos, // t=0
  q.derecha.pesos    // t=1
]);

// Helper to compute percentages as in app.js
function calculateResultsFromWeights(w, priorCocktailId, xPrior = 0.5, yPrior = 0.5) {
  let sumW = 0;
  for (const s of schoolKeys) sumW += w[s];
  if (sumW === 0) sumW = 2;

  const porcentajes = {};
  for (const s of schoolKeys) {
    porcentajes[s] = Math.round((w[s] / sumW) * 100);
  }

  let currentSum = 0;
  for (const s of schoolKeys) currentSum += porcentajes[s];
  if (currentSum !== 100) {
    const diff = 100 - currentSum;
    let highestSchool = schoolKeys[0];
    for (const s of schoolKeys) {
      if (porcentajes[s] > porcentajes[highestSchool]) highestSchool = s;
    }
    porcentajes[highestSchool] += diff;
  }

  // Cuadrantes
  const qScores = {
    Q1: (porcentajes.marxista || 0) + (porcentajes.feminista || 0) + (porcentajes.ecologica || 0),
    Q2: (porcentajes.conductista || 0),
    Q3: (porcentajes.keynesiana || 0) + (porcentajes.tradicion_desarrollista || 0) + (porcentajes.estado_emprendedor || 0) + (porcentajes.institucionalista || 0),
    Q4: (porcentajes.clasica || 0) + (porcentajes.neoclasica || 0) + (porcentajes.austriaca || 0) + (porcentajes.schumpeteriana || 0)
  };

  const dominantQuadrant = Object.keys(qScores).reduce((a, b) => qScores[a] > qScores[b] ? a : b);

  // Geometric axes
  const axisStateScore = qScores.Q1 * 0.4 + qScores.Q3 * 0.6;
  const axisMarketScore = qScores.Q4 + qScores.Q2 * 0.5;
  const axisEquityScore = qScores.Q1 + qScores.Q2 * 0.5;
  const axisGrowthScore = qScores.Q4 * 0.3 + qScores.Q3 * 0.7;

  const sumStateMarket = axisStateScore + axisMarketScore || 1;
  const sumEquityGrowth = axisEquityScore + axisGrowthScore || 1;

  const xFinal = axisStateScore / sumStateMarket;
  const yFinal = axisEquityScore / sumEquityGrowth;

  return { porcentajes, qScores, dominantQuadrant, xFinal, yFinal };
}

// Compute cosSim
function computeCosSim(priorVector, porcentajes) {
  let dotProduct = 0;
  let normPrior = 0;
  let normT = 0;

  for (const id of schoolKeys) {
    const pVal = priorVector[id] || 0;
    const tVal = porcentajes[id] || 0;
    dotProduct += pVal * tVal;
    normPrior += pVal * pVal;
    normT += tVal * tVal;
  }

  if (normPrior > 0 && normT > 0) {
    return dotProduct / (Math.sqrt(normPrior) * Math.sqrt(normT));
  }
  return 1.0;
}

// Data structures for sweep
const cocktailStats = {};
COCTELES.forEach(c => {
  cocktailStats[c.id] = {
    nombre: c.nombre,
    ingredientes: c.ingredientes,
    maxCosSim: -1,
    maxICCOptimalAxes: -1, // axesSim = 1.0 (theoretical upper bound)
    maxICCDefaultSliders: -1, // xPrior = 0.5, yPrior = 0.5
    bestCombCos: null,
    canReach85Optimal: false,
    canReach85Default: false
  };
});

const quadrantCountsExhaustive = { Q1: 0, Q2: 0, Q3: 0, Q4: 0 };
let totalCombinations = 0;

// Iterate all 4^6 * 2^3 = 32,768 combinations
for (let c0 = 0; c0 < 4; c0++) {
  for (let c1 = 0; c1 < 4; c1++) {
    for (let c2 = 0; c2 < 4; c2++) {
      for (let c3 = 0; c3 < 4; c3++) {
        for (let c4 = 0; c4 < 4; c4++) {
          for (let c5 = 0; c5 < 4; c5++) {
            for (let s0 = 0; s0 < 2; s0++) {
              for (let s1 = 0; s1 < 2; s1++) {
                for (let s2 = 0; s2 < 2; s2++) {
                  totalCombinations++;

                  // Accumulate weights
                  const w = {};
                  for (const s of schoolKeys) w[s] = 0;

                  // Fase 2
                  const f2Choices = [
                    f2Opts[0][c0], f2Opts[1][c1], f2Opts[2][c2],
                    f2Opts[3][c3], f2Opts[4][c4], f2Opts[5][c5]
                  ];
                  for (const optWeights of f2Choices) {
                    for (const [s, val] of Object.entries(optWeights)) {
                      w[s] += val;
                    }
                  }

                  // Fase 3
                  const f3Choices = [
                    f3Opts[0][s0], f3Opts[1][s1], f3Opts[2][s2]
                  ];
                  for (const optWeights of f3Choices) {
                    for (const [s, val] of Object.entries(optWeights)) {
                      w[s] += val;
                    }
                  }

                  // Calculate outcome
                  const res = calculateResultsFromWeights(w);
                  quadrantCountsExhaustive[res.dominantQuadrant]++;

                  // Check each cocktail
                  for (const c of COCTELES) {
                    const stats = cocktailStats[c.id];
                    const cos = computeCosSim(c.ingredientes, res.porcentajes);

                    if (cos > stats.maxCosSim) {
                      stats.maxCosSim = cos;
                      stats.bestCombCos = { c0, c1, c2, c3, c4, c5, s0, s1, s2, porcentajes: res.porcentajes };
                    }

                    // Upper bound with axesSim = 1.0
                    const iccOpt = Math.round((0.6 * cos + 0.4 * 1.0) * 1000) / 10;
                    if (iccOpt > stats.maxICCOptimalAxes) {
                      stats.maxICCOptimalAxes = iccOpt;
                    }

                    // With default sliders (0.5, 0.5)
                    const distDef = Math.sqrt(Math.pow(res.xFinal - 0.5, 2) + Math.pow(res.yFinal - 0.5, 2));
                    const axesSimDef = Math.max(0, 1 - (distDef / Math.sqrt(2)));
                    const iccDef = Math.round((0.6 * cos + 0.4 * axesSimDef) * 1000) / 10;
                    if (iccDef > stats.maxICCDefaultSliders) {
                      stats.maxICCDefaultSliders = iccDef;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

console.log(`Total Combinations Evaluated: ${totalCombinations}`);
console.log('\nExhaustive Quadrant Dominance (32,768 combinations):');
for (const [q, count] of Object.entries(quadrantCountsExhaustive)) {
  const pct = ((count / totalCombinations) * 100).toFixed(2);
  console.log(`  - ${q}: ${count.toString().padStart(5)} / ${totalCombinations} (${pct}%)`);
}

console.log('\nCocktail Max Cosine Similarity & Max ICC (Upper Bound vs Default Sliders):');
console.log('---------------------------------------------------------------------------------------------');
console.log(`${'Cóctel'.padEnd(26)} | ${'Max CosSim'.padEnd(10)} | ${'Max ICC (Opt)'.padEnd(14)} | ${'Max ICC (Def)'.padEnd(14)} | >= 85%?`);
console.log('---------------------------------------------------------------------------------------------');

let countCannotReach85 = 0;
for (const c of COCTELES) {
  const s = cocktailStats[c.id];
  const canReachOpt = s.maxICCOptimalAxes >= 85.0;
  if (!canReachOpt) countCannotReach85++;
  console.log(
    `${s.nombre.padEnd(26)} | ` +
    `${s.maxCosSim.toFixed(4).padEnd(10)} | ` +
    `${(s.maxICCOptimalAxes.toFixed(1) + '%').padEnd(14)} | ` +
    `${(s.maxICCDefaultSliders.toFixed(1) + '%').padEnd(14)} | ` +
    `${canReachOpt ? 'YES' : 'NO (IMPOSSIBLE)'}`
  );
}
console.log('---------------------------------------------------------------------------------------------');
console.log(`Cocktails unable to reach 85% ICC even under optimal axes (axesSim=1.0): ${countCannotReach85} / ${COCTELES.length} (${(countCannotReach85 / COCTELES.length * 100).toFixed(1)}%)`);


// ── CHALLENGE 2: MONTE CARLO SIMULATION (50,000 RUNS) ──
console.log('\n--- CHALLENGE 2: Monte Carlo Simulation (50,000 Agents) ---');
const NUM_RUNS = 50000;
const mcQuadrantCounts = { Q1: 0, Q2: 0, Q3: 0, Q4: 0 };

for (let i = 0; i < NUM_RUNS; i++) {
  const w = {};
  for (const s of schoolKeys) w[s] = 0;

  // Fase 2: random choice 0..3 for 6 questions
  for (let q = 0; q < 6; q++) {
    const optIdx = Math.floor(Math.random() * 4);
    for (const [s, val] of Object.entries(f2Opts[q][optIdx])) {
      w[s] += val;
    }
  }

  // Fase 3: random continuous or random choice 0, 0.5, 1
  for (let q = 0; q < 3; q++) {
    const t = Math.random(); // continuous slider value in [0, 1]
    for (const [s, val] of Object.entries(fase3Questions[q].izquierda.pesos)) {
      w[s] += (1 - t) * val;
    }
    for (const [s, val] of Object.entries(fase3Questions[q].derecha.pesos)) {
      w[s] += t * val;
    }
  }

  const res = calculateResultsFromWeights(w);
  mcQuadrantCounts[res.dominantQuadrant]++;
}

console.log(`Monte Carlo Results (${NUM_RUNS} runs with continuous sliders):`);
for (const [q, count] of Object.entries(mcQuadrantCounts)) {
  const pct = ((count / NUM_RUNS) * 100).toFixed(2);
  console.log(`  - ${q}: ${count.toString().padStart(6)} (${pct}%)`);
}


// ── CHALLENGE 3: ONBOARDING AUTO-SELECTION INSPECTION ──
console.log('\n--- CHALLENGE 3: Onboarding Auto-Selection Inspection ---');
const appCode = fs.readFileSync(path.join(__dirname, '../../app.js'), 'utf8');

// Check lines around renderOnboardingCocktails
const hasAutoClick = appCode.includes('grid.firstChild.click()');
const hasDefaultFallback = appCode.includes('state.prior.cocktailId = COCTELES[0].id');

console.log(`Static Code Evidence:`);
console.log(`  - Contains 'grid.firstChild.click()': ${hasAutoClick}`);
console.log(`  - Contains 'state.prior.cocktailId = COCTELES[0].id': ${hasDefaultFallback}`);
console.log(`  - First cocktail in DB (COCTELES[0]): id = "${COCTELES[0].id}", nombre = "${COCTELES[0].nombre}"`);
console.log(`  - Ingredients of COCTELES[0]:`, COCTELES[0].ingredientes);

console.log('\n================================================================');
console.log('SUMMARY OF CHALLENGE VERIFICATION VERDICTS');
console.log('================================================================');
console.log(`Challenge 1 (ICC 85% Ceiling): ${countCannotReach85 === 4 ? 'VERIFIED (CONFIRMED)' : 'DISCREPANCY'}`);
console.log(`Challenge 2 (Q2 0% Dominance): ${(quadrantCountsExhaustive.Q2 === 0 && mcQuadrantCounts.Q2 === 0) ? 'VERIFIED (CONFIRMED)' : 'DISCREPANCY'}`);
console.log(`Challenge 3 (Martillo Auto-select): ${(hasAutoClick && hasDefaultFallback && COCTELES[0].id === 'martillo_dialectico') ? 'VERIFIED (CONFIRMED)' : 'DISCREPANCY'}`);
console.log(`Challenge 4 (Score Capacity 24 vs 9): ${(maxScore === 24 && minScore === 9) ? 'VERIFIED (CONFIRMED)' : 'DISCREPANCY'}`);
