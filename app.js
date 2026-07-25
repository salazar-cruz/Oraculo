const TRANSLATIONS = {
  pt: {
    "meta.title": "Oráculo da Palma — Leitura Simbólica",
    "meta.description": "Uma experiência misteriosa de leitura simbólica da palma, criada para entretenimento.",
    "language.label": "Escolher idioma",
    "brand.subtitle": "O portal das linhas ocultas",
    "nav.enter": "Entrar no oráculo",
    "hero.eyebrow": "Uma câmara antiga abre-se diante de ti",
    "hero.title": "As linhas da tua mão guardam ecos por decifrar.",
    "hero.text": "Revela a palma, escolhe o teu guia mítico e recebe uma interpretação simbólica criada a partir dos traços visíveis da mão.",
    "hero.start": "Iniciar o ritual",
    "hero.journey": "Conhecer o percurso",
    "hero.disclaimer": "Experiência de entretenimento, sem valor científico, clínico ou divinatório.",
    "reading.eyebrow": "O rito de entrada",
    "reading.title": "Prepara a consulta",
    "reading.intro": "Três passos bastam: diz o teu nome, mostra a palma e escolhe quem te guiará.",
    "name.kicker": "O nome à entrada",
    "name.title": "Como te deve chamar o oráculo?",
    "name.description": "O nome serve apenas para tornar a leitura mais pessoal.",
    "name.label": "O teu nome",
    "name.placeholder": "Escreve o teu nome",
    "image.kicker": "A imagem da palma",
    "image.title": "Mostra a mão sob uma luz clara",
    "image.description": "Mão aberta, fotografia de cima e linhas centrais visíveis.",
    "image.previewAlt": "Pré-visualização da palma selecionada",
    "image.upload": "Tirar fotografia ou carregar imagem",
    "image.format": "JPG, PNG ou WebP · até 12 MB",
    "image.remove": "Remover imagem",
    "image.instructionsTitle": "Para o oráculo ver melhor",
    "image.instruction1": "✦ palma totalmente aberta",
    "image.instruction2": "✦ fotografia tirada de cima",
    "image.instruction3": "✦ dedos afastados",
    "image.instruction4": "✦ luz uniforme, sem reflexos",
    "image.instruction5": "✦ fundo simples",
    "image.instruction6": "✦ não incluir rosto nem documentos",
    "tradition.kicker": "O guia do limiar",
    "tradition.title": "Escolhe a tradição da leitura",
    "tradition.description": "Cada figura conduz a narrativa por um caminho diferente.",
    "tradition.legend": "Escolhe a tradição da leitura",
    "tradition.africanFigure": "Feiticeiro Africano",
    "tradition.africanName": "Africana",
    "tradition.africanDescription": "Ancestralidade, terra, memória e continuidade.",
    "tradition.africanAlt": "Figura fantástica de um feiticeiro africano",
    "tradition.europeanFigure": "Feiticeiro Europeu",
    "tradition.europeanName": "Europeia",
    "tradition.europeanDescription": "Quiromancia clássica, escolhas e ciclos.",
    "tradition.europeanAlt": "Figura fantástica de um feiticeiro europeu",
    "tradition.elvenFigure": "Mago Élfico",
    "tradition.elvenName": "Élfica",
    "tradition.elvenDescription": "Florestas antigas, estrelas e rios de fantasia.",
    "tradition.elvenAlt": "Figura fantástica de um mago élfico",
    "tradition.elementalFigure": "Mago Elemental",
    "tradition.elementalName": "Magia Antiga",
    "tradition.elementalDescription": "Elementos, alquimia, selos e portais.",
    "tradition.elementalAlt": "Figura fantástica de um mago elemental",
    "reading.privacy": "Ao iniciar a leitura, a fotografia é enviada temporariamente para análise e usada apenas nesta experiência.",
    "reading.submit": "Consultar o oráculo",
    "debug.title": "Diagnóstico técnico",
    "debug.notice": "A fotografia e a chave da API não são incluídas neste registo.",
    "debug.copy": "Copiar diagnóstico",
    "debug.copied": "Diagnóstico copiado",
    "loading.eyebrow": "A interpretar os sinais",
    "loading.title": "O oráculo observa as linhas da tua mão…",
    "loading.personal": "{name}, o oráculo observa as linhas da tua mão…",
    "loading.message": "A luz percorre os traços visíveis e abre o caminho da tradição escolhida.",
    "result.defaultTitle": "A mensagem da tua palma",
    "result.personalTitle": "{name}, a mensagem da tua palma",
    "result.quality": "Legibilidade da imagem",
    "result.retakeTitle": "A imagem não está suficientemente clara.",
    "result.retakeDefault": "Repete a fotografia com mais luz e a palma totalmente aberta.",
    "result.retakeButton": "Escolher outra imagem",
    "result.lifeLabel": "Linha da vida",
    "result.lifeTitle": "Vitalidade e caminho",
    "result.headLabel": "Linha da cabeça",
    "result.headTitle": "Mente e decisão",
    "result.heartLabel": "Linha do coração",
    "result.heartTitle": "Afetos e vínculos",
    "result.fateLabel": "Linha do destino",
    "result.fateTitle": "Vocação e mudanças",
    "result.mainLinesKicker": "Os quatro caminhos centrais",
    "result.mainLinesTitle": "Linhas principais",
    "result.secondaryLinesKicker": "Traços que aprofundam a leitura",
    "result.secondaryLinesTitle": "Linhas secundárias",
    "result.sunLabel": "Linha de Apolo",
    "result.sunTitle": "Expressão, criação e reconhecimento",
    "result.mercuryLabel": "Linha de Mercúrio",
    "result.mercuryTitle": "Comunicação e adaptação",
    "result.marsLabel": "Linha de Marte",
    "result.marsTitle": "Resistência e capacidade de recuperação",
    "result.intuitionLabel": "Linha da intuição",
    "result.intuitionTitle": "Percepção e leitura do ambiente",
    "result.handDetailsKicker": "A arquitectura visível da palma",
    "result.handDetailsTitle": "Forma, dedos, montes e sinais",
    "result.handShapeLabel": "Forma da mão",
    "result.handShapeTitle": "Estrutura e ritmo simbólico",
    "result.fingersLabel": "Dedos e proporções",
    "result.fingersTitle": "Direcção, detalhe e expressão",
    "result.thumbLabel": "Polegar e abertura",
    "result.thumbTitle": "Escolha, flexibilidade e impulso",
    "result.mountsLabel": "Montes e sinais",
    "result.mountsTitle": "Relevos, cruzamentos e ramificações",
    "result.innerDimensionsKicker": "Dimensões íntimas e de sombra",
    "result.innerDimensionsTitle": "Sombra, intimidade e espiritualidade",
    "result.innerDimensionsNote": "Estas interpretações são metáforas narrativas. Não constituem diagnóstico psicológico, não identificam orientação sexual e não determinam crenças religiosas.",
    "result.shadowLabel": "Tendências psicopáticas — leitura simbólica",
    "result.shadowTitle": "Frieza, impulso, controlo e empatia",
    "result.shadowDisclaimer": "Não é diagnóstico de psicopatia nem avaliação de perigosidade.",
    "result.sexualityLabel": "Sexualidade e intimidade",
    "result.sexualityTitle": "Desejo, sensualidade, limites e vínculo",
    "result.sexualityDisclaimer": "Não infere orientação sexual, identidade, práticas ou experiências pessoais.",
    "result.spiritualityLabel": "Espiritualidade",
    "result.spiritualityTitle": "Sentido, contemplação e ligação interior",
    "result.spiritualityDisclaimer": "Não identifica religião, fé ou capacidade sobrenatural.",
    "result.archetypeLabel": "Arquétipo revelado",
    "result.share": "Partilhar leitura",
    "result.new": "Nova consulta",
    "result.lineNotVisible": "A linha não ficou suficientemente visível.",
    "result.defaultArchetype": "O Viajante entre Sinais",
    "result.symbolic": "Leitura simbólica",
    "result.copied": "Resultado copiado",
    "result.shareTitle": "Oráculo da Palma",
    "result.shareFallback": "A minha leitura da palma",
    "result.archetypeShare": "Arquétipo",
    "result.languageNote": "A leitura atual foi criada em {language}. Inicia uma nova consulta para receber o texto neste idioma.",
    "tradition.result.africana": "Leitura Africana",
    "tradition.result.europeia": "Leitura Europeia",
    "tradition.result.elfica": "Leitura Élfica",
    "tradition.result.magia-antiga": "Leitura de Magia Antiga",
    "stats.eyebrow": "O mapa dos destinos",
    "stats.title": "O oráculo atravessa fronteiras",
    "stats.intro": "Cada leitura concluída acende um ponto no mapa. O contador guarda apenas totais por país; não grava nomes, fotografias ou endereços IP na base de estatísticas.",
    "stats.totalLabel": "Leituras concluídas",
    "stats.countriesLabel": "Países alcançados",
    "stats.loading": "A consultar o livro dos destinos…",
    "stats.empty": "O mapa ainda aguarda a primeira leitura concluída.",
    "stats.unavailable": "As estatísticas ainda não foram ligadas ao livro de registos do oráculo.",
    "stats.showAll": "Ver todos os países",
    "stats.showLess": "Mostrar menos",
    "stats.unknownCountry": "País não identificado",
    "stats.readings": "leituras",
    "stats.oneReading": "leitura",
    "how.eyebrow": "O percurso",
    "how.title": "Como decorre a leitura",
    "how.step1Title": "O teu nome",
    "how.step1Text": "O oráculo usa-o apenas para falar contigo de forma direta.",
    "how.step2Title": "A fotografia",
    "how.step2Text": "A palma é preparada no navegador e enviada em resolução adequada à leitura.",
    "how.step3Title": "O guia mítico",
    "how.step3Text": "A tradição escolhida define a atmosfera e a linguagem da narrativa.",
    "how.step4Title": "A revelação",
    "how.step4Text": "Recebes uma interpretação simbólica das linhas visíveis, sem afirmações científicas.",
    "footer.concept": "Conceito de Salazar da Cruz",
    "footer.version": "Versão 1.6.1",
    "error.imageRequired": "Seleciona uma fotografia nítida da palma da mão.",
    "error.nameRequired": "Escreve o teu nome antes de consultar o oráculo.",
    "error.invalidImage": "O ficheiro selecionado não é uma imagem válida.",
    "error.imageTooLarge": "A imagem é demasiado grande. Usa uma fotografia com menos de 12 MB.",
    "error.imageOpen": "Não foi possível abrir a imagem selecionada.",
    "error.apiConfig": "O endereço da API ainda não foi configurado no ficheiro config.js.",
    "error.invalidJson": "A API respondeu com conteúdo que não é JSON válido.",
    "error.unexpected": "Ocorreu um erro inesperado.",
    "language.pt": "português",
    "language.en": "inglês",
    "language.fr": "francês"
  },
  en: {
    "meta.title": "Oracle of the Palm — Symbolic Reading",
    "meta.description": "A mysterious symbolic palm-reading experience created for entertainment.",
    "language.label": "Choose language",
    "brand.subtitle": "The portal of hidden lines",
    "nav.enter": "Enter the oracle",
    "hero.eyebrow": "An ancient chamber opens before you",
    "hero.title": "The lines of your hand hold echoes waiting to be deciphered.",
    "hero.text": "Reveal your palm, choose your mythical guide and receive a symbolic interpretation based on the visible marks of your hand.",
    "hero.start": "Begin the ritual",
    "hero.journey": "Discover the path",
    "hero.disclaimer": "An entertainment experience with no scientific, clinical or divinatory value.",
    "reading.eyebrow": "The entrance rite",
    "reading.title": "Prepare the consultation",
    "reading.intro": "Three steps are enough: give your name, reveal your palm and choose your guide.",
    "name.kicker": "The name at the threshold",
    "name.title": "How should the oracle address you?",
    "name.description": "Your name is used only to make the reading more personal.",
    "name.label": "Your name",
    "name.placeholder": "Enter your name",
    "image.kicker": "The image of the palm",
    "image.title": "Show your hand under clear light",
    "image.description": "Open hand, photograph from above and visible central lines.",
    "image.previewAlt": "Preview of the selected palm image",
    "image.upload": "Take a photo or upload an image",
    "image.format": "JPG, PNG or WebP · up to 12 MB",
    "image.remove": "Remove image",
    "image.instructionsTitle": "Help the oracle see clearly",
    "image.instruction1": "✦ palm fully open",
    "image.instruction2": "✦ photograph taken from above",
    "image.instruction3": "✦ fingers separated",
    "image.instruction4": "✦ even light, no glare",
    "image.instruction5": "✦ simple background",
    "image.instruction6": "✦ do not include faces or documents",
    "tradition.kicker": "The guide at the threshold",
    "tradition.title": "Choose the reading tradition",
    "tradition.description": "Each figure leads the story along a different path.",
    "tradition.legend": "Choose the reading tradition",
    "tradition.africanFigure": "African Sorcerer",
    "tradition.africanName": "African",
    "tradition.africanDescription": "Ancestry, earth, memory and continuity.",
    "tradition.africanAlt": "Fantasy figure of an African sorcerer",
    "tradition.europeanFigure": "European Sorcerer",
    "tradition.europeanName": "European",
    "tradition.europeanDescription": "Classical palmistry, choices and cycles.",
    "tradition.europeanAlt": "Fantasy figure of a European sorcerer",
    "tradition.elvenFigure": "Elven Mage",
    "tradition.elvenName": "Elven",
    "tradition.elvenDescription": "Ancient forests, stars and rivers of fantasy.",
    "tradition.elvenAlt": "Fantasy figure of an elven mage",
    "tradition.elementalFigure": "Elemental Mage",
    "tradition.elementalName": "Ancient Magic",
    "tradition.elementalDescription": "Elements, alchemy, seals and portals.",
    "tradition.elementalAlt": "Fantasy figure of an elemental mage",
    "reading.privacy": "When the reading begins, the photograph is sent temporarily for analysis and used only for this experience.",
    "reading.submit": "Consult the oracle",
    "debug.title": "Technical diagnostics",
    "debug.notice": "The photograph and API key are not included in this log.",
    "debug.copy": "Copy diagnostics",
    "debug.copied": "Diagnostics copied",
    "loading.eyebrow": "Interpreting the signs",
    "loading.title": "The oracle is observing the lines of your hand…",
    "loading.personal": "{name}, the oracle is observing the lines of your hand…",
    "loading.message": "Light moves across the visible marks and opens the path of the chosen tradition.",
    "result.defaultTitle": "The message of your palm",
    "result.personalTitle": "{name}, the message of your palm",
    "result.quality": "Image legibility",
    "result.retakeTitle": "The image is not clear enough.",
    "result.retakeDefault": "Take another photograph with more light and your palm fully open.",
    "result.retakeButton": "Choose another image",
    "result.lifeLabel": "Life line",
    "result.lifeTitle": "Vitality and path",
    "result.headLabel": "Head line",
    "result.headTitle": "Mind and decision",
    "result.heartLabel": "Heart line",
    "result.heartTitle": "Affection and bonds",
    "result.fateLabel": "Fate line",
    "result.fateTitle": "Calling and change",
    "result.mainLinesKicker": "The four central paths",
    "result.mainLinesTitle": "Principal lines",
    "result.secondaryLinesKicker": "Marks that deepen the reading",
    "result.secondaryLinesTitle": "Secondary lines",
    "result.sunLabel": "Apollo line",
    "result.sunTitle": "Expression, creation and recognition",
    "result.mercuryLabel": "Mercury line",
    "result.mercuryTitle": "Communication and adaptation",
    "result.marsLabel": "Mars line",
    "result.marsTitle": "Resilience and recovery",
    "result.intuitionLabel": "Intuition line",
    "result.intuitionTitle": "Perception and awareness of surroundings",
    "result.handDetailsKicker": "The visible architecture of the palm",
    "result.handDetailsTitle": "Shape, fingers, mounts and signs",
    "result.handShapeLabel": "Hand shape",
    "result.handShapeTitle": "Structure and symbolic rhythm",
    "result.fingersLabel": "Fingers and proportions",
    "result.fingersTitle": "Direction, detail and expression",
    "result.thumbLabel": "Thumb and openness",
    "result.thumbTitle": "Choice, flexibility and impulse",
    "result.mountsLabel": "Mounts and signs",
    "result.mountsTitle": "Reliefs, crossings and branches",
    "result.innerDimensionsKicker": "Intimate and shadow dimensions",
    "result.innerDimensionsTitle": "Shadow, intimacy and spirituality",
    "result.innerDimensionsNote": "These interpretations are narrative metaphors. They are not psychological diagnoses, do not identify sexual orientation and do not determine religious beliefs.",
    "result.shadowLabel": "Psychopathic tendencies — symbolic reading",
    "result.shadowTitle": "Detachment, impulse, control and empathy",
    "result.shadowDisclaimer": "This is not a diagnosis of psychopathy or an assessment of dangerousness.",
    "result.sexualityLabel": "Sexuality and intimacy",
    "result.sexualityTitle": "Desire, sensuality, boundaries and bonding",
    "result.sexualityDisclaimer": "It does not infer sexual orientation, identity, practices or personal experiences.",
    "result.spiritualityLabel": "Spirituality",
    "result.spiritualityTitle": "Meaning, contemplation and inner connection",
    "result.spiritualityDisclaimer": "It does not identify religion, faith or supernatural ability.",
    "result.archetypeLabel": "Revealed archetype",
    "result.share": "Share reading",
    "result.new": "New consultation",
    "result.lineNotVisible": "The line was not sufficiently visible.",
    "result.defaultArchetype": "The Traveller Between Signs",
    "result.symbolic": "Symbolic reading",
    "result.copied": "Result copied",
    "result.shareTitle": "Oracle of the Palm",
    "result.shareFallback": "My palm reading",
    "result.archetypeShare": "Archetype",
    "result.languageNote": "The current reading was created in {language}. Start a new consultation to receive the text in this language.",
    "tradition.result.africana": "African Reading",
    "tradition.result.europeia": "European Reading",
    "tradition.result.elfica": "Elven Reading",
    "tradition.result.magia-antiga": "Ancient Magic Reading",
    "stats.eyebrow": "The map of destinations",
    "stats.title": "The oracle crosses borders",
    "stats.intro": "Each completed reading lights a point on the map. The counter stores only country totals; it does not record names, photographs or IP addresses in the statistics database.",
    "stats.totalLabel": "Completed readings",
    "stats.countriesLabel": "Countries reached",
    "stats.loading": "Consulting the book of destinations…",
    "stats.empty": "The map is still waiting for its first completed reading.",
    "stats.unavailable": "Statistics have not yet been connected to the oracle's record book.",
    "stats.showAll": "View all countries",
    "stats.showLess": "Show less",
    "stats.unknownCountry": "Unidentified country",
    "stats.readings": "readings",
    "stats.oneReading": "reading",
    "how.eyebrow": "The path",
    "how.title": "How the reading unfolds",
    "how.step1Title": "Your name",
    "how.step1Text": "The oracle uses it only to address you directly.",
    "how.step2Title": "The photograph",
    "how.step2Text": "The palm is prepared in the browser and sent at a resolution suited to the reading.",
    "how.step3Title": "The mythical guide",
    "how.step3Text": "The chosen tradition defines the atmosphere and language of the narrative.",
    "how.step4Title": "The revelation",
    "how.step4Text": "You receive a symbolic interpretation of visible lines, without scientific claims.",
    "footer.concept": "Concept by Salazar da Cruz",
    "footer.version": "Version 1.6.1",
    "error.imageRequired": "Select a clear photograph of the palm of your hand.",
    "error.nameRequired": "Enter your name before consulting the oracle.",
    "error.invalidImage": "The selected file is not a valid image.",
    "error.imageTooLarge": "The image is too large. Use a photograph smaller than 12 MB.",
    "error.imageOpen": "The selected image could not be opened.",
    "error.apiConfig": "The API address has not yet been configured in config.js.",
    "error.invalidJson": "The API returned content that is not valid JSON.",
    "error.unexpected": "An unexpected error occurred.",
    "language.pt": "Portuguese",
    "language.en": "English",
    "language.fr": "French"
  },
  fr: {
    "meta.title": "Oracle de la Paume — Lecture Symbolique",
    "meta.description": "Une expérience mystérieuse de lecture symbolique de la paume, créée à des fins de divertissement.",
    "language.label": "Choisir la langue",
    "brand.subtitle": "Le portail des lignes cachées",
    "nav.enter": "Entrer dans l’oracle",
    "hero.eyebrow": "Une chambre ancienne s’ouvre devant vous",
    "hero.title": "Les lignes de votre main gardent des échos à déchiffrer.",
    "hero.text": "Révélez votre paume, choisissez votre guide mythique et recevez une interprétation symbolique fondée sur les traces visibles de votre main.",
    "hero.start": "Commencer le rituel",
    "hero.journey": "Découvrir le parcours",
    "hero.disclaimer": "Expérience de divertissement sans valeur scientifique, clinique ou divinatoire.",
    "reading.eyebrow": "Le rite d’entrée",
    "reading.title": "Préparez la consultation",
    "reading.intro": "Trois étapes suffisent : indiquez votre nom, montrez votre paume et choisissez votre guide.",
    "name.kicker": "Le nom au seuil",
    "name.title": "Comment l’oracle doit-il vous appeler ?",
    "name.description": "Votre nom sert uniquement à personnaliser la lecture.",
    "name.label": "Votre nom",
    "name.placeholder": "Saisissez votre nom",
    "image.kicker": "L’image de la paume",
    "image.title": "Montrez votre main sous une lumière claire",
    "image.description": "Main ouverte, photo prise du dessus et lignes centrales visibles.",
    "image.previewAlt": "Aperçu de l’image de la paume sélectionnée",
    "image.upload": "Prendre une photo ou charger une image",
    "image.format": "JPG, PNG ou WebP · jusqu’à 12 Mo",
    "image.remove": "Retirer l’image",
    "image.instructionsTitle": "Pour aider l’oracle à mieux voir",
    "image.instruction1": "✦ paume entièrement ouverte",
    "image.instruction2": "✦ photo prise du dessus",
    "image.instruction3": "✦ doigts écartés",
    "image.instruction4": "✦ lumière uniforme, sans reflet",
    "image.instruction5": "✦ fond simple",
    "image.instruction6": "✦ ne pas inclure de visage ni de document",
    "tradition.kicker": "Le guide du seuil",
    "tradition.title": "Choisissez la tradition de lecture",
    "tradition.description": "Chaque figure conduit le récit sur un chemin différent.",
    "tradition.legend": "Choisissez la tradition de lecture",
    "tradition.africanFigure": "Sorcier Africain",
    "tradition.africanName": "Africaine",
    "tradition.africanDescription": "Ancêtres, terre, mémoire et continuité.",
    "tradition.africanAlt": "Figure fantastique d’un sorcier africain",
    "tradition.europeanFigure": "Sorcier Européen",
    "tradition.europeanName": "Européenne",
    "tradition.europeanDescription": "Chiromancie classique, choix et cycles.",
    "tradition.europeanAlt": "Figure fantastique d’un sorcier européen",
    "tradition.elvenFigure": "Mage Elfique",
    "tradition.elvenName": "Elfique",
    "tradition.elvenDescription": "Forêts anciennes, étoiles et rivières imaginaires.",
    "tradition.elvenAlt": "Figure fantastique d’un mage elfique",
    "tradition.elementalFigure": "Mage Élémentaire",
    "tradition.elementalName": "Magie Ancienne",
    "tradition.elementalDescription": "Éléments, alchimie, sceaux et portails.",
    "tradition.elementalAlt": "Figure fantastique d’un mage élémentaire",
    "reading.privacy": "Au début de la lecture, la photographie est envoyée temporairement pour analyse et utilisée uniquement dans cette expérience.",
    "reading.submit": "Consulter l’oracle",
    "debug.title": "Diagnostic technique",
    "debug.notice": "La photographie et la clé API ne figurent pas dans ce journal.",
    "debug.copy": "Copier le diagnostic",
    "debug.copied": "Diagnostic copié",
    "loading.eyebrow": "Interprétation des signes",
    "loading.title": "L’oracle observe les lignes de votre main…",
    "loading.personal": "{name}, l’oracle observe les lignes de votre main…",
    "loading.message": "La lumière parcourt les traces visibles et ouvre la voie de la tradition choisie.",
    "result.defaultTitle": "Le message de votre paume",
    "result.personalTitle": "{name}, le message de votre paume",
    "result.quality": "Lisibilité de l’image",
    "result.retakeTitle": "L’image n’est pas assez claire.",
    "result.retakeDefault": "Reprenez la photo avec davantage de lumière et la paume entièrement ouverte.",
    "result.retakeButton": "Choisir une autre image",
    "result.lifeLabel": "Ligne de vie",
    "result.lifeTitle": "Vitalité et chemin",
    "result.headLabel": "Ligne de tête",
    "result.headTitle": "Esprit et décision",
    "result.heartLabel": "Ligne de cœur",
    "result.heartTitle": "Affections et liens",
    "result.fateLabel": "Ligne du destin",
    "result.fateTitle": "Vocation et changements",
    "result.mainLinesKicker": "Les quatre voies centrales",
    "result.mainLinesTitle": "Lignes principales",
    "result.secondaryLinesKicker": "Les traces qui approfondissent la lecture",
    "result.secondaryLinesTitle": "Lignes secondaires",
    "result.sunLabel": "Ligne d’Apollon",
    "result.sunTitle": "Expression, création et reconnaissance",
    "result.mercuryLabel": "Ligne de Mercure",
    "result.mercuryTitle": "Communication et adaptation",
    "result.marsLabel": "Ligne de Mars",
    "result.marsTitle": "Résistance et capacité de récupération",
    "result.intuitionLabel": "Ligne de l’intuition",
    "result.intuitionTitle": "Perception et lecture de l’environnement",
    "result.handDetailsKicker": "L’architecture visible de la paume",
    "result.handDetailsTitle": "Forme, doigts, monts et signes",
    "result.handShapeLabel": "Forme de la main",
    "result.handShapeTitle": "Structure et rythme symbolique",
    "result.fingersLabel": "Doigts et proportions",
    "result.fingersTitle": "Direction, détail et expression",
    "result.thumbLabel": "Pouce et ouverture",
    "result.thumbTitle": "Choix, souplesse et impulsion",
    "result.mountsLabel": "Monts et signes",
    "result.mountsTitle": "Reliefs, croisements et ramifications",
    "result.innerDimensionsKicker": "Dimensions intimes et d’ombre",
    "result.innerDimensionsTitle": "Ombre, intimité et spiritualité",
    "result.innerDimensionsNote": "Ces interprétations sont des métaphores narratives. Elles ne constituent pas un diagnostic psychologique, n’identifient pas l’orientation sexuelle et ne déterminent pas les croyances religieuses.",
    "result.shadowLabel": "Tendances psychopathiques — lecture symbolique",
    "result.shadowTitle": "Froideur, impulsion, contrôle et empathie",
    "result.shadowDisclaimer": "Il ne s’agit ni d’un diagnostic de psychopathie ni d’une évaluation de dangerosité.",
    "result.sexualityLabel": "Sexualité et intimité",
    "result.sexualityTitle": "Désir, sensualité, limites et lien",
    "result.sexualityDisclaimer": "La lecture ne déduit ni orientation sexuelle, ni identité, ni pratiques, ni expériences personnelles.",
    "result.spiritualityLabel": "Spiritualité",
    "result.spiritualityTitle": "Sens, contemplation et lien intérieur",
    "result.spiritualityDisclaimer": "La lecture n’identifie ni religion, ni foi, ni capacité surnaturelle.",
    "result.archetypeLabel": "Archétype révélé",
    "result.share": "Partager la lecture",
    "result.new": "Nouvelle consultation",
    "result.lineNotVisible": "La ligne n’était pas suffisamment visible.",
    "result.defaultArchetype": "Le Voyageur entre les Signes",
    "result.symbolic": "Lecture symbolique",
    "result.copied": "Résultat copié",
    "result.shareTitle": "Oracle de la Paume",
    "result.shareFallback": "Ma lecture de la paume",
    "result.archetypeShare": "Archétype",
    "result.languageNote": "La lecture actuelle a été créée en {language}. Commencez une nouvelle consultation pour recevoir le texte dans cette langue.",
    "tradition.result.africana": "Lecture Africaine",
    "tradition.result.europeia": "Lecture Européenne",
    "tradition.result.elfica": "Lecture Elfique",
    "tradition.result.magia-antiga": "Lecture de Magie Ancienne",
    "stats.eyebrow": "La carte des destinations",
    "stats.title": "L’oracle traverse les frontières",
    "stats.intro": "Chaque lecture terminée allume un point sur la carte. Le compteur conserve uniquement les totaux par pays ; il n’enregistre aucun nom, aucune photographie ni aucune adresse IP dans la base de statistiques.",
    "stats.totalLabel": "Lectures terminées",
    "stats.countriesLabel": "Pays atteints",
    "stats.loading": "Consultation du livre des destinations…",
    "stats.empty": "La carte attend encore sa première lecture terminée.",
    "stats.unavailable": "Les statistiques ne sont pas encore reliées au registre de l’oracle.",
    "stats.showAll": "Voir tous les pays",
    "stats.showLess": "Afficher moins",
    "stats.unknownCountry": "Pays non identifié",
    "stats.readings": "lectures",
    "stats.oneReading": "lecture",
    "how.eyebrow": "Le parcours",
    "how.title": "Déroulement de la lecture",
    "how.step1Title": "Votre nom",
    "how.step1Text": "L’oracle l’utilise uniquement pour s’adresser directement à vous.",
    "how.step2Title": "La photographie",
    "how.step2Text": "La paume est préparée dans le navigateur et envoyée dans une résolution adaptée à la lecture.",
    "how.step3Title": "Le guide mythique",
    "how.step3Text": "La tradition choisie définit l’atmosphère et le langage du récit.",
    "how.step4Title": "La révélation",
    "how.step4Text": "Vous recevez une interprétation symbolique des lignes visibles, sans affirmation scientifique.",
    "footer.concept": "Concept de Salazar da Cruz",
    "footer.version": "Version 1.6.1",
    "error.imageRequired": "Sélectionnez une photographie nette de la paume de votre main.",
    "error.nameRequired": "Saisissez votre nom avant de consulter l’oracle.",
    "error.invalidImage": "Le fichier sélectionné n’est pas une image valide.",
    "error.imageTooLarge": "L’image est trop volumineuse. Utilisez une photographie de moins de 12 Mo.",
    "error.imageOpen": "Impossible d’ouvrir l’image sélectionnée.",
    "error.apiConfig": "L’adresse de l’API n’est pas encore configurée dans config.js.",
    "error.invalidJson": "L’API a renvoyé un contenu JSON invalide.",
    "error.unexpected": "Une erreur inattendue s’est produite.",
    "language.pt": "portugais",
    "language.en": "anglais",
    "language.fr": "français"
  }
};

