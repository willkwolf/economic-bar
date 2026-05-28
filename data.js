/**
 * BAR DE ESCUELAS ECONÓMICAS - ELIXIRES DE LA RAZÓN
 * data.js - Fuente de verdad de la prueba de concepto
 * 
 * Contiene la información académica enriquecida de las 12 escuelas,
 * 8 cócteles premium, 6 dossiers del boticario y las 12 preguntas del test cognitivo.
 */

export const ESCUELAS = {
  marxista: {
    id: "marxista",
    nombre: "Marxista",
    fundador: "Karl Marx & Friedrich Engels (1867)",
    color: "#8c2323", // Carmín Envejecido
    abv: "90% Vol. Conflicto Estructural",
    tastingNotes: "Intensa y con cuerpo. Notas predominantes de lucha de clases, materialismo histórico y contradicciones estructurales. Deja un regusto prolongado a valor-trabajo y superación del capital.",
    sideEffects: "Propenso a la intoxicación dogmática, ceguera ante la flexibilidad de los mercados autorregulados y propensión a la rigidez burocrática del comité central.",
    descripcion_corta: "Crítica sistémica del capital, clases sociales y plusvalía."
  },
  feminista: {
    id: "feminista",
    nombre: "Feminista",
    fundador: "Silvia Federici & Marilyn Waring (1980)",
    color: "#bd777a", // Malva Rosa
    abv: "75% Vol. Sostenimiento Vital",
    tastingNotes: "Terrosa y reconfortante. Notas de base sobre trabajo reproductivo no remunerado, economía del cuidado y deconstrucción de la frontera público/privado. Muy equilibrada.",
    sideEffects: "A veces diluye la modelación agregada de corto plazo; puede provocar parálisis ante la urgencia de equilibrios fiscales inmediatos en economías de mercado.",
    descripcion_corta: "Visibilización del cuidado doméstico y reproducción social."
  },
  ecologica: {
    id: "ecologica",
    nombre: "Ecológica",
    fundador: "Kate Raworth & Nicholas Georgescu-Roegen (2012)",
    color: "#2c5e3b", // Verde Botella Profundo
    abv: "80% Vol. Límites Planetarios",
    tastingNotes: "Herbácea y refrescante. Aromas a termodinámica social, límites biofísicos y economía circular (Donut). Postulado firme sobre el suelo social y el techo ecológico.",
    sideEffects: "Riesgo de estancamiento involuntario del bienestar si el decrecimiento no se acompaña de una redistribución institucional impecable; rechazo al crecimiento nominal.",
    descripcion_corta: "Economía incrustada en la biósfera y bases sociales."
  },
  tradicion_desarrollista: {
    id: "tradicion_desarrollista",
    nombre: "Desarrollista",
    fundador: "Ha-Joon Chang & Friedrich List (1841)",
    color: "#c8350d", // Bermellón Industrial
    abv: "85% Vol. Soberanía Industrial",
    tastingNotes: "Densa y persistente. Notas fuertes de protección de industrias nacientes, catching-up productivo, subsidios y regulación de importaciones. Un trago de envejecimiento lento.",
    sideEffects: "Alta dependencia de la probidad del Estado. El consumo desmedido causa ineficiencias de captura de rentas corporativas y parasitismo industrial subsidiado.",
    descripcion_corta: "Planificación industrial y desarrollo de capacidades locales."
  },
  keynesiana: {
    id: "keynesiana",
    nombre: "Keynesiana",
    fundador: "John Maynard Keynes (1936)",
    color: "#86ad34", // Verde Oliva Stimulus
    abv: "70% Vol. Estabilización Fiscal",
    tastingNotes: "Efervescente y estimulante. Ricas notas de demanda agregada, espíritus animales y política fiscal contracíclica. Diseñada para calentar economías deprimidas.",
    sideEffects: "Resaca severa de deuda acumulada, presiones inflacionarias a largo plazo si el estímulo excede el producto potencial, y tendencia a ignorar la oferta agregada.",
    descripcion_corta: "Gestión contracíclica de la demanda y espíritus animales."
  },
  institucionalista: {
    id: "institucionalista",
    nombre: "Institucionalista",
    fundador: "Douglass North & Elinor Ostrom (1920)",
    color: "#579ea4", // Turquesa Policéntrico
    abv: "65% Vol. Gobernanza Común",
    tastingNotes: "Compleja y estructurada. Notas de reglas de juego, costos de transacción y acuerdos colectivos policéntricos para gestionar comunes. Sabor equilibrado e integrador.",
    sideEffects: "Dificultad para modelar y formalizar matemáticamente sus dinámicas; tendencia a la descripción empírica sin recetas de acción rápidas durante emergencias.",
    descripcion_corta: "Análisis de reglas, contratos y gobernanza de comunes."
  },
  estado_emprendedor: {
    id: "estado_emprendedor",
    nombre: "Emprendedor",
    fundador: "Mariana Mazzucato (2013)",
    color: "#df7713", // Ámbar de Misión
    abv: "75% Vol. Innovación Estratégica",
    tastingNotes: "Brillante y frutal. Marcados aromas a misiones audaces de innovación, inversión pública de alto riesgo inicial y creación/moldeamiento de nuevos mercados tecnológicos.",
    sideEffects: "Riesgos de socializar pérdidas y privatizar ganancias si los contratos no están bien diseñados; propensión a elegir ganadores tecnológicos equivocados.",
    descripcion_corta: "Inversión estatal de riesgo y misiones tecnológicas."
  },
  conductista: {
    id: "conductista",
    nombre: "Conductista",
    fundador: "Daniel Kahneman & Richard Thaler (2008)",
    color: "#bd777a", // Ciruela Suave (Compartida/Cercana)
    abv: "60% Vol. Sesgos Cognitivos",
    tastingNotes: "Aromática y sutil. Notas marcadas de nudging (pequeños empujones), arquitectura de decisión e irracionalidades predecibles. Muy matizada.",
    sideEffects: "Uso excesivo puede degenerar en un paternalismo libertario manipulador; asume que el cambio individual es suficiente para corregir fallas estructurales.",
    descripcion_corta: "Sesgos heurísticos y arquitectura de decisiones reales."
  },
  clasica: {
    id: "clasica",
    nombre: "Clásica",
    fundador: "Adam Smith & David Ricardo (1776)",
    color: "#5d7298", // Azul Acero Clásico
    abv: "80% Vol. Libertad Natural",
    tastingNotes: "Seca, limpia e imperecedera. Aromas a división del trabajo, ventaja comparativa, mano invisible y el cimiento del libre comercio. Muy aromática.",
    sideEffects: "Ignora por completo los límites biofísicos de la biosfera y las crisis cíclicas de demanda; tendencia a subestimar el conflicto inherente de la distribución.",
    descripcion_corta: "División del trabajo, libre comercio y acumulación de capital."
  },
  neoclasica: {
    id: "neoclasica",
    nombre: "Neoclásica",
    fundador: "Léon Walras & Alfred Marshall (1870)",
    color: "#2d2651", // Índigo Geométrico
    abv: "85% Vol. Utilidad Marginal",
    tastingNotes: "Cristalina y geométrica. Notas de optimización matemática, utilidad marginal y equilibrio general de precios de mercado. Es un destilado de alta pureza matemática.",
    sideEffects: "Causa desprendimiento crónico de la realidad debido a supuestos hiperracionales (Homo Economicus); desorientación severa ante monopolios naturales y fallas sistémicas.",
    descripcion_corta: "Optimización matemática de agentes racionales y equilibrio."
  },
  austriaca: {
    id: "austriaca",
    nombre: "Austríaca",
    fundador: "Friedrich Hayek & Ludwig von Mises (1871)",
    color: "#c8350d", // Cobrizo Volátil
    abv: "90% Vol. Individualismo Radical",
    tastingNotes: "Seca y de graduación alcohólica extrema. Notas puras de orden espontáneo, conocimiento disperso e imposibilidad del cálculo económico centralizado. Altamente volátil.",
    sideEffects: "Resaca de parálisis estatal ante externalidades masivas (como el cambio climático); ceguera ideológica que rechaza la provisión pública de bienes comunes.",
    descripcion_corta: "Conocimiento disperso, orden espontáneo y libre mercado."
  },
  schumpeteriana: {
    id: "schumpeteriana",
    nombre: "Schumpeteriana",
    fundador: "Joseph Schumpeter (1942)",
    color: "#f9c000", // Amarillo Destrucción
    abv: "80% Vol. Destrucción Creativa",
    tastingNotes: "Efervescente, punzante y ácida. Predominan las notas a innovación destructiva, el empresario schumpeteriano y los ciclos de obsolescencia tecnológica acelerada.",
    sideEffects: "Tolerancia excesiva a monopolios transitorios bajo la premisa de la innovación; puede desatender la precarización social que causa el desempleo tecnológico.",
    descripcion_corta: "Innovación destructiva y ciclos evolutivos de mercado."
  }
};

