export const MODULES_EN_PART2 = [

  // ═══════════════════════════════════════════════════════════════
  //  INTERMEDIÁRIO
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'int-en-1', stage: 'Intermediário', language: 'en', order: 1,
    title: 'Present Perfect',
    subtitle: 'have/has + particípio passado',
    theory: `O **present perfect** conecta o passado ao presente: algo aconteceu em um momento não especificado, mas tem relevância agora.

## Formação

**have/has + past participle**

| Sujeito | Forma afirmativa | Forma negativa |
|---|---|---|
| I / you / we / they | have worked → I've worked | haven't worked |
| he / she / it | has eaten → She's eaten | hasn't eaten |

Exemplos:
• "I have worked here for five years." (Eu trabalho aqui há cinco anos.)
• "They haven't arrived yet." (Eles ainda não chegaram.)
• "Has she finished the report?" (Ela já terminou o relatório?)

## Palavras-chave

• **already** (já) — afirmativa: "I've already finished." (Eu já terminei.)
• **yet** (ainda/já) — negativa/pergunta: "I haven't eaten yet." (Ainda não comi.) / "Have you called yet?" (Você já ligou?)
• **ever** (alguma vez) — perguntas: "Have you ever been to London?" (Você já esteve em Londres?)
• **never** (nunca) — "I've never tried sushi." (Nunca provei sushi.)
• **just** (acabei de) — "She's just left." (Ela acabou de saír.)
• **for / since** — duração: "I've lived here **for** ten years." (há dez anos, duração) / "I've lived here **since** 2014." (desde 2014, ponto de partida)

## Present perfect x Passado simples

| Present perfect | Passado simples |
|---|---|
| Tempo não especificado, foco no resultado | Tempo específico e encerrado |
| "I have visited Paris." | "I visited Paris in 2019." |
| "She has lost her keys." (ainda estão perdidas) | "She lost her keys yesterday." (fato pontual) |

⚠️ Nunca use o present perfect com expressões de tempo fechado e encerrado no passado: yesterday, last year, in 2010, two days ago. Nesses casos, use o passado simples: "I went to London last year." (NÃO "I have gone to London last year.")

⚠️ Falante de português tende a traduzir "eu trabalho aqui há 5 anos" pensando no presente simples — mas em inglês, quando a ação começou no passado e continua até agora, o correto é o present perfect: "I have worked here for five years." (NÃO "I work here for five years.")

💡 Pense no present perfect como uma ponte: uma ponta no passado, a outra no presente. Se a ação ainda afeta o "agora", use present perfect.

## Vocabulário-chave

• to finish — terminar
• to arrive — chegar
• to eat — comer
• homework — dever de casa
• to drive — dirigir
• to apologize — pedir desculpas
• to call — ligar
• to live — morar
• problem — problema
• meeting — reunião`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu já terminei meu dever de casa.', answers: ['I have already finished my homework.', "I've already finished my homework."] },
          { prompt: 'Ela nunca comeu sushi.', answers: ['She has never eaten sushi.', "She's never eaten sushi."] },
          { prompt: 'Você já esteve em Paris?', answers: ['Have you ever been to Paris?', 'Have you been to Paris?'] },
          { prompt: 'Eles ainda não chegaram.', answers: ["They haven't arrived yet.", 'They have not arrived yet.'] },
          { prompt: 'Ele acabou de ligar para mim.', answers: ['He has just called me.', "He's just called me.", 'He just called me.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Nós já comemos.', answers: ["We've already eaten.", 'We have already eaten.'] },
          { prompt: 'Você já assistiu a esse filme?', answers: ['Have you seen this movie yet?', 'Have you watched this movie yet?', 'Have you seen this film yet?', 'Have you watched this film yet?'] },
          { prompt: 'Eu nunca dirigi um carro.', answers: ["I've never driven a car.", 'I have never driven a car.'] },
          { prompt: 'Eles acabaram de chegar.', answers: ["They've just arrived.", 'They have just arrived.'] },
          { prompt: 'Ela já leu esse livro três vezes.', answers: ["She's read that book three times.", 'She has read that book three times.', "She's already read that book three times.", 'She has already read that book three times.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu já morei em quatro países.', answers: ["I've lived in four countries.", 'I have lived in four countries.', "I've already lived in four countries.", 'I have already lived in four countries.'] },
          { prompt: 'Ele nunca bebeu álcool.', answers: ["He's never drunk alcohol.", 'He has never drunk alcohol.'] },
          { prompt: 'Você já pediu desculpas a ela?', answers: ['Have you apologized to her yet?', 'Have you apologised to her yet?', 'Have you said sorry to her yet?'] },
          { prompt: 'Nós nunca tivemos problemas aqui.', answers: ["We've never had any problems here.", 'We have never had any problems here.'] },
          { prompt: 'Ela acabou de terminar a reunião.', answers: ["She's just finished the meeting.", 'She has just finished the meeting.'] },
        ],
      },
    ],
  },

  {
    id: 'int-en-2', stage: 'Intermediário', language: 'en', order: 2,
    title: 'Voz Passiva',
    subtitle: 'Todos os tempos principais',
    theory: `Na **voz passiva**, o foco está na ação ou no objeto que a recebe, não em quem a praticou.

## Formação

**to be** (no tempo correto) **+ past participle**

| Tempo | Exemplo | Tradução |
|---|---|---|
| Presente simples | The letter **is written**. | A carta é escrita. |
| Passado simples | The letter **was written**. | A carta foi escrita. |
| Futuro simples | The letter **will be written**. | A carta será escrita. |
| Present perfect | The letter **has been written**. | A carta foi/tem sido escrita. |
| Past perfect | The letter **had been written**. | A carta tinha sido escrita. |
| Present continuous | The letter **is being written**. | A carta está sendo escrita. |
| Modais | The letter **should be written**. | A carta deveria ser escrita. |

## Quando usar a voz passiva

• Quando o agente é desconhecido: "My phone was stolen." (Meu celular foi roubado — não sabemos quem roubou.)
• Quando o agente é óbvio ou irrelevante: "English is spoken here." (Fala-se inglês aqui.)
• Em textos formais, científicos e jornalísticos: "The results were analyzed carefully." (Os resultados foram analisados cuidadosamente.)
• Para enfatizar a ação/objeto em vez de quem fez: "The bridge was built in 1930." (A ponte foi construída em 1930.)

## Indicando o agente

Para indicar quem praticou a ação, use **by**:
• "The book was written by Tolkien." (O livro foi escrito por Tolkien.)
• "The cake was made by my grandmother." (O bolo foi feito pela minha avó.)
• "The decision was made by the board." (A decisão foi tomada pela diretoria.)

⚠️ Erro comum: usar "from" em vez de "by" para indicar o agente, por influência do português ("feito de/por"). O correto em inglês é sempre **by**: "This wine is made **by** a small winery." (NÃO "made from a small winery" — "made from" indica material/ingrediente: "Wine is made from grapes.")

⚠️ Não confunda o particípio passado com o gerúndio na voz passiva. "The window is broken" (passiva, estado resultante) é diferente de "The window is breaking" (ativa, ação em progresso, raro nesse contexto).

💡 Omita o agente quando ele for óbvio, desconhecido ou irrelevante — é o uso mais natural e comum da passiva no dia a dia. Só inclua "by + agente" quando essa informação for realmente nova ou importante.

## Vocabulário-chave

• to prepare — preparar
• to steal — roubar
• to send — enviar
• to clean — limpar
• to translate — traduzir
• to follow — seguir
• to build — construir
• to fix — consertar
• to cancel — cancelar
• to sign — assinar
• to deliver — entregar
• to promote — promover`,
    exercises: [
      {
        sentences: [
          { prompt: 'O jantar é preparado toda noite.', answers: ['Dinner is prepared every night.', 'Dinner is cooked every night.'] },
          { prompt: 'O carro foi roubado ontem.', answers: ['The car was stolen yesterday.'] },
          { prompt: 'O relatório será enviado amanhã.', answers: ['The report will be sent tomorrow.'] },
          { prompt: 'As janelas estão sendo limpas agora.', answers: ['The windows are being cleaned now.'] },
          { prompt: 'O e-mail foi escrito pelo gerente.', answers: ['The email was written by the manager.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Esse livro foi traduzido para cinquenta idiomas.', answers: ['This book has been translated into fifty languages.', 'This book was translated into fifty languages.'] },
          { prompt: 'As regras devem ser seguidas por todos.', answers: ['The rules must be followed by everyone.'] },
          { prompt: 'O hospital está sendo construído agora.', answers: ['The hospital is being built now.'] },
          { prompt: 'Meu celular foi consertado ontem.', answers: ['My phone was fixed yesterday.', 'My cell phone was fixed yesterday.'] },
          { prompt: 'Os ingressos podem ser comprados online.', answers: ['The tickets can be bought online.', 'Tickets can be bought online.', 'The tickets can be purchased online.', 'Tickets can be purchased online.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Esse produto é fabricado no Brasil.', answers: ['This product is made in Brazil.', 'This product is manufactured in Brazil.'] },
          { prompt: 'A reunião foi cancelada.', answers: ['The meeting was cancelled.', 'The meeting was canceled.'] },
          { prompt: 'Os documentos tinham sido assinados antes da reunião.', answers: ['The documents had been signed before the meeting.', 'The documents had been signed prior to the meeting.'] },
          { prompt: 'O projeto deveria ter sido entregue ontem.', answers: ['The project should have been delivered yesterday.', 'The project should have been submitted yesterday.', 'The project should have been handed in yesterday.'] },
          { prompt: 'Ela está sendo promovida.', answers: ['She is being promoted.'] },
        ],
      },
    ],
  },

  {
    id: 'int-en-3', stage: 'Intermediário', language: 'en', order: 3,
    title: 'Condicionais',
    subtitle: 'Zero, primeiro e segundo tipo',
    theory: `As **condicionais** descrevem relações entre uma condição ("if...") e um resultado.

## Condicional zero — fatos e verdades gerais

**If + simple present, simple present**
• "If you heat water to 100°C, it boils." (Se você esquenta água a 100°C, ela ferve.)
• "If you mix red and blue, you get purple." (Se você mistura vermelho e azul, você obtém roxo.)
• "If the sun goes down, it gets dark." (Se o sol se põe, escurece.)

## Primeiro condicional — situações reais e prováveis no futuro

**If + simple present, will + infinitive**
• "If it rains, I will stay home." (Se chover, eu vou ficar em casa.)
• "If you study hard, you will pass the exam." (Se você estudar bastante, vai passar na prova.)
• "If she calls, I'll let you know." (Se ela ligar, eu te aviso.)

## Segundo condicional — situações hipotéticas ou improváveis no presente/futuro

**If + simple past, would + infinitive**
• "If I had a million dollars, I would travel the world." (Se eu tivesse um milhão de dólares, viajaria pelo mundo.)
• "If she won the lottery, she would buy a house." (Se ela ganhasse na loteria, comparia uma casa.)
• "What would you do if you were in my position?" (O que você faria se estivesse na minha posição?)

## Comparando os três tipos

| Tipo | Estrutura | Quando usar |
|---|---|---|
| Zero | if + present, present | Fatos sempre verdadeiros |
| Primeiro | if + present, will | Futuro real e provável |
| Segundo | if + past, would | Hipótese improvável ou irreal |

⚠️ Erro muito comum de falantes de português: usar "will" depois de "if" no primeiro condicional. O correto é simple present após "if": "If it **will rain**" está errado — o certo é "If it **rains**, I will stay home."

⚠️ No segundo condicional, não confunda o "simple past" com referência real ao passado — aqui ele expressa hipótese no presente/futuro, não um fato passado: "If I had a car..." não significa que você teve um carro antes, mas que (hipoteticamente) não tem um agora.

💡 No segundo condicional, use **"were"** para todos os sujeitos com "to be" (inclusive I/he/she/it), especialmente em inglês mais formal: "If I were you, I wouldn't do that." (Se eu fosse você, não faria isso.) Em inglês informal, "was" também aparece ("If I was you..."), mas "were" é considerado mais correto.

## Vocabulário-chave

• to heat — esquentar
• to mix — misturar
• to melt — derreter
• to pass (an exam) — passar (numa prova)
• to win the lottery — ganhar na loteria
• to succeed — ter sucesso
• job — emprego
• to lose — perder
• to water (plants) — regar
• early — cedo
• to travel — viajar`,
    exercises: [
      {
        sentences: [
          { prompt: 'Se você aquecer o gelo, ele derrete.', answers: ['If you heat ice, it melts.', 'If you heat ice, it will melt.'] },
          { prompt: 'Se ela estudar bastante, ela vai passar na prova.', answers: ["If she studies hard, she will pass the exam.", "If she studies hard, she'll pass the exam."] },
          { prompt: 'Se eu fosse rico, compraria uma casa grande.', answers: ['If I were rich, I would buy a big house.', "If I were rich, I'd buy a big house."] },
          { prompt: 'Se você não dormir bem, fica cansado.', answers: ["If you don't sleep well, you get tired.", "If you don't sleep well, you feel tired.", "If you don't sleep well, you'll feel tired."] },
          { prompt: 'Se ela me ligar, eu vou atender.', answers: ["If she calls me, I will answer.", "If she calls me, I'll answer.", "If she calls me, I will pick up.", "If she calls me, I'll pick up."] },
        ],
      },
      {
        sentences: [
          { prompt: 'Se eu soubesse a resposta, te diria.', answers: ['If I knew the answer, I would tell you.', "If I knew the answer, I'd tell you."] },
          { prompt: 'Se você misturar azul e amarelo, obtém verde.', answers: ['If you mix blue and yellow, you get green.'] },
          { prompt: 'Se eles chegarem cedo, podemos começar logo.', answers: ['If they arrive early, we can start right away.', "If they arrive early, we can start soon.", 'If they arrive early, we can start early.'] },
          { prompt: 'Se eu fosse você, não diria isso.', answers: ["If I were you, I wouldn't say that."] },
          { prompt: 'Se chover amanhã, o evento será cancelado.', answers: ["If it rains tomorrow, the event will be cancelled.", "If it rains tomorrow, the event will be canceled."] },
        ],
      },
      {
        sentences: [
          { prompt: 'Plantas morrem se você não as regar.', answers: ["Plants die if you don't water them.", "Plants will die if you don't water them.", "If you don't water them, plants will die.", "If you don't water them, plants die."] },
          { prompt: 'Se ela tivesse tempo, viajaria mais.', answers: ['If she had time, she would travel more.', "If she had time, she'd travel more."] },
          { prompt: 'Se você trabalhar duro, vai ter sucesso.', answers: ["If you work hard, you will succeed.", "If you work hard, you'll succeed.", "If you work hard, you will be successful.", "If you work hard, you'll be successful."] },
          { prompt: 'Se eu morasse em Londres, aprenderia inglês mais rápido.', answers: ['If I lived in London, I would learn English faster.', "If I lived in London, I'd learn English faster."] },
          { prompt: 'O que você faria se perdesse o emprego?', answers: ['What would you do if you lost your job?'] },
        ],
      },
    ],
  },

  {
    id: 'int-en-4', stage: 'Intermediário', language: 'en', order: 4,
    title: 'Phrasal Verbs',
    subtitle: 'Os mais usados no inglês do dia a dia',
    theory: `**Phrasal verbs** são verbos combinados com preposições ou advérbios que criam um significado novo, muitas vezes nada óbvio a partir das palavras isoladas.

## Principais phrasal verbs

• **give up** — desistir: "Don't give up on your dreams." (Não desista dos seus sonhos.)
• **look for** — procurar: "She's looking for her keys." (Ela está procurando as chaves.)
• **put off** — adiar: "They put off the meeting." (Eles adiaram a reunião.)
• **take on** — assumir / contratar: "He took on more responsibilities." (Ele assumiu mais responsabilidades.)
• **run out of** — ficar sem: "We ran out of milk." (Ficamos sem leite.)
• **carry on** — continuar: "Carry on talking." (Continue falando.)
• **bring up** — mencionar / criar (filhos): "She brought up the subject." (Ela mencionou o assunto.) / "She brought up three kids." (Ela criou três filhos.)
• **turn down** — recusar / diminuir o volume: "She turned down the offer." (Ela recusou a oferta.)
• **look forward to** — aguardar ansiosamente: "I'm looking forward to the trip." (Estou ansioso pela viagem.)
• **come across** — encontrar por acaso / parecer: "I came across an old photo." (Encontrei uma foto antiga por acaso.)
• **find out** — descobrir: "Did you find out what happened?" (Você descobriu o que aconteceu?)
• **get along (with)** — se dar bem: "We get along very well." (Nós nos damos muito bem.)
• **go through** — passar por / examinar: "She went through a hard time." (Ela passou por um momento difícil.)
• **set up** — montar / configurar: "Can you set up the printer?" (Você pode configurar a impressora?)

## Separáveis vs. inseparáveis

Alguns phrasal verbs são **separáveis** — o objeto pode ficar entre o verbo e a partícula, ou depois dela:
• "Turn the music down." ou "Turn down the music." (Abaixe a música.)
• "She picked the kids up." ou "She picked up the kids." (Ela buscou as crianças.)

Outros são **inseparáveis** (a partícula nunca se separa do verbo):
• "I ran into an old friend." (NÃO: "I ran an old friend into.")
• "She looks after her parents." (Ela cuida dos pais.)

⚠️ Com **pronomes** (it, him, her, them), os phrasal verbs separáveis SEMPRE separam: "Turn it down." (NÃO "Turn down it.") Esse é um erro muito comum entre falantes de português, que tendem a manter a ordem do verbo + partícula.

⚠️ Cuidado com phrasal verbs que mudam totalmente de sentido dependendo da partícula: "look for" (procurar) x "look after" (cuidar de) x "look forward to" (aguardar ansiosamente) x "look up" (pesquisar/consultar).

💡 Phrasal verbs são extremamente comuns na fala cotidiana e em textos informais — dominar os mais usados deixa seu inglês muito mais natural do que recorrer sempre a verbos "formais" equivalentes (ex: "postpone" em vez de "put off").`,
    exercises: [
      {
        sentences: [
          { prompt: 'Não desista dos seus sonhos.', answers: ["Don't give up on your dreams.", "Don't give up your dreams."] },
          { prompt: 'Ela está procurando as chaves.', answers: ['She is looking for her keys.', "She's looking for her keys."] },
          { prompt: 'Eles adiaram a reunião para sexta-feira.', answers: ['They put off the meeting until Friday.', 'They put the meeting off until Friday.'] },
          { prompt: 'Nós ficamos sem leite.', answers: ['We ran out of milk.'] },
          { prompt: 'Continue falando, estou ouvindo.', answers: ['Carry on talking, I am listening.', "Carry on talking, I'm listening.", 'Go on talking, I am listening.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ela recusou a oferta de emprego.', answers: ['She turned down the job offer.', 'She turned the job offer down.'] },
          { prompt: 'Estou muito animado com as férias.', answers: ['I am really looking forward to the vacation.', "I'm really looking forward to the vacation.", 'I am really looking forward to the holidays.', "I'm really looking forward to the holidays."] },
          { prompt: 'Encontrei um velho amigo no mercado hoje.', answers: ['I came across an old friend at the supermarket today.', 'I ran into an old friend at the market today.'] },
          { prompt: 'Você já descobriu o que aconteceu?', answers: ['Have you found out what happened yet?', 'Did you find out what happened?'] },
          { prompt: 'Ele assumiu muitas responsabilidades.', answers: ['He took on a lot of responsibilities.', 'He took on many responsibilities.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ela criou três filhos sozinha.', answers: ['She brought up three children on her own.', 'She raised three children on her own.'] },
          { prompt: 'Ele mencionou o assunto durante o jantar.', answers: ['He brought up the subject during dinner.', 'He raised the subject during dinner.'] },
          { prompt: 'Nós nos damos muito bem.', answers: ['We get along very well.', 'We get on very well.'] },
          { prompt: 'Ela passou por momentos muito difíceis.', answers: ['She went through very difficult times.', 'She went through a very tough time.'] },
          { prompt: 'Você pode configurar o computador para mim?', answers: ['Can you set up the computer for me?', 'Can you set the computer up for me?', 'Could you set up the computer for me?', 'Could you set the computer up for me?'] },
        ],
      },
    ],
  },

  {
    id: 'int-en-5', stage: 'Intermediário', language: 'en', order: 5,
    title: 'Orações Relativas',
    subtitle: 'who, which, that, whose, where',
    theory: `As **orações relativas** (relative clauses) dão mais informação sobre um substantivo, conectando duas ideias sem repetir o nome.

## Pronomes relativos

• **who** — para pessoas: "The man who called is my boss." (O homem que ligou é meu chefe.)
• **which** — para coisas/animais: "The book which I read was amazing." (O livro que eu li foi incrível.)
• **that** — para pessoas ou coisas (mais informal): "The car that I bought is fast." (O carro que eu comprei é rápido.)
• **whose** — posse: "The woman whose bag was stolen called the police." (A mulher cuja bolsa foi roubada chamou a polícia.)
• **where** — lugares: "The city where I grew up is beautiful." (A cidade onde cresci é bonita.)
• **when** — tempo: "I remember the day when we met." (Eu lembro do dia em que nos conhecemos.)

## Restritivas x explicativas

**Restritivas** (sem vírgulas) — identificam ou definem o substantivo; informação essencial:
• "The student who sits in front is very smart." (O aluno que se senta na frente é muito inteligente.)
• Sem essa oração, não saberíamos qual aluno.

**Explicativas** (com vírgulas) — acrescentam informação extra, não essencial:
• "My brother, who lives in Canada, is a doctor." (Meu irmão, que mora no Canadá, é médico.)
• Já sabemos quem é "my brother" — a oração só adiciona um detalhe.

| | Restritiva | Explicativa |
|---|---|---|
| Vírgulas | Não usa | Usa |
| "that" permitido? | Sim | Não |
| Informação | Essencial | Extra |

⚠️ Erro comum: usar **"that"** em orações explicativas. Isso não é permitido em inglês: "My brother, **that** lives in Canada..." está errado — deve ser "My brother, **who** lives in Canada, is a doctor."

⚠️ Não confunda "which" (coisas) com "who" (pessoas) — esse erro é raro entre falantes de português, mas comum é usar "that" para tudo sem perceber a diferença de registro entre frases restritivas e explicativas.

⚠️ Cuidado com a ordem das palavras ao usar "whose": em português dizemos "a mulher cuja bolsa", e a ordem em inglês é igual (whose + substantivo): "the woman **whose bag**" — não inverta para "the woman bag whose".

💡 Em inglês informal, o pronome relativo pode ser **omitido** quando funciona como objeto da oração: "The movie (that) I watched was great." (O filme que eu assisti foi ótimo.) Mas nunca pode ser omitido quando é sujeito: "The man **who** called" não pode virar "The man called" (perde o sentido).

## Vocabulário-chave

• to help — ajudar
• to grow up — crescer
• kind — gentil
• famous — famoso
• to appear — aparecer
• owner — dono
• mystery — mistério
• facade / front — fachada
• reason — razão`,
    exercises: [
      {
        sentences: [
          { prompt: 'O homem que me ajudou era muito gentil.', answers: ['The man who helped me was very kind.', 'The man that helped me was very kind.'] },
          { prompt: 'Este é o livro que comprei ontem.', answers: ['This is the book that I bought yesterday.', 'This is the book which I bought yesterday.', 'This is the book I bought yesterday.'] },
          { prompt: 'A mulher cuja filha estudou comigo é professora.', answers: ['The woman whose daughter studied with me is a teacher.'] },
          { prompt: 'Este é o restaurante onde nos conhecemos.', answers: ['This is the restaurant where we met.'] },
          { prompt: 'O carro que ele comprou é muito caro.', answers: ['The car that he bought is very expensive.', 'The car which he bought is very expensive.', 'The car he bought is very expensive.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'A cidade onde cresci fica no Brasil.', answers: ['The city where I grew up is in Brazil.', 'The city I grew up in is in Brazil.'] },
          { prompt: 'A pessoa que você está procurando não está aqui.', answers: ["The person you are looking for is not here.", "The person who you are looking for is not here.", "The person that you're looking for isn't here."] },
          { prompt: 'Meu irmão, que mora em Londres, vai nos visitar.', answers: ['My brother, who lives in London, is going to visit us.', 'My brother, who lives in London, will visit us.'] },
          { prompt: 'O cachorro cujo dono é famoso apareceu na TV.', answers: ['The dog whose owner is famous appeared on TV.'] },
          { prompt: 'Esse é o filme que todo mundo está falando.', answers: ["That's the movie everyone is talking about.", "That's the film everyone is talking about.", "This is the movie everyone is talking about.", "This is the film everyone is talking about.", "This is the film that everyone is talking about.", "That's the movie that everyone is talking about."] },
        ],
      },
      {
        sentences: [
          { prompt: 'A empresa onde trabalho fica no centro.', answers: ['The company where I work is in the city centre.', 'The company where I work is in the city center.', 'The company I work for is in the city centre.', 'The company I work for is in the city center.', 'The company where I work is downtown.', 'The company I work for is downtown.'] },
          { prompt: 'O professor que nos ensinou inglês era americano.', answers: ['The teacher who taught us English was American.', 'The teacher that taught us English was American.'] },
          { prompt: 'Ela mora em uma casa cuja fachada é azul.', answers: ['She lives in a house whose facade is blue.', "She lives in a house whose façade is blue.", 'She lives in a house whose front is blue.', 'She lives in a house with a blue facade.', 'She lives in a house with a blue front.'] },
          { prompt: 'Isso é tudo que eu preciso.', answers: ["That's all I need.", 'That is all I need.', "That's all that I need.", 'That is all that I need.'] },
          { prompt: 'A razão pela qual ela foi embora ainda é um mistério.', answers: ['The reason why she left is still a mystery.', 'The reason she left is still a mystery.'] },
        ],
      },
    ],
  },

  {
    id: 'rev-int-en', stage: 'Intermediário', language: 'en', order: 6,
    isReview: true,
    title: 'Revisão — Intermediário',
    subtitle: 'Present perfect, passiva, condicionais, phrasal verbs, relativas',
    theory: `## Revisão dos tópicos intermediários

• **Present perfect**: have/has + past participle — already, never, yet, just. "I've already finished." (Eu já terminei.)
• **Voz passiva**: to be + past participle — foco na ação, não no sujeito. "The letter was written by John." (A carta foi escrita por John.)
• **Condicionais**: zero (fatos: "If you heat ice, it melts"), primeiro (futuro provável: "If it rains, I will stay home"), segundo (hipotético: "If I were rich, I would travel")
• **Phrasal verbs**: give up, look for, put off, run out of, come across...
• **Orações relativas**: who, which, that, whose, where — restritivas (sem vírgula) x explicativas (com vírgula)

⚠️ Lembre-se: present perfect nunca combina com tempo fechado no passado (yesterday, last year). Voz passiva usa **by** para o agente, nunca "from". No primeiro condicional, não use "will" depois de "if".

💡 Releia os módulos anteriores se algum desses pontos ainda gerar dúvida antes de seguir para o Avançado.`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu nunca comi comida tailandesa.', answers: ["I've never eaten Thai food.", 'I have never eaten Thai food.'] },
          { prompt: 'O documento foi assinado ontem.', answers: ['The document was signed yesterday.'] },
          { prompt: 'Se eu tivesse mais tempo, estudaria mais.', answers: ['If I had more time, I would study more.', "If I had more time, I'd study more."] },
          { prompt: 'Não desistir nunca é a chave para o sucesso.', answers: ['Never giving up is the key to success.', 'Not giving up is the key to success.'] },
          { prompt: 'A mulher que me atendeu foi muito prestativa.', answers: ['The woman who helped me was very helpful.', 'The woman that served me was very helpful.'] },
          { prompt: 'Você já visitou o Japão?', answers: ['Have you ever visited Japan?', 'Have you ever been to Japan?'] },
          { prompt: 'Ficamos sem gasolina na estrada.', answers: ['We ran out of gas on the road.', 'We ran out of petrol on the road.'] },
          { prompt: 'Se você misturar vermelho e branco, obtém rosa.', answers: ['If you mix red and white, you get pink.'] },
        ],
      },
    ],
    dialogExercise: {
      audioText: "I've lived in London for five years. I moved here after I graduated and I've never regretted it.",
      question: 'O que a pessoa diz sobre sua mudança para Londres?',
      options: [
        { text: 'Se mudou após se formar e nunca se arrependeu.', correct: true },
        { text: 'Se mudou há dois anos e está adorando.', correct: false },
        { text: 'Se mudou antes de se formar e está arrependida.', correct: false },
        { text: 'Se mudou há cinco meses e quer voltar.', correct: false },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  //  AVANÇADO
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'adv-en-1', stage: 'Avançado', language: 'en', order: 1,
    title: 'Terceiro Condicional e Mistos',
    subtitle: 'Hipóteses sobre o passado',
    theory: `## Terceiro condicional — situações hipotéticas no passado

**If + past perfect, would have + past participle**

• "If I had studied harder, I would have passed the exam." (Se eu tivesse estudado mais, teria passado na prova.)
• "If she had arrived on time, she wouldn't have missed the flight." (Se ela tivesse chegado a tempo, não teria perdido o voo.)
• "If they had known, they would have helped." (Se eles tivessem sabido, teriam ajudado.)

Esse tipo fala sobre algo que **não aconteceu** no passado e seu resultado imaginário — não há mais como mudar.

## Condicionais mistos — combinam passado e presente

**Tipo 3 + Tipo 2** (condição no passado, resultado no presente):
**If + past perfect, would + infinitive**
• "If I had taken that job, I would be rich now." (Se eu tivesse aceitado aquele emprego, seria rico agora.)
• "If she had studied medicine, she would be a doctor today." (Se ela tivesse estudado medicina, seria médica hoje.)

**Tipo 2 + Tipo 3** (condição contínua no presente, resultado no passado):
**If + past simple, would have + past participle**
• "If I were braver, I would have spoken up." (Se eu fosse mais corajoso, teria me manifestado.)
• "If he weren't so lazy, he would have finished the project." (Se ele não fosse tão preguiçoso, teria terminado o projeto.)

## Comparando os condicionais hipotéticos

| Tipo | Estrutura | Tempo da condição | Tempo do resultado |
|---|---|---|---|
| Segundo | if + past simple, would + inf. | presente/futuro | presente/futuro |
| Terceiro | if + past perfect, would have + pp | passado | passado |
| Misto (3→2) | if + past perfect, would + inf. | passado | presente |
| Misto (2→3) | if + past simple, would have + pp | presente | passado |

⚠️ Erro comum: misturar os tempos incorretamente, tipo "If I would have studied, I would have passed" — em inglês, "would" NUNCA aparece na parte do "if". O correto é "If I **had** studied, I would have passed."

⚠️ Não confunda "would have" (resultado hipotético no passado) com "had" (condição no passado, past perfect): "If I **had known**, I **would have called**." — a primeira parte nunca tem "would".

💡 O terceiro condicional expressa arrependimento ou alívio sobre o passado — muito usado em frases com "if only": "If only I had listened!" (Se eu tivesse escutado!) Também aparece em "I wish I had..." com o mesmo sentido de lamento.

## Vocabulário-chave

• to plan — planejar
• to save (money) — economizar
• to show up — aparecer
• stubborn — teimoso
• to ask for help — pedir ajuda
• goalkeeper — goleiro
• mistake — erro
• stressed — estressado
• to regret — se arrepender
• truth — verdade`,
    exercises: [
      {
        sentences: [
          { prompt: 'Se eu tivesse estudado mais, teria passado na prova.', answers: ['If I had studied harder, I would have passed the exam.', "If I had studied more, I would've passed the test."] },
          { prompt: 'Se ela tivesse chegado a tempo, não teria perdido o avião.', answers: ['If she had arrived on time, she would not have missed the plane.', "If she had arrived on time, she wouldn't have missed the flight."] },
          { prompt: 'Se eu tivesse aceito aquele emprego, seria rico agora.', answers: ['If I had taken that job, I would be rich now.', "If I'd taken that job, I'd be rich now."] },
          { prompt: 'Ele teria me ajudado se eu tivesse pedido.', answers: ['He would have helped me if I had asked.', "He would've helped me if I'd asked."] },
          { prompt: 'Se eu fosse mais corajoso, teria falado com ela.', answers: ['If I were braver, I would have spoken to her.', "If I were bolder, I would've talked to her."] },
        ],
      },
      {
        sentences: [
          { prompt: 'Se eles tivessem planejado melhor, não estariam com problemas agora.', answers: ['If they had planned better, they would not be in trouble now.', "If they had planned better, they wouldn't be having problems now."] },
          { prompt: 'Ela se arrependeria se soubesse a verdade.', answers: ['She would regret it if she knew the truth.', 'She would feel sorry if she found out the truth.'] },
          { prompt: 'Se você tivesse economizado dinheiro, poderia viajar agora.', answers: ['If you had saved money, you could travel now.', "If you'd saved money, you could be travelling now."] },
          { prompt: 'O que você teria feito se eu não tivesse aparecido?', answers: ['What would you have done if I had not shown up?', "What would you have done if I hadn't shown up?"] },
          { prompt: 'Se ele não fosse tão teimoso, teria pedido ajuda.', answers: ["If he weren't so stubborn, he would have asked for help.", "If he wasn't so stubborn, he would've asked for help."] },
        ],
      },
      {
        sentences: [
          { prompt: 'Se eu soubesse então o que sei agora, teria feito diferente.', answers: ['If I had known then what I know now, I would have done things differently.', "If I'd known what I know now, I would've acted differently."] },
          { prompt: 'Ela não estaria tão estressada se tivesse dormido mais.', answers: ['She would not be so stressed if she had slept more.', "She wouldn't be so stressed if she'd gotten more sleep."] },
          { prompt: 'Eles teriam ganho o jogo se o goleiro não tivesse errado.', answers: ['They would have won the game if the goalkeeper had not made a mistake.', "They would've won if the goalkeeper hadn't made that error."] },
          { prompt: 'Se eu não tivesse me mudado, ainda moraria lá.', answers: ['If I had not moved, I would still be living there.', "If I hadn't moved, I'd still be living there."] },
          { prompt: 'Tomara que você tivesse me contado antes.', answers: ['I wish you had told me earlier.', 'If only you had told me sooner.'] },
        ],
      },
    ],
  },

  {
    id: 'adv-en-2', stage: 'Avançado', language: 'en', order: 2,
    title: 'Discurso Indireto',
    subtitle: 'say/tell + recuo de tempo verbal',
    theory: `No **discurso indireto** (reported speech), reportamos o que alguém disse, sem citar as palavras exatas. Geralmente os tempos verbais "recuam" um passo no passado.

## Recuo de tempos verbais (Direto → Indireto)

| Discurso Direto | Discurso Indireto | Exemplo |
|---|---|---|
| simple present | simple past | "I work here." → He said he worked there. |
| present continuous | past continuous | "I'm working." → She said she was working. |
| simple past | past perfect | "I called you." → She said she had called me. |
| present perfect | past perfect | "I have finished." → He said he had finished. |
| will | would | "I will come." → He said he would come. |
| can | could | "I can help." → She said she could help. |
| must | had to | "I must go." → He said he had to go. |

## Outros ajustes (tempo e lugar)

• now → then / at that moment
• today → that day / yesterday → the day before
• tomorrow → the next day (the following day)
• here → there
• this → that / these → those

Exemplo completo: "I'll see you tomorrow." → "He said he would see me **the next day**."

## SAY vs. TELL

• **say** + (that): "She said that she was tired." (Ela disse que estava cansada.) — say NÃO leva objeto pessoal direto.
• **tell** + pessoa + (that): "She told me that she was tired." (Ela me disse que estava cansada.)

⚠️ Erro muito comum: usar "tell" sem o objeto pessoa, ou "say" com objeto pessoa direto. NÃO diga "She told that she was tired" (falta o "me"). NÃO diga "She said me that she was tired" (say não aceita objeto direto de pessoa — use "told me" ou "said to me").

## Perguntas e comandos no discurso indireto

Perguntas: inverte-se a ordem para afirmativa e usa-se "if/whether" (sim/não) ou a palavra interrogativa (what, where, when...):
• "Are you coming?" → He asked if I was coming. (Ele perguntou se eu estava vindo.)
• "Where do you live?" → She asked where I lived. (Ela perguntou onde eu morava.)

Comandos: tell/ask + pessoa + to + infinitivo:
• "Close the door." → He told me to close the door. (Ele me disse para fechar a porta.)
• "Don't be late." → She told me not to be late. (Ela me disse para não me atrasar.)

⚠️ Não mantenha a ordem de pergunta (verbo-sujeito) dentro do discurso indireto — é um erro frequente entre falantes de português, que tendem a manter "where did she live" em vez de "where she lived".

💡 Verdades universais ou fatos ainda válidos no momento da fala podem manter o tempo original: "She said the Earth is round." (Não é obrigatório recuar para "was round".)

## Vocabulário-chave

• tired — cansado
• to leave — ir embora
• to promise — prometer
• to admit — admitir
• salary — salário
• to increase — aumentar
• to exercise — se exercitar
• to bring — trazer
• documents — documentos`,
    exercises: [
      {
        sentences: [
          { prompt: 'Ele disse que estava cansado.', answers: ['He said he was tired.', 'He said that he was tired.'] },
          { prompt: 'Ela me disse que ia embora no dia seguinte.', answers: ['She told me she was leaving the next day.', 'She told me that she would leave the following day.'] },
          { prompt: '"Eu moro em Londres." → Ele disse que...', answers: ['He said he lived in London.', 'He said that he lived in London.'] },
          { prompt: '"Eu liguei para você." → Ela disse que...', answers: ['She said she had called me.', 'She said that she had called me.'] },
          { prompt: '"Eu vou ajudar." → Ele prometeu que...', answers: ['He promised that he would help.', 'He said he would help.'] },
        ],
      },
      {
        sentences: [
          { prompt: '"Não faça isso!" → Ela me disse para...', answers: ['She told me not to do that.', 'She told me not to do it.'] },
          { prompt: 'O professor disse que a prova seria na quinta-feira.', answers: ['The teacher said the exam would be on Thursday.', 'The teacher told us the test would be on Thursday.'] },
          { prompt: '"Eu posso vir." → Ela disse que...', answers: ['She said she could come.', 'She said that she could come.'] },
          { prompt: '"Estude mais!" → Ele me disse para...', answers: ['He told me to study harder.', 'He told me to study more.'] },
          { prompt: 'Eles disseram que tinham terminado o projeto.', answers: ['They said they had finished the project.', 'They said that they had completed the project.'] },
        ],
      },
      {
        sentences: [
          { prompt: '"Eu não sei a resposta." → Ela admitiu que...', answers: ['She admitted that she did not know the answer.', "She admitted she didn't know the answer."] },
          { prompt: 'O gerente me disse que meu salário seria aumentado.', answers: ['The manager told me my salary would be increased.', 'The manager said my pay would go up.'] },
          { prompt: '"Você precisa se exercitar mais." → O médico me disse que...', answers: ['The doctor told me I needed to exercise more.', 'The doctor said I should exercise more.'] },
          { prompt: '"Estamos muito felizes aqui." → Eles disseram que...', answers: ['They said they were very happy there.', 'They said that they were really happy there.'] },
          { prompt: '"Eu trouxe os documentos." → Ele disse que...', answers: ['He said he had brought the documents.', 'He said that he had brought the documents.'] },
        ],
      },
    ],
  },

  {
    id: 'adv-en-3', stage: 'Avançado', language: 'en', order: 3,
    title: 'Subjuntivo e Inglês Formal',
    subtitle: 'Estruturas formais e mandativas',
    theory: `O **subjuntivo** em inglês aparece em contextos formais, geralmente depois de verbos que expressam sugestão, exigência ou recomendação: suggest, recommend, insist, demand, require, propose, request, ask.

## Formação

Verbo principal na **forma base** (sem "to", sem -s/-es, mesmo para he/she/it):

• "I suggest that he **be** on time." (Sugiro que ele esteja na hora.)
• "It is essential that she **attend** the meeting." (É essencial que ela compareça à reunião.)
• "The doctor recommended that he **take** more rest." (O médico recomendou que ele descansasse mais.)
• "They demanded that the contract **be** reviewed." (Eles exigiram que o contrato fosse revisado.)

Note que o verbo NÃO varia mesmo com sujeito na terceira pessoa: "that he **be**" (não "that he is/was").

## Outras estruturas formais

• **It is vital/crucial/necessary/important that** + subjuntivo: "It is crucial that the report be submitted today." (É crucial que o relatório seja entregue hoje.)
• **lest** (para que não, bem formal): "Study hard lest you fail." (Estude bastante para não falhar.)
• **should** (condição formal): "Should you need help, call us." (= If you need help...) (Caso precise de ajuda, ligue para nós.)
• **were to** (hipóteses formais e remotas): "If he were to resign, the company would struggle." (Se ele viesse a renunciar, a empresa teria dificuldades.)
• **inversão com had/should/were** (sem "if"): "Had I known, I would have called." (= If I had known...) (Se eu tivesse sabido, teria ligado.)

## Tabela resumo

| Estrutura | Uso | Exemplo |
|---|---|---|
| verbo + that + subjuntivo | sugestão/exigência | suggest that he go |
| it is + adj + that + subjuntivo | importância/necessidade | it is vital that she be there |
| should (inversão) | condição formal | should you need anything |
| had (inversão) | condicional 3 formal | had I known |

⚠️ Erro comum: conjugar o verbo normalmente após "that" — como em português usamos o subjuntivo conjugado ("que ele **esteja**"), falantes tendem a também conjugar em inglês: "I suggest that he **is** on time" está incorreto no registro formal/americano — o certo é "I suggest that he **be** on time."

⚠️ Não confunda o subjuntivo formal com o segundo condicional. Em "If I were you" usamos "were" por convenção fixa, mas no subjuntivo mandativo o verbo é a forma base pura: "It is important that she **be** informed" (não "were").

💡 O subjuntivo está bem vivo no inglês americano formal e jornalístico. No inglês britânico, "should" é mais comum como alternativa: "I suggest that he **should** be on time." Ambas as formas são aceitas, mas "be" (sem should) é considerada mais formal/americana.

## Vocabulário-chave

• to attend — comparecer
• to rest — descansar
• to require — exigir
• to fill out — preencher
• to insist — insistir
• truth — verdade
• to postpone — adiar
• regulations — regulamento
• candidate — candidato
• interview — entrevista`,
    exercises: [
      {
        sentences: [
          { prompt: 'Sugiro que ele esteja lá às nove.', answers: ['I suggest that he be there at nine.', 'I suggest that he should be there at nine.'] },
          { prompt: 'É essencial que todos os membros compareçam.', answers: ['It is essential that all members attend.', 'It is essential that every member attend.'] },
          { prompt: 'O médico recomendou que ela descansasse mais.', answers: ['The doctor recommended that she rest more.', 'The doctor suggested that she get more rest.'] },
          { prompt: 'A lei exige que o formulário seja preenchido.', answers: ['The law requires that the form be filled out.', 'The law requires that the form be completed.'] },
          { prompt: 'Insisto que você me diga a verdade.', answers: ['I insist that you tell me the truth.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Caso você precise de ajuda, entre em contato conosco.', answers: ['Should you need any help, please contact us.', 'If you should need help, do not hesitate to contact us.'] },
          { prompt: 'É crucial que o projeto seja entregue no prazo.', answers: ['It is crucial that the project be delivered on time.', 'It is crucial that the project be submitted on time.'] },
          { prompt: 'Se eu tivesse sabido, teria ligado. (inversão formal)', answers: ['Had I known, I would have called.', 'Had I known, I would have phoned.'] },
          { prompt: 'O regulamento pede que os passageiros permaneçam sentados.', answers: ['The regulations require that passengers remain seated.', 'The rules ask that passengers stay seated.'] },
          { prompt: 'Proponho que a reunião seja adiada.', answers: ['I propose that the meeting be postponed.', 'I propose that the meeting be rescheduled.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'É necessário que cada candidato passe por uma entrevista.', answers: ['It is necessary that each candidate undergo an interview.', 'It is necessary for each candidate to have an interview.'] },
          { prompt: 'Eles exigiram que o contrato fosse revisado.', answers: ['They demanded that the contract be reviewed.', 'They insisted that the contract be revised.'] },
          { prompt: 'Seja qual for o resultado, continuaremos em frente.', answers: ['Whatever the outcome may be, we will move forward.', 'Whatever the result, we will carry on.'] },
          { prompt: 'Caso ele chegue antes de mim, por favor o informe.', answers: ['Should he arrive before me, please inform him.', 'If he should arrive before me, please let him know.'] },
          { prompt: 'É imperativo que o relatório seja submetido hoje.', answers: ['It is imperative that the report be submitted today.'] },
        ],
      },
    ],
  },

  {
    id: 'adv-en-4', stage: 'Avançado', language: 'en', order: 4,
    title: 'Idioms e Expressões Naturais',
    subtitle: 'Fale como um nativo',
    theory: `**Expressões idiomáticas** (idioms) são combinações de palavras cujo significado não é literal — não dá para traduzir palavra por palavra.

## Idioms essenciais

• **break a leg** — boa sorte (especialmente no teatro): "Break a leg tonight!" (Boa sorte hoje à noite!)
• **hit the nail on the head** — acertar em cheio: "You hit the nail on the head." (Você acertou em cheio.)
• **once in a blue moon** — raríssimas vezes: "We eat out once in a blue moon." (Comemos fora raríssimas vezes.)
• **bite off more than you can chew** — querer abraçar o mundo: "He bit off more than he could chew." (Ele quis abraçar o mundo.)
• **the ball is in your court** — a decisão é sua: "The ball is in your court now." (A decisão é sua agora.)
• **let the cat out of the bag** — revelar um segredo: "Who let the cat out of the bag?" (Quem entregou o segredo?)
• **beat around the bush** — enrolar, não ir direto ao ponto: "Stop beating around the bush." (Pare de enrolar.)
• **burn bridges** — queimar pontes: "Don't burn your bridges." (Não queime suas pontes.)
• **cost an arm and a leg** — custar os olhos da cara: "That car cost an arm and a leg." (Aquele carro custou os olhos da cara.)
• **get cold feet** — ter medo na última hora, acovardar-se: "She got cold feet before the wedding." (Ela teve medo na última hora antes do casamento.)
• **jump the gun** — agir precipitadamente: "He jumped the gun and quit too soon." (Ele agiu precipitadamente e desistiu rápido demais.)
• **sit on the fence** — ficar em cima do muro: "Stop sitting on the fence." (Pare de ficar em cima do muro.)
• **spill the beans** — contar tudo, entregar o segredo: "Someone spilled the beans." (Alguém entregou o segredo.)
• **under the weather** — se sentindo mal: "I'm feeling a bit under the weather." (Estou me sentindo meio mal.)

## Idioms x falsos cognatos

⚠️ Muitas idioms parecem ter tradução literal óbvia, mas não têm: "to pull someone's leg" não tem nada a ver com "puxar a perna" no sentido literal — significa "brincar/zoar com alguém": "I'm just pulling your leg!" (Estou só brincando com você!)

⚠️ Não traduza idioms ao pé da letra para o português ao tentar formá-las em inglês — "to break a leg" não é uma ameaça, é um desejo de boa sorte. Traduções literais geram frases sem sentido para um nativo.

💡 Aprenda idioms sempre em contexto (em frases completas), nunca isoladamente — isso ajuda a fixar o uso correto e o registro (a maioria é informal, adequada para conversas casuais, não para textos formais ou acadêmicos).`,
    exercises: [
      {
        sentences: [
          { prompt: 'Boa sorte na apresentação! (expressão idiomática)', answers: ['Break a leg!'] },
          { prompt: 'Você acertou em cheio — é exatamente isso.', answers: ['You hit the nail on the head — that is exactly it.', "You've hit the nail on the head — that's exactly right."] },
          { prompt: 'Saímos para jantar uma vez em nunca.', answers: ['We go out for dinner once in a blue moon.'] },
          { prompt: 'Ele quer abraçar o mundo com tantos projetos ao mesmo tempo.', answers: ['He is biting off more than he can chew with so many projects at once.', "He's biting off more than he can chew."] },
          { prompt: 'Ela estava se sentindo mal e não foi trabalhar.', answers: ['She was feeling under the weather and did not go to work.', "She was feeling under the weather and didn't go to work."] },
        ],
      },
      {
        sentences: [
          { prompt: 'Não enrole — me diga logo o que aconteceu.', answers: ["Don't beat around the bush — just tell me what happened.", "Stop beating around the bush and tell me what happened."] },
          { prompt: 'Esse celular custou os olhos da cara.', answers: ['That phone cost an arm and a leg.'] },
          { prompt: 'A decisão é sua agora.', answers: ['The ball is in your court now.', "It's your decision now."] },
          { prompt: 'Quem revelou o segredo da festa surpresa?', answers: ['Who let the cat out of the bag about the surprise party?', 'Who spilled the beans about the surprise party?'] },
          { prompt: 'Ela teve os pés frios e desistiu do casamento.', answers: ['She got cold feet and called off the wedding.', 'She got cold feet and cancelled the wedding.', 'She got cold feet and canceled the wedding.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Não queime pontes — você pode precisar delas no futuro.', answers: ["Don't burn bridges — you may need them in the future.", "Don't burn your bridges — you might need them someday."] },
          { prompt: 'Ele agiu precipitadamente e cometeu um erro.', answers: ['He jumped the gun and made a mistake.', 'He jumped the gun and got it wrong.'] },
          { prompt: 'Pare de ficar em cima do muro e tome uma decisão.', answers: ['Stop sitting on the fence and make a decision.', "Stop sitting on the fence — you need to decide."] },
          { prompt: 'Eu estava apenas brincando — não leve a sério.', answers: ['I was just pulling your leg — do not take it seriously.', "I was just kidding — don't take it seriously."] },
          { prompt: 'No começo foi difícil, mas eu peguei o jeito.', answers: ['It was hard at first, but I got the hang of it.', 'In the beginning it was tough, but I got the hang of it.'] },
        ],
      },
    ],
  },

  {
    id: 'rev-adv-en', stage: 'Avançado', language: 'en', order: 5,
    isReview: true,
    title: 'Revisão — Avançado',
    subtitle: 'Terceiro condicional, discurso indireto, subjuntivo, idioms',
    theory: `## Revisão dos tópicos avançados

• **Terceiro condicional**: If + past perfect, would have + past participle. "If I had known, I would have helped." (Se eu tivesse sabido, teria ajudado.)
• **Condicionais mistos**: combinações entre passado e presente — "If I had taken that job, I would be rich now."
• **Discurso indireto**: recuo de tempos verbais (present → past, will → would), say vs. tell ("She told me that..." / "She said that...")
• **Subjuntivo formal**: suggest/require/demand + that + verbo na forma base — "I suggest that he be on time."
• **Idioms**: expressões naturais do inglês falado — break a leg, hit the nail on the head, cost an arm and a leg...

⚠️ Lembre-se: no terceiro condicional, "would" nunca aparece na parte do "if". No discurso indireto, "tell" precisa de objeto pessoa; "say" não.

💡 Revise os exemplos com tabelas dos módulos anteriores para fixar as estruturas mistas e o subjuntivo formal antes de seguir para os módulos de prática livre.`,
    exercises: [
      {
        sentences: [
          { prompt: 'Se ela tivesse estudado, teria passado.', answers: ['If she had studied, she would have passed.', "If she'd studied, she would've passed."] },
          { prompt: 'Ele me disse que estava cansado.', answers: ['He told me he was tired.', 'He said he was tired.'] },
          { prompt: 'É essencial que você esteja presente.', answers: ['It is essential that you be present.', 'It is essential that you attend.'] },
          { prompt: 'Boa sorte na entrevista! (idiom)', answers: ['Break a leg at the interview!', 'Break a leg in the interview!'] },
          { prompt: 'Caso precise de ajuda, me avise.', answers: ['Should you need help, let me know.', 'If you need any help, just let me know.'] },
          { prompt: 'Esse projeto custou os olhos da cara.', answers: ['That project cost an arm and a leg.'] },
          { prompt: 'Ela me disse para não desistir.', answers: ['She told me not to give up.'] },
          { prompt: 'Se eu tivesse sabido, não teria ido. (inversão)', answers: ["Had I known, I wouldn't have gone.", 'Had I known, I would not have gone.'] },
        ],
      },
    ],
    dialogExercise: {
      audioText: "If I had known the meeting was cancelled, I wouldn't have rushed. She told me it was rescheduled for Friday.",
      question: 'O que a pessoa descobriu sobre a reunião?',
      options: [
        { text: 'Foi cancelada e remarcada para sexta-feira.', correct: true },
        { text: 'Foi cancelada definitivamente.', correct: false },
        { text: 'Aconteceu normalmente na hora marcada.', correct: false },
        { text: 'Foi adiada para a próxima semana.', correct: false },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  //  VARIADOS
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'var-en-1', stage: 'Variados', language: 'en', order: 1,
    title: 'Treino Geral — Nível Médio',
    subtitle: 'Frases mistas — presente, passado, futuro',
    theory: `## Treino de vocabulário e gramática geral

Este módulo cobre os conteúdos de Fundamentos e Básico, misturados em frases do dia a dia.

Revise mentalmente:
• **Presente simples vs. present continuous** — "I work" (rotina) x "I'm working" (agora)
• **Passado simples vs. past continuous** — "I worked" (ação concluída) x "I was working" (ação em progresso)
• **Futuro com will e going to** — "I will call" (decisão espontânea/promessa) x "I'm going to call" (plano já decidido)
• **Verbos modais**: can (capacidade), could (passado/educado), should (sugestão), must (obrigação forte)
• **Artigos, preposições e vocabulário cotidiano**

⚠️ Erro comum: usar "going to" e "will" como sinônimos perfeitos. "Going to" indica um plano já decidido antes de falar; "will" costuma indicar decisão espontânea ou previsão.

💡 Use esse módulo como aquecimento rápido antes de avançar — se sentir dificuldade em alguma frase, revise o módulo de Fundamentos correspondente.

## Vocabulário-chave

• to work — trabalhar
• to study — estudar
• to travel — viajar
• to need — precisar
• to live — morar
• to arrive — chegar
• to cook — cozinhar
• to forget — esquecer
• to remember — lembrar
• meeting — reunião
• every day — todo dia
• tomorrow — amanhã`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu tomo café toda manhã.', answers: ['I drink coffee every morning.', 'I have coffee every morning.'] },
          { prompt: 'Ela está estudando inglês agora.', answers: ['She is studying English now.', "She's studying English right now."] },
          { prompt: 'Eles foram ao cinema ontem.', answers: ['They went to the cinema yesterday.', 'They went to the movies yesterday.'] },
          { prompt: 'Nós vamos viajar nas próximas férias.', answers: ['We are going to travel during the next holidays.', "We're going to travel on our next vacation.", 'We will travel during the next holidays.'] },
          { prompt: 'Você deveria dormir mais cedo.', answers: ['You should sleep earlier.', 'You should go to bed earlier.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ele não gosta de vegetais.', answers: ["He doesn't like vegetables.", 'He does not like vegetables.'] },
          { prompt: 'Onde você trabalha?', answers: ['Where do you work?'] },
          { prompt: 'Ela estava lendo quando eu liguei.', answers: ['She was reading when I called.', 'She was reading when I phoned.'] },
          { prompt: 'Eu preciso comprar leite.', answers: ['I need to buy milk.', 'I have to buy milk.'] },
          { prompt: 'Qual é o seu nome?', answers: ['What is your name?', "What's your name?"] },
        ],
      },
      {
        sentences: [
          { prompt: 'Nós nos conhecemos há dois anos.', answers: ["We've known each other for two years.", 'We have known each other for two years.'] },
          { prompt: 'Ele pode falar três idiomas.', answers: ['He can speak three languages.'] },
          { prompt: 'Quanto custa isso?', answers: ['How much does this cost?', 'How much is this?'] },
          { prompt: 'Eu moro aqui desde 2018.', answers: ["I've lived here since 2018.", 'I have lived here since 2018.'] },
          { prompt: 'Você vai ao trabalho de carro ou de ônibus?', answers: ['Do you go to work by car or by bus?', 'Do you drive to work or take the bus?'] },
        ],
      },
      {
        sentences: [
          { prompt: 'O trem saiu às oito horas.', answers: ['The train left at eight o\'clock.', 'The train departed at eight.'] },
          { prompt: 'Ela vai ligar para você amanhã.', answers: ['She is going to call you tomorrow.', "She'll call you tomorrow.", 'She will call you tomorrow.'] },
          { prompt: 'Eles moram em um apartamento pequeno.', answers: ['They live in a small apartment.', 'They live in a small flat.'] },
          { prompt: 'Eu não entendo essa palavra.', answers: ["I don't understand this word.", 'I do not understand this word.'] },
          { prompt: 'Você pode me ajudar, por favor?', answers: ['Can you help me, please?', 'Could you help me, please?'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Nós temos uma reunião às duas da tarde.', answers: ['We have a meeting at two in the afternoon.', "We've got a meeting at two p.m."] },
          { prompt: 'Ela cozinhou o jantar ontem à noite.', answers: ['She cooked dinner last night.', 'She made dinner last night.'] },
          { prompt: 'Eu estou aprendendo a tocar violão.', answers: ["I'm learning to play the guitar.", 'I am learning to play guitar.'] },
          { prompt: 'Eles não vão vir à festa.', answers: ["They aren't going to come to the party.", "They won't come to the party.", 'They are not going to come to the party.'] },
          { prompt: 'Que horas são?', answers: ['What time is it?', 'What is the time?'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu levanto às seis da manhã todos os dias.', answers: ['I get up at six in the morning every day.', 'I wake up at six every morning.'] },
          { prompt: 'Ela foi ao médico na semana passada.', answers: ['She went to the doctor last week.', 'She visited the doctor last week.', "She visited the doctor's last week."] },
          { prompt: 'Nós precisamos de mais tempo.', answers: ['We need more time.'] },
          { prompt: 'Ele está trabalhando em um projeto novo.', answers: ["He's working on a new project.", 'He is working on a new project.'] },
          { prompt: 'Você tem filhos?', answers: ['Do you have children?', 'Do you have kids?', 'Have you got any children?'] },
        ],
      },
      {
        sentences: [
          { prompt: 'O supermercado fecha às dez.', answers: ['The supermarket closes at ten.', 'The supermarket shuts at ten.'] },
          { prompt: 'Ela estava feliz ontem.', answers: ['She was happy yesterday.'] },
          { prompt: 'Nós vamos jantar fora hoje.', answers: ["We're going out for dinner tonight.", 'We are going to eat out tonight.', "We'll eat out tonight."] },
          { prompt: 'Eu não consigo lembrar o nome dele.', answers: ["I can't remember his name.", 'I cannot remember his name.'] },
          { prompt: 'Ele fala muito rápido.', answers: ['He speaks very fast.', 'He talks very fast.', 'He speaks very quickly.', 'He talks very quickly.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Minha mãe é professora.', answers: ['My mother is a teacher.', 'My mom is a teacher.'] },
          { prompt: 'Eles chegaram tarde.', answers: ['They arrived late.', 'They got there late.'] },
          { prompt: 'Você gosta de música?', answers: ['Do you like music?'] },
          { prompt: 'Ela vai estudar à noite.', answers: ["She's going to study tonight.", 'She will study tonight.', 'She is going to study in the evening.'] },
          { prompt: 'Nós moramos perto do parque.', answers: ['We live near the park.', 'We live close to the park.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ele comeu demais no almoço.', answers: ['He ate too much at lunch.', 'He overate at lunch.'] },
          { prompt: 'O bebê está dormindo.', answers: ['The baby is sleeping.', "The baby's sleeping."] },
          { prompt: 'Eu preciso ir ao banco.', answers: ['I need to go to the bank.', 'I have to go to the bank.'] },
          { prompt: 'Elas viajam muito a trabalho.', answers: ['They travel a lot for work.', 'They travel frequently for business.'] },
          { prompt: 'Você já foi ao Brasil?', answers: ['Have you ever been to Brazil?'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Que tipo de música você gosta?', answers: ['What kind of music do you like?', 'What type of music do you enjoy?'] },
          { prompt: 'Nós assistimos a um bom filme ontem.', answers: ['We watched a good movie yesterday.', 'We saw a good film yesterday.'] },
          { prompt: 'Ela não vai poder vir.', answers: ["She won't be able to come.", "She isn't going to be able to come."] },
          { prompt: 'O café da manhã está pronto.', answers: ['Breakfast is ready.'] },
          { prompt: 'Eu tenho que trabalhar no fim de semana.', answers: ['I have to work on the weekend.', 'I need to work at the weekend.', "I've got to work on the weekend."] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eles foram de avião para Paris.', answers: ['They flew to Paris.', 'They went to Paris by plane.'] },
          { prompt: 'Ela gosta de ler antes de dormir.', answers: ['She likes to read before going to sleep.', 'She likes reading before bed.'] },
          { prompt: 'Nós saímos às oito.', answers: ['We leave at eight.', "We're leaving at eight.", 'We left at eight.'] },
          { prompt: 'Você está com fome?', answers: ['Are you hungry?'] },
          { prompt: 'Ele vai comprar um carro novo.', answers: ["He's going to buy a new car.", 'He is going to buy a new car.', "He'll buy a new car."] },
        ],
      },
      {
        sentences: [
          { prompt: 'Meu irmão toca guitarra muito bem.', answers: ['My brother plays the guitar very well.', 'My brother plays guitar really well.'] },
          { prompt: 'Onde você nasceu?', answers: ['Where were you born?'] },
          { prompt: 'Ela está se sentindo melhor hoje.', answers: ["She's feeling better today.", 'She is feeling better today.'] },
          { prompt: 'Eles não sabem a resposta.', answers: ["They don't know the answer.", 'They do not know the answer.'] },
          { prompt: 'Você costuma fazer exercício?', answers: ['Do you usually exercise?', 'Do you work out regularly?', 'Do you exercise often?'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu adorei aquele restaurante.', answers: ['I loved that restaurant.', 'I really liked that restaurant.'] },
          { prompt: 'Ela vai terminar o curso em dezembro.', answers: ["She's going to finish the course in December.", 'She will finish the course in December.'] },
          { prompt: 'Nós temos muito em comum.', answers: ['We have a lot in common.'] },
          { prompt: 'Que dia é hoje?', answers: ["What day is it today?", "What day is today?"] },
          { prompt: 'Ele nunca esquece o aniversário dela.', answers: ['He never forgets her birthday.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'A aula começa às nove.', answers: ['The class starts at nine.', 'The lesson begins at nine.'] },
          { prompt: 'Eu me machuquei jogando futebol.', answers: ['I hurt myself playing football.', 'I got hurt playing soccer.'] },
          { prompt: 'Você está livre no sábado?', answers: ['Are you free on Saturday?'] },
          { prompt: 'Ela comprou um vestido novo para a festa.', answers: ['She bought a new dress for the party.'] },
          { prompt: 'Eles vão mudar para uma cidade maior.', answers: ["They're going to move to a bigger city.", 'They are going to move to a larger city.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu geralmente acordo às sete.', answers: ['I usually wake up at seven.', 'I generally get up at seven.'] },
          { prompt: 'Ele esqueceu o guarda-chuva em casa.', answers: ['He forgot his umbrella at home.', 'He left his umbrella at home.'] },
          { prompt: 'Nós temos uma surpresa para você.', answers: ['We have a surprise for you.', "We've got a surprise for you.", 'There is a surprise for you.'] },
          { prompt: 'Você pode falar mais devagar?', answers: ['Can you speak more slowly?', 'Could you speak more slowly, please?'] },
          { prompt: 'Ela tem dois cachorros e um gato.', answers: ['She has two dogs and a cat.', "She's got two dogs and a cat."] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu aprendi muitas coisas esse ano.', answers: ["I've learned a lot this year.", "I've learnt many things this year.", 'I have learned a lot this year.'] },
          { prompt: 'Eles estão construindo uma casa nova.', answers: ["They're building a new house.", 'They are building a new house.'] },
          { prompt: 'O banco abre às dez da manhã.', answers: ['The bank opens at ten in the morning.', 'The bank opens at ten a.m.'] },
          { prompt: 'Você prefere chá ou café?', answers: ['Do you prefer tea or coffee?', 'Would you prefer tea or coffee?'] },
          { prompt: 'Ela não conseguiu dormir ontem à noite.', answers: ["She couldn't sleep last night.", 'She was not able to sleep last night.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Nós temos que pegar o metrô.', answers: ['We have to take the subway.', 'We need to take the underground.', 'We have to catch the metro.'] },
          { prompt: 'Ele trabalha em um hospital.', answers: ['He works in a hospital.'] },
          { prompt: 'Qual é o seu número de telefone?', answers: ['What is your phone number?', "What's your phone number?"] },
          { prompt: 'Ela está esperando pelo ônibus.', answers: ["She's waiting for the bus.", 'She is waiting for the bus.'] },
          { prompt: 'Eles viajam toda vez que podem.', answers: ['They travel whenever they can.', 'They travel every chance they get.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Você quer um pouco de água?', answers: ['Would you like some water?', 'Do you want some water?'] },
          { prompt: 'Ela estudou a noite toda.', answers: ['She studied all night.', 'She studied the whole night.'] },
          { prompt: 'Nós vamos ficar em casa esse fim de semana.', answers: ["We're going to stay home this weekend.", 'We will stay at home this weekend.'] },
          { prompt: 'Ele conhece muita gente interessante.', answers: ['He knows a lot of interesting people.', 'He knows many interesting people.'] },
          { prompt: 'Eu não tenho certeza do que fazer.', answers: ["I'm not sure what to do.", 'I am not sure what to do.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Elas terminaram de comer e saíram.', answers: ['They finished eating and left.', 'They finished their meal and went out.'] },
          { prompt: 'Eu gostaria de um café, por favor.', answers: ["I'd like a coffee, please.", 'I would like a coffee, please.'] },
          { prompt: 'O voo parte às três da tarde.', answers: ['The flight departs at three in the afternoon.', 'The flight leaves at three p.m.'] },
          { prompt: 'Você fala muito bem inglês.', answers: ['You speak English very well.', 'Your English is very good.'] },
          { prompt: 'Ele vai pedir um aumento de salário.', answers: ["He's going to ask for a pay rise.", 'He is going to ask for a raise.', "He'll ask for a salary increase."] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu gosto mais de inverno do que de verão.', answers: ['I like winter more than summer.', 'I prefer winter to summer.'] },
          { prompt: 'Ela chegou cedo para a entrevista.', answers: ['She arrived early for the interview.', 'She got there early for the interview.'] },
          { prompt: 'Nós combinamos de nos encontrar amanhã.', answers: ['We agreed to meet tomorrow.', "We've arranged to meet tomorrow."] },
          { prompt: 'Você já ouviu falar dessa banda?', answers: ['Have you ever heard of this band?', 'Have you heard of this band?'] },
          { prompt: 'Ele parece muito cansado hoje.', answers: ['He looks very tired today.', 'He seems very tired today.'] },
        ],
      },
    ],
  },

  {
    id: 'var-en-2', stage: 'Variados', language: 'en', order: 2,
    title: 'Treino Geral — Nível Avançado',
    subtitle: 'Perfect tenses, passive, conditionals',
    theory: `## Treino intensivo — conteúdos intermediários e avançados

Este módulo combina, em frases reais, os principais tópicos vistos até aqui:

• **Present perfect e past perfect** — "I had already left when she arrived." (Eu já tinha saído quando ela chegou.)
• **Voz passiva em diferentes tempos** — "The report was being reviewed." (O relatório estava sendo revisado.)
• **Condicionais** (tipos 1, 2, 3 e mistos) — "If I had known, I would be there now." (Se eu tivesse sabido, estaria lá agora.)
• **Discurso indireto** — "She said she had finished." (Ela disse que tinha terminado.)
• **Subjuntivo e linguagem formal** — "It is essential that the rules be followed." (É essencial que as regras sejam seguidas.)
• **Phrasal verbs avançados**

⚠️ Atenção especial ao **past perfect** combinado com **voz passiva** — "had been + past participle" é uma estrutura que costuma confundir: "The project had been approved before the meeting." (O projeto já tinha sido aprovado antes da reunião.)

💡 Ao errar uma frase, identifique qual estrutura gramatical ela usa (tempo verbal, voz, condicional) e revise o módulo correspondente antes de tentar novamente.

## Vocabulário-chave

• to approve — aprovar
• to review — revisar
• to announce — anunciar
• to require — exigir
• to demolish — demolir
• committee — comitê
• employee — funcionário
• deadline — prazo
• evidence/data — dados
• to recommend — recomendar
• to invest — investir
• badge — crachá`,
    exercises: [
      {
        sentences: [
          { prompt: 'Quando ela chegou, nós já tínhamos jantado.', answers: ['When she arrived, we had already had dinner.', 'By the time she arrived, we had already eaten.'] },
          { prompt: 'O prêmio foi dado a ela pelo comitê.', answers: ['The prize was given to her by the committee.', 'She was given the prize by the committee.'] },
          { prompt: 'Se eu tivesse o número dele, eu ligaria.', answers: ['If I had his number, I would call him.', "If I had his number, I'd call him."] },
          { prompt: 'Ele me disse que já tinha visto aquele filme.', answers: ['He told me he had already seen that movie.', 'He said he had already watched that film.'] },
          { prompt: 'É vital que a decisão seja tomada hoje.', answers: ['It is vital that the decision be made today.', 'It is vital that the decision is made today.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu nunca tinha voado de primeira classe antes.', answers: ["I had never flown first class before.", 'I had never travelled first class before.'] },
          { prompt: 'O contrato será assinado na semana que vem.', answers: ['The contract will be signed next week.', 'The contract is going to be signed next week.'] },
          { prompt: 'Se ela tivesse avisado, eu teria esperado.', answers: ['If she had warned me, I would have waited.', "If she had let me know, I would've waited."] },
          { prompt: 'Eles exigiram que todos os funcionários fossem testados.', answers: ['They demanded that all employees be tested.', 'They required that every employee be tested.'] },
          { prompt: 'O projeto já havia sido aprovado quando surgiu o problema.', answers: ['The project had already been approved when the problem arose.', 'The project had already been approved when the issue came up.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ela me perguntou quando eu tinha chegado.', answers: ['She asked me when I had arrived.', 'She asked me when I got there.'] },
          { prompt: 'Caso você tenha alguma dúvida, não hesite em perguntar.', answers: ['Should you have any questions, do not hesitate to ask.', 'If you have any questions, feel free to ask.'] },
          { prompt: 'O relatório teria sido entregue se houvesse mais tempo.', answers: ['The report would have been submitted if there had been more time.', "The report would've been delivered if there had been more time."] },
          { prompt: 'Ele reconheceu que tinha cometido um erro.', answers: ['He admitted that he had made a mistake.', 'He acknowledged that he had made an error.'] },
          { prompt: 'As obras foram concluídas antes do prazo.', answers: ['The works were completed ahead of schedule.', 'The construction work was finished before the deadline.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ela havia estudado francês antes de se mudar para Paris.', answers: ['She had studied French before moving to Paris.', "She'd studied French before she moved to Paris."] },
          { prompt: 'Esse medicamento não deveria ser tomado sem prescrição médica.', answers: ['This medication should not be taken without a prescription.', "This medicine shouldn't be taken without a doctor's prescription."] },
          { prompt: 'Se eu soubesse disso antes, teria agido diferente.', answers: ['If I had known about this earlier, I would have acted differently.', "Had I known this sooner, I would've done things differently."] },
          { prompt: 'Ela me disse para não me preocupar.', answers: ['She told me not to worry.'] },
          { prompt: 'Nós já tínhamos saído quando ele chegou.', answers: ['We had already left when he arrived.', "We'd already gone when he arrived."] },
        ],
      },
      {
        sentences: [
          { prompt: 'Novos empregos serão criados pelo projeto.', answers: ['New jobs will be created by the project.', 'The project will create new jobs.'] },
          { prompt: 'Se ela não fosse tão tímida, teria mais amigos.', answers: ["If she weren't so shy, she would have more friends.", "If she wasn't so shy, she'd have more friends."] },
          { prompt: 'Ele insistiu que a reunião fosse adiada.', answers: ['He insisted that the meeting be postponed.', 'He insisted that the meeting should be postponed.'] },
          { prompt: 'Quando eles chegaram, a festa já tinha acabado.', answers: ['When they arrived, the party had already ended.', 'By the time they arrived, the party was already over.'] },
          { prompt: 'Esse produto é fabricado com materiais reciclados.', answers: ['This product is made with recycled materials.', 'This product is manufactured using recycled materials.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'O ladrão tinha fugido antes da polícia chegar.', answers: ['The thief had escaped before the police arrived.', 'The thief had fled before the police arrived.'] },
          { prompt: 'Você já tinha visto esse lugar antes?', answers: ['Had you ever seen this place before?', 'Had you already seen this place before?'] },
          { prompt: 'Os documentos estão sendo revisados agora.', answers: ['The documents are being reviewed now.', 'The documents are being checked right now.'] },
          { prompt: 'Caso você precise, o número está no site.', answers: ['Should you need it, the number is on the website.', 'If you need it, the number is on the website.'] },
          { prompt: 'Se eu fosse você, teria pedido desculpas.', answers: ['If I were you, I would have apologized.', "If I were you, I would've said sorry."] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ela me garantiu que o problema havia sido resolvido.', answers: ['She assured me that the problem had been solved.', 'She told me that the issue had been resolved.'] },
          { prompt: 'O edifício foi construído no século XIX.', answers: ['The building was built in the nineteenth century.', 'The building was constructed in the 19th century.'] },
          { prompt: 'Nós nunca tínhamos nos sentido tão livres.', answers: ["We had never felt so free.", "We'd never felt as free as that."] },
          { prompt: 'É fundamental que as regras sejam respeitadas.', answers: ['It is essential that the rules be respected.', 'It is essential that the rules are respected.'] },
          { prompt: 'Se ela tivesse ficado, as coisas teriam sido diferentes.', answers: ['If she had stayed, things would have been different.', "If she'd stayed, things would've been different."] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eles afirmaram que nunca tinham visitado aquela cidade.', answers: ['They claimed they had never visited that city.', 'They said they had never been to that city.'] },
          { prompt: 'Os resultados serão divulgados na próxima semana.', answers: ['The results will be announced next week.', 'The results are going to be released next week.'] },
          { prompt: 'Se você tivesse me ouvido, estaríamos bem agora.', answers: ['If you had listened to me, we would be fine now.', "If you'd listened to me, we'd be okay now."] },
          { prompt: 'Ele propôs que a empresa investisse em tecnologia.', answers: ['He proposed that the company invest in technology.', 'He suggested that the company should invest in technology.'] },
          { prompt: 'O dinheiro já havia sido gasto quando ela percebeu.', answers: ['The money had already been spent when she realized.', "The money had already been spent when she noticed."] },
        ],
      },
      {
        sentences: [
          { prompt: 'A empresa foi fundada há cinquenta anos.', answers: ['The company was founded fifty years ago.', 'The company was established fifty years ago.'] },
          { prompt: 'Ela lamentou não ter estudado mais.', answers: ['She regretted not having studied more.', 'She was sorry she had not studied harder.'] },
          { prompt: 'Se eles tivessem cooperado, teríamos terminado mais cedo.', answers: ['If they had cooperated, we would have finished sooner.', "If they'd cooperated, we would've been done earlier."] },
          { prompt: 'Todos os candidatos devem ser tratados igualmente.', answers: ['All candidates must be treated equally.', 'All applicants should be treated the same.'] },
          { prompt: 'Eu nunca tinha comido comida tão boa.', answers: ["I had never eaten such good food.", "I'd never tasted food that good before."] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ela reconheceu que tinha mentido para mim.', answers: ['She admitted that she had lied to me.', 'She acknowledged she had told me a lie.'] },
          { prompt: 'O novo sistema está sendo instalado pela equipe técnica.', answers: ['The new system is being installed by the technical team.', 'The new system is being set up by the IT team.'] },
          { prompt: 'Se ele fosse mais organizado, terminaria a tempo.', answers: ['If he were more organized, he would finish on time.', "If he was more organised, he'd finish in time."] },
          { prompt: 'O comitê recomendou que a política fosse revisada.', answers: ['The committee recommended that the policy be reviewed.', 'The committee suggested that the policy should be revised.'] },
          { prompt: 'Quando o filme terminou, todos já tinham chorado.', answers: ['When the film ended, everyone had already cried.', 'By the time the film ended, everyone had cried.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Os dados ainda não foram verificados.', answers: ["The data hasn't been verified yet.", 'The data have not been verified yet.', 'The data has not been checked yet.', 'The data have not been checked yet.'] },
          { prompt: 'Tomara que eu tivesse aceito aquela oferta de emprego.', answers: ['I wish I had accepted that job offer.', 'If only I had taken that job offer.'] },
          { prompt: 'Ela nos pediu que chegássemos cedo.', answers: ['She asked us to arrive early.', 'She asked us to get there early.'] },
          { prompt: 'O livro tinha sido escrito muito antes de ser publicado.', answers: ['The book had been written long before it was published.'] },
          { prompt: 'Se você tivesse esperado, teria visto o que aconteceu.', answers: ['If you had waited, you would have seen what happened.', "If you'd waited, you would've seen what happened."] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ela sempre quis morar no exterior.', answers: ["She has always wanted to live abroad.", 'She had always wanted to live overseas.'] },
          { prompt: 'O paciente está sendo monitorado continuamente.', answers: ['The patient is being monitored continuously.', 'The patient is being continuously monitored.'] },
          { prompt: 'Se ela soubesse a verdade, estaria arrasada.', answers: ['If she knew the truth, she would be devastated.', "If she knew the truth, she'd be heartbroken."] },
          { prompt: 'A diretora insistiu que todos participassem.', answers: ['The director insisted that everyone participate.', 'The director insisted that everyone should participate.', 'The director insisted that all staff participate.'] },
          { prompt: 'Eles tinham acabado de chegar quando começou a chover.', answers: ['They had just arrived when it started raining.', "They'd just arrived when it began to rain."] },
        ],
      },
      {
        sentences: [
          { prompt: 'O contrato foi cancelado sem aviso prévio.', answers: ['The contract was cancelled without prior notice.', 'The contract was canceled without prior notice.', 'The contract was terminated without warning.'] },
          { prompt: 'Se ele tivesse pedido ajuda, eu teria respondido.', answers: ['If he had asked for help, I would have responded.', 'If he had asked for help, I would have helped.', "If he'd asked for help, I would've replied."] },
          { prompt: 'Ela disse que o jantar estava pronto.', answers: ['She said that dinner was ready.', 'She told us dinner was ready.'] },
          { prompt: 'Nós já havíamos discutido o assunto antes.', answers: ["We had already discussed the matter before.", "We'd already talked about the subject before."] },
          { prompt: 'É obrigatório que todos os funcionários usem crachá.', answers: ['It is compulsory that all employees wear their badges.', 'All staff members are required to wear an ID badge.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'A vaga foi preenchida por um candidato interno.', answers: ['The position was filled by an internal candidate.', 'The vacancy was filled internally.'] },
          { prompt: 'Se você tivesse chegado mais cedo, teria encontrado ele.', answers: ['If you had arrived earlier, you would have met him.', "If you'd arrived earlier, you would've met him."] },
          { prompt: 'Ela garantiu que o trabalho seria entregue na hora.', answers: ['She assured us that the work would be delivered on time.', 'She promised that the job would be done on time.'] },
          { prompt: 'Os dois lados tinham concordado antes da reunião.', answers: ['Both sides had agreed before the meeting.', 'The two parties had already come to an agreement before the meeting.'] },
          { prompt: 'O documento deve ser assinado por ambas as partes.', answers: ['The document must be signed by both parties.', 'The document needs to be signed by both sides.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ela disse que não sabia o que havia acontecido.', answers: ["She said she didn't know what had happened.", 'She said she was not sure what had happened.'] },
          { prompt: 'O museu estava sendo reformado quando visitamos.', answers: ['The museum was being renovated when we visited.', 'The museum was undergoing renovation when we visited.'] },
          { prompt: 'Se ele fosse mais cuidadoso, não teria cometido esse erro.', answers: ['If he had been more careful, he would not have made that mistake.', "If he'd been more careful, he wouldn't have made that error."] },
          { prompt: 'A lei exige que todos os acidentes sejam notificados.', answers: ['The law requires that all accidents be reported.', 'The law requires all accidents to be reported.'] },
          { prompt: 'Eu jamais tinha ouvido uma música tão bonita.', answers: ['I had never heard such a beautiful song.', "I'd never heard a song so beautiful before."] },
        ],
      },
      {
        sentences: [
          { prompt: 'O relatório estava sendo preparado pela equipe.', answers: ['The report was being prepared by the team.'] },
          { prompt: 'Ela declarou que o projeto havia sido um sucesso.', answers: ['She declared that the project had been a success.', 'She said the project had been successful.'] },
          { prompt: 'Caso o pagamento não seja recebido, o serviço será interrompido.', answers: ['Should payment not be received, the service will be suspended.', 'If payment is not received, the service will be cut off.'] },
          { prompt: 'Eles nunca tinham trabalhado juntos antes.', answers: ["They had never worked together before.", "They'd never collaborated before."] },
          { prompt: 'Se você tivesse me contado, eu teria entendido.', answers: ['If you had told me, I would have understood.', "If you'd told me, I would've understood."] },
        ],
      },
      {
        sentences: [
          { prompt: 'O prédio havia sido demolido antes de eu chegar.', answers: ['The building had been demolished before I arrived.', "The building had been torn down before I got there."] },
          { prompt: 'Se eles tivessem investido antes, estariam ricos agora.', answers: ['If they had invested earlier, they would be rich now.', "If they'd invested sooner, they'd be wealthy now."] },
          { prompt: 'O gerente pediu que a equipe se reunisse às dez.', answers: ['The manager asked that the team meet at ten.', 'The manager requested that the team gather at ten.'] },
          { prompt: 'Ela havia prometido que voltaria logo.', answers: ['She had promised she would be back soon.', "She'd promised she would return soon."] },
          { prompt: 'Todas as perguntas devem ser respondidas por escrito.', answers: ['All questions must be answered in writing.', 'All questions must be answered in written form.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'O evento tinha sido planejado com meses de antecedência.', answers: ['The event had been planned months in advance.', 'The event had been organised months ahead of time.', 'The event had been organized months ahead of time.'] },
          { prompt: 'Se ela tivesse pedido desculpas, tudo estaria bem.', answers: ['If she had apologized, everything would be fine.', "If she'd apologised, everything would be okay now."] },
          { prompt: 'Ele nos informou que as vagas já tinham sido preenchidas.', answers: ['He informed us that the positions had already been filled.', 'He told us that the vacancies had already been taken.'] },
          { prompt: 'É necessário que os dados sejam tratados com sigilo.', answers: ['It is necessary that the data be handled confidentially.', 'It is essential that data be handled with discretion.'] },
          { prompt: 'Nós nunca tínhamos visto algo tão impressionante.', answers: ["We had never seen anything so impressive.", "We'd never seen anything that impressive before."] },
        ],
      },
      {
        sentences: [
          { prompt: 'A pesquisa estava sendo conduzida por uma universidade famosa.', answers: ['The research was being conducted by a famous university.', 'The study was being carried out by a renowned university.'] },
          { prompt: 'Se você não tivesse interrompido, ele teria terminado.', answers: ['If you had not interrupted, he would have finished.', "If you hadn't interrupted him, he would've finished."] },
          { prompt: 'Ela explicou que havia chegado tarde por causa do trânsito.', answers: ['She explained that she had arrived late because of the traffic.', 'She said she had been late due to traffic.'] },
          { prompt: 'O diretor recomendou que o processo fosse simplificado.', answers: ['The director recommended that the process be simplified.', 'The director suggested that the process should be simplified.'] },
          { prompt: 'Ele ainda não havia percebido o que havia acontecido.', answers: ['He had not yet realized what had happened.', "He still hadn't realized what had happened."] },
        ],
      },
      {
        sentences: [
          { prompt: 'O acordo será implementado a partir do próximo mês.', answers: ['The agreement will be implemented from next month.', 'The agreement will be implemented starting next month.', 'The deal will be put into effect from next month.', 'The deal will take effect starting next month.'] },
          { prompt: 'Se ela soubesse que ele estava lá, teria ido.', answers: ['If she had known he was there, she would have gone.', "If she'd known he was there, she would've gone."] },
          { prompt: 'Ele nos disse que a empresa havia sido vendida.', answers: ['He told us that the company had been sold.', 'He said that the company had been sold.'] },
          { prompt: 'É imperativo que toda a equipe seja informada.', answers: ['It is imperative that the whole team be informed.', 'It is imperative that the entire team be notified.'] },
          { prompt: 'Eles tinham viajado mais de vinte horas quando chegaram.', answers: ['They had been travelling for more than twenty hours when they arrived.', 'They had been traveling for more than twenty hours when they arrived.', 'They had travelled over twenty hours by the time they arrived.', 'They had traveled over twenty hours by the time they arrived.'] },
        ],
      },
    ],
  },

  {
    id: 'var-en-3', stage: 'Variados', language: 'en', order: 3,
    title: 'Fluente no Mundo Real',
    subtitle: 'Expressões idiomáticas e conversação real',
    theory: `## Inglês real — o que nativos de fato dizem

A linguagem do dia a dia é muito mais cheia de atalhos, gírias e expressões informais do que o inglês "de livro didático".

## Dicas de conversação natural

• **Contrações**: I'm, we're, they've, I'd, she'll — usadas o tempo todo na fala, mesmo em frases formais.
• **Reduções comuns**: gonna (going to), wanna (want to), gotta (got to) — só na fala/registro bem informal, nunca em textos formais.
• **Hedges** (suavizadores): kind of, sort of, a bit, pretty (bastante), rather — "I kind of agree." (Eu meio que concordo.)
• **Fillers** (palavras de preenchimento): you know, I mean, like, actually, basically — "I mean, it's complicated." (Quer dizer, é complicado.)
• **Confirmação**: right?, you know?, doesn't it? — "It's cold today, isn't it?" (Está frio hoje, não é?)
• **Discordância educada**: "That's a good point, but..." / "I see what you mean, however..."

## Expressões e phrasal verbs de alto uso

hang out (sair/curtir), chill out (relaxar), figure out (descobrir/entender), work out (dar certo/se exercitar), sort out (resolver), catch up (colocar o papo em dia), move on (seguir em frente), show up (aparecer), end up (acabar/terminar de algum jeito), wrap up (encerrar), nail it / kill it / ace it (arrasar), bomb it (fracassar feio), be into (gostar muito de), be up to (estar fazendo/tramando), be down for (estar a fim de).

Exemplos em contexto:
• "She nailed the interview." (Ela arrasou na entrevista.)
• "Let's catch up soon!" (Vamos colocar o papo em dia em breve!)
• "I'm not really into horror movies." (Eu não sou muito fã de filmes de terror.)

⚠️ Reduções como "gonna", "wanna" e "gotta" NÃO devem ser usadas em textos escritos formais (e-mails de trabalho, redações, documentos) — são apenas para fala e mensagens bem informais.

⚠️ Cuidado ao usar "like" como filler em excesso — embora comum entre nativos jovens, pode soar pouco profissional em contextos de trabalho.

💡 A melhor forma de absorver esse inglês "real" é assistindo a séries, podcasts e conversas naturais — preste atenção em como as contrações e gírias aparecem no contexto, não apenas na tradução isolada.`,
    exercises: [
      {
        sentences: [
          { prompt: 'Vamos sair pra dar uma volta hoje à tarde?', answers: ["Do you wanna hang out this afternoon?", 'Do you want to hang out this afternoon?', 'Shall we hang out later today?'] },
          { prompt: 'Ele arrasou na apresentação!', answers: ['He nailed the presentation!', 'He killed it in the presentation!', 'He aced the presentation!'] },
          { prompt: 'Temos que resolver isso logo.', answers: ['We need to sort this out soon.', 'We have to figure this out quickly.', "We've got to sort this out."] },
          { prompt: 'Ela acabou se tornando médica.', answers: ['She ended up becoming a doctor.', 'She ended up as a doctor.'] },
          { prompt: 'Que que você está aprontando?', answers: ["What are you up to?", 'What are you doing?'] },
        ],
      },
      {
        sentences: [
          { prompt: 'A gente se encontrou pra colocar o papo em dia.', answers: ['We met up to catch up.', 'We got together to catch up.'] },
          { prompt: 'Eu meio que concordo com você.', answers: ['I kind of agree with you.', 'I sort of agree with you.'] },
          { prompt: 'Você topa sair mais tarde?', answers: ['Are you down for going out later?', 'Are you up for going out later?', 'Do you fancy going out later?'] },
          { prompt: 'Ele simplesmente não apareceu.', answers: ["He just didn't show up.", "He simply didn't turn up."] },
          { prompt: 'Vamos encerrar por hoje.', answers: ["Let's wrap up for today.", "Let's call it a day.", "Let's finish up for today."] },
        ],
      },
      {
        sentences: [
          { prompt: 'Preciso descobrir o que está acontecendo.', answers: ["I need to figure out what's going on.", "I need to find out what's happening."] },
          { prompt: 'Ela é louca por música clássica.', answers: ["She's really into classical music.", "She's crazy about classical music.", 'She loves classical music.'] },
          { prompt: 'Relaxa! Não é o fim do mundo.', answers: ["Chill out! It's not the end of the world.", "Relax! It's not a big deal.", "Take it easy! It's not the end of the world."] },
          { prompt: 'Você já ligou pra ela para se desculpar?', answers: ['Have you called her to apologize yet?', 'Did you call her to say sorry?'] },
          { prompt: 'Eu simplesmente não consigo me concentrar hoje.', answers: ["I just can't focus today.", "I really can't concentrate today."] },
        ],
      },
      {
        sentences: [
          { prompt: 'Deu tudo errado na festa.', answers: ['Everything went wrong at the party.', 'The whole party was a disaster.', 'The party totally bombed.'] },
          { prompt: 'É hora de seguir em frente.', answers: ["It's time to move on.", "It's time to get over it and move forward."] },
          { prompt: 'Eles curtiram muito a viagem.', answers: ['They had a great time on the trip.', 'They really enjoyed the trip.', 'They loved the trip.'] },
          { prompt: 'Bate o pé! Você merece isso.', answers: ['Stand your ground! You deserve this.', 'Stick to your guns! You deserve it.'] },
          { prompt: 'Ela está curtindo a vida agora.', answers: ["She's living her best life right now.", "She's really enjoying life right now.", 'She is having the time of her life.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Não levo isso a sério não.', answers: ["I don't take that seriously.", "I don't take it seriously.", "I don't really care about that."] },
          { prompt: 'Isso é exatamente o que eu queria dizer.', answers: ["That's exactly what I meant.", "That's just what I was trying to say."] },
          { prompt: 'Tipo... eu não sei o que fazer.', answers: ["I don't really know what to do.", "I mean, I'm not sure what to do.", "Like, I just don't know what to do."] },
          { prompt: 'Ele vai ter que encarar as consequências.', answers: ["He'll have to face the consequences.", 'He is going to have to deal with the consequences.'] },
          { prompt: 'Olha, pra ser honesto, não me interessa.', answers: ["Look, to be honest, I'm not interested.", "Honestly, it doesn't interest me.", "To be frank, I really don't care."] },
        ],
      },
      {
        sentences: [
          { prompt: 'Consegui o emprego! Mal posso acreditar!', answers: ['I got the job! I can hardly believe it!', "I landed the job! I can't believe it!", 'I got the job! I can barely believe it!'] },
          { prompt: 'Você precisa dar um jeito nisso.', answers: ['You need to sort this out.', 'You need to figure this out.', 'You have to deal with this.'] },
          { prompt: 'Ela está sempre reclamando de tudo.', answers: ["She's always complaining about everything.", "She's always moaning about everything."] },
          { prompt: 'Não tem nada pra fazer aqui.', answers: ["There's nothing to do here.", 'There is nothing to do around here.'] },
          { prompt: 'Você soube das novidades?', answers: ['Have you heard the news?', 'Did you hear the latest?'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Fica tranquilo, eu cuido disso.', answers: ["Don't worry, I'll handle it.", "Relax, I've got this.", "Take it easy, I'll take care of it."] },
          { prompt: 'Ela é muito boa nisso.', answers: ["She's really good at it.", 'She is great at that.'] },
          { prompt: 'Me mandou mensagem quando chegar.', answers: ['Text me when you get there.', 'Send me a message when you arrive.'] },
          { prompt: 'Ele simplesmente entrou sem bater.', answers: ['He just walked in without knocking.', 'He simply came in without knocking.'] },
          { prompt: 'Tô arrasado depois do treino.', answers: ["I'm exhausted after the workout.", "I'm wiped out after training.", "I'm wrecked after the gym."] },
        ],
      },
      {
        sentences: [
          { prompt: 'Você pode me fazer um favor?', answers: ['Can you do me a favour?', 'Could you do me a favor?'] },
          { prompt: 'A gente teve que voltar pra casa andando.', answers: ['We had to walk home.', 'We ended up walking home.'] },
          { prompt: 'Ela é muito intensa às vezes.', answers: ["She's very intense sometimes.", 'She can be a bit much sometimes.', 'She is kind of intense sometimes.'] },
          { prompt: 'Isso foi bem chato, pra falar a verdade.', answers: ['That was pretty dull, if I\'m honest.', 'That was pretty boring, to be honest.', 'Honestly, that was quite dull.'] },
          { prompt: 'Não me lembro onde pus as chaves.', answers: ["I can't remember where I put my keys.", "I don't remember where I left my keys."] },
        ],
      },
      {
        sentences: [
          { prompt: 'Tá, vamos falar de outra coisa.', answers: ["Okay, let's talk about something else.", "Alright, let's change the subject.", "Right, let's move on to something else."] },
          { prompt: 'Não me diga que você esqueceu!', answers: ["Don't tell me you forgot!", "No way, did you really forget?"] },
          { prompt: 'Eu literalmente não consigo parar de rir.', answers: ["I literally can't stop laughing.", "I just can't stop laughing."] },
          { prompt: 'Isso me deixa muito orgulhoso.', answers: ["That makes me really proud.", "I'm so proud of that.", 'That fills me with pride.'] },
          { prompt: 'Você tem que tentar pelo menos uma vez.', answers: ['You have to try at least once.', 'You should at least give it a try.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Que saudade de você!', answers: ["I've missed you so much!", 'I really missed you!'] },
          { prompt: 'Vamos combinar algo pra esse fim de semana.', answers: ["Let's make plans for this weekend.", "Let's arrange something for the weekend."] },
          { prompt: 'Ela se deu conta de que estava errada.', answers: ['She realized she was wrong.', 'She came to realize she was wrong.', 'She realized she had been wrong.'] },
          { prompt: 'Não me leve a mal, mas isso não faz sentido.', answers: ["Don't get me wrong, but this doesn't make sense.", 'No offense, but that doesn\'t make sense.'] },
          { prompt: 'Depende. O que você tem em mente?', answers: ["It depends. What do you have in mind?", 'That depends. What are you thinking?'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Vai fundo! Você consegue.', answers: ['Go for it! You can do it.', 'Go for it! You\'ve got this.', 'Go for it! You got this.'] },
          { prompt: 'Isso me deixou sem palavras.', answers: ['That left me speechless.', 'I was speechless.', 'That blew me away.'] },
          { prompt: 'Ela ficou radiante quando recebeu a notícia.', answers: ['She was over the moon when she got the news.', 'She was thrilled when she heard the news.'] },
          { prompt: 'Vou dar uma passadinha lá depois.', answers: ["I'll swing by later.", "I'll pop in later.", "I'll drop by later."] },
          { prompt: 'Não precisa me agradecer.', answers: ["Don't mention it.", 'No need to thank me.', 'No worries.', 'You\'re welcome.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Preciso de um tempinho pra mim.', answers: ['I need some time for myself.', 'I need some me time.', 'I need a little time to myself.'] },
          { prompt: 'Isso tá me tirando do sério.', answers: ["This is driving me crazy.", "This is getting on my nerves.", 'This is really winding me up.'] },
          { prompt: 'Você acabou de ler minha mente.', answers: ['You just read my mind.', "You've just read my mind!"] },
          { prompt: 'Tô dentro! Me conta tudo.', answers: ["I'm in! Tell me everything.", "Count me in! Tell me all about it."] },
          { prompt: 'Foi sem querer, juro.', answers: ['It was an accident, I swear.', "I didn't mean to, I promise.", "It wasn't on purpose, I swear."] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ele tá na fila errada faz uma hora.', answers: ["He's been in the wrong queue for an hour.", "He's been waiting in the wrong line for an hour."] },
          { prompt: 'Ela estava na lua durante a reunião toda.', answers: ['She was daydreaming throughout the whole meeting.', 'She had her head in the clouds during the entire meeting.'] },
          { prompt: 'Esse trabalho não vale a pena.', answers: ["This job isn't worth it.", "This work isn't worth it."] },
          { prompt: 'Você precisa se virar sozinho às vezes.', answers: ['You need to sort things out on your own sometimes.', 'You have to fend for yourself sometimes.', 'You need to figure things out on your own sometimes.'] },
          { prompt: 'Chegamos exatamente na hora certa.', answers: ['We arrived just in time.', 'We got there right on time.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Você toparia morar no exterior?', answers: ['Would you be up for living abroad?', 'Would you consider living overseas?', 'Are you open to living abroad?'] },
          { prompt: 'Ele levou um susto quando ouviu a notícia.', answers: ['He was shocked when he heard the news.', 'He got a fright when he heard the news.', 'He was taken aback by the news.'] },
          { prompt: 'Consegui ingresso de última hora.', answers: ['I got a last-minute ticket.', 'I managed to get a ticket at the last minute.'] },
          { prompt: 'Você tá me gozando, né?', answers: ['You are pulling my leg, right?', "You're joking, right?", 'Are you kidding me?'] },
          { prompt: 'Deu branco na hora da prova.', answers: ['My mind went blank during the exam.', 'My mind went blank during the test.', 'I drew a blank during the exam.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'É melhor a gente ir logo antes que comece a chover.', answers: ["We'd better go now before it starts raining.", "We should head off before it starts to rain.", "We'd best leave soon before the rain starts."] },
          { prompt: 'Ele ficou na dele durante a festa toda.', answers: ['He kept to himself throughout the whole party.', 'He stayed to himself throughout the whole party.'] },
          { prompt: 'Ela faz tudo parecer fácil.', answers: ['She makes everything look easy.', 'She makes it all seem so effortless.'] },
          { prompt: 'Tô pensando seriamente em largar tudo.', answers: ["I'm seriously thinking about quitting everything.", "I'm seriously considering leaving it all behind."] },
          { prompt: 'Ontem foi um dia de louco.', answers: ['Yesterday was crazy.', 'Yesterday was a mad day.', 'It was a hectic day yesterday.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Que coincidência te encontrar aqui!', answers: ['What a coincidence to see you here!', 'What a small world — seeing you here!', 'Fancy seeing you here!'] },
          { prompt: 'Você me salvou a vida.', answers: ['You saved my life.', "You're a lifesaver.", 'You really saved me there.'] },
          { prompt: 'A gente precisa parar com esse papo e agir.', answers: ["We need to stop talking and start doing.", "We need to stop chatting and take action."] },
          { prompt: 'Ela fica mudando de ideia o tempo todo.', answers: ['She keeps changing her mind.', "She's constantly changing her mind."] },
          { prompt: 'Tô de olho nisso faz um tempo.', answers: ["I've had my eye on that for a while.", "I've been watching that for some time."] },
        ],
      },
      {
        sentences: [
          { prompt: 'Você tá falando sério ou brincando?', answers: ['Are you being serious or joking?', 'Are you serious or just kidding?'] },
          { prompt: 'Junta aí com a gente!', answers: ['Join us!', 'Come and join us!', 'Come hang out with us!'] },
          { prompt: 'Faz tempo que não nos vemos.', answers: ["It's been a while since we've seen each other.", "Long time no see!", "We haven't seen each other in ages."] },
          { prompt: 'Não se preocupa comigo.', answers: ["Don't worry about me.", "Don't mind me."] },
          { prompt: 'Você sempre sabe o que dizer.', answers: ['You always know what to say.', 'You always say the right thing.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Isso não é bem o que eu queria dizer.', answers: ["That's not quite what I meant.", "That's not exactly what I was trying to say."] },
          { prompt: 'Ela sempre dá um jeito de se virar.', answers: ['She always manages to get by.', 'She always finds a way to cope.', 'She always figures it out somehow.'] },
          { prompt: 'Você está no caminho certo.', answers: ["You're on the right track.", 'You are heading in the right direction.'] },
          { prompt: 'Isso não tem nada a ver com o assunto.', answers: ["That has nothing to do with it.", "That's completely beside the point.", "That's irrelevant."] },
          { prompt: 'Ela disse isso sem pensar.', answers: ['She said that without thinking.', 'She blurted it out.', 'She spoke without thinking.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Manda ver! Vai ser ótimo.', answers: ["Go for it! It'll be great.", "Just do it! It's going to be great.", "Go ahead! It'll be awesome."] },
          { prompt: 'Me conta mais sobre isso.', answers: ['Tell me more about it.', "I'd love to hear more.", 'Go on, tell me more.'] },
          { prompt: 'Você tem razão, faz sentido.', answers: ["You're right, that makes sense.", 'You have a point, it does make sense.'] },
          { prompt: 'Eu deveria ter te escutado.', answers: ['I should have listened to you.', "I should've taken your advice."] },
          { prompt: 'Tá, mas e aí? O que você vai fazer?', answers: ["Okay, so what are you going to do?", "Right, so what's next?", "Alright, so what's your plan?"] },
        ],
      },
      {
        sentences: [
          { prompt: 'Isso foi a melhor decisão que já tomei.', answers: ["That was the best decision I've ever made.", "That was the greatest choice I've ever made."] },
          { prompt: 'Nem me fala sobre isso.', answers: ["Don't even get me started on that.", "Don't even mention it.", 'Don\'t even go there.'] },
          { prompt: 'Ela foi longe demais dessa vez.', answers: ['She went too far this time.', 'She crossed the line this time.'] },
          { prompt: 'Já que você perguntou, vou ser honesto.', answers: ["Since you asked, I'll be honest.", 'Since you brought it up, let me be straight with you.'] },
          { prompt: 'Nada que um bom sono não resolva.', answers: ["Nothing a good night's sleep won't fix.", "A good night's sleep will fix that."] },
        ],
      },
    ],
  },

];