const LOCALE_CODES = { pt: "pt-PT", en: "en-GB", fr: "fr-FR" };
const SUPPORTED_LANGUAGES = new Set(Object.keys(TRANSLATIONS));

const form = document.getElementById("palm-form");
const imageInput = document.getElementById("palm-image");
const preview = document.getElementById("preview");
const uploadEmpty = document.getElementById("upload-empty");
const removeImageButton = document.getElementById("remove-image");
const dropzone = document.getElementById("dropzone");
const errorBox = document.getElementById("form-error");
const submitButton = document.getElementById("submit-button");
const loadingSection = document.getElementById("oracle-loading");
const resultSection = document.getElementById("result");
const retakeWarning = document.getElementById("retake-warning");
const debugPanel = document.getElementById("debug-panel");
const debugSummary = document.getElementById("debug-summary");
const debugOutput = document.getElementById("debug-output");
const copyDebugButton = document.getElementById("copy-debug");
const statsTotal = document.getElementById("stats-total");
const statsCountries = document.getElementById("stats-countries");
const statsStatus = document.getElementById("stats-status");
const countryStats = document.getElementById("country-stats");
const toggleStatsButton = document.getElementById("toggle-stats");
const apiEndpoint = String(window.ORACULO_CONFIG?.apiUrl || "").replace(/\/$/, "");
const debugMode = window.ORACULO_CONFIG?.debug === true;
const REQUEST_TIMEOUT_MS = 90000;

