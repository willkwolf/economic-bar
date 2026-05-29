# test_combinatorics.py
# Simulación y análisis combinatorio del test de Elixires de la Razón

ESCUELAS = {
    "marxista": "Q1", "feminista": "Q1", "ecologica": "Q1",
    "conductista": "Q2",
    "keynesiana": "Q3", "tradicion_desarrollista": "Q3", "estado_emprendedor": "Q3", "institucionalista": "Q3",
    "clasica": "Q4", "neoclasica": "Q4", "austriaca": "Q4", "schumpeteriana": "Q4"
}

# Representación simplificada de las preguntas del test y sus pesos
# Fase 1: Arquitectura cognitiva (3 preguntas binarias)
# Fase 2: Pesos ideológicos (6 preguntas con 4 opciones)
FASE2_PREGUNTAS = [
    # q4: vision mercado
    [
        {"austriaca": 4, "clasica": 3, "neoclasica": 2},
        {"neoclasica": 4, "keynesiana": 3, "conductista": 2},
        {"institucionalista": 4, "tradicion_desarrollista": 3},
        {"marxista": 4, "feminista": 3}
    ],
    # q5: funcion estado
    [
        {"austriaca": 4, "clasica": 4},
        {"keynesiana": 4, "neoclasica": 3},
        {"estado_emprendedor": 4, "tradicion_desarrollista": 4, "schumpeteriana": 2},
        {"marxista": 4, "ecologica": 3, "feminista": 3}
    ],
    # q6: justicia/desigualdad
    [
        {"neoclasica": 4, "austriaca": 3, "clasica": 2},
        {"keynesiana": 4, "conductista": 3},
        {"feminista": 4, "ecologica": 3},
        {"marxista": 4, "institucionalista": 2}
    ],
    # q7: racionalidad humana
    [
        {"neoclasica": 4, "clasica": 3},
        {"conductista": 4, "institucionalista": 3},
        {"austriaca": 4, "schumpeteriana": 2},
        {"feminista": 4, "marxista": 4, "ecologica": 3}
    ],
    # q8: motor de cambio
    [
        {"tradicion_desarrollista": 4, "clasica": 3},
        {"schumpeteriana": 4, "austriaca": 3},
        {"estado_emprendedor": 4, "schumpeteriana": 3},
        {"ecologica": 4, "feminista": 3}
    ],
    # q9: propiedad
    [
        {"clasica": 4, "neoclasica": 3},
        {"institucionalista": 4, "ecologica": 3},
        {"marxista": 4, "tradicion_desarrollista": 3},
        {"feminista": 4, "ecologica": 4}
    ]
]

# Fase 3: Sliders (3 dilemas con polos y pesos)
FASE3_PREGUNTAS = [
    # q10: estimulo vs estabilidad
    ({"austriaca": 3, "neoclasica": 2, "clasica": 2}, {"keynesiana": 4, "estado_emprendedor": 2}),
    # q11: crecimiento vs limites
    ({"schumpeteriana": 3, "neoclasica": 2, "tradicion_desarrollista": 2}, {"ecologica": 4, "feminista": 3}),
    # q12: globalizacion vs soberania
    ({"clasica": 3, "neoclasica": 2, "austriaca": 2}, {"tradicion_desarrollista": 4, "estado_emprendedor": 2, "marxista": 2})
]