export const COCTELES = [
  {
    id: "martillo_dialectico",
    nombre: "Martillo Dialéctico",
    descripcion: "Un trago terroso, denso e intensamente intoxicante, diseñado para revelar las asimetrías del capital.",
    intensidad: "Fuerte (Especialidad)",
    colorPredominante: "#8c2323",
    ingredientes: {
      marxista: 55,
      feminista: 25,
      keynesiana: 20
    },
    vectores: { x: "Fuerte Intervención", y: "Máxima Equidad" },
    tastingNotes: "Notas de cabeza metálicas de conflicto de clases, cuerpo de cuidados domésticos y un final cálido de estabilización fiscal agregada.",
    sideEffects: "Alta pureza colectivista. Puede provocar alergia severa al libre emprendimiento, hipertrofia burocrática y agitación social incontrolable.",
    riesgosSistemicos: "Rigidez institucional, erosión absoluta de incentivos individuales a la innovación y estatización monopólica ineficiente."
  },
  {
    id: "libertad_liquida",
    nombre: "Libertad Líquida",
    descripcion: "Un destilado cristalino, aromático e hipervolátil, que celebra el orden espontáneo de las decisiones libres.",
    intensidad: "Extremo",
    colorPredominante: "#c8350d",
    ingredientes: {
      austriaca: 50,
      clasica: 30,
      neoclasica: 20
    },
    vectores: { x: "Mercado Libre Absoluto", y: "Productividad y Crecimiento" },
    tastingNotes: "Aroma penetrante a incentivos puros, sabor a conocimiento disperso, final seco y cristalino, libre de impuestos o regulaciones.",
    sideEffects: "Alta pureza de mercado. Causa ceguera severa ante externalidades negativas, parálisis estatal en emergencias y deshidratación de bienes comunes.",
    riesgosSistemicos: "Captura oligopólica corporativa, colapso de la red de seguridad social, atomización individual y degradación planetaria acelerada."
  },
  {
    id: "socialdemocracia_nordica",
    nombre: "Socialdemocracia Nórdica",
    descripcion: "Un cóctel extremadamente equilibrado, de trago largo, que combina el motor capitalista con un colchón social robusto.",
    intensidad: "Moderado",
    colorPredominante: "#579ea4",
    ingredientes: {
      keynesiana: 40,
      institucionalista: 30,
      tradicion_desarrollista: 20,
      feminista: 10
    },
    vectores: { x: "Coordinación Social / Estado Regulador", y: "Equidad Social y Estabilidad" },
    tastingNotes: "Textura suave y agridulce. Sabor inicial a mercado dinámico balanceado con notas herbales de seguridad social y gobernanza institucional fuerte.",
    sideEffects: "Gusto adquirido de alta carga impositiva. Riesgo de parálisis fiscal ante la fuga de capitales globalizados si los trade-offs no se vigilan.",
    riesgosSistemicos: "Fatiga del contribuyente fiscal, excesivo costo institucional administrativo y vulnerabilidad ante shocks externos en mercados de capitales."
  },
  {
    id: "silicon_valley_sour",
    nombre: "Silicon Valley Sour",
    descripcion: "Un elixir burbujeante y estimulante que busca acelerar los límites tecnológicos y colonizar el futuro.",
    intensidad: "Fuerte",
    colorPredominante: "#f9c000",
    ingredientes: {
      schumpeteriana: 45,
      estado_emprendedor: 35,
      neoclasica: 20
    },
    vectores: { x: "Moldeamiento Público-Privado", y: "Crecimiento e Innovación" },
    tastingNotes: "Punzante e innovador. Sabor a destrucción creativa disruptiva con notas efervescentes de riesgo público financiado por el Estado.",
    sideEffects: "Altos picos de especulación financiera. Puede causar precarización del trabajo analógico y desprecio social por los perdedores tecnológicos.",
    riesgosSistemicos: "Socialización masiva de las pérdidas de las startups de riesgo, privatización de patentes críticas y burbujas de activos tecnológicos."
  },
  {
    id: "equilibrio_esteril",
    nombre: "Equilibrio Estéril",
    descripcion: "Un destilado de pureza matemática inigualable. Frío, geométrico y conceptualmente impecable.",
    intensidad: "Fuerte",
    colorPredominante: "#2d2651",
    ingredientes: {
      neoclasica: 80,
      conductista: 20
    },
    vectores: { x: "Modelación Racional / Mercado Libre", y: "Asignación Eficiente" },
    tastingNotes: "Sabor completamente neutro e inorgánico. Notas abstractas de curvas de indiferencia óptimas con una pizca de psicología de sesgos al final.",
    sideEffects: "Pérdida absoluta de contacto con el comportamiento social real. El Homo Economicus puede inducir a un autismo político de gabinete académico.",
    riesgosSistemicos: "Inoperancia regulatoria ante crisis no modelables dinámicamente y fragilidad institucional ante la complejidad sistémica irracional."
  },
  {
    id: "elixir_bien_comun",
    nombre: "Elixir del Bien Común",
    descripcion: "Un trago orgánico, regenerativo y profundamente cohesionador socialmente, diseñado para sanar las heridas distributivas.",
    intensidad: "Ligero",
    colorPredominante: "#2c5e3b",
    ingredientes: {
      institucionalista: 50,
      ecologica: 30,
      feminista: 20
    },
    vectores: { x: "Autogestión Policéntrica / Comunitario", y: "Límites y Sostenibilidad Social" },
    tastingNotes: "Sabores terrosos y de bosque húmedo. Predominan las notas de gobernanza local, reproducción de la vida y límites ecológicos del Donut.",
    sideEffects: "Cero efervescencia industrial. Exige un alto compromiso de tiempo cívico y puede limitar las tasas agregadas de expansión material inmediata.",
    riesgosSistemicos: "Ineficiencias de escala local para competir en el tablero geopolítico industrial globalizado e inacción rápida ante emergencias centralizadas."
  },
  {
    id: "destilado_desarrollista",
    nombre: "Destilado Desarrollista",
    descripcion: "Un licor robusto, de cocción lenta y espíritu fuertemente industrializado nacionalmente.",
    intensidad: "Fuerte",
    colorPredominante: "#c8350d",
    ingredientes: {
      tradicion_desarrollista: 60,
      estado_emprendedor: 30,
      institucionalista: 10
    },
    vectores: { x: "Planificación de Oferta Industrial", y: "Productividad y Catching-up" },
    tastingNotes: "Denso, amargo y persistente. Notas fuertes de protección arancelaria, misiones públicas industriales y fomento de capacidades manufactureras locales.",
    sideEffects: "Alta resaca corporativista. Puede causar parálisis competitiva si las empresas protegidas se rehúsan a competir en el escenario global.",
    riesgosSistemicos: "Captura oligopólica estatal, ineficiencias crónicas de subsidio y tensiones arancelarias/guerras comerciales internacionales destructivas."
  },
  {
    id: "ponche_gran_crisis",
    nombre: "Ponche de la Gran Crisis",
    descripcion: "Un estimulante térmico, sumamente confortante y reparador, ideal para resucitar sistemas financieros helados.",
    intensidad: "Moderado",
    colorPredominante: "#86ad34",
    ingredientes: {
      keynesiana: 60,
      institucionalista: 20,
      conductista: 20
    },
    vectores: { x: "Demanda Agregada Dirigida", y: "Estabilidad de Ciclos Cortos" },
    tastingNotes: "Dulce y especiado. Fuertes notas de gasto contracíclico curativo sobre un lecho de arquitectura institucional y gestión de pánicos irracionales.",
    sideEffects: "Apetito insaciable de deuda pública fiscal y ceguera ante el recalentamiento inflacionario a largo plazo.",
    riesgosSistemicos: "Inflación estructural por exceso de demanda inyectada, desincentivo del ahorro de largo plazo y dependencia crónica del estímulo estatal."
  }
];

