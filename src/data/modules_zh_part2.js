export const MODULES_ZH_PART2 = [
  // ═══════════════════════════════════════════════════════════════
  //  INTERMEDIÁRIO
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'int-zh-1', language: 'zh', stage: 'Intermediário', order: 1,
    title: 'Ação completada — 了 (le)',
    subtitle: 'Indicar que algo já aconteceu ou acabou',
    theory: `## 了 (le) — aspecto completado, não "passado"

### Erro comum de quem fala português
Em português pensamos em **tempo verbal** (passado, presente, futuro). Em mandarim os verbos **não mudam de forma** — não existe conjugação. Em vez disso, usa-se **aspecto**: partículas que mostram se a ação está completa, em andamento, ou foi vivida alguma vez. 了 (le) é a mais comum, mas **não é "passado"** — é um marcador de **conclusão**. Uma ação no futuro também pode levar 了 se for vista como concluída em relação a outro momento.

| Estrutura | Exemplo | Pinyin | Tradução |
|-----------|---------|--------|----------|
| Verbo + 了 | 吃了 | chī le | comeu / comi |
| Verbo + 了 + Objeto | 我吃了饭 | wǒ chī le fàn | eu comi |
| Negativa: 没 + Verbo | 我没吃饭 | wǒ méi chī fàn | eu não comi |
| Pergunta | 你吃了吗？ | nǐ chī le ma? | você já comeu? |

⚠️ **Erro comum**: tratar 了 como equivalente do pretérito perfeito português e colocá-lo em toda frase no passado. Mandarim usa 了 apenas quando quer marcar **conclusão** ou **mudança**; frases descritivas no passado (ex.: "ela era bonita") não precisam de 了 algum, pois lá o verbo "ser" (是) muitas vezes nem aparece com aspecto marcado.

⚠️ **Erro comum #2**: negar 了 com 不 (bù). Isso está **errado**:
- ✅ "wǒ méi qù" (我没去 — não fui)
- ❌ "wǒ bù qù le"

Use sempre **没 (méi)** para negar uma ação concluída — e o 了 desaparece na negativa.

## 了 no final da frase — mudança de estado
Quando 了 aparece no **final da frase** (não logo após o verbo), indica uma mudança de estado ou situação nova, não necessariamente uma ação terminada:
- 他累了 → tā lèi le → ele ficou cansado (mudança de estado)
- 天气冷了 → tiānqì lěng le → o tempo esfriou
- 我饿了 → wǒ è le → fiquei com fome (estava bem, agora não)
- 她长大了 → tā zhǎng dà le → ela cresceu
- 我们到了 → wǒmen dào le → chegamos (mudança: estávamos a caminho, agora chegamos)

💡 **Dica**: pergunte-se "isto descreve uma transformação de A para B?" Se sim, 了 no final da frase é natural mesmo sem verbo de ação óbvio.

## Perguntar e responder sobre o passado
| Expressão | Pinyin | Caractere |
|-----------|--------|-----------|
| já | yǐjīng | 已经 |
| ainda não | hái méi | 还没 |
| ontem | zuótiān | 昨天 |
| anteontem | qiántiān | 前天 |
| há pouco | gāng | 刚 |

### Exemplos adicionais
- 我刚到家 → wǒ gāng dào jiā → acabei de chegar em casa
- 她还没起床 → tā hái méi qǐ chuáng → ela ainda não se levantou
- 你看了新闻了吗？ → nǐ kàn le xīnwén le ma? → você já viu as notícias?
- 我前天买了一本书 → wǒ qiántiān mǎi le yī běn shū → eu comprei um livro anteontem
- 飞机已经起飞了 → fēijī yǐjīng qǐfēi le → o avião já decolou

## Vocabulário-chave

• 新闻 (xīnwén) — notícias
• 电影院 (diànyǐngyuàn) — cinema
• 起飞 (qǐfēi) — decolar
• 懂 (dǒng) — entender
• 长大 (zhǎng dà) — crescer`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu já comi.', answers: ['wǒ yǐjīng chī le — 我已经吃了', 'wǒ yǐjīng chī le', 'wo yijing chi le', '我已经吃了'] },
          { prompt: 'Ela foi ao supermercado.', answers: ['tā qù chāoshì le — 她去超市了', 'tā qù chāoshì le', 'ta qu chaoshi le', '她去超市了'] },
          { prompt: 'Ele comprou um carro novo.', answers: ['tā mǎi le yī liàng xīn chē — 他买了一辆新车', 'tā mǎi le yī liàng xīn chē', 'ta mai le yi liang xin che', '他买了一辆新车'] },
          { prompt: 'Você comeu?', answers: ['nǐ chī le ma — 你吃了吗', 'nǐ chī le ma', 'ni chi le ma', '你吃了吗'] },
          { prompt: 'Ainda não comi.', answers: ['wǒ hái méi chī — 我还没吃', 'wǒ hái méi chī', 'wo hai mei chi', '我还没吃'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu não fui ao cinema ontem.', answers: ['zuótiān wǒ méi qù diànyǐngyuàn — 昨天我没去电影院', 'zuótiān wǒ méi qù diànyǐngyuàn', 'zuotian wo mei qu dianyingyuan', '昨天我没去电影院'] },
          { prompt: 'Ela aprendeu mandarim.', answers: ['tā xué le pǔtōnghuà — 她学了普通话', 'tā xué le pǔtōnghuà', 'ta xue le putonghua', '她学了普通话'] },
          { prompt: 'Eles já chegaram.', answers: ['tāmen yǐjīng dào le — 他们已经到了', 'tāmen yǐjīng dào le', 'tamen yijing dao le', '他们已经到了'] },
          { prompt: 'Eu li aquele livro.', answers: ['wǒ kàn le nà běn shū — 我看了那本书', 'wǒ kàn le nà běn shū', 'wo kan le na ben shu', '我看了那本书'] },
          { prompt: 'Ele ficou cansado.', answers: ['tā lèi le — 他累了', 'tā lèi le', 'ta lei le', '他累了'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Você já terminou o trabalho?', answers: ['nǐ gōngzuò zuò wán le ma — 你工作做完了吗', 'nǐ gōngzuò zuò wán le ma', 'ni gongzuo zuo wan le ma', '你工作做完了吗'] },
          { prompt: 'Ainda não terminei.', answers: ['wǒ hái méi zuò wán — 我还没做完', 'wǒ hái méi zuò wán', 'wo hai mei zuo wan', '我还没做完'] },
          { prompt: 'Ela bebeu muito ontem à noite.', answers: ['tā zuótiān wǎnshang hē le hěn duō — 她昨天晚上喝了很多', 'tā zuótiān wǎnshang hē le hěn duō', 'ta zuotian wanshang he le hen duo', '她昨天晚上喝了很多'] },
          { prompt: 'O tempo esfriou.', answers: ['tiānqì lěng le — 天气冷了', 'tiānqì lěng le', 'tianqi leng le', '天气冷了'] },
          { prompt: 'Eu já entendi.', answers: ['wǒ yǐjīng dǒng le — 我已经懂了', 'wǒ yǐjīng dǒng le', 'wo yijing dong le', '我已经懂了'] },
        ],
      },
      {
        title: '🀄 Reconhecimento de caracteres',
        sentences: [
          { prompt: '了 — Para que serve esta partícula?', answers: ['ação completada', 'passado', 'completed action', 'past'] },
          { prompt: '已经 — O que significa?', answers: ['já', 'already'] },
          { prompt: '没 — O que significa este caractere?', answers: ['não', 'não ter', 'negação', 'no', 'not'] },
          { prompt: '还没 — O que significa?', answers: ['ainda não', 'not yet'] },
          { prompt: '昨天 — O que significa?', answers: ['ontem', 'yesterday'] },
        ],
      },
    ],
  },

  {
    id: 'int-zh-2', language: 'zh', stage: 'Intermediário', order: 2,
    title: 'Verbos modais',
    subtitle: 'poder, querer, dever — néng, kěyǐ, yīnggāi, xiǎng, yào',
    theory: `## Verbos modais em mandarim

| Modal | Pinyin | Caractere | Significado |
|-------|--------|-----------|-------------|
| poder (capacidade) | néng | 能 | ser capaz de |
| poder (permissão) | kěyǐ | 可以 | ter permissão |
| dever / precisar | yīnggāi | 应该 | obrigação moral |
| querer (desejo) | xiǎng | 想 | sentir vontade |
| querer / precisar (forte) | yào | 要 | querer / precisar |
| ter que (obrigação) | bìxū | 必须 | ser obrigado |
| não precisar | bù yòng | 不用 | não há necessidade |
| saber fazer (habilidade aprendida) | huì | 会 | saber (por aprendizado) |

💡 **Diferença entre 能, 可以 e 会**: os três podem ser traduzidos como "poder", mas têm matizes diferentes — 能 (néng) fala de capacidade física/circunstancial, 可以 (kěyǐ) fala de permissão, e 会 (huì) fala de uma habilidade **aprendida** (idiomas, dirigir, tocar instrumento). "Eu sei falar mandarim" usa 会 (wǒ huì shuō pǔtōnghuà), não 能, porque é uma habilidade adquirida.

## Estrutura: Modal + Verbo principal

| Exemplo | Pinyin | Tradução |
|---------|--------|---------|
| 我能说普通话 | wǒ néng shuō pǔtōnghuà | Eu consigo falar mandarim |
| 你可以进来 | nǐ kěyǐ jìn lái | Você pode entrar |
| 她应该吃早饭 | tā yīnggāi chī zǎofàn | Ela deveria tomar café |
| 我想去中国 | wǒ xiǎng qù Zhōngguó | Eu quero ir à China |
| 你不用来 | nǐ bù yòng lái | Você não precisa vir |
| 我会说法语 | wǒ huì shuō fǎyǔ | Eu sei falar francês |

## Negação dos modais
| Modal | Negativa | Significado |
|-------|----------|-------------|
| néng | bù néng (不能) | não pode/consegue |
| kěyǐ | bù kěyǐ (不可以) | não pode/proibido |
| yīnggāi | bù yīnggāi (不应该) | não deveria |
| huì | bù huì (不会) | não sabe (fazer) |
| yào | bù yào (不要) | não quer / "não faça isso!" (ordem) |

⚠️ **Erro comum**: 不要 (bù yào) não é simplesmente "não quero" — em frases imperativas funciona como **"não faça isso"**. "你不要担心" (nǐ bù yào dānxīn) = "não se preocupe", não "você não vai se preocupar".

⚠️ **Erro comum #2**: usar 能 onde o correto é 会 (ou vice-versa). Se a frase é sobre uma habilidade aprendida (idioma, instrumento, dirigir), use 会. Se é sobre capacidade física/situacional momentânea ("consigo levantar esse peso", "consigo sair hoje"), use 能.

### Exemplos adicionais
- 你会游泳吗？ → nǐ huì yóuyǒng ma? → você sabe nadar?
- 我现在不能说话 → wǒ xiànzài bù néng shuō huà → não posso falar agora (estou ocupado)
- 这里不可以拍照 → zhèlǐ bù kěyǐ pāizhào → aqui não se pode fotografar (proibido)
- 你不要迟到 → nǐ bù yào chídào → não se atrase
- 我们必须遵守规则 → wǒmen bìxū zūnshǒu guīzé → nós temos que seguir as regras

## Vocabulário-chave

• 担心 (dānxīn) — preocupar-se
• 迟到 (chídào) — atrasar-se
• 规则 (guīzé) — regra
• 游泳 (yóuyǒng) — nadar
• 拍照 (pāizhào) — fotografar
• 弹吉他 (tán jítā) — tocar violão`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu consigo falar mandarim.', answers: ['wǒ néng shuō pǔtōnghuà — 我能说普通话', 'wǒ néng shuō pǔtōnghuà', 'wo neng shuo putonghua', '我能说普通话'] },
          { prompt: 'Você pode entrar.', answers: ['nǐ kěyǐ jìn lái — 你可以进来', 'nǐ kěyǐ jìn lái', 'ni keyi jin lai', '你可以进来'] },
          { prompt: 'Aqui não se pode fumar.', answers: ['zhèlǐ bù kěyǐ chōuyān — 这里不可以抽烟', 'zhèlǐ bù kěyǐ chōuyān', 'zheli bu keyi chouyan', '这里不可以抽烟'] },
          { prompt: 'Você deveria tomar café da manhã.', answers: ['nǐ yīnggāi chī zǎofàn — 你应该吃早饭', 'nǐ yīnggāi chī zǎofàn', 'ni yinggai chi zaofan', '你应该吃早饭'] },
          { prompt: 'Eu quero ir à China.', answers: ['wǒ xiǎng qù Zhōngguó — 我想去中国', 'wǒ xiǎng qù Zhōngguó', 'wo xiang qu Zhongguo', '我想去中国'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Você precisa descansar mais.', answers: ['nǐ yīnggāi duō xiūxi — 你应该多休息', 'nǐ yīnggāi duō xiūxi', 'ni yinggai duo xiuxi', '你应该多休息'] },
          { prompt: 'Ele tem que trabalhar amanhã.', answers: ['tā míngtiān bìxū gōngzuò — 他明天必须工作', 'tā míngtiān bìxū gōngzuò', 'ta mingtian bixu gongzuo', '他明天必须工作'] },
          { prompt: 'Você não precisa me ajudar.', answers: ['nǐ bù yòng bāng wǒ — 你不用帮我', 'nǐ bù yòng bāng wǒ', 'ni bu yong bang wo', '你不用帮我'] },
          { prompt: 'Ela não consegue dormir.', answers: ['tā bù néng shuì jiào — 她不能睡觉', 'tā bù néng shuì jiào', 'ta bu neng shui jiao', '她不能睡觉'] },
          { prompt: 'Posso sentar aqui?', answers: ['wǒ kěyǐ zuò zhèlǐ ma — 我可以坐这里吗', 'wǒ kěyǐ zuò zhèlǐ ma', 'wo keyi zuo zheli ma', '我可以坐这里吗'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Você não deveria dizer isso.', answers: ['nǐ bù yīnggāi shuō zhège — 你不应该说这个', 'nǐ bù yīnggāi shuō zhège', 'ni bu yinggai shuo zhege', '你不应该说这个'] },
          { prompt: 'Eu preciso ir agora.', answers: ['wǒ xiànzài yào zǒu le — 我现在要走了', 'wǒ xiànzài yào zǒu le', 'wo xianzai yao zou le', '我现在要走了'] },
          { prompt: 'Ele quer aprender a tocar violão.', answers: ['tā xiǎng xué tán jítā — 他想学弹吉他', 'tā xiǎng xué tán jítā', 'ta xiang xue tan jita', '他想学弹吉他'] },
          { prompt: 'Nós temos que terminar isso hoje.', answers: ['wǒmen jīntiān bìxū zuò wán — 我们今天必须做完', 'wǒmen jīntiān bìxū zuò wán', 'women jintian bixu zuo wan', '我们今天必须做完'] },
          { prompt: 'Ela consegue falar três línguas.', answers: ['tā néng shuō sān zhǒng yǔyán — 她能说三种语言', 'tā néng shuō sān zhǒng yǔyán', 'ta neng shuo san zhong yuyan', '她能说三种语言'] },
        ],
      },
      {
        title: '🀄 Reconhecimento de caracteres',
        sentences: [
          { prompt: '能 — O que significa este caractere?', answers: ['poder', 'conseguir', 'can', 'be able to'] },
          { prompt: '可以 — O que significa?', answers: ['poder', 'pode', 'may', 'allowed'] },
          { prompt: '应该 — O que significa?', answers: ['dever', 'deveria', 'should', 'ought to'] },
          { prompt: '必须 — O que significa?', answers: ['ter que', 'obrigado', 'must', 'have to'] },
          { prompt: '想 — O que significa este caractere?', answers: ['querer', 'desejar', 'want', 'would like'] },
        ],
      },
    ],
  },

  {
    id: 'int-zh-3', language: 'zh', stage: 'Intermediário', order: 3,
    title: 'Comparações',
    subtitle: 'bǐ, zuì, gèng e yīyàng',
    theory: `## Comparações em mandarim

### Comparativo — A 比 (bǐ) B + adjetivo
"A é mais [adj] que B" — note que **não há palavra para "que"** separada: 比 já contém esse sentido, e o adjetivo vem **sem 很 (hěn)** antes dele nessa estrutura.
- 苹果比香蕉贵 → píngguǒ bǐ xiāngjiāo guì → Maçã é mais cara que banana
- 她比我高 → tā bǐ wǒ gāo → Ela é mais alta que eu

Para indicar **quanto** mais, acrescenta-se uma quantidade depois do adjetivo:
- 我哥哥比我大两岁 → wǒ gēgē bǐ wǒ dà liǎng suì → Meu irmão é dois anos mais velho que eu
- 这个比那个贵一点 → zhège bǐ nàge guì yīdiǎn → Este é um pouco mais caro que aquele
- 今天比昨天冷得多 → jīntiān bǐ zuótiān lěng de duō → Hoje está muito mais frio que ontem

⚠️ **Erro comum**: traduzir "mais...que" literalmente como **更...比** ou colocar 很 junto de 比: "她比我很高" está **errado**. Com 比, o adjetivo fica sozinho: "她比我高".

### Superlativo — 最 (zuì) + adjetivo
"o mais [adj]"
- 这个最贵 → zhège zuì guì → Este é o mais caro
- 她是最好的学生 → tā shì zuì hǎo de xuéshēng → Ela é a melhor aluna

### Grau intensificado sem comparação — 更 (gèng) "ainda mais"
- 他更喜欢茶 → tā gèng xǐhuān chá → Ele prefere (gosta ainda mais de) chá

### Igualdade — A 跟/和 B 一样 (yīyàng) + adjetivo
"A é tão [adj] quanto B"
- 他跟我一样高 → tā gēn wǒ yīyàng gāo → Ele é tão alto quanto eu
- 这件衣服跟那件一样贵 → zhè jiàn yīfú gēn nà jiàn yīyàng guì → Esta roupa é tão cara quanto aquela

### Diferença — 没有 (méiyǒu) para "menos que"
- 我没有他高 → wǒ méiyǒu tā gāo → Eu não sou tão alto quanto ele
- 这个问题没有看起来那么难 → zhège wèntí méiyǒu kàn qǐlái nàme nán → Esse problema não é tão difícil quanto parece

## Tabela-resumo

| Estrutura | Pinyin | Significado | Exemplo |
|-----------|--------|-------------|---------|
| A 比 B + adj | bǐ | A é mais [adj] que B | tā bǐ wǒ máng |
| 最 + adj | zuì | o mais [adj] | zuì piàoliang |
| 更 + adj | gèng | ainda mais [adj] | gèng hǎo |
| A 跟 B 一样 + adj | gēn…yīyàng | tão [adj] quanto | gēn wǒ yīyàng |
| A 没有 B (那么) + adj | méiyǒu…(nàme) | não tão [adj] quanto | méiyǒu tā kuài |

⚠️ **Erro comum**: esquecer que a ordem com 比 é **A 比 B**, igual à ordem em português ("A é mais alto que B"), mas como não há nenhuma palavra equivalente a "que" depois do adjetivo, alunos tendem a adicionar 比 de novo ou um conector extra no final — isso está errado. A estrutura já está completa em "A 比 B + adjetivo".

### Mais exemplos
- 地铁比公交车快 → dìtiě bǐ gōngjiāochē kuài → O metrô é mais rápido que o ônibus
- 中文比英文难学吗？ → Zhōngwén bǐ Yīngwén nán xué ma? → O mandarim é mais difícil de aprender que o inglês?
- 我的房间没有你的房间大 → wǒ de fángjiān méiyǒu nǐ de fángjiān dà → Meu quarto não é tão grande quanto o seu
- 她跑得跟我一样快 → tā pǎo de gēn wǒ yīyàng kuài → Ela corre tão rápido quanto eu
- 这家店的东西最便宜 → zhè jiā diàn de dōngxi zuì piányí → As coisas desta loja são as mais baratas

## Vocabulário-chave

• 香蕉 (xiāngjiāo) — banana
• 班 (bān) — turma
• 好喝 (hǎo hē) — gostoso (de beber)
• 东西 (dōngxi) — coisa(s)
• 本地人 (běndìrén) — nativo (local)`,
    exercises: [
      {
        sentences: [
          { prompt: 'Maçã é mais cara que banana.', answers: ['píngguǒ bǐ xiāngjiāo guì — 苹果比香蕉贵', 'píngguǒ bǐ xiāngjiāo guì', 'pingguo bi xiangjiao gui', '苹果比香蕉贵'] },
          { prompt: 'Ela é mais alta que eu.', answers: ['tā bǐ wǒ gāo — 她比我高', 'tā bǐ wǒ gāo', 'ta bi wo gao', '她比我高'] },
          { prompt: 'Este é o mais caro.', answers: ['zhège zuì guì — 这个最贵', 'zhège zuì guì', 'zhege zui gui', '这个最贵'] },
          { prompt: 'Ela é a melhor aluna da turma.', answers: ['tā shì bān lǐ zuì hǎo de xuéshēng — 她是班里最好的学生', 'tā shì bān lǐ zuì hǎo de xuéshēng', 'ta shi ban li zui hao de xuesheng', '她是班里最好的学生'] },
          { prompt: 'Ele é tão alto quanto eu.', answers: ['tā gēn wǒ yīyàng gāo — 他跟我一样高', 'tā gēn wǒ yīyàng gāo', 'ta gen wo yiyang gao', '他跟我一样高'] },
        ],
      },
      {
        sentences: [
          { prompt: 'O metrô é mais rápido que o ônibus.', answers: ['dìtiě bǐ gōngjiāochē kuài — 地铁比公交车快', 'dìtiě bǐ gōngjiāochē kuài', 'ditie bi gongjiaoche kuai', '地铁比公交车快'] },
          { prompt: 'Eu não sou tão alto quanto ele.', answers: ['wǒ méiyǒu tā gāo — 我没有他高', 'wǒ méiyǒu tā gāo', 'wo meiyou ta gao', '我没有他高'] },
          { prompt: 'Qual é o mais barato?', answers: ['nǎ gè zuì piányí — 哪个最便宜', 'nǎ gè zuì piányí', 'na ge zui pianyi', '哪个最便宜'] },
          { prompt: 'Este café é mais gostoso que aquele.', answers: ['zhège kāfēi bǐ nàgè hǎo hē — 这个咖啡比那个好喝', 'zhège kāfēi bǐ nàgè hǎo hē', 'zhege kafei bi nage hao he', '这个咖啡比那个好喝'] },
          { prompt: 'Hoje está mais frio que ontem.', answers: ['jīntiān bǐ zuótiān lěng — 今天比昨天冷', 'jīntiān bǐ zuótiān lěng', 'jintian bi zuotian leng', '今天比昨天冷'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ela fala mandarim tão bem quanto um nativo.', answers: ['tā pǔtōnghuà shuō de gēn běndìrén yīyàng hǎo — 她普通话说得跟本地人一样好', 'tā pǔtōnghuà shuō de gēn běndìrén yīyàng hǎo', 'ta putonghua shuo de gen benderen yiyang hao', '她普通话说得跟本地人一样好'] },
          { prompt: 'Este restaurante é o melhor da cidade.', answers: ['zhège cānguǎn shì chéngshì lǐ zuì hǎo de — 这个餐馆是城市里最好的', 'zhège cānguǎn shì chéngshì lǐ zuì hǎo de', 'zhege canguan shi chengshi li zui hao de', '这个餐馆是城市里最好的'] },
          { prompt: 'Meu irmão é dois anos mais velho que eu.', answers: ['wǒ gēgē bǐ wǒ dà liǎng suì — 我哥哥比我大两岁', 'wǒ gēgē bǐ wǒ dà liǎng suì', 'wo gege bi wo da liang sui', '我哥哥比我大两岁'] },
          { prompt: 'Esse problema é menos difícil do que parece.', answers: ['zhège wèntí méiyǒu kàn qǐlái nàme nán — 这个问题没有看起来那么难', 'zhège wèntí méiyǒu kàn qǐlái nàme nán', 'zhege wenti meiyou kan qilai name nan', '这个问题没有看起来那么难'] },
          { prompt: 'Mandarim é mais difícil que inglês?', answers: ['pǔtōnghuà bǐ yīngwén nán ma — 普通话比英文难吗', 'pǔtōnghuà bǐ yīngwén nán ma', 'putonghua bi yingwen nan ma', '普通话比英文难吗'] },
        ],
      },
      {
        title: '🀄 Reconhecimento de caracteres',
        sentences: [
          { prompt: '比 — O que significa este caractere?', answers: ['do que', 'mais que', 'than', 'compared to'] },
          { prompt: '最 — O que significa este caractere?', answers: ['o mais', 'most', 'the most'] },
          { prompt: '一样 — O que significa?', answers: ['igual', 'mesmo', 'same', 'alike'] },
          { prompt: '高 — O que significa este caractere?', answers: ['alto', 'tall', 'high'] },
          { prompt: '便宜 — O que significa?', answers: ['barato', 'barata', 'cheap', 'inexpensive'] },
        ],
      },
    ],
  },

  {
    id: 'int-zh-4', language: 'zh', stage: 'Intermediário', order: 4,
    title: 'Perguntas — quem, onde, quando, por quê',
    subtitle: 'shéi, nǎr, shénme shíhòu, wèishénme, zěnme',
    theory: `## Palavras interrogativas em mandarim

| Português | Pinyin | Caractere |
|-----------|--------|-----------|
| o quê | shénme | 什么 |
| quem | shéi / shuí | 谁 |
| onde | nǎlǐ / nǎr | 哪里 / 哪儿 |
| quando | shénme shíhòu | 什么时候 |
| por que | wèishénme | 为什么 |
| como | zěnme | 怎么 |
| quanto / quantos (≥10, ou incontável) | duōshǎo | 多少 |
| quantos (<10, contável) | jǐ | 几 |
| qual | nǎ gè | 哪个 |
| quanto tempo (duração) | duō cháng shíjiān | 多长时间 |
| há quanto tempo | duō jiǔ | 多久 |

💡 **几 (jǐ) vs 多少 (duōshǎo)**: ambos significam "quantos", mas 几 é usado quando se espera um número **pequeno** (normalmente abaixo de 10) e quase sempre exige uma palavra de medida depois (几个人 = quantas pessoas); 多少 serve para quantidades grandes ou indefinidas e não precisa de medida (多少钱 = quanto custa).

## Posição das palavras interrogativas — a diferença mais importante com o português
Em português, a palavra interrogativa **salta para o início da frase** ("Onde você mora?"). Em mandarim ela **fica exatamente no lugar onde a resposta estaria** — a ordem das outras palavras na frase não muda:
- 你住在哪里？ → nǐ zhù zài nǎlǐ? → Você mora onde? (lit. "você mora em onde")
- 你为什么不吃？ → nǐ wèishénme bù chī? → Por que você não come? (literalmente "você por-que não come")
- 这是谁的书？ → zhè shì shéi de shū? → De quem é este livro? (lit. "isto é de quem o livro")

⚠️ **Erro comum**: por hábito do português, alunos tentam mover a palavra interrogativa para o início da frase em mandarim ("Shénme nǐ chī?" em vez de "你吃什么？"). Isso é gramaticalmente incorreto — mantenha sempre a ordem Sujeito-Verbo-Objeto e substitua apenas o termo desconhecido pela palavra interrogativa.

## Tom sandhi com 不 (bù)
不 é normalmente 4º tom (bù), mas antes de outra sílaba de 4º tom, alguns falantes suavizam a pronúncia — isso é sutil e não obrigatório como o sandhi do terceiro tom. Já em 不是 (bù shì) e 不去 (bù qù), o tom de 不 permanece 4º tom em todos os casos no Mandarim padrão; o que muda de fato é o tom de **一 (yī)**: sozinho é 1º tom, mas em 一个 (yí gè) torna-se 2º tom antes de palavras de 4º tom, e em 一些 (yìxiē) torna-se 4º tom antes de palavras de 1º/2º/3º tom.

### Exemplos adicionais
- 你几岁？ → nǐ jǐ suì? → Quantos anos você tem? (esperando resposta pequena, criança)
- 你今年多大？ → nǐ jīnnián duō dà? → Quantos anos você tem? (forma neutra/educada para adultos)
- 你家有几个人？ → nǐ jiā yǒu jǐ gè rén? → Quantas pessoas tem na sua família?
- 这趟火车几点到？ → zhè tàng huǒchē jǐ diǎn dào? → A que horas chega este trem?
- 你怎么知道这个地方？ → nǐ zěnme zhīdào zhège dìfāng? → Como você conhece esse lugar?

## Vocabulário-chave

• 车站 (chēzhàn) — estação/parada
• 地方 (dìfāng) — lugar
• 知道 (zhīdào) — saber
• 难过 (nánguò) — triste`,
    exercises: [
      {
        sentences: [
          { prompt: 'Quem é essa pessoa?', answers: ['zhège rén shì shéi — 这个人是谁', 'zhège rén shì shéi', 'zhege ren shi shei', '这个人是谁'] },
          { prompt: 'Onde você mora?', answers: ['nǐ zhù zài nǎlǐ — 你住在哪里', 'nǐ zhù zài nǎlǐ', 'ni zhu zai nali', '你住在哪里'] },
          { prompt: 'Quando você vai à China?', answers: ['nǐ shénme shíhòu qù Zhōngguó — 你什么时候去中国', 'nǐ shénme shíhòu qù Zhōngguó', 'ni shenme shihou qu Zhongguo', '你什么时候去中国'] },
          { prompt: 'Por que você está triste?', answers: ['nǐ wèishénme nánguò — 你为什么难过', 'nǐ wèishénme nánguò', 'ni weishenme nanguo', '你为什么难过'] },
          { prompt: 'Como se vai para a estação?', answers: ['qù chēzhàn zěnme zǒu — 去车站怎么走', 'qù chēzhàn zěnme zǒu', 'qu chezhan zenme zou', '去车站怎么走'] },
        ],
      },
      {
        sentences: [
          { prompt: 'O que você quer comer?', answers: ['nǐ xiǎng chī shénme — 你想吃什么', 'nǐ xiǎng chī shénme', 'ni xiang chi shenme', '你想吃什么'] },
          { prompt: 'Qual você prefere?', answers: ['nǐ xǐhuān nǎ gè — 你喜欢哪个', 'nǐ xǐhuān nǎ gè', 'ni xihuan na ge', '你喜欢哪个'] },
          { prompt: 'Quanto tempo leva?', answers: ['yào duō cháng shíjiān — 要多长时间', 'yào duō cháng shíjiān', 'yao duo chang shijian', '要多长时间'] },
          { prompt: 'De quem é esse livro?', answers: ['zhè běn shū shì shéi de — 这本书是谁的', 'zhè běn shū shì shéi de', 'zhe ben shu shi shei de', '这本书是谁的'] },
          { prompt: 'Por que você aprende mandarim?', answers: ['nǐ wèishénme xué pǔtōnghuà — 你为什么学普通话', 'nǐ wèishénme xué pǔtōnghuà', 'ni weishenme xue putonghua', '你为什么学普通话'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Como você vai ao trabalho?', answers: ['nǐ zěnme qù gōngzuò — 你怎么去工作', 'nǐ zěnme qù gōngzuò', 'ni zenme qu gongzuo', '你怎么去工作'] },
          { prompt: 'Quando começa o filme?', answers: ['diànyǐng shénme shíhòu kāishǐ — 电影什么时候开始', 'diànyǐng shénme shíhòu kāishǐ', 'dianying shenme shihou kaishi', '电影什么时候开始'] },
          { prompt: 'Quanto custa isso?', answers: ['zhège duōshǎo qián — 这个多少钱', 'zhège duōshǎo qián', 'zhege duoshao qian', '这个多少钱'] },
          { prompt: 'Por que ele não veio?', answers: ['tā wèishénme méi lái — 他为什么没来', 'tā wèishénme méi lái', 'ta weishenme mei lai', '他为什么没来'] },
          { prompt: 'Como se diz isso em mandarim?', answers: ['zhège pǔtōnghuà zěnme shuō — 这个普通话怎么说', 'zhège pǔtōnghuà zěnme shuō', 'zhege putonghua zenme shuo', '这个普通话怎么说'] },
        ],
      },
      {
        title: '🀄 Reconhecimento de caracteres',
        sentences: [
          { prompt: '谁 — O que significa este caractere?', answers: ['quem', 'who'] },
          { prompt: '什么 — O que significa?', answers: ['o que', 'what'] },
          { prompt: '为什么 — O que significa?', answers: ['por que', 'por quê', 'why'] },
          { prompt: '怎么 — O que significa este caractere?', answers: ['como', 'how'] },
          { prompt: '哪里 — O que significa?', answers: ['onde', 'where'] },
        ],
      },
    ],
  },

  {
    id: 'int-zh-5', language: 'zh', stage: 'Intermediário', order: 5,
    title: 'Duração e continuidade',
    subtitle: 'Falar por quanto tempo e desde quando',
    theory: `## Expressar duração

### Duração de uma ação
Coloque o período de tempo **depois do verbo** (e do objeto, se necessário repetir o verbo):
- 我学了三年普通话 → wǒ xué le sān nián pǔtōnghuà → Estudei mandarim por três anos
- 我工作了八个小时 → wǒ gōngzuò le bā gè xiǎoshí → Trabalhei oito horas

⚠️ **Erro comum**: quando há um objeto específico depois do verbo, muitos alunos tentam colocar a duração entre o verbo e o objeto na ordem do português ("estudei três anos mandarim"). Em mandarim, ou se repete o verbo (我学普通话学了三年) ou se usa 的 antes do objeto (我学了三年的普通话) — simplesmente empilhar "verbo + duração + objeto" sem ajuste pode soar estranho.

### Desde quando — 从…到… / 从…开始

| Estrutura | Pinyin | Caractere |
|-----------|--------|-----------|
| desde … | cóng… | 从… |
| de … até … | cóng…dào… | 从…到… |
| a partir de … | cóng…kāishǐ | 从…开始 |
| há … (que ainda continua) | yǐjīng…le | 已经…了 |

- 我从早上学习到晚上 → wǒ cóng zǎoshang xuéxí dào wǎnshang → Estudei da manhã até à noite
- 她从2018年就住在北京 → tā cóng èrlíngyībā nián jiù zhù zài Běijīng → Ela mora em Pequim desde 2018

## 已经…了 vs. duração simples — ação que continua até agora
Quando uma ação **começou no passado e continua até o presente**, usa-se **已经 + duração + 了** no final — isso é diferente de uma ação totalmente terminada no passado, que leva apenas 了 sem 已经 obrigatoriamente:
- 我已经等了三十分钟了 → wǒ yǐjīng děng le sānshí fēnzhōng le → Já estou esperando há trinta minutos (e ainda espero)
- 我学了三年普通话 → wǒ xué le sān nián pǔtōnghuà → Estudei mandarim por três anos (pode já ter parado)

⚠️ **Erro comum**: confundir essas duas estruturas e achar que ambas significam "estou fazendo X há algum tempo". Sem o 了 final e o 已经, a frase fica ambígua quanto a se a ação ainda continua.

### Perguntar duração

| Expressão | Pinyin | Caractere |
|-----------|--------|-----------|
| quanto tempo (atividade futura/planejada)? | duō cháng shíjiān? | 多长时间？ |
| há quanto tempo (já decorrido)? | duō jiǔ le? | 多久了？ |
| desde quando? | cóng shénme shíhòu? | 从什么时候？ |

### Unidades de tempo
| Português | Pinyin | Caractere |
|-----------|--------|-----------|
| minuto | fēnzhōng | 分钟 |
| hora | xiǎoshí | 小时 |
| dia | tiān | 天 |
| semana | xīngqī | 星期 |
| mês | gè yuè | 个月 |
| ano | nián | 年 |

💡 **Dica**: 年 (nián, ano) não precisa de medidor (两年 = dois anos), mas 月 (mês) normalmente usa 个 (两个月 = dois meses) — isso é uma irregularidade comum que vale memorizar.

### Exemplos adicionais
- 你学普通话多久了？ → nǐ xué pǔtōnghuà duō jiǔ le? → Há quanto tempo você estuda mandarim?
- 才三个月 → cái sān gè yuè → Só há três meses
- 飞机要飞十二个小时 → fēijī yào fēi shí èr gè xiǎoshí → O voo dura doze horas
- 她在这个公司工作了十年 → tā zài zhège gōngsī gōngzuò le shí nián → Ela trabalha nessa empresa há dez anos
- 我们在上海待了一个星期 → wǒmen zài Shànghǎi dāi le yī gè xīngqī → Ficamos em Xangai por uma semana

## Vocabulário-chave

• 待 (dāi) — ficar/permanecer
• 等 (děng) — esperar
• 才 (cái) — apenas/só (tempo curto)
• 开会 (kāihuì) — fazer reunião`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu estudo mandarim há dois anos.', answers: ['wǒ xué pǔtōnghuà yǐjīng liǎng nián le — 我学普通话已经两年了', 'wǒ xué pǔtōnghuà yǐjīng liǎng nián le', 'wo xue putonghua yijing liang nian le', '我学普通话已经两年了'] },
          { prompt: 'Quanto tempo você vai ficar?', answers: ['nǐ yào dāi duō cháng shíjiān — 你要待多长时间', 'nǐ yào dāi duō cháng shíjiān', 'ni yao dai duo chang shijian', '你要待多长时间'] },
          { prompt: 'Vou ficar três semanas.', answers: ['wǒ yào dāi sān gè xīngqī — 我要待三个星期', 'wǒ yào dāi sān gè xīngqī', 'wo yao dai san ge xingqi', '我要待三个星期'] },
          { prompt: 'Desde quando você mora aqui?', answers: ['nǐ cóng shénme shíhòu zhù zài zhèlǐ — 你从什么时候住在这里', 'nǐ cóng shénme shíhòu zhù zài zhèlǐ', 'ni cong shenme shihou zhu zai zheli', '你从什么时候住在这里'] },
          { prompt: 'Moro aqui há cinco anos.', answers: ['wǒ zhù zài zhèlǐ yǐjīng wǔ nián le — 我住在这里已经五年了', 'wǒ zhù zài zhèlǐ yǐjīng wǔ nián le', 'wo zhu zai zheli yijing wu nian le', '我住在这里已经五年了'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu trabalhei oito horas hoje.', answers: ['wǒ jīntiān gōngzuò le bā gè xiǎoshí — 我今天工作了八个小时', 'wǒ jīntiān gōngzuò le bā gè xiǎoshí', 'wo jintian gongzuo le ba ge xiaoshi', '我今天工作了八个小时'] },
          { prompt: 'A reunião durou duas horas.', answers: ['huìyì kāi le liǎng gè xiǎoshí — 会议开了两个小时', 'huìyì kāi le liǎng gè xiǎoshí', 'huiyi kai le liang ge xiaoshi', '会议开了两个小时'] },
          { prompt: 'Estou esperando há trinta minutos.', answers: ['wǒ děng le sānshí fēnzhōng le — 我等了三十分钟了', 'wǒ děng le sānshí fēnzhōng le', 'wo deng le sanshi fenzhong le', '我等了三十分钟了'] },
          { prompt: 'Ela mora em Pequim desde 2018.', answers: ['tā cóng èr líng yī bā nián zhù zài Běijīng — 她从2018年住在北京', 'tā cóng èr líng yī bā nián zhù zài Běijīng', 'ta cong er ling yi ba nian zhu zai Beijing', '她从2018年住在北京'] },
          { prompt: 'Estudamos de manhã até à noite.', answers: ['wǒmen cóng zǎoshang xuéxí dào wǎnshang — 我们从早上学习到晚上', 'wǒmen cóng zǎoshang xuéxí dào wǎnshang', 'women cong zaoshang xuexi dao wanshang', '我们从早上学习到晚上'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Há quanto tempo você aprende mandarim?', answers: ['nǐ xué pǔtōnghuà duō jiǔ le — 你学普通话多久了', 'nǐ xué pǔtōnghuà duō jiǔ le', 'ni xue putonghua duo jiu le', '你学普通话多久了'] },
          { prompt: 'Só há três meses.', answers: ['cái sān gè yuè — 才三个月', 'cái sān gè yuè', 'cai san ge yue', '才三个月'] },
          { prompt: 'O voo dura doze horas.', answers: ['fēijī yào fēi shí èr gè xiǎoshí — 飞机要飞十二个小时', 'fēijī yào fēi shí èr gè xiǎoshí', 'feiji yao fei shi er ge xiaoshi', '飞机要飞十二个小时'] },
          { prompt: 'Ela trabalha nessa empresa há dez anos.', answers: ['tā zài zhège gōngsī gōngzuò le shí nián — 她在这个公司工作了十年', 'tā zài zhège gōngsī gōngzuò le shí nián', 'ta zai zhege gongsi gongzuo le shi nian', '她在这个公司工作了十年'] },
          { prompt: 'Ficamos em Xangai por uma semana.', answers: ['wǒmen zài Shànghǎi dāi le yī gè xīngqī — 我们在上海待了一个星期', 'wǒmen zài Shànghǎi dāi le yī gè xīngqī', 'women zai Shanghai dai le yi ge xingqi', '我们在上海待了一个星期'] },
        ],
      },
      {
        title: '🀄 Reconhecimento de caracteres',
        sentences: [
          { prompt: '年 — O que significa este caractere?', answers: ['ano', 'year'] },
          { prompt: '月 — O que significa este caractere?', answers: ['mês', 'lua', 'month', 'moon'] },
          { prompt: '小时 — O que significa?', answers: ['hora', 'horas', 'hour'] },
          { prompt: '分钟 — O que significa?', answers: ['minuto', 'minutos', 'minute'] },
          { prompt: '从 — O que significa este caractere?', answers: ['desde', 'de', 'from', 'since'] },
        ],
      },
    ],
  },

  {
    id: 'rev-int-zh', language: 'zh', stage: 'Intermediário', order: 99, isReview: true,
    title: 'Revisão — Intermediário',
    subtitle: '了, modais, comparações, perguntas e duração',
    theory: null,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu já comi.', answers: ['wǒ yǐjīng chī le — 我已经吃了', 'wǒ yǐjīng chī le', 'wo yijing chi le', '我已经吃了'] },
          { prompt: 'Eu consigo falar mandarim.', answers: ['wǒ néng shuō pǔtōnghuà — 我能说普通话', 'wǒ néng shuō pǔtōnghuà', 'wo neng shuo putonghua', '我能说普通话'] },
          { prompt: 'Ela é mais alta que eu.', answers: ['tā bǐ wǒ gāo — 她比我高', 'tā bǐ wǒ gāo', 'ta bi wo gao', '她比我高'] },
          { prompt: 'Por que você está triste?', answers: ['nǐ wèishénme nánguò — 你为什么难过', 'nǐ wèishénme nánguò', 'ni weishenme nanguo', '你为什么难过'] },
          { prompt: 'Moro aqui há cinco anos.', answers: ['wǒ zhù zài zhèlǐ yǐjīng wǔ nián le — 我住在这里已经五年了', 'wǒ zhù zài zhèlǐ yǐjīng wǔ nián le', 'wo zhu zai zheli yijing wu nian le', '我住在这里已经五年了'] },
          { prompt: 'Você não deveria dizer isso.', answers: ['nǐ bù yīnggāi shuō zhège — 你不应该说这个', 'nǐ bù yīnggāi shuō zhège', 'ni bu yinggai shuo zhege', '你不应该说这个'] },
          { prompt: 'Este é o mais barato.', answers: ['zhège zuì piányí — 这个最便宜', 'zhège zuì piányí', 'zhege zui pianyi', '这个最便宜'] },
          { prompt: 'Quando começa o filme?', answers: ['diànyǐng shénme shíhòu kāishǐ — 电影什么时候开始', 'diànyǐng shénme shíhòu kāishǐ', 'dianying shenme shihou kaishi', '电影什么时候开始'] },
        ],
      },
    ],
    dialogExercise: {
      audioText: 'wǒ zhù zài Shànghǎi yǐjīng sān nián le. wǒ néng shuō pǔtōnghuà, dàn wǒ bù néng shuō Shànghǎihuà.',
      question: 'O que a pessoa diz sobre seu mandarim e o dialeto de Xangai?',
      options: [
        { text: 'Fala mandarim mas não fala o dialeto de Xangai.', correct: true },
        { text: 'Fala mandarim e também o dialeto de Xangai.', correct: false },
        { text: 'Não fala nenhum dos dois idiomas.', correct: false },
        { text: 'Fala o dialeto de Xangai mas não fala mandarim.', correct: false },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  //  AVANÇADO
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'adv-zh-1', language: 'zh', stage: 'Avançado', order: 1,
    title: 'Já fiz isso antes — 过 (guò)',
    subtitle: 'Aspecto experiencial: expressar experiências de vida',
    theory: `## 过 (guò) — aspecto experiencial, não "passado simples"

**过 (guò)**, colocado imediatamente após o verbo, marca que a ação foi vivida **alguma vez na vida**, sem importar quando — é o aspecto "já ter feito X". Diferente de 了, 过 não diz nada sobre a ação ter terminado recentemente; fala apenas que ela **aconteceu pelo menos uma vez**.

| Estrutura | Exemplo | Pinyin |
|-----------|---------|--------|
| Verbo + 过 | 我去过中国 | wǒ qù guò Zhōngguó (já fui à China) |
| Negativa: 没 + Verbo + 过 | 我没去过中国 | wǒ méi qù guò Zhōngguó (nunca fui) |
| Pergunta: Verbo + 过 + 吗 | 你吃过饺子吗？ | nǐ chī guò jiǎozi ma? (já comeu guiozo?) |

## 了 vs. 过 vs. 着 — tabela comparativa (as três partículas mais confundidas)

| Partícula | Aspecto | Quando usar | Exemplo | Tradução |
|-----------|---------|-------------|---------|----------|
| 了 (le) | completado | a ação terminou ou houve mudança de estado | 我吃了 (wǒ chī le) | acabei de comer / comi |
| 过 (guò) | experiencial | a ação já aconteceu alguma vez na vida, sem foco em quando | 我吃过 (wǒ chī guò) | já comi (alguma vez) |
| 着 (zhe) | durativo/contínuo | a ação ou estado está em curso, geralmente como fundo de outra ação | 我吃着饭 (wǒ chī zhe fàn) | estou comendo (no processo) |

💡 **Como decidir**: pergunte "isso terminou de vez, ou é uma experiência genérica da vida, ou está acontecendo agora como pano de fundo?" — a resposta indica 了, 过 ou 着 respectivamente. Os três podem, inclusive, aparecer na mesma conversa sobre o mesmo verbo com sentidos diferentes: 我吃了 (terminei de comer agora), 我吃过 (já comi isso antes, alguma vez), 我吃着饭呢 (estou comendo agora mesmo).

⚠️ **Erro comum**: usar 了 quando se quer dizer "já fiz isso alguma vez" (experiência), em vez de 过. "我去了中国" soa como "fui à China e voltei recentemente / aconteceu", enquanto "我去过中国" enfatiza a experiência de já ter ido lá em algum momento da vida, sem relação com o presente.

⚠️ **Erro comum #2**: tentar combinar 了 e 过 incorretamente. Na verdade, é possível e comum usar os dois juntos quando a frase tem um advérbio de quantidade: "我去过中国两次了" (wǒ qù guò Zhōngguó liǎng cì le) = "já fui à China duas vezes" — aqui 了 no final marca que a contagem total até agora é essa, e 过 marca a experiência repetida.

## Expressões com 过

| Expressão | Pinyin | Caractere |
|-----------|--------|-----------|
| nunca | cónglái méi | 从来没 |
| já | yǐjīng…guò | 已经…过 |
| quantas vezes? | jǐ cì? | 几次？ |

### Exemplos adicionais
- 我从来没去过日本 → wǒ cónglái méi qù guò Rìběn → Nunca fui ao Japão
- 你去过北京几次？ → nǐ qù guò Běijīng jǐ cì? → Quantas vezes você foi a Pequim?
- 她从来没出过国 → tā cónglái méi chū guò guó → Ela nunca saiu do país
- 我学过弹钢琴，但是忘了 → wǒ xué guò tán gāngqín, dànshì wàng le → Já aprendi a tocar piano, mas esqueci
- 你用过微信吗？ → nǐ yòng guò wēixìn ma? → Você já usou o WeChat?

## Vocabulário-chave

• 榴莲 (liúlián) — durian
• 钢琴 (gāngqín) — piano
• 瑜伽 (yújiā) — ioga
• 国外 (guówài) — exterior/no estrangeiro
• 微信 (wēixìn) — WeChat`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu já fui à China.', answers: ['wǒ qù guò Zhōngguó — 我去过中国', 'wǒ qù guò Zhōngguó', 'wo qu guo Zhongguo', '我去过中国'] },
          { prompt: 'Você já comeu comida chinesa?', answers: ['nǐ chī guò zhōngguó cài ma — 你吃过中国菜吗', 'nǐ chī guò zhōngguó cài ma', 'ni chi guo zhongguo cai ma', '你吃过中国菜吗'] },
          { prompt: 'Nunca fui ao Japão.', answers: ['wǒ cónglái méi qù guò Rìběn — 我从来没去过日本', 'wǒ cónglái méi qù guò Rìběn', 'wo conglai mei qu guo Riben', '我从来没去过日本'] },
          { prompt: 'Ela já aprendeu japonês antes.', answers: ['tā xué guò rìyǔ — 她学过日语', 'tā xué guò rìyǔ', 'ta xue guo riyu', '她学过日语'] },
          { prompt: 'Você já viu aquele filme?', answers: ['nǐ kàn guò nà bù diànyǐng ma — 你看过那部电影吗', 'nǐ kàn guò nà bù diànyǐng ma', 'ni kan guo na bu dianying ma', '你看过那部电影吗'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Nunca provei durian.', answers: ['wǒ cónglái méi chī guò liúlián — 我从来没吃过榴莲', 'wǒ cónglái méi chī guò liúlián', 'wo conglai mei chi guo liulian', '我从来没吃过榴莲'] },
          { prompt: 'Já fui lá três vezes.', answers: ['wǒ qù guò nàlǐ sān cì — 我去过那里三次', 'wǒ qù guò nàlǐ sān cì', 'wo qu guo nali san ci', '我去过那里三次'] },
          { prompt: 'Você já tocou piano?', answers: ['nǐ xué guò tán gāngqín ma — 你学过弹钢琴吗', 'nǐ xué guò tán gāngqín ma', 'ni xue guo tan gangqin ma', '你学过弹钢琴吗'] },
          { prompt: 'Eu nunca fiz ioga.', answers: ['wǒ cónglái méi zuò guò yújiā — 我从来没做过瑜伽', 'wǒ cónglái méi zuò guò yújiā', 'wo conglai mei zuo guo yujia', '我从来没做过瑜伽'] },
          { prompt: 'Ele já trabalhou na China por dois anos.', answers: ['tā zài Zhōngguó gōngzuò guò liǎng nián — 他在中国工作过两年', 'tā zài Zhōngguó gōngzuò guò liǎng nián', 'ta zai Zhongguo gongzuo guo liang nian', '他在中国工作过两年'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Quantas vezes você foi a Pequim?', answers: ['nǐ qù guò Běijīng jǐ cì — 你去过北京几次', 'nǐ qù guò Běijīng jǐ cì', 'ni qu guo Beijing ji ci', '你去过北京几次'] },
          { prompt: 'Nunca li um livro em mandarim.', answers: ['wǒ cónglái méi kàn guò pǔtōnghuà shū — 我从来没看过普通话书', 'wǒ cónglái méi kàn guò pǔtōnghuà shū', 'wo conglai mei kan guo putonghua shu', '我从来没看过普通话书'] },
          { prompt: 'Já experimentei todos os tipos de culinária chinesa.', answers: ['wǒ chī guò gè zhǒng zhōngguó cài — 我吃过各种中国菜', 'wǒ chī guò gè zhǒng zhōngguó cài', 'wo chi guo ge zhong zhongguo cai', '我吃过各种中国菜'] },
          { prompt: 'Ela nunca esteve fora da China.', answers: ['tā cónglái méi qù guò guówài — 她从来没去过国外', 'tā cónglái méi qù guò guówài', 'ta conglai mei qu guo guowai', '她从来没去过国外'] },
          { prompt: 'Você já usou o WeChat?', answers: ['nǐ yòng guò wēixìn ma — 你用过微信吗', 'nǐ yòng guò wēixìn ma', 'ni yong guo weixin ma', '你用过微信吗'] },
        ],
      },
      {
        title: '🀄 Reconhecimento de caracteres',
        sentences: [
          { prompt: '过 — Para que serve esta partícula?', answers: ['experiência', 'já fiz antes', 'experiential aspect', 'ever done'] },
          { prompt: '从来没 — O que significa?', answers: ['nunca', 'jamais', 'never'] },
          { prompt: '次 — O que significa este caractere?', answers: ['vez', 'vezes', 'time', 'times'] },
          { prompt: '日本 — O que significa?', answers: ['Japão', 'Japan'] },
          { prompt: '中国 — O que significa?', answers: ['China', 'China'] },
        ],
      },
    ],
  },

  {
    id: 'adv-zh-2', language: 'zh', stage: 'Avançado', order: 2,
    title: 'Ação em progresso — 在 e 着',
    subtitle: 'Aspecto progressivo e durativo',
    theory: `## 正在/在 (zhèngzài/zài) — ação em andamento agora

**正在 (zhèngzài)** ou simplesmente **在 (zài)**, colocado **antes** do verbo, indica que a ação está acontecendo neste momento — é o equivalente ao gerúndio português ("estou fazendo"):
- 她正在吃饭 → tā zhèngzài chī fàn → Ela está comendo agora
- 我在说普通话 → wǒ zài shuō pǔtōnghuà → Estou falando mandarim

Ao final da frase pode-se adicionar **呢 (ne)** para dar ênfase ou suavizar o tom:
- 他在睡觉呢 → tā zài shuì jiào ne → Ele está dormindo (ênfase/lembrete)

⚠️ **Erro comum**: confundir este 在 (zài, "estar fazendo") com o 在 que significa "estar localizado em" (我在北京 = estou em Pequim) ou a preposição "em" (在桌子上 = na mesa). São o mesmo caractere mas funções gramaticais diferentes — o contexto e a posição na frase (antes do verbo = progressivo; antes de lugar = localização) ajudam a diferenciar.

## 着 (zhe) — estado contínuo/durativo, não "estar fazendo agora"

**着 (zhe)**, colocado **depois** do verbo, indica que uma ação ou estado **persiste** — geralmente como resultado de uma ação anterior, ou como cenário de fundo para outra ação:

| Uso | Exemplo | Pinyin |
|-----|---------|--------|
| Estado resultante (algo ficou assim) | 门开着 | mén kāi zhe (a porta está aberta) |
| Ação de fundo de outra ação | 她笑着说 | tā xiào zhe shuō (ela disse sorrindo) |
| Dois verbos simultâneos | 她听着音乐做饭 | tā tīng zhe yīnyuè zuò fàn (ela cozinha ouvindo música) |

## 在 vs. 着 vs. 了 vs. 过 — comparação completa

| Estrutura | Posição | Significado | Exemplo |
|-----------|---------|-------------|---------|
| 在/正在 + verbo | antes do verbo | ação ocorrendo agora mesmo | 在吃饭 (comendo agora) |
| verbo + 着 | depois do verbo | estado/ação contínua, de fundo | 开着 (está aberto) |
| verbo + 了 | depois do verbo | ação concluída / mudança de estado | 吃了 (comeu) |
| verbo + 过 | depois do verbo | experiência vivida alguma vez | 吃过 (já comeu, alguma vez) |

⚠️ **Erro comum**: usar 着 pensando que é igual a 正在 (ação acontecendo agora). 正在吃饭 enfatiza que a ação está em curso neste instante; 吃着饭 enfatiza que comer é o estado de fundo enquanto outra coisa acontece — por isso 着 quase sempre aparece acompanhado de outro verbo ou de uma descrição (门开着 sozinho funciona porque descreve um estado, mas não diz "abrindo agora").

⚠️ **Erro comum #2**: esquecer 着 com verbos de postura/estado físico que em português usam apenas o verbo simples: "ela está sentada" não é apenas 她坐 — é 她坐着 (tā zuò zhe), pois descreve um estado contínuo.

### Exemplos adicionais
- 你正在做什么？ → nǐ zhèngzài zuò shénme? → O que você está fazendo?
- 窗户关着 → chuānghu guān zhe → A janela está fechada
- 他们在工作呢，别打扰他们 → tāmen zài gōngzuò ne, bié dǎrǎo tāmen → Eles estão trabalhando — não os perturbe
- 她坐着看电视 → tā zuò zhe kàn diànshì → Ela está sentada vendo TV
- 灯一直亮着 → dēng yīzhí liàng zhe → A luz fica sempre acesa

## Vocabulário-chave

• 窗户 (chuānghu) — janela
• 宝宝 (bǎobǎo) — bebê
• 打扰 (dǎrǎo) — perturbar/incomodar
• 播客 (bōkè) — podcast`,
    exercises: [
      {
        sentences: [
          { prompt: 'Ela está comendo agora.', answers: ['tā zhèngzài chī fàn — 她正在吃饭', 'tā zhèngzài chī fàn', 'ta zhengzai chi fan', '她正在吃饭'] },
          { prompt: 'O que você está fazendo?', answers: ['nǐ zhèngzài zuò shénme — 你正在做什么', 'nǐ zhèngzài zuò shénme', 'ni zhengzai zuo shenme', '你正在做什么'] },
          { prompt: 'Estou estudando.', answers: ['wǒ zhèngzài xuéxí — 我正在学习', 'wǒ zhèngzài xuéxí', 'wo zhengzai xuexi', '我正在学习'] },
          { prompt: 'Eles estão conversando.', answers: ['tāmen zhèngzài shuō huà — 他们正在说话', 'tāmen zhèngzài shuō huà', 'tamen zhengzai shuo hua', '他们正在说话'] },
          { prompt: 'Ele está dormindo — não o acorde.', answers: ['tā zài shuì jiào ne, bié jiào tā — 他在睡觉呢，别叫他', 'tā zài shuì jiào ne, bié jiào tā', 'ta zai shui jiao ne, bie jiao ta', '他在睡觉呢，别叫他'] },
        ],
      },
      {
        sentences: [
          { prompt: 'A porta está aberta.', answers: ['mén kāi zhe — 门开着', 'mén kāi zhe', 'men kai zhe', '门开着'] },
          { prompt: 'Ela sorriu e disse "tudo bem".', answers: ['tā xiào zhe shuō méi guānxi — 她笑着说没关系', 'tā xiào zhe shuō méi guānxi', 'ta xiao zhe shuo mei guanxi', '她笑着说没关系'] },
          { prompt: 'Ele cozinha ouvindo música.', answers: ['tā tīng zhe yīnyuè zuò fàn — 他听着音乐做饭', 'tā tīng zhe yīnyuè zuò fàn', 'ta ting zhe yinyue zuo fan', '他听着音乐做饭'] },
          { prompt: 'Ela andava ouvindo podcast.', answers: ['tā tīng zhe bōkè zǒulù — 她听着播客走路', 'tā tīng zhe bōkè zǒulù', 'ta ting zhe boke zoulu', '她听着播客走路'] },
          { prompt: 'Luz está acesa.', answers: ['dēng liàng zhe — 灯亮着', 'dēng liàng zhe', 'deng liang zhe', '灯亮着'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Estou te esperando.', answers: ['wǒ zhèngzài děng nǐ — 我正在等你', 'wǒ zhèngzài děng nǐ', 'wo zhengzai deng ni', '我正在等你'] },
          { prompt: 'O bebê está dormindo agora.', answers: ['bǎobǎo zhèngzài shuì jiào — 宝宝正在睡觉', 'bǎobǎo zhèngzài shuì jiào', 'baobao zhengzai shui jiao', '宝宝正在睡觉'] },
          { prompt: 'Ela estava lendo quando cheguei.', answers: ['wǒ dào de shíhòu tā zài kàn shū — 我到的时候她在看书', 'wǒ dào de shíhòu tā zài kàn shū', 'wo dao de shihou ta zai kan shu', '我到的时候她在看书'] },
          { prompt: 'A janela está fechada.', answers: ['chuānghu guān zhe — 窗户关着', 'chuānghu guān zhe', 'chuanghu guan zhe', '窗户关着'] },
          { prompt: 'Eles estão trabalhando — não os perturbe.', answers: ['tāmen zài gōngzuò ne, bié dǎrǎo tāmen — 他们在工作呢，别打扰他们', 'tāmen zài gōngzuò ne, bié dǎrǎo tāmen', 'tamen zai gongzuo ne, bie darao tamen', '他们在工作呢，别打扰他们'] },
        ],
      },
      {
        title: '🀄 Reconhecimento de caracteres',
        sentences: [
          { prompt: '正在 — O que significa?', answers: ['estar fazendo', 'em andamento', 'currently doing', 'in progress'] },
          { prompt: '门 — O que significa este caractere?', answers: ['porta', 'door', 'gate'] },
          { prompt: '开 — O que significa este caractere?', answers: ['abrir', 'aberto', 'open'] },
          { prompt: '着 — Para que serve esta partícula?', answers: ['estado contínuo', 'ação de fundo', 'ongoing state', 'continuous'] },
          { prompt: '灯 — O que significa este caractere?', answers: ['luz', 'lâmpada', 'light', 'lamp'] },
        ],
      },
    ],
  },

  {
    id: 'adv-zh-3', language: 'zh', stage: 'Avançado', order: 3,
    title: 'Condicionais e concessivas',
    subtitle: 'rúguǒ…jiù, suīrán…dànshì, yàoshi',
    theory: `## Condicionais em mandarim

### 如果…就… (rúguǒ…jiù) — Se…então…
- "rúguǒ míngtiān xià yǔ, wǒmen jiù bù qù" → Se chover amanhã, não vamos

### 要是…就… (yàoshi…jiù) — Se (informal)
- "yàoshi nǐ lái, jiù gěi wǒ dǎ diànhuà" → Se você vier, me ligue

### 只要…就… (zhǐyào…jiù) — Desde que…
- "zhǐyào nǔlì, jiù néng chénggōng" → Desde que se esforce, pode ter sucesso

## Concessivas

### 虽然…但是… (suīrán…dànshì) — Embora…mas…
- "suīrán hěn nán, dànshì hěn yǒuyìsi" → Embora difícil, é muito interessante

### 即使…也… (jíshǐ…yě) — Mesmo que…mesmo assim…
- 即使下雨，我也要去 → jíshǐ xià yǔ, wǒ yě yào qù → Mesmo que chova, vou mesmo assim

| Conector | Uso | Caractere |
|----------|-----|-----------|
| rúguǒ / yàoshi | se (condição) | 如果 / 要是 |
| jiù | então (resultado) | 就 |
| suīrán | embora | 虽然 |
| dànshì / kěshì | mas | 但是 / 可是 |
| jíshǐ…yě | mesmo que…mesmo assim | 即使…也 |
| zhǐyào…jiù | desde que…basta | 只要…就 |

⚠️ **Erro comum**: omitir o 就 (jiù) na cláusula de resultado, copiando a estrutura do português onde "se... então..." muitas vezes vira só "se..." sem conector explícito ("se chover, não saio" sem "então"). Em mandarim, 就 é praticamente obrigatório para amarrar a consequência à condição: "如果下雨，我就不出去" — sem 就, a frase fica incompleta ou estranha.

⚠️ **Erro comum #2**: usar 但是 junto com 虽然 redundantemente em outras línguas é proibido (em inglês não se diz "Although X, but Y"), mas em **mandarim isso é obrigatório e correto**: 虽然...但是... sempre aparecem juntos. Tentar omitir o 但是 por achar redundante (influência do português/inglês) deixa a frase incompleta.

### Exemplos adicionais
- 如果我有钱，就环游世界 → rúguǒ wǒ yǒu qián, jiù huán yóu shìjiè → Se eu tivesse dinheiro, viajaria pelo mundo
- 即使他不来，会议也要举行 → jíshǐ tā bù lái, huìyì yě yào jǔxíng → Mesmo que ele não venha, a reunião vai acontecer
- 只要你喜欢就好 → zhǐyào nǐ xǐhuān jiù hǎo → Desde que você goste, está ótimo
- 虽然很远，但是我还是要去 → suīrán hěn yuǎn, dànshì wǒ háishi yào qù → Embora seja longe, vou lá de qualquer jeito
- 要是你不懂，就问老师 → yàoshi nǐ bù dǒng, jiù wèn lǎoshī → Se você não entender, pergunte ao professor

## Vocabulário-chave

• 环游世界 (huán yóu shìjiè) — viajar pelo mundo
• 举行 (jǔxíng) — realizar (evento)
• 放弃 (fàngqì) — desistir
• 练习 (liànxí) — praticar`,
    exercises: [
      {
        sentences: [
          { prompt: 'Se chover amanhã, não vamos sair.', answers: ['rúguǒ míngtiān xià yǔ, wǒmen jiù bù chūqù — 如果明天下雨，我们就不出去', 'rúguǒ míngtiān xià yǔ, wǒmen jiù bù chūqù', 'ruguo mingtian xia yu, women jiu bu chuqu', '如果明天下雨，我们就不出去'] },
          { prompt: 'Se você vier, me avise.', answers: ['rúguǒ nǐ lái, jiù gàosù wǒ — 如果你来，就告诉我', 'rúguǒ nǐ lái, jiù gàosù wǒ', 'ruguo ni lai, jiu gaosu wo', '如果你来，就告诉我'] },
          { prompt: 'Embora seja difícil, é muito interessante.', answers: ['suīrán hěn nán, dànshì hěn yǒuyìsi — 虽然很难，但是很有意思', 'suīrán hěn nán, dànshì hěn yǒuyìsi', 'suiran hen nan, danshi hen youyisi', '虽然很难，但是很有意思'] },
          { prompt: 'Mesmo que esteja cansado, vou terminar.', answers: ['jíshǐ hěn lèi, wǒ yě yào zuò wán — 即使很累，我也要做完', 'jíshǐ hěn lèi, wǒ yě yào zuò wán', 'jishi hen lei, wo ye yao zuo wan', '即使很累，我也要做完'] },
          { prompt: 'Desde que estude todo dia, vai aprender rápido.', answers: ['zhǐyào měitiān xuéxí, jiù néng hěn kuài xué huì — 只要每天学习，就能很快学会', 'zhǐyào měitiān xuéxí, jiù néng hěn kuài xué huì', 'zhiyao meitian xuexi, jiu neng hen kuai xue hui', '只要每天学习，就能很快学会'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Se eu tivesse dinheiro, viajaria pelo mundo.', answers: ['rúguǒ wǒ yǒu qián, jiù qù huán yóu shìjiè — 如果我有钱，就去环游世界', 'rúguǒ wǒ yǒu qián, jiù qù huán yóu shìjiè', 'ruguo wo you qian, jiu qu huanyou shijie', '如果我有钱，就去环游世界'] },
          { prompt: 'Embora seja caro, é muito bom.', answers: ['suīrán hěn guì, dànshì hěn hǎo — 虽然很贵，但是很好', 'suīrán hěn guì, dànshì hěn hǎo', 'suiran hen gui, danshi hen hao', '虽然很贵，但是很好'] },
          { prompt: 'Mesmo que ele não venha, a reunião vai acontecer.', answers: ['jíshǐ tā bù lái, huìyì yě yào jǔxíng — 即使他不来，会议也要举行', 'jíshǐ tā bù lái, huìyì yě yào jǔxíng', 'jishi ta bu lai, huiyi ye yao juxing', '即使他不来，会议也要举行'] },
          { prompt: 'Se você não entender, pode perguntar.', answers: ['rúguǒ nǐ bù dǒng, kěyǐ wèn — 如果你不懂，可以问', 'rúguǒ nǐ bù dǒng, kěyǐ wèn', 'ruguo ni bu dong, keyi wen', '如果你不懂，可以问'] },
          { prompt: 'Basta praticar todo dia para melhorar.', answers: ['zhǐyào měitiān liànxí, jiù néng jìnbù — 只要每天练习，就能进步', 'zhǐyào měitiān liànxí, jiù néng jìnbù', 'zhiyao meitian lianxi, jiu neng jinbu', '只要每天练习，就能进步'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Embora esteja com frio, não uso casaco.', answers: ['suīrán hěn lěng, dànshì wǒ bù chuān dàyī — 虽然很冷，但是我不穿大衣', 'suīrán hěn lěng, dànshì wǒ bù chuān dàyī', 'suiran hen leng, danshi wo bu chuan dayi', '虽然很冷，但是我不穿大衣'] },
          { prompt: 'Se você tiver tempo, venha visitar.', answers: ['rúguǒ nǐ yǒu shíjiān, jiù lái wán — 如果你有时间，就来玩', 'rúguǒ nǐ yǒu shíjiān, jiù lái wán', 'ruguo ni you shijian, jiu lai wan', '如果你有时间，就来玩'] },
          { prompt: 'Mesmo que seja difícil, não vou desistir.', answers: ['jíshǐ hěn nán, wǒ yě bù fàngqì — 即使很难，我也不放弃', 'jíshǐ hěn nán, wǒ yě bù fàngqì', 'jishi hen nan, wo ye bu fangqi', '即使很难，我也不放弃'] },
          { prompt: 'Desde que você goste, está ótimo.', answers: ['zhǐyào nǐ xǐhuān jiù hǎo — 只要你喜欢就好', 'zhǐyào nǐ xǐhuān jiù hǎo', 'zhiyao ni xihuan jiu hao', '只要你喜欢就好'] },
          { prompt: 'Embora seja longe, vou lá de qualquer jeito.', answers: ['suīrán hěn yuǎn, dànshì wǒ háishi yào qù — 虽然很远，但是我还是要去', 'suīrán hěn yuǎn, dànshì wǒ háishi yào qù', 'suiran hen yuan, danshi wo haishi yao qu', '虽然很远，但是我还是要去'] },
        ],
      },
      {
        title: '🀄 Reconhecimento de caracteres',
        sentences: [
          { prompt: '如果 — O que significa?', answers: ['se', 'if', 'caso'] },
          { prompt: '就 — O que significa este caractere neste contexto?', answers: ['então', 'then', 'portanto'] },
          { prompt: '虽然 — O que significa?', answers: ['embora', 'although', 'even though'] },
          { prompt: '但是 — O que significa?', answers: ['mas', 'porém', 'but', 'however'] },
          { prompt: '即使 — O que significa?', answers: ['mesmo que', 'even if', 'even though'] },
        ],
      },
    ],
  },

  {
    id: 'adv-zh-4', language: 'zh', stage: 'Avançado', order: 4,
    title: 'Expressões idiomáticas',
    subtitle: 'Chéngyǔ e frases feitas do mandarim',
    theory: `## Chéngyǔ (成语) — expressões de 4 caracteres

Os **chéngyǔ** são expressões idiomáticas de 4 caracteres com origem em fábulas e história chinesa. São muito usados na escrita e fala formal.

| Chéngyǔ | Pinyin | Significado literal | Significado real |
|---------|--------|---------------------|-----------------|
| 一石二鸟 | yī shí èr niǎo | uma pedra, dois pássaros | matar dois coelhos de uma cajadada |
| 半途而废 | bàn tú ér fèi | abandonar no meio do caminho | desistir a meio |
| 马到成功 | mǎ dào chénggōng | o cavalo chega e há sucesso | sucesso imediato |
| 一目了然 | yī mù liǎo rán | num só olhar fica tudo claro | óbvio à primeira vista |
| 熟能生巧 | shú néng shēng qiǎo | prática gera habilidade | a prática leva à perfeição |

## Outras expressões comuns

| Expressão | Pinyin | Significado |
|-----------|--------|-------------|
| 没问题 | méi wèntí | sem problema / tudo certo |
| 随便 | suíbiàn | tanto faz / à vontade |
| 没办法 | méi bànfǎ | não há como / que pena |
| 算了 | suàn le | deixa pra lá |
| 差不多 | chàbuduō | mais ou menos / quase |

💡 **Dica cultural**: os chéngyǔ são valorizados em contextos formais e escritos — usá-los corretamente impressiona falantes nativos, mas usá-los de forma errada (estrutura ou contexto inadequados) pode parecer estranho. É mais seguro aprendê-los em blocos fixos, como frases inteiras, em vez de tentar "traduzir" uma ideia palavra por palavra para um chéngyǔ.

⚠️ **Erro comum**: tentar decompor um chéngyǔ palavra por palavra para adivinhar o sentido, como se fosse português. 马到成功 (mǎ dào chénggōng) não tem nada a ver com "cavalos" no sentido moderno — é uma expressão fixa de boa sorte vinda de contexto militar histórico (o cavalo chega e a vitória já vem). Trate cada chéngyǔ como uma unidade de significado só.

### Exemplos adicionais com chéngyǔ
- 不要半途而废，继续加油！ → bù yào bàn tú ér fèi, jìxù jiāyóu! → Não desista no meio do caminho, continue!
- 这件事一目了然 → zhè jiàn shì yī mù liǎo rán → Esse assunto é óbvio à primeira vista
- 熟能生巧，多练习就好 → shú néng shēng qiǎo, duō liànxí jiù hǎo → A prática leva à perfeição, basta praticar mais
- 祝你马到成功！ → zhù nǐ mǎ dào chénggōng! → Desejo que você tenha sucesso rapidamente!
- 这个方法一石二鸟，又快又省钱 → zhège fāngfǎ yī shí èr niǎo, yòu kuài yòu shěng qián → Esse método mata dois coelhos de uma cajadada — é rápido e econômico`,
    exercises: [
      {
        sentences: [
          { prompt: 'Não tem problema!', answers: ['méi wèntí — 没问题', 'méi wèntí', 'mei wenti', '没问题'] },
          { prompt: 'Tanto faz — você decide.', answers: ['suíbiàn, nǐ jué dìng ba — 随便，你决定吧', 'suíbiàn, nǐ jué dìng ba', 'suibian, ni jue ding ba', '随便，你决定吧'] },
          { prompt: 'Não há como — o bilhete está esgotado.', answers: ['méi bànfǎ, piào mài wán le — 没办法，票卖完了', 'méi bànfǎ, piào mài wán le', 'mei banfa, piao mai wan le', '没办法，票卖完了'] },
          { prompt: 'Deixa pra lá, não vale a pena.', answers: ['suàn le, bù zhíde — 算了，不值得', 'suàn le, bù zhíde', 'suan le, bu zhide', '算了，不值得'] },
          { prompt: 'A prática leva à perfeição.', answers: ['shú néng shēng qiǎo — 熟能生巧', 'shú néng shēng qiǎo', 'shu neng sheng qiao', '熟能生巧'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Mais ou menos — ainda não terminei.', answers: ['chàbuduō le, hái méi zuò wán — 差不多了，还没做完', 'chàbuduō le, hái méi zuò wán', 'chabuduo le, hai mei zuo wan', '差不多了，还没做完'] },
          { prompt: 'Matar dois coelhos de uma cajadada.', answers: ['yī shí èr niǎo — 一石二鸟', 'yī shí èr niǎo', 'yi shi er niao', '一石二鸟'] },
          { prompt: 'Não desista no meio do caminho.', answers: ['bù yào bàn tú ér fèi — 不要半途而废', 'bù yào bàn tú ér fèi', 'bu yao ban tu er fei', '不要半途而废'] },
          { prompt: 'Está óbvio à primeira vista.', answers: ['yī mù liǎo rán — 一目了然', 'yī mù liǎo rán', 'yi mu liao ran', '一目了然'] },
          { prompt: 'Boa sorte! (que o sucesso chegue logo)', answers: ['mǎ dào chénggōng — 马到成功', 'mǎ dào chénggōng', 'ma dao chenggong', '马到成功'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Você fala bem mandarim — quase igual a um nativo.', answers: ['nǐ pǔtōnghuà shuō de hěn hǎo, chàbuduō gēn běndìrén yīyàng — 你普通话说得很好，差不多跟本地人一样', 'nǐ pǔtōnghuà shuō de hěn hǎo, chàbuduō gēn běndìrén yīyàng', 'ni putonghua shuo de hen hao, chabuduo gen bendi ren yiyang', '你普通话说得很好，差不多跟本地人一样'] },
          { prompt: 'Não há como — o trânsito está horrível.', answers: ['méi bànfǎ, dùchē dùde hěn yánzhòng — 没办法，堵车堵得很严重', 'méi bànfǎ, dùchē dùde hěn yánzhòng', 'mei banfa, duche dude hen yanzhong', '没办法，堵车堵得很严重'] },
          { prompt: 'Continue praticando — a prática leva à perfeição.', answers: ['jìxù liànxí ba, shú néng shēng qiǎo — 继续练习吧，熟能生巧', 'jìxù liànxí ba, shú néng shēng qiǎo', 'jixu lianxi ba, shu neng sheng qiao', '继续练习吧，熟能生巧'] },
          { prompt: 'Deixa pra lá, acontece com todo mundo.', answers: ['suàn le, shéi dōu yǒu zhèyàng de shíhòu — 算了，谁都有这样的时候', 'suàn le, shéi dōu yǒu zhèyàng de shíhòu', 'suan le, shei dou you zheyang de shihou', '算了，谁都有这样的时候'] },
          { prompt: 'Tanto faz, você escolhe o restaurante.', answers: ['suíbiàn, nǐ xuǎn cānguǎn ba — 随便，你选餐馆吧', 'suíbiàn, nǐ xuǎn cānguǎn ba', 'suibian, ni xuan canguan ba', '随便，你选餐馆吧'] },
        ],
      },
      {
        title: '🀄 Reconhecimento de caracteres',
        sentences: [
          { prompt: '没问题 — O que significa?', answers: ['sem problema', 'tudo certo', 'no problem', 'ok'] },
          { prompt: '随便 — O que significa?', answers: ['tanto faz', 'à vontade', 'whatever', 'up to you'] },
          { prompt: '算了 — O que significa?', answers: ['deixa pra lá', 'esqueça', 'forget it', 'never mind'] },
          { prompt: '差不多 — O que significa?', answers: ['mais ou menos', 'quase', 'more or less', 'almost'] },
          { prompt: '熟能生巧 — O que significa este chéngyǔ?', answers: ['a prática leva à perfeição', 'practice makes perfect'] },
        ],
      },
    ],
  },

  {
    id: 'adv-zh-5', language: 'zh', stage: 'Avançado', order: 5,
    title: 'Estrutura ba e bei — voz passiva',
    subtitle: '把 (bǎ) e 被 (bèi) — ênfase no objeto e na ação sofrida',
    theory: `## 把 (bǎ) — ênfase no objeto da ação (construção "disposal")

A estrutura **把 (bǎ)** é uma das mais difíceis para falantes de português porque **não existe equivalente direto**. Ela move o objeto para **antes** do verbo, e serve para dizer que esse objeto específico sofreu uma ação que o afetou, moveu ou transformou de algum jeito definido.

### Estrutura
| Estrutura | Exemplo | Pinyin |
|-----------|---------|--------|
| Sujeito + 把 + Objeto + Verbo + Complemento | 我把菜吃完了 | wǒ bǎ cài chī wán le (comi toda a comida) |

- 你把书放在哪里？ → nǐ bǎ shū fàng zài nǎlǐ? → Onde você colocou o livro?
- 她把门关上了 → tā bǎ mén guān shàng le → Ela fechou a porta

### Quando 把 é obrigatório vs. opcional
把 não é apenas estilístico — é **obrigatório** quando o objeto é específico/definido E o verbo tem um complemento que indica resultado, direção ou destino (完, 好, 上, 在 + lugar, etc.). Sem 把 nesses casos, a frase fica gramaticalmente estranha ou ambígua:
- ✅ 我把钥匙放在包里了 (wǒ bǎ yàoshi fàng zài bāo lǐ le) — coloquei a chave na bolsa
- ❌ 我放钥匙在包里了 — soa estranho/incompleto sem 把

Já com verbos simples sem complemento de resultado, ou objetos genéricos/indefinidos, **não se usa** 把:
- ✅ 我喜欢猫 (wǒ xǐhuān māo) — eu gosto de gatos (não precisa de 把: "gostar" não move/transforma o objeto)

⚠️ **Erro comum nº1 — ordem de palavras**: tentar manter a ordem do português (Sujeito-Verbo-Objeto) e simplesmente inserir 把 antes do verbo sem mover o objeto. A estrutura correta é **Sujeito + 把 + Objeto + Verbo + Complemento** — o objeto sai do lugar de costume e vai para logo depois de 把.
- ❌ 我吃把饭完了
- ✅ 我把饭吃完了 (wǒ bǎ fàn chī wán le)

⚠️ **Erro comum nº2 — verbo sem complemento**: o verbo após 把 **precisa** de algo a mais (complemento resultativo, partícula 了, ou outro elemento) — não pode ficar sozinho.
- ❌ 我把书看 (incompleto)
- ✅ 我把书看完了 (wǒ bǎ shū kàn wán le) — terminei de ler o livro

## 被 (bèi) — voz passiva

**被 (bèi)** indica que o sujeito da frase **sofreu** a ação, com o agente (quem praticou a ação) aparecendo opcionalmente depois de 被:

| Estrutura | Exemplo | Pinyin |
|-----------|---------|--------|
| Sujeito + 被 + (Agente) + Verbo + Complemento | 他被狗咬了 | tā bèi gǒu yǎo le (ele foi mordido pelo cachorro) |

- 这个问题被她解决了 → zhège wèntí bèi tā jiějué le → O problema foi resolvido por ela
- 我被老师批评了 → wǒ bèi lǎoshī pīpíng le → Fui criticado pelo professor

⚠️ **Erro comum**: usar 被 em qualquer frase passiva, copiando o hábito do português de usar a voz passiva livremente ("o jantar foi feito por minha mãe"). Em mandarim, frases passivas neutras/positivas costumam preferir a estrutura **是…的** em vez de 被: "晚饭是我妈妈做的" (wǎnfàn shì wǒ māma zuò de) é mais natural que "晚饭被我妈妈做了". **被** é reservado principalmente para situações **negativas, indesejadas ou de infortúnio** — roubo, dano, crítica, acidente.

## 把 vs. 被 — não são opostos, mas se relacionam
| Estrutura | Foco | Conotação |
|-----------|------|-----------|
| 把 | o que o sujeito FEZ ao objeto | neutra, qualquer resultado |
| 被 | o que ACONTECEU com o sujeito (passivo) | geralmente negativa/indesejada |

### Exemplos adicionais
- 请把灯关掉 → qǐng bǎ dēng guān diào → Por favor apague a luz
- 她把那本书一天看完了 → tā bǎ nà běn shū yī tiān kàn wán le → Ela leu o livro inteiro em um dia
- 我的车被偷了 → wǒ de chē bèi tōu le → Meu carro foi roubado
- 钱包被他丢了 → qiánbāo bèi tā diū le → A carteira foi perdida por ele
- 把工作做完了吗？ → bǎ gōngzuò zuò wán le ma? → Você terminou o trabalho?

## Vocabulário-chave

• 钥匙 (yàoshi) — chave
• 咬 (yǎo) — morder
• 批评 (pīpíng) — criticar
• 偷 (tōu) — roubar
• 丢 (diū) — perder/jogar fora`,
    exercises: [
      {
        sentences: [
          { prompt: 'Ela fechou a janela.', answers: ['tā bǎ chuānghu guān shàng le — 她把窗户关上了', 'tā bǎ chuānghu guān shàng le', 'ta ba chuanghu guan shang le', '她把窗户关上了'] },
          { prompt: 'Ele comeu todo o arroz.', answers: ['tā bǎ fàn chī wán le — 他把饭吃完了', 'tā bǎ fàn chī wán le', 'ta ba fan chi wan le', '他把饭吃完了'] },
          { prompt: 'Por favor coloque o livro na mesa.', answers: ['qǐng bǎ shū fàng zài zhuōzi shàng — 请把书放在桌子上', 'qǐng bǎ shū fàng zài zhuōzi shàng', 'qing ba shu fang zai zhuozi shang', '请把书放在桌子上'] },
          { prompt: 'Eu fui mordido por um cachorro.', answers: ['wǒ bèi gǒu yǎo le — 我被狗咬了', 'wǒ bèi gǒu yǎo le', 'wo bei gou yao le', '我被狗咬了'] },
          { prompt: 'O problema foi resolvido.', answers: ['wèntí bèi jiějué le — 问题被解决了', 'wèntí bèi jiějué le', 'wenti bei jiejue le', '问题被解决了'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ela bebeu toda a água.', answers: ['tā bǎ shuǐ hē wán le — 她把水喝完了', 'tā bǎ shuǐ hē wán le', 'ta ba shui he wan le', '她把水喝完了'] },
          { prompt: 'Ele jogou fora o documento errado.', answers: ['tā bǎ cuò de wénjian diū le — 他把错的文件丢了', 'tā bǎ cuò de wénjian diū le', 'ta ba cuo de wenjian diu le', '他把错的文件丢了'] },
          { prompt: 'Fui criticado pelo professor.', answers: ['wǒ bèi lǎoshī pīpíng le — 我被老师批评了', 'wǒ bèi lǎoshī pīpíng le', 'wo bei laoshi piping le', '我被老师批评了'] },
          { prompt: 'O carro foi roubado.', answers: ['chē bèi tōu le — 车被偷了', 'chē bèi tōu le', 'che bei tou le', '车被偷了'] },
          { prompt: 'Você terminou o trabalho?', answers: ['nǐ bǎ gōngzuò zuò wán le ma — 你把工作做完了吗', 'nǐ bǎ gōngzuò zuò wán le ma', 'ni ba gongzuo zuo wan le ma', '你把工作做完了吗'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu guardei as chaves na bolsa.', answers: ['wǒ bǎ yàoshi fàng zài bāo lǐ le — 我把钥匙放在包里了', 'wǒ bǎ yàoshi fàng zài bāo lǐ le', 'wo ba yaoshi fang zai bao li le', '我把钥匙放在包里了'] },
          { prompt: 'Ela leu o livro inteiro em um dia.', answers: ['tā bǎ nà běn shū yī tiān kàn wán le — 她把那本书一天看完了', 'tā bǎ nà běn shū yī tiān kàn wán le', 'ta ba na ben shu yi tian kan wan le', '她把那本书一天看完了'] },
          { prompt: 'O jantar foi preparado pela minha mãe.', answers: ['wǎnfàn shì wǒ māma zuò de — 晚饭是我妈妈做的', 'wǎnfàn bèi wǒ māma zuò le', 'wanfan shi wo mama zuo de', '晚饭是我妈妈做的'] },
          { prompt: 'Apague as luzes antes de sair.', answers: ['chūqù qián bǎ dēng guān diào — 出去前把灯关掉', 'chūqù qián bǎ dēng guān diào', 'chuqu qian ba deng guan diao', '出去前把灯关掉'] },
          { prompt: 'O email foi enviado pelo chefe.', answers: ['diànzǐ yóujiàn bèi lǎobǎn fā le — 电子邮件被老板发了', 'diànzǐ yóujiàn bèi lǎobǎn fā le', 'dianzi youjian bei laoban fa le', '电子邮件被老板发了'] },
        ],
      },
      {
        title: '🀄 Reconhecimento de caracteres',
        sentences: [
          { prompt: '把 — Para que serve esta estrutura?', answers: ['ênfase no objeto', 'objeto antes do verbo', 'object emphasis', 'disposal'] },
          { prompt: '被 — Para que serve este caractere?', answers: ['voz passiva', 'ação sofrida', 'passive voice', 'was done to'] },
          { prompt: '门 关上了 — O que significa?', answers: ['a porta foi fechada', 'the door was closed'] },
          { prompt: '钥匙 — O que significa?', answers: ['chave', 'chaves', 'key', 'keys'] },
          { prompt: '问题 — O que significa?', answers: ['problema', 'questão', 'problem', 'question'] },
        ],
      },
    ],
  },

  {
    id: 'rev-adv-zh', language: 'zh', stage: 'Avançado', order: 99, isReview: true,
    title: 'Revisão — Avançado',
    subtitle: '过, 在/着, condicionais, expressões idiomáticas e 把/被',
    theory: null,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu já fui à China.', answers: ['wǒ qù guò Zhōngguó — 我去过中国', 'wǒ qù guò Zhōngguó', 'wo qu guo Zhongguo', '我去过中国'] },
          { prompt: 'Ela está comendo agora.', answers: ['tā zhèngzài chī fàn — 她正在吃饭', 'tā zhèngzài chī fàn', 'ta zhengzai chi fan', '她正在吃饭'] },
          { prompt: 'Se chover amanhã, não vamos.', answers: ['rúguǒ míngtiān xià yǔ, wǒmen jiù bù qù — 如果明天下雨，我们就不去', 'rúguǒ míngtiān xià yǔ, wǒmen jiù bù qù', 'ruguo mingtian xia yu, women jiu bu qu', '如果明天下雨，我们就不去'] },
          { prompt: 'Não tem problema!', answers: ['méi wèntí — 没问题', 'méi wèntí', 'mei wenti', '没问题'] },
          { prompt: 'Ela fechou a janela.', answers: ['tā bǎ chuānghu guān shàng le — 她把窗户关上了', 'tā bǎ chuānghu guān shàng le', 'ta ba chuanghu guan shang le', '她把窗户关上了'] },
          { prompt: 'Embora seja difícil, é muito interessante.', answers: ['suīrán hěn nán, dànshì hěn yǒuyìsi — 虽然很难，但是很有意思', 'suīrán hěn nán, dànshì hěn yǒuyìsi', 'suiran hen nan, danshi hen youyisi', '虽然很难，但是很有意思'] },
          { prompt: 'A porta está aberta.', answers: ['mén kāi zhe — 门开着', 'mén kāi zhe', 'men kai zhe', '门开着'] },
          { prompt: 'O carro foi roubado.', answers: ['chē bèi tōu le — 车被偷了', 'chē bèi tōu le', 'che bei tou le', '车被偷了'] },
        ],
      },
    ],
    dialogExercise: {
      audioText: 'rúguǒ míngtiān bù xià yǔ, wǒmen jiù qù pá shān. wǒ yǐjīng qù guò Huángshān liǎng cì le.',
      question: 'O que a pessoa diz sobre a Montanha Amarela?',
      options: [
        { text: 'Já foi à Montanha Amarela duas vezes.', correct: true },
        { text: 'Nunca foi à Montanha Amarela.', correct: false },
        { text: 'Quer ir à Montanha Amarela pela primeira vez.', correct: false },
        { text: 'Já foi à Montanha Amarela uma vez.', correct: false },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  //  VARIADOS
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'var-zh-1', language: 'zh', stage: 'Variados', order: 1,
    title: 'Treino geral — nível iniciante a básico',
    subtitle: 'Saudações, pronomes, números e ações cotidianas',
    theory: null,
    exercises: [
      { sentences: [
        { prompt: 'Olá, como vai?', answers: ['nǐ hǎo, nǐ hǎo ma — 你好，你好吗', 'nǐ hǎo, nǐ hǎo ma', 'ni hao, ni hao ma', '你好，你好吗'] },
        { prompt: 'Estou bem, obrigado.', answers: ['wǒ hěn hǎo, xièxiè — 我很好，谢谢', 'wǒ hěn hǎo, xièxiè', 'wo hen hao, xie xie', '我很好，谢谢'] },
        { prompt: 'Meu nome é João.', answers: ['wǒ jiào Ruǎo — 我叫若昂', 'wǒ jiào Ruǎo', 'wo jiao Ruao', '我叫若昂'] },
        { prompt: 'Eu sou brasileiro.', answers: ['wǒ shì bāxīrén — 我是巴西人', 'wǒ shì bāxīrén', 'wo shi baxiren', '我是巴西人'] },
        { prompt: 'Prazer em conhecê-lo.', answers: ['rènshí nǐ hěn gāoxìng — 认识你很高兴', 'rènshí nǐ hěn gāoxìng', 'renshi ni hen gaoxing', '认识你很高兴'] },
      ]},
      { sentences: [
        { prompt: 'Qual é o seu nome?', answers: ['nǐ jiào shénme míngzì — 你叫什么名字', 'nǐ jiào shénme míngzì', 'ni jiao shenme mingzi', '你叫什么名字'] },
        { prompt: 'De onde você é?', answers: ['nǐ shì nǎ guó rén — 你是哪国人', 'nǐ shì nǎ guó rén', 'ni shi na guo ren', '你是哪国人'] },
        { prompt: 'Eu tenho trinta anos.', answers: ['wǒ sānshí suì — 我三十岁', 'wǒ sānshí suì', 'wo sanshi sui', '我三十岁'] },
        { prompt: 'Você tem filhos?', answers: ['nǐ yǒu háizi ma — 你有孩子吗', 'nǐ yǒu háizi ma', 'ni you haizi ma', '你有孩子吗'] },
        { prompt: 'Tenho um filho e uma filha.', answers: ['wǒ yǒu yī gè érzǐ hé yī gè nǚér — 我有一个儿子和一个女儿', 'wǒ yǒu yī gè érzǐ hé yī gè nǚér', 'wo you yi ge erzi he yi ge nüer', '我有一个儿子和一个女儿'] },
      ]},
      { sentences: [
        { prompt: 'Bom dia!', answers: ['zǎoshang hǎo — 早上好', 'zǎoshang hǎo', 'zaoshang hao', '早上好'] },
        { prompt: 'Boa noite!', answers: ['wǎnshang hǎo — 晚上好', 'wǎnshang hǎo', 'wanshang hao', '晚上好'] },
        { prompt: 'Tchau, até logo!', answers: ['zàijiàn — 再见', 'zàijiàn', 'zaijian', '再见'] },
        { prompt: 'Desculpe, onde fica o banheiro?', answers: ['duìbuqǐ, xǐshǒujiān zài nǎlǐ — 对不起，洗手间在哪里', 'duìbuqǐ, xǐshǒujiān zài nǎlǐ', 'dui bu qi, xishoujian zai nali', '对不起，洗手间在哪里'] },
        { prompt: 'Está ali, à direita.', answers: ['zài nàlǐ, yòubiān — 在那里，右边', 'zài nàlǐ, yòubiān', 'zai nali, youbian', '在那里，右边'] },
      ]},
      { sentences: [
        { prompt: 'Eu como arroz todo dia.', answers: ['wǒ měitiān chī fàn — 我每天吃饭', 'wǒ měitiān chī fàn', 'wo meitian chi fan', '我每天吃饭'] },
        { prompt: 'Ela bebe chá pela manhã.', answers: ['tā zǎoshang hē chá — 她早上喝茶', 'tā zǎoshang hē chá', 'ta zaoshang he cha', '她早上喝茶'] },
        { prompt: 'Eles estudam mandarim.', answers: ['tāmen xuéxí pǔtōnghuà — 他们学习普通话', 'tāmen xuéxí pǔtōnghuà', 'tamen xuexi putonghua', '他们学习普通话'] },
        { prompt: 'Ele trabalha num hospital.', answers: ['tā zài yīyuàn gōngzuò — 他在医院工作', 'tā zài yīyuàn gōngzuò', 'ta zai yiyuan gongzuo', '他在医院工作'] },
        { prompt: 'Nós gostamos de assistir filmes.', answers: ['wǒmen xǐhuān kàn diànyǐng — 我们喜欢看电影', 'wǒmen xǐhuān kàn diànyǐng', 'women xihuan kan dianying', '我们喜欢看电影'] },
      ]},
      { sentences: [
        { prompt: 'Quanto custa?', answers: ['duōshǎo qián — 多少钱', 'duōshǎo qián', 'duoshao qian', '多少钱'] },
        { prompt: 'Está caro demais.', answers: ['tài guì le — 太贵了', 'tài guì le', 'tai gui le', '太贵了'] },
        { prompt: 'Tem algo mais barato?', answers: ['yǒu piányí yīdiǎn de ma — 有便宜一点的吗', 'yǒu piányí yīdiǎn de ma', 'you pianyi yidian de ma', '有便宜一点的吗'] },
        { prompt: 'Eu quero comprar este.', answers: ['wǒ yào mǎi zhège — 我要买这个', 'wǒ yào mǎi zhège', 'wo yao mai zhege', '我要买这个'] },
        { prompt: 'Posso pagar com cartão?', answers: ['wǒ kěyǐ yòng xìnyòngkǎ ma — 我可以用信用卡吗', 'wǒ kěyǐ yòng xìnyòngkǎ ma', 'wo keyi yong xinyongka ma', '我可以用信用卡吗'] },
      ]},
      { sentences: [
        { prompt: 'Eu moro em São Paulo.', answers: ['wǒ zhù zài Shèngbǎoluó — 我住在圣保罗', 'wǒ zhù zài Shèngbǎoluó', 'wo zhu zai Shengbaoluo', '我住在圣保罗'] },
        { prompt: 'Ela mora perto do trabalho.', answers: ['tā zhù zài gōngzuò fùjìn — 她住在工作附近', 'tā zhù zài gōngzuò fùjìn', 'ta zhu zai gongzuo fujin', '她住在工作附近'] },
        { prompt: 'O banco está à esquerda.', answers: ['yínháng zài zuǒbiān — 银行在左边', 'yínháng zài zuǒbiān', 'yinhang zai zuobian', '银行在左边'] },
        { prompt: 'Vire à direita no semáforo.', answers: ['dào hónglǜdēng wǎng yòu zhuǎn — 到红绿灯往右转', 'dào hónglǜdēng wǎng yòu zhuǎn', 'dao honglüdeng wang you zhuan', '到红绿灯往右转'] },
        { prompt: 'Siga em frente por duzentos metros.', answers: ['yīzhí zǒu liǎng bǎi mǐ — 一直走两百米', 'yīzhí zǒu liǎng bǎi mǐ', 'yizhi zou liang bai mi', '一直走两百米'] },
      ]},
      { sentences: [
        { prompt: 'Hoje é segunda-feira.', answers: ['jīntiān shì xīngqīyī — 今天是星期一', 'jīntiān shì xīngqīyī', 'jintian shi xingqiyi', '今天是星期一'] },
        { prompt: 'Amanhã é meu aniversário.', answers: ['míngtiān shì wǒ de shēngrì — 明天是我的生日', 'míngtiān shì wǒ de shēngrì', 'mingtian shi wo de shengri', '明天是我的生日'] },
        { prompt: 'Ontem eu descansei em casa.', answers: ['zuótiān wǒ zài jiā xiūxi — 昨天我在家休息', 'zuótiān wǒ zài jiā xiūxi', 'zuotian wo zai jia xiuxi', '昨天我在家休息'] },
        { prompt: 'Que horas são?', answers: ['xiànzài jǐ diǎn — 现在几点', 'xiànzài jǐ diǎn', 'xianzai ji dian', '现在几点'] },
        { prompt: 'São sete e meia da tarde.', answers: ['xiànzài wǎnshang qī diǎn bàn — 现在晚上七点半', 'xiànzài wǎnshang qī diǎn bàn', 'xianzai wanshang qi dian ban', '现在晚上七点半'] },
      ]},
      { sentences: [
        { prompt: 'Meu pai é professor.', answers: ['wǒ bàba shì lǎoshī — 我爸爸是老师', 'wǒ bàba shì lǎoshī', 'wo baba shi laoshi', '我爸爸是老师'] },
        { prompt: 'Minha mãe gosta de cozinhar.', answers: ['wǒ māma xǐhuān zuò cài — 我妈妈喜欢做菜', 'wǒ māma xǐhuān zuò cài', 'wo mama xihuan zuo cai', '我妈妈喜欢做菜'] },
        { prompt: 'Meu irmão mais novo tem quinze anos.', answers: ['wǒ dìdi shíwǔ suì — 我弟弟十五岁', 'wǒ dìdi shíwǔ suì', 'wo didi shiwu sui', '我弟弟十五岁'] },
        { prompt: 'Ela é minha melhor amiga.', answers: ['tā shì wǒ zuì hǎo de péngyǒu — 她是我最好的朋友', 'tā shì wǒ zuì hǎo de péngyǒu', 'ta shi wo zui hao de pengyou', '她是我最好的朋友'] },
        { prompt: 'Meus avós moram no campo.', answers: ['wǒ yéye nǎinai zhù zài nóngcūn — 我爷爷奶奶住在农村', 'wǒ yéye nǎinai zhù zài nóngcūn', 'wo yeye nainai zhu zai nongcun', '我爷爷奶奶住在农村'] },
      ]},
      { sentences: [
        { prompt: 'A comida está muito deliciosa.', answers: ['zhège cài hěn hǎochī — 这个菜很好吃', 'zhège cài hěn hǎochī', 'zhege cai hen haochi', '这个菜很好吃'] },
        { prompt: 'O café está quente.', answers: ['kāfēi hěn rè — 咖啡很热', 'kāfēi hěn rè', 'kafei hen re', '咖啡很热'] },
        { prompt: 'Estou com fome.', answers: ['wǒ hěn è — 我很饿', 'wǒ hěn è', 'wo hen e', '我很饿'] },
        { prompt: 'Você quer mais?', answers: ['nǐ hái yào ma — 你还要吗', 'nǐ hái yào ma', 'ni hai yao ma', '你还要吗'] },
        { prompt: 'Não, obrigado, já estou satisfeito.', answers: ['bù yòng le, xièxiè, wǒ chī bǎo le — 不用了，谢谢，我吃饱了', 'bù yòng le, xièxiè, wǒ chī bǎo le', 'bu yong le, xie xie, wo chi bao le', '不用了，谢谢，我吃饱了'] },
      ]},
      { sentences: [
        { prompt: 'O tempo hoje está ótimo.', answers: ['jīntiān tiānqì hěn hǎo — 今天天气很好', 'jīntiān tiānqì hěn hǎo', 'jintian tianqi hen hao', '今天天气很好'] },
        { prompt: 'Está chovendo lá fora.', answers: ['wàimiàn zài xià yǔ — 外面在下雨', 'wàimiàn zài xià yǔ', 'waimian zai xia yu', '外面在下雨'] },
        { prompt: 'Está muito frio hoje.', answers: ['jīntiān hěn lěng — 今天很冷', 'jīntiān hěn lěng', 'jintian hen leng', '今天很冷'] },
        { prompt: 'O verão em São Paulo é muito quente.', answers: ['Shèngbǎoluó de xiàtiān hěn rè — 圣保罗的夏天很热', 'Shèngbǎoluó de xiàtiān hěn rè', 'Shengbaoluo de xiatian hen re', '圣保罗的夏天很热'] },
        { prompt: 'Vai chover amanhã?', answers: ['míngtiān huì xià yǔ ma — 明天会下雨吗', 'míngtiān huì xià yǔ ma', 'mingtian hui xia yu ma', '明天会下雨吗'] },
      ]},
      { sentences: [
        { prompt: 'Eu vou de metrô.', answers: ['wǒ zuò dìtiě qù — 我坐地铁去', 'wǒ zuò dìtiě qù', 'wo zuo ditie qu', '我坐地铁去'] },
        { prompt: 'Quanto tempo leva de táxi?', answers: ['zuò chūzūchē yào duō cháng shíjiān — 坐出租车要多长时间', 'zuò chūzūchē yào duō cháng shíjiān', 'zuo chuzuche yao duo chang shijian', '坐出租车要多长时间'] },
        { prompt: 'O trem parte às oito.', answers: ['huǒchē bā diǎn chūfā — 火车八点出发', 'huǒchē bā diǎn chūfā', 'huoche ba dian chufa', '火车八点出发'] },
        { prompt: 'Onde fica a parada de ônibus?', answers: ['gōngjiāochē zhàn zài nǎlǐ — 公交车站在哪里', 'gōngjiāochē zhàn zài nǎlǐ', 'gongjiaoche zhan zai nali', '公交车站在哪里'] },
        { prompt: 'Prefiro ir a pé.', answers: ['wǒ gèng xǐhuān zǒulù qù — 我更喜欢走路去', 'wǒ gèng xǐhuān zǒulù qù', 'wo geng xihuan zoulu qu', '我更喜欢走路去'] },
      ]},
      { sentences: [
        { prompt: 'Eu gosto de música pop.', answers: ['wǒ xǐhuān liúxíng yīnyuè — 我喜欢流行音乐', 'wǒ xǐhuān liúxíng yīnyuè', 'wo xihuan liuxing yinyue', '我喜欢流行音乐'] },
        { prompt: 'Ela não gosta de esportes.', answers: ['tā bù xǐhuān yùndòng — 她不喜欢运动', 'tā bù xǐhuān yùndòng', 'ta bu xihuan yundong', '她不喜欢运动'] },
        { prompt: 'O que você gosta de fazer no fim de semana?', answers: ['nǐ zhōumò xǐhuān zuò shénme — 你周末喜欢做什么', 'nǐ zhōumò xǐhuān zuò shénme', 'ni zhoumo xihuan zuo shenme', '你周末喜欢做什么'] },
        { prompt: 'Gosto de jogar futebol.', answers: ['wǒ xǐhuān tī zúqiú — 我喜欢踢足球', 'wǒ xǐhuān tī zúqiú', 'wo xihuan ti zuqiu', '我喜欢踢足球'] },
        { prompt: 'Eles adoram viajar para o exterior.', answers: ['tāmen fēicháng xǐhuān chūguó lǚxíng — 他们非常喜欢出国旅行', 'tāmen fēicháng xǐhuān chūguó lǚxíng', 'tamen feichang xihuan chuguo lüxing', '他们非常喜欢出国旅行'] },
      ]},
      { sentences: [
        { prompt: 'Eu preciso de uma garrafa de água.', answers: ['wǒ yào yī píng shuǐ — 我要一瓶水', 'wǒ yào yī píng shuǐ', 'wo yao yi ping shui', '我要一瓶水'] },
        { prompt: 'Me dá dois cafés, por favor.', answers: ['qǐng gěi wǒ liǎng bēi kāfēi — 请给我两杯咖啡', 'qǐng gěi wǒ liǎng bēi kāfēi', 'qing gei wo liang bei kafei', '请给我两杯咖啡'] },
        { prompt: 'A conta, por favor.', answers: ['qǐng mǎidān — 请买单', 'qǐng mǎidān', 'qing maidan', '请买单'] },
        { prompt: 'Está incluído o serviço?', answers: ['bāohuò fúwùfèi ma — 包括服务费吗', 'bāohuò fúwùfèi ma', 'baohuo fuwufei ma', '包括服务费吗'] },
        { prompt: 'Está delicioso, obrigado!', answers: ['hěn hǎochī, xièxiè — 很好吃，谢谢', 'hěn hǎochī, xièxiè', 'hen haochi, xie xie', '很好吃，谢谢'] },
      ]},
      { sentences: [
        { prompt: 'Tenho uma reunião às dez.', answers: ['wǒ shí diǎn yǒu huìyì — 我十点有会议', 'wǒ shí diǎn yǒu huìyì', 'wo shi dian you huiyi', '我十点有会议'] },
        { prompt: 'Estou muito ocupado esta semana.', answers: ['wǒ zhège xīngqī hěn máng — 我这个星期很忙', 'wǒ zhège xīngqī hěn máng', 'wo zhege xingqi hen mang', '我这个星期很忙'] },
        { prompt: 'Você está livre amanhã?', answers: ['nǐ míngtiān yǒu kòng ma — 你明天有空吗', 'nǐ míngtiān yǒu kòng ma', 'ni mingtian you kong ma', '你明天有空吗'] },
        { prompt: 'Sim, estou livre à tarde.', answers: ['yǒu, wǒ xiàwǔ yǒu kòng — 有，我下午有空', 'yǒu, wǒ xiàwǔ yǒu kòng', 'you, wo xiawu you kong', '有，我下午有空'] },
        { prompt: 'Vamos jantar juntos?', answers: ['wǒmen yīqǐ chī wǎnfàn ba — 我们一起吃晚饭吧', 'wǒmen yīqǐ chī wǎnfàn ba', 'women yiqi chi wanfan ba', '我们一起吃晚饭吧'] },
      ]},
      { sentences: [
        { prompt: 'Eu não entendo, pode repetir?', answers: ['wǒ bù dǒng, kěyǐ zài shuō yī biàn ma — 我不懂，可以再说一遍吗', 'wǒ bù dǒng, kěyǐ zài shuō yī biàn ma', 'wo bu dong, keyi zai shuo yi bian ma', '我不懂，可以再说一遍吗'] },
        { prompt: 'Fale mais devagar, por favor.', answers: ['qǐng shuō màn yīdiǎn — 请说慢一点', 'qǐng shuō màn yīdiǎn', 'qing shuo man yidian', '请说慢一点'] },
        { prompt: 'Como se diz isso em mandarim?', answers: ['zhège pǔtōnghuà zěnme shuō — 这个普通话怎么说', 'zhège pǔtōnghuà zěnme shuō', 'zhege putonghua zenme shuo', '这个普通话怎么说'] },
        { prompt: 'Você fala inglês?', answers: ['nǐ huì shuō yīngwén ma — 你会说英文吗', 'nǐ huì shuō yīngwén ma', 'ni hui shuo yingwen ma', '你会说英文吗'] },
        { prompt: 'Só um pouco.', answers: ['zhǐ huì yīdiǎn — 只会一点', 'zhǐ huì yīdiǎn', 'zhi hui yidian', '只会一点'] },
      ]},
      { sentences: [
        { prompt: 'Onde posso encontrar um médico?', answers: ['wǒ zài nǎlǐ kěyǐ kàn yīshēng — 我在哪里可以看医生', 'wǒ zài nǎlǐ kěyǐ kàn yīshēng', 'wo zai nali keyi kan yisheng', '我在哪里可以看医生'] },
        { prompt: 'Estou doente.', answers: ['wǒ shēngbìng le — 我生病了', 'wǒ shēngbìng le', 'wo shengbing le', '我生病了'] },
        { prompt: 'Tenho dor de cabeça.', answers: ['wǒ tóuténg — 我头疼', 'wǒ tóuténg', 'wo touteng', '我头疼'] },
        { prompt: 'Preciso de um remédio.', answers: ['wǒ xūyào yào — 我需要药', 'wǒ xūyào yào', 'wo xuyao yao', '我需要药'] },
        { prompt: 'O hospital fica longe daqui?', answers: ['yīyuàn lí zhèlǐ yuǎn ma — 医院离这里远吗', 'yīyuàn lí zhèlǐ yuǎn ma', 'yiyuan li zheli yuan ma', '医院离这里远吗'] },
      ]},
      { sentences: [
        { prompt: 'Eu moro num apartamento pequeno.', answers: ['wǒ zhù zài yī gè xiǎo gōngyù — 我住在一个小公寓', 'wǒ zhù zài yī gè xiǎo gōngyù', 'wo zhu zai yi ge xiao gongyu', '我住在一个小公寓'] },
        { prompt: 'O aluguel está muito caro.', answers: ['fángzū hěn guì — 房租很贵', 'fángzū hěn guì', 'fangzu hen gui', '房租很贵'] },
        { prompt: 'Há dois quartos no apartamento.', answers: ['gōngyù lǐ yǒu liǎng gè wòshì — 公寓里有两个卧室', 'gōngyù lǐ yǒu liǎng gè wòshì', 'gongyu li you liang ge woshi', '公寓里有两个卧室'] },
        { prompt: 'A janela dá para a rua.', answers: ['chuānghu miàn zhe jiē — 窗户面着街', 'chuānghu miàn zhe jiē', 'chuanghu mian zhe jie', '窗户面着街'] },
        { prompt: 'Fico em casa nos fins de semana.', answers: ['zhōumò wǒ dāi zài jiā — 周末我待在家', 'zhōumò wǒ dāi zài jiā', 'zhoumo wo dai zai jia', '周末我待在家'] },
      ]},
      { sentences: [
        { prompt: 'Eu trabalho das nove às seis.', answers: ['wǒ cóng jiǔ diǎn gōngzuò dào liù diǎn — 我从九点工作到六点', 'wǒ cóng jiǔ diǎn gōngzuò dào liù diǎn', 'wo cong jiu dian gongzuo dao liu dian', '我从九点工作到六点'] },
        { prompt: 'O meu chefe é muito exigente.', answers: ['wǒ de lǎobǎn hěn yánlì — 我的老板很严厉', 'wǒ de lǎobǎn hěn yánlì', 'wo de laoban hen yanli', '我的老板很严厉'] },
        { prompt: 'Gosto do meu trabalho.', answers: ['wǒ xǐhuān wǒ de gōngzuò — 我喜欢我的工作', 'wǒ xǐhuān wǒ de gōngzuò', 'wo xihuan wo de gongzuo', '我喜欢我的工作'] },
        { prompt: 'Ela foi promovida este ano.', answers: ['tā jīnnián shēngzhí le — 她今年升职了', 'tā jīnnián shēngzhí le', 'ta jinnian shengzhi le', '她今年升职了'] },
        { prompt: 'Ele está procurando emprego.', answers: ['tā zhèngzài zhǎo gōngzuò — 他正在找工作', 'tā zhèngzài zhǎo gōngzuò', 'ta zhengzai zhao gongzuo', '他正在找工作'] },
      ]},
      { sentences: [
        { prompt: 'Que tipo de comida você gosta?', answers: ['nǐ xǐhuān chī shénme cài — 你喜欢吃什么菜', 'nǐ xǐhuān chī shénme cài', 'ni xihuan chi shenme cai', '你喜欢吃什么菜'] },
        { prompt: 'Gosto de comida apimentada.', answers: ['wǒ xǐhuān chī là de — 我喜欢吃辣的', 'wǒ xǐhuān chī là de', 'wo xihuan chi la de', '我喜欢吃辣的'] },
        { prompt: 'Sou alérgico a frutos do mar.', answers: ['wǒ duì hǎixiān guòmǐn — 我对海鲜过敏', 'wǒ duì hǎixiān guòmǐn', 'wo dui haixian guomin', '我对海鲜过敏'] },
        { prompt: 'Pode fazer sem pimenta?', answers: ['kěyǐ bù fàng là jiāo ma — 可以不放辣椒吗', 'kěyǐ bù fàng là jiāo ma', 'keyi bu fang la jiao ma', '可以不放辣椒吗'] },
        { prompt: 'Esta culinária é incrível.', answers: ['zhège cài tài hǎo chī le — 这个菜太好吃了', 'zhège cài tài hǎo chī le', 'zhege cai tai hao chi le', '这个菜太好吃了'] },
      ]},
      { sentences: [
        { prompt: 'Minha cidade natal é muito bonita.', answers: ['wǒ de jiāxiāng hěn piàoliang — 我的家乡很漂亮', 'wǒ de jiāxiāng hěn piàoliang', 'wo de jiaxiang hen piaoliang', '我的家乡很漂亮'] },
        { prompt: 'Você já visitou o Brasil?', answers: ['nǐ qù guò Bāxī ma — 你去过巴西吗', 'nǐ qù guò Bāxī ma', 'ni qu guo Baxi ma', '你去过巴西吗'] },
        { prompt: 'Nunca fui, mas quero muito ir.', answers: ['méi qù guò, dànshì wǒ hěn xiǎng qù — 没去过，但是我很想去', 'méi qù guò, dànshì wǒ hěn xiǎng qù', 'mei qu guo, danshi wo hen xiang qu', '没去过，但是我很想去'] },
        { prompt: 'O Rio de Janeiro é famoso pelo Carnaval.', answers: ['Lǐyuē rè nèilú yīn kuánhuān jié ér chūmíng — 里约热内卢因狂欢节而出名', 'Lǐyuē rè nèilú yīn kuánhuān jié ér chūmíng', 'Liyue reneilü yin kuanhuanjie er chuming', '里约热内卢因狂欢节而出名'] },
        { prompt: 'Pequim é uma cidade histórica.', answers: ['Běijīng shì yī gè yǒu lìshǐ de chéngshì — 北京是一个有历史的城市', 'Běijīng shì yī gè yǒu lìshǐ de chéngshì', 'Beijing shi yi ge you lishi de chengshi', '北京是一个有历史的城市'] },
      ]},
    ],
  },

  {
    id: 'var-zh-2', language: 'zh', stage: 'Variados', order: 2,
    title: 'Treino geral — nível intermediário',
    subtitle: '了, modais, comparações e perguntas complexas',
    theory: null,
    exercises: [
      { sentences: [
        { prompt: 'Eu já terminei o trabalho.', answers: ['wǒ yǐjīng zuò wán gōngzuò le — 我已经做完工作了', 'wǒ yǐjīng zuò wán gōngzuò le', 'wo yijing zuo wan gongzuo le', '我已经做完工作了'] },
        { prompt: 'Ela ainda não chegou.', answers: ['tā hái méi dào — 她还没到', 'tā hái méi dào', 'ta hai mei dao', '她还没到'] },
        { prompt: 'Eles compraram uma casa nova.', answers: ['tāmen mǎi le yī tào xīn fángzi — 他们买了一套新房子', 'tāmen mǎi le yī tào xīn fángzi', 'tamen mai le yi tao xin fangzi', '他们买了一套新房子'] },
        { prompt: 'O tempo mudou — ficou frio.', answers: ['tiānqì biàn le, lěng le — 天气变了，冷了', 'tiānqì biàn le, lěng le', 'tianqi bian le, leng le', '天气变了，冷了'] },
        { prompt: 'Ela cortou o cabelo.', answers: ['tā jiǎn tóufa le — 她剪头发了', 'tā jiǎn tóufa le', 'ta jian toufa le', '她剪头发了'] },
      ]},
      { sentences: [
        { prompt: 'Eu consigo falar três línguas.', answers: ['wǒ néng shuō sān zhǒng yǔyán — 我能说三种语言', 'wǒ néng shuō sān zhǒng yǔyán', 'wo neng shuo san zhong yuyan', '我能说三种语言'] },
        { prompt: 'Você deveria descansar mais.', answers: ['nǐ yīnggāi duō xiūxi — 你应该多休息', 'nǐ yīnggāi duō xiūxi', 'ni yinggai duo xiuxi', '你应该多休息'] },
        { prompt: 'Aqui não se pode fumar.', answers: ['zhèlǐ bù kěyǐ chōuyān — 这里不可以抽烟', 'zhèlǐ bù kěyǐ chōuyān', 'zheli bu keyi chouyan', '这里不可以抽烟'] },
        { prompt: 'Ela quer mudar de emprego.', answers: ['tā xiǎng huàn gōngzuò — 她想换工作', 'tā xiǎng huàn gōngzuò', 'ta xiang huan gongzuo', '她想换工作'] },
        { prompt: 'Temos que sair às oito em ponto.', answers: ['wǒmen bìxū bā diǎn chūfā — 我们必须八点出发', 'wǒmen bìxū bā diǎn chūfā', 'women bixu ba dian chufa', '我们必须八点出发'] },
      ]},
      { sentences: [
        { prompt: 'Xangai é maior que Pequim.', answers: ['Shànghǎi bǐ Běijīng dà — 上海比北京大', 'Shànghǎi bǐ Běijīng dà', 'Shanghai bi Beijing da', '上海比北京大'] },
        { prompt: 'Este é o restaurante mais famoso da cidade.', answers: ['zhège shì chéngshì lǐ zuì yǒumíng de cānguǎn — 这个是城市里最有名的餐馆', 'zhège shì chéngshì lǐ zuì yǒumíng de cānguǎn', 'zhege shi chengshi li zui youming de canguan', '这个是城市里最有名的餐馆'] },
        { prompt: 'Ela fala tão bem quanto um nativo.', answers: ['tā shuō de gēn běndìrén yīyàng hǎo — 她说得跟本地人一样好', 'tā shuō de gēn běndìrén yīyàng hǎo', 'ta shuo de gen bendi ren yiyang hao', '她说得跟本地人一样好'] },
        { prompt: 'O voo de hoje é mais barato que o de amanhã.', answers: ['jīntiān de jīpiào bǐ míngtiān de piányí — 今天的机票比明天的便宜', 'jīntiān de jīpiào bǐ míngtiān de piányí', 'jintian de jipiao bi mingtian de pianyi', '今天的机票比明天的便宜'] },
        { prompt: 'Eu não sou tão paciente quanto ela.', answers: ['wǒ méiyǒu tā nàme nǎixīn — 我没有她那么耐心', 'wǒ méiyǒu tā nàme nǎixīn', 'wo meiyou ta name naixin', '我没有她那么耐心'] },
      ]},
      { sentences: [
        { prompt: 'Por que você não veio ontem?', answers: ['nǐ zuótiān wèishénme méi lái — 你昨天为什么没来', 'nǐ zuótiān wèishénme méi lái', 'ni zuotian weishenme mei lai', '你昨天为什么没来'] },
        { prompt: 'Quando começa a aula?', answers: ['kè shénme shíhòu kāishǐ — 课什么时候开始', 'kè shénme shíhòu kāishǐ', 'ke shenme shihou kaishi', '课什么时候开始'] },
        { prompt: 'Quanto tempo leva de avião?', answers: ['zuò fēijī yào duō cháng shíjiān — 坐飞机要多长时间', 'zuò fēijī yào duō cháng shíjiān', 'zuo feiji yao duo chang shijian', '坐飞机要多长时间'] },
        { prompt: 'De quem é esta bolsa?', answers: ['zhè gè bāo shì shéi de — 这个包是谁的', 'zhè gè bāo shì shéi de', 'zhe ge bao shi shei de', '这个包是谁的'] },
        { prompt: 'Como você vai resolver isso?', answers: ['nǐ zěnme jiějué zhège wèntí — 你怎么解决这个问题', 'nǐ zěnme jiějué zhège wèntí', 'ni zenme jiejue zhege wenti', '你怎么解决这个问题'] },
      ]},
      { sentences: [
        { prompt: 'Estudo mandarim há seis meses.', answers: ['wǒ xué pǔtōnghuà yǐjīng liù gè yuè le — 我学普通话已经六个月了', 'wǒ xué pǔtōnghuà yǐjīng liù gè yuè le', 'wo xue putonghua yijing liu ge yue le', '我学普通话已经六个月了'] },
        { prompt: 'A reunião durou três horas.', answers: ['huìyì kāi le sān gè xiǎoshí — 会议开了三个小时', 'huìyì kāi le sān gè xiǎoshí', 'huiyi kai le san ge xiaoshi', '会议开了三个小时'] },
        { prompt: 'Desde quando você mora aqui?', answers: ['nǐ cóng shénme shíhòu zhù zài zhèlǐ — 你从什么时候住在这里', 'nǐ cóng shénme shíhòu zhù zài zhèlǐ', 'ni cong shenme shihou zhu zai zheli', '你从什么时候住在这里'] },
        { prompt: 'Fico esperando há uma hora.', answers: ['wǒ děng le yī gè xiǎoshí le — 我等了一个小时了', 'wǒ děng le yī gè xiǎoshí le', 'wo deng le yi ge xiaoshi le', '我等了一个小时了'] },
        { prompt: 'Vou ficar mais uma semana.', answers: ['wǒ hái yào dāi yī gè xīngqī — 我还要待一个星期', 'wǒ hái yào dāi yī gè xīngqī', 'wo hai yao dai yi ge xingqi', '我还要待一个星期'] },
      ]},
      { sentences: [
        { prompt: 'Já fui à China duas vezes.', answers: ['wǒ qù guò Zhōngguó liǎng cì — 我去过中国两次', 'wǒ qù guò Zhōngguó liǎng cì', 'wo qu guo Zhongguo liang ci', '我去过中国两次'] },
        { prompt: 'Nunca provei sushi.', answers: ['wǒ cónglái méi chī guò shòusī — 我从来没吃过寿司', 'wǒ cónglái méi chī guò shòusī', 'wo conglai mei chi guo shousi', '我从来没吃过寿司'] },
        { prompt: 'Ela já viveu em muitos países.', answers: ['tā zhù guò hěn duō guójiā — 她住过很多国家', 'tā zhù guò hěn duō guójiā', 'ta zhu guo hen duo guojia', '她住过很多国家'] },
        { prompt: 'Você já usou palitinhos?', answers: ['nǐ yòng guò kuàizi ma — 你用过筷子吗', 'nǐ yòng guò kuàizi ma', 'ni yong guo kuaizi ma', '你用过筷子吗'] },
        { prompt: 'Nunca me arrependi desta decisão.', answers: ['wǒ cónglái méi hòuhuǐ guò zhège juédìng — 我从来没后悔过这个决定', 'wǒ cónglái méi hòuhuǐ guò zhège juédìng', 'wo conglai mei hougui guo zhege jueding', '我从来没后悔过这个决定'] },
      ]},
      { sentences: [
        { prompt: 'Ela está trabalhando agora.', answers: ['tā zhèngzài gōngzuò — 她正在工作', 'tā zhèngzài gōngzuò', 'ta zhengzai gongzuo', '她正在工作'] },
        { prompt: 'O que você está fazendo?', answers: ['nǐ zhèngzài zuò shénme — 你正在做什么', 'nǐ zhèngzài zuò shénme', 'ni zhengzai zuo shenme', '你正在做什么'] },
        { prompt: 'Estou lendo um livro interessante.', answers: ['wǒ zhèngzài kàn yī běn yǒuyìsi de shū — 我正在看一本有意思的书', 'wǒ zhèngzài kàn yī běn yǒuyìsi de shū', 'wo zhengzai kan yi ben youyisi de shu', '我正在看一本有意思的书'] },
        { prompt: 'A luz está acesa.', answers: ['dēng liàng zhe — 灯亮着', 'dēng liàng zhe', 'deng liang zhe', '灯亮着'] },
        { prompt: 'Ela estava sorrindo enquanto falava.', answers: ['tā xiào zhe shuō huà — 她笑着说话', 'tā xiào zhe shuō huà', 'ta xiao zhe shuo hua', '她笑着说话'] },
      ]},
      { sentences: [
        { prompt: 'Se você estudar, vai aprender.', answers: ['rúguǒ nǐ xuéxí, jiù néng xué huì — 如果你学习，就能学会', 'rúguǒ nǐ xuéxí, jiù néng xué huì', 'ruguo ni xuexi, jiu neng xue hui', '如果你学习，就能学会'] },
        { prompt: 'Embora seja cansativo, é divertido.', answers: ['suīrán hěn lèi, dànshì hěn hǎowán — 虽然很累，但是很好玩', 'suīrán hěn lèi, dànshì hěn hǎowán', 'suiran hen lei, danshi hen haowan', '虽然很累，但是很好玩'] },
        { prompt: 'Mesmo que chova, vou mesmo assim.', answers: ['jíshǐ xià yǔ, wǒ yě yào qù — 即使下雨，我也要去', 'jíshǐ xià yǔ, wǒ yě yào qù', 'jishi xia yu, wo ye yao qu', '即使下雨，我也要去'] },
        { prompt: 'Basta ter paciência para aprender.', answers: ['zhǐyào yǒu nǎixīn, jiù néng xué huì — 只要有耐心，就能学会', 'zhǐyào yǒu nǎixīn, jiù néng xué huì', 'zhiyao you naixin, jiu neng xue hui', '只要有耐心，就能学会'] },
        { prompt: 'Se você não entender, me pergunte.', answers: ['rúguǒ nǐ bù dǒng, jiù wèn wǒ — 如果你不懂，就问我', 'rúguǒ nǐ bù dǒng, jiù wèn wǒ', 'ruguo ni bu dong, jiu wen wo', '如果你不懂，就问我'] },
      ]},
      { sentences: [
        { prompt: 'Deixa pra lá, acontece.', answers: ['suàn le, méi guānxi — 算了，没关系', 'suàn le, méi guānxi', 'suan le, mei guanxi', '算了，没关系'] },
        { prompt: 'Tanto faz, você decide.', answers: ['suíbiàn, nǐ juédìng ba — 随便，你决定吧', 'suíbiàn, nǐ juédìng ba', 'suibian, ni jueding ba', '随便，你决定吧'] },
        { prompt: 'Não tem problema!', answers: ['méi wèntí — 没问题', 'méi wèntí', 'mei wenti', '没问题'] },
        { prompt: 'Mais ou menos — não tenho certeza.', answers: ['chàbuduō, wǒ bù quèdìng — 差不多，我不确定', 'chàbuduō, wǒ bù quèdìng', 'chabuduo, wo bu queding', '差不多，我不确定'] },
        { prompt: 'Não há como — já está fechado.', answers: ['méi bànfǎ, yǐjīng guān mén le — 没办法，已经关门了', 'méi bànfǎ, yǐjīng guān mén le', 'mei banfa, yijing guan men le', '没办法，已经关门了'] },
      ]},
      { sentences: [
        { prompt: 'Eu me levanto às sete todo dia.', answers: ['wǒ měitiān qī diǎn qǐchuáng — 我每天七点起床', 'wǒ měitiān qī diǎn qǐchuáng', 'wo meitian qi dian qichuang', '我每天七点起床'] },
        { prompt: 'Ela toma banho antes de dormir.', answers: ['tā shuì jiào qián xǐzǎo — 她睡觉前洗澡', 'tā shuì jiào qián xǐzǎo', 'ta shui jiao qian xizao', '她睡觉前洗澡'] },
        { prompt: 'Nós jantamos às sete.', answers: ['wǒmen qī diǎn chī wǎnfàn — 我们七点吃晚饭', 'wǒmen qī diǎn chī wǎnfàn', 'women qi dian chi wanfan', '我们七点吃晚饭'] },
        { prompt: 'Ele vai trabalhar de metrô.', answers: ['tā zuò dìtiě qù gōngzuò — 他坐地铁去工作', 'tā zuò dìtiě qù gōngzuò', 'ta zuo ditie qu gongzuo', '他坐地铁去工作'] },
        { prompt: 'Eu durmo às onze da noite.', answers: ['wǒ wǎnshang shíyī diǎn shuì jiào — 我晚上十一点睡觉', 'wǒ wǎnshang shíyī diǎn shuì jiào', 'wo wanshang shiyi dian shui jiao', '我晚上十一点睡觉'] },
      ]},
      { sentences: [
        { prompt: 'Você prefere chá verde ou chá preto?', answers: ['nǐ gèng xǐhuān lǜchá háishi hóngchá — 你更喜欢绿茶还是红茶', 'nǐ gèng xǐhuān lǜchá háishi hóngchá', 'ni geng xihuan lücha haishi hongcha', '你更喜欢绿茶还是红茶'] },
        { prompt: 'Prefiro chá verde.', answers: ['wǒ gèng xǐhuān lǜchá — 我更喜欢绿茶', 'wǒ gèng xǐhuān lǜchá', 'wo geng xihuan lücha', '我更喜欢绿茶'] },
        { prompt: 'Acho que o mandarim é mais difícil que o japonês.', answers: ['wǒ juéde pǔtōnghuà bǐ rìwén nán — 我觉得普通话比日文难', 'wǒ juéde pǔtōnghuà bǐ rìwén nán', 'wo juede putonghua bi riwen nan', '我觉得普通话比日文难'] },
        { prompt: 'Quero aprender a fazer culinária chinesa.', answers: ['wǒ xiǎng xué zuò zhōngguó cài — 我想学做中国菜', 'wǒ xiǎng xué zuò zhōngguó cài', 'wo xiang xue zuo zhongguo cai', '我想学做中国菜'] },
        { prompt: 'Ela não precisa de ajuda.', answers: ['tā bù xūyào bāngzhù — 她不需要帮助', 'tā bù xūyào bāngzhù', 'ta bu xuyao bangzhu', '她不需要帮助'] },
      ]},
      { sentences: [
        { prompt: 'O meu celular está sem bateria.', answers: ['wǒ de shǒujī méi diàn le — 我的手机没电了', 'wǒ de shǒujī méi diàn le', 'wo de shouji mei dian le', '我的手机没电了'] },
        { prompt: 'Você pode me emprestar o carregador?', answers: ['nǐ kěyǐ jiè gěi wǒ chōngdiànqì ma — 你可以借给我充电器吗', 'nǐ kěyǐ jiè gěi wǒ chōngdiànqì ma', 'ni keyi jie gei wo chongdianqi ma', '你可以借给我充电器吗'] },
        { prompt: 'O Wi-Fi não está funcionando.', answers: ['wǎngluò bù tōng — 网络不通', 'wǎngluò bù tōng', 'wangluo bu tong', '网络不通'] },
        { prompt: 'Qual é a senha do Wi-Fi?', answers: ['wǎng luò mìmǎ shì shénme — 网络密码是什么', 'wǎng luò mìmǎ shì shénme', 'wangluo mima shi shenme', '网络密码是什么'] },
        { prompt: 'Posso usar o seu computador?', answers: ['wǒ kěyǐ yòng nǐ de diànnǎo ma — 我可以用你的电脑吗', 'wǒ kěyǐ yòng nǐ de diànnǎo ma', 'wo keyi yong ni de diannao ma', '我可以用你的电脑吗'] },
      ]},
      { sentences: [
        { prompt: 'Ele chegou com uma hora de atraso.', answers: ['tā chí dào le yī gè xiǎoshí — 他迟到了一个小时', 'tā chí dào le yī gè xiǎoshí', 'ta chi dao le yi ge xiaoshi', '他迟到了一个小时'] },
        { prompt: 'O voo foi cancelado.', answers: ['hángbān bèi qǔxiāo le — 航班被取消了', 'hángbān bèi qǔxiāo le', 'hangban bei quxiao le', '航班被取消了'] },
        { prompt: 'Preciso mudar minha reserva.', answers: ['wǒ xūyào gǎi yùdìng — 我需要改预订', 'wǒ xūyào gǎi yùdìng', 'wo xuyao gai yuding', '我需要改预订'] },
        { prompt: 'Qual portão é o meu voo?', answers: ['wǒ de hángbān shì jǐ hào dēngjī kǒu — 我的航班是几号登机口', 'wǒ de hángbān shì jǐ hào dēngjī kǒu', 'wo de hangban shi ji hao dengji kou', '我的航班是几号登机口'] },
        { prompt: 'O trem já saiu.', answers: ['huǒchē yǐjīng kāi le — 火车已经开了', 'huǒchē yǐjīng kāi le', 'huoche yijing kai le', '火车已经开了'] },
      ]},
      { sentences: [
        { prompt: 'Preciso fazer uma reserva.', answers: ['wǒ yào yùdìng — 我要预订', 'wǒ yào yùdìng', 'wo yao yuding', '我要预订'] },
        { prompt: 'Para quantas pessoas?', answers: ['jǐ gè rén — 几个人', 'jǐ gè rén', 'ji ge ren', '几个人'] },
        { prompt: 'Para duas pessoas, às sete da noite.', answers: ['liǎng gè rén, wǎnshang qī diǎn — 两个人，晚上七点', 'liǎng gè rén, wǎnshang qī diǎn', 'liang ge ren, wanshang qi dian', '两个人，晚上七点'] },
        { prompt: 'Tem mesa disponível?', answers: ['yǒu kōng wèi ma — 有空位吗', 'yǒu kōng wèi ma', 'you kong wei ma', '有空位吗'] },
        { prompt: 'Pode trazer o cardápio?', answers: ['kěyǐ gěi wǒ càidān ma — 可以给我菜单吗', 'kěyǐ gěi wǒ càidān ma', 'keyi gei wo caidan ma', '可以给我菜单吗'] },
      ]},
      { sentences: [
        { prompt: 'Hoje aprendi muitas coisas novas.', answers: ['jīntiān wǒ xué le hěn duō xīn dōngxi — 今天我学了很多新东西', 'jīntiān wǒ xué le hěn duō xīn dōngxi', 'jintian wo xue le hen duo xin dongxi', '今天我学了很多新东西'] },
        { prompt: 'O professor explica muito bem.', answers: ['lǎoshī jiǎng de hěn hǎo — 老师讲得很好', 'lǎoshī jiǎng de hěn hǎo', 'laoshi jiang de hen hao', '老师讲得很好'] },
        { prompt: 'Preciso revisar antes da prova.', answers: ['kǎoshì qián wǒ xūyào fùxí — 考试前我需要复习', 'kǎoshì qián wǒ xūyào fùxí', 'kaoshi qian wo xuyao fuxi', '考试前我需要复习'] },
        { prompt: 'Que nota você tirou?', answers: ['nǐ kǎo le duōshǎo fēn — 你考了多少分', 'nǐ kǎo le duōshǎo fēn', 'ni kao le duoshao fen', '你考了多少分'] },
        { prompt: 'Passei no exame!', answers: ['wǒ tōngguò kǎoshì le — 我通过考试了', 'wǒ tōngguò kǎoshì le', 'wo tongguo kaoshi le', '我通过考试了'] },
      ]},
      { sentences: [
        { prompt: 'Posso experimentar este?', answers: ['wǒ kěyǐ shì chuān zhège ma — 我可以试穿这个吗', 'wǒ kěyǐ shì chuān zhège ma', 'wo keyi shi chuan zhege ma', '我可以试穿这个吗'] },
        { prompt: 'Tem em tamanho maior?', answers: ['yǒu dà hào de ma — 有大号的吗', 'yǒu dà hào de ma', 'you da hao de ma', '有大号的吗'] },
        { prompt: 'Este não me cabe.', answers: ['zhège chuān bù xià — 这个穿不下', 'zhège chuān bù xià', 'zhege chuan bu xia', '这个穿不下'] },
        { prompt: 'Está perfeito!', answers: ['hǎo jí le — 好极了', 'hǎo jí le', 'hao ji le', '好极了'] },
        { prompt: 'Vou levar este.', answers: ['wǒ yào zhège — 我要这个', 'wǒ yào zhège', 'wo yao zhege', '我要这个'] },
      ]},
      { sentences: [
        { prompt: 'Você já esteve em Xangai?', answers: ['nǐ qù guò Shànghǎi ma — 你去过上海吗', 'nǐ qù guò Shànghǎi ma', 'ni qu guo Shanghai ma', '你去过上海吗'] },
        { prompt: 'Já fui duas vezes.', answers: ['wǒ qù guò liǎng cì — 我去过两次', 'wǒ qù guò liǎng cì', 'wo qu guo liang ci', '我去过两次'] },
        { prompt: 'Qual é o lugar mais bonito que você já visitou?', answers: ['nǐ qù guò zuì piàoliang de dìfāng shì nǎlǐ — 你去过最漂亮的地方是哪里', 'nǐ qù guò zuì piàoliang de dìfāng shì nǎlǐ', 'ni qu guo zui piaoliang de difang shi nali', '你去过最漂亮的地方是哪里'] },
        { prompt: 'Quero muito visitar Guilin.', answers: ['wǒ hěn xiǎng qù Guìlín — 我很想去桂林', 'wǒ hěn xiǎng qù Guìlín', 'wo hen xiang qu Guilin', '我很想去桂林'] },
        { prompt: 'A Grande Muralha é incrível.', answers: ['Chángchéng tài zhuàngguān le — 长城太壮观了', 'Chángchéng tài zhuàngguān le', 'Changcheng tai zhuangguan le', '长城太壮观了'] },
      ]},
      { sentences: [
        { prompt: 'Continuei mesmo sendo difícil.', answers: ['suīrán hěn nán, wǒ hái shì jiānchí le — 虽然很难，我还是坚持了', 'suīrán hěn nán, wǒ hái shì jiānchí le', 'suiran hen nan, wo haishi jianche le', '虽然很难，我还是坚持了'] },
        { prompt: 'Não desisti no meio do caminho.', answers: ['wǒ méi bàn tú ér fèi — 我没半途而废', 'wǒ méi bàn tú ér fèi', 'wo mei ban tu er fei', '我没半途而废'] },
        { prompt: 'A prática leva à perfeição — continue!', answers: ['shú néng shēng qiǎo, jiāyóu — 熟能生巧，加油', 'shú néng shēng qiǎo, jiāyóu', 'shu neng sheng qiao, jiayou', '熟能生巧，加油'] },
        { prompt: 'Com esforço, tudo é possível.', answers: ['zhǐyào nǔlì, shénme dōu yǒu kěnéng — 只要努力，什么都有可能', 'zhǐyào nǔlì, shénme dōu yǒu kěnéng', 'zhiyao nuli, shenme dou you keneng', '只要努力，什么都有可能'] },
        { prompt: 'Parabéns! Você aprendeu muito.', answers: ['gōngxǐ nǐ! nǐ xué le hěn duō — 恭喜你！你学了很多', 'gōngxǐ nǐ! nǐ xué le hěn duō', 'gongxi ni! ni xue le hen duo', '恭喜你！你学了很多'] },
      ]},
      { sentences: [
        { prompt: 'Você tem algum hobby?', answers: ['nǐ yǒu shénme àihào — 你有什么爱好', 'nǐ yǒu shénme àihào', 'ni you shenme aihao', '你有什么爱好'] },
        { prompt: 'Gosto de ouvir música chinesa.', answers: ['wǒ xǐhuān tīng Zhōngguó yīnyuè — 我喜欢听中国音乐', 'wǒ xǐhuān tīng Zhōngguó yīnyuè', 'wo xihuan ting Zhongguo yinyue', '我喜欢听中国音乐'] },
        { prompt: 'Você toca algum instrumento?', answers: ['nǐ huì lā shénme yuèqì ma — 你会拉什么乐器吗', 'nǐ huì lā shénme yuèqì ma', 'ni hui la shenme yueqi ma', '你会拉什么乐器吗'] },
        { prompt: 'Prefiro dançar a tocar música.', answers: ['wǒ bǐjiào xǐhuān tiàowǔ ér bù shì yīnyuè — 我比较喜欢跳舞而不是音乐', 'wǒ bǐjiào xǐhuān tiàowǔ ér bù shì yīnyuè', 'wo bijiao xihuan tiaowu er bu shi yinyue', '我比较喜欢跳舞而不是音乐'] },
        { prompt: 'Você é mais ativo do que eu.', answers: ['nǐ bǐ wǒ gèng huópō — 你比我更活泼', 'nǐ bǐ wǒ gèng huópō', 'ni bi wo geng huopo', '你比我更活泼'] },
      ]},
      { sentences: [
        { prompt: 'Boa ideia! Vamos lá.', answers: ['hǎo zhǔyi! wǒmen qù ba — 好主意！我们去吧', 'hǎo zhǔyi! wǒmen qù ba', 'hao zhuyi! women qu ba', '好主意！我们去吧'] },
        { prompt: 'Não era o que eu esperava.', answers: ['bù shì wǒ qīdài de nàyàng — 不是我期待的那样', 'bù shì wǒ qīdài de nàyàng', 'bu shi wo qidai de nayang', '不是我期待的那样'] },
        { prompt: 'Tanto faz — você decide.', answers: ['suíbiàn ba, nǐ juédìng — 随便吧，你决定', 'suíbiàn ba, nǐ juédìng', 'suibian ba, ni jueding', '随便吧，你决定'] },
        { prompt: 'Já que você insiste, tudo bem.', answers: ['jì rán nǐ jiānchí, nà jiù suàn le — 既然你坚持，那就算了', 'jì rán nǐ jiānchí, nà jiù suàn le', 'ji ran ni jianche, na jiu suan le', '既然你坚持，那就算了'] },
        { prompt: 'Não vejo a hora de chegar lá.', answers: ['wǒ hǎo qīdài dào nàlǐ — 我好期待到那里', 'wǒ hǎo qīdài dào nàlǐ', 'wo hao qidai dao nali', '我好期待到那里'] },
      ]},
    ],
  },

  {
    id: 'var-zh-3', language: 'zh', stage: 'Variados', order: 3,
    title: 'Situações reais — viagem, trabalho e cotidiano',
    subtitle: 'Conversas do dia a dia na China',
    theory: null,
    exercises: [
      { sentences: [
        { prompt: 'Preciso de um quarto para duas noites.', answers: ['wǒ xūyào yī gè fángjiān zhù liǎng wǎn — 我需要一个房间住两晚', 'wǒ xūyào yī gè fángjiān zhù liǎng wǎn', 'wo xuyao yi ge fangjian zhu liang wan', '我需要一个房间住两晚'] },
        { prompt: 'O café da manhã está incluído?', answers: ['bāokuò zǎocān ma — 包括早餐吗', 'bāokuò zǎocān ma', 'baokuo zaochan ma', '包括早餐吗'] },
        { prompt: 'Posso fazer check-in mais cedo?', answers: ['wǒ kěyǐ zǎo yīdiǎn rùzhù ma — 我可以早一点入住吗', 'wǒ kěyǐ zǎo yīdiǎn rùzhù ma', 'wo keyi zao yidian ruzhu ma', '我可以早一点入住吗'] },
        { prompt: 'Qual é o horário de check-out?', answers: ['tuìfáng shíjiān shì jǐ diǎn — 退房时间是几点', 'tuìfáng shíjiān shì jǐ diǎn', 'tuifang shijian shi ji dian', '退房时间是几点'] },
        { prompt: 'O ar-condicionado não está funcionando.', answers: ['kōngtiáo bù hǎo yòng — 空调不好用', 'kōngtiáo bù hǎo yòng', 'kongtiao bu hao yong', '空调不好用'] },
      ]},
      { sentences: [
        { prompt: 'Quero abrir uma conta bancária.', answers: ['wǒ xiǎng kāi yī gè yínháng zhànghù — 我想开一个银行账户', 'wǒ xiǎng kāi yī gè yínháng zhànghù', 'wo xiang kai yi ge yinhang zhanghu', '我想开一个银行账户'] },
        { prompt: 'Preciso trocar moeda.', answers: ['wǒ xūyào huàn qián — 我需要换钱', 'wǒ xūyào huàn qián', 'wo xuyao huan qian', '我需要换钱'] },
        { prompt: 'Qual é a taxa de câmbio hoje?', answers: ['jīntiān de huìlǜ shì duōshǎo — 今天的汇率是多少', 'jīntiān de huìlǜ shì duōshǎo', 'jintian de huilü shi duoshao', '今天的汇率是多少'] },
        { prompt: 'Posso sacar dinheiro neste caixa?', answers: ['wǒ kěyǐ zài zhège ATM qǔ qián ma — 我可以在这个ATM取钱吗', 'wǒ kěyǐ zài zhège ATM qǔ qián ma', 'wo keyi zai zhege ATM qu qian ma', '我可以在这个ATM取钱吗'] },
        { prompt: 'Meu cartão foi bloqueado.', answers: ['wǒ de kǎ bèi fēngsuǒ le — 我的卡被封锁了', 'wǒ de kǎ bèi fēngsuǒ le', 'wo de ka bei fengsuo le', '我的卡被封锁了'] },
      ]},
      { sentences: [
        { prompt: 'Eu me machuquei.', answers: ['wǒ shāng le — 我伤了', 'wǒ shāng le', 'wo shang le', '我伤了'] },
        { prompt: 'Preciso ir ao pronto-socorro.', answers: ['wǒ xūyào qù jízhěn — 我需要去急诊', 'wǒ xūyào qù jízhěn', 'wo xuyao qu jizhen', '我需要去急诊'] },
        { prompt: 'Estou com febre.', answers: ['wǒ fā shāo — 我发烧', 'wǒ fā shāo', 'wo fa shao', '我发烧'] },
        { prompt: 'Há quanto tempo você está com dor?', answers: ['nǐ téng le duō jiǔ le — 你疼了多久了', 'nǐ téng le duō jiǔ le', 'ni teng le duo jiu le', '你疼了多久了'] },
        { prompt: 'Tome este remédio três vezes ao dia.', answers: ['zhège yào yī tiān chī sān cì — 这个药一天吃三次', 'zhège yào yī tiān chī sān cì', 'zhege yao yi tian chi san ci', '这个药一天吃三次'] },
      ]},
      { sentences: [
        { prompt: 'Meu voo é amanhã de manhã.', answers: ['wǒ de hángbān shì míngtiān zǎoshang — 我的航班是明天早上', 'wǒ de hángbān shì míngtiān zǎoshang', 'wo de hangban shi mingtian zaoshang', '我的航班是明天早上'] },
        { prompt: 'Preciso chegar ao aeroporto duas horas antes.', answers: ['wǒ xūyào tí qián liǎng xiǎoshí dào jīchǎng — 我需要提前两小时到机场', 'wǒ xūyào tí qián liǎng xiǎoshí dào jīchǎng', 'wo xuyao tiqian liang xiaoshi dao jichang', '我需要提前两小时到机场'] },
        { prompt: 'Onde fica o balcão de check-in?', answers: ['zhíjī guìtái zài nǎlǐ — 值机柜台在哪里', 'zhíjī guìtái zài nǎlǐ', 'zhiji guitai zai nali', '值机柜台在哪里'] },
        { prompt: 'Posso levar isso na bagagem de mão?', answers: ['wǒ kěyǐ bǎ zhège dài shàng fēijī ma — 我可以把这个带上飞机吗', 'wǒ kěyǐ bǎ zhège dài shàng fēijī ma', 'wo keyi ba zhege dai shang feiji ma', '我可以把这个带上飞机吗'] },
        { prompt: 'Minha mala está perdida.', answers: ['wǒ de xínglǐ diū le — 我的行李丢了', 'wǒ de xínglǐ diū le', 'wo de xingli diu le', '我的行李丢了'] },
      ]},
      { sentences: [
        { prompt: 'Quero aprender mandarim para trabalhar na China.', answers: ['wǒ xiǎng xué pǔtōnghuà wèile zài Zhōngguó gōngzuò — 我想学普通话为了在中国工作', 'wǒ xiǎng xué pǔtōnghuà wèile zài Zhōngguó gōngzuò', 'wo xiang xue putonghua weile zai Zhongguo gongzuo', '我想学普通话为了在中国工作'] },
        { prompt: 'Você tem experiência nesta área?', answers: ['nǐ zài zhège lǐngyù yǒu jīngyàn ma — 你在这个领域有经验吗', 'nǐ zài zhège lǐngyù yǒu jīngyàn ma', 'ni zai zhege lingyu you jingyan ma', '你在这个领域有经验吗'] },
        { prompt: 'Posso enviar o meu currículo por email?', answers: ['wǒ kěyǐ yòng diànzǐ yóujiàn fā wǒ de jiǎnlì ma — 我可以用电子邮件发我的简历吗', 'wǒ kěyǐ yòng diànzǐ yóujiàn fā wǒ de jiǎnlì ma', 'wo keyi yong dianziyoujian fa wo de jianli ma', '我可以用电子邮件发我的简历吗'] },
        { prompt: 'A entrevista é na quinta-feira.', answers: ['miànshì shì xīngqīsì — 面试是星期四', 'miànshì shì xīngqīsì', 'mianshi shi xingqisi', '面试是星期四'] },
        { prompt: 'Qual é o salário?', answers: ['xīnzī shì duōshǎo — 薪资是多少', 'xīnzī shì duōshǎo', 'xinzi shi duoshao', '薪资是多少'] },
      ]},
      { sentences: [
        { prompt: 'Você usa WeChat?', answers: ['nǐ yòng wēixìn ma — 你用微信吗', 'nǐ yòng wēixìn ma', 'ni yong weixin ma', '你用微信吗'] },
        { prompt: 'Me adiciona no WeChat.', answers: ['nǐ jiā wǒ wēixìn ba — 你加我微信吧', 'nǐ jiā wǒ wēixìn ba', 'ni jia wo weixin ba', '你加我微信吧'] },
        { prompt: 'Posso escanear o seu QR code?', answers: ['wǒ kěyǐ sǎo nǐ de èrwéimǎ ma — 我可以扫你的二维码吗', 'wǒ kěyǐ sǎo nǐ de èrwéimǎ ma', 'wo keyi sao ni de erweima ma', '我可以扫你的二维码吗'] },
        { prompt: 'Pago pelo Alipay.', answers: ['wǒ yòng zhīfùbǎo fù kuǎn — 我用支付宝付款', 'wǒ yòng zhīfùbǎo fù kuǎn', 'wo yong zhifubao fu kuan', '我用支付宝付款'] },
        { prompt: 'O aplicativo não está funcionando.', answers: ['zhège yìngyòng chéngshì bù néng yòng — 这个应用程序不能用', 'zhège yìngyòng chéngshì bù néng yòng', 'zhege yingyong chengshi bu neng yong', '这个应用程序不能用'] },
      ]},
      { sentences: [
        { prompt: 'Que prato você recomenda?', answers: ['nǐ tuījiàn shénme cài — 你推荐什么菜', 'nǐ tuījiàn shénme cài', 'ni tuijian shenme cai', '你推荐什么菜'] },
        { prompt: 'Quero experimentar a culinária local.', answers: ['wǒ xiǎng cháng cháng dāngdì cài — 我想尝尝当地菜', 'wǒ xiǎng cháng cháng dāngdì cài', 'wo xiang chang chang dangdi cai', '我想尝尝当地菜'] },
        { prompt: 'Não como carne de porco.', answers: ['wǒ bù chī zhūròu — 我不吃猪肉', 'wǒ bù chī zhūròu', 'wo bu chi zhurou', '我不吃猪肉'] },
        { prompt: 'Pode fazer menos apimentado?', answers: ['kěyǐ shǎo fàng yīdiǎn là ma — 可以少放一点辣吗', 'kěyǐ shǎo fàng yīdiǎn là ma', 'keyi shao fang yidian la ma', '可以少放一点辣吗'] },
        { prompt: 'Vamos pagar separado.', answers: ['wǒmen AA fù kuǎn ba — 我们AA付款吧', 'wǒmen AA fù kuǎn ba', 'women AA fu kuan ba', '我们AA付款吧'] },
      ]},
      { sentences: [
        { prompt: 'Você pode me ajudar a tirar uma foto?', answers: ['nǐ kěyǐ bāng wǒ pāi zhào ma — 你可以帮我拍照吗', 'nǐ kěyǐ bāng wǒ pāi zhào ma', 'ni keyi bang wo pai zhao ma', '你可以帮我拍照吗'] },
        { prompt: 'Posso tirar foto aqui?', answers: ['wǒ kěyǐ zài zhèlǐ pāi zhào ma — 我可以在这里拍照吗', 'wǒ kěyǐ zài zhèlǐ pāi zhào ma', 'wo keyi zai zheli pai zhao ma', '我可以在这里拍照吗'] },
        { prompt: 'A vista daqui é linda.', answers: ['cóng zhèlǐ kàn de jǐngsè hěn piàoliang — 从这里看的景色很漂亮', 'cóng zhèlǐ kàn de jǐngsè hěn piàoliang', 'cong zheli kan de jinse hen piaoliang', '从这里看的景色很漂亮'] },
        { prompt: 'Este templo tem muitos anos.', answers: ['zhège sìmiào yǒu hěn duō nián lìshǐ — 这个寺庙有很多年历史', 'zhège sìmiào yǒu hěn duō nián lìshǐ', 'zhege simiao you hen duo nian lishi', '这个寺庙有很多年历史'] },
        { prompt: 'Preciso de um guia turístico.', answers: ['wǒ xūyào yī gè dǎoyóu — 我需要一个导游', 'wǒ xūyào yī gè dǎoyóu', 'wo xuyao yi ge daoyou', '我需要一个导游'] },
      ]},
      { sentences: [
        { prompt: 'O verão em Pequim é muito quente.', answers: ['Běijīng de xiàtiān hěn rè — 北京的夏天很热', 'Běijīng de xiàtiān hěn rè', 'Beijing de xiatian hen re', '北京的夏天很热'] },
        { prompt: 'Está nevando em Harbin.', answers: ['Hāěrbīn zài xià xuě — 哈尔滨在下雪', 'Hāěrbīn zài xià xuě', 'Haerbin zai xia xue', '哈尔滨在下雪'] },
        { prompt: 'A primavera em Chengdu é agradável.', answers: ['Chéngdū de chūntiān hěn shūfú — 成都的春天很舒服', 'Chéngdū de chūntiān hěn shūfú', 'Chengdu de chuntian hen shufu', '成都的春天很舒服'] },
        { prompt: 'Preciso levar guarda-chuva?', answers: ['wǒ xūyào dài yǔsǎn ma — 我需要带雨伞吗', 'wǒ xūyào dài yǔsǎn ma', 'wo xuyao dai yusan ma', '我需要带雨伞吗'] },
        { prompt: 'O inverno aqui é muito seco.', answers: ['zhèlǐ de dōngtiān hěn gānzào — 这里的冬天很干燥', 'zhèlǐ de dōngtiān hěn gānzào', 'zheli de dongtian hen ganzao', '这里的冬天很干燥'] },
      ]},
      { sentences: [
        { prompt: 'Quero um quilo de maçãs.', answers: ['wǒ yào yī gōngjīn píngguǒ — 我要一公斤苹果', 'wǒ yào yī gōngjīn píngguǒ', 'wo yao yi gongjin pingguo', '我要一公斤苹果'] },
        { prompt: 'Está fresco este peixe?', answers: ['zhège yú xīnxiān ma — 这个鱼新鲜吗', 'zhège yú xīnxiān ma', 'zhege yu xinxian ma', '这个鱼新鲜吗'] },
        { prompt: 'Me dá meio quilo de tomates.', answers: ['gěi wǒ bàn gōngjīn xīhóngshì — 给我半公斤西红柿', 'gěi wǒ bàn gōngjīn xīhóngshì', 'gei wo ban gongjin xihongshi', '给我半公斤西红柿'] },
        { prompt: 'Posso provar?', answers: ['wǒ kěyǐ cháng cháng ma — 我可以尝尝吗', 'wǒ kěyǐ cháng cháng ma', 'wo keyi chang chang ma', '我可以尝尝吗'] },
        { prompt: 'Pode fazer desconto?', answers: ['kěyǐ dǎ zhé ma — 可以打折吗', 'kěyǐ dǎ zhé ma', 'keyi da zhe ma', '可以打折吗'] },
      ]},
      { sentences: [
        { prompt: 'Preciso fazer uma ligação.', answers: ['wǒ xūyào dǎ diànhuà — 我需要打电话', 'wǒ xūyào dǎ diànhuà', 'wo xuyao da dianhua', '我需要打电话'] },
        { prompt: 'Ele não atendeu.', answers: ['tā méi jiē diànhuà — 他没接电话', 'tā méi jiē diànhuà', 'ta mei jie dianhua', '他没接电话'] },
        { prompt: 'Vou mandar uma mensagem.', answers: ['wǒ gěi tā fā duǎnxìn — 我给他发短信', 'wǒ gěi tā fā duǎnxìn', 'wo gei ta fa duanxin', '我给他发短信'] },
        { prompt: 'Você recebeu meu email?', answers: ['nǐ shōu dào wǒ de yóujiàn le ma — 你收到我的邮件了吗', 'nǐ shōu dào wǒ de yóujiàn le ma', 'ni shou dao wo de youjian le ma', '你收到我的邮件了吗'] },
        { prompt: 'A reunião foi adiada.', answers: ['huìyì tuīchí le — 会议推迟了', 'huìyì tuīchí le', 'huiyi tuichi le', '会议推迟了'] },
      ]},
      { sentences: [
        { prompt: 'Ele aprendeu mandarim sozinho.', answers: ['tā zìxué pǔtōnghuà — 他自学普通话', 'tā zìxué pǔtōnghuà', 'ta zixue putonghua', '他自学普通话'] },
        { prompt: 'Estou praticando a pronúncia.', answers: ['wǒ zhèngzài liànxí fāyīn — 我正在练习发音', 'wǒ zhèngzài liànxí fāyīn', 'wo zhengzai lianxi fayin', '我正在练习发音'] },
        { prompt: 'Os tons são a parte mais difícil.', answers: ['shēngdiào shì zuì nán de bùfen — 声调是最难的部分', 'shēngdiào shì zuì nán de bùfen', 'shengdiao shi zui nan de bufen', '声调是最难的部分'] },
        { prompt: 'Você tem um bom sotaque.', answers: ['nǐ de kǒuyīn hěn hǎo — 你的口音很好', 'nǐ de kǒuyīn hěn hǎo', 'ni de kouyin hen hao', '你的口音很好'] },
        { prompt: 'Continue praticando!', answers: ['jiāyóu, jìxù liànxí — 加油，继续练习', 'jiāyóu, jìxù liànxí', 'jiayou, jixu lianxi', '加油，继续练习'] },
      ]},
      { sentences: [
        { prompt: 'O apartamento fica perto do metrô.', answers: ['gōngyù zài dìtiě zhàn fùjìn — 公寓在地铁站附近', 'gōngyù zài dìtiě zhàn fùjìn', 'gongyu zai ditie zhan fujin', '公寓在地铁站附近'] },
        { prompt: 'Quanto é o aluguel por mês?', answers: ['měi gè yuè fángzū duōshǎo — 每个月房租多少', 'měi gè yuè fángzū duōshǎo', 'mei ge yue fangzu duoshao', '每个月房租多少'] },
        { prompt: 'As contas estão incluídas?', answers: ['shuǐdiànfèi bāokuò ma — 水电费包括吗', 'shuǐdiànfèi bāokuò ma', 'shuidianfei baokuo ma', '水电费包括吗'] },
        { prompt: 'Posso ver o apartamento?', answers: ['wǒ kěyǐ kàn yī kàn gōngyù ma — 我可以看一看公寓吗', 'wǒ kěyǐ kàn yī kàn gōngyù ma', 'wo keyi kan yi kan gongyu ma', '我可以看一看公寓吗'] },
        { prompt: 'Assino o contrato por um ano.', answers: ['wǒ qiān yī nián de hétong — 我签一年的合同', 'wǒ qiān yī nián de hétong', 'wo qian yi nian de hetong', '我签一年的合同'] },
      ]},
      { sentences: [
        { prompt: 'O ônibus está lotado.', answers: ['gōngjiāochē hěn yōngjǐ — 公交车很拥挤', 'gōngjiāochē hěn yōngjǐ', 'gongjiaoche hen yongji', '公交车很拥挤'] },
        { prompt: 'Tem lugar sentado?', answers: ['yǒu kōng zuòwèi ma — 有空座位吗', 'yǒu kōng zuòwèi ma', 'you kong zuowei ma', '有空座位吗'] },
        { prompt: 'Próxima parada — Tiananmen.', answers: ["xià yī zhàn — Tiān'ānmén — 下一站——天安门", "xià yī zhàn — Tiān'ānmén", 'xia yi zhan — Tian anmen', '下一站——天安门'] },
        { prompt: 'Onde devo descer?', answers: ['wǒ yīnggāi zài nǎlǐ xià chē — 我应该在哪里下车', 'wǒ yīnggāi zài nǎlǐ xià chē', 'wo yinggai zai nali xia che', '我应该在哪里下车'] },
        { prompt: 'Desço na próxima parada.', answers: ['wǒ xià yī zhàn xià chē — 我下一站下车', 'wǒ xià yī zhàn xià chē', 'wo xia yi zhan xia che', '我下一站下车'] },
      ]},
      { sentences: [
        { prompt: 'Você aprende rápido!', answers: ['nǐ xué de hěn kuài — 你学得很快', 'nǐ xué de hěn kuài', 'ni xue de hen kuai', '你学得很快'] },
        { prompt: 'Obrigado, ainda tenho muito a aprender.', answers: ['xièxiè, wǒ hái yǒu hěn duō yào xué — 谢谢，我还有很多要学', 'xièxiè, wǒ hái yǒu hěn duō yào xué', 'xie xie, wo hai you hen duo yao xue', '谢谢，我还有很多要学'] },
        { prompt: 'Você vai conseguir — continue praticando.', answers: ['nǐ néng zuò dào de, jìxù liànxí — 你能做到的，继续练习', 'nǐ néng zuò dào de, jìxù liànxí', 'ni neng zuo dao de, jixu lianxi', '你能做到的，继续练习'] },
        { prompt: 'Cada dia aprendo algo novo.', answers: ['wǒ měitiān dōu xué dào xīn dōngxi — 我每天都学到新东西', 'wǒ měitiān dōu xué dào xīn dōngxi', 'wo meitian dou xue dao xin dongxi', '我每天都学到新东西'] },
        { prompt: 'Boa sorte nos seus estudos de mandarim!', answers: ['zhù nǐ xué pǔtōnghuà shùnlì — 祝你学普通话顺利', 'zhù nǐ xué pǔtōnghuà shùnlì', 'zhu ni xue putonghua shunli', '祝你学普通话顺利'] },
      ]},
      { sentences: [
        { prompt: 'Onde fica a biblioteca?', answers: ['túshūguǎn zài nǎlǐ — 图书馆在哪里', 'túshūguǎn zài nǎlǐ', 'tushuguan zai nali', '图书馆在哪里'] },
        { prompt: 'Preciso renovar minha matrícula.', answers: ['wǒ xūyào bàn xùxué shǒuxù — 我需要办续学手续', 'wǒ xūyào bàn xùxué shǒuxù', 'wo xuyao ban xuxue shouxu', '我需要办续学手续'] },
        { prompt: 'O prazo para entregar é amanhã.', answers: ['jiāo zuòyè de qīxiàn shì míngtiān — 交作业的期限是明天', 'jiāo zuòyè de qīxiàn shì míngtiān', 'jiao zuoye de qixian shi mingtian', '交作业的期限是明天'] },
        { prompt: 'Posso assistir a uma aula como visitante?', answers: ['wǒ kěyǐ páng tīng yī kè ma — 我可以旁听一课吗', 'wǒ kěyǐ páng tīng yī kè ma', 'wo keyi pang ting yi ke ma', '我可以旁听一课吗'] },
        { prompt: 'O professor é exigente, mas ótimo.', answers: ['lǎoshī yāoqiú gāo, dàn hěn hǎo — 老师要求高，但很好', 'lǎoshī yāoqiú gāo, dàn hěn hǎo', 'laoshi yaoqiu gao, dan hen hao', '老师要求高，但很好'] },
      ]},
      { sentences: [
        { prompt: 'Tem tamanho maior?', answers: ['yǒu dà hào de ma — 有大号的吗', 'yǒu dà hào de ma', 'you da hao de ma', '有大号的吗'] },
        { prompt: 'Posso trocar se não servir?', answers: ['rúguǒ bù héshì kěyǐ huàn ma — 如果不合适可以换吗', 'rúguǒ bù héshì kěyǐ huàn ma', 'ruguo bu heshi keyi huan ma', '如果不合适可以换吗'] },
        { prompt: 'Este está em promoção?', answers: ['zhège zài dǎ zhé ma — 这个在打折吗', 'zhège zài dǎ zhé ma', 'zhege zai da zhe ma', '这个在打折吗'] },
        { prompt: 'Quanto fica no total?', answers: ['yīgòng duōshǎo qián — 一共多少钱', 'yīgòng duōshǎo qián', 'yigong duoshao qian', '一共多少钱'] },
        { prompt: 'Você aceita pagamento em dinheiro?', answers: ['nǐmen shōu xiànjīn ma — 你们收现金吗', 'nǐmen shōu xiànjīn ma', 'nimen shou xianjin ma', '你们收现金吗'] },
      ]},
      { sentences: [
        { prompt: 'Tem cardápio em inglês?', answers: ['yǒu Yīngwén càidān ma — 有英文菜单吗', 'yǒu Yīngwén càidān ma', 'you Yingwen caidan ma', '有英文菜单吗'] },
        { prompt: 'Posso pedir mais um prato?', answers: ['wǒ kěyǐ zài diǎn yī gè cài ma — 我可以再点一个菜吗', 'wǒ kěyǐ zài diǎn yī gè cài ma', 'wo keyi zai dian yi ge cai ma', '我可以再点一个菜吗'] },
        { prompt: 'O prato já está frio.', answers: ['cài lěng le — 菜冷了', 'cài lěng le', 'cai leng le', '菜冷了'] },
        { prompt: 'A conta, por favor.', answers: ['máfan nǐ mǎidān — 麻烦你买单', 'máfan nǐ mǎidān', 'mafan ni maidan', '麻烦你买单'] },
        { prompt: 'Foi uma refeição deliciosa.', answers: ['zhè dùn fàn hěn hǎochī — 这顿饭很好吃', 'zhè dùn fàn hěn hǎochī', 'zhe dun fan hen haochi', '这顿饭很好吃'] },
      ]},
      { sentences: [
        { prompt: 'Vai chover hoje à tarde?', answers: ['jīntiān xiàwǔ huì xià yǔ ma — 今天下午会下雨吗', 'jīntiān xiàwǔ huì xià yǔ ma', 'jintian xiawu hui xia yu ma', '今天下午会下雨吗'] },
        { prompt: 'A previsão diz que vai fazer sol.', answers: ['tiānqì yùbào shuō huì chū tàiyáng — 天气预报说会出太阳', 'tiānqì yùbào shuō huì chū tàiyáng', 'tianqi yubao shuo hui chu taiyang', '天气预报说会出太阳'] },
        { prompt: 'Adoro o clima aqui.', answers: ['wǒ hěn xǐhuān zhèlǐ de qìhòu — 我很喜欢这里的气候', 'wǒ hěn xǐhuān zhèlǐ de qìhòu', 'wo hen xihuan zheli de qihou', '我很喜欢这里的气候'] },
        { prompt: 'Está úmido hoje.', answers: ['jīntiān hěn cháoshī — 今天很潮湿', 'jīntiān hěn cháoshī', 'jintian hen chaoshi', '今天很潮湿'] },
        { prompt: 'Espero que não chova no fim de semana.', answers: ['xīwàng zhōumò bù xià yǔ — 希望周末不下雨', 'xīwàng zhōumò bù xià yǔ', 'xiwang zhoumo bu xia yu', '希望周末不下雨'] },
      ]},
      { sentences: [
        { prompt: 'Quando você volta para o Brasil?', answers: ['nǐ shénme shíhòu huí Bāxī — 你什么时候回巴西', 'nǐ shénme shíhòu huí Bāxī', 'ni shenme shihou hui Baxi', '你什么时候回巴西'] },
        { prompt: 'Vou sentir falta de você.', answers: ['wǒ huì xiǎng nǐ de — 我会想你的', 'wǒ huì xiǎng nǐ de', 'wo hui xiang ni de', '我会想你的'] },
        { prompt: 'Muito obrigado por tudo.', answers: ['fēicháng gǎnxiè nǐ de yīqiē — 非常感谢你的一切', 'fēicháng gǎnxiè nǐ de yīqiē', 'feichang ganxie ni de yiqie', '非常感谢你的一切'] },
        { prompt: 'Vamos nos manter em contato!', answers: ['wǒmen bǎochí liánluò ba — 我们保持联络吧', 'wǒmen bǎochí liánluò ba', 'women baochi lianluo ba', '我们保持联络吧'] },
        { prompt: 'Boa viagem e cuide-se!', answers: ['yī lù shùnfēng, bǎozhòng — 一路顺风，保重', 'yī lù shùnfēng, bǎozhòng', 'yi lu shunfeng, baozhong', '一路顺风，保重'] },
      ]},
    ],
  },
];
