export const MODULES_FR_PART2 = [
  // ─── INTERMEDIÁRIO ───────────────────────────────────────────────────────────

  {
    id: 'int-fr-1',
    language: 'fr',
    stage: 'Intermediário',
    title: 'Imparfait — descrições e hábitos no passado',
    subtitle: 'Descreva situações passadas e ações habituais com o imparfait.',
    theory: `## O que é o imparfait

O **imparfait** descreve estados, cenários e hábitos no passado — contrasta com o **passé composé**, que narra eventos pontuais e concluídos.

• Quand j'étais petit, j'habitais à Lyon. (Quando eu era pequeno, eu morava em Lyon — estado contínuo)
• Il faisait beau ce jour-là. (Fazia bom tempo aquele dia — cenário)
• Nous mangions du pain tous les matins. (Nós comíamos pão todas as manhãs — hábito)

## Formação

Raiz: **nous** do presente, removendo o **-ons** final. Único verbo irregular na raiz: **être → ét-**.

| Pronome   | Terminação | parler    | être    | avoir   | faire    |
|-----------|------------|-----------|---------|---------|----------|
| je        | -ais       | parlais   | étais   | avais   | faisais  |
| tu        | -ais       | parlais   | étais   | avais   | faisais  |
| il/elle   | -ait       | parlait   | était   | avait   | faisait  |
| nous      | -ions      | parlions  | étions  | avions  | faisions |
| vous      | -iez       | parliez   | étiez   | aviez   | faisiez  |
| ils/elles | -aient     | parlaient | étaient | avaient | faisaient|

💡 Truque para não confundir as pessoas do singular com o plural: **je/tu/il/ils** terminam todos com o som "-ê" (-ais/-ait/-aient se pronunciam igual); só **nous** (-ions) e **vous** (-iez) soam diferentes.

## Imparfait x passé composé

| Passé composé (evento pontual) | Imparfait (estado/hábito) |
|---------------------------------|----------------------------|
| J'ai mangé une pomme. (comi — ação concluída) | Je mangeais une pomme quand il est entré. (eu comia — ação em curso) |
| Il est arrivé à midi. (chegou — momento preciso) | Il faisait beau. (fazia bom tempo — cenário de fundo) |
| Elle a téléphoné trois fois. (telefonou — fato contado) | Elle téléphonait tous les jours. (telefonava — hábito) |

⚠️ Não traduza automaticamente todo passado português por passé composé. "Eu ia à praia todo verão" é hábito → imparfait (j'allais), não "je suis allé".

⚠️ Cuidado com a terminação **-ions/-iez** dos verbos em **-ier** e **-yer** (étudier, payer): a raiz já termina em "i" ou "y", então nous étudiions, vous étudiiez têm dois "i" seguidos — isso é correto, não um erro de digitação.

## Vocabulário-chave

• habiter — morar
• jouer — jogar
• travailler — trabalhar
• se souvenir — lembrar-se
• dormir — dormir
• porter des lunettes — usar óculos
• arriver en retard — chegar atrasado
• un chien — um cachorro
• le matin — a manhã
• la plage — a praia
• brillait (briller) — brilhava
• chantaient (chanter) — cantavam
• un roman — um romance
• simplement — simplesmente
• heureux/heureuse — feliz`,
    exercises: [
      {
      sentences: [
        { prompt: 'Quando eu era criança, eu comia muito pão.', answers: ["Quand j'étais enfant, je mangeais beaucoup de pain."] },
        { prompt: 'Ele falava francês muito bem.', answers: ['Il parlait très bien le français.'] },
        { prompt: 'Nós íamos à praia todo verão.', answers: ["Nous allions à la plage tous les étés."] },
        { prompt: 'Ela sempre dormia cedo.', answers: ['Elle dormait toujours tôt.'] },
        { prompt: 'Vocês moravam em Paris?', answers: ['Vous habitiez à Paris ?'] },
        { prompt: 'Eles jogavam futebol todos os fins de semana.', answers: ['Ils jouaient au foot tous les week-ends.'] },
        { prompt: 'O sol brilhava e os pássaros cantavam.', answers: ['Le soleil brillait et les oiseaux chantaient.'] },
        { prompt: 'Eu trabalhava num escritório grande.', answers: ["Je travaillais dans un grand bureau."] },
        { prompt: 'Você estudava muito na universidade?', answers: ["Tu étudiais beaucoup à l'université ?", "Vous étudiiez beaucoup à l'université ?"] },
        { prompt: 'Ela usava óculos na época.', answers: ['Elle portait des lunettes à cette époque.'] },
        { prompt: 'Nós tínhamos um cachorro chamado Rex.', answers: ["Nous avions un chien qui s'appelait Rex."] },
        { prompt: 'Eles chegavam sempre atrasados.', answers: ['Ils arrivaient toujours en retard.'] },
        { prompt: 'Eu gostava muito de ler romances.', answers: ["J'aimais beaucoup lire des romans."] },
        { prompt: 'Você queria ser médico quando era pequeno?', answers: ["Tu voulais être médecin quand tu étais petit ?"] },
        { prompt: 'Choveu enquanto nós caminhávamos.', answers: ["Il pleuvait pendant que nous marchions."] },
        { prompt: 'Ela sabia a resposta mas não dizia nada.', answers: ['Elle savait la réponse mais ne disait rien.'] },
        { prompt: 'Nós bebíamos café todas as manhãs.', answers: ['Nous buvions du café tous les matins.'] },
        { prompt: 'O trem partia às seis da manhã.', answers: ['Le train partait à six heures du matin.'] },
        { prompt: 'Eu me lembrava do caminho.', answers: ["Je me souvenais du chemin."] },
        { prompt: 'Eles viviam simplesmente mas eram felizes.', answers: ['Ils vivaient simplement mais ils étaient heureux.'] },
      ],
      },
    ],
  },

  {
    id: 'int-fr-2',
    language: 'fr',
    stage: 'Intermediário',
    title: 'Futur simple — promessas e previsões',
    subtitle: 'Fale sobre o futuro com o futur simple.',
    theory: `## Formação

**Futur simple** = infinitivo + terminações abaixo (verbos em **-re** removem o **-e** final antes de adicionar a terminação). Equivale a "vou fazer", "ele será", "nós iremos".

• Je parlerai avec elle demain. (Eu falarei com ela amanhã.)
• Nous finirons le projet bientôt. (Nós terminaremos o projeto em breve.)
• Elle vendra sa voiture. (Ela venderá seu carro — vendre → vendr-.)

| Pronome   | Terminação | parler    | finir    | être  | avoir |
|-----------|------------|-----------|----------|-------|-------|
| je        | -ai        | parlerai  | finirai  | serai | aurai |
| tu        | -as        | parleras  | finiras  | seras | auras |
| il/elle   | -a         | parlera   | finira   | sera  | aura  |
| nous      | -ons       | parlerons | finirons | serons| aurons|
| vous      | -ez        | parlerez  | finirez  | serez | aurez |
| ils/elles | -ont       | parleront | finiront | seront| auront|

## Raízes irregulares importantes

| Verbo            | Raiz do futuro | Exemplo  |
|------------------|----------------|----------|
| aller            | ir-            | irai     |
| faire            | fer-           | ferai    |
| pouvoir          | pourr-         | pourrai  |
| vouloir          | voudr-         | voudrai  |
| venir            | viendr-        | viendrai |
| savoir           | saur-          | saurai   |
| voir             | verr-          | verrai   |
| devoir           | devr-          | devrai   |

💡 As terminações do futur simple são, na verdade, o presente do verbo **avoir** abreviado (-ai, -as, -a, -ons, -ez, -ont) — pensar nisso ajuda a memorizar.

⚠️ Não confunda o futur simple com o **futur proche** (aller + infinitivo). "Je vais parler" (vou falar, mais imediato/coloquial) e "Je parlerai" (falarei, mais formal/distante) não são sempre intercambiáveis — em francês falado, o futur proche é mais comum no dia a dia.

⚠️ Cuidado com a ortografia de verbos como **acheter** e **appeler**: j'achèterai (acento grave), j'appellerai (dobra o "l") — a raiz muda mesmo sendo verbos regulares em -er.

## Vocabulário-chave

• promettre — prometer
• rentrer — voltar para casa
• rendre visite à — visitar (alguém)
• commencer — começar
• durer — durar
• oublier — esquecer
• apprendre — aprender
• une réunion — uma reunião
• une fête — uma festa
• une prévision / la météo — a previsão / o tempo (meteorologia)
• l'automne — o outono
• l'hiver — o inverno
• le dîner — o jantar`,
    exercises: [
      {
      sentences: [
        { prompt: 'Eu falarei com ela amanhã.', answers: ['Je parlerai avec elle demain.'] },
        { prompt: 'Você irá à escola?', answers: ["Tu iras à l'école ?", "Vous irez à l'école ?"] },
        { prompt: 'Ele será um grande chef.', answers: ['Il sera un grand chef.'] },
        { prompt: 'Nós teremos uma reunião sexta-feira.', answers: ['Nous aurons une réunion vendredi.'] },
        { prompt: 'Vocês poderão vir à festa?', answers: ["Vous pourrez venir à la fête ?"] },
        { prompt: 'Eles farão o trabalho mais tarde.', answers: ['Ils feront le travail plus tard.'] },
        { prompt: 'Eu prometo que voltarei cedo.', answers: ['Je promets que je rentrerai tôt.'] },
        { prompt: 'Amanhã vai chover, segundo a previsão.', answers: ["Il pleuvra demain, selon les prévisions.", "Demain il pleuvra, selon la météo."] },
        { prompt: 'Ela virá nos visitar no mês que vem.', answers: ['Elle viendra nous rendre visite le mois prochain.'] },
        { prompt: 'Você saberá a resposta em breve.', answers: ['Tu sauras la réponse bientôt.'] },
        { prompt: 'Nós viveremos na França por dois anos.', answers: ['Nous vivrons en France pendant deux ans.'] },
        { prompt: 'O filme começará às oito horas.', answers: ['Le film commencera à huit heures.'] },
        { prompt: 'Eu não esquecerei esse momento.', answers: ["Je n'oublierai pas ce moment."] },
        { prompt: 'Eles venderão a casa no outono.', answers: ["Ils vendront la maison en automne."] },
        { prompt: 'Você quererá experimentar isso, com certeza.', answers: ['Tu voudras essayer ça, j\'en suis sûr.', "Tu voudras essayer cela, c'est sûr."] },
        { prompt: 'Nós nos veremos em breve.', answers: ['Nous nous verrons bientôt.'] },
        { prompt: 'A cerimônia durará cerca de duas horas.', answers: ['La cérémonie durera environ deux heures.'] },
        { prompt: 'Eu aprenderei a tocar guitarra.', answers: ["J'apprendrai à jouer de la guitare."] },
        { prompt: 'Eles devem chegar antes do jantar.', answers: ["Ils arriveront avant le dîner."] },
        { prompt: 'O inverno será frio este ano.', answers: ["L'hiver sera froid cette année."] },
      ],
      },
    ],
  },

  {
    id: 'int-fr-3',
    language: 'fr',
    stage: 'Intermediário',
    title: 'Conditionnel présent — polidez e hipóteses',
    subtitle: 'Expresse polidez, desejo e condições com o conditionnel.',
    theory: `## Formação

**Conditionnel présent** = raiz do futur simple (a mesma, incluindo irregulares) + terminações do imparfait (-ais, -ais, -ait, -ions, -iez, -aient).

| Pronome   | voudrais  | pourrait | serait  |
|-----------|-----------|----------|---------|
| je        | voudrais  | pourrais | serais  |
| tu        | voudrais  | pourrais | serais  |
| il/elle   | voudrait  | pourrait | serait  |
| nous      | voudrions | pourrions| serions |
| vous      | voudriez  | pourriez | seriez  |
| ils/elles | voudraient| pourraient| seraient|

## Quando usar

**1. Polidez** — pedidos mais suaves que o presente:
• Je voudrais un café, s'il vous plaît. (Eu gostaria de um café, por favor.)
• Pourriez-vous m'aider ? (Você poderia me ajudar?)

**2. Hipóteses com "si"** — condição no **imparfait**, resultado no **conditionnel**:
• Si j'avais de l'argent, j'achèterais une maison. (Se eu tivesse dinheiro, compraria uma casa.)
• Si elle étudiait plus, elle réussirait. (Se ela estudasse mais, passaria.)

**3. Conselho ou sugestão** com **devoir**:
• Tu devrais te reposer. (Você deveria descansar.)

| Expressão útil       | Tradução              |
|----------------------|-----------------------|
| je voudrais          | eu gostaria           |
| il faudrait          | seria necessário      |
| ce serait            | seria                 |
| je pourrais          | eu poderia            |
| j'aimerais           | eu gostaria/adoraria  |

⚠️ Erro comum de lusófonos: usar o **futur simple** dentro da cláusula com "si" (si + futur). Em francês, depois de "si" de condição, NUNCA se usa futuro nem conditionnel — apenas imparfait ou présent: ✗ "si j'aurai" → ✓ "si j'avais" / "si j'ai".

⚠️ Não confunda a grafia: **conditionnel** tem raiz do **futuro** (parler-ai → parler-ais), não do imparfait do indicativo. "Je parlerais" (eu falaria) vs. "je parlais" (eu falava) diferem só por um "r" — mas a pronúncia e o sentido mudam completamente.

💡 Pense no conditionnel como "o futuro visto do passado, ou um futuro hipotético" — por isso ele compartilha a raiz do futur simple.

## Vocabulário-chave

• réserver — reservar
• préférer — preferir
• adorer — adorar
• essayer — experimentar, tentar
• expliquer — explicar
• un verre de vin — uma taça de vinho
• une table pour deux — uma mesa para dois
• à l'avance — com antecedência
• à temps — a tempo
• une nouvelle — uma notícia`,
    exercises: [
      {
      sentences: [
        { prompt: 'Eu gostaria de uma taça de vinho, por favor.', answers: ["Je voudrais un verre de vin, s'il vous plaît."] },
        { prompt: 'Você poderia me ajudar?', answers: ["Pourriez-vous m'aider ?", "Vous pourriez m'aider ?", "Tu pourrais m'aider ?"] },
        { prompt: 'Seria melhor partir mais cedo.', answers: ["Il vaudrait mieux partir plus tôt.", "Ce serait mieux de partir plus tôt."] },
        { prompt: 'Se eu tivesse dinheiro, compraria uma casa.', answers: ["Si j'avais de l'argent, j'achèterais une maison."] },
        { prompt: 'Ele deveria estudar mais.', answers: ["Il devrait étudier davantage."] },
        { prompt: 'Seria possível reservar uma mesa para dois?', answers: ["Ce serait possible de réserver une table pour deux ?", "Serait-il possible de réserver une table pour deux ?"] },
        { prompt: 'Nós adoraríamos visitar a Torre Eiffel.', answers: ["Nous adorerions visiter la Tour Eiffel."] },
        { prompt: 'Você preferiria chá ou café?', answers: ['Vous préféreriez du thé ou du café ?', 'Tu préférerais du thé ou du café ?'] },
        { prompt: 'Seria necessário reservar com antecedência.', answers: ["Il faudrait réserver à l'avance."] },
        { prompt: 'Se ele estudasse mais, passaria no exame.', answers: ["S'il étudiait davantage, il réussirait l'examen."] },
        { prompt: 'Eu poderia ligar amanhã?', answers: ["Je pourrais appeler demain ?", "Est-ce que je pourrais appeler demain ?"] },
        { prompt: 'Eles deveriam chegar antes das nove.', answers: ["Ils devraient arriver avant neuf heures."] },
        { prompt: 'Isso seria perfeito!', answers: ["Ce serait parfait !"] },
        { prompt: 'Se nós tivéssemos tempo, viajaríamos mais.', answers: ["Si nous avions le temps, nous voyagerions davantage."] },
        { prompt: 'Você poderia fechar a janela?', answers: ["Tu pourrais fermer la fenêtre ?", "Vous pourriez fermer la fenêtre ?"] },
        { prompt: 'Eu gostaria de experimentar o prato do dia.', answers: ["Je voudrais essayer le plat du jour."] },
        { prompt: 'Ele ficaria feliz em receber essa notícia.', answers: ['Il serait content de recevoir cette nouvelle.'] },
        { prompt: 'Nós deveríamos ligar para ela.', answers: ["Nous devrions l'appeler."] },
        { prompt: 'Sem ajuda, eu não conseguiria terminar a tempo.', answers: ["Sans aide, je ne pourrais pas finir à temps."] },
        { prompt: 'Você poderia me explicar isso de novo?', answers: ["Tu pourrais m'expliquer ça encore une fois ?", "Vous pourriez m'expliquer cela à nouveau ?"] },
      ],
      },
    ],
  },

  {
    id: 'int-fr-4',
    language: 'fr',
    stage: 'Intermediário',
    title: 'Pronomes objeto direto e indireto',
    subtitle: 'Use le, la, les, lui, leur, me, te, nous, vous no lugar de substantivos.',
    theory: `## Posição na frase

Os pronomes objeto vêm **ANTES** do verbo conjugado (ou antes do auxiliar no passé composé) — diferente do português, que costuma colocar depois.

• Je le vois tous les jours. (Eu o vejo todos os dias.)
• Elle l'a vu hier. (Ela o viu ontem.)
• Nous allons leur écrire. (Vamos escrever para eles — antes do infinitivo quando há verbo auxiliar + infinitivo.)

## Pronome objeto direto (COD) — substitui um substantivo sem preposição

| Pronome | Tradução  | Exemplo |
|---------|-----------|---------|
| le      | o / ele   | Je le connais. (Eu o conheço.) |
| la      | a / ela   | Elle l'appelle. (Ela a chama.) |
| les     | os / as   | Nous les invitons. (Nós os convidamos.) |

## Pronome objeto indireto (COI) — substitui "à + pessoa"

| Pronome | Tradução       | Exemplo |
|---------|----------------|---------|
| lui     | a ele / a ela  | Je lui parle. (Eu falo com ele/ela.) |
| leur    | a eles / a elas| Il leur écrit. (Ele escreve para eles.) |

## Pronomes que servem para COD e COI

| Pronome | Pessoa         |
|---------|----------------|
| me / m' | me (1ª sing.)  |
| te / t' | te (2ª sing.)  |
| nous    | nos (1ª pl.)   |
| vous    | vos (2ª pl.)   |

## Concordância no passé composé

Quando o **COD** vem antes do verbo (sempre o caso com pronomes), o particípio passado concorda em gênero/número com ele:
• Je l'ai vue hier. (Eu a vi ontem — vue, feminino, porque "la" = ela.)
• Tu les as appelés ? (Você os chamou? — appelés, plural.)

⚠️ Essa concordância NÃO se aplica ao COI: "Elle lui a offert un cadeau" — sem concordância, porque "lui" é objeto indireto.

⚠️ Cuidado com a ordem quando há dois pronomes na frase: me/te/nous/vous/se vêm antes de le/la/les, que vêm antes de lui/leur. Ex.: "Il me le donne" (Ele me dá isso), nunca "le me donne".

💡 Dica de pronúncia: diante de vogal, le/la/te/me se elidem (l', t', m'): "je l'aime", "tu m'écoutes" — sem isso a frase soa estranha e quebra a liaison natural do francês.

## Vocabulário-chave

• connaître — conhecer
• appeler — chamar
• inviter — convidar
• comprendre — compreender
• reconnaître — reconhecer
• convaincre — convencer
• offrir un cadeau — oferecer um presente
• attendre — esperar
• dire la vérité — dizer a verdade
• expliquer la situation — explicar a situação`,
    exercises: [
      {
      sentences: [
        { prompt: 'Eu o vejo todos os dias. (ele)', answers: ["Je le vois tous les jours."] },
        { prompt: 'Ela a chama pelo nome. (ela)', answers: ["Elle l'appelle par son nom."] },
        { prompt: 'Nós os conhecemos bem. (eles)', answers: ['Nous les connaissons bien.'] },
        { prompt: 'Eu lhe falo amanhã. (a ela)', answers: ["Je lui parle demain."] },
        { prompt: 'Ele lhes escreve toda semana. (a eles)', answers: ['Il leur écrit toutes les semaines.'] },
        { prompt: 'Ela me telefona toda manhã.', answers: ["Elle me téléphone tous les matins."] },
        { prompt: 'Eu te amo.', answers: ["Je t'aime."] },
        { prompt: 'Ele nos convida para jantar.', answers: ["Il nous invite à dîner."] },
        { prompt: 'Eu a vi ontem. (ela, passé composé)', answers: ["Je l'ai vue hier."] },
        { prompt: 'Você os chamou? (eles)', answers: ["Tu les as appelés ?", "Vous les avez appelés ?"] },
        { prompt: 'Ela lhe deu um presente. (a ele)', answers: ["Elle lui a offert un cadeau."] },
        { prompt: 'Eu não o compreendo. (ele)', answers: ["Je ne le comprends pas."] },
        { prompt: 'Você me escuta?', answers: ["Tu m'écoutes ?", "Vous m'écoutez ?"] },
        { prompt: 'Nós lhes explicamos a situação. (a eles)', answers: ['Nous leur avons expliqué la situation.'] },
        { prompt: 'Ela os convenceu. (eles)', answers: ["Elle les a convaincus."] },
        { prompt: 'Eu vou lhe dizer a verdade. (a ela)', answers: ["Je vais lui dire la vérité."] },
        { prompt: 'Você pode nos ajudar?', answers: ["Tu peux nous aider ?", "Vous pouvez nous aider ?"] },
        { prompt: 'Ele não a reconheceu. (ela)', answers: ["Il ne l'a pas reconnue."] },
        { prompt: 'Eu lhes escrevi ontem. (a elas)', answers: ["Je leur ai écrit hier."] },
        { prompt: 'Ela te espera lá fora.', answers: ["Elle t'attend dehors."] },
      ],
      },
    ],
  },

  {
    id: 'int-fr-5',
    language: 'fr',
    stage: 'Intermediário',
    title: 'Perguntas — formação e palavras interrogativas',
    subtitle: 'Faça perguntas com inversão, est-ce que e palavras interrogativas.',
    theory: `## Três formas de perguntar

Da mais informal/falada à mais formal/escrita:

| Tipo           | Exemplo                          | Registro |
|----------------|-----------------------------------|----------|
| Entonação      | Tu parles français ?             | informal, fala cotidiana |
| Est-ce que     | Est-ce que tu parles français ?  | neutro, uso geral |
| Inversão       | Parles-tu français ?             | formal, escrita |

💡 O **-t-** aparece na inversão quando o verbo termina em vogal antes de il/elle/on: "parle-t-il ?", "a-t-elle fini ?" — é só um som de ligação, não muda o sentido.

## Palavras interrogativas

| Palavra      | Significado    | Com est-ce que                |
|--------------|----------------|--------------------------------|
| qui          | quem           | Qui est-ce que tu connais ?    |
| que / quoi   | o quê          | Qu'est-ce que tu fais ?        |
| où           | onde           | Où est-ce que tu habites ?     |
| quand        | quando         | Quand est-ce qu'il arrive ?    |
| comment      | como           | Comment est-ce qu'on dit ?     |
| pourquoi     | por quê        | Pourquoi est-ce qu'il part ?   |
| combien      | quanto/quantos | Combien coûte-t-il ?           |
| quel/quelle  | qual           | Quelle heure est-il ?          |

• Où habites-tu ? / Où est-ce que tu habites ? (Onde você mora?)
• Pourquoi pleures-tu ? (Por que você está chorando?)
• Quel livre préfères-tu ? (Qual livro você prefere? — quel concorda em gênero/número com o substantivo.)

## Erros comuns

⚠️ "Que" sozinho antes do verbo precisa de inversão ou "est-ce que": não se diz "Que tu fais ?" — é "Que fais-tu ?" ou "Qu'est-ce que tu fais ?".

⚠️ Não confunda **quel** (adjetivo, concorda com o substantivo: quel, quelle, quels, quelles) com **qu'est-ce que** (pronome fixo). "Quel est ton nom ?" está correto; "Qu'est-ce que ton nom ?" está errado.

⚠️ Em registro informal falado, manter a ordem afirmativa só com entonação de pergunta é comum ("Tu viens ?"), mas evite isso em textos formais ou exames — prefira "est-ce que" ou inversão.

## Vocabulário-chave

• habiter — morar
• arriver — chegar
• rire — rir
• chercher — procurar
• se trouver — encontrar-se, ficar (localização)
• naître — nascer
• la gare — a estação (de trem)
• un frère — um irmão
• un médecin — um médico
• le cinéma — o cinema`,
    exercises: [
      {
      sentences: [
        { prompt: 'Onde você mora?', answers: ["Où habites-tu ?", "Où est-ce que tu habites ?", "Tu habites où ?"] },
        { prompt: 'Quando você chega?', answers: ["Quand arrives-tu ?", "Quand est-ce que tu arrives ?", "Tu arrives quand ?"] },
        { prompt: 'Como você se chama?', answers: ["Comment vous appelez-vous ?", "Comment tu t'appelles ?", "Comment est-ce que tu t'appelles ?"] },
        { prompt: 'Por que você está rindo?', answers: ["Pourquoi ris-tu ?", "Pourquoi est-ce que tu ris ?", "Tu ris pourquoi ?"] },
        { prompt: 'Quem é essa pessoa?', answers: ["Qui est cette personne ?"] },
        { prompt: 'Quantos irmãos você tem?', answers: ["Combien de frères as-tu ?", "Combien de frères est-ce que tu as ?"] },
        { prompt: 'O que você quer comer?', answers: ["Que veux-tu manger ?", "Qu'est-ce que tu veux manger ?"] },
        { prompt: 'Como vai você?', answers: ["Comment allez-vous ?", "Comment vas-tu ?", "Comment ça va ?"] },
        { prompt: 'Onde fica a estação?', answers: ["Où se trouve la gare ?", "Où est la gare ?"] },
        { prompt: 'Por que ela não veio?', answers: ["Pourquoi n'est-elle pas venue ?", "Pourquoi est-ce qu'elle n'est pas venue ?"] },
        { prompt: 'O que você está fazendo?', answers: ["Que fais-tu ?", "Qu'est-ce que tu fais ?"] },
        { prompt: 'Quem você procura?', answers: ["Qui cherchez-vous ?", "Qui est-ce que tu cherches ?"] },
        { prompt: 'Quando o trem parte?', answers: ["Quand part le train ?", "Quand est-ce que le train part ?"] },
        { prompt: 'Quanto custa isso?', answers: ["Combien ça coûte ?", "Combien coûte-t-il ?"] },
        { prompt: 'Como você foi ao trabalho?', answers: ["Comment es-tu allé au travail ?", "Comment est-ce que tu es allé au travail ?"] },
        { prompt: 'Você fala inglês?', answers: ["Parlez-vous anglais ?", "Est-ce que tu parles anglais ?", "Tu parles anglais ?"] },
        { prompt: 'Há um médico aqui?', answers: ["Y a-t-il un médecin ici ?", "Est-ce qu'il y a un médecin ici ?"] },
        { prompt: 'Onde você nasceu?', answers: ["Où êtes-vous né ?", "Où est-ce que tu es né ?", "Tu es né où ?"] },
        { prompt: 'Com quem você foi ao cinema?', answers: ["Avec qui es-tu allé au cinéma ?", "Avec qui tu es allé au cinéma ?"] },
        { prompt: 'O que isso significa?', answers: ["Qu'est-ce que ça veut dire ?", "Que signifie cela ?"] },
      ],
      },
    ],
  },

  // ─── AVANÇADO ─────────────────────────────────────────────────────────────────

  {
    id: 'adv-fr-1',
    language: 'fr',
    stage: 'Avançado',
    title: 'Subjonctif présent — dúvida, vontade e emoção',
    subtitle: 'Use o subjuntivo após expressões de dúvida, vontade e emoção.',
    theory: `## Quando usar

O **subjonctif** é obrigatório depois de expressões de vontade, emoção, dúvida, necessidade e certas conjunções — sempre introduzido por "que".

| Expressão déclenchante   | Tradução            |
|--------------------------|---------------------|
| il faut que              | é preciso que       |
| je veux que              | eu quero que        |
| bien que / quoique       | embora              |
| pour que                 | para que            |
| il est possible que      | é possível que      |
| je doute que             | eu duvido que       |
| je suis content(e) que   | estou feliz que     |
| avant que                | antes que           |
| à condition que          | desde que/com a condição de |

## Formação

Raiz da 3ª pessoa do plural do presente (**ils parlent → parl-**) + terminações -e, -es, -e, -ions, -iez, -ent. Para **nous/vous**, a raiz costuma coincidir com o imparfait.

| Pronome   | parler    | être    | avoir  | aller   | faire    |
|-----------|-----------|---------|--------|---------|----------|
| je        | parle     | sois    | aie    | aille   | fasse    |
| tu        | parles    | sois    | aies   | ailles  | fasses   |
| il/elle   | parle     | soit    | ait    | aille   | fasse    |
| nous      | parlions  | soyons  | ayons  | allions | fassions |
| vous      | parliez   | soyez   | ayez   | alliez  | fassiez  |
| ils/elles | parlent   | soient  | aient  | aillent | fassent  |

• Il faut que tu partes maintenant. (É preciso que você parta agora.)
• Je suis content que tu sois venu. (Estou feliz que você tenha vindo.)
• Bien qu'il pleuve, nous sortirons. (Embora chova, nós sairemos.)

## Indicatif x subjonctif

| Indicatif (fato certo)         | Subjonctif (dúvida/vontade/emoção) |
|--------------------------------|--------------------------------------|
| Je sais qu'il vient. (sei que ele vem — fato) | Je veux qu'il vienne. (quero que ele venha — vontade) |
| Je crois qu'elle a raison. (creio que ela está certa) | Je doute qu'elle ait raison. (duvido que ela esteja certa) |

⚠️ "Espérer que" é exceção: mesmo expressando desejo, usa o **indicatif**, não o subjonctif. "J'espère que tu vas bien" (não "que tu ailles bien").

⚠️ "Après que" usa indicatif, mas "avant que" usa subjonctif — são pares fáceis de confundir.

💡 Truque para lembrar os déclencheurs: pense em "vontade, emoção, dúvida, necessidade" — se a frase principal expressa uma dessas quatro coisas sobre uma ação que ainda não é certa, use o subjonctif na subordinada.

## Vocabulário-chave

• collaborer — colaborar
• finir à temps — terminar a tempo
• à l'heure — pontual, na hora
• un passeport — um passaporte
• avoir peur — ter medo
• avoir tort — estar errado
• être surpris — estar surpreso
• dommage — pena, lamentável
• quand même — mesmo assim`,
    exercises: [
      {
      sentences: [
        { prompt: 'É preciso que você fale mais devagar.', answers: ["Il faut que vous parliez plus lentement.", "Il faut que tu parles plus lentement."] },
        { prompt: 'Eu quero que ele venha à festa.', answers: ["Je veux qu'il vienne à la fête."] },
        { prompt: 'Embora ela seja tímida, ela fala bem em público.', answers: ["Bien qu'elle soit timide, elle parle bien en public."] },
        { prompt: 'Estou feliz que você esteja aqui.', answers: ["Je suis content que tu sois là.", "Je suis contente que tu sois là."] },
        { prompt: 'É possível que ele não saiba a verdade.', answers: ["Il est possible qu'il ne sache pas la vérité."] },
        { prompt: 'Eu duvido que eles possam terminar a tempo.', answers: ["Je doute qu'ils puissent finir à temps."] },
        { prompt: 'Para que você entenda, vou explicar tudo.', answers: ["Pour que tu comprennes, je vais tout expliquer."] },
        { prompt: 'É importante que nós sejamos pontuais.', answers: ["Il est important que nous soyons à l'heure."] },
        { prompt: 'Ela quer que eu faça o trabalho por ela.', answers: ["Elle veut que je fasse le travail à sa place."] },
        { prompt: 'Estou com medo de que você não queira.', answers: ["J'ai peur que tu ne veuilles pas."] },
        { prompt: 'É necessário que ele tenha seu passaporte.', answers: ["Il est nécessaire qu'il ait son passeport."] },
        { prompt: 'Embora seja difícil, continuaremos tentando.', answers: ["Bien que ce soit difficile, nous continuerons d'essayer."] },
        { prompt: 'Eu prefiro que você venha sozinha.', answers: ["Je préfère que tu viennes seule."] },
        { prompt: 'É lamentável que eles não possam estar aqui.', answers: ["Il est dommage qu'ils ne puissent pas être là."] },
        { prompt: 'Precisamos sair antes que ele chegue.', answers: ["Nous devons partir avant qu'il arrive."] },
        { prompt: 'Estou surpreso que ela saiba disso.', answers: ["Je suis surpris qu'elle sache ça."] },
        { prompt: 'É bom que você tenha tempo para isso.', answers: ["Il est bien que tu aies le temps pour ça."] },
        { prompt: 'Eu não acho que ele esteja errado.', answers: ["Je ne crois pas qu'il ait tort.", "Je ne pense pas qu'il ait tort."] },
        { prompt: 'Para que o projeto funcione, todos devem colaborar.', answers: ["Pour que le projet fonctionne, tout le monde doit collaborer."] },
        { prompt: 'Embora chova, sairemos de qualquer forma.', answers: ["Bien qu'il pleuve, nous sortirons quand même."] },
      ],
      },
    ],
  },

  {
    id: 'adv-fr-2',
    language: 'fr',
    stage: 'Avançado',
    title: 'Voix passive — voz passiva',
    subtitle: 'Construa frases na voz passiva com être + particípio passado.',
    theory: `## Formação

**Voz passiva** = être (no tempo desejado) + particípio passado, que sempre concorda em gênero/número com o sujeito. O agente (quem pratica a ação) é introduzido por **"par"**.

| Tempo          | Estrutura                    | Exemplo                              |
|----------------|------------------------------|----------------------------------------|
| Présent        | est/sont + particípio        | Le livre est lu par les étudiants. (O livro é lido pelos alunos.) |
| Passé composé  | a été/ont été + particípio   | La lettre a été écrite par Marie. (A carta foi escrita por Marie.) |
| Futur simple   | sera/seront + particípio     | La maison sera vendue. (A casa será vendida.) |
| Imparfait      | était/étaient + particípio   | Le repas était préparé par le chef. (A refeição era preparada pelo chef.) |

## Regras importantes

• Só verbos **transitivos diretos** (com objeto direto, sem preposição) admitem a passiva: "écrire qch" → passiva possível; "obéir à qn" → sem passiva direta em francês.
• O particípio concorda sempre com o sujeito da passiva: "Les lettres ont été écrites." (concordância feminina plural).
• Quando o agente é vago ou desconhecido, "par" é frequentemente omitido: "La porte a été ouverte." (A porta foi aberta — sem dizer por quem.)

## Active x passive

| Voz ativa                          | Voz passiva                                |
|-------------------------------------|---------------------------------------------|
| Les étudiants lisent le livre.      | Le livre est lu par les étudiants.          |
| Marie a écrit la lettre.            | La lettre a été écrite par Marie.           |
| On vendra la maison.                | La maison sera vendue.                      |

⚠️ Cuidado com verbos pronominais que expressam ideia de passiva sem "être + particípio": "Ça se vend bien" (Isso se vende bem / vende-se bem) é mais natural que "C'est bien vendu" em muitos contextos.

⚠️ Não esqueça a concordância: é erro comum de lusófonos (que têm menos concordância de particípio no dia a dia) escrever "La maison a été vendu" em vez de "vendue".

💡 Use "par" para o agente que pratica uma ação concreta (par le vent, par les enfants) e "de" para sentimentos/estados mais abstratos: "Il est aimé de tous." (Ele é amado por todos.)

## Vocabulário-chave

• arrêter — prender, parar
• livrer — entregar
• présenter — apresentar
• réaliser un film — dirigir um filme
• signer — assinar
• annuler — cancelar
• construire — construir
• traduire — traduzir
• corriger — corrigir
• analyser — analisar
• sain et sauf — são e salvo`,
    exercises: [
      {
      sentences: [
        { prompt: 'O livro é lido pelos alunos.', answers: ["Le livre est lu par les étudiants."] },
        { prompt: 'A carta foi escrita por Marie.', answers: ["La lettre a été écrite par Marie."] },
        { prompt: 'A casa será vendida no verão.', answers: ["La maison sera vendue en été."] },
        { prompt: 'O ladrão foi preso pela polícia.', answers: ["Le voleur a été arrêté par la police."] },
        { prompt: 'A encomenda foi entregue ontem.', answers: ["Le colis a été livré hier."] },
        { prompt: 'O projeto será apresentado na semana que vem.', answers: ["Le projet sera présenté la semaine prochaine."] },
        { prompt: 'Esse filme foi dirigido por um cineasta francês.', answers: ["Ce film a été réalisé par un cinéaste français."] },
        { prompt: 'O prêmio foi dado à melhor equipe.', answers: ["Le prix a été donné à la meilleure équipe."] },
        { prompt: 'Os documentos foram assinados pelo diretor.', answers: ["Les documents ont été signés par le directeur."] },
        { prompt: 'A reunião foi cancelada sem explicação.', answers: ["La réunion a été annulée sans explication."] },
        { prompt: 'A ponte foi construída no século XIX.', answers: ["Le pont a été construit au XIXe siècle."] },
        { prompt: 'Esse romance foi traduzido em vinte línguas.', answers: ["Ce roman a été traduit en vingt langues."] },
        { prompt: 'Os ingressos serão vendidos online.', answers: ["Les billets seront vendus en ligne."] },
        { prompt: 'A janela foi quebrada por uma bola.', answers: ["La fenêtre a été cassée par un ballon."] },
        { prompt: 'O erro foi corrigido pelo professor.', answers: ["L'erreur a été corrigée par le professeur."] },
        { prompt: 'O contrato deve ser assinado antes de sexta.', answers: ["Le contrat doit être signé avant vendredi."] },
        { prompt: 'A criança foi encontrada sã e salva.', answers: ["L'enfant a été retrouvé sain et sauf."] },
        { prompt: 'As novas regras foram anunciadas ontem.', answers: ["Les nouvelles règles ont été annoncées hier."] },
        { prompt: 'Esse quadro foi pintado por Monet.', answers: ["Ce tableau a été peint par Monet."] },
        { prompt: 'Os dados serão analisados pelos cientistas.', answers: ["Les données seront analysées par les scientifiques."] },
      ],
      },
    ],
  },

  {
    id: 'adv-fr-3',
    language: 'fr',
    stage: 'Avançado',
    title: 'Discours indirect — discurso indireto',
    subtitle: 'Reporte o que alguém disse, perguntou ou pediu.',
    theory: `## O que é

O **discours indirect** reporta o que alguém disse, perguntou ou pediu, sem usar aspas, integrando a fala numa frase subordinada.

## Quatro padrões principais

**1. Afirmações** → il dit que + verbo
• Il dit qu'il est fatigué. (Ele diz que está cansado.)

**2. Perguntas sim/não** → il demande si + verbo
• Elle demande si je parle français. (Ela pergunta se eu falo francês.)

**3. Perguntas abertas** → palavra interrogativa + verbo, sem inversão; "que" vira "ce que"
• Il demande ce que je veux manger. (Ele pergunta o que eu quero comer.)
• Elle demande où j'habite. (Ela pergunta onde eu moro.)

**4. Ordens/pedidos** → il dit de + infinitivo
• Il me dit de fermer la porte. (Ele me diz para fechar a porta.)

## Concordância dos tempos verbais

Quando o verbo introdutor está no passado, o tempo da fala original "recua":

| Discurso Direto    | Discurso Indireto       |
|--------------------|-------------------------|
| présent            | imparfait               |
| passé composé      | plus-que-parfait        |
| futur              | conditionnel            |

• "Je suis fatigué." → Il a dit qu'il était fatigué. (Ele disse que estava cansado.)
• "J'ai fini." → Elle a dit qu'elle avait fini. (Ela disse que tinha terminado.)
• "Je viendrai." → Il a dit qu'il viendrait. (Ele disse que viria.)

## Mudanças de referência temporal

| Direto       | Indireto       |
|--------------|----------------|
| maintenant   | alors          |
| hier         | la veille      |
| demain       | le lendemain   |
| aujourd'hui  | ce jour-là     |

⚠️ Não esqueça de mudar também os advérbios de tempo, não só os verbos: "Il a dit qu'il partirait le lendemain" (Ele disse que partiria no dia seguinte), nunca "...qu'il partirait demain" quando o verbo principal está no passado.

⚠️ Cuidado com a ordem das palavras nas perguntas reportadas: não há inversão nem "est-ce que" dentro do discurso indireto. ✗ "Il demande où est-ce que j'habite" → ✓ "Il demande où j'habite".

💡 Pense no discurso indireto como uma "máquina do tempo": cada tempo verbal e cada palavra de tempo recuam um passo quando a fala é relatada no passado.

## Vocabulário-chave

• annoncer — anunciar
• affirmer — afirmar
• conseiller — aconselhar
• expliquer — explicar
• se taire — calar-se
• gagner un prix — ganhar um prêmio
• être enceinte — estar grávida
• triste — triste
• sûr/sûre — seguro, certo`,
    exercises: [
      {
      sentences: [
        { prompt: 'Ele disse que estava cansado.', answers: ["Il a dit qu'il était fatigué."] },
        { prompt: 'Ela perguntou se eu falava francês.', answers: ["Elle a demandé si je parlais français."] },
        { prompt: 'Ele me disse para fechar a porta.', answers: ["Il m'a dit de fermer la porte."] },
        { prompt: 'Ela perguntou onde eu morava.', answers: ["Elle a demandé où j'habitais."] },
        { prompt: 'Ele anunciou que partiria na manhã seguinte.', answers: ["Il a annoncé qu'il partirait le lendemain matin."] },
        { prompt: 'Ela pediu que eu ficasse quieto.', answers: ["Elle m'a demandé de me taire."] },
        { prompt: 'Ele explicou como o aparelho funcionava.', answers: ["Il a expliqué comment l'appareil fonctionnait."] },
        { prompt: 'Ela disse que não sabia a resposta.', answers: ["Elle a dit qu'elle ne savait pas la réponse."] },
        { prompt: 'Ele perguntou o que eu queria comer.', answers: ["Il a demandé ce que je voulais manger."] },
        { prompt: 'Ela afirmou que tinha feito o trabalho.', answers: ["Elle a affirmé qu'elle avait fait le travail."] },
        { prompt: 'O professor disse aos alunos para estudarem mais.', answers: ["Le professeur a dit aux élèves d'étudier davantage."] },
        { prompt: 'Ela perguntou quando chegaríamos.', answers: ["Elle a demandé quand nous arriverions."] },
        { prompt: 'Ele me contou que havia ganho um prêmio.', answers: ["Il m'a dit qu'il avait gagné un prix."] },
        { prompt: 'Ela perguntou por que eu estava triste.', answers: ["Elle a demandé pourquoi j'étais triste."] },
        { prompt: 'Ele me aconselhou a não sair à noite.', answers: ["Il m'a conseillé de ne pas sortir le soir."] },
        { prompt: 'Ela disse que a reunião havia sido cancelada.', answers: ["Elle a dit que la réunion avait été annulée."] },
        { prompt: 'Ele perguntou quem eu havia convidado.', answers: ["Il a demandé qui j'avais invité."] },
        { prompt: 'Ela respondeu que não tinha certeza.', answers: ["Elle a répondu qu'elle n'était pas sûre."] },
        { prompt: 'Ele me pediu que não dissesse nada.', answers: ["Il m'a demandé de ne rien dire."] },
        { prompt: 'Ela anunciou que estava grávida naquele momento.', answers: ["Elle a annoncé qu'elle était enceinte à ce moment-là."] },
      ],
      },
    ],
  },

  {
    id: 'adv-fr-4',
    language: 'fr',
    stage: 'Avançado',
    title: 'Expressões idiomáticas e gírias francesas',
    subtitle: 'Aprenda expressões típicas do francês coloquial e idiomático.',
    theory: `## Por que aprender expressões idiomáticas

O francês falado está cheio de idiomáticas que não se traduzem literalmente — conhecê-las é essencial para entender nativos e soar natural.

## Expressões idiomáticas comuns

| Expressão idiomática           | Tradução real                     |
|----------------------------------|--------------------------------------|
| avoir le cafard                | estar deprimido ("ter a barata")  |
| casser les pieds                | chatear, importunar                |
| avoir le coup de foudre         | se apaixonar à primeira vista      |
| poser un lapin                  | dar um bolo em alguém              |
| tomber dans les pommes          | desmaiar                            |
| avoir du pain sur la planche    | ter muito trabalho pela frente     |
| prendre la poudre d'escampette  | fugir às escondidas                |
| avoir la tête dans les nuages   | estar distraído, sonhando           |
| c'est du gâteau                 | é fácil, é moleza                   |

• J'ai le cafard depuis hier. (Estou deprimido desde ontem.)
• Elle m'a posé un lapin. (Ela me deu um bolo.)
• C'était du gâteau, cet examen ! (Esse exame foi moleza!)

## Gírias (argot) do dia a dia

| Gíria          | Significado          |
|----------------|------------------------|
| sympa          | simpático              |
| boulot         | trabalho                |
| truc / machin  | coisa                   |
| mec            | cara, sujeito           |
| meuf           | mulher                  |
| flic           | policial                |
| bouffer        | comer (informal)        |
| fric / blé     | dinheiro (informal)     |

⚠️ Idiomáticas raramente se traduzem palavra por palavra — "tomber dans les pommes" não tem nada a ver com maçãs em português; memorize o sentido completo, não as palavras isoladas.

⚠️ Gírias como "mec", "meuf", "fric" são apropriadas em contexto informal entre amigos, mas seriam deselegantes numa conversa formal ou profissional — use com discernimento de registro.

💡 Dica de estudo: associe cada expressão a uma imagem mental vívida (a "barata da depressão", o "coelho do bolo dado") — isso ajuda a fixar expressões sem lógica literal.

## Vocabulário-chave

• ça ne me dit rien — isso não me diz nada
• donner la chair de poule — dar arrepios
• être mort de fatigue — estar morto de cansaço
• être fauché — estar sem dinheiro
• raconter des salades — contar lorotas, enrolar
• être au top — ser excelente
• rester dans son coin — ficar na sua, isolado
• on se casse — vamos embora`,
    exercises: [
      {
      sentences: [
        { prompt: 'Estou deprimido desde ontem. (avoir le cafard)', answers: ["J'ai le cafard depuis hier."] },
        { prompt: 'Esse colega me irrita muito. (casser les pieds)', answers: ["Ce collègue me casse les pieds."] },
        { prompt: 'Ele se apaixonou à primeira vista por ela. (coup de foudre)', answers: ["Il a eu le coup de foudre pour elle."] },
        { prompt: 'Ela me deu um bolo ontem. (poser un lapin)', answers: ["Elle m'a posé un lapin hier."] },
        { prompt: 'Ela desmaiou de calor. (tomber dans les pommes)', answers: ["Elle est tombée dans les pommes à cause de la chaleur."] },
        { prompt: 'Isso não me diz nada. (ne pas me dire grand-chose)', answers: ["Ça ne me dit rien."] },
        { prompt: 'Meu trabalho é muito chato hoje. (boulot)', answers: ["Mon boulot est vraiment ennuyeux aujourd'hui."] },
        { prompt: 'Esse cara é muito simpático. (mec / sympa)', answers: ["Ce mec est vraiment sympa."] },
        { prompt: 'Ela tem algo estranho hoje. (un truc bizarre)', answers: ["Elle a un truc bizarre aujourd'hui."] },
        { prompt: 'Eu estou morto de cansaço. (être mort de fatigue)', answers: ["Je suis mort de fatigue."] },
        { prompt: 'Isso me dá arrepios. (donner la chair de poule)', answers: ["Ça me donne la chair de poule."] },
        { prompt: 'Ele virou a mesa. (retourner la situation)', answers: ["Il a retourné la situation."] },
        { prompt: 'Não tenho dinheiro nenhum. (être fauché)', answers: ["Je suis fauché.", "Je n'ai pas un sou."] },
        { prompt: 'Pare de me enrolar. (arrêter de raconter des salades)', answers: ["Arrête de raconter des salades.", "Arrête de me raconter des histoires."] },
        { prompt: 'Ele é excelente naquilo que faz. (être au top)', answers: ["Il est au top dans ce qu'il fait."] },
        { prompt: "Isso é uma maravilha! (c'est le pied)", answers: ["C'est le pied !"] },
        { prompt: 'Ela está com a cabeça nas nuvens. (avoir la tête dans les nuages)', answers: ["Elle a la tête dans les nuages."] },
        { prompt: "Isso foi mole! (c'était du gâteau)", answers: ["C'était du gâteau !"] },
        { prompt: 'Ele ficou na dele e não falou nada. (rester dans son coin)', answers: ["Il est resté dans son coin et n'a rien dit."] },
        { prompt: 'Vamos embora! Rapidinho! (on se casse)', answers: ["On se casse !", "Allez, on y va !"] },
      ],
      },
    ],
  },

  // ─── Revisão Intermediário ───────────────────────────────────────────────
  {
    id: 'rev-int-fr', stage: 'Intermediário', language: 'fr', order: 99, isReview: true,
    title: 'Révision — Intermédiaire',
    subtitle: 'Subjonctif, imparfait, pronomes e passiva',
    theory: null,
    exercises: [
      {
        sentences: [
          { prompt: 'É preciso que você venha agora.', answers: ["Il faut que tu viennes maintenant."] },
          { prompt: 'Quando era criança, ia ao parque todos os dias.', answers: ["Quand j'étais enfant, j'allais au parc tous les jours."] },
          { prompt: 'O livro foi escrito por um jovem autor.', answers: ["Le livre a été écrit par un jeune auteur."] },
          { prompt: 'Ela me deu o livro que eu procurava.', answers: ["Elle m'a donné le livre que je cherchais."] },
          { prompt: 'Espero que você esteja bem.', answers: ["J'espère que tu vas bien.", "J'espère que vous allez bien."] },
          { prompt: 'Antes de sair, ele apagou as luzes.', answers: ["Avant de partir, il a éteint les lumières."] },
          { prompt: 'Ele não sabia que ela já tinha chegado.', answers: ["Il ne savait pas qu'elle était déjà arrivée."] },
          { prompt: 'Diga-me o que você pensa disso.', answers: ["Dis-moi ce que tu penses de ça.", "Dites-moi ce que vous pensez de ça."] },
        ],
      },
    ],
    dialogExercise: {
      audioText: "Quand j'étais petite, j'habitais à la campagne. Maintenant je vis en ville, mais j'espère que mes enfants puissent connaître la nature.",
      question: 'O que a pessoa espera para os filhos?',
      options: [
        { text: 'Que os filhos possam conhecer a natureza.', correct: true },
        { text: 'Que os filhos morem no campo como ela morou.', correct: false },
        { text: 'Que os filhos estudem em escola no campo.', correct: false },
        { text: 'Que os filhos gostem da vida na cidade.', correct: false },
      ],
    },
  },

  // ─── Revisão Avançado ────────────────────────────────────────────────────
  {
    id: 'rev-adv-fr', stage: 'Avançado', language: 'fr', order: 99, isReview: true,
    title: 'Révision — Avancé',
    subtitle: 'Conditionnel passé, discurso indireto, expressões idiomáticas',
    theory: null,
    exercises: [
      {
        sentences: [
          { prompt: 'Se eu tivesse estudado mais, teria passado no exame.', answers: ["Si j'avais plus étudié, j'aurais réussi l'examen."] },
          { prompt: 'Ela me disse que tinha terminado o projeto.', answers: ["Elle m'a dit qu'elle avait terminé le projet."] },
          { prompt: 'Quanto mais pratico, mais fico fluente.', answers: ["Plus je pratique, plus je deviens fluent.", "Plus je m'entraîne, plus je suis à l'aise."] },
          { prompt: 'Isso foi mole! (expressão)', answers: ["C'était du gâteau !",''] },
          { prompt: 'Apesar do cansaço, ela terminou o relatório.', answers: ["Malgré la fatigue, elle a terminé le rapport."] },
          { prompt: 'A pessoa a quem ele falou era minha professora.', answers: ["La personne à qui il a parlé était ma professeure."] },
          { prompt: 'Não há nada que eu possa fazer agora.', answers: ["Il n'y a rien que je puisse faire maintenant."] },
          { prompt: 'O que fica não é o que acumulamos, mas o que vivemos.', answers: ["Ce qui reste, ce n'est pas ce qu'on accumule, mais ce qu'on a vécu."] },
        ],
      },
    ],
    dialogExercise: {
      audioText: "Si j'avais su que le concert était annulé, je n'aurais pas pris le train. C'était du gâteau de rester à la maison !",
      question: 'O que a pessoa lamenta?',
      options: [
        { text: 'Ter pegado o trem para um concerto cancelado.', correct: true },
        { text: 'Ter perdido o trem para o concerto.', correct: false },
        { text: 'Ter ficado em casa e perdido o concerto.', correct: false },
        { text: 'Ter comprado ingresso caro para o concerto.', correct: false },
      ],
    },
  },

  // ─── VARIADOS ─────────────────────────────────────────────────────────────────

  {
    id: 'var-fr-1',
    language: 'fr',
    stage: 'Variados',
    title: '100 frases práticas do cotidiano',
    subtitle: 'Compras, restaurante, transporte e trabalho em francês.',
    theory: `## Sobre este módulo

Estas 100 frases cobrem situações práticas do dia a dia: **compras**, **restaurante**, **transporte** e **trabalho**. São frases de nível básico a intermediário, focadas em comunicação real e imediata.

## Exemplos de cada situação

• Combien coûte cette chemise ? (Quanto custa essa camisa? — compras)
• Une table pour deux personnes, s'il vous plaît. (Uma mesa para duas pessoas, por favor — restaurante)
• Quel bus va à l'aéroport ? (Qual ônibus vai para o aeroporto? — transporte)
• Je peux travailler de chez moi demain ? (Posso trabalhar de casa amanhã? — trabalho)

💡 Frases curtas e fixas como "L'addition, s'il vous plaît" ou "C'est en promotion ?" funcionam como blocos prontos — memorize-as inteiras, sem tentar montá-las palavra por palavra na hora.

⚠️ Em francês, "s'il vous plaît" (formal, com vous) e "s'il te plaît" (informal, com tu) não são intercambiáveis — usar a forma errada com um estranho ou superior pode parecer deselegante.

Pratique estas frases para ganhar fluência nas situações mais comuns da vida cotidiana francófona.

## Vocabulário-chave

• acheter — comprar
• échanger — trocar
• essayer — experimentar
• réserver — reservar
• recommander — recomendar
• louer — alugar
• confirmer — confirmar
• reporter — adiar
• la carte / le menu — o cardápio
• l'addition — a conta
• le distributeur automatique — o caixa eletrônico
• la pharmacie — a farmácia
• le commissariat — a delegacia
• la valise — a mala
• le mot de passe — a senha`,
    exercises: [
      {
      sentences: [
        { prompt: 'Quanto custa essa camisa?', answers: ["Combien coûte cette chemise ?"] },
        { prompt: 'Você aceita cartão de crédito?', answers: ["Vous acceptez la carte de crédit ?"] },
        { prompt: 'Eu gostaria de experimentar esse vestido.', answers: ["Je voudrais essayer cette robe."] },
        { prompt: 'Tem esse modelo em azul?', answers: ["Vous avez ce modèle en bleu ?"] },
        { prompt: 'Onde ficam os provadores?', answers: ["Où sont les cabines d'essayage ?"] },
        { prompt: 'Isso está em promoção?', answers: ["C'est en promotion ?", "C'est en solde ?"] },
        { prompt: 'Posso trocar esse produto?', answers: ["Je peux échanger ce produit ?"] },
        { prompt: 'Eu quero um saco, por favor.', answers: ["Je voudrais un sac, s'il vous plaît."] },
        { prompt: 'Você tem algum desconto?', answers: ["Vous avez une réduction ?", "Vous avez un rabais ?"] },
        { prompt: 'Preciso de um tamanho maior.', answers: ["J'ai besoin d'une taille plus grande."] },
        { prompt: 'Uma mesa para duas pessoas, por favor.', answers: ["Une table pour deux personnes, s'il vous plaît."] },
        { prompt: 'Posso ver o cardápio?', answers: ["Je peux voir la carte ?", "Je peux avoir le menu ?"] },
        { prompt: 'O que você recomenda?', answers: ["Qu'est-ce que vous recommandez ?"] },
        { prompt: 'Eu sou alérgico a glúten.', answers: ["Je suis allergique au gluten."] },
        { prompt: 'Pode trazer a conta, por favor?', answers: ["L'addition, s'il vous plaît.", "Vous pouvez apporter l'addition ?"] },
        { prompt: 'O prato do dia é o quê?', answers: ["Quel est le plat du jour ?"] },
        { prompt: 'Eu gostaria de um bife ao ponto.', answers: ["Je voudrais un steak à point."] },
        { prompt: 'A carne está crua. Pode voltar para a cozinha?', answers: ["La viande est crue. Vous pouvez la renvoyer en cuisine ?"] },
        { prompt: 'Vamos dividir a conta?', answers: ["On partage l'addition ?", "On fait moitié-moitié ?"] },
        { prompt: 'O serviço está incluído?', answers: ["Le service est compris ?"] },
        { prompt: 'Onde fica a estação de metrô mais próxima?', answers: ["Où est la station de métro la plus proche ?"] },
        { prompt: 'Qual linha devo pegar para ir ao centro?', answers: ["Quelle ligne je dois prendre pour aller au centre-ville ?"] },
        { prompt: 'Um bilhete de ida e volta, por favor.', answers: ["Un aller-retour, s'il vous plaît."] },
        { prompt: 'O trem está atrasado.', answers: ["Le train est en retard."] },
        { prompt: 'Você pode me chamar um táxi?', answers: ["Vous pouvez m'appeler un taxi ?"] },
        { prompt: 'Onde posso alugar um carro?', answers: ["Où est-ce que je peux louer une voiture ?"] },
        { prompt: 'Qual ônibus vai para o aeroporto?', answers: ["Quel bus va à l'aéroport ?"] },
        { prompt: 'A próxima parada é qual?', answers: ["Quel est le prochain arrêt ?"] },
        { prompt: 'Posso sentar aqui?', answers: ["Je peux m'asseoir ici ?"] },
        { prompt: 'Preciso comprar uma passagem para Lyon.', answers: ["J'ai besoin d'acheter un billet pour Lyon."] },
        { prompt: 'Bom dia, tenho uma reunião às dez horas.', answers: ["Bonjour, j'ai une réunion à dix heures."] },
        { prompt: 'Posso falar com o gerente?', answers: ["Je peux parler au directeur ?", "Je peux parler au responsable ?"] },
        { prompt: 'Vou mandar um e-mail para confirmar.', answers: ["Je vais envoyer un e-mail pour confirmer."] },
        { prompt: 'A reunião foi adiada para quinta-feira.', answers: ["La réunion a été reportée à jeudi."] },
        { prompt: 'Preciso de sua assinatura aqui.', answers: ["J'ai besoin de votre signature ici."] },
        { prompt: 'Você pode me enviar o relatório?', answers: ["Vous pouvez m'envoyer le rapport ?"] },
        { prompt: 'Estou trabalhando nesse projeto há um mês.', answers: ["Je travaille sur ce projet depuis un mois."] },
        { prompt: 'Temos um prazo para sexta-feira.', answers: ["Nous avons une date limite vendredi.", "On a un délai à respecter pour vendredi."] },
        { prompt: 'Posso trabalhar de casa amanhã?', answers: ["Je peux travailler de chez moi demain ?", "Je peux faire du télétravail demain ?"] },
        { prompt: 'Vou tirar férias na semana que vem.', answers: ["Je vais prendre mes vacances la semaine prochaine."] },
        { prompt: 'Preciso de uma receita médica.', answers: ["J'ai besoin d'une ordonnance."] },
        { prompt: 'Onde fica a farmácia mais próxima?', answers: ["Où est la pharmacie la plus proche ?"] },
        { prompt: 'Estou com dor de cabeça.', answers: ["J'ai mal à la tête."] },
        { prompt: 'Você tem algo para dor de garganta?', answers: ["Vous avez quelque chose contre le mal de gorge ?"] },
        { prompt: 'Preciso remarcar minha consulta.', answers: ["Je dois reporter mon rendez-vous."] },
        { prompt: 'Há um caixa eletrônico por aqui?', answers: ["Il y a un distributeur automatique par ici ?"] },
        { prompt: 'Onde posso trocar moeda?', answers: ["Où est-ce que je peux changer de la monnaie ?"] },
        { prompt: 'Qual é o câmbio do euro?', answers: ["Quel est le taux de change de l'euro ?"] },
        { prompt: 'Meu cartão foi bloqueado.', answers: ["Ma carte a été bloquée."] },
        { prompt: 'Você tem WiFi aqui?', answers: ["Vous avez le WiFi ici ?"] },
        { prompt: 'Qual é a senha do WiFi?', answers: ["Quel est le mot de passe du WiFi ?"] },
        { prompt: 'Meu telefone está sem bateria.', answers: ["Mon téléphone est à plat.", "Mon téléphone n'a plus de batterie."] },
        { prompt: 'Você pode me carregar o telefone?', answers: ["Tu peux charger mon téléphone ?", "Vous pouvez charger mon téléphone ?"] },
        { prompt: 'Perdi minha carteira.', answers: ["J'ai perdu mon portefeuille."] },
        { prompt: 'Onde fica a delegacia?', answers: ["Où est le commissariat ?"] },
        { prompt: 'Preciso fazer um boletim de ocorrência.', answers: ["Je dois porter plainte.", "Je dois faire une déclaration de perte."] },
        { prompt: 'Minha bagagem não chegou.', answers: ["Ma valise n'est pas arrivée.", "Mon bagage n'est pas arrivé."] },
        { prompt: 'Qual é o horário de funcionamento?', answers: ["Quels sont les horaires d'ouverture ?"] },
        { prompt: 'Você faz entrega em domicílio?', answers: ["Vous livrez à domicile ?"] },
        { prompt: 'Quanto tempo leva a entrega?', answers: ["Combien de temps prend la livraison ?"] },
        { prompt: 'Quero cancelar meu pedido.', answers: ["Je veux annuler ma commande."] },
        { prompt: 'Tem banheiro aqui?', answers: ["Il y a des toilettes ici ?", "Où sont les toilettes ?"] },
        { prompt: 'Estou procurando uma padaria.', answers: ["Je cherche une boulangerie."] },
        { prompt: 'Tem um supermercado por aqui?', answers: ["Il y a un supermarché par ici ?"] },
        { prompt: 'Me dê um croissant e um café, por favor.', answers: ["Un croissant et un café, s'il vous plaît."] },
        { prompt: 'O café está muito forte.', answers: ["Le café est trop fort."] },
        { prompt: 'Você tem leite de aveia?', answers: ["Vous avez du lait d'avoine ?"] },
        { prompt: 'Sem açúcar, por favor.', answers: ["Sans sucre, s'il vous plaît."] },
        { prompt: 'Para viagem ou para consumir aqui?', answers: ["C'est à emporter ou sur place ?"] },
        { prompt: 'Quero uma baguete, por favor.', answers: ["Je voudrais une baguette, s'il vous plaît."] },
        { prompt: 'O que tem de sobremesa?', answers: ["Qu'est-ce que vous avez comme dessert ?"] },
        { prompt: 'Pode repetir isso mais devagar?', answers: ["Vous pouvez répéter ça plus lentement ?"] },
        { prompt: 'Não entendi. Pode explicar de novo?', answers: ["Je n'ai pas compris. Vous pouvez expliquer encore ?"] },
        { prompt: 'Você fala português?', answers: ["Vous parlez portugais ?", "Tu parles portugais ?"] },
        { prompt: 'Estou aprendendo francês.', answers: ["J'apprends le français."] },
        { prompt: 'Meu francês ainda não é perfeito.', answers: ["Mon français n'est pas encore parfait."] },
        { prompt: 'Preciso de ajuda.', answers: ["J'ai besoin d'aide."] },
        { prompt: 'Pode escrever isso para mim?', answers: ["Vous pouvez écrire ça pour moi ?"] },
        { prompt: 'Em que andar fica o departamento de roupas?', answers: ["À quel étage se trouve le rayon vêtements ?"] },
        { prompt: 'O elevador está quebrado.', answers: ["L'ascenseur est en panne."] },
        { prompt: 'Quero um quarto com vista para o mar.', answers: ["Je voudrais une chambre avec vue sur la mer."] },
        { prompt: 'A que horas é o check-out?', answers: ["À quelle heure est le check-out ?"] },
        { prompt: 'Posso deixar minha mala aqui até às três?', answers: ["Je peux laisser ma valise ici jusqu'à trois heures ?"] },
        { prompt: 'O café da manhã está incluído?', answers: ["Le petit-déjeuner est inclus ?"] },
        { prompt: 'Tem estacionamento no hotel?', answers: ["Il y a un parking à l'hôtel ?"] },
        { prompt: 'Posso pagar na saída?', answers: ["Je peux payer au moment du départ ?", "Je peux régler à la sortie ?"] },
        { prompt: 'Estou com frio. Pode aumentar o aquecimento?', answers: ["J'ai froid. Vous pouvez augmenter le chauffage ?"] },
        { prompt: 'A torneira está vazando.', answers: ["Le robinet fuit."] },
        { prompt: 'Não tem água quente.', answers: ["Il n'y a pas d'eau chaude."] },
        { prompt: 'Onde fica o museu do Louvre?', answers: ["Où se trouve le musée du Louvre ?"] },
        { prompt: 'Quanto custa a entrada?', answers: ["Combien coûte l'entrée ?"] },
        { prompt: 'Há visitas guiadas em português?', answers: ["Il y a des visites guidées en portugais ?"] },
        { prompt: 'Pode tirar uma foto nossa?', answers: ["Vous pouvez prendre une photo de nous ?"] },
        { prompt: 'Que horas fecha?', answers: ["À quelle heure ça ferme ?", "Vous fermez à quelle heure ?"] },
        { prompt: 'Tem um mapa da cidade?', answers: ["Vous avez un plan de la ville ?"] },
        { prompt: 'Qual é o ponto turístico mais famoso aqui?', answers: ["Quel est le monument le plus célèbre ici ?"] },
        { prompt: 'Que ônibus me leva ao centro histórico?', answers: ["Quel bus me mène au centre historique ?"] },
        { prompt: 'Está aberto aos domingos?', answers: ["C'est ouvert le dimanche ?"] },
        { prompt: 'Tem entrada gratuita para estudantes?', answers: ["C'est gratuit pour les étudiants ?", "Il y a une entrée gratuite pour les étudiants ?"] },
      ],
      },
    ],
  },

  {
    id: 'var-fr-2',
    language: 'fr',
    stage: 'Variados',
    title: '100 frases de nível intermediário',
    subtitle: 'Opiniões, situações sociais e descrições em francês.',
    theory: `## Sobre este módulo

Estas 100 frases são de nível intermediário e cobrem **situações sociais**, **expressão de opiniões**, **descrições de pessoas e lugares** e **conversas mais elaboradas**.

## Exemplos por tema

• À mon avis, le cinéma français est très riche. (Na minha opinião, o cinema francês é muito rico — opinião)
• Il est grand, brun et il a les yeux verts. (Ele é alto, moreno e tem olhos verdes — descrição física)
• Félicitations pour ta promotion ! (Parabéns pela promoção! — situação social)
• Tu me manques beaucoup. (Tenho muita saudade de você — emoção)

💡 Para dar opinião com nuance, varie entre "je pense que", "à mon avis" e "j'ai l'impression que" — usar sempre a mesma expressão soa repetitivo em francês, assim como em português.

⚠️ "Je suis d'accord" exige a preposição **avec**, não "à": diz-se "je suis d'accord avec toi", nunca "d'accord à toi".

Use estas frases para desenvolver sua capacidade de comunicação além do básico e expressar suas ideias com mais precisão.

## Vocabulário-chave

• penser que — pensar que
• dépendre de — depender de
• ressembler à — parecer-se com
• se sentir — sentir-se
• profiter de — aproveitar
• féliciter — felicitar, parabenizar
• manquer à quelqu'un — fazer falta a alguém
• compter sur — contar com
• se reposer — descansar
• valoir le coup / le déplacement — valer a pena
• le point de vue — o ponto de vista
• un sourire — um sorriso
• le quartier — o bairro
• la grève — a greve`,
    exercises: [
      {
      sentences: [
        { prompt: 'Na minha opinião, o cinema francês é muito rico.', answers: ["À mon avis, le cinéma français est très riche."] },
        { prompt: 'Acho que temos perspectivas diferentes.', answers: ["Je pense que nous avons des points de vue différents."] },
        { prompt: 'Concordo com você nesse ponto.', answers: ["Je suis d'accord avec vous sur ce point.", "Je suis d'accord avec toi sur ce point."] },
        { prompt: 'Discordo completamente.', answers: ["Je ne suis pas du tout d'accord.", "Je suis en total désaccord."] },
        { prompt: 'Isso depende do ponto de vista.', answers: ["Ça dépend du point de vue."] },
        { prompt: 'Por um lado... por outro lado...', answers: ["D'un côté... de l'autre côté...", "D'une part... d'autre part..."] },
        { prompt: 'Eu prefiro o campo à cidade.', answers: ["Je préfère la campagne à la ville."] },
        { prompt: 'É difícil dizer qual é o melhor.', answers: ["C'est difficile de dire lequel est le meilleur."] },
        { prompt: 'Tenho a impressão de que isso vai mudar.', answers: ["J'ai l'impression que ça va changer."] },
        { prompt: 'Isso me parece bastante razoável.', answers: ["Ça me semble assez raisonnable."] },
        { prompt: 'Ele é alto, moreno e tem olhos verdes.', answers: ["Il est grand, brun et il a les yeux verts."] },
        { prompt: 'Ela tem um sorriso contagiante.', answers: ["Elle a un sourire contagieux."] },
        { prompt: 'Meu irmão é muito extrovertido.', answers: ["Mon frère est très extraverti."] },
        { prompt: 'Minha amiga é discreta e confiável.', answers: ["Mon amie est discrète et fiable."] },
        { prompt: 'Ele parece cansado ultimamente.', answers: ["Il a l'air fatigué dernièrement."] },
        { prompt: 'Ela é a pessoa mais generosa que conheço.', answers: ["Elle est la personne la plus généreuse que je connaisse."] },
        { prompt: 'Você mudou muito desde a última vez que te vi.', answers: ["Tu as beaucoup changé depuis la dernière fois que je t'ai vu."] },
        { prompt: 'Ele tem muito carisma.', answers: ["Il a beaucoup de charisme."] },
        { prompt: 'Ela tem um estilo muito particular.', answers: ["Elle a un style très particulier."] },
        { prompt: 'Você se parece com seu pai.', answers: ["Tu ressembles à ton père."] },
        { prompt: 'O apartamento é luminoso e bem localizado.', answers: ["L'appartement est lumineux et bien situé."] },
        { prompt: 'O bairro é tranquilo mas um pouco isolado.', answers: ["Le quartier est calme mais un peu isolé."] },
        { prompt: 'A vista da janela é simplesmente magnífica.', answers: ["La vue depuis la fenêtre est tout simplement magnifique."] },
        { prompt: 'O interior da catedral é impressionante.', answers: ["L'intérieur de la cathédrale est impressionnant."] },
        { prompt: 'A cidade tem muito a oferecer culturalmente.', answers: ["La ville a beaucoup à offrir sur le plan culturel."] },
        { prompt: 'Eu me sinto bem nesse ambiente.', answers: ["Je me sens bien dans cet environnement."] },
        { prompt: 'A atmosfera do restaurante é muito acolhedora.', answers: ["L'atmosphère du restaurant est très chaleureuse."] },
        { prompt: 'O museu ficou fechado por causa de uma greve.', answers: ["Le musée était fermé à cause d'une grève."] },
        { prompt: 'O jardim está florido nessa época do ano.', answers: ["Le jardin est en fleurs à cette période de l'année."] },
        { prompt: 'Essa rua é cheia de história.', answers: ["Cette rue est pleine d'histoire."] },
        { prompt: 'Feliz aniversário! Tudo de bom para você.', answers: ["Joyeux anniversaire ! Je te souhaite tout le meilleur."] },
        { prompt: 'Parabéns pela promoção!', answers: ["Félicitations pour ta promotion !"] },
        { prompt: 'Sinto muito pela sua perda.', answers: ["Je suis désolé pour votre perte.", "Toutes mes condoléances."] },
        { prompt: 'Boa sorte no exame!', answers: ["Bonne chance à l'examen !", "Je te souhaite bonne chance pour ton examen !"] },
        { prompt: 'Que boa notícia! Estou muito feliz por você.', answers: ["Quelle bonne nouvelle ! Je suis très content pour toi."] },
        { prompt: 'Não se preocupe, vai ficar tudo bem.', answers: ["Ne t'inquiète pas, tout va bien se passer."] },
        { prompt: 'Você foi muito corajoso.', answers: ["Tu as été très courageux."] },
        { prompt: 'Isso deve ter sido difícil para você.', answers: ["Ça a dû être difficile pour toi."] },
        { prompt: 'Estou com você, seja lá o que aconteça.', answers: ["Je suis avec toi, quoi qu'il arrive."] },
        { prompt: 'Você pode contar comigo.', answers: ["Tu peux compter sur moi."] },
        { prompt: 'Já faz um tempo que não nos falamos.', answers: ["Ça fait un moment qu'on ne s'est pas parlé."] },
        { prompt: 'Como você está se saindo?', answers: ["Comment tu t'en sors ?", "Comment ça se passe pour toi ?"] },
        { prompt: 'Preciso te contar uma coisa.', answers: ["J'ai quelque chose à te dire."] },
        { prompt: 'Fico feliz em te ver de novo.', answers: ["Je suis content de te revoir."] },
        { prompt: 'Há quanto tempo! Como você está?', answers: ["Ça fait longtemps ! Comment tu vas ?"] },
        { prompt: 'Tenho muita saudade de você.', answers: ["Tu me manques beaucoup."] },
        { prompt: 'Vamos marcar alguma coisa essa semana.', answers: ["On se fixe quelque chose cette semaine.", "On se voit cette semaine ?"] },
        { prompt: 'Obrigado por tudo que você fez por mim.', answers: ["Merci pour tout ce que tu as fait pour moi."] },
        { prompt: 'Foi um prazer conhecê-la.', answers: ["C'était un plaisir de vous rencontrer.", "C'était un plaisir de te connaître."] },
        { prompt: 'Vamos nos encontrar em frente ao café.', answers: ["On se retrouve devant le café."] },
        { prompt: 'Eu passo por você às oito horas.', answers: ["Je passe te chercher à huit heures."] },
        { prompt: 'Podemos adiar para amanhã?', answers: ["On peut remettre ça à demain ?"] },
        { prompt: 'Estou atrasado, me desculpe.', answers: ["Je suis en retard, excuse-moi.", "Je suis désolé d'être en retard."] },
        { prompt: 'Onde você quer nos encontrar?', answers: ["Où est-ce que tu veux qu'on se retrouve ?"] },
        { prompt: 'A que horas você está livre?', answers: ["À quelle heure tu es libre ?"] },
        { prompt: 'Que tal sábado de manhã?', answers: ["Et samedi matin, ça te va ?", "Samedi matin, ça t'arrange ?"] },
        { prompt: 'Não posso, tenho um compromisso.', answers: ["Je ne peux pas, j'ai un engagement.", "Je ne suis pas disponible, j'ai déjà quelque chose de prévu."] },
        { prompt: 'Vamos jantar juntos essa semana.', answers: ["On dîne ensemble cette semaine.", "On se fait un dîner cette semaine ?"] },
        { prompt: 'O que você prefere: cinema ou teatro?', answers: ["Tu préfères le cinéma ou le théâtre ?"] },
        { prompt: 'Vamos ao mercado de domingo?', answers: ["On va au marché du dimanche ?"] },
        { prompt: 'Estou livre à tarde se você quiser.', answers: ["Je suis libre l'après-midi si tu veux."] },
        { prompt: 'Você gosta de música clássica?', answers: ["Tu aimes la musique classique ?"] },
        { prompt: 'Estou lendo um livro fascinante.', answers: ["Je lis un livre fascinant."] },
        { prompt: 'Qual é o último filme que você assistiu?', answers: ["Quel est le dernier film que tu as regardé ?"] },
        { prompt: 'Você já leu esse romance?', answers: ["Tu as déjà lu ce roman ?"] },
        { prompt: 'Que tipo de música você ouve?', answers: ["Quel genre de musique tu écoutes ?"] },
        { prompt: 'Esse álbum é absolutamente extraordinário.', answers: ["Cet album est absolument extraordinaire."] },
        { prompt: 'Você joga algum esporte?', answers: ["Tu fais du sport ?", "Tu pratiques un sport ?"] },
        { prompt: 'Eu corro três vezes por semana.', answers: ["Je cours trois fois par semaine."] },
        { prompt: 'Minha série favorita é muito bem escrita.', answers: ["Ma série préférée est très bien écrite."] },
        { prompt: 'Você tem algum hobby incomum?', answers: ["Tu as un hobby insolite ?", "Tu as une passion peu commune ?"] },
        { prompt: 'Gosto muito de cozinhar nos fins de semana.', answers: ["J'aime beaucoup cuisiner le week-end."] },
        { prompt: 'Eu tiro fotografias nas minhas viagens.', answers: ["Je prends des photos lors de mes voyages."] },
        { prompt: 'O que você fez no fim de semana passado?', answers: ["Qu'est-ce que tu as fait le week-end dernier ?"] },
        { prompt: 'Fui visitar minha família no interior.', answers: ["J'ai rendu visite à ma famille à la campagne.", "Je suis allé voir ma famille en province."] },
        { prompt: 'Ficamos em casa por causa da chuva.', answers: ["On est restés à la maison à cause de la pluie."] },
        { prompt: 'Aproveitei para ler e descansar.', answers: ["J'en ai profité pour lire et me reposer."] },
        { prompt: 'Fomos a uma exposição muito interessante.', answers: ["Nous sommes allés à une exposition très intéressante."] },
        { prompt: 'Passei o dia todo no parque.', answers: ["J'ai passé toute la journée au parc."] },
        { prompt: 'Você deveria tentar essa receita.', answers: ["Tu devrais essayer cette recette."] },
        { prompt: 'Eu recomendo esse restaurante de todo o coração.', answers: ["Je recommande chaudement ce restaurant."] },
        { prompt: 'Essa exposição vale a pena ver.', answers: ["Cette exposition vaut le déplacement.", "Cette exposition vaut vraiment le coup."] },
        { prompt: 'Você vai adorar essa série, confie em mim.', answers: ["Tu vas adorer cette série, fais-moi confiance."] },
        { prompt: 'Não percam esse concerto, é incrível.', answers: ["Ne ratez pas ce concert, c'est incroyable."] },
        { prompt: 'O tempo está lindo hoje.', answers: ["Il fait très beau aujourd'hui."] },
        { prompt: 'Que calor! Está abafado demais.', answers: ["Quelle chaleur ! Il fait vraiment lourd."] },
        { prompt: 'Parece que vai chover mais tarde.', answers: ["On dirait qu'il va pleuvoir plus tard."] },
        { prompt: 'As noites são frias nessa época do ano.', answers: ["Les nuits sont froides à cette période de l'année."] },
        { prompt: 'Adoro quando neva em Paris.', answers: ["J'adore quand il neige à Paris."] },
        { prompt: 'O outono é minha estação preferida.', answers: ["L'automne est ma saison préférée."] },
        { prompt: 'Faz um vento forte hoje.', answers: ["Il y a beaucoup de vent aujourd'hui.", "Il fait très venteux aujourd'hui."] },
        { prompt: 'Aproveite o sol enquanto dura!', answers: ["Profite du soleil pendant que ça dure !"] },
        { prompt: 'O céu está nublado mas não vai chover.', answers: ["Le ciel est nuageux mais il ne va pas pleuvoir."] },
        { prompt: 'Primavera é a melhor época para visitar Paris.', answers: ["Le printemps est la meilleure période pour visiter Paris."] },
        { prompt: 'Que semana difícil! Estou exausto.', answers: ["Quelle semaine difficile ! Je suis épuisé."] },
        { prompt: 'Finalmente sexta-feira! Preciso de descanso.', answers: ["Enfin vendredi ! J'ai besoin de me reposer."] },
      ],
      },
    ],
  },

  {
    id: 'var-fr-3',
    language: 'fr',
    stage: 'Variados',
    title: '100 frases avançadas',
    subtitle: 'Debate, nuances e expressões complexas em francês.',
    theory: `## Sobre este módulo

Estas 100 frases são de nível avançado e cobrem **argumentação**, **análise crítica**, **expressão de nuances**, **estruturas subordinadas complexas** e **vocabulário sofisticado**. São ideais para quem quer atingir um nível C1/C2.

## Estruturas a observar

• Bien que les données soient convaincantes, l'interprétation peut varier. (Embora os dados sejam convincentes... — subjuntivo após "bien que")
• Plus on y réfléchit, plus on en perçoit la complexité. (Quanto mais pensamos nisso... — estrutura "plus... plus...")
• Quoi qu'il en soit, la décision a déjà été prise. (Seja como for... — "quoi que" + subjuntivo, concessão)

💡 Estruturas como "il n'en demeure pas moins que" (não deixa de ser verdade que) e "il s'agit de" (trata-se de) são marcas de registro formal/acadêmico — usá-las corretamente eleva muito o nível percebido do seu francês.

⚠️ Construções com "quoi que", "où que", "qui que" exigem **subjuntivo** na cláusula subordinada: "Quoi qu'il arrive" (não "quoi qu'il arrivera" nem "arrive" no indicativo).

São frases para quem quer se comunicar de forma precisa e elaborada em francês.

## Vocabulário-chave

• tenir compte de — levar em conta
• manquer de — carecer de
• mériter — merecer
• présupposer — pressupor
• souligner — sublinhar, ressaltar
• omettre — omitir
• distinguer — distinguir
• générer / engendrer — gerar
• la preuve — a prova
• l'hypothèse — a hipótese
• la mesure — a medida
• le consensus — o consenso
• le tournant — a virada
• le souvenir — a lembrança`,
    exercises: [
      {
      sentences: [
        { prompt: 'Embora os dados sejam convincentes, a interpretação pode variar.', answers: ["Bien que les données soient convaincantes, l'interprétation peut varier."] },
        { prompt: 'É preciso levar em conta os fatores históricos.', answers: ["Il faut tenir compte des facteurs historiques."] },
        { prompt: 'Esse argumento carece de evidências sólidas.', answers: ["Cet argument manque de preuves solides."] },
        { prompt: 'Há uma contradição flagrante nessa afirmação.', answers: ["Il y a une contradiction flagrante dans cette affirmation."] },
        { prompt: 'Não se pode generalizar a partir de um único caso.', answers: ["On ne peut pas généraliser à partir d'un seul cas."] },
        { prompt: 'Essa hipótese merece ser examinada mais a fundo.', answers: ["Cette hypothèse mérite d'être examinée plus en profondeur."] },
        { prompt: 'O fenômeno é mais complexo do que parece à primeira vista.', answers: ["Le phénomène est plus complexe qu'il n'y paraît à première vue."] },
        { prompt: 'A questão permanece em aberto.', answers: ["La question reste ouverte.", "La question demeure sans réponse."] },
        { prompt: 'Sem uma metodologia rigorosa, os resultados são questionáveis.', answers: ["Sans une méthodologie rigoureuse, les résultats sont discutables."] },
        { prompt: 'As implicações dessa descoberta são consideráveis.', answers: ["Les implications de cette découverte sont considérables."] },
        { prompt: 'Isso depende fundamentalmente do contexto.', answers: ["Cela dépend fondamentalement du contexte."] },
        { prompt: 'É necessário distinguir entre causa e correlação.', answers: ["Il est nécessaire de distinguer entre cause et corrélation."] },
        { prompt: 'A pesquisa lança uma nova luz sobre o problema.', answers: ["La recherche jette une nouvelle lumière sur le problème.", "Cette recherche éclaire le problème d'un jour nouveau."] },
        { prompt: 'Esse é o ponto nevrálgico do debate.', answers: ["C'est le point névralgique du débat.", "C'est là que se situe le cœur du débat."] },
        { prompt: 'Os dois lados têm argumentos legítimos.', answers: ["Les deux camps ont des arguments légitimes."] },
        { prompt: 'A solução requer uma abordagem multidisciplinar.', answers: ["La solution nécessite une approche multidisciplinaire."] },
        { prompt: 'Esse modelo teórico tem suas limitações.', answers: ["Ce modèle théorique a ses limites."] },
        { prompt: 'À medida que a tecnologia avança, novos desafios surgem.', answers: ["Au fur et à mesure que la technologie progresse, de nouveaux défis émergent."] },
        { prompt: 'O conceito é, por natureza, ambíguo.', answers: ["Le concept est, par nature, ambigu."] },
        { prompt: 'A eficácia da medida permanece controversa.', answers: ["L'efficacité de la mesure reste controversée."] },
        { prompt: 'Por mais que eu tente, não consigo entendê-lo.', answers: ["J'ai beau essayer, je n'arrive pas à le comprendre."] },
        { prompt: 'Se eu tivesse sabido antes, teria agido diferente.', answers: ["Si j'avais su avant, j'aurais agi différemment."] },
        { prompt: 'Ele fala como se soubesse tudo.', answers: ["Il parle comme s'il savait tout."] },
        { prompt: 'Ela agiu de modo a evitar qualquer conflito.', answers: ["Elle a agi de manière à éviter tout conflit."] },
        { prompt: 'Nós discutimos o assunto sem chegar a um consenso.', answers: ["Nous avons discuté du sujet sans parvenir à un consensus."] },
        { prompt: 'Isso pressupõe que todos compartilham os mesmos valores.', answers: ["Cela présuppose que tout le monde partage les mêmes valeurs."] },
        { prompt: 'A proposta foi rejeitada apesar de suas qualidades.', answers: ["La proposition a été rejetée malgré ses qualités."] },
        { prompt: 'Tamanha incoerência acaba minando a credibilidade do argumento.', answers: ["Une telle incohérence finit par miner la crédibilité de l'argument."] },
        { prompt: 'Quanto mais pensamos nisso, mais percebemos sua complexidade.', answers: ["Plus on y réfléchit, plus on en perçoit la complexité."] },
        { prompt: 'Esse é um paradoxo difícil de resolver.', answers: ["C'est un paradoxe difficile à résoudre."] },
        { prompt: 'Eu não posso deixar de pensar que algo está errado.', answers: ["Je ne peux pas m'empêcher de penser que quelque chose ne va pas."] },
        { prompt: 'Ele evitou responder diretamente à pergunta.', answers: ["Il a évité de répondre directement à la question."] },
        { prompt: 'Seria ingênuo acreditar que isso não tem consequências.', answers: ["Il serait naïf de croire que cela n'a pas de conséquences."] },
        { prompt: 'Esse raciocínio é circular e não nos leva a lugar nenhum.', answers: ["Ce raisonnement est circulaire et ne mène nulle part."] },
        { prompt: 'A nuance é precisamente o que faz a diferença aqui.', answers: ["La nuance est précisément ce qui fait la différence ici."] },
        { prompt: 'Do ponto de vista ético, essa escolha é problemática.', answers: ["Du point de vue éthique, ce choix est problématique."] },
        { prompt: 'Há razões para acreditar que a situação vai melhorar.', answers: ["Il y a des raisons de croire que la situation va s'améliorer."] },
        { prompt: 'O relatório sublinha a urgência da situação.', answers: ["Le rapport souligne l'urgence de la situation."] },
        { prompt: 'Essa análise omite um fator essencial.', answers: ["Cette analyse omet un facteur essentiel."] },
        { prompt: 'Os críticos apontam para falhas na implementação.', answers: ["Les critiques soulèvent des lacunes dans la mise en œuvre."] },
        { prompt: 'Eu me vejo obrigado a discordar.', answers: ["Je me vois dans l'obligation de ne pas être d'accord.", "Je me dois de m'y opposer."] },
        { prompt: 'Com todo o respeito, acho que você está equivocado.', answers: ["Avec tout le respect que je vous dois, je pense que vous faites erreur."] },
        { prompt: 'Há algo que me escapa nessa lógica.', answers: ["Il y a quelque chose qui m'échappe dans cette logique."] },
        { prompt: 'O autor nos convida a reconsiderar nossas certezas.', answers: ["L'auteur nous invite à reconsidérer nos certitudes."] },
        { prompt: 'A ironia não passa despercebida.', answers: ["L'ironie ne passe pas inaperçue."] },
        { prompt: 'Esse texto opera em múltiplos níveis de interpretação.', answers: ["Ce texte fonctionne à plusieurs niveaux d'interprétation."] },
        { prompt: 'A metáfora é surpreendentemente adequada.', answers: ["La métaphore est étonnamment juste."] },
        { prompt: 'O estilo é ao mesmo tempo preciso e poético.', answers: ["Le style est à la fois précis et poétique."] },
        { prompt: 'A narrativa subverte as expectativas do leitor.', answers: ["Le récit subvertit les attentes du lecteur."] },
        { prompt: 'Esse fragmento condensa toda a essência da obra.', answers: ["Ce passage condense toute l'essence de l'œuvre."] },
        { prompt: 'A globalização tem tanto consequências positivas quanto negativas.', answers: ["La mondialisation a autant de conséquences positives que négatives."] },
        { prompt: 'É imperativo que os governos ajam agora.', answers: ["Il est impératif que les gouvernements agissent maintenant."] },
        { prompt: 'O aquecimento climático ameaça a biodiversidade.', answers: ["Le réchauffement climatique menace la biodiversité."] },
        { prompt: 'As desigualdades sociais têm se aprofundado nos últimos anos.', answers: ["Les inégalités sociales se sont creusées ces dernières années."] },
        { prompt: 'A inteligência artificial transformará profundamente o mercado de trabalho.', answers: ["L'intelligence artificielle va transformer profondément le marché du travail."] },
        { prompt: 'A liberdade de imprensa é um pilar da democracia.', answers: ["La liberté de la presse est un pilier de la démocratie."] },
        { prompt: 'Existe um equilíbrio delicado entre segurança e liberdade individual.', answers: ["Il existe un équilibre délicat entre sécurité et liberté individuelle."] },
        { prompt: 'As políticas públicas devem ser adaptadas às realidades locais.', answers: ["Les politiques publiques doivent être adaptées aux réalités locales."] },
        { prompt: 'A crise revelou as fragilidades do sistema.', answers: ["La crise a révélé les fragilités du système."] },
        { prompt: 'Nenhuma solução é perfeita; trata-se de escolher o menos ruim.', answers: ["Aucune solution n'est parfaite ; il s'agit de choisir le moindre mal."] },
        { prompt: 'Até onde vai a responsabilidade individual?', answers: ["Jusqu'où va la responsabilité individuelle ?"] },
        { prompt: 'Essa medida vai na direção certa, mas é insuficiente.', answers: ["Cette mesure va dans le bon sens, mais elle est insuffisante."] },
        { prompt: 'O debate está longe de ser encerrado.', answers: ["Le débat est loin d'être clos."] },
        { prompt: 'A questão da identidade é central nas sociedades contemporâneas.', answers: ["La question de l'identité est centrale dans les sociétés contemporaines."] },
        { prompt: 'Precisamos de uma reflexão coletiva sobre esses temas.', answers: ["Nous avons besoin d'une réflexion collective sur ces sujets."] },
        { prompt: 'Isso me provoca uma sensação estranha e difícil de nomear.', answers: ["Ça me procure une sensation étrange et difficile à nommer."] },
        { prompt: 'Tenho a impressão de que ele não diz tudo o que pensa.', answers: ["J'ai l'impression qu'il ne dit pas tout ce qu'il pense."] },
        { prompt: 'Fiquei sem palavras diante de tanta beleza.', answers: ["J'ai été sans voix face à tant de beauté.", "J'en suis resté bouche bée devant tant de beauté."] },
        { prompt: 'É uma sensação que não se pode descrever com palavras.', answers: ["C'est une sensation qu'on ne peut pas décrire avec des mots."] },
        { prompt: 'Esse momento ficará gravado na minha memória para sempre.', answers: ["Ce moment restera gravé dans ma mémoire pour toujours."] },
        { prompt: 'Sinto uma profunda gratidão por tudo que vivi.', answers: ["Je ressens une profonde gratitude pour tout ce que j'ai vécu."] },
        { prompt: 'É difícil se desapegar de certas memórias.', answers: ["Il est difficile de se détacher de certains souvenirs."] },
        { prompt: 'Há uma melancolia suave nessa paisagem.', answers: ["Il y a une douce mélancolie dans ce paysage."] },
        { prompt: 'Esse lugar tem algo de mágico e indefinível.', answers: ["Cet endroit a quelque chose de magique et d'indéfinissable."] },
        { prompt: 'Me deixou pensativo por dias.', answers: ["Ça m'a laissé songeur pendant des jours."] },
        { prompt: 'Que seja o que for, enfrentaremos juntos.', answers: ["Quoi qu'il en soit, nous ferons face ensemble."] },
        { prompt: 'Seja como for, a decisão já foi tomada.', answers: ["Quoi qu'il en soit, la décision a déjà été prise."] },
        { prompt: 'Não importa o que aconteça, continue.', answers: ["Quoi qu'il arrive, continuez.", "Quoi qu'il se passe, ne lâchez pas."] },
        { prompt: 'Ainda que fosse possível, eu não o faria.', answers: ["Quand bien même ce serait possible, je ne le ferais pas."] },
        { prompt: 'Onde quer que você vá, carregue seus sonhos.', answers: ["Où que vous alliez, emportez vos rêves."] },
        { prompt: 'Seja quem for que tenha feito isso, foi imprudente.', answers: ["Qui que ce soit qui ait fait ça, c'était imprudent."] },
        { prompt: 'Por mais que tente, não consigo me lembrar do nome.', answers: ["J'ai beau essayer, je n'arrive pas à me souvenir du nom."] },
        { prompt: 'Faça o que fizer, pense nas consequências.', answers: ["Quoi que vous fassiez, pensez aux conséquences."] },
        { prompt: 'Quanto mais ele fala, menos o entendo.', answers: ["Plus il parle, moins je le comprends."] },
        { prompt: 'Tanto quanto eu saiba, ele nunca esteve aqui.', answers: ["Pour autant que je sache, il n'a jamais été ici."] },
        { prompt: 'Não há dúvida de que isso representa uma virada histórica.', answers: ["Il ne fait aucun doute que cela représente un tournant historique."] },
        { prompt: 'Está longe de ser simples.', answers: ["C'est loin d'être simple.", "Il s'en faut de beaucoup que ce soit simple."] },
        { prompt: 'Acabamos por chegar a um acordo satisfatório.', answers: ["Nous avons fini par parvenir à un accord satisfaisant."] },
        { prompt: 'Chega um momento em que é preciso tomar partido.', answers: ["Il arrive un moment où il faut prendre parti."] },
        { prompt: 'Foi o que mais me marcou nessa experiência.', answers: ["C'est ce qui m'a le plus marqué dans cette expérience."] },
        { prompt: 'Há muito a dizer sobre esse assunto.', answers: ["Il y a beaucoup à dire sur ce sujet."] },
        { prompt: 'Isso muda tudo, absolutamente tudo.', answers: ["Ça change tout, absolument tout."] },
        { prompt: 'Não se trata de uma questão menor.', answers: ["Il ne s'agit pas d'une question mineure.", "C'est loin d'être une question anodine."] },
        { prompt: 'Esse é o cerne do problema.', answers: ["C'est là le cœur du problème.", "Voilà le nœud du problème."] },
        { prompt: 'Prefiro agir com cautela do que me arrepender mais tarde.', answers: ["Je préfère agir avec prudence plutôt que de le regretter plus tard."] },
        { prompt: 'É chegada a hora de tirar conclusões.', answers: ["Il est temps de tirer des conclusions.", "Le moment est venu de tirer des conclusions."] },
        { prompt: 'A história nos ensina que nada é inevitável.', answers: ["L'histoire nous enseigne que rien n'est inévitable."] },
        { prompt: 'Essa experiência me transformou profundamente.', answers: ["Cette expérience m'a profondément transformé."] },
        { prompt: 'O que fica não é o que acumulamos, mas o que vivemos.', answers: ["Ce qui reste, ce n'est pas ce qu'on accumule, mais ce qu'on a vécu."] },
      ],
      },
    ],
  },
];
