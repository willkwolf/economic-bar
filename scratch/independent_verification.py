# independent_verification.py
# Verification of Q2 stochastic dominance and ICC ceilings

import math
import itertools
import random

# 12 schools
SCHOOLS = [
    "marxista", "feminista", "ecologica",
    "conductista",
    "keynesiana", "tradicion_desarrollista", "estado_emprendedor", "institucionalista",
    "clasica", "neoclasica", "austriaca", "schumpeteriana"
]

# Baseline Q4-Q9
Q_FASE2 = [
    [{"austriaca": 4, "clasica": 3, "neoclasica": 2}, {"neoclasica": 4, "keynesiana": 3, "conductista": 2}, {"institucionalista": 4, "tradicion_desarrollista": 3}, {"marxista": 4, "feminista": 3}],
    [{"austriaca": 4, "clasica": 4}, {"keynesiana": 4, "neoclasica": 3}, {"estado_emprendedor": 4, "tradicion_desarrollista": 4, "schumpeteriana": 2}, {"marxista": 4, "ecologica": 3, "feminista": 3}],
    [{"neoclasica": 4, "austriaca": 3, "clasica": 2}, {"keynesiana": 4, "conductista": 3}, {"feminista": 4, "ecologica": 3}, {"marxista": 4, "institucionalista": 2}],
    [{"neoclasica": 4, "clasica": 3}, {"conductista": 4, "institucionalista": 3}, {"austriaca": 4, "schumpeteriana": 2}, {"feminista": 4, "marxista": 4, "ecologica": 3}],
    [{"tradicion_desarrollista": 4, "clasica": 3}, {"schumpeteriana": 4, "austriaca": 3}, {"estado_emprendedor": 4, "schumpeteriana": 3}, {"ecologica": 4, "feminista": 3}],
    [{"clasica": 4, "neoclasica": 3}, {"institucionalista": 4, "ecologica": 3}, {"marxista": 4, "tradicion_desarrollista": 3}, {"feminista": 4, "ecologica": 4}]
]

# Baseline Q10-Q12
Q_FASE3 = [
    ({"austriaca": 3, "neoclasica": 2, "clasica": 2}, {"keynesiana": 4, "estado_emprendedor": 2}),
    ({"schumpeteriana": 3, "neoclasica": 2, "tradicion_desarrollista": 2}, {"ecologica": 4, "feminista": 3}),
    ({"clasica": 3, "neoclasica": 2, "austriaca": 2}, {"tradicion_desarrollista": 4, "estado_emprendedor": 2, "marxista": 2})
]

# Max points per school:
max_pts = {s: 0.0 for s in SCHOOLS}
for q in Q_FASE2:
    for s in SCHOOLS:
        opt_max = max(opt.get(s, 0) for opt in q)
        max_pts[s] += opt_max
for left, right in Q_FASE3:
    for s in SCHOOLS:
        max_pts[s] += max(left.get(s, 0), right.get(s, 0))

print("=== MAX POINTS PER SCHOOL (BASELINE) ===")
for s, pts in sorted(max_pts.items(), key=lambda x: -x[1]):
    print(f"{s:<25}: {pts:.0f} pts")

# Test Monte Carlo for Q2 dominance
q_wins = {"Q1": 0, "Q2": 0, "Q3": 0, "Q4": 0}
N = 20000

for _ in range(N):
    scores = {s: 0.0 for s in SCHOOLS}
    for q in Q_FASE2:
        opt = random.choice(q)
        for s, w in opt.items():
            scores[s] += w
    for left, right in Q_FASE3:
        t = random.random() # [0, 1]
        for s, w in left.items():
            scores[s] += (1 - t) * w
        for s, w in right.items():
            scores[s] += t * w
    
    tot = sum(scores.values())
    pcts = {s: (scores[s] / tot) * 100 for s in SCHOOLS}
    
    q_scores = {
        "Q1": pcts["marxista"] + pcts["feminista"] + pcts["ecologica"],
        "Q2": pcts["conductista"],
        "Q3": pcts["keynesiana"] + pcts["tradicion_desarrollista"] + pcts["estado_emprendedor"] + pcts["institucionalista"],
        "Q4": pcts["clasica"] + pcts["neoclasica"] + pcts["austriaca"] + pcts["schumpeteriana"]
    }
    dominant = max(q_scores, key=q_scores.get)
    q_wins[dominant] += 1

print(f"\n=== MONTE CARLO QUADRANT WINS ({N} iterations) ===")
for q, count in sorted(q_wins.items()):
    print(f"{q}: {count} ({count/N*100:.2f}%)")
