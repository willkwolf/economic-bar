# readability_analyzer.py
import re
import math

def count_syllables_es(word):
    word = word.lower().strip(".,;:?!\"'()[]{}")
    if not word:
        return 0
    # Spanish vowels
    vowels = "aáeéiíoóuúü"
    # Diphthongs and triphthongs approximate
    word = re.sub(r'[iuü][aeoáéó]', 'V', word)
    word = re.sub(r'[aeoáéó][iuü]', 'V', word)
    count = 0
    for char in word:
        if char in vowels or char == 'V':
            count += 1
    return max(1, count)

def count_syllables_en(word):
    word = word.lower().strip(".,;:?!\"'()[]{}")
    if not word:
        return 0
    count = len(re.findall(r'[aeiouy]+', word))
    if word.endswith('e') and not word.endswith('le') and len(word) > 2:
        count -= 1
    return max(1, count)

def analyze_text(text, lang='es'):
    words = re.findall(r'\b[A-Za-zÁÉÍÓÚáéíóúñÑüÜ]+\b', text)
    sentences = [s.strip() for s in re.split(r'[.?!]+', text) if s.strip()]
    if not sentences:
        sentences = [text]
    num_words = len(words)
    num_sentences = len(sentences)
    if num_words == 0:
        return {"words": 0, "sentences": 0, "syllables": 0, "asl": 0, "asw": 0, "score": 0}
    
    if lang == 'es':
        syllables = sum(count_syllables_es(w) for w in words)
        asl = num_words / num_sentences # Average Sentence Length
        # Fernandez Huerta formula: 206.84 - 0.60 * P - 1.02 * F
        # where P = syllables per 100 words = (syllables / words) * 100
        # F = sentences per 100 words = (sentences / words) * 100 (or ASL formulation)
        # Szigriszt-Pazos: 206.835 - 62.3 * (syllables/words) - (words/sentences)
        p = (syllables / num_words) * 100
        szigriszt = 206.835 - (62.3 * (syllables / num_words)) - asl
        huerta = 206.84 - (0.60 * p) - (1.02 * asl)
        return {
            "words": num_words,
            "sentences": num_sentences,
            "syllables": syllables,
            "asl": round(asl, 2),
            "asw": round(syllables / num_words, 2),
            "szigriszt": round(szigriszt, 1),
            "huerta": round(huerta, 1)
        }
    else:
        syllables = sum(count_syllables_en(w) for w in words)
        asl = num_words / num_sentences
        asw = syllables / num_words
        flesch = 206.835 - (1.015 * asl) - (84.6 * asw)
        fk_grade = 0.39 * asl + 11.8 * asw - 15.59
        return {
            "words": num_words,
            "sentences": num_sentences,
            "syllables": syllables,
            "asl": round(asl, 2),
            "asw": round(asw, 2),
            "flesch": round(flesch, 1),
            "grade": round(fk_grade, 1)
        }