export const PROBLEMAS = [
  {
    id: "inflacion",
    titulo: "La Inflación Galopante",
    pregunta: "¿Cómo estabilizar el poder adquisitivo ante una escalada abrupta de precios?",
    dossier: [
      {
        escuela: "Austríaca",
        remedio: "Frenar en seco la emisión monetaria, recortar el gasto público estatal de raíz, y restaurar la disciplina del dinero sano libre de interferencias políticas.",
        toxicidad: "Aumenta la tasa de desempleo a corto plazo y desactiva la red protectora social en plena recesión.",
        ph: 15 // Muy bajo intervencionismo
      },
      {
        escuela: "Keynesiana",
        remedio: "Aplicar impuestos directos sobre rentas extraordinarias especulativas y controlar la demanda selectivamente, sosteniendo los subsidios a la canasta básica.",
        toxicidad: "Puede cronificar la deuda pública e inhibir inversiones de capital si la carga impositiva es mal calculada.",
        ph: 65
      },
      {
        escuela: "Marxista",
        remedio: "Establecer controles estrictos y democráticos de precios y márgenes de ganancia corporativos directos, desmantelando los monopolios de distribución.",
        toxicidad: "Genera desabastecimiento inmediato si el sistema productivo sigue operando bajo lógicas de rentabilidad de mercado privadas.",
        ph: 90
      }
    ]
  },
  {
    id: "desigualdad",
    titulo: "Desigualdad Estructural",
    pregunta: "¿Qué hacer ante la alarmante brecha acumulada de ingresos y patrimonio?",
    dossier: [
      {
        escuela: "Marxista",
        remedio: "Socializar democráticamente la propiedad de los medios productivos principales, expropiar rentas financieras parasitarias e igualar salarios basándose en el valor real.",
        toxicidad: "Abolición del mercado de capitales libre, lo que provoca fuga de activos en economías abiertas no coordinadas.",
        ph: 95
      },
      {
        escuela: "Feminista",
        remedio: "Revalorizar y remunerar estatalmente los trabajos domésticos e invisibles de cuidado, garantizando guarderías y servicios públicos colectivos incondicionales.",
        toxicidad: "Exige una reestructuración fiscal masiva e inmediata que tensiona la contabilidad de las finanzas tradicionales.",
        ph: 80
      },
      {
        escuela: "Neoclásica",
        remedio: "Fomentar el capital humano mediante subsidios educativos focalizados en áreas de alta demanda y asegurar el libre funcionamiento de la competencia laboral.",
        toxicidad: "Trata los síntomas en lugar de las causas: ignora la acumulación del capital dinástico heredado y la asimetría del poder.",
        ph: 35
      }
    ]
  },
  {
    id: "ia_automatizacion",
    titulo: "IA y Automatización",
    pregunta: "¿Cómo amortiguar el impacto del reemplazo masivo de empleos por inteligencias artificiales?",
    dossier: [
      {
        escuela: "Schumpeteriana",
        remedio: "Fomentar la reasignación de factores productivos. Permitir la destrucción creativa del mercado laboral obsoleto y financiar startups de alta complejidad tecnológica.",
        toxicidad: "Genera periodos de exclusión severa y precarización de trabajadores de edad avanzada que no logran reconvertirse a tiempo.",
        ph: 30
      },
      {
        escuela: "Estado Emprendedor",
        remedio: "Establecer misiones de innovación pública para orientar la IA hacia la complementariedad humana, cobrando regalías por patentes financiadas socialmente.",
        toxicidad: "Requiere una agilidad analítica y técnica de los burócratas del Estado que suele ser escasa frente al avance de las corporaciones tecnológicas.",
        ph: 70
      },
      {
        escuela: "Feminista",
        remedio: "Reducir la jornada laboral drásticamente y desviar los flujos de ganancia de la IA hacia la valorización y subsidio masivo de los empleos sociales de cuidado humano.",
        toxicidad: "Reduce los rendimientos del capital financiero a corto plazo y exige coordinación global para evitar fugas tributarias territoriales.",
        ph: 85
      }
    ]
  },
  {
    id: "vivienda",
    titulo: "Crisis de Vivienda",
    pregunta: "¿Cómo resolver la gentrificación y la inaccesibilidad a la vivienda urbana?",
    dossier: [
      {
        escuela: "Neoclásica",
        remedio: "Liberalizar el suelo constructivo, eliminar trabas burocráticas urbanísticas y desregular la oferta inmobiliaria para que el mercado alcance el equilibrio de precios.",
        toxicidad: "A corto plazo estimula la especulación desenfrenada del sector y acelera el desplazamiento social de las comunidades vulnerables.",
        ph: 20
      },
      {
        escuela: "Institucionalista",
        remedio: "Empoderar fideicomisos de tierra comunitaria, regular los precios del alquiler local mediante convenios policéntricos y gestionar viviendas públicas comunales.",
        toxicidad: "Exige un entramado de participación vecinal riguroso y adaptativo, que puede ralentizar los ritmos de urbanización masivos.",
        ph: 60
      },
      {
        escuela: "Desarrollista",
        remedio: "Planificación centralizada del Estado mediante la construcción masiva y directa de parques de vivienda pública estratégica y control del crédito inmobiliario.",
        toxicidad: "Crea pesadas burocracias de adjudicación de vivienda y alta homogeneidad urbanística poco atractiva.",
        ph: 80
      }
    ]
  },
  {
    id: "monopolios",
    titulo: "Monopolios Digitales",
    pregunta: "¿Cómo tratar a las plataformas que concentran el tráfico y los datos de toda la sociedad?",
    dossier: [
      {
        escuela: "Austríaca",
        remedio: "No intervenir. Si un monopolio abusa de sus precios, las fuerzas creativas buscarán alternativas para evadirlo de forma natural, destruyendo la captura inicial.",
        toxicidad: "Ignora las barreras de entrada absolutas y los efectos de red colosales que hacen irreversible la captura de datos monopólica.",
        ph: 10
      },
      {
        escuela: "Neoclásica",
        remedio: "Utilizar las leyes antitrust tradicionales para fragmentar por la fuerza a los gigantes monopolistas y restaurar el mercado competitivo perfecto.",
        toxicidad: "Se estrella contra la eficiencia técnica intrínseca de los servicios digitales centralizados unificados.",
        ph: 45
      },
      {
        escuela: "Estado Emprendedor",
        remedio: "Nacionalizar la infraestructura de red básica y de datos comunes de la sociedad, convirtiéndolas en servicios públicos neutrales operados democraticamente.",
        toxicidad: "Riesgos de centralismo informativo en manos del gobierno de turno y pérdida de dinamismo e innovación ágil de la interfaz digital.",
        ph: 85
      }
    ]
  },
  {
    id: "ecocrisis",
    titulo: "Colapso Ecológico",
    pregunta: "¿Cómo enfrentar la degradación de la biosfera y el calentamiento climático acelerado?",
    dossier: [
      {
        escuela: "Ecológica",
        remedio: "Aplicar la economía del Donut. Imponer topes ecológicos biofísicos duros no negociables a la extracción y descarbonizar mediante decrecimiento material planificado.",
        toxicidad: "Choca contra la necesidad de crecimiento de las economías capitalistas basadas en deuda monetaria exponencial.",
        ph: 90
      },
      {
        escuela: "Neoclásica",
        remedio: "Internalizar las externalidades negativas cobrando impuestos globales al carbono e implementando un mercado regulado de derechos de contaminación transables.",
        toxicidad: "Asume que la biosfera puede reducirse en su totalidad a un precio de mercado óptimo, menospreciando puntos de no retorno irreversibles.",
        ph: 40
      },
      {
        escuela: "Estado Emprendedor",
        remedio: "Movilizar un Green New Deal masivo de innovación: inversión de alto riesgo financiada por el Estado para detonar la transición energética limpia.",
        toxicidad: "Continúa apostando por el dogma de la expansión material del crecimiento, aunque sea con barniz verde, sin resolver la sobreextracción de recursos.",
        ph: 75
      }
    ]
  }
];

