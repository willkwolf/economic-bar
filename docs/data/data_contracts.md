# Contratos de Datos y Esquemas Formales
## Especificación de Estructuras e Invariantes de `data.js`

---

## 1. Principios de Gobierno de Datos

El archivo `data.js` es la **única fuente de verdad canónica** para el modelo de conocimiento del simulador. Para asegurar su interoperabilidad con agentes de software, motores de prueba y componentes de interfaz, toda mutación o extensión de datos debe satisfacer de manera estricta los siguientes contratos e invariantes.

---

## 2. Invariantes Globales de Datos

1. **Invariante de Conservación de Masa:**
   En cualquier reactivo u opción de respuesta multidimensional, la suma de las ponderaciones relativas de las escuelas debe normalizarse a $1.0$ (o $100\%$ en fórmulas de cócteles).
   $$\sum_{i=1}^{k} w_i = 1.0$$
2. **Invariante de Rango de Graduación Alcohólica (ABV):**
   $$0.0 \le \text{ABV} \le 100.0$$
3. **Invariante de Rango de Acidez Reguladora (pH):**
   $$1.0 \le \text{pH} \le 14.0$$
4. **Invariante de Simetría Lingüística:**
   Todo objeto definido en `TRANSLATIONS.es` debe contar con un reflejo idéntico en estructura y claves en `TRANSLATIONS.en`. Ninguna clave puede faltar ni quedar como cadena vacía.

---

## 3. Esquemas de Datos (TypeScript Pseudo-Interfaces)

### 3.1 Esquema de Escuela Económica (`SchoolDefinition`)

```typescript
interface SchoolDefinition {
  id: string;               // Identificador alfanumérico snake_case único (ej: "marxista")
  nombre: string;           // Nombre visible de la escuela (ej: "Escuela Marxista")
  pensadores: string;       // Nombres de los pensadores canónicos
  premisa: string;          // Axioma metodológico central (máx. 180 caracteres)
  abv: number;              // Graduación alcohólica (0.0 a 100.0)
  ph: number;               // Acidez reguladora (1.0 a 14.0)
  organoleptico: string;    // Metáfora sensorial y organoléptica
  toxicidad: string;        // Externalidad sistémica o patología colateral
  receta_tipica: string;    // Descripción informal del ingrediente en barra
  coordenadas_base: {       // Vector base en el espacio polar unitario
    estado_mercado: number; // 0.0 (Mercado Puro) a 1.0 (Estado Pleno)
    equidad_crecimiento: number; // 0.0 (Crecimiento Puro) a 1.0 (Equidad Plena)
  };
}
```

### 3.2 Esquema de Cóctel Doctrinal (`CocktailRecipe`)

```typescript
interface CocktailRecipe {
  id: string;               // Identificador alfanumérico único (ej: "silicon_valley_sour")
  nombre: string;           // Nombre alquímico del cóctel
  subtitulo: string;        // Denominación conceptual de la receta
  abv: number;              // Graduación alcohólica resultante ponderada
  ph: number;               // Acidez resultante ponderada
  descripcion: string;      // Narrativa de la fórmula de política pública
  notas_cata: string;       // Perfil organoléptico y balance en boca
  resaca_institucional: string; // Tensión sistémica o falla histórica
  caso_historico: string;   // Contexto o crisis de gabinete de referencia
  color: string;            // Código hexadecimal del color del licor (ej: "#E67E22")
  ingredientes: {           // Diccionario de porcentajes que DEBE sumar exactamente 100
    [schoolId: string]: number;
  };
}
```

### 3.3 Esquema de Preguntas de Diagnóstico (`DiagnosticQuestion`)

```typescript
interface DiagnosticQuestion {
  id: number;               // Número correlativo de reactivo (1 a 12)
  fase: number;             // Fase psicométrica (1: Cognitiva, 2: Escuelas, 3: Sliders)
  titulo: string;           // Título temático del dilema
  pregunta: string;         // Enunciado neutral del problema
  contexto?: string;        // Antecedentes cívicos o históricos (opcional)
  tipo: "opcion_multiple" | "slider_continuo";
  
  // Exclusivo para tipo 'opcion_multiple' (Fases 1 y 2):
  opciones?: Array<{
    id: string;             // Letra o clave identificadora ("a", "b", "c", "d")
    texto: string;          // Texto equipolente sin sesgo de deseabilidad social
    // En Fase 1: pondera Monismo vs Pluralismo
    sesgo_epistemico?: {
      monismo?: number;
      pluralismo?: number;
    };
    // En Fase 2: pondera afinidad por escuelas económicas
    pesos?: {
      [schoolId: string]: number;
    };
  }>;

  // Exclusivo para tipo 'slider_continuo' (Fase 3):
  slider_config?: {
    polo_izquierdo: {
      etiqueta: string;     // Nombre del valor A (ej: "Austeridad Presupuestaria")
      escuelas: { [schoolId: string]: number };
    };
    polo_derecho: {
      etiqueta: string;     // Nombre del valor B (ej: "Gasto Social y Empleo")
      escuelas: { [schoolId: string]: number };
    };
    valor_inicial: number;  // Valor por defecto (50)
  };
}
```

### 3.4 Esquema del Glosario Contextual (`GlossaryEntry`)

```typescript
interface GlossaryDictionary {
  [locale: string]: {       // "es" | "en"
    [term: string]: string; // Término en minúsculas -> Definición concisa (máx. 180 caracteres)
  };
}
```

---

## 4. Matriz de Compatibilidad de Escuelas en `data.js`

Las 12 claves maestras utilizadas de manera invariable a lo largo de todo el código fuente son:

1. `clasica`
2. `marxista`
3. `neoclasica`
4. `tradicion_desarrollista`
5. `austriaca`
6. `schumpeteriana`
7. `keynesiana`
8. `institucionalista`
9. `conductista`
10. `feminista`
11. `ecologica`
12. `estado_emprendedor`

> [!CAUTION]
> Queda terminantemente prohibido alterar el identificador `id` de cualquiera de las 12 escuelas en `data.js`, puesto que rompería la compatibilidad histórica con la base vectorial y las pruebas unitarias y E2E de Playwright.