let currentLanguage = detectInitialLanguage();
let activeDebugReport = null;
let selectedFile = null;
let latestReading = null;
let latestReadingLanguage = null;
let latestTradition = null;
let statsData = null;
let statsExpanded = false;
let statsUnavailable = false;

function detectInitialLanguage() {
  try {
    const stored = localStorage.getItem("oraculo-language");
    if (SUPPORTED_LANGUAGES.has(stored)) return stored;
  } catch {
    // Armazenamento indisponível; segue-se o idioma do navegador.
  }

  const browserLanguage = String(navigator.language || "pt").slice(0, 2).toLowerCase();
  return SUPPORTED_LANGUAGES.has(browserLanguage) ? browserLanguage : "pt";
}

function t(key, variables = {}) {
  const template = TRANSLATIONS[currentLanguage]?.[key] ?? TRANSLATIONS.pt[key] ?? key;
  return String(template).replace(/\{(\w+)\}/g, (_, name) => String(variables[name] ?? ""));
}

function applyLanguage(language, persist = true) {
  if (!SUPPORTED_LANGUAGES.has(language)) return;
  currentLanguage = language;
  document.documentElement.lang = LOCALE_CODES[language];
  document.title = t("meta.title");
  document.querySelector('meta[name="description"]')?.setAttribute("content", t("meta.description"));

  for (const element of document.querySelectorAll("[data-i18n]")) {
    element.textContent = t(element.dataset.i18n);
  }
  for (const element of document.querySelectorAll("[data-i18n-placeholder]")) {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  }
  for (const element of document.querySelectorAll("[data-i18n-alt]")) {
    element.setAttribute("alt", t(element.dataset.i18nAlt));
  }
  for (const element of document.querySelectorAll("[data-i18n-aria]")) {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  }
  for (const button of document.querySelectorAll("[data-language]")) {
    const selected = button.dataset.language === language;
    button.setAttribute("aria-pressed", String(selected));
    button.classList.toggle("active", selected);
  }

  if (persist) {
    try { localStorage.setItem("oraculo-language", language); } catch { /* sem efeito */ }
  }

  refreshDynamicLanguage();
}