def run_scoring(answers_fase1, answers_fase2, answers_fase3):
    """
    answers_fase1: lista de 3 booleanos (True = pluralismo, False = monismo)
    answers_fase2: lista de 6 enteros (0 a 3, representando la opción seleccionada)
    answers_fase3: lista de 3 flotantes (0.0, 0.5, 1.0, representando valor del slider)
    """
    w = {k: 0.0 for k in ESCUELAS.keys()}
    
    # Fase 1: Cuenta de respuestas de pluralismo
    pluralismo_count = sum(1 for x in answers_fase1 if x)
    
    # Fase 2: Sumar pesos de opciones seleccionadas
    for q_idx, opt_idx in enumerate(answers_fase2):
        weights = FASE2_PREGUNTAS[q_idx][opt_idx]
        for s_id, weight in weights.items():
            w[s_id] += weight
            
    # Fase 3: Sumar pesos de sliders
    for q_idx, val in enumerate(answers_fase3):
        left_weights, right_weights = FASE3_PREGUNTAS[q_idx]
        for s_id, weight in left_weights.items():
            w[s_id] += (1 - val) * weight
        for s_id, weight in right_weights.items():
            w[s_id] += val * weight
            
    # Normalización a porcentajes
    sum_w = sum(w.values())
    if sum_w == 0:
        return None
        
    porcentajes = {}
    for s_id, val in w.items():
        porcentajes[s_id] = round((val / sum_w) * 100)
        
    # Ajustar a exactamente 100
    curr_sum = sum(porcentajes.values())
    if curr_sum != 100:
        diff = 100 - curr_sum
        highest = max(porcentajes, key=porcentajes.get)
        porcentajes[highest] += diff
        
    # HHI
    hhi = sum((pct / 100) ** 2 for pct in porcentajes.values())
    
    # Arquetipo
    epistemic_style = "pluralismo" if pluralismo_count >= 2 else "monismo"
    real_purity = "monismo" if hhi >= 0.18 else "pluralismo"
    
    archetype = ""
    if epistemic_style == "monismo" and real_purity == "monismo":
        archetype = "monismo_doctrinal"
    elif epistemic_style == "pluralismo" and real_purity == "pluralismo":
        archetype = "pluralismo_sistemico"
    elif epistemic_style == "monismo" and real_purity == "pluralismo":
        archetype = "monismo_eclectico"
    elif epistemic_style == "pluralismo" and real_purity == "monismo":
        archetype = "pluralismo_pragmatico"
        
    # Cuadrantes
    q_scores = {
        "Q1": porcentajes["marxista"] + porcentajes["feminista"] + porcentajes["ecologica"],
        "Q2": porcentajes["conductista"],
        "Q3": porcentajes["keynesiana"] + porcentajes["tradicion_desarrollista"] + porcentajes["estado_emprendedor"] + porcentajes["institucionalista"],
        "Q4": porcentajes["clasica"] + porcentajes["neoclasica"] + porcentajes["austriaca"] + porcentajes["schumpeteriana"]
    }
    dominant_q = max(q_scores, key=q_scores.get)
    
    return {
        "porcentajes": porcentajes,
        "hhi": hhi,
        "archetype": archetype,
        "dominant_q": dominant_q
    }

# Vamos a realizar una simulación aleatoria de 5000 respuestas para ver la distribución
import random

stats = {
    "monismo_doctrinal": 0,
    "pluralismo_sistemico": 0,
    "monismo_eclectico": 0,
    "pluralismo_pragmatico": 0
}
q_stats = {"Q1": 0, "Q2": 0, "Q3": 0, "Q4": 0}
hhi_values = []

for _ in range(5000):
    f1 = [random.choice([True, False]) for _ in range(3)]
    f2 = [random.randint(0, 3) for _ in range(6)]
    f3 = [random.choice([0.0, 0.5, 1.0]) for _ in range(3)]
    res = run_scoring(f1, f2, f3)
    if res:
        stats[res["archetype"]] += 1
        q_stats[res["dominant_q"]] += 1
        hhi_values.append(res["hhi"])

print("--- DISTRIBUCIÓN DE ARQUETIPOS (5000 simulaciones aleatorias) ---")
for arch, count in stats.items():
    print(f"{arch}: {count} ({count/5000*100:.2f}%)")

print("\n--- DISTRIBUCIÓN DE CUADRANTES DOMINANTES ---")
for q, count in q_stats.items():
    print(f"{q}: {count} ({count/5000*100:.2f}%)")

print(f"\nValor HHI promedio: {sum(hhi_values)/len(hhi_values):.4f}")
print(f"HHI Min: {min(hhi_values):.4f}, Max: {max(hhi_values):.4f}")