export const PREGUNTAS = [
  // FASE 1: ARQUITECTURA COGNITIVA (Zorro/Erizo)
  {
    id: "q1",
    fase: 1,
    dimension: "epistemologia",
    texto: "¿Cómo interpretas las grandes crisis sociales y económicas de la historia?",
    opciones: [
      {
        texto: "Toda gran crisis social se reduce en última instancia a una causa principal (sea la lucha de clases, el exceso de regulación estatal o el egoísmo individual).",
        tipo: "erizo"
      },
      {
        texto: "Los sistemas sociales son demasiado complejos; cualquier intento de explicarlos con una sola causa es una simplificación peligrosa. La verdad es fragmentaria y contextual.",
        tipo: "zorro"
      }
    ]
  },
  {
    id: "q2",
    fase: 1,
    dimension: "analista",
    texto: "¿Cuál debería ser el papel del intelectual o planificador económico en la sociedad?",
    opciones: [
      {
        texto: "El papel del analista es construir un marco conceptual coherente y defenderlo con rigor científico para guiar la acción colectiva sin vacilaciones políticas.",
        tipo: "erizo"
      },
      {
        texto: "El papel del analista es dudar de sus propios marcos, adaptar sus herramientas según el problema específico y aceptar que parches contextuales son mejores que dogmas totales.",
        tipo: "zorro"
      }
    ]
  },
  {
    id: "q3",
    fase: 1,
    dimension: "error",
    texto: "Cuando una política económica nacional fracasa rotundamente, ¿cómo lo explicas?",
    opciones: [
      {
        texto: "Suele deberse a desviaciones políticas en su aplicación, a un sabotaje de intereses opuestos o a la falta de pureza en su ejecución práctica.",
        tipo: "erizo"
      },
      {
        texto: "Demuestra que la teoría utilizada tenía límites estrictos de contexto y vigencia; la realidad cambia y los dogmas deben desecharse si fallan empíricamente.",
        tipo: "zorro"
      }
    ]
  },

  // FASE 2: FILTRO CRUZADO DE INGREDIENTES
  {
    id: "q4",
    fase: 2,
    dimension: "coordinacion",
    texto: "¿Cuál es tu visión sobre el mercado como coordinador de las sociedades humanas?",
    opciones: [
      {
        texto: "Es un orden espontáneo y descentralizado de transmisión de información dispersa de utilidad infinita. La interferencia del Estado entorpece las señales.",
        pesos: { austriaca: 4, clasica: 3, neoclasica: 2 }
      },
      {
        texto: "Es un asignador altamente eficiente bajo competencia, pero padece fallas de información, monopolios y externalidades que exigen regulación estatal rigurosa.",
        pesos: { neoclasica: 4, keynesiana: 3, conductista: 2 }
      },
      {
        texto: "No opera en el vacío. Depende enteramente del entramado institucional, normas de conducta, reglas de juego y la gobernanza de los comunes.",
        pesos: { institucionalista: 4, tradicion_desarrollista: 3 }
      },
      {
        texto: "Es un espacio de asimetría de poder estructural, explotación de la fuerza laboral y apropiación del excedente que debe superarse sistémicamente.",
        pesos: { marxista: 4, feminista: 3 }
      }
    ]
  },
  {
    id: "q5",
    fase: 2,
    dimension: "estado",
    texto: "¿Cuál debería ser la función fundamental del Estado dentro de la economía nacional?",
    opciones: [
      {
        texto: "Limitarse al mínimo: proteger los derechos de propiedad, asegurar el imperio de la ley, hacer cumplir contratos y no distorsionar incentivos.",
        pesos: { austriaca: 4, clasica: 4 }
      },
      {
        texto: "Actuar como regulador fiscal y estabilizador contracíclico agregando gasto e inversión pública para sostener el empleo durante las depresiones.",
        pesos: { keynesiana: 4, neoclasica: 3 }
      },
      {
        texto: "Ser un motor audaz de innovación de alto riesgo estratégico, creando activamente nuevos mercados de frontera industrial mediante misiones coordinadas.",
        pesos: { estado_emprendedor: 4, tradicion_desarrollista: 4, schumpeteriana: 2 }
      },
      {
        texto: "Desmantelar la lógica de acumulación de capital y planificar democráticamente las prioridades humanas basadas en límites biofísicos y el bienestar social.",
        pesos: { marxista: 4, ecologica: 3, feminista: 3 }
      }
    ]
  },
  {
    id: "q6",
    fase: 2,
    dimension: "justicia",
    texto: "¿Cómo interpretas la alarmante concentración de riqueza y desigualdad económica?",
    opciones: [
      {
        texto: "Es el reflejo natural del valor marginal de la productividad que cada quien aporta. Los impuestos confiscatorios desincentivan el ahorro y la inversión.",
        pesos: { neoclasica: 4, austriaca: 3, clasica: 2 }
      },
      {
        texto: "Es una traba macroeconómica que deprime la propensión al consumo y sabotea la estabilidad social. Se necesita fiscalidad progresiva para corregirla.",
        pesos: { keynesiana: 4, conductista: 3 }
      },
      {
        texto: "Deriva de la invisibilización y desprecio social del trabajo de reproducción doméstica no remunerado y la explotación desmesurada de la naturaleza.",
        pesos: { feminista: 4, ecologica: 3 }
      },
      {
        texto: "Es la consecuencia inevitable del despojo de la plusvalía laboral inherente a la tenencia privada de medios de producción. Se corrige con su socialización.",
        pesos: { marxista: 4, institucionalista: 2 }
      }
    ]
  },
  {
    id: "q7",
    fase: 2,
    dimension: "humano",
    texto: "¿Cómo definirías el comportamiento y racionalidad del ser humano al tomar decisiones?",
    opciones: [
      {
        texto: "Un agente plenamente racional que procesa información disponible de forma coherente para optimizar individualmente su propio bienestar y utilidad.",
        pesos: { neoclasica: 4, clasica: 3 }
      },
      {
        texto: "Un sujeto bajo racionalidad limitada, expuesto a sesgos cognitivos predecibles, influencias sociales y sensible a cómo se diseñe su arquitectura de elección.",
        pesos: { conductista: 4, institucionalista: 3 }
      },
      {
        texto: "Un agente dinámico que actúa de forma intencional pero subjetiva, cuyo conocimiento es fragmentario y disperso, descubriéndose en la acción libre.",
        pesos: { austriaca: 4, schumpeteriana: 2 }
      },
      {
        texto: "Un ser interdependiente, condicionado estructuralmente por su pertenencia de clase social, género y lazos relacionales, vitales e institucionales.",
        pesos: { feminista: 4, marxista: 4, ecologica: 3 }
      }
    ]
  },
  {
    id: "q8",
    fase: 2,
    dimension: "motor",
    texto: "¿Cuál consideras que es la fuerza motriz que impulsa el cambio y progreso material?",
    opciones: [
      {
        texto: "La acumulación del capital productivo nacional y la protección y maduración de capacidades de manufacturas manufactureras estratégicas.",
        pesos: { tradicion_desarrollista: 4, clasica: 3 }
      },
      {
        texto: "La destrucción creativa catalizada por emprendedores audaces que irrumpen con innovaciones tecnológicas que liquidan los viejos monopolios.",
        pesos: { schumpeteriana: 4, austriaca: 3 }
      },
      {
        texto: "La inversión inicial de alto riesgo financiero impulsada y guiada por el Estado, posibilitando misiones audaces como el viaje lunar o el internet.",
        pesos: { estado_emprendedor: 4, schumpeteriana: 3 }
      },
      {
        texto: "La deliberada reestructuración del metabolismo social para habitar dentro de los límites biofísicos del planeta cuidando la sostenibilidad de la vida.",
        pesos: { ecologica: 4, feminista: 3 }
      }
    ]
  },
  {
    id: "q9",
    fase: 2,
    dimension: "propiedad",
    texto: "¿Qué estructura de tenencia de propiedad consideras más justa y eficiente?",
    opciones: [
      {
        texto: "La propiedad privada firmemente defendida y demarcada jurídicamente para asegurar incentivos robustos al esfuerzo individual y evitar tragedias comunes.",
        pesos: { clasica: 4, neoclasica: 3 }
      },
      {
        texto: "Gobernanza policéntrica de recursos comunes locales, autogestionados de forma sostenible mediante normas robustas consensuadas colectivamente.",
        pesos: { institucionalista: 4, ecologica: 3 }
      },
      {
        texto: "La tenencia y control público democrático de sectores y recursos naturales estratégicos clave para desmantelar rentabilidades parasitarias privadas.",
        pesos: { marxista: 4, tradicion_desarrollista: 3 }
      },
      {
        texto: "Priorizar redes cooperativas horizontales basadas en el valor del sostenimiento vital, economía solidaria vecinal y el cuidado ecológico.",
        pesos: { feminista: 4, ecologica: 4 }
      }
    ]
  },

  // FASE 3: SLIDERS INTERACTIVOS (Trade-offs Continuos)
  {
    id: "q10",
    fase: 3,
    dimension: "estimulo",
    texto: "Dilema de Estabilidad vs. Estímulo: ¿Qué debe priorizarse en una recesión?",
    izquierda: {
      titulo: "Estabilidad / Rigor",
      texto: "Disciplina fiscal absoluta, control severo de inflación y masa monetaria, asumiendo desempleo temporal como purga necesaria del mercado.",
      pesos: { austriaca: 3, neoclasica: 2, clasica: 2 }
    },
    derecha: {
      titulo: "Estímulo / Empleo",
      texto: "Garantizar el pleno empleo y la inyección de estímulos mediante inversión social y monetaria, tolerando déficit público y riesgos inflacionarios.",
      pesos: { keynesiana: 4, estado_emprendedor: 2 }
    }
  },
  {
    id: "q11",
    fase: 3,
    dimension: "donut",
    texto: "Dilema de Crecimiento vs. Límites: ¿Qué debe guiar nuestro aparato productivo?",
    izquierda: {
      titulo: "Expansión / Productividad",
      texto: "Acelerar la competitividad industrial, innovación y productividad a gran escala para asegurar la expansión material de la riqueza.",
      pesos: { schumpeteriana: 3, neoclasica: 2, tradicion_desarrollista: 2 }
    },
    derecha: {
      titulo: "Límites / Regeneración",
      texto: "Alinear estrictamente la huella ecológica material bajo topes planetarios biofísicos innegociables y priorizar la economía reproductiva.",
      pesos: { ecologica: 4, feminista: 3 }
    }
  },
  {
    id: "q12",
    fase: 3,
    dimension: "globalizacion",
    texto: "Dilema de Globalización vs. Soberanía: ¿Cómo relacionarse con los mercados mundiales?",
    izquierda: {
      titulo: "Apertura Global",
      texto: "Desregulación de aranceles absoluta, libre comercio transfronterizo e integración total en cadenas globales de valor eficiente.",
      pesos: { clasica: 3, neoclasica: 2, austriaca: 2 }
    },
    derecha: {
      titulo: "Soberanía Nacional",
      texto: "Soberanía industrial y comercial estratégica. Proteger capacidades de manufactura locales y regular flujos globales financieros hostiles.",
      pesos: { tradicion_desarrollista: 4, estado_emprendedor: 2, marxista: 2 }
    }
  }
];