function refreshDynamicLanguage() {
  if (latestTradition) {
    document.getElementById("result-tradition").textContent = traditionName(latestTradition);
  }
  updateResultLanguageNote();
  if (statsData) renderStats();
  else if (statsUnavailable) setStatsUnavailable();
}

function traditionName(tradition) {
  return t(`tradition.result.${tradition}`) || t("result.symbolic");
}

function updateResultLanguageNote() {
  const note = document.getElementById("result-language-note");
  if (!latestReadingLanguage || latestReadingLanguage === currentLanguage || resultSection.hidden) {
    note.hidden = true;
    note.textContent = "";
    return;
  }
  note.hidden = false;
  note.textContent = t("result.languageNote", { language: t(`language.${latestReadingLanguage}`) });
}

for (const button of document.querySelectorAll("[data-language]")) {
  button.addEventListener("click", () => applyLanguage(button.dataset.language));
}

applyLanguage(currentLanguage, false);
document.getElementById("year").textContent = new Date().getFullYear();

for (const radio of document.querySelectorAll('input[name="tradition"]')) {
  radio.addEventListener("change", () => {
    document.body.dataset.tradition = radio.value;
  });
}

imageInput.addEventListener("change", () => {
  const [file] = imageInput.files;
  if (file) setImage(file);
});

