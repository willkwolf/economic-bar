/**
 * BAR DE ESCUELAS ECONÓMICAS - ELIXIRES DE LA RAZÓN
 * data.js - Fuente de verdad de la aplicación con soporte i18n dual (ES/EN)
 * 
 * Contiene la base de datos académica de las 12 escuelas, 8 cócteles,
 * 6 dossiers del boticario, 12 preguntas del test y los perfiles cognitivos.
 * Todo estructurado bajo un diccionario reactivo dual para evitar colisiones tipográficas.
 */

const GLOSSARY = {
  es: {
    // --- Conceptos fundamentales ---
    "plusvalor": "La diferencia entre lo que un trabajador produce y lo que le pagan. Es la ganancia que se queda el dueño de la empresa.",
    "plusvalía": "La diferencia entre lo que un trabajador produce y lo que le pagan. Es la ganancia que se queda el dueño de la empresa.",
    "monismo": "Creer que hay UNA sola explicación correcta para entender la economía o la sociedad.",
    "pluralismo": "Creer que hay VARIAS explicaciones válidas y que la mejor depende del contexto.",
    "trade-off": "Cuando elegir una cosa significa renunciar a otra. No se puede tener todo al mismo tiempo.",
    "trade-offs": "Cuando elegir una cosa significa renunciar a otra. No se puede tener todo al mismo tiempo.",
    "demanda agregada": "Todo lo que la gente, las empresas y el gobierno compran en un país durante un período.",
    "externalidad": "Un efecto (bueno o malo) que le ocurre a terceros cuando alguien hace algo. Ej: la contaminación de una fábrica afecta a los vecinos.",
    "externalidades": "Efectos (buenos o malos) que les ocurren a terceros cuando alguien hace algo. Ej: la contaminación de una fábrica afecta a los vecinos.",
    "biofísico": "Lo que tiene que ver con los recursos naturales del planeta: agua, aire, tierra, energía.",
    "biofísicos": "Lo que tiene que ver con los recursos naturales del planeta: agua, aire, tierra, energía.",
    "biosfera": "El conjunto de todos los ecosistemas del planeta donde existe la vida.",
    "contracíclico": "Gastar más cuando la economía va mal y ahorrar cuando va bien, para suavizar los altibajos.",
    "contracíclica": "Gastar más cuando la economía va mal y ahorrar cuando va bien, para suavizar los altibajos.",
    "epistemológico": "Relacionado con cómo sabemos lo que sabemos. Tiene que ver con las bases de nuestro conocimiento.",
    "epistemológica": "Relacionado con cómo sabemos lo que sabemos. Tiene que ver con las bases de nuestro conocimiento.",
    
    // --- Escuelas y teorías ---
    "mano invisible": "Idea de Adam Smith: cuando cada persona busca su beneficio, el mercado se organiza solo para beneficio de todos (en teoría).",
    "destrucción creativa": "Cuando una innovación nueva destruye industrias viejas. Ej: Netflix acabó con los videoclubs.",
    "catching-up": "Cuando un país menos desarrollado intenta alcanzar a los más avanzados en tecnología e industria.",
    "Homo Economicus": "Un modelo teórico que imagina a las personas como seres 100% racionales que siempre toman la mejor decisión. En la vida real, no somos así.",
    "nudging": "Pequeños cambios en cómo se presentan las opciones para que la gente tome mejores decisiones sin obligarla. Ej: poner la fruta antes que los dulces.",
    "laissez-faire": "Del francés: 'dejar hacer'. Política de no intervenir en la economía y dejar que el mercado funcione solo.",
    "orden espontáneo": "La idea de que el mercado se organiza solo sin que nadie lo planifique, a través de millones de decisiones individuales.",
    "economía del Donut": "Modelo de Kate Raworth: la economía debe funcionar entre un 'piso' de bienestar social y un 'techo' de límites del planeta.",

    // --- Términos de mercado ---
    "fallas de mercado": "Situaciones donde el mercado libre no logra repartir bien los recursos por sí solo.",
    "monopolio": "Cuando una sola empresa controla todo un mercado y no tiene competencia real.",
    "monopolios": "Cuando pocas empresas controlan todo un mercado y no tienen competencia real.",
    "oligopolio": "Cuando unas pocas empresas controlan la mayor parte de un mercado.",
    "oligopolios": "Cuando unas pocas empresas controlan la mayor parte de un mercado.",
    "aranceles": "Impuestos que un país cobra a los productos que llegan de otros países.",
    "costos de transacción": "Los gastos extra de hacer un trato: buscar información, negociar, y vigilar que se cumpla.",
    "ventaja comparativa": "La idea de que cada país debe producir aquello en lo que es relativamente mejor, y comprar lo demás.",
    "ventajas comparativas": "La idea de que cada país debe producir aquello en lo que es relativamente mejor, y comprar lo demás.",
    "utilidad marginal": "El beneficio extra que obtienes al consumir una unidad más de algo. La primera pizza sabe mejor que la quinta.",
    "equilibrio general": "Un modelo teórico donde todos los mercados de la economía están en balance al mismo tiempo.",

    // --- Términos de política ---
    "política fiscal": "Las decisiones del gobierno sobre impuestos y gasto público.",
    "política monetaria": "Las decisiones del banco central sobre la cantidad de dinero en circulación y las tasas de interés.",
    "déficit público": "Cuando el gobierno gasta más de lo que recauda en impuestos.",
    "déficit fiscal": "Cuando el gobierno gasta más de lo que recauda en impuestos.",
    "inflación": "Cuando los precios suben de manera generalizada y el dinero pierde valor de compra.",
    "recesión": "Cuando la economía de un país se contrae: se produce menos, se vende menos y hay más desempleo.",
    "capital humano": "Los conocimientos, habilidades y experiencia que tiene una persona y que le permiten trabajar y producir.",
    "bienes comunes": "Recursos que pertenecen a todos y nadie puede excluir a otros de usarlos. Ej: el aire, los océanos, un parque público.",
    "bienes públicos": "Servicios que benefician a todos y que el mercado por sí solo no produciría bien. Ej: defensa nacional, alumbrado público.",
    "PIB": "Producto Interno Bruto: el valor total de todo lo que se produce en un país durante un año.",
    "multiplicador": "Efecto en cadena: cuando el gobierno gasta $1, la economía puede crecer más de $1 porque ese dinero circula.",
    "efecto multiplicador": "Efecto en cadena: cuando el gobierno gasta $1, la economía puede crecer más de $1 porque ese dinero circula.",

    // --- Conceptos de distribución ---
    "desigualdad estructural": "Desigualdad que está incrustada en el sistema económico y social, no es casualidad ni mérito individual.",
    "gentrificación": "Cuando un barrio se 'mejora' pero los precios suben tanto que los vecinos originales ya no pueden vivir ahí.",
    "reproducción social": "Todo el trabajo (casi siempre no pagado) necesario para mantener la vida: cuidar niños, cocinar, limpiar, cuidar enfermos.",
    "trabajo de cuidados": "Actividades como cuidar niños, enfermos o ancianos, cocinar y mantener el hogar. Casi siempre lo hacen mujeres y no se paga.",
    "medios de producción": "Las herramientas, máquinas, fábricas y recursos que se necesitan para producir bienes y servicios.",
    "acumulación de capital": "El proceso por el cual la riqueza se concentra cada vez más en pocas manos.",

    // --- Términos institucionales ---
    "costos de transacción": "Los gastos extra de hacer un trato: buscar información, negociar, vigilar que se cumpla.",
    "policéntrico": "Un sistema con muchos centros de decisión (no uno solo), donde las comunidades locales se autogobiernan.",
    "policéntrica": "Un sistema con muchos centros de decisión (no uno solo), donde las comunidades locales se autogobiernan.",
    "gobernanza": "La forma en que se toman las decisiones y se ejercen las reglas en una sociedad o institución.",
    "instituciones": "Las reglas del juego de una sociedad: leyes, costumbres, normas y organizaciones que regulan cómo vivimos.",
    "captura de rentas": "Cuando empresas o grupos poderosos manipulan las reglas para obtener ganancias sin producir nada útil para la sociedad.",
    "captura rentista": "Cuando empresas o grupos poderosos manipulan las reglas para obtener ganancias sin producir nada útil para la sociedad.",

    // --- Conceptos ambientales ---
    "entropía": "Una ley de la física: la energía se degrada al usarla y no se puede reciclar al 100%. Todo proceso genera desperdicio.",
    "decrecimiento": "La idea de que los países ricos deberían producir y consumir menos para no destruir el planeta.",
    "límites planetarios": "Los topes naturales que la Tierra puede soportar sin colapsar: clima, biodiversidad, agua dulce, etc.",
    "metabolismo social": "Los flujos de materiales y energía que la sociedad extrae, transforma y devuelve a la naturaleza.",
    "huella ecológica": "La cantidad de recursos naturales que una persona, ciudad o país consume y los residuos que genera.",

    // --- Términos del test ---
    "sesgos cognitivos": "Errores sistemáticos en cómo pensamos y decidimos. Atajos mentales que nos llevan a conclusiones equivocadas.",
    "racionalidad acotada": "La idea de que las personas NO somos 100% racionales: tenemos información limitada, poco tiempo y emociones que influyen.",
    "disonancia cognitiva": "La incomodidad mental que sientes cuando tienes dos ideas que se contradicen entre sí.",
    "dogmatismo": "Aferrarse a una idea o creencia sin aceptar evidencia que la contradiga.",
    "ortodoxia": "Seguir estrictamente una doctrina o teoría sin permitir variaciones ni cuestionamientos."
  },
  en: {
    // --- Core concepts ---
    "surplus value": "The difference between what a worker produces and what they get paid. The profit the owner keeps.",
    "monism": "Believing there is ONE single correct explanation for understanding the economy or society.",
    "pluralism": "Believing there are MULTIPLE valid explanations and the best one depends on context.",
    "trade-off": "When choosing one thing means giving up another. You can't have everything at the same time.",
    "trade-offs": "When choosing one thing means giving up another. You can't have everything at the same time.",
    "aggregate demand": "Everything that people, businesses, and the government buy in a country during a period.",
    "externality": "A side effect (good or bad) that happens to others when someone does something. E.g.: a factory's pollution affects neighbors.",
    "externalities": "Side effects (good or bad) that happen to others when someone does something. E.g.: a factory's pollution affects neighbors.",
    "biophysical": "Related to the planet's natural resources: water, air, land, energy.",
    "biosphere": "The set of all ecosystems on the planet where life exists.",
    "countercyclical": "Spending more when the economy is bad and saving when it's good, to smooth out the ups and downs.",
    "epistemological": "Related to how we know what we know. It's about the foundations of our knowledge.",

    // --- Schools and theories ---
    "invisible hand": "Adam Smith's idea: when each person pursues their own interest, the market organizes itself for everyone's benefit (in theory).",
    "creative destruction": "When a new innovation destroys old industries. E.g.: Netflix wiped out video rental stores.",
    "catching-up": "When a less developed country tries to reach the level of more advanced ones in technology and industry.",
    "Homo Economicus": "A theoretical model imagining people as 100% rational beings who always make the best decision. In real life, we're not like that.",
    "nudging": "Small changes in how options are presented to help people make better decisions without forcing them. E.g.: placing fruit before candy.",
    "laissez-faire": "French for 'let it be'. A policy of not intervening in the economy and letting the market work on its own.",
    "spontaneous order": "The idea that the market organizes itself without anyone planning it, through millions of individual decisions.",
    "Donut economics": "Kate Raworth's model: the economy should work between a 'floor' of social well-being and a 'ceiling' of planetary limits.",

    // --- Market terms ---
    "market failures": "Situations where the free market fails to distribute resources well on its own.",
    "monopoly": "When a single company controls an entire market and has no real competition.",
    "monopolies": "When few companies control an entire market and have no real competition.",
    "oligopoly": "When a few companies control most of a market.",
    "tariffs": "Taxes that a country charges on products coming from other countries.",
    "transaction costs": "The extra costs of making a deal: finding information, negotiating, and making sure it's honored.",
    "comparative advantage": "The idea that each country should produce what it's relatively best at, and buy everything else.",
    "marginal utility": "The extra benefit you get from consuming one more unit of something. The first pizza tastes better than the fifth.",
    "general equilibrium": "A theoretical model where all markets in the economy are balanced at the same time.",

    // --- Policy terms ---
    "fiscal policy": "Government decisions about taxes and public spending.",
    "monetary policy": "Central bank decisions about the amount of money in circulation and interest rates.",
    "public deficit": "When the government spends more than it collects in taxes.",
    "fiscal deficit": "When the government spends more than it collects in taxes.",
    "inflation": "When prices rise across the board and money loses its purchasing power.",
    "recession": "When a country's economy shrinks: less is produced, less is sold, and more people are unemployed.",
    "human capital": "The knowledge, skills, and experience a person has that allows them to work and produce.",
    "commons": "Resources that belong to everyone and no one can be excluded from using. E.g.: air, oceans, a public park.",
    "common goods": "Resources that belong to everyone and no one can be excluded from using. E.g.: air, oceans, a public park.",
    "public goods": "Services that benefit everyone and that the market alone wouldn't produce well. E.g.: national defense, street lighting.",
    "GDP": "Gross Domestic Product: the total value of everything produced in a country during a year.",
    "multiplier effect": "Chain reaction: when the government spends $1, the economy can grow more than $1 because that money circulates.",

    // --- Distribution concepts ---
    "structural inequality": "Inequality embedded in the economic and social system; it's not coincidence or individual merit.",
    "gentrification": "When a neighborhood 'improves' but prices rise so much that original residents can no longer afford to live there.",
    "social reproduction": "All the (usually unpaid) work needed to sustain life: caring for children, cooking, cleaning, caring for the sick.",
    "care work": "Activities like caring for children, the sick, or the elderly, cooking, and maintaining the home. Almost always done by women and unpaid.",
    "means of production": "The tools, machines, factories, and resources needed to produce goods and services.",
    "capital accumulation": "The process by which wealth concentrates more and more in fewer hands.",

    // --- Institutional terms ---
    "polycentric": "A system with many decision-making centers (not just one), where local communities govern themselves.",
    "governance": "The way decisions are made and rules are enforced in a society or institution.",
    "institutions": "The rules of the game in a society: laws, customs, norms, and organizations that regulate how we live.",
    "rent-seeking": "When companies or powerful groups manipulate rules to gain profits without producing anything useful for society.",

    // --- Environmental concepts ---
    "entropy": "A law of physics: energy degrades when used and can't be 100% recycled. Every process generates waste.",
    "degrowth": "The idea that rich countries should produce and consume less to avoid destroying the planet.",
    "planetary boundaries": "The natural limits Earth can withstand without collapsing: climate, biodiversity, freshwater, etc.",
    "social metabolism": "The flows of materials and energy that society extracts, transforms, and returns to nature.",
    "ecological footprint": "The amount of natural resources a person, city, or country consumes and the waste it generates.",

    // --- Test concepts ---
    "cognitive biases": "Systematic errors in how we think and decide. Mental shortcuts that lead us to wrong conclusions.",
    "bounded rationality": "The idea that people are NOT 100% rational: we have limited information, little time, and emotions that influence us.",
    "cognitive dissonance": "The mental discomfort you feel when you hold two contradictory ideas at the same time.",
    "dogmatism": "Clinging to an idea or belief without accepting evidence that contradicts it.",
    "orthodoxy": "Strictly following a doctrine or theory without allowing variations or questioning."
  }
};

