# Modelado Matemático y Métricas Vectoriales
## Especificación Formal del Motor de Cálculo de `app.js`

---

## 1. Introducción

El motor analítico de **El Bar Económico** traslada las respuestas cualitativas de los usuarios a un espacio métrico riguroso. Este documento detalla las deducciones, fórmulas y propiedades de los cuatro algoritmos matemáticos implementados en el cliente web.

---

## 2. Índice de Concentración de Herfindahl-Hirschman (HHI)

### 2.1 Definición Matemática
Adaptado de la teoría de regulación antimonopolio y economía industrial, el $HHI$ cuantifica la concentración dogmática de las afinidades del participante:

$$HHI = \sum_{i=1}^{12} (s_i)^2$$

Donde $s_i$ representa la cuota porcentual ($0 \le s_i \le 100$) de afinidad atribuida a la escuela económica $i$, sujeta a la restricción de masa:

$$\sum_{i=1}^{12} s_i = 100$$

### 2.2 Cotas Teóricas
* **Cota Inferior (Dispersión Absoluta):** Si el usuario distribuye sus afinidades de forma perfectamente uniforme entre las 12 escuelas ($s_i = 100/12 \approx 8.33\%$):
  $$HHI_{\min} = 12 \times (8.333)^2 \approx 833.33$$
* **Cota Superior (Monocultura Absoluta):** Si el usuario se adscribe al 100% a una única escuela:
  $$HHI_{\max} = 100^2 = 10000$$

### 2.3 Umbrales de Clasificación Cognitiva

| Rango de HHI | Arquetipo de Concentración | Significado Epistemológico |
| :--- | :--- | :--- |
| **$HHI > 2500$** | **Monocultura Doctrinal** | Elevada rigidez dogmática; vulnerabilidad extrema a sesgos de confirmación. |
| **$1500 \le HHI \le 2500$** | **Fórmula Equilibrada** | Balance armónico; integración multidisciplinar de escuelas afines sin caer en la dispersión. |
| **$HHI < 1500$** | **Dispersión Ecléctica** | Apertura radical; riesgo de incoherencia analítica o ausencia de premisas rectoras claras. |

---

## 3. Índice de Consistencia Cognitiva (ICC)

### 3.1 Fundamentación Bayesiana
El $ICC$ (o *Bayesian Prior Match*) mide el grado de correspondencia entre el prior subjetivo declarado en el Paso 0 y el perfil objetivo revelado a través de las 12 decisiones del test. 

Se formula como una combinación lineal ponderada de dos métricas independientes:

$$ICC = 0.60 \times \text{Similitud}_{\text{Coseno}} + 0.40 \times \text{Similitud}_{\text{Ejes}}$$

### 3.2 Componente A: Similitud Coseno de Cóctel ($\text{Similitud}_{\text{Coseno}}$)
Compara vectorialmente la fórmula teórica del cóctel seleccionado en el onboarding ($\mathbf{P} \in \mathbb{R}^{12}$) contra el vector de afinidades finales resultantes del test ($\mathbf{T} \in \mathbb{R}^{12}$):

$$\text{Similitud}_{\text{Coseno}} = \frac{\mathbf{P} \cdot \mathbf{T}}{\|\mathbf{P}\| \|\mathbf{T}\|} = \frac{\sum_{i=1}^{12} P_i T_i}{\sqrt{\sum_{i=1}^{12} P_i^2} \sqrt{\sum_{i=1}^{12} T_i^2}}$$

* **Propiedad:** Dado que $P_i \ge 0$ y $T_i \ge 0$, $\text{Similitud}_{\text{Coseno}} \in [0, 1]$.
* **Interpretación:** Mide si la "receta" intuitiva declarada coincide en orientación angular con las elecciones tácticas del participante, independientemente de la escala.