["dragenter", "dragover"].forEach((eventName) => {
  dropzone.addEventListener(eventName, (event) => {
    event.preventDefault();
    dropzone.classList.add("dragover");
  });
});

["dragleave", "drop"].forEach((eventName) => {
  dropzone.addEventListener(eventName, (event) => {
    event.preventDefault();
    dropzone.classList.remove("dragover");
  });
});

dropzone.addEventListener("drop", (event) => {
  const [file] = event.dataTransfer.files;
  if (file) setImage(file);
});

removeImageButton.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  clearImage();
});

document.getElementById("retake-button").addEventListener("click", () => {
  clearImage();
  resetToForm();
});
document.getElementById("new-reading").addEventListener("click", resetToForm);
document.getElementById("share-reading").addEventListener("click", shareReading);
copyDebugButton.addEventListener("click", copyDebugReport);
toggleStatsButton.addEventListener("click", () => {
  statsExpanded = !statsExpanded;
  renderStats();
});

window.addEventListener("error", (event) => {
  if (!debugMode || !activeDebugReport) return;
  activeDebugReport.browserError = {
    message: event.message,
    source: event.filename,
    line: event.lineno,
    column: event.colno,
    error: serialiseError(event.error)
  };
  renderDebugReport("JavaScript error detected", true);
});