# Questions in Spanish
preguntas_es = [
    {
        "id": "q1",
        "texto": "Cuando ocurre una gran crisis económica en un país (como pobreza extrema o desempleo masivo), ¿cómo la explicas?",
        "opciones": [
            "Toda gran crisis se debe principalmente a UNA sola gran causa (como el exceso de controles del gobierno, la codicia individual o la lucha entre ricos y pobres).",
            "Las crisis ocurren por la combinación de MUCHAS causas complejas. Explicarlas con una sola razón es una simplificación peligrosa."
        ]
    },
    {
        "id": "q2",
        "texto": "¿Cuál debería ser el papel del economista o asesor que diseña las políticas del gobierno?",
        "opciones": [
            "Su papel es crear un plan económico único y coherente, y defenderlo con firmeza científica para guiar al país sin dudar por motivos políticos.",
            "Su papel es dudar de sus propias teorías, adaptar sus propuestas a cada problema específico y aceptar que las soluciones prácticas valen más que las ideas fijas."
        ]
    },
    {
        "id": "q3",
        "texto": "Cuando un plan económico del gobierno fracasa por completo, ¿cómo lo explicas?",
        "opciones": [
            "Suele deberse a que no se aplicó con suficiente pureza, a que hubo sabotaje de grupos rivales o a que los políticos cambiaron el plan a mitad de camino.",
            "Demuestra que la teoría que usaron tenía límites y no servía para esa situación real. Si las ideas fallan en la práctica, hay que cambiarlas."
        ]
    },
    {
        "id": "q4",
        "texto": "¿Qué piensas sobre el mercado libre como forma de organizar la sociedad?",
        "opciones": [
            "Es un sistema libre y espontáneo que funciona solo a través de los precios. Si el gobierno interviene, distorsiona las señales y empeora las cosas.",
            "Es eficiente para producir, pero tiene fallas graves (como monopolios o contaminación) que obligan al gobierno a poner reglas estrictas.",
            "No funciona solo. Depende totalmente de las leyes, la confianza de la sociedad, las costumbres y las reglas que las comunidades acuerden.",
            "Es un lugar donde los dueños del dinero abusan de los trabajadores y se quedan con la riqueza. Debe ser transformado por completo."
        ]
    },
    {
        "id": "q5",
        "texto": "¿Cuál debería ser la función principal del gobierno en la economía?",
        "opciones": [
            "Intervenir lo mínimo posible: solo proteger la propiedad privada, hacer cumplir los contratos y mantener la seguridad.",
            "Gastar e invertir dinero público en obras y programas sociales para crear empleo y reactivar la economía cuando las cosas vayan mal.",
            "Liderar proyectos arriesgados de tecnología e innovación para crear nuevas industrias, como hace una empresa emprendedora.",
            "Planificar democráticamente la producción de acuerdo con lo que necesita la sociedad y lo que el planeta puede soportar, no por la ganancia privada."
        ]
    },
    {
        "id": "q6",
        "texto": "¿Cómo explicas la gran acumulación de riqueza y la desigualdad económica?",
        "opciones": [
            "Es el resultado natural del esfuerzo y la productividad de cada uno. Cobrar altos impuestos desincentiva el trabajo y la inversión.",
            "Es un problema que frena el consumo de la gente común y daña la sociedad. Se necesitan impuestos progresivos para corregirlo.",
            "Viene de no valorar ni pagar el trabajo doméstico y de cuidado que hacen las mujeres, y de explotar los recursos naturales sin control.",
            "Es la consecuencia inevitable de que los dueños de las empresas se queden con el valor producido por los trabajadores. Se corrige repartiendo la propiedad."
        ]
    },
    {
        "id": "q7",
        "texto": "¿Cómo actúan las personas al tomar decisiones económicas?",
        "opciones": [
            "Somos personas racionales que analizamos la información disponible para elegir siempre lo que más nos conviene.",
            "Decidimos de forma limitada: cometemos errores fáciles de predecir, nos dejamos llevar por las emociones y nos influye cómo nos presentan las opciones.",
            "Actuamos de forma libre pero con conocimiento incompleto, descubriendo oportunidades en el día a día a través de nuestras decisiones individuales.",
            "Estamos condicionados por la clase social a la que pertenecemos, nuestro género, nuestra familia y la comunidad en la que vivimos."
        ]
    },
    {
        "id": "q8",
        "texto": "¿Cuál es la fuerza principal que impulsa el progreso material y el avance de un país?",
        "opciones": [
            "El fortalecimiento de la producción nacional, apoyando y protegiendo a las industrias del país frente a la competencia de afuera.",
            "La innovación constante de emprendedores audaces que crean nuevas tecnologías y reemplazan a las empresas que se quedan atrás.",
            "Grandes proyectos de investigación financiados por el gobierno para inventar las tecnologías del futuro.",
            "Reorganizar la forma en que producimos para vivir bien consumiendo menos recursos y cuidando la vida."
        ]
    },
    {
        "id": "q9",
        "texto": "¿Qué tipo de propiedad consideras más justa y eficiente para el desarrollo?",
        "opciones": [
            "La propiedad privada bien protegida por las leyes, para que las personas tengan incentivos para trabajar, invertir y cuidar sus cosas.",
            "La propiedad comunitaria, gestionada de forma directa por los vecinos o usuarios mediante acuerdos locales y autogestión.",
            "La propiedad pública del gobierno sobre los recursos clave (como agua, energía y salud) para evitar que las empresas privadas abusen.",
            "Las cooperativas horizontales donde los trabajadores toman las decisiones juntos y se prioriza el bienestar social y el cuidado ecológico."
        ]
    },
    {
        "id": "q10",
        "texto": "Dilema de Estabilidad vs. Estímulo: ¿Qué debe priorizarse en una recesión?",
        "opciones": [
            "Controlar el gasto público y evitar la inflación, aunque temporalmente aumente el desempleo mientras la economía se limpia sola.",
            "Garantizar el empleo inyectando dinero en la economía mediante gasto social, aunque aumente la deuda del gobierno."
        ]
    },
    {
        "id": "q11",
        "texto": "Dilema de Crecimiento vs. Límites: ¿Qué debe guiar nuestro aparato productivo?",
        "opciones": [
            "Aumentar la producción, la innovación y las ventas para hacer al país más rico y competitivo en el mundo.",
            "Ajustar la producción para no consumir más recursos naturales de los que el planeta puede regenerar, priorizando el bienestar."
        ]
    },
    {
        "id": "q12",
        "texto": "Dilema de Globalización vs. Soberanía: ¿Cómo relacionarse con los mercados mundiales?",
        "opciones": [
            "Eliminar aranceles y barreras comerciales para integrarse plenamente en los mercados globales y comprar más barato.",
            "Proteger los productos y empleos nacionales de la competencia externa y controlar la entrada de dinero especulativo."
        ]
    }
]

print("=== AUDITORIA DE LEGIBILIDAD EN ESPANOL (Szigriszt-Pazos & Huerta) ===")
print("Escala Szigriszt / Huerta:")
print("85-100: Muy Fácil (Primaria)")
print("75-84:  Fácil (1º y 2º ESO)")
print("65-74:  Bastante Fácil (3º y 4º ESO)")
print("50-64:  Normal / Estilo Medio (Bachillerato)")
print("40-49:  Algo Difícil (Grado Universitario)")
print("0-39:   Muy Difícil (Científico / Filosófico)")
print("-" * 80)

for p in preguntas_es:
    q_stats = analyze_text(p["texto"], 'es')
    opt_stats = [analyze_text(o, 'es') for o in p["opciones"]]
    avg_huerta = sum(o["huerta"] for o in opt_stats) / len(opt_stats)
    avg_szigriszt = sum(o["szigriszt"] for o in opt_stats) / len(opt_stats)
    avg_asl = sum(o["asl"] for o in opt_stats) / len(opt_stats)
    total_words = q_stats["words"] + sum(o["words"] for o in opt_stats)
    
    print(f"ID: {p['id']} | Palabras Totales: {total_words:<3} | Pregunta Huerta: {q_stats['huerta']:<5} | Opciones Prom Huerta: {avg_huerta:<5.1f} | Szigriszt: {avg_szigriszt:<5.1f} | ASL Prom: {avg_asl:<4.1f}")
