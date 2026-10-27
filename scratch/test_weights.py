# test_weights.py
q4 = [
  {"austriaca": 4, "clasica": 3, "neoclasica": 2},
  {"neoclasica": 4, "keynesiana": 3, "conductista": 2},
  {"institucionalista": 4, "tradicion_desarrollista": 3},
  {"marxista": 4, "feminista": 3}
]
q5 = [
  {"austriaca": 4, "clasica": 4},
  {"keynesiana": 4, "neoclasica": 3},
  {"estado_emprendedor": 4, "tradicion_desarrollista": 4, "schumpeteriana": 2},
  {"marxista": 4, "ecologica": 3, "feminista": 3}
]
q6 = [
  {"neoclasica": 4, "austriaca": 3, "clasica": 2},
  {"keynesiana": 4, "conductista": 3},
  {"feminista": 4, "ecologica": 3},
  {"marxista": 4, "institucionalista": 2}
]
q7 = [
  {"neoclasica": 4, "clasica": 3},
  {"conductista": 4, "institucionalista": 3},
  {"austriaca": 4, "schumpeteriana": 2},
  {"feminista": 4, "marxista": 4, "ecologica": 3}
]
q8 = [
  {"tradicion_desarrollista": 4, "clasica": 3},
  {"schumpeteriana": 4, "austriaca": 3},
  {"estado_emprendedor": 4, "schumpeteriana": 3},
  {"ecologica": 4, "feminista": 3}
]
q9 = [
  {"clasica": 4, "neoclasica": 3},
  {"institucionalista": 4, "ecologica": 3},
  {"marxista": 4, "tradicion_desarrollista": 3},
  {"feminista": 4, "ecologica": 4}
]
sliders = [
  ({"austriaca": 3, "neoclasica": 2, "clasica": 2}, {"keynesiana": 4, "estado_emprendedor": 2}),
  ({"schumpeteriana": 3, "neoclasica": 2, "tradicion_desarrollista": 2}, {"ecologica": 4, "feminista": 3}),
  ({"clasica": 3, "neoclasica": 2, "austriaca": 2}, {"tradicion_desarrollista": 4, "estado_emprendedor": 2, "marxista": 2})
]

schools = ["marxista", "feminista", "ecologica", "tradicion_desarrollista", "keynesiana", 
           "institucionalista", "estado_emprendedor", "conductista", "clasica", "neoclasica", 
           "austriaca", "schumpeteriana"]

p2_counts = {s: 0 for s in schools}
p2_max = {s: 0 for s in schools}
for q in [q4, q5, q6, q7, q8, q9]:
    for opt in q:
        for s, w in opt.items():
            p2_counts[s] += 1
            p2_max[s] += w

p3_counts = {s: 0 for s in schools}
p3_max = {s: 0 for s in schools}
for left, right in sliders:
    for s, w in left.items():
        p3_counts[s] += 1
        p3_max[s] += w
    for s, w in right.items():
        p3_counts[s] += 1
        p3_max[s] += w

print(f"{'Escuela':<24} | {'P2 Ocurr':<8} | {'P2 SumW':<8} | {'P3 Ocurr':<8} | {'P3 MaxW':<8} | {'Total Ocurr':<11} | {'Total MaxW':<10}")
print("-" * 88)
for s in schools:
    print(f"{s:<24} | {p2_counts[s]:<8} | {p2_max[s]:<8} | {p3_counts[s]:<8} | {p3_max[s]:<8} | {p2_counts[s]+p3_counts[s]:<11} | {p2_max[s]+p3_max[s]:<10}")
