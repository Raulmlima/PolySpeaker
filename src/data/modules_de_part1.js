export const MODULES_DE_PART1 = [

  // ═══════════════════════════════════════════════════════════════
  //  FUNDAMENTOS
  // ═══════════════════════════════════════════════════════════════

  // ─── Módulo especial: Umlauts e caracteres alemães ───────────────────────
  {
    id: 'fund-de-umlaut', stage: 'Fundamentos', language: 'de', order: 0,
    title: 'Umlauts e caracteres especiais',
    subtitle: 'ä, ö, ü, ß — os sons únicos do alemão',
    theory: `## Umlauts — vogais modificadas

O alemão tem 4 caracteres que não existem em português. Eles mudam completamente o som da vogal:

| Letra | Pronúncia aproximada | Exemplo | Significado |
|-------|---------------------|---------|-------------|
| **ä** | como "é" em "pé" | Bär | urso |
| **ö** | como "eu" com lábios arredondados | schön | bonito |
| **ü** | como "u" com lábios arredondados | über | sobre / acima |
| **ß** | "ss" longo — nunca no início de palavra | Straße | rua |

## Como digitar no celular
- Segure a tecla **a** → aparece ä
- Segure a tecla **o** → aparece ö
- Segure a tecla **u** → aparece ü
- Segure a tecla **s** → aparece ß

## Alternativa aceita no app
Se não tiver o teclado alemão, você pode substituir:
- ä → ae &nbsp;&nbsp; ö → oe &nbsp;&nbsp; ü → ue &nbsp;&nbsp; ß → ss

Exemplo: **Straße** também é aceito como **Strasse**.

💡 Dica: pense no umlaut como uma "vogal apertada" — ö e ü sempre arredondam os lábios mais do que o/u normais, e ä é simplesmente um "é" aberto.

⚠️ Atenção: ß (Eszett) só existe depois de vogal longa ou ditongo (Straße, weiß). Depois de vogal curta usa-se "ss" (dass, Schluss). Isso muda inclusive o significado: "Masse" (massa) ≠ "Maße" (medidas).

## Palavras essenciais com Umlauts

| Alemão | Umlaut | Português |
|--------|--------|-----------|
| Bär | ä | urso |
| schön | ö | bonito |
| über | ü | sobre |
| Straße | ß | rua |
| Mädchen | ä | menina |
| können | ö | poder |
| grün | ü | verde |
| heiß | ß | quente |

## Vocabulário-chave

• sprechen — falar
• der Sommer — o verão
• der Garten — o jardim
• groß — grande
• sehr — muito`,
    exercises: [
      {
        sentences: [
          { prompt: '"Bonito" em alemão (contém ö)', answers: ['schön'] },
          { prompt: '"Rua" em alemão (contém ß)', answers: ['Straße', 'Strasse'] },
          { prompt: '"Sobre / acima" em alemão (contém ü)', answers: ['über', 'ueber'] },
          { prompt: '"Menina" em alemão (contém ä)', answers: ['Mädchen', 'Maedchen'] },
          { prompt: '"Quente" em alemão (contém ß)', answers: ['heiß', 'heiss'] },
        ],
      },
      {
        sentences: [
          { prompt: 'A rua é bonita. (Straße + schön)', answers: ['Die Straße ist schön.', 'Die Strasse ist schoen.'] },
          { prompt: 'Ela pode falar alemão. (können)', answers: ['Sie kann Deutsch sprechen.', 'Sie kann Deutsch reden.'] },
          { prompt: 'O urso é grande. (Bär)', answers: ['Der Bär ist groß.', 'Der Baer ist gross.'] },
          { prompt: 'O jardim é verde. (grün)', answers: ['Der Garten ist grün.', 'Der Garten ist gruen.'] },
          { prompt: 'O verão é muito quente. (heiß)', answers: ['Der Sommer ist sehr heiß.', 'Der Sommer ist sehr heiss.'] },
        ],
      },
    ],
  },

  {
    id: 'fund-de-1', stage: 'Fundamentos', language: 'de', order: 1,
    title: 'Artigos e Gêneros',
    subtitle: 'der, die, das, ein, eine',
    theory: `## Os três gêneros

Em alemão, todo substantivo tem um gênero gramatical: masculino, feminino ou neutro. O artigo definido muda conforme o gênero:

| Gênero  | Artigo definido | Artigo indefinido | Exemplo               |
|---------|------------------|--------------------|------------------------|
| masc.   | der (o)          | ein (um)           | der Mann (o homem)     |
| fem.    | die (a)          | eine (uma)         | die Frau (a mulher)    |
| neutro  | das (o/a)        | ein (um)           | das Kind (a criança)   |
| plural  | die (os/as)      | — (sem plural)     | die Kinder (as crianças)|

⚠️ O gênero em alemão NÃO segue o português, nem a lógica natural! Deve ser memorizado junto com o substantivo, e isso surpreende muito quem fala português:
  der Tisch (a mesa — masc.!)     die Tür (a porta — fem.)       das Buch (o livro — neutro)
  das Mädchen (a menina — neutro!)   der Löffel (a colher — masc.)

## Algumas pistas (não são regras absolutas)
• Terminações **-ung, -heit, -keit, -schaft, -ion** → quase sempre **die** (fem.): die Wohnung, die Freiheit
• Terminação **-chen, -lein** (diminutivos) → sempre **das** (neutro): das Mädchen, das Fräulein
• Infinitivos usados como substantivo → sempre **das**: das Lesen (a leitura)
• Dias, meses, estações → quase sempre **der** (masc.): der Montag, der Januar, der Sommer

💡 Dica: sempre aprenda "der/die/das + substantivo" juntos, nunca a palavra isolada — repita em voz alta "der Tisch, der Tisch" até fixar.

⚠️ Erro comum de quem fala português: traduzir o gênero pela palavra portuguesa correspondente. "A mesa" é feminina em português, mas **der Tisch** é masculino em alemão — não há correspondência confiável entre os idiomas.

## Vocabulário-chave

• das Auto — o carro
• das Zimmer — o quarto
• die Katze — o gato
• der Rucksack — a mochila
• das Fenster — a janela
• der Garten — o jardim
• die Tafel — a lousa
• der Lehrer / die Lehrerin — o professor / a professora`,
    exercises: [
      {
        sentences: [
          { prompt: 'O homem está aqui.', answers: ['Der Mann ist hier.'] },
          { prompt: 'A mulher é professora.', answers: ['Die Frau ist Lehrerin.'] },
          { prompt: 'A criança lê um livro.', answers: ['Das Kind liest ein Buch.'] },
          { prompt: 'Um carro está na rua.', answers: ['Ein Auto steht auf der Straße.'] },
          { prompt: 'Uma mesa está no quarto.', answers: ['Ein Tisch steht im Zimmer.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'O gato está na mesa.', answers: ['Die Katze sitzt auf dem Tisch.', 'Die Katze ist auf dem Tisch.'] },
          { prompt: 'O cachorro é grande.', answers: ['Der Hund ist groß.'] },
          { prompt: 'Uma porta está aberta.', answers: ['Eine Tür ist offen.'] },
          { prompt: 'A casa é bonita.', answers: ['Das Haus ist schön.'] },
          { prompt: 'Um homem e uma mulher estão aqui.', answers: ['Ein Mann und eine Frau sind hier.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'O livro está na mochila.', answers: ['Das Buch ist im Rucksack.'] },
          { prompt: 'A janela é grande.', answers: ['Das Fenster ist groß.'] },
          { prompt: 'Um menino brinca no jardim.', answers: ['Ein Junge spielt im Garten.'] },
          { prompt: 'A menina tem um gato.', answers: ['Das Mädchen hat eine Katze.'] },
          { prompt: 'O professor escreve na lousa.', answers: ['Der Lehrer schreibt an die Tafel.'] },
        ],
      },
    ],
  },

  {
    id: 'fund-de-2', stage: 'Fundamentos', language: 'de', order: 2,
    title: 'Sein e Haben',
    subtitle: 'Ser/estar e ter no presente + pronomes',
    theory: `## Pronomes pessoais

| Singular          | Plural                        |
|-------------------|-------------------------------|
| ich (eu)          | wir (nós)                     |
| du (você/tu)      | ihr (vocês — informal)        |
| er / sie / es     | sie (eles/elas) / Sie (formal)|

⚠️ **Sie** (com maiúscula) é a forma formal de "você/vocês" e usa a mesma conjugação de "sie" (eles/elas) no plural. Já **du** e **ihr** são informais — "du" para uma pessoa, "ihr" para várias.

## Verbo SEIN (ser/estar) — irregular

| Pronome      | SEIN  |
|--------------|-------|
| ich          | bin   |
| du           | bist  |
| er/sie/es    | ist   |
| wir          | sind  |
| ihr          | seid  |
| sie/Sie      | sind  |

## Verbo HABEN (ter) — quase regular

| Pronome      | HABEN  |
|--------------|--------|
| ich          | habe   |
| du           | hast   |
| er/sie/es    | hat    |
| wir          | haben  |
| ihr          | habt   |
| sie/Sie      | haben  |

## Exemplos
  Ich bin müde, aber ich habe noch Energie. (Estou cansado, mas ainda tenho energia.)
  Wir sind Freunde und haben viel gemeinsam. (Somos amigos e temos muito em comum.)

💡 Em alemão NÃO existe distinção ser/estar como em português — "sein" faz os dois papéis. "Ich bin müde" pode ser tanto "eu sou cansado" (não existe) quanto "eu estou cansado" — sempre "estar" nesse caso de estado temporário.

⚠️ Erro comum: confundir "haben" (ter) com "sein" em expressões fixas. Em alemão diz-se "Ich habe Hunger" (literalmente "eu tenho fome"), nunca "ich bin Hunger" — várias sensações usam HABEN: Hunger (fome), Durst (sede), Angst (medo), Zeit (tempo).

## Vocabulário-chave

• der Bruder — o irmão
• der Schüler — o aluno
• der Arzt / die Ärzte — o médico / os médicos
• müde — cansado
• fertig — pronto
• krank — doente
• neu — novo`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu sou estudante.', answers: ['Ich bin Student.', 'Ich bin Studentin.'] },
          { prompt: 'Você é alemão?', answers: ['Bist du Deutscher?', 'Sind Sie Deutscher?'] },
          { prompt: 'Ele tem um irmão.', answers: ['Er hat einen Bruder.'] },
          { prompt: 'Nós somos amigos.', answers: ['Wir sind Freunde.'] },
          { prompt: 'Vocês têm tempo?', answers: ['Habt ihr Zeit?', 'Haben Sie Zeit?'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ela está cansada.', answers: ['Sie ist müde.'] },
          { prompt: 'Eu tenho fome.', answers: ['Ich habe Hunger.'] },
          { prompt: 'Eles são médicos.', answers: ['Sie sind Ärzte.'] },
          { prompt: 'O cachorro tem sede.', answers: ['Der Hund hat Durst.'] },
          { prompt: 'Você está pronto?', answers: ['Bist du fertig?', 'Sind Sie fertig?'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Nós temos uma casa grande.', answers: ['Wir haben ein großes Haus.'] },
          { prompt: 'Ela é professora e tem muitos alunos.', answers: ['Sie ist Lehrerin und hat viele Schüler.'] },
          { prompt: 'Ele está doente hoje.', answers: ['Er ist heute krank.'] },
          { prompt: 'Vocês são de Berlim?', answers: ['Seid ihr aus Berlin?', 'Sind Sie aus Berlin?'] },
          { prompt: 'Eu tenho um carro novo.', answers: ['Ich habe ein neues Auto.'] },
        ],
      },
    ],
  },

  {
    id: 'fund-de-3', stage: 'Fundamentos', language: 'de', order: 3,
    title: 'Präsens — Verbos no Presente',
    subtitle: 'gehen, kommen, machen, sprechen e mais',
    theory: `## Verbos regulares

Modelo MACHEN (fazer):

| Pronome      | MACHEN  |
|--------------|---------|
| ich          | mache   |
| du           | machst  |
| er/sie/es    | macht   |
| wir          | machen  |
| ihr          | macht   |
| sie/Sie      | machen  |

Terminação: -e / -st / -t / -en / -t / -en — a maioria dos verbos alemães segue esse padrão.

## Verbos irregulares com mudança vocálica

Alguns verbos mudam a vogal da raiz apenas em **du** e **er/sie/es** (e→i, e→ie, a→ä):

| Pronome   | sprechen (falar) | gehen (ir) | kommen (vir) | fahren (ir/dirigir) |
|-----------|------------------|------------|--------------|----------------------|
| ich       | spreche          | gehe       | komme        | fahre                |
| du        | sprichst         | gehst      | kommst       | fährst               |
| er/sie/es | spricht          | geht       | kommt        | fährt                |
| wir       | sprechen         | gehen      | kommen       | fahren               |
| ihr       | sprecht          | geht       | kommt        | fahrt                |
| sie/Sie   | sprechen         | gehen      | kommen       | fahren               |

## Regra Verbo-Segundo (V2)

⚠️ O verbo conjugado SEMPRE ocupa a 2ª posição da frase principal — não importa o que vem antes dele:
  Ich gehe jetzt. (Eu vou agora.)
  Jetzt gehe ich. (Agora eu vou.) — "jetzt" foi para a 1ª posição, então o verbo continua em 2º lugar e o sujeito vai para depois dele.
  Heute spreche ich mit ihr. (Hoje eu falo com ela.)

💡 Dica: pense na posição do verbo como um "marco fixo" — você pode mover advérbios e objetos para o início da frase, mas o verbo conjugado nunca se move da 2ª posição.

⚠️ Erro comum de quem fala português: começar a frase com sujeito + advérbio + verbo ("Ich heute gehe..."). Isso é errado em alemão — o advérbio que vem primeiro empurra o sujeito para depois do verbo.

## Vocabulário-chave

• die Schule — a escola
• die Hausaufgaben — a tarefa de casa
• das Wochenende — o fim de semana
• langsam — devagar
• immer — sempre
• pünktlich — pontual
• gleichzeitig — ao mesmo tempo`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu vou à escola.', answers: ['Ich gehe zur Schule.'] },
          { prompt: 'Ele vem de Munique.', answers: ['Er kommt aus München.'] },
          { prompt: 'Nós falamos alemão.', answers: ['Wir sprechen Deutsch.'] },
          { prompt: 'Você faz a tarefa.', answers: ['Du machst die Hausaufgaben.'] },
          { prompt: 'Ela fala inglês muito bem.', answers: ['Sie spricht sehr gut Englisch.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Hoje eu vou ao supermercado.', answers: ['Heute gehe ich zum Supermarkt.'] },
          { prompt: 'Eles vêm amanhã.', answers: ['Sie kommen morgen.'] },
          { prompt: 'O que você faz no fim de semana?', answers: ['Was machst du am Wochenende?'] },
          { prompt: 'Nós vamos ao cinema.', answers: ['Wir gehen ins Kino.'] },
          { prompt: 'Ela fala devagar.', answers: ['Sie spricht langsam.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu venho do Brasil.', answers: ['Ich komme aus Brasilien.'] },
          { prompt: 'Vocês falam português em casa.', answers: ['Ihr sprecht zu Hause Portugiesisch.'] },
          { prompt: 'Ele faz muitas coisas ao mesmo tempo.', answers: ['Er macht viele Dinge gleichzeitig.'] },
          { prompt: 'Amanhã nós vamos à festa.', answers: ['Morgen gehen wir zur Party.', 'Morgen gehen wir auf die Party.'] },
          { prompt: 'Ela vem sempre pontualmente.', answers: ['Sie kommt immer pünktlich.'] },
        ],
      },
    ],
  },

  {
    id: 'fund-de-4', stage: 'Fundamentos', language: 'de', order: 4,
    title: 'Números, Horas e Datas',
    subtitle: 'Zahlen, Uhrzeit und Datum',
    theory: `## Números básicos
  1 ein  2 zwei  3 drei  4 vier  5 fünf  6 sechs  7 sieben  8 acht  9 neun  10 zehn
  11 elf  12 zwölf  20 zwanzig  30 dreißig  100 hundert  1000 tausend
  21 einundzwanzig (literalmente "um-e-vinte")

⚠️ Diferente do português, o alemão inverte a ordem: a unidade vem ANTES da dezena. "23" é "dreiundzwanzig" (três-e-vinte), não "vinte e três".

## Horas — Wie spät ist es? (Que horas são?)
  Es ist zwei Uhr. (São duas horas.)
  Es ist halb drei. (São duas e meia — lit. "metade de três")
  Es ist Viertel nach vier. (São quatro e quinze.)
  Es ist Viertel vor fünf. (São cinco menos quinze / quatro e quarenta e cinco.)

⚠️ Erro comum: "halb drei" não significa "duas e meia através de três" — significa "faltando metade para as três", ou seja, 2h30. É um dos pontos que mais confunde falantes de português, pois pensamos em "meia hora depois das duas", mas o alemão pensa em "meio caminho até as três".

## Dias e meses
Dias da semana: Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag
Meses: Januar, Februar, März, April, Mai, Juni, Juli, August, September, Oktober, November, Dezember

## Datas
Estrutura: am + ordinal + Monat — "am dritten März" (no dia 3 de março)
  Heute ist der erste Mai. (Hoje é primeiro de maio.)
  Mein Geburtstag ist am zwölften Oktober. (Meu aniversário é em 12 de outubro.)

💡 Dica: para formar o ordinal de 1 a 19, soma-se "-te" à raiz (vier → vierte); a partir de 20, soma-se "-ste" (zwanzig → zwanzigste). Exceções: erste (1º), dritte (3º), siebte (7º).

## Vocabulário-chave

• öffnen — abrir
• schließen — fechar
• das Geschäft / der Laden — a loja
• die Besprechung — a reunião`,
    exercises: [
      {
        sentences: [
          { prompt: 'São três horas.', answers: ['Es ist drei Uhr.'] },
          { prompt: 'São duas e meia.', answers: ['Es ist halb drei.'] },
          { prompt: 'Hoje é segunda-feira.', answers: ['Heute ist Montag.'] },
          { prompt: 'Eu tenho vinte e três anos.', answers: ['Ich bin dreiundzwanzig Jahre alt.'] },
          { prompt: 'A reunião é às dez horas.', answers: ['Das Meeting ist um zehn Uhr.', 'Die Besprechung ist um zehn Uhr.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Amanhã é terça-feira.', answers: ['Morgen ist Dienstag.'] },
          { prompt: 'São quatro e quinze.', answers: ['Es ist Viertel nach vier.'] },
          { prompt: 'Meu aniversário é em maio.', answers: ['Mein Geburtstag ist im Mai.'] },
          { prompt: 'Nós temos aula às oito.', answers: ['Wir haben um acht Uhr Unterricht.'] },
          { prompt: 'O trem chega às cinco e meia.', answers: ['Der Zug kommt um halb sechs an.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Hoje é dia primeiro de janeiro.', answers: ['Heute ist der erste Januar.', 'Heute ist der 1. Januar.'] },
          { prompt: 'O museu abre às nove horas.', answers: ['Das Museum öffnet um neun Uhr.'] },
          { prompt: 'Nós temos cem alunos na escola.', answers: ['Wir haben hundert Schüler in der Schule.'] },
          { prompt: 'Que horas são?', answers: ['Wie spät ist es?', 'Wie viel Uhr ist es?'] },
          { prompt: 'A loja fecha às oito da noite.', answers: ['Das Geschäft schließt um zwanzig Uhr.', 'Der Laden schließt um acht Uhr abends.'] },
        ],
      },
    ],
  },

  {
    id: 'fund-de-5', stage: 'Fundamentos', language: 'de', order: 5,
    title: 'Saudações e Frases Básicas',
    subtitle: 'Grüße und Grundphrasen',
    theory: `Saudações essenciais:
  Guten Morgen!  (Bom dia — até ~10h)
  Guten Tag!     (Bom dia/Boa tarde — formal)
  Guten Abend!   (Boa noite — ao chegar)
  Gute Nacht!    (Boa noite — ao se despedir para dormir)
  Hallo! / Hi!   (Oi! — informal)
  Tschüss!       (Tchau! — informal)
  Auf Wiedersehen! (Até logo — formal)

Apresentações:
  Wie heißen Sie? / Wie heißt du? (Qual é o seu nome?)
  Ich heiße... / Mein Name ist... (Meu nome é...)
  Woher kommen Sie? / Woher kommst du? (De onde você é?)
  Ich komme aus Brasilien. (Eu sou do Brasil.)

Frases úteis:
  Bitte. (Por favor / De nada.)
  Danke (schön)! (Obrigado/a!)
  Entschuldigung! (Com licença! / Desculpe!)
  Es tut mir leid. (Sinto muito.)
  Ich verstehe nicht. (Não entendo.)
  Sprechen Sie Englisch? (Você fala inglês?)

💡 Dica: "Sie" formal sempre tem maiúscula, mesmo no meio da frase — isso ajuda a distingui-lo de "sie" (ela/eles), que aparece minúsculo.`,
    exercises: [
      {
        sentences: [
          { prompt: 'Bom dia!', answers: ['Guten Morgen!', 'Guten Tag!'] },
          { prompt: 'Qual é o seu nome?', answers: ['Wie heißen Sie?', 'Wie heißt du?'] },
          { prompt: 'Meu nome é Ana.', answers: ['Ich heiße Ana.', 'Mein Name ist Ana.'] },
          { prompt: 'De onde você é?', answers: ['Woher kommen Sie?', 'Woher kommst du?'] },
          { prompt: 'Eu sou do Brasil.', answers: ['Ich komme aus Brasilien.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Obrigado!', answers: ['Danke!', 'Danke schön!', 'Vielen Dank!'] },
          { prompt: 'Por favor.', answers: ['Bitte.', 'Bitte schön.'] },
          { prompt: 'Com licença!', answers: ['Entschuldigung!', 'Entschuldigen Sie!'] },
          { prompt: 'Não entendo.', answers: ['Ich verstehe nicht.'] },
          { prompt: 'Até logo!', answers: ['Auf Wiedersehen!', 'Tschüss!'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Você fala português?', answers: ['Sprechen Sie Portugiesisch?', 'Sprichst du Portugiesisch?'] },
          { prompt: 'Sinto muito.', answers: ['Es tut mir leid.'] },
          { prompt: 'Tudo bem?', answers: ['Wie geht es Ihnen?', 'Wie geht es dir?', "Wie geht's?"] },
          { prompt: 'Estou muito bem, obrigado.', answers: ['Es geht mir sehr gut, danke.', 'Mir geht es sehr gut, danke.'] },
          { prompt: 'Boa noite!', answers: ['Guten Abend!', 'Gute Nacht!'] },
        ],
      },
    ],
  },

  {
    id: 'rev-fund-de', stage: 'Fundamentos', language: 'de', order: 6,
    isReview: true,
    title: 'Revisão — Fundamentos',
    subtitle: 'Artigos, sein/haben, presente, números, saudações',
    theory: `Revisão dos pontos principais dos Fundamentos:

• Artigos: der (masc.) / die (fem.) / das (neutro) / die (pl.) — indefinido: ein/eine

| Pronome   | SEIN  | HABEN  |
|-----------|-------|--------|
| ich       | bin   | habe   |
| du        | bist  | hast   |
| er/sie/es | ist   | hat    |
| wir       | sind  | haben  |
| ihr       | seid  | habt   |
| sie/Sie   | sind  | haben  |

• Präsens regular: raiz + -e / -st / -t / -en / -t / -en
• Verbos irregulares com mudança vocálica: sprechen → er spricht, fahren → er fährt
• Regra V2: verbo conjugado sempre na 2ª posição, mesmo se outra palavra vier primeiro
• Horas: Es ist [Zahl] Uhr / halb [Zahl+1] / Viertel nach / Viertel vor
• Saudações: Guten Morgen / Guten Tag / Danke / Bitte / Entschuldigung

💡 Dica geral: o gênero do substantivo (der/die/das) nunca se traduz do português — sempre memorize artigo + palavra juntos.

## Vocabulário-chave

• der Bruder — o irmão
• die Tochter — a filha
• der Ingenieur — o engenheiro
• nachmittags — à tarde`,
    exercises: [
      {
        sentences: [
          { prompt: 'O livro está na mesa.', answers: ['Das Buch liegt auf dem Tisch.', 'Das Buch ist auf dem Tisch.'] },
          { prompt: 'Ela tem dois irmãos.', answers: ['Sie hat zwei Brüder.'] },
          { prompt: 'Nós somos estudantes.', answers: ['Wir sind Studenten.'] },
          { prompt: 'São cinco horas da tarde.', answers: ['Es ist siebzehn Uhr.', 'Es ist fünf Uhr nachmittags.'] },
          { prompt: 'Eu venho da Alemanha.', answers: ['Ich komme aus Deutschland.'] },
          { prompt: 'Você fala devagar, por favor?', answers: ['Sprechen Sie bitte langsam?', 'Sprichst du bitte langsam?'] },
          { prompt: 'Hoje é quarta-feira.', answers: ['Heute ist Mittwoch.'] },
          { prompt: 'Um cachorro e uma gata estão no jardim.', answers: ['Ein Hund und eine Katze sind im Garten.'] },
        ],
      },
    ],
    dialogExercise: {
      audioText: 'Guten Morgen! Ich heiße Lukas und ich komme aus München. Ich bin Ingenieur und habe zwei Töchter.',
      question: 'O que Lukas diz sobre si mesmo?',
      options: [
        { text: 'É engenheiro de Munique e tem duas filhas.', correct: true },
        { text: 'É médico de Berlim e tem duas filhas.', correct: false },
        { text: 'É engenheiro de Munique e tem dois filhos.', correct: false },
        { text: 'É estudante de Munique sem filhos.', correct: false },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  //  BÁSICO
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'bas-de-1', stage: 'Básico', language: 'de', order: 1,
    title: 'Perfekt — Passado Composto',
    subtitle: 'haben/sein + Partizip II',
    theory: `## O que é o Perfekt

O Perfekt é o passado mais usado na fala alemã cotidiana — corresponde, na maioria das vezes, ao pretérito perfeito do português ("eu fiz", "eu comi").

Formação: haben ou sein (conjugado, na 2ª posição) + Partizip II (no final da frase)

## Partizip II regular
  ge- + raiz + -(e)t
  machen → gemacht   kaufen → gekauft   arbeiten → gearbeitet

## Partizip II irregular (deve ser memorizado)
  gehen → gegangen    kommen → gekommen    sehen → gesehen
  essen → gegessen    schreiben → geschrieben   sprechen → gesprochen
  trinken → getrunken   lesen → gelesen   nehmen → genommen

## Quando usar SEIN em vez de HABEN

A maioria dos verbos usa **haben**, mas verbos de **movimento** ou **mudança de estado** usam **sein**:
  gehen, kommen, fahren, fliegen, laufen, werden, bleiben, passieren, sterben, aufstehen

| Tipo de verbo                  | Auxiliar | Exemplo                          |
|---------------------------------|----------|-----------------------------------|
| ação comum (comer, fazer, falar)| haben    | Ich habe gegessen.                |
| movimento/mudança de estado     | sein     | Er ist gegangen.                  |
| sein, bleiben (mesmo sem mov.)  | sein     | Sie ist geblieben.                |

## Exemplos
  Ich habe Kaffee getrunken. (Eu tomei café.)
  Er ist nach Berlin gefahren. (Ele foi para Berlim.)
  Wir sind ins Kino gegangen, und dann haben wir einen Film gesehen. (Fomos ao cinema, e depois vimos um filme.)

⚠️ Erro comum: usar "haben" com verbos de movimento porque em português dizemos "eu tenho ido" / "eu fui" sem pensar no auxiliar. Em alemão, "gehen" e "fahren" SEMPRE pedem "sein": "Ich bin gegangen", nunca "Ich habe gegangen".

💡 Dica: o Partizip II vai sempre para o ÚLTIMO lugar da frase, formando um "sanduíche" com o verbo auxiliar na 2ª posição — quanto mais informação no meio, mais longe o particípio fica do início.

## Vocabulário-chave

• der Brief — a carta
• das Restaurant — o restaurante
• die Lektion — a lição
• gestern — ontem
• gestern Abend — ontem à noite`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu comi uma pizza.', answers: ['Ich habe eine Pizza gegessen.'] },
          { prompt: 'Ela foi à escola.', answers: ['Sie ist zur Schule gegangen.'] },
          { prompt: 'Nós compramos um carro novo.', answers: ['Wir haben ein neues Auto gekauft.'] },
          { prompt: 'Ele veio ontem.', answers: ['Er ist gestern gekommen.'] },
          { prompt: 'Você escreveu a carta?', answers: ['Hast du den Brief geschrieben?', 'Haben Sie den Brief geschrieben?'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eles viajaram para a Áustria.', answers: ['Sie sind nach Österreich gefahren.'] },
          { prompt: 'Eu bebi muito café hoje.', answers: ['Ich habe heute viel Kaffee getrunken.'] },
          { prompt: 'Ela viu um filme ontem à noite.', answers: ['Sie hat gestern Abend einen Film gesehen.'] },
          { prompt: 'Nós trabalhamos muito.', answers: ['Wir haben viel gearbeitet.'] },
          { prompt: 'O trem chegou às três horas.', answers: ['Der Zug ist um drei Uhr angekommen.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu falei com o professor.', answers: ['Ich habe mit dem Lehrer gesprochen.'] },
          { prompt: 'Ela ficou em casa ontem.', answers: ['Sie ist gestern zu Hause geblieben.'] },
          { prompt: 'Vocês entenderam a lição?', answers: ['Habt ihr die Lektion verstanden?', 'Haben Sie die Lektion verstanden?'] },
          { prompt: 'Ele fez a tarefa.', answers: ['Er hat die Hausaufgaben gemacht.'] },
          { prompt: 'Nós fomos ao restaurante.', answers: ['Wir sind ins Restaurant gegangen.'] },
        ],
      },
    ],
  },

  {
    id: 'bas-de-2', stage: 'Básico', language: 'de', order: 2,
    title: 'Verbos Modais',
    subtitle: 'können, müssen, wollen, dürfen, sollen, mögen',
    theory: `## O que são verbos modais

Os verbos modais modificam o verbo principal, que vai no **infinitivo** e se move para o **final da frase**. Note que ich e er/sie/es têm a mesma forma — uma irregularidade típica dos modais.

## Conjugação no presente

| Pronome  | können | müssen | wollen | dürfen | sollen | mögen |
|----------|--------|--------|--------|--------|--------|-------|
| ich      | kann   | muss   | will   | darf   | soll   | mag   |
| du       | kannst | musst  | willst | darfst | sollst | magst |
| er/sie   | kann   | muss   | will   | darf   | soll   | mag   |
| wir      | können | müssen | wollen | dürfen | sollen | mögen |
| ihr      | könnt  | müsst  | wollt  | dürft  | sollt  | mögt  |
| sie/Sie  | können | müssen | wollen | dürfen | sollen | mögen |

## Significados e nuances

  können = poder (capacidade/habilidade)    müssen = precisar/dever (obrigação interna ou necessidade)
  wollen = querer                            dürfen = poder (permissão)
  sollen = dever (imposição/recomendação externa) mögen = gostar de

⚠️ Erro comum: confundir **müssen** (obrigação) com **dürfen** (permissão). "Du darfst nicht rauchen" significa "você NÃO PODE fumar" (proibido), enquanto "Du musst nicht rauchen" significa "você não PRECISA fumar" (não é obrigatório, mas pode). São opostos sutis que mudam totalmente o sentido.

## Estrutura da frase

Sujeito + modal (2ª posição) + ... + infinitivo (final)
  Ich kann Deutsch sprechen. (Eu consigo falar alemão.)
  Wir müssen morgen früh aufstehen. (Precisamos levantar cedo amanhã.)

💡 Dica: "möchten" (gostaria) é a forma educada de "wollen", muito usada para pedidos: "Ich möchte einen Kaffee" (Eu gostaria de um café) soa mais polido do que "Ich will einen Kaffee".

## Vocabulário-chave

• hereinkommen — entrar
• rauchen — fumar
• parken — estacionar
• ankommen — chegar
• der Sport — o esporte
• der Arzt — o médico`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu consigo falar alemão.', answers: ['Ich kann Deutsch sprechen.'] },
          { prompt: 'Ela precisa ir ao médico.', answers: ['Sie muss zum Arzt gehen.'] },
          { prompt: 'Ele quer comprar um carro.', answers: ['Er will ein Auto kaufen.'] },
          { prompt: 'Você pode entrar.', answers: ['Du darfst hereinkommen.', 'Sie dürfen hereinkommen.'] },
          { prompt: 'Nós gostamos de música.', answers: ['Wir mögen Musik.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Você deve estudar mais.', answers: ['Du sollst mehr lernen.', 'Du musst mehr lernen.'] },
          { prompt: 'Eles querem morar em Berlim.', answers: ['Sie wollen in Berlin wohnen.'] },
          { prompt: 'Crianças não podem fumar.', answers: ['Kinder dürfen nicht rauchen.'] },
          { prompt: 'Eu preciso trabalhar amanhã.', answers: ['Ich muss morgen arbeiten.'] },
          { prompt: 'Ela consegue cozinhar muito bem.', answers: ['Sie kann sehr gut kochen.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Nós precisamos falar com ele.', answers: ['Wir müssen mit ihm sprechen.'] },
          { prompt: 'Você quer tomar um café?', answers: ['Willst du einen Kaffee trinken?', 'Möchtest du einen Kaffee trinken?'] },
          { prompt: 'Ele gosta de esporte.', answers: ['Er mag Sport.'] },
          { prompt: 'Aqui não se pode estacionar.', answers: ['Hier darf man nicht parken.'] },
          { prompt: 'Eles devem chegar às oito.', answers: ['Sie sollen um acht Uhr ankommen.'] },
        ],
      },
    ],
  },

  {
    id: 'bas-de-3', stage: 'Básico', language: 'de', order: 3,
    title: 'Caso Acusativo',
    subtitle: 'Artigos e pronomes no acusativo',
    theory: `## O que é o caso Acusativo

Em alemão, os substantivos mudam de forma (declinam) conforme a função na frase. O **Akkusativ** marca o **objeto direto** — quem recebe a ação do verbo. Os artigos mudam:

| Gênero  | Nominativo (def./indef.) | Acusativo (def./indef.) | Nota     |
|---------|--------------------------|-------------------------|----------|
| masc.   | der / ein                | den / einen             | ← MUDA! |
| fem.    | die / eine               | die / eine              | igual    |
| neutro  | das / ein                | das / ein               | igual    |
| plural  | die / —                  | die / —                 | igual    |

## Pronomes pessoais no acusativo

| Nominativo | Acusativo |
|------------|-----------|
| ich        | mich      |
| du         | dich      |
| er         | ihn       |
| sie        | sie       |
| es         | es        |
| wir        | uns       |
| ihr        | euch      |
| sie/Sie    | sie/Sie   |

## Exemplos
  Ich sehe den Mann. (Vejo o homem.) — "Mann" é masc., acus. → den
  Er kauft einen Hund. (Ele compra um cachorro.)
  Sie liebt ihn. (Ela o ama.)
  Wir besuchen sie. (Nós a visitamos. / Nós os visitamos.)

## Preposições que sempre pedem Acusativo

Algumas preposições exigem sempre o caso acusativo: **durch, für, gegen, ohne, um**
  Das Geschenk ist für dich. (O presente é para você.)
  Wir gehen durch den Park. (Atravessamos o parque.)

💡 Dica: só o masculino singular muda visivelmente (der→den, ein→einen) — feminino, neutro e plural ficam idênticos ao nominativo. Memorize essa única mudança e o Akkusativ fica muito mais simples.

⚠️ Erro comum de quem fala português: esquecer de declinar o artigo masculino, já que em português os artigos não mudam conforme a função na frase. Em alemão, "der Mann" como sujeito se torna "den Mann" como objeto — não dizer "Ich sehe der Mann".

## Vocabulário-chave

• das Wörterbuch — o dicionário
• die Zeitung — o jornal
• die Stadt — a cidade
• der Film — o filme
• besuchen — visitar
• brauchen — precisar
• kennen — conhecer`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu vejo o homem.', answers: ['Ich sehe den Mann.'] },
          { prompt: 'Ela compra um livro.', answers: ['Sie kauft ein Buch.'] },
          { prompt: 'Nós visitamos a cidade.', answers: ['Wir besuchen die Stadt.'] },
          { prompt: 'Ele bebe um café.', answers: ['Er trinkt einen Kaffee.'] },
          { prompt: 'Você me conhece?', answers: ['Kennst du mich?', 'Kennen Sie mich?'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu o amo.', answers: ['Ich liebe ihn.'] },
          { prompt: 'Ela tem um cachorro.', answers: ['Sie hat einen Hund.'] },
          { prompt: 'Nós os vemos todos os dias.', answers: ['Wir sehen sie jeden Tag.'] },
          { prompt: 'Ele compra o jornal.', answers: ['Er kauft die Zeitung.'] },
          { prompt: 'Você nos visita?', answers: ['Besuchst du uns?', 'Besuchen Sie uns?'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu preciso de um dicionário.', answers: ['Ich brauche ein Wörterbuch.'] },
          { prompt: 'Ela lê o jornal todo dia.', answers: ['Sie liest jeden Tag die Zeitung.'] },
          { prompt: 'Nós te conhecemos.', answers: ['Wir kennen dich.'] },
          { prompt: 'Ele assiste ao filme.', answers: ['Er sieht den Film.', 'Er schaut den Film.'] },
          { prompt: 'Você quer um chá?', answers: ['Möchtest du einen Tee?', 'Möchten Sie einen Tee?'] },
        ],
      },
    ],
  },

  {
    id: 'bas-de-4', stage: 'Básico', language: 'de', order: 4,
    title: 'Adjetivos e Comparativos',
    subtitle: 'Terminações e como comparar',
    theory: `## Declinação do adjetivo

Adjetivos ANTES do substantivo recebem terminações (declinação) que variam conforme gênero, caso e o tipo de artigo que vem antes.

### Após artigo definido (der/die/das)

| Caso  | masc.            | fem.            | neutro           |
|-------|------------------|-----------------|-------------------|
| Nom.  | der alte Mann    | die alte Frau   | das alte Kind     |
| Acus. | den alten Mann   | die alte Frau   | das alte Kind     |

### Após artigo indefinido (ein/eine)

| Caso  | masc.             | fem.             | neutro            |
|-------|-------------------|------------------|--------------------|
| Nom.  | ein alter Mann    | eine alte Frau   | ein altes Kind     |
| Acus. | einen alten Mann  | eine alte Frau   | ein altes Kind     |

💡 Dica: depois de "der/die/das" a terminação é quase sempre **-e** ou **-en**; depois de "ein/eine" o adjetivo "compensa" a informação de gênero que o artigo indefinido não dá claramente — por isso "ein alter Mann" (masc.) tem -er, "ein altes Kind" (neutro) tem -es.

### Adjetivos predicativos (depois de sein) NÃO recebem terminação

  Der Mann ist alt. (O homem é velho.) / Die Frau ist jung. (A mulher é jovem.)

⚠️ Erro comum: declinar o adjetivo mesmo depois de "sein". "Der Mann ist alte" está ERRADO — a terminação só aparece quando o adjetivo vem ANTES do substantivo.

## Comparativo e superlativo

Comparativo: adjetivo + -er
  schnell → schneller (mais rápido)   groß → größer (maior)
  alt → älter   jung → jünger   gut → besser   viel → mehr

Superlativo: am + adjetivo + -(e)sten
  am schnellsten / am größten / am besten

## Estrutura de comparação
  A ist [adj.]-er als B. (A é mais [adj.] que B.)
  A ist so [adj.] wie B. (A é tão [adj.] quanto B.)

## Exemplos
  Das ist ein schnelleres Auto als meins. (Esse é um carro mais rápido que o meu.)
  Sie ist die klügste Schülerin der Klasse. (Ela é a aluna mais inteligente da turma.)

⚠️ Atenção: muitos adjetivos curtos e comuns (alt, jung, groß, kalt, kurz, lang) ganham **Umlaut** no comparativo e superlativo — alt→älter→am ältesten. Isso não é opcional: "alter" (mais velho) está errado, o correto é "älter".

## Vocabulário-chave

• die Lösung — a solução
• die Jahreszeit — a estação do ano
• die Wohnung — o apartamento
• teuer — caro`,
    exercises: [
      {
        sentences: [
          { prompt: 'O homem velho está cansado.', answers: ['Der alte Mann ist müde.'] },
          { prompt: 'Ela tem um carro novo.', answers: ['Sie hat ein neues Auto.'] },
          { prompt: 'O café está quente.', answers: ['Der Kaffee ist heiß.'] },
          { prompt: 'Eu vejo uma mulher bonita.', answers: ['Ich sehe eine schöne Frau.'] },
          { prompt: 'A casa grande é cara.', answers: ['Das große Haus ist teuer.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ele é mais alto do que ela.', answers: ['Er ist größer als sie.'] },
          { prompt: 'Berlim é maior do que Munique.', answers: ['Berlin ist größer als München.'] },
          { prompt: 'Este carro é mais rápido do que aquele.', answers: ['Dieses Auto ist schneller als jenes.'] },
          { prompt: 'O inverno aqui é mais frio do que no Brasil.', answers: ['Der Winter hier ist kälter als in Brasilien.'] },
          { prompt: 'Ela é tão inteligente quanto ele.', answers: ['Sie ist so intelligent wie er.', 'Sie ist genauso intelligent wie er.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Este é o melhor restaurante da cidade.', answers: ['Das ist das beste Restaurant der Stadt.'] },
          { prompt: 'Nós precisamos de uma solução mais rápida.', answers: ['Wir brauchen eine schnellere Lösung.'] },
          { prompt: 'O verão é a estação mais quente.', answers: ['Der Sommer ist die heißeste Jahreszeit.'] },
          { prompt: 'Ela mora em um pequeno apartamento.', answers: ['Sie wohnt in einer kleinen Wohnung.'] },
          { prompt: 'Hoje está mais frio do que ontem.', answers: ['Heute ist es kälter als gestern.'] },
        ],
      },
    ],
  },

  {
    id: 'bas-de-5', stage: 'Básico', language: 'de', order: 5,
    title: 'Perguntas — W-Fragen',
    subtitle: 'wer, was, wo, wann, wie, warum, wohin, woher',
    theory: `## As palavras interrogativas

As W-Fragen são perguntas abertas com palavras interrogativas — quase todas começam com "w", daí o nome:

  wer?    quem?       Wer ist das? (Quem é esse?)
  was?    o que?      Was machst du? (O que você faz?)
  wo?     onde?       Wo wohnst du? (Onde você mora?)
  wann?   quando?     Wann kommst du? (Quando você vem?)
  wie?    como?       Wie heißt du? (Como você se chama?)
  warum?  por quê?    Warum lernst du Deutsch? (Por que você aprende alemão?)
  wohin?  para onde?  Wohin gehst du? (Para onde você vai?)
  woher?  de onde?    Woher kommst du? (De onde você é?)
  wie viel? quanto?   Wie viel kostet das? (Quanto custa isso?)
  wie viele? quantos? Wie viele Leute sind hier? (Quantas pessoas há aqui?)

## Estrutura da pergunta

⚠️ palavra interrogativa + verbo conjugado + sujeito + ...
  Warum lernst du Deutsch? — a regra V2 é respeitada mesmo em pergunta: o verbo continua na 2ª posição, logo após a palavra interrogativa.

⚠️ Erro comum: diferenciar **wo** (onde — localização fixa) de **wohin** (para onde — movimento/destino) e **woher** (de onde — origem). Em português usamos "onde" para os três casos, mas em alemão são palavras diferentes:
  Wo bist du? (Onde você está? — parado)
  Wohin gehst du? (Para onde você vai? — movimento)
  Woher kommst du? (De onde você vem? — origem)

💡 Dica: pense em "wohin" como "wo" + "hin" (para lá) e "woher" como "wo" + "her" (de lá) — a partícula extra indica a direção do movimento.

## Vocabulário-chave

• die Leute / die Menschen — as pessoas
• kosten — custar
• der Urlaub — as férias
• die Arbeit — o trabalho`,
    exercises: [
      {
        sentences: [
          { prompt: 'Onde você mora?', answers: ['Wo wohnst du?', 'Wo wohnen Sie?'] },
          { prompt: 'Quando você vem?', answers: ['Wann kommst du?', 'Wann kommen Sie?'] },
          { prompt: 'Por que você aprende alemão?', answers: ['Warum lernst du Deutsch?', 'Warum lernen Sie Deutsch?'] },
          { prompt: 'Quem é essa mulher?', answers: ['Wer ist diese Frau?'] },
          { prompt: 'O que você faz hoje à noite?', answers: ['Was machst du heute Abend?', 'Was machen Sie heute Abend?'] },
        ],
      },
      {
        sentences: [
          { prompt: 'De onde você é?', answers: ['Woher kommst du?', 'Woher kommen Sie?'] },
          { prompt: 'Para onde vocês vão?', answers: ['Wohin geht ihr?', 'Wohin fahren Sie?'] },
          { prompt: 'Como você se chama?', answers: ['Wie heißt du?', 'Wie heißen Sie?'] },
          { prompt: 'Quanto custa este livro?', answers: ['Wie viel kostet dieses Buch?'] },
          { prompt: 'Quantas pessoas moram aqui?', answers: ['Wie viele Menschen wohnen hier?', 'Wie viele Leute wohnen hier?'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Quando a loja abre?', answers: ['Wann öffnet das Geschäft?', 'Wann öffnet der Laden?'] },
          { prompt: 'Como você vai ao trabalho?', answers: ['Wie fährst du zur Arbeit?', 'Wie fahren Sie zur Arbeit?'] },
          { prompt: 'O que eles estão fazendo?', answers: ['Was machen sie?', 'Was tun sie?'] },
          { prompt: 'Para onde você vai de férias?', answers: ['Wohin fährst du im Urlaub?', 'Wohin fahren Sie im Urlaub?'] },
          { prompt: 'Por que ele não veio?', answers: ['Warum ist er nicht gekommen?'] },
        ],
      },
    ],
  },

  {
    id: 'rev-bas-de', stage: 'Básico', language: 'de', order: 6,
    isReview: true,
    title: 'Revisão — Básico',
    subtitle: 'Perfekt, modais, acusativo, adjetivos, W-Fragen',
    theory: `Revisão dos pontos principais do Básico:

• Perfekt: haben/sein + Partizip II — ex: Ich habe gegessen. / Sie ist gegangen. (sein com verbos de movimento)
• Modais: können/müssen/wollen/dürfen/sollen/mögen + infinitivo no final da frase
• Acusativo: só o masculino muda — der→den, ein→einen; pronomes: ich→mich, er→ihn
• Adjetivos: terminações após der (→-e/-en) e ein (→-er/-es/-en/-e); nenhuma terminação após sein
• Comparativo: -er + als / so...wie / Superlativo: am -(e)sten — atenção aos Umlauts (alt→älter)
• W-Fragen: wer/was/wo/wann/wie/warum/wohin/woher + V2; cuidado com wo/wohin/woher

💡 Dica final: revise sempre o gênero (der/die/das) junto com o substantivo — é a base de quase todas as declinações vistas até aqui.

## Vocabulário-chave

• der Apfel — a maçã
• die Prüfung — a prova
• das Fahrrad — a bicicleta
• der Bus — o ônibus
• regnen — chover`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu comi uma maçã.', answers: ['Ich habe einen Apfel gegessen.'] },
          { prompt: 'Ela precisa estudar para o exame.', answers: ['Sie muss für die Prüfung lernen.'] },
          { prompt: 'Eu vejo o cachorro grande.', answers: ['Ich sehe den großen Hund.'] },
          { prompt: 'Berlim é mais fria do que Lisboa.', answers: ['Berlin ist kälter als Lissabon.'] },
          { prompt: 'Por que você não veio ontem?', answers: ['Warum bist du gestern nicht gekommen?', 'Warum sind Sie gestern nicht gekommen?'] },
          { prompt: 'Para onde eles foram?', answers: ['Wohin sind sie gegangen?', 'Wohin sind sie gefahren?'] },
          { prompt: 'Nós podemos entrar aqui?', answers: ['Dürfen wir hier hereinkommen?', 'Können wir hier reinkommen?'] },
          { prompt: 'Ela comprou um carro novo.', answers: ['Sie hat ein neues Auto gekauft.'] },
        ],
      },
    ],
    dialogExercise: {
      audioText: 'Gestern bin ich mit dem Fahrrad zur Arbeit gefahren, aber heute muss ich den Bus nehmen, weil es regnet.',
      question: 'Por que a pessoa vai de ônibus hoje?',
      options: [
        { text: 'Porque está chovendo.', correct: true },
        { text: 'Porque a bicicleta está quebrada.', correct: false },
        { text: 'Porque está com pressa.', correct: false },
        { text: 'Porque o trem está atrasado.', correct: false },
      ],
    },
  },

];