export const PERFILES_COGNITIVOS = {
  erizo_doctrinal: {
    nombre: "🦔 Erizo Doctrinal",
    subtitulo: "La Fuerza Coherente de una Gran Verdad",
    descripcion: "Tu mente opera con el rigor y la potencia de un marco conceptual unificado. Al igual que el erizo del ensayo de Isaiah Berlin, tú 'sabes una gran cosa' y organizas los complejos fenómenos económicos bajo principios robustos y consistentes. Valorizas la coherencia teórica por encima de los compromisos improvisados de las modas académicas. Esta claridad epistemológica te confiere una formidable capacidad de acción estratégica y una fuerte identidad política.",
    virtud: "Identidad conceptual firme, pensamiento deductivo de alta precisión y claridad estratégica ante dilemas complejos.",
    resaca: "Alta vulnerabilidad a la visión de túnel y ceguera ante externalidades o anomalías empíricas imprevistas que cuestionen tus principios esenciales."
  },
  zorro_sistemico: {
    nombre: "🦊 Zorro Sistémico",
    subtitulo: "La Humildad Adaptativa de la Complejidad",
    descripcion: "Tu mente, en consonancia con el zorro berliniano, 'sabe muchas cosas' fragmentarias y contextuales. Rechazas la idea de que la infinita complejidad de las sociedades humanas pueda constreñirse en una única e inflexible fórmula teórica. Eres capaz de combinar perspectivas radicalmente opuestas de manera pragmática y humilde, adaptando tus herramientas intelectuales según el problema y respetando la existencia de trade-offs inevitables.",
    virtud: "Flexibilidad epistemológica de alto nivel, resiliencia intelectual ante el cambio histórico e inmunidad natural al dogmatismo ortodoxo.",
    resaca: "Propensión al desgaste conceptual y a la parálisis en la toma de decisiones por ponderar eternamente contradicciones. Riesgo de soledad política."
  },
  erizo_tension: {
    nombre: "🌀 Erizo Ecléctico (En Tensión)",
    subtitulo: "La Búsqueda Inquieta de un Eje Inexistente",
    descripcion: "Operas bajo un dilema fascinante. Tu temperamento cognitivo ansía desesperadamente encontrar una única verdad sistemática y unificadora que resuelva de raíz las contradicciones de la sociedad. Sin embargo, tu análisis empírico y ético de la realidad está demasiado fragmentado, lo que distribuye tus intuiciones en polos radicalmente contradictorios. Esta fricción interna te empuja a un estado permanente de debate y autoevaluación intelectual.",
    virtud: "Incapacidad de conformarte con respuestas autocomplacientes; motor de constante profundización teórica rigurosa.",
    resaca: "Desgaste analítico frecuente. Sensación constante de inconsistencia ideológica o de transitar en una encrucijada sin salida clara."
  },
  zorro_pragmatico: {
    nombre: "🎭 Zorro Camuflado (Zorro Pragmático)",
    subtitulo: "La Ortodoxia bajo el Disfraz de la Apertura",
    descripcion: "Te consideras formalmente a ti mismo como un ser intelectualmente abierto, flexible y adaptativo (un zorro libre de ataduras doctrinales). No obstante, tus elecciones políticas reales y tus respuestas ante dilemas de alta tensión revelan un anclaje inamovible, coherente y sumamente concentrado en un único cuadrante de pensamiento. Operas con la rigidez de un erizo pero con el discurso sofisticado y humilde de un zorro.",
    virtud: "Combina la indudable eficacia operativa de una doctrina pura con la diplomacia y sofisticación del lenguaje pluralista.",
    resaca: "Riesgo de incurrir en una disonancia cognitiva tácita o una hipocresía epistemológica al exigir flexibilidad al resto pero no aplicarla en ti."
  }
};