window.addEventListener("unhandledrejection", (event) => {
  if (!debugMode || !activeDebugReport) return;
  activeDebugReport.unhandledPromise = serialiseError(event.reason);
  renderDebugReport("Unhandled promise rejection", true);
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  errorBox.textContent = "";
  resetDebugReport();

  if (!selectedFile) {
    errorBox.textContent = t("error.imageRequired");
    return;
  }

  const readerName = document.getElementById("reader-name").value.trim();
  if (readerName.length < 2) {
    errorBox.textContent = t("error.nameRequired");
    document.getElementById("reader-name").focus();
    return;
  }

  const selectedTradition = form.querySelector('input[name="tradition"]:checked')?.value;
  if (!selectedTradition) return;

  document.getElementById("loading-title").textContent = t("loading.personal", { name: readerName });

  activeDebugReport = createDebugReport();
  activeDebugReport.phase = "Image preparation";
  activeDebugReport.image = {
    name: selectedFile.name,
    type: selectedFile.type,
    originalBytes: selectedFile.size,
    originalMiB: bytesToMiB(selectedFile.size)
  };
  renderDebugReport("Diagnostics in progress", false);

  try {
    setLoading(true);
    const imageDataUrl = await compressImage(selectedFile);

    activeDebugReport.image.compressedDataUrlLength = imageDataUrl.length;
    activeDebugReport.image.estimatedPayloadMiB = bytesToMiB(new Blob([imageDataUrl]).size);

    if (!apiEndpoint || apiEndpoint.includes("SUBDOMINIO")) {
      throw new Error(t("error.apiConfig"));
    }

    activeDebugReport.phase = "API connectivity test";
    activeDebugReport.connectivity = await testApiConnectivity(apiEndpoint);
    renderDebugReport("Connection tested; sending analysis", false);

    const requestBody = {
      imageDataUrl,
      readerName,
      tradition: selectedTradition,
      language: currentLanguage,
      debug: debugMode
    };

    activeDebugReport.phase = "Analysis request sent";
    activeDebugReport.request = {
      method: "POST",
      url: apiEndpoint,
      contentType: "application/json",
      bodyBytes: new Blob([JSON.stringify(requestBody)]).size,
      bodyMiB: bytesToMiB(new Blob([JSON.stringify(requestBody)]).size),
      readerName: requestBody.readerName,
      tradition: requestBody.tradition,
      language: requestBody.language,
      imageOmittedFromLog: true
    };

    const startedAt = performance.now();
    const response = await fetchWithTimeout(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Oraculo-Language": currentLanguage
      },
      body: JSON.stringify(requestBody),
      cache: "no-store"
    }, REQUEST_TIMEOUT_MS);

    const responseText = await response.text();
    const parsed = parseResponseBody(responseText);

    activeDebugReport.response = {
      received: true,
      elapsedMs: Math.round(performance.now() - startedAt),
      status: response.status,
      statusText: response.statusText,
      ok: response.ok,
      type: response.type,
      redirected: response.redirected,
      finalUrl: response.url,
      headers: headersToObject(response.headers),
      body: parsed.value,
      bodyWasJson: parsed.isJson,
      rawBodyPreview: parsed.isJson ? undefined : responseText.slice(0, 5000)
    };

    if (!response.ok) {
      const serverMessage = parsed.value?.error || `HTTP ${response.status}`;
      throw new ApiRequestError(serverMessage, response.status, parsed.value);
    }

    if (!parsed.isJson || !parsed.value || typeof parsed.value !== "object") {
      throw new Error(t("error.invalidJson"));
    }

    latestReading = parsed.value;
    latestReadingLanguage = currentLanguage;
    latestTradition = selectedTradition;
    activeDebugReport.phase = "Analysis completed";
    activeDebugReport.completed = true;
    activeDebugReport.completedAt = new Date().toISOString();
    renderDebugReport("Technical diagnostics — analysis completed", false);
    renderReading(parsed.value, selectedTradition, readerName);
    if (!parsed.value.needsRetake) loadStats();
  } catch (error) {
    setLoading(false);
    form.hidden = false;

    activeDebugReport = activeDebugReport || createDebugReport();
    activeDebugReport.phase = "Failure";
    activeDebugReport.completed = false;
    activeDebugReport.failedAt = new Date().toISOString();
    activeDebugReport.error = serialiseError(error);
    activeDebugReport.diagnosis = diagnoseFailure(error, activeDebugReport);

    errorBox.textContent = error.message || t("error.unexpected");
    renderDebugReport("Technical diagnostics — error detected", true);
    document.getElementById("leitura").scrollIntoView({ behavior: "smooth" });
  }
});

class ApiRequestError extends Error {
  constructor(message, status, body) {
    super(message);
    this.name = "ApiRequestError";
    this.status = status;
    this.body = body;
  }
}

function createDebugReport() {
  return {
    debugMode,
    startedAt: new Date().toISOString(),
    page: {
      url: window.location.href,
      origin: window.location.origin,
      protocol: window.location.protocol,
      online: navigator.onLine,
      language: currentLanguage,
      browserLanguage: navigator.language,
      userAgent: navigator.userAgent
    },
    api: {
      configuredUrl: apiEndpoint || null,
      statsUrl: apiEndpoint ? `${apiEndpoint}/stats` : null,
      isHttps: Boolean(apiEndpoint?.startsWith("https://")),
      hasPlaceholder: Boolean(apiEndpoint?.includes("SUBDOMINIO"))
    }
  };
}

function resetDebugReport() {
  activeDebugReport = null;
  debugPanel.hidden = true;
  debugPanel.open = false;
  debugOutput.textContent = "";
}

function renderDebugReport(summary, open) {
  if (!debugMode || !activeDebugReport) return;
  debugSummary.textContent = summary;
  debugOutput.textContent = JSON.stringify(activeDebugReport, null, 2);
  debugPanel.hidden = false;
  debugPanel.open = open;
}

async function copyDebugReport() {
  if (!activeDebugReport) return;
  const text = JSON.stringify(activeDebugReport, null, 2);
  try {
    await navigator.clipboard.writeText(text);
    const original = copyDebugButton.textContent;
    copyDebugButton.textContent = t("debug.copied");
    setTimeout(() => { copyDebugButton.textContent = original; }, 1800);
  } catch {
    debugOutput.focus();
    window.getSelection()?.selectAllChildren(debugOutput);
  }
}

async function testApiConnectivity(url) {
  const report = { testedAt: new Date().toISOString(), corsReadableRequest: null, opaqueReachabilityRequest: null, inference: "" };

  try {
    const response = await fetchWithTimeout(url, { method: "GET", cache: "no-store" }, 12000);
    const text = await response.text();
    const parsed = parseResponseBody(text);
    report.corsReadableRequest = {
      success: true,
      status: response.status,
      statusText: response.statusText,
      ok: response.ok,
      type: response.type,
      finalUrl: response.url,
      headers: headersToObject(response.headers),
      body: parsed.value,
      bodyWasJson: parsed.isJson
    };
    report.inference = response.ok
      ? "The Worker is accessible and the GET response is readable from this origin."
      : "The Worker responded and the browser read the response, but the HTTP status indicates an error.";
    return report;
  } catch (corsError) {
    report.corsReadableRequest = { success: false, error: serialiseError(corsError) };
  }

  try {
    const opaqueResponse = await fetchWithTimeout(url, { method: "GET", mode: "no-cors", cache: "no-store" }, 12000);
    report.opaqueReachabilityRequest = { success: true, type: opaqueResponse.type, status: opaqueResponse.status };
    report.inference = "The address appears reachable, but the normal response is not readable. CORS or a redirect is the most likely cause.";
  } catch (networkError) {
    report.opaqueReachabilityRequest = { success: false, error: serialiseError(networkError) };
    report.inference = "Neither connectivity test reached the address. Check the Worker URL, deployment, network blocks or HTTPS certificate.";
  }

  return report;
}

