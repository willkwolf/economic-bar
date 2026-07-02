# Metodología y Fundamentos del Onboarding: Calibración de Priors

Este documento describe la base teórica, metodológica y psicométrica del módulo de **Onboarding** (Calibración Alquímica de Priors) en el simulador interactivo **BAR-Economic**. 

El objetivo de este módulo es capturar el perfil económico declarado (priors bayesianos) del usuario antes de comenzar el test situacional, permitiendo evaluar posteriormente su **Índice de Consistencia Cognitiva (ICC)** al contrastar su intuición ideológica declarada con sus decisiones prácticas ante dilemas económicos.

---

## 1. El Concepto de "Prior" Ideológico

Inspirado en el pensamiento bayesiano y en la economía cognitiva, el simulador asume que ningún ciudadano aborda un problema económico desde una posición de neutralidad absoluta o vacío mental. Todos poseemos un **"prior"**: un conjunto de presupuestos y sesgos heurísticos preconcebidos sobre cómo funciona (y cómo debería funcionar) el mundo.

En el onboarding, el prior se descompone en dos dimensiones complementarias:
1. **La Estética/Marca Conceptual (Preferencia de Cóctel)**: Una elección simbólica que representa una receta o combinación de escuelas económicas (ej. un *Keynesian Pisco* o un *Hayekian Mule*).
2. **Las Coordenadas Geométricas del Modelo Mental (Sliders de Tensión)**: La alineación del usuario respecto a los dos grandes ejes de tensión económica.

---

## 2. Dimensiones de Tensión y Diseño de Sliders

El onboarding calibra el modelo mental del usuario mediante dos deslizadores que operan sobre un continuo del $0$ al $100$. Técnicamente, estos valores se normalizan en el rango $[0, 1]$ para realizar cálculos geométricos en el backend:

### Eje X: Gobernanza (Estado vs. Mercado)
- **Definición**: Evalúa la preferencia del usuario sobre quién debe ser el coordinador principal de la actividad económica.
- **Polo Izquierdo (0.0)**: **Mercado**. Coordinación descentralizada mediante el mecanismo de precios libres y la iniciativa privada.
- **Polo Derecho (1.0)**: **Planificación / Estado**. Coordinación centralizada mediante regulaciones públicas y decisiones gubernamentales.

### Eje Y: Propósito (Equidad vs. Crecimiento)
- **Definición**: Evalúa la prioridad que el usuario asigna a los resultados de la producción económica.
- **Polo Izquierdo (0.0)**: **Crecimiento**. Maximización de la producción, productividad y competitividad a largo plazo.
- **Polo Derecho (1.0)**: **Equidad**. Distribución justa de la riqueza y el bienestar social en el corto y mediano plazo.

---

## 3. Mapeo Psicométrico (Escala de Diferencial Semántico)

Para evitar sobrecargar de tecnicismos al usuario y reducir sesgos en la medición, las respuestas se capturan mediante un **Diferencial Semántico adaptado como Escala Likert de 7 puntos**:

| Valor del Slider ($val$) | Categoría Psicométrica | Explicación en UI | Porcentaje de Afinidad |
| :--- | :--- | :--- | :---: |
| **0 - 15** | Preferencia Fuerte Izquierda | "Preferencia fuerte por [L]" | $100 - val$ |
| **16 - 35** | Preferencia Moderada Izquierda | "Preferencia moderada por [L]" | $100 - val$ |
| **36 - 45** | Inclinación Leve Izquierda | "Inclinación leve por [L]" | $100 - val$ |
| **46 - 54** | Equilibrio / Neutralidad | "Equilibrio neutral" | *Sin % (o 50%)* |
| **55 - 64** | Inclinación Leve Derecha | "Inclinación leve por [R]" | $val$ |
| **65 - 84** | Preferencia Moderada Derecha | "Preferencia moderada por [R]" | $val$ |
| **85 - 100** | Preferencia Fuerte Derecha | "Preferencia fuerte por [R]" | $val$ |

*(Donde `[L]` representa la etiqueta izquierda y `[R]` la derecha).*

### Ventajas del Rediseño de Escala
1. **Neutralidad Psicológica (Eliminación de "Sesgo")**:
   Sustituir la palabra *"Sesgo"* por *"Preferencia"* o *"Inclinación"* elimina la connotación de error cognitivo. Esto evita que el usuario mueva el slider artificialmente hacia el centro debido al *sesgo de deseabilidad social*.
2. **Coherencia de Porcentaje Continuo**:
   El porcentaje representa la fuerza de afinidad por el polo dominante y transiciona linealmente (de 50% en el centro a 100% en el extremo), eliminando los antiguos saltos matemáticos (como el salto abrupto de 50% a 22% al pasar de 40 a 39 en el slider).

---

## 4. Cálculo de la Consistencia Cognitiva (ICC)

Al concluir el test, el sistema calcula el **Índice de Consistencia Cognitiva (ICC)** (o *Bayesian Prior Match*) con una ponderación de $60\%$ para la similitud del cóctel y $40\%$ para la similitud de ejes:

$$ICC = 0.6 \times \text{Similitud}_{\text{Coseno}} + 0.4 \times \text{Similitud}_{\text{Ejes}}$$

### A. Similitud del Cóctel ($\text{Similitud}_{\text{Coseno}}$)
Se calcula la similitud de coseno entre el vector de ingredientes del cóctel seleccionado en el onboarding ($P$) y el vector de porcentajes de escuelas resultantes del test ($T$):

$$\text{Similitud}_{\text{Coseno}} = \frac{P \cdot T}{\|P\| \|T\|} = \frac{\sum_{i} P_i T_i}{\sqrt{\sum_{i} P_i^2} \sqrt{\sum_{i} T_i^2}}$$

Esto mide si la "receta" conceptual declarada al inicio coincide con las prioridades teóricas seleccionadas de forma implícita durante el test.

### B. Similitud de Ejes ($\text{Similitud}_{\text{Ejes}}$)
Mide la distancia entre el punto inicial del onboarding $(x_{prior}, y_{prior})$ y las coordenadas finales resultantes del test $(x_{final}, y_{final})$.
1. Se calcula la distancia euclidiana:
   $$d = \sqrt{(x_{final} - x_{prior})^2 + (y_{final} - y_{prior})^2}$$
2. Sabiendo que la máxima distancia posible en un cuadrado unitario es $\sqrt{2}$, se calcula la similitud como:
   $$\text{Similitud}_{\text{Ejes}} = \max\left(0, 1 - \frac{d}{\sqrt{2}}\right)$$

### C. Clasificación del ICC
- **Consistencia Alta ($\ge 85\%$)**: Gran alíneación lógica. El modelo mental intuitivo del usuario se corresponde casi perfectamente con sus decisiones ante problemas específicos.
- **Consistencia Moderada ($65\% - 84\%$)**: Enfoque pragmático. El usuario tiene un rumbo claro pero es capaz de incorporar herramientas de otras escuelas para resolver tensiones de forma práctica.
- **Consistencia Baja ($< 65\%$)**: Tensión enriquecedora. Existe una discrepancia entre lo que el usuario cree defender conceptualmente y las decisiones prácticas que toma. Refleja un sano debate interno y la ausencia de dogmas rígidos.