export const PERFILES_CUADRANTES = {
  Q1: {
    titulo: "Elixir de Planificación Crítica y Límites",
    descripcion: "Tu centro de gravedad se concentra en el Estado fuerte como garante de la justicia distributiva y el respeto innegociable a los límites biofísicos de la naturaleza. Rechazas que la vida humana y la reproducción social deban someterse a la rentabilidad de las corporaciones privadas. Abogas por la soberanía cívica, de género y de biósfera.",
    afinidad: "Marxismo, Economía Feminista del Cuidado y Ecología Sistémica (Raworth)."
  },
  Q2: {
    titulo: "Bebida de Micro-Incentivos y Empatía Heurística",
    descripcion: "Tu balance se apoya en un Estado que, sin hipertrofiarse burocráticamente, intervenga de manera quirúrgica y conductual para sanar fallas de mercado. Creas en el empoderamiento del consumidor, en el nudging como facilitador de arquitectura de decisiones justas y en un diseño sutil con empatía en el comportamiento humano real.",
    afinidad: "Economía Conductista (Kahneman/Thaler) y Microeconomía adaptada."
  },
  Q3: {
    titulo: "Destilado de Misión Industrial y Estabilización",
    descripcion: "Priorizas una alianza audaz y coordinada. Para ti, el progreso material duradero proviene de un Estado emprendedor que asuma riesgos tecnológicos y dirija activamente el desarrollo industrial contracíclico. Crees en la gobernanza policéntrica, la macroeconomía activa y las capacidades de planificación de misiones estratégicas.",
    afinidad: "Keynesianismo, Desarrollismo y Estado Emprendedor (Mazzucato)."
  },
  Q4: {
    titulo: "Néctar de Libre Mercado y Orden Espontáneo",
    descripcion: "Tu centro de gravedad reposa en la defensa irrenunciable del individuo y el libre comercio descentralizado. Para ti, el mercado libre de interferencias políticas es el único computador natural capaz de coordinar el conocimiento disperso a través de precios espontáneos. Crees firmemente en la innovación y el dinamismo competitivo.",
    afinidad: "Economía Austríaca (Hayek), Clásica (Smith) e Neoclásica de Optimización."
  }
};