async function fetchWithTimeout(url, options, timeoutMs) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timeoutId);
  }
}

function parseResponseBody(text) {
  if (!text) return { isJson: false, value: null };
  try { return { isJson: true, value: JSON.parse(text) }; }
  catch { return { isJson: false, value: text }; }
}

function headersToObject(headers) {
  const result = {};
  for (const [key, value] of headers.entries()) result[key] = value;
  return result;
}

function serialiseError(error) {
  if (!error) return { name: "UnknownError", message: "No error details." };
  if (typeof error === "string") return { name: "Error", message: error };
  return {
    name: error.name || "Error",
    message: error.message || String(error),
    stack: error.stack || null,
    status: error.status || null,
    body: error.body || null,
    cause: error.cause ? String(error.cause) : null
  };
}

function diagnoseFailure(error, report) {
  const message = String(error?.message || "").toLowerCase();
  const connectivity = report?.connectivity;
  if (!navigator.onLine) return "The browser is offline.";
  if (!apiEndpoint || apiEndpoint.includes("SUBDOMINIO")) return "config.js contains an incomplete API address.";
  if (error?.name === "AbortError") return "The request exceeded the 90-second limit.";
  if (message.includes("failed to fetch") || error?.name === "TypeError") {
    if (connectivity?.opaqueReachabilityRequest?.success && !connectivity?.corsReadableRequest?.success) {
      return "The Worker is online, but CORS does not authorise this origin.";
    }
    return "The browser did not receive a usable response. Check the URL, deployment, CORS, HTTPS or network blocks.";
  }
  if (error?.status === 401) return "Groq rejected the API credential.";
  if (error?.status === 403) return "The Worker or Groq rejected the request.";
  if (error?.status === 404) return "The Worker route was not found.";
  if (error?.status === 413) return "The request exceeded the accepted size.";
  if (error?.status === 429) return "The Groq request or token limit was reached.";
  if (error?.status >= 500) return "The failure occurred in the Worker or Groq service.";
  return "Review the error, connectivity, request and response fields.";
}

function bytesToMiB(bytes) {
  return Math.round((Number(bytes || 0) / 1024 / 1024) * 100) / 100;
}

function setImage(file) {
  if (!file.type.startsWith("image/")) {
    errorBox.textContent = t("error.invalidImage");
    return;
  }
  if (file.size > 12 * 1024 * 1024) {
    errorBox.textContent = t("error.imageTooLarge");
    return;
  }

  selectedFile = file;
  preview.src = URL.createObjectURL(file);
  preview.hidden = false;
  uploadEmpty.hidden = true;
  removeImageButton.hidden = false;
  errorBox.textContent = "";
}

function clearImage() {
  selectedFile = null;
  imageInput.value = "";
  preview.src = "";
  preview.hidden = true;
  uploadEmpty.hidden = false;
  removeImageButton.hidden = true;
}

async function compressImage(file) {
  const source = await loadImageSource(file);
  const sourceWidth = source.width || source.naturalWidth;
  const sourceHeight = source.height || source.naturalHeight;
  const maxSide = 2048;
  const scale = Math.min(1, maxSide / Math.max(sourceWidth, sourceHeight));
  const width = Math.max(1, Math.round(sourceWidth * scale));
  const height = Math.max(1, Math.round(sourceHeight * scale));

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d", { alpha: false });
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "high";
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, width, height);
  context.drawImage(source, 0, 0, width, height);
  if (typeof source.close === "function") source.close();

  if (activeDebugReport?.image) {
    activeDebugReport.image.sourceWidth = sourceWidth;
    activeDebugReport.image.sourceHeight = sourceHeight;
    activeDebugReport.image.sentWidth = width;
    activeDebugReport.image.sentHeight = height;
    activeDebugReport.image.jpegQuality = 0.92;
  }

  return canvas.toDataURL("image/jpeg", 0.92);
}

async function loadImageSource(file) {
  if ("createImageBitmap" in window) return createImageBitmap(file);
  return new Promise((resolve, reject) => {
    const image = new Image();
    const objectUrl = URL.createObjectURL(file);
    image.onload = () => { URL.revokeObjectURL(objectUrl); resolve(image); };
    image.onerror = () => { URL.revokeObjectURL(objectUrl); reject(new Error(t("error.imageOpen"))); };
    image.src = objectUrl;
  });
}

function setLoading(active) {
  submitButton.disabled = active;
  form.hidden = active;
  resultSection.hidden = true;
  loadingSection.hidden = !active;
  if (active) loadingSection.scrollIntoView({ behavior: "smooth", block: "center" });
}

function renderReading(data, tradition, readerName = "") {
  setLoading(false);
  resultSection.hidden = false;
  const needsRetake = Boolean(data.needsRetake);
  retakeWarning.hidden = !needsRetake;

  for (const element of resultSection.querySelectorAll(".main-prophecy, .result-grid, .closing-prophecy")) {
    element.hidden = needsRetake;
  }
  document.getElementById("share-reading").hidden = needsRetake;

  document.getElementById("result-tradition").textContent = traditionName(tradition);
  document.getElementById("result-title").textContent = data.title || t("result.personalTitle", { name: readerName || "" });
  document.getElementById("quality-score").textContent = `${Number(data.imageQuality || 0)}%`;
  document.getElementById("retake-message").textContent = data.retakeReason || t("result.retakeDefault");
  document.getElementById("opening-message").textContent = data.opening || "";
  document.getElementById("life-reading").textContent = data.lines?.life || t("result.lineNotVisible");
  document.getElementById("head-reading").textContent = data.lines?.head || t("result.lineNotVisible");
  document.getElementById("heart-reading").textContent = data.lines?.heart || t("result.lineNotVisible");
  document.getElementById("fate-reading").textContent = data.lines?.fate || t("result.lineNotVisible");
  document.getElementById("sun-reading").textContent = data.lines?.sun || t("result.lineNotVisible");
  document.getElementById("mercury-reading").textContent = data.lines?.mercury || t("result.lineNotVisible");
  document.getElementById("mars-reading").textContent = data.lines?.mars || t("result.lineNotVisible");
  document.getElementById("intuition-reading").textContent = data.lines?.intuition || t("result.lineNotVisible");
  document.getElementById("hand-shape-reading").textContent = data.features?.handShape || t("result.lineNotVisible");
  document.getElementById("fingers-reading").textContent = data.features?.fingers || t("result.lineNotVisible");
  document.getElementById("thumb-reading").textContent = data.features?.thumb || t("result.lineNotVisible");
  document.getElementById("mounts-reading").textContent = data.features?.mountsAndSigns || t("result.lineNotVisible");
  document.getElementById("shadow-reading").textContent = data.dimensions?.shadow || t("result.lineNotVisible");
  document.getElementById("sexuality-reading").textContent = data.dimensions?.sexuality || t("result.lineNotVisible");
  document.getElementById("spirituality-reading").textContent = data.dimensions?.spirituality || t("result.lineNotVisible");
  document.getElementById("archetype").textContent = data.archetype || t("result.defaultArchetype");
  document.getElementById("closing-message").textContent = data.closing || "";

  const symbolsRow = document.getElementById("symbols-row");
  symbolsRow.innerHTML = "";
  for (const symbol of data.symbols || []) {
    const chip = document.createElement("span");
    chip.className = "symbol-chip";
    chip.textContent = symbol;
    symbolsRow.appendChild(chip);
  }

  updateResultLanguageNote();
  resultSection.scrollIntoView({ behavior: "smooth" });
}

