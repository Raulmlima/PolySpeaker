// Módulos de introdução ao sistema de escrita do Japonês para falantes de PT-BR
// Stage: 'Alfabeto' — aparece antes de Fundamentos

export const MODULES_JA_ALPHABET = [
  {
    id: 'alpha-ja-1',
    language: 'ja',
    stage: 'Alfabeto',
    order: 1,
    title: 'Hiragana — o alfabeto fonético básico',
    subtitle: 'ひらがな: as 46 sílabas essenciais do japonês',
    theory: `## O que é Hiragana (ひらがな)?

O japonês usa **três** sistemas de escrita ao mesmo tempo: hiragana, katakana e kanji. O **hiragana** é o mais fundamental — cada símbolo representa uma sílaba (não uma letra isolada como no português), e é usado para palavras nativas japonesas, partículas gramaticais e terminações de verbos.

No PolySpeaker você digita em **rōmaji** (romanização, ex: "konnichiwa") — sem precisar de teclado japonês — mas verá o hiragana ao lado para ir reconhecendo os símbolos.

### A tabela básica (gojūon — "50 sons")

| | a | i | u | e | o |
|---|---|---|---|---|---|
| — | あ a | い i | う u | え e | お o |
| k | か ka | き ki | く ku | け ke | こ ko |
| s | さ sa | し shi | す su | せ se | そ so |
| t | た ta | ち chi | つ tsu | て te | と to |
| n | な na | に ni | ぬ nu | ね ne | の no |
| h | は ha | ひ hi | ふ fu | へ he | ほ ho |
| m | ま ma | み mi | む mu | め me | も mo |
| y | や ya | — | ゆ yu | — | よ yo |
| r | ら ra | り ri | る ru | れ re | ろ ro |
| w | わ wa | — | — | — | を wo |
| n | ん n | | | | |

⚠️ Repare nas irregularidades: **し** é "shi" (não "si"), **ち** é "chi" (não "ti"), **つ** é "tsu" (não "tu"), **ふ** é "fu" (não "hu").

### As 5 vogais — a base de tudo

As vogais japonesas têm som **puro e curto**, sempre igual: あ(a) い(i) う(u) え(e) お(o) — como em "casa", nunca reduzidas como em português ("ó" no fim de palavra).

- あ (a) — como em "casa"
- い (i) — como em "vida"
- う (u) — como em "uva", mas mais fechado e curto
- え (e) — como em "elefante"
- お (o) — como em "opa"

### ん (n) — a única consoante isolada

**ん** é a única sílaba que é só uma consoante — soa como "n" no final de "pão". Nunca vem no início de uma palavra.

- にほん (nihon) — Japão
- ほん (hon) — livro

### Dakuten e handakuten — sons "sujos" e "p"

Dois pequenos marcadores modificam o som de algumas sílabas:
- **゛(dakuten)**: か→が (ka→ga), さ→ざ (sa→za), た→だ (ta→da), は→ば (ha→ba)
- **゜(handakuten)**: só em は→ぱ (ha→pa)

| Base | Com dakuten | Com handakuten |
|------|-------------|----------------|
| は ha | ば ba | ぱ pa |
| か ka | が ga | — |
| た ta | だ da | — |

- がっこう (gakkou) — escola
- ばか (baka) — bobo/idiota (gíria comum)

💡 Dica de estudo: aprenda o hiragana em blocos de 5 (uma linha por vez) e pratique escrevendo, não só lendo — a memória motora ajuda a fixar.`,
    exercises: [
      {
        sentences: [
          { prompt: 'Como se escreve "olá" em rōmaji?', answers: ['konnichiwa — こんにちは', 'konnichiwa', 'こんにちは'] },
          { prompt: 'Como se escreve "obrigado" em rōmaji?', answers: ['arigatou — ありがとう', 'arigatou', 'arigatō', 'ありがとう'] },
          { prompt: 'Como se escreve "sim" em rōmaji?', answers: ['hai — はい', 'hai', 'はい'] },
          { prompt: 'Como se escreve "não" em rōmaji?', answers: ['iie — いいえ', 'iie', 'いいえ'] },
          { prompt: 'Como se escreve "eu" em rōmaji?', answers: ['watashi — わたし', 'watashi', 'わたし'] },
          { prompt: 'Como se escreve "livro" em rōmaji?', answers: ['hon — ほん', 'hon', 'ほん'] },
          { prompt: 'Como se escreve "Japão" em rōmaji?', answers: ['nihon — にほん', 'nihon', 'にほん'] },
          { prompt: 'Como se escreve "escola" em rōmaji?', answers: ['gakkou — がっこう', 'gakkou', 'gakkō', 'がっこう'] },
          { prompt: 'Como se escreve "bom dia" em rōmaji?', answers: ['ohayou — おはよう', 'ohayou', 'ohayō', 'おはよう'] },
          { prompt: 'Como se escreve "com licença / desculpe" em rōmaji?', answers: ['sumimasen — すみません', 'sumimasen', 'すみません'] },
        ],
      },
    ],
  },

  {
    id: 'alpha-ja-2',
    language: 'ja',
    stage: 'Alfabeto',
    order: 2,
    title: 'Sons compostos e sílabas longas',
    subtitle: 'きゃ、っ、ー — combinações e alongamentos',
    theory: `## Sons compostos (yōon) — ゃ ゅ ょ pequenos

Quando um hiragana pequeno **ゃ (ya)**, **ゅ (yu)** ou **ょ (yo)** vem depois de uma sílaba da coluna "i" (き, し, ち, に, ひ, み, り), eles se fundem num único som:

| Base + ゃ | Base + ゅ | Base + ょ |
|-----------|-----------|-----------|
| きゃ kya | きゅ kyu | きょ kyo |
| しゃ sha | しゅ shu | しょ sho |
| ちゃ cha | ちゅ chu | ちょ cho |
| にゃ nya | にゅ nyu | にょ nyo |

- とうきょう (toukyou) — Tóquio (とう + きょう)
- じしょ (jisho) — dicionário

⚠️ São **uma única sílaba**, não duas — "きゃ" (kya) é pronunciado numa batida só, não "ki-ya".

## っ pequeno — a pausa glotal (consoante dobrada)

Um **つ pequeno (っ)** antes de uma consoante indica uma **pequena pausa** — a consoante seguinte é "dobrada" na pronúncia (como em "carro" vs "caro", mas com pausa, não vibração).

- きって (kitte) — selo (postal) — pausa antes do "t"
- がっこう (gakkou) — escola
- ざっし (zasshi) — revista

💡 Compare: きて (kite, "venha") vs きって (kitte, "selo") — a pausa muda completamente a palavra!

## Vogais longas — quando um som dura o dobro

Uma vogal longa dura **duas batidas** em vez de uma — e muda o significado! Escreve-se repetindo a vogal (ou usando う depois de o/u):

| Curta | Longa | Significado muda |
|-------|-------|-------------------|
| おばさん (obasan) — tia | おばあさん (obaasan) — avó |
| ここ (koko) — aqui | こうこう (koukou) — colégio |
| ゆき (yuki) — neve | ゆうき (yuuki) — coragem |

⚠️ Erro comum de falante de português: tratar vogais longas como "acento decorativo" — na verdade, おばさん e おばあさん são palavras **completamente diferentes** (tia vs avó)!

## O prolongador ー (só no Katakana)

Em palavras escritas em katakana (próximo módulo), o alongamento vocálico é marcado com um travessão **ー**, não repetindo a vogal:
- コーヒー (koohii / kōhī) — café

### Vocabulário-chave desta lição
• 学校 (がっこう, gakkou) — escola
• 東京 (とうきょう, toukyou) — Tóquio
• 辞書 (じしょ, jisho) — dicionário
• 切手 (きって, kitte) — selo
• 雑誌 (ざっし, zasshi) — revista`,
    exercises: [
      {
        sentences: [
          { prompt: 'Como se escreve "Tóquio" em rōmaji?', answers: ['toukyou — とうきょう', 'toukyou', 'tōkyō', 'とうきょう'] },
          { prompt: 'Como se escreve "dicionário" em rōmaji?', answers: ['jisho — じしょ', 'jisho', 'じしょ'] },
          { prompt: 'Como se escreve "escola" em rōmaji? (com pausa)', answers: ['gakkou — がっこう', 'gakkou', 'gakkō', 'がっこう'] },
          { prompt: 'Como se escreve "revista" em rōmaji?', answers: ['zasshi — ざっし', 'zasshi', 'ざっし'] },
          { prompt: 'Como se escreve "café" em rōmaji? (katakana)', answers: ['koohii — コーヒー', 'koohii', 'kōhī', 'コーヒー'] },
          { prompt: 'Como se escreve "avó" em rōmaji? (vogal longa)', answers: ['obaasan — おばあさん', 'obaasan', 'obāsan', 'おばあさん'] },
          { prompt: 'Como se escreve "coragem" em rōmaji?', answers: ['yuuki — ゆうき', 'yuuki', 'yūki', 'ゆうき'] },
          { prompt: 'Como se escreve "selo" (correio) em rōmaji?', answers: ['kitte — きって', 'kitte', 'きって'] },
          { prompt: 'Como se escreve "professor(a)" em rōmaji?', answers: ['sensei — せんせい', 'sensei', 'せんせい'] },
          { prompt: 'Como se escreve "estudante" em rōmaji?', answers: ['gakusei — がくせい', 'gakusei', 'がくせい'] },
        ],
      },
    ],
  },

  {
    id: 'alpha-ja-3',
    language: 'ja',
    stage: 'Alfabeto',
    order: 3,
    title: 'Katakana e os três sistemas de escrita',
    subtitle: 'カタカナ: para palavras estrangeiras, e como os 3 sistemas se combinam',
    theory: `## Katakana (カタカナ) — o segundo alfabeto

O **katakana** representa exatamente os mesmos sons do hiragana, mas com traços mais angulares. É usado para:
- **Palavras estrangeiras** (empréstimos): コーヒー (koohii, café), テレビ (terebi, TV)
- **Nomes de países e pessoas estrangeiras**: ブラジル (Burajiru, Brasil)
- **Onomatopeias e ênfase** (como itálico em português)

| Hiragana | Katakana | Som |
|----------|----------|-----|
| あ | ア | a |
| か | カ | ka |
| さ | サ | sa |
| た | タ | ta |
| な | ナ | na |
| は | ハ | ha |
| ま | マ | ma |
| ら | ラ | ra |

- テレビ (terebi) — televisão (do inglês "television")
- ブラジル (Burajiru) — Brasil
- パン (pan) — pão (do português "pão"! Uma das poucas palavras de origem portuguesa)

💡 Curiosidade: パン (pan, pão) e ボタン (botan, botão) vieram do **português**, trazidas por comerciantes no século XVI!

## Kanji (漢字) — os ideogramas

O **kanji** são caracteres emprestados do chinês, cada um carregando um significado (não apenas som). Um mesmo kanji pode ter **múltiplas leituras** dependendo do contexto — isso é bem diferente do hiragana/katakana, que têm som fixo.

| Kanji | Leituras principais | Significado |
|-------|---------------------|-------------|
| 日 | hi / nichi / jitsu | sol / dia |
| 本 | hon / moto | livro / origem |
| 人 | hito / jin / nin | pessoa |
| 山 | yama / san | montanha |
| 水 | mizu / sui | água |

- 日本 (Nihon) — Japão (literalmente "origem do sol")
- 日本人 (Nihonjin) — pessoa japonesa
- 山田さん (Yamada-san) — Sr./Sra. Yamada (sobrenome comum)

⚠️ Você **não** precisa decorar milhares de kanji para começar a falar japonês — este curso usa principalmente hiragana e rōmaji, introduzindo kanji essenciais aos poucos.

## Como os três sistemas se combinam numa frase real

Uma frase japonesa típica mistura os três:

私は日本語を勉強しています。
**Watashi wa nihongo wo benkyou shite imasu.**
(Eu estudo japonês.)

- 私 (kanji) = eu
- は (hiragana) = partícula de tópico
- 日本語 (kanji) = japonês (idioma)
- を (hiragana) = partícula de objeto
- 勉強 (kanji) = estudo
- しています (hiragana) = forma verbal "estou fazendo"

💡 Padrão geral: **substantivos e raízes de verbos/adjetivos → kanji**; **partículas gramaticais e terminações → hiragana**; **palavras estrangeiras → katakana**.

### Vocabulário-chave
• 日本 (にほん) — Japão
• 日本人 (にほんじん) — pessoa japonesa
• 日本語 (にほんご) — idioma japonês
• ブラジル — Brasil
• パン — pão`,
    exercises: [
      {
        sentences: [
          { prompt: 'Como se escreve "televisão" em rōmaji? (katakana)', answers: ['terebi — テレビ', 'terebi', 'テレビ'] },
          { prompt: 'Como se escreve "Brasil" em rōmaji? (katakana)', answers: ['burajiru — ブラジル', 'burajiru', 'ブラジル'] },
          { prompt: 'Como se escreve "pão" em rōmaji? (katakana, origem portuguesa)', answers: ['pan — パン', 'pan', 'パン'] },
          { prompt: 'O que significa o kanji 日 nesta palavra: 日本 (Nihon)?', answers: ['sol', 'dia', 'origem do sol'] },
          { prompt: 'O que significa 日本人 (Nihonjin)?', answers: ['pessoa japonesa', 'japonês (pessoa)'] },
          { prompt: 'O que significa 日本語 (nihongo)?', answers: ['idioma japonês', 'japonês (idioma)', 'língua japonesa'] },
          { prompt: 'O que significa o kanji 人 (hito/jin)?', answers: ['pessoa'] },
          { prompt: 'O que significa o kanji 山 (yama)?', answers: ['montanha'] },
          { prompt: 'Qual sistema de escrita é usado para palavras estrangeiras?', answers: ['katakana', 'カタカナ'] },
          { prompt: 'Qual sistema de escrita representa partículas gramaticais?', answers: ['hiragana', 'ひらがな'] },
        ],
      },
    ],
  },

  {
    id: 'alpha-ja-4',
    language: 'ja',
    stage: 'Alfabeto',
    order: 4,
    title: 'Números, cores e família',
    subtitle: '一二三四五… + cores + parentesco em kanji e hiragana',
    theory: `## Números (数字 sūji)

| Kanji | Rōmaji | Número |
|-------|--------|--------|
| 一 | ichi | 1 |
| 二 | ni | 2 |
| 三 | san | 3 |
| 四 | yon / shi | 4 |
| 五 | go | 5 |
| 六 | roku | 6 |
| 七 | nana / shichi | 7 |
| 八 | hachi | 8 |
| 九 | kyuu / ku | 9 |
| 十 | juu | 10 |
| 百 | hyaku | 100 |
| 千 | sen | 1.000 |

⚠️ 4 e 7 têm **duas leituras** — use **yon** e **nana** no dia a dia (mais claras ao ouvido); **shi** (4) soa como "morte" (死) e é evitado em contextos sensíveis, similar ao "4" chinês.

**Como formar números maiores:**
- 11 = 十一 (juuichi) — literalmente "dez-um"
- 21 = 二十一 (nijuuichi) — "dois-dez-um"
- 100 = 百 (hyaku)

## Classificadores (josūshi) — um detalhe essencial

⚠️ Como no mandarim, o japonês **exige um classificador** entre o número e o substantivo contado — você não pode simplesmente dizer "três livro".

| Classificador | Uso | Exemplo |
|----------------|-----|---------|
| つ (tsu) | genérico (objetos, até 9) | みっつ (mittsu) — três (coisas) |
| 人 (nin/ri) | pessoas | 三人 (sannin) — três pessoas |
| 本 (hon) | objetos compridos e finos (canetas, garrafas) | 二本 (nihon) — duas (canetas) |
| 匹 (hiki) | animais pequenos | 一匹 (ippiki) — um (animal) |

💡 O classificador genérico つ (tsu) com contagem nativa (hitotsu, futatsu, mittsu...) funciona na maioria das situações informais quando você não souber qual usar.

## Cores (色 iro)

| Kanji/Hiragana | Rōmaji | Cor |
|-----------------|--------|-----|
| 赤い (あかい) | akai | vermelho |
| 青い (あおい) | aoi | azul |
| 黄色い (きいろい) | kiiroi | amarelo |
| 白い (しろい) | shiroi | branco |
| 黒い (くろい) | kuroi | preto |
| 緑 (みどり) | midori | verde |

💡 Repare no "い" no final de várias cores — isso porque são **adjetivos -i** (veremos no módulo de adjetivos), que se conjugam como verbos.

## Família (家族 kazoku)

⚠️ O japonês usa palavras **diferentes** para a própria família e para a família dos outros — é uma questão de humildade/formalidade.

| Sua família | Família de outra pessoa | Significado |
|-------------|--------------------------|-------------|
| 父 (ちち, chichi) | お父さん (otousan) | pai |
| 母 (はは, haha) | お母さん (okaasan) | mãe |
| 兄 (あに, ani) | お兄さん (oniisan) | irmão mais velho |
| 姉 (あね, ane) | お姉さん (oneesan) | irmã mais velha |
| 弟 (おとうと, otouto) | 弟さん (otoutosan) | irmão mais novo |
| 妹 (いもうと, imouto) | 妹さん (imoutosan) | irmã mais nova |

- これは私の母です。(Kore wa watashi no haha desu.) — Esta é minha mãe.
- あなたのお母さんは先生ですか？(Anata no okaasan wa sensei desu ka?) — Sua mãe é professora?`,
    exercises: [
      {
        sentences: [
          { prompt: 'Escreva o número 3 em rōmaji.', answers: ['san — 三', 'san', '三'] },
          { prompt: 'Como se diz "dez" em japonês? (rōmaji)', answers: ['juu — 十', 'juu', 'jū', '十'] },
          { prompt: 'Como se diz "cem" em japonês? (rōmaji)', answers: ['hyaku — 百', 'hyaku', '百'] },
          { prompt: 'O que significa 赤い (akai)?', answers: ['vermelho', 'vermelha'] },
          { prompt: 'Como se diz "azul" em japonês? (rōmaji)', answers: ['aoi — 青い', 'aoi', '青い'] },
          { prompt: 'O que significa 母 (haha)?', answers: ['mãe'] },
          { prompt: 'Como se diz "pai" (falando da própria família) em japonês? (rōmaji)', answers: ['chichi — 父', 'chichi', '父'] },
          { prompt: 'Como se diz "pai de outra pessoa", formal, em japonês? (rōmaji)', answers: ['otousan — お父さん', 'otousan', 'otōsan', 'お父さん'] },
          { prompt: 'O que significa 兄 (ani)?', answers: ['irmão mais velho'] },
          { prompt: 'Qual classificador é usado para pessoas?', answers: ['nin', 'ri', '人', 'nin/ri'] },
        ],
      },
    ],
  },
];