export const PERFILES_CONCENTRACION = {
  monocultura: {
    riesgo: "⚠️ Dogmatismo Agudo",
    narrativa: "Posees una pureza ideológica sobresaliente. Tu mezcla es un destilado de un solo grano conceptual. Tienes una enorme claridad en tus propuestas y una robusta identidad conceptual. Sin embargo, tu resaca ideológica es el sesgo de túnel: corres el riesgo de ignorar anomalías empíricas masivas y quedar desarmado ante crisis inéditas fuera de tus axiomas esenciales."
  },
  sintetico: {
    riesgo: "⚖️ Fricción Decisional",
    narrativa: "Has logrado formular un cóctel equilibrado y sintético. Combinas licores con sensatez pragmática. Tu virtud es la gran adaptabilidad conceptual; logras sopesar costos y trade-offs con ecuanimidad académica. Tu resaca potencial es la indecisión o parálisis por exceso de consideración analítica antes de actuar."
  },
  disperso: {
    riesgo: "🌪️ Soledad del Ecléctico",
    narrativa: "Tu mezcla tiene una entropía extrema. Eres un catador cívico de todos los estantes. Tu total inmunidad al dogmatismo dogmático te concede una soberana humildad epistemológica. No obstante, tu resaca ideológica es la completa inoperancia o soledad política: al no tener un anclaje doctrinal, corres el riesgo de la parálisis decisional absoluta y de no encajar en ninguna coalición organizada de transformación colectiva."
  }
};
