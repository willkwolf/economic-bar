# readability_en.py
import re
from readability_analyzer import analyze_text

preguntas_en = [
    {
        "id": "q1",
        "texto": "When a major economic crisis occurs in a country (such as extreme poverty or massive unemployment), how do you explain it?",
        "opciones": [
            "Every major crisis is mainly due to ONE single cause (such as government over-regulation, individual greed, or the struggle between rich and poor).",
            "Crises occur from a combination of MANY complex causes. Explaining them with a single reason is a dangerous simplification."
        ]
    },
    {
        "id": "q2",
        "texto": "What should be the role of the economist or advisor who designs government policies?",
        "opciones": [
            "Their role is to create a single, coherent economic plan and defend it with scientific firmness to guide the country without hesitating for political reasons.",
            "Their role is to doubt their own theories, adapt their proposals to each specific problem, and accept that practical solutions are worth more than fixed ideas."
        ]
    },
    {
        "id": "q3",
        "texto": "When a government economic plan fails completely, how do you explain it?",
        "opciones": [
            "It is usually because it was not applied purely enough, there was sabotage by rival groups, or politicians changed the plan midway through.",
            "It shows that the theory they used had limits and was not suited for that real situation. If ideas fail in practice, they must be changed."
        ]
    },
    {
        "id": "q4",
        "texto": "What do you think about the free market as a way to organize society?",
        "opciones": [
            "It is a free and spontaneous system that works on its own through prices. If the government intervenes, it distorts signals and makes things worse.",
            "It is efficient at producing, but has serious flaws (like monopolies or pollution) that force the government to set strict rules.",
            "It does not work on its own. It depends entirely on laws, social trust, customs, and the rules agreed upon by communities.",
            "It is a place where money owners exploit workers and take the wealth. It must be completely transformed."
        ]
    },
    {
        "id": "q5",
        "texto": "What should be the main function of government in the economy?",
        "opciones": [
            "Intervene as little as possible: only protect private property, enforce contracts, and maintain security.",
            "Spend and invest public money on public works and social programs to create jobs and revive the economy when things go wrong.",
            "Lead risky technology and innovation projects to create new industries, just like an entrepreneurial company does.",
            "Democratically plan production based on what society needs and what the planet can sustain, not for private profit."
        ]
    },
    {
        "id": "q6",
        "texto": "How do you explain large wealth accumulation and economic inequality?",
        "opciones": [
            "It is the natural result of each person's effort and productivity. Charging high taxes discourages work and investment.",
            "It is a problem that slows down consumption for ordinary people and harms society. Progressive taxes are needed to fix it.",
            "It comes from not valuing or paying for domestic and care work done by women, and exploiting natural resources without control.",
            "It is the inevitable result of business owners keeping the value produced by workers. It is fixed by sharing ownership."
        ]
    },
    {
        "id": "q7",
        "texto": "How do people act when making economic decisions?",
        "opciones": [
            "We are rational people who analyze available information to always choose what is best for us.",
            "We decide in a limited way: we make easy-to-predict mistakes, are led by emotions, and are influenced by how choices are presented.",
            "We act freely but with incomplete knowledge, discovering opportunities day by day through our individual choices.",
            "We are conditioned by the social class we belong to, our gender, our family, and the community we live in."
        ]
    },
    {
        "id": "q8",
        "texto": "What is the main force driving material progress and advancement?",
        "opciones": [
            "Strengthening national production, supporting and protecting local industries against outside competition.",
            "Constant innovation by bold entrepreneurs who create new technologies and replace companies that fall behind.",
            "Large research projects funded by the government to invent the technologies of the future.",
            "Reorganizing the way we produce to live well while consuming fewer resources and caring for life."
        ]
    },
    {
        "id": "q9",
        "texto": "What type of property ownership do you consider most just and efficient?",
        "opciones": [
            "Private property well protected by laws, so that individuals have incentives to work, invest, and care for their things.",
            "Community property, managed directly by neighbors or users through local agreements and self-governance.",
            "Public ownership by the government of key resources (like water, energy, and health) to prevent private businesses from abusing power.",
            "Horizontal cooperatives where workers make decisions together and prioritize social well-being and ecological care."
        ]
    },
    {
        "id": "q10",
        "texto": "Stability vs. Stimulus Dilemma: What should be prioritized in a recession?",
        "opciones": [
            "Control public spending and avoid inflation, even if it temporarily increases unemployment while the market clears itself.",
            "Guarantee jobs by injecting money into the economy through social spending, even if government debt increases."
        ]
    },
    {
        "id": "q11",
        "texto": "Growth vs. Boundaries Dilemma: What should guide our productive engine?",
        "opciones": [
            "Increase production, innovation, and sales to make the country richer and more competitive in the world.",
            "Adjust production to avoid consuming more natural resources than the planet can regenerate, prioritizing well-being."
        ]
    },
    {
        "id": "q12",
        "texto": "Globalization vs. Sovereignty Dilemma: How should we relate to global markets?",
        "opciones": [
            "Remove tariffs and trade barriers to fully integrate into global markets and buy things cheaper.",
            "Protect national products and jobs from outside competition and monitor speculative money inflows."
        ]
    }
]

print("=== AUDITORIA DE LEGIBILIDAD EN INGLES (Flesch Reading Ease & Grade Level) ===")
print("Flesch Reading Ease: 90-100: Very Easy, 60-70: Standard, 0-30: Very Difficult")
print("FK Grade Level: 6-8: Middle School, 9-12: High School, 13+: College")
print("-" * 80)
for p in preguntas_en:
    q_stats = analyze_text(p["texto"], 'en')
    opt_stats = [analyze_text(o, 'en') for o in p["opciones"]]
    avg_flesch = sum(o["flesch"] for o in opt_stats) / len(opt_stats)
    avg_grade = sum(o["grade"] for o in opt_stats) / len(opt_stats)
    total_words = q_stats["words"] + sum(o["words"] for o in opt_stats)
    print(f"ID: {p['id']} | Palabras: {total_words:<3} | Q Flesch: {q_stats['flesch']:<5} Grade: {q_stats['grade']:<4} | Opt Avg Flesch: {avg_flesch:<5.1f} Grade: {avg_grade:<4.1f}")
