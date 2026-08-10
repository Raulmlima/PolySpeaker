export const MODULES_JA_PART1 = [
  // ═══════════════════════════════════════════════════════════════
  //  FUNDAMENTOS
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'fund-ja-1', language: 'ja', stage: 'Fundamentos', order: 1,
    title: 'Eu sou, você é — a partícula は e o verbo です',
    subtitle: 'Pronomes pessoais, o marcador de tópico は (wa) e a cópula です (desu)',
    theory: `## Pronomes pessoais

| Português | Rōmaji | Hiragana/Kanji |
|-----------|--------|------------------|
| eu | watashi | 私 |
| você | anata | あなた |
| ele/ela | kare / kanojo | 彼 / 彼女 |
| nós | watashitachi | 私たち |
| vocês | anatatachi | あなたたち |
| eles/elas | karera | 彼ら |

💡 Na prática, japoneses **evitam pronomes** sempre que o contexto já deixa claro quem é o sujeito — dizer "watashi" toda hora soa repetitivo e estranho. Você vai ver frases sem sujeito explícito com frequência.

## A partícula は (wa) — marcador de tópico

Em japonês, o sujeito/tópico da frase é marcado pela partícula **は**, escrita com o hiragana "ha" mas **pronunciada "wa"** quando usada como partícula (uma das poucas irregularidades do sistema).

Estrutura básica: **Tópico + は + Complemento + です**

- 私は学生です。(Watashi wa gakusei desu.) — Eu sou estudante.
- あなたは先生です。(Anata wa sensei desu.) — Você é professor(a).

## O verbo です (desu) — ser/estar

**です** é a forma polida da cópula "ser" — não muda por pessoa, número ou gênero, só por **tempo e polidez**.

| Forma | Uso | Exemplo |
|-------|-----|---------|
| です | presente afirmativo | 学生です (sou/é estudante) |
| じゃないです / ではありません | presente negativo | 学生じゃないです (não sou estudante) |
| でした | passado afirmativo | 学生でした (era estudante) |
| じゃなかったです | passado negativo | 学生じゃなかったです (não era estudante) |

Para perguntas, adicione **か (ka)** no final — sem inverter a ordem nem mudar entonação como em português:
- あなたは学生ですか？(Anata wa gakusei desu ka?) — Você é estudante?

## Pronomes demonstrativos これ/それ/あれ

| Palavra | Significado | Distância |
|---------|-------------|-----------|
| これ (kore) | isto | perto de quem fala |
| それ (sore) | isso | perto de quem ouve |
| あれ (are) | aquilo | longe dos dois |

- これは本です。(Kore wa hon desu.) — Isto é um livro.
- あれは山田さんの車です。(Are wa Yamadasan no kuruma desu.) — Aquilo é o carro do Sr. Yamada.

### Erros comuns

⚠️ Não tente conjugar です por pessoa — "watashi desu", "anata desu", "kare desu" usam exatamente a mesma palavra. Resista ao impulso de procurar uma forma equivalente a "sou/é/são/somos".

⚠️ は (wa) marca o **tópico**, não necessariamente o sujeito gramatical — isso fica mais claro quando vermos が (ga) no Básico.

## Vocabulário-chave

• 学生 (がくせい, gakusei) — estudante
• 先生 (せんせい, sensei) — professor(a)
• 医者 (いしゃ, isha) — médico
• 会社員 (かいしゃいん, kaishain) — funcionário de empresa
• 友達 (ともだち, tomodachi) — amigo
• 車 (くるま, kuruma) — carro`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu sou estudante.', answers: ['watashi wa gakusei desu — 私は学生です', 'watashi wa gakusei desu', '私は学生です'] },
          { prompt: 'Você é professor.', answers: ['anata wa sensei desu — あなたは先生です', 'anata wa sensei desu', 'あなたは先生です'] },
          { prompt: 'Ele é médico.', answers: ['kare wa isha desu — 彼は医者です', 'kare wa isha desu', '彼は医者です'] },
          { prompt: 'Ela é funcionária de empresa.', answers: ['kanojo wa kaishain desu — 彼女は会社員です', 'kanojo wa kaishain desu', '彼女は会社員です'] },
          { prompt: 'Nós somos amigos.', answers: ['watashitachi wa tomodachi desu — 私たちは友達です', 'watashitachi wa tomodachi desu', '私たちは友達です'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Vocês são estudantes.', answers: ['anatatachi wa gakusei desu — あなたたちは学生です', 'anatatachi wa gakusei desu', 'あなたたちは学生です'] },
          { prompt: 'Eu não sou professor.', answers: ['watashi wa sensei jaanai desu — 私は先生じゃないです', 'watashi wa sensei janai desu', 'watashi wa sensei jaanai desu', '私は先生じゃないです'] },
          { prompt: 'Ele não é médico.', answers: ['kare wa isha janai desu — 彼は医者じゃないです', 'kare wa isha janai desu', '彼は医者じゃないです'] },
          { prompt: 'Você é estudante?', answers: ['anata wa gakusei desu ka — あなたは学生ですか', 'anata wa gakusei desu ka', 'あなたは学生ですか'] },
          { prompt: 'Ela é professora?', answers: ['kanojo wa sensei desu ka — 彼女は先生ですか', 'kanojo wa sensei desu ka', '彼女は先生ですか'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Isto é um livro.', answers: ['kore wa hon desu — これは本です', 'kore wa hon desu', 'これは本です'] },
          { prompt: 'Aquilo é o carro dele.', answers: ['are wa kare no kuruma desu — あれは彼の車です', 'are wa kare no kuruma desu', 'あれは彼の車です'] },
          { prompt: 'Isso é um problema.', answers: ['sore wa mondai desu — それは問題です', 'sore wa mondai desu', 'それは問題です'] },
          { prompt: 'Eu era estudante.', answers: ['watashi wa gakusei deshita — 私は学生でした', 'watashi wa gakusei deshita', '私は学生でした'] },
          { prompt: 'Ele era médico.', answers: ['kare wa isha deshita — 彼は医者でした', 'kare wa isha deshita', '彼は医者でした'] },
        ],
      },
      {
        title: '📖 Compreensão de vocabulário',
        sentences: [
          { prompt: '学生 — O que significa esta palavra?', answers: ['estudante', 'aluno', 'gakusei'] },
          { prompt: '先生 — O que significa?', answers: ['professor', 'professora', 'sensei'] },
          { prompt: 'です — Para que serve esta palavra?', answers: ['ser', 'estar', 'cópula', 'é/sou/são'] },
          { prompt: 'これ — O que significa?', answers: ['isto', 'este', 'esta', 'kore'] },
          { prompt: 'は (como partícula) — Como se pronuncia?', answers: ['wa'] },
        ],
      },
    ],
  },

  {
    id: 'fund-ja-2', language: 'ja', stage: 'Fundamentos', order: 2,
    title: 'Saudações e apresentações',
    subtitle: 'こんにちは、はじめまして、よろしくお願いします',
    theory: `## Saudações básicas

| Português | Rōmaji | Hiragana |
|-----------|--------|----------|
| bom dia (formal) | ohayou gozaimasu | おはようございます |
| bom dia (informal) | ohayou | おはよう |
| boa tarde/olá | konnichiwa | こんにちは |
| boa noite (chegando) | konbanwa | こんばんは |
| boa noite (indo dormir) | oyasumi nasai | おやすみなさい |
| tchau | sayounara | さようなら |
| até logo | jaa ne / mata ne | じゃあね / またね |

⚠️ さようなら (sayounara) soa formal e um pouco definitivo (tipo "adeus") — no dia a dia, colegas e amigos usam mais じゃあね ou またね ("até mais").

## Apresentações — o essencial

- **はじめまして** (Hajimemashite) — "Muito prazer" / "É a primeira vez [que nos conhecemos]" — só se usa no **primeiro** encontro.
- **私は[nome]です。** (Watashi wa [nome] desu.) — Eu sou [nome].
- **よろしくお願いします。** (Yoroshiku onegaishimasu.) — Expressão sem tradução literal exata; usada ao final de apresentações, pedidos e início de parcerias, algo como "conto com sua ajuda/parceria".

Diálogo típico de apresentação:
- はじめまして。私はルカスです。ブラジル人です。よろしくお願いします。
- (Hajimemashite. Watashi wa Rukasu desu. Burajirujin desu. Yoroshiku onegaishimasu.)
- (Muito prazer. Eu sou o Lucas. Sou brasileiro. Prazer em conhecê-lo(a).)

## Perguntando nomes e nacionalidades

- お名前は何ですか？(Onamae wa nan desu ka?) — Qual é o seu nome? (formal, educado)
- どちらから来ましたか？(Dochira kara kimashita ka?) — De onde você veio?
- 私はブラジルから来ました。(Watashi wa Burajiru kara kimashita.) — Eu vim do Brasil.

## Polidez essencial

| Português | Rōmaji |
|-----------|--------|
| por favor (pedindo algo) | onegaishimasu |
| obrigado(a) | arigatou gozaimasu |
| de nada | dou itashimashite |
| desculpe/com licença | sumimasen |
| desculpa (informal) | gomen / gomen ne |

💡 すみません (sumimasen) é uma das palavras mais versáteis do japonês — serve para "desculpe", "com licença" (chamando atenção de alguém) e até "obrigado" (por incomodar alguém a fazer algo por você).

### Erros comuns

⚠️ O japonês tem **muitos níveis de formalidade**. Entre estranhos e em contextos profissionais, use sempre です/ます (que veremos no Básico) — nunca a forma "curta"/informal que você ouve entre amigos em anime ou filmes.

## Vocabulário-chave

• 名前 (なまえ, namae) — nome
• ブラジル人 (ぶらじるじん, Burajirujin) — brasileiro(a)
• 日本人 (にほんじん, Nihonjin) — japonês(a)
• 来る (くる, kuru) — vir`,
    exercises: [
      {
        sentences: [
          { prompt: 'Bom dia! (formal)', answers: ['ohayou gozaimasu — おはようございます', 'ohayou gozaimasu', 'おはようございます'] },
          { prompt: 'Olá / boa tarde.', answers: ['konnichiwa — こんにちは', 'konnichiwa', 'こんにちは'] },
          { prompt: 'Boa noite, durma bem.', answers: ['oyasumi nasai — おやすみなさい', 'oyasumi nasai', 'おやすみなさい'] },
          { prompt: 'Muito prazer. (primeiro encontro)', answers: ['hajimemashite — はじめまして', 'hajimemashite', 'はじめまして'] },
          { prompt: 'Eu sou o Lucas.', answers: ['watashi wa rukasu desu — 私はルカスです', 'watashi wa rukasu desu', '私はルカスです'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Prazer em conhecê-lo(a). (expressão de parceria)', answers: ['yoroshiku onegaishimasu — よろしくお願いします', 'yoroshiku onegaishimasu', 'よろしくお願いします'] },
          { prompt: 'Qual é o seu nome? (formal)', answers: ['onamae wa nan desu ka — お名前は何ですか', 'onamae wa nan desu ka', 'お名前は何ですか'] },
          { prompt: 'Eu vim do Brasil.', answers: ['watashi wa burajiru kara kimashita — 私はブラジルから来ました', 'watashi wa burajiru kara kimashita', '私はブラジルから来ました'] },
          { prompt: 'Muito obrigado.', answers: ['arigatou gozaimasu — ありがとうございます', 'arigatou gozaimasu', 'ありがとうございます'] },
          { prompt: 'De nada.', answers: ['dou itashimashite — どういたしまして', 'dou itashimashite', 'どういたしまして'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Com licença / desculpe.', answers: ['sumimasen — すみません', 'sumimasen', 'すみません'] },
          { prompt: 'Tchau. (formal, mais definitivo)', answers: ['sayounara — さようなら', 'sayounara', 'さようなら'] },
          { prompt: 'Até mais! (informal)', answers: ['mata ne — またね', 'mata ne', 'jaa ne', 'またね'] },
          { prompt: 'Eu sou brasileiro.', answers: ['watashi wa burajirujin desu — 私はブラジル人です', 'watashi wa burajirujin desu', '私はブラジル人です'] },
          { prompt: 'De onde você veio?', answers: ['dochira kara kimashita ka — どちらから来ましたか', 'dochira kara kimashita ka', 'どちらから来ましたか'] },
        ],
      },
      {
        title: '📖 Compreensão de vocabulário',
        sentences: [
          { prompt: 'すみません — Quando se usa esta palavra?', answers: ['desculpe', 'com licença', 'obrigado por incomodar', 'todas as anteriores'] },
          { prompt: 'よろしくお願いします — Quando se usa?', answers: ['ao se apresentar', 'ao pedir um favor', 'ao iniciar uma parceria'] },
          { prompt: '名前 — O que significa?', answers: ['nome', 'namae'] },
          { prompt: 'はじめまして — Quando se usa?', answers: ['no primeiro encontro', 'ao conhecer alguém pela primeira vez'] },
          { prompt: 'さようなら — O que significa e como soa?', answers: ['tchau/adeus, formal e definitivo', 'adeus formal'] },
        ],
      },
    ],
  },

  {
    id: 'fund-ja-3', language: 'ja', stage: 'Fundamentos', order: 3,
    title: 'Números, horas e dias da semana',
    subtitle: 'Contar, dizer as horas e nomear os dias',
    theory: `## Revisão rápida de números (veja também Alfabeto)

1 ichi · 2 ni · 3 san · 4 yon · 5 go · 6 roku · 7 nana · 8 hachi · 9 kyuu · 10 juu

## Dias da semana (曜日 youbi)

Todos os dias terminam em **曜日 (youbi)**, e cada um tem um elemento associado (tradição chinesa dos 5 elementos + sol/lua):

| Kanji | Rōmaji | Dia |
|-------|--------|-----|
| 月曜日 | getsuyoubi | segunda-feira |
| 火曜日 | kayoubi | terça-feira |
| 水曜日 | suiyoubi | quarta-feira |
| 木曜日 | mokuyoubi | quinta-feira |
| 金曜日 | kinyoubi | sexta-feira |
| 土曜日 | doyoubi | sábado |
| 日曜日 | nichiyoubi | domingo |

💡 Mnemônico: 月 (lua), 火 (fogo), 水 (água), 木 (madeira), 金 (metal/dinheiro), 土 (terra), 日 (sol) — os 5 elementos + lua e sol, na mesma ordem dos dias da semana em muitas culturas asiáticas.

## Dizendo as horas (時 ji)

- 何時ですか？(Nanji desu ka?) — Que horas são?
- 三時です。(Sanji desu.) — São três horas.
- 三時半です。(Sanji han desu.) — São três e meia. (半 han = "meia/metade")

⚠️ Alguns números mudam de som ao combinar com 時 (ji): 4 horas = 四時 (**yo**ji, não yonji), 7 horas = 七時 (**shichi**ji), 9 horas = 九時 (**ku**ji).

| Hora | Rōmaji |
|------|--------|
| 1時 | ichiji |
| 4時 | yoji |
| 7時 | shichiji |
| 9時 | kuji |
| 12時 | juuniji |

## Contando minutos (分 fun/pun)

- 5分 (gofun), 10分 (juppun), 15分 (juugofun), 30分/半 (sanjuppun / han)

⚠️ 分 alterna entre "fun" e "pun" dependendo do número anterior (regra de eufonia, semelhante ao sandhi tonal do mandarim) — não se preocupe em decorar a regra agora, vá reconhecendo pelo uso.

## Perguntando e respondendo sobre dias

- 今日は何曜日ですか？(Kyou wa nanyoubi desu ka?) — Que dia da semana é hoje?
- 今日は月曜日です。(Kyou wa getsuyoubi desu.) — Hoje é segunda-feira.
- 明日は火曜日です。(Ashita wa kayoubi desu.) — Amanhã é terça-feira.

### Vocabulário-chave

• 今日 (きょう, kyou) — hoje
• 明日 (あした, ashita) — amanhã
• 昨日 (きのう, kinou) — ontem
• 何時 (なんじ, nanji) — que horas
• 半 (はん, han) — meia (hora)`,
    exercises: [
      {
        sentences: [
          { prompt: 'Que horas são?', answers: ['nanji desu ka — 何時ですか', 'nanji desu ka', '何時ですか'] },
          { prompt: 'São três horas.', answers: ['sanji desu — 三時です', 'sanji desu', '三時です'] },
          { prompt: 'São quatro e meia.', answers: ['yoji han desu — 四時半です', 'yoji han desu', '四時半です'] },
          { prompt: 'Hoje é segunda-feira.', answers: ['kyou wa getsuyoubi desu — 今日は月曜日です', 'kyou wa getsuyoubi desu', '今日は月曜日です'] },
          { prompt: 'Amanhã é terça-feira.', answers: ['ashita wa kayoubi desu — 明日は火曜日です', 'ashita wa kayoubi desu', '明日は火曜日です'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ontem foi domingo.', answers: ['kinou wa nichiyoubi deshita — 昨日は日曜日でした', 'kinou wa nichiyoubi deshita', '昨日は日曜日でした'] },
          { prompt: 'Sábado é meu dia favorito.', answers: ['doyoubi wa watashi no suki na hi desu — 土曜日は私の好きな日です', 'doyoubi wa watashi no suki na hi desu', '土曜日は私の好きな日です'] },
          { prompt: 'Que dia da semana é hoje?', answers: ['kyou wa nanyoubi desu ka — 今日は何曜日ですか', 'kyou wa nanyoubi desu ka', '今日は何曜日ですか'] },
          { prompt: 'São sete horas.', answers: ['shichiji desu — 七時です', 'shichiji desu', '七時です'] },
          { prompt: 'São nove horas.', answers: ['kuji desu — 九時です', 'kuji desu', '九時です'] },
        ],
      },
      {
        sentences: [
          { prompt: 'A reunião é na quarta-feira.', answers: ['kaigi wa suiyoubi desu — 会議は水曜日です', 'kaigi wa suiyoubi desu', '会議は水曜日です'] },
          { prompt: 'São doze horas.', answers: ['juuniji desu — 十二時です', 'juuniji desu', '十二時です'] },
          { prompt: 'São dez e quinze.', answers: ['juuji juugofun desu — 十時十五分です', 'juuji juugofun desu', '十時十五分です'] },
          { prompt: 'Sexta-feira é um bom dia.', answers: ['kinyoubi wa ii hi desu — 金曜日はいい日です', 'kinyoubi wa ii hi desu', '金曜日はいい日です'] },
          { prompt: 'Hoje é sábado.', answers: ['kyou wa doyoubi desu — 今日は土曜日です', 'kyou wa doyoubi desu', '今日は土曜日です'] },
        ],
      },
      {
        title: '📖 Compreensão de vocabulário',
        sentences: [
          { prompt: '月曜日 — Que dia é?', answers: ['segunda-feira', 'segunda'] },
          { prompt: '金曜日 — Que dia é?', answers: ['sexta-feira', 'sexta'] },
          { prompt: '半 (han) — O que significa nesse contexto?', answers: ['meia', 'meia hora', 'metade'] },
          { prompt: '今日 — O que significa?', answers: ['hoje', 'kyou'] },
          { prompt: '明日 — O que significa?', answers: ['amanhã', 'ashita'] },
        ],
      },
    ],
  },

  {
    id: 'fund-ja-4', language: 'ja', stage: 'Fundamentos', order: 4,
    title: 'Adjetivos -i e -na',
    subtitle: 'い形容詞 e な形容詞: os dois tipos de adjetivo japonês',
    theory: `## Os dois tipos de adjetivos

Diferente do português, o japonês tem **duas categorias gramaticais** de adjetivos, que se comportam de formas diferentes:

### Adjetivos -i (い形容詞)

Terminam em **い** e se conjugam sozinhos, como um verbo — não precisam de です para o presente, mas usa-se です por polidez.

| Adjetivo | Significado |
|----------|-------------|
| 大きい (ookii) | grande |
| 小さい (chiisai) | pequeno |
| 高い (takai) | alto / caro |
| 安い (yasui) | barato |
| 新しい (atarashii) | novo |
| 古い (furui) | velho/antigo |
| おいしい (oishii) | gostoso |
| 難しい (muzukashii) | difícil |

**Negativo**: troque い por **くない**
- 大きい → 大きくない (ookikunai, "não é grande")

- この本は面白いです。(Kono hon wa omoshiroi desu.) — Este livro é interessante.
- この本は面白くないです。(Kono hon wa omoshirokunai desu.) — Este livro não é interessante.

### Adjetivos -na (な形容詞)

Funcionam como substantivos e **precisam de です** para completar a frase (como no verbo です regular). Quando vêm **antes** de um substantivo, adicionam **な**.

| Adjetivo | Significado |
|----------|-------------|
| きれい (kirei) | bonito/limpo |
| 静か (shizuka) | quieto/silencioso |
| 便利 (benri) | conveniente |
| 有名 (yuumei) | famoso |
| 元気 (genki) | saudável/animado |
| 好き (suki) | gostar (funciona como adjetivo!) |

- この部屋は静かです。(Kono heya wa shizuka desu.) — Este quarto é silencioso.
- 静かな部屋です。(Shizuka na heya desu.) — É um quarto silencioso. (な antes do substantivo)

⚠️ **Erro comum**: adicionar な mesmo quando o adjetivo não vem antes de um substantivo — "静かなです" está errado; sem substantivo depois, é só "静かです".

## Comparação rápida

| | Adjetivo -i | Adjetivo -na |
|---|--------------|---------------|
| Presente | ookii desu | shizuka desu |
| Negativo | ookikunai desu | shizuka janai desu |
| Antes de substantivo | ookii hon (sem partícula extra) | shizuka na heya (com な) |

💡 Dica de memorização: 元気 (genki) é uma das palavras mais usadas no dia a dia — "お元気ですか？" (Ogenki desu ka?) é a forma clássica de perguntar "Como vai?".

### Vocabulário-chave

• 部屋 (へや, heya) — quarto
• 面白い (おもしろい, omoshiroi) — interessante/divertido
• 天気 (てんき, tenki) — clima
• 料理 (りょうり, ryouri) — comida/culinária`,
    exercises: [
      {
        sentences: [
          { prompt: 'Este livro é interessante.', answers: ['kono hon wa omoshiroi desu — この本は面白いです', 'kono hon wa omoshiroi desu', 'この本は面白いです'] },
          { prompt: 'A comida está gostosa.', answers: ['ryouri wa oishii desu — 料理はおいしいです', 'ryouri wa oishii desu', '料理はおいしいです'] },
          { prompt: 'Este carro é caro.', answers: ['kono kuruma wa takai desu — この車は高いです', 'kono kuruma wa takai desu', 'この車は高いです'] },
          { prompt: 'Este quarto não é grande.', answers: ['kono heya wa ookikunai desu — この部屋は大きくないです', 'kono heya wa ookikunai desu', 'この部屋は大きくないです'] },
          { prompt: 'O japonês é difícil.', answers: ['nihongo wa muzukashii desu — 日本語は難しいです', 'nihongo wa muzukashii desu', '日本語は難しいです'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Este quarto é silencioso.', answers: ['kono heya wa shizuka desu — この部屋は静かです', 'kono heya wa shizuka desu', 'この部屋は静かです'] },
          { prompt: 'Tóquio é famosa.', answers: ['toukyou wa yuumei desu — 東京は有名です', 'toukyou wa yuumei desu', '東京は有名です'] },
          { prompt: 'É um quarto silencioso. (antes do substantivo)', answers: ['shizuka na heya desu — 静かな部屋です', 'shizuka na heya desu', '静かな部屋です'] },
          { prompt: 'Como vai você? (expressão fixa)', answers: ['ogenki desu ka — お元気ですか', 'ogenki desu ka', 'お元気ですか'] },
          { prompt: 'Eu estou bem/animado.', answers: ['watashi wa genki desu — 私は元気です', 'watashi wa genki desu', '私は元気です'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Este livro é novo.', answers: ['kono hon wa atarashii desu — この本は新しいです', 'kono hon wa atarashii desu', 'この本は新しいです'] },
          { prompt: 'Este restaurante é conveniente.', answers: ['kono resutoran wa benri desu — このレストランは便利です', 'kono resutoran wa benri desu', 'このレストランは便利です'] },
          { prompt: 'Este carro não é caro.', answers: ['kono kuruma wa takakunai desu — この車は高くないです', 'kono kuruma wa takakunai desu', 'この車は高くないです'] },
          { prompt: 'Eu gosto de sushi. (suki como adjetivo)', answers: ['watashi wa sushi ga suki desu — 私は寿司が好きです', 'watashi wa sushi ga suki desu', '私は寿司が好きです'] },
          { prompt: 'Este bairro é bonito/limpo.', answers: ['kono machi wa kirei desu — この町はきれいです', 'kono machi wa kirei desu', 'この町はきれいです'] },
        ],
      },
      {
        title: '📖 Compreensão de vocabulário',
        sentences: [
          { prompt: 'Qual a diferença estrutural entre adjetivos -i e -na?', answers: ['-i se conjuga sozinho; -na precisa de な antes de substantivo', 'adjetivos -na levam な antes do substantivo'] },
          { prompt: '面白い — O que significa?', answers: ['interessante', 'divertido', 'omoshiroi'] },
          { prompt: 'Como se nega um adjetivo -i? (ex: 大きい)', answers: ['trocando い por くない', 'ookikunai'] },
          { prompt: '元気 — O que significa?', answers: ['saudável', 'animado', 'bem (de saúde)', 'genki'] },
          { prompt: '静か — Que tipo de adjetivo é (i ou na)?', answers: ['na', 'adjetivo -na'] },
        ],
      },
    ],
  },

  {
    id: 'fund-ja-5', language: 'ja', stage: 'Fundamentos', order: 5,
    title: 'Partículas básicas — を、に、で',
    subtitle: 'Objeto direto, lugar/tempo e meio/instrumento',
    theory: `## Por que partículas são tão importantes?

Diferente do português, a ordem das palavras em japonês é relativamente livre — quem indica a **função** de cada palavra na frase são as **partículas** (pequenas sílabas depois de cada elemento). Errar a partícula muda o sentido da frase inteira.

## を (wo/o) — marcador de objeto direto

Marca o que **recebe a ação** do verbo. Escreve-se **を** mas pronuncia-se **"o"**.

- 私はパンを食べます。(Watashi wa pan wo tabemasu.) — Eu como pão.
- 本を読みます。(Hon wo yomimasu.) — Leio um livro.

## に (ni) — lugar de destino, tempo específico, ou existência

**に** tem múltiplos usos essenciais:

**1. Destino de movimento** (para onde):
- 学校に行きます。(Gakkou ni ikimasu.) — Vou para a escola.

**2. Tempo específico** (quando — com horários, dias, datas):
- 三時に来ます。(Sanji ni kimasu.) — Venho às três horas.
- 月曜日に勉強します。(Getsuyoubi ni benkyou shimasu.) — Estudo na segunda-feira.

**3. Local de existência** (onde algo/alguém está, com ある/いる):
- 猫は部屋にいます。(Neko wa heya ni imasu.) — O gato está no quarto.

⚠️ に não é usado para "atividades acontecendo em um lugar" — para isso usa-se で (próximo).

## で (de) — local de ação, meio/instrumento

**1. Local onde a AÇÃO acontece** (diferente de に, que marca destino/existência):
- レストランで食べます。(Resutoran de tabemasu.) — Como no restaurante. (ação acontecendo lá)
- 図書館で勉強します。(Toshokan de benkyou shimasu.) — Estudo na biblioteca.

**2. Meio/instrumento** (com o quê):
- バスで行きます。(Basu de ikimasu.) — Vou de ônibus.
- 箸で食べます。(Hashi de tabemasu.) — Como com hashi (pauzinhos).

## に vs で — a diferença que mais confunde

| | に | で |
|---|---|---|
| Uso | destino, existência (estar em) | local de ação, meio |
| Exemplo | 家にいます (estou em casa) | 家で勉強します (estudo em casa) |

💡 Truque prático: se o verbo é **いる/ある** (existir/estar) ou um verbo de **movimento** (ir/vir), use **に**. Se é qualquer outra ação acontecendo NUM lugar, use **で**.

### Erros comuns

⚠️ Trocar に por で em frases de destino: "学校で行きます" está errado — deve ser "学校**に**行きます" (vou PARA a escola, destino).

## Vocabulário-chave

• 食べる (たべる, taberu) — comer
• 読む (よむ, yomu) — ler
• 行く (いく, iku) — ir
• 来る (くる, kuru) — vir
• 図書館 (としょかん, toshokan) — biblioteca
• 箸 (はし, hashi) — hashi/pauzinhos`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu como pão.', answers: ['watashi wa pan wo tabemasu — 私はパンを食べます', 'watashi wa pan wo tabemasu', 'watashi wa pan o tabemasu', '私はパンを食べます'] },
          { prompt: 'Leio um livro.', answers: ['hon wo yomimasu — 本を読みます', 'hon wo yomimasu', 'hon o yomimasu', '本を読みます'] },
          { prompt: 'Vou para a escola.', answers: ['gakkou ni ikimasu — 学校に行きます', 'gakkou ni ikimasu', '学校に行きます'] },
          { prompt: 'Venho às três horas.', answers: ['sanji ni kimasu — 三時に来ます', 'sanji ni kimasu', '三時に来ます'] },
          { prompt: 'Estudo na segunda-feira.', answers: ['getsuyoubi ni benkyou shimasu — 月曜日に勉強します', 'getsuyoubi ni benkyou shimasu', '月曜日に勉強します'] },
        ],
      },
      {
        sentences: [
          { prompt: 'O gato está no quarto.', answers: ['neko wa heya ni imasu — 猫は部屋にいます', 'neko wa heya ni imasu', '猫は部屋にいます'] },
          { prompt: 'Como no restaurante.', answers: ['resutoran de tabemasu — レストランで食べます', 'resutoran de tabemasu', 'レストランで食べます'] },
          { prompt: 'Estudo na biblioteca.', answers: ['toshokan de benkyou shimasu — 図書館で勉強します', 'toshokan de benkyou shimasu', '図書館で勉強します'] },
          { prompt: 'Vou de ônibus.', answers: ['basu de ikimasu — バスで行きます', 'basu de ikimasu', 'バスで行きます'] },
          { prompt: 'Como com hashi.', answers: ['hashi de tabemasu — 箸で食べます', 'hashi de tabemasu', '箸で食べます'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Estou em casa.', answers: ['ie ni imasu — 家にいます', 'ie ni imasu', '家にいます'] },
          { prompt: 'Estudo em casa.', answers: ['ie de benkyou shimasu — 家で勉強します', 'ie de benkyou shimasu', '家で勉強します'] },
          { prompt: 'Vou para Tóquio.', answers: ['toukyou ni ikimasu — 東京に行きます', 'toukyou ni ikimasu', '東京に行きます'] },
          { prompt: 'Ele lê o jornal na biblioteca.', answers: ['kare wa toshokan de shinbun wo yomimasu — 彼は図書館で新聞を読みます', 'kare wa toshokan de shinbun wo yomimasu', '彼は図書館で新聞を読みます'] },
          { prompt: 'Ela come sushi com hashi.', answers: ['kanojo wa hashi de sushi wo tabemasu — 彼女は箸で寿司を食べます', 'kanojo wa hashi de sushi wo tabemasu', '彼女は箸で寿司を食べます'] },
        ],
      },
      {
        title: '📖 Compreensão de vocabulário',
        sentences: [
          { prompt: 'を — Como se pronuncia esta partícula?', answers: ['o', 'wo'] },
          { prompt: 'に — Cite dois usos principais desta partícula.', answers: ['destino e tempo específico', 'destino, tempo, existência'] },
          { prompt: 'で — Cite os dois usos principais desta partícula.', answers: ['local de ação e meio/instrumento', 'local de ação, meio'] },
          { prompt: '図書館 — O que significa?', answers: ['biblioteca', 'toshokan'] },
          { prompt: 'Qual partícula usar com o verbo いる (existir/estar)?', answers: ['に', 'ni'] },
        ],
      },
    ],
  },

  // ─── Revisão Fundamentos ────────────────────────────────────────────────
  {
    id: 'rev-fund-ja', stage: 'Fundamentos', language: 'ja', order: 99, isReview: true,
    title: 'Revisão — Fundamentos',
    subtitle: 'は/です, saudações, números/horas, adjetivos -i/-na, partículas を/に/で',
    theory: null,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu sou brasileiro e ela é japonesa.', answers: ['watashi wa burajirujin de, kanojo wa nihonjin desu — 私はブラジル人で、彼女は日本人です', 'watashi wa burajirujin de kanojo wa nihonjin desu', '私はブラジル人で、彼女は日本人です'] },
          { prompt: 'Muito prazer, eu sou o Lucas.', answers: ['hajimemashite, watashi wa rukasu desu — はじめまして、私はルカスです', 'hajimemashite watashi wa rukasu desu', 'はじめまして、私はルカスです'] },
          { prompt: 'Hoje é quarta-feira e são três horas.', answers: ['kyou wa suiyoubi de, sanji desu — 今日は水曜日で、三時です', 'kyou wa suiyoubi de sanji desu', '今日は水曜日で、三時です'] },
          { prompt: 'Este livro é interessante e não é caro.', answers: ['kono hon wa omoshiroi desu, soshite takakunai desu — この本は面白いです、そして高くないです', 'kono hon wa omoshiroi desu soshite takakunai desu', 'この本は面白いです、そして高くないです'] },
          { prompt: 'Eu vou para a escola às oito horas.', answers: ['watashi wa hachiji ni gakkou ni ikimasu — 私は八時に学校に行きます', 'watashi wa hachiji ni gakkou ni ikimasu', '私は八時に学校に行きます'] },
          { prompt: 'Estudo japonês na biblioteca.', answers: ['toshokan de nihongo wo benkyou shimasu — 図書館で日本語を勉強します', 'toshokan de nihongo wo benkyou shimasu', '図書館で日本語を勉強します'] },
          { prompt: 'Como vai você? Eu estou bem.', answers: ['ogenki desu ka? watashi wa genki desu — お元気ですか？私は元気です', 'ogenki desu ka watashi wa genki desu', 'お元気ですか？私は元気です'] },
          { prompt: 'Este é o meu amigo.', answers: ['kore wa watashi no tomodachi desu — これは私の友達です', 'kore wa watashi no tomodachi desu', 'これは私の友達です'] },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  //  BÁSICO
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'bas-ja-1', language: 'ja', stage: 'Básico', order: 1,
    title: 'Verbos no presente/futuro — a forma ます',
    subtitle: 'A forma polida ます (masu) para ações no presente/futuro',
    theory: `## A forma ます (masu-kei)

Todos os verbos japoneses, na forma polida (a que você deve usar sempre no início), terminam em **ます** no presente/futuro afirmativo. Não existe distinção clara entre presente e futuro — o contexto (ou uma palavra de tempo) esclarece.

## As três classes de verbos

Japonês tem 3 grupos de verbos, cada um conjugando de forma um pouco diferente. Por enquanto, memorize os verbos já na forma ます — a lógica de formação vem mais adiante.

| Verbo (dicionário) | Forma ます | Significado |
|---------------------|------------|-------------|
| 食べる (taberu) | 食べます (tabemasu) | comer |
| 飲む (nomu) | 飲みます (nomimasu) | beber |
| 行く (iku) | 行きます (ikimasu) | ir |
| 来る (kuru) | 来ます (kimasu) | vir |
| する (suru) | します (shimasu) | fazer |
| 見る (miru) | 見ます (mimasu) | ver |
| 話す (hanasu) | 話します (hanashimasu) | falar |
| 買う (kau) | 買います (kaimasu) | comprar |

## Conjugação completa da forma ます

| Forma | Terminação | Exemplo (taberu) |
|-------|-----------|-------------------|
| Afirmativo presente/futuro | ます | tabemasu (como/comerei) |
| Negativo presente/futuro | ません | tabemasen (não como/comerei) |
| Pergunta | ます + か | tabemasu ka? (você come?) |

- 毎日パンを食べます。(Mainichi pan wo tabemasu.) — Como pão todo dia.
- コーヒーを飲みません。(Koohii wo nomimasen.) — Não bebo café.
- 明日、学校に行きますか？(Ashita, gakkou ni ikimasu ka?) — Você vai para a escola amanhã?

## Ordem da frase japonesa: SOV

Diferente do português (Sujeito-Verbo-Objeto), o japonês segue **Sujeito-Objeto-Verbo** — o verbo **sempre vem no final** da frase.

- 私は (S) + パンを (O) + 食べます (V)
- "Eu pão como" (literalmente) = "Eu como pão"

💡 Essa é a mudança de estrutura mais importante para quem vem do português — treine sempre pensando "o verbo vai pro final".

### Erros comuns

⚠️ Não coloque o verbo no meio da frase por hábito do português — mesmo com múltiplos complementos (lugar, tempo, objeto), o verbo japonês é **sempre** a última palavra.

## Vocabulário-chave

• 毎日 (まいにち, mainichi) — todo dia
• 飲む (のむ, nomu) — beber
• 買う (かう, kau) — comprar
• 話す (はなす, hanasu) — falar
• 見る (みる, miru) — ver`,
    exercises: [
      {
        sentences: [
          { prompt: 'Como pão todo dia.', answers: ['mainichi pan wo tabemasu — 毎日パンを食べます', 'mainichi pan wo tabemasu', '毎日パンを食べます'] },
          { prompt: 'Não bebo café.', answers: ['koohii wo nomimasen — コーヒーを飲みません', 'koohii wo nomimasen', 'コーヒーを飲みません'] },
          { prompt: 'Você vai para a escola amanhã?', answers: ['ashita, gakkou ni ikimasu ka — 明日、学校に行きますか', 'ashita gakkou ni ikimasu ka', '明日、学校に行きますか'] },
          { prompt: 'Eu compro um livro.', answers: ['hon wo kaimasu — 本を買います', 'hon wo kaimasu', '本を買います'] },
          { prompt: 'Ele fala japonês.', answers: ['kare wa nihongo wo hanashimasu — 彼は日本語を話します', 'kare wa nihongo wo hanashimasu', '彼は日本語を話します'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ela vê um filme.', answers: ['kanojo wa eiga wo mimasu — 彼女は映画を見ます', 'kanojo wa eiga wo mimasu', '彼女は映画を見ます'] },
          { prompt: 'Nós não compramos carro.', answers: ['watashitachi wa kuruma wo kaimasen — 私たちは車を買いません', 'watashitachi wa kuruma wo kaimasen', '私たちは車を買いません'] },
          { prompt: 'Você bebe chá?', answers: ['ocha wo nomimasu ka — お茶を飲みますか', 'ocha wo nomimasu ka', 'お茶を飲みますか'] },
          { prompt: 'Eu venho amanhã.', answers: ['ashita kimasu — 明日来ます', 'ashita kimasu', '明日来ます'] },
          { prompt: 'Ele não vem hoje.', answers: ['kare wa kyou kimasen — 彼は今日来ません', 'kare wa kyou kimasen', '彼は今日来ません'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu faço o trabalho de casa.', answers: ['shukudai wo shimasu — 宿題をします', 'shukudai wo shimasu', '宿題をします'] },
          { prompt: 'Vocês falam inglês?', answers: ['eigo wo hanashimasu ka — 英語を話しますか', 'eigo wo hanashimasu ka', '英語を話しますか'] },
          { prompt: 'Eu compro pão na loja.', answers: ['mise de pan wo kaimasu — 店でパンを買います', 'mise de pan wo kaimasu', '店でパンを買います'] },
          { prompt: 'Ela come sushi no restaurante.', answers: ['kanojo wa resutoran de sushi wo tabemasu — 彼女はレストランで寿司を食べます', 'kanojo wa resutoran de sushi wo tabemasu', '彼女はレストランで寿司を食べます'] },
          { prompt: 'Eu não vejo televisão.', answers: ['terebi wo mimasen — テレビを見ません', 'terebi wo mimasen', 'テレビを見ません'] },
        ],
      },
      {
        title: '📖 Compreensão de vocabulário',
        sentences: [
          { prompt: 'Qual é a ordem básica da frase japonesa (SOV)?', answers: ['sujeito-objeto-verbo', 'o verbo vem no final'] },
          { prompt: 'ます — Que tempo verbal marca?', answers: ['presente/futuro afirmativo', 'presente ou futuro'] },
          { prompt: 'ません — O que marca?', answers: ['presente/futuro negativo', 'negativo'] },
          { prompt: '毎日 — O que significa?', answers: ['todo dia', 'mainichi'] },
          { prompt: '飲む — O que significa (forma dicionário)?', answers: ['beber', 'nomu'] },
        ],
      },
    ],
  },

  {
    id: 'bas-ja-2', language: 'ja', stage: 'Básico', order: 2,
    title: 'Verbos no passado — ました/でした',
    subtitle: 'A forma polida no passado, afirmativo e negativo',
    theory: `## Passado dos verbos — ました

Para colocar um verbo no passado (forma polida), troque **ます** por **ました**:

| Presente | Passado | Significado |
|----------|---------|-------------|
| 食べます (tabemasu) | 食べました (tabemashita) | comi |
| 飲みます (nomimasu) | 飲みました (nomimashita) | bebi |
| 行きます (ikimasu) | 行きました (ikimashita) | fui |
| しました (shimasu) → | しました (shimashita) | fiz |

- 昨日、寿司を食べました。(Kinou, sushi wo tabemashita.) — Ontem comi sushi.
- 先週、東京に行きました。(Senshuu, Toukyou ni ikimashita.) — Fui a Tóquio na semana passada.

## Passado negativo — ませんでした

Troque **ません** por **ませんでした**:

- コーヒーを飲みませんでした。(Koohii wo nomimasen deshita.) — Não bebi café.
- 昨日、学校に行きませんでした。(Kinou, gakkou ni ikimasen deshita.) — Ontem não fui à escola.

## O passado de です — でした

Já vimos isso em Fundamentos, mas revisando: です no passado vira **でした**, e o negativo passado é **じゃなかったです** (ou じゃありませんでした, mais formal).

| Forma | です (presente) | でした (passado) |
|-------|-------------------|---------------------|
| Afirmativo | 学生です | 学生でした |
| Negativo | 学生じゃないです | 学生じゃなかったです |

## Palavras de tempo úteis para o passado

| Português | Rōmaji |
|-----------|--------|
| ontem | kinou (昨日) |
| anteontem | ototoi (一昨日) |
| semana passada | senshuu (先週) |
| mês passado | sengetsu (先月) |
| ano passado | kyonen (去年) |

- 先月、日本に行きました。(Sengetsu, Nihon ni ikimashita.) — Fui ao Japão no mês passado.

### Erros comuns

⚠️ Não confunda でした (passado de です, "era/foi") com ました (passado de verbos em ます, "fiz/comi/fui"). São terminações diferentes para categorias gramaticais diferentes (cópula vs. verbo de ação).

## Vocabulário-chave

• 先週 (せんしゅう, senshuu) — semana passada
• 去年 (きょねん, kyonen) — ano passado
• 旅行 (りょこう, ryokou) — viagem
• 買い物 (かいもの, kaimono) — compras`,
    exercises: [
      {
        sentences: [
          { prompt: 'Ontem comi sushi.', answers: ['kinou, sushi wo tabemashita — 昨日、寿司を食べました', 'kinou sushi wo tabemashita', '昨日、寿司を食べました'] },
          { prompt: 'Fui a Tóquio na semana passada.', answers: ['senshuu, toukyou ni ikimashita — 先週、東京に行きました', 'senshuu toukyou ni ikimashita', '先週、東京に行きました'] },
          { prompt: 'Não bebi café.', answers: ['koohii wo nomimasen deshita — コーヒーを飲みませんでした', 'koohii wo nomimasen deshita', 'コーヒーを飲みませんでした'] },
          { prompt: 'Ontem não fui à escola.', answers: ['kinou, gakkou ni ikimasen deshita — 昨日、学校に行きませんでした', 'kinou gakkou ni ikimasen deshita', '昨日、学校に行きませんでした'] },
          { prompt: 'Eu era estudante.', answers: ['watashi wa gakusei deshita — 私は学生でした', 'watashi wa gakusei deshita', '私は学生でした'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Fui ao Japão no mês passado.', answers: ['sengetsu, nihon ni ikimashita — 先月、日本に行きました', 'sengetsu nihon ni ikimashita', '先月、日本に行きました'] },
          { prompt: 'Fiz o trabalho de casa ontem.', answers: ['kinou, shukudai wo shimashita — 昨日、宿題をしました', 'kinou shukudai wo shimashita', '昨日、宿題をしました'] },
          { prompt: 'Ele não era professor.', answers: ['kare wa sensei ja nakatta desu — 彼は先生じゃなかったです', 'kare wa sensei janakatta desu', '彼は先生じゃなかったです'] },
          { prompt: 'Comprei um carro no ano passado.', answers: ['kyonen, kuruma wo kaimashita — 去年、車を買いました', 'kyonen kuruma wo kaimashita', '去年、車を買いました'] },
          { prompt: 'Vimos um filme ontem.', answers: ['kinou, eiga wo mimashita — 昨日、映画を見ました', 'kinou eiga wo mimashita', '昨日、映画を見ました'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Fiz compras na semana passada.', answers: ['senshuu, kaimono wo shimashita — 先週、買い物をしました', 'senshuu kaimono wo shimashita', '先週、買い物をしました'] },
          { prompt: 'Não vi televisão ontem.', answers: ['kinou, terebi wo mimasen deshita — 昨日、テレビを見ませんでした', 'kinou terebi wo mimasen deshita', '昨日、テレビを見ませんでした'] },
          { prompt: 'A viagem foi interessante.', answers: ['ryokou wa omoshirokatta desu — 旅行は面白かったです', 'ryokou wa omoshirokatta desu', '旅行は面白かったです'] },
          { prompt: 'Falamos japonês ontem.', answers: ['kinou, nihongo wo hanashimashita — 昨日、日本語を話しました', 'kinou nihongo wo hanashimashita', '昨日、日本語を話しました'] },
          { prompt: 'Ela não comprou nada. (nada = 何も + negativo)', answers: ['kanojo wa nani mo kaimasen deshita — 彼女は何も買いませんでした', 'kanojo wa nanimo kaimasen deshita', '彼女は何も買いませんでした'] },
        ],
      },
      {
        title: '📖 Compreensão de vocabulário',
        sentences: [
          { prompt: 'ました — Que tempo verbal marca?', answers: ['passado afirmativo', 'passado'] },
          { prompt: 'ませんでした — O que marca?', answers: ['passado negativo'] },
          { prompt: 'でした — Qual é a diferença entre isso e ました?', answers: ['でした é passado de です (cópula); ました é passado de verbos de ação'] },
          { prompt: '先週 — O que significa?', answers: ['semana passada', 'senshuu'] },
          { prompt: '旅行 — O que significa?', answers: ['viagem', 'ryokou'] },
        ],
      },
    ],
  },

  {
    id: 'bas-ja-3', language: 'ja', stage: 'Básico', order: 3,
    title: 'Existência — ある e いる',
    subtitle: 'Dois verbos "haver/existir": um para objetos, outro para seres vivos',
    theory: `## Dois verbos diferentes para "haver/existir"

O japonês distingue entre coisas **inanimadas** e **seres vivos** ao dizer que algo existe ou está em algum lugar — algo que o português não faz (usamos "há/tem/está" para tudo).

| Verbo | Forma ます | Usado para |
|-------|-----------|------------|
| ある (aru) | あります (arimasu) | objetos, coisas inanimadas, plantas |
| いる (iru) | います (imasu) | pessoas, animais, seres vivos que se movem |

- 机の上に本があります。(Tsukue no ue ni hon ga arimasu.) — Há um livro em cima da mesa.
- 部屋に猫がいます。(Heya ni neko ga imasu.) — Há um gato no quarto.
- 公園に子供がいます。(Kouen ni kodomo ga imasu.) — Há crianças no parque.

⚠️ Erro comum: usar いる para objetos ou ある para pessoas — "部屋に本がいます" está errado (livro é objeto, precisa de ある).

## Palavras de posição — ligando ao に que já vimos

| Posição | Rōmaji | Significado |
|---------|--------|-------------|
| 上 | ue | em cima |
| 下 | shita | embaixo |
| 中 | naka | dentro |
| 前 | mae | na frente |
| 後ろ | ushiro | atrás |
| 隣 | tonari | ao lado |

Estrutura: **[Lugar]の[Posição]に[Coisa]が[ある/いる]**
- 箱の中に猫がいます。(Hako no naka ni neko ga imasu.) — Há um gato dentro da caixa.
- 家の前に車があります。(Ie no mae ni kuruma ga arimasu.) — Há um carro na frente da casa.

## A partícula が (ga) — introduzindo が pela primeira vez

Repare que usamos **が**, não は, com ある/いる. **が** marca o **sujeito gramatical específico** — muito comum quando estamos apresentando/introduzindo algo pela primeira vez (informação nova), diferente de は (tópico já conhecido/estabelecido). Veremos a diferença completa は vs が no próximo módulo.

## Negativo de ある/いる

- ある → ない (arimasen, forma polida)
- いる → いない (imasen, forma polida)

- 机の上に本がありません。(Tsukue no ue ni hon ga arimasen.) — Não há livro em cima da mesa.
- 部屋に誰もいません。(Heya ni dare mo imasen.) — Não há ninguém no quarto.

### Vocabulário-chave

• 机 (つくえ, tsukue) — mesa
• 猫 (ねこ, neko) — gato
• 犬 (いぬ, inu) — cachorro
• 箱 (はこ, hako) — caixa
• 公園 (こうえん, kouen) — parque
• 子供 (こども, kodomo) — criança`,
    exercises: [
      {
        sentences: [
          { prompt: 'Há um livro em cima da mesa.', answers: ['tsukue no ue ni hon ga arimasu — 机の上に本があります', 'tsukue no ue ni hon ga arimasu', '机の上に本があります'] },
          { prompt: 'Há um gato no quarto.', answers: ['heya ni neko ga imasu — 部屋に猫がいます', 'heya ni neko ga imasu', '部屋に猫がいます'] },
          { prompt: 'Há crianças no parque.', answers: ['kouen ni kodomo ga imasu — 公園に子供がいます', 'kouen ni kodomo ga imasu', '公園に子供がいます'] },
          { prompt: 'Há um carro na frente da casa.', answers: ['ie no mae ni kuruma ga arimasu — 家の前に車があります', 'ie no mae ni kuruma ga arimasu', '家の前に車があります'] },
          { prompt: 'Há um gato dentro da caixa.', answers: ['hako no naka ni neko ga imasu — 箱の中に猫がいます', 'hako no naka ni neko ga imasu', '箱の中に猫がいます'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Não há livro em cima da mesa.', answers: ['tsukue no ue ni hon ga arimasen — 机の上に本がありません', 'tsukue no ue ni hon ga arimasen', '机の上に本がありません'] },
          { prompt: 'Não há ninguém no quarto.', answers: ['heya ni dare mo imasen — 部屋に誰もいません', 'heya ni dare mo imasen', '部屋に誰もいません'] },
          { prompt: 'Há um cachorro atrás da casa.', answers: ['ie no ushiro ni inu ga imasu — 家の後ろに犬がいます', 'ie no ushiro ni inu ga imasu', '家の後ろに犬がいます'] },
          { prompt: 'Não há carro na frente da escola.', answers: ['gakkou no mae ni kuruma ga arimasen — 学校の前に車がありません', 'gakkou no mae ni kuruma ga arimasen', '学校の前に車がありません'] },
          { prompt: 'Há uma caixa embaixo da mesa.', answers: ['tsukue no shita ni hako ga arimasu — 机の下に箱があります', 'tsukue no shita ni hako ga arimasu', '机の下に箱があります'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Há um estudante ao lado da professora.', answers: ['sensei no tonari ni gakusei ga imasu — 先生の隣に学生がいます', 'sensei no tonari ni gakusei ga imasu', '先生の隣に学生がいます'] },
          { prompt: 'Meu amigo está no parque.', answers: ['watashi no tomodachi wa kouen ni imasu — 私の友達は公園にいます', 'watashi no tomodachi wa kouen ni imasu', '私の友達は公園にいます'] },
          { prompt: 'Não há café em casa.', answers: ['ie ni koohii ga arimasen — 家にコーヒーがありません', 'ie ni koohii ga arimasen', '家にコーヒーがありません'] },
          { prompt: 'Há um gato e um cachorro no quarto.', answers: ['heya ni neko to inu ga imasu — 部屋に猫と犬がいます', 'heya ni neko to inu ga imasu', '部屋に猫と犬がいます'] },
          { prompt: 'Que verbo usar para "há um médico aqui"?', answers: ['imasu — います', 'います', 'imasu'] },
        ],
      },
      {
        title: '📖 Compreensão de vocabulário',
        sentences: [
          { prompt: 'ある — Para que tipo de coisa se usa?', answers: ['objetos inanimados', 'coisas'] },
          { prompt: 'いる — Para que tipo de coisa se usa?', answers: ['seres vivos', 'pessoas e animais'] },
          { prompt: '中 (naka) — O que significa?', answers: ['dentro'] },
          { prompt: '隣 (tonari) — O que significa?', answers: ['ao lado'] },
          { prompt: 'が (nesse contexto de ある/いる) — Que tipo de informação costuma introduzir?', answers: ['informação nova', 'sujeito específico'] },
        ],
      },
    ],
  },

  {
    id: 'bas-ja-4', language: 'ja', stage: 'Básico', order: 4,
    title: 'は vs が — a diferença que mais confunde',
    subtitle: 'Tópico conhecido vs. sujeito/informação nova',
    theory: `## は e が não são "a mesma coisa com nomes diferentes"

Um dos maiores desafios para aprendizes de japonês é entender que **は (wa)** e **が (ga)** têm funções diferentes, mesmo quando ambos parecem marcar "o sujeito" da frase.

## は (wa) — tópico, informação já conhecida/contextual

Marca **sobre o que estamos falando** — geralmente algo já mencionado, óbvio pelo contexto, ou uma afirmação geral.

- 私は学生です。(Watashi wa gakusei desu.) — Eu (falando de mim) sou estudante.
- 猫は動物です。(Neko wa doubutsu desu.) — Gatos são animais. (afirmação geral)

## が (ga) — sujeito específico, informação nova

Marca **o que especificamente** faz algo, ou introduz uma informação nova pela primeira vez — muito comum em respostas a "quem/o quê" e ao descrever o que existe/acontece.

- 誰が来ましたか？ — 田中さんが来ました。
  (Dare ga kimashita ka? — Tanakasan ga kimashita.)
  (Quem veio? — O Sr. Tanaka veio.) — resposta específica a uma pergunta

- 雨が降っています。(Ame ga futte imasu.) — Está chovendo. (chuva = informação nova, "o que está acontecendo")

## Comparando lado a lado

| Frase | Partícula | Nuance |
|-------|-----------|--------|
| 私は学生です | は | Falando sobre mim (tópico já claro: "eu") |
| 私が学生です | が | ESPECIFICAMENTE eu (não outra pessoa) sou o estudante |

- クラスに学生が三人います。(Kurasu ni gakusei ga sannin imasu.) — Há três estudantes na sala. (introduzindo quantos existem — informação nova)
- その学生は日本人です。(Sono gakusei wa nihonjin desu.) — Aquele estudante (já mencionado) é japonês.

## Regra prática para começar

💡 Dica simples (não é 100% perfeita, mas ajuda muito no início):
- Se você está **respondendo "quem/o quê"** ou **apresentando algo pela primeira vez** → が
- Se você está **fazendo uma afirmação geral** sobre algo já estabelecido no diálogo → は

## が também aparece com certos verbos/adjetivos

Alguns verbos e adjetivos (como 好き "gostar", 分かる "entender", ある/いる) tradicionalmente usam **が** para marcar o que é "gostado/entendido/existente", mesmo quando o tópico geral usa は:

- 私は寿司が好きです。(Watashi wa sushi ga suki desu.) — Eu gosto de sushi. (Eu = tópico com は; sushi = o que é gostado, com が)
- 私は日本語が分かります。(Watashi wa nihongo ga wakarimasu.) — Eu entendo japonês.

### Erros comuns

⚠️ Não pense em は/が como "sujeito da frase" em português — pense em は como "sobre isto..." e が como "especificamente isto é o quê".

## Vocabulário-chave

• 誰 (だれ, dare) — quem
• 雨 (あめ, ame) — chuva
• 降る (ふる, furu) — cair (chuva/neve)
• 分かる (わかる, wakaru) — entender
• クラス (kurasu) — turma/sala de aula`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu sou estudante. (falando de mim, tópico)', answers: ['watashi wa gakusei desu — 私は学生です', 'watashi wa gakusei desu', '私は学生です'] },
          { prompt: 'Gatos são animais. (afirmação geral)', answers: ['neko wa doubutsu desu — 猫は動物です', 'neko wa doubutsu desu', '猫は動物です'] },
          { prompt: 'Quem veio? (pergunta)', answers: ['dare ga kimashita ka — 誰が来ましたか', 'dare ga kimashita ka', '誰が来ましたか'] },
          { prompt: 'O Sr. Tanaka veio. (resposta específica)', answers: ['tanakasan ga kimashita — 田中さんが来ました', 'tanakasan ga kimashita', '田中さんが来ました'] },
          { prompt: 'Está chovendo. (informação nova)', answers: ['ame ga futte imasu — 雨が降っています', 'ame ga futte imasu', '雨が降っています'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Há três estudantes na sala.', answers: ['kurasu ni gakusei ga sannin imasu — クラスに学生が三人います', 'kurasu ni gakusei ga sannin imasu', 'クラスに学生が三人います'] },
          { prompt: 'Aquele estudante é japonês. (já mencionado)', answers: ['sono gakusei wa nihonjin desu — その学生は日本人です', 'sono gakusei wa nihonjin desu', 'その学生は日本人です'] },
          { prompt: 'Eu gosto de sushi.', answers: ['watashi wa sushi ga suki desu — 私は寿司が好きです', 'watashi wa sushi ga suki desu', '私は寿司が好きです'] },
          { prompt: 'Eu entendo japonês.', answers: ['watashi wa nihongo ga wakarimasu — 私は日本語が分かります', 'watashi wa nihongo ga wakarimasu', '私は日本語が分かります'] },
          { prompt: 'Especificamente eu sou o estudante. (ênfase com が)', answers: ['watashi ga gakusei desu — 私が学生です', 'watashi ga gakusei desu', '私が学生です'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu não entendo francês.', answers: ['watashi wa furansugo ga wakarimasen — 私はフランス語が分かりません', 'watashi wa furansugo ga wakarimasen', '私はフランス語が分かりません'] },
          { prompt: 'O que é interessante? — O filme é interessante. (nova informação)', answers: ['eiga ga omoshiroi desu — 映画が面白いです', 'eiga ga omoshiroi desu', '映画が面白いです'] },
          { prompt: 'Meu amigo (já mencionado) é professor.', answers: ['watashi no tomodachi wa sensei desu — 私の友達は先生です', 'watashi no tomodachi wa sensei desu', '私の友達は先生です'] },
          { prompt: 'Ela gosta de café.', answers: ['kanojo wa koohii ga suki desu — 彼女はコーヒーが好きです', 'kanojo wa koohii ga suki desu', '彼女はコーヒーが好きです'] },
          { prompt: 'Quem é professor? — O Sr. Yamada é professor.', answers: ['yamadasan ga sensei desu — 山田さんが先生です', 'yamadasan ga sensei desu', '山田さんが先生です'] },
        ],
      },
      {
        title: '📖 Compreensão de vocabulário',
        sentences: [
          { prompt: 'は — Que tipo de informação marca?', answers: ['tópico', 'informação já conhecida/estabelecida'] },
          { prompt: 'が — Que tipo de informação marca?', answers: ['sujeito específico', 'informação nova'] },
          { prompt: '分かる — O que significa?', answers: ['entender', 'wakaru'] },
          { prompt: 'Que partícula acompanha 好き (gostar)?', answers: ['が', 'ga'] },
          { prompt: '誰 — O que significa?', answers: ['quem', 'dare'] },
        ],
      },
    ],
  },

  {
    id: 'bas-ja-5', language: 'ja', stage: 'Básico', order: 5,
    title: 'Comparativos e superlativos',
    subtitle: 'もっと、～より、一番 — comparando pessoas e coisas',
    theory: `## Comparativo com より (yori) — "mais... que"

Estrutura: **A は B より [adjetivo]です** = "A é mais [adjetivo] que B"

- 東京は大阪より大きいです。(Toukyou wa Oosaka yori ookii desu.) — Tóquio é maior que Osaka.
- この本はあの本より面白いです。(Kono hon wa ano hon yori omoshiroi desu.) — Este livro é mais interessante que aquele.

## もっと (motto) — "mais" (intensificador, sem comparar com algo específico)

- もっと大きいのがほしいです。(Motto ookii no ga hoshii desu.) — Eu quero um (que seja) maior.
- もっとゆっくり話してください。(Motto yukkuri hanashite kudasai.) — Fale mais devagar, por favor.

## Comparativo de igualdade — ～と同じぐらい

- この本はあの本と同じぐらい面白いです。(Kono hon wa ano hon to onaji gurai omoshiroi desu.) — Este livro é tão interessante quanto aquele.

## Superlativo com 一番 (ichiban) — "o mais"

Estrutura: **[Grupo]で一番[adjetivo]です** = "É o mais [adjetivo] de [grupo]"

- 富士山は日本で一番高い山です。(Fujisan wa Nihon de ichiban takai yama desu.) — O Monte Fuji é a montanha mais alta do Japão.
- クラスで一番背が高いです。(Kurasu de ichiban se ga takai desu.) — É o mais alto da turma.

💡 一番 (ichiban) literalmente significa "número um" — pense nisso como "campeão" da categoria.

## Perguntando comparações — どちらが～ですか

Para perguntar "qual dos dois é mais...", use **どちら** (dochira, "qual dos dois"):

- 犬と猫とどちらが好きですか？(Inu to neko to dochira ga suki desu ka?) — Entre cachorro e gato, qual você gosta mais?
- 犬の方が好きです。(Inu no hou ga suki desu.) — Eu gosto mais de cachorro. (の方 = "o lado de")

### Erros comuns

⚠️ Não existe uma palavra fixa tipo "mais" grudada no adjetivo como em português (mais alto, mais caro) — o comparativo se constrói com **より**, não modificando a forma do adjetivo em si.

## Vocabulário-chave

• 富士山 (ふじさん, Fujisan) — Monte Fuji
• 山 (やま, yama) — montanha
• 背が高い (せがたかい, se ga takai) — ser alto (de estatura)
• ほしい (hoshii) — querer (algo)
• ゆっくり (yukkuri) — devagar`,
    exercises: [
      {
        sentences: [
          { prompt: 'Tóquio é maior que Osaka.', answers: ['toukyou wa oosaka yori ookii desu — 東京は大阪より大きいです', 'toukyou wa oosaka yori ookii desu', '東京は大阪より大きいです'] },
          { prompt: 'Este livro é mais interessante que aquele.', answers: ['kono hon wa ano hon yori omoshiroi desu — この本はあの本より面白いです', 'kono hon wa ano hon yori omoshiroi desu', 'この本はあの本より面白いです'] },
          { prompt: 'Fale mais devagar, por favor.', answers: ['motto yukkuri hanashite kudasai — もっとゆっくり話してください', 'motto yukkuri hanashite kudasai', 'もっとゆっくり話してください'] },
          { prompt: 'O Monte Fuji é a montanha mais alta do Japão.', answers: ['fujisan wa nihon de ichiban takai yama desu — 富士山は日本で一番高い山です', 'fujisan wa nihon de ichiban takai yama desu', '富士山は日本で一番高い山です'] },
          { prompt: 'Entre cachorro e gato, qual você gosta mais?', answers: ['inu to neko to dochira ga suki desu ka — 犬と猫とどちらが好きですか', 'inu to neko to dochira ga suki desu ka', '犬と猫とどちらが好きですか'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu gosto mais de cachorro.', answers: ['inu no hou ga suki desu — 犬の方が好きです', 'inu no hou ga suki desu', '犬の方が好きです'] },
          { prompt: 'Este livro é tão interessante quanto aquele.', answers: ['kono hon wa ano hon to onaji gurai omoshiroi desu — この本はあの本と同じぐらい面白いです', 'kono hon wa ano hon to onaji gurai omoshiroi desu', 'この本はあの本と同じぐらい面白いです'] },
          { prompt: 'É o mais alto da turma.', answers: ['kurasu de ichiban se ga takai desu — クラスで一番背が高いです', 'kurasu de ichiban se ga takai desu', 'クラスで一番背が高いです'] },
          { prompt: 'Eu quero um (que seja) maior.', answers: ['motto ookii no ga hoshii desu — もっと大きいのがほしいです', 'motto ookii no ga hoshii desu', 'もっと大きいのがほしいです'] },
          { prompt: 'Este restaurante é mais barato que aquele.', answers: ['kono resutoran wa ano resutoran yori yasui desu — このレストランはあのレストランより安いです', 'kono resutoran wa ano resutoran yori yasui desu', 'このレストランはあのレストランより安いです'] },
        ],
      },
      {
        sentences: [
          { prompt: 'É o restaurante mais famoso da cidade.', answers: ['machi de ichiban yuumei na resutoran desu — 町で一番有名なレストランです', 'machi de ichiban yuumei na resutoran desu', '町で一番有名なレストランです'] },
          { prompt: 'Este quarto é menor que aquele.', answers: ['kono heya wa ano heya yori chiisai desu — この部屋はあの部屋より小さいです', 'kono heya wa ano heya yori chiisai desu', 'この部屋はあの部屋より小さいです'] },
          { prompt: 'Eu quero mais tempo.', answers: ['motto jikan ga hoshii desu — もっと時間がほしいです', 'motto jikan ga hoshii desu', 'もっと時間がほしいです'] },
          { prompt: 'É o dia mais frio do ano.', answers: ['ichinen de ichiban samui hi desu — 一年で一番寒い日です', 'ichinen de ichiban samui hi desu', '一年で一番寒い日です'] },
          { prompt: 'Entre café e chá, qual você prefere?', answers: ['koohii to ocha to dochira ga suki desu ka — コーヒーとお茶とどちらが好きですか', 'koohii to ocha to dochira ga suki desu ka', 'コーヒーとお茶とどちらが好きですか'] },
        ],
      },
      {
        title: '📖 Compreensão de vocabulário',
        sentences: [
          { prompt: 'より — Para que serve esta partícula?', answers: ['comparativo, "mais que"', 'comparar'] },
          { prompt: '一番 — O que significa literalmente?', answers: ['número um', 'o mais / campeão'] },
          { prompt: 'どちら — O que significa?', answers: ['qual dos dois', 'qual'] },
          { prompt: 'もっと — O que significa?', answers: ['mais', 'motto'] },
          { prompt: '同じぐらい — O que significa?', answers: ['tão... quanto', 'mesma quantidade/grau'] },
        ],
      },
    ],
  },

  // ─── Revisão Básico ─────────────────────────────────────────────────────
  {
    id: 'rev-bas-ja', stage: 'Básico', language: 'ja', order: 99, isReview: true,
    title: 'Revisão — Básico',
    subtitle: 'Verbos ます/ました, ある/いる, は vs が, comparativos',
    theory: null,
    exercises: [
      {
        sentences: [
          { prompt: 'Ontem eu comi sushi e bebi chá.', answers: ['kinou, sushi wo tabete, ocha wo nomimashita — 昨日、寿司を食べて、お茶を飲みました', 'kinou sushi wo tabete ocha wo nomimashita', '昨日、寿司を食べて、お茶を飲みました'] },
          { prompt: 'Há um gato em cima da mesa.', answers: ['tsukue no ue ni neko ga imasu — 机の上に猫がいます', 'tsukue no ue ni neko ga imasu', '机の上に猫がいます'] },
          { prompt: 'Eu gosto de sushi mais que pizza.', answers: ['watashi wa piza yori sushi ga suki desu — 私はピザより寿司が好きです', 'watashi wa piza yori sushi ga suki desu', '私はピザより寿司が好きです'] },
          { prompt: 'O Monte Fuji é a montanha mais famosa do Japão.', answers: ['fujisan wa nihon de ichiban yuumei na yama desu — 富士山は日本で一番有名な山です', 'fujisan wa nihon de ichiban yuumei na yama desu', '富士山は日本で一番有名な山です'] },
          { prompt: 'Quem veio ontem? O Sr. Tanaka veio.', answers: ['dare ga kinou kimashita ka? tanakasan ga kimashita — 誰が昨日来ましたか？田中さんが来ました', 'dare ga kinou kimashita ka tanakasan ga kimashita', '誰が昨日来ましたか？田中さんが来ました'] },
          { prompt: 'Não fui à escola na semana passada.', answers: ['senshuu, gakkou ni ikimasen deshita — 先週、学校に行きませんでした', 'senshuu gakkou ni ikimasen deshita', '先週、学校に行きませんでした'] },
          { prompt: 'Este quarto é maior e mais silencioso que aquele.', answers: ['kono heya wa ano heya yori ookikute, shizuka desu — この部屋はあの部屋より大きくて、静かです', 'kono heya wa ano heya yori ookikute shizuka desu', 'この部屋はあの部屋より大きくて、静かです'] },
        ],
      },
    ],
  },
];