function resetToForm() {
  resultSection.hidden = true;
  loadingSection.hidden = true;
  form.hidden = false;
  document.getElementById("result-language-note").hidden = true;
  document.getElementById("leitura").scrollIntoView({ behavior: "smooth" });
}

async function shareReading() {
  if (!latestReading) return;
  const text = `${latestReading.title || t("result.shareFallback")}\n\n${latestReading.opening || ""}\n\n${t("result.archetypeShare")}: ${latestReading.archetype || ""}`;
  try {
    if (navigator.share) {
      await navigator.share({ title: t("result.shareTitle"), text, url: window.location.href });
    } else {
      await navigator.clipboard.writeText(text);
      const button = document.getElementById("share-reading");
      const original = button.textContent;
      button.textContent = t("result.copied");
      setTimeout(() => { button.textContent = original; }, 1800);
    }
  } catch {
    // O cancelamento da partilha não exige mensagem de erro.
  }
}

async function loadStats() {
  if (!apiEndpoint || apiEndpoint.includes("SUBDOMINIO")) {
    setStatsUnavailable();
    return;
  }

  statsUnavailable = false;
  statsStatus.hidden = false;
  statsStatus.textContent = t("stats.loading");
  if (!statsStatus.isConnected) countryStats.appendChild(statsStatus);
  try {
    const response = await fetch(`${apiEndpoint}/stats`, {
      method: "GET",
      headers: { "X-Oraculo-Language": currentLanguage },
      cache: "no-store"
    });
    const body = await response.json().catch(() => null);
    if (!response.ok || !body?.configured) {
      setStatsUnavailable();
      return;
    }
    statsData = body;
    statsUnavailable = false;
    renderStats();
  } catch {
    setStatsUnavailable();
  }
}

function setStatsUnavailable() {
  statsData = null;
  statsUnavailable = true;
  statsTotal.textContent = "—";
  statsCountries.textContent = "—";
  countryStats.innerHTML = "";
  statsStatus.textContent = t("stats.unavailable");
  statsStatus.hidden = false;
  countryStats.appendChild(statsStatus);
  toggleStatsButton.hidden = true;
}

function renderStats() {
  if (!statsData) return;
  const countries = Array.isArray(statsData.countries) ? statsData.countries : [];
  statsTotal.textContent = formatNumber(statsData.total || 0);
  statsCountries.textContent = formatNumber(statsData.countryCount || countries.length);
  countryStats.innerHTML = "";

  if (!countries.length) {
    statsStatus.textContent = t("stats.empty");
    statsStatus.hidden = false;
    countryStats.appendChild(statsStatus);
    toggleStatsButton.hidden = true;
    return;
  }

  statsStatus.hidden = true;
  const visibleCountries = statsExpanded ? countries : countries.slice(0, 12);
  const maximum = Math.max(...countries.map((item) => Number(item.count || 0)), 1);

  for (const item of visibleCountries) {
    const code = String(item.countryCode || "XX").toUpperCase();
    const count = Number(item.count || 0);
    const card = document.createElement("article");
    card.className = "country-stat";
    card.style.setProperty("--country-share", `${Math.max(4, Math.round((count / maximum) * 100))}%`);

    const identity = document.createElement("div");
    identity.className = "country-identity";
    const flag = document.createElement("span");
    flag.className = "country-flag";
    flag.textContent = countryFlag(code);
    flag.setAttribute("aria-hidden", "true");
    const name = document.createElement("strong");
    name.textContent = countryName(code);
    identity.append(flag, name);

    const bar = document.createElement("span");
    bar.className = "country-bar";
    bar.setAttribute("aria-hidden", "true");

    const value = document.createElement("span");
    value.className = "country-count";
    value.textContent = `${formatNumber(count)} ${count === 1 ? t("stats.oneReading") : t("stats.readings")}`;

    card.append(identity, bar, value);
    countryStats.appendChild(card);
  }

  toggleStatsButton.hidden = countries.length <= 12;
  toggleStatsButton.textContent = statsExpanded ? t("stats.showLess") : t("stats.showAll");
}

function countryName(code) {
  if (!/^[A-Z]{2}$/.test(code) || ["XX", "T1", "A1", "A2"].includes(code)) return t("stats.unknownCountry");
  try {
    const names = new Intl.DisplayNames([LOCALE_CODES[currentLanguage]], { type: "region" });
    return names.of(code) || code;
  } catch {
    return code;
  }
}

function countryFlag(code) {
  if (!/^[A-Z]{2}$/.test(code) || ["XX", "T1", "A1", "A2"].includes(code)) return "◉";
  return String.fromCodePoint(...[...code].map((character) => 127397 + character.charCodeAt(0)));
}

function formatNumber(value) {
  return new Intl.NumberFormat(LOCALE_CODES[currentLanguage]).format(Number(value || 0));
}

function initOracleEye() {
  const eye = document.querySelector(".oracle-eye");
  if (!eye) return;

  let currentX = 0;
  let currentY = 0;
  let targetX = 0;
  let targetY = 0;
  let animationFrame = null;

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  function animate() {
    currentX += (targetX - currentX) * 0.16;
    currentY += (targetY - currentY) * 0.16;
    eye.style.setProperty("--eye-x", currentX.toFixed(3));
    eye.style.setProperty("--eye-y", currentY.toFixed(3));
    eye.style.setProperty("--gaze-x", currentX.toFixed(3));
    eye.style.setProperty("--gaze-y", currentY.toFixed(3));
    eye.style.setProperty("--eye-tilt", `${(currentX * 2.2).toFixed(2)}deg`);

    if (Math.abs(targetX - currentX) > 0.001 || Math.abs(targetY - currentY) > 0.001) {
      animationFrame = requestAnimationFrame(animate);
    } else {
      animationFrame = null;
    }
  }

  function updateTarget(clientX, clientY) {
    const rect = eye.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = clientX - centerX;
    const dy = clientY - centerY;
    const distance = Math.hypot(dx, dy) || 1;

    const angleX = dx / distance;
    const angleY = dy / distance;
    const reachX = clamp(Math.abs(dx) / (rect.width * 2.2), 0, 1);
    const reachY = clamp(Math.abs(dy) / (rect.height * 3.1), 0, 1);

    targetX = clamp(angleX * reachX, -1, 1);
    targetY = clamp(angleY * reachY, -1, 1);

    if (!animationFrame) animationFrame = requestAnimationFrame(animate);
  }

  window.addEventListener("pointermove", (event) => updateTarget(event.clientX, event.clientY), { passive: true });
  window.addEventListener("pointerleave", () => {
    targetX = 0;
    targetY = 0;
    if (!animationFrame) animationFrame = requestAnimationFrame(animate);
  });
  window.addEventListener("blur", () => {
    targetX = 0;
    targetY = 0;
    if (!animationFrame) animationFrame = requestAnimationFrame(animate);
  });

  updateTarget(window.innerWidth / 2, window.innerHeight / 2);
}

function drawStars() {
  const canvas = document.getElementById("stars");
  const context = canvas.getContext("2d");
  const ratio = Math.min(window.devicePixelRatio || 1, 2);

  function resize() {
    canvas.width = window.innerWidth * ratio;
    canvas.height = window.innerHeight * ratio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    render();
  }

  function render() {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    const count = Math.floor((window.innerWidth * window.innerHeight) / 11000);
    for (let index = 0; index < count; index += 1) {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const radius = Math.random() * 1.2 + 0.2;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fillStyle = `rgba(255,255,255,${Math.random() * 0.45 + 0.08})`;
      context.fill();
    }
  }

  window.addEventListener("resize", resize);
  resize();
}

initOracleEye();
drawStars();
loadStats();
