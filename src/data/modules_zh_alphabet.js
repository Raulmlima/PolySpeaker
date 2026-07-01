// Módulos de introdução ao sistema de escrita do Mandarim para falantes de PT-BR
// Stage: 'Alfabeto' — aparece antes de Fundamentos

export const MODULES_ZH_ALPHABET = [
  {
    id: 'alpha-zh-1',
    language: 'zh',
    stage: 'Alfabeto',
    order: 1,
    title: 'O que é Pinyin?',
    subtitle: 'O sistema de romanização do Mandarim',
    theory: `## Pinyin — como ler e escrever o Mandarim

O **Pinyin** é o sistema oficial de romanização do Mandarim. Usa letras do alfabeto latino para representar os sons do chinês. No PolySpeaker, você digita em Pinyin — sem precisar de teclado chinês.

### Os 4 tons do Mandarim

O Mandarim tem **4 tons + 1 tom neutro**. A mesma sílaba com tons diferentes tem significados completamente diferentes!

| Tom | Símbolo | Descrição | Exemplo |
|-----|---------|-----------|---------|
| 1º | ā | Alto e constante | mā (mãe) |
| 2º | á | Sobe (como pergunta) | má (cânhamo) |
| 3º | ǎ | Desce e sobe | mǎ (cavalo) |
| 4º | à | Desce rápido | mà (xingar) |
| Neutro | a | Curto e leve | ma (partícula de pergunta) |

### Dica prática
Você pode digitar **sem os tons** (ni hao em vez de nǐ hǎo) — o app aceita as duas formas. Mas tente se acostumar com os tons, pois eles são essenciais na comunicação real!

### Vogais com tons
ā á ǎ à / ē é ě è / ī í ǐ ì / ō ó ǒ ò / ū ú ǔ ù / ǖ ǘ ǚ ǜ

### Mais pares mínimos (mesma sílaba, tons diferentes)
O tom muda completamente o significado da palavra — não é "sotaque", é gramática!

| Sílaba | 1º tom | 2º tom | 3º tom | 4º tom |
|--------|--------|--------|--------|--------|
| ma | mā (mãe) | má (cânhamo) | mǎ (cavalo) | mà (xingar) |
| tang | tāng (sopa) | táng (açúcar) | tǎng (deitar) | tàng (escaldante) |
| mai | mài (vender, 4º) | mái (enterrar, 2º) | — | mài (vender) |
| wen | wén (ouvir/cheirar, 2º) | wěn (beijo, 3º) | wèn (perguntar, 4º) | — |
| qi | qī (sete) | qí (montar) | qǐ (levantar) | qì (gás / bravo) |

### Sandhi tonal — quando os tons "mudam" na fala

⚠️ Erro comum: achar que a marca de tom é só um "acento decorativo" do alfabeto, como em português. Ignorar os tons (ou tratá-los como opcionais) muda o significado da frase e pode gerar confusão real para quem ouve!

#### Regra do 3º + 3º tom
Quando **duas sílabas de 3º tom** aparecem em sequência, a primeira é pronunciada como **2º tom**. O exemplo mais famoso:
- 你好 (nǐ hǎo) é **pronunciado** "ní hǎo" — mas continua **escrito** nǐ hǎo no Pinyin.
- 很好 (hěn hǎo, "muito bom") é pronunciado "hén hǎo".

💡 Isso é só na pronúncia — a escrita do Pinyin não muda. O app aceita a forma escrita normal (com 3º tom).

#### O camaleão 不 (bù)
不 (bù, "não") normalmente é 4º tom, mas **antes de outra sílaba de 4º tom**, vira 2º tom:
- 不是 (bù shì) → pronunciado "bú shì" (não é)
- 不对 (bù duì) → pronunciado "bú duì" (não está certo)

#### O camaleão 一 (yī)
一 (yī, "um") muda de tom dependendo do que vem depois:
- Antes de 1º, 2º ou 3º tom → vira **4º tom**: 一天 (yì tiān, "um dia")
- Antes de 4º tom ou tom neutro → vira **2º tom**: 一定 (yídìng, "certamente")
- Quando conta número isolado (ex: contagem, data, número de telefone) mantém yī.`,
    exercises: [
      {
        sentences: [
          { prompt: 'Como se escreve "olá" em Pinyin?', answers: ['nǐ hǎo — 你好', 'nǐ hǎo', 'ni hao', '你好'] },
          { prompt: 'Como se escreve "obrigado" em Pinyin?', answers: ['xièxiè — 谢谢', 'xièxiè', 'xie xie', '谢谢'] },
          { prompt: 'Como se escreve "tchau" em Pinyin?', answers: ['zàijiàn — 再见', 'zàijiàn', 'zai jian', '再见'] },
          { prompt: 'Como se escreve "sim" em Pinyin?', answers: ['shì', 'shi', '是', 'duì', '对'] },
          { prompt: 'Como se escreve "não" em Pinyin?', answers: ['bù', 'bu', '不', 'bú shì', 'bu shi'] },
          { prompt: 'Como se escreve "eu" em Pinyin?', answers: ['wǒ — 我', 'wǒ', 'wo', '我'] },
          { prompt: 'Como se escreve "você" em Pinyin?', answers: ['nǐ — 你', 'nǐ', 'ni', '你'] },
          { prompt: 'Como se escreve "ele" ou "ela" em Pinyin?', answers: ['tā', 'ta', '他', '她'] },
          { prompt: 'Como se escreve "nós" em Pinyin?', answers: ['wǒmen — 我们', 'wǒmen', 'wo men', '我们'] },
          { prompt: 'Como se escreve "desculpe" em Pinyin?', answers: ['duìbuqǐ — 对不起', 'duìbuqǐ', 'dui bu qi', '对不起'] },
        ],
      },
    ],
  },

  {
    id: 'alpha-zh-2',
    language: 'zh',
    stage: 'Alfabeto',
    order: 2,
    title: 'Sons especiais do Pinyin',
    subtitle: 'X, Q, ZH, CH, SH, R — sons que não existem em português',
    theory: `## Sons do Pinyin que são diferentes do Português

Alguns sons do Mandarim não existem em Português. Preste atenção!

| Pinyin | Som aproximado | Exemplo |
|--------|---------------|---------|
| **x** | Como "ch" suave + "i" | xǐhuān (gostar) |
| **q** | Como "tchi" | qǐng (por favor) |
| **zh** | Como "dj" | zhōngguó (China) |
| **ch** | Como "tch" mais forte | chī (comer) |
| **sh** | Como "ch" inglês | shū (livro) |
| **r** | Sem equivalente — meio "j" (jean) | rén (pessoa) |
| **z** | Como "dz" | zài (estar em) |
| **c** | Como "ts" | cài (legume) |

### Encontros vocálicos especiais
| Pinyin | Pronúncia |
|--------|-----------|
| **ui** | pronuncia-se "uei" |
| **un** | pronuncia-se "uen" |
| **iu** | pronuncia-se "iou" |
| **an** | "an" nasal |
| **ang** | "ang" nasal |
| **ing** | "ing" nasal |

### Dica: ü (ü)
O "ü" é pronunciado como o "u" francês em "lune". Aparece em: lǖ (verde), nǚ (mulher). Em alguns contextos é escrito apenas "u" (após j, q, x, y).

## Retroflexas (zh, ch, sh, r) vs. Dentais (z, c, s)

Esta é a confusão **mais comum** para falantes de português! Os dois grupos parecem "iguais" no papel, mas a posição da língua é totalmente diferente.

- **zh, ch, sh, r (retroflexas):** a ponta da língua se curva **para trás**, tocando perto do céu da boca (palato), sem encostar nos dentes. É um som "mais grosso", parecido com o "j"/"r" do inglês americano em "jar"/"red".
- **z, c, s (dentais):** a ponta da língua fica **para frente**, quase tocando a parte de trás dos dentes superiores — sons "finos", parecidos com "ds", "ts" e "ss".

| Par | Retroflexa (língua p/ trás) | Dental (língua p/ frente) |
|-----|------------------------------|----------------------------|
| zh / z | zhī (saber, 知) | zī (recurso, 资) |
| ch / c | chá (chá, 茶) | cā (esfregar, 擦) |
| sh / s | shān (montanha, 山) | sān (três, 三) |

⚠️ Erro comum de falante de português: pronunciar o **r** do Pinyin como o "r" do português (tipo "carro" ou "rato"). O r do Mandarim (em rén, rì, ràng) não tem fricção na garganta — é mais parecido com um "j" suave em inglês ("measure"), com a língua enrolada para trás, sem vibrar.

💡 Treino rápido: diga "sān" (três) e "shān" (montanha) em sequência, sentindo a língua mudar de posição — isso ajuda a sentir fisicamente a diferença entre dental e retroflexa.

### Mais exemplos para praticar
| Pinyin | Caractere | Significado |
|--------|-----------|-------------|
| zhī dao | 知道 | saber |
| chī fàn | 吃饭 | comer (refeição) |
| shì jiè | 世界 | mundo |
| zázhì | 杂志 | revista |
| cōngmíng | 聪明 | inteligente |
| sìshí | 四十 | quarenta |`,
    exercises: [
      {
        sentences: [
          { prompt: 'Como se diz "comer" em Mandarim? (Pinyin)', answers: ['chī — 吃', 'chī', 'chi', '吃'] },
          { prompt: 'Como se diz "beber" em Mandarim? (Pinyin)', answers: ['hē — 喝', 'hē', 'he', '喝'] },
          { prompt: 'Como se diz "China" em Mandarim? (Pinyin)', answers: ['zhōngguó — 中国', 'zhōngguó', 'zhong guo', '中国'] },
          { prompt: 'Como se diz "pessoa" em Mandarim? (Pinyin)', answers: ['rén — 人', 'rén', 'ren', '人'] },
          { prompt: 'Como se diz "gostar" em Mandarim? (Pinyin)', answers: ['xǐhuān — 喜欢', 'xǐhuān', 'xi huan', '喜欢'] },
          { prompt: 'Como se diz "por favor" em Mandarim? (Pinyin)', answers: ['qǐng — 请', 'qǐng', 'qing', '请'] },
          { prompt: 'Como se diz "livro" em Mandarim? (Pinyin)', answers: ['shū — 书', 'shū', 'shu', '书'] },
          { prompt: 'Como se diz "estar em" em Mandarim? (Pinyin)', answers: ['zài — 在', 'zài', 'zai', '在'] },
          { prompt: 'Como se diz "mulher" em Mandarim? (Pinyin)', answers: ['nǚrén', 'nü ren', 'nu ren', '女人'] },
          { prompt: 'Como se diz "amigo" em Mandarim? (Pinyin)', answers: ['péngyǒu — 朋友', 'péngyǒu', 'peng you', '朋友'] },
        ],
      },
    ],
  },

  {
    id: 'alpha-zh-3',
    language: 'zh',
    stage: 'Alfabeto',
    order: 3,
    title: 'Os 25 caracteres mais usados',
    subtitle: 'Pronomes, verbos essenciais e partículas',
    theory: `## Caracteres Chineses (汉字 Hànzì)

Os **caracteres chineses** são o sistema de escrita real do Mandarim — não o Pinyin. O Pinyin existe só para ensinar pronúncia; na China, tudo é escrito em caracteres: mensagens, placas, livros, contratos.

### Como aprender os caracteres?
Aprenda primeiro os **mais frequentes**. Os 100 caracteres mais comuns cobrem cerca de 40% de qualquer texto em mandarim!

### Pronomes e verbos essenciais

| Caractere | Pinyin | Significado |
|-----------|--------|-------------|
| 我 | wǒ | eu |
| 你 | nǐ | você |
| 他 | tā | ele |
| 她 | tā | ela |
| 我们 | wǒmen | nós |
| 你们 | nǐmen | vocês |
| 是 | shì | ser (cópula) |
| 有 | yǒu | ter / haver |
| 不 | bù | não |
| 很 | hěn | muito |
| 好 | hǎo | bom / olá |
| 大 | dà | grande |
| 小 | xiǎo | pequeno |
| 在 | zài | estar em |
| 去 | qù | ir |
| 来 | lái | vir |
| 说 | shuō | falar / dizer |
| 吃 | chī | comer |
| 喝 | hē | beber |

### Partículas fundamentais

| Caractere | Pinyin | Função |
|-----------|--------|--------|
| 的 | de | possessivo (de, do, da) |
| 了 | le | ação completada |
| 吗 | ma | transforma em pergunta |

### Palavras interrogativas

| Caractere | Pinyin | Significado |
|-----------|--------|-------------|
| 什么 | shénme | o que |
| 哪里 | nǎlǐ | onde |
| 谁 | shéi | quem |
| 这 | zhè | este / esta |
| 那 | nà | aquele / aquela |

### Dica: Pinyin E caractere juntos
Ao estudar uma palavra, memorize sempre o par: **Pinyin + caractere**. Ex: 好 hǎo — bom. Com o tempo você vai reconhecer os caracteres de imediato!

## Composição dos caracteres: radicais e componentes

Caracteres chineses não são desenhos aleatórios — a maioria é formada por **componentes menores (radicais)** que se repetem e costumam dar uma pista do significado ou da categoria da palavra.

- 妈 (māma, mãe), 姐 (jiějie, irmã mais velha) e 她 (tā, ela) compartilham o radical **女 (nǚ, "mulher")** à esquerda — todos têm relação com o feminino.
- 你 (nǐ, você), 他 (tā, ele) e 们 (men, sufixo de plural) compartilham o radical **亻 (rén, "pessoa")**, uma versão simplificada de 人 — indicando que se referem a pessoas.
- 吃 (chī, comer) e 喝 (hē, beber) compartilham o radical **口 (kǒu, "boca")** à esquerda — ações feitas com a boca.

| Radical | Significado | Exemplos |
|---------|-------------|----------|
| 女 | mulher | 妈, 姐, 她, 好 |
| 亻(人) | pessoa | 你, 他, 们, 们 |
| 口 | boca | 吃, 喝, 叫 |
| 氵(水) | água | 河, 海, 法 |
| 木 | madeira/árvore | 林, 树, 本 |

💡 Reconhecer radicais ajuda a "adivinhar" o sentido geral de caracteres novos e a memorizar mais rápido — em vez de ver um desenho aleatório, você vê peças conhecidas se combinando.

### A importância da ordem dos traços (笔顺 bǐshùn)

⚠️ Não escreva os caracteres em qualquer ordem! A **ordem dos traços** segue regras fixas (geralmente de cima para baixo, da esquerda para a direita, horizontal antes de vertical). Isso importa porque:
- Escrever fora de ordem deixa o traçado "torto" e difícil de ler à mão.
- Dicionários e apps de reconhecimento de escrita esperam a ordem correta.
- A ordem correta ajuda a memorizar e reproduzir o caractere de forma consistente.

Não precisa decorar regras complexas agora — apenas preste atenção em como os caracteres aparecem traço por traço conforme você avança no curso.`,
    exercises: [
      {
        sentences: [
          { prompt: 'O que significa o caractere 我?', answers: ['eu', 'wǒ', 'wo'] },
          { prompt: 'O que significa o caractere 你?', answers: ['você', 'nǐ', 'ni'] },
          { prompt: 'Como se escreve "bom / olá" em caracteres chineses?', answers: ['好', 'hǎo', 'hao'] },
          { prompt: 'O que significa o caractere 不?', answers: ['não', 'bù', 'bu'] },
          { prompt: 'Como se escreve "ir" em caracteres chineses?', answers: ['去', 'qù', 'qu'] },
          { prompt: 'O que significa o caractere 在?', answers: ['estar em', 'em', 'zài', 'zai'] },
          { prompt: 'Como se escreve "comer" em caracteres chineses?', answers: ['吃', 'chī', 'chi'] },
          { prompt: 'O que significa o caractere 大?', answers: ['grande', 'dà', 'da'] },
          { prompt: 'O que significa 什么 (shénme)?', answers: ['o que', 'shénme', 'shenme'] },
          { prompt: 'Como se escreve "falar / dizer" em caracteres chineses?', answers: ['说', 'shuō', 'shuo'] },
        ],
      },
    ],
  },

  {
    id: 'alpha-zh-4',
    language: 'zh',
    stage: 'Alfabeto',
    order: 4,
    title: 'Números, cores e família em caracteres',
    subtitle: '一二三四五… + cores + parentesco',
    theory: `## Números, Cores e Família em Caracteres

### Números (数字 shùzì)

| Caractere | Pinyin | Número |
|-----------|--------|--------|
| 一 | yī | 1 |
| 二 | èr | 2 |
| 三 | sān | 3 |
| 四 | sì | 4 |
| 五 | wǔ | 5 |
| 六 | liù | 6 |
| 七 | qī | 7 |
| 八 | bā | 8 |
| 九 | jiǔ | 9 |
| 十 | shí | 10 |
| 百 | bǎi | 100 |
| 千 | qiān | 1.000 |
| 万 | wàn | 10.000 |

**Como formar números:**
- 11 = 十一 (shíyī)
- 21 = 二十一 (èrshíyī)
- 100 = 一百 (yībǎi)

### Cores (颜色 yánsè)

| Caractere | Pinyin | Cor |
|-----------|--------|-----|
| 红 | hóng | vermelho |
| 绿 | lǜ | verde |
| 蓝 | lán | azul |
| 黄 | huáng | amarelo |
| 白 | bái | branco |
| 黑 | hēi | preto |
| 橙 | chéng | laranja |
| 紫 | zǐ | roxo |

### Família (家人 jiārén)

| Caractere | Pinyin | Parentesco |
|-----------|--------|------------|
| 爸爸 | bàba | pai |
| 妈妈 | māma | mãe |
| 哥哥 | gēge | irmão mais velho |
| 姐姐 | jiějie | irmã mais velha |
| 弟弟 | dìdi | irmão mais novo |
| 妹妹 | mèimei | irmã mais nova |
| 儿子 | érzi | filho |
| 女儿 | nǚ'ér | filha |
| 祖父 | zǔfù | avô (paterno) |
| 祖母 | zǔmǔ | avó (paterna) |

## Palavras de medida (量词 liàngcí) — um detalhe essencial

⚠️ Em Mandarim você **não pode** simplesmente combinar número + substantivo como em português. É obrigatório usar uma **palavra de medida (classificador)** entre eles: número + classificador + substantivo. Esquecer o classificador é um dos erros mais comuns de falantes de português aprendendo chinês!

Por exemplo, não se diz "três livro" (三书) — diz-se **三本书** (sān běn shū, "três [classificador] livro").

| Classificador | Pinyin | Uso típico | Exemplo |
|---------------|--------|------------|---------|
| 个 | gè | genérico, pessoas, objetos diversos | 三个人 (sān gè rén — três pessoas) |
| 本 | běn | livros, cadernos, revistas | 两本书 (liǎng běn shū — dois livros) |
| 只 | zhī | animais pequenos, alguns objetos | 一只猫 (yì zhī māo — um gato) |

💡 Dica: 个 (gè) é o classificador "genérico" — se você não souber qual usar, 个 funciona na maioria das situações informais.

### Dica: o número 4 traz azar?
Em cultura chinesa, 四 (sì — quatro) soa parecido com 死 (sǐ — morte), por isso é considerado azar. Já 八 (bā — oito) soa como 发 (fā — prosperidade) e é o número da sorte! E 九 (jiǔ — nove) soa como 久 (jiǔ — "duradouro, eterno"), por isso é muito popular em casamentos e datas importantes, simbolizando uma relação duradoura.`,
    exercises: [
      {
        sentences: [
          { prompt: 'Escreva o número 3 em caracteres chineses.', answers: ['三', 'sān', 'san'] },
          { prompt: 'O que significa o caractere 一?', answers: ['um', 'uma', 'yī', 'yi'] },
          { prompt: 'Como se escreve "dez" em caracteres chineses?', answers: ['十', 'shí', 'shi'] },
          { prompt: 'O que significa 红 (hóng)?', answers: ['vermelho', 'vermelha'] },
          { prompt: 'Como se escreve "azul" em caracteres chineses?', answers: ['蓝', 'lán', 'lan'] },
          { prompt: 'O que significa 妈妈 (māma)?', answers: ['mãe', 'mamãe'] },
          { prompt: 'Como se escreve "pai" em caracteres chineses?', answers: ['爸爸', 'bàba', 'baba'] },
          { prompt: 'O que significa o caractere 百?', answers: ['cem', 'bǎi', 'bai'] },
          { prompt: 'O que significa 黑 (hēi)?', answers: ['preto', 'preta', 'negro', 'negra'] },
          { prompt: 'Como se escreve "irmão mais velho" em caracteres chineses?', answers: ['哥哥', 'gēge', 'ge ge', 'gege'] },
        ],
      },
    ],
  },
];
