# glossary_audit.py
import re

# Load GLOSSARY keys from data.js
with open("data.js", "r", encoding="utf-8") as f:
    data_content = f.read()

# Extract keys in GLOSSARY.es
glossary_es_match = re.search(r'const GLOSSARY = \{[\s\S]*?es: \{([\s\S]*?)\},\s*en:', data_content)
glossary_keys_es = []
if glossary_es_match:
    glossary_keys_es = re.findall(r'"([^"]+)":', glossary_es_match.group(1))

print(f"Glossary terms in ES: {len(glossary_keys_es)}")
print("Terms:", glossary_keys_es)

# Check which glossary terms actually appear in the 12 questions in Spanish
preguntas_text = """
Cuando ocurre una gran crisis económica en un país (como pobreza extrema o desempleo masivo), ¿cómo la explicas?
Toda gran crisis se debe principalmente a UNA sola gran causa (como el exceso de controles del gobierno, la codicia individual o la lucha entre ricos y pobres).
Las crisis ocurren por la combinación de MUCHAS causas complejas. Explicarlas con una sola razón es una simplificación peligrosa.
¿Cuál debería ser el papel del economista o asesor que diseña las políticas del gobierno?
Su papel es crear un plan económico único y coherente, y defenderlo con firmeza científica para guiar al país sin dudar por motivos políticos.
Su papel es dudar de sus propias teorías, adaptar sus propuestas a cada problema específico y aceptar que las soluciones prácticas valen más que las ideas fijas.
Cuando un plan económico del gobierno fracasa por completo, ¿cómo lo explicas?
Suele deberse a que no se aplicó con suficiente pureza, a que hubo sabotaje de grupos rivales o a que los políticos cambiaron el plan a mitad de camino.
Demuestra que la teoría que usaron tenía límites y no servía para esa situación real. Si las ideas fallan en la práctica, hay que cambiarlas.
¿Qué piensas sobre el mercado libre como forma de organizar la sociedad?
Es un sistema libre y espontáneo que funciona solo a través de los precios. Si el gobierno interviene, distorsiona las señales y empeora las cosas.
Es eficiente para producir, pero tiene fallas graves (como monopolios o contaminación) que obligan al gobierno a poner reglas estrictas.
No funciona solo. Depende totalmente de las leyes, la confianza de la sociedad, las costumbres y las reglas que las comunidades acuerden.
Es un lugar donde los dueños del dinero abusan de los trabajadores y se quedan con la riqueza. Debe ser transformado por completo.
¿Cuál debería ser la función principal del gobierno en la economía?
Intervenir lo mínimo posible: solo proteger la propiedad privada, hacer cumplir los contratos y mantener la seguridad.
Gastar e invertir dinero público en obras y programas sociales para crear empleo y reactivar la economía cuando las cosas vayan mal.
Liderar proyectos arriesgados de tecnología e innovación para crear nuevas industrias, como hace una empresa emprendedora.
Planificar democráticamente la producción de acuerdo con lo que necesita la sociedad y lo que el planeta puede soportar, no por la ganancia privada.
¿Cómo explicas la gran acumulación de riqueza y la desigualdad económica?
Es el resultado natural del esfuerzo y la productividad de cada uno. Cobrar altos impuestos desincentiva el trabajo y la inversión.
Es un problema que frena el consumo de la gente común y daña la sociedad. Se necesitan impuestos progresivos para corregirlo.
Viene de no valorar ni pagar el trabajo doméstico y de cuidado que hacen las mujeres, y de explotar los recursos naturales sin control.
Es la consecuencia inevitable de que los dueños de las empresas se queden con el valor producido por los trabajadores. Se corrige repartiendo la propiedad.
¿Cómo actúan las personas al tomar decisiones económicas?
Somos personas racionales que analizamos la información disponible para elegir siempre lo que más nos conviene.
Decidimos de forma limitada: cometemos errores fáciles de predecir, nos dejamos llevar por las emociones y nos influye cómo nos presentan las opciones.
Actuamos de forma libre pero con conocimiento incompleto, descubriendo oportunidades en el día a día a través de nuestras decisiones individuales.
Estamos condicionados por la clase social a la que pertenecemos, nuestro género, nuestra familia y la comunidad en la que vivimos.
¿Cuál es la fuerza principal que impulsa el progreso material y el avance de un país?
El fortalecimiento de la producción nacional, apoyando y protegiendo a las industrias del país frente a la competencia de afuera.
La innovación constante de emprendedores audaces que crean nuevas tecnologías y reemplazan a las empresas que se quedan atrás.
Grandes proyectos de investigación financiados por el gobierno para inventar las tecnologías del futuro.
Reorganizar la forma en que producimos para vivir bien consumiendo menos recursos y cuidando la vida.
¿Qué tipo de propiedad consideras más justa y eficiente para el desarrollo?
La propiedad privada bien protegida por las leyes, para que las personas tengan incentivos para trabajar, invertir y cuidar sus cosas.
La propiedad comunitaria, gestionada de forma directa por los vecinos o usuarios mediante acuerdos locales y autogestión.
La propiedad pública del gobierno sobre los recursos clave (como agua, energía y salud) para evitar que las empresas privadas abusen.
Las cooperativas horizontales donde los trabajadores toman las decisiones juntos y se prioriza el bienestar social y el cuidado ecológico.
Dilema de Estabilidad vs. Estímulo: ¿Qué debe priorizarse en una recesión?
Controlar el gasto público y evitar la inflación, aunque temporalmente aumente el desempleo mientras la economía se limpia sola.
Garantizar el empleo inyectando dinero en la economía mediante gasto social, aunque aumente la deuda del gobierno.
Dilema de Crecimiento vs. Límites: ¿Qué debe guiar nuestro aparato productivo?
Aumentar la producción, la innovación y las ventas para hacer al país más rico y competitivo en el mundo.
Ajustar la producción para no consumir más recursos naturales de los que el planeta puede regenerar, priorizando el bienestar.
Dilema de Globalización vs. Soberanía: ¿Cómo relacionarse con los mercados mundiales?
Eliminar aranceles y barreras comerciales para integrarse plenamente en los mercados globales y comprar más barato.
Proteger los productos y empleos nacionales de la competencia externa y controlar la entrada de dinero especulativo.
"""

matches_in_questions = []
for term in glossary_keys_es:
    pattern = r'\b' + re.escape(term) + r'\b'
    if re.search(pattern, preguntas_text, re.IGNORECASE):
        matches_in_questions.append(term)

print(f"\nGlossary terms that appear in the 12 questions: {len(matches_in_questions)}")
print("Matched terms:", matches_in_questions)

# Terms present in questions that are NOT in glossary:
candidates_missing = [
    "recesión", "aranceles", "monopolios", "inflación", "propiedad privada", "propiedad comunitaria", 
    "propiedad pública", "cooperativas", "gasto público", "impuestos progresivos", "productividad",
    "soberanía nacional", "dinero especulativo", "aparato productivo", "límites del planeta",
    "destrucción creativa", "mano invisible", "fallas de mercado", "pleno empleo", "austeridad",
    "equilibrio", "desregulación", "intervención", "monismo", "pluralismo", "trade-off"
]

print("\nMissing or check in glossary:")
for c in candidates_missing:
    in_gl = any(c.lower() == g.lower() for g in glossary_keys_es)
    print(f" - {c}: {'In Glossary' if in_gl else 'MISSING'}")
