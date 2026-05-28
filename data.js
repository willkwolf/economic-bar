/**
 * BAR DE ESCUELAS ECONÓMICAS - ELIXIRES DE LA RAZÓN
 * data.js - Fuente de verdad de la aplicación con soporte i18n dual (ES/EN)
 * 
 * Contiene la base de datos académica de las 12 escuelas, 8 cócteles,
 * 6 dossiers del boticario, 12 preguntas del test y los perfiles cognitivos.
 * Todo estructurado bajo un diccionario reactivo dual para evitar colisiones tipográficas.
 */

export const TRANSLATIONS = {
  es: {
    ui: {
      navLogo: "ELIXIRES <em>de la</em> RAZÓN",
      navShelf: "El Estante",
      navMenu: "La Carta",
      navCabinet: "Boticario",
      navTestLink: "Analizar Alcoholemia",
      heroTag: "COCTELERÍA DOCTRINAL & SIMULADOR COGNITIVO",
      heroTitle: "BAR DE ESCUELAS ECONÓMICAS",
      heroSubtitle: "“Toda teoría económica es un destilado parcial de la realidad. Las ideologías también intoxican.”",
      heroIntro: "Explora la estantería del barman. Posa tu cursor sobre cada frasco de boticario para analizar sus notas de cata epistemológicas, graduación alcohólica (ABV) y efectos colaterales de intoxicación sistemática.",
      shelfLoading: "Cargando destilados de la razón...",
      menuTag: "NUESTRA COCTELERÍA DOCTRINAL",
      menuTitle: "El Menú de Mezclas Recomendadas",
      menuDesc: "En lugar de consumir licores puros, degusta nuestras mezclas diseñadas con precisión de proporciones para responder a tensiones sistémicas específicas del tejido social.",
      cabinetTag: "EL BOTICARIO COGNITIVO",
      cabinetTitle: "Gabinete de Boticario: Crisis y Diagnósticos",
      cabinetDesc: "Abre los cajones del mueble de boticario antiguo para extraer los expedientes de crisis reales. Analiza y compara las prescripciones de diferentes escuelas y sus efectos secundarios.",
      dossierEmptyFeather: "🪶",
      dossierEmptyTitle: "Selecciona un Cajón del Gabinete",
      dossierEmptyText: "Abre uno de los compartimientos de boticario para extraer el pergamino de diagnóstico y comparar las recetas doctrinales.",
      dossierExpediente: "EXPEDIENTE Nº 04-A",
      testTag: "DIAGNÓSTICO COGNITIVO MENTAL",
      testTitle: "Test de Alcoholemia Política",
      testDesc: "No es un test convencional de izquierda o derecha. Este diagnóstico analiza la arquitectura y rigidez de tus marcos cognitivos (Monismo o Pluralismo) y destila la proporción exacta de tus ingredientes intelectuales.",
      testIntroTitle: "¿Qué tan puras son tus convicciones?",
      testIntroText: "Las personas operamos mezclas con diferentes grados de coherencia, dependencia y contradicción. Responde con honestidad intelectual a 12 dilemas teóricos y de alta tensión práctica para destilar tu botella personalizada y evaluar tu propensión a la resaca ideológica.",
      testIntroBtn: "Iniciar Destilación Mental",
      testLoadingTitle: "Destilando tu Perfil Cognitivo...",
      testLoadingText: "Midiendo el índice de Herfindahl-Hirschman (HHI), equilibrando vectores de fuerza y filtrando las resacas ideológicas latentes en tus respuestas...",
      resultsTag: "ACTA DE ALCOHOLEMIA POLÍTICA",
      resultsBottleCaption: "TU FÓRMULA DE RAZÓN",
      resultsVirtueTitle: "VIRTUD INTELECTUAL",
      resultsHangoverTitle: "RIESGO DE RESACA",
      resultsBtnExport: "Descargar Tarjeta de Alcoholemia",
      resultsBtnRestart: "Volver a Destilar",
      manifestoTag: "MANIFIESTO",
      manifestoTitle: "Humildad Epistemológica en Tiempos de Dogma",
      manifestoP1: "Las ideologías simplifican el mundo para permitirnos actuar; ese es su valor y, al mismo tiempo, su mayor peligro. Toda doctrina es un filtro que ilumina ciertos fenómenos mientras oscurece otros por completo.",
      manifestoP2: "El verdadero valor del pensamiento analítico no radica en jurar lealtad a una única estantería de destilación conceptual, sino en comprender las limitaciones, trade-offs y puntos ciegos de nuestras propias herramientas intelectuales. Bebe con moderación, cuestiona tus propios sesgos y cultiva el pluralismo intelectual. Tu cerebro te lo agradecerá.",
      manifestoSignature: "Cátedra de la Coctelería Económica",
      footerBottom: "Generado con HTML5 + CSS3 + Vanilla Javascript • 100% Autoportante para Despliegues Directos en GitHub Pages",
      footerInsp: "Inspirado metodológicamente en <em>Economics: The User's Guide</em> (Ha-Joon Chang, 2015) y el marco epistemológico de <em>Monismo y Pluralismo</em>",
      footerCopy: "© 2026 Mapa de Escuelas Políticas Económicas • Licencia Creative Commons BY-SA 4.0",
      tooltipLabelNotes: "NOTAS DE CATA",
      tooltipLabelEffects: "RIESGO DE INTOXICACIÓN",
      tooltipActionHint: "Haz clic en la botella para ir al test",
      recipeLabelFormula: "FÓRMULA QUÍMICA (INGREDIENTES)",
      recipeLabelVectors: "VECTORES DE FUERZA",
      recipeLabelNotes: "NOTAS DE CATA DEL BARMAN",
      recipeLabelRisks: "RIESGOS SISTÉMICOS ASOCIADOS",
      phLabel: "pH Estatal:",
      phInterventionTitle: "Nivel de intervención del Estado",
      sliderValCentral: "Equilibrio Central (50%)",
      sliderValLeft: "Sesgo Mercado",
      sliderValRight: "Sesgo Planificación",
      sliderLeftHint: "← Prioridad Izquierda",
      sliderRightHint: "Prioridad Derecha →",
      sliderConfirmBtn: "Confirmar Peso del Dilema",
      exportOfficialAct: "ACTA OFICIAL DE ALCOHOLEMIA",
      exportMolecularFormula: "FÓRMULA MOLECULAR DE DOCTRINAS",
      exportCognitiveDiag: "DIAGNÓSTICO COGNITIVO",
      exportVirtue: "VIRTUD INTELECTUAL",
      exportHangoverRisk: "RIESGO LATENTE DE RESACA",
      exportWatermark: "CÁTEDRA DE COCTELERÍA ECONÓMICA • ELIXIRES DE LA RAZÓN",
      exportDocTitle: "Mi Tarjeta de Alcoholemia Política - Elixires de la Razón"
    },
    escuelas: {
      marxista: {
        id: "marxista",
        nombre: "Marxista",
        fundador: "Karl Marx & Friedrich Engels (1867)",
        color: "#8c2323",
        abv: "90% Vol. Conflicto Estructural",
        tastingNotes: "Intensa y con cuerpo. Notas predominantes de lucha de clases, materialismo histórico y contradicciones estructurales. Deja un regusto prolongado a valor-trabajo y superación del capital.",
        sideEffects: "Propenso a la intoxicación dogmática, ceguera ante la flexibilidad de los mercados autorregulados y propensión a la rigidez burocrática del comité central.",
        descripcion_corta: "Crítica sistémica del capital, clases sociales y plusvalía."
      },
      feminista: {
        id: "feminista",
        nombre: "Feminista",
        fundador: "Silvia Federici & Marilyn Waring (1980)",
        color: "#bd777a",
        abv: "75% Vol. Sostenimiento Vital",
        tastingNotes: "Terrosa y reconfortante. Notas de base sobre trabajo reproductivo no remunerado, economía del cuidado y deconstrucción de la frontera público/privado. Muy equilibrada.",
        sideEffects: "A veces diluye la modelación agregada de corto plazo; puede provocar parálisis ante la urgencia de equilibrios fiscales inmediatos en economías de mercado.",
        descripcion_corta: "Visibilización del cuidado doméstico y reproducción social."
      },
      ecologica: {
        id: "ecologica",
        nombre: "Ecológica",
        fundador: "Kate Raworth & Nicholas Georgescu-Roegen (2012)",
        color: "#2c5e3b",
        abv: "80% Vol. Límites Planetarios",
        tastingNotes: "Herbácea y refrescante. Aromas a termodinámica social, límites biofísicos y economía circular (Donut). Postulado firme sobre el suelo social y el techo ecológico.",
        sideEffects: "Riesgo de estancamiento involuntario del bienestar si el decrecimiento no se acompaña de una redistribución institucional impecable; rechazo al crecimiento nominal.",
        descripcion_corta: "Economía incrustada en la biósfera y bases sociales."
      },
      tradicion_desarrollista: {
        id: "tradicion_desarrollista",
        nombre: "Desarrollista",
        fundador: "Ha-Joon Chang & Friedrich List (1841)",
        color: "#c8350d",
        abv: "85% Vol. Soberanía Industrial",
        tastingNotes: "Densa y persistente. Notas fuertes de protección de industrias nacientes, catching-up productivo, subsidios y regulación de importaciones. Un trago de envejecimiento lento.",
        sideEffects: "Alta dependencia de la probidad del Estado. El consumo desmedido causa ineficiencias de captura de rentas corporativas y parasitismo industrial subsidiado.",
        descripcion_corta: "Planificación industrial y desarrollo de capacidades locales."
      },
      keynesiana: {
        id: "keynesiana",
        nombre: "Keynesiana",
        fundador: "John Maynard Keynes (1936)",
        color: "#86ad34",
        abv: "70% Vol. Estabilización Fiscal",
        tastingNotes: "Efervescente y estimulante. Ricas notas de demanda agregada, impulsos emprendedores y política fiscal contracíclica. Diseñada para calentar economías deprimidas.",
        sideEffects: "Resaca severa de deuda acumulada, presiones inflacionarias a largo plazo si el estímulo excede el producto potencial, y tendencia a ignorar la oferta agregada.",
        descripcion_corta: "Gestión contracíclica de la demanda y espíritus animales."
      },
      institucionalista: {
        id: "institucionalista",
        nombre: "Institucionalista",
        fundador: "Douglass North & Elinor Ostrom (1920)",
        color: "#579ea4",
        abv: "65% Vol. Gobernanza Común",
        tastingNotes: "Compleja y estructurada. Notas de reglas de juego, costos de transacción y acuerdos colectivos policéntricos para gestionar comunes. Sabor equilibrado e integrador.",
        sideEffects: "Dificultad para modelar y formalizar matemáticamente sus dinámicas; tendencia a la descripción empírica sin recetas de acción rápidas durante emergencias.",
        descripcion_corta: "Análisis de reglas, contratos y gobernanza de comunes."
      },
      estado_emprendedor: {
        id: "estado_emprendedor",
        nombre: "Emprendedor",
        fundador: "Mariana Mazzucato (2013)",
        color: "#df7713",
        abv: "75% Vol. Innovación Estratégica",
        tastingNotes: "Brillante y frutal. Marcados aromas a misiones audaces de innovación, inversión pública de alto riesgo inicial y creación/moldeamiento de nuevos mercados tecnológicos.",
        sideEffects: "Riesgos de socializar pérdidas y privatizar ganancias si los contratos no están bien diseñados; propensión a elegir ganadores tecnológicos equivocados.",
        descripcion_corta: "Inversión estatal de riesgo y misiones tecnológicas."
      },
      conductista: {
        id: "conductista",
        nombre: "Conductista",
        fundador: "Daniel Kahneman & Richard Thaler (2008)",
        color: "#bd777a",
        abv: "60% Vol. Sesgos Cognitivos",
        tastingNotes: "Aromática y sutil. Notas marcadas de nudging (pequeños empujones), arquitectura de decisión e irracionalidades predecibles. Muy matizada.",
        sideEffects: "Uso excesivo puede degenerar en un paternalismo libertario manipulador; asume que el cambio individual es suficiente para corregir fallas estructurales.",
        descripcion_corta: "Sesgos heurísticos y arquitectura de decisiones reales."
      },
      clasica: {
        id: "clasica",
        nombre: "Clásica",
        fundador: "Adam Smith & David Ricardo (1776)",
        color: "#5d7298",
        abv: "80% Vol. Libertad Natural",
        tastingNotes: "Seca, limpia e imperecedera. Aromas a división del trabajo, ventaja comparativa, mano invisible y el cimiento del libre comercio. Muy aromática.",
        sideEffects: "Ignora por completo los límites biofísicos de la biosfera y las crisis cíclicas de demanda; tendencia a subestimar el conflicto inherente de la distribución.",
        descripcion_corta: "División del trabajo, libre comercio y acumulación de capital."
      },
      neoclasica: {
        id: "neoclasica",
        nombre: "Neoclásica",
        fundador: "Léon Walras & Alfred Marshall (1870)",
        color: "#2d2651",
        abv: "85% Vol. Utilidad Marginal",
        tastingNotes: "Cristalina y geométrica. Notas de optimización matemática, utilidad marginal y equilibrio general de precios de mercado. Es un destilado de alta pureza matemática.",
        sideEffects: "Causa desprendimiento crónico de la realidad debido a supuestos hiperracionales (Homo Economicus); desorientación severa ante monopolios naturales y fallas sistémicas.",
        descripcion_corta: "Optimización matemática de agentes racionales y equilibrio."
      },
      austriaca: {
        id: "austriaca",
        nombre: "Austríaca",
        fundador: "Friedrich Hayek & Ludwig von Mises (1871)",
        color: "#c8350d",
        abv: "90% Vol. Individualismo Radical",
        tastingNotes: "Seca y de graduación alcohólica extrema. Notas puras de orden espontáneo, conocimiento disperso e imposibilidad del cálculo económico centralizado. Altamente volátil.",
        sideEffects: "Resaca de parálisis estatal ante externalidades masivas (como el cambio climático); ceguera ideológica que rechaza la provisión pública de bienes comunes.",
        descripcion_corta: "Conocimiento disperso, orden espontáneo y libre mercado."
      },
      schumpeteriana: {
        id: "schumpeteriana",
        nombre: "Schumpeteriana",
        fundador: "Joseph Schumpeter (1942)",
        color: "#f9c000",
        abv: "80% Vol. Destrucción Creativa",
        tastingNotes: "Efervescente, punzante y ácida. Predominan las notas a innovación destructiva, el empresario schumpeteriano y los ciclos de obsolescencia tecnológica acelerada.",
        sideEffects: "Tolerancia excesiva a monopolios transitorios bajo la premisa de la innovación; puede desatender la precarización social que causa el desempleo tecnológico.",
        descripcion_corta: "Innovación destructiva y ciclos evolutivos de mercado."
      }
    },
    cocteles: [
      {
        id: "martillo_dialectico",
        nombre: "Martillo Dialéctico",
        descripcion: "Diseñado específicamente para responder al expediente de la Desigualdad Estructural. Un trago terroso, denso e intensamente intoxicante que expone las asimetrías de clase.",
        intensidad: "Fuerte (Especialidad)",
        colorPredominante: "#8c2323",
        ingredientes: { marxista: 55, feminista: 25, keynesiana: 20 },
        vectores: { x: "Fuerte Intervención", y: "Máxima Equidad" },
        tastingNotes: "Cuerpo pesado con notas de socialización de medios productivos, un corazón terroso de trabajo de cuidado doméstico remunerado y un final estimulante de estabilización fiscal.",
        sideEffects: "Alta propensión colectivista. Puede provocar rigidez del comité planificador y ceguera ante el dinamismo microeconómico individual descentralizado.",
        riesgosSistemicos: "Abolición abrupta de incentivos privados, burocratización severa y parálisis en la asignación eficiente de recursos descentralizados."
      },
      {
        id: "libertad_liquida",
        nombre: "Libertad Líquida",
        descripcion: "Diseñado para combatir la Inflación Galopante y la asfixia del intervencionismo. Un destilado cristalino, ultra-seco e hipervolátil que celebra el orden espontáneo de las decisiones libres.",
        intensidad: "Extremo",
        colorPredominante: "#c8350d",
        ingredientes: { austriaca: 50, clasica: 30, neoclasica: 20 },
        vectores: { x: "Mercado Libre Absoluto", y: "Productividad y Crecimiento" },
        tastingNotes: "Aroma penetrante a dinero sano no manipulado por bancos centrales, sabor nítido a precios de mercado espontáneos y un final cristalino libre de impuestos.",
        sideEffects: "Pureza extrema de laissez-faire. Provoca ceguera total ante las externalidades negativas masivas y parálisis estatal durante colapsos sistémicos.",
        riesgosSistemicos: "Deshidratación de bienes comunes, desmantelamiento de la red de seguridad social y alta vulnerabilidad ante asimetrías de poder desreguladas."
      },
      {
        id: "socialdemocracia_nordica",
        nombre: "Socialdemocracia Nórdica",
        descripcion: "Diseñado para amortiguar la gentrificación y la Crisis de Vivienda. Mezcla noble que fusiona el motor de la eficiencia privada con un robusto colchón social de bienestar.",
        intensidad: "Moderado",
        colorPredominante: "#579ea4",
        ingredientes: { keynesiana: 40, institucionalista: 30, tradicion_desarrollista: 20, feminista: 10 },
        vectores: { x: "Coordinación Social / Estado Regulador", y: "Equidad Social y Estabilidad" },
        tastingNotes: "Sabor de mercado dinámico regulado, notas herbales y reconfortantes de vivienda pública y un retrogusto de alta equidad fiscal contracíclica.",
        sideEffects: "Gusto adquirido de elevada presión impositiva. Riesgo de fuga de capitales globalizados si los trade-offs distributivos no se equilibran.",
        riesgosSistemicos: "Fatiga fiscal crónica del contribuyente, hipertrofia burocrática del estado de bienestar y parálisis ante shocks globales de capital."
      },
      {
        id: "silicon_valley_sour",
        nombre: "Silicon Valley Sour",
        descripcion: "Diseñado para canalizar los shocks de IA y Automatización. Un elixir burbujeante que busca guiar la destrucción creativa mediante misiones tecnológicas financiadas por el Estado.",
        intensidad: "Fuerte",
        colorPredominante: "#f9c000",
        ingredientes: { schumpeteriana: 45, estado_emprendedor: 35, neoclasica: 20 },
        vectores: { x: "Moldeamiento Público-Privado", y: "Crecimiento e Innovación" },
        tastingNotes: "Efervescencia ácida de obsolescencia acelerada y misiones estratégicas de innovación, con un final de optimización microeconómica racional.",
        sideEffects: "Picos severos de burbujas especulativas. Puede inducir a una tolerancia extrema ante monopolios tecnológicos transitorios.",
        riesgosSistemicos: "Socialización masiva de pérdidas de startups riesgosas, privatización del conocimiento tecnológico común y precarización laboral analógica."
      },
      {
        id: "equilibrio_esteril",
        nombre: "Equilibrio Estéril",
        descripcion: "Diseñado como un trago analítico sobre los límites regulatorios ante los Monopolios Digitales. Frío, geométrico, inorgánico y de una pureza matemática insuperable.",
        intensidad: "Fuerte",
        colorPredominante: "#2d2651",
        ingredientes: { neoclasica: 80, conductista: 20 },
        vectores: { x: "Modelación Racional / Mercado Libre", y: "Asignación Eficiente" },
        tastingNotes: "Optimización pura de utilidad marginal y curvas de indiferencia abstractas, rematado con una pizca conductual de sesgos heurísticos.",
        sideEffects: "Pérdida severa de contacto con la fricción empírica. El supuesto de hiper-racionalidad inhabilita la comprensión de monopolios con efectos de red.",
        riesgosSistemicos: "Inoperancia técnica ante crisis sistémicas complejas y reducción dogmática de la sociedad a un óptimo matemático inalcanzable."
      },
      {
        id: "elixir_bien_comun",
        nombre: "Elixir del Bien Común",
        descripcion: "Diseñado para sanar las heridas del Colapso Ecológico. Un trago orgánico y regenerativo enfocado en salvaguardar el techo planetario y la reproducción de la vida.",
        intensidad: "Ligero",
        colorPredominante: "#2c5e3b",
        ingredientes: { institucionalista: 50, ecologica: 30, feminista: 20 },
        vectores: { x: "Autogestión Policéntrica / Comunitario", y: "Límites y Sostenibilidad Social" },
        tastingNotes: "Sabores terrosos y herbáceos a economía circular del Donut, notas de gobernanza local policéntrica de comunes y un regusto a cuidados de la biosfera.",
        sideEffects: "Ausencia total de efervescencia de crecimiento material. Exige una gran dedicación de tiempo cívico para evitar tragedias del común.",
        riesgosSistemicos: "Ineficiencias de escala frente a mercados internacionales globalizados y lentitud extrema de reacción ante crisis centralizadas."
      },
      {
        id: "destilado_desarrollista",
        nombre: "Destilado Desarrollista",
        descripcion: "Diseñado para resolver el dilema de Globalización vs Soberanía. Un licor robusto de cocción lenta enfocado en la soberanía arancelaria y la maduración industrial local.",
        intensidad: "Fuerte",
        colorPredominante: "#c8350d",
        ingredientes: { tradicion_desarrollista: 60, estado_emprendedor: 30, institucionalista: 10 },
        vectores: { x: "Planificación de Oferta Industrial", y: "Productividad y Catching-up" },
        tastingNotes: "Notas densas y persistentes de protección a industrias nacientes, misiones públicas audaces de catching-up productivo y reglas de juego claras.",
        sideEffects: "Resaca severa de corporativismo. Puede incentivar ineficiencias parasitarias de empresas privadas altamente subsidiadas.",
        riesgosSistemicos: "Captura rentista del aparato burocrático, parálisis competitiva frente al exterior y fomento crónico de ineficiencias protegidas."
      },
      {
        id: "ponche_gran_crisis",
        nombre: "Ponche de la Gran Crisis",
        descripcion: "Diseñado para estabilizar economías congeladas ante el Dilema de Estabilidad vs Estímulo. Un estimulante térmico para inyectar demanda agregada y mitigar el pánico cívico.",
        intensidad: "Moderado",
        colorPredominante: "#86ad34",
        ingredientes: { keynesiana: 60, institucionalista: 20, conductista: 20 },
        vectores: { x: "Demanda Agregada Dirigida", y: "Estabilidad de Ciclos Cortos" },
        tastingNotes: "Efervescencia dulce de gasto público contracíclico, notas de arquitectura institucional y una amortiguación conductual contra el pánico financiero.",
        sideEffects: "Apetito insaciable de endeudamiento fiscal y propensión al desbordamiento inflacionario a largo plazo si el estímulo supera el producto potencial.",
        riesgosSistemicos: "Inflación estructural persistente, desincentivo del ahorro privado de largo plazo y dependencia crónica del respirador estatal."
      }
    ],
    problemas: [
      {
        id: "inflacion",
        titulo: "La Inflación Galopante",
        pregunta: "¿Cómo estabilizar el poder adquisitivo ante una escalada abrupta de precios?",
        dossier: [
          { escuela: "Austríaca", remedio: "Frenar en seco la emisión monetaria, recortar el gasto público estatal de raíz, y restaurar la disciplina del dinero sano libre de interferencias políticas.", toxicidad: "Aumenta la tasa de desempleo a corto plazo y desactiva la red protectora social en plena recesión.", ph: 15 },
          { escuela: "Keynesiana", remedio: "Aplicar impuestos directos sobre rentas extraordinarias especulativas y controlar la demanda selectivamente, sosteniendo los subsidios a la canasta básica.", toxicidad: "Puede cronificar la deuda pública e inhibir inversiones de capital si la carga impositiva es mal calculada.", ph: 65 },
          { escuela: "Marxista", remedio: "Establecer controles estrictos y democráticos de precios y márgenes de ganancia corporativos directos, desmantelando los monopolios de distribución.", toxicidad: "Genera desabastecimiento inmediato si el sistema productivo sigue operando bajo lógicas de rentabilidad de mercado privadas.", ph: 90 }
        ]
      },
      {
        id: "desigualdad",
        titulo: "Desigualdad Estructural",
        pregunta: "¿Qué hacer ante la alarmante brecha acumulada de ingresos y patrimonio?",
        dossier: [
          { escuela: "Marxista", remedio: "Socializar democráticamente la propiedad de los medios productivos principales, expropiar rentas financieras parasitarias e igualar salarios basándose en el valor real.", toxicidad: "Abolición del mercado de capitales libre, lo que provoca fuga de activos en economías abiertas no coordinadas.", ph: 95 },
          { escuela: "Feminista", remedio: "Revalorizar y remunerar estatalmente los trabajos domésticos e invisibles de cuidado, garantizando guarderías y servicios públicos colectivos incondicionales.", toxicidad: "Exige una reestructuración fiscal masiva e inmediata que tensiona la contabilidad de las finanzas tradicionales.", ph: 80 },
          { escuela: "Neoclásica", remedio: "Fomentar el capital humano mediante subsidios educativos focalizados en áreas de alta demanda y asegurar el libre funcionamiento de la competencia laboral.", toxicidad: "Trata los síntomas en lugar de las causas: ignora la acumulación del capital dinástico heredado y la asimetría del poder.", ph: 35 }
        ]
      },
      {
        id: "ia_automatizacion",
        titulo: "IA y Automatización",
        pregunta: "¿Cómo amortiguar el impacto del reemplazo masivo de empleos por inteligencias artificiales?",
        dossier: [
          { escuela: "Schumpeteriana", remedio: "Permitir la destrucción creativa del mercado laboral obsoleto y financiar startups de alta complejidad tecnológica facilitando la libre reasignación.", toxicidad: "Genera periodos de exclusión severa y precarización de trabajadores de edad avanzada que no logran reconvertirse a tiempo.", ph: 30 },
          { escuela: "Estado Emprendedor", remedio: "Establecer misiones de innovación pública para orientar la IA hacia la complementariedad humana, cobrando regalías por patentes financiadas socialmente.", toxicidad: "Requiere una agilidad analítica y técnica de los burócratas del Estado que suele ser escasa frente al avance de las corporaciones tecnológicas.", ph: 70 },
          { escuela: "Feminista", remedio: "Reducir la jornada laboral drásticamente y desviar los flujos de ganancia de la IA hacia la valorización y subsidio masivo de los empleos sociales de cuidado humano.", toxicidad: "Reduce los rendimientos del capital financiero a corto plazo y exige coordinación global para evitar fugas tributarias.", ph: 85 }
        ]
      },
      {
        id: "vivienda",
        titulo: "Crisis de Vivienda",
        pregunta: "¿Cómo resolver la gentrificación y la inaccesibilidad a la vivienda urbana?",
        dossier: [
          { escuela: "Neoclásica", remedio: "Liberalizar el suelo constructivo, eliminar trabas burocráticas urbanísticas y desregular la oferta inmobiliaria para que el mercado alcance el equilibrio de precios.", toxicidad: "A corto plazo estimula la especulación del sector inmobiliario y acelera el desplazamiento social de las comunidades.", ph: 20 },
          { escuela: "Institucionalista", remedio: "Empoderar fideicomisos de tierra comunitaria, regular los precios del alquiler local mediante convenios policéntricos y gestionar viviendas públicas comunales.", toxicidad: "Exige un entramado de participación vecinal riguroso y adaptativo, que puede ralentizar los ritmos de urbanización.", ph: 60 },
          { escuela: "Desarrollista", remedio: "Planificación centralizada del Estado mediante la construcción masiva y directa de parques de vivienda pública estratégica y control del crédito inmobiliario.", toxicidad: "Crea pesadas burocracias de adjudicación de vivienda y alta homogeneidad urbanística poco atractiva.", ph: 80 }
        ]
      },
      {
        id: "monopolios",
        titulo: "Monopolios Digitales",
        pregunta: "¿Cómo tratar a las plataformas que concentran el tráfico y los datos de toda la sociedad?",
        dossier: [
          { escuela: "Austríaca", remedio: "No intervenir. Si un monopolio abusa de sus precios, las fuerzas creativas buscarán alternativas para evadirlo de forma natural, destruyendo la captura inicial.", toxicidad: "Ignora las barreras de entrada absolutas y los efectos de red colosales que hacen irreversible la captura de datos.", ph: 10 },
          { escuela: "Neoclásica", remedio: "Utilizar las leyes antitrust tradicionales para fragmentar por la fuerza a los gigantes monopolistas y restaurar el mercado competitivo perfecto.", toxicidad: "Se estrella contra la eficiencia técnica intrínseca de los servicios digitales centralizados unificados.", ph: 45 },
          { escuela: "Estado Emprendedor", remedio: "Nacionalizar la infraestructura de red básica y de datos comunes de la sociedad, convirtiéndolas en servicios públicos neutrales operados democráticamente.", toxicidad: "Riesgos de centralismo informativo en manos del gobierno de turno y pérdida de dinamismo e innovación ágil.", ph: 85 }
        ]
      },
      {
        id: "ecocrisis",
        titulo: "Colapso Ecológico",
        pregunta: "¿Cómo enfrentar la degradación de la biosfera y el calentamiento climático acelerado?",
        dossier: [
          { escuela: "Ecológica", remedio: "Aplicar la economía del Donut. Imponer topes ecológicos biofísicos duros no negociables a la extracción y descarbonizar mediante decrecimiento material planificado.", toxicidad: "Choca contra la necesidad de crecimiento de las economías capitalistas basadas en deuda monetaria exponencial.", ph: 90 },
          { escuela: "Neoclásica", remedio: "Internalizar las externalidades negativas cobrando impuestos globales al carbono e implementando un mercado regulado de derechos de contaminación transables.", toxicidad: "Asume que la biosfera puede reducirse en su totalidad a un precio de mercado óptimo, menospreciando puntos de no retorno.", ph: 40 },
          { escuela: "Estado Emprendedor", remedio: "Movilizar un Green New Deal masivo de innovación: inversión de alto riesgo financiada por el Estado para detonar la transición energética limpia.", toxicidad: "Continúa apostando por el dogma de la expansión material del crecimiento, aunque sea con barniz verde, sin resolver la sobreextracción.", ph: 75 }
        ]
      }
    ],
    preguntas: [
      {
        id: "q1",
        fase: 1,
        dimension: "epistemologia",
        texto: "¿Cómo interpretas las grandes crisis sociales y económicas de la historia?",
        opciones: [
          { texto: "Toda gran crisis social se reduce en última instancia a una causa principal (sea la lucha de clases, el exceso de regulación estatal o el egoísmo individual).", tipo: "monismo" },
          { texto: "Los sistemas sociales son demasiado complejos; cualquier intento de explicarlos con una sola causa es una simplificación peligrosa. La verdad es fragmentaria y contextual.", tipo: "pluralismo" }
        ]
      },
      {
        id: "q2",
        fase: 1,
        dimension: "analista",
        texto: "¿Cuál debería ser el papel del intelectual o planificador económico en la sociedad?",
        opciones: [
          { texto: "El papel del analista es construir un marco conceptual coherente y defenderlo con rigor científico para guiar la acción colectiva sin vacilaciones políticas.", tipo: "monismo" },
          { texto: "El papel del analista es dudar de sus propios marcos, adaptar sus herramientas según el problema específico y aceptar que parches contextuales son mejores que dogmas totales.", tipo: "pluralismo" }
        ]
      },
      {
        id: "q3",
        fase: 1,
        dimension: "error",
        texto: "Cuando una política económica nacional fracasa rotundamente, ¿cómo lo explicas?",
        opciones: [
          { texto: "Suele deberse a desviaciones políticas en su aplicación, a un sabotaje de intereses opuestos o a la falta de pureza en su ejecución práctica.", tipo: "monismo" },
          { texto: "Demuestra que la teoría utilizada tenía límites estrictos de contexto y vigencia; la realidad cambia y los dogmas deben desecharse si fallan empíricamente.", tipo: "pluralismo" }
        ]
      },
      {
        id: "q4",
        fase: 2,
        dimension: "coordinacion",
        texto: "¿Cuál es tu visión sobre el mercado como coordinador de las sociedades humanas?",
        opciones: [
          { texto: "Es un orden espontáneo y descentralizado de transmisión de información dispersa de utilidad infinita. La interferencia del Estado entorpece las señales.", pesos: { austriaca: 4, clasica: 3, neoclasica: 2 } },
          { texto: "Es un asignador altamente eficiente bajo competencia, pero padece fallas de información, monopolios y externalidades que exigen regulación estatal rigurosa.", pesos: { neoclasica: 4, keynesiana: 3, conductista: 2 } },
          { texto: "No opera en el vacío. Depende enteramente del entramado institucional, normas de conducta, reglas de juego y la gobernanza de los comunes.", pesos: { institucionalista: 4, tradicion_desarrollista: 3 } },
          { texto: "Es un espacio de asimetría de poder estructural, explotación de la fuerza laboral y apropiación del excedente que debe superarse sistémicamente.", pesos: { marxista: 4, feminista: 3 } }
        ]
      },
      {
        id: "q5",
        fase: 2,
        dimension: "estado",
        texto: "¿Cuál debería ser la función fundamental del Estado dentro de la economía nacional?",
        opciones: [
          { texto: "Limitarse al mínimo: proteger los derechos de propiedad, asegurar el imperio de la ley, hacer cumplir contratos y no distorsionar incentivos.", pesos: { austriaca: 4, clasica: 4 } },
          { texto: "Actuar como regulador fiscal y estabilizador contracíclico agregando gasto e inversión pública para sostener el empleo durante las depresiones.", pesos: { keynesiana: 4, neoclasica: 3 } },
          { texto: "Ser un motor audaz de innovación de alto riesgo estratégico, creando activamente nuevos mercados de frontera industrial mediante misiones coordinadas.", pesos: { estado_emprendedor: 4, tradicion_desarrollista: 4, schumpeteriana: 2 } },
          { texto: "Desmantelar la lógica de acumulación de capital y planificar democráticamente las prioridades humanas basadas en límites biofísicos y el bienestar social.", pesos: { marxista: 4, ecologica: 3, feminista: 3 } }
        ]
      },
      {
        id: "q6",
        fase: 2,
        dimension: "justicia",
        texto: "¿Cómo interpretas la concentración de riqueza y desigualdad económica?",
        opciones: [
          { texto: "Es el reflejo natural del valor marginal de la productividad que cada quien aporta. Los impuestos confiscatorios desincentivan el ahorro y la inversión.", pesos: { neoclasica: 4, austriaca: 3, clasica: 2 } },
          { texto: "Es una traba macroeconómica que deprime la propensión al consumo y sabotea la estabilidad social. Se necesita fiscalidad progresiva para corregirla.", pesos: { keynesiana: 4, conductista: 3 } },
          { texto: "Deriva de la invisibilización y desprecio social del trabajo de reproducción doméstica no remunerado y la explotación desmesurada de la naturaleza.", pesos: { feminista: 4, ecologica: 3 } },
          { texto: "Es la consecuencia inevitable del desojo de la plusvalía laboral inherente a la tenencia privada de medios de producción. Se corrige con su socialización.", pesos: { marxista: 4, institucionalista: 2 } }
        ]
      },
      {
        id: "q7",
        fase: 2,
        dimension: "humano",
        texto: "¿Cómo definirías el comportamiento y racionalidad del ser humano al tomar decisiones?",
        opciones: [
          { texto: "Un agente plenamente racional que procesa información disponible de forma coherente para optimizar individualmente su propio bienestar y utilidad.", pesos: { neoclasica: 4, clasica: 3 } },
          { texto: "Un sujeto bajo racionalidad limitada, expuesto a sesgos cognitivos predecibles, influencias sociales y sensible a cómo se diseñe su arquitectura de elección.", pesos: { conductista: 4, institucionalista: 3 } },
          { texto: "Un agente dinámico que actúa de forma intencional pero subjetiva, cuyo conocimiento es fragmentario y disperso, descubriéndose en la acción libre.", pesos: { austriaca: 4, schumpeteriana: 2 } },
          { texto: "Un ser interdependiente, condicionado estructuralmente por su pertenencia de clase social, género y lazos relacionales, vitales e institucionales.", pesos: { feminista: 4, marxista: 4, ecologica: 3 } }
        ]
      },
      {
        id: "q8",
        fase: 2,
        dimension: "motor",
        texto: "¿Cuál consideras que es la fuerza motriz que impulsa el cambio y progreso material?",
        opciones: [
          { texto: "La acumulación del capital productivo nacional y la protección y maduración de capacidades de industrias manufactureras estratégicas.", pesos: { tradicion_desarrollista: 4, clasica: 3 } },
          { texto: "La destrucción creativa catalizada por emprendedores audaces que irrumpen con innovaciones tecnológicas que liquidan los viejos monopolios.", pesos: { schumpeteriana: 4, austriaca: 3 } },
          { texto: "La inversión inicial de alto riesgo financiero impulsada y guiada por el Estado, posibilitando misiones audaces de desarrollo tecnológico de frontera.", pesos: { estado_emprendedor: 4, schumpeteriana: 3 } },
          { texto: "La deliberada reestructuración del metabolismo social para habitar dentro de los límites biofísicos del planeta cuidando la sostenibilidad de la vida.", pesos: { ecologica: 4, feminista: 3 } }
        ]
      },
      {
        id: "q9",
        fase: 2,
        dimension: "propiedad",
        texto: "¿Qué estructura de tenencia de propiedad consideras más justa y eficiente?",
        opciones: [
          { texto: "La propiedad privada firmemente defendida y demarcada jurídicamente para asegurar incentivos robustos al esfuerzo individual y evitar tragedias comunes.", pesos: { clasica: 4, neoclasica: 3 } },
          { texto: "Gobernanza policéntrica de recursos comunes locales, autogestionados de forma sostenible mediante normas robustas consensuadas colectivamente.", pesos: { institucionalista: 4, ecologica: 3 } },
          { texto: "La tenencia y control público democrático de sectores y recursos naturales estratégicos clave para desmantelar rentabilidades parasitarias privadas.", pesos: { marxista: 4, tradicion_desarrollista: 3 } },
          { texto: "Priorizar redes cooperativas horizontales basadas en el valor del sostenimiento vital, economía solidaria vecinal y el cuidado ecológico.", pesos: { feminista: 4, ecologica: 4 } }
        ]
      },
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
    ],
    perfiles_cognitivos: {
      monismo_doctrinal: {
        nombre: "Monismo Doctrinal",
        subtitulo: "La Coherencia de un Principio Unificado",
        descripcion: "Tu mente opera con el rigor deductivo de un marco conceptual unificado. Al igual que el monista de Isaiah Berlin, tú 'sabes una gran cosa' y organizas los complejos fenómenos bajo principios robustos y consistentes. En tu búsqueda de un orden coherente, tiendes a priorizar un concepto puro de libertad: ya sea la Libertad Negativa absoluta (el mercado libre de toda interferencia y coerción estatal) o la Libertad Positiva colectiva (la planificación estructurada para dotar de capacidades reales a la sociedad). Esta consistencia axiomática te confiere una formidable capacidad de acción estratégica y una fuerte identidad política, aunque a costa de simplificar las tensiones éticas del tejido social.",
        virtud: "Identidad intelectual inquebrantable, razonamiento deductivo de alta precisión y extraordinaria claridad estratégica ante dilemas complejos.",
        resaca: "Alta propensión a la visión de túnel. Si te anclas en la libertad negativa, corres el riesgo de ignorar la precarización social y el desamparo de bienes comunes; si te vuelcas a la libertad positiva, emerges propenso al mesianismo político, al tribalismo ideológico ortodoxo y al paternalismo burocrático que asfixia el albedrío individual."
      },
      pluralismo_sistemico: {
        nombre: "Pluralismo Sistémico",
        subtitulo: "La Adaptabilidad de la Complejidad",
        descripcion: "Tu mente opera con la flexibilidad adaptativa de quien reconoce que el mundo social está compuesto por múltiples verdades en tensión inevitable. Siguiendo el pluralismo de Berlin, entiendes que la Libertad Negativa (no interferencia individual) y la Libertad Positiva (realización de capacidades comunes) son valores legítimos pero con frecuencia incompatibles, y que no existe una súper-fórmula científica capaz de fusionarlos sin pérdidas éticas. Navegas estas contradicciones combinando escuelas con pragmatismo y humildad, adaptando tus herramientas analíticas a la escala del problema concreto.",
        virtud: "Flexibilidad epistemológica de alto nivel, inmunidad natural a la ortodoxia doctrinal y gran resiliencia intelectual ante el cambio histórico.",
        resaca: "Vulnerabilidad a la parálisis analítica y al desgaste decisional. Al comprender tan bien que toda decisión implica sacrificar una libertad en favor de otra, corres el riesgo de la inoperancia y de una inevitable soledad política ante la falta de un anclaje identitario claro."
      },
      monismo_eclectico: {
        nombre: "Monismo Ecléctico (En Tensión)",
        subtitulo: "La Búsqueda Inquieta de Coherencia",
        descripcion: "Operas bajo una tensión intelectual fascinante. Tu temperamento cognitivo ansía desesperadamente encontrar una única verdad sistemática y coherente que unifique la realidad. Sin embargo, tu sensibilidad analítica te impide ignorar que la Libertad Negativa del mercado y la Libertad Positiva de la planificación estatal tiran de ti con la misma fuerza ética y empírica. Esto te mantiene en una permanente encrucijada teórica, intentando reconciliar bajo un mismo techo lógico principios que la historia ha demostrado que conviven en conflicto irreductible.",
        virtud: "Escepticismo saludable de gabinete, rechazo de dogmas autocomplacientes y un motor de constante profundización conceptual autocrítica.",
        resaca: "Disonancia cognitiva recurrente. Sensación de inestabilidad o inconsistencia intelectual al saltar entre polos incompatibles, lo que puede alienar a los militantes de doctrinas puras."
      },
      pluralismo_pragmatico: {
        nombre: "Pluralismo Camuflado (Pluralismo Pragmático)",
        subtitulo: "La Doctrina bajo el Disfraz de la Apertura",
        descripcion: "Presentas formalmente un discurso intelectual abierto, empírico y tolerante, autopercibiéndote como un pluralista libre de ataduras doctrinarias. No obstante, tus decisiones políticas reales y tus ponderaciones de dilemas de alta tensión revelan un anclaje inamovible, sumamente concentrado en defender un solo eje de libertad (sea la no interferencia del mercado o la capacidad reguladora estatal). Utilizas el sofisticado lenguaje de la flexibilidad pluralista para justificar y blindar operativamente un núcleo esencialmente monista.",
        virtud: "Extraordinaria eficacia operativa al combinar la fuerza de una doctrina unificada con la diplomacia y el prestigio intelectual de la apertura académica.",
        resaca: "Riesgo de incurrir en una disonancia tácita o en una hipocresía epistemológica involuntaria, exigiendo matices y concesiones a los marcos ajenos que tu propio núcleo duro se niega a realizar."
      }
    },
    perfiles_cuadrantes: {
      Q1: {
        titulo: "Elixir de Planificación Crítica y Límites",
        descripcion: "Tu centro de gravedad se concentra en el Estado fuerte como garante de la justicia distributiva y el respeto innegociable a los límites biofísicos de la naturaleza. Rechazas que la vida humana y la reproducción social deban someterse a la rentabilidad de las corporaciones privadas. Abogas por la soberanía cívica, de género y de biósfera.",
        afinidad: "Marxismo, Economía Feminista del Cuidado y Ecología Sistémica."
      },
      Q2: {
        titulo: "Bebida de Micro-Incentivos y Empatía Heurística",
        descripcion: "Tu balance se apoya en un Estado que, sin hipertrofiarse burocráticamente, intervenga de manera quirúrgica y conductual para sanar fallas de mercado. Creas en el empoderamiento del consumidor, en el nudging como facilitador de arquitectura de decisiones justas y en un diseño sutil con empatía en el comportamiento humano real.",
        afinidad: "Economía Conductista y Microeconomía adaptada."
      },
      Q3: {
        titulo: "Destilado de Misión Industrial y Estabilización",
        descripcion: "Priorizas una alianza audaz y coordinada. Para ti, el progreso material duradero proviene de un Estado emprendedor que asuma riesgos tecnológicos y dirija activamente el desarrollo industrial contracíclico. Crees en la gobernanza policéntrica, la macroeconomía activa y las capacidades de planificación de misiones estratégicas.",
        afinidad: "Keynesianismo, Desarrollismo y Estado Emprendedor."
      },
      Q4: {
        titulo: "Néctar de Libre Mercado y Orden Espontáneo",
        descripcion: "Tu centro de gravedad reposa en la defensa irrenunciable del individuo y el libre comercio descentralizado. Para ti, el mercado libre de interferencias políticas es el único computador natural capaz de coordinar el conocimiento disperso a través de precios espontáneos. Crees firmemente en la innovación y el dinamismo competitivo.",
        afinidad: "Economía Austríaca, Clásica e Neoclásica de Optimización."
      }
    },
    perfiles_concentracion: {
      monocultura: {
        riesgo: "⚠️ Dogmatismo Agudo",
        narrativa: "Posees una pureza ideológica sobresaliente. Tu mezcla doctrinal se estructura en torno a una única escuela o cuadrante conceptual dominante. Esto te dota de una tremenda consistencia lógica y una robusta identidad conceptual. Sin embargo, tu resaca latente es el sesgo de túnel: una alta propensión a la ortodoxia que puede inducir a un sectarismo intelectual, tribalismo político ante el disenso, o a la ceguera defensiva frente a anomalías empíricas imprevistas que cuestionen tus dogmas esenciales."
      },
      sintetico: {
        riesgo: "⚖️ Fricción Decisional",
        narrativa: "Has logrado formular un cóctel equilibrado y sintético. Combinas escuelas y licores teóricos con sensatez y adaptabilidad conceptual. Tu virtud principal es sopesar costos, externalidades y trade-offs con ecuanimidad y equilibrio cívico. Tu resaca potencial es la indecisión o parálisis analítica por sobrepensar las contradicciones inevitables de cada política antes de actuar."
      },
      disperso: {
        riesgo: "🌪️ Soledad del Ecléctico",
        narrativa: "Tu mezcla presenta una dispersión teórica extrema. Eres un catador cívico de múltiples estantes, inmune por completo al dogmatismo ortodoxo. Esto te otorga una soberana humildad epistemológica. No obstante, tu resaca ideológica es la completa inoperancia práctica o la soledad política: al carecer de un anclaje doctrinal unificado, corres el riesgo de diluir tu fuerza transformadora y no encajar en ninguna coalición organizada de acción colectiva."
      }
    }
  },
  en: {
    ui: {
      navLogo: "ELIXIRS <em>of</em> REASON",
      navShelf: "The Shelf",
      navMenu: "The Menu",
      navCabinet: "Apothecary",
      navTestLink: "Analyze Inebriation",
      heroTag: "DOCTRINAL MIXOLOGY & COGNITIVE SIMULATOR",
      heroTitle: "ECONOMIC SCHOOLS BAR",
      heroSubtitle: "“Every economic theory is a partial distillate of reality. Ideologies intoxicate as well.”",
      heroIntro: "Explore the barman's shelves. Hover over each apothecary flask to analyze its epistemological tasting notes, alcohol by volume (ABV), and the side effects of systemic intoxication.",
      shelfLoading: "Loading distillates of reason...",
      menuTag: "OUR DOCTRINAL COCKTAILS",
      menuTitle: "Recommended Mixtures Menu",
      menuDesc: "Rather than consuming raw spirits, savor our mixtures engineered with precise proportions to target specific systemic tensions in the social fabric.",
      cabinetTag: "THE COGNITIVE APOTHECARY",
      cabinetTitle: "Apothecary Cabinet: Crises and Diagnoses",
      cabinetDesc: "Pull open the drawers of this antique apothecary chest to extract real crisis dossiers. Compare the prescriptions of different schools and their systemic toxicities.",
      dossierEmptyFeather: "🪶",
      dossierEmptyTitle: "Select a Cabinet Drawer",
      dossierEmptyText: "Open one of the apothecary chambers to retrieve the parchment of diagnosis and compare doctrinal recipes.",
      dossierExpediente: "DOSSIER NO. 04-A",
      testTag: "MENTAL COGNITIVE DIAGNOSIS",
      testTitle: "Political Inebriation Test",
      testDesc: "This is not a conventional left-or-right test. This diagnosis analyzes the architecture and rigidity of your cognitive frames (Monism or Pluralism) and distills the exact ratio of your intellectual ingredients.",
      testIntroTitle: "How pure are your convictions?",
      testIntroText: "People operate with blends displaying varying degrees of coherence, dependency, and contradiction. Answer 12 theoretical and high-tension practical dilemmas with intellectual honesty to distill your custom bottle and assess your hangover risk.",
      testIntroBtn: "Start Mental Distillation",
      testLoadingTitle: "Distilling Your Cognitive Profile...",
      testLoadingText: "Measuring the Herfindahl-Hirschman Index (HHI), balancing force vectors, and filtering the latent ideological hangovers in your responses...",
      resultsTag: "POLITICAL INEBRIATION CERTIFICATE",
      resultsBottleCaption: "YOUR FORMULA OF REASON",
      resultsVirtueTitle: "INTELLECTUAL VIRTUE",
      resultsHangoverTitle: "HANGOVER RISK",
      resultsBtnExport: "Download Tasting Certificate",
      resultsBtnRestart: "Distill Again",
      manifestoTag: "MANIFESTO",
      manifestoTitle: "Epistemological Humility in Doctrinal Times",
      manifestoP1: "Ideologies simplify the world to allow us to act; that is their value, and simultaneously, their greatest danger. Every doctrine acts as a filter, illuminating certain phenomena while completely obscuring others.",
      manifestoP2: "The true value of analytical thinking lies not in swearing allegiance to a single shelf of conceptual distillation, but in understanding the limitations, trade-offs, and blind spots of our own intellectual tools. Savor with moderation, challenge your biases, and cultivate intellectual pluralism. Your brain will thank you.",
      manifestoSignature: "Chair of Economic Mixology",
      footerBottom: "Powered by HTML5 + CSS3 + Vanilla Javascript • 100% Self-Contained for Direct Deployments to GitHub Pages",
      footerInsp: "Methodologically inspired by <em>Economics: The User's Guide</em> (Ha-Joon Chang, 2015) and the epistemological framework of <em>Monism and Pluralism</em>",
      footerCopy: "© 2026 Map of Economic Political Schools • Creative Commons BY-SA 4.0 License",
      tooltipLabelNotes: "TASTING NOTES",
      tooltipLabelEffects: "INTOXICATION RISK",
      tooltipActionHint: "Click bottle to open the test",
      recipeLabelFormula: "CHEMICAL FORMULA (INGREDIENTS)",
      recipeLabelVectors: "FORCE VECTORS",
      recipeLabelNotes: "BARMAN'S TASTING NOTES",
      recipeLabelRisks: "ASSOCIATED SYSTEMIC RISKS",
      phLabel: "State pH:",
      phInterventionTitle: "Level of State intervention",
      sliderValCentral: "Central Balance (50%)",
      sliderValLeft: "Market Bias",
      sliderValRight: "Planning Bias",
      sliderLeftHint: "← Left Priority",
      sliderRightHint: "Right Priority →",
      sliderConfirmBtn: "Confirm Dilemma Weight",
      exportOfficialAct: "OFFICIAL RECORD OF INEBRIATION",
      exportMolecularFormula: "MOLECULAR DOCTRINAL FORMULA",
      exportCognitiveDiag: "COGNITIVE DIAGNOSIS",
      exportVirtue: "INTELLECTUAL VIRTUE",
      exportHangoverRisk: "LATENT HANGOVER RISK",
      exportWatermark: "CHAIR OF ECONOMIC MIXOLOGY • ELIXIRS OF REASON",
      exportDocTitle: "My Political Inebriation Certificate - Elixirs of Reason"
    },
    escuelas: {
      marxista: {
        id: "marxista",
        nombre: "Marxist",
        fundador: "Karl Marx & Friedrich Engels (1867)",
        color: "#8c2323",
        abv: "90% Vol. Structural Conflict",
        tastingNotes: "Intense and full-bodied. Dominated by notes of class struggle, historical materialism, and structural contradictions. Leaves a long-lasting aftertaste of labor-value and the critique of capital.",
        sideEffects: "Prone to dogmatic intoxication, blindness to the self-regulating capacity of markets, and a tendency toward central planning bureaucratization.",
        descripcion_corta: "Systemic critique of capital, social classes, and surplus value."
      },
      feminista: {
        id: "feminista",
        nombre: "Feminist",
        fundador: "Silvia Federici & Marilyn Waring (1980)",
        color: "#bd777a",
        abv: "75% Vol. Social Reproduction",
        tastingNotes: "Earthy and comforting. Base notes of unpaid reproductive work, care economics, and the deconstruction of the public/private boundary. Highly balanced.",
        sideEffects: "Sometimes dilutes short-term aggregated macroeconomic modeling; can cause paralysis when immediate fiscal balances are demanded in market economies.",
        descripcion_corta: "Visibility of domestic care work and social reproduction."
      },
      ecologica: {
        id: "ecologica",
        nombre: "Ecological",
        fundador: "Kate Raworth & Nicholas Georgescu-Roegen (2012)",
        color: "#2c5e3b",
        abv: "80% Vol. Biophysical Boundaries",
        tastingNotes: "Herbaceous and refreshing. Aromas of social thermodynamics, ecological boundaries, and circular economics (Donut). Firm stance on social foundations and ecological ceilings.",
        sideEffects: "Risk of involuntary welfare stagnation if degrowth is not paired with impeccable institutional redistribution; rejects nominal growth.",
        descripcion_corta: "Economics embedded in the biosphere and social foundations."
      },
      tradicion_desarrollista: {
        id: "tradicion_desarrollista",
        nombre: "Developmentalist",
        fundador: "Ha-Joon Chang & Friedrich List (1841)",
        color: "#c8350d",
        abv: "85% Vol. Industrial Sovereignty",
        tastingNotes: "Dense and persistent. Strong notes of infant industry protection, productive catching-up, subsidies, and import regulations. A slow-aging, heavy spirit.",
        sideEffects: "High reliance on state capability. Excessive consumption leads to rent-seeking, corporate capture, and subsidized industrial parasitism.",
        descripcion_corta: "Industrial planning and development of local capabilities."
      },
      keynesiana: {
        id: "keynesiana",
        nombre: "Keynesian",
        fundador: "John Maynard Keynes (1936)",
        color: "#86ad34",
        abv: "70% Vol. Fiscal Stabilization",
        tastingNotes: "Effervescent and stimulating. Rich notes of aggregate demand, entrepreneurial drives, and countercyclical fiscal policy. Engineered to warm up frozen economies.",
        sideEffects: "Severe hangover of accumulated public debt, long-term inflationary pressures if stimulus exceeds potential output, and a tendency to ignore aggregate supply.",
        descripcion_corta: "Countercyclical demand management and animal spirits."
      },
      institucionalista: {
        id: "institucionalista",
        nombre: "Institutionalist",
        fundador: "Douglass North & Elinor Ostrom (1920)",
        color: "#579ea4",
        abv: "65% Vol. Common Governance",
        tastingNotes: "Complex and structured. Notes of rules of the game, transaction costs, and polycentric collective agreements to manage the commons. Highly balanced and integrative.",
        sideEffects: "Difficulty in formalizing and mathematically modeling its dynamics; tends toward empirical descriptions over rapid actions during crises.",
        descripcion_corta: "Analysis of rules, contracts, and polycentric governance of commons."
      },
      estado_emprendedor: {
        id: "estado_emprendedor",
        nombre: "Entrepreneurial State",
        fundador: "Mariana Mazzucato (2013)",
        color: "#df7713",
        abv: "75% Vol. Strategic Innovation",
        tastingNotes: "Bright and fruity. Pronounced aromas of daring innovation missions, high-risk initial public investment, and the active shaping/creation of new technological markets.",
        sideEffects: "Risks of socializing losses and privatizing gains if contracts are poorly designed; prone to backing the wrong technological winners.",
        descripcion_corta: "High-risk public venture investment and innovation missions."
      },
      conductista: {
        id: "conductista",
        nombre: "Behavioral",
        fundador: "Daniel Kahneman & Richard Thaler (2008)",
        color: "#bd777a",
        abv: "60% Vol. Cognitive Biases",
        tastingNotes: "Aromatic and subtle. Strong notes of choice architecture, nudges, and predictable irrationalities. Extremely nuanced and micro-focused.",
        sideEffects: "Excessive use can degenerate into manipulative libertarian paternalism; assumes that individual changes are sufficient to cure structural systemic failures.",
        descripcion_corta: "Heuristics, biases, and real-world choice architecture."
      },
      clasica: {
        id: "clasica",
        nombre: "Classical",
        fundador: "Adam Smith & David Ricardo (1776)",
        color: "#5d7298",
        abv: "80% Vol. Natural Liberty",
        tastingNotes: "Dry, clean, and timeless. Aromas of division of labor, comparative advantage, the invisible hand, and the bedrock of free trade. Highly aromatic.",
        sideEffects: "Completely ignores the biophysical limits of the biosphere and cyclical demand crises; tends to underestimate the conflict inherent in wealth distribution.",
        descripcion_corta: "Division of labor, free trade, and capital accumulation."
      },
      neoclasica: {
        id: "neoclasica",
        nombre: "Neoclassical",
        fundador: "Léon Walras & Alfred Marshall (1870)",
        color: "#2d2651",
        abv: "85% Vol. Marginal Utility",
        tastingNotes: "Crystalline and geometric. Notes of mathematical optimization, marginal utility, and general equilibrium of market prices. A high-purity mathematical distillate.",
        sideEffects: "Causes chronic detachment from real social behavior due to hyper-rational assumptions (Homo Economicus); severe disorientation in the face of natural monopolies.",
        descripcion_corta: "Mathematical optimization of rational agents and general equilibrium."
      },
      austriaca: {
        id: "austriaca",
        nombre: "Austrian",
        fundador: "Friedrich Hayek & Ludwig von Mises (1871)",
        color: "#c8350d",
        abv: "90% Vol. Radical Individualism",
        tastingNotes: "Dry and extremely high-proof. Pure notes of spontaneous order, dispersed knowledge, and the impossibility of centralized economic calculation. Highly volatile.",
        sideEffects: "Hangover of state paralysis in the face of massive externalities (like climate change); ideological blindness that rejects public provision of common goods.",
        descripcion_corta: "Dispersed knowledge, spontaneous order, and free market."
      },
      schumpeteriana: {
        id: "schumpeteriana",
        nombre: "Schumpeterian",
        fundador: "Joseph Schumpeter (1942)",
        color: "#f9c000",
        abv: "80% Vol. Creative Destruction",
        tastingNotes: "Effervescent, sharp, and acidic. Dominated by notes of disruptive innovation, the heroic entrepreneur, and accelerated cycles of technological obsolescence (creative destruction).",
        sideEffects: "Excessive tolerance of temporary monopolies under the guise of innovation; can neglect the social precarity caused by technological unemployment.",
        descripcion_corta: "Disruptive innovation and evolutionary cycles of markets."
      }
    },
    cocteles: [
      {
        id: "martillo_dialectico",
        nombre: "Dialectical Hammer",
        descripcion: "Specifically engineered to address the Structural Inequality dossier. An earthy, dense, and intensely intoxicating drink exposing the power asymmetries of capital.",
        intensidad: "Strong (Specialty)",
        colorPredominante: "#8c2323",
        ingredientes: { marxista: 55, feminista: 25, keynesiana: 20 },
        vectores: { x: "Strong State Intervention", y: "Maximum Equity" },
        tastingNotes: "Heavy body with notes of democratic socialization of production, an earthy core of remunerated domestic care work, and an ebullient countercyclical stabilization finish.",
        sideEffects: "High collectivist purity. May cause rigidity in planning committees and blindness to decentralized individual market choices.",
        riesgosSistemicos: "Abrupt erosion of private investment incentives, heavy state bureaucratization, and structural allocation inefficiencies."
      },
      {
        id: "libertad_liquida",
        nombre: "Liquid Liberty",
        descripcion: "Designed to tackle Runaway Inflation and regulatory choking. A crystalline, ultra-dry, and highly volatile spirit celebrating the spontaneous coordination of free choices.",
        intensidad: "Extreme",
        colorPredominante: "#c8350d",
        ingredientes: { austriaca: 50, clasica: 30, neoclasica: 20 },
        vectores: { x: "Absolute Free Market", y: "Productivity & Growth" },
        tastingNotes: "Sharp aroma of sound money untouched by central banking, crisp taste of spontaneous market clearing, and a dry, tax-free finish.",
        sideEffects: "Pure laissez-faire concentration. Induces absolute blindness to negative externalities and state paralysis during massive systemic shocks.",
        riesgosSistemicos: "Severe depletion of common public goods, collapse of the social safety net, and acute vulnerability to unregulated corporate monopolies."
      },
      {
        id: "socialdemocracia_nordica",
        nombre: "Nordic Socialdemocracy",
        descripcion: "Formulated to buffer urban gentrification and the Housing Crisis. A noble blend that integrates market-driven efficiency with a robust, universal welfare state safety net.",
        intensidad: "Moderate",
        colorPredominante: "#579ea4",
        ingredientes: { keynesiana: 40, institucionalista: 30, tradicion_desarrollista: 20, feminista: 10 },
        vectores: { x: "Social Coordination / Regulator State", y: "Social Equity & Stability" },
        tastingNotes: "Smooth, bittersweet profile of a regulated market, combined with herbal notes of strategic public housing and a solid countercyclical tax redistribution.",
        sideEffects: "Acquired taste of high tax burden. Vulnerability to global capital flight and regulatory capture if economic parameters are misaligned.",
        riesgosSistemicos: "Chronic taxpayer fatigue, institutional administrative bloating, and sensitivity to speculative international capital shocks."
      },
      {
        id: "silicon_valley_sour",
        nombre: "Silicon Valley Sour",
        descripcion: "Designed to navigate the massive shocks of AI and Automation. An effervescent elixir seeking to steer creative destruction through daring state-led technological missions.",
        intensidad: "Strong",
        colorPredominante: "#f9c000",
        ingredientes: { schumpeteriana: 45, estado_emprendedor: 35, neoclasica: 20 },
        vectores: { x: "Public-Private Co-shaping", y: "Growth & Innovation" },
        tastingNotes: "Bubbly acidity of technological innovation and public strategic venture missions, rounded by a clean neoclassical microeconomic optimization finish.",
        sideEffects: "High vulnerability to asset bubbles. Can lead to extreme social tolerance for temporary tech monopolies under the guise of innovation.",
        riesgosSistemicos: "Massive socialization of private venture losses, privatization of state-funded patent commons, and severe analog labor displacement."
      },
      {
        id: "equilibrio_esteril",
        nombre: "Sterile Equilibrium",
        descripcion: "Formulated as a cold analytical drink reflecting the regulatory boundaries of Digital Monopolies. Crystalline, geometric, and mathematically pure.",
        intensidad: "Strong",
        colorPredominante: "#2d2651",
        ingredientes: { neoclasica: 80, conductista: 20 },
        vectores: { x: "Rational Modeling / Free Market", y: "Efficient Allocation" },
        tastingNotes: "Uncompromising marginal utility and optimal indifference curves, topped with a micro-dose of cognitive heuristic biases.",
        sideEffects: "Severe detachment from empirical friction. Hyper-rational assumptions fail to model Platform Monopolies with compounding network effects.",
        riesgosSistemicos: "Regulatory paralysis in complex real-world crises, reducing society to unrealistic and rigid mathematical parameters."
      },
      {
        id: "elixir_bien_comun",
        nombre: "Elixir of the Common Good",
        descripcion: "Created to heal the wounds of Ecological Collapse. An organic, regenerative mixture designed to protect biophysical planetary ceilings and social foundations.",
        intensidad: "Light",
        colorPredominante: "#2c5e3b",
        ingredientes: { institucionalista: 50, ecologica: 30, feminista: 20 },
        vectores: { x: "Polycentric Self-Governance", y: "Social Boundaries & Sustainability" },
        tastingNotes: "Earthy, mossy aromas of Donut circular limits, complex polycentric local governance of the commons, and a sustainable care finish.",
        sideEffects: "Zero nominal GDP growth expansion. Demands significant civic time and dedication, slowing down industrial-scale execution.",
        riesgosSistemicos: "Scale inefficiencies in competing against global industrial export powers and slow response during highly centralized emergencies."
      },
      {
        id: "destilado_desarrollista",
        nombre: "Developmental Distillate",
        descripcion: "Designed to address the high-tension Globalization vs Sovereignty dilemma. A dense, robust spirit focused on industrial policy and domestic catching-up.",
        intensidad: "Strong",
        colorPredominante: "#c8350d",
        ingredientes: { tradicion_desarrollista: 60, estado_emprendedor: 30, institucionalista: 10 },
        vectores: { x: "Industrial Supply Planning", y: "Productivity & Catching-up" },
        tastingNotes: "Persistent, bitter notes of infant industry tariff protections, bold state-led developmental projects, and clear institutional rules.",
        sideEffects: "Heavy corporatist hangover. Risk of protecting inefficient, rent-seeking local companies that refuse to face international competition.",
        riesgosSistemicos: "Private capture of state developmental funds, chronic tariff trade wars, and market inefficiencies under long-term protection."
      },
      {
        id: "ponche_gran_crisis",
        nombre: "Great Crisis Punch",
        descripcion: "Formulated to stabilize frozen economies during the Stability vs Stimulus Dilemma. A comforting, warming drink to inject demand and manage public panic.",
        intensidad: "Moderate",
        colorPredominante: "#86ad34",
        ingredientes: { keynesiana: 60, institucionalista: 20, conductista: 20 },
        vectores: { x: "Targeted Aggregate Demand", y: "Short-Cycle Stability" },
        tastingNotes: "Warm, sweet spices of countercyclical fiscal expansion, structured institutional governance, and choice architecture to buffer financial panic.",
        sideEffects: "Insatiable appetite for public debt and risk of long-term structural inflationary overheating if stimulus overrides potential output.",
        riesgosSistemicos: "Chronic demand-pull inflation, erosion of long-term saving incentives, and dependency on state monetary life support."
      }
    ],
    problemas: [
      {
        id: "inflacion",
        titulo: "Runaway Inflation",
        pregunta: "How to stabilize purchasing power in the face of an abrupt spike in prices?",
        dossier: [
          { escuela: "Austrian", remedio: "Stop monetary expansion instantly, cut public spending to the bone, and restore sound money discipline free of political interference.", toxicidad: "Increases short-term unemployment and weakens the social safety net in the middle of a recession.", ph: 15 },
          { escuela: "Keynesian", remedio: "Apply direct windfall taxes on speculative profits, manage selective demand, and sustain subsidies for essential basic goods.", toxicidad: "Can lead to chronic public debt and deter capital investment if tax rates are poorly calculated.", ph: 65 },
          { escuela: "Marxist", remedio: "Establish strict price controls and democratic caps on corporate margins, dismantling monopolies in distribution.", toxicidad: "Generates immediate shortages if the productive apparatus continues to operate under private market profitability rules.", ph: 90 }
        ]
      },
      {
        id: "desigualdad",
        titulo: "Structural Inequality",
        pregunta: "What should be done about the alarming wealth and income gap?",
        dossier: [
          { escuela: "Marxist", remedio: "Socialize the main means of production, expropriate parasitic financial rent-seeking, and equalize wages based on labor-value.", toxicidad: "Abolition of the free capital market, causing flight of assets in open, uncoordinated economies.", ph: 95 },
          { escuela: "Feminist", remedio: "Revalue and remunerate reproductive care work, guaranteeing universal public care services and support.", toxicidad: "Requires a massive fiscal restructuring that severely challenges traditional accounting systems.", ph: 80 },
          { escuela: "Neoclassical", remedio: "Foster human capital through targeted educational subsidies in high-demand fields and ensure frictionless labor competition.", toxicidad: "Treats symptoms rather than causes: ignores dynastic wealth accumulation and structural power imbalances.", ph: 35 }
        ]
      },
      {
        id: "ia_automatizacion",
        titulo: "AI and Automation",
        pregunta: "How to mitigate the impact of massive job replacement by artificial intelligence?",
        dossier: [
          { escuela: "Schumpeterian", remedio: "Embrace creative destruction in the labor market, letting obsolete jobs go, while funding highly complex tech startups.", toxicidad: "Causes severe periods of exclusion and precarity for older workers who cannot retrain in time.", ph: 30 },
          { escuela: "Entrepreneurial State", remedio: "Launch public innovation missions to direct AI toward human complementation, claiming royalties for public-funded research.", toxicidad: "Requires an agile analytical state bureaucracy which is rare compared to fast-moving technology corporations.", ph: 70 },
          { escuela: "Feminist", remedio: "Drastically reduce working hours and redirect AI profits to fund and value social, human-centered care sectors.", toxicidad: "Reduces short-term financial returns and demands international tax coordination to avoid offshoring.", ph: 85 }
        ]
      },
      {
        id: "vivienda",
        titulo: "Housing Crisis",
        pregunta: "How to resolve urban gentrification and housing unaffordability?",
        dossier: [
          { escuela: "Neoclassical", remedio: "Liberalize zoning, remove municipal red tape, and expand supply to let the housing market reach an equilibrium price.", toxicidad: "In the short term, it fuels speculative developers and accelerates the displacement of vulnerable local communities.", ph: 20 },
          { escuela: "Institutionalist", remedio: "Empower community land trusts, regulate rents through polycentric local covenants, and manage municipal cooperative housing.", toxicidad: "Demands rigorous and adaptive community involvement, which can slow down large-scale housing projects.", ph: 60 },
          { escuela: "Developmentalist", remedio: "Centralized state planning to directly build large-scale strategic public housing estates and regulate mortgage lending.", toxicidad: "Creates rigid allocation bureaucracies and highly uniform, unappealing architectural designs.", ph: 80 }
        ]
      },
      {
        id: "monopolios",
        titulo: "Digital Monopolies",
        pregunta: "How to handle tech platforms that capture societal data and digital traffic?",
        dossier: [
          { escuela: "Austrian", remedio: "Do not intervene. If a monopoly abuses prices, creative forces will naturally seek alternatives to bypass it, breaking the lock-in.", toxicidad: "Ignores absolute barriers to entry and massive network effects that make data capture virtually irreversible.", ph: 10 },
          { escuela: "Neoclassical", remedio: "Deploy traditional antitrust legislation to break up tech giants and restore a perfectly competitive marketplace.", toxicidad: "Clashes with the intrinsic technical efficiency of unified, centralized digital networks.", ph: 45 },
          { escuela: "Entrepreneurial State", remedio: "Nationalize digital infrastructure and database commons, converting them into neutral public utilities governed democratically.", toxicidad: "Risks information centralization under state control and loss of agile user-interface private innovation.", ph: 85 }
        ]
      },
      {
        id: "ecocrisis",
        titulo: "Ecological Collapse",
        pregunta: "How to confront biosphere degradation and accelerated climate warming?",
        dossier: [
          { escuela: "Ecological", remedio: "Enforce Donut economics. Impose non-negotiable biophysical caps on extraction and plan resource reduction through degrowth.", toxicidad: "Directly collides with the structural need for growth in debt-based capitalist systems.", ph: 90 },
          { escuela: "Neoclassical", remedio: "Internalize externalities by placing a global tax on carbon and facilitating a regulated cap-and-trade market.", toxicidad: "Assumes the biosphere can be fully commodified, underestimating irreversible tipping points.", ph: 40 },
          { escuela: "Entrepreneurial State", remedio: "Mobilize a massive Green New Deal: high-risk public venture investment to ignite the clean energy transition.", toxicidad: "Bet on material growth (even with a green finish) without solving the overextraction of minerals and resources.", ph: 75 }
        ]
      }
    ],
    preguntas: [
      {
        id: "q1",
        fase: 1,
        dimension: "epistemologia",
        texto: "How do you interpret major social and economic crises in history?",
        opciones: [
          { texto: "Every major crisis boils down to a single primary cause (whether class struggle, state overregulation, or individual greed).", tipo: "monismo" },
          { texto: "Social systems are far too complex; any attempt to explain them through a single cause is a dangerous oversimplification. Truth is always fragmented and contextual.", tipo: "pluralismo" }
        ]
      },
      {
        id: "q2",
        fase: 1,
        dimension: "analista",
        texto: "What should be the role of the intellectual or economic planner in society?",
        opciones: [
          { texto: "The analyst's role is to build a coherent conceptual framework and defend it with scientific rigor to guide collective action without political vacillation.", tipo: "monismo" },
          { texto: "The analyst's role is to doubt their own frameworks, adapt tools to the specific problem, and accept that contextual patches are better than total dogmas.", tipo: "pluralismo" }
        ]
      },
      {
        id: "q3",
        fase: 1,
        dimension: "error",
        texto: "When a national economic policy fails completely, how do you explain it?",
        opciones: [
          { texto: "It is usually due to political deviations in its application, sabotage by opposing interests, or a lack of purity in its actual execution.", tipo: "monismo" },
          { texto: "It proves that the theory utilized had strict boundaries of context and timing; reality changes and dogmas must be discarded if they fail empirically.", tipo: "pluralismo" }
        ]
      },
      {
        id: "q4",
        fase: 2,
        dimension: "coordinacion",
        texto: "What is your view on the market as a coordinator of human societies?",
        opciones: [
          { texto: "It is a spontaneous, decentralized order of infinite utility for transmitting dispersed information. State interference blinds the system.", pesos: { austriaca: 4, clasica: 3, neoclasica: 2 } },
          { texto: "It is highly efficient under competition, but suffers from information failures, monopolies, and externalities that demand rigorous state regulation.", pesos: { neoclasica: 4, keynesiana: 3, conductista: 2 } },
          { texto: "It does not operate in a vacuum. It depends entirely on the institutional matrix, norms of behavior, rules of the game, and governance of the commons.", pesos: { institucionalista: 4, tradicion_desarrollista: 3 } },
          { texto: "It is a site of structural power asymmetry, labor exploitation, and surplus value expropriation that must be systemically overcome.", pesos: { marxista: 4, feminista: 3 } }
        ]
      },
      {
        id: "q5",
        fase: 2,
        dimension: "estado",
        texto: "What should be the fundamental function of the State within the economy?",
        opciones: [
          { texto: "Limit itself to the minimum: protect property rights, ensure the rule of law, enforce contracts, and avoid distorting market incentives.", pesos: { austriaca: 4, clasica: 4 } },
          { texto: "Act as a fiscal regulator and countercyclical stabilizer, deploying public spending to sustain employment during depressions.", pesos: { keynesiana: 4, neoclasica: 3 } },
          { texto: "Be a daring engine of high-risk strategic innovation, actively creating new markets and technological frontiers through missions.", pesos: { estado_emprendedor: 4, tradicion_desarrollista: 4, schumpeteriana: 2 } },
          { texto: "Dismantle the capital accumulation logic and democratically plan human priorities based on biophysical limits and social welfare.", pesos: { marxista: 4, ecologica: 3, feminista: 3 } }
        ]
      },
      {
        id: "q6",
        fase: 2,
        dimension: "justicia",
        texto: "How do you interpret the concentration of wealth and economic inequality?",
        opciones: [
          { texto: "It is the natural reflection of the marginal value of productivity. Confiscatory taxes deter saving and productive investment.", pesos: { neoclasica: 4, austriaca: 3, clasica: 2 } },
          { texto: "It is a macroeconomic drag that depresses the propensity to consume and breeds social unrest. Progressive taxation is required.", pesos: { keynesiana: 4, conductista: 3 } },
          { texto: "It stems from the societal invisibility of unpaid domestic care work and the relentless, unpaid exploitation of nature's metabolic flows.", pesos: { feminista: 4, ecologica: 3 } },
          { texto: "It is the inevitable consequence of labor surplus value theft inherent in the private ownership of productive assets. Socialization is the cure.", pesos: { marxista: 4, institucionalista: 2 } }
        ]
      },
      {
        id: "q7",
        fase: 2,
        dimension: "humano",
        texto: "How would you define human behavior and rationality when making choices?",
        opciones: [
          { texto: "A fully rational agent who processes available information consistently to individually optimize their own utility and welfare.", pesos: { neoclasica: 4, clasica: 3 } },
          { texto: "A subject bound by bounded rationality, exposed to predictable cognitive biases, and highly sensitive to choice architecture design.", pesos: { conductista: 4, institucionalista: 3 } },
          { texto: "A dynamic agent who acts purposefully but subjectively, with fragmented and dispersed knowledge discovered through free action.", pesos: { austriaca: 4, schumpeteriana: 2 } },
          { texto: "An interdependent being, structurally conditioned by social class, gender roles, and vital relational and ecological matrices.", pesos: { feminista: 4, marxista: 4, ecologica: 3 } }
        ]
      },
      {
        id: "q8",
        fase: 2,
        dimension: "motor",
        texto: "What do you consider the primary force driving material progress and change?",
        opciones: [
          { texto: "The accumulation of productive national capital and the strategic fostering and protection of domestic manufacturing capabilities.", pesos: { tradicion_desarrollista: 4, clasica: 3 } },
          { texto: "Creative destruction catalyzed by daring entrepreneurs introducing technological innovations that liquidate old market monopolies.", pesos: { schumpeteriana: 4, austriaca: 3 } },
          { texto: "High-risk strategic venture investments led by the state, enabling massive technological frontiers like internet, GPS, or space travel.", pesos: { estado_emprendedor: 4, schumpeteriana: 3 } },
          { texto: "Deliberate restructuring of the social metabolism to stay within the planet's biophysical boundaries, sustaining social reproduction.", pesos: { ecologica: 4, feminista: 3 } }
        ]
      },
      {
        id: "q9",
        fase: 2,
        dimension: "propiedad",
        texto: "Which structure of property ownership do you consider most just and efficient?",
        opciones: [
          { texto: "Private property, strongly protected to secure robust individual incentives and avoid tragedies of the commons.", pesos: { clasica: 4, neoclasica: 3 } },
          { texto: "Polycentric governance of local commons, sustainably self-managed through robust, collectively agreed rules.", pesos: { institucionalista: 4, ecologica: 3 } },
          { texto: "State democratic ownership and control of strategic sectors and natural resources to dismantle parasitic private gains.", pesos: { marxista: 4, tradicion_desarrollista: 3 } },
          { texto: "Horizontal cooperative networks centered on care economics, local sovereignty, and ecological restoration.", pesos: { feminista: 4, ecologica: 4 } }
        ]
      },
      {
        id: "q10",
        fase: 3,
        dimension: "estimulo",
        texto: "Stability vs. Stimulus Dilemma: What should be prioritized in a recession?",
        izquierda: {
          titulo: "Stability / Rigor",
          texto: "Absolute fiscal discipline, strict control of inflation and money supply, tolerating temporary unemployment as a necessary market purge.",
          pesos: { austriaca: 3, neoclasica: 2, clasica: 2 }
        },
        derecha: {
          titulo: "Stimulus / Employment",
          texto: "Guarantee full employment and stimulus injections through social and monetary investment, tolerating fiscal deficit and inflation risks.",
          pesos: { keynesiana: 4, estado_emprendedor: 2 }
        }
      },
      {
        id: "q11",
        fase: 3,
        dimension: "donut",
        texto: "Growth vs. Boundaries Dilemma: What should guide our productive engine?",
        izquierda: {
          titulo: "Expansion / Productivity",
          texto: "Accelerate industrial competitiveness, scale innovation, and maximize material output to ensure long-term expansion of wealth.",
          pesos: { schumpeteriana: 3, neoclasica: 2, tradicion_desarrollista: 2 }
        },
        derecha: {
          titulo: "Boundaries / Regeneration",
          texto: "Strictly align the material footprint within non-negotiable biophysical thresholds, prioritizing reproductive and care economies.",
          pesos: { ecologica: 4, feminista: 3 }
        }
      },
      {
        id: "q12",
        fase: 3,
        dimension: "globalizacion",
        texto: "Globalization vs. Sovereignty Dilemma: How should we relate to global markets?",
        izquierda: {
          titulo: "Global Openness",
          texto: "Full tariff deregulation, seamless cross-border trade, and absolute integration into highly efficient global value chains.",
          pesos: { clasica: 3, neoclasica: 2, austriaca: 2 }
        },
        derecha: {
          titulo: "National Sovereignty",
          texto: "Strategic industrial and trade sovereignty. Protect domestic manufacturing capabilities and regulate hostile global capital flows.",
          pesos: { tradicion_desarrollista: 4, estado_emprendedor: 2, marxista: 2 }
        }
      }
    ],
    perfiles_cognitivos: {
      monismo_doctrinal: {
        nombre: "Doctrinal Monism",
        subtitulo: "The Coherence of a Unified Principle",
        descripcion: "Your mind operates with the deductive rigor of a unified conceptual framework. Like Isaiah Berlin's monist, you 'know one big thing' and organize complex economic phenomena under robust, consistent principles. In your pursuit of conceptual coherence, you prioritize a single, pure concept of liberty: either absolute Negative Liberty (freedom from state coercion and interference, enabling spontaneous markets) or collective Positive Liberty (structured state planning to build active human capabilities). While this axiom-driven focus grants you formidable strategic clarity and a powerful political identity, it does so at the cost of simplifying the deep ethical tensions of the social fabric.",
        virtud: "Unwavering intellectual identity, high-precision deductive reasoning, and extraordinary strategic clarity in the face of complex dilemmas.",
        resaca: "High susceptibility to tunnel vision. If anchored in negative liberty, you risk ignoring social precarity and the erosion of the public commons; if oriented toward positive liberty, you emerge prone to political messianism, orthodox ideological sectarianism, and a paternalistic bureaucracy that stifles individual agency."
      },
      pluralismo_sistemico: {
        nombre: "Systemic Pluralism",
        subtitulo: "The Adaptive Humility of Complexity",
        descripcion: "Your mind operates with the adaptive flexibility of one who recognizes that the social world is woven from multiple legitimate truths in permanent, inevitable tension. Guided by Berlin's pluralism, you understand that Negative Liberty (individual non-interference) and Positive Liberty (collective capability development) are both vital but often incompatible values, and that no scientific super-formula can fuse them without ethical sacrifices. You navigate these trade-offs with pragmatism and humility, choosing and adjusting your analytical tools according to the scale of the concrete problem.",
        virtud: "High-level epistemological flexibility, natural immunity to doctrinal orthodoxy, and deep intellectual resilience through historical shifts.",
        resaca: "Vulnerability to analytical overthinking and decision paralysis. Understanding that every choice demands sacrificing one form of liberty for another, you risk falling into political inoperancy and a profound solitude due to the lack of a rigid, comfortable ideological anchor."
      },
      monismo_eclectico: {
        nombre: "Eclectic Monism (In Tension)",
        subtitulo: "The Restless Search for Coherence",
        descripcion: "You operate under a fascinating cognitive friction. Your intellectual temperament longs to discover a single, systematic, and unifying truth that resolves society's structural contradictions. Yet, your analytical sensitivity prevents you from ignoring that both the Negative Liberty of free markets and the Positive Liberty of state planning pull at you with equal ethical and empirical strength. This keeps you at a permanent theoretical crossroads, trying to reconcile under one logical roof principles that history has shown to exist in irreductible conflict.",
        virtud: "Healthy intellectual skepticism, rejection of self-complacent dogmas, and a driving force for constant, self-critical conceptual deepening.",
        resaca: "Recurrent cognitive dissonance. A persistent feeling of intellectual instability or inconsistency when shifting between incompatible poles, which can alienate members of pure, orthodox doctrines."
      },
      pluralismo_pragmatico: {
        nombre: "Camouflaged Pluralism (Pragmatic Pluralism)",
        subtitulo: "Doctrine Under the Guise of Openness",
        descripcion: "You formally project an open, empirical, and highly tolerant intellectual discourse, perceiving yourself as a flexible pluralist free from dogmatic handcuffs. Nonetheless, your actual political choices and your scoring on high-tension dilemmas reveal an unyielding, coherent, and highly concentrated anchor in a single concept of liberty (either pure non-interference or state capability coordination). You masterfully deploy the sophisticated language of pluralist flexibility to justify and operationalize an essentially monistic core.",
        virtud: "Exceptional strategic efficacy, combining the driving force of a unified doctrine with the diplomatic prestige of academic openness.",
        resaca: "Risk of tacit cognitive dissonance or involuntary epistemological hypocrisy—demanding flexibility, nuance, and concessions from other frameworks while your own hard core remains strictly non-negotiable."
      }
    },
    perfiles_cuadrantes: {
      Q1: {
        titulo: "Elixir of Critical Planning and Limits",
        descripcion: "Your center of gravity is anchored in a strong state as the guarantor of distributive justice and non-negotiable respect for the biosphere's limits. You reject the subordination of social reproduction and human life to corporate profit. You advocate for civic, gender, and environmental sovereignty.",
        afinidad: "Marxist, Feminist Care Economics, and Circular Ecological Economics."
      },
      Q2: {
        titulo: "Behavioral Heuristics and Nudges Liqueur",
        descripcion: "Your balance relies on a sutil regulatory state that intervenes through surgical choice architecture to correct market failures. You believe in consumer empowerment, nudging as a facilitator of fair decisions, and a design incorporating empathy for real-world human behavior.",
        afinidad: "Behavioral Economics and human-focused microeconomics."
      },
      Q3: {
        titulo: "Distillate of Industrial Mission and Stabilization",
        descripcion: "You prioritize a bold, coordinated alliance. For you, lasting progress stems from an entrepreneurial state that takes key technological risks and countercyclically directs industrial development. You believe in polycentric governance, active macroeconomics, and public mission-driven capabilities.",
        afinidad: "Keynesian, Developmentalist, and Mariana Mazzucato's Entrepreneurial State."
      },
      Q4: {
        titulo: "Nectar of Free Market and Spontaneous Order",
        descripcion: "Your center of gravity rests on the absolute defense of individual liberty and decentralized commerce. For you, the market free of political distortion is the only natural computer capable of coordinating dispersed knowledge through spontaneous prices. You believe in innovation and competitive disruption.",
        afinidad: "Austrian, Classical, and Neoclassical optimization."
      }
    },
    perfiles_concentracion: {
      monocultura: {
        riesgo: "⚠️ Acute Dogmatism",
        narrativa: "You possess outstanding ideological purity. Your doctrinal mixture is highly concentrated within a single school or dominant quadrant of thought, granting you exceptional logical consistency and a robust conceptual identity. However, your latent hangover is tunnel vision: a strong propensity for orthodoxy that can breed intellectual sectarianism, political tribalism when facing disagreement, and defensive blindness toward unexpected empirical anomalies that challenge your axioms."
      },
      sintetico: {
        riesgo: "⚖️ Decisional Friction",
        narrativa: "You have formulated a balanced, synthetic cocktail, blending theoretical schools with pragmatic adaptability. Your primary virtue is the capacity to weigh costs, externalities, and trade-offs with academic equanimity and civic balance. Your potential hangover is overthinking or decision paralysis due to excessive analytical deliberation before taking action on inevitable trade-offs."
      },
      disperso: {
        riesgo: "🌪️ Solitude of the Eclectic",
        narrativa: "Your mixture displays extreme theoretical dispersion. You are a civic taster of all shelves, completely immune to orthodox dogmas. While this grants you sovereign epistemological humility, your ideological hangover is political inoperancy: without a unified doctrinal anchor, you risk diluting your transformative force and failing to align with any organized coalition for collective change."
      }
    }
  }
};