### 3.3 Componente B: Similitud Geométrica de Ejes ($\text{Similitud}_{\text{Ejes}}$)
Mide la distancia euclidiana entre las coordenadas iniciales declaradas en los sliders de onboarding $(x_{\text{prior}}, y_{\text{prior}})$ y las coordenadas finales calculadas tras resolver los dilemas $(x_{\text{final}}, y_{\text{final}})$, ambas normalizadas en el cuadrado unitario $[0, 1] \times [0, 1]$.

1. **Distancia Euclidiana ($d$):**
   $$d = \sqrt{(x_{\text{final}} - x_{\text{prior}})^2 + (y_{\text{final}} - y_{\text{prior}})^2}$$
2. **Normalización por Diagonal Máxima:** La distancia máxima posible en el cuadrado unitario es $d_{\max} = \sqrt{1^2 + 1^2} = \sqrt{2}$. La similitud se calcula como:
   $$\text{Similitud}_{\text{Ejes}} = \max\left(0, 1 - \frac{d}{\sqrt{2}}\right)$$

### 3.4 Categorización del ICC

| Rango de ICC | Nivel de Consistencia | Diagnóstico Psicométrico |
| :--- | :--- | :--- |
| **$ICC \ge 85\%$** | **Consistencia Alta** | Alta consecuencia intelectual; el modelo mental intuitivo y las decisiones prácticas coinciden. |
| **$65\% \le ICC < 85\%$** | **Consistencia Moderada** | Pragmatismo flexible; rumbo claro pero con capacidad de incorporar herramientas ajenas ante dilemas difíciles. |
| **$ICC < 65\%$** | **Tensión Fructífera** | Tensión deductiva; discrepancia entre el dogma proclamado y las preferencias reales ante situaciones límite. |

---

## 4. Proyección en el Espacio Polar 2D (Gráfico de Radar)

El gráfico de radar polar implementado en HTML5 Canvas proyecta la resultante del usuario en cuatro ejes ortogonales:
* **Eje Norte ($270^\circ$ / $-y$):** Coordinación Pública (Estado).
* **Eje Sur ($90^\circ$ / $+y$):** Coordinación Descentralizada (Mercado).
* **Eje Este ($0^\circ$ / $+x$):** Prioridad Distributiva (Equidad).
* **Eje Oeste ($180^\circ$ / $-x$):** Prioridad Productiva (Crecimiento).

### Transformación de Coordenadas de Canvas
Dado el centro del canvas $(c_x, c_y)$ y el radio máximo útil $R$, la coordenada de pantalla $(X_k, Y_k)$ de cada vértice se obtiene mediante:

$$X_k = c_x + (R \cdot v_k) \cos\left(\theta_k - \frac{\pi}{2}\right)$$
$$Y_k = c_y + (R \cdot v_k) \sin\left(\theta_k - \frac{\pi}{2}\right)$$

Donde $v_k \in [0, 1]$ es el valor normalizado del eje $k$, corregido por el ratio de densidad de píxeles del dispositivo (`window.devicePixelRatio`) para garantizar nitidez tipográfica en pantallas Retina y OLED móviles.

---

## 5. Mapeo Psicométrico del Diferencial Semántico Likert (7 Puntos)

Para eliminar los saltos matemáticos bruscos y neutralizar el sesgo de deseabilidad social, las respuestas de los deslizadores continuos ($val \in [0, 100]$) se mapean mediante funciones lineales por tramos:

```
[0 ────── 15]   [16 ────── 35]   [36 ────── 45]   [46 ── 54]   [55 ────── 64]   [65 ────── 84]   [85 ────── 100]
 Fuerte Izq.     Moderada Izq.      Leve Izq.       Neutral       Leve Der.      Moderada Der.     Fuerte Der.
 % = 100 - val   % = 100 - val    % = 100 - val       50%          % = val          % = val          % = val
```

Esta parametrización garantiza que la lectura porcentual transicione sin discontinuidades, preservando la continuidad matemática de la escala.
