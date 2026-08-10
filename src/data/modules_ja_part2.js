export const MODULES_JA_PART2 = [
  // ═══════════════════════════════════════════════════════════════
  //  INTERMEDIÁRIO
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'int-ja-1', language: 'ja', stage: 'Intermediário', order: 1,
    title: 'A forma て — conectando ações e fazendo pedidos',
    subtitle: 'てform: a forma mais versátil do verbo japonês',
    theory: `## O que é a forma て (te-kei)?

A forma て é uma das estruturas mais usadas do japonês — conecta ações em sequência, forma pedidos, e é a base para o aspecto contínuo (próximo módulo). Cada grupo de verbo forma o て de um jeito:

| Verbo (dicionário) | Forma て | Grupo |
|---------------------|-----------|-------|
| 食べる (taberu) | 食べて (tabete) | Grupo 2 (ru-verbs): troca る por て |
| 見る (miru) | 見て (mite) | Grupo 2 |
| 飲む (nomu) | 飲んで (nonde) | Grupo 1: mu/nu/bu → んで |
| 行く (iku) | 行って (itte) | Grupo 1: ku → って (exceção: 行く) |
| 話す (hanasu) | 話して (hanashite) | Grupo 1: su → して |
| 買う (kau) | 買って (katte) | Grupo 1: u/tsu/ru → って |
| する (suru) | して (shite) | Irregular |
| 来る (kuru) | 来て (kite) | Irregular |

💡 Não se preocupe em decorar todas as regras agora — vá memorizando o par verbo+forma て conforme aparecem nas frases.

## Conectando ações em sequência

Use て para ligar múltiplas ações, como "e" em português:

- 朝ご飯を食べて、学校に行きます。(Asagohan wo tabete, gakkou ni ikimasu.) — Como o café da manhã e vou para a escola.
- 家に帰って、シャワーを浴びます。(Ie ni kaette, shawaa wo abimasu.) — Volto para casa e tomo banho.

## Pedidos educados — てください

Adicionar **ください** (kudasai) depois da forma て forma um pedido educado ("por favor, faça...").

- ゆっくり話してください。(Yukkuri hanashite kudasai.) — Fale devagar, por favor.
- ここに座ってください。(Koko ni suwatte kudasai.) — Sente-se aqui, por favor.
- ちょっと待ってください。(Chotto matte kudasai.) — Espere um pouco, por favor.

## Pedindo permissão — てもいいですか

- ここに座ってもいいですか？(Koko ni suwatte mo ii desu ka?) — Posso me sentar aqui?
- 写真を撮ってもいいですか？(Shashin wo totte mo ii desu ka?) — Posso tirar uma foto?

## Proibindo — てはいけません

- ここでたばこを吸ってはいけません。(Koko de tabako wo sutte wa ikemasen.) — Não pode fumar aqui.

### Erros comuns

⚠️ Não confunda a forma て com ました (passado) — て não tem tempo verbal sozinha; sua função é **conectar** e servir de base para outras estruturas gramaticais.

## Vocabulário-chave

• 朝ご飯 (あさごはん, asagohan) — café da manhã
• 帰る (かえる, kaeru) — voltar (para casa)
• シャワーを浴びる (shawaa wo abiru) — tomar banho (chuveiro)
• 座る (すわる, suwaru) — sentar
• 待つ (まつ, matsu) — esperar
• 写真を撮る (しゃしんをとる, shashin wo toru) — tirar foto`,
    exercises: [
      {
        sentences: [
          { prompt: 'Como o café da manhã e vou para a escola.', answers: ['asagohan wo tabete, gakkou ni ikimasu — 朝ご飯を食べて、学校に行きます', 'asagohan wo tabete gakkou ni ikimasu', '朝ご飯を食べて、学校に行きます'] },
          { prompt: 'Volto para casa e tomo banho.', answers: ['ie ni kaette, shawaa wo abimasu — 家に帰って、シャワーを浴びます', 'ie ni kaette shawaa wo abimasu', '家に帰って、シャワーを浴びます'] },
          { prompt: 'Fale devagar, por favor.', answers: ['yukkuri hanashite kudasai — ゆっくり話してください', 'yukkuri hanashite kudasai', 'ゆっくり話してください'] },
          { prompt: 'Sente-se aqui, por favor.', answers: ['koko ni suwatte kudasai — ここに座ってください', 'koko ni suwatte kudasai', 'ここに座ってください'] },
          { prompt: 'Espere um pouco, por favor.', answers: ['chotto matte kudasai — ちょっと待ってください', 'chotto matte kudasai', 'ちょっと待ってください'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Posso me sentar aqui?', answers: ['koko ni suwatte mo ii desu ka — ここに座ってもいいですか', 'koko ni suwatte mo ii desu ka', 'ここに座ってもいいですか'] },
          { prompt: 'Posso tirar uma foto?', answers: ['shashin wo totte mo ii desu ka — 写真を撮ってもいいですか', 'shashin wo totte mo ii desu ka', '写真を撮ってもいいですか'] },
          { prompt: 'Não pode fumar aqui.', answers: ['koko de tabako wo sutte wa ikemasen — ここでたばこを吸ってはいけません', 'koko de tabako wo sutte wa ikemasen', 'ここでたばこを吸ってはいけません'] },
          { prompt: 'Compro pão e como em casa.', answers: ['pan wo katte, ie de tabemasu — パンを買って、家で食べます', 'pan wo katte ie de tabemasu', 'パンを買って、家で食べます'] },
          { prompt: 'Escreva seu nome aqui, por favor.', answers: ['koko ni namae wo kaite kudasai — ここに名前を書いてください', 'koko ni namae wo kaite kudasai', 'ここに名前を書いてください'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Vejo um filme e durmo.', answers: ['eiga wo mite, nemasu — 映画を見て、寝ます', 'eiga wo mite nemasu', '映画を見て、寝ます'] },
          { prompt: 'Posso abrir a janela?', answers: ['mado wo akete mo ii desu ka — 窓を開けてもいいですか', 'mado wo akete mo ii desu ka', '窓を開けてもいいですか'] },
          { prompt: 'Não pode entrar aqui.', answers: ['koko ni haitte wa ikemasen — ここに入ってはいけません', 'koko ni haitte wa ikemasen', 'ここに入ってはいけません'] },
          { prompt: 'Estudo japonês e trabalho.', answers: ['nihongo wo benkyou shite, hatarakimasu — 日本語を勉強して、働きます', 'nihongo wo benkyou shite hatarakimasu', '日本語を勉強して、働きます'] },
          { prompt: 'Venha aqui, por favor.', answers: ['koko ni kite kudasai — ここに来てください', 'koko ni kite kudasai', 'ここに来てください'] },
        ],
      },
      {
        title: '📖 Compreensão de vocabulário',
        sentences: [
          { prompt: 'てください — Para que serve?', answers: ['fazer um pedido educado', 'por favor faça'] },
          { prompt: 'てもいいですか — Para que serve?', answers: ['pedir permissão', 'posso...?'] },
          { prompt: 'てはいけません — O que significa?', answers: ['não pode/é proibido', 'proibição'] },
          { prompt: '帰る — O que significa?', answers: ['voltar (para casa)', 'kaeru'] },
          { prompt: '座る — O que significa?', answers: ['sentar', 'suwaru'] },
        ],
      },
    ],
  },

  {
    id: 'int-ja-2', language: 'ja', stage: 'Intermediário', order: 2,
    title: 'Ação em progresso — て + います',
    subtitle: 'O aspecto contínuo: "estou fazendo"',
    theory: `## て + います — ação acontecendo agora

Combine a forma て com **います** para expressar uma ação **em progresso** — equivalente ao gerúndio português ("estou fazendo").

- 今、勉強しています。(Ima, benkyou shite imasu.) — Agora, estou estudando.
- 彼はテレビを見ています。(Kare wa terebi wo mite imasu.) — Ele está vendo televisão.
- 雨が降っています。(Ame ga futte imasu.) — Está chovendo.

## て + います também marca estados resultantes

Com certos verbos (especialmente de mudança de estado), て + います não significa "ação acontecendo", mas sim **o resultado permanece**:

- 結婚しています。(Kekkon shite imasu.) — Sou casado. (o casamento aconteceu, e o estado continua)
- знает (wakatte imasu) → 分かっています。(Wakatte imasu.) — Eu entendo/entendi (e ainda entendo).
- 窓が開いています。(Mado ga aite imasu.) — A janela está aberta. (resultado de ter sido aberta)

💡 A diferença é sutil e depende do verbo: verbos de **ação contínua** (comer, estudar, ver) = "estou fazendo agora"; verbos de **mudança de estado** (casar, abrir, morrer, saber) = "o estado resultante permanece".

## Negativo — て + いません

- 今、勉強していません。(Ima, benkyou shite imasen.) — Agora, não estou estudando.
- 結婚していません。(Kekkon shite imasen.) — Não sou casado.

## Perguntando sobre ações em progresso

- 何をしていますか？(Nani wo shite imasu ka?) — O que você está fazendo?
- どこに住んでいますか？(Doko ni sunde imasu ka?) — Onde você mora? (morar = estado contínuo)

### Erros comuns

⚠️ Não use て+います para ações pontuais únicas que já terminaram — para isso, use ました (passado simples). て+います é sobre continuidade (seja da ação ou do estado resultante).

## Vocabulário-chave

• 結婚する (けっこんする, kekkon suru) — casar
• 住む (すむ, sumu) — morar
• 開く (あく, aku) — abrir (intransitivo)
• 知る (しる, shiru) — saber/conhecer
• 働く (はたらく, hataraku) — trabalhar`,
    exercises: [
      {
        sentences: [
          { prompt: 'Agora estou estudando.', answers: ['ima, benkyou shite imasu — 今、勉強しています', 'ima benkyou shite imasu', '今、勉強しています'] },
          { prompt: 'Ele está vendo televisão.', answers: ['kare wa terebi wo mite imasu — 彼はテレビを見ています', 'kare wa terebi wo mite imasu', '彼はテレビを見ています'] },
          { prompt: 'Está chovendo.', answers: ['ame ga futte imasu — 雨が降っています', 'ame ga futte imasu', '雨が降っています'] },
          { prompt: 'Sou casado.', answers: ['kekkon shite imasu — 結婚しています', 'kekkon shite imasu', '結婚しています'] },
          { prompt: 'A janela está aberta.', answers: ['mado ga aite imasu — 窓が開いています', 'mado ga aite imasu', '窓が開いています'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Agora não estou estudando.', answers: ['ima, benkyou shite imasen — 今、勉強していません', 'ima benkyou shite imasen', '今、勉強していません'] },
          { prompt: 'Não sou casado.', answers: ['kekkon shite imasen — 結婚していません', 'kekkon shite imasen', '結婚していません'] },
          { prompt: 'O que você está fazendo?', answers: ['nani wo shite imasu ka — 何をしていますか', 'nani wo shite imasu ka', '何をしていますか'] },
          { prompt: 'Onde você mora?', answers: ['doko ni sunde imasu ka — どこに住んでいますか', 'doko ni sunde imasu ka', 'どこに住んでいますか'] },
          { prompt: 'Eu entendo japonês.', answers: ['nihongo ga wakatte imasu — 日本語が分かっています', 'nihongo ga wakatte imasu', '日本語が分かっています'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu moro em Tóquio.', answers: ['toukyou ni sunde imasu — 東京に住んでいます', 'toukyou ni sunde imasu', '東京に住んでいます'] },
          { prompt: 'Ela está trabalhando agora.', answers: ['kanojo wa ima hataraite imasu — 彼女は今働いています', 'kanojo wa ima hataraite imasu', '彼女は今働いています'] },
          { prompt: 'Eles estão comendo.', answers: ['karera wa tabete imasu — 彼らは食べています', 'karera wa tabete imasu', '彼らは食べています'] },
          { prompt: 'Eu não conheço este lugar.', answers: ['kono basho wo shirimasen — この場所を知りません', 'kono basho wo shirimasen', 'この場所を知りません'] },
          { prompt: 'A loja está fechada.', answers: ['mise ga shimatte imasu — 店が閉まっています', 'mise ga shimatte imasu', '店が閉まっています'] },
        ],
      },
      {
        title: '📖 Compreensão de vocabulário',
        sentences: [
          { prompt: 'て + います — Cite os dois sentidos possíveis desta estrutura.', answers: ['ação em progresso e estado resultante', 'ação contínua ou resultado permanece'] },
          { prompt: '結婚する — O que significa?', answers: ['casar', 'kekkon suru'] },
          { prompt: '住む — O que significa?', answers: ['morar', 'sumu'] },
          { prompt: 'Como perguntar "onde você mora?"', answers: ['doko ni sunde imasu ka', 'どこに住んでいますか'] },
          { prompt: '知る — O que significa?', answers: ['saber', 'conhecer', 'shiru'] },
        ],
      },
    ],
  },

  {
    id: 'int-ja-3', language: 'ja', stage: 'Intermediário', order: 3,
    title: 'Querer e poder — たい e できる',
    subtitle: 'Expressando desejo e habilidade/possibilidade',
    theory: `## Desejo — a forma たい (tai)

Para dizer "quero fazer algo", troque a terminação ます do verbo por **たい**. たい se conjuga como um adjetivo -i.

| Verbo (ます) | Forma たい | Significado |
|---------------|-------------|-------------|
| 食べます (tabemasu) | 食べたい (tabetai) | quero comer |
| 飲みます (nomimasu) | 飲みたい (nomitai) | quero beber |
| 行きます (ikimasu) | 行きたい (ikitai) | quero ir |
| 見ます (mimasu) | 見たい (mitai) | quero ver |

- 寿司を食べたいです。(Sushi wo tabetai desu.) — Quero comer sushi.
- 日本に行きたいです。(Nihon ni ikitai desu.) — Quero ir ao Japão.
- 行きたくないです。(Ikitakunai desu.) — Não quero ir. (negativo como adjetivo -i)

⚠️ Repare que o **objeto** com たい geralmente usa **が** em vez de を: "寿司**が**食べたいです" também é comum e até mais natural, embora を também seja aceito.

## Possibilidade — verbos potenciais e できる

Existem duas formas de expressar "poder/conseguir fazer":

**1. できる (dekiru)** — anexado ao substantivo de uma ação, ou usado sozinho para "conseguir":
- 日本語ができます。(Nihongo ga dekimasu.) — Consigo (falar) japonês.
- 運転ができません。(Unten ga dekimasen.) — Não consigo dirigir.

**2. Forma potencial do verbo** — cada verbo tem uma conjugação própria para "poder fazer X":

| Verbo | Forma potencial | Significado |
|-------|-------------------|-------------|
| 食べる (taberu) | 食べられる (taberareru) | poder comer |
| 飲む (nomu) | 飲める (nomeru) | poder beber |
| 行く (iku) | 行ける (ikeru) | poder ir |
| 話す (hanasu) | 話せる (hanaseru) | poder falar |

- 辛い物が食べられます。(Karai mono ga taberaremasu.) — Consigo comer coisa picante.
- 日本語が話せます。(Nihongo ga hanasemasu.) — Consigo falar japonês.

💡 Assim como たい, verbos na forma potencial normalmente pedem **が** para o objeto, não を.

### Erros comuns

⚠️ Não confunda できる (poder fazer, capacidade) com もいいです (ter permissão) — できる é sobre **habilidade**, もいいです é sobre **permissão social**.

## Vocabulário-chave

• 運転する (うんてんする, unten suru) — dirigir
• 辛い (からい, karai) — picante
• 泳ぐ (およぐ, oyogu) — nadar
• 歌う (うたう, utau) — cantar`,
    exercises: [
      {
        sentences: [
          { prompt: 'Quero comer sushi.', answers: ['sushi ga tabetai desu — 寿司が食べたいです', 'sushi ga tabetai desu', 'sushi wo tabetai desu', '寿司が食べたいです'] },
          { prompt: 'Quero ir ao Japão.', answers: ['nihon ni ikitai desu — 日本に行きたいです', 'nihon ni ikitai desu', '日本に行きたいです'] },
          { prompt: 'Não quero ir.', answers: ['ikitakunai desu — 行きたくないです', 'ikitakunai desu', '行きたくないです'] },
          { prompt: 'Consigo falar japonês.', answers: ['nihongo ga hanasemasu — 日本語が話せます', 'nihongo ga hanasemasu', '日本語が話せます'] },
          { prompt: 'Não consigo dirigir.', answers: ['unten ga dekimasen — 運転ができません', 'unten ga dekimasen', '運転ができません'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Consigo comer coisa picante.', answers: ['karai mono ga taberaremasu — 辛い物が食べられます', 'karai mono ga taberaremasu', '辛い物が食べられます'] },
          { prompt: 'Quero beber café.', answers: ['koohii ga nomitai desu — コーヒーが飲みたいです', 'koohii ga nomitai desu', 'コーヒーが飲みたいです'] },
          { prompt: 'Consigo nadar.', answers: ['oyogemasu — 泳げます', 'oyogemasu', '泳げます'] },
          { prompt: 'Ela quer ver um filme.', answers: ['kanojo wa eiga ga mitai desu — 彼女は映画が見たいです', 'kanojo wa eiga ga mitai desu', '彼女は映画が見たいです'] },
          { prompt: 'Eu não consigo cantar bem.', answers: ['jouzu ni utaemasen — 上手に歌えません', 'jouzu ni utaemasen', '上手に歌えません'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Quero comprar um livro novo.', answers: ['atarashii hon ga kaitai desu — 新しい本が買いたいです', 'atarashii hon ga kaitai desu', '新しい本が買いたいです'] },
          { prompt: 'Você consegue vir amanhã?', answers: ['ashita koraremasu ka — 明日来られますか', 'ashita koraremasu ka', '明日来られますか'] },
          { prompt: 'Eu quero estudar japonês.', answers: ['nihongo ga benkyou shitai desu — 日本語が勉強したいです', 'nihongo ga benkyou shitai desu', '日本語が勉強したいです'] },
          { prompt: 'Não consigo entender isso.', answers: ['sore ga wakarimasen — それが分かりません', 'sore ga wakarimasen', 'それが分かりません'] },
          { prompt: 'Quero descansar hoje.', answers: ['kyou wa yasumitai desu — 今日は休みたいです', 'kyou wa yasumitai desu', '今日は休みたいです'] },
        ],
      },
      {
        title: '📖 Compreensão de vocabulário',
        sentences: [
          { prompt: 'たい — O que significa e como se conjuga?', answers: ['querer fazer algo, como adjetivo -i', 'desejo'] },
          { prompt: 'できる — O que expressa?', answers: ['capacidade/habilidade', 'conseguir fazer'] },
          { prompt: 'Qual partícula geralmente acompanha verbos com たい ou forma potencial?', answers: ['が', 'ga'] },
          { prompt: '辛い — O que significa?', answers: ['picante', 'karai'] },
          { prompt: '運転する — O que significa?', answers: ['dirigir', 'unten suru'] },
        ],
      },
    ],
  },

  {
    id: 'int-ja-4', language: 'ja', stage: 'Intermediário', order: 4,
    title: 'Condicional — たら',
    subtitle: 'Expressando "se" em japonês',
    theory: `## A forma condicional たら (tara)

A forma mais versátil de "se" em japonês é **たら** — formada a partir do passado (た-form) + ら.

| Verbo (passado) | Forma たら | Significado |
|-------------------|-------------|-------------|
| 食べた (tabeta) | 食べたら (tabetara) | se comer |
| 行った (itta) | 行ったら (ittara) | se for |
| した (shita) | したら (shitara) | se fizer |
| 安い (yasui) → 安かった | 安かったら (yasukattara) | se for barato |

- 雨が降ったら、行きません。(Ame ga futtara, ikimasen.) — Se chover, não vou.
- 時間があったら、映画を見ます。(Jikan ga attara, eiga wo mimasu.) — Se eu tiver tempo, vejo um filme.
- 安かったら、買います。(Yasukattara, kaimasu.) — Se for barato, compro.

## たら também significa "quando" (para eventos únicos/futuros)

- 日本に着いたら、電話します。(Nihon ni tsuitara, denwa shimasu.) — Quando chegar no Japão, ligo.

## Condicional com ば — mais formal, usado para regras gerais

- 押せば、開きます。(Oseba, akimasu.) — Se empurrar, abre.
- 勉強すれば、上手になります。(Benkyou sureba, jouzu ni narimasu.) — Se estudar, fica bom (nisso).

💡 Para o dia a dia, **たら** é a forma mais versátil e mais usada na fala — comece por ela.

## と — condicional para consequências automáticas/naturais

- 春になると、桜が咲きます。(Haru ni naru to, sakura ga sakimasu.) — Quando chega a primavera, as cerejeiras florescem. (relação automática/previsível)

### Comparando as formas de "se/quando"

| Forma | Uso típico |
|-------|-----------|
| たら | condição geral, "se/quando" (mais comum na fala) |
| ば | regras gerais, ditados, condições formais |
| と | consequências automáticas e naturais |

### Erros comuns

⚠️ Não tente traduzir "se" sempre pela mesma palavra — a escolha entre たら/ば/と depende da natureza da condição, mas たら funciona na maioria dos casos do dia a dia.

## Vocabulário-chave

• 着く (つく, tsuku) — chegar
• 電話する (でんわする, denwa suru) — ligar (telefone)
• 押す (おす, osu) — empurrar
• 上手 (じょうず, jouzu) — bom em algo, habilidoso
• 春 (はる, haru) — primavera
• 桜 (さくら, sakura) — cerejeira`,
    exercises: [
      {
        sentences: [
          { prompt: 'Se chover, não vou.', answers: ['ame ga futtara, ikimasen — 雨が降ったら、行きません', 'ame ga futtara ikimasen', '雨が降ったら、行きません'] },
          { prompt: 'Se eu tiver tempo, vejo um filme.', answers: ['jikan ga attara, eiga wo mimasu — 時間があったら、映画を見ます', 'jikan ga attara eiga wo mimasu', '時間があったら、映画を見ます'] },
          { prompt: 'Se for barato, compro.', answers: ['yasukattara, kaimasu — 安かったら、買います', 'yasukattara kaimasu', '安かったら、買います'] },
          { prompt: 'Quando chegar no Japão, ligo.', answers: ['nihon ni tsuitara, denwa shimasu — 日本に着いたら、電話します', 'nihon ni tsuitara denwa shimasu', '日本に着いたら、電話します'] },
          { prompt: 'Se estudar, fica bom nisso.', answers: ['benkyou sureba, jouzu ni narimasu — 勉強すれば、上手になります', 'benkyou sureba jouzu ni narimasu', '勉強すれば、上手になります'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Se empurrar, abre.', answers: ['oseba, akimasu — 押せば、開きます', 'oseba akimasu', '押せば、開きます'] },
          { prompt: 'Quando chega a primavera, as cerejeiras florescem.', answers: ['haru ni naru to, sakura ga sakimasu — 春になると、桜が咲きます', 'haru ni naru to sakura ga sakimasu', '春になると、桜が咲きます'] },
          { prompt: 'Se ele vier, eu como.', answers: ['kare ga kitara, tabemasu — 彼が来たら、食べます', 'kare ga kitara tabemasu', '彼が来たら、食べます'] },
          { prompt: 'Se estiver cansado, descanse.', answers: ['tsukaretara, yasunde kudasai — 疲れたら、休んでください', 'tsukaretara yasunde kudasai', '疲れたら、休んでください'] },
          { prompt: 'Se não entender, pergunte.', answers: ['wakaranakattara, kiite kudasai — 分からなかったら、聞いてください', 'wakaranakattara kiite kudasai', '分からなかったら、聞いてください'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Se tiver dinheiro, viajo.', answers: ['okane ga attara, ryokou shimasu — お金があったら、旅行します', 'okane ga attara ryokou shimasu', 'お金があったら、旅行します'] },
          { prompt: 'Quando terminar o trabalho, vou para casa.', answers: ['shigoto ga owattara, ie ni kaerimasu — 仕事が終わったら、家に帰ります', 'shigoto ga owattara ie ni kaerimasu', '仕事が終わったら、家に帰ります'] },
          { prompt: 'Se for fácil, faço agora.', answers: ['kantan dattara, ima shimasu — 簡単だったら、今します', 'kantan dattara ima shimasu', '簡単だったら、今します'] },
          { prompt: 'Se ela ligar, me avise.', answers: ['kanojo ga denwa shitara, oshiete kudasai — 彼女が電話したら、教えてください', 'kanojo ga denwa shitara oshiete kudasai', '彼女が電話したら、教えてください'] },
          { prompt: 'Quando eu chegar em casa, como.', answers: ['ie ni kaettara, tabemasu — 家に帰ったら、食べます', 'ie ni kaettara tabemasu', '家に帰ったら、食べます'] },
        ],
      },
      {
        title: '📖 Compreensão de vocabulário',
        sentences: [
          { prompt: 'たら — Como se forma?', answers: ['passado do verbo + ら', 'forma た + ら'] },
          { prompt: 'と (condicional) — Para que tipo de situação se usa?', answers: ['consequência automática/natural', 'relação previsível'] },
          { prompt: '着く — O que significa?', answers: ['chegar', 'tsuku'] },
          { prompt: '桜 — O que significa?', answers: ['cerejeira', 'sakura', 'flor de cerejeira'] },
          { prompt: 'Qual forma condicional é mais comum na fala do dia a dia?', answers: ['たら', 'tara'] },
        ],
      },
    ],
  },

  {
    id: 'int-ja-5', language: 'ja', stage: 'Intermediário', order: 5,
    title: 'Sugestões e obrigação',
    subtitle: 'ましょう、ませんか、なければなりません',
    theory: `## Sugestões — ましょう (mashou)

Equivalente a "vamos [fazer]" — usado para propor uma ação conjunta.

- 一緒に行きましょう。(Issho ni ikimashou.) — Vamos juntos!
- 少し休みましょう。(Sukoshi yasumimashou.) — Vamos descansar um pouco.

## Convites educados — ませんか (masen ka)

Literalmente "não [faria]?", mas funciona como um convite mais gentil/aberto do que ましょう (que já assume que a pessoa topa).

- 一緒に映画を見ませんか？(Issho ni eiga wo mimasen ka?) — Que tal vermos um filme juntos?
- お茶を飲みませんか？(Ocha wo nomimasen ka?) — Gostaria de tomar um chá?

💡 ませんか soa mais educado/hesitante que ましょう — bom para convites formais ou quando você não sabe se a pessoa vai aceitar.

## Obrigação — なければなりません (nakereba narimasen)

Estrutura para "tenho que fazer algo" — bastante longa, mas muito usada. Formada a partir da forma negativa do verbo (trocando ない por なければなりません):

| Verbo negativo | + なければなりません |
|------------------|--------------------------|
| 行かない (ikanai) | 行かなければなりません (ikanakereba narimasen) |
| しない (shinai) | しなければなりません (shinakereba narimasen) |
| 食べない (tabenai) | 食べなければなりません (tabenakereba narimasen) |

- 明日、早く起きなければなりません。(Ashita, hayaku okinakereba narimasen.) — Amanhã tenho que acordar cedo.
- 宿題をしなければなりません。(Shukudai wo shinakereba narimasen.) — Tenho que fazer o dever de casa.

💡 Na fala informal, japoneses frequentemente encurtam para **なきゃ** (nakya) — "行かなきゃ" (ikanakya, "tenho que ir") — mas comece pela forma completa, mais clara.

## Ausência de obrigação — なくてもいいです

- 明日、行かなくてもいいです。(Ashita, ikanakutemo ii desu.) — Amanhã, não precisa ir.

### Comparando

| Forma | Significado |
|-------|-------------|
| ましょう | vamos fazer (proposta assumindo aceitação) |
| ませんか | que tal fazer? (convite mais educado) |
| なければなりません | tenho que fazer (obrigação) |
| なくてもいいです | não precisa fazer (ausência de obrigação) |

## Vocabulário-chave

• 一緒に (いっしょに, issho ni) — juntos
• 少し (すこし, sukoshi) — um pouco
• 休む (やすむ, yasumu) — descansar
• 起きる (おきる, okiru) — acordar/levantar
• 早く (はやく, hayaku) — cedo/rápido`,
    exercises: [
      {
        sentences: [
          { prompt: 'Vamos juntos!', answers: ['issho ni ikimashou — 一緒に行きましょう', 'issho ni ikimashou', '一緒に行きましょう'] },
          { prompt: 'Vamos descansar um pouco.', answers: ['sukoshi yasumimashou — 少し休みましょう', 'sukoshi yasumimashou', '少し休みましょう'] },
          { prompt: 'Que tal vermos um filme juntos?', answers: ['issho ni eiga wo mimasen ka — 一緒に映画を見ませんか', 'issho ni eiga wo mimasen ka', '一緒に映画を見ませんか'] },
          { prompt: 'Gostaria de tomar um chá?', answers: ['ocha wo nomimasen ka — お茶を飲みませんか', 'ocha wo nomimasen ka', 'お茶を飲みませんか'] },
          { prompt: 'Amanhã tenho que acordar cedo.', answers: ['ashita, hayaku okinakereba narimasen — 明日、早く起きなければなりません', 'ashita hayaku okinakereba narimasen', '明日、早く起きなければなりません'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Tenho que fazer o dever de casa.', answers: ['shukudai wo shinakereba narimasen — 宿題をしなければなりません', 'shukudai wo shinakereba narimasen', '宿題をしなければなりません'] },
          { prompt: 'Amanhã, não precisa ir.', answers: ['ashita, ikanakutemo ii desu — 明日、行かなくてもいいです', 'ashita ikanakutemo ii desu', '明日、行かなくてもいいです'] },
          { prompt: 'Vamos comer juntos!', answers: ['issho ni tabemashou — 一緒に食べましょう', 'issho ni tabemashou', '一緒に食べましょう'] },
          { prompt: 'Tenho que trabalhar hoje.', answers: ['kyou, hatarakanakereba narimasen — 今日、働かなければなりません', 'kyou hatarakanakereba narimasen', '今日、働かなければなりません'] },
          { prompt: 'Não precisa estudar hoje.', answers: ['kyou wa benkyou shinakutemo ii desu — 今日は勉強しなくてもいいです', 'kyou wa benkyou shinakutemo ii desu', '今日は勉強しなくてもいいです'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Vamos para casa.', answers: ['ie ni kaerimashou — 家に帰りましょう', 'ie ni kaerimashou', '家に帰りましょう'] },
          { prompt: 'Que tal irmos ao parque?', answers: ['kouen ni ikimasen ka — 公園に行きませんか', 'kouen ni ikimasen ka', '公園に行きませんか'] },
          { prompt: 'Tenho que comprar comida.', answers: ['tabemono wo kawanakereba narimasen — 食べ物を買わなければなりません', 'tabemono wo kawanakereba narimasen', '食べ物を買わなければなりません'] },
          { prompt: 'Não precisa vir amanhã.', answers: ['ashita konakutemo ii desu — 明日来なくてもいいです', 'ashita konakutemo ii desu', '明日来なくてもいいです'] },
          { prompt: 'Vamos começar!', answers: ['hajimemashou — 始めましょう', 'hajimemashou', '始めましょう'] },
        ],
      },
      {
        title: '📖 Compreensão de vocabulário',
        sentences: [
          { prompt: 'ましょう vs ませんか — Qual a diferença?', answers: ['ましょう assume aceitação; ませんか é um convite mais educado/hesitante'] },
          { prompt: 'なければなりません — O que expressa?', answers: ['obrigação', 'tenho que fazer'] },
          { prompt: 'なくてもいいです — O que expressa?', answers: ['ausência de obrigação', 'não precisa'] },
          { prompt: '一緒に — O que significa?', answers: ['juntos', 'issho ni'] },
          { prompt: '起きる — O que significa?', answers: ['acordar', 'levantar', 'okiru'] },
        ],
      },
    ],
  },

  // ─── Revisão Intermediário ────────────────────────────────────────────
  {
    id: 'rev-int-ja', stage: 'Intermediário', language: 'ja', order: 99, isReview: true,
    title: 'Revisão — Intermediário',
    subtitle: 'Forma て, て+います, たい/できる, たら, ましょう/なければなりません',
    theory: null,
    exercises: [
      {
        sentences: [
          { prompt: 'Como o café da manhã e depois estudo japonês.', answers: ['asagohan wo tabete, nihongo wo benkyou shimasu — 朝ご飯を食べて、日本語を勉強します', 'asagohan wo tabete nihongo wo benkyou shimasu', '朝ご飯を食べて、日本語を勉強します'] },
          { prompt: 'Agora estou trabalhando, não posso falar.', answers: ['ima, hataraite imasu, hanasemasen — 今、働いています、話せません', 'ima hataraite imasu hanasemasen', '今、働いています、話せません'] },
          { prompt: 'Quero ir ao Japão se eu tiver dinheiro.', answers: ['okane ga attara, nihon ni ikitai desu — お金があったら、日本に行きたいです', 'okane ga attara nihon ni ikitai desu', 'お金があったら、日本に行きたいです'] },
          { prompt: 'Vamos comer juntos amanhã, se você puder.', answers: ['ashita, dekitara, issho ni tabemashou — 明日、できたら、一緒に食べましょう', 'ashita dekitara issho ni tabemashou', '明日、できたら、一緒に食べましょう'] },
          { prompt: 'Tenho que estudar, mas quero descansar.', answers: ['benkyou shinakereba narimasen ga, yasumitai desu — 勉強しなければなりませんが、休みたいです', 'benkyou shinakereba narimasen ga yasumitai desu', '勉強しなければなりませんが、休みたいです'] },
          { prompt: 'Consigo falar japonês, mas não consigo escrever bem.', answers: ['nihongo ga hanasemasu ga, jouzu ni kakemasen — 日本語が話せますが、上手に書けません', 'nihongo ga hanasemasu ga jouzu ni kakemasen', '日本語が話せますが、上手に書けません'] },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  //  AVANÇADO
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'adv-ja-1', language: 'ja', stage: 'Avançado', order: 1,
    title: 'Voz passiva — 受身形',
    subtitle: 'Quando algo "é feito" por alguém, incluindo o passivo de sofrimento',
    theory: `## Formando o passivo

O passivo japonês se forma trocando a terminação do verbo:

| Verbo | Forma passiva | Significado |
|-------|-----------------|-------------|
| 見る (miru) | 見られる (mirareru) | ser visto |
| 食べる (taberu) | 食べられる (taberareru) | ser comido |
| 褒める (homeru) | 褒められる (homerareru) | ser elogiado |
| 話す (hanasu) | 話される (hanasareru) | ser falado |
| 使う (tsukau) | 使われる (tsukawareru) | ser usado |

⚠️ Repare que o passivo de verbos do Grupo 2 (ru-verbs) é **idêntico** à forma potencial (見られる pode significar "pode ser visto" OU "é visto/consegue ver") — o contexto esclarece qual sentido está em jogo.

## Uso comum — passivo "neutro"

- この本は多くの人に読まれています。(Kono hon wa ooku no hito ni yomarete imasu.) — Este livro é lido por muitas pessoas.
- 英語は世界中で話されています。(Eigo wa sekaijuu de hanasarete imasu.) — O inglês é falado no mundo todo.

## O passivo de "sofrimento" (迷惑の受身) — uma peculiaridade japonesa

O japonês tem um uso do passivo **sem equivalente direto** em português: expressar que algo desagradável aconteceu a você, mesmo com verbos intransitivos.

- 雨に降られました。(Ame ni furaremashita.) — Fui pego pela chuva. (literalmente "fui chovido")
- 友達に来られて、勉強できませんでした。(Tomodachi ni korarete, benkyou dekimasen deshita.) — Meu amigo veio (inesperadamente) e não consegui estudar.

💡 Essa construção comunica que o falante foi **afetado negativamente** por uma ação de outra pessoa (ou até da chuva!) — é uma das nuances mais "japonesas" da língua, sem tradução literal direta.

## Estrutura com agente (por quem)

Use **に** para marcar quem praticou a ação (equivalente ao "por" em português):

- 私は先生に褒められました。(Watashi wa sensei ni homeraremashita.) — Fui elogiado pelo professor.
- 犬に噛まれました。(Inu ni kamaremashita.) — Fui mordido por um cachorro.

### Erros comuns

⚠️ Não use o passivo em japonês tão livremente quanto em português — frases com sujeito claro geralmente preferem a voz ativa; o passivo é mais comum em notícias, textos formais, ou para o uso de "sofrimento" mencionado acima.

## Vocabulário-chave

• 褒める (ほめる, homeru) — elogiar
• 使う (つかう, tsukau) — usar
• 世界中 (せかいじゅう, sekaijuu) — mundo todo
• 噛む (かむ, kamu) — morder`,
    exercises: [
      {
        sentences: [
          { prompt: 'Este livro é lido por muitas pessoas.', answers: ['kono hon wa ooku no hito ni yomarete imasu — この本は多くの人に読まれています', 'kono hon wa ooku no hito ni yomarete imasu', 'この本は多くの人に読まれています'] },
          { prompt: 'O inglês é falado no mundo todo.', answers: ['eigo wa sekaijuu de hanasarete imasu — 英語は世界中で話されています', 'eigo wa sekaijuu de hanasarete imasu', '英語は世界中で話されています'] },
          { prompt: 'Fui pego pela chuva.', answers: ['ame ni furaremashita — 雨に降られました', 'ame ni furaremashita', '雨に降られました'] },
          { prompt: 'Fui elogiado pelo professor.', answers: ['watashi wa sensei ni homeraremashita — 私は先生に褒められました', 'watashi wa sensei ni homeraremashita', '私は先生に褒められました'] },
          { prompt: 'Fui mordido por um cachorro.', answers: ['inu ni kamaremashita — 犬に噛まれました', 'inu ni kamaremashita', '犬に噛まれました'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Meu amigo veio e não consegui estudar.', answers: ['tomodachi ni korarete, benkyou dekimasen deshita — 友達に来られて、勉強できませんでした', 'tomodachi ni korarete benkyou dekimasen deshita', '友達に来られて、勉強できませんでした'] },
          { prompt: 'Este produto é usado por muitas empresas.', answers: ['kono seihin wa ooku no kaisha ni tsukawarete imasu — この製品は多くの会社に使われています', 'kono seihin wa ooku no kaisha ni tsukawarete imasu', 'この製品は多くの会社に使われています'] },
          { prompt: 'Fui chamado pelo chefe.', answers: ['joushi ni yobaremashita — 上司に呼ばれました', 'joushi ni yobaremashita', '上司に呼ばれました'] },
          { prompt: 'Esta música é amada por muitas pessoas.', answers: ['kono uta wa ooku no hito ni aisarete imasu — この歌は多くの人に愛されています', 'kono uta wa ooku no hito ni aisarete imasu', 'この歌は多くの人に愛されています'] },
          { prompt: 'Fui criticado pelo professor.', answers: ['sensei ni shikararemashita — 先生に叱られました', 'sensei ni shikararemashita', '先生に叱られました'] },
        ],
      },
      {
        title: '📖 Compreensão de vocabulário',
        sentences: [
          { prompt: 'Como se forma o passivo de verbos que terminam em る (Grupo 2)?', answers: ['troca る por られる', 'られる'] },
          { prompt: 'O que é o "passivo de sofrimento" (迷惑の受身)?', answers: ['expressa que o falante foi afetado negativamente por algo, mesmo com verbos intransitivos'] },
          { prompt: 'Qual partícula marca quem praticou a ação no passivo?', answers: ['に', 'ni'] },
          { prompt: '褒める — O que significa?', answers: ['elogiar', 'homeru'] },
          { prompt: '噛む — O que significa?', answers: ['morder', 'kamu'] },
        ],
      },
    ],
  },

  {
    id: 'adv-ja-2', language: 'ja', stage: 'Avançado', order: 2,
    title: 'Forma causativa — 使役形',
    subtitle: 'Fazer alguém fazer algo, ou deixar alguém fazer algo',
    theory: `## Formando o causativo

O causativo japonês expressa "fazer/mandar alguém fazer" ou "deixar/permitir alguém fazer":

| Verbo | Forma causativa | Significado |
|-------|--------------------|-------------|
| 食べる (taberu) | 食べさせる (tabesaseru) | fazer/deixar comer |
| 行く (iku) | 行かせる (ikaseru) | fazer/deixar ir |
| する (suru) | させる (saseru) | fazer/deixar fazer |
| 来る (kuru) | 来させる (kosaseru) | fazer/deixar vir |

## Dois sentidos: obrigar vs. permitir

O mesmo causativo pode significar "obrigar" ou "permitir", dependendo do contexto e das partículas:

- 先生は学生に宿題をさせました。(Sensei wa gakusei ni shukudai wo sasemashita.) — O professor fez os alunos fazerem o dever de casa. (obrigação)
- 母は子供を公園で遊ばせました。(Haha wa kodomo wo kouen de asobasemashita.) — A mãe deixou a criança brincar no parque. (permissão)

💡 Verbos **transitivos** (com objeto direto, como 食べる) usam **に** para a pessoa causada; verbos **intransitivos** (como 遊ぶ, brincar) usam **を**.

## Causativo-passivo — させられる

Combinando causativo + passivo, expressa que **você foi forçado** a fazer algo (sem escolha):

- 野菜を食べさせられました。(Yasai wo tabesaseraremashita.) — Fui forçado a comer vegetais. (não queria, mas tive que)
- 毎日残業させられます。(Mainichi zangyou saseraremasu.) — Sou forçado a fazer hora extra todo dia.

## Pedindo permissão com させてください

Uma forma muito educada de pedir para VOCÊ MESMO fazer algo (não confundir com てください, que é pedir para o OUTRO fazer):

- 説明させてください。(Setsumei sasete kudasai.) — Deixe-me explicar. / Permita-me explicar.
- 私にやらせてください。(Watashi ni yarasete kudasai.) — Deixe-me fazer isso.

### Comparando

| Forma | Quem faz a ação | Significado |
|-------|-------------------|-------------|
| てください | o ouvinte | "Por favor, faça X" |
| させてください | quem fala | "Deixe-me fazer X" |
| させる | outra pessoa (causada) | "Fazer/deixar alguém fazer X" |
| させられる | quem fala (forçado) | "Fui forçado a fazer X" |

## Vocabulário-chave

• 遊ぶ (あそぶ, asobu) — brincar
• 野菜 (やさい, yasai) — vegetal/verdura
• 残業する (ざんぎょうする, zangyou suru) — fazer hora extra
• 説明する (せつめいする, setsumei suru) — explicar`,
    exercises: [
      {
        sentences: [
          { prompt: 'O professor fez os alunos fazerem o dever de casa.', answers: ['sensei wa gakusei ni shukudai wo sasemashita — 先生は学生に宿題をさせました', 'sensei wa gakusei ni shukudai wo sasemashita', '先生は学生に宿題をさせました'] },
          { prompt: 'A mãe deixou a criança brincar no parque.', answers: ['haha wa kodomo wo kouen de asobasemashita — 母は子供を公園で遊ばせました', 'haha wa kodomo wo kouen de asobasemashita', '母は子供を公園で遊ばせました'] },
          { prompt: 'Fui forçado a comer vegetais.', answers: ['yasai wo tabesaseraremashita — 野菜を食べさせられました', 'yasai wo tabesaseraremashita', '野菜を食べさせられました'] },
          { prompt: 'Deixe-me explicar.', answers: ['setsumei sasete kudasai — 説明させてください', 'setsumei sasete kudasai', '説明させてください'] },
          { prompt: 'Deixe-me fazer isso.', answers: ['watashi ni yarasete kudasai — 私にやらせてください', 'watashi ni yarasete kudasai', '私にやらせてください'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Sou forçado a fazer hora extra todo dia.', answers: ['mainichi zangyou saseraremasu — 毎日残業させられます', 'mainichi zangyou saseraremasu', '毎日残業させられます'] },
          { prompt: 'O chefe me fez trabalhar no domingo.', answers: ['joushi wa watashi ni nichiyoubi ni hatarakasemashita — 上司は私に日曜日に働かせました', 'joushi wa watashi ni nichiyoubi ni hatarakasemashita', '上司は私に日曜日に働かせました'] },
          { prompt: 'Deixe-me ir com você.', answers: ['watashi wo issho ni ikasete kudasai — 私を一緒に行かせてください', 'watashi wo issho ni ikasete kudasai', '私を一緒に行かせてください'] },
          { prompt: 'A professora fez os alunos lerem o livro.', answers: ['sensei wa gakusei ni hon wo yomasemashita — 先生は学生に本を読ませました', 'sensei wa gakusei ni hon wo yomasemashita', '先生は学生に本を読ませました'] },
          { prompt: 'Fui forçado a esperar duas horas.', answers: ['nijikan matasaremashita — 二時間待たされました', 'nijikan matasaremashita', '二時間待たされました'] },
        ],
      },
      {
        title: '📖 Compreensão de vocabulário',
        sentences: [
          { prompt: 'させる — Cite os dois sentidos possíveis.', answers: ['fazer/obrigar alguém, ou deixar/permitir alguém'] },
          { prompt: 'させられる — O que expressa?', answers: ['ser forçado a fazer algo'] },
          { prompt: 'させてください — Para que serve?', answers: ['pedir permissão para VOCÊ mesmo fazer algo', 'deixe-me fazer'] },
          { prompt: '遊ぶ — O que significa?', answers: ['brincar', 'asobu'] },
          { prompt: '残業する — O que significa?', answers: ['fazer hora extra', 'zangyou suru'] },
        ],
      },
    ],
  },

  {
    id: 'adv-ja-3', language: 'ja', stage: 'Avançado', order: 3,
    title: 'Conjunções complexas — ので、のに、けど',
    subtitle: 'Causa, contraste inesperado e "mas" no dia a dia',
    theory: `## ので (node) — "porque", mais suave/formal que から

Explica uma razão, geralmente com tom mais **objetivo e educado** que から (kara), sendo comum em pedidos e desculpas.

- 雨が降っているので、行きません。(Ame ga futte iru node, ikimasen.) — Como está chovendo, não vou.
- 忙しいので、後で電話します。(Isogashii node, ato de denwa shimasu.) — Como estou ocupado, ligo depois.

💡 Use ので ao dar desculpas ou explicações educadas; から soa mais direto/assertivo — bom entre amigos, menos ideal com superiores.

## のに (noni) — "apesar de/mesmo assim", com tom de surpresa ou frustração

Expressa um resultado **contrário ao esperado**, muitas vezes com uma pitada de decepção ou espanto.

- 勉強したのに、テストに落ちました。(Benkyou shita noni, tesuto ni ochimashita.) — Apesar de ter estudado, fui reprovado no teste.
- 高いのに、質が悪いです。(Takai noni, shitsu ga warui desu.) — Apesar de caro, a qualidade é ruim.

⚠️ のに carrega uma nuance **emocional** de contrariedade que から/ので não têm — não use のに para simplesmente listar fatos contrastantes neutros.

## けど / が (kedo/ga) — "mas", conectando frases

**けど** (informal, mais comum na fala) e **が** (formal, mais comum na escrita) conectam duas frases com sentido de contraste, sem a carga emocional de のに:

- この店は安いですが、おいしいです。(Kono mise wa yasui desu ga, oishii desu.) — Esta loja é barata, mas é gostosa.
- 忙しいけど、頑張ります。(Isogashii kedo, ganbarimasu.) — Estou ocupado, mas vou me esforçar.

## Comparando os três "mas/porque"

| Palavra | Sentido | Tom |
|---------|---------|-----|
| ので | porque (razão) | neutro/educado |
| のに | apesar de (resultado inesperado) | surpresa/frustração |
| けど/が | mas (contraste simples) | neutro |

### Erros comuns

⚠️ Trocar ので por のに muda completamente o sentido: "雨が降っているので、行きません" (não vou PORQUE está chovendo) é bem diferente de "雨が降っているのに、行きます" (vou MESMO chovendo, apesar disso).

## Vocabulário-chave

• 忙しい (いそがしい, isogashii) — ocupado
• 落ちる (おちる, ochiru) — cair/ser reprovado
• 質 (しつ, shitsu) — qualidade
• 頑張る (がんばる, ganbaru) — se esforçar`,
    exercises: [
      {
        sentences: [
          { prompt: 'Como está chovendo, não vou.', answers: ['ame ga futte iru node, ikimasen — 雨が降っているので、行きません', 'ame ga futte iru node ikimasen', '雨が降っているので、行きません'] },
          { prompt: 'Como estou ocupado, ligo depois.', answers: ['isogashii node, ato de denwa shimasu — 忙しいので、後で電話します', 'isogashii node ato de denwa shimasu', '忙しいので、後で電話します'] },
          { prompt: 'Apesar de ter estudado, fui reprovado no teste.', answers: ['benkyou shita noni, tesuto ni ochimashita — 勉強したのに、テストに落ちました', 'benkyou shita noni tesuto ni ochimashita', '勉強したのに、テストに落ちました'] },
          { prompt: 'Apesar de caro, a qualidade é ruim.', answers: ['takai noni, shitsu ga warui desu — 高いのに、質が悪いです', 'takai noni shitsu ga warui desu', '高いのに、質が悪いです'] },
          { prompt: 'Esta loja é barata, mas é gostosa.', answers: ['kono mise wa yasui desu ga, oishii desu — この店は安いですが、おいしいです', 'kono mise wa yasui desu ga oishii desu', 'この店は安いですが、おいしいです'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Estou ocupado, mas vou me esforçar.', answers: ['isogashii kedo, ganbarimasu — 忙しいけど、頑張ります', 'isogashii kedo ganbarimasu', '忙しいけど、頑張ります'] },
          { prompt: 'Como não tenho tempo, não posso ir.', answers: ['jikan ga nai node, ikemasen — 時間がないので、行けません', 'jikan ga nai node ikemasen', '時間がないので、行けません'] },
          { prompt: 'Apesar de ser caro, eu comprei.', answers: ['takai noni, kaimashita — 高いのに、買いました', 'takai noni kaimashita', '高いのに、買いました'] },
          { prompt: 'Ele é jovem, mas trabalha muito.', answers: ['kare wa wakai desu ga, yoku hatarakimasu — 彼は若いですが、よく働きます', 'kare wa wakai desu ga yoku hatarakimasu', '彼は若いですが、よく働きます'] },
          { prompt: 'Como estava cansado, dormi cedo.', answers: ['tsukareta node, hayaku nemashita — 疲れたので、早く寝ました', 'tsukareta node hayaku nemashita', '疲れたので、早く寝ました'] },
        ],
      },
      {
        title: '📖 Compreensão de vocabulário',
        sentences: [
          { prompt: 'ので vs から — Qual a diferença de tom?', answers: ['ので é mais suave/educado; から é mais direto/assertivo'] },
          { prompt: 'のに — Que tipo de nuance carrega, além de "apesar de"?', answers: ['surpresa ou frustração', 'contrariedade'] },
          { prompt: 'けど vs が — Qual é mais formal?', answers: ['が é mais formal; けど é mais informal/falado'] },
          { prompt: '頑張る — O que significa?', answers: ['se esforçar', 'ganbaru'] },
          { prompt: '忙しい — O que significa?', answers: ['ocupado', 'isogashii'] },
        ],
      },
    ],
  },

  {
    id: 'adv-ja-4', language: 'ja', stage: 'Avançado', order: 4,
    title: 'Keigo — linguagem honorífica básica',
    subtitle: 'Sonkeigo e kenjougo: elevando o outro, rebaixando a si mesmo',
    theory: `## O que é Keigo (敬語)?

Você já usa uma forma de keigo desde o início: です/ます é o **teineigo** (linguagem educada padrão). Mas existem dois níveis adicionais, usados em contextos profissionais/formais: **sonkeigo** (elevar o outro) e **kenjougo** (rebaixar a si mesmo por humildade).

## Sonkeigo (尊敬語) — elevando quem você respeita

Usado para as **ações da outra pessoa** (cliente, superior, alguém de status mais alto):

| Verbo comum | Sonkeigo | Significado |
|--------------|-----------|-------------|
| 行く/来る (iku/kuru) | いらっしゃる (irassharu) | ir/vir (honorífico) |
| 食べる (taberu) | 召し上がる (meshiagaru) | comer (honorífico) |
| 言う (iu) | おっしゃる (ossharu) | dizer (honorífico) |
| する (suru) | なさる (nasaru) | fazer (honorífico) |
| 見る (miru) | ご覧になる (goran ni naru) | ver (honorífico) |

- 社長はもういらっしゃいました。(Shachou wa mou irasshaimashita.) — O presidente já chegou.
- どうぞ召し上がってください。(Douzo meshiagatte kudasai.) — Por favor, sirva-se (coma).

## Kenjougo (謙譲語) — rebaixando suas próprias ações

Usado para **suas próprias ações**, quando elas afetam ou são direcionadas a alguém de status mais alto — comunica humildade.

| Verbo comum | Kenjougo | Significado |
|--------------|-----------|-------------|
| 行く/来る (iku/kuru) | 参る (mairu) | ir/vir (humilde) |
| 見る (miru) | 拝見する (haiken suru) | ver (humilde) |
| 言う (iu) | 申す (mousu) | dizer (humilde) |
| する (suru) | いたす (itasu) | fazer (humilde) |
| もらう (morau) | いただく (itadaku) | receber (humilde) |

- 明日、そちらに参ります。(Ashita, sochira ni mairimasu.) — Amanhã, irei até aí. (humilde, falando com superior)
- 資料を拝見しました。(Shiryou wo haiken shimashita.) — Vi o material. (humilde)

💡 **いただきます** (itadakimasu, "vou receber com humildade") é a expressão que se diz antes de comer — literalmente reconhecendo humildemente a comida recebida.

## Regra prática: quem faz a ação?

| Quem age | Nível | Exemplo |
|----------|-------|---------|
| A outra pessoa (superior/cliente) | Sonkeigo | いらっしゃる, 召し上がる |
| Você mesmo, afetando um superior | Kenjougo | 参る, いたす |
| Qualquer um, contexto neutro-educado | Teineigo (です/ます) | 行きます, します |

### Erros comuns

⚠️ Nunca use sonkeigo para suas próprias ações (soa arrogante) nem kenjougo para as ações de outra pessoa (soa como se estivesse rebaixando quem você deveria respeitar) — a direção importa mais que a "educação" da palavra em si.

## Vocabulário-chave

• 社長 (しゃちょう, shachou) — presidente (de empresa)
• 資料 (しりょう, shiryou) — material/documento
• いただきます (itadakimasu) — expressão dita antes de comer`,
    exercises: [
      {
        sentences: [
          { prompt: 'O presidente já chegou. (sonkeigo)', answers: ['shachou wa mou irasshaimashita — 社長はもういらっしゃいました', 'shachou wa mou irasshaimashita', '社長はもういらっしゃいました'] },
          { prompt: 'Por favor, sirva-se. (sonkeigo, comer)', answers: ['douzo meshiagatte kudasai — どうぞ召し上がってください', 'douzo meshiagatte kudasai', 'どうぞ召し上がってください'] },
          { prompt: 'Amanhã, irei até aí. (kenjougo, humilde)', answers: ['ashita, sochira ni mairimasu — 明日、そちらに参ります', 'ashita sochira ni mairimasu', '明日、そちらに参ります'] },
          { prompt: 'Vi o material. (kenjougo, humilde)', answers: ['shiryou wo haiken shimashita — 資料を拝見しました', 'shiryou wo haiken shimashita', '資料を拝見しました'] },
          { prompt: 'O que o presidente disse? (sonkeigo)', answers: ['shachou wa nan to osshaimashita ka — 社長は何とおっしゃいましたか', 'shachou wa nan to osshaimashita ka', '社長は何とおっしゃいましたか'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Farei isso. (kenjougo, humilde)', answers: ['sore wo itashimasu — それをいたします', 'sore wo itashimasu', 'それをいたします'] },
          { prompt: 'O professor vai ver isso. (sonkeigo)', answers: ['sensei wa sore wo goran ni narimasu — 先生はそれをご覧になります', 'sensei wa sore wo goran ni narimasu', '先生はそれをご覧になります'] },
          { prompt: 'Que nível se usa para as ações de um superior?', answers: ['sonkeigo', '尊敬語'] },
          { prompt: 'Que nível se usa para suas próprias ações, com humildade?', answers: ['kenjougo', '謙譲語'] },
          { prompt: 'O que se diz antes de comer, em japonês?', answers: ['itadakimasu — いただきます', 'itadakimasu', 'いただきます'] },
        ],
      },
      {
        title: '📖 Compreensão de vocabulário',
        sentences: [
          { prompt: 'Sonkeigo — Para as ações de quem se usa?', answers: ['da outra pessoa (superior/cliente)'] },
          { prompt: 'Kenjougo — Para as ações de quem se usa?', answers: ['de você mesmo, com humildade'] },
          { prompt: 'いらっしゃる — O que significa e que nível é?', answers: ['ir/vir/estar, sonkeigo'] },
          { prompt: '参る — O que significa e que nível é?', answers: ['ir/vir, kenjougo (humilde)'] },
          { prompt: '資料 — O que significa?', answers: ['material', 'documento', 'shiryou'] },
        ],
      },
    ],
  },

  {
    id: 'adv-ja-5', language: 'ja', stage: 'Avançado', order: 5,
    title: 'Expressões idiomáticas e onomatopeias',
    subtitle: 'Ditados, gírias e o rico sistema de onomatopeias japonesas',
    theory: `## Expressões idiomáticas (慣用句 kan'youku)

| Expressão | Rōmaji | Significado literal | Sentido real |
|-----------|--------|----------------------|----------------|
| 猫の手も借りたい | neko no te mo karitai | "quero até a pata do gato" | estar extremamente ocupado |
| 頭が痛い | atama ga itai | "cabeça dói" | ter um grande problema/preocupação |
| 口が軽い | kuchi ga karui | "boca leve" | não guardar segredo, fofoqueiro |
| 顔が広い | kao ga hiroi | "rosto largo" | conhecer muita gente, bem relacionado |
| 目が回る | me ga mawaru | "os olhos giram" | estar extremamente ocupado/tonto |

- 今日は猫の手も借りたいほど忙しいです。(Kyou wa neko no te mo karitai hodo isogashii desu.) — Hoje estou tão ocupado que até a pata do gato ajudaria.

## Onomatopeias — giongo e gitaigo

O japonês tem um dos sistemas de onomatopeia mais ricos do mundo, dividido em duas categorias:

**Giongo (擬音語)** — sons reais:
| Onomatopeia | Som |
|-------------|-----|
| ワンワン (wanwan) | latido de cachorro |
| ニャーニャー (nyaanyaa) | miado de gato |
| ガタガタ (gatagata) | barulho de tremor/chocalho |

**Gitaigo (擬態語)** — estados/sensações (sem som real, mas descrevendo uma condição):
| Gitaigo | Sentido |
|---------|---------|
| ワクワク (wakuwaku) | animado, ansioso (positivamente) |
| ドキドキ (dokidoki) | coração acelerado (nervoso/excitado) |
| イライラ (iraira) | irritado |
| ぐっすり (gussuri) | dormir profundamente |
| ぺらぺら (perapera) | falar fluentemente |

- 明日の旅行がワクワクします。(Ashita no ryokou ga wakuwaku shimasu.) — Estou animado com a viagem de amanhã.
- 日本語がぺらぺらです。(Nihongo ga perapera desu.) — (Ele/ela) fala japonês fluentemente.
- 緊張して、ドキドキしています。(Kinchou shite, dokidoki shite imasu.) — Estou nervoso, meu coração está acelerado.

💡 Gitaigo são usados o tempo todo na fala natural — dominar alguns poucos (ワクワク, ドキドキ, ぐっすり, ぺらぺら) já deixa seu japonês muito mais natural.

## Expressões do dia a dia

- 大丈夫です。(Daijoubu desu.) — Está tudo bem / Não se preocupe / Não, obrigado (recusa educada).
- しょうがない。(Shouganai.) — Não tem jeito / Não há o que fazer.
- お疲れ様でした。(Otsukaresama deshita.) — Obrigado pelo esforço (dito ao final do trabalho/tarefa).

### Vocabulário-chave

• 忙しい (いそがしい, isogashii) — ocupado
• 緊張する (きんちょうする, kinchou suru) — ficar nervoso/tenso
• 疲れる (つかれる, tsukareru) — cansar-se`,
    exercises: [
      {
        sentences: [
          { prompt: 'Hoje estou extremamente ocupado. (expressão idiomática)', answers: ['kyou wa neko no te mo karitai hodo isogashii desu — 今日は猫の手も借りたいほど忙しいです', 'kyou wa neko no te mo karitai hodo isogashii desu', '今日は猫の手も借りたいほど忙しいです'] },
          { prompt: 'Estou animado com a viagem de amanhã.', answers: ['ashita no ryokou ga wakuwaku shimasu — 明日の旅行がワクワクします', 'ashita no ryokou ga wakuwaku shimasu', '明日の旅行がワクワクします'] },
          { prompt: 'Ele fala japonês fluentemente.', answers: ['kare wa nihongo ga perapera desu — 彼は日本語がぺらぺらです', 'kare wa nihongo ga perapera desu', '彼は日本語がぺらぺらです'] },
          { prompt: 'Estou nervoso, meu coração está acelerado.', answers: ['kinchou shite, dokidoki shite imasu — 緊張して、ドキドキしています', 'kinchou shite dokidoki shite imasu', '緊張して、ドキドキしています'] },
          { prompt: 'Está tudo bem, não se preocupe.', answers: ['daijoubu desu — 大丈夫です', 'daijoubu desu', '大丈夫です'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Não tem jeito, não há o que fazer.', answers: ['shouganai — しょうがない', 'shouganai', 'しょうがない'] },
          { prompt: 'Obrigado pelo esforço. (fim do trabalho)', answers: ['otsukaresama deshita — お疲れ様でした', 'otsukaresama deshita', 'お疲れ様でした'] },
          { prompt: 'Dormi profundamente ontem.', answers: ['kinou gussuri nemashita — 昨日ぐっすり寝ました', 'kinou gussuri nemashita', '昨日ぐっすり寝ました'] },
          { prompt: 'Estou irritado hoje.', answers: ['kyou wa iraira shite imasu — 今日はイライラしています', 'kyou wa iraira shite imasu', '今日はイライラしています'] },
          { prompt: 'Ela conhece muita gente. (expressão idiomática)', answers: ['kanojo wa kao ga hiroi desu — 彼女は顔が広いです', 'kanojo wa kao ga hiroi desu', '彼女は顔が広いです'] },
        ],
      },
      {
        title: '📖 Compreensão de vocabulário',
        sentences: [
          { prompt: 'Giongo vs gitaigo — Qual a diferença?', answers: ['giongo é som real; gitaigo é estado/sensação sem som'] },
          { prompt: 'ワクワク — O que expressa?', answers: ['animação/ansiedade positiva', 'wakuwaku'] },
          { prompt: 'ドキドキ — O que expressa?', answers: ['coração acelerado', 'nervosismo/excitação'] },
          { prompt: '猫の手も借りたい — O que significa na prática?', answers: ['estar extremamente ocupado'] },
          { prompt: 'お疲れ様でした — Quando se usa?', answers: ['ao final do trabalho/tarefa, agradecendo o esforço'] },
        ],
      },
    ],
  },

  // ─── Revisão Avançado ──────────────────────────────────────────────────
  {
    id: 'rev-adv-ja', stage: 'Avançado', language: 'ja', order: 99, isReview: true,
    title: 'Revisão — Avançado',
    subtitle: 'Passivo, causativo, ので/のに/けど, keigo, expressões idiomáticas',
    theory: null,
    exercises: [
      {
        sentences: [
          { prompt: 'Fui pego pela chuva, mas cheguei a tempo.', answers: ['ame ni furaremashita ga, jikan doori ni tsukimashita — 雨に降られましたが、時間通りに着きました', 'ame ni furaremashita ga jikan doori ni tsukimashita', '雨に降られましたが、時間通りに着きました'] },
          { prompt: 'O professor me fez estudar mais, apesar de eu já estar cansado.', answers: ['tsukarete iru noni, sensei wa motto benkyou sasemashita — 疲れているのに、先生はもっと勉強させました', 'tsukarete iru noni sensei wa motto benkyou sasemashita', '疲れているのに、先生はもっと勉強させました'] },
          { prompt: 'Como estava ocupado, não pude ir, mas queria ir.', answers: ['isogashikatta node ikemasen deshita ga, ikitakatta desu — 忙しかったので行けませんでしたが、行きたかったです', 'isogashikatta node ikemasen deshita ga ikitakatta desu', '忙しかったので行けませんでしたが、行きたかったです'] },
          { prompt: 'O presidente disse que vai vir amanhã. (sonkeigo)', answers: ['shachou wa ashita irassharu to osshaimashita — 社長は明日いらっしゃるとおっしゃいました', 'shachou wa ashita irassharu to osshaimashita', '社長は明日いらっしゃるとおっしゃいました'] },
          { prompt: 'Estou tão ocupado que até a pata do gato ajudaria, e estou nervoso também.', answers: ['neko no te mo karitai hodo isogashiku, kinchou mo shite imasu — 猫の手も借りたいほど忙しく、緊張もしています', 'neko no te mo karitai hodo isogashiku kinchou mo shite imasu', '猫の手も借りたいほど忙しく、緊張もしています'] },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  //  VARIADOS
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'var-ja-1', language: 'ja', stage: 'Variados', order: 1,
    title: 'Treino geral — nível iniciante a básico',
    subtitle: 'Saudações, pronomes, números, adjetivos e ações cotidianas',
    theory: null,
    exercises: [
      {
        sentences: [
          { prompt: 'Muito prazer, eu sou o Lucas.', answers: ['hajimemashite, watashi wa rukasu desu — はじめまして、私はルカスです', 'hajimemashite watashi wa rukasu desu', 'はじめまして、私はルカスです'] },
          { prompt: 'Eu sou estudante e ela é professora.', answers: ['watashi wa gakusei de, kanojo wa sensei desu — 私は学生で、彼女は先生です', 'watashi wa gakusei de kanojo wa sensei desu', '私は学生で、彼女は先生です'] },
          { prompt: 'Que horas são? — São três e meia.', answers: ['nanji desu ka? sanji han desu — 何時ですか？三時半です', 'nanji desu ka sanji han desu', '何時ですか？三時半です'] },
          { prompt: 'Hoje é segunda-feira e amanhã é terça.', answers: ['kyou wa getsuyoubi de, ashita wa kayoubi desu — 今日は月曜日で、明日は火曜日です', 'kyou wa getsuyoubi de ashita wa kayoubi desu', '今日は月曜日で、明日は火曜日です'] },
          { prompt: 'Este livro é interessante mas caro.', answers: ['kono hon wa omoshiroi desu ga, takai desu — この本は面白いですが、高いです', 'kono hon wa omoshiroi desu ga takai desu', 'この本は面白いですが、高いです'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Como pão todo dia e bebo café.', answers: ['mainichi pan wo tabete, koohii wo nomimasu — 毎日パンを食べて、コーヒーを飲みます', 'mainichi pan wo tabete koohii wo nomimasu', '毎日パンを食べて、コーヒーを飲みます'] },
          { prompt: 'Vou para a escola de ônibus.', answers: ['basu de gakkou ni ikimasu — バスで学校に行きます', 'basu de gakkou ni ikimasu', 'バスで学校に行きます'] },
          { prompt: 'Há um gato em cima da mesa.', answers: ['tsukue no ue ni neko ga imasu — 机の上に猫がいます', 'tsukue no ue ni neko ga imasu', '机の上に猫がいます'] },
          { prompt: 'Ontem comi sushi com meu amigo.', answers: ['kinou, tomodachi to sushi wo tabemashita — 昨日、友達と寿司を食べました', 'kinou tomodachi to sushi wo tabemashita', '昨日、友達と寿司を食べました'] },
          { prompt: 'Eu não bebo café à noite.', answers: ['yoru, koohii wo nomimasen — 夜、コーヒーを飲みません', 'yoru koohii wo nomimasen', '夜、コーヒーを飲みません'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Este quarto é grande e silencioso.', answers: ['kono heya wa ookikute, shizuka desu — この部屋は大きくて、静かです', 'kono heya wa ookikute shizuka desu', 'この部屋は大きくて、静かです'] },
          { prompt: 'Eu gosto de sushi mais que pizza.', answers: ['watashi wa piza yori sushi ga suki desu — 私はピザより寿司が好きです', 'watashi wa piza yori sushi ga suki desu', '私はピザより寿司が好きです'] },
          { prompt: 'Por favor, fale mais devagar.', answers: ['motto yukkuri hanashite kudasai — もっとゆっくり話してください', 'motto yukkuri hanashite kudasai', 'もっとゆっくり話してください'] },
          { prompt: 'Posso me sentar aqui?', answers: ['koko ni suwatte mo ii desu ka — ここに座ってもいいですか', 'koko ni suwatte mo ii desu ka', 'ここに座ってもいいですか'] },
          { prompt: 'Vamos comer juntos amanhã.', answers: ['ashita, issho ni tabemashou — 明日、一緒に食べましょう', 'ashita issho ni tabemashou', '明日、一緒に食べましょう'] },
        ],
      },
    ],
  },

  {
    id: 'var-ja-2', language: 'ja', stage: 'Variados', order: 2,
    title: 'Treino geral — nível intermediário',
    subtitle: 'て-form, condicional, desejo e capacidade',
    theory: null,
    exercises: [
      {
        sentences: [
          { prompt: 'Agora estou estudando japonês.', answers: ['ima, nihongo wo benkyou shite imasu — 今、日本語を勉強しています', 'ima nihongo wo benkyou shite imasu', '今、日本語を勉強しています'] },
          { prompt: 'Se chover amanhã, não vou ao parque.', answers: ['ashita ame ga futtara, kouen ni ikimasen — 明日雨が降ったら、公園に行きません', 'ashita ame ga futtara kouen ni ikimasen', '明日雨が降ったら、公園に行きません'] },
          { prompt: 'Quero ir ao Japão no ano que vem.', answers: ['rainen, nihon ni ikitai desu — 来年、日本に行きたいです', 'rainen nihon ni ikitai desu', '来年、日本に行きたいです'] },
          { prompt: 'Consigo falar japonês, mas não muito bem.', answers: ['nihongo ga hanasemasu ga, amari jouzu ja nai desu — 日本語が話せますが、あまり上手じゃないです', 'nihongo ga hanasemasu ga amari jouzu janai desu', '日本語が話せますが、あまり上手じゃないです'] },
          { prompt: 'Tenho que trabalhar hoje, mas quero descansar.', answers: ['kyou hatarakanakereba narimasen ga, yasumitai desu — 今日働かなければなりませんが、休みたいです', 'kyou hatarakanakereba narimasen ga yasumitai desu', '今日働かなければなりませんが、休みたいです'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Como o café da manhã e vou trabalhar.', answers: ['asagohan wo tabete, shigoto ni ikimasu — 朝ご飯を食べて、仕事に行きます', 'asagohan wo tabete shigoto ni ikimasu', '朝ご飯を食べて、仕事に行きます'] },
          { prompt: 'Onde você mora? — Eu moro em Tóquio.', answers: ['doko ni sunde imasu ka? toukyou ni sunde imasu — どこに住んでいますか？東京に住んでいます', 'doko ni sunde imasu ka toukyou ni sunde imasu', 'どこに住んでいますか？東京に住んでいます'] },
          { prompt: 'Quando eu chegar em casa, vou comer.', answers: ['ie ni kaettara, tabemasu — 家に帰ったら、食べます', 'ie ni kaettara tabemasu', '家に帰ったら、食べます'] },
          { prompt: 'Que tal irmos ao cinema amanhã?', answers: ['ashita, eiga wo mi ni ikimasen ka — 明日、映画を見に行きませんか', 'ashita eiga wo mi ni ikimasen ka', '明日、映画を見に行きませんか'] },
          { prompt: 'Não pode fumar aqui.', answers: ['koko de tabako wo sutte wa ikemasen — ここでたばこを吸ってはいけません', 'koko de tabako wo sutte wa ikemasen', 'ここでたばこを吸ってはいけません'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Tóquio é maior que Osaka, mas eu gosto de Osaka mais.', answers: ['toukyou wa oosaka yori ookii desu ga, watashi wa oosaka no hou ga suki desu — 東京は大阪より大きいですが、私は大阪の方が好きです', 'toukyou wa oosaka yori ookii desu ga watashi wa oosaka no hou ga suki desu', '東京は大阪より大きいですが、私は大阪の方が好きです'] },
          { prompt: 'Se tiver tempo, vamos tomar um café.', answers: ['jikan ga attara, koohii wo nomimashou — 時間があったら、コーヒーを飲みましょう', 'jikan ga attara koohii wo nomimashou', '時間があったら、コーヒーを飲みましょう'] },
          { prompt: 'Não consigo comer coisa picante.', answers: ['karai mono ga taberaremasen — 辛い物が食べられません', 'karai mono ga taberaremasen', '辛い物が食べられません'] },
          { prompt: 'Estou animado com a viagem de amanhã.', answers: ['ashita no ryokou ga wakuwaku shimasu — 明日の旅行がワクワクします', 'ashita no ryokou ga wakuwaku shimasu', '明日の旅行がワクワクします'] },
          { prompt: 'Sente-se aqui, por favor, e espere um pouco.', answers: ['koko ni suwatte, sukoshi matte kudasai — ここに座って、少し待ってください', 'koko ni suwatte sukoshi matte kudasai', 'ここに座って、少し待ってください'] },
        ],
      },
    ],
  },

  {
    id: 'var-ja-3', language: 'ja', stage: 'Variados', order: 3,
    title: 'Situações reais — viagem, trabalho e cotidiano',
    subtitle: 'Conversas do dia a dia no Japão',
    theory: null,
    exercises: [
      {
        sentences: [
          { prompt: 'Com licença, onde fica a estação?', answers: ['sumimasen, eki wa doko desu ka — すみません、駅はどこですか', 'sumimasen eki wa doko desu ka', 'すみません、駅はどこですか'] },
          { prompt: 'Quanto custa isso?', answers: ['kore wa ikura desu ka — これはいくらですか', 'kore wa ikura desu ka', 'これはいくらですか'] },
          { prompt: 'Uma mesa para duas pessoas, por favor.', answers: ['futari desu — 二人です', 'futari desu', '二人です', 'futaridesu'] },
          { prompt: 'Isto está muito gostoso!', answers: ['kore wa totemo oishii desu — これはとてもおいしいです', 'kore wa totemo oishii desu', 'これはとてもおいしいです'] },
          { prompt: 'Aceita cartão de crédito?', answers: ['kurejitto kaado wa tsukaemasu ka — クレジットカードは使えますか', 'kurejitto kaado wa tsukaemasu ka', 'クレジットカードは使えますか'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Amanhã tenho uma reunião importante.', answers: ['ashita, taisetsu na kaigi ga arimasu — 明日、大切な会議があります', 'ashita taisetsu na kaigi ga arimasu', '明日、大切な会議があります'] },
          { prompt: 'Fui elogiado pelo chefe hoje.', answers: ['kyou, joushi ni homeraremashita — 今日、上司に褒められました', 'kyou joushi ni homeraremashita', '今日、上司に褒められました'] },
          { prompt: 'Este trabalho é difícil, mas interessante.', answers: ['kono shigoto wa muzukashii desu ga, omoshiroi desu — この仕事は難しいですが、面白いです', 'kono shigoto wa muzukashii desu ga omoshiroi desu', 'この仕事は難しいですが、面白いです'] },
          { prompt: 'Posso enviar um e-mail depois?', answers: ['ato de meeru wo okutte mo ii desu ka — 後でメールを送ってもいいですか', 'ato de meeru wo okutte mo ii desu ka', '後でメールを送ってもいいですか'] },
          { prompt: 'Tenho que terminar isso hoje.', answers: ['kyou, kore wo owaranakereba narimasen — 今日、これを終わらなければなりません', 'kyou kore wo owaranakereba narimasen', '今日、これを終わらなければなりません'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Como se diz isso em japonês?', answers: ['kore wa nihongo de nan to iimasu ka — これは日本語で何と言いますか', 'kore wa nihongo de nan to iimasu ka', 'これは日本語で何と言いますか'] },
          { prompt: 'Desculpe, pode repetir?', answers: ['sumimasen, mou ichido itte kudasai — すみません、もう一度言ってください', 'sumimasen mou ichido itte kudasai', 'すみません、もう一度言ってください'] },
          { prompt: 'Estou aprendendo japonês há um ano.', answers: ['ichinenkan, nihongo wo benkyou shite imasu — 一年間、日本語を勉強しています', 'ichinenkan nihongo wo benkyou shite imasu', '一年間、日本語を勉強しています'] },
          { prompt: 'Foi um prazer conhecê-lo.', answers: ['oaidekite ureshikatta desu — お会いできて嬉しかったです', 'oaidekite ureshikatta desu', 'お会いできて嬉しかったです'] },
          { prompt: 'Obrigado pelo esforço hoje.', answers: ['kyou wa otsukaresama deshita — 今日はお疲れ様でした', 'kyou wa otsukaresama deshita', '今日はお疲れ様でした'] },
        ],
      },
    ],
  },
];