window.GLOSSARY = GLOSSARY;

const TRANSLATIONS = {
  es: {
    ui: {
      navLogo: "ELIXIRES <em>de la</em> RAZÓN ECONÓMICA",
      navShelf: "DESTILADOS",
      navMenu: "La Carta",
      navCabinet: "Boticario",
      navTestLink: "Test de Sobriedad",
      heroTag: "SIMULADOR INTERACTIVO DE IDEAS ECONÓMICAS",
      heroTitle: "BAR DE ESCUELAS ECONÓMICAS",
      heroSubtitle: "“Toda teoría económica muestra solo una parte de la realidad. Creer que una sola idea lo explica todo también puede hacerte daño.”",
      heroIntro: "Cada decisión de gobierno se basa en ideas económicas anteriores, como ingredientes de una receta. Aquí puedes explorar esas ideas: pasa el cursor sobre cada frasco para ver qué propone cada escuela, qué tan extrema es su posición y qué problemas puede causar si se aplica sin equilibrio. Conocer las ventajas y los riesgos de cada forma de pensar no es un sermón: es aprender a pensar mejor como ciudadano.",
      shelfLoading: "Cargando destilados de la razón...",
      menuTag: "NUESTRAS MEZCLAS DE IDEAS",
      menuTitle: "El Menú de Combinaciones",
      menuDesc: "En vez de seguir una sola escuela de pensamiento, prueba estas combinaciones diseñadas para enfrentar problemas reales de la sociedad.",
      cabinetTag: "EL BOTICARIO DE LAS CRISIS",
      cabinetTitle: "Gabinete de Boticario: Crisis y Soluciones",
      cabinetDesc: "Abre los cajones del mueble de boticario para ver los problemas económicos más importantes. Compara las soluciones que propone cada escuela y los efectos secundarios de cada una.",
      dossierEmptyFeather: "🪶",
      dossierEmptyTitle: "Selecciona un Cajón del Gabinete",
      dossierEmptyText: "Abre uno de los cajones del boticario para ver el problema y comparar las soluciones que propone cada escuela de pensamiento.",
      dossierExpediente: "EXPEDIENTE Nº 04-A",
      testTag: "DESCUBRE TU FORMA DE PENSAR",
      testTitle: "Test de Sobriedad",
      testDesc: "No es un test de izquierda o derecha. Este test analiza cómo piensas sobre la economía: si te inclinas por una sola idea o mezclas varias, y descubre qué proporción exacta de cada escuela hay en tu forma de ver el mundo.",
      testIntroTitle: "¿Qué tan firmes son tus ideas?",
      testIntroText: "Todos mezclamos ideas económicas de distintas maneras, a veces sin darnos cuenta. Responde con sinceridad a 12 preguntas sobre dilemas reales para descubrir tu mezcla personal de ideas y ver si tus respuestas coinciden con lo que creías pensar.",
      testIntroBtn: "Iniciar Destilación Mental",
      testLoadingTitle: "Preparando tu Perfil...",
      testLoadingText: "Analizando tus respuestas, calculando tus proporciones y detectando posibles contradicciones en tu forma de pensar...",
      resultsTag: "ACTA DE SOBRIEDAD ECONÓMICA",
      resultsBottleCaption: "TU FÓRMULA DE RAZÓN",
      resultsVirtueTitle: "VIRTUD INTELECTUAL",
      resultsHangoverTitle: "RIESGO DE RESACA",
      resultsBtnExport: "Descargar Tarjeta de Sobriedad",
      resultsBtnShare: "Compartir en WhatsApp",
      resultsBtnRestart: "Volver a Destilar",
      resultsEcosystemTag: "Ruta del Pensamiento Crítico · Paso 3",
      resultsEcosystemTitle: "Más allá del cóctel: ¿Qué significa ser libre?",
      resultsEcosystemText: "Explorar ideas económicas es fascinante, pero cuando hay que elegir políticas reales, aparecen dilemas difíciles. ¿Ser libre significa que nadie te obligue a nada (libertad como no interferencia) o significa tener los recursos reales para vivir bien (libertad como capacidad real)?",
      resultsEcosystemBtn: "Explorar la Arquitectura de la Libertad <i data-lucide=\"arrow-right\" class=\"icon-inline\" aria-hidden=\"true\"></i>",
      stepPathTitle: "Ruta del Pensamiento Crítico",
      stepPathSub: "Una red de visualizaciones interactivas para explorar la economía y la sociedad",
      stepTitle1: "Comprender",
      stepProject1: "Mapa de Escuelas",
      stepTitle2: "Mezclar",
      stepProject2: "El Bar de Cocteles",
      stepTitle3: "Contrastar",
      stepProject3: "Filosofía de la Libertad",
      stepTitle4: "Escalar",
      stepProject4: "Brecha de Riqueza Global",
      stepTitle5: "Aterrizar",
      stepProject5: "Desigualdad en Colombia",
      stepStatusHere: "Estás aquí",
      stepStatusExplore: "Explorar ➔",
      footerEcosystemInsp: "Inspirado en la investigación de <strong>Ha-Joon Chang</strong>, de su libro <em>Economics: The User's Guide</em> (2015), Capítulo 4.",
      footerEcosystemMeta: "Proyecto: El Bar de Escuelas Económicas • Versión 2.0 • Autor: William Camilo Artunduaga Viana",
      manifestoTag: "MANIFIESTO",
      manifestoTitle: "La importancia de dudar en tiempos de certezas absolutas",
      manifestoP1: "Las ideologías simplifican el mundo para ayudarnos a actuar; eso es valioso, pero también peligroso. Toda doctrina es un lente que nos deja ver algunas cosas con claridad mientras nos oculta otras por completo.",
      manifestoP2: "El verdadero valor de pensar con cuidado no está en jurar lealtad a una sola idea, sino en entender los límites, los costos y los puntos ciegos de nuestras propias herramientas de análisis. Bebe con moderación, cuestiona tus propias creencias y cultiva la apertura a otras formas de pensar. Tu cerebro te lo agradecerá.",
      manifestoSignature: "Cátedra de la Coctelería Económica",
      footerBottom: "Generado con HTML5 + CSS3 + Vanilla Javascript • 100% Autoportante para Despliegues Directos en GitHub Pages",
      footerInsp: "Inspirado en <em>Economics: The User's Guide</em> (Ha-Joon Chang, 2015) y en la idea de que combinar perspectivas es mejor que seguir una sola",
      footerCopy: "© 2026 Mapa de Escuelas Políticas Económicas • Licencia Creative Commons BY-SA 4.0",
      tooltipLabelNotes: "QUÉ PROPONE",
      tooltipLabelEffects: "RIESGOS Y PUNTOS CIEGOS",
      tooltipActionHint: "Haz clic en la botella para ir al test",
      recipeLabelFormula: "INGREDIENTES (ESCUELAS QUE LA COMPONEN)",
      recipeLabelVectors: "HACIA DÓNDE EMPUJA",
      recipeLabelNotes: "QUÉ ENCONTRARÁS EN ESTA MEZCLA",
      recipeLabelRisks: "RIESGOS SI SE APLICA SIN EQUILIBRIO",
      phLabel: "pH Estatal:",
      phInterventionTitle: "Nivel de intervención del Estado",
      sliderValCentral: "Equilibrio neutral",
      sliderValLeft: "Prioridad Mercado",
      sliderValRight: "Prioridad Estado",
      sliderLeftHint: "← Mercado",
      sliderRightHint: "Estado →",
      sliderConfirmBtn: "Confirmar mi posición y seguir",
      exportOfficialAct: "TU RESULTADO OFICIAL",
      exportMolecularFormula: "TU MEZCLA DE IDEAS ECONÓMICAS",
      exportCognitiveDiag: "TU PERFIL DE PENSAMIENTO",
      exportVirtue: "TU FORTALEZA",
      exportHangoverRisk: "TU PUNTO DÉBIL",
      exportWatermark: "CÁTEDRA DE COCTELERÍA ECONÓMICA • ELIXIRES DE LA RAZÓN ECONÓMICA",
      exportDocTitle: "Mi Tarjeta de Sobriedad - Elixires de la Razón Económica",
      footerColDatasheetTitle: "📋 Ficha Técnica",
      footerLabelTitle: "Título",
      footerValueTitle: "ELIXIRES de la RAZÓN ECONÓMICA",
      footerLabelEdition: "Edición",
      footerLabelMoreInfo: "More info",
      footerValueMoreInfo: "README del Proyecto",
      footerLabelCite: "Cita Bibliográfica",
      footerValueCite: "Artunduaga Viana, William Camilo (2026). Elixires de la Razón Económica. URL: https://github.com/willkwolf/economic-bar",
      footerColLinksTitle: "🔗 Enlaces de Interés",
      footerLinkLibertyTitle: "🗽 Arquitectura de Libertad <span class=\"link-arrow\">→</span>",
      footerLinkLibertyDesc: "Infografía interactiva sobre qué significa la libertad.",
      footerLinkOriginTitle: "📈 Economic School Map (Origen) <span class=\"link-arrow\">→</span>",
      footerLinkOriginDesc: "El mapa original del cual deriva este desarrollo.",
      footerColMethodTitle: "🧪 Código & Metodología",
      footerMethodDesc: "Para ver la metodología y el código fuente, visita el proyecto directamente en GitHub.",
      testOnboardingTitle: "Cuéntanos: ¿qué piensas antes de empezar?",
      testOnboardingSubtitle: "Dinos qué crees ahora. Al final compararemos si tus respuestas coinciden con tu intuición inicial.",
      onboardingCocktailLabel: "1. ¿Cuál de estas mezclas de ideas te parece más interesante?",
      onboardingSlidersLabel: "2. ¿Hacia qué lado te inclinas en estas dos grandes preguntas?",
      onboardingNextBtn: "Guardar mis respuestas y empezar el test",
      resultsConsistencyTitle: "¿ERES COHERENTE CON LO QUE DICES?",
      resultsConsistencyLabel: "Qué tan consistentes son tus respuestas",
      onboardingAxisState: "Estado vs Mercado",
      onboardingAxisEquity: "Equidad vs Crecimiento",
      a11yTitle: "Herramientas de Lectura",
      a11yBtnToggle: "Panel de Accesibilidad y Lectura",
      a11yContrast: "Contraste Visual",
      a11yContrastStandard: "Estándar Speakeasy",
      a11yContrastHigh: "Contraste Alto AAA",
      a11ySize: "Tamaño de Fuente",
      a11ySizeStd: "Estándar (A)",
      a11ySizeMedium: "Grande (A+)",
      a11ySizeLarge: "Extra Grande (A++)",
      a11ySpacing: "Espaciado de Líneas",
      a11ySpacingStd: "Estándar",
      a11ySpacingSpacious: "Espacioso",
      a11yTufteMode: "Modo Lectura Limpia",
      a11yTufteDesc: "Apaga adornos, brillos y elementos decorativos. Deja toda la pantalla enfocada en los textos y datos para una lectura más clara.",
      a11yFont: "Tipografía de Cuerpo",
      a11yFontSans: "Legibilidad Sans",
      a11yFontMono: "Técnica Mono"
    },
    escuelas: {
      marxista: {
        id: "marxista",
        nombre: "Marxista",
        fundador: "Karl Marx & Friedrich Engels (1867)",
        color: "#8c2323",
        abv: "90% Vol. Conflicto entre clases sociales",
        tastingNotes: "Esta escuela dice que los problemas económicos vienen de la desigualdad de poder entre quienes son dueños de las empresas y quienes trabajan en ellas. Los trabajadores producen más riqueza de la que reciben como salario, y esa diferencia (llamada plusvalor) se la queda el dueño. Además, propone que la historia avanza por los conflictos entre estos grupos.",
        sideEffects: "Puede no ver cómo los mercados a veces se corrigen solos, y tiende a proponer soluciones tan centralizadas que terminan en burocracias rígidas o gobiernos autoritarios.",
        descripcion_corta: "Critica cómo se acumula la riqueza en pocas manos y cómo los trabajadores reciben menos de lo que producen."
      },
      feminista: {
        id: "feminista",
        nombre: "Feminista",
        fundador: "Silvia Federici & Marilyn Waring (1980)",
        color: "#bd777a",
        abv: "75% Vol. El valor del cuidado",
        tastingNotes: "Esta escuela pone en el centro algo que la economía tradicional ignora: el trabajo de cuidar a otros (criar hijos, cuidar enfermos, mantener el hogar) que generalmente hacen las mujeres sin recibir pago ni reconocimiento. Señala que la economía oficial mide el dinero pero no mide lo que sostiene la vida.",
        sideEffects: "Es difícil medir con números lo que vale el trabajo de cuidado. Puede chocar con las formas tradicionales de hacer cuentas en economía, donde solo cuenta lo que tiene precio.",
        descripcion_corta: "Hace visible el trabajo de cuidado no pagado y cuestiona que la economía solo mida lo que se vende."
      },
      ecologica: {
        id: "ecologica",
        nombre: "Ecológica",
        fundador: "Kate Raworth & Nicholas Georgescu-Roegen (2012)",
        color: "#2c5e3b",
        abv: "80% Vol. Límites del Planeta",
        tastingNotes: "Esta escuela dice que la economía no puede crecer para siempre porque el planeta tiene límites físicos: hay una cantidad finita de agua, aire limpio, suelo fértil y energía. Propone que la economía debe funcionar dentro de esos límites, como una rosquilla (Donut) que tiene un piso social mínimo y un techo ecológico máximo.",
        sideEffects: "Si se frena el crecimiento sin repartir mejor lo que hay, la gente más pobre puede quedar peor. Además, choca con un sistema económico que necesita crecer para pagar deudas.",
        descripcion_corta: "Dice que la economía debe respetar los límites físicos del planeta para no destruir la naturaleza."
      },
      tradicion_desarrollista: {
        id: "tradicion_desarrollista",
        nombre: "Desarrollista",
        fundador: "Ha-Joon Chang & Friedrich List (1841)",
        color: "#c8350d",
        abv: "85% Vol. Desarrollo industrial propio",
        tastingNotes: "Esta escuela dice que los países pobres no se desarrollan solo abriendo sus fronteras al comercio libre, porque compiten en desventaja. Propone que el gobierno proteja y apoye a las industrias jóvenes del país hasta que sean lo suficientemente fuertes para competir con las de los países ricos.",
        sideEffects: "Si el gobierno apoya a las empresas equivocadas o hay corrupción, el dinero público termina beneficiando a unos pocos empresarios sin que el país avance.",
        descripcion_corta: "Propone que el gobierno proteja las industrias del país para que se desarrollen y puedan competir."
      },
      keynesiana: {
        id: "keynesiana",
        nombre: "Keynesiana",
        fundador: "John Maynard Keynes (1936)",
        color: "#86ad34",
        abv: "70% Vol. El gobierno activo en crisis",
        tastingNotes: "Esta escuela dice que cuando la economía cae en crisis y la gente deja de comprar, el gobierno debe intervenir gastando más (en obras, empleos, ayudas) para reactivar la economía. Cree que las crisis no se arreglan solas y que el miedo y la incertidumbre pueden empeorar todo si nadie actúa.",
        sideEffects: "Si el gobierno gasta demasiado y por mucho tiempo, puede acumular deudas enormes y provocar que los precios suban sin control (inflación).",
        descripcion_corta: "Propone que el gobierno gaste más en tiempos de crisis para reactivar el empleo y la economía."
      },
      institucionalista: {
        id: "institucionalista",
        nombre: "Institucionalista",
        fundador: "Douglass North & Elinor Ostrom (1920)",
        color: "#579ea4",
        abv: "65% Vol. Las reglas del juego importan",
        tastingNotes: "Esta escuela dice que lo que más importa en economía son las reglas del juego: las leyes, las costumbres, los acuerdos y las instituciones. Demuestra que las comunidades locales pueden organizarse para cuidar recursos compartidos (como el agua o los bosques) sin necesidad de que lo haga solo el gobierno o solo el mercado.",
        sideEffects: "Es muy buena explicando cómo funcionan las cosas, pero a veces le falta ofrecer soluciones rápidas y concretas para crisis económicas urgentes.",
        descripcion_corta: "Estudia cómo las reglas, las leyes y las costumbres hacen que la economía funcione bien o mal."
      },
      estado_emprendedor: {
        id: "estado_emprendedor",
        nombre: "Emprendedor",
        fundador: "Mariana Mazzucato (2013)",
        color: "#df7713",
        abv: "75% Vol. Innovación e Inversión Pública",
        tastingNotes: "Esta escuela propone que el gobierno no debe limitarse a arreglar problemas cuando las cosas van mal, sino liderar proyectos tecnológicos arriesgados (como en su día fueron el internet o el GPS). El Estado actúa como un inversor a largo plazo que crea nuevos mercados.",
        sideEffects: "Si el gobierno financia proyectos que fracasan, toda la sociedad asume las pérdidas; pero si triunfan, las ganancias suelen quedar en manos de empresas privadas. También existe el riesgo de que los funcionarios elijan tecnologías equivocadas.",
        descripcion_corta: "Propone que el gobierno financie proyectos tecnológicos de gran escala y cree nuevos mercados."
      },
      conductista: {
        id: "conductista",
        nombre: "Conductista",
        fundador: "Daniel Kahneman & Richard Thaler (2008)",
        color: "#bd777a",
        abv: "60% Vol. Psicología de las decisiones",
        tastingNotes: "Esta escuela mezcla la economía con la psicología. Demuestra que las personas no somos computadoras racionales: nos equivocamos de forma constante, nos influyen las emociones y nos dejamos llevar por atajos mentales al elegir.",
        sideEffects: "Riesgo de que los gobiernos usen la psicología para influir en las decisiones de la gente. Además, a veces se enfoca tanto en pequeños comportamientos individuales que olvida los grandes problemas del sistema.",
        descripcion_corta: "Usa la psicología para entender cómo decide la gente realmente, en vez de asumir que somos siempre racionales."
      },
      clasica: {
        id: "clasica",
        nombre: "Clásica",
        fundador: "Adam Smith & David Ricardo (1776)",
        color: "#5d7298",
        abv: "80% Vol. El mercado libre original",
        tastingNotes: "La escuela fundadora. Dice que cuando cada persona busca su propio beneficio, una mano invisible organiza el mercado para el bien común. Cree en la división del trabajo y en que los países deben comerciar libremente vendiendo lo que mejor saben hacer.",
        sideEffects: "No toma en cuenta los límites del planeta ni el daño ambiental. Tiende a justificar salarios muy bajos para los trabajadores y a ignorar los conflictos de interés entre los dueños de las empresas y los empleados.",
        descripcion_corta: "La idea original de que el mercado libre se organiza solo para el beneficio de todos."
      },
      neoclasica: {
        id: "neoclasica",
        nombre: "Neoclásica",
        fundador: "Léon Walras & Alfred Marshall (1870)",
        color: "#2d2651",
        abv: "85% Vol. Fórmulas de beneficio y utilidad",
        tastingNotes: "Esta escuela intenta explicar la economía con matemáticas y fórmulas puras. Asume que los consumidores siempre buscan el máximo beneficio al menor costo posible, y que los precios se equilibran de forma perfecta por la oferta y la demanda.",
        sideEffects: "Al usar modelos matemáticos muy rígidos, asume situaciones que no son reales, como que todos tenemos información perfecta y decidimos sin emociones. No suele predecir crisis económicas ni explicar las desigualdades de poder.",
        descripcion_corta: "Usa matemáticas para estudiar cómo las personas buscan el máximo beneficio y cómo se equilibran los precios."
      },
      austriaca: {
        id: "austriaca",
        nombre: "Austríaca",
        fundador: "Friedrich Hayek & Ludwig von Mises (1871)",
        color: "#c8350d",
        abv: "90% Vol. Libertad y decisiones individuales",
        tastingNotes: "Defiende la libertad individual extrema y el mercado libre absoluto. Dice que los precios son señales que transmiten información que ningún gobierno puede calcular ni planificar. Rechaza cualquier intervención del Estado en la economía.",
        sideEffects: "Ignora los problemas públicos graves que el mercado no puede resolver, como el cambio climático. Rechaza la existencia de bancos centrales e impuestos, lo que paralizaría la capacidad de respuesta del gobierno en emergencias.",
        descripcion_corta: "Defiende la libertad individual absoluta y rechaza cualquier control del gobierno sobre la economía."
      },
      schumpeteriana: {
        id: "schumpeteriana",
        nombre: "Schumpeteriana",
        fundador: "Joseph Schumpeter (1942)",
        color: "#f9c000",
        abv: "80% Vol. Innovación y destrucción",
        tastingNotes: "Propone que el motor de la economía no es el equilibrio, sino el cambio constante. Los emprendedores introducen innovaciones que destruyen los negocios viejos (como los teléfonos inteligentes destruyeron los rollos de fotos). A esto lo llama destrucción creativa.",
        sideEffects: "Puede ser demasiado tolerante con los monopolios gigantes de tecnología bajo la excusa de que son innovadores. También tiende a ignorar el sufrimiento de los trabajadores que pierden sus empleos por las nuevas tecnologías.",
        descripcion_corta: "Explica cómo la innovación constante de los emprendedores cambia la economía destruyendo lo antiguo."
      }
    },
    cocteles: [
      {
        id: "martillo_dialectico",
        nombre: "Martillo Dialéctico",
        descripcion: "Diseñado para enfrentar la desigualdad de riqueza. Una mezcla intensa y profunda que muestra los conflictos de poder entre clases sociales.",
        intensidad: "Fuerte (Especialidad)",
        colorPredominante: "#8c2323",
        ingredientes: { marxista: 55, feminista: 25, keynesiana: 20 },
        vectores: { x: "Mucha intervención estatal", y: "Máxima igualdad social" },
        tastingNotes: "Combina la idea de que los trabajadores controlen las empresas, el reconocimiento del trabajo de cuidado en el hogar y el apoyo del gobierno en tiempos difíciles.",
        sideEffects: "Puede enfocarse demasiado en el grupo y olvidarse del valor de la iniciativa individual. Riesgo de crear controles muy rígidos.",
        riesgosSistemicos: "Eliminación de la inversión privada, exceso de trámites y oficinas del gobierno, y lentitud para resolver problemas locales."
      },
      {
        id: "libertad_liquida",
        nombre: "Libertad Líquida",
        descripcion: "Diseñado para combatir la inflación y el control exagerado del gobierno. Una mezcla muy seca y volátil que celebra la libertad de decidir.",
        intensidad: "Extremo",
        colorPredominante: "#c8350d",
        ingredientes: { austriaca: 50, clasica: 30, neoclasica: 20 },
        vectores: { x: "Mercado libre absoluto", y: "Mayor productividad y crecimiento" },
        tastingNotes: "Destaca el uso de un dinero estable que el gobierno no pueda imprimir a su antojo, el funcionamiento libre de los precios y la ausencia de impuestos.",
        sideEffects: "Desprecio total por los problemas colectivos como la contaminación o el cambio climático, y parálisis del gobierno durante grandes crisis.",
        riesgosSistemicos: "Abandono de los servicios públicos comunes (salud, educación), desaparición de las ayudas sociales y abuso de poder por parte de grandes empresas sin control."
      },
      {
        id: "socialdemocracia_nordica",
        nombre: "Socialdemocracia Nórdica",
        descripcion: "Diseñado para reducir el costo de la vivienda y evitar la expulsión de vecinos. Combina la eficiencia de las empresas privadas con un apoyo fuerte del Estado.",
        intensidad: "Moderado",
        colorPredominante: "#579ea4",
        ingredientes: { keynesiana: 40, institucionalista: 30, tradicion_desarrollista: 20, feminista: 10 },
        vectores: { x: "Estado regulador y activo", y: "Igualdad y estabilidad social" },
        tastingNotes: "Combina un mercado dinámico pero vigilado, viviendas apoyadas por fondos públicos y cobro de impuestos progresivos para financiar servicios comunes.",
        sideEffects: "Requiere que la gente y las empresas paguen muchos impuestos. Si no se maneja con cuidado, las empresas ricas pueden llevarse su dinero a otros países.",
        riesgosSistemicos: "Cansancio de los ciudadanos por pagar altos impuestos, oficinas públicas demasiado grandes y lentas, y vulnerabilidad ante crisis financieras del mundo."
      },
      {
        id: "silicon_valley_sour",
        nombre: "Silicon Valley Sour",
        descripcion: "Diseñado para manejar los efectos de la inteligencia artificial y la pérdida de empleos. Una mezcla efervescente que busca guiar la tecnología con apoyo público.",
        intensidad: "Fuerte",
        colorPredominante: "#f9c000",
        ingredientes: { schumpeteriana: 45, estado_emprendedor: 35, neoclasica: 20 },
        vectores: { x: "Alianza entre empresas y gobierno", y: "Crecimiento e innovación" },
        tastingNotes: "Apunta a la rápida renovación de la tecnología y a que el gobierno financie proyectos de innovación que luego beneficien a toda la sociedad.",
        sideEffects: "Puede generar burbujas financieras y llevar a que unos pocos monopolios tecnológicos gigantes acumulen demasiado poder.",
        riesgosSistemicos: "Que el gobierno asuma las pérdidas de las tecnologías que fallan mientras unos pocos se quedan con las patentes exitosas, aumentando la inestabilidad del empleo."
      },
      {
        id: "equilibrio_esteril",
        nombre: "Equilibrio Estéril",
        descripcion: "Creado como un ejemplo sobre los límites de las leyes tradicionales frente a los gigantes de internet. Un trago frío, puramente matemático e inorgánico.",
        intensidad: "Fuerte",
        colorPredominante: "#2d2651",
        ingredientes: { neoclasica: 80, conductista: 20 },
        vectores: { x: "Modelos matemáticos de mercado", y: "Distribución eficiente en teoría" },
        tastingNotes: "Se enfoca en fórmulas matemáticas de beneficio del consumidor y el productor, con una pizca de psicología sobre cómo decidimos.",
        sideEffects: "Muy alejado de la realidad. Sus fórmulas asumen que las personas deciden sin emociones y con información perfecta, ignorando cómo funcionan las redes sociales.",
        riesgosSistemicos: "Inutilidad de las leyes frente a crisis reales y una tendencia a reducir las decisiones humanas a simples ecuaciones que no funcionan en la vida práctica."
      },
      {
        id: "elixir_bien_comun",
        nombre: "Elixir del Bien Común",
        descripcion: "Diseñado para sanar el daño ecológico. Un trago orgánico enfocado en respetar los límites de la naturaleza y cuidar la sostenibilidad de la vida.",
        intensidad: "Ligero",
        colorPredominante: "#2c5e3b",
        ingredientes: { institucionalista: 50, ecologica: 30, feminista: 20 },
        vectores: { x: "Autogestión de las comunidades", y: "Límites planetarios y bienestar" },
        tastingNotes: "Promueve una economía circular que no desperdicie recursos, el cuidado de la naturaleza y que las comunidades locales gestionen sus propios bienes.",
        sideEffects: "No ofrece un crecimiento material rápido. Requiere que los ciudadanos dediquen mucho tiempo y esfuerzo para ponerse de acuerdo.",
        riesgosSistemicos: "Dificultad para competir con países industriales que no cuidan la naturaleza, y decisiones lentas en momentos de emergencias graves."
      },
      {
        id: "destilado_desarrollista",
        nombre: "Destilado Desarrollista",
        descripcion: "Diseñado para equilibrar la producción nacional frente al comercio exterior. Una mezcla de cocción lenta que busca fortalecer las empresas locales.",
        intensidad: "Fuerte",
        colorPredominante: "#c8350d",
        ingredientes: { tradicion_desarrollista: 60, estado_emprendedor: 30, institucionalista: 10 },
        vectores: { x: "Planificación de la industria", y: "Productividad y avance tecnológico" },
        tastingNotes: "Favorece proteger con aranceles las industrias jóvenes del país, dar apoyos públicos a la innovación local y tener reglas de juego estables.",
        sideEffects: "Riesgo de que el gobierno apoye a empresas ineficientes que no se esfuerzan por mejorar porque no tienen competencia.",
        riesgosSistemicos: "Corrupción al repartir los apoyos del gobierno, guerras comerciales con otros países y fomento de monopolios protegidos e ineficientes."
      },
      {
        id: "ponche_gran_crisis",
        nombre: "Ponche de la Gran Crisis",
        descripcion: "Diseñado para reactivar la economía en momentos en que nadie gasta ni invierte. Un estimulante para evitar el desempleo y el pánico.",
        intensidad: "Moderado",
        colorPredominante: "#86ad34",
        ingredientes: { keynesiana: 60, institucionalista: 20, conductista: 20 },
        vectores: { x: "Gasto del gobierno para activar el consumo", y: "Estabilidad a corto plazo" },
        tastingNotes: "Utiliza el gasto del gobierno para crear empleo rápido, acompañado de reglas que den confianza y eviten el pánico en los bancos.",
        sideEffects: "Puede tentar al gobierno a endeudarse demasiado y provocar un aumento descontrolado de los precios (inflación) en el futuro.",
        riesgosSistemicos: "Aumento constante de los precios, desincentivo del ahorro a largo plazo y una dependencia excesiva de que el gobierno siempre rescate la economía."
      }
    ],
    problemas: [
      {
        id: "inflacion",
        titulo: "La Inflación",
        pregunta: "¿Qué hacer cuando los precios de todo suben rápido y el dinero alcanza cada vez para menos?",
        dossier: [
          { escuela: "Austríaca", remedio: "Dejar de imprimir dinero de golpe, recortar el gasto del gobierno y dejar que los precios se estabilicen solos en el mercado libre.", toxicidad: "Aumenta el desempleo a corto plazo y deja sin apoyo a los más necesitados en plena crisis.", ph: 15 },
          { escuela: "Keynesiana", remedio: "Cobrar impuestos a las ganancias exageradas de los especuladores y dar ayudas directas para que la gente pueda comprar los alimentos básicos.", toxicidad: "Puede aumentar la deuda del gobierno si se calcula mal de dónde saldrá el dinero.", ph: 65 },
          { escuela: "Marxista", remedio: "Poner límites obligatorios a los precios y a las ganancias de las empresas, y controlar los canales de distribución.", toxicidad: "Puede causar escasez y desabastecimiento si las empresas privadas deciden dejar de producir porque no les resulta rentable.", ph: 90 }
        ]
      },
      {
        id: "desigualdad",
        titulo: "Desigualdad de Riqueza",
        pregunta: "¿Cómo reducir la enorme diferencia de dinero y propiedades entre ricos y pobres?",
        dossier: [
          { escuela: "Marxista", remedio: "Hacer que las grandes empresas y fábricas pasen a ser propiedad del público y repartir las ganancias de manera igualitaria.", toxicidad: "Desaparece el mercado de inversiones y las personas más ricas pueden llevarse su dinero a otros países.", ph: 95 },
          { escuela: "Feminista", remedio: "Pagar un salario desde el gobierno por el trabajo doméstico y de cuidado de personas, y ofrecer guarderías públicas gratuitas.", toxicidad: "Requiere una gran reforma de impuestos para conseguir los fondos necesarios.", ph: 80 },
          { escuela: "Neoclásica", remedio: "Dar becas y apoyos para educación técnica, facilitando que la gente consiga empleos mejor pagados por su propio esfuerzo.", toxicidad: "No resuelve la raíz del problema, ya que ignora que las herencias y el poder acumulado impiden competir en igualdad de condiciones.", ph: 35 }
        ]
      },
      {
        id: "ia_automatizacion",
        titulo: "Inteligencia Artificial y Empleo",
        pregunta: "¿Cómo proteger a las personas si las nuevas tecnologías y la IA reemplazan sus trabajos?",
        dossier: [
          { escuela: "Schumpeteriana", remedio: "Dejar que las tecnologías viejas desaparezcan y apoyar la creación de nuevas empresas de alta tecnología para que la economía avance.", toxicidad: "Causa desempleo y abandono de los trabajadores de más edad que no logran aprender las nuevas tecnologías a tiempo.", ph: 30 },
          { escuela: "Estado Emprendedor", remedio: "Crear proyectos desde el gobierno para que la IA ayude a los trabajadores en vez de reemplazarlos, y cobrar regalías por las patentes públicas.", toxicidad: "Exige que el gobierno sea muy rápido y ágil para competir con el avance de las empresas tecnológicas privadas.", ph: 70 },
          { escuela: "Feminista", remedio: "Reducir las horas de trabajo semanales y usar los impuestos de la tecnología para financiar empleos de cuidado de personas y salud.", toxicidad: "Reduce las ganancias a corto plazo de las empresas tecnológicas y exige que todos los países se pongan de acuerdo para cobrar impuestos.", ph: 85 }
        ]
      },
      {
        id: "vivienda",
        titulo: "Crisis de Vivienda",
        pregunta: "¿Cómo evitar que los alquileres suban tanto que la gente deba abandonar sus barrios?",
        dossier: [
          { escuela: "Neoclásica", remedio: "Dar permisos para construir más edificios y eliminar trámites para que la oferta de viviendas aumente y los precios bajen.", toxicidad: "A corto plazo puede atraer a constructores que solo buscan revender y encarecen aún más la zona.", ph: 20 },
          { escuela: "Institucionalista", remedio: "Apoyar cooperativas de vecinos para que controlen los alquileres de forma comunitaria y sin especular.", toxicidad: "Requiere que los vecinos se organicen y dediquen mucho tiempo a debatir, lo que puede demorar la construcción.", ph: 60 },
          { escuela: "Desarrollista", remedio: "Planificar y construir viviendas públicas directamente desde el gobierno y regular los préstamos de los bancos.", toxicidad: "Crea oficinas lentas para repartir las casas y suele resultar en barrios todos iguales y poco atractivos.", ph: 80 }
        ]
      },
      {
        id: "monopolios",
        titulo: "Monopolios de Internet",
        pregunta: "¿Qué hacer con las grandes plataformas de internet que controlan los datos y la información de todos?",
        dossier: [
          { escuela: "Austríaca", remedio: "No hacer nada. Si una empresa abusa, los mismos usuarios o nuevos inventores buscarán alternativas para reemplazarla.", toxicidad: "Ignora que estas empresas son tan grandes que para un competidor nuevo es casi imposible entrar.", ph: 10 },
          { escuela: "Neoclásica", remedio: "Usar leyes de competencia para dividir a las grandes empresas tecnológicas en compañías más pequeñas por la fuerza.", toxicidad: "Choca con la realidad de que es más cómodo y eficiente tener una sola red social unificada.", ph: 45 },
          { escuela: "Estado Emprendedor", remedio: "Hacer que las redes básicas de internet y los datos de interés común sean de propiedad pública, como el agua o las carreteras.", toxicidad: "Riesgos de centralismo informativo en manos del gobierno de turno y pérdida de dinamismo e innovación ágil.", ph: 85 }
        ]
      },
      {
        id: "ecocrisis",
        titulo: "Daño Ecológico",
        pregunta: "¿Cómo frenar la destrucción de la naturaleza y el cambio climático?",
        dossier: [
          { escuela: "Ecológica", remedio: "Poner límites estrictos a la extracción de recursos y reducir el consumo material de forma planificada.", toxicidad: "Choca con un sistema económico que necesita vender y crecer constantemente para funcionar.", ph: 90 },
          { escuela: "Neoclásica", remedio: "Cobrar impuestos globales a la contaminación (como al carbono) para que las empresas tengan incentivos para no contaminar.", toxicidad: "Asume que todo en la naturaleza se puede solucionar poniéndole un precio de mercado, ignorando daños irreversibles.", ph: 40 },
          { escuela: "Estado Emprendedor", remedio: "Hacer grandes inversiones públicas para inventar y fabricar energías limpias rápidamente.", toxicidad: "Sigue apostando por producir y consumir más cosas, solo que con un barniz verde, sin reducir la extracción de minerales.", ph: 75 }
        ]
      }
    ],
    preguntas: [
      {
        id: "q1",
        fase: 1,
        dimension: "epistemologia",
        texto: "Cuando ocurre una gran crisis económica en un país (como pobreza extrema o desempleo masivo), ¿cómo la explicas?",
        opciones: [
          { texto: "Toda gran crisis se debe principalmente a UNA sola gran causa (como el exceso de controles del gobierno, la codicia individual o la lucha entre ricos y pobres).", tipo: "monismo" },
          { texto: "Las crisis ocurren por la combinación de MUCHAS causas complejas. Explicarlas con una sola razón es una simplificación peligrosa.", tipo: "pluralismo" }
        ]
      },
      {
        id: "q2",
        fase: 1,
        dimension: "analista",
        texto: "¿Cuál debería ser el papel del economista o asesor que diseña las políticas del gobierno?",
        opciones: [
          { texto: "Su papel es crear un plan económico único y coherente, y defenderlo con firmeza científica para guiar al país sin dudar por motivos políticos.", tipo: "monismo" },
          { texto: "Su papel es dudar de sus propias teorías, adaptar sus propuestas a cada problema específico y aceptar que las soluciones prácticas valen más que las ideas fijas.", tipo: "pluralismo" }
        ]
      },
      {
        id: "q3",
        fase: 1,
        dimension: "error",
        texto: "Cuando un plan económico del gobierno fracasa por completo, ¿cómo lo explicas?",
        opciones: [
          { texto: "Suele deberse a que no se aplicó con suficiente pureza, a que hubo sabotaje de grupos rivales o a que los políticos cambiaron el plan a mitad de camino.", tipo: "monismo" },
          { texto: "Demuestra que la teoría que usaron tenía límites y no servía para esa situación real. Si las ideas fallan en la práctica, hay que cambiarlas.", tipo: "pluralismo" }
        ]
      },
      {
        id: "q4",
        fase: 2,
        dimension: "coordinacion",
        texto: "¿Qué piensas sobre el mercado libre como forma de organizar la sociedad?",
        opciones: [
          { texto: "Es un sistema libre y espontáneo que funciona solo a través de los precios. Si el gobierno interviene, distorsiona las señales y empeora las cosas.", pesos: { austriaca: 4, clasica: 3, neoclasica: 2 } },
          { texto: "Es eficiente para producir, pero tiene fallas graves (como monopolios o contaminación) que obligan al gobierno a poner reglas estrictas.", pesos: { neoclasica: 4, keynesiana: 3, conductista: 2 } },
          { texto: "No funciona solo. Depende totalmente de las leyes, la confianza de la sociedad, las costumbres y las reglas que las comunidades acuerden.", pesos: { institucionalista: 4, tradicion_desarrollista: 3 } },
          { texto: "Es un lugar donde los dueños del dinero abusan de los trabajadores y se quedan con la riqueza. Debe ser transformado por completo.", pesos: { marxista: 4, feminista: 3 } }
        ]
      },
      {
        id: "q5",
        fase: 2,
        dimension: "estado",
        texto: "¿Cuál debería ser la función principal del gobierno en la economía?",
        opciones: [
          { texto: "Intervenir lo mínimo posible: solo proteger la propiedad privada, hacer cumplir los contratos y mantener la seguridad.", pesos: { austriaca: 4, clasica: 4 } },
          { texto: "Gastar e invertir dinero público en obras y programas sociales para crear empleo y reactivar la economía cuando las cosas vayan mal.", pesos: { keynesiana: 4, neoclasica: 3 } },
          { texto: "Liderar proyectos arriesgados de tecnología e innovación para crear nuevas industrias, como hace una empresa emprendedora.", pesos: { estado_emprendedor: 4, tradicion_desarrollista: 4, schumpeteriana: 2 } },
          { texto: "Planificar democráticamente la producción de acuerdo con lo que necesita la sociedad y lo que el planeta puede soportar, no por la ganancia privada.", pesos: { marxista: 4, ecologica: 3, feminista: 3 } }
        ]
      },
      {
        id: "q6",
        fase: 2,
        dimension: "justicia",
        texto: "¿Cómo explicas la gran acumulación de riqueza y la desigualdad económica?",
        opciones: [
          { texto: "Es el resultado natural del esfuerzo y la productividad de cada uno. Cobrar altos impuestos desincentiva el trabajo y la inversión.", pesos: { neoclasica: 4, austriaca: 3, clasica: 2 } },
          { texto: "Es un problema que frena el consumo de la gente común y daña la sociedad. Se necesitan impuestos progresivos para corregirlo.", pesos: { keynesiana: 4, conductista: 3 } },
          { texto: "Viene de no valorar ni pagar el trabajo doméstico y de cuidado que hacen las mujeres, y de explotar los recursos naturales sin control.", pesos: { feminista: 4, ecologica: 3 } },
          { texto: "Es la consecuencia inevitable de que los dueños de las empresas se queden con el valor producido por los trabajadores. Se corrige repartiendo la propiedad.", pesos: { marxista: 4, institucionalista: 2 } }
        ]
      },
      {
        id: "q7",
        fase: 2,
        dimension: "humano",
        texto: "¿Cómo actúan las personas al tomar decisiones económicas?",
        opciones: [
          { texto: "Somos personas racionales que analizamos la información disponible para elegir siempre lo que más nos conviene.", pesos: { neoclasica: 4, clasica: 3 } },
          { texto: "Decidimos de forma limitada: cometemos errores fáciles de predecir, nos dejamos llevar por las emociones y nos influye cómo nos presentan las opciones.", pesos: { conductista: 4, institucionalista: 3 } },
          { texto: "Actuamos de forma libre pero con conocimiento incompleto, descubriendo oportunidades en el día a día a través de nuestras decisiones individuales.", pesos: { austriaca: 4, schumpeteriana: 2 } },
          { texto: "Estamos condicionados por la clase social a la que pertenecemos, nuestro género, nuestra familia y la comunidad en la que vivimos.", pesos: { feminista: 4, marxista: 4, ecologica: 3 } }
        ]
      },
      {
        id: "q8",
        fase: 2,
        dimension: "motor",
        texto: "¿Cuál es la fuerza principal que impulsa el progreso material y el avance de un país?",
        opciones: [
          { texto: "El fortalecimiento de la producción nacional, apoyando y protegiendo a las industrias del país frente a la competencia de afuera.", pesos: { tradicion_desarrollista: 4, clasica: 3 } },
          { texto: "La innovación constante de emprendedores audaces que crean nuevas tecnologías y reemplazan a las empresas que se quedan atrás.", pesos: { schumpeteriana: 4, austriaca: 3 } },
          { texto: "Grandes proyectos de investigación financiados por el gobierno para inventar las tecnologías del futuro.", pesos: { estado_emprendedor: 4, schumpeteriana: 3 } },
          { texto: "Reorganizar la forma en que producimos para vivir bien consumiendo menos recursos y cuidando la vida.", pesos: { ecologica: 4, feminista: 3 } }
        ]
      },
      {
        id: "q9",
        fase: 2,
        dimension: "propiedad",
        texto: "¿Qué tipo de propiedad consideras más justa y eficiente para el desarrollo?",
        opciones: [
          { texto: "La propiedad privada bien protegida por las leyes, para que las personas tengan incentivos para trabajar, invertir y cuidar sus cosas.", pesos: { clasica: 4, neoclasica: 3 } },
          { texto: "La propiedad comunitaria, gestionada de forma directa por los vecinos o usuarios mediante acuerdos locales y autogestión.", pesos: { institucionalista: 4, ecologica: 3 } },
          { texto: "La propiedad pública del gobierno sobre los recursos clave (como agua, energía y salud) para evitar que las empresas privadas abusen.", pesos: { marxista: 4, tradicion_desarrollista: 3 } },
          { texto: "Las cooperativas horizontales donde los trabajadores toman las decisiones juntos y se prioriza el bienestar social y el cuidado ecológico.", pesos: { feminista: 4, ecologica: 4 } }
        ]
      },
      {
        id: "q10",
        fase: 3,
        dimension: "estimulo",
        texto: "Dilema de Estabilidad vs. Estímulo: ¿Qué debe priorizarse en una recesión?",
        izquierda: {
          titulo: "Control y Ahorro",
          texto: "Controlar el gasto público y evitar la inflación, aunque temporalmente aumente el desempleo mientras la economía se limpia sola.",
          pesos: { austriaca: 3, neoclasica: 2, clasica: 2 }
        },
        derecha: {
          titulo: "Gasto y Empleo",
          texto: "Garantizar el empleo inyectando dinero en la economía mediante gasto social, aunque aumente la deuda del gobierno.",
          pesos: { keynesiana: 4, estado_emprendedor: 2 }
        }
      },
      {
        id: "q11",
        fase: 3,
        dimension: "donut",
        texto: "Dilema de Crecimiento vs. Límites: ¿Qué debe guiar nuestro aparato productivo?",
        izquierda: {
          titulo: "Crecimiento y Productividad",
          texto: "Aumentar la producción, la innovación y las ventas para hacer al país más rico y competitivo en el mundo.",
          pesos: { schumpeteriana: 3, neoclasica: 2, tradicion_desarrollista: 2 }
        },
        derecha: {
          titulo: "Límites y Sostenibilidad",
          texto: "Ajustar la producción para no consumir más recursos naturales de los que el planeta puede regenerar, priorizando el bienestar.",
          pesos: { ecologica: 4, feminista: 3 }
        }
      },
      {
        id: "q12",
        fase: 3,
        dimension: "globalizacion",
        texto: "Dilema de Globalización vs. Soberanía: ¿Cómo relacionarse con los mercados mundiales?",
        izquierda: {
          titulo: "Apertura al Mundo",
          texto: "Eliminar aranceles y barreras comerciales para integrarse plenamente en los mercados globales y comprar más barato.",
          pesos: { clasica: 3, neoclasica: 2, austriaca: 2 }
        },
        derecha: {
          titulo: "Soberanía Nacional",
          texto: "Proteger los productos y empleos nacionales de la competencia externa y controlar la entrada de dinero especulativo.",
          pesos: { tradicion_desarrollista: 4, estado_emprendedor: 2, marxista: 2 }
        }
      }
    ],
    perfiles_cognitivos: {
      monismo_doctrinal: {
        nombre: "Idea Fuerte y Única",
        subtitulo: "La coherencia de seguir un solo camino",
        descripcion: "Tu mente prefiere organizarse en torno a una idea económica principal. Al igual que los grandes teóricos clásicos, buscas un principio fundamental para explicar la sociedad. Defiendes con claridad una postura definida: ya sea la libertad de mercado (sin trabas para emprender) o la planificación del Estado (para garantizar oportunidades iguales). Esto te da gran firmeza y dirección al debatir, aunque a veces puede llevarte a pasar por alto problemas que no encajan en tu teoría.",
        virtud: "Firmeza en tus convicciones, gran claridad para tomar decisiones y argumentos ordenados y coherentes.",
        resaca: "Riesgo de rigidez doctrinal. Centrarse solo en el mercado puede hacerte ignorar las desigualdades sociales o el límite ecológico; priorizar solo el control estatal puede derivar en un exceso de burocracia que asfixie la iniciativa individual."
      },
      pluralismo_sistemico: {
        nombre: "Combinación Abierta",
        subtitulo: "La flexibilidad de ver varios puntos de vista",
        descripcion: "Tu mente prefiere combinar distintas ideas según el problema. Entiendes que la sociedad es compleja y que no existe una única fórmula económica mágica. Para ti, gobernar implica equilibrar tensiones (como la libertad individual frente al bienestar común) sabiendo que cada decisión tiene pros y contras. Eres pragmático y prefieres las soluciones prácticas a los dogmas cerrados.",
        virtud: "Gran flexibilidad para adaptarte a los cambios, capacidad para escuchar diversas posturas y una visión realista de la economía.",
        resaca: "Riesgo de parálisis por análisis. Al ver con tanta claridad las ventajas y desventajas de cada opción, te puede costar tomar decisiones rápidas o definir una postura firme en momentos de crisis."
      },
      monismo_eclectico: {
        nombre: "Buscador de Respuestas (En Tensión)",
        subtitulo: "El deseo de encontrar una explicación que una todo",
        descripcion: "Vives en una búsqueda constante de equilibrio. Tu mente quiere encontrar una teoría coherente que explique el mundo a la perfección, pero tu sentido común te recuerda que tanto el mercado libre como la regulación estatal tienen argumentos válidos. Esto te mantiene en un diálogo interno continuo, intentando reconciliar ideas que a menudo chocan en la práctica.",
        virtud: "Una mentalidad crítica y autocrítica que huye de respuestas sencillas y siempre busca profundizar en las causas.",
        resaca: "Dilema interno constante. Puedes sentir que tus ideas se contradicen y que no encajas del todo con las corrientes de pensamiento más tradicionales u ortodoxas."
      },
      pluralismo_pragmatico: {
        nombre: "Firmeza Disfrazada de Apertura",
        subtitulo: "Defender una sola idea con palabras flexibles",
        descripcion: "Aunque valoras la flexibilidad y te consideras abierto a combinar teorías según la situación, tus respuestas revelan que posees un núcleo firme de convicciones. Expresas tus opiniones con un lenguaje integrador y comprensivo, pero tus decisiones finales demuestran una inclinación clara hacia un modelo económico específico.",
        virtud: "Habilidad para dialogar y tender puentes con otros sin perder de vista tus verdaderas prioridades.",
        resaca: "Riesgo de inconsistencia percibida. Exigir flexibilidad a los demás mientras mantienes tus propias ideas inamovibles puede restar claridad a tu postura."
      }
    },
    perfiles_cuadrantes: {
      Q1: {
        titulo: "Apoyo al Estado Fuerte y Límites Ecológicos",
        descripcion: "Crees en un papel activo del Estado para asegurar una distribución justa de la riqueza y el respeto a los límites de la naturaleza. Rechazas que los derechos fundamentales o el planeta se traten como simples mercancías para obtener ganancias. Valoras la justicia social, la equidad de género y la sostenibilidad.",
        afinidad: "Socialismo democrático, economía ecológica y economía feminista del cuidado."
      },
      Q2: {
        titulo: "Regulación Inteligente y Ayudas Directas",
        descripcion: "Crees en una intervención pública precisa y selectiva. Apoyas el uso de incentivos indirectos y el diseño inteligente de opciones (psicología del comportamiento) para guiar decisiones colectivas, permitiendo que el mercado funcione pero protegiendo a las personas de decisiones impulsivas o engañosas.",
        afinidad: "Economía del comportamiento (Nudge) y regulación inteligente de mercados."
      },
      Q3: {
        titulo: "Alianza Productiva y Apoyo en Crisis",
        descripcion: "Defiendes una alianza estratégica entre el gobierno y las empresas. Para ti, el motor del progreso es un Estado innovador que invierta en tecnología y proyectos de gran escala, y que gaste para sostener el empleo cuando la economía se frena. Valoras el desarrollo industrial y la planificación concertada.",
        afinidad: "Keynesianismo, Estado emprendedor y desarrollo nacionalista."
      },
      Q4: {
        titulo: "Libertad de Mercado y Decisiones Libres",
        descripcion: "Priorizas la libertad individual y la iniciativa privada. Sostienes que los mercados descentralizados y el libre juego de la oferta y la demanda son las herramientas más eficientes para coordinar la producción y generar bienestar. Consideras que la intervención del gobierno suele generar distorsiones perjudiciales.",
        afinidad: "Liberalismo clásico, economía de libre mercado y escuela austríaca."
      }
    },
    perfiles_concentracion: {
      monocultura: {
        riesgo: "⚠️ Enfoque muy especializado",
        narrativa: "Tus ideas están alineadas con una visión económica particular. Esto te da una postura muy sólida y clara. Sin embargo, tu área de mejora es evitar la visión de túnel: el riesgo de descartar datos reales o soluciones útiles solo porque no encajan en tu teoría de preferencia."
      },
      sintetico: {
        riesgo: "⚖️ Equilibrio deliberativo",
        narrativa: "Has logrado una combinación equilibrada de diferentes escuelas. Tu fortaleza es evaluar de forma objetiva los beneficios y costos de cada opción. Tu área de mejora es evitar que este análisis continuo demore la toma de decisiones prácticas."
      },
      disperso: {
        riesgo: "🌪️ Ideas independientes",
        narrativa: "Tu forma de pensar toma elementos de múltiples corrientes sin un centro dominante. Eres libre de dogmas y muy adaptable. Tu área de mejora es estructurar estas ideas en una propuesta clara para poder coordinar acciones colectivas eficaces."
      }
    },
    perfiles_consistencia: {
      high: {
        nombre: "Alta Coherencia",
        subtitulo: "Tus respuestas coinciden muy bien con tu intuición.",
        descripcion: "Tus respuestas en el test coinciden de forma consistente con las creencias expresadas en tu onboarding y el cóctel seleccionado. Tienes un mapa de ideas muy ordenado e integrado."
      },
      moderate: {
        nombre: "Combinación Práctica",
        subtitulo: "Muestras ideas flexibles y adaptadas.",
        descripcion: "Muestras un rumbo claro, pero priorizas resolver problemas concretos antes que seguir una doctrina rígida. Estás dispuesto a aceptar ideas de otras corrientes si demuestran utilidad real."
      },
      low: {
        nombre: "Tensión Enriquecedora",
        subtitulo: "¡Tus respuestas muestran ideas muy diversas!",
        descripcion: "Tus respuestas prácticas difieren de tus preferencias iniciales. Esto no es un error: refleja que estás en un proceso de debate interno saludable, cuestionando tus propios supuestos ante dilemas reales."
      }
    }
  },
  en: {
    ui: {
      navLogo: "ELIXIRS <em>of</em> ECONOMIC REASON",
      navShelf: "DISTILLATES",
      navMenu: "The Menu",
      navCabinet: "Apothecary",
      navTestLink: "Sobriety Test",
      heroTag: "INTERACTIVE ECONOMIC IDEAS SIMULATOR",
      heroTitle: "ECONOMIC SCHOOLS BAR",
      heroSubtitle: "“Every economic theory shows only part of reality. Believing that a single idea explains everything can also harm you.”",
      heroIntro: "Every government decision is based on pre-existing economic ideas, like ingredients in a recipe. Here you can explore those ideas: hover over each flask to see what each school proposes, how extreme its position is, and what problems it can cause if applied without balance. Knowing the pros and cons of each way of thinking is not a sermon: it's learning to think better as a citizen.",
      shelfLoading: "Loading distillates of reason...",
      menuTag: "OUR COMBINATION OF IDEAS",
      menuTitle: "The Combination Menu",
      menuDesc: "Instead of following a single school of thought, try these combinations designed to address real societal problems.",
      cabinetTag: "THE APOTHECARY OF CRISES",
      cabinetTitle: "Apothecary Cabinet: Crises and Solutions",
      cabinetDesc: "Open the drawers of the cabinet to see key economic problems. Compare the solutions proposed by each school and the side effects of each.",
      dossierEmptyFeather: "🪶",
      dossierEmptyTitle: "Select a Cabinet Drawer",
      dossierEmptyText: "Open one of the apothecary drawers to see the problem and compare the solutions proposed by each school of thought.",
      dossierExpediente: "DOSSIER NO. 04-A",
      testTag: "DISCOVER HOW YOU THINK",
      testTitle: "Sobriety Test",
      testDesc: "This is not a left-or-right test. This test analyzes how you think about the economy: whether you lean towards a single idea or mix several, and calculates the exact proportion of each school in your worldview.",
      testIntroTitle: "How firm are your ideas?",
      testIntroText: "Everyone mixes economic ideas in different ways, often without realizing it. Answer 12 questions about real dilemmas honestly to discover your personal mix of ideas and see if your answers match what you thought you believed.",
      testIntroBtn: "Start Test",
      testLoadingTitle: "Preparing your Profile...",
      testLoadingText: "Analyzing your answers, calculating your proportions, and finding possible contradictions in your way of thinking...",
      resultsTag: "ECONOMIC SOBRIETY CERTIFICATE",
      resultsBottleCaption: "YOUR FORMULA OF REASON",
      resultsVirtueTitle: "YOUR STRENGTH",
      resultsHangoverTitle: "YOUR WEAKNESS",
      resultsBtnExport: "Download Sobriety Card",
      resultsBtnShare: "Share on WhatsApp",
      resultsBtnRestart: "Take Test Again",
      resultsEcosystemTag: "Critical Thought Path · Step 3",
      resultsEcosystemTitle: "Beyond the cocktail: What does it mean to be free?",
      resultsEcosystemText: "Exploring economic ideas is fascinating, but when choosing real policies, we face difficult choices. Does being free mean that no one forces you to do anything (freedom as non-interference) or does it mean having the real resources to live well (freedom as real capability)?",
      resultsEcosystemBtn: "Explore the Architecture of Liberty <i data-lucide=\"arrow-right\" class=\"icon-inline\" aria-hidden=\"true\"></i>",
      stepPathTitle: "Critical Thought Path",
      stepPathSub: "A network of interactive visualizations to explore economics and society",
      stepTitle1: "Understand",
      stepProject1: "Schools Map",
      stepTitle2: "Mix",
      stepProject2: "The Cocktails Bar",
      stepTitle3: "Contrast",
      stepProject3: "Liberty Philosophy",
      stepTitle4: "Scale",
      stepProject4: "Global Wealth Gap",
      stepTitle5: "Land",
      stepProject5: "Inequality in Colombia",
      stepStatusHere: "You are here",
      stepStatusExplore: "Explore ➔",
      footerEcosystemInsp: "Inspired by <strong>Ha-Joon Chang</strong>'s research, from his book <em>Economics: The User's Guide</em> (2015), Chapter 4.",
      footerEcosystemMeta: "Project: The Economic Schools Bar • Version 2.0 • Author: William Camilo Artunduaga Viana",
      manifestoTag: "MANIFESTO",
      manifestoTitle: "The importance of doubting in times of absolute certainty",
      manifestoP1: "Ideologies simplify the world to help us act; that is valuable, but also dangerous. Every doctrine acts as a lens that lets us see some things clearly while hiding others completely.",
      manifestoP2: "The true value of careful thinking lies not in swearing allegiance to a single idea, but in understanding the limits, costs, and blind spots of our own tools. Drink with moderation, question your own beliefs, and cultivate openness to other ways of thinking. Your brain will thank you.",
      manifestoSignature: "Chair of Economic Mixology",
      footerBottom: "Powered by HTML5 + CSS3 + Vanilla Javascript • 100% Self-Contained for Direct Deployments to GitHub Pages",
      footerInsp: "Inspired by <em>Economics: The User's Guide</em> (Ha-Joon Chang, 2015) and the idea that combining perspectives is better than following just one",
      footerCopy: "© 2026 Map of Economic Political Schools • Creative Commons BY-SA 4.0 License",
      tooltipLabelNotes: "WHAT IT PROPOSES",
      tooltipLabelEffects: "RISKS AND BLIND SPOTS",
      tooltipActionHint: "Click bottle to open the test",
      recipeLabelFormula: "INGREDIENTS (SCHOOLS THAT MAKE IT UP)",
      recipeLabelVectors: "WHERE IT PUSHES",
      recipeLabelNotes: "WHAT YOU WILL FIND IN THIS MIXTURE",
      recipeLabelRisks: "RISKS IF APPLIED WITHOUT BALANCE",
      phLabel: "State pH:",
      phInterventionTitle: "Level of State intervention",
      sliderValCentral: "Neutral balance",
      sliderValLeft: "Market Priority",
      sliderValRight: "State Priority",
      sliderLeftHint: "← Market",
      sliderRightHint: "State →",
      sliderConfirmBtn: "Confirm my position and continue",
      exportOfficialAct: "YOUR OFFICIAL RESULT",
      exportMolecularFormula: "YOUR MIX OF ECONOMIC IDEAS",
      exportCognitiveDiag: "YOUR THINKING PROFILE",
      exportVirtue: "YOUR STRENGTH",
      exportHangoverRisk: "YOUR WEAKNESS",
      exportWatermark: "CHAIR OF ECONOMIC MIXOLOGY • ELIXIRS OF ECONOMIC REASON",
      exportDocTitle: "My Sobriety Card - Elixirs of Economic Reason",
      footerColDatasheetTitle: "📋 Technical Datasheet",
      footerLabelTitle: "Title",
      footerValueTitle: "ELIXIRS of ECONOMIC REASON",
      footerLabelEdition: "Edition",
      footerLabelMoreInfo: "More info",
      footerValueMoreInfo: "Project README",
      footerLabelCite: "How to cite",
      footerValueCite: "Artunduaga Viana, William Camilo (2026). Elixirs of Economic Reason. URL: https://github.com/willkwolf/economic-bar",
      footerColLinksTitle: "🔗 Links of Interest",
      footerLinkLibertyTitle: "🗽 Architecture of Liberty <span class=\"link-arrow\">→</span>",
      footerLinkLibertyDesc: "Interactive infographic on what liberty means.",
      footerLinkOriginTitle: "📈 Economic School Map (Origin) <span class=\"link-arrow\">→</span>",
      footerLinkOriginDesc: "The original map from which this project derives.",
      footerColMethodTitle: "🧪 Code & Methodology",
      footerMethodDesc: "To see the methodology and the source code, visit the project directly on GitHub.",
      testOnboardingTitle: "Tell us: what do you think before starting?",
      testOnboardingSubtitle: "Tell us what you believe now. At the end we will compare if your answers match your initial intuition.",
      onboardingCocktailLabel: "1. Which of these combinations of ideas seems most interesting to you?",
      onboardingSlidersLabel: "2. Which way do you lean on these two big questions?",
      onboardingNextBtn: "Save my answers and start the test",
      resultsConsistencyTitle: "ARE YOU COHERENT WITH WHAT YOU SAY?",
      resultsConsistencyLabel: "How consistent your answers are",
      onboardingAxisState: "State vs Market",
      onboardingAxisEquity: "Equity vs Growth",
      a11yTitle: "Reading Toolkit",
      a11yBtnToggle: "Accessibility & Reading Panel",
      a11yContrast: "Visual Contrast",
      a11yContrastStandard: "Speakeasy Default",
      a11yContrastHigh: "High Contrast AAA",
      a11ySize: "Font Size",
      a11ySizeStd: "Standard (A)",
      a11ySizeMedium: "Large (A+)",
      a11ySizeLarge: "Extra Large (A++)",
      a11ySpacing: "Line Spacing",
      a11ySpacingStd: "Standard",
      a11ySpacingSpacious: "Spacious",
      a11yTufteMode: "Clean Reading Mode",
      a11yTufteDesc: "Turns off decorations, glows, and heavy grids. Focuses 100% of the screen on clear text and data for better readability.",
      a11yFont: "Body Typography",
      a11yFontSans: "Legible Sans",
      a11yFontMono: "Technical Mono"
    },
    escuelas: {
      marxista: {
        id: "marxista",
        nombre: "Marxist",
        fundador: "Karl Marx & Friedrich Engels (1867)",
        color: "#8c2323",
        abv: "90% Vol. Class Conflict",
        tastingNotes: "This school argues that economic problems come from the power gap between those who own businesses and those who work in them. Workers produce more wealth than they receive in wages, and this difference (surplus value) is kept by the owners.",
        sideEffects: "May ignore that markets can self-correct, and tends to favor centralized government control that can lead to slow bureaucracies or authoritarian rule.",
        descripcion_corta: "Critiques wealth concentration in a few hands and how workers are paid less than what they produce."
      },
      feminista: {
        id: "feminista",
        nombre: "Feminist",
        fundador: "Silvia Federici & Marilyn Waring (1980)",
        color: "#bd777a",
        abv: "75% Vol. Value of Care",
        tastingNotes: "This school focuses on what traditional economics ignores: care work (raising children, housework, caring for the sick) usually done by women without pay. It shows that economics measures money but ignores what actually sustains life.",
        sideEffects: "It is hard to measure the value of care work in numbers. It conflicts with traditional accounting, where only things with a price tag count.",
        descripcion_corta: "Makes unpaid care work visible and questions why economics only measures what is sold."
      },
      ecologica: {
        id: "ecologica",
        nombre: "Ecological",
        fundador: "Kate Raworth & Nicholas Georgescu-Roegen (2012)",
        color: "#2c5e3b",
        abv: "80% Vol. Planetary Boundaries",
        tastingNotes: "This school argues that the economy cannot grow forever because the Earth has physical limits (finite water, clean air, and energy). It proposes that the economy must fit within these limits, balancing human needs with nature's capacity.",
        sideEffects: "Slowing growth without sharing wealth better can harm the poorest. It also conflicts with an economic system that requires growth to pay off debts.",
        descripcion_corta: "Argues that the economy must respect the physical limits of the planet to avoid destroying nature."
      },
      tradicion_desarrollista: {
        id: "tradicion_desarrollista",
        nombre: "Developmentalist",
        fundador: "Ha-Joon Chang & Friedrich List (1841)",
        color: "#c8350d",
        abv: "85% Vol. Local Industrial Growth",
        tastingNotes: "This school argues that poorer countries cannot develop just by opening their borders to free trade, as they compete at a disadvantage. It proposes that the government protect and support young local industries until they can compete globally.",
        sideEffects: "If the government supports the wrong companies or corruption occurs, public funds only benefit a few business owners without helping the country progress.",
        descripcion_corta: "Proposes that the government protect local industries so they can develop and compete."
      },
      keynesiana: {
        id: "keynesiana",
        nombre: "Keynesian",
        fundador: "John Maynard Keynes (1936)",
        color: "#86ad34",
        abv: "70% Vol. Government Action in Crises",
        tastingNotes: "This school proposes that when the economy falls into crisis and people stop spending, the government must step in by spending money (on public works, jobs, and aid) to boost demand. It believes crises do not fix themselves.",
        sideEffects: "If the government spends too much for too long, it can build up massive debt and cause prices to rise out of control (inflation).",
        descripcion_corta: "Proposes that the government spend more during crises to boost employment and the economy."
      },
      institucionalista: {
        id: "institucionalista",
        nombre: "Institutionalist",
        fundador: "Douglass North & Elinor Ostrom (1920)",
        color: "#579ea4",
        abv: "65% Vol. Rules of the Game",
        tastingNotes: "This school argues that what matters most are the rules of the game: laws, customs, and institutions. It shows that local communities can organize to manage shared resources (like water or forests) without needing only the government or the market.",
        sideEffects: "Good at explaining how things work, but often fails to offer quick, concrete solutions during urgent economic crises.",
        descripcion_corta: "Studies how laws, rules, and customs make the economy work well or poorly."
      },
      estado_emprendedor: {
        id: "estado_emprendedor",
        nombre: "Entrepreneurial State",
        fundador: "Mariana Mazzucato (2013)",
        color: "#df7713",
        abv: "75% Vol. Innovation and Public Investment",
        tastingNotes: "This school proposes that the government should not just fix problems when things go wrong, but actively lead risky technology projects (like the internet or GPS). The State acts as a long-term investor creating new markets.",
        sideEffects: "If public projects fail, taxpayers bear the cost; if they succeed, profits often go to private firms. Also, government officials might choose the wrong technologies.",
        descripcion_corta: "Proposes that the government fund large-scale technology projects and create new markets."
      },
      conductista: {
        id: "conductista",
        nombre: "Behavioral",
        fundador: "Daniel Kahneman & Richard Thaler (2008)",
        color: "#bd777a",
        abv: "60% Vol. Psychology of Decisions",
        tastingNotes: "This school mixes economics with psychology. It shows that people are not rational computers: we make predictable mistakes, are influenced by emotions, and use mental shortcuts when making choices.",
        sideEffects: "Risk of governments using psychology to manipulate choices (paternalism). It also focuses on small individual choices while ignoring large systemic problems.",
        descripcion_corta: "Uses psychology to understand how people actually decide, instead of assuming we are always rational."
      },
      clasica: {
        id: "clasica",
        nombre: "Classical",
        fundador: "Adam Smith & David Ricardo (1776)",
        color: "#5d7298",
        abv: "80% Vol. The Original Free Market",
        tastingNotes: "The founding school (with Adam Smith). It says that when individuals pursue their own self-interest, an invisible hand organizes the market for the common good. It believes in the division of labor and free trade between countries.",
        sideEffects: "Ignores planetary limits and environmental damage. It also tends to justify low wages and ignore conflicts of interest between employers and workers.",
        descripcion_corta: "The original idea that the free market organizes itself to benefit everyone."
      },
      neoclasica: {
        id: "neoclasica",
        nombre: "Neoclassical",
        fundador: "Léon Walras & Alfred Marshall (1870)",
        color: "#2d2651",
        abv: "85% Vol. Profit and Utility Formulas",
        tastingNotes: "This school tries to explain the economy using mathematics and formulas. It assumes consumers always seek the maximum benefit at the lowest cost, and that prices balance perfectly through supply and demand.",
        sideEffects: "Uses rigid math models that assume unrealistic things, like perfect information and emotionless choices, failing to predict crises or explain power inequalities.",
        descripcion_corta: "Uses math to study how people seek maximum benefit and how prices balance."
      },
      austriaca: {
        id: "austriaca",
        nombre: "Austrian",
        fundador: "Friedrich Hayek & Ludwig von Mises (1871)",
        color: "#c8350d",
        abv: "90% Vol. Liberty and Individual Choices",
        tastingNotes: "Defends extreme individual liberty and absolute free markets. It says prices are signals transmitting information that no government can calculate or plan. It rejects any state intervention in the economy.",
        sideEffects: "Ignores major public issues that markets cannot solve, like climate change. Rejecting central banks and taxes would stop the government from responding in emergencies.",
        descripcion_corta: "Defends absolute individual liberty and rejects any government control over the economy."
      },
      schumpeteriana: {
        id: "schumpeteriana",
        nombre: "Schumpeterian",
        fundador: "Joseph Schumpeter (1942)",
        color: "#f9c000",
        abv: "80% Vol. Innovation and Destruction",
        tastingNotes: "Proposes that the economic engine is constant change, not equilibrium. Entrepreneurs introduce innovations that destroy old businesses (like smartphones destroying film cameras). This is called creative destruction.",
        sideEffects: "Can be too tolerant of giant tech monopolies under the excuse of innovation. It also tends to ignore the pain of workers who lose their jobs to new technology.",
        descripcion_corta: "Explains how constant innovation by entrepreneurs changes the economy by destroying the old."
      }
    },
    cocteles: [
      {
        id: "martillo_dialectico",
        nombre: "Dialectical Hammer",
        descripcion: "Designed to tackle wealth inequality. An intense and deep mixture showing power conflicts between social classes.",
        intensidad: "Strong (Specialty)",
        colorPredominante: "#8c2323",
        ingredientes: { marxista: 55, feminista: 25, keynesiana: 20 },
        vectores: { x: "Strong government intervention", y: "Maximum social equality" },
        tastingNotes: "Combines the idea of workers controlling businesses, recognizing unpaid household care work, and government support during hard times.",
        sideEffects: "May focus too much on the collective and neglect individual initiative. Risk of creating overly rigid controls.",
        riesgosSistemicos: "Erosion of private investment, excess government paperwork, and slow response to local problems."
      },
      {
        id: "libertad_liquida",
        nombre: "Liquid Liberty",
        descripcion: "Designed to fight inflation and excessive government control. A dry, highly volatile spirit celebrating the freedom of choice.",
        intensidad: "Extreme",
        colorPredominante: "#c8350d",
        ingredientes: { austriaca: 50, clasica: 30, neoclasica: 20 },
        vectores: { x: "Absolute free market", y: "Higher productivity and growth" },
        tastingNotes: "Emphasizes stable money that the government cannot print at will, free-flowing prices, and no taxes.",
        sideEffects: "Complete disregard for shared problems like pollution or climate change, and government paralysis during major crises.",
        riesgosSistemicos: "Neglect of public services (health, education), collapse of the social safety net, and abuse of power by large corporations."
      },
      {
        id: "socialdemocracia_nordica",
        nombre: "Nordic Socialdemocracy",
        descripcion: "Designed to reduce housing costs and prevent displacement. Combines private efficiency with strong government support.",
        intensidad: "Moderate",
        colorPredominante: "#579ea4",
        ingredientes: { keynesiana: 40, institucionalista: 30, tradicion_desarrollista: 20, feminista: 10 },
        vectores: { x: "Regulated and active State", y: "Social equality and stability" },
        tastingNotes: "Combines a monitored but dynamic market, housing supported by public funds, and progressive taxes to fund shared services.",
        sideEffects: "Requires high taxes on citizens and businesses. If not handled carefully, wealthy firms might move their money abroad.",
        riesgosSistemicos: "Taxpayer fatigue, large and slow bureaucracies, and high sensitivity to global financial crises."
      },
      {
        id: "silicon_valley_sour",
        nombre: "Silicon Valley Sour",
        descripcion: "Designed to manage the effects of artificial intelligence and job loss. A bubbly mixture seeking to guide technology with public support.",
        intensidad: "Fuerte",
        colorPredominante: "#f9c000",
        ingredientes: { schumpeteriana: 45, estado_emprendedor: 35, neoclasica: 20 },
        vectores: { x: "Alliance between business and state", y: "Growth and innovation" },
        tastingNotes: "Aims for rapid technology updates and public funding for innovation projects that benefit all of society.",
        sideEffects: "Can create speculative financial bubbles and allow giant technology monopolies to gather too much power.",
        riesgosSistemicos: "The government taking on losses from failed technologies while a few private owners keep the successful patents, destabilizing jobs."
      },
      {
        id: "equilibrio_esteril",
        nombre: "Sterile Equilibrium",
        descripcion: "Created as an example of the limits of traditional antitrust laws against internet giants. A cold, purely mathematical mixture.",
        intensidad: "Strong",
        colorPredominante: "#2d2651",
        ingredientes: { neoclasica: 80, conductista: 20 },
        vectores: { x: "Mathematical market models", y: "Efficient distribution in theory" },
        tastingNotes: "Focuses on mathematical profit formulas for consumers and producers, with a pinch of psychology on how we decide.",
        sideEffects: "Very detached from reality. Its formulas assume people decide without emotions and with perfect information, ignoring how social networks actually work.",
        riesgosSistemicos: "Ineffective laws in real crises, reducing human decisions to equations that do not work in practice."
      },
      {
        id: "elixir_bien_comun",
        nombre: "Elixir of the Common Good",
        descripcion: "Designed to heal ecological damage. An organic mixture focused on respecting nature's limits and caring for the sustainability of life.",
        intensidad: "Light",
        colorPredominante: "#2c5e3b",
        ingredientes: { institucionalista: 50, ecologica: 30, feminista: 20 },
        vectores: { x: "Community self-governance", y: "Planetary boundaries and well-being" },
        tastingNotes: "Promotes a circular economy without waste, caring for nature, and local communities managing their own shared resources.",
        sideEffects: "Does not offer rapid material growth. Requires citizens to dedicate significant time and effort to reach agreements.",
        riesgosSistemicos: "Difficulty competing with industrial nations that do not care for nature, and slow decisions in times of emergency."
      },
      {
        id: "destilado_desarrollista",
        nombre: "Developmental Distillate",
        descripcion: "Designed to balance domestic production against foreign trade. A slow-cooked mixture aiming to strengthen local industries.",
        intensidad: "Strong",
        colorPredominante: "#c8350d",
        ingredientes: { tradicion_desarrollista: 60, estado_emprendedor: 30, institucionalista: 10 },
        vectores: { x: "Industrial planning", y: "Productivity and technology advancement" },
        tastingNotes: "Favors protecting young national industries with tariffs, public support for local innovation, and stable rules.",
        sideEffects: "Risk of the government supporting inefficient companies that do not try to improve because they lack competition.",
        riesgosSistemicos: "Corruption in distributing government aid, trade wars with other countries, and fostering protected monopolies."
      },
      {
        id: "ponche_gran_crisis",
        nombre: "Great Crisis Punch",
        descripcion: "Designed to restart the economy when no one is spending or investing. A stimulant to avoid unemployment and panic.",
        intensidad: "Moderate",
        colorPredominante: "#86ad34",
        ingredientes: { keynesiana: 60, institucionalista: 20, conductista: 20 },
        vectores: { x: "Government spending to boost demand", y: "Short-term stability" },
        tastingNotes: "Uses government spending to create jobs quickly, along with rules to build trust and prevent banking panic.",
        sideEffects: "May tempt the government to run massive debts, leading to price increases (inflation) in the future.",
        riesgosSistemicos: "Persistent price increases, discouraging long-term savings, and over-reliance on the government to rescue the economy."
      }
    ],
    problemas: [
      {
        id: "inflacion",
        titulo: "Inflation",
        pregunta: "What should be done when prices rise quickly and money buys less and less?",
        dossier: [
          { escuela: "Austrian", remedio: "Stop printing money immediately, cut government spending to the bone, and let prices settle freely in the market.", toxicidad: "Increases unemployment in the short term and leaves the most vulnerable without support during a crisis.", ph: 15 },
          { escuela: "Keynesian", remedio: "Tax the high profits of speculators and give direct financial aid to help people buy basic foods.", toxicidad: "Can increase government debt if public spending is poorly calculated.", ph: 65 },
          { escuela: "Marxist", remedio: "Put strict caps on prices and corporate profits, and control distribution channels.", toxicidad: "May cause shortages if private firms stop producing because it is no longer profitable.", ph: 90 }
        ]
      },
      {
        id: "desigualdad",
        titulo: "Wealth Inequality",
        pregunta: "How to reduce the massive gap in wealth and properties between the rich and the poor?",
        dossier: [
          { escuela: "Marxist", remedio: "Make major companies and factories public property and share profits equally.", toxicidad: "Destroys the investment market, and wealthy people might move their money to other countries.", ph: 95 },
          { escuela: "Feminist", remedio: "Pay a state salary for domestic care work and offer free public childcare for everyone.", toxicidad: "Requires a major tax reform to raise the necessary funds.", ph: 80 },
          { escuela: "Neoclassical", remedio: "Provide scholarships and technical training, making it easier for people to get higher-paying jobs through effort.", toxicidad: "Only treats symptoms, ignoring that inheritance and family wealth prevent fair competition.", ph: 35 }
        ]
      },
      {
        id: "ia_automatizacion",
        titulo: "AI and Job Loss",
        pregunta: "How to protect people if new technologies and AI replace their jobs?",
        dossier: [
          { escuela: "Schumpeterian", remedio: "Let old industries fade away and support new tech startups to help the economy progress.", toxicidad: "Causes severe job loss and abandons older workers who cannot learn new technologies in time.", ph: 30 },
          { escuela: "Entrepreneurial State", remedio: "Launch government projects to guide AI to help workers instead of replacing them, and claim royalties on public patents.", toxicidad: "Requires the government to be very fast and agile to compete with private tech firms.", ph: 70 },
          { escuela: "Feminist", remedio: "Reduce weekly working hours and use tech taxes to fund and support human care and health jobs.", toxicidad: "Reduces short-term corporate profits and requires global agreement to prevent tax evasion.", ph: 85 }
        ]
      },
      {
        id: "vivienda",
        titulo: "Housing Crisis",
        pregunta: "How to prevent rents from rising so much that people must leave their neighborhoods?",
        dossier: [
          { escuela: "Neoclassical", remedio: "Allow more buildings to be built and cut red tape to increase housing supply and lower prices.", toxicidad: "In the short term, it can attract developers looking for quick profits, making the area even more expensive.", ph: 20 },
          { escuela: "Institutionalist", remedio: "Support neighborhood cooperatives to manage rents directly and prevent speculation.", toxicidad: "Requires neighbors to organize and spend time debating, which can delay building projects.", ph: 60 },
          { escuela: "Developmentalist", remedio: "Plan and build public housing estates directly from the government and regulate bank loans.", toxicidad: "Creates slow public offices to distribute housing and often results in identical, unappealing neighborhoods.", ph: 80 }
        ]
      },
      {
        id: "monopolios",
        titulo: "Internet Monopolies",
        pregunta: "What should be done with giant tech platforms that control everyone's data and digital traffic?",
        dossier: [
          { escuela: "Austrian", remedio: "Do not intervene. If a firm abuses its position, new inventors will naturally create alternatives to replace it.", toxicidad: "Ignores that these platforms are so massive that it is almost impossible for new competitors to enter.", ph: 10 },
          { escuela: "Neoclassical", remedio: "Use competition laws to break up giant tech firms into smaller companies by force.", toxicidad: "Clashes with the reality that having a single, unified social network is more convenient and efficient.", ph: 45 },
          { escuela: "Entrepreneurial State", remedio: "Make basic digital networks and common data databases public property, like roads or water systems.", toxicidad: "Risks information control under government hands and slower user-interface innovation.", ph: 85 }
        ]
      },
      {
        id: "ecocrisis",
        titulo: "Ecological Damage",
        pregunta: "How to stop environmental destruction and climate change?",
        dossier: [
          { escuela: "Ecological", remedio: "Set strict limits on resource extraction and plan to reduce material consumption.", toxicidad: "Collides with an economic system that needs to grow and sell more things constantly to work.", ph: 90 },
          { escuela: "Neoclassical", remedio: "Tax pollution (like carbon emissions) to give companies financial incentives to go clean.", toxicidad: "Assumes everything in nature can be solved by putting a market price on it, ignoring irreversible damage.", ph: 40 },
          { escuela: "Entrepreneurial State", remedio: "Make large public investments to quickly invent and produce clean energies.", toxicidad: "Keeps pushing to produce and consume more things (just with a green label) without reducing resource extraction.", ph: 75 }
        ]
      }
    ],
    preguntas: [
      {
        id: "q1",
        fase: 1,
        dimension: "epistemologia",
        texto: "When a major economic crisis occurs in a country (like extreme poverty or mass unemployment), how do you explain it?",
        opciones: [
          { texto: "Every major crisis is mainly due to ONE single cause (such as too many government controls, individual greed, or the struggle between rich and poor).", tipo: "monismo" },
          { texto: "Crises occur due to a combination of MANY complex causes. Explaining them with a single reason is a dangerous oversimplification.", tipo: "pluralismo" }
        ]
      },
      {
        id: "q2",
        fase: 1,
        dimension: "analista",
        texto: "What should be the role of the economist or advisor who designs government policies?",
        opciones: [
          { texto: "Their role is to create a single, economic plan and defend it with scientific firmness to guide the country without political doubt.", tipo: "monismo" },
          { texto: "Their role is to doubt their own theories, adapt proposals to each specific problem, and accept that practical solutions are worth more than fixed ideas.", tipo: "pluralismo" }
        ]
      },
      {
        id: "q3",
        fase: 1,
        dimension: "error",
        texto: "When a government economic plan fails completely, how do you explain it?",
        opciones: [
          { texto: "It is usually because it was not applied with enough purity, there was sabotage by rival groups, or politicians changed the plan halfway through.", tipo: "monismo" },
          { texto: "It proves that the theory they used had limits and did not fit the real situation. If ideas fail in practice, they must be changed.", tipo: "pluralismo" }
        ]
      },
      {
        id: "q4",
        fase: 2,
        dimension: "coordinacion",
        texto: "What do you think about the free market as a way to organize society?",
        opciones: [
          { texto: "It is a free and spontaneous system that works on its own through prices. If the government intervenes, it distorts signals and makes things worse.", pesos: { austriaca: 4, clasica: 3, neoclasica: 2 } },
          { texto: "It is efficient for production, but has serious failures (like monopolies or pollution) that force the government to set strict rules.", pesos: { neoclasica: 4, keynesiana: 3, conductista: 2 } },
          { texto: "It does not work alone. It depends entirely on laws, social trust, customs, and rules agreed upon by communities.", pesos: { institucionalista: 4, tradicion_desarrollista: 3 } },
          { texto: "It is a place where business owners exploit workers and keep the wealth. It must be completely transformed.", pesos: { marxista: 4, feminista: 3 } }
        ]
      },
      {
        id: "q5",
        fase: 2,
        dimension: "estado",
        texto: "What should be the main function of the government in the economy?",
        opciones: [
          { texto: "Intervene as little as possible: only protect private property, enforce contracts, and maintain security.", pesos: { austriaca: 4, clasica: 4 } },
          { texto: "Spend and invest public money on works and social programs to create jobs and boost the economy when things go wrong.", pesos: { keynesiana: 4, neoclasica: 3 } },
          { texto: "Lead risky technology and innovation projects to create new industries, acting like an entrepreneurial state.", pesos: { estado_emprendedor: 4, tradicion_desarrollista: 4, schumpeteriana: 2 } },
          { texto: "Plan production democratically according to what society needs and what the planet can support, rather than private profit.", pesos: { marxista: 4, ecologica: 3, feminista: 3 } }
        ]
      },
      {
        id: "q6",
        fase: 2,
        dimension: "justicia",
        texto: "How do you explain the high concentration of wealth and economic inequality?",
        opciones: [
          { texto: "It is the natural result of each person's effort and productivity. Charging high taxes discourages work and investment.", pesos: { neoclasica: 4, austriaca: 3, clasica: 2 } },
          { texto: "It is a problem that slows down consumption for ordinary people and harms society. Progressive taxes are needed to fix it.", pesos: { keynesiana: 4, conductista: 3 } },
          { texto: "It comes from not valuing or paying for domestic and care work done by women, and exploiting natural resources without control.", pesos: { feminista: 4, ecologica: 3 } },
          { texto: "It is the inevitable result of business owners keeping the value produced by workers. It is fixed by sharing ownership.", pesos: { marxista: 4, institucionalista: 2 } }
        ]
      },
      {
        id: "q7",
        fase: 2,
        dimension: "humano",
        texto: "How do people act when making economic decisions?",
        opciones: [
          { texto: "We are rational people who analyze available information to always choose what is best for us.", pesos: { neoclasica: 4, clasica: 3 } },
          { texto: "We decide in a limited way: we make easy-to-predict mistakes, are led by emotions, and are influenced by how choices are presented.", pesos: { conductista: 4, institucionalista: 3 } },
          { texto: "We act freely but with incomplete knowledge, discovering opportunities day by day through our individual choices.", pesos: { austriaca: 4, schumpeteriana: 2 } },
          { texto: "We are conditioned by the social class we belong to, our gender, our family, and the community we live in.", pesos: { feminista: 4, marxista: 4, ecologica: 3 } }
        ]
      },
      {
        id: "q8",
        fase: 2,
        dimension: "motor",
        texto: "What is the main force driving material progress and advancement?",
        opciones: [
          { texto: "Strengthening national production, supporting and protecting local industries against outside competition.", pesos: { tradicion_desarrollista: 4, clasica: 3 } },
          { texto: "Constant innovation by bold entrepreneurs who create new technologies and replace companies that fall behind.", pesos: { schumpeteriana: 4, austriaca: 3 } },
          { texto: "Large research projects funded by the government to invent the technologies of the future.", pesos: { estado_emprendedor: 4, schumpeteriana: 3 } },
          { texto: "Reorganizing the way we produce to live well while consuming fewer resources and caring for life.", pesos: { ecologica: 4, feminista: 3 } }
        ]
      },
      {
        id: "q9",
        fase: 2,
        dimension: "propiedad",
        texto: "What type of property ownership do you consider most just and efficient?",
        opciones: [
          { texto: "Private property well protected by laws, so that individuals have incentives to work, invest, and care for their things.", pesos: { clasica: 4, neoclasica: 3 } },
          { texto: "Community property, managed directly by neighbors or users through local agreements and self-governance.", pesos: { institucionalista: 4, ecologica: 3 } },
          { texto: "Public ownership by the government of key resources (like water, energy, and health) to prevent private businesses from abusing power.", pesos: { marxista: 4, tradicion_desarrollista: 3 } },
          { texto: "Horizontal cooperatives where workers make decisions together and prioritize social well-being and ecological care.", pesos: { feminista: 4, ecologica: 4 } }
        ]
      },
      {
        id: "q10",
        fase: 3,
        dimension: "estimulo",
        texto: "Stability vs. Stimulus Dilemma: What should be prioritized in a recession?",
        izquierda: {
          titulo: "Control and Savings",
          texto: "Control public spending and avoid inflation, even if it temporarily increases unemployment while the market clears itself.",
          pesos: { austriaca: 3, neoclasica: 2, clasica: 2 }
        },
        derecha: {
          titulo: "Spending and Jobs",
          texto: "Guarantee jobs by injecting money into the economy through social spending, even if government debt increases.",
          pesos: { keynesiana: 4, estado_emprendedor: 2 }
        }
      },
      {
        id: "q11",
        fase: 3,
        dimension: "donut",
        texto: "Growth vs. Boundaries Dilemma: What should guide our productive engine?",
        izquierda: {
          titulo: "Growth and Productivity",
          texto: "Increase production, innovation, and sales to make the country richer and more competitive in the world.",
          pesos: { schumpeteriana: 3, neoclasica: 2, tradicion_desarrollista: 2 }
        },
        derecha: {
          titulo: "Limits and Sustainability",
          texto: "Adjust production to avoid consuming more natural resources than the planet can regenerate, prioritizing well-being.",
          pesos: { ecologica: 4, feminista: 3 }
        }
      },
      {
        id: "q12",
        fase: 3,
        dimension: "globalizacion",
        texto: "Globalization vs. Sovereignty Dilemma: How should we relate to global markets?",
        izquierda: {
          titulo: "Open to the World",
          texto: "Remove tariffs and trade barriers to fully integrate into global markets and buy things cheaper.",
          pesos: { clasica: 3, neoclasica: 2, austriaca: 2 }
        },
        derecha: {
          titulo: "National Sovereignty",
          texto: "Protect national products and jobs from outside competition and monitor speculative money inflows.",
          pesos: { tradicion_desarrollista: 4, estado_emprendedor: 2, marxista: 2 }
        }
      }
    ],
    perfiles_cognitivos: {
      monismo_doctrinal: {
        nombre: "Strong and Single Idea",
        subtitulo: "The coherence of following a single path",
        descripcion: "Your mind prefers to organize itself around a single main economic idea. Like classical thinkers, you believe there is one basic principle that explains everything, and you act with great firmness and clarity. You tend to strongly defend one type of freedom: either total market freedom (so no one interferes with your business) or government planning (so everyone has the same opportunities). This gives you great strength to act and defend your views, but it might make you ignore problems that do not fit your theory.",
        virtud: "Great clarity when making decisions, firmness in your beliefs, and very coherent, orderly arguments.",
        resaca: "Risk of closing yourself to other ideas. If you focus only on the market, you might ignore poverty or environmental care; if you focus only on government control, you might end up supporting too many controls that choke individual freedom."
      },
      pluralismo_sistemico: {
        nombre: "Open Combination",
        subtitulo: "The flexibility of seeing multiple viewpoints",
        descripcion: "Your mind prefers to combine different ideas depending on the situation. You know that society is very complex and that there is no single perfect economic formula to solve all problems. You understand that sometimes individual freedom and the group's well-being conflict, and that governing means choosing what to sacrifice in each case. You are pragmatic and do not let yourself be carried away by closed dogmas.",
        virtud: "Great flexibility to adapt to changes, ability to listen to other opinions, and a realistic view free of fanaticism.",
        resaca: "Risk of constant doubt or paralysis. By understanding so well that every decision has pros and cons, it can be hard for you to take a side or decide what quick action to take during a crisis."
      },
      monismo_eclectico: {
        nombre: "Searcher of Answers (In Tension)",
        subtitulo: "The desire to find one explanation that unites everything",
        descripcion: "You live in a constant search for balance. Your mind wants to find a single coherent theory that explains the world perfectly, but your common sense tells you that both market freedom and government intervention have valid points. This keeps you in a permanent internal debate, trying to join ideas that often clash in reality.",
        virtud: "A very active and self-critical mind that does not settle for simple answers and always seeks to dig deeper.",
        resaca: "Constant internal confusion. You may feel that your ideas contradict each other and that you do not quite fit in with those who defend pure or orthodox theories."
      },
      pluralismo_pragmatico: {
        nombre: "Firmness Disguised as Openness",
        subtitulo: "Defending a single idea with flexible words",
        descripcion: "Although you claim to have an open mind and are willing to combine theories depending on the situation, your answers reveal that deep down you hold a very firm core of beliefs (either in favor of the free market or government control). You use flexible and understanding language to argue, but your final decisions always lean to the same side.",
        virtud: "Great ability to negotiate and dialogue with others without losing clarity about what you really want to achieve.",
        resaca: "Risk of not being completely honest with yourself. You demand that others be flexible and change their minds, while your own basic ideas remain non-negotiable."
      }
    },
    perfiles_cuadrantes: {
      Q1: {
        titulo: "Strong State Support and Ecological Limits",
        descripcion: "You believe the government should be strong to ensure resources are shared fairly and that nature's limits are respected. You reject treating human life and planetary health as mere businesses for profit. You value social equality and environmental care.",
        afinidad: "Ideas from socialism, feminist care economics, and respect for nature."
      },
      Q2: {
        titulo: "Smart Regulation and Direct Help",
        descripcion: "You believe in a government that intervenes precisely and only when necessary, using psychology and choice design to help people choose better (like subtle nudges). You want the market to work but with a design that cares for real human behavior.",
        afinidad: "Ideas from behavioral economics and smart regulation of markets."
      },
      Q3: {
        titulo: "Productive Alliance and Crisis Support",
        descripcion: "You believe in a partnership between the government and businesses. For you, progress comes from an entrepreneurial state that invests in large-scale technology projects and spends money to create jobs when the economy goes down. You value shared planning and stable rules.",
        afinidad: "Ideas from Keynesianism, national industrial development, and the innovative state."
      },
      Q4: {
        titulo: "Market Freedom and Free Choices",
        descripcion: "You firmly believe in individual freedom and that businesses should compete freely without the government getting involved. For you, prices set freely in the market are the best way to organize a country's economy. You value private initiative and free competition.",
        afinidad: "Ideas from classical liberalism, individual freedom, and the absolute free market."
      }
    },
    perfiles_concentracion: {
      monocultura: {
        riesgo: "⚠️ Very rigid ideas",
        narrativa: "Your ideas are highly concentrated in a single school or way of looking at the economy. This gives you a clear identity and a lot of coherence. However, your weakness is tunnel vision: it is hard for you to accept data that contradicts your ideas, and you might reject other valid proposals just because they do not match your theory."
      },
      sintetico: {
        riesgo: "⚖️ Difficulty deciding",
        narrativa: "You have achieved a balanced combination of different economic ideas. Your great strength is seeing the benefits and costs of each proposal very calmly. Your weakness is that you can take too long to make a practical decision because you stay analyzing all sides of the problem."
      },
      disperso: {
        riesgo: "🌪️ Ideas without a clear connection",
        narrativa: "Your way of thinking has ideas from many different schools without a clear center. You are completely open and do not let yourself be carried away by dogmas. However, your weakness is that it can be hard for you to explain clearly what you believe in or join organized groups to achieve real change."
      }
    },
    perfiles_consistencia: {
      high: {
        nombre: "High Coherence",
        subtitulo: "Your answers match your intuition very well.",
        descripcion: "Your answers in the test match almost perfectly what you claimed to believe at the beginning and your favorite cocktail. You have a very orderly and consistent way of thinking."
      },
      moderate: {
        nombre: "Practical Combination",
        subtitulo: "You show flexible and adapted ideas.",
        descripcion: "You have a clear direction, but when facing difficult problems, you are willing to accept solutions from other schools of thought. This is a sign of a practical mind ready to adapt."
      },
      low: {
        nombre: "Enriching Contradiction",
        subtitulo: "Your answers show very diverse ideas!",
        descripcion: "You chose a cocktail at the start, but when answering questions about real problems, you chose options that go the other way. This shows that your ideas are in a very interesting debate and that you do not let yourself be carried away by fixed recipes."
      }
    }
  }
};

// Asegurar disponibilidad global en navegadores
window.TRANSLATIONS = TRANSLATIONS;
