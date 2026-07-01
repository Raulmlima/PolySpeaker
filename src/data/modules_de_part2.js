export const MODULES_DE_PART2 = [

  // ═══════════════════════════════════════════════════════════════
  //  INTERMEDIÁRIO
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'int-de-1',
    stage: 'Intermediário',
    language: 'de',
    order: 1,
    title: 'Dativo',
    subtitle: 'Artigos, pronomes e preposições que regem dativo',
    theory: `O caso DATIVO indica o objeto indireto da frase — a quem ou para quem algo é feito. É também o caso exigido por um grupo fixo de preposições e por muitos verbos.

## Artigos no dativo

| Gênero    | Definido      | Indefinido |
|-----------|---------------|------------|
| Masculino | dem Mann      | einem Mann |
| Feminino  | der Frau      | einer Frau |
| Neutro    | dem Kind      | einem Kind |
| Plural    | den Kindern   | — (keinen Kindern) |

⚠️ No plural dativo, muitos substantivos recebem um -n extra quando possível: die Kinder → den Kindern, die Frauen → den Frauen.

## Pronomes no dativo

| Nominativo | Dativo      |
|------------|-------------|
| ich        | mir         |
| du         | dir         |
| er         | ihm         |
| sie        | ihr         |
| es         | ihm         |
| wir        | uns         |
| ihr        | euch        |
| sie/Sie    | ihnen/Ihnen |

## Preposições que SEMPRE regem dativo

  mit (com)          — Ich fahre mit dem Zug. (Vou de trem.)
  von (de/do/da)     — Das ist das Buch von dem Lehrer. (É o livro do professor.)
  zu (a/para)        — Ich gehe zu der Ärztin. (Vou à médica.)
  aus (de/de dentro) — Er kommt aus der Schweiz. (Ele vem da Suíça.)
  bei (em casa de/perto de) — Ich bin bei meiner Freundin. (Estou na casa da minha amiga.)
  nach (após/para — cidades e países) — Wir fliegen nach Berlin. (Voamos para Berlim.)
  seit (desde/há — tempo contínuo) — Ich wohne seit zwei Jahren hier. (Moro aqui há dois anos.)
  gegenüber (em frente a) — Das Café liegt dem Bahnhof gegenüber. (O café fica em frente à estação.)
  außer (exceto/além de) — Außer mir war niemand da. (Além de mim, ninguém estava lá.)
  ab (a partir de) — Ab dem ersten Mai bin ich im Urlaub. (A partir de 1º de maio estou de férias.)

## Verbos que regem dativo

Vários verbos alemães exigem objeto no dativo mesmo quando o equivalente em português parece "direto":
  helfen (ajudar) — Ich helfe dir. (Eu te ajudo. — não "te" acusativo!)
  gefallen (agradar) — Das Buch gefällt mir. (Eu gosto do livro — lit. "o livro me agrada".)
  danken (agradecer) — Ich danke ihnen. (Eu agradeço a eles.)
  gehören (pertencer) — Das gehört meiner Schwester. (Isso pertence à minha irmã.)
  antworten (responder) — Er antwortet mir nicht. (Ele não me responde.)

⚠️ Erro comum de falantes de português: traduzir "eu ajudo você" como acusativo (*ich helfe dich*). O correto é **ich helfe dir**, pois "helfen" rege dativo em alemão, diferente do português.

## Contrações obrigatórias e comuns

| Preposição + artigo | Contração |
|----------------------|-----------|
| von + dem            | vom       |
| zu + dem             | zum       |
| zu + der             | zur       |
| bei + dem            | beim      |

💡 Truque para lembrar as preposições de dativo: a frase mnemônica "**M**eine **V**ier **Z**iegen **A**ßen **B**is **N**achts **S**uppe **G**ern" ajuda a fixar mit, von, zu, aus, bei, nach, seit, gegenüber.

## Vocabulário-chave

• helfen — ajudar
• gefallen — agradar
• danken — agradecer
• gehören — pertencer
• antworten — responder
• der Zug — o trem
• der Bahnhof — a estação
• die Bäckerei — a padaria
• das Geschenk — o presente
• der Name — o nome`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu vou de trem.', answers: ['Ich fahre mit dem Zug.'] },
          { prompt: 'Ela vem da Alemanha.', answers: ['Sie kommt aus Deutschland.'] },
          { prompt: 'Ele está na casa do amigo.', answers: ['Er ist bei dem Freund.', 'Er ist beim Freund.'] },
          { prompt: 'Nós vamos para a escola.', answers: ['Wir gehen zur Schule.', 'Wir gehen zu der Schule.'] },
          { prompt: 'Eu moro aqui há três anos.', answers: ['Ich wohne seit drei Jahren hier.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ela fala com a professora.', answers: ['Sie spricht mit der Lehrerin.'] },
          { prompt: 'O livro é do menino.', answers: ['Das Buch ist von dem Jungen.', 'Das Buch ist vom Jungen.'] },
          { prompt: 'Ele me dá o livro.', answers: ['Er gibt mir das Buch.'] },
          { prompt: 'A padaria fica em frente à estação.', answers: ['Die Bäckerei liegt dem Bahnhof gegenüber.'] },
          { prompt: 'Você vai para Berlim?', answers: ['Fährst du nach Berlin?', 'Gehst du nach Berlin?'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Nós viajamos com nossos pais.', answers: ['Wir reisen mit unseren Eltern.'] },
          { prompt: 'Ela me escreve uma mensagem.', answers: ['Sie schreibt mir eine Nachricht.'] },
          { prompt: 'O presente é para a criança.', answers: ['Das Geschenk ist für das Kind.', 'Das ist ein Geschenk für das Kind.'] },
          { prompt: 'Eu conheço o nome dela.', answers: ['Ich kenne ihren Namen.'] },
          { prompt: 'Você pode me ajudar?', answers: ['Kannst du mir helfen?', 'Können Sie mir helfen?'] },
        ],
      },
    ],
  },

  {
    id: 'int-de-2',
    stage: 'Intermediário',
    language: 'de',
    order: 2,
    title: 'Konjunktiv II',
    subtitle: 'Condicional, desejo e educação: würde, hätte, wäre e modais',
    theory: `O Konjunktiv II expressa situações hipotéticas, desejos, pedidos educados e condicional — equivale ao futuro do pretérito/condicional do português ("eu faria", "eu teria").

## Formação com "würde + infinitivo"

Equivalente ao "ia/iria" do português — usado com a maioria dos verbos:

| Pronome   | würde + Infinitivo |
|-----------|--------------------|
| ich       | würde kaufen       |
| du        | würdest kaufen     |
| er/sie/es | würde kaufen       |
| wir       | würden kaufen      |
| ihr       | würdet kaufen      |
| sie/Sie   | würden kaufen      |

## Formas irregulares mais usadas (preferidas ao würde)

Para verbos muito frequentes, prefere-se a forma própria do Konjunktiv II em vez de "würde + Infinitiv":

| Infinitivo | Konj. II | Tradução      | Exemplo                          |
|------------|----------|---------------|----------------------------------|
| sein       | wäre     | seria/estaria | Ich wäre glücklich. (Eu seria feliz.) |
| haben      | hätte    | teria         | Ich hätte Zeit. (Eu teria tempo.) |
| wissen     | wüsste   | saberia       | Ich wüsste das gern. (Eu gostaria de saber isso.) |
| geben      | gäbe     | daria/haveria | Es gäbe ein Problem. (Haveria um problema.) |
| kommen     | käme     | viria         | Er käme gern. (Ele viria com gosto.) |

## Modais no Konjunktiv II

| Modal  | Konj. II | Significado             |
|--------|----------|-------------------------|
| können | könnte   | poderia                 |
| müssen | müsste   | deveria (obrigação)     |
| sollen | sollte   | deveria (recomendação)  |
| dürfen | dürfte   | seria permitido         |
| wollen | wollte   | queria                  |
| mögen  | möchte   | gostaria (pedido educado)|

## Condicional com "wenn" (se)

  Wenn ich Zeit hätte, würde ich reisen. (Se eu tivesse tempo, viajaria.)
  Wenn er reicher wäre, würde er ein Auto kaufen. (Se ele fosse mais rico, compraria um carro.)
  Hätte ich Zeit, würde ich reisen. (Se eu tivesse tempo, viajaria. — sem "wenn", o verbo vai para o início)

## Konjunktiv II do passado

Para hipóteses no passado, usa-se "hätte/wäre + Partizip II" — não existe "würde" no passado:
  Ich hätte das gern gewusst. (Eu gostaria de ter sabido isso.)
  Wenn ich Zeit gehabt hätte, wäre ich gekommen. (Se eu tivesse tido tempo, eu teria vindo.)
  Sie wäre glücklicher gewesen, wenn er angerufen hätte. (Ela teria sido mais feliz se ele tivesse ligado.)

⚠️ Erro comum: usar "würde" também no passado (em vez de "wäre gekommen"). O Konjunktiv II do passado sempre usa hätte/wäre + Partizip II, nunca würde.

💡 Dica de uso educado: "Könntest du...?", "Hätten Sie...?" e "Würden Sie...?" são as formas mais polidas de pedir algo em alemão — muito mais suaves que o imperativo direto.

## Vocabulário-chave

• reisen — viajar
• reservieren — reservar
• bleiben — ficar/permanecer
• kaufen — comprar
• schlafen — dormir
• der Kaffee — o café
• der Tisch — a mesa
• das Haus — a casa
• glücklich — feliz
• toll / großartig — ótimo`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu gostaria de um café, por favor.', answers: ['Ich hätte gern einen Kaffee, bitte.', 'Ich würde gern einen Kaffee nehmen, bitte.'] },
          { prompt: 'Você poderia me ajudar?', answers: ['Könntest du mir helfen?', 'Könnten Sie mir helfen?'] },
          { prompt: 'Ela seria feliz em Berlim.', answers: ['Sie wäre glücklich in Berlin.'] },
          { prompt: 'Nós deveríamos estudar mais.', answers: ['Wir sollten mehr lernen.', 'Wir müssten mehr lernen.'] },
          { prompt: 'Se eu tivesse dinheiro, viajaria.', answers: ['Wenn ich Geld hätte, würde ich reisen.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu compraria essa casa.', answers: ['Ich würde dieses Haus kaufen.'] },
          { prompt: 'Ele deveria dormir mais cedo.', answers: ['Er sollte früher schlafen.', 'Er müsste früher schlafen.'] },
          { prompt: 'Você gostaria de vir conosco?', answers: ['Würdest du mit uns kommen?', 'Würden Sie mit uns kommen?'] },
          { prompt: 'Se ela soubesse, estaria aqui.', answers: ['Wenn sie es wüsste, wäre sie hier.'] },
          { prompt: 'Eu poderia ficar até amanhã.', answers: ['Ich könnte bis morgen bleiben.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Nós gostaríamos de reservar uma mesa.', answers: ['Wir würden gern einen Tisch reservieren.', 'Wir hätten gern einen Tisch.'] },
          { prompt: 'Isso seria ótimo!', answers: ['Das wäre toll!', 'Das wäre großartig!'] },
          { prompt: 'Você deveria ir ao médico.', answers: ['Du solltest zum Arzt gehen.', 'Du müsstest zum Arzt gehen.'] },
          { prompt: 'Se eu fosse você, estudaria alemão.', answers: ['Wenn ich du wäre, würde ich Deutsch lernen.', 'An deiner Stelle würde ich Deutsch lernen.'] },
          { prompt: 'Ela teria vontade de morar na Áustria.', answers: ['Sie würde gern in Österreich leben.', 'Sie hätte Lust, in Österreich zu leben.'] },
        ],
      },
    ],
  },

  {
    id: 'int-de-3',
    stage: 'Intermediário',
    language: 'de',
    order: 3,
    title: 'Passivo',
    subtitle: 'Vorgangspassiv: werden + Partizip II',
    theory: `O passivo em alemão foca na ação ou no que sofre a ação, não em quem a realiza — muito usado em instruções, notícias e textos formais.

## Formação: werden + Partizip II (Vorgangspassiv)

Presente (Präsens):
  Das Buch wird gelesen.         (O livro é lido.)
  Die Tür wird geöffnet.         (A porta é aberta.)
  Die Kinder werden abgeholt.    (As crianças são buscadas.)

Conjugação de "werden" no Präsens:

| Pronome   | werden  |
|-----------|---------|
| ich       | werde   |
| du        | wirst   |
| er/sie/es | wird    |
| wir       | werden  |
| ihr       | werdet  |
| sie/Sie   | werden  |

## Passivo em outros tempos

| Tempo      | Estrutura                  | Exemplo                                      |
|------------|------------------------------|-----------------------------------------------|
| Präsens    | werden + Partizip II        | Das Haus wird gebaut. (A casa está sendo construída.) |
| Präteritum | wurde(n) + Partizip II      | Das Haus wurde gebaut. (A casa foi construída.) |
| Perfekt    | ist/sind + Partizip II + worden | Das Haus ist gebaut worden. (A casa foi construída.) |
| Futur I    | wird + Partizip II + werden | Das Haus wird gebaut werden. (A casa será construída.) |

⚠️ No Perfekt passivo, usa-se "worden" (não "geworden") — "geworden" só aparece quando "werden" é verbo principal de mudança de estado (Er ist Lehrer geworden — Ele se tornou professor).

O Präteritum passivo (wurde/wurden) é a forma mais comum na escrita e em notícias; o Perfekt (ist...worden) é mais usado na fala.

## Indicando o agente

Para indicar quem pratica a ação usa-se "von + dativo" (pessoas/agentes) ou "durch + acusativo" (meio/causa impessoal):
  Das Buch wird von dem Lehrer gelesen.  (O livro é lido pelo professor.)
  Der Brief wurde von Maria geschrieben.  (A carta foi escrita pela Maria.)
  Die Stadt wurde durch ein Erdbeben zerstört. (A cidade foi destruída por um terremoto.)

## Passivo com verbos modais

Modal + Partizip II + werden (o infinitivo "werden" vai ao final):
  Das Problem muss gelöst werden. (O problema precisa ser resolvido.)
  Die Aufgabe kann nicht gemacht werden. (A tarefa não pode ser feita.)

## Passivo de estado (Zustandspassiv)

Diferente do Vorgangspassiv (foco no processo), o Zustandspassiv usa "sein + Partizip II" e descreve o RESULTADO de uma ação, não a ação em si:
  Die Tür ist geöffnet. (A porta está aberta — resultado, estado.)
  vs. Die Tür wird geöffnet. (A porta está sendo aberta — ação em curso.)

⚠️ Erro comum: confundir "ist + Partizip II" (estado, Zustandspassiv) com "ist...worden" (Perfekt do Vorgangspassiv). "Die Tür ist geöffnet" descreve um estado; "Die Tür ist geöffnet worden" descreve a ação concluída no passado.

💡 Dica: no Vorgangspassiv, pense em "werden" como o verbo que "carrega" a ação; "worden" só aparece como auxiliar extra no Perfekt — nunca sozinho como verbo principal.

## Vocabulário-chave

• kochen — cozinhar
• abholen — buscar/pegar
• reparieren — consertar
• operieren — operar
• absagen — cancelar
• schließen — fechar
• das Geschäft — a loja
• die Wohnung — o apartamento
• der Patient — o paciente
• der Bericht — o relatório`,
    exercises: [
      {
        sentences: [
          { prompt: 'A porta é aberta.', answers: ['Die Tür wird geöffnet.'] },
          { prompt: 'O jantar é cozinhado todos os dias.', answers: ['Das Abendessen wird jeden Tag gekocht.', 'Das Essen wird jeden Tag gekocht.'] },
          { prompt: 'As crianças são buscadas.', answers: ['Die Kinder werden abgeholt.'] },
          { prompt: 'A carta é escrita pela Maria.', answers: ['Der Brief wird von Maria geschrieben.'] },
          { prompt: 'O carro é consertado.', answers: ['Das Auto wird repariert.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'O livro foi lido.', answers: ['Das Buch ist gelesen worden.'] },
          { prompt: 'A janela foi aberta.', answers: ['Das Fenster ist geöffnet worden.', 'Das Fenster wurde geöffnet.'] },
          { prompt: 'A comida foi preparada pela cozinheira.', answers: ['Das Essen ist von der Köchin gekocht worden.', 'Das Essen wurde von der Köchin gekocht.'] },
          { prompt: 'A casa foi construída em 1990.', answers: ['Das Haus wurde 1990 gebaut.', 'Das Haus ist 1990 gebaut worden.'] },
          { prompt: 'O email foi enviado.', answers: ['Die E-Mail ist abgeschickt worden.', 'Die E-Mail wurde abgeschickt.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'O relatório está sendo escrito agora.', answers: ['Der Bericht wird gerade geschrieben.'] },
          { prompt: 'As lojas são fechadas aos domingos.', answers: ['Die Geschäfte werden sonntags geschlossen.'] },
          { prompt: 'O paciente foi operado pelo médico.', answers: ['Der Patient wurde von dem Arzt operiert.', 'Der Patient wurde vom Arzt operiert.'] },
          { prompt: 'A reunião foi cancelada.', answers: ['Das Meeting ist abgesagt worden.', 'Das Treffen wurde abgesagt.'] },
          { prompt: 'Novos apartamentos estão sendo construídos.', answers: ['Neue Wohnungen werden gebaut.'] },
        ],
      },
    ],
  },

  {
    id: 'int-de-4',
    stage: 'Intermediário',
    language: 'de',
    order: 4,
    title: 'Verbos Separáveis',
    subtitle: 'Prefixos que se separam: an-, auf-, aus-, ein-, mit-, zurück-, an-, auf-',
    theory: `Verbos separáveis (trennbare Verben) têm um prefixo que se separa do verbo no presente e no pretérito simples, indo para o FINAL da frase. O prefixo costuma ser tônico e muda o sentido do verbo-base.

## Verbos principais

  anrufen     (ligar para alguém)   — Ich rufe dich an.       (Eu te ligo.)
  aufmachen   (abrir)               — Sie macht die Tür auf.  (Ela abre a porta.)
  ausgehen    (sair/ir sair)        — Wir gehen heute aus.    (Nós saímos hoje.)
  einladen    (convidar)            — Er lädt uns ein.        (Ele nos convida.)
  mitnehmen   (levar consigo)       — Ich nehme dich mit.     (Eu te levo.)
  zurückkommen (voltar)             — Sie kommt um 5 zurück.  (Ela volta às 5.)
  anfangen    (começar)             — Wann fängst du an?      (Quando você começa?)
  aufhören    (parar/terminar)      — Hör damit auf!          (Para com isso!)
  aufstehen   (levantar-se)         — Ich stehe früh auf.     (Eu me levanto cedo.)
  fernsehen   (ver televisão)       — Wir sehen abends fern.  (Nós vemos TV à noite.)
  vorbereiten (preparar)            — Sie bereitet das Essen vor. (Ela prepara a comida.)

## No Perfekt: "ge-" entre prefixo e verbo

  anrufen → angerufen       — Ich habe dich angerufen.    (Eu te liguei.)
  aufmachen → aufgemacht    — Sie hat die Tür aufgemacht. (Ela abriu a porta.)
  ausgehen → ausgegangen    — Wir sind gestern ausgegangen. (Saímos ontem.)
  aufstehen → aufgestanden  — Ich bin früh aufgestanden.  (Eu me levantei cedo.)

## No infinitivo com "zu"

O "zu" também se insere entre o prefixo e o verbo:
  Er versucht, früh aufzustehen. (Ele tenta levantar-se cedo.)
  Es ist wichtig, das Essen vorzubereiten. (É importante preparar a comida.)

## Em orações subordinadas

O verbo separável permanece JUNTO no final, pois o verbo conjugado já vai para o final em subordinadas:
  Ich weiß, dass er mich anruft.  (Sei que ele me liga.)
  Sie sagt, dass wir früh anfangen. (Ela diz que começamos cedo.)

## Verbos inseparáveis (cuidado com a confusão!)

Alguns prefixos NUNCA se separam: be-, ge-, er-, ver-, zer-, ent-, emp-, miss-. Esses verbos não têm o prefixo tônico e funcionam como uma palavra só:
  verstehen (entender) — Ich verstehe das nicht. (não "Ich stehe das nicht ver")
  besuchen (visitar) — Wir besuchen unsere Oma.
  Perfekt sem "ge-" extra: verstanden, besucht (o prefixo já ocupa o lugar do "ge-").

⚠️ Erro comum: aplicar a regra de separação a verbos inseparáveis, ou esquecer de mandar o prefixo separável para o final da frase no presente (dizer "Ich anrufe dich" em vez de "Ich rufe dich an").

💡 Dica: para saber se um prefixo é separável, veja se ele é tônico ao falar a palavra isolada — prefixos separáveis (an, auf, aus, ein, mit, zurück, vor, fern) são sempre acentuados.

## Vocabulário-chave

• anrufen — ligar (telefone)
• aufmachen — abrir
• ausgehen — sair
• einladen — convidar
• mitnehmen — levar consigo
• zurückkommen — voltar
• anfangen — começar
• aufhören — parar
• aufstehen — levantar-se
• der Lärm — o barulho`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu te ligo amanhã.', answers: ['Ich rufe dich morgen an.'] },
          { prompt: 'Ela abre a janela.', answers: ['Sie macht das Fenster auf.'] },
          { prompt: 'Nós saímos no sábado.', answers: ['Wir gehen am Samstag aus.'] },
          { prompt: 'Ele nos convida para a festa.', answers: ['Er lädt uns zur Party ein.', 'Er lädt uns ein.'] },
          { prompt: 'Quando você começa a trabalhar?', answers: ['Wann fängst du an zu arbeiten?', 'Wann fängst du an?'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Você pode me levar de carro?', answers: ['Kannst du mich mitnehmen?'] },
          { prompt: 'Ela volta às seis.', answers: ['Sie kommt um sechs zurück.'] },
          { prompt: 'Para de fazer barulho!', answers: ['Hör auf, Lärm zu machen!', 'Hör auf damit!'] },
          { prompt: 'Eu te liguei ontem.', answers: ['Ich habe dich gestern angerufen.'] },
          { prompt: 'Nós saímos na sexta-feira.', answers: ['Wir sind am Freitag ausgegangen.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ela abriu a porta.', answers: ['Sie hat die Tür aufgemacht.'] },
          { prompt: 'Ele nos convidou para jantar.', answers: ['Er hat uns zum Abendessen eingeladen.', 'Er hat uns eingeladen.'] },
          { prompt: 'Eu sei que ela me liga.', answers: ['Ich weiß, dass sie mich anruft.'] },
          { prompt: 'A aula começa às oito.', answers: ['Der Unterricht fängt um acht an.', 'Die Stunde fängt um acht an.'] },
          { prompt: 'Você quer me levar?', answers: ['Willst du mich mitnehmen?'] },
        ],
      },
    ],
  },

  {
    id: 'int-de-5',
    stage: 'Intermediário',
    language: 'de',
    order: 5,
    title: 'Orações Subordinadas',
    subtitle: 'dass, weil, obwohl, wenn, als, ob — verbo vai ao final',
    theory: `Em orações subordinadas (Nebensätze), o verbo conjugado vai para o FINAL da frase — essa é a regra mais importante e mais diferente do português.

## Conjunções mais importantes

dass (que) — após verbos de dizer, pensar, saber:
  Ich denke, dass er Recht hat.       (Acho que ele tem razão.)
  Sie sagt, dass das Essen gut ist.   (Ela diz que a comida é boa.)

weil (porque) — causa:
  Ich bleibe zu Hause, weil ich krank bin.  (Fico em casa porque estou doente.)

obwohl (embora/apesar de) — concessão:
  Er geht aus, obwohl es regnet.      (Ele sai, embora esteja chovendo.)

wenn (se / quando — habitual ou futuro):
  Wenn ich Zeit habe, komme ich.      (Se tiver tempo, venho.)
  Wenn es regnet, bleibe ich drin.    (Quando chove, fico dentro.)

als (quando — evento único no passado):
  Als ich jung war, spielte ich Fußball.  (Quando era jovem, jogava futebol.)
  Als er ankam, war sie schon weg.        (Quando ele chegou, ela já tinha ido embora.)

ob (se — dúvida/pergunta indireta):
  Ich weiß nicht, ob er kommt.        (Não sei se ele vem.)
  Sie fragt, ob du mitkommen möchtest. (Ela pergunta se você quer vir junto.)

damit (para que) e bevor/nachdem (antes/depois que):
  Sie lernt viel, damit sie die Prüfung besteht. (Ela estuda muito para passar na prova.)
  Bevor ich schlafe, lese ich ein Buch. (Antes de dormir, leio um livro.)
  Nachdem er gegessen hatte, ging er spazieren. (Depois que comeu, foi passear.)

## Wenn vs. als vs. ob — não confundir

| Conjunção | Quando usar                              |
|-----------|-------------------------------------------|
| wenn      | "se" (condição) OU "quando" repetido/futuro |
| als       | "quando" — um único evento no passado     |
| ob        | "se" no sentido de dúvida/pergunta indireta |

⚠️ Erro muito comum de falantes de português: usar "wenn" para um evento passado único. "Quando eu era criança..." é sempre **Als ich Kind war**, nunca "Wenn ich Kind war".

## Posição do verbo na frase principal + subordinada

Quando a oração subordinada vem PRIMEIRO, a frase principal começa direto com o verbo conjugado (regra V2 aplicada à frase toda):
  Weil ich krank bin, bleibe ich zu Hause. (Porque estou doente, fico em casa.)
  Wenn es regnet, bleibe ich drin. — note "bleibe" logo após a vírgula.

## Casos especiais no final da oração

⚠️ Com verbos separáveis, o prefixo permanece junto ao verbo no final: "...dass er früh aufsteht" (não "aufsteht er").
⚠️ Com modais, o modal vai ao final, após o infinitivo: "...weil sie nicht kommen kann".
⚠️ No Perfekt, o auxiliar (haben/sein) vai ao final, após o Partizip II: "...weil sie nicht gekommen ist".

💡 Dica para não se perder: pense na oração subordinada como uma "caixa" — todo o "conteúdo verbal" (verbo conjugado, modal, particípio, prefixo) se empilha no final, na ordem inversa de importância.

## Vocabulário-chave

• denken — pensar
• glauben — achar/acreditar
• bleiben — ficar
• aufgeben — desistir
• sich fühlen — sentir-se
• der Mantel — o casaco
• das Recht — a razão/direito
• krank — doente
• schwierig — difícil
• teuer — caro`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu acho que ele tem razão.', answers: ['Ich denke, dass er Recht hat.', 'Ich glaube, dass er Recht hat.'] },
          { prompt: 'Fico em casa porque estou cansado.', answers: ['Ich bleibe zu Hause, weil ich müde bin.'] },
          { prompt: 'Ela sai, embora esteja chovendo.', answers: ['Sie geht aus, obwohl es regnet.'] },
          { prompt: 'Quando eu tiver tempo, venho.', answers: ['Wenn ich Zeit habe, komme ich.'] },
          { prompt: 'Não sei se ele vem.', answers: ['Ich weiß nicht, ob er kommt.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ele diz que o livro é interessante.', answers: ['Er sagt, dass das Buch interessant ist.'] },
          { prompt: 'Não posso ir porque tenho que trabalhar.', answers: ['Ich kann nicht gehen, weil ich arbeiten muss.'] },
          { prompt: 'Quando era criança, morava em Munique.', answers: ['Als ich Kind war, wohnte ich in München.', 'Als ich ein Kind war, lebte ich in München.'] },
          { prompt: 'Ela pergunta se você quer café.', answers: ['Sie fragt, ob du Kaffee möchtest.', 'Sie fragt, ob du Kaffee willst.'] },
          { prompt: 'Embora seja difícil, ele não desiste.', answers: ['Obwohl es schwierig ist, gibt er nicht auf.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu sei que você estuda muito.', answers: ['Ich weiß, dass du viel lernst.'] },
          { prompt: 'Quando ele chegou, nós já tínhamos comido.', answers: ['Als er ankam, hatten wir schon gegessen.'] },
          { prompt: 'Ela fica em casa porque não se sente bem.', answers: ['Sie bleibt zu Hause, weil sie sich nicht gut fühlt.'] },
          { prompt: 'Não sei se ele pode vir.', answers: ['Ich weiß nicht, ob er kommen kann.'] },
          { prompt: 'Embora seja caro, ele compra o casaco.', answers: ['Obwohl es teuer ist, kauft er den Mantel.'] },
        ],
      },
    ],
  },

  {
    id: 'rev-int-de',
    stage: 'Intermediário',
    language: 'de',
    order: 6,
    isReview: true,
    title: 'Revisão Intermediário',
    subtitle: 'Dativo, Konjunktiv II, Passivo, Verbos Separáveis e Subordinadas',
    theory: `Revisão rápida dos pontos-chave do nível Intermediário:

• DATIVO: mit/von/zu/aus/bei/nach/seit/gegenüber/außer/ab sempre pedem dativo.
  Contração: vom, zum, zur, beim. Verbos que regem dativo: helfen, gefallen, danken, gehören.

• KONJUNKTIV II: würde + Inf. / hätte / wäre / könnte / müsste / sollte
  Pedido educado: Könntest du mir helfen?
  Condicional: Wenn ich Zeit hätte, würde ich kommen.
  Passado: hätte/wäre + Partizip II — Ich hätte das gewusst.

• PASSIVO: werden + Partizip II (Präsens) | ist ... worden (Perfekt)
  Das Haus wird gebaut. → Das Haus ist gebaut worden.
  Com modal: Das Problem muss gelöst werden.

• VERBOS SEPARÁVEIS: prefixo vai ao final no presente.
  anrufen: Ich rufe dich an. | Perfekt: Ich habe dich angerufen.

• SUBORDINADAS: verbo conjugado sempre no FINAL.
  dass / weil / obwohl / wenn / als / ob
  Lembre-se: "als" para um único evento passado, "wenn" para repetição/futuro/condição.

💡 Revise os erros mais comuns: helfen + dativo (não acusativo), "als" vs. "wenn" no passado, "worden" vs. "geworden" no passivo.`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu moro aqui há dois anos.', answers: ['Ich wohne seit zwei Jahren hier.'] },
          { prompt: 'Você poderia me emprestar dinheiro?', answers: ['Könntest du mir Geld leihen?', 'Könnten Sie mir Geld leihen?'] },
          { prompt: 'O relatório foi escrito ontem.', answers: ['Der Bericht wurde gestern geschrieben.', 'Der Bericht ist gestern geschrieben worden.'] },
          { prompt: 'Ela liga para a mãe toda manhã.', answers: ['Sie ruft ihre Mutter jeden Morgen an.'] },
          { prompt: 'Fico em casa porque está nevando.', answers: ['Ich bleibe zu Hause, weil es schneit.'] },
          { prompt: 'Se eu fosse rica, compraria um apartamento em Viena.', answers: ['Wenn ich reich wäre, würde ich eine Wohnung in Wien kaufen.'] },
          { prompt: 'Ela não sabe se ele vem à festa.', answers: ['Sie weiß nicht, ob er zur Party kommt.'] },
          { prompt: 'Nós voltamos de Hamburgo ontem.', answers: ['Wir sind gestern aus Hamburg zurückgekommen.', 'Wir kamen gestern aus Hamburg zurück.'] },
        ],
      },
    ],
    dialogExercise: {
      audioText: 'Wenn ich mehr Zeit hätte, würde ich öfter Sport machen. Leider muss ich jeden Tag sehr lange arbeiten.',
      question: 'O que a pessoa diria se tivesse mais tempo?',
      options: [
        { text: 'Praticaria esporte com mais frequência.', correct: true },
        { text: 'Trabalharia menos horas por dia.', correct: false },
        { text: 'Viajaria para outros países.', correct: false },
        { text: 'Aprenderia um novo idioma.', correct: false },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  //  AVANÇADO
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'adv-de-1',
    stage: 'Avançado',
    language: 'de',
    order: 1,
    title: 'Genitivo',
    subtitle: 'Caso genitivo e preposições: wegen, trotz, während, statt',
    theory: `O GENITIVO indica posse ou pertencimento (equivalente ao "de" possessivo do português) e é usado após certas preposições. É o caso menos usado na fala cotidiana, mas essencial na escrita formal, jornalística e jurídica.

## Artigos no genitivo

| Gênero    | Artigo + substantivo | Tradução       |
|-----------|------------------------|-----------------|
| Masculino | des Mannes             | do homem ← substantivo recebe -(e)s |
| Feminino  | der Frau               | da mulher       |
| Neutro    | des Kindes             | da criança ← substantivo recebe -(e)s |
| Plural    | der Kinder             | das crianças    |

  Das ist das Auto des Mannes.    (Este é o carro do homem.)
  Der Name der Frau ist Anna.     (O nome da mulher é Anna.)
  Das Spielzeug des Kindes.       (O brinquedo da criança.)

⚠️ Apenas masculino e neutro recebem a terminação -(e)s no substantivo; feminino e plural não mudam a palavra, só o artigo.

## Genitivo de nomes próprios

Nomes próprios recebem apenas -s (sem apóstrofo, diferente do inglês):
  Annas Buch (o livro da Anna) | Peters Auto (o carro do Peter)

## Alternativa coloquial com "von"

⚠️ Na fala informal, "von + dativo" substitui frequentemente o genitivo:
  Das Auto von dem Mann. (em vez de: Das Auto des Mannes.)
  Essa construção é normal na fala, mas evitada na escrita formal.

## Preposições que regem genitivo

  wegen   (por causa de)   — Wegen des Regens blieb er zu Hause. (Por causa da chuva, ele ficou em casa.)
  trotz   (apesar de)      — Trotz des Wetters gingen wir spazieren. (Apesar do tempo, fomos passear.)
  während (durante)        — Während des Essens sprachen wir. (Durante a refeição, conversamos.)
  statt   (em vez de)      — Statt des Kaffees trinke ich Tee. (Em vez do café, tomo chá.)
  außerhalb/innerhalb (fora de/dentro de) — Innerhalb eines Jahres. (Dentro de um ano.)
  aufgrund (devido a) — Aufgrund der Umstände. (Devido às circunstâncias.)

💡 Na fala coloquial, "wegen" e "trotz" às vezes aparecem com dativo (wegen dem Regen) — mas no escrito formal use sempre genitivo.

⚠️ Erro comum: esquecer a terminação -(e)s do substantivo masculino/neutro depois de "wegen", "während" etc. — não basta trocar o artigo, a palavra também muda: "wegen des Regens" (não "wegen des Regen").

## Vocabulário-chave

• joggen gehen — ir correr
• schlafen — dormir
• reisen — viajar
• aufgeben — desistir
• der Verkehr — o trânsito
• die Firma — a empresa
• das Dach — o telhado
• der Film — o filme
• die Schwierigkeit — a dificuldade
• die Kälte — o frio`,
    exercises: [
      {
        sentences: [
          { prompt: 'Este é o carro do professor.', answers: ['Das ist das Auto des Lehrers.'] },
          { prompt: 'O nome da empresa é Müller GmbH.', answers: ['Der Name der Firma ist Müller GmbH.'] },
          { prompt: 'Por causa do trânsito, cheguei atrasado.', answers: ['Wegen des Verkehrs kam ich zu spät.'] },
          { prompt: 'Apesar da chuva, fomos correr.', answers: ['Trotz des Regens sind wir joggen gegangen.'] },
          { prompt: 'Durante a reunião, ele dormiu.', answers: ['Während des Meetings schlief er.', 'Während der Besprechung schlief er.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Em vez do ônibus, peguei o metrô.', answers: ['Statt des Busses nahm ich die U-Bahn.', 'Statt dem Bus nahm ich die U-Bahn.'] },
          { prompt: 'O livro da professora é muito interessante.', answers: ['Das Buch der Lehrerin ist sehr interessant.'] },
          { prompt: 'Por causa da doença, ela não veio.', answers: ['Wegen der Krankheit kam sie nicht.'] },
          { prompt: 'O telhado da casa é vermelho.', answers: ['Das Dach des Hauses ist rot.'] },
          { prompt: 'Durante as férias, viajamos pela Europa.', answers: ['Während der Ferien reisten wir durch Europa.', 'Während des Urlaubs reisten wir durch Europa.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Apesar das dificuldades, ele não desistiu.', answers: ['Trotz der Schwierigkeiten gab er nicht auf.'] },
          { prompt: 'Em vez de estudar, ele assistiu TV.', answers: ['Statt zu lernen, sah er fern.', 'Anstatt zu lernen, sah er fern.'] },
          { prompt: 'O final do filme é surpreendente.', answers: ['Das Ende des Films ist überraschend.'] },
          { prompt: 'Por causa do frio, ficamos em casa.', answers: ['Wegen der Kälte blieben wir zu Hause.'] },
          { prompt: 'O carro da minha irmã é novo.', answers: ['Das Auto meiner Schwester ist neu.'] },
        ],
      },
    ],
  },

  {
    id: 'adv-de-2',
    stage: 'Avançado',
    language: 'de',
    order: 2,
    title: 'Konjunktiv I',
    subtitle: 'Discurso indireto: er sagt, er sei / habe / werde',
    theory: `O Konjunktiv I é usado principalmente no DISCURSO INDIRETO (indirekte Rede) — para relatar o que alguém disse sem necessariamente confirmar que é verdade. Muito comum em textos jornalísticos, científicos e formais; raro na fala cotidiana, onde se prefere o indicativo ou "dass".

## Formação: raiz do infinitivo + terminações especiais

| Pronome   | sein (Konj. I) | haben (Konj. I) | werden (Konj. I) | kommen (Konj. I) |
|-----------|----------------|-----------------|------------------|-------------------|
| ich       | sei            | habe            | werde            | komme             |
| du        | sei(e)st       | habest          | werdest          | kommest           |
| er/sie/es | sei            | habe            | werde            | komme             |
| wir       | seien          | haben           | werden           | kommen            |
| ihr       | seiet          | habet           | werdet           | kommet            |
| sie/Sie   | seien          | haben           | werden           | kommen            |

⚠️ Quando o Konjunktiv I coincide com o indicativo (especialmente na 1ª e 3ª pessoa do plural, como "wir haben"), usa-se o Konjunktiv II em seu lugar, para deixar claro que é discurso indireto: "Sie sagten, sie hätten keine Zeit" em vez de "...sie haben keine Zeit" (ambíguo).

## Uso prático: convertendo discurso direto em indireto

  Direto:   "Ich bin krank."         (Eu estou doente.)
  Indireto: Er sagt, er sei krank.   (Ele diz que está doente.)

  Direto:   "Ich habe keine Zeit."
  Indireto: Sie sagt, sie habe keine Zeit.  (Ela diz que não tem tempo.)

  Direto:   "Ich werde kommen."
  Indireto: Er sagt, er werde kommen.  (Ele diz que virá.)

  Direto:   "Wir haben gewonnen."
  Indireto: Die Mannschaft sagt, sie habe gewonnen. (O time diz que ganhou.)

A conjunção "dass" é opcional no discurso indireto formal — sem ela, o verbo Konjunktiv vai para a 2ª posição: "Er sagt, er sei krank" tem o mesmo sentido de "Er sagt, dass er krank sei", mas a primeira é mais usada no registro jornalístico.

## Passado no discurso indireto → Konjunktiv I Perfekt

Usa-se sempre "habe/sei + Partizip II", independente do tempo verbal original (Präteritum, Perfekt ou Plusquamperfekt no discurso direto colapsam todos no Konjunktiv I Perfekt):
  Er sagt, er sei gestern angekommen.  (Ele diz que chegou ontem.)
  Sie sagt, sie habe das Buch gelesen.  (Ela diz que leu o livro.)
  Der Zeuge berichtete, er habe nichts gesehen. (A testemunha relatou que não tinha visto nada.)

## Konjunktiv I para o futuro indireto

  Er sagt, er werde morgen kommen. (Ele diz que virá amanhã.)

⚠️ Erro comum de falantes de português: tentar formar o Konjunktiv I como o Konjunktiv II (com würde/hätte) — são sistemas diferentes. O Konjunktiv I é exclusivo do discurso indireto formal; o Konjunktiv II serve para hipóteses e condicional.

💡 Dica: no jornalismo alemão, frases como "Der Politiker sagte, er habe nichts gewusst" sinalizam distanciamento — o jornal relata a fala sem necessariamente endossá-la. É um recurso de neutralidade.

## Vocabulário-chave

• berichten — relatar
• behaupten — afirmar
• vergessen — esquecer
• der Sprecher — o porta-voz
• der Zeuge — a testemunha
• die Lage — a situação
• das Unternehmen — a empresa
• die Unregelmäßigkeit — a irregularidade
• die Brieftasche — a carteira
• fertig — pronto`,
    exercises: [
      {
        sentences: [
          { prompt: 'Ele diz que está doente. (Indireto)', answers: ['Er sagt, er sei krank.'] },
          { prompt: 'Ela diz que não tem tempo. (Indireto)', answers: ['Sie sagt, sie habe keine Zeit.'] },
          { prompt: 'Ele diz que virá amanhã. (Indireto)', answers: ['Er sagt, er werde morgen kommen.'] },
          { prompt: 'O ministro diz que o projeto está pronto. (Indireto)', answers: ['Der Minister sagt, das Projekt sei fertig.'] },
          { prompt: 'Ela diz que leu o livro. (Indireto)', answers: ['Sie sagt, sie habe das Buch gelesen.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'O porta-voz diz que a situação está sob controle. (Indireto)', answers: ['Der Sprecher sagt, die Lage sei unter Kontrolle.'] },
          { prompt: 'Ele diz que chegou ontem. (Indireto)', answers: ['Er sagt, er sei gestern angekommen.'] },
          { prompt: 'A empresa diz que não houve irregularidades. (Indireto)', answers: ['Das Unternehmen sagt, es habe keine Unregelmäßigkeiten gegeben.'] },
          { prompt: 'Ela disse que estava feliz. (Indireto)', answers: ['Sie sagte, sie sei glücklich.'] },
          { prompt: 'O político disse que não sabia de nada. (Indireto)', answers: ['Der Politiker sagte, er wisse von nichts.', 'Der Politiker sagte, er habe nichts gewusst.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'O médico diz que o paciente está bem. (Indireto)', answers: ['Der Arzt sagt, der Patient sei in Ordnung.', 'Der Arzt sagt, es gehe dem Patienten gut.'] },
          { prompt: 'Ela afirma que trabalha há dez anos nessa empresa. (Indireto)', answers: ['Sie behauptet, sie arbeite seit zehn Jahren in dieser Firma.'] },
          { prompt: 'O jornal escreve que o governo vai mudar a lei. (Indireto)', answers: ['Die Zeitung schreibt, die Regierung werde das Gesetz ändern.'] },
          { prompt: 'Ele disse que tinha esquecido a carteira. (Indireto)', answers: ['Er sagte, er habe seine Brieftasche vergessen.', 'Er sagte, er habe das Portemonnaie vergessen.'] },
          { prompt: 'A testemunha diz que viu tudo. (Indireto)', answers: ['Der Zeuge sagt, er habe alles gesehen.'] },
        ],
      },
    ],
  },

  {
    id: 'adv-de-3',
    stage: 'Avançado',
    language: 'de',
    order: 3,
    title: 'Estruturas Complexas',
    subtitle: 'Relativsätze em todos os casos + construções com zu (um...zu, ohne...zu, anstatt...zu)',
    theory: `## Orações relativas (Relativsätze)

O pronome relativo concorda com o substantivo que substitui em GÊNERO e NÚMERO, mas seu CASO depende da função que ele exerce dentro da própria oração relativa — não do caso do substantivo na frase principal.

| Caso       | Masc.   | Fem.  | Neutro  | Plural |
|------------|---------|-------|---------|--------|
| Nominativo | der     | die   | das     | die    |
| Acusativo  | den     | die   | das     | die    |
| Dativo     | dem     | der   | dem     | denen  |
| Genitivo   | dessen  | deren | dessen  | deren  |

Exemplos:
  Der Mann, der dort steht, ist mein Vater. (nom. masc.)  — O homem que está ali é meu pai.
  Die Frau, die ich kenne, ist Ärztin. (acus. fem.)       — A mulher que conheço é médica.
  Das Kind, dem ich helfe, heißt Lena. (dat. neutr.)      — A criança à qual ajudo chama-se Lena.
  Der Mann, dessen Auto rot ist... (gen. masc.)            — O homem cujo carro é vermelho...
  Die Leute, deren Haus brennt... (gen. plural)            — As pessoas cuja casa está em chamas...

## Relativas com preposição

Quando o verbo da oração relativa rege uma preposição, ela vem ANTES do pronome relativo (nunca no final, como em inglês):
  Die Frau, mit der er spricht, ist meine Lehrerin. (A mulher com quem ele fala é minha professora.)
  Die Stadt, in der ich wohne, ist sehr schön. (A cidade onde moro é muito bonita.)
  Das Thema, über das wir sprechen, ist wichtig. (O assunto sobre o qual falamos é importante.)

💡 Quando o antecedente é um lugar, "wo" pode substituir "in der/dem": Die Stadt, wo ich wohne... — mais coloquial, mas muito usado.

## Construções com zu (Infinitivkonstruktionen)

um...zu + Inf. (para/a fim de) — expressa finalidade:
  Ich lerne Deutsch, um in Deutschland zu arbeiten.  (Estudo alemão para trabalhar na Alemanha.)

ohne...zu + Inf. (sem):
  Er ging weg, ohne ein Wort zu sagen.  (Ele foi embora sem dizer uma palavra.)

anstatt/statt...zu + Inf. (em vez de):
  Sie sieht fern, anstatt zu lernen.  (Ela assiste TV em vez de estudar.)

⚠️ Com verbos separáveis, o "zu" fica entre prefixo e verbo, formando uma palavra só:
  Er versucht, früh aufzustehen.  (Ele tenta levantar cedo.)
  Es lohnt sich, das Angebot anzunehmen. (Vale a pena aceitar a oferta.)

⚠️ Erro comum: usar "dass" em vez de "zu + Infinitiv" quando o sujeito das duas orações é o mesmo. "Ich versuche, dass ich aufstehe" é estranho/incorreto — o correto é "Ich versuche aufzustehen" (sujeito idêntico → construção com zu, sem novo sujeito).

💡 Dica para revisar relativas rapidamente: pergunte "que caso o verbo da oração relativa pede?" — ignore completamente o caso do substantivo principal.

## Vocabulário-chave

• kennen — conhecer
• annehmen — aceitar
• sich lohnen — valer a pena
• der Termin — o compromisso/consulta
• die Miete — o aluguel
• das Angebot — a oferta
• das Thema — o assunto
• in der Nähe — perto
• nett — simpático
• wichtig — importante`,
    exercises: [
      {
        sentences: [
          { prompt: 'O homem que ali está é meu pai.', answers: ['Der Mann, der dort steht, ist mein Vater.'] },
          { prompt: 'A mulher que eu conheço é médica.', answers: ['Die Frau, die ich kenne, ist Ärztin.'] },
          { prompt: 'A criança à qual ajudo chama-se Lena.', answers: ['Das Kind, dem ich helfe, heißt Lena.'] },
          { prompt: 'Estudo alemão para trabalhar na Alemanha.', answers: ['Ich lerne Deutsch, um in Deutschland zu arbeiten.'] },
          { prompt: 'Ele foi embora sem dizer uma palavra.', answers: ['Er ging weg, ohne ein Wort zu sagen.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'O livro que comprei é muito interessante.', answers: ['Das Buch, das ich gekauft habe, ist sehr interessant.'] },
          { prompt: 'Ela assiste TV em vez de estudar.', answers: ['Sie sieht fern, anstatt zu lernen.', 'Sie sieht fern, anstatt Deutsch zu lernen.'] },
          { prompt: 'O homem cujo carro é vermelho mora perto.', answers: ['Der Mann, dessen Auto rot ist, wohnt in der Nähe.'] },
          { prompt: 'Ele tenta levantar cedo.', answers: ['Er versucht, früh aufzustehen.'] },
          { prompt: 'A cidade onde moro é muito bonita.', answers: ['Die Stadt, in der ich wohne, ist sehr schön.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'As pessoas com quem trabalho são simpáticas.', answers: ['Die Menschen, mit denen ich arbeite, sind nett.'] },
          { prompt: 'Ela foi ao médico sem marcar consulta.', answers: ['Sie ging zum Arzt, ohne einen Termin zu haben.', 'Sie ging zum Arzt, ohne einen Termin zu machen.'] },
          { prompt: 'O apartamento cujo aluguel é alto fica no centro.', answers: ['Die Wohnung, deren Miete hoch ist, liegt im Zentrum.'] },
          { prompt: 'Eles viajaram para a Itália a fim de aprender italiano.', answers: ['Sie reisten nach Italien, um Italienisch zu lernen.'] },
          { prompt: 'A menina a quem dei o presente está feliz.', answers: ['Das Mädchen, dem ich das Geschenk gegeben habe, ist glücklich.'] },
        ],
      },
    ],
  },

  {
    id: 'adv-de-4',
    stage: 'Avançado',
    language: 'de',
    order: 4,
    title: 'Expressões Idiomáticas',
    subtitle: 'Alemão natural: expressões do cotidiano e fala espontânea',
    theory: `Expressões essenciais para soar natural em alemão. Note que muitas usam construções com dativo (mir, dir) típicas de verbos impessoais — diferente do português, que usa "eu" como sujeito.

## Estados e bem-estar

  Es geht mir gut.          (Estou bem. — lit. "vai bem para mim")
  Es geht mir nicht so gut. (Não estou muito bem.)
  Ich fühle mich wohl.      (Estou me sentindo bem.)
  Mir ist schlecht.         (Estou mal-disposto / com náusea.)

⚠️ Note a estrutura impessoal com dativo: "Es geht mir gut" não tem "eu" como sujeito gramatical — "es" é o sujeito, "mir" é o objeto indireto. Não se traduz literalmente palavra por palavra.

## Reações e comentários

  Das macht nichts.         (Não tem problema. / Não importa.)
  Das ist mir egal.         (Para mim tanto faz. / Não me importo.)
  Kein Problem!             (Sem problema!)
  Schade!                   (Que pena!)
  Na ja...                  (Bom... / Ora...)
  Stimmt!                   (Verdade! / Isso mesmo!)

## Expressões com "fallen" e "halten"

  Mir fällt ein...          (Estou lembrando de... / Me vem à mente...)
  jemanden auf dem Laufenden halten  (manter alguém atualizado)
  etwas im Auge behalten    (manter algo em mente / ficar de olho)
  Es fällt mir schwer.      (Está sendo difícil para mim.)

## Outras idiomáticas frequentes

  Daumen drücken!           (Torcer! — lit. "apertar o polegar")
  Ich drücke dir die Daumen! (Estou torcendo por você!)
  Das geht auf meine Rechnung.  (Isso é por minha conta.)
  unter vier Augen          (a sós, entre quatro olhos)
  auf dem Holzweg sein      (estar enganado — lit. "estar no caminho de madeira")
  Hals- und Beinbruch!      (Boa sorte! — lit. "quebra pescoço e perna")
  die Daumen drücken vs. Glück wünschen — ambos significam "desejar sorte", mas "Daumen drücken" é mais caloroso/informal.

💡 Dica: muitas expressões alemãs de sentimento usam "mir/dir" (dativo) em vez de "ich/du" como sujeito — é um padrão recorrente (mir ist kalt, mir tut etwas weh, mir gefällt das). Aprenda a estrutura como bloco, não palavra por palavra.`,
    exercises: [
      {
        sentences: [
          { prompt: 'Estou bem, obrigado.', answers: ['Es geht mir gut, danke.', 'Mir geht es gut, danke.'] },
          { prompt: 'Não tem problema!', answers: ['Das macht nichts!', 'Kein Problem!'] },
          { prompt: 'Estou torcendo por você!', answers: ['Ich drücke dir die Daumen!'] },
          { prompt: 'Isso está sendo difícil para mim.', answers: ['Es fällt mir schwer.'] },
          { prompt: 'O jantar é por minha conta.', answers: ['Das Abendessen geht auf meine Rechnung.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Acabei de lembrar de algo.', answers: ['Mir fällt gerade etwas ein.'] },
          { prompt: 'Vou te manter atualizado.', answers: ['Ich halte dich auf dem Laufenden.'] },
          { prompt: 'Para mim tanto faz.', answers: ['Das ist mir egal.'] },
          { prompt: 'Que pena que você não pode vir!', answers: ['Schade, dass du nicht kommen kannst!'] },
          { prompt: 'Boa sorte no exame! (estou torcendo)', answers: ['Hals- und Beinbruch bei der Prüfung!', 'Ich drücke dir die Daumen für die Prüfung!'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Você está enganado sobre isso.', answers: ['Da bist du auf dem Holzweg.', 'Du bist da auf dem Holzweg.'] },
          { prompt: 'Posso falar com você a sós?', answers: ['Kann ich unter vier Augen mit dir sprechen?'] },
          { prompt: 'Não estou me sentindo muito bem hoje.', answers: ['Ich fühle mich heute nicht so gut.', 'Es geht mir heute nicht so gut.'] },
          { prompt: 'Vamos ficar de olho na situação.', answers: ['Wir behalten die Situation im Auge.'] },
          { prompt: 'Verdade! Não tinha pensado nisso.', answers: ['Stimmt! Daran hatte ich nicht gedacht.'] },
        ],
      },
    ],
  },

  {
    id: 'rev-adv-de',
    stage: 'Avançado',
    language: 'de',
    order: 5,
    isReview: true,
    title: 'Revisão Avançado',
    subtitle: 'Genitivo, Konjunktiv I, Estruturas complexas e expressões idiomáticas',
    theory: `Revisão dos pontos-chave do nível Avançado:

• GENITIVO: des Mannes / der Frau / des Kindes / der Kinder
  Preposições: wegen, trotz, während, statt, aufgrund + genitivo
  Coloquial: von + dativo substitui o genitivo na fala.

• KONJUNKTIV I: discurso indireto formal
  er sei / sie habe / es werde / er habe gesehen
  Quando coincide com indicativo, usa-se Konjunktiv II em seu lugar.

• RELATIVSÄTZE: pronome relativo muda de caso conforme a função
  der (nom.) / den (acus.) / dem (dat.) / dessen (gen.)
  Preposição + relativo: mit dem, auf die, in der...

• INFINITIVKONSTRUKTIONEN:
  um...zu (para), ohne...zu (sem), anstatt...zu (em vez de)
  Separáveis: aufzustehen, einzuladen

• EXPRESSÕES IDIOMÁTICAS:
  Es geht mir gut / Das macht nichts / Mir fällt ein...
  jemanden auf dem Laufenden halten / Daumen drücken

💡 Atenção aos erros mais frequentes deste nível: esquecer o -(e)s do genitivo masculino/neutro, confundir Konjunktiv I com Konjunktiv II, e colocar a preposição depois do pronome relativo (em alemão ela sempre vem antes).`,
    exercises: [
      {
        sentences: [
          { prompt: 'Por causa do mau tempo, o voo foi cancelado.', answers: ['Wegen des schlechten Wetters wurde der Flug abgesagt.'] },
          { prompt: 'O jornalista escreveu que o prefeito tinha renunciado. (Konjunktiv I)', answers: ['Der Journalist schrieb, der Bürgermeister habe zurückgetreten.'] },
          { prompt: 'A mulher com quem ele fala é minha professora.', answers: ['Die Frau, mit der er spricht, ist meine Lehrerin.'] },
          { prompt: 'Ela foi ao trabalho sem comer.', answers: ['Sie ging zur Arbeit, ohne zu essen.'] },
          { prompt: 'Estou torcendo por você no exame!', answers: ['Ich drücke dir die Daumen bei der Prüfung!'] },
          { prompt: 'O livro cujo autor é famoso foi traduzido para o português.', answers: ['Das Buch, dessen Autor bekannt ist, wurde ins Portugiesische übersetzt.'] },
          { prompt: 'Apesar do cansaço, ele terminou o projeto.', answers: ['Trotz der Müdigkeit beendete er das Projekt.'] },
          { prompt: 'Vou te manter informado sobre as novidades.', answers: ['Ich halte dich über die Neuigkeiten auf dem Laufenden.'] },
        ],
      },
    ],
    dialogExercise: {
      audioText: 'Trotz des starken Regens ist er zur Arbeit gegangen, ohne einen Regenschirm mitzunehmen. Er kam völlig durchnässt an.',
      question: 'O que aconteceu com ele?',
      options: [
        { text: 'Foi trabalhar na chuva sem guarda-chuva e chegou encharcado.', correct: true },
        { text: 'Ficou em casa por causa da chuva forte.', correct: false },
        { text: 'Foi ao trabalho de carro por causa da chuva.', correct: false },
        { text: 'Esqueceu o guarda-chuva no trabalho na véspera.', correct: false },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  //  VARIADOS
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'var-de-1',
    stage: 'Variados',
    language: 'de',
    order: 1,
    title: 'Treino Geral — Nível Médio',
    subtitle: 'Frases mistas — Präsens, Perfekt, modais',
    theory: `Prática intensiva com frases do cotidiano misturando gramática dos níveis Fundamentos e Básico.

## Pontos revisados

• Presente (Präsens) — ações habituais e estados
• Perfeito (Perfekt) — ações concluídas (haben/sein + Partizip II)
• Verbos modais — können, müssen, wollen, dürfen, sollen
• Artigos definidos e indefinidos
• Vocabulário do dia a dia

## Quais verbos usam "sein" no Perfekt

De forma geral, usam "sein" verbos de movimento/mudança de estado sem objeto direto:
  gehen → bin gegangen | kommen → bin gekommen | fahren → bin gefahren
  bleiben → bin geblieben | werden → bin geworden | aufstehen → bin aufgestanden

Os demais verbos (a maioria) usam "haben": Ich habe gegessen, Ich habe gekauft, Ich habe gelesen.

💡 Dica: pense em "sein" como o auxiliar de verbos que descrevem ir de um lugar/estado a outro (gehen, kommen, fahren, fliegen, aufstehen, werden, bleiben, sterben). O resto usa "haben".

## Vocabulário-chave

• besuchen — visitar
• empfehlen — recomendar
• vermissen — sentir saudades
• dauern — durar
• zeigen — mostrar
• der Rucksack — a mochila
• die Verspätung — o atraso
• die Präsentation — a apresentação
• die Aufgabe — a tarefa
• vorgestern / letzte Woche — anteontem / semana passada`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu tomo café da manhã às sete horas.', answers: ['Ich frühstücke um sieben Uhr.', 'Ich esse um sieben Uhr Frühstück.'] },
          { prompt: 'Você fala inglês?', answers: ['Sprichst du Englisch?', 'Sprechen Sie Englisch?'] },
          { prompt: 'Ela mora em Berlim.', answers: ['Sie wohnt in Berlin.'] },
          { prompt: 'Nós compramos pão na padaria.', answers: ['Wir kaufen Brot in der Bäckerei.'] },
          { prompt: 'Eles viajam muito.', answers: ['Sie reisen viel.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Posso abrir a janela?', answers: ['Kann ich das Fenster öffnen?', 'Darf ich das Fenster öffnen?'] },
          { prompt: 'Você precisa estudar mais.', answers: ['Du musst mehr lernen.'] },
          { prompt: 'Ele quer morar na Alemanha.', answers: ['Er will in Deutschland wohnen.'] },
          { prompt: 'Nós devemos chegar às cinco.', answers: ['Wir sollen um fünf ankommen.'] },
          { prompt: 'Você pode me passar o sal?', answers: ['Kannst du mir das Salz geben?', 'Können Sie mir das Salz reichen?'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu fui ao supermercado ontem.', answers: ['Ich bin gestern in den Supermarkt gegangen.', 'Ich habe gestern im Supermarkt eingekauft.'] },
          { prompt: 'Ela comeu pizza para o jantar.', answers: ['Sie hat Pizza zum Abendessen gegessen.'] },
          { prompt: 'Nós assistimos a um filme ontem à noite.', answers: ['Wir haben gestern Abend einen Film geschaut.', 'Wir haben gestern Abend einen Film gesehen.'] },
          { prompt: 'Ele veio de bicicleta.', answers: ['Er ist mit dem Fahrrad gekommen.'] },
          { prompt: 'Você dormiu bem?', answers: ['Hast du gut geschlafen?'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu tenho uma reunião às dez.', answers: ['Ich habe um zehn Uhr ein Meeting.', 'Ich habe um zehn ein Treffen.'] },
          { prompt: 'O trem chega às três da tarde.', answers: ['Der Zug kommt um drei Uhr nachmittags an.', 'Der Zug kommt um fünfzehn Uhr an.'] },
          { prompt: 'Ela está aprendendo alemão.', answers: ['Sie lernt Deutsch.'] },
          { prompt: 'Faz frio hoje.', answers: ['Es ist heute kalt.', 'Heute ist es kalt.'] },
          { prompt: 'Nós ficamos em casa no fim de semana.', answers: ['Wir bleiben am Wochenende zu Hause.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ele trabalha em uma empresa grande.', answers: ['Er arbeitet in einem großen Unternehmen.', 'Er arbeitet in einer großen Firma.'] },
          { prompt: 'Você gosta de música?', answers: ['Magst du Musik?', 'Hörst du gern Musik?'] },
          { prompt: 'Ela foi para a escola de metrô.', answers: ['Sie ist mit der U-Bahn zur Schule gefahren.'] },
          { prompt: 'Eu esqueço sempre onde deixo as chaves.', answers: ['Ich vergesse immer, wo ich meine Schlüssel lasse.'] },
          { prompt: 'Nós temos dois filhos.', answers: ['Wir haben zwei Kinder.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Qual é o seu nome?', answers: ['Wie heißt du?', 'Wie ist Ihr Name?'] },
          { prompt: 'Quanto custa isso?', answers: ['Wie viel kostet das?'] },
          { prompt: 'Onde fica a estação mais próxima?', answers: ['Wo ist der nächste Bahnhof?'] },
          { prompt: 'Eu prefiro chá a café.', answers: ['Ich trinke lieber Tee als Kaffee.', 'Ich mag Tee lieber als Kaffee.'] },
          { prompt: 'A loja fecha às oito da noite.', answers: ['Das Geschäft schließt um acht Uhr abends.', 'Der Laden schließt um zwanzig Uhr.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ele escreveu um email para o chefe.', answers: ['Er hat eine E-Mail an den Chef geschrieben.'] },
          { prompt: 'Ela telefonou para a mãe ontem.', answers: ['Sie hat ihre Mutter gestern angerufen.'] },
          { prompt: 'Nós compramos um carro novo.', answers: ['Wir haben ein neues Auto gekauft.'] },
          { prompt: 'O jogo começou às oito.', answers: ['Das Spiel hat um acht angefangen.', 'Das Spiel fing um acht an.'] },
          { prompt: 'Você já esteve na Áustria?', answers: ['Warst du schon in Österreich?', 'Bist du schon in Österreich gewesen?'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Preciso de uma nova mochila.', answers: ['Ich brauche einen neuen Rucksack.'] },
          { prompt: 'Ela acorda cedo todos os dias.', answers: ['Sie wacht jeden Tag früh auf.'] },
          { prompt: 'Nós jantamos juntos.', answers: ['Wir essen zusammen zu Abend.', 'Wir haben zusammen zu Abend gegessen.'] },
          { prompt: 'Ele não consegue dormir.', answers: ['Er kann nicht schlafen.'] },
          { prompt: 'Você quer mais alguma coisa?', answers: ['Möchtest du noch etwas?', 'Wollen Sie noch etwas?'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Faz quanto tempo que você mora aqui?', answers: ['Wie lange wohnst du schon hier?'] },
          { prompt: 'Eu leio o jornal de manhã.', answers: ['Ich lese morgens die Zeitung.', 'Ich lese die Zeitung am Morgen.'] },
          { prompt: 'Ela tem um gato e um cachorro.', answers: ['Sie hat eine Katze und einen Hund.'] },
          { prompt: 'O ônibus não veio hoje.', answers: ['Der Bus ist heute nicht gekommen.'] },
          { prompt: 'Nós visitamos o museu no fim de semana.', answers: ['Wir haben das Museum am Wochenende besucht.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ele aprendeu a nadar quando era criança.', answers: ['Er hat schwimmen gelernt, als er ein Kind war.', 'Er lernte schwimmen, als er Kind war.'] },
          { prompt: 'Você pode me mostrar o caminho?', answers: ['Kannst du mir den Weg zeigen?', 'Können Sie mir den Weg zeigen?'] },
          { prompt: 'A apresentação durou duas horas.', answers: ['Die Präsentation hat zwei Stunden gedauert.'] },
          { prompt: 'Ela não quer sair hoje.', answers: ['Sie will heute nicht ausgehen.'] },
          { prompt: 'Nós precisamos de mais tempo.', answers: ['Wir brauchen mehr Zeit.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Você tem planos para o fim de semana?', answers: ['Hast du Pläne für das Wochenende?', 'Hast du am Wochenende Pläne?'] },
          { prompt: 'Ela foi ao médico na semana passada.', answers: ['Sie ist letzte Woche zum Arzt gegangen.'] },
          { prompt: 'Eu gosto de cozinhar nos fins de semana.', answers: ['Ich koche gern am Wochenende.', 'Ich mag es, am Wochenende zu kochen.'] },
          { prompt: 'O restaurante fica perto da estação.', answers: ['Das Restaurant liegt in der Nähe des Bahnhofs.', 'Das Restaurant ist neben dem Bahnhof.'] },
          { prompt: 'Ele ainda não chegou.', answers: ['Er ist noch nicht angekommen.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Nós fomos ao cinema ontem.', answers: ['Wir sind gestern ins Kino gegangen.'] },
          { prompt: 'O tempo estava lindo no verão.', answers: ['Das Wetter war im Sommer wunderschön.'] },
          { prompt: 'Ela pode falar três idiomas.', answers: ['Sie kann drei Sprachen sprechen.'] },
          { prompt: 'Você precisa levar passaporte.', answers: ['Du musst den Reisepass mitnehmen.'] },
          { prompt: 'Eu não entendi a pergunta.', answers: ['Ich habe die Frage nicht verstanden.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eles viajaram de trem para Hamburgo.', answers: ['Sie sind mit dem Zug nach Hamburg gefahren.'] },
          { prompt: 'O café está muito quente.', answers: ['Der Kaffee ist sehr heiß.'] },
          { prompt: 'Ela trabalha em tempo integral.', answers: ['Sie arbeitet Vollzeit.'] },
          { prompt: 'Você deve ligar antes de vir.', answers: ['Du solltest anrufen, bevor du kommst.'] },
          { prompt: 'Nós terminamos o projeto na sexta.', answers: ['Wir haben das Projekt am Freitag abgeschlossen.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ele está com saudades da família.', answers: ['Er vermisst seine Familie.'] },
          { prompt: 'Você pode repetir mais devagar?', answers: ['Kannst du das langsamer wiederholen?', 'Können Sie das langsamer wiederholen?'] },
          { prompt: 'Ela se esqueceu do guarda-chuva.', answers: ['Sie hat ihren Regenschirm vergessen.'] },
          { prompt: 'O bebê ainda não fala.', answers: ['Das Baby spricht noch nicht.'] },
          { prompt: 'Nós acabamos de chegar.', answers: ['Wir sind gerade angekommen.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu moro perto do trabalho.', answers: ['Ich wohne in der Nähe meiner Arbeit.', 'Ich wohne nah bei der Arbeit.'] },
          { prompt: 'Você está aprendendo a dirigir?', answers: ['Lernst du Auto fahren?', 'Machst du den Führerschein?'] },
          { prompt: 'Ela ajuda os colegas sempre.', answers: ['Sie hilft ihren Kollegen immer.'] },
          { prompt: 'Nós comemos muito bem lá.', answers: ['Wir haben dort sehr gut gegessen.'] },
          { prompt: 'Ele trouxe uma garrafa de vinho.', answers: ['Er hat eine Flasche Wein mitgebracht.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'O trem estava atrasado.', answers: ['Der Zug hatte Verspätung.', 'Der Zug war verspätet.'] },
          { prompt: 'Ela não pôde vir à festa.', answers: ['Sie konnte nicht zur Party kommen.'] },
          { prompt: 'Você gostaria de mais chá?', answers: ['Möchtest du mehr Tee?'] },
          { prompt: 'Nós ficamos numa pousada bonita.', answers: ['Wir haben in einer schönen Pension übernachtet.', 'Wir sind in einer schönen Pension geblieben.'] },
          { prompt: 'Eu leio um livro antes de dormir.', answers: ['Ich lese vor dem Schlafen ein Buch.', 'Ich lese ein Buch, bevor ich schlafe.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ele aprendeu alemão na escola.', answers: ['Er hat Deutsch in der Schule gelernt.'] },
          { prompt: 'Nós vamos ao mercado amanhã.', answers: ['Wir gehen morgen auf den Markt.'] },
          { prompt: 'A criança está brincando no parque.', answers: ['Das Kind spielt im Park.'] },
          { prompt: 'Você pode me recomendar um bom restaurante?', answers: ['Kannst du mir ein gutes Restaurant empfehlen?', 'Können Sie mir ein gutes Restaurant empfehlen?'] },
          { prompt: 'Ela se levantou tarde hoje.', answers: ['Sie ist heute spät aufgestanden.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu não como carne.', answers: ['Ich esse kein Fleisch.'] },
          { prompt: "Ele bebe dois copos d'água por dia.", answers: ['Er trinkt zwei Gläser Wasser pro Tag.'] },
          { prompt: 'A reunião começa em dez minutos.', answers: ['Das Meeting beginnt in zehn Minuten.', 'Die Besprechung fängt in zehn Minuten an.'] },
          { prompt: 'Você já ouviu essa música?', answers: ['Hast du dieses Lied schon gehört?'] },
          { prompt: 'Nós precisamos fazer compras.', answers: ['Wir müssen einkaufen gehen.', 'Wir müssen einkaufen.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ela se sente bem em Munique.', answers: ['Sie fühlt sich in München wohl.'] },
          { prompt: 'Você pode me ajudar com isso?', answers: ['Kannst du mir damit helfen?', 'Können Sie mir dabei helfen?'] },
          { prompt: 'O exercício foi difícil.', answers: ['Die Aufgabe war schwierig.', 'Die Übung war schwierig.'] },
          { prompt: 'Nós ficamos sem gasolina.', answers: ['Wir hatten kein Benzin mehr.', 'Uns ist das Benzin ausgegangen.'] },
          { prompt: 'Ele me mandou uma mensagem.', answers: ['Er hat mir eine Nachricht geschickt.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Você conseguiu ingressos para o show?', answers: ['Hast du Karten für das Konzert bekommen?'] },
          { prompt: 'Ela faz muito esporte.', answers: ['Sie treibt viel Sport.'] },
          { prompt: 'Nós nos conhecemos na universidade.', answers: ['Wir haben uns an der Universität kennengelernt.'] },
          { prompt: 'O projeto ainda não está pronto.', answers: ['Das Projekt ist noch nicht fertig.'] },
          { prompt: 'Eu tenho que ir agora.', answers: ['Ich muss jetzt gehen.'] },
        ],
      },
    ],
  },

  {
    id: 'var-de-2',
    stage: 'Variados',
    language: 'de',
    order: 2,
    title: 'Treino Geral — Nível Avançado',
    subtitle: 'Konjunktiv II, Passiv, subordinadas',
    theory: `Prática intensiva com estruturas avançadas do alemão, combinando vários pontos gramaticais na mesma frase — como em textos reais.

## Pontos revisados

• Konjunktiv II — würde, hätte, wäre, könnte, müsste, sollte (presente e passado: hätte/wäre + Partizip II)
• Passivo — werden + Partizip II / ist ... worden / Passivo com modal: muss gemacht werden
• Orações subordinadas — dass, weil, obwohl, wenn, als, ob
• Verbos separáveis no contexto de frases complexas
• Relativsätze — pronome relativo com caso correto
• Genitivo e preposições genitivas

## Combinando Konjunktiv II com subordinadas

Quando o verbo no Konjunktiv II está dentro de uma oração subordinada, ele também vai para o final, na ordem auxiliar+particípio ou würde+infinitivo:
  "Wenn ich Zeit hätte, würde ich kommen." (frase com duas orações independentes)
  "Ich sage, dass ich kommen würde." (würde dentro da subordinada, ao final)
  "Sie wusste nicht, ob sie das Angebot hätte annehmen sollen." (combinação de hätte + Partizip + modal, comum em frases complexas)

💡 Dica: ao combinar passivo + Konjunktiv II + passado, a ordem no final da frase costuma ser "Partizip II + werden + Infinitiv do modal": "Das hätte anders gemacht werden können." (Isso poderia ter sido feito de forma diferente.)

## Vocabulário-chave

• unterschreiben — assinar
• gründen — fundar
• verschieben — adiar
• vermeiden — evitar
• sich bewerben — candidatar-se
• der Vertrag — o contrato
• die Verhandlung — a negociação
• die Entscheidung — a decisão
• die Ausstellung — a exposição
• der Vorschlag — a proposta`,
    exercises: [
      {
        sentences: [
          { prompt: 'Se eu tivesse mais tempo, aprenderia japonês.', answers: ['Wenn ich mehr Zeit hätte, würde ich Japanisch lernen.'] },
          { prompt: 'O museu é visitado por milhares de turistas.', answers: ['Das Museum wird von Tausenden von Touristen besucht.'] },
          { prompt: 'Ela diz que não quer vir.', answers: ['Sie sagt, dass sie nicht kommen will.'] },
          { prompt: 'Embora ele seja inteligente, não passou no exame.', answers: ['Obwohl er intelligent ist, hat er das Examen nicht bestanden.'] },
          { prompt: 'Eu gostaria de reservar um quarto, por favor.', answers: ['Ich würde gern ein Zimmer reservieren, bitte.', 'Ich hätte gern ein Zimmer, bitte.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'A ponte foi construída em 1950.', answers: ['Die Brücke wurde 1950 gebaut.', 'Die Brücke ist 1950 gebaut worden.'] },
          { prompt: 'Não sei se ela virá amanhã.', answers: ['Ich weiß nicht, ob sie morgen kommen wird.', 'Ich weiß nicht, ob sie morgen kommt.'] },
          { prompt: 'Você poderia falar mais devagar?', answers: ['Könntest du langsamer sprechen?', 'Könnten Sie langsamer sprechen?'] },
          { prompt: 'Ficamos em casa porque estava chovendo muito.', answers: ['Wir blieben zu Hause, weil es stark regnete.', 'Wir sind zu Hause geblieben, weil es stark geregnet hat.'] },
          { prompt: 'Se ela fosse mais cuidadosa, não teria errado.', answers: ['Wenn sie vorsichtiger gewesen wäre, hätte sie nicht den Fehler gemacht.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'O paciente foi operado às dez da manhã.', answers: ['Der Patient wurde um zehn Uhr morgens operiert.'] },
          { prompt: 'Ele me disse que estava procurando emprego.', answers: ['Er sagte mir, dass er einen Job suchte.', 'Er hat mir gesagt, dass er Arbeit sucht.'] },
          { prompt: 'Isso seria muito melhor.', answers: ['Das wäre viel besser.'] },
          { prompt: 'Quando eu era pequeno, adorava ler.', answers: ['Als ich klein war, habe ich das Lesen geliebt.', 'Als ich klein war, liebte ich es zu lesen.'] },
          { prompt: 'O relatório ainda não foi enviado.', answers: ['Der Bericht ist noch nicht abgeschickt worden.', 'Der Bericht wurde noch nicht abgeschickt.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ela deveria se desculpar.', answers: ['Sie sollte sich entschuldigen.'] },
          { prompt: 'O carro foi roubado na semana passada.', answers: ['Das Auto wurde letzte Woche gestohlen.', 'Das Auto ist letzte Woche gestohlen worden.'] },
          { prompt: 'Ele me perguntou se eu queria jantar.', answers: ['Er fragte mich, ob ich zu Abend essen wollte.', 'Er hat mich gefragt, ob ich Abendessen möchte.'] },
          { prompt: 'Se eu fosse você, aceitaria a oferta.', answers: ['Wenn ich du wäre, würde ich das Angebot annehmen.', 'An deiner Stelle würde ich das Angebot annehmen.'] },
          { prompt: 'A nova lei está sendo discutida no parlamento.', answers: ['Das neue Gesetz wird im Parlament diskutiert.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ela é feliz, embora trabalhe muito.', answers: ['Sie ist glücklich, obwohl sie viel arbeitet.'] },
          { prompt: 'O projeto teria terminado mais cedo se tivéssemos mais recursos.', answers: ['Das Projekt wäre früher fertig geworden, wenn wir mehr Ressourcen gehabt hätten.'] },
          { prompt: 'As encomendas são entregues toda manhã.', answers: ['Die Pakete werden jeden Morgen geliefert.'] },
          { prompt: 'Eu sei que ela não vai.', answers: ['Ich weiß, dass sie nicht geht.', 'Ich weiß, dass sie nicht fahren wird.'] },
          { prompt: 'Você deveria ter ligado antes.', answers: ['Du hättest vorher anrufen sollen.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Se houvesse mais tempo, faríamos uma pausa.', answers: ['Wenn es mehr Zeit gäbe, würden wir eine Pause machen.'] },
          { prompt: 'O contrato foi assinado ontem.', answers: ['Der Vertrag wurde gestern unterschrieben.', 'Der Vertrag ist gestern unterzeichnet worden.'] },
          { prompt: 'Fico feliz que você tenha vindo.', answers: ['Ich bin froh, dass du gekommen bist.'] },
          { prompt: 'Ela gostaria de morar perto do mar.', answers: ['Sie würde gern in der Nähe des Meeres wohnen.'] },
          { prompt: 'O texto é escrito por estudantes.', answers: ['Der Text wird von Studenten geschrieben.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Seria ótimo se você pudesse me ajudar.', answers: ['Es wäre toll, wenn du mir helfen könntest.'] },
          { prompt: 'A reunião foi adiada porque o diretor estava doente.', answers: ['Die Besprechung wurde verschoben, weil der Direktor krank war.'] },
          { prompt: 'Eu não sabia que ela falava alemão.', answers: ['Ich wusste nicht, dass sie Deutsch spricht.', 'Ich wusste nicht, dass sie Deutsch sprach.'] },
          { prompt: 'Você poderia enviar o documento até amanhã?', answers: ['Könntest du das Dokument bis morgen schicken?'] },
          { prompt: 'A carta foi entregue na tarde de ontem.', answers: ['Der Brief wurde gestern Nachmittag zugestellt.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Embora não haja perigo, ela está nervosa.', answers: ['Obwohl es keine Gefahr gibt, ist sie nervös.'] },
          { prompt: 'Ele me perguntou quando eu terminaria o projeto.', answers: ['Er fragte mich, wann ich das Projekt abschließen würde.'] },
          { prompt: 'Nós deveríamos chegar mais cedo.', answers: ['Wir hätten früher kommen sollen.', 'Wir sollten früher ankommen.'] },
          { prompt: 'Os ingressos estão sendo vendidos online.', answers: ['Die Karten werden online verkauft.'] },
          { prompt: 'Ela estava feliz porque tinha passado no exame.', answers: ['Sie war glücklich, weil sie die Prüfung bestanden hatte.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Se eu soubesse a resposta, te diria.', answers: ['Wenn ich die Antwort wüsste, würde ich es dir sagen.'] },
          { prompt: 'O museu foi fundado em 1895.', answers: ['Das Museum wurde 1895 gegründet.'] },
          { prompt: 'Ela explicou que estava cansada.', answers: ['Sie erklärte, dass sie müde sei.', 'Sie erklärte, dass sie müde war.'] },
          { prompt: 'Isso poderia ter sido evitado.', answers: ['Das hätte vermieden werden können.', 'Das hätte man vermeiden können.'] },
          { prompt: 'O médico recomendou que ela descansasse.', answers: ['Der Arzt empfahl, dass sie sich ausruhen solle.', 'Der Arzt riet ihr, sich auszuruhen.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'A encomenda foi enviada errada.', answers: ['Das Paket wurde falsch abgeschickt.', 'Das Paket ist falsch versendet worden.'] },
          { prompt: 'Eu preferiria ficar em casa.', answers: ['Ich würde lieber zu Hause bleiben.'] },
          { prompt: 'Quando o telefone tocou, ela estava dormindo.', answers: ['Als das Telefon klingelte, schlief sie.', 'Als das Telefon klingelte, hat sie geschlafen.'] },
          { prompt: 'Você deveria ter me avisado.', answers: ['Du hättest mich warnen sollen.', 'Du hättest mir Bescheid geben sollen.'] },
          { prompt: 'Não sei por que ele fez isso.', answers: ['Ich weiß nicht, warum er das getan hat.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'A fábrica foi fechada há dois anos.', answers: ['Die Fabrik wurde vor zwei Jahren geschlossen.'] },
          { prompt: 'Ele gostaria de ter estudado medicina.', answers: ['Er hätte gern Medizin studiert.'] },
          { prompt: 'Ela disse que precisava de ajuda.', answers: ['Sie sagte, dass sie Hilfe brauche.', 'Sie sagte, dass sie Hilfe braucht.'] },
          { prompt: 'Se ele não chegasse atrasado, não teríamos perdido o trem.', answers: ['Wenn er nicht zu spät gekommen wäre, hätten wir den Zug nicht verpasst.'] },
          { prompt: 'O programa ainda está sendo desenvolvido.', answers: ['Das Programm wird noch entwickelt.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu não me lembro se fechei a porta.', answers: ['Ich kann mich nicht erinnern, ob ich die Tür abgeschlossen habe.'] },
          { prompt: 'Ela teria vindo se não estivesse doente.', answers: ['Sie wäre gekommen, wenn sie nicht krank wäre.', 'Sie wäre gekommen, wenn sie nicht krank gewesen wäre.'] },
          { prompt: 'Os documentos foram traduzidos pelo serviço oficial.', answers: ['Die Dokumente wurden vom offiziellen Dienst übersetzt.'] },
          { prompt: 'Nós poderíamos nos encontrar amanhã.', answers: ['Wir könnten uns morgen treffen.'] },
          { prompt: 'Ela estudou muito para que pudesse passar.', answers: ['Sie hat viel gelernt, damit sie bestehen könnte.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'O acordo foi alcançado após longas negociações.', answers: ['Die Einigung wurde nach langen Verhandlungen erzielt.'] },
          { prompt: 'Eu gostaria de ter viajado mais quando era jovem.', answers: ['Ich hätte gern mehr gereist, als ich jung war.', 'Ich wäre gern mehr gereist, als ich jung war.'] },
          { prompt: 'Ela ainda não sabia que tinha sido selecionada.', answers: ['Sie wusste noch nicht, dass sie ausgewählt worden war.'] },
          { prompt: 'Você deveria se candidatar a esse emprego.', answers: ['Du solltest dich auf diese Stelle bewerben.'] },
          { prompt: 'O projeto será apresentado na próxima semana.', answers: ['Das Projekt wird nächste Woche präsentiert.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Se eu morasse mais perto, viria de bicicleta.', answers: ['Wenn ich näher wohnen würde, käme ich mit dem Fahrrad.', 'Wenn ich näher wohnte, würde ich mit dem Fahrrad kommen.'] },
          { prompt: 'A exposição foi inaugurada com grande sucesso.', answers: ['Die Ausstellung wurde mit großem Erfolg eröffnet.'] },
          { prompt: 'Ela admitiu que tinha cometido um erro.', answers: ['Sie gab zu, dass sie einen Fehler gemacht hatte.'] },
          { prompt: 'Ele preferiria trabalhar em casa.', answers: ['Er würde lieber zu Hause arbeiten.', 'Er würde es vorziehen, zu Hause zu arbeiten.'] },
          { prompt: 'A decisão será anunciada amanhã.', answers: ['Die Entscheidung wird morgen bekannt gegeben.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Não sei se o museu ainda está aberto.', answers: ['Ich weiß nicht, ob das Museum noch geöffnet ist.'] },
          { prompt: 'Se tivéssemos saído mais cedo, não teríamos perdido o avião.', answers: ['Wenn wir früher aufgebrochen wären, hätten wir das Flugzeug nicht verpasst.'] },
          { prompt: 'A nova lei foi aprovada pelo parlamento.', answers: ['Das neue Gesetz wurde vom Parlament verabschiedet.'] },
          { prompt: 'Eu deveria ligar para ela.', answers: ['Ich sollte sie anrufen.'] },
          { prompt: 'Ela disse que a reunião havia sido cancelada.', answers: ['Sie sagte, dass das Meeting abgesagt worden sei.', 'Sie sagte, dass die Besprechung abgesagt worden war.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Isso poderia ter sido feito de forma diferente.', answers: ['Das hätte anders gemacht werden können.', 'Man hätte das anders machen können.'] },
          { prompt: 'Embora o exame fosse difícil, ele passou.', answers: ['Obwohl die Prüfung schwierig war, hat er bestanden.'] },
          { prompt: 'A encomenda será entregue em dois dias.', answers: ['Das Paket wird in zwei Tagen geliefert.'] },
          { prompt: 'Ele gostaria de ter mais tempo para a família.', answers: ['Er würde gern mehr Zeit für die Familie haben.'] },
          { prompt: 'Eu sei que ela está fazendo o melhor que pode.', answers: ['Ich weiß, dass sie ihr Bestes gibt.', 'Ich weiß, dass sie das Beste tut, was sie kann.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'A empresa foi fundada por um imigrante.', answers: ['Das Unternehmen wurde von einem Einwanderer gegründet.'] },
          { prompt: 'Seria melhor se você viesse mais cedo.', answers: ['Es wäre besser, wenn du früher kämest.', 'Es wäre besser, wenn du früher kommen würdest.'] },
          { prompt: 'Ela não entendeu o que ele queria dizer.', answers: ['Sie hat nicht verstanden, was er sagen wollte.'] },
          { prompt: 'Nós poderíamos tentar uma abordagem diferente.', answers: ['Wir könnten einen anderen Ansatz versuchen.'] },
          { prompt: 'Os resultados serão publicados na próxima semana.', answers: ['Die Ergebnisse werden nächste Woche veröffentlicht.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Se eu não tivesse errado, teria ganho o prêmio.', answers: ['Wenn ich keinen Fehler gemacht hätte, hätte ich den Preis gewonnen.'] },
          { prompt: 'O hospital foi renovado recentemente.', answers: ['Das Krankenhaus wurde kürzlich renoviert.'] },
          { prompt: 'Ele perguntou se eu já tinha estado na Alemanha.', answers: ['Er fragte, ob ich schon in Deutschland gewesen war.', 'Er fragte, ob ich schon in Deutschland war.'] },
          { prompt: 'Ela preferiria uma solução mais simples.', answers: ['Sie würde eine einfachere Lösung bevorzugen.'] },
          { prompt: 'Não sei por que o voo foi cancelado.', answers: ['Ich weiß nicht, warum der Flug abgesagt wurde.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Os testes estão sendo realizados no laboratório.', answers: ['Die Tests werden im Labor durchgeführt.'] },
          { prompt: 'Eu teria chegado na hora se não houvesse trânsito.', answers: ['Ich wäre pünktlich angekommen, wenn kein Stau gewesen wäre.', 'Ich wäre pünktlich angekommen, wenn es keinen Stau gegeben hätte.'] },
          { prompt: 'Ela disse que voltaria logo.', answers: ['Sie sagte, dass sie bald zurückkommen würde.'] },
          { prompt: 'O candidato teria mais chances se falasse alemão.', answers: ['Der Kandidat hätte mehr Chancen, wenn er Deutsch spräche.', 'Der Kandidat hätte mehr Chancen, wenn er Deutsch sprechen würde.'] },
          { prompt: 'A pesquisa foi realizada por especialistas.', answers: ['Die Studie wurde von Experten durchgeführt.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Se a situação mudasse, nós avisaríamos.', answers: ['Wenn sich die Situation ändern würde, würden wir Bescheid geben.'] },
          { prompt: 'O relatório foi aprovado com algumas correções.', answers: ['Der Bericht wurde mit einigen Korrekturen genehmigt.'] },
          { prompt: 'Ele gostaria que ela entendesse sua posição.', answers: ['Er würde sich wünschen, dass sie seine Lage verstünde.', 'Er hätte gern, dass sie seine Position versteht.'] },
          { prompt: 'Não sei se a proposta será aceita.', answers: ['Ich weiß nicht, ob der Vorschlag angenommen wird.'] },
          { prompt: 'A reunião está sendo gravada.', answers: ['Die Besprechung wird aufgenommen.'] },
        ],
      },
    ],
  },

  {
    id: 'var-de-3',
    stage: 'Variados',
    language: 'de',
    order: 3,
    title: 'Fluente no Mundo Real',
    subtitle: 'Expressões idiomáticas e conversação real',
    theory: `Alemão como os nativos falam — expressões idiomáticas, gírias e fala natural. Saber essas expressões é o que separa um alemão "de livro" do alemão realmente fluente.

## Expressões do cotidiano

  Das passt mir gut.           (Isso me convém bem.)
  Das kommt mir bekannt vor.   (Isso me parece familiar.)
  Ich habe keine Ahnung.       (Não tenho ideia.)
  Das haut mich um.            (Isso me impressiona / me derruba — fig.)
  Na und?                      (E daí?)
  Ich bin dabei!               (Estou dentro! / Pode contar comigo!)
  Das geht nicht.              (Isso não vai / não é possível.)
  Jetzt bin ich dran.          (Agora é minha vez.)

## Expressões de tempo e urgência

  Auf die Schnelle             (às pressas / rapidamente)
  in letzter Minute            (na última hora)
  Es war höchste Zeit!         (Já era hora!)
  Das hat Zeit.                (Isso pode esperar.)

## Expressões de entendimento

  Ich verstehe nur Bahnhof.    (Não entendo nada — lit. "só entendo estação")
  Das leuchtet mir ein.        (Isso faz sentido para mim.)
  Das liegt auf der Hand.      (Isso é óbvio.)

## Expressões sociais

  Das ist nett von dir.        (Que gentil da sua parte.)
  Mach dir keine Sorgen.       (Não se preocupe.)
  Kopf hoch!                   (Cabeça erguida! / Anime-se!)
  Alles wird gut.              (Vai ficar tudo bem.)
  Das schaffst du!             (Você consegue!)

💡 Dica: muitas dessas expressões usam o dativo (mir, dir) em construções impessoais — "Das passt mir", "Das leuchtet mir ein", "Das kommt mir bekannt vor". Memorize o bloco inteiro com o pronome, não só o verbo.

## Vocabulário-chave

• sich verlassen auf — contar com/confiar em
• erledigen — terminar/cuidar de
• auftauchen — aparecer
• sich verabreden — combinar (encontro)
• der Vorschlag — a sugestão
• der Zufall — a coincidência
• der Fortschritt — o progresso
• eilig — urgente`,
    exercises: [
      {
        sentences: [
          { prompt: 'Não tenho ideia do que ele está falando.', answers: ['Ich habe keine Ahnung, wovon er spricht.'] },
          { prompt: 'Isso me convém muito bem.', answers: ['Das passt mir sehr gut.'] },
          { prompt: 'Não se preocupe com isso.', answers: ['Mach dir keine Sorgen darum.', 'Mach dir keine Sorgen.'] },
          { prompt: 'Agora é minha vez.', answers: ['Jetzt bin ich dran.'] },
          { prompt: 'Isso é óbvio.', answers: ['Das liegt auf der Hand.', 'Das ist doch klar.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Isso faz sentido para mim.', answers: ['Das leuchtet mir ein.'] },
          { prompt: 'Já era hora que ele chegasse!', answers: ['Es war höchste Zeit, dass er ankam!'] },
          { prompt: 'Estou dentro! Vamos fazer isso.', answers: ['Ich bin dabei! Lass uns das machen.'] },
          { prompt: 'Você consegue! Continue tentando.', answers: ['Das schaffst du! Mach weiter.', 'Du schaffst das! Versuch es weiter.'] },
          { prompt: 'Isso não vai funcionar assim.', answers: ['Das geht so nicht.', 'Das funktioniert so nicht.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Não entendo absolutamente nada.', answers: ['Ich verstehe nur Bahnhof.', 'Ich verstehe gar nichts.'] },
          { prompt: 'Isso me parece familiar.', answers: ['Das kommt mir bekannt vor.'] },
          { prompt: 'Esse resultado me impressionou muito.', answers: ['Dieses Ergebnis hat mich umgehauen.'] },
          { prompt: 'Isso pode esperar. Não tem pressa.', answers: ['Das hat Zeit. Es ist nicht eilig.'] },
          { prompt: 'Que gentil da sua parte!', answers: ['Das ist nett von dir!', 'Das ist nett von Ihnen!'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Vamos lá! Conseguimos!', answers: ["Auf geht's! Wir schaffen das!"] },
          { prompt: 'Ele terminou tudo às pressas.', answers: ['Er hat alles auf die Schnelle erledigt.'] },
          { prompt: 'Vai ficar tudo bem, não se preocupe.', answers: ['Alles wird gut, mach dir keine Sorgen.'] },
          { prompt: 'E daí? Não é grande coisa.', answers: ['Na und? Das ist keine große Sache.', 'Na und? Das ist doch nicht so schlimm.'] },
          { prompt: 'Cabeça erguida! Vai melhorar.', answers: ['Kopf hoch! Es wird besser.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Terminei na última hora, mas entregui.', answers: ['Ich habe in letzter Minute fertiggestellt, aber abgegeben.', 'Ich habe es in letzter Minute geschafft.'] },
          { prompt: 'Isso não vai resolver nada.', answers: ['Das wird nichts lösen.', 'Das löst nichts.'] },
          { prompt: 'Posso contar com você?', answers: ['Kann ich mich auf dich verlassen?', 'Kann ich auf dich zählen?'] },
          { prompt: 'Você está indo muito bem.', answers: ['Du machst das sehr gut.', 'Du machst tolle Fortschritte.'] },
          { prompt: 'Isso é demais para mim.', answers: ['Das ist zu viel für mich.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ele sempre aparece na última hora.', answers: ['Er taucht immer in letzter Minute auf.'] },
          { prompt: 'Obrigado, foi muito gentil.', answers: ['Danke, das war sehr nett.', 'Danke, das war sehr freundlich.'] },
          { prompt: 'Você tem alguma sugestão?', answers: ['Hast du einen Vorschlag?', 'Haben Sie eine Idee?'] },
          { prompt: 'Vamos combinar depois.', answers: ['Wir machen das später aus.', 'Wir verabreden uns noch.'] },
          { prompt: 'Que coincidência!', answers: ['Was für ein Zufall!', 'Welch ein Zufall!'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Com licença, posso passar?', answers: ['Entschuldigung, kann ich bitte vorbei?', 'Entschuldigung, darf ich durch?'] },
          { prompt: 'Você foi mal entendido.', answers: ['Du wurdest falsch verstanden.', 'Sie wurden missverstanden.'] },
          { prompt: 'Isso saiu diferente do que eu queria dizer.', answers: ['Das kam anders heraus als ich wollte.', 'Das klang anders, als ich es meinte.'] },
          { prompt: 'Você tem razão, preciso pensar mais nisso.', answers: ['Du hast recht, ich muss darüber nachdenken.', 'Sie haben recht, ich muss das nochmals bedenken.'] },
          { prompt: 'Vamos encontrar uma solução.', answers: ['Wir finden eine Lösung.', 'Lass uns eine Lösung finden.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Fique à vontade!', answers: ['Mach es dir bequem!', 'Fühle dich wie zu Hause!'] },
          { prompt: 'Está dito, vamos nessa.', answers: ["Abgemacht, los geht's.", "Abgemacht, auf geht's."] },
          { prompt: 'Você parece cansado hoje.', answers: ['Du siehst heute müde aus.', 'Sie sehen heute müde aus.'] },
          { prompt: 'Não era o que eu esperava.', answers: ['Das war nicht das, was ich erwartet hatte.'] },
          { prompt: 'Isso combina com você.', answers: ['Das steht dir gut.', 'Das passt gut zu dir.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Vamos tomar um drinque depois do trabalho?', answers: ['Wollen wir nach der Arbeit etwas trinken gehen?', 'Gehen wir nach der Arbeit noch was trinken?'] },
          { prompt: 'Você está de bom humor hoje.', answers: ['Du bist heute gut gelaunt.'] },
          { prompt: 'Isso foi mal. Me desculpe.', answers: ['Das war nicht gut von mir. Tut mir leid.', 'Das war mein Fehler. Entschuldigung.'] },
          { prompt: 'Estou feliz que você esteja aqui.', answers: ['Ich bin froh, dass du hier bist.'] },
          { prompt: 'Você pode me fazer um favor?', answers: ['Kannst du mir einen Gefallen tun?', 'Können Sie mir einen Gefallen tun?'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Sinto muito pelo atraso.', answers: ['Es tut mir leid wegen der Verspätung.', 'Entschuldigung für die Verspätung.'] },
          { prompt: 'Você tem dez minutos para mim?', answers: ['Hast du zehn Minuten für mich?', 'Hätten Sie kurz Zeit für mich?'] },
          { prompt: 'Esse problema me preocupa.', answers: ['Dieses Problem macht mir Sorgen.'] },
          { prompt: 'Vou pensar no assunto.', answers: ['Ich werde darüber nachdenken.', 'Ich denke darüber nach.'] },
          { prompt: 'Você está me ouvindo?', answers: ['Hörst du mir zu?', 'Hören Sie mir zu?'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu precisei sair às pressas.', answers: ['Ich musste auf die Schnelle gehen.', 'Ich musste mich beeilen.'] },
          { prompt: 'Você ficou sabendo da notícia?', answers: ['Hast du von der Nachricht erfahren?', 'Hast du die Neuigkeit gehört?'] },
          { prompt: 'Isso mudou tudo.', answers: ['Das hat alles verändert.', 'Das hat alles geändert.'] },
          { prompt: 'Não consigo acreditar!', answers: ['Das kann ich nicht glauben!', 'Unglaublich!'] },
          { prompt: 'O que você acha?', answers: ['Was denkst du?', 'Was meinen Sie?'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ela sempre sabe o que dizer.', answers: ['Sie weiß immer, was sie sagen soll.'] },
          { prompt: 'Estou tentando dar o meu melhor.', answers: ['Ich versuche, mein Bestes zu geben.'] },
          { prompt: 'Isso não foi culpa minha.', answers: ['Das war nicht meine Schuld.'] },
          { prompt: 'Ele tem muito a aprender ainda.', answers: ['Er hat noch viel zu lernen.'] },
          { prompt: 'Vou te dar minha opinião honesta.', answers: ['Ich gebe dir meine ehrliche Meinung.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'O tempo voa quando nos divertimos.', answers: ['Die Zeit vergeht wie im Flug, wenn man Spaß hat.', 'Wenn man Spaß hat, vergeht die Zeit schnell.'] },
          { prompt: 'Você tem sorte!', answers: ['Du hast Glück!', 'Sie haben Glück!'] },
          { prompt: 'Isso não é justo.', answers: ['Das ist nicht fair.', 'Das ist ungerecht.'] },
          { prompt: 'Vamos mudar de assunto.', answers: ['Lass uns das Thema wechseln.'] },
          { prompt: 'Tenha um ótimo fim de semana!', answers: ['Schönes Wochenende!', 'Ich wünsche dir ein schönes Wochenende!'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Você pode me ligar mais tarde?', answers: ['Kannst du mich später anrufen?', 'Können Sie mich später anrufen?'] },
          { prompt: 'Eu estava justamente pensando em você.', answers: ['Ich habe gerade an dich gedacht.'] },
          { prompt: 'Você parece diferente hoje.', answers: ['Du siehst heute anders aus.'] },
          { prompt: 'Isso ficou muito bom!', answers: ['Das ist sehr gut geworden!', 'Das ist toll geworden!'] },
          { prompt: 'Será que você poderia me explicar?', answers: ['Könntest du mir das erklären?', 'Würden Sie mir das erläutern?'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Você está certo, eu errei.', answers: ['Du hast recht, ich habe einen Fehler gemacht.', 'Sie haben recht, ich lag falsch.'] },
          { prompt: 'Ele me deixou de boca aberta.', answers: ['Er hat mich sprachlos gemacht.', 'Er hat mich überrascht.'] },
          { prompt: 'Não é bem assim.', answers: ['So ist das nicht ganz richtig.', 'Das stimmt so nicht ganz.'] },
          { prompt: 'Isso depende de você.', answers: ['Das hängt von dir ab.', 'Das liegt an dir.'] },
          { prompt: 'Vamos combinar um horário.', answers: ['Lass uns eine Uhrzeit ausmachen.', 'Lass uns einen Termin vereinbaren.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Que dia foi esse!', answers: ['Was für ein Tag war das!', 'Das war vielleicht ein Tag!'] },
          { prompt: 'Você me salvou!', answers: ['Du hast mich gerettet!'] },
          { prompt: 'Finalmente terminamos.', answers: ['Endlich sind wir fertig.'] },
          { prompt: 'Seria ótimo te ver em breve.', answers: ['Es wäre schön, dich bald zu sehen.'] },
          { prompt: 'Você me faz rir sempre.', answers: ['Du bringst mich immer zum Lachen.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Isso foi uma surpresa total.', answers: ['Das war eine totale Überraschung.'] },
          { prompt: 'Você me deixou sem palavras.', answers: ['Du hast mich sprachlos gemacht.'] },
          { prompt: 'Vamos aproveitar o momento.', answers: ['Lass uns den Moment genießen.'] },
          { prompt: 'Com isso já consigo me virar.', answers: ['Damit komme ich klar.', 'Damit kann ich mich behelfen.'] },
          { prompt: 'Até mais, foi um prazer!', answers: ['Tschüss, es war eine Freude!', 'Auf Wiedersehen, es war schön!'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Você pode fazer isso do seu jeito.', answers: ['Du kannst das auf deine Art machen.', 'Du kannst das so machen, wie du willst.'] },
          { prompt: 'Ele não para de falar!', answers: ['Er hört nicht auf zu reden!'] },
          { prompt: 'Você vai se acostumar.', answers: ['Du wirst dich daran gewöhnen.'] },
          { prompt: 'Cuide-se bem!', answers: ['Pass auf dich auf!', "Mach's gut!"] },
          { prompt: 'Foi bom conversar com você.', answers: ['Es war schön, mit dir zu reden.', 'Es hat mich gefreut, mit Ihnen zu sprechen.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Vou te encontrar na entrada.', answers: ['Ich treffe dich am Eingang.'] },
          { prompt: 'Isso me deixou muito feliz.', answers: ['Das hat mich sehr glücklich gemacht.', 'Darüber habe ich mich sehr gefreut.'] },
          { prompt: 'Vamos nos manter em contato.', answers: ['Lass uns in Kontakt bleiben.'] },
          { prompt: 'Pensa bem antes de responder.', answers: ['Denk gut nach, bevor du antwortest.'] },
          { prompt: 'Obrigado por tudo!', answers: ['Danke für alles!', 'Vielen Dank für alles!'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Isso foi de longe a melhor decisão.', answers: ['Das war bei Weitem die beste Entscheidung.'] },
          { prompt: 'Você está sempre lá quando preciso.', answers: ['Du bist immer da, wenn ich dich brauche.'] },
          { prompt: 'Não é possível!', answers: ["Das gibt's doch nicht!", 'Das kann nicht sein!'] },
          { prompt: 'Deixa eu explicar melhor.', answers: ['Lass mich das besser erklären.'] },
          { prompt: 'Foi uma experiência incrível.', answers: ['Das war eine unglaubliche Erfahrung.', 'Es war ein tolles Erlebnis.'] },
        ],
      },
    ],
  },

];
