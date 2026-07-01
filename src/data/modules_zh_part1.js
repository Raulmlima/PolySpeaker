export const MODULES_ZH_PART1 = [
  // ═══════════════════════════════════════════════════════════════
  //  FUNDAMENTOS
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'fund-zh-1', language: 'zh', stage: 'Fundamentos', order: 1,
    title: 'Eu sou, você é',
    subtitle: 'Pronomes pessoais e o verbo 是 (shì)',
    theory: `## Pronomes pessoais

| Português | Pinyin | Caractere |
|-----------|--------|-----------|
| eu | wǒ | 我 |
| você | nǐ | 你 |
| ele / ela | tā | 他 / 她 |
| nós | wǒmen | 我们 |
| vocês | nǐmen | 你们 |
| eles / elas | tāmen | 他们 |

💡 Os caracteres 他 (ele), 她 (ela) e 它 (coisa/animal) têm **pronúncia idêntica** (tā) — a diferença só existe na escrita, não na fala.

## O verbo 是 (shì) — ser / é

Em mandarim, "ser" (em frases de identidade) se diz **shì (是)**. Para negar, use **bù shì (不是)**.

| Afirmativo | Negativo |
|-----------|---------|
| wǒ shì (eu sou) | wǒ bù shì (eu não sou) |
| nǐ shì (você é) | nǐ bù shì (você não é) |
| tā shì (ele/ela é) | tā bù shì (ele/ela não é) |

Repare que **是 não muda de forma** — não existe conjugação por pessoa, número ou tempo. O mesmo "shì" serve para "eu sou", "ele é", "nós éramos" etc. O tempo é indicado por palavras de tempo (昨天 "ontem", 明天 "amanhã") ou partículas como 了, nunca pelo verbo.

Para fazer perguntas sim/não, adicione **吗 (ma)** no final da frase, sem inverter a ordem das palavras:
"nǐ shì xuéshēng ma?" → "Você é estudante?"

## Mais exemplos

| Mandarim | Pinyin | Português |
|----------|--------|-----------|
| 我们是朋友。 | Wǒmen shì péngyǒu. | Nós somos amigos. |
| 他不是老师。 | Tā bù shì lǎoshī. | Ele não é professor. |
| 你是中国人吗？ | Nǐ shì Zhōngguórén ma? | Você é chinês? |
| 这是我的书。 | Zhè shì wǒ de shū. | Este é o meu livro. |

### Erros comuns

⚠️ Não existe verbo "estar" separado de "ser" como em português. **是** cobre identidade/classificação ("ele é médico"), mas **NÃO** se usa para descrever estados ou qualidades com adjetivos — para isso usa-se 很 (hěn), como em "wǒ hěn lèi" (estou cansado), nunca "wǒ shì lèi".

⚠️ Não tente conjugar 是 — "wǒ shì", "nǐ shì", "tā shì" usam exatamente a mesma palavra. Resista ao impulso de procurar uma forma equivalente a "sou/é/são/somos".

## Vocabulário-chave

• 医生 (yīshēng) — médico
• 中国人 (zhōngguórén) — chinês (pessoa)
• 美国人 (měiguórén) — americano
• 巴西人 (bāxīrén) — brasileiro
• 日本人 (rìběnrén) — japonês
• 朋友 (péngyǒu) — amigo
• 问题 (wèntí) — problema
• 还是 (háishi) — ou (em perguntas)`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu sou estudante.', answers: ['wǒ shì xuéshēng — 我是学生', 'wǒ shì xuéshēng', 'wo shi xuesheng', '我是学生'] },
          { prompt: 'Você é professor.', answers: ['nǐ shì lǎoshī — 你是老师', 'nǐ shì lǎoshī', 'ni shi laoshi', '你是老师'] },
          { prompt: 'Ele é médico.', answers: ['tā shì yīshēng — 他是医生', 'tā shì yīshēng', 'ta shi yisheng', '他是医生'] },
          { prompt: 'Ela é chinesa.', answers: ['tā shì zhōngguórén — 她是中国人', 'tā shì zhōngguórén', 'ta shi zhongguoren', '她是中国人'] },
          { prompt: 'Nós somos amigos.', answers: ['wǒmen shì péngyǒu — 我们是朋友', 'wǒmen shì péngyǒu', 'women shi pengyou', '我们是朋友'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Vocês são estudantes.', answers: ['nǐmen shì xuéshēng — 你们是学生', 'nǐmen shì xuéshēng', 'nimen shi xuesheng', '你们是学生'] },
          { prompt: 'Eu não sou professor.', answers: ['wǒ bù shì lǎoshī — 我不是老师', 'wǒ bù shì lǎoshī', 'wo bu shi laoshi', '我不是老师'] },
          { prompt: 'Ele não é americano.', answers: ['tā bù shì měiguórén — 他不是美国人', 'tā bù shì měiguórén', 'ta bu shi meiguoren', '他不是美国人'] },
          { prompt: 'Você é brasileiro?', answers: ['nǐ shì bāxīrén ma — 你是巴西人吗', 'nǐ shì bāxīrén ma', 'ni shi baxiren ma', '你是巴西人吗'] },
          { prompt: 'Ela é japonesa?', answers: ['tā shì rìběnrén ma — 她是日本人吗', 'tā shì rìběnrén ma', 'ta shi ribenren ma', '她是日本人吗'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu sou brasileiro, não sou japonês.', answers: ['wǒ shì bāxīrén, bù shì rìběnrén — 我是巴西人，不是日本人', 'wǒ shì bāxīrén, bù shì rìběnrén', 'wo shi baxiren, bu shi ribenren', '我是巴西人，不是日本人'] },
          { prompt: 'Isso é um livro.', answers: ['zhè shì shū — 这是书', 'zhè shì shū', 'zhe shi shu', '这是书'] },
          { prompt: 'Isso não é um problema.', answers: ['zhè bù shì wèntí — 这不是问题', 'zhè bù shì wèntí', 'zhe bu shi wenti', '这不是问题'] },
          { prompt: 'Você é médico ou estudante?', answers: ['nǐ shì yīshēng háishi xuéshēng — 你是医生还是学生', 'nǐ shì yīshēng háishi xuéshēng', 'ni shi yisheng haishi xuesheng', '你是医生还是学生'] },
          { prompt: 'Ele é o meu pai.', answers: ['tā shì wǒ bàba — 他是我爸爸', 'tā shì wǒ bàba', 'ta shi wo baba', '他是我爸爸'] },
        ],
      },
      {
        title: '🀄 Reconhecimento de caracteres',
        sentences: [
          { prompt: '我 — O que significa este caractere?', answers: ['eu', 'I', 'mim'] },
          { prompt: '你 — O que significa este caractere?', answers: ['você', 'tu', 'you'] },
          { prompt: '是 — O que significa este caractere?', answers: ['ser', 'é', 'sou', 'são', 'somos'] },
          { prompt: '不 — O que significa este caractere?', answers: ['não', 'no', 'not'] },
          { prompt: '学生 — O que significa?', answers: ['estudante', 'aluno', 'student'] },
        ],
      },
    ],
  },

  {
    id: 'fund-zh-2', language: 'zh', stage: 'Fundamentos', order: 2,
    title: 'Saudações e apresentações',
    subtitle: 'nǐ hǎo, xièxiè, zàijiàn',
    theory: `## Saudações essenciais

| Expressão | Pinyin | Significado |
|-----------|--------|-------------|
| 你好 | nǐ hǎo | olá |
| 你好吗？ | nǐ hǎo ma? | como vai? |
| 很好，谢谢 | hěn hǎo, xièxiè | muito bem, obrigado |
| 早上好 | zǎoshang hǎo | bom dia |
| 晚上好 | wǎnshang hǎo | boa noite |
| 再见 | zàijiàn | tchau / adeus |
| 对不起 | duìbuqǐ | desculpe |
| 没关系 | méi guānxi | não tem problema |
| 不客气 | bù kèqi | de nada |

💡 **Sandhi de tons em 你好 (nǐ hǎo):** os dois caracteres têm 3º tom em isolamento. Quando dois 3ºs tons ficam seguidos, o primeiro vira **2º tom** na pronúncia real: "ní hǎo" (mesmo escrevendo nǐ hǎo no pinyin). Esse é a famosa **regra do 3º+3º tom**, válida em qualquer par de sílabas adjacentes de 3º tono.

## Apresentações

| Expressão | Pinyin |
|-----------|--------|
| Qual é o seu nome? | nǐ jiào shénme míngzì? |
| Meu nome é… | wǒ jiào… |
| De onde você é? | nǐ shì nǎ guó rén? |
| Prazer em conhecê-lo. | rènshí nǐ hěn gāoxìng |

## Mais exemplos

| Mandarim | Pinyin | Português |
|----------|--------|-----------|
| 你今天好吗？ | Nǐ jīntiān hǎo ma? | Você está bem hoje? |
| 很高兴认识你。 | Hěn gāoxìng rènshí nǐ. | Muito prazer em conhecê-lo. |
| 我是巴西人，你呢？ | Wǒ shì Bāxīrén, nǐ ne? | Eu sou brasileiro, e você? |
| 明天见！ | Míngtiān jiàn! | Até amanhã! |

### Erros comuns

⚠️ Em chinês, "你好吗?" não é usado tão automaticamente quanto "how are you" em inglês — entre conhecidos, é mais comum só dizer "你好" ou comentar algo específico (ex.: "吃了吗?" "já comeu?"). Usar "你好吗" toda hora pode parecer formal ou de livro didático.

⚠️ **没关系** (não tem problema) e **不客气** (de nada) não são intercambiáveis: 没关系 responde a um pedido de desculpas (对不起), enquanto 不客气 responde a um agradecimento (谢谢).

## Vocabulário-chave

• 请 (qǐng) — por favor
• 慢 (màn) — devagar
• 听不懂 (tīng bù dǒng) — não entender (ao ouvir)
• 高兴 (gāoxìng) — contente/feliz
• 认识 (rènshí) — conhecer (pessoa)`,
    exercises: [
      {
        sentences: [
          { prompt: 'Olá!', answers: ['nǐ hǎo — 你好', 'nǐ hǎo', 'ni hao', '你好'] },
          { prompt: 'Como vai você?', answers: ['nǐ hǎo ma — 你好吗', 'nǐ hǎo ma', 'ni hao ma', '你好吗'] },
          { prompt: 'Estou muito bem, obrigado.', answers: ['wǒ hěn hǎo, xièxiè — 我很好，谢谢', 'wǒ hěn hǎo, xièxiè', 'wo hen hao, xie xie', '我很好，谢谢'] },
          { prompt: 'Qual é o seu nome?', answers: ['nǐ jiào shénme míngzì — 你叫什么名字', 'nǐ jiào shénme míngzì', 'ni jiao shenme mingzi', '你叫什么名字'] },
          { prompt: 'Prazer em conhecê-lo.', answers: ['rènshí nǐ hěn gāoxìng — 认识你很高兴', 'rènshí nǐ hěn gāoxìng', 'renshi ni hen gaoxing', '认识你很高兴'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Bom dia!', answers: ['zǎoshang hǎo — 早上好', 'zǎoshang hǎo', 'zaoshang hao', '早上好'] },
          { prompt: 'Boa noite!', answers: ['wǎnshang hǎo — 晚上好', 'wǎnshang hǎo', 'wanshang hao', '晚上好'] },
          { prompt: 'Tchau!', answers: ['zàijiàn — 再见', 'zàijiàn', 'zaijian', '再见'] },
          { prompt: 'Desculpe.', answers: ['duìbuqǐ — 对不起', 'duìbuqǐ', 'dui bu qi', '对不起'] },
          { prompt: 'Não tem problema.', answers: ['méi guānxi — 没关系', 'méi guānxi', 'mei guanxi', '没关系'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Obrigado!', answers: ['xièxiè — 谢谢', 'xièxiè', 'xie xie', '谢谢'] },
          { prompt: 'De nada.', answers: ['bù kèqi — 不客气', 'bù kèqi', 'bu keqi', '不客气'] },
          { prompt: 'De onde você é?', answers: ['nǐ shì nǎ guó rén — 你是哪国人', 'nǐ shì nǎ guó rén', 'ni shi na guo ren', '你是哪国人'] },
          { prompt: 'Por favor, fale mais devagar.', answers: ['qǐng shuō màn yīdiǎn — 请说慢一点', 'qǐng shuō màn yīdiǎn', 'qing shuo man yidian', '请说慢一点'] },
          { prompt: 'Eu não entendo.', answers: ['wǒ tīng bù dǒng — 我听不懂', 'wǒ tīng bù dǒng', 'wo ting bu dong', '我听不懂'] },
        ],
      },
      {
        title: '🀄 Reconhecimento de caracteres',
        sentences: [
          { prompt: '你好 — O que significa?', answers: ['olá', 'oi', 'hello', 'hi'] },
          { prompt: '谢谢 — O que significa?', answers: ['obrigado', 'obrigada', 'thanks', 'thank you'] },
          { prompt: '再见 — O que significa?', answers: ['tchau', 'até logo', 'goodbye', 'bye'] },
          { prompt: '对不起 — O que significa?', answers: ['desculpe', 'desculpa', 'perdão', 'sorry'] },
          { prompt: '请 — O que significa este caractere?', answers: ['por favor', 'please'] },
        ],
      },
    ],
  },

  {
    id: 'fund-zh-3', language: 'zh', stage: 'Fundamentos', order: 3,
    title: 'Números e quantidades',
    subtitle: 'Contar, perguntar quantos e o classificador 个 (gè)',
    theory: `## Números de 0 a 10

| Número | Pinyin | Caractere |
|--------|--------|-----------|
| 0 | líng | 零 |
| 1 | yī | 一 |
| 2 | èr | 二 |
| 3 | sān | 三 |
| 4 | sì | 四 |
| 5 | wǔ | 五 |
| 6 | liù | 六 |
| 7 | qī | 七 |
| 8 | bā | 八 |
| 9 | jiǔ | 九 |
| 10 | shí | 十 |

## Números maiores
- 11 = shíyī (十一), 20 = èrshí (二十), 21 = èrshíyī (二十一)
- 100 = yībǎi (一百), 1000 = yīqiān (一千)

## Classificadores (量词) — estrutura: Número + Classificador + Substantivo

Diferente do português, em mandarim **nunca** se coloca um número direto antes de um substantivo contável. Entre o número e o substantivo sempre vem um **classificador** (量词, liàngcí) que depende do tipo de objeto:

| Classificador | Pinyin | Usado para | Exemplo |
|---------------|--------|------------|---------|
| 个 | gè | uso geral, pessoas, objetos sem classificador específico | yī gè rén (uma pessoa) |
| 本 | běn | livros, cadernos | yī běn shū (um livro) |
| 张 | zhāng | coisas planas (folhas, mesas, fotos) | yī zhāng zhǐ (uma folha) |
| 只 | zhī | animais pequenos | yī zhī māo (um gato) |
| 杯 | bēi | bebidas em copo/xícara | yī bēi chá (uma xícara de chá) |
| 件 | jiàn | roupas, assuntos | yī jiàn yīfu (uma peça de roupa) |
| 辆 | liàng | veículos com rodas | yī liàng chē (um carro) |

⚠️ Esquecer o classificador é um dos erros mais comuns de falantes de português: nunca diga "sān píngguǒ" (três maçã) — o correto é **sān gè píngguǒ**, sempre com o classificador entre número e substantivo.

⚠️ Para "2" antes de classificador, use **liǎng (两)**, não èr — "liǎng gè rén" (duas pessoas), nunca "èr gè rén".

## Sandhi de tom para 一 (yī) e 不 (bù)

💡 O numeral **一 (yī)** muda de tom dependendo do que vem depois: antes de 4º tono ou no fim de frase soa "yí" (ex.: 一个 yí gè), antes de 1º/2º/3º tom como prefixo ordinal mantém "yī". Já estudado em profundidade no módulo de negação — aqui o importante é notar que **一 sozinho ("um") como número isolado permanece yī**.

## Mais exemplos

| Mandarim | Pinyin | Português |
|----------|--------|-----------|
| 我要两杯茶。 | Wǒ yào liǎng bēi chá. | Eu quero duas xícaras de chá. |
| 她买了三件衣服。 | Tā mǎi le sān jiàn yīfu. | Ela comprou três peças de roupa. |
| 这辆车很贵。 | Zhè liàng chē hěn guì. | Este carro é muito caro. |
| 你家有几只猫？ | Nǐ jiā yǒu jǐ zhī māo? | Quantos gatos você tem em casa? |

## Vocabulário-chave

• 苹果 (píngguǒ) — maçã
• 房间 (fángjiān) — quarto/sala
• 块 (kuài) — unidade de dinheiro (coloquial p/ yuan)
• 岁 (suì) — anos (idade)`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu tenho um irmão.', answers: ['wǒ yǒu yī gè gēgē — 我有一个哥哥', 'wǒ yǒu yī gè gēgē', 'wo you yi ge gege', '我有一个哥哥'] },
          { prompt: 'Ela tem dois filhos.', answers: ['tā yǒu liǎng gè háizi — 她有两个孩子', 'tā yǒu liǎng gè háizi', 'ta you liang ge haizi', '她有两个孩子'] },
          { prompt: 'Quantos anos você tem?', answers: ['nǐ jǐ suì — 你几岁', 'nǐ jǐ suì', 'ni ji sui', '你几岁'] },
          { prompt: 'Eu tenho vinte e cinco anos.', answers: ['wǒ èrshíwǔ suì — 我二十五岁', 'wǒ èrshíwǔ suì', 'wo ershiwu sui', '我二十五岁'] },
          { prompt: 'Quanto custa?', answers: ['duōshǎo qián — 多少钱', 'duōshǎo qián', 'duoshao qian', '多少钱'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu quero três maçãs.', answers: ['wǒ yào sān gè píngguǒ — 我要三个苹果', 'wǒ yào sān gè píngguǒ', 'wo yao san ge pingguo', '我要三个苹果'] },
          { prompt: 'Há cinco pessoas na sala.', answers: ['fángjiān lǐ yǒu wǔ gè rén — 房间里有五个人', 'fángjiān lǐ yǒu wǔ gè rén', 'fangjian li you wu ge ren', '房间里有五个人'] },
          { prompt: 'São dez horas.', answers: ['xiànzài shí diǎn — 现在十点', 'xiànzài shí diǎn', 'xianzai shi dian', '现在十点'] },
          { prompt: 'Eu tenho quatro livros.', answers: ['wǒ yǒu sì běn shū — 我有四本书', 'wǒ yǒu sì běn shū', 'wo you si ben shu', '我有四本书'] },
          { prompt: 'Ele tem sete gatos.', answers: ['tā yǒu qī zhī māo — 他有七只猫', 'tā yǒu qī zhī māo', 'ta you qi zhi mao', '他有七只猫'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Há cem pessoas.', answers: ['yǒu yī bǎi gè rén — 有一百个人', 'yǒu yī bǎi gè rén', 'you yi bai ge ren', '有一百个人'] },
          { prompt: 'Ela tem onze anos.', answers: ['tā shíyī suì — 她十一岁', 'tā shíyī suì', 'ta shiyi sui', '她十一岁'] },
          { prompt: 'Custa trinta yuan.', answers: ['sānshí kuài — 三十块', 'sānshí kuài', 'sanshi kuai', '三十块'] },
          { prompt: 'Nós somos seis.', answers: ['wǒmen yǒu liù gè rén — 我们有六个人', 'wǒmen yǒu liù gè rén', 'women you liu ge ren', '我们有六个人'] },
          { prompt: 'Quantas pessoas há?', answers: ['yǒu duōshǎo rén — 有多少人', 'yǒu duōshǎo rén', 'you duoshao ren', '有多少人'] },
        ],
      },
      {
        title: '🀄 Reconhecimento de caracteres',
        sentences: [
          { prompt: '一 二 三 — Quais números são esses? (em ordem)', answers: ['um dois três', '1 2 3', 'one two three', 'um, dois, três'] },
          { prompt: '十 — O que significa?', answers: ['dez', '10', 'ten'] },
          { prompt: '百 — O que significa?', answers: ['cem', '100', 'hundred'] },
          { prompt: '多少 — O que significa?', answers: ['quanto', 'quantos', 'how much', 'how many'] },
          { prompt: '个 — Para que serve este classificador?', answers: ['classificador geral', 'contador geral', 'unidade', 'general classifier'] },
        ],
      },
    ],
  },

  {
    id: 'fund-zh-4', language: 'zh', stage: 'Fundamentos', order: 4,
    title: 'Família',
    subtitle: 'Termos de parentesco em mandarim',
    theory: `## Família — vocabulário essencial

| Português | Pinyin | Caractere |
|-----------|--------|-----------|
| pai | bàba | 爸爸 |
| mãe | māma | 妈妈 |
| irmão mais velho | gēgē | 哥哥 |
| irmão mais novo | dìdi | 弟弟 |
| irmã mais velha | jiějiě | 姐姐 |
| irmã mais nova | mèimei | 妹妹 |
| avô paterno | yéye | 爷爷 |
| avó paterna | nǎinai | 奶奶 |
| avô materno | wàigōng | 外公 |
| avó materna | wàipó | 外婆 |
| marido | zhàngfu | 丈夫 |
| esposa | qīzi | 妻子 |
| filho | érzǐ | 儿子 |
| filha | nǚér | 女儿 |
| amigo | péngyǒu | 朋友 |

⚠️ O mandarim distingue irmão/irmã **mais velho** vs. **mais novo**, e avós **paternos** vs. **maternos** — algo que o português não marca. Não existe uma palavra única para "irmão": é preciso escolher entre gēgē (哥哥, mais velho) ou dìdi (弟弟, mais novo).

## A partícula possessiva 的 (de)

Para dizer "meu/minha", "dele/dela" etc., usa-se **的** depois do pronome: "wǒ de bàba" (meu pai), "tā de māma" (a mãe dele/dela). Com termos de parentesco próximos, o 的 costuma ser **omitido** na fala informal: "wǒ bàba" já soa natural e correto, sem precisar de "wǒ de bàba".

💡 Note a diferença de tom entre 奶奶 (nǎinai, avó paterna) — onde a segunda sílaba é neutra — e outros nomes de parentesco que repetem sílaba, como 妈妈 (māma) e 爸爸 (bàba), também com 2ª sílaba em tom neutro. Essa repetição com tom neutro na segunda sílaba é comum em termos de família.

## Mais exemplos

| Mandarim | Pinyin | Português |
|----------|--------|-----------|
| 我家有五个人。 | Wǒ jiā yǒu wǔ gè rén. | Minha família tem cinco pessoas. |
| 他的女儿很可爱。 | Tā de nǚ'ér hěn kě'ài. | A filha dele é muito fofa. |
| 我外婆住在乡下。 | Wǒ wàipó zhù zài xiāngxià. | Minha avó materna mora no interior. |
| 你有几个兄弟姐妹？ | Nǐ yǒu jǐ gè xiōngdì jiěmèi? | Quantos irmãos você tem? |

### Erros comuns

⚠️ Não traduza "irmão" ou "irmã" literalmente sem pensar na idade relativa — em chinês é obrigatório especificar gēgē/dìdi ou jiějiě/mèimei; não existe um termo neutro de uso comum equivalente a "brother"/"sister" no dia a dia.`,
    exercises: [
      {
        sentences: [
          { prompt: 'Meu pai é professor.', answers: ['wǒ bàba shì lǎoshī — 我爸爸是老师', 'wǒ bàba shì lǎoshī', 'wo baba shi laoshi', '我爸爸是老师'] },
          { prompt: 'Minha mãe trabalha num hospital.', answers: ['wǒ māma zài yīyuàn gōngzuò — 我妈妈在医院工作', 'wǒ māma zài yīyuàn gōngzuò', 'wo mama zai yiyuan gongzuo', '我妈妈在医院工作'] },
          { prompt: 'Eu tenho um irmão mais velho.', answers: ['wǒ yǒu yī gè gēgē — 我有一个哥哥', 'wǒ yǒu yī gè gēgē', 'wo you yi ge gege', '我有一个哥哥'] },
          { prompt: 'Ela tem uma irmã mais nova.', answers: ['tā yǒu yī gè mèimei — 她有一个妹妹', 'tā yǒu yī gè mèimei', 'ta you yi ge meimei', '她有一个妹妹'] },
          { prompt: 'Minha avó gosta de cozinhar.', answers: ['wǒ nǎinai xǐhuān zuò cài — 我奶奶喜欢做菜', 'wǒ nǎinai xǐhuān zuò cài', 'wo nainai xihuan zuo cai', '我奶奶喜欢做菜'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Meu marido é engenheiro.', answers: ['wǒ zhàngfu shì gōngchéngshī — 我丈夫是工程师', 'wǒ zhàngfu shì gōngchéngshī', 'wo zhangfu shi gongchengshi', '我丈夫是工程师'] },
          { prompt: 'Eu tenho dois filhos.', answers: ['wǒ yǒu liǎng gè érzǐ — 我有两个儿子', 'wǒ yǒu liǎng gè érzǐ', 'wo you liang ge erzi', '我有两个儿子'] },
          { prompt: 'Você tem irmãos?', answers: ['nǐ yǒu xiōngdì jiěmèi ma — 你有兄弟姐妹吗', 'nǐ yǒu xiōngdì jiěmèi ma', 'ni you xiongdi jiemei ma', '你有兄弟姐妹吗'] },
          { prompt: 'Não, sou filho único.', answers: ['méi yǒu, wǒ shì dúshēngzǐ — 没有，我是独生子', 'méi yǒu, wǒ shì dúshēngzǐ', 'mei you, wo shi dushengzi', '没有，我是独生子'] },
          { prompt: 'Ela é minha melhor amiga.', answers: ['tā shì wǒ zuì hǎo de péngyǒu — 她是我最好的朋友', 'tā shì wǒ zuì hǎo de péngyǒu', 'ta shi wo zui hao de pengyou', '她是我最好的朋友'] },
        ],
      },
      {
        sentences: [
          { prompt: 'A família dele é muito grande.', answers: ['tā de jiātíng hěn dà — 他的家庭很大', 'tā de jiātíng hěn dà', 'ta de jiating hen da', '他的家庭很大'] },
          { prompt: 'Minha irmã mais velha mora em Pequim.', answers: ['wǒ jiějiě zhù zài Běijīng — 我姐姐住在北京', 'wǒ jiějiě zhù zài Běijīng', 'wo jiejie zhu zai Beijing', '我姐姐住在北京'] },
          { prompt: 'O filho deles tem cinco anos.', answers: ['tāmen de érzǐ wǔ suì — 他们的儿子五岁', 'tāmen de érzǐ wǔ suì', 'tamen de erzi wu sui', '他们的儿子五岁'] },
          { prompt: 'Meu avô tem oitenta anos.', answers: ['wǒ yéye bāshí suì — 我爷爷八十岁', 'wǒ yéye bāshí suì', 'wo yeye bashi sui', '我爷爷八十岁'] },
          { prompt: 'Nós somos uma família feliz.', answers: ['wǒmen shì yī jiā kuàilè de jiātíng — 我们是一家快乐的家庭', 'wǒmen shì yī jiā kuàilè de jiātíng', 'women shi yi jia kuaile de jiating', '我们是一家快乐的家庭'] },
        ],
      },
      {
        title: '🀄 Reconhecimento de caracteres',
        sentences: [
          { prompt: '爸爸 — O que significa?', answers: ['pai', 'papai', 'father', 'dad'] },
          { prompt: '妈妈 — O que significa?', answers: ['mãe', 'mamãe', 'mother', 'mom'] },
          { prompt: '哥哥 — O que significa?', answers: ['irmão mais velho', 'older brother'] },
          { prompt: '妹妹 — O que significa?', answers: ['irmã mais nova', 'younger sister'] },
          { prompt: '朋友 — O que significa?', answers: ['amigo', 'amiga', 'friend'] },
        ],
      },
    ],
  },

  {
    id: 'fund-zh-5', language: 'zh', stage: 'Fundamentos', order: 5,
    title: 'Adjetivos e descrições',
    subtitle: 'Estrutura: Substantivo + 很 (hěn) + Adjetivo',
    theory: `## Como usar adjetivos em mandarim

### Estrutura da frase

Em mandarim, adjetivos funcionam como o **próprio predicado da frase** — eles não precisam (e nem devem) de um verbo "ser/estar" como em português. O papel do "ser/estar" é preenchido por **很 (hěn)**, que literalmente significa "muito", mas em frases neutras funciona apenas como elo gramatical, sem ênfase forte:

| Português | Mandarim |
|-----------|---------|
| Ela é bonita. | tā hěn piàoliang (她很漂亮) |
| Estou com fome. | wǒ hěn è (我很饿) |
| O café está quente. | kāfēi hěn rè (咖啡很热) |

💡 Note a estrutura: **Sujeito + 很 + Adjetivo** — sem nenhum verbo "ser/estar" no meio. Essa é uma das maiores diferenças estruturais entre mandarim e português.

Para negar, use **不 (bù)** diretamente antes do adjetivo, e nesse caso o 很 normalmente desaparece:
- "wǒ bù lèi" (我不累) — eu não estou cansado

### Erros comuns

⚠️ Não tente usar **是 (shì)** para descrever qualidades como "bonita", "cansado", "quente" — 是 serve para identidade/classificação ("ela é professora"), não para adjetivos. Dizer "tā shì piàoliang" está gramaticalmente errado; o correto é "tā hěn piàoliang".

⚠️ Sem hěn, a frase "tā piàoliang" (sem advérbio) soa como uma **comparação implícita** ou contraste ("ela [é que] é bonita", em oposição a outra pessoa) — não é o jeito neutro de descrever. Em frases afirmativas simples, inclua sempre 很 (ou outro advérbio de grau como 非常 fēicháng "extremamente", 太...了 tài...le "demais").

## Adjetivos essenciais

| Adjetivo | Pinyin | Caractere |
|----------|--------|-----------|
| grande / pequeno | dà / xiǎo | 大 / 小 |
| bom / ruim | hǎo / bù hǎo | 好 / 不好 |
| bonito | piàoliang | 漂亮 |
| rápido / devagar | kuài / màn | 快 / 慢 |
| quente / frio | rè / lěng | 热 / 冷 |
| cansado | lèi | 累 |
| feliz / triste | kuàilè / nánguò | 快乐 / 难过 |
| caro / barato | guì / piányí | 贵 / 便宜 |
| difícil / fácil | nán / róngyì | 难 / 容易 |
| delicioso | hǎochī | 好吃 |
| interessante | yǒuyìsi | 有意思 |

## Mais exemplos

| Mandarim | Pinyin | Português |
|----------|--------|-----------|
| 这件衣服很贵。 | Zhè jiàn yīfu hěn guì. | Esta roupa é muito cara. |
| 他不高也不矮。 | Tā bù gāo yě bù ǎi. | Ele não é alto nem baixo. |
| 今天的天气非常好。 | Jīntiān de tiānqì fēicháng hǎo. | O tempo de hoje está excelente. |
| 这道题太难了！ | Zhè dào tí tài nán le! | Esta questão é difícil demais! |

## Vocabulário-chave

• 城市 (chéngshì) — cidade
• 天气 (tiānqì) — tempo (clima)
• 饿 (è) — com fome
• 酒店 (jiǔdiàn) — hotel
• 地铁 (dìtiě) — metrô
• 电影 (diànyǐng) — filme
• 聪明 (cōngmíng) — inteligente`,
    exercises: [
      {
        sentences: [
          { prompt: 'A cidade é muito grande.', answers: ['zhège chéngshì hěn dà — 这个城市很大', 'zhège chéngshì hěn dà', 'zhege chengshi hen da', '这个城市很大'] },
          { prompt: 'Ela é muito bonita.', answers: ['tā hěn piàoliang — 她很漂亮', 'tā hěn piàoliang', 'ta hen piaoliang', '她很漂亮'] },
          { prompt: 'O tempo hoje está quente.', answers: ['jīntiān tiānqì hěn rè — 今天天气很热', 'jīntiān tiānqì hěn rè', 'jintian tianqi hen re', '今天天气很热'] },
          { prompt: 'Estou com frio.', answers: ['wǒ hěn lěng — 我很冷', 'wǒ hěn lěng', 'wo hen leng', '我很冷'] },
          { prompt: 'Estou cansado.', answers: ['wǒ hěn lèi — 我很累', 'wǒ hěn lèi', 'wo hen lei', '我很累'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ele está feliz.', answers: ['tā hěn kuàilè — 他很快乐', 'tā hěn kuàilè', 'ta hen kuaile', '他很快乐'] },
          { prompt: 'Você está com fome?', answers: ['nǐ è ma — 你饿吗', 'nǐ è ma', 'ni e ma', '你饿吗'] },
          { prompt: 'A comida está deliciosa.', answers: ['zhège cài hěn hǎochī — 这个菜很好吃', 'zhège cài hěn hǎochī', 'zhege cai hen haochi', '这个菜很好吃'] },
          { prompt: 'O hotel é muito caro.', answers: ['zhège jiǔdiàn hěn guì — 这个酒店很贵', 'zhège jiǔdiàn hěn guì', 'zhege jiudian hen gui', '这个酒店很贵'] },
          { prompt: 'O metrô é rápido.', answers: ['dìtiě hěn kuài — 地铁很快', 'dìtiě hěn kuài', 'ditie hen kuai', '地铁很快'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Esse filme é muito interessante.', answers: ['zhège diànyǐng hěn yǒuyìsi — 这个电影很有意思', 'zhège diànyǐng hěn yǒuyìsi', 'zhege dianying hen youyisi', '这个电影很有意思'] },
          { prompt: 'O trabalho não é difícil.', answers: ['zhège gōngzuò bù nán — 这个工作不难', 'zhège gōngzuò bù nán', 'zhege gongzuo bu nan', '这个工作不难'] },
          { prompt: 'Ela é muito inteligente.', answers: ['tā hěn cōngmíng — 她很聪明', 'tā hěn cōngmíng', 'ta hen congming', '她很聪明'] },
          { prompt: 'Este livro é barato.', answers: ['zhè běn shū hěn piányí — 这本书很便宜', 'zhè běn shū hěn piányí', 'zhe ben shu hen pianyi', '这本书很便宜'] },
          { prompt: 'O mandarim é difícil mas interessante.', answers: ['pǔtōnghuà hěn nán, dàn hěn yǒuyìsi — 普通话很难，但很有意思', 'pǔtōnghuà hěn nán, dàn hěn yǒuyìsi', 'putonghua hen nan, dan hen youyisi', '普通话很难，但很有意思'] },
        ],
      },
      {
        title: '🀄 Reconhecimento de caracteres',
        sentences: [
          { prompt: '大 — O que significa este caractere?', answers: ['grande', 'big', 'large'] },
          { prompt: '小 — O que significa este caractere?', answers: ['pequeno', 'small', 'little'] },
          { prompt: '好 — O que significa este caractere?', answers: ['bom', 'boa', 'good'] },
          { prompt: '很 — O que significa este caractere?', answers: ['muito', 'very', 'quite'] },
          { prompt: '漂亮 — O que significa?', answers: ['bonito', 'bonita', 'beautiful', 'pretty'] },
        ],
      },
    ],
  },

  {
    id: 'rev-fund-zh', language: 'zh', stage: 'Fundamentos', order: 99, isReview: true,
    title: 'Revisão — Fundamentos',
    subtitle: 'Pronomes, saudações, números, família e adjetivos',
    theory: null,
    exercises: [
      {
        sentences: [
          { prompt: 'Olá! Como vai você?', answers: ['nǐ hǎo! nǐ hǎo ma — 你好！你好吗', 'nǐ hǎo! nǐ hǎo ma', 'ni hao! ni hao ma', '你好！你好吗'] },
          { prompt: 'Meu nome é Lucas, sou brasileiro.', answers: ['wǒ jiào Lǔkǎsī, wǒ shì bāxīrén — 我叫卢卡斯，我是巴西人', 'wǒ jiào Lǔkǎsī, wǒ shì bāxīrén', 'wo jiao Lukasi, wo shi baxiren', '我叫卢卡斯，我是巴西人'] },
          { prompt: 'Eu tenho vinte anos.', answers: ['wǒ èrshí suì — 我二十岁', 'wǒ èrshí suì', 'wo ershi sui', '我二十岁'] },
          { prompt: 'Minha mãe é médica.', answers: ['wǒ māma shì yīshēng — 我妈妈是医生', 'wǒ māma shì yīshēng', 'wo mama shi yisheng', '我妈妈是医生'] },
          { prompt: 'A comida está muito deliciosa.', answers: ['zhège cài hěn hǎochī — 这个菜很好吃', 'zhège cài hěn hǎochī', 'zhege cai hen haochi', '这个菜很好吃'] },
          { prompt: 'Você tem irmãos?', answers: ['nǐ yǒu xiōngdì jiěmèi ma — 你有兄弟姐妹吗', 'nǐ yǒu xiōngdì jiěmèi ma', 'ni you xiongdi jiemei ma', '你有兄弟姐妹吗'] },
          { prompt: 'Não tem problema, obrigado.', answers: ['méi guānxi, xièxiè — 没关系，谢谢', 'méi guānxi, xièxiè', 'mei guanxi, xie xie', '没关系，谢谢'] },
          { prompt: 'Tchau! Até a próxima.', answers: ['zàijiàn — 再见', 'zàijiàn', 'zaijian', '再见'] },
        ],
      },
    ],
    dialogExercise: {
      audioText: 'nǐ hǎo! wǒ jiào Wáng Fāng, wǒ shì lǎoshī. wǒ yǒu liǎng gè háizi.',
      question: 'O que Wang Fang disse sobre ela mesma?',
      options: [
        { text: 'É professora e tem dois filhos.', correct: true },
        { text: 'É médica e tem dois filhos.', correct: false },
        { text: 'É professora e não tem filhos.', correct: false },
        { text: 'Tem dois irmãos e é estudante.', correct: false },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  //  BÁSICO
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'bas-zh-1', language: 'zh', stage: 'Básico', order: 1,
    title: 'Ações do dia a dia',
    subtitle: 'Verbos essenciais: comer, beber, dormir, trabalhar',
    theory: `## Verbos essenciais

| Português | Pinyin | Caractere |
|-----------|--------|-----------|
| comer | chī | 吃 |
| beber | hē | 喝 |
| dormir | shuì jiào | 睡觉 |
| trabalhar | gōngzuò | 工作 |
| estudar | xuéxí | 学习 |
| ir | qù | 去 |
| vir | lái | 来 |
| querer / precisar | yào | 要 |
| gostar | xǐhuān | 喜欢 |
| ver | kàn | 看 |
| ouvir | tīng | 听 |
| falar | shuō | 说 |
| ler | kàn shū | 看书 |
| escrever | xiě | 写 |
| comprar | mǎi | 买 |

## Estrutura da frase

A ordem básica em mandarim é **Sujeito + Verbo + Objeto** (SVO), igual ao português na superfície:
- "wǒ chī fàn" (我吃饭) — eu como arroz (lit. "eu como comida")
- "tā hē chá" (她喝茶) — ela bebe chá

A grande diferença aparece quando entram **advérbios de tempo, lugar ou modo**: em mandarim eles vêm **antes do verbo**, nunca depois como em português. A ordem completa é:

**Sujeito + Tempo + Lugar + Modo + Verbo + Objeto**

- "wǒ míngtiān zài jiā xuéxí" (我明天在家学习) — eu estudo em casa amanhã (lit. "eu amanhã em-casa estudo")
- "tā zǎoshang hē kāfēi" (她早上喝咖啡) — ela bebe café de manhã (lit. "ela de-manhã bebe café")

### Erros comuns

⚠️ Falantes de português tendem a colocar a expressão de tempo no final da frase, como fariam em português ("Eu como arroz todo dia"). Em mandarim isso é **errado**: o correto é "wǒ měitiān chī fàn" (我每天吃饭), com měitiān (todo dia) logo após o sujeito, nunca depois do verbo.

⚠️ Não existe conjugação verbal em mandarim: 吃 (chī) é a mesma palavra para "eu como", "ele come", "nós comemos" e até "comi" no passado. O tempo se marca por palavras como 昨天 (zuótiān, ontem), 现在 (xiànzài, agora) ou por partículas de aspecto como 了 (le, ação concluída) — não pela forma do verbo.

## Mais exemplos

| Mandarim | Pinyin | Português |
|----------|--------|-----------|
| 我们晚上在家看电视。 | Wǒmen wǎnshang zài jiā kàn diànshì. | Nós assistimos TV em casa de noite. |
| 他经常去图书馆学习。 | Tā jīngcháng qù túshūguǎn xuéxí. | Ele frequentemente vai estudar na biblioteca. |
| 你周末想做什么？ | Nǐ zhōumò xiǎng zuò shénme? | O que você quer fazer no fim de semana? |
| 我昨天买了一本书。 | Wǒ zuótiān mǎi le yī běn shū. | Eu comprei um livro ontem. |

💡 Notou o **了 (le)** na última frase? Essa partícula marca que a ação foi **concluída**, funcionando como um substituto do nosso passado verbal — mais detalhes em módulos futuros sobre 了/过/着.

## Vocabulário-chave

• 公司 (gōngsī) — empresa
• 图书馆 (túshūguǎn) — biblioteca
• 经常 (jīngcháng) — frequentemente
• 电视 (diànshì) — televisão
• 信 (xìn) — carta
• 起床 (qǐchuáng) — levantar-se (da cama)`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu como arroz todo dia.', answers: ['wǒ měitiān chī fàn — 我每天吃饭', 'wǒ měitiān chī fàn', 'wo meitian chi fan', '我每天吃饭'] },
          { prompt: 'Ela bebe café pela manhã.', answers: ['tā zǎoshang hē kāfēi — 她早上喝咖啡', 'tā zǎoshang hē kāfēi', 'ta zaoshang he kafei', '她早上喝咖啡'] },
          { prompt: 'Eles trabalham numa empresa.', answers: ['tāmen zài gōngsī gōngzuò — 他们在公司工作', 'tāmen zài gōngsī gōngzuò', 'tamen zai gongsi gongzuo', '他们在公司工作'] },
          { prompt: 'Eu estudo mandarim.', answers: ['wǒ xuéxí pǔtōnghuà — 我学习普通话', 'wǒ xuéxí pǔtōnghuà', 'wo xuexi putonghua', '我学习普通话'] },
          { prompt: 'Você quer comer alguma coisa?', answers: ['nǐ yào chī diǎn shénme ma — 你要吃点什么吗', 'nǐ yào chī diǎn shénme ma', 'ni yao chi dian shenme ma', '你要吃点什么吗'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu gosto de beber chá.', answers: ['wǒ xǐhuān hē chá — 我喜欢喝茶', 'wǒ xǐhuān hē chá', 'wo xihuan he cha', '我喜欢喝茶'] },
          { prompt: 'Ele vai ao trabalho de manhã.', answers: ['tā zǎoshang qù gōngzuò — 他早上去工作', 'tā zǎoshang qù gōngzuò', 'ta zaoshang qu gongzuo', '他早上去工作'] },
          { prompt: 'Ela vem amanhã.', answers: ['tā míngtiān lái — 她明天来', 'tā míngtiān lái', 'ta mingtian lai', '她明天来'] },
          { prompt: 'Eu quero comprar um livro.', answers: ['wǒ yào mǎi yī běn shū — 我要买一本书', 'wǒ yào mǎi yī běn shū', 'wo yao mai yi ben shu', '我要买一本书'] },
          { prompt: 'Nós gostamos de assistir filmes.', answers: ['wǒmen xǐhuān kàn diànyǐng — 我们喜欢看电影', 'wǒmen xǐhuān kàn diànyǐng', 'women xihuan kan dianying', '我们喜欢看电影'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ele dorme às onze da noite.', answers: ['tā wǎnshang shíyī diǎn shuì jiào — 他晚上十一点睡觉', 'tā wǎnshang shíyī diǎn shuì jiào', 'ta wanshang shiyi dian shui jiao', '他晚上十一点睡觉'] },
          { prompt: 'Você gosta de ler?', answers: ['nǐ xǐhuān kàn shū ma — 你喜欢看书吗', 'nǐ xǐhuān kàn shū ma', 'ni xihuan kan shu ma', '你喜欢看书吗'] },
          { prompt: 'Ela escreve cartas para a família.', answers: ['tā gěi jiārén xiě xìn — 她给家人写信', 'tā gěi jiārén xiě xìn', 'ta gei jiaren xie xin', '她给家人写信'] },
          { prompt: 'Eu não gosto de acordar cedo.', answers: ['wǒ bù xǐhuān zǎo qǐchuáng — 我不喜欢早起床', 'wǒ bù xǐhuān zǎo qǐchuáng', 'wo bu xihuan zao qichuang', '我不喜欢早起床'] },
          { prompt: 'Eles vêm à minha casa amanhã.', answers: ['tāmen míngtiān lái wǒ jiā — 他们明天来我家', 'tāmen míngtiān lái wǒ jiā', 'tamen mingtian lai wo jia', '他们明天来我家'] },
        ],
      },
    ],
  },

  {
    id: 'bas-zh-2', language: 'zh', stage: 'Básico', order: 2,
    title: 'Localização — onde estão as coisas',
    subtitle: 'zài (在), yǒu (有) e palavras de lugar',
    theory: `## Localização com 在 (zài)

**在 (zài)** indica onde algo ou alguém está. A estrutura é **Sujeito + zài + Lugar**:
- "wǒ zài jiā" (我在家) → estou em casa
- "tā zài xuéxiào" (他在学校) → ele está na escola

### Quando usar zài

Use 在 quando o **sujeito já é conhecido** e você quer dizer onde ele está. É o equivalente mais próximo de "estar (localizado)" em português — mas note que 在 nunca se usa para descrever qualidades (isso é função de 很, visto no módulo de adjetivos).

## Existência com 有 (yǒu)

**有 (yǒu)** significa "ter" ou "há/existe". A estrutura inverte: **Lugar + yǒu + Sujeito (desconhecido/indefinido)**:
- "zhèlǐ yǒu yī gè yīyuàn" (这里有一个医院) → aqui há um hospital
- "wǒ yǒu liǎng gè gēgē" (我有两个哥哥) → eu tenho dois irmãos

### zài vs. yǒu — comparação com o português

| Situação | Estrutura mandarim | Exemplo |
|----------|---------------------|---------|
| "O livro está na mesa" (algo específico, sabido) | Sujeito + zài + Lugar | shū zài zhuōzi shàng |
| "Há um livro na mesa" (algo novo, indefinido) | Lugar + yǒu + Sujeito | zhuōzi shàng yǒu yī běn shū |

⚠️ Esse contraste não existe da mesma forma em português, onde "estar" e "haver" às vezes se confundem ("tem um livro" / "está um livro" coloquialmente). Em mandarim a escolha entre zài e yǒu depende estritamente de **o que é informação conhecida (zài) vs. nova (yǒu)** — inverter a ordem produz frases estranhas ou agramaticais.

## Negação de 有

Para negar 有, **não se usa 不**, e sim **没 (méi)**: "zhèlǐ méi yǒu rén" (aqui não há ninguém) — nunca "bù yǒu". Essa é uma excepção importante: 有 é o único verbo comum negado por 没 em vez de 不.

## Palavras de lugar

| Português | Pinyin | Caractere |
|-----------|--------|-----------|
| aqui | zhèlǐ | 这里 |
| ali / lá | nàlǐ | 那里 |
| em cima | shàngmiàn | 上面 |
| embaixo | xiàmiàn | 下面 |
| dentro | lǐmiàn | 里面 |
| fora | wàimiàn | 外面 |
| à esquerda | zuǒbiān | 左边 |
| à direita | yòubiān | 右边 |
| em frente | qiánmiàn | 前面 |
| atrás | hòumiàn | 后面 |
| perto | fùjìn | 附近 |

## Mais exemplos

| Mandarim | Pinyin | Português |
|----------|--------|-----------|
| 我家附近有一个公园。 | Wǒ jiā fùjìn yǒu yī gè gōngyuán. | Há um parque perto da minha casa. |
| 钱包在我的包里面。 | Qiánbāo zài wǒ de bāo lǐmiàn. | A carteira está dentro da minha bolsa. |
| 银行在邮局和超市中间。 | Yínháng zài yóujú hé chāoshì zhōngjiān. | O banco fica entre o correio e o supermercado. |
| 这附近没有洗手间。 | Zhè fùjìn méi yǒu xǐshǒujiān. | Não há banheiro perto daqui. |

## Vocabulário-chave

• 公园 (gōngyuán) — parque
• 钱包 (qiánbāo) — carteira
• 银行 (yínháng) — banco
• 邮局 (yóujú) — correio
• 超市 (chāoshì) — supermercado
• 洗手间 (xǐshǒujiān) — banheiro
• 商店 (shāngdiàn) — loja`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu estou em casa.', answers: ['wǒ zài jiā — 我在家', 'wǒ zài jiā', 'wo zai jia', '我在家'] },
          { prompt: 'Ela está na escola.', answers: ['tā zài xuéxiào — 她在学校', 'tā zài xuéxiào', 'ta zai xuexiao', '她在学校'] },
          { prompt: 'O livro está em cima da mesa.', answers: ['shū zài zhuōzi shàngmiàn — 书在桌子上面', 'shū zài zhuōzi shàngmiàn', 'shu zai zhuozi shangmian', '书在桌子上面'] },
          { prompt: 'O gato está embaixo da cama.', answers: ['māo zài chuáng xiàmiàn — 猫在床下面', 'māo zài chuáng xiàmiàn', 'mao zai chuang xiamian', '猫在床下面'] },
          { prompt: 'Onde está o banheiro?', answers: ['xǐshǒujiān zài nǎlǐ — 洗手间在哪里', 'xǐshǒujiān zài nǎlǐ', 'xishoujian zai nali', '洗手间在哪里'] },
        ],
      },
      {
        sentences: [
          { prompt: 'O banheiro está à direita.', answers: ['xǐshǒujiān zài yòubiān — 洗手间在右边', 'xǐshǒujiān zài yòubiān', 'xishoujian zai youbian', '洗手间在右边'] },
          { prompt: 'Há um supermercado perto daqui.', answers: ['zhèlǐ fùjìn yǒu yī gè chāoshì — 这里附近有一个超市', 'zhèlǐ fùjìn yǒu yī gè chāoshì', 'zheli fujin you yi ge chaoshi', '这里附近有一个超市'] },
          { prompt: 'Onde você está?', answers: ['nǐ zài nǎlǐ — 你在哪里', 'nǐ zài nǎlǐ', 'ni zai nali', '你在哪里'] },
          { prompt: 'Estou na frente do hotel.', answers: ['wǒ zài jiǔdiàn qiánmiàn — 我在酒店前面', 'wǒ zài jiǔdiàn qiánmiàn', 'wo zai jiudian qianmian', '我在酒店前面'] },
          { prompt: 'Não há ninguém aqui.', answers: ['zhèlǐ méi yǒu rén — 这里没有人', 'zhèlǐ méi yǒu rén', 'zheli mei you ren', '这里没有人'] },
        ],
      },
      {
        sentences: [
          { prompt: 'O restaurante fica atrás do banco.', answers: ['cānguǎn zài yínháng hòumiàn — 餐馆在银行后面', 'cānguǎn zài yínháng hòumiàn', 'canguan zai yinhang houmian', '餐馆在银行后面'] },
          { prompt: 'Meu celular está dentro da bolsa.', answers: ['wǒ de shǒujī zài bāo lǐmiàn — 我的手机在包里面', 'wǒ de shǒujī zài bāo lǐmiàn', 'wo de shouji zai bao limian', '我的手机在包里面'] },
          { prompt: 'Há muitas lojas nesta rua.', answers: ['zhè tiáo jiē yǒu hěn duō shāngdiàn — 这条街有很多商店', 'zhè tiáo jiē yǒu hěn duō shāngdiàn', 'zhe tiao jie you hen duo shangdian', '这条街有很多商店'] },
          { prompt: 'A estação de metrô fica ali.', answers: ['dìtiě zhàn zài nàlǐ — 地铁站在那里', 'dìtiě zhàn zài nàlǐ', 'ditie zhan zai nali', '地铁站在那里'] },
          { prompt: 'Tem alguém lá fora.', answers: ['wàimiàn yǒu rén — 外面有人', 'wàimiàn yǒu rén', 'waimian you ren', '外面有人'] },
        ],
      },
    ],
  },

  {
    id: 'bas-zh-3', language: 'zh', stage: 'Básico', order: 3,
    title: 'Tempo e datas',
    subtitle: 'Dias da semana, meses e expressões de tempo',
    theory: `## Tempo — expressões básicas

| Português | Pinyin | Caractere |
|-----------|--------|-----------|
| hoje | jīntiān | 今天 |
| ontem | zuótiān | 昨天 |
| amanhã | míngtiān | 明天 |
| esta semana | zhège xīngqī | 这个星期 |
| semana passada | shàng xīngqī | 上星期 |
| próxima semana | xià xīngqī | 下星期 |
| este ano | jīnnián | 今年 |
| ano passado | qùnián | 去年 |
| agora | xiànzài | 现在 |
| cedo | zǎo | 早 |
| tarde | wǎn | 晚 |

## Dias da semana

| Dia | Pinyin | Caractere |
|-----|--------|-----------|
| segunda | xīngqīyī | 星期一 |
| terça | xīngqīèr | 星期二 |
| quarta | xīngqīsān | 星期三 |
| quinta | xīngqīsì | 星期四 |
| sexta | xīngqīwǔ | 星期五 |
| sábado | xīngqīliù | 星期六 |
| domingo | xīngqītiān | 星期天 |

## Que horas são?
"xiànzài jǐ diǎn?" (现在几点？) → Que horas são agora?
"xiànzài liǎng diǎn bàn" (现在两点半) → Agora são duas e meia

💡 Para "2 horas", use **两点 (liǎng diǎn)**, não **二点** — a mesma regra de liǎng vs. èr antes de unidades, vista no módulo de números.

### Posição das palavras de tempo na frase

Diferente do português, onde o tempo costuma ficar no fim da frase ("Eu vou ao mercado amanhã"), em mandarim a palavra de tempo vem **logo depois do sujeito e antes do verbo**:

- "wǒ míngtiān qù shìchǎng" (我明天去市场) — eu vou ao mercado amanhã (lit. "eu amanhã vou mercado")
- "tā zuótiān méi lái" (他昨天没来) — ele não veio ontem

⚠️ Não traduza palavra por palavra colocando o tempo no final como em português — isso resulta numa ordem estranha ou incorreta em mandarim. A estrutura correta é **Sujeito + Tempo + Verbo (+ Objeto)**.

### Datas: do maior para o menor

Ao contrário do português ("28 de junho de 2026"), o mandarim organiza datas do **maior para o menor**: ano → mês → dia → hora.
- 2026年6月28号 (èr líng èr liù nián liù yuè èrshíbā hào) — 28 de junho de 2026

## Mais exemplos

| Mandarim | Pinyin | Português |
|----------|--------|-----------|
| 我下个月去北京。 | Wǒ xià gè yuè qù Běijīng. | Eu vou a Pequim no mês que vem. |
| 他们昨天晚上看了电影。 | Tāmen zuótiān wǎnshang kàn le diànyǐng. | Eles viram um filme ontem à noite. |
| 现在是上午十点十分。 | Xiànzài shì shàngwǔ shí diǎn shí fēn. | Agora são dez e dez da manhã. |
| 我们星期六有空。 | Wǒmen xīngqīliù yǒu kòng. | Estamos livres no sábado. |

## Vocabulário-chave

• 会议 (huìyì) — reunião
• 课 (kè) — aula
• 忙 (máng) — ocupado
• 休息 (xiūxi) — descansar
• 周末 (zhōumò) — fim de semana
• 号 (hào) — dia (do mês)`,
    exercises: [
      {
        sentences: [
          { prompt: 'Hoje é segunda-feira.', answers: ['jīntiān shì xīngqīyī — 今天是星期一', 'jīntiān shì xīngqīyī', 'jintian shi xingqiyi', '今天是星期一'] },
          { prompt: 'Amanhã é sábado.', answers: ['míngtiān shì xīngqīliù — 明天是星期六', 'míngtiān shì xīngqīliù', 'mingtian shi xingqiliu', '明天是星期六'] },
          { prompt: 'Que horas são agora?', answers: ['xiànzài jǐ diǎn — 现在几点', 'xiànzài jǐ diǎn', 'xianzai ji dian', '现在几点'] },
          { prompt: 'Agora são três horas.', answers: ['xiànzài sān diǎn — 现在三点', 'xiànzài sān diǎn', 'xianzai san dian', '现在三点'] },
          { prompt: 'Ontem fui ao supermercado.', answers: ['zuótiān wǒ qù chāoshì le — 昨天我去超市了', 'zuótiān wǒ qù chāoshì le', 'zuotian wo qu chaoshi le', '昨天我去超市了'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Amanhã tenho aula.', answers: ['míngtiān wǒ yǒu kè — 明天我有课', 'míngtiān wǒ yǒu kè', 'mingtian wo you ke', '明天我有课'] },
          { prompt: 'Na sexta à noite saio com os amigos.', answers: ['xīngqīwǔ wǎnshang wǒ hé péngyǒu chūqù — 星期五晚上我和朋友出去', 'xīngqīwǔ wǎnshang wǒ hé péngyǒu chūqù', 'xingqiwu wanshang wo he pengyou chuqu', '星期五晚上我和朋友出去'] },
          { prompt: 'Esta semana estou muito ocupado.', answers: ['zhège xīngqī wǒ hěn máng — 这个星期我很忙', 'zhège xīngqī wǒ hěn máng', 'zhege xingqi wo hen mang', '这个星期我很忙'] },
          { prompt: 'No ano passado morei em Xangai.', answers: ['qùnián wǒ zhù zài Shànghǎi — 去年我住在上海', 'qùnián wǒ zhù zài Shànghǎi', 'qunian wo zhu zai Shanghai', '去年我住在上海'] },
          { prompt: 'Que dia é hoje?', answers: ['jīntiān jǐ hào — 今天几号', 'jīntiān jǐ hào', 'jintian ji hao', '今天几号'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Hoje é vinte e oito de junho.', answers: ['jīntiān shì liù yuè èrshíbā hào — 今天是六月二十八号', 'jīntiān shì liù yuè èrshíbā hào', 'jintian shi liu yue ershiba hao', '今天是六月二十八号'] },
          { prompt: 'A reunião é na quinta às dez.', answers: ['huìyì shì xīngqīsì shí diǎn — 会议是星期四十点', 'huìyì shì xīngqīsì shí diǎn', 'huiyi shi xingqisi shi dian', '会议是星期四十点'] },
          { prompt: 'Eu acordo cedo toda manhã.', answers: ['wǒ měitiān zǎoshang zǎo qǐchuáng — 我每天早上早起床', 'wǒ měitiān zǎoshang zǎo qǐchuáng', 'wo meitian zaoshang zao qichuang', '我每天早上早起床'] },
          { prompt: 'Ele chega tarde todo dia.', answers: ['tā měitiān dōu lái wǎn — 他每天都来晚', 'tā měitiān dōu lái wǎn', 'ta meitian dou lai wan', '他每天都来晚'] },
          { prompt: 'Nos fins de semana eu descanso.', answers: ['zhōumò wǒ xiūxi — 周末我休息', 'zhōumò wǒ xiūxi', 'zhoumo wo xiuxi', '周末我休息'] },
        ],
      },
    ],
  },

  {
    id: 'bas-zh-4', language: 'zh', stage: 'Básico', order: 4,
    title: 'Preferências e gostos',
    subtitle: 'xǐhuān, juéde, xiǎng e expressões de opinião',
    theory: `## Expressar gostos e preferências

| Expressão | Pinyin | Significado |
|-----------|--------|-------------|
| gostar | xǐhuān | 喜欢 |
| não gostar | bù xǐhuān | 不喜欢 |
| adorar | fēicháng xǐhuān | 非常喜欢 |
| preferir | gèng xǐhuān | 更喜欢 |
| achar / sentir | juéde | 觉得 |
| querer / desejar | xiǎng | 想 |
| precisar | xūyào | 需要 |

## Estruturas úteis

| Estrutura | Exemplo |
|-----------|---------|
| A + xǐhuān + B | wǒ xǐhuān chī miàn (gosto de comer macarrão) |
| A + juéde + B + adj | wǒ juéde zhège hǎo (acho isso bom) |
| A + xiǎng + verbo | tā xiǎng qù Zhōngguó (ele quer ir à China) |
| A + bǐ + B + adj | píngguǒ bǐ xiāngjiāo guì (maçã é mais cara que banana) |

## Perguntar preferências
- "nǐ xǐhuān shénme?" (你喜欢什么？) → O que você gosta?
- "nǐ xiǎng chī shénme?" (你想吃什么？) → O que você quer comer?

### 喜欢 vs. 想 vs. 觉得 — qual usar?

| Verbo | Uso | Exemplo |
|-------|-----|---------|
| 喜欢 (xǐhuān) | gostar de algo/alguém, de forma duradoura | wǒ xǐhuān yīnyuè (gosto de música) |
| 想 (xiǎng) | desejo/intenção pontual, "querer fazer algo agora/em breve" | wǒ xiǎng hē shuǐ (quero beber água) |
| 觉得 (juéde) | opinião, percepção, achar que | wǒ juéde zhège hǎo (acho isso bom) |

⚠️ Não confunda 想 (xiǎng, "querer/pretender") com 要 (yào, "querer/precisar", visto em módulos anteriores) — 想 é mais suave e expressa desejo, enquanto 要 pode soar mais direto, como uma decisão ou pedido.

## Comparações com 比 (bǐ)

A estrutura **A + 比 (bǐ) + B + adjetivo** expressa comparação, sem precisar de palavra para "mais" — o próprio 比 já indica a comparação:
- "píngguǒ bǐ xiāngjiāo guì" (苹果比香蕉贵) — a maçã é mais cara que a banana (lit. "maçã comparada-a banana cara")

⚠️ Não tente traduzir "mais...que" inserindo uma palavra equivalente a "mais" antes do adjetivo — em mandarim o adjetivo fica sozinho depois do 比, sem nenhum marcador extra.

## Mais exemplos

| Mandarim | Pinyin | Português |
|----------|--------|-----------|
| 我觉得这家餐厅很好吃。 | Wǒ juéde zhè jiā cāntīng hěn hǎochī. | Acho que este restaurante é muito gostoso. |
| 她比我更喜欢运动。 | Tā bǐ wǒ gèng xǐhuān yùndòng. | Ela gosta de esportes mais do que eu. |
| 你想不想去看电影？ | Nǐ xiǎng bù xiǎng qù kàn diànyǐng? | Você quer ir ver um filme ou não? |
| 我需要更多时间。 | Wǒ xūyào gèng duō shíjiān. | Eu preciso de mais tempo. |

## Vocabulário-chave

• 音乐 (yīnyuè) — música
• 运动 (yùndòng) — esporte/exercício
• 跑步 (pǎobù) — correr
• 旅行 (lǚxíng) — viajar
• 餐厅 (cāntīng) — restaurante
• 时间 (shíjiān) — tempo`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu gosto de música.', answers: ['wǒ xǐhuān yīnyuè — 我喜欢音乐', 'wǒ xǐhuān yīnyuè', 'wo xihuan yinyue', '我喜欢音乐'] },
          { prompt: 'Ela não gosta de acorda cedo.', answers: ['tā bù xǐhuān zǎo qǐchuáng — 她不喜欢早起床', 'tā bù xǐhuān zǎo qǐchuáng', 'ta bu xihuan zao qichuang', '她不喜欢早起床'] },
          { prompt: 'Eu adoro comida chinesa.', answers: ['wǒ fēicháng xǐhuān zhōngguó cài — 我非常喜欢中国菜', 'wǒ fēicháng xǐhuān zhōngguó cài', 'wo feichang xihuan zhongguo cai', '我非常喜欢中国菜'] },
          { prompt: 'O que você quer comer?', answers: ['nǐ xiǎng chī shénme — 你想吃什么', 'nǐ xiǎng chī shénme', 'ni xiang chi shenme', '你想吃什么'] },
          { prompt: 'Eu quero ir à China.', answers: ['wǒ xiǎng qù Zhōngguó — 我想去中国', 'wǒ xiǎng qù Zhōngguó', 'wo xiang qu Zhongguo', '我想去中国'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Acho que este filme é muito bom.', answers: ['wǒ juéde zhège diànyǐng hěn hǎo — 我觉得这个电影很好', 'wǒ juéde zhège diànyǐng hěn hǎo', 'wo juede zhege dianying hen hao', '我觉得这个电影很好'] },
          { prompt: 'Você prefere chá ou café?', answers: ['nǐ gèng xǐhuān chá háishi kāfēi — 你更喜欢茶还是咖啡', 'nǐ gèng xǐhuān chá háishi kāfēi', 'ni geng xihuan cha haishi kafei', '你更喜欢茶还是咖啡'] },
          { prompt: 'Eu prefiro chá.', answers: ['wǒ gèng xǐhuān chá — 我更喜欢茶', 'wǒ gèng xǐhuān chá', 'wo geng xihuan cha', '我更喜欢茶'] },
          { prompt: 'Ele quer aprender a cozinhar.', answers: ['tā xiǎng xué zuò cài — 他想学做菜', 'tā xiǎng xué zuò cài', 'ta xiang xue zuo cai', '他想学做菜'] },
          { prompt: 'Eu não preciso de ajuda, obrigado.', answers: ['wǒ bù xūyào bāngzhù, xièxiè — 我不需要帮助，谢谢', 'wǒ bù xūyào bāngzhù, xièxiè', 'wo bu xuyao bangzhu, xie xie', '我不需要帮助，谢谢'] },
        ],
      },
      {
        sentences: [
          { prompt: 'O que você gosta de fazer no fim de semana?', answers: ['nǐ zhōumò xǐhuān zuò shénme — 你周末喜欢做什么', 'nǐ zhōumò xǐhuān zuò shénme', 'ni zhoumo xihuan zuo shenme', '你周末喜欢做什么'] },
          { prompt: 'Gosto de correr e ouvir música.', answers: ['wǒ xǐhuān pǎobù hé tīng yīnyuè — 我喜欢跑步和听音乐', 'wǒ xǐhuān pǎobù hé tīng yīnyuè', 'wo xihuan paobu he ting yinyue', '我喜欢跑步和听音乐'] },
          { prompt: 'Ela acha que o mandarim é difícil.', answers: ['tā juéde pǔtōnghuà hěn nán — 她觉得普通话很难', 'tā juéde pǔtōnghuà hěn nán', 'ta juede putonghua hen nan', '她觉得普通话很难'] },
          { prompt: 'Eu prefiro morar numa cidade grande.', answers: ['wǒ gèng xǐhuān zhù zài dà chéngshì — 我更喜欢住在大城市', 'wǒ gèng xǐhuān zhù zài dà chéngshì', 'wo geng xihuan zhu zai da chengshi', '我更喜欢住在大城市'] },
          { prompt: 'Eles adoram viajar.', answers: ['tāmen fēicháng xǐhuān lǚxíng — 他们非常喜欢旅行', 'tāmen fēicháng xǐhuān lǚxíng', 'tamen feichang xihuan lüxing', '他们非常喜欢旅行'] },
        ],
      },
    ],
  },

  {
    id: 'bas-zh-5', language: 'zh', stage: 'Básico', order: 5,
    title: 'Compras e transporte',
    subtitle: 'Pedir preços, pagar e se deslocar pela cidade',
    theory: `## Vocabulário de compras

| Português | Pinyin | Caractere |
|-----------|--------|-----------|
| quanto custa? | duōshǎo qián? | 多少钱？ |
| caro / barato | guì / piányí | 贵 / 便宜 |
| quero comprar | wǒ yào mǎi | 我要买 |
| dar troco | zhǎo qián | 找钱 |
| pagar | fù qián | 付钱 |
| cartão | xìnyòngkǎ | 信用卡 |
| dinheiro | xiànjīn | 现金 |

## Meios de transporte

| Português | Pinyin | Caractere |
|-----------|--------|-----------|
| ônibus | gōngjiāochē | 公交车 |
| metrô | dìtiě | 地铁 |
| táxi | chūzūchē | 出租车 |
| trem | huǒchē | 火车 |
| avião | fēijī | 飞机 |
| a pé | zǒulù | 走路 |
| de bicicleta | qí zìxíngchē | 骑自行车 |

## Perguntar direções
- "qǐng wèn, … zěnme zǒu?" (请问，……怎么走？) → Com licença, como se vai a …?
- "wǎng zuǒ/yòu zhuǎn" (往左/右转) → vire à esquerda/direita
- "yīzhí zǒu" (一直走) → siga em frente

## Verbos de transporte: 坐 (zuò) e 骑 (qí)

Para dizer que você vai de algum meio de transporte, mandarim usa verbos específicos antes do meio de transporte, e não uma preposição como "de" em português:
- **坐 (zuò)** — usado para transportes em que você se senta (carro, ônibus, metrô, trem, avião): "zuò dìtiě" (sentar-se no metrô = ir de metrô)
- **骑 (qí)** — usado para veículos que se "monta" (bicicleta, moto, cavalo): "qí zìxíngchē" (andar de bicicleta)

A estrutura completa de "ir a algum lugar de algum transporte" é: **Sujeito + zuò/qí + Transporte + qù + Lugar**:
- "wǒ zuò dìtiě qù gōngzuò" (我坐地铁去工作) — eu vou ao trabalho de metrô

⚠️ Não traduza "de metrô" usando uma preposição equivalente a "de" — em mandarim o verbo 坐 (ou 骑) já incorpora essa ideia; dizer algo como "yòng dìtiě" soa estranho neste contexto.

## Mais exemplos

| Mandarim | Pinyin | Português |
|----------|--------|-----------|
| 这附近有出租车站吗？ | Zhè fùjìn yǒu chūzūchē zhàn ma? | Há um ponto de táxi perto daqui? |
| 火车票多少钱一张？ | Huǒchē piào duōshǎo qián yī zhāng? | Quanto custa uma passagem de trem? |
| 从这里到机场要多久？ | Cóng zhèlǐ dào jīchǎng yào duō jiǔ? | Quanto tempo leva daqui até o aeroporto? |
| 请帮我叫一辆出租车。 | Qǐng bāng wǒ jiào yī liàng chūzūchē. | Por favor, me ajude a chamar um táxi. |

## Vocabulário-chave

• 衬衫 (chènshān) — camisa
• 机场 (jīchǎng) — aeroporto
• 火车站 (huǒchē zhàn) — estação de trem
• 市场 (shìchǎng) — mercado
• 出发 (chūfā) — partir`,
    exercises: [
      {
        sentences: [
          { prompt: 'Quanto custa esta camisa?', answers: ['zhè jiàn chènshān duōshǎo qián — 这件衬衫多少钱', 'zhè jiàn chènshān duōshǎo qián', 'zhe jian chenshan duoshao qian', '这件衬衫多少钱'] },
          { prompt: 'Está muito caro. Tem mais barato?', answers: ['tài guì le. yǒu piányí yīdiǎn de ma — 太贵了。有便宜一点的吗', 'tài guì le. yǒu piányí yīdiǎn de ma', 'tai gui le. you pianyi yidian de ma', '太贵了。有便宜一点的吗'] },
          { prompt: 'Eu quero comprar duas.', answers: ['wǒ yào mǎi liǎng gè — 我要买两个', 'wǒ yào mǎi liǎng gè', 'wo yao mai liang ge', '我要买两个'] },
          { prompt: 'Posso pagar com cartão?', answers: ['wǒ kěyǐ yòng xìnyòngkǎ ma — 我可以用信用卡吗', 'wǒ kěyǐ yòng xìnyòngkǎ ma', 'wo keyi yong xinyongka ma', '我可以用信用卡吗'] },
          { prompt: 'Aqui está o dinheiro.', answers: ['zhè shì qián — 这是钱', 'zhè shì qián', 'zhe shi qian', '这是钱'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu vou ao trabalho de metrô.', answers: ['wǒ zuò dìtiě qù gōngzuò — 我坐地铁去工作', 'wǒ zuò dìtiě qù gōngzuò', 'wo zuo ditie qu gongzuo', '我坐地铁去工作'] },
          { prompt: 'Quanto tempo leva de táxi?', answers: ['zuò chūzūchē yào duō cháng shíjiān — 坐出租车要多长时间', 'zuò chūzūchē yào duō cháng shíjiān', 'zuo chuzuche yao duo chang shijian', '坐出租车要多长时间'] },
          { prompt: 'O ônibus vai ao aeroporto?', answers: ['gōngjiāochē qù jīchǎng ma — 公交车去机场吗', 'gōngjiāochē qù jīchǎng ma', 'gongjiaoche qu jichang ma', '公交车去机场吗'] },
          { prompt: 'Como chego à estação de trem?', answers: ['qù huǒchē zhàn zěnme zǒu — 去火车站怎么走', 'qù huǒchē zhàn zěnme zǒu', 'qu huoche zhan zenme zou', '去火车站怎么走'] },
          { prompt: 'Siga em frente e vire à esquerda.', answers: ['yīzhí zǒu, rán hòu wǎng zuǒ zhuǎn — 一直走，然后往左转', 'yīzhí zǒu, rán hòu wǎng zuǒ zhuǎn', 'yizhi zou, ranhou wang zuo zhuan', '一直走，然后往左转'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu prefiro ir a pé.', answers: ['wǒ gèng xǐhuān zǒulù qù — 我更喜欢走路去', 'wǒ gèng xǐhuān zǒulù qù', 'wo geng xihuan zoulu qu', '我更喜欢走路去'] },
          { prompt: 'O metrô é mais rápido que o ônibus.', answers: ['dìtiě bǐ gōngjiāochē kuài — 地铁比公交车快', 'dìtiě bǐ gōngjiāochē kuài', 'ditie bi gongjiaoche kuai', '地铁比公交车快'] },
          { prompt: 'Onde fica a parada de ônibus?', answers: ['gōngjiāochē zhàn zài nǎlǐ — 公交车站在哪里', 'gōngjiāochē zhàn zài nǎlǐ', 'gongjiaoche zhan zai nali', '公交车站在哪里'] },
          { prompt: 'Vou ao mercado de bicicleta.', answers: ['wǒ qí zìxíngchē qù shìchǎng — 我骑自行车去市场', 'wǒ qí zìxíngchē qù shìchǎng', 'wo qi zixingche qu shichang', '我骑自行车去市场'] },
          { prompt: 'O avião parte às oito da manhã.', answers: ['fēijī zǎoshang bā diǎn chūfā — 飞机早上八点出发', 'fēijī zǎoshang bā diǎn chūfā', 'feiji zaoshang ba dian chufa', '飞机早上八点出发'] },
        ],
      },
    ],
  },

  {
    id: 'rev-bas-zh', language: 'zh', stage: 'Básico', order: 99, isReview: true,
    title: 'Revisão — Básico',
    subtitle: 'Ações, localização, tempo, gostos e compras',
    theory: null,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu gosto de comer macarrão.', answers: ['wǒ xǐhuān chī miàn — 我喜欢吃面', 'wǒ xǐhuān chī miàn', 'wo xihuan chi mian', '我喜欢吃面'] },
          { prompt: 'O banco fica à esquerda do supermercado.', answers: ['yínháng zài chāoshì zuǒbiān — 银行在超市左边', 'yínháng zài chāoshì zuǒbiān', 'yinhang zai chaoshi zuobian', '银行在超市左边'] },
          { prompt: 'Hoje é quarta-feira.', answers: ['jīntiān shì xīngqīsān — 今天是星期三', 'jīntiān shì xīngqīsān', 'jintian shi xingqisan', '今天是星期三'] },
          { prompt: 'Quanto custa esse livro?', answers: ['zhè běn shū duōshǎo qián — 这本书多少钱', 'zhè běn shū duōshǎo qián', 'zhe ben shu duoshao qian', '这本书多少钱'] },
          { prompt: 'Eu vou de metrô.', answers: ['wǒ zuò dìtiě qù — 我坐地铁去', 'wǒ zuò dìtiě qù', 'wo zuo ditie qu', '我坐地铁去'] },
          { prompt: 'Ela está na escola agora.', answers: ['tā xiànzài zài xuéxiào — 她现在在学校', 'tā xiànzài zài xuéxiào', 'ta xianzai zai xuexiao', '她现在在学校'] },
          { prompt: 'Amanhã quero ir à China.', answers: ['míngtiān wǒ xiǎng qù Zhōngguó — 明天我想去中国', 'míngtiān wǒ xiǎng qù Zhōngguó', 'mingtian wo xiang qu Zhongguo', '明天我想去中国'] },
          { prompt: 'Siga em frente e depois vire à direita.', answers: ['yīzhí zǒu, rán hòu wǎng yòu zhuǎn — 一直走，然后往右转', 'yīzhí zǒu, rán hòu wǎng yòu zhuǎn', 'yizhi zou, ranhou wang you zhuan', '一直走，然后往右转'] },
        ],
      },
    ],
    dialogExercise: {
      audioText: 'qǐngwèn, chāoshì zài nǎlǐ? wǒ xiǎng mǎi shuǐguǒ hé miànbāo.',
      question: 'O que a pessoa quer fazer no supermercado?',
      options: [
        { text: 'Comprar frutas e pão.', correct: true },
        { text: 'Comprar frutas e macarrão.', correct: false },
        { text: 'Perguntar onde fica a padaria.', correct: false },
        { text: 'Comprar pão e carne.', correct: false },
      ],
    },
  },
];
