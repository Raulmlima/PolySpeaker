export const MODULES_PT_PART2 = [
  // ── INTERMEDIÁRIO ─────────────────────────────────────────────────────────

  {
    id: 'int-pt-1',
    language: 'pt',
    stage: 'Intermediário',
    title: 'Present Subjunctive',
    subtitle: 'Express wishes, doubts and emotions with the present subjunctive',
    theory: `The **present subjunctive** (subjuntivo presente) is used after verbs and expressions that express wish, emotion, doubt, or necessity. In English, constructions like "I hope that," "I want you to," and "It's important that" trigger the subjunctive in Portuguese — even though English itself barely marks this mood anymore.

## When to use the subjunctive

| English trigger           | Portuguese trigger          |
|---------------------------|-----------------------------|
| I hope that…              | Espero que…                 |
| I want you to…            | Quero que você…             |
| It's important that…      | É importante que…           |
| It's necessary that…      | É necessário que…           |
| I doubt that…             | Duvido que…                 |
| I'm afraid that…          | Tenho medo que…             |
| Maybe / Perhaps…          | Talvez…                     |

## Conjugation — regular verbs

| Pronoun    | falar (speak) | comer (eat) | partir (leave) |
|------------|-----------|-----------|-----------|
| eu         | fale      | coma      | parta     |
| você/ele/ela | fale    | coma      | parta     |
| nós        | falemos   | comamos   | partamos  |
| vocês/eles | falem     | comam     | partam    |

## Common irregular verbs

| Infinitive | eu (subj.) | você (subj.) |
|------------|------------|--------------|
| ser (to be)        | seja       | seja         |
| estar (to be)      | esteja     | esteja       |
| ter (to have)      | tenha      | tenha        |
| ir (to go)         | vá         | vá           |
| fazer (to do/make) | faça       | faça         |
| poder (can)        | possa      | possa        |
| saber (to know)    | saiba      | saiba        |
| querer (to want)   | queira     | queira       |

## More examples

- Espero que você esteja bem. (I hope you are well.)
- Quero que você venha à festa. (I want you to come to the party.)
- Talvez ele saiba a resposta. (Maybe he knows the answer.)
- É necessário que todos participem. (It's necessary that everyone participates.)
- Duvido que isso seja verdade. (I doubt that's true.)

## Indicative vs. subjunctive

The same verb form changes meaning depending on certainty:

| Indicative (fact)                  | Subjunctive (wish/doubt)              |
|-------------------------------------|----------------------------------------|
| Eu sei que ele **vem**. (I know he is coming.) | Espero que ele **venha**. (I hope he comes.) |
| Ele **diz** a verdade. (He tells the truth.)   | Duvido que ele **diga** a verdade. (I doubt he tells the truth.) |

⚠️ **Common mistakes**
- Do not use the indicative after "que" when the main clause expresses doubt, wish, or emotion — "Espero que ele vem" is wrong; it must be "Espero que ele **venha**."
- "Talvez" almost always takes the subjunctive in careful speech: "Talvez ele **vá**" (not "vai"), though colloquial speech sometimes mixes both.
- Don't confuse the subjunctive with the future subjunctive (used after "quando," "se," "assim que") — they look similar for many verbs but are a separate tense covered in its own module.

💡 **Tip:** To form the present subjunctive of most verbs, take the **eu** form of the present indicative, drop the final "-o," and add the subjunctive ending: falo → fal- → fale; faço → faç- → faça. This shortcut works for the vast majority of irregular verbs too.

## Key vocabulary

• estudar — to study
• vir — to come
• chegar — to arrive
• participar — to participate
• cometer um erro — to make a mistake
• assinar — to sign
• a verdade — the truth
• a resposta — the answer
• a festa — the party
• comunicar-se — to communicate
• tarde — late
• ter razão — to be right`,
    exercises: [{ sentences: [
      { prompt: 'I hope that you are well.', answers: ['Espero que você esteja bem.', 'Espero que você esteja bem!'] },
      { prompt: 'I want you to come to the party.', answers: ['Quero que você venha à festa.', 'Eu quero que você venha à festa.'] },
      { prompt: "It's important that he studies every day.", answers: ['É importante que ele estude todos os dias.', 'É importante que ele estude todo dia.'] },
      { prompt: 'She hopes that it does not rain.', answers: ['Ela espera que não chova.', 'Ela torce para não chover.'] },
      { prompt: 'Maybe he knows the answer.', answers: ['Talvez ele saiba a resposta.', 'Pode ser que ele saiba a resposta.'] },
      { prompt: 'I doubt that she is right.', answers: ['Duvido que ela esteja certa.', 'Duvido que ela tenha razão.'] },
      { prompt: "It's necessary that we leave now.", answers: ['É necessário que saiamos agora.', 'É necessário que a gente saia agora.'] },
      { prompt: 'I want him to be happy.', answers: ['Quero que ele seja feliz.', 'Eu quero que ele seja feliz.'] },
      { prompt: "It's possible that they arrive late.", answers: ['É possível que eles cheguem tarde.', 'É possível que eles cheguem atrasados.'] },
      { prompt: 'I hope that you can come.', answers: ['Espero que você possa vir.', 'Espero que você consiga vir.'] },
      { prompt: "I'm afraid that he makes a mistake.", answers: ['Tenho medo que ele cometa um erro.', 'Tenho medo de que ele erre.'] },
      { prompt: "It's strange that she does not know.", answers: ['É estranho que ela não saiba.', 'É esquisito que ela não saiba.'] },
      { prompt: 'We need you to sign this document.', answers: ['Precisamos que você assine este documento.', 'Precisamos que você assine esse documento.'] },
      { prompt: 'Maybe the store is open today.', answers: ['Talvez a loja esteja aberta hoje.', 'Pode ser que a loja esteja aberta hoje.'] },
      { prompt: "It's good that you know the truth.", answers: ['É bom que você saiba a verdade.', 'Que bom que você saiba a verdade.'] },
      { prompt: 'I hope that everything goes well.', answers: ['Espero que tudo corra bem.', 'Espero que tudo dê certo.'] },
      { prompt: "It's a shame that he cannot come.", answers: ['É uma pena que ele não possa vir.', 'Que pena que ele não possa vir.'] },
      { prompt: 'I want you to be honest with me.', answers: ['Quero que você seja honesto comigo.', 'Quero que você seja honesta comigo.'] },
      { prompt: 'Perhaps she has already left.', answers: ['Talvez ela já tenha saído.', 'Talvez ela já foi embora.'] },
      { prompt: "It's important that the team communicates well.", answers: ['É importante que a equipe se comunique bem.', 'É importante que o time se comunique bem.'] },
    ]}],
  },

  {
    id: 'int-pt-2',
    language: 'pt',
    stage: 'Intermediário',
    title: 'Object Pronouns',
    subtitle: 'Learn to use me, lhe, o, a, nos and their position in the sentence',
    theory: `**Object pronouns** (pronomes oblíquos) replace direct and indirect objects in a sentence. Their form and position both depend on context — this is one of the trickier areas for English speakers, since Portuguese pronoun placement has no direct English equivalent.

## Unstressed object pronouns

| Subject pronoun | Direct object | Indirect object |
|-----------------|-------------|---------------|
| eu (I)              | me          | me            |
| você / ele / ela (you/he/she) | o / a      | lhe           |
| nós (we)             | nos         | nos           |
| vocês / eles / elas (you all/they) | os / as | lhes          |

## Pronoun position

| Position       | When to use it                              | Example                         |
|---------------|------------------------------------------|---------------------------------|
| Proclisis (before the verb)      | After "attractor" words (não, que, quem, se…)   | Não **me** diga isso. (Don't tell me that.)           |
| Enclisis (after the verb, with hyphen)       | Standard in formal written Portuguese           | Diga-**me** isso. (Tell me that.)              |
| Colloquial Brazilian Portuguese| Pronoun before the verb (very common in speech)     | Me diz isso. / Te amo. (Tell me that. / I love you.)          |

💡 **Tip:** In spoken Brazilian Portuguese, proclisis is used constantly even without an "attractor" word. "Me liga mais tarde" (Call me later) sounds completely natural in everyday speech, while the formal "Ligue-me mais tarde" feels stiff and bookish.

## Preposition + pronoun contractions

| Preposition + pronoun | Contracted form |
|----------------------|-----------------|
| a + o                | ao              |
| de + o               | do              |
| em + o               | no              |
| por + o              | pelo            |

## More examples

- Ele me chamou ontem. (He called me yesterday.)
- Vou te ajudar com isso. (I'll help you with that.)
- Ela lhe enviou uma carta. (She sent him/her a letter.)
- Nós os vimos no parque. (We saw them in the park.)

⚠️ **Common mistakes**
- In spoken Brazilian Portuguese, "ele/ela" often replaces "o/a" as a direct object: "Eu vi ele" instead of the formal "Eu o vi." Both are understood, but only the second is considered grammatically correct in writing.
- "Lhe" is an indirect object pronoun and should not be used as a direct object: "Eu lhe vi" is wrong for "I saw him" — use "Eu o vi" or, colloquially, "Eu vi ele."
- Don't forget the hyphen in enclisis: "diga-me," not "digame."

## Key vocabulary

• ligar — to call
• ajudar — to help
• mandar / enviar — to send
• convidar — to invite
• explicar — to explain
• mostrar — to show
• pedir — to ask for
• ensinar — to teach
• beijar — to kiss
• esperar — to wait
• o presente — the gift
• o evento — the event`,
    exercises: [{ sentences: [
      { prompt: 'He called me yesterday.', answers: ['Ele me ligou ontem.', 'Ele ligou para mim ontem.'] },
      { prompt: 'I love her very much.', answers: ['Eu amo ela muito.', 'Eu a amo muito.'] },
      { prompt: 'She told him the truth.', answers: ['Ela disse a verdade pra ele.', 'Ela lhe disse a verdade.'] },
      { prompt: 'Can you help me?', answers: ['Você pode me ajudar?', 'Você me ajuda?'] },
      { prompt: 'I will send them the message.', answers: ['Vou mandar a mensagem pra eles.', 'Vou lhes enviar a mensagem.'] },
      { prompt: 'She did not see us at the event.', answers: ['Ela não nos viu no evento.', 'Ela não viu a gente no evento.'] },
      { prompt: 'He gave her a gift.', answers: ['Ele deu um presente pra ela.', 'Ele lhe deu um presente.'] },
      { prompt: 'Please tell me what happened.', answers: ['Me diz o que aconteceu.', 'Diga-me o que aconteceu.', 'Me conta o que aconteceu.'] },
      { prompt: 'I know him well.', answers: ['Eu conheço ele bem.', 'Eu o conheço bem.'] },
      { prompt: 'They invited us to dinner.', answers: ['Eles nos convidaram para jantar.', 'Eles convidaram a gente pra jantar.'] },
      { prompt: 'She explained it to me clearly.', answers: ['Ela me explicou claramente.', 'Ela me explicou direitinho.'] },
      { prompt: 'I will call you tomorrow.', answers: ['Vou te ligar amanhã.', 'Te ligo amanhã.'] },
      { prompt: 'He showed them the photos.', answers: ['Ele mostrou as fotos pra eles.', 'Ele lhes mostrou as fotos.'] },
      { prompt: 'Please help us.', answers: ['Nos ajude, por favor.', 'Me ajuda, por favor.', 'Por favor, nos ajude.'] },
      { prompt: 'I saw her at the mall.', answers: ['Eu vi ela no shopping.', 'Eu a vi no shopping.'] },
      { prompt: 'Can you teach me Portuguese?', answers: ['Você pode me ensinar português?', 'Você me ensina português?'] },
      { prompt: 'He asked me for money.', answers: ['Ele me pediu dinheiro.', 'Ele pediu dinheiro pra mim.'] },
      { prompt: 'I will write to you soon.', answers: ['Vou te escrever em breve.', 'Te escrevo logo.'] },
      { prompt: 'She kissed him on the cheek.', answers: ['Ela beijou ele na bochecha.', 'Ela o beijou na bochecha.'] },
      { prompt: 'They told us to wait.', answers: ['Eles nos disseram para esperar.', 'Eles mandaram a gente esperar.'] },
    ]}],
  },

  {
    id: 'int-pt-3',
    language: 'pt',
    stage: 'Intermediário',
    title: 'Passive Voice',
    subtitle: 'Build passive voice sentences with ser and estar',
    theory: `The **passive voice** (voz passiva) in Portuguese is used when the focus is on the object of an action rather than on who performs it. It is formed with the auxiliary verbs **ser** or **estar** + past participle — similar to English "is done" / "is being done."

## Passive with SER (completed action / result)

| Tense     | Structure                        | Example                            |
|------------------|----------------------------------|------------------------------------|
| Present         | é / são + participle             | O livro **é vendido** aqui. (The book is sold here.)        |
| Preterite  | foi / foram + participle         | A casa **foi construída** em 1980. (The house was built in 1980.) |
| Imperfect   | era / eram + participle          | O filme **era exibido** semanalmente. (The film used to be shown weekly.) |
| Future           | será / serão + participle        | O relatório **será enviado** amanhã. (The report will be sent tomorrow.) |

## Passive with ESTAR (action in progress)

| Tense     | Structure                        | Example                              |
|------------------|----------------------------------|--------------------------------------|
| Present         | está / estão + sendo + participle     | O prédio **está sendo construído**. (The building is being built.)  |
| Preterite        | estava / estavam + sendo + participle | A reunião **estava sendo gravada**. (The meeting was being recorded.)  |

## The agent of the passive

Introduced by the preposition **por** (by):

- A carta foi escrita **por** ela. (The letter was written by her.)
- O projeto foi aprovado **pela** diretoria. (The project was approved by the board.)

## Participle agreement

The participle agrees in gender and number with the subject — unlike English, where the participle never changes form:

| Subject           | Participle      |
|-------------------|-----------------|
| o livro (the book, masc.)           | vendido         |
| a carta (the letter, fem.)           | vendida         |
| os livros (the books, masc. pl.)         | vendidos        |
| as cartas (the letters, fem. pl.)         | vendidas        |

## Active vs. passive

| Active                              | Passive                                  |
|--------------------------------------|--------------------------------------------|
| A polícia prendeu o ladrão. (The police arrested the thief.) | O ladrão foi preso pela polícia. (The thief was arrested by the police.) |
| O professor corrige a prova. (The teacher corrects the exam.) | A prova é corrigida pelo professor. (The exam is corrected by the teacher.) |

⚠️ **Common mistakes**
- Forgetting participle agreement: "A casa foi construíd**o**" is wrong — it must be "construíd**a**" because "casa" is feminine.
- Confusing "ser" (completed/habitual passive) with "estar" (action in progress): "O prédio é construído" states a general fact, while "O prédio está sendo construído" describes what is happening right now.
- Overusing the passive voice: spoken Brazilian Portuguese strongly prefers active constructions or the impersonal "se," e.g. "Fala-se português no Brasil" rather than "O português é falado no Brasil."

💡 **Tip:** When the agent of the action is unknown or unimportant, Portuguese often uses an impersonal "se" construction instead of the passive — "Vende-se livros aqui" sounds more natural in everyday speech than "Livros são vendidos aqui."

## Key vocabulary

• construir — to build
• reformar — to renovate
• assinar — to sign
• anunciar — to announce
• aprovar — to approve
• prender — to arrest
• traduzir — to translate
• cancelar — to cancel
• resolver — to solve
• entregar — to deliver
• gravar — to record
• inaugurar — to inaugurate`,
    exercises: [{ sentences: [
      { prompt: 'The bridge was built in 1950.', answers: ['A ponte foi construída em 1950.', 'A ponte foi construída no ano de 1950.'] },
      { prompt: 'The house is being renovated.', answers: ['A casa está sendo reformada.', 'A casa está sendo renovada.'] },
      { prompt: 'The letter was written by my mother.', answers: ['A carta foi escrita pela minha mãe.', 'A carta foi escrita por minha mãe.'] },
      { prompt: 'The results will be announced tomorrow.', answers: ['Os resultados serão anunciados amanhã.', 'Os resultados vão ser anunciados amanhã.'] },
      { prompt: 'The documents are being signed.', answers: ['Os documentos estão sendo assinados.', 'Estão assinando os documentos.'] },
      { prompt: 'The cake was eaten by the children.', answers: ['O bolo foi comido pelas crianças.', 'O bolo foi comido pelos filhos.'] },
      { prompt: 'The project was approved by the board.', answers: ['O projeto foi aprovado pela diretoria.', 'O projeto foi aprovado pelo conselho.'] },
      { prompt: 'The food is being prepared.', answers: ['A comida está sendo preparada.', 'A comida está sendo feita.'] },
      { prompt: 'Portuguese is spoken in Brazil.', answers: ['O português é falado no Brasil.', 'Fala-se português no Brasil.'] },
      { prompt: 'The thief was arrested by the police.', answers: ['O ladrão foi preso pela polícia.', 'O bandido foi preso pela polícia.'] },
      { prompt: 'The book was translated into English.', answers: ['O livro foi traduzido para o inglês.', 'O livro foi traduzido para inglês.'] },
      { prompt: 'The meeting was canceled.', answers: ['A reunião foi cancelada.', 'A reunião foi desmarcada.'] },
      { prompt: 'The problem is being solved.', answers: ['O problema está sendo resolvido.', 'O problema tá sendo resolvido.'] },
      { prompt: 'The song was recorded in Rio.', answers: ['A música foi gravada no Rio.', 'A canção foi gravada no Rio de Janeiro.'] },
      { prompt: 'The child was taken to the hospital.', answers: ['A criança foi levada ao hospital.', 'A criança foi levada para o hospital.'] },
      { prompt: 'The new law was signed by the president.', answers: ['A nova lei foi assinada pelo presidente.', 'A nova lei foi sancionada pelo presidente.'] },
      { prompt: 'The packages are being delivered.', answers: ['Os pacotes estão sendo entregues.', 'As encomendas estão sendo entregues.'] },
      { prompt: 'The suspect was questioned by detectives.', answers: ['O suspeito foi interrogado pelos detetives.', 'O suspeito foi questionado pelos detetives.'] },
      { prompt: 'The exam will be corrected by the teacher.', answers: ['A prova será corrigida pelo professor.', 'A prova vai ser corrigida pelo professor.'] },
      { prompt: 'The stadium was inaugurated last year.', answers: ['O estádio foi inaugurado no ano passado.', 'O estádio abriu no ano passado.'] },
    ]}],
  },

  {
    id: 'int-pt-4',
    language: 'pt',
    stage: 'Intermediário',
    title: 'Reported Speech',
    subtitle: 'Report what someone said using reported speech',
    theory: `**Reported speech** (discurso indireto) is used to relate what someone else said without quoting their exact words. In Portuguese, it's introduced by verbs like **dizer** (to say), **perguntar** (to ask), **responder** (to answer), **afirmar** (to state), and **contar** (to tell).

## Common introductory verbs

| English         | Portuguese             |
|----------------|-----------------------|
| said (that)    | disse que             |
| told (that)    | disse (para alguém) que / contou que |
| asked (if)     | perguntou se          |
| asked (to)     | pediu para            |
| answered that  | respondeu que         |
| explained that | explicou que          |
| thought that   | achou que / pensou que|

## Verb tense shifts in reported speech

| Direct speech          | Reported speech             |
|--------------------------|-------------------------------|
| present → "I work"      | imperfect → disse que trabalhava (said that he worked) |
| preterite → "I worked"   | past perfect → disse que tinha trabalhado (said that he had worked) |
| future → "I will go"     | conditional → disse que iria / disse que ia (said that he would go) |

💡 **Tip:** In colloquial spoken Brazilian Portuguese, it is very common to keep the original tense instead of shifting it: "Ele disse que **vai** lá amanhã" is used just as often as the formally "correct" "Ele disse que **iria** lá no dia seguinte."

## Pronoun and adverb shifts

| Direct       | Reported         |
|--------------|------------------|
| I / me       | ele / ela / o / a (he/she/him/her) |
| here         | lá / ali (there) |
| now          | então / naquele momento (then / at that moment) |
| today        | naquele dia (that day) |
| tomorrow     | no dia seguinte (the next day) |

## More examples

- Ele disse que estava cansado. (He said that he was tired.)
- Ela perguntou se eu tinha comido. (She asked if I had eaten.)
- Eles explicaram que o preço tinha mudado. (They explained that the price had changed.)
- Ele me pediu para fechar a porta. (He asked me to close the door.)

⚠️ **Common mistakes**
- Forgetting to shift "se" (if) into questions reported with "perguntar": "Ela perguntou que eu tinha comido" is wrong — it must be "Ela perguntou **se** eu tinha comido."
- Using "pediu que" with the indicative instead of the subjunctive: requests reported with "pedir que" need the subjunctive, e.g. "Ele pediu que eu **fechasse** a porta," not "fechei."
- Mixing up "disse que" (statement) with "disse para" (command/request) — "Ele disse que eu fechasse a porta" sounds odd; the natural form is "Ele disse **para** eu fechar a porta" or "Ele pediu que eu fechasse a porta."

## Key vocabulary

• cansado — tired
• comer — to eat
• fechar — to close
• ligar — to call
• esquecer — to forget
• morar — to live (reside)
• preocupar-se — to worry
• mudar — to change
• chover — to rain
• o preço — the price
• o restaurante — the restaurant
• o trabalho — the work`,
    exercises: [{ sentences: [
      { prompt: 'He said that he was tired.', answers: ['Ele disse que estava cansado.', 'Ele falou que estava cansado.'] },
      { prompt: 'She asked if I had eaten.', answers: ['Ela perguntou se eu tinha comido.', 'Ela perguntou se eu havia comido.'] },
      { prompt: 'They told us that the meeting was canceled.', answers: ['Eles nos disseram que a reunião foi cancelada.', 'Eles falaram que a reunião tinha sido cancelada.'] },
      { prompt: 'He asked me to close the door.', answers: ['Ele me pediu para fechar a porta.', 'Ele pediu para eu fechar a porta.'] },
      { prompt: 'She said that she would call later.', answers: ['Ela disse que ligaria mais tarde.', 'Ela falou que ia ligar mais tarde.'] },
      { prompt: 'He answered that he did not know.', answers: ['Ele respondeu que não sabia.', 'Ele falou que não sabia.'] },
      { prompt: 'She asked where I lived.', answers: ['Ela perguntou onde eu morava.', 'Ela perguntou onde eu morei.'] },
      { prompt: 'He explained that the store was closed.', answers: ['Ele explicou que a loja estava fechada.', 'Ele disse que a loja tava fechada.'] },
      { prompt: 'They said that they were hungry.', answers: ['Eles disseram que estavam com fome.', 'Eles falaram que tavam com fome.'] },
      { prompt: 'She told me that she had already left.', answers: ['Ela me disse que já tinha saído.', 'Ela me falou que já tinha ido embora.'] },
      { prompt: 'He asked if I could help him.', answers: ['Ele perguntou se eu podia ajudá-lo.', 'Ele perguntou se eu conseguia ajudar ele.'] },
      { prompt: 'She said that she loved the city.', answers: ['Ela disse que amava a cidade.', 'Ela falou que amava a cidade.'] },
      { prompt: 'He told her not to worry.', answers: ['Ele disse a ela para não se preocupar.', 'Ele falou pra ela não se preocupar.'] },
      { prompt: 'They asked when the event would start.', answers: ['Eles perguntaram quando o evento começaria.', 'Eles perguntaram quando o evento ia começar.'] },
      { prompt: 'She said that she had forgotten the book.', answers: ['Ela disse que tinha esquecido o livro.', 'Ela falou que esqueceu o livro.'] },
      { prompt: 'He asked me where I was going.', answers: ['Ele me perguntou para onde eu ia.', 'Ele perguntou pra onde eu tava indo.'] },
      { prompt: 'She told me that it was raining outside.', answers: ['Ela me disse que estava chovendo lá fora.', 'Ela falou que tava chovendo do lado de fora.'] },
      { prompt: 'He said that he would finish the work.', answers: ['Ele disse que terminaria o trabalho.', 'Ele falou que ia terminar o trabalho.'] },
      { prompt: 'She asked if the restaurant was open.', answers: ['Ela perguntou se o restaurante estava aberto.', 'Ela perguntou se o restaurante tava aberto.'] },
      { prompt: 'They explained that the price had changed.', answers: ['Eles explicaram que o preço tinha mudado.', 'Eles falaram que o preço mudou.'] },
    ]}],
  },

  {
    id: 'int-pt-5',
    language: 'pt',
    stage: 'Intermediário',
    title: 'Connectives and Conjunctions',
    subtitle: 'Use connectives to give your sentences flow and cohesion',
    theory: `**Connectives and conjunctions** (conectivos e conjunções) are words or expressions that link clauses and organize discourse. They're essential for building coherent, fluent texts in Portuguese.

## Main connectives and their English equivalents

### Contrast and concession

| English        | Portuguese                       |
|---------------|---------------------------------|
| although      | embora (+ subjunctive) / apesar de |
| even though   | mesmo que / ainda que           |
| however       | porém / no entanto / entretanto |
| but           | mas                             |
| despite       | apesar de                       |
| on the other hand | por outro lado              |

### Cause and consequence

| English        | Portuguese                       |
|---------------|---------------------------------|
| because       | porque / pois                   |
| therefore     | portanto / por isso / logo      |
| so            | então / por isso                |
| since         | já que / visto que              |
| as a result   | como resultado / consequentemente |

### Condition

| English        | Portuguese                       |
|---------------|---------------------------------|
| unless        | a menos que / a não ser que     |
| if            | se                              |
| provided that | desde que / contanto que        |
| in case       | caso / no caso de               |

### Addition and sequence

| English        | Portuguese                       |
|---------------|---------------------------------|
| furthermore   | além disso / ademais            |
| in addition   | além de / adicionalmente        |
| first / then  | primeiro / depois / em seguida  |
| finally       | por fim / finalmente            |

## More examples

- Embora fosse tarde, ela continuou trabalhando. (Although it was late, she kept working.)
- Vou, a menos que chova. (I will go unless it rains.)
- Ela estudou muito; portanto, passou. (She studied a lot; therefore, she passed.)
- Apesar do frio, eles foram à praia. (Despite the cold, they went to the beach.)

⚠️ **Common mistakes**
- "Embora," "mesmo que," and "ainda que" all require the **subjunctive**: "Embora ele **seja** rico, é humilde" — never "é rico" in that clause.
- "Porque" (because, used to answer "why") is one word and unstressed; "por que" (why, two words) is used in questions. Don't confuse the two when writing.
- "Apesar de" is followed by a noun or infinitive ("apesar do frio," "apesar de chover"), while "embora" is followed by a full clause with a conjugated subjunctive verb ("embora chova"). Mixing the two structures up is a very common error.

💡 **Tip:** "Pois" can mean either "because" (causal, placed mid-sentence) or "well/so" (discourse marker) depending on position — "Não fui, pois estava doente" (I didn't go, because I was sick) versus the more formal sentence-initial "Pois bem, vamos continuar" (Well then, let's continue).`,
    exercises: [{ sentences: [
      { prompt: 'Although it was late, she kept working.', answers: ['Embora fosse tarde, ela continuou trabalhando.', 'Mesmo sendo tarde, ela continuou trabalhando.'] },
      { prompt: 'I will go unless it rains.', answers: ['Vou, a menos que chova.', 'Vou, a não ser que chova.'] },
      { prompt: 'He is smart; however, he is lazy.', answers: ['Ele é inteligente; porém, é preguiçoso.', 'Ele é inteligente, mas é preguiçoso.'] },
      { prompt: 'She studied a lot; therefore, she passed.', answers: ['Ela estudou muito; portanto, passou.', 'Ela estudou muito, por isso passou.'] },
      { prompt: 'Even though he was sick, he came to work.', answers: ['Mesmo estando doente, ele veio trabalhar.', 'Mesmo que estivesse doente, ele veio trabalhar.'] },
      { prompt: "I will help you provided that you try.", answers: ['Vou te ajudar desde que você tente.', 'Te ajudo, contanto que você tente.'] },
      { prompt: 'She is talented; furthermore, she works hard.', answers: ['Ela é talentosa; além disso, trabalha duro.', 'Ela é talentosa e além disso é muito dedicada.'] },
      { prompt: 'We did not go because it was raining.', answers: ['Não fomos porque estava chovendo.', 'Não fomos pois estava chovendo.'] },
      { prompt: 'Despite the cold, they went to the beach.', answers: ['Apesar do frio, eles foram à praia.', 'Apesar do frio, foram para a praia.'] },
      { prompt: "I will call you in case you need help.", answers: ['Vou te ligar caso precise de ajuda.', 'Te ligo caso você precise de ajuda.'] },
      { prompt: 'He arrived early; on the other hand, she was late.', answers: ['Ele chegou cedo; por outro lado, ela se atrasou.', 'Ele chegou cedo; já ela se atrasou.'] },
      { prompt: 'Since you are here, let us start the meeting.', answers: ['Já que você está aqui, vamos começar a reunião.', 'Visto que você está aqui, podemos começar.'] },
      { prompt: 'First, read the instructions; then, fill out the form.', answers: ['Primeiro, leia as instruções; depois, preencha o formulário.', 'Primeiro leia as instruções, em seguida preencha o formulário.'] },
      { prompt: 'She did not come; as a result, we postponed the event.', answers: ['Ela não veio; como resultado, adiamos o evento.', 'Ela não veio, então adiamos o evento.'] },
      { prompt: 'Unless you work harder, you will not succeed.', answers: ['A menos que você trabalhe mais, não vai conseguir.', 'Se você não trabalhar mais, não vai ter sucesso.'] },
      { prompt: 'Although the price is high, the quality is worth it.', answers: ['Embora o preço seja alto, a qualidade vale a pena.', 'Apesar de o preço ser alto, a qualidade vale a pena.'] },
      { prompt: 'He is kind; in addition, he is very generous.', answers: ['Ele é gentil; além disso, é muito generoso.', 'Ele é gentil e, além disso, é generoso.'] },
      { prompt: 'She ran fast; however, she missed the bus.', answers: ['Ela correu rápido; porém, perdeu o ônibus.', 'Ela correu rápido, mas perdeu o ônibus.'] },
      { prompt: 'Finally, we found the solution.', answers: ['Finalmente, encontramos a solução.', 'Por fim, encontramos a solução.'] },
      { prompt: 'I will go provided that you come with me.', answers: ['Vou, desde que você venha comigo.', 'Vou, contanto que você venha junto.'] },
    ]}],
  },

  // ── AVANÇADO ──────────────────────────────────────────────────────────────

  {
    id: 'adv-pt-1',
    language: 'pt',
    stage: 'Avançado',
    title: 'Future Subjunctive',
    subtitle: 'Use the future subjunctive in conditional and temporal clauses',
    theory: `The **future subjunctive** (futuro do subjuntivo) is a verb tense that exists almost exclusively in Portuguese — English, Spanish, French, and Italian have no equivalent dedicated tense. It expresses a condition or an uncertain future action. In English, the corresponding clauses simply use the **simple present** after conjunctions like "when," "if," "as soon as," etc. — which is exactly why English speakers tend to mistranslate it using the regular present or present subjunctive.

## Formation

Take the 3rd person plural of the preterite indicative, drop the **-ram** ending, and add the future subjunctive endings:

| Pronoun      | falar (speak)   | comer (eat)   | partir (leave)  |
|--------------|----------|----------|----------|
| eu           | falar    | comer    | partir   |
| você/ele/ela | falar    | comer    | partir   |
| nós          | falarmos | comermos | partirmos|
| vocês/eles   | falarem  | comerem  | partirem |

Note that the eu/você/ele/ela forms are identical to the plain infinitive — this is one reason the tense often goes unnoticed by learners.

## Common irregular verbs

| Infinitive | Future subj. (eu) | Future subj. (nós) |
|------------|-------------------|--------------------|
| ser / ir (to be / to go)  | for               | formos             |
| ter (to have)       | tiver             | tivermos           |
| fazer (to do/make)     | fizer             | fizermos           |
| vir (to come)        | vier              | viermos            |
| ver (to see)        | vir               | virmos             |
| poder (can)      | puder             | pudermos           |
| querer (to want)    | quiser            | quisermos          |
| saber (to know)      | souber            | soubermos          |

## Conjunctions that trigger the future subjunctive

| English         | Portuguese               |
|----------------|-------------------------|
| when           | quando                  |
| if             | se                      |
| as soon as     | assim que / logo que    |
| while          | enquanto                |
| wherever       | onde quer que           |
| whoever        | quem quer que           |
| whenever       | quando quer que         |

## More examples

- Quando eu chegar, vou te ligar. (When I arrive, I will call you.)
- Se ele vier, diga que estou aqui. (If he comes, tell him I am here.)
- Assim que ela terminar, vai embora. (As soon as she finishes, she will leave.)
- Enquanto você estudar, vai melhorar. (As long as you study, you will improve.)

⚠️ **Common mistakes**
- Using the present indicative instead of the future subjunctive after these conjunctions: "Quando eu chego" is wrong for a future event — it must be "Quando eu **chegar**."
- Confusing the future subjunctive with the personal infinitive — they share the same form for "ser," "ter," etc. in some persons, but they trigger in different contexts (the future subjunctive needs a conjunction like "quando" or "se"; the personal infinitive does not).
- Forgetting irregular stems: "ver" → "vir" (eu vir, not "ver") and "vir" (to come) → "vier" (eu vier) look confusingly similar but come from different verbs.

💡 **Tip:** A quick test: if the English sentence has "when/if + present tense" but clearly refers to a future, uncertain event ("When I arrive," "If it rains"), Portuguese will almost always need the future subjunctive, not the present indicative.

## Key vocabulary

• chegar — to arrive
• terminar — to finish
• melhorar — to improve, get better
• apoiar — to support
• decidir — to decide
• precisar — to need
• pousar — to land
• ficar pronto — to be ready
• voltar — to come back
• a reunião — the meeting
• o tempo — time
• o avião — the airplane`,
    exercises: [{ sentences: [
      { prompt: 'When I arrive, I will call you.', answers: ['Quando eu chegar, vou te ligar.', 'Quando chegar, te ligo.'] },
      { prompt: 'If it rains, we will stay home.', answers: ['Se chover, ficamos em casa.', 'Se chover, vamos ficar em casa.'] },
      { prompt: 'As soon as she finishes, she will leave.', answers: ['Assim que ela terminar, vai embora.', 'Logo que ela terminar, ela sai.'] },
      { prompt: 'When you have time, read this book.', answers: ['Quando você tiver tempo, leia este livro.', 'Quando tiver tempo, lê esse livro.'] },
      { prompt: 'If he comes, tell him I am here.', answers: ['Se ele vier, diga que estou aqui.', 'Se ele vier, fala que eu tô aqui.'] },
      { prompt: 'Wherever you go, I will follow.', answers: ['Onde quer que você vá, eu vou atrás.', 'Aonde você for, eu sigo.'] },
      { prompt: 'As soon as I know, I will tell you.', answers: ['Assim que eu souber, te digo.', 'Logo que eu souber, te conto.'] },
      { prompt: 'When the meeting ends, let us go eat.', answers: ['Quando a reunião terminar, vamos comer.', 'Quando acabar a reunião, vamos almoçar.'] },
      { prompt: 'If you need help, just ask.', answers: ['Se precisar de ajuda, é só pedir.', 'Se você precisar de ajuda, é só falar.'] },
      { prompt: 'I will support you whatever you decide.', answers: ['Vou te apoiar, seja lá o que você decidir.', 'Qualquer que seja a sua decisão, te apoio.'] },
      { prompt: 'When she gets better, she will return to work.', answers: ['Quando ela melhorar, vai voltar ao trabalho.', 'Quando ela estiver melhor, volta a trabalhar.'] },
      { prompt: 'If we finish early, we can go to the cinema.', answers: ['Se terminarmos cedo, podemos ir ao cinema.', 'Se a gente terminar cedo, dá pra ir ao cinema.'] },
      { prompt: 'Whoever arrives first should wait.', answers: ['Quem quer que chegue primeiro deve esperar.', 'Quem chegar primeiro que espere.'] },
      { prompt: 'As long as you study, you will improve.', answers: ['Enquanto você estudar, vai melhorar.', 'Desde que você estude, você vai evoluir.'] },
      { prompt: 'When I have more money, I will buy a house.', answers: ['Quando eu tiver mais dinheiro, vou comprar uma casa.', 'Quando tiver grana, compro uma casa.'] },
      { prompt: 'If she calls, tell her I left.', answers: ['Se ela ligar, diga que eu já saí.', 'Se ela ligar, fala que eu fui embora.'] },
      { prompt: 'As soon as the plane lands, I will send a message.', answers: ['Assim que o avião pousar, mando uma mensagem.', 'Logo que pousar, te mando um zap.'] },
      { prompt: 'When you are ready, we will begin.', answers: ['Quando você estiver pronto, começamos.', 'Quando estiver pronto, a gente começa.'] },
      { prompt: 'If I can, I will go to the party.', answers: ['Se eu puder, vou à festa.', 'Se eu conseguir, apareço na festa.'] },
      { prompt: 'Whenever you want, you can come visit.', answers: ['Quando quiser, pode vir me visitar.', 'Qualquer hora que quiser, pode aparecer.'] },
    ]}],
  },

  {
    id: 'adv-pt-2',
    language: 'pt',
    stage: 'Avançado',
    title: 'Personal Infinitive',
    subtitle: "Master the personal infinitive, a feature unique to Portuguese",
    theory: `The **personal infinitive** (infinitivo pessoal) is one of the most peculiar features of Portuguese — it doesn't exist in English, Spanish, or French. It's a form of the infinitive that **inflects** to agree with its subject, even though infinitives are normally thought of as "unconjugated."

## Formation

| Pronoun      | falar (speak)   | comer (eat)   | partir (leave)  |
|--------------|----------|----------|----------|
| eu           | falar    | comer    | partir   |
| você/ele/ela | falar    | comer    | partir   |
| nós          | falarmos | comermos | partirmos|
| vocês/eles   | falarem  | comerem  | partirem |

💡 **Tip:** The 1st and 3rd person singular forms look exactly like the plain (impersonal) infinitive, so the personal infinitive often "hides in plain sight" — you only notice it in the nós and vocês/eles forms, where an ending is added.

## When to use the personal infinitive

| Situation                                          | Example                                          |
|---------------------------------------------------|--------------------------------------------------|
| Subject of the infinitive differs from the main verb's subject | É importante **vocês estudarem** juntos. (It's important for you all to study together.)       |
| After prepositions with an expressed subject             | Depois de **eles saírem**, arrumei tudo. (After they left, I cleaned everything up.)        |
| "Para" + infinitive with a different subject | Trouxe comida para **vocês comerem**. (I brought food for you all to eat.)           |
| After impersonal expressions                            | É bom **nós irmos** cedo. (It's good for us to go early.)                       |

## Personal vs. impersonal infinitive

| Impersonal (no specific subject) | Personal (specific subject expressed)            |
|------------------------------------|---------------------------------------------|
| É importante trabalhar. (It's important to work.)           | É importante **vocês trabalharem**. (It's important for you all to work.)          |
| Para entrar, leia as regras. (To enter, read the rules.)      | Para **eles entrarem**, precisam de convite. (For them to enter, they need an invitation.) |

## More examples

- É bom conversarmos mais vezes. (It's good for us to talk more often.)
- Antes de eles chegarem, precisamos nos preparar. (Before they arrive, we must prepare.)
- Sem você saber, ele foi embora. (Without you knowing, he left.)
- É difícil todos nós concordarmos. (It's difficult for all of us to agree.)

⚠️ **Common mistakes**
- Forgetting to inflect the infinitive when the subject is plural: "É importante eles estudar" should be "É importante eles **estudarem**."
- Using the personal infinitive when the subject is the same as the main clause's subject — in that case, the plain infinitive is preferred: "Quero estudar" (I want to study), not "Quero eu estudar."
- Confusing the personal infinitive with the future subjunctive — both share identical forms for many verbs (e.g., "falarem"), but they appear in different grammatical environments: the personal infinitive follows prepositions or impersonal expressions, while the future subjunctive follows conjunctions like "quando" or "se."

## Key vocabulary

• sair — to leave, go out
• chegar — to arrive
• preparar-se — to prepare oneself
• concordar — to agree
• resolver — to solve
• tentar — to try
• responder — to answer
• assinar — to sign
• ter sucesso — to succeed
• agir — to act
• o documento — the document
• o problema — the problem`,
    exercises: [{ sentences: [
      { prompt: "It's important for us to go early.", answers: ['É importante irmos cedo.', 'É importante nós irmos cedo.'] },
      { prompt: 'After they left, I cleaned the house.', answers: ['Depois de eles saírem, limpei a casa.', 'Depois de eles irem embora, arrumei a casa.'] },
      { prompt: 'I brought food for you all to eat.', answers: ['Trouxe comida para vocês comerem.', 'Trouxe comida pra vocês comer.'] },
      { prompt: "It's good for us to talk more often.", answers: ['É bom conversarmos mais vezes.', 'É bom nós conversarmos mais seguido.'] },
      { prompt: 'Before they arrive, we must prepare.', answers: ['Antes de eles chegarem, precisamos nos preparar.', 'Antes deles chegar, precisamos preparar tudo.'] },
      { prompt: 'I am happy for you to be here.', answers: ['Fico feliz de você estar aqui.', 'Fico feliz em você estar aqui.'] },
      { prompt: "It's possible for them to solve the problem.", answers: ['É possível eles resolverem o problema.', 'É possível que eles resolvam o problema.'] },
      { prompt: 'Despite us trying, nothing changed.', answers: ['Apesar de tentarmos, nada mudou.', 'Apesar de a gente ter tentado, nada mudou.'] },
      { prompt: 'She called for them to come in.', answers: ['Ela chamou para eles entrarem.', 'Ela chamou eles pra entrar.'] },
      { prompt: 'Without you knowing, he left.', answers: ['Sem você saber, ele foi embora.', 'Sem você perceber, ele saiu.'] },
      { prompt: "It's strange for them not to answer.", answers: ['É estranho eles não responderem.', 'É estranho eles não atenderem.'] },
      { prompt: 'She waited for them to finish.', answers: ['Ela esperou eles terminarem.', 'Ela esperou para eles terminarem.'] },
      { prompt: 'We need you to sign these documents.', answers: ['Precisamos de você assinar esses documentos.', 'Precisamos que você assine esses documentos.'] },
      { prompt: 'After you read it, tell me what you think.', answers: ['Depois de você ler, me diz o que achou.', 'Depois que você ler, me conta o que achou.'] },
      { prompt: "It's difficult for all of us to agree.", answers: ['É difícil todos nós concordarmos.', 'É difícil a gente toda concordar.'] },
      { prompt: 'I left before they could see me.', answers: ['Saí antes de eles me verem.', 'Fui embora antes que eles me vissem.'] },
      { prompt: 'The rule is for everyone to arrive on time.', answers: ['A regra é todos chegarem na hora.', 'A regra é que todos cheguem no horário.'] },
      { prompt: 'She was happy for her children to succeed.', answers: ['Ela ficou feliz de seus filhos terem sucesso.', 'Ela ficou feliz com os filhos tendo sucesso.'] },
      { prompt: 'Despite them working a lot, they failed.', answers: ['Apesar de eles trabalharem muito, falharam.', 'Mesmo trabalhando muito, eles não conseguiram.'] },
      { prompt: 'This is the moment for us to act.', answers: ['Este é o momento de agirmos.', 'Esse é o momento pra gente agir.'] },
    ]}],
  },

  {
    id: 'adv-pt-3',
    language: 'pt',
    stage: 'Avançado',
    title: 'Brazilian Idiomatic Expressions',
    subtitle: 'Learn everyday Brazilian Portuguese idiomatic expressions',
    theory: `**Idiomatic expressions** (expressões idiomáticas) are phrases whose meaning can't be deduced literally word by word. Brazilian Portuguese is rich in colorful, informal expressions that reflect the local culture — knowing them is often what separates a textbook learner from someone who actually sounds Brazilian.

## Idiomatic expressions and their equivalents

| English                  | Brazilian Portuguese (idiomatic)         | Literal meaning / context        |
|-------------------------|-----------------------------------|--------------------------------------|
| to be broke             | estar duro / estar liso           | to have no money                         |
| to give up              | desistir / jogar a toalha         | to abandon something                       |
| to make sense           | fazer sentido / faz sentido       | to be logical                           |
| to be in trouble        | estar encrencado / estar ferrado  | to have serious problems (informal)      |
| to mess up              | meter os pés pelas mãos           | to make a serious mistake                |
| to be worth it          | valer a pena                      | to have enough value                 |
| to get along            | se dar bem                        | to have a good relationship with someone           |
| to be full of energy    | estar cheio de gás / estar pilhado| to have a lot of energy                    |
| to keep going           | seguir em frente / não parar      | to continue despite difficulties    |
| to show off             | se exibir / dar uma de            | to flaunt, to put on airs                 |
| to be a pain            | ser um saco / ser chato           | to be annoying                          |
| to take a chance        | arriscar / tentar a sorte         | to try something risky                |
| to be out of the loop   | estar por fora / não estar ligado | to not know the latest news       |
| to have a crush         | estar afim de alguém / estar apaixonado | to feel attracted to someone     |
| to be in a hurry        | estar com pressa / estar na correria | to need to act fast             |

## More examples

- Não consigo ir. Estou totalmente duro. (I can't go. I'm totally broke.)
- Ele meteu os pés pelas mãos dessa vez. (He really messed up this time.)
- Acho que ela está afim de você. (I think she has a crush on you.)
- Esse barulho é um saco. (This noise is a real pain.)

⚠️ **Common mistakes**
- Translating idioms literally word-for-word almost never works: "estar liso" does not mean "to be smooth" in context — it means to be broke. Always learn the whole phrase, not the individual words.
- Many of these expressions are highly regional or generational. "Dar uma de" and "estar pilhado," for instance, are common among younger speakers but may sound unusual to older or more formal listeners.

💡 **Tip:** Pay attention to register. Many of these expressions are informal and work great with friends or on social media, but they should be avoided in job interviews, business emails, or other formal contexts — use the neutral equivalents ("sem dinheiro," "cometer um erro," "ter problemas") instead.`,
    exercises: [{ sentences: [
      { prompt: "I can't come. I'm totally broke.", answers: ['Não consigo ir. Estou totalmente duro.', 'Não dá pra ir. Tô liso.'] },
      { prompt: "Don't give up. You are almost there.", answers: ['Não desista. Você está quase lá.', 'Não joga a toalha. Tá quase.'] },
      { prompt: 'That plan does not make sense.', answers: ['Esse plano não faz sentido.', 'Esse plano não faz o menor sentido.'] },
      { prompt: "If you don't study, you will be in trouble.", answers: ['Se você não estudar, vai estar ferrado.', 'Se não estudar, vai se dar mal.'] },
      { prompt: 'He really messed up this time.', answers: ['Ele meteu os pés pelas mãos dessa vez.', 'Ele pisou na bola dessa vez.'] },
      { prompt: 'The trip was hard, but it was worth it.', answers: ['A viagem foi difícil, mas valeu a pena.', 'Foi corrido, mas valeu muito a pena.'] },
      { prompt: 'She gets along with everyone at the office.', answers: ['Ela se dá bem com todo mundo no escritório.', 'Ela se entende com todo mundo no trabalho.'] },
      { prompt: 'He is always full of energy in the morning.', answers: ['Ele está sempre cheio de gás de manhã.', 'Ele está sempre pilhado de manhã.'] },
      { prompt: 'Keep going, the worst is over.', answers: ['Segue em frente, o pior já passou.', 'Não para, o mais difícil já passou.'] },
      { prompt: 'She is always showing off her new car.', answers: ['Ela fica se exibindo com o carro novo.', 'Ela fica se mostrando com o carro novo.'] },
      { prompt: 'This noise is a real pain.', answers: ['Esse barulho é um saco.', 'Esse barulho é muito chato.'] },
      { prompt: 'Take a chance, you have nothing to lose.', answers: ['Arrisca, você não tem nada a perder.', 'Tenta a sorte, não tem nada a perder.'] },
      { prompt: 'I have been out of the loop lately.', answers: ['Tenho ficado por fora ultimamente.', 'Tô por fora do que tá acontecendo.'] },
      { prompt: 'I think she has a crush on you.', answers: ['Acho que ela está afim de você.', 'Acho que ela tá a fim de você.'] },
      { prompt: 'Sorry, I am in a hurry right now.', answers: ['Desculpa, estou com pressa agora.', 'Me desculpa, tô na correria agora.'] },
      { prompt: 'He always messes up at the worst moment.', answers: ['Ele sempre mete os pés pelas mãos na hora errada.', 'Ele sempre pisa na bola na pior hora.'] },
      { prompt: "That explanation does not make any sense.", answers: ['Essa explicação não faz sentido algum.', 'Essa explicação não faz o menor sentido.'] },
      { prompt: 'We are all broke after the holidays.', answers: ['Estamos todos duros depois das festas.', 'A gente ficou todo liso depois das férias.'] },
      { prompt: "Don't show off. Just be yourself.", answers: ['Não se exiba. Seja você mesmo.', 'Não fica se mostrando. Seja você mesmo.'] },
      { prompt: 'She never gives up, no matter what.', answers: ['Ela nunca desiste, não importa o que aconteça.', 'Ela nunca joga a toalha, seja lá o que for.'] },
    ]}],
  },

  {
    id: 'adv-pt-4',
    language: 'pt',
    stage: 'Avançado',
    title: 'Formal vs Colloquial Register',
    subtitle: 'Understand the differences between formal Portuguese and everyday speech',
    theory: `Brazilian Portuguese has a striking gap between **formal register** (writing, public speech, professional situations) and **colloquial register** (everyday speech, friends, social media). Knowing both — and when to use each — is essential, because using formal Portuguese with friends sounds robotic, while using colloquial Portuguese in a business email sounds unprofessional.

## Main grammatical differences

| Feature         | Formal / Standard                  | Colloquial / Everyday             |
|------------------------|---------------------------------|-----------------------------------|
| Subject pronoun        | Eu farei isso. (I will do that.)                  | Eu vou fazer isso. (I'm going to do that.)                |
| Future tense          | Faremos a reunião amanhã. (We will hold the meeting tomorrow.)       | A gente vai fazer a reunião amanhã. (We're gonna have the meeting tomorrow.)|
| Object pronoun         | Eu o vi. (I saw him.)                        | Eu vi ele. (I saw him.)                        |
| 2nd person pronoun   | O senhor / a senhora (sir/madam)            | você / tu (you)                         |
| Pronoun placement   | Vejo-te amanhã. (I'll see you tomorrow.)                 | Te vejo amanhã. (I'll see you tomorrow.)                   |
| Use of "que"           | O livro de que eu gosto. (The book that I like.)        | O livro que eu gosto. (The book that I like.)             |
| Negation                | Não sei. (I don't know.)                        | Não sei. / Sei não. (I don't know. / Dunno.)    |
| "Crase" (à) usage                  | Fui à escola. (I went to school.)                   | Fui na escola. (I went to school.)               |

## Formal vs. colloquial vocabulary

| Formal                  | Colloquial                        |
|-------------------------|----------------------------------|
| criança (child)                 | criança / moleque / pirralho     |
| dinheiro (money)                | dinheiro / grana / bufunfa       |
| comer (to eat)                   | comer / rolar / papear           |
| trabalhar (to work)               | trabalhar / trampar / labutar    |
| casa / residência (house/residence)       | casa / lar / barraco (derog.)     |
| muito (a lot/very)                   | muito / demais / pra caramba     |
| legal / bom (cool/good)             | excelente / bom / massa / dahora |
| entender (to understand)                | compreender / entender / sacar   |
| conversar (to talk)               | conversar / bater papo / trocar  |

## More examples

- Formal: O senhor poderia me indicar onde fica o banheiro? (Could you tell me where the restroom is?)
- Colloquial: Você tá me entendendo? (Do you understand what I mean?)
- Formal: Solicitamos gentilmente a sua presença no evento. (We kindly request your presence at the event.)
- Colloquial: Não tenho a menor ideia do que aconteceu. (I have no idea what happened.)

⚠️ **Common mistakes**
- Using "tu" with formal verb conjugation mixed with "você" conjugation in the same sentence — pick one system and stay consistent ("tu vais," not "tu vai," in regions that use "tu" formally; most of Brazil uses "você + 3rd person verb" colloquially even with "tu" as the pronoun).
- Writing emails or essays with colloquial contractions like "tá," "pra," or "né" — these are fine in texting but considered too informal in professional writing.
- Overcorrecting into formality that sounds unnatural even in writing — modern written Portuguese (e.g., in journalism) often uses "você" and simple future periphrasis ("vou fazer") rather than the most archaic forms.

💡 **Tip:** When in doubt about register, listen to how news anchors speak (semi-formal) versus how characters talk in Brazilian soap operas or YouTube vlogs (colloquial) — this contrast is a fast way to calibrate your ear.`,
    exercises: [{ sentences: [
      { prompt: 'Formal: I will send the report tomorrow.', answers: ['Enviarei o relatório amanhã.', 'Vou enviar o relatório amanhã.'] },
      { prompt: 'Colloquial: We are going to watch a movie tonight.', answers: ['A gente vai ver um filme hoje à noite.', 'A gente vai assistir um filme hoje.'] },
      { prompt: 'Formal: Could you tell me where the restroom is?', answers: ['O senhor poderia me indicar onde fica o banheiro?', 'Poderia me informar onde fica o banheiro?'] },
      { prompt: 'Colloquial: Do you understand what I mean?', answers: ['Você tá me entendendo?', 'Você sacou o que eu quis dizer?'] },
      { prompt: 'Formal: I saw him at the conference.', answers: ['Eu o vi na conferência.', 'Vi-o na conferência.'] },
      { prompt: 'Colloquial: I saw him at the party.', answers: ['Eu vi ele na festa.', 'Vi ele na festa.'] },
      { prompt: 'Formal: The results were presented to the board.', answers: ['Os resultados foram apresentados à diretoria.', 'Os resultados foram apresentados para a diretoria.'] },
      { prompt: 'Colloquial: That was really cool!', answers: ['Isso foi muito massa!', 'Foi demais!', 'Que dahora!'] },
      { prompt: 'Formal: Please fill in the attached form.', answers: ['Por favor, preencha o formulário em anexo.', 'Solicito que preencha o formulário em anexo.'] },
      { prompt: 'Colloquial: I am very hungry right now.', answers: ['Estou com muita fome agora.', 'Tô morrendo de fome agora.'] },
      { prompt: 'Formal: We kindly request your presence at the event.', answers: ['Solicitamos gentilmente a sua presença no evento.', 'Contamos com a sua presença no evento.'] },
      { prompt: 'Colloquial: I have no idea what happened.', answers: ['Não tenho a menor ideia do que aconteceu.', 'Não faço a mínima ideia do que rolou.'] },
      { prompt: 'Formal: I went to the school.', answers: ['Fui à escola.', 'Dirigi-me à escola.'] },
      { prompt: 'Colloquial: I went to the school.', answers: ['Fui na escola.', 'Fui pra escola.'] },
      { prompt: 'Formal: He did not comply with the rules.', answers: ['Ele não cumpriu as regras.', 'Ele não seguiu as normas estabelecidas.'] },
      { prompt: 'Colloquial: He does not know anything.', answers: ['Ele não sabe nada.', 'Ele não sabe nada, não.', 'Ele não entende nada disso.'] },
      { prompt: 'Formal: We are pleased to inform you that your application was approved.', answers: ['Temos o prazer de informar que sua candidatura foi aprovada.', 'É com satisfação que informamos a aprovação de sua candidatura.'] },
      { prompt: 'Colloquial: That makes no sense at all.', answers: ['Isso não faz sentido nenhum.', 'Isso não faz o menor sentido.', 'Que nada a ver!'] },
      { prompt: 'Formal: I understand your concern.', answers: ['Compreendo a sua preocupação.', 'Entendo o seu ponto de vista.'] },
      { prompt: 'Colloquial: I get it, no worries.', answers: ['Entendi, sem estresse.', 'Saquei, pode deixar.'] },
    ]}],
  },

  // ── VARIADOS ──────────────────────────────────────────────────────────────

  {
    id: 'var-pt-1',
    language: 'pt',
    stage: 'Variados',
    title: '100 Practical Everyday Sentences',
    subtitle: 'Shopping, restaurants, transportation and work in 100 essential sentences',
    theory: `This module gathers **100 practical sentences** organized into four everyday themes: shopping, restaurants, transportation, and work. All the sentences reflect real-life situations and include common variations found in spoken Brazilian Portuguese.

## Themes covered

- **Shopping** — asking prices, sizes, payment methods, discounts, and returns.
- **Restaurants** — ordering food, dietary restrictions, asking for the bill, and reservations.
- **Transportation** — buses, taxis, trains, directions, and traffic.
- **Work** — meetings, deadlines, emails, and office small talk.

💡 **Tip:** Many sentences include two valid answers — a more standard form and a more colloquial one (e.g., "Quanto custa isso?" vs. "Quanto é isso?"). Both are correct; the colloquial version is what you'll hear most often in daily conversation.

⚠️ **Common mistakes**
- Don't translate English phrasal expressions literally — "to go" in "for here or to go" becomes "para viagem" in Portuguese, not a literal translation of "to go."
- Remember that "você" is used for "you" in almost all everyday Brazilian contexts shown here; "tu" appears mainly in certain regions and informal speech.

## Key vocabulary

• custar — to cost
• pagar — to pay
• trocar — to exchange
• o desconto — the discount
• o cardápio — the menu
• a conta — the bill
• pedir — to order, ask for
• a passagem — the ticket (transport)
• o ônibus — the bus
• o trânsito — the traffic
• a reunião — the meeting
• o prazo — the deadline
• atrasar-se — to be late`,
    exercises: [{ sentences: [
      // Compras (25)
      { prompt: 'How much does this cost?', answers: ['Quanto custa isso?', 'Quanto é isso?'] },
      { prompt: 'Do you have this in a larger size?', answers: ['Você tem isso em um tamanho maior?', 'Tem esse em tamanho maior?'] },
      { prompt: 'Can I try this on?', answers: ['Posso experimentar isso?', 'Posso provar isso?'] },
      { prompt: 'Where is the fitting room?', answers: ['Onde fica o provador?', 'Onde é o provador?'] },
      { prompt: 'I will take this one.', answers: ['Vou levar este.', 'Vou ficar com esse.'] },
      { prompt: 'Do you accept credit card?', answers: ['Vocês aceitam cartão de crédito?', 'Aceita cartão?'] },
      { prompt: 'Can I pay in installments?', answers: ['Posso parcelar?', 'Dá para parcelar?'] },
      { prompt: 'Do you have a discount?', answers: ['Tem desconto?', 'Você faz desconto?'] },
      { prompt: 'I am just looking, thank you.', answers: ['Estou só olhando, obrigado.', 'Tô só dando uma olhada, valeu.'] },
      { prompt: "I don't want this anymore.", answers: ['Não quero mais isso.', 'Desisti, não quero mais.'] },
      { prompt: 'Can I exchange this item?', answers: ['Posso trocar este item?', 'Dá para trocar esse produto?'] },
      { prompt: "I'd like a receipt, please.", answers: ['Gostaria de um recibo, por favor.', 'Pode me dar o recibo?'] },
      { prompt: 'This is on sale today.', answers: ['Isso está em promoção hoje.', 'Esse produto está na promoção.'] },
      { prompt: 'Do you have a black version?', answers: ['Você tem na cor preta?', 'Tem esse na cor preta?'] },
      { prompt: 'Where do I pay?', answers: ['Onde eu pago?', 'Onde fica o caixa?'] },
      { prompt: 'I would like to return this product.', answers: ['Gostaria de devolver este produto.', 'Quero devolver esse produto.'] },
      { prompt: 'Is this the last one?', answers: ['Esse é o último?', 'É o último que tem?'] },
      { prompt: 'Can you wrap it as a gift?', answers: ['Você pode embalar como presente?', 'Pode fazer um embrulho de presente?'] },
      { prompt: 'This is too expensive for me.', answers: ['Isso está muito caro pra mim.', 'Está caro demais.'] },
      { prompt: 'Do you have a cheaper option?', answers: ['Você tem uma opção mais barata?', 'Tem algo mais em conta?'] },
      { prompt: 'Where can I find the shampoo?', answers: ['Onde posso encontrar o shampoo?', 'Onde fica o shampoo?'] },
      { prompt: 'How long is the warranty?', answers: ['Qual é o prazo de garantia?', 'Quanto tempo tem de garantia?'] },
      { prompt: 'The queue is very long today.', answers: ['A fila está muito grande hoje.', 'Tá uma fila danada hoje.'] },
      { prompt: 'I will pay in cash.', answers: ['Vou pagar em dinheiro.', 'Vou pagar no dinheiro.'] },
      { prompt: 'This is a great deal.', answers: ['Esse é um ótimo negócio.', 'Isso está muito bom de preço.'] },
      // Restaurante (25)
      { prompt: 'A table for two, please.', answers: ['Uma mesa para dois, por favor.', 'Tem mesa pra dois?'] },
      { prompt: 'Can I see the menu?', answers: ['Posso ver o cardápio?', 'Me traz o menu, por favor?'] },
      { prompt: 'What do you recommend?', answers: ['O que você recomenda?', 'O que é bom aqui?'] },
      { prompt: 'I am a vegetarian.', answers: ['Sou vegetariano.', 'Sou vegetariana.'] },
      { prompt: 'I am allergic to peanuts.', answers: ['Sou alérgico a amendoim.', 'Tenho alergia a amendoim.'] },
      { prompt: 'Could we have some more water?', answers: ['Podemos ter um pouco mais de água?', 'Pode trazer mais água?'] },
      { prompt: 'The food here is delicious.', answers: ['A comida aqui é deliciosa.', 'A comida aqui é muito boa.'] },
      { prompt: 'Can I have the bill, please?', answers: ['Pode trazer a conta, por favor?', 'Me traz a conta?'] },
      { prompt: 'Is service included?', answers: ['A taxa de serviço está incluída?', 'Já vem com a taxa de serviço?'] },
      { prompt: 'I would like to order a steak.', answers: ['Gostaria de pedir um bife.', 'Quero pedir um bife, por favor.'] },
      { prompt: 'Can we split the bill?', answers: ['Podemos dividir a conta?', 'Dá pra rachar a conta?'] },
      { prompt: 'Could you bring more bread?', answers: ['Pode trazer mais pão?', 'Traz mais pãozinho?'] },
      { prompt: 'The food took too long to arrive.', answers: ['A comida demorou muito para chegar.', 'A comida demorou demais.'] },
      { prompt: 'This dish is very spicy.', answers: ['Esse prato é muito apimentado.', 'Esse prato está muito picante.'] },
      { prompt: 'I would like a glass of wine, please.', answers: ['Gostaria de uma taça de vinho, por favor.', 'Pode trazer uma taça de vinho?'] },
      { prompt: 'Do you have a kids menu?', answers: ['Vocês têm cardápio infantil?', 'Tem menu pra criança?'] },
      { prompt: 'Can I have my order to go?', answers: ['Posso levar meu pedido para viagem?', 'Pode colocar pra viagem?'] },
      { prompt: 'Is this dish gluten-free?', answers: ['Esse prato é sem glúten?', 'Esse prato tem glúten?'] },
      { prompt: 'The dessert menu, please.', answers: ['O cardápio de sobremesas, por favor.', 'Me traz as sobremesas.'] },
      { prompt: 'I will have the same as him.', answers: ['Vou querer o mesmo que ele.', 'Pode trazer igual ao dele.'] },
      { prompt: 'This is not what I ordered.', answers: ['Isso não é o que eu pedi.', 'Não foi isso que eu pedi.'] },
      { prompt: 'Could you heat this up for me?', answers: ['Pode esquentar isso para mim?', 'Consegue esquentar isso?'] },
      { prompt: 'We are ready to order.', answers: ['Estamos prontos para pedir.', 'Pode anotar o pedido.'] },
      { prompt: 'The restaurant is packed tonight.', answers: ['O restaurante está lotado hoje à noite.', 'Tá cheio demais aqui hoje.'] },
      { prompt: 'Can I make a reservation for Saturday?', answers: ['Posso fazer uma reserva para sábado?', 'Dá para reservar mesa para sábado?'] },
      // Transporte (25)
      { prompt: 'Where is the nearest bus stop?', answers: ['Onde fica a parada de ônibus mais próxima?', 'Onde tem um ponto de ônibus perto?'] },
      { prompt: 'How much is the bus fare?', answers: ['Quanto custa a passagem de ônibus?', 'Quanto é a passagem?'] },
      { prompt: 'Does this bus go to the center?', answers: ['Este ônibus vai ao centro?', 'Esse ônibus vai pro centro?'] },
      { prompt: 'I need to get off at the next stop.', answers: ['Preciso descer na próxima parada.', 'Vou descer na próxima.'] },
      { prompt: 'Where can I get a taxi?', answers: ['Onde posso pegar um táxi?', 'Onde tem ponto de táxi?'] },
      { prompt: 'How long does it take to get there?', answers: ['Quanto tempo leva para chegar lá?', 'Quanto tempo demora pra chegar?'] },
      { prompt: 'I am lost. Can you help me?', answers: ['Estou perdido. Você pode me ajudar?', 'Tô perdido. Pode me ajudar?'] },
      { prompt: 'Is the subway near here?', answers: ['O metrô fica perto daqui?', 'Tem metrô perto?'] },
      { prompt: 'I missed my bus.', answers: ['Perdi o meu ônibus.', 'Perdi o ônibus.'] },
      { prompt: 'Can you call me a car?', answers: ['Você pode chamar um carro para mim?', 'Pode me chamar um Uber?'] },
      { prompt: 'How do I get to the airport?', answers: ['Como chego ao aeroporto?', 'Como vou ao aeroporto?'] },
      { prompt: 'The traffic is terrible today.', answers: ['O trânsito está horrível hoje.', 'O trânsito está um caos hoje.'] },
      { prompt: 'Which line goes to the stadium?', answers: ['Qual linha vai ao estádio?', 'Qual ônibus vai pro estádio?'] },
      { prompt: 'I need to buy a ticket.', answers: ['Preciso comprar uma passagem.', 'Preciso comprar um bilhete.'] },
      { prompt: 'The train is delayed.', answers: ['O trem está atrasado.', 'O trem está com atraso.'] },
      { prompt: 'Is there a direct route?', answers: ['Há uma rota direta?', 'Tem rota direta?'] },
      { prompt: 'Where do I board the train?', answers: ['Onde eu embarco no trem?', 'Onde é o embarque do trem?'] },
      { prompt: 'Can you drop me off here?', answers: ['Pode me deixar aqui?', 'Pode parar aqui?'] },
      { prompt: 'I need to refuel.', answers: ['Preciso abastecer.', 'Preciso colocar gasolina.'] },
      { prompt: 'How far is it from here?', answers: ['Que distância fica daqui?', 'Fica longe daqui?'] },
      { prompt: 'The road is under construction.', answers: ['A estrada está em obras.', 'A rua está em reforma.'] },
      { prompt: 'Where is the parking lot?', answers: ['Onde fica o estacionamento?', 'Onde tem um estacionamento?'] },
      { prompt: 'I need to take the highway.', answers: ['Preciso pegar a rodovia.', 'Tenho que pegar a estrada.'] },
      { prompt: 'Turn left at the traffic light.', answers: ['Vire à esquerda no semáforo.', 'Dobra à esquerda no sinal.'] },
      { prompt: 'My car broke down.', answers: ['Meu carro enguiçou.', 'Meu carro quebrou.'] },
      // Trabalho (25)
      { prompt: 'I have a meeting at two.', answers: ['Tenho uma reunião às duas.', 'Tenho meeting às duas.'] },
      { prompt: 'Can you send me the report?', answers: ['Você pode me enviar o relatório?', 'Pode me mandar o relatório?'] },
      { prompt: 'The deadline is tomorrow.', answers: ['O prazo é amanhã.', 'O deadline é amanhã.'] },
      { prompt: 'I will work from home today.', answers: ['Vou trabalhar de casa hoje.', 'Vou fazer home office hoje.'] },
      { prompt: 'I have to finish this project by Friday.', answers: ['Tenho que terminar este projeto até sexta.', 'Preciso entregar esse projeto até sexta-feira.'] },
      { prompt: 'Can we reschedule the meeting?', answers: ['Podemos remarcar a reunião?', 'Dá pra mudar o horário da reunião?'] },
      { prompt: 'I need to talk to my boss.', answers: ['Preciso falar com meu chefe.', 'Preciso conversar com o meu chefe.'] },
      { prompt: 'My computer is not working.', answers: ['Meu computador não está funcionando.', 'Meu computador travou.'] },
      { prompt: "I'll be five minutes late.", answers: ['Vou me atrasar cinco minutos.', 'Chego com cinco minutinhos de atraso.'] },
      { prompt: 'Could you review this document?', answers: ['Você poderia revisar este documento?', 'Pode dar uma olhada nesse documento?'] },
      { prompt: 'I am on a tight deadline.', answers: ['Estou com prazo apertado.', 'Meu prazo está muito curto.'] },
      { prompt: 'The client approved the proposal.', answers: ['O cliente aprovou a proposta.', 'O cliente deu ok para a proposta.'] },
      { prompt: 'I need to check my email.', answers: ['Preciso checar meu e-mail.', 'Preciso ver meus e-mails.'] },
      { prompt: 'Let us schedule a call for next week.', answers: ['Vamos agendar uma ligação para a próxima semana.', 'Vamos marcar uma call pra semana que vem.'] },
      { prompt: 'I got a promotion.', answers: ['Fui promovido.', 'Ganhei uma promoção.'] },
      { prompt: 'The project was a success.', answers: ['O projeto foi um sucesso.', 'O projeto deu certo.'] },
      { prompt: 'We need to cut costs.', answers: ['Precisamos cortar custos.', 'A gente precisa reduzir custos.'] },
      { prompt: 'I am preparing the presentation.', answers: ['Estou preparando a apresentação.', 'Tô preparando a apresentação.'] },
      { prompt: 'Please copy me on that email.', answers: ['Por favor, me coloque em cópia nesse e-mail.', 'Me copia nesse e-mail.'] },
      { prompt: 'The meeting was very productive.', answers: ['A reunião foi muito produtiva.', 'A reunião rendeu muito.'] },
      { prompt: 'I need more time to finish this.', answers: ['Preciso de mais tempo para terminar isso.', 'Preciso de mais tempo pra finalizar.'] },
      { prompt: 'We hired a new employee.', answers: ['Contratamos um novo funcionário.', 'Contratamos uma pessoa nova.'] },
      { prompt: 'The budget was approved.', answers: ['O orçamento foi aprovado.', 'O budget foi aprovado.'] },
      { prompt: 'I work in the IT department.', answers: ['Trabalho no departamento de TI.', 'Trabalho na área de TI.'] },
      { prompt: 'Can you cover for me today?', answers: ['Você pode me cobrir hoje?', 'Você pode ficar no meu lugar hoje?'] },
    ]}],
  },

  {
    id: 'var-pt-2',
    language: 'pt',
    stage: 'Variados',
    title: '100 Intermediate Sentences',
    subtitle: 'Opinions, social situations and descriptions in 100 sentences',
    theory: `This module presents **100 intermediate-level sentences** covering opinions, social situations, and descriptions. The vocabulary and grammatical structures are more elaborate than the basics, but still accessible to intermediate learners.

## Themes covered

- **Opinions** — agreeing, disagreeing, hedging, and expressing nuanced views.
- **Social situations** — greetings, condolences, congratulations, favors, and small talk.
- **Descriptions** — people, places, and things, using a richer range of adjectives.

💡 **Tip:** Notice how many opinion sentences use "achar que" (to think that) interchangeably with "acreditar que" (to believe that) — "achar" is by far the most common in spoken Portuguese, even though "acreditar" sounds slightly more formal.

⚠️ **Common mistakes**
- Don't confuse "concordar com" (to agree with) and "estar de acordo" (to be in agreement) — both exist, but "concordar com alguém" is the more common verb construction.
- Descriptive adjectives must agree in gender and number with the noun they describe — "ela é tímida," not "ela é tímido."

## Key vocabulary

• achar — to think (have an opinion)
• concordar — to agree
• discordar — to disagree
• a opinião — the opinion
• tranquilo — calm, quiet
• animado — lively, excited
• tímido — shy
• o bairro — the neighborhood
• o sorriso — the smile
• parabéns — congratulations
• sentir muito — to be sorry, condole
• contar com — to count on`,
    exercises: [{ sentences: [
      // Opiniões (34)
      { prompt: 'In my opinion, this is the best solution.', answers: ['Na minha opinião, essa é a melhor solução.', 'Do meu ponto de vista, essa é a melhor saída.'] },
      { prompt: 'I think the government should do more.', answers: ['Acho que o governo deveria fazer mais.', 'Na minha opinião, o governo deveria agir mais.'] },
      { prompt: 'I agree with what you said.', answers: ['Concordo com o que você disse.', 'Estou de acordo com você.'] },
      { prompt: 'I totally disagree with that view.', answers: ['Discordo totalmente dessa visão.', 'Não concordo nada com essa opinião.'] },
      { prompt: 'That is an interesting perspective.', answers: ['Essa é uma perspectiva interessante.', 'É um ponto de vista interessante.'] },
      { prompt: 'I am not sure about that.', answers: ['Não tenho certeza sobre isso.', 'Não sei bem o que pensar sobre isso.'] },
      { prompt: 'To be honest, I find it boring.', answers: ['Para ser honesto, acho chato.', 'Pra falar a verdade, acho meio sem graça.'] },
      { prompt: 'I feel strongly about this issue.', answers: ['Tenho uma opinião forte sobre esse assunto.', 'Me importo muito com essa questão.'] },
      { prompt: 'Both sides have valid points.', answers: ['Ambos os lados têm pontos válidos.', 'Os dois lados têm argumentos válidos.'] },
      { prompt: "In my experience, it doesn't always work.", answers: ['Na minha experiência, nem sempre funciona.', 'Pela minha experiência, nem sempre dá certo.'] },
      { prompt: 'I think it depends on the situation.', answers: ['Acho que depende da situação.', 'Depende muito do contexto.'] },
      { prompt: 'That is a controversial topic.', answers: ['Esse é um tema polêmico.', 'Esse é um assunto controverso.'] },
      { prompt: 'I believe in equal rights for everyone.', answers: ['Acredito em direitos iguais para todos.', 'Defendo direitos iguais pra todo mundo.'] },
      { prompt: 'I respect your opinion, but I disagree.', answers: ['Respeito sua opinião, mas discordo.', 'Respeito o que você pensa, mas não concordo.'] },
      { prompt: 'I have mixed feelings about this.', answers: ['Tenho sentimentos mistos sobre isso.', 'Não sei bem o que pensar, são dois lados.'] },
      { prompt: 'That is easier said than done.', answers: ['É mais fácil falar do que fazer.', 'Na prática é mais difícil do que parece.'] },
      { prompt: 'Science should guide our decisions.', answers: ['A ciência deveria guiar nossas decisões.', 'A gente deveria seguir a ciência.'] },
      { prompt: 'I think young people should vote.', answers: ['Acho que os jovens deveriam votar.', 'Acho importante os jovens participarem das eleições.'] },
      { prompt: 'There are pros and cons to this approach.', answers: ['Há prós e contras nessa abordagem.', 'Tem vantagens e desvantagens nessa abordagem.'] },
      { prompt: 'My view might be biased.', answers: ['Minha visão pode ser tendenciosa.', 'Pode ser que eu seja parcial nisso.'] },
      { prompt: 'It is hard to say what is right here.', answers: ['É difícil dizer o que é certo aqui.', 'Não é fácil saber o que é correto nesse caso.'] },
      { prompt: 'I have always thought that way.', answers: ['Sempre pensei assim.', 'Sempre tive essa opinião.'] },
      { prompt: 'The evidence suggests otherwise.', answers: ['As evidências sugerem o contrário.', 'Os dados mostram outra coisa.'] },
      { prompt: 'That is just my personal opinion.', answers: ['Essa é apenas minha opinião pessoal.', 'É só o que eu acho.'] },
      { prompt: 'People should be free to choose.', answers: ['As pessoas deveriam ser livres para escolher.', 'Todo mundo deveria ter liberdade de escolha.'] },
      { prompt: 'I think technology has improved our lives.', answers: ['Acho que a tecnologia melhorou nossas vidas.', 'Acredito que a tecnologia trouxe melhorias para a nossa vida.'] },
      { prompt: 'Education is the key to development.', answers: ['A educação é a chave para o desenvolvimento.', 'A educação é fundamental para o progresso.'] },
      { prompt: 'I am open to changing my mind.', answers: ['Estou aberto a mudar de opinião.', 'Posso mudar de ideia se tiver bons argumentos.'] },
      { prompt: 'That point is very well made.', answers: ['Esse argumento foi muito bem colocado.', 'Esse ponto é muito válido.'] },
      { prompt: 'I see your point, but...', answers: ['Entendo o seu ponto, mas...', 'Vejo o que você quer dizer, mas...'] },
      { prompt: 'That is exactly how I feel.', answers: ['É exatamente o que eu sinto.', 'É exatamente o que eu acho.'] },
      { prompt: 'We need to look at this from different angles.', answers: ['Precisamos olhar para isso de diferentes ângulos.', 'A gente precisa ver isso por vários lados.'] },
      { prompt: 'I used to think differently.', answers: ['Eu costumava pensar diferente.', 'Antes eu pensava diferente.'] },
      { prompt: 'The debate is still ongoing.', answers: ['O debate ainda está em andamento.', 'A discussão ainda não foi resolvida.'] },
      // Situações sociais (33)
      { prompt: 'It was nice meeting you.', answers: ['Foi um prazer te conhecer.', 'Foi ótimo te conhecer.'] },
      { prompt: 'We should get together sometime.', answers: ['A gente deveria se reunir uma hora dessas.', 'A gente precisa se ver.'] },
      { prompt: 'Happy birthday! I hope all your dreams come true.', answers: ['Feliz aniversário! Espero que todos os seus sonhos se realizem.', 'Parabéns! Que todos os seus desejos se realizem.'] },
      { prompt: 'Please give my regards to your family.', answers: ['Por favor, dê um abraço para a sua família.', 'Dá um alô pra sua família.'] },
      { prompt: 'I am sorry for your loss.', answers: ['Sinto muito pela sua perda.', 'Minhas condolências.'] },
      { prompt: 'Congratulations on your wedding!', answers: ['Parabéns pelo seu casamento!', 'Parabéns pelo casório!'] },
      { prompt: 'How have you been lately?', answers: ['Como você tem estado ultimamente?', 'Como você tá indo?'] },
      { prompt: 'I have not seen you in ages!', answers: ['Faz tempo que não te vejo!', 'Quanto tempo sem te ver!'] },
      { prompt: 'You look great today.', answers: ['Você está ótimo hoje.', 'Você tá ótima hoje.'] },
      { prompt: 'Thank you so much for having me.', answers: ['Muito obrigado por me receber.', 'Muito obrigada pela hospitalidade.'] },
      { prompt: 'Let me introduce you to a friend of mine.', answers: ['Deixa eu te apresentar um amigo meu.', 'Quero te apresentar um amigo meu.'] },
      { prompt: 'What are you up to this weekend?', answers: ['O que você vai fazer no fim de semana?', 'Qual é o plano pro fim de semana?'] },
      { prompt: 'I am really glad you could make it.', answers: ['Fico muito feliz que você pôde vir.', 'Que bom que você conseguiu aparecer.'] },
      { prompt: 'Please help yourself to some food.', answers: ['Fique à vontade para pegar um pouco de comida.', 'Fique à vontade, pode comer.'] },
      { prompt: 'I hope you feel better soon.', answers: ['Espero que você melhore logo.', 'Melhoras!'] },
      { prompt: 'Sorry, I did not mean to offend you.', answers: ['Desculpa, não quis te ofender.', 'Me desculpa, não foi minha intenção te ofender.'] },
      { prompt: 'Can I ask you a personal question?', answers: ['Posso te fazer uma pergunta pessoal?', 'Posso te perguntar uma coisa pessoal?'] },
      { prompt: 'That is none of my business.', answers: ['Isso não é da minha conta.', 'Não é assunto meu.'] },
      { prompt: 'You did not have to do that.', answers: ['Você não precisava fazer isso.', 'Não precisava se preocupar com isso.'] },
      { prompt: 'I owe you one.', answers: ['Te devo uma.', 'Tô te devendo.'] },
      { prompt: 'We are in this together.', answers: ['Estamos juntos nisso.', 'A gente tá nisso junto.'] },
      { prompt: 'Feel free to contact me anytime.', answers: ['Fique à vontade para entrar em contato a qualquer hora.', 'Pode me chamar quando quiser.'] },
      { prompt: 'I will keep that in mind.', answers: ['Vou levar isso em consideração.', 'Vou ter isso em mente.'] },
      { prompt: 'Let us keep in touch.', answers: ['Vamos manter contato.', 'Nos falamos!'] },
      { prompt: 'You can count on me.', answers: ['Pode contar comigo.', 'Tô aqui pra o que precisar.'] },
      { prompt: 'I appreciate your support.', answers: ['Agradeço o seu apoio.', 'Obrigado pelo apoio.'] },
      { prompt: 'Good luck with your interview!', answers: ['Boa sorte na sua entrevista!', 'Vai com tudo na entrevista!'] },
      { prompt: 'That was thoughtful of you.', answers: ['Foi muito gentil da sua parte.', 'Que atencioso você é.'] },
      { prompt: 'I am here if you need to talk.', answers: ['Estou aqui se você precisar conversar.', 'Pode me chamar se quiser conversar.'] },
      { prompt: "I'm so proud of you.", answers: ['Tenho muito orgulho de você.', 'Fico muito orgulhoso de você.'] },
      { prompt: 'We should celebrate!', answers: ['A gente deveria comemorar!', 'Merece uma comemoração!'] },
      { prompt: 'May I borrow your charger?', answers: ['Posso usar o seu carregador?', 'Você pode me emprestar o carregador?'] },
      { prompt: 'Sorry to bother you.', answers: ['Desculpe incomodar.', 'Me desculpa atrapalhar.'] },
      // Descrições (33)
      { prompt: 'The city is very vibrant and lively.', answers: ['A cidade é muito vibrante e animada.', 'A cidade tem muita energia, é muito movimentada.'] },
      { prompt: 'She has a calm and gentle personality.', answers: ['Ela tem uma personalidade calma e gentil.', 'Ela é uma pessoa calma e suave.'] },
      { prompt: 'The landscape is absolutely breathtaking.', answers: ['A paisagem é de tirar o fôlego.', 'A paisagem é simplesmente deslumbrante.'] },
      { prompt: 'He is a tall and athletic man.', answers: ['Ele é um homem alto e atlético.', 'Ele é alto e tem um corpo atlético.'] },
      { prompt: 'The neighborhood is quiet and safe.', answers: ['O bairro é tranquilo e seguro.', 'O bairro é bem sossegado e seguro.'] },
      { prompt: 'The apartment is small but cozy.', answers: ['O apartamento é pequeno mas aconchegante.', 'O apê é pequenininho mas bem aconchegante.'] },
      { prompt: 'She has curly brown hair.', answers: ['Ela tem cabelo castanho e cacheado.', 'Ela tem cabelo cacheado e moreno.'] },
      { prompt: 'The museum is modern and well-organized.', answers: ['O museu é moderno e bem organizado.', 'O museu é contemporâneo e muito bem organizado.'] },
      { prompt: 'He speaks very quickly.', answers: ['Ele fala muito rápido.', 'Ele fala muito depressa.'] },
      { prompt: 'The film is long but entertaining.', answers: ['O filme é longo, mas é interessante.', 'O filme é longo, mas vale a pena.'] },
      { prompt: 'She is very creative and artistic.', answers: ['Ela é muito criativa e artística.', 'Ela tem muito talento criativo.'] },
      { prompt: 'The beach was clean and peaceful.', answers: ['A praia estava limpa e tranquila.', 'A praia tava limpa e bem sossegada.'] },
      { prompt: 'The professor is strict but fair.', answers: ['O professor é rígido mas justo.', 'O professor é exigente mas é justo.'] },
      { prompt: 'The restaurant has a beautiful view.', answers: ['O restaurante tem uma vista linda.', 'O restaurante tem uma vista belíssima.'] },
      { prompt: 'He is shy around strangers.', answers: ['Ele é tímido com estranhos.', 'Ele fica acanhado perto de pessoas que não conhece.'] },
      { prompt: 'The traffic in the city is chaotic.', answers: ['O trânsito na cidade é caótico.', 'O trânsito da cidade é um caos.'] },
      { prompt: 'She has a warm and welcoming smile.', answers: ['Ela tem um sorriso caloroso e acolhedor.', 'Ela tem um sorriso muito receptivo.'] },
      { prompt: 'The concert was incredible.', answers: ['O show foi incrível.', 'O concerto foi incrível.'] },
      { prompt: 'He is always well-dressed.', answers: ['Ele está sempre bem vestido.', 'Ele é sempre elegante.'] },
      { prompt: 'The hotel room was spacious and clean.', answers: ['O quarto do hotel era espaçoso e limpo.', 'O quarto era amplo e bem limpo.'] },
      { prompt: 'The soup tastes a bit salty.', answers: ['A sopa está um pouco salgada.', 'A sopa tá meio salgada.'] },
      { prompt: 'She is an extremely hard-working person.', answers: ['Ela é uma pessoa extremamente trabalhadora.', 'Ela é muito dedicada ao trabalho.'] },
      { prompt: 'The new shopping center is enormous.', answers: ['O novo shopping é enorme.', 'O novo shopping é gigantesco.'] },
      { prompt: 'He has a great sense of humor.', answers: ['Ele tem um ótimo senso de humor.', 'Ele é muito engraçado.'] },
      { prompt: 'The water in the river is cold and clear.', answers: ['A água do rio é fria e cristalina.', 'A água do rio é gelada e bem limpinha.'] },
      { prompt: 'She is very detail-oriented.', answers: ['Ela é muito atenta aos detalhes.', 'Ela é muito perfeccionista com os detalhes.'] },
      { prompt: 'The streets are narrow and cobbled.', answers: ['As ruas são estreitas e de paralelepípedo.', 'As ruas são estreitinhas e com pedras.'] },
      { prompt: 'He is a very patient teacher.', answers: ['Ele é um professor muito paciente.', 'Ele tem muita paciência como professor.'] },
      { prompt: 'The park is full of trees and flowers.', answers: ['O parque é cheio de árvores e flores.', 'O parque tem muitas árvores e flores.'] },
      { prompt: 'The weather today is cloudy and humid.', answers: ['O tempo hoje está nublado e úmido.', 'Hoje o tempo está fechado e abafado.'] },
      { prompt: 'She is passionate about her work.', answers: ['Ela é apaixonada pelo seu trabalho.', 'Ela tem muito amor pelo trabalho que faz.'] },
      { prompt: 'The building is old but well-maintained.', answers: ['O prédio é antigo mas bem conservado.', 'O edifício é velho, mas está bem cuidado.'] },
      { prompt: 'He has a very loud and friendly voice.', answers: ['Ele tem uma voz muito alta e animada.', 'Ele tem uma voz bem alta e é bem descontraído.'] },
    ]}],
  },

  {
    id: 'var-pt-3',
    language: 'pt',
    stage: 'Variados',
    title: '100 Advanced Sentences',
    subtitle: 'Argumentation, nuance and complex expressions in 100 sentences',
    theory: `This module presents **100 advanced-level sentences** covering argumentation, linguistic nuance, and complex expressions. The grammatical structures and vocabulary are sophisticated, requiring solid command of Portuguese.

## Themes covered

- **Argumentation and rhetoric** — building a case, citing evidence, weighing pros and cons, hedging claims.
- **Nuanced idioms** — figurative expressions borrowed from English idioms but rendered naturally in Portuguese.
- **Complex/sophisticated structures** — conditional inversions, cleft sentences, and elevated connectors typical of formal writing and debate.

⚠️ **Common mistakes**
- Many idioms here cannot be translated word-for-word; learn each as a fixed unit, e.g. "isso é a ponta do iceberg" mirrors English structurally, but "ele queimou as pontes" doesn't always match English usage exactly.
- Advanced argumentative structures often use the subjunctive and inverted conditionals ("Tivesse eu sabido...") that don't exist in everyday speech — recognize them for reading comprehension, but know that simpler equivalents ("Se eu tivesse sabido...") are far more common when speaking.

💡 **Tip:** These sentences are excellent for shadowing practice (repeating after a native speaker) since they combine the rhythm of formal Portuguese with vocabulary you'll encounter in opinion articles, debates, and academic texts.

## Key vocabulary

• a evidência — the evidence
• a consequência — the consequence
• o argumento — the argument
• desafiar — to challenge
• considerar — to consider
• destacar — to highlight
• contradizer — to contradict
• distinguir — to distinguish
• a estaca zero — square one
• queimar as pontes — to burn bridges
• a ponta do iceberg — the tip of the iceberg
• arrepender-se — to regret`,
    exercises: [{ sentences: [
      // Argumentação e retórica (34)
      { prompt: 'Despite the challenges, we managed to succeed.', answers: ['Apesar dos desafios, conseguimos ter sucesso.', 'Mesmo diante dos obstáculos, conseguimos vencer.'] },
      { prompt: 'The data clearly indicates an upward trend.', answers: ['Os dados indicam claramente uma tendência de alta.', 'Os dados apontam claramente para uma tendência crescente.'] },
      { prompt: 'One could argue that the policy is counterproductive.', answers: ['Pode-se argumentar que a política é contraproducente.', 'Alguém poderia defender que essa política é contraproducente.'] },
      { prompt: 'The evidence overwhelmingly supports this theory.', answers: ['As evidências apoiam esmagadoramente essa teoria.', 'As evidências sustentam fortemente essa teoria.'] },
      { prompt: 'It is worth noting that the results vary significantly.', answers: ['Vale notar que os resultados variam significativamente.', 'É importante observar que os resultados divergem bastante.'] },
      { prompt: 'The root cause of the problem lies in inequality.', answers: ['A causa raiz do problema está na desigualdade.', 'A origem do problema está na desigualdade social.'] },
      { prompt: 'This raises an important question about ethics.', answers: ['Isso levanta uma questão importante sobre ética.', 'Isso suscita uma pergunta relevante sobre ética.'] },
      { prompt: 'The implications of this decision are far-reaching.', answers: ['As implicações dessa decisão são de grande alcance.', 'Essa decisão tem consequências muito amplas.'] },
      { prompt: 'We must weigh the risks against the benefits.', answers: ['Devemos pesar os riscos em relação aos benefícios.', 'Precisamos avaliar os riscos e os benefícios.'] },
      { prompt: 'The correlation does not imply causation.', answers: ['A correlação não implica causalidade.', 'Correlação não é causalidade.'] },
      { prompt: 'This argument fails to account for several factors.', answers: ['Este argumento não considera vários fatores.', 'Esse argumento deixa de lado vários aspectos importantes.'] },
      { prompt: 'The long-term consequences remain uncertain.', answers: ['As consequências a longo prazo permanecem incertas.', 'As consequências no longo prazo ainda são incertas.'] },
      { prompt: 'We need a more nuanced approach to this issue.', answers: ['Precisamos de uma abordagem mais matizada para essa questão.', 'Precisamos tratar esse assunto com mais nuances.'] },
      { prompt: 'The report highlights several key areas of concern.', answers: ['O relatório destaca várias áreas de preocupação principais.', 'O relatório aponta diversas áreas críticas de atenção.'] },
      { prompt: 'This is a false dichotomy.', answers: ['Isso é uma falsa dicotomia.', 'Isso é um falso dilema.'] },
      { prompt: 'The proposed solution is not without its flaws.', answers: ['A solução proposta não está isenta de falhas.', 'A solução proposta tem as suas limitações.'] },
      { prompt: 'History has repeatedly shown that this approach works.', answers: ['A história mostrou repetidamente que essa abordagem funciona.', 'A história já provou várias vezes que essa abordagem funciona.'] },
      { prompt: 'We cannot overlook the social dimensions of this problem.', answers: ['Não podemos ignorar as dimensões sociais desse problema.', 'Não dá para desconsiderar os aspectos sociais do problema.'] },
      { prompt: 'The debate has become increasingly polarized.', answers: ['O debate ficou cada vez mais polarizado.', 'O debate está cada vez mais dividido.'] },
      { prompt: 'It is essential to distinguish between these two concepts.', answers: ['É essencial distinguir entre esses dois conceitos.', 'É fundamental diferenciar esses dois conceitos.'] },
      { prompt: 'The findings challenge conventional wisdom.', answers: ['Os resultados desafiam a sabedoria convencional.', 'As descobertas colocam em xeque o pensamento tradicional.'] },
      { prompt: 'There is no simple solution to a complex problem.', answers: ['Não há solução simples para um problema complexo.', 'Problema complexo não tem solução fácil.'] },
      { prompt: 'The burden of proof lies with those making the claim.', answers: ['O ônus da prova recai sobre aqueles que fazem a afirmação.', 'Quem afirma tem que provar.'] },
      { prompt: 'This policy has had unintended consequences.', answers: ['Essa política teve consequências não intencionais.', 'Essa política gerou efeitos colaterais inesperados.'] },
      { prompt: 'The two perspectives are not mutually exclusive.', answers: ['As duas perspectivas não são mutuamente exclusivas.', 'Os dois pontos de vista podem coexistir.'] },
      { prompt: 'The statistics paint a rather grim picture.', answers: ['As estatísticas pintam um quadro bastante sombrio.', 'Os números mostram um cenário bem preocupante.'] },
      { prompt: 'This begs the question of whether it is sustainable.', answers: ['Isso levanta a questão de se é sustentável.', 'Isso nos leva a perguntar se é sustentável.'] },
      { prompt: 'The argument rests on a shaky foundation.', answers: ['O argumento se apoia em uma base frágil.', 'O argumento tem uma base muito fraca.'] },
      { prompt: 'We must consider the broader context.', answers: ['Devemos considerar o contexto mais amplo.', 'Precisamos levar em conta o contexto geral.'] },
      { prompt: 'The problem is more systemic than individual.', answers: ['O problema é mais sistêmico do que individual.', 'O problema tem raízes sistêmicas, não é só individual.'] },
      { prompt: 'Critical thinking is essential in any field.', answers: ['O pensamento crítico é essencial em qualquer área.', 'O senso crítico é fundamental em qualquer campo.'] },
      { prompt: 'The study was conducted over a ten-year period.', answers: ['O estudo foi conduzido ao longo de um período de dez anos.', 'O estudo foi realizado durante dez anos.'] },
      { prompt: 'This contradicts what was previously established.', answers: ['Isso contradiz o que foi estabelecido anteriormente.', 'Isso vai contra o que se sabia antes.'] },
      { prompt: 'The conclusion follows logically from the premises.', answers: ['A conclusão decorre logicamente das premissas.', 'A conclusão é uma consequência lógica das premissas.'] },
      // Nuances e expressões sofisticadas (33)
      { prompt: 'I am at a loss for words.', answers: ['Estou sem palavras.', 'Fiquei sem palavras.'] },
      { prompt: 'She gave me a backhanded compliment.', answers: ['Ela me deu um elogio velado.', 'Ela me deu um elogio que na verdade foi uma crítica.'] },
      { prompt: 'He tends to beat around the bush.', answers: ['Ele costuma enrolar sem chegar ao ponto.', 'Ele tem o hábito de dar voltas sem ir direto ao assunto.'] },
      { prompt: 'Let us cut to the chase.', answers: ['Vamos direto ao ponto.', 'Vamos ao que interessa.'] },
      { prompt: 'She is keeping me in the dark.', answers: ['Ela está me deixando às escuras.', 'Ela não me conta nada, me deixa no escuro.'] },
      { prompt: "He is playing devil's advocate.", answers: ['Ele está fazendo o papel do advogado do diabo.', 'Ele está defendendo o lado oposto só para gerar debate.'] },
      { prompt: "I'm on the fence about this.", answers: ['Estou em cima do muro sobre isso.', 'Ainda não decidi o que pensar sobre isso.'] },
      { prompt: 'That ship has already sailed.', answers: ['Esse navio já partiu.', 'Essa oportunidade já foi, não tem mais volta.'] },
      { prompt: 'We need to think outside the box.', answers: ['Precisamos pensar fora da caixa.', 'Precisamos pensar de forma criativa e inovadora.'] },
      { prompt: 'She hit the nail on the head.', answers: ['Ela acertou em cheio.', 'Ela foi diretamente ao ponto.'] },
      { prompt: 'He is barking up the wrong tree.', answers: ['Ele está latindo para a árvore errada.', 'Ele está no caminho errado, procurando no lugar errado.'] },
      { prompt: 'That was the last straw.', answers: ["Isso foi a gota d'água.", 'Isso foi a gota que transbordou o copo.'] },
      { prompt: "She doesn't mince words.", answers: ['Ela não papeia, vai direto ao ponto.', 'Ela não tem papas na língua.'] },
      { prompt: 'We are going around in circles.', answers: ['Estamos andando em círculos.', 'A gente fica rodando sem sair do lugar.'] },
      { prompt: 'He jumped to conclusions.', answers: ['Ele tirou conclusões precipitadas.', 'Ele concluiu rápido demais sem pensar.'] },
      { prompt: 'She read between the lines.', answers: ['Ela leu nas entrelinhas.', 'Ela entendeu o que estava implícito.'] },
      { prompt: 'He always puts his foot in his mouth.', answers: ['Ele sempre mete os pés pelas mãos.', 'Ele sempre fala o que não deve na hora errada.'] },
      { prompt: "Let's not put all our eggs in one basket.", answers: ['Não vamos colocar todos os ovos na mesma cesta.', 'Não devemos depender de uma única opção.'] },
      { prompt: 'She has a hidden agenda.', answers: ['Ela tem uma agenda oculta.', 'Ela tem segundas intenções.'] },
      { prompt: "That's a hard pill to swallow.", answers: ['Isso é difícil de engolir.', 'Isso é um remédio amargo de tomar.'] },
      { prompt: 'He took it with a grain of salt.', answers: ['Ele levou com um grão de sal.', 'Ele não levou muito a sério.'] },
      { prompt: 'She sees the glass as half full.', answers: ['Ela vê o copo meio cheio.', 'Ela é otimista, vê sempre o lado positivo.'] },
      { prompt: 'He burned his bridges.', answers: ['Ele queimou suas pontes.', 'Ele estragou as relações de forma irreversível.'] },
      { prompt: 'That plan is back to square one.', answers: ['Esse plano voltou à estaca zero.', 'Voltamos à estaca zero com esse plano.'] },
      { prompt: "She's on top of things.", answers: ['Ela está no controle de tudo.', 'Ela está por cima de tudo que está acontecendo.'] },
      { prompt: 'He always goes the extra mile.', answers: ['Ele sempre vai além do esperado.', 'Ele sempre faz mais do que o necessário.'] },
      { prompt: 'This is a double-edged sword.', answers: ['Isso é uma faca de dois gumes.', 'Isso tem dois lados, pode ser bom e ruim.'] },
      { prompt: 'She has the Midas touch.', answers: ['Ela tem o toque de Midas.', 'Tudo que ela toca vira ouro.'] },
      { prompt: 'He threw her under the bus.', answers: ['Ele jogou ela para os lobos.', 'Ele a deixou na mão na hora crítica.'] },
      { prompt: 'That is just the tip of the iceberg.', answers: ['Isso é só a ponta do iceberg.', 'Isso é só o começo do problema, tem muito mais.'] },
      { prompt: "She's sitting on the fence.", answers: ['Ela está em cima do muro.', 'Ela não toma partido, fica no meio.'] },
      { prompt: 'He let the cat out of the bag.', answers: ['Ele deixou o gato escapar do saco.', 'Ele entregou o segredo sem querer.'] },
      { prompt: 'We are in the same boat.', answers: ['Estamos no mesmo barco.', 'A gente tá na mesma situação.'] },
      // Expressões complexas e sofisticadas (33)
      { prompt: 'Had I known earlier, I would have acted differently.', answers: ['Se eu soubesse antes, teria agido de forma diferente.', 'Se tivesse sabido antes, teria feito diferente.'] },
      { prompt: 'Not only did she succeed, but she also inspired others.', answers: ['Ela não apenas teve sucesso, como também inspirou outras pessoas.', 'Além de ter sucesso, ela ainda inspirou muita gente.'] },
      { prompt: 'The more I learn, the more I realize how much I do not know.', answers: ['Quanto mais aprendo, mais percebo o quanto não sei.', 'Quanto mais eu estudo, mais vejo que tenho muito a aprender.'] },
      { prompt: 'Were it not for her support, I would have given up.', answers: ['Se não fosse pelo apoio dela, teria desistido.', 'Sem o apoio dela, eu teria desistido.'] },
      { prompt: 'No sooner had he left than the phone rang.', answers: ['Mal ele saiu e o telefone tocou.', 'Ele mal saiu e o telefone começou a tocar.'] },
      { prompt: 'She speaks as if she knew everything.', answers: ['Ela fala como se soubesse tudo.', 'Ela fala como se entendesse tudo.'] },
      { prompt: 'What matters most is not what you say, but what you do.', answers: ['O que mais importa não é o que você diz, mas o que você faz.', 'O que conta mesmo não é falar, é fazer.'] },
      { prompt: 'The fact that he denied it makes it more suspicious.', answers: ['O fato de ele ter negado torna a situação ainda mais suspeita.', 'Ele negar só deixou mais suspeito.'] },
      { prompt: 'Whatever happens, we will face it together.', answers: ['Seja lá o que acontecer, enfrentaremos juntos.', 'O que quer que aconteça, a gente enfrenta junto.'] },
      { prompt: 'The sooner we act, the better the outcome will be.', answers: ['Quanto antes agirmos, melhor será o resultado.', 'Quanto mais rápido a gente agir, melhor vai ficar.'] },
      { prompt: 'It was not until she explained it that I understood.', answers: ['Só depois que ela explicou é que eu entendi.', 'Foi só quando ela explicou que eu entendi de verdade.'] },
      { prompt: 'He denied having met her before.', answers: ['Ele negou ter a encontrado antes.', 'Ele negou que já tinha se encontrado com ela.'] },
      { prompt: 'By the time you read this, everything will have changed.', answers: ['Quando você ler isso, tudo terá mudado.', 'Na hora que você ler isso, tudo já vai ter mudado.'] },
      { prompt: 'She insisted on being heard.', answers: ['Ela insistiu em ser ouvida.', 'Ela não abriu mão de ser escutada.'] },
      { prompt: 'I wish things had turned out differently.', answers: ['Quem dera as coisas tivessem saído de forma diferente.', 'Tomara que tivesse dado diferente.'] },
      { prompt: 'The longer we wait, the harder it becomes.', answers: ['Quanto mais esperamos, mais difícil fica.', 'Quanto mais a gente esperar, mais complicado vai ficar.'] },
      { prompt: 'He regretted not having taken the opportunity.', answers: ['Ele se arrependeu de não ter aproveitado a oportunidade.', 'Ele ficou arrependido de ter perdido a oportunidade.'] },
      { prompt: 'Such was the impact of her speech that everyone fell silent.', answers: ['Tal foi o impacto do discurso dela que todos ficaram em silêncio.', 'O discurso dela foi tão marcante que todo mundo ficou calado.'] },
      { prompt: 'Had she been more careful, the accident would not have happened.', answers: ['Se ela tivesse sido mais cuidadosa, o acidente não teria ocorrido.', 'Se ela tivesse prestado mais atenção, o acidente não acontecia.'] },
      { prompt: 'The very idea of it makes me uncomfortable.', answers: ['A simples ideia disso me deixa desconfortável.', 'Só de pensar nisso me dá um frio na barriga.'] },
      { prompt: 'It goes without saying that honesty is crucial.', answers: ['Nem é preciso dizer que a honestidade é fundamental.', 'É óbvio que a honestidade é essencial.'] },
      { prompt: 'She behaved as though nothing had happened.', answers: ['Ela se comportou como se nada tivesse acontecido.', 'Ela agiu como se nada tivesse ocorrido.'] },
      { prompt: 'What little he said was enough to change my mind.', answers: ['O pouco que ele disse foi suficiente para mudar minha opinião.', 'Mesmo falando pouco, ele me fez mudar de ideia.'] },
      { prompt: 'The situation calls for an immediate response.', answers: ['A situação exige uma resposta imediata.', 'A situação requer ação imediata.'] },
      { prompt: 'He could not help but laugh.', answers: ['Ele não conseguiu evitar de rir.', 'Ele não teve jeito, teve que rir.'] },
      { prompt: 'The results left much to be desired.', answers: ['Os resultados deixaram muito a desejar.', 'Os resultados não foram bons.'] },
      { prompt: 'She made no effort to hide her disappointment.', answers: ['Ela não fez nenhum esforço para esconder a decepção.', 'Ela nem tentou esconder a decepção.'] },
      { prompt: 'It remains to be seen whether the plan will work.', answers: ['Resta saber se o plano vai funcionar.', 'Ainda está para ver se o plano vai dar certo.'] },
      { prompt: 'He took full responsibility for the failure.', answers: ['Ele assumiu total responsabilidade pelo fracasso.', 'Ele assumiu a culpa pelo erro.'] },
      { prompt: 'The outcome exceeded all our expectations.', answers: ['O resultado superou todas as nossas expectativas.', 'O resultado foi além do que esperávamos.'] },
      { prompt: 'She tends to overanalyze everything.', answers: ['Ela tende a analisar tudo demais.', 'Ela tem o costume de pensar demais em tudo.'] },
      { prompt: 'We can no longer afford to ignore this.', answers: ['Não podemos mais nos dar ao luxo de ignorar isso.', 'A gente não pode mais fechar os olhos para isso.'] },
      { prompt: 'What was once considered impossible is now reality.', answers: ['O que antes era considerado impossível agora é realidade.', 'O que parecia impossível virou realidade.'] },
    ]}],
  },

  {
    id: 'rev-int-pt',
    language: 'pt',
    stage: 'Intermediário',
    isReview: true,
    title: 'Intermediate Review',
    subtitle: 'Practice subjunctive, conditional, passive voice, relative clauses and gerund.',
    theory: `## Review of the most important intermediate structures

### 1. Present Subjunctive
Used after verbs like querer (want), esperar (hope), and precisar (need) + que:
- Espero que você venha. (I hope you come.)
- É importante que ele saiba. (It's important that he knows.)

### 2. Conditional (Futuro do Pretérito)
- Se eu tivesse tempo, viajaria mais. (If I had time, I would travel more — past/contrary-to-fact hypothesis.)
- Se eu tiver tempo, viajarei. (If I have time, I will travel — future hypothesis, uses future subjunctive + future indicative.)

### 3. Passive Voice
- O relatório foi escrito pela equipe. (The report was written by the team.)
- O pacote estava sendo entregue quando cheguei. (The package was being delivered when I arrived.)

### 4. Relative Pronouns

| Pronoun | Use |
|---------|-----|
| que | that / which / who (most common, for people and things) |
| quem | who (after a preposition) |
| onde | where (places) |
| cujo/cuja | whose (agrees with the noun that follows it) |
| o qual / a qual | which / who (formal, used to avoid ambiguity) |

### 5. Gerund and Personal Infinitive
- Ela saiu cantando. (She left singing.)
- É importante estudares todos os dias. (It's important for you to study every day.)

⚠️ **Common mistakes**
- Don't use the indicative after expressions of doubt/wish/necessity — "Espero que você vem" is wrong; it must be "venha."
- "Cujo" agrees with the noun it introduces, not with the possessor: "a casa cujo telhado" (whose roof, masculine because "telhado" is masculine), even though "casa" is feminine.

💡 **Tip:** When reviewing, try converting each example into a different tense or person to check that you really understand the underlying rule, not just the memorized sentence.

## Key vocabulary

• durar — to last
• viajar — to travel
• participar — to participate
• crescer — to grow up
• chegar a tempo — to arrive on time
• entregar — to deliver
• se despedir — to say goodbye
• o treinamento — the training
• o conselho — the board
• danificar — to damage
• sugerir — to suggest
• a tempestade — the storm`,
    exercises: [{ sentences: [
      { prompt: 'I hope the meeting does not last long.', answers: ['Espero que a reunião não dure muito.', 'Tomara que a reunião acabe logo.'] },
      { prompt: 'If I had more time, I would travel the world.', answers: ['Se eu tivesse mais tempo, viajaria pelo mundo.', 'Se eu tivesse mais tempo, viajaria o mundo.'] },
      { prompt: 'The letter was written by her lawyer.', answers: ['A carta foi escrita pelo advogado dela.', 'A carta foi redigida pelo advogado dela.'] },
      { prompt: 'The person who called did not leave a message.', answers: ['A pessoa que ligou não deixou recado.', 'Quem ligou não deixou mensagem.'] },
      { prompt: 'It is essential that everyone attends the training.', answers: ['É essencial que todos participem do treinamento.', 'É preciso que todo mundo esteja no treinamento.'] },
      { prompt: 'She left the office without saying goodbye.', answers: ['Ela saiu do escritório sem se despedir.', 'Ela foi embora sem dar tchau.'] },
      { prompt: 'If you study hard, you will pass the exam.', answers: ['Se você estudar muito, vai passar na prova.', 'Se você estudar bastante, você passa no exame.'] },
      { prompt: 'The project was approved by the board.', answers: ['O projeto foi aprovado pelo conselho.', 'O projeto foi aprovado pela diretoria.'] },
      { prompt: 'The city where I grew up has changed a lot.', answers: ['A cidade onde cresci mudou muito.', 'A cidade em que cresci mudou muito.'] },
      { prompt: 'I doubt that he will arrive on time.', answers: ['Duvido que ele chegue a tempo.', 'Duvido que ele chegue no horário.'] },
      { prompt: 'The packages were being delivered when it started raining.', answers: ['Os pacotes estavam sendo entregues quando começou a chover.', 'Estavam entregando os pacotes quando choveu.'] },
      { prompt: 'We need someone who speaks French and Portuguese.', answers: ['Precisamos de alguém que fale francês e português.', 'Precisamos de uma pessoa que saiba falar francês e português.'] },
      { prompt: 'She came in singing and smiling.', answers: ['Ela entrou cantando e sorrindo.', 'Ela chegou cantando e de bom humor.'] },
      { prompt: 'If I were you, I would not say that.', answers: ['Se eu fosse você, não diria isso.', 'No seu lugar, não falaria isso.'] },
      { prompt: 'It is strange that he has not called yet.', answers: ['É estranho que ele ainda não tenha ligado.', 'É esquisito ele não ter ligado ainda.'] },
      { prompt: 'The house whose roof was damaged was rebuilt.', answers: ['A casa cujo telhado foi danificado foi reconstruída.', 'A casa que teve o telhado danificado foi reconstruída.'] },
      { prompt: 'I wish you could come to the party.', answers: ['Queria que você pudesse vir à festa.', 'Tomara que você consiga vir na festa.'] },
      { prompt: 'The decision was made without consulting the team.', answers: ['A decisão foi tomada sem consultar a equipe.', 'Decidiram sem ouvir o time.'] },
      { prompt: 'Running every day has helped my health.', answers: ['Correr todo dia melhorou minha saúde.', 'Correr todos os dias tem ajudado minha saúde.'] },
      { prompt: 'He suggested that we leave before the storm.', answers: ['Ele sugeriu que partíssemos antes da tempestade.', 'Ele sugeriu que a gente fosse embora antes da tempestade.'] },
    ]}],
    dialogExercise: {
      audioText: 'Bom dia! Gostaria de fazer uma reserva pra dois no sábado à noite. Se possível, prefiro uma mesa perto da janela.',
      question: 'What is the person requesting?',
      options: [
        { text: 'A reservation for two on Saturday night, near the window.', correct: true },
        { text: 'A reservation for two on Friday night, near the window.', correct: false },
        { text: 'A reservation for four on Saturday night.', correct: false },
        { text: 'A cancellation of a previous reservation.', correct: false },
      ],
    },
  },

  {
    id: 'rev-adv-pt',
    language: 'pt',
    stage: 'Avançado',
    isReview: true,
    title: 'Advanced Review',
    subtitle: 'Consolidate nominalization, reported speech, complex clauses and register nuance.',
    theory: `## Review of advanced Portuguese structures

### 1. Nominalization
- Decidir (to decide) → a decisão (the decision) / Partir (to leave) → a partida (the departure)
- Nouns derived from verbs allow for a more formal style, common in reports and news writing: "A aprovação da proposta" (The approval of the proposal) sounds more formal than "Aprovar a proposta" used as a subject.

### 2. Reported Speech
- "Eu farei isso" (I will do that) → Ele disse que faria isso. (He said he would do that.)
- "Venha amanhã" (Come tomorrow) → Ela pediu que eu fosse no dia seguinte. (She asked me to go the next day.)

### 3. Concessive and Causal Clauses
- Embora chova, sairemos. (Although it rains, we will go out — concessive, subjunctive.)
- Mesmo que tenha errado, continua. (Even if he made a mistake, he continues — concessive, subjunctive.)
- Como estava cansado, foi dormir cedo. (Since he was tired, he went to sleep early — causal.)
- Por conta de atrasos, cancelou. (Due to delays, he cancelled — causal.)

### 4. Future Subjunctive
- Quando você chegar, me avise. (When you arrive, let me know.)
- Se ele vier, poderemos começar. (If he comes, we will be able to start.)

### 5. Formal vs. Colloquial Register

| Formal | Colloquial |
|--------|-----------|
| Solicito que envie os documentos. (I request that you send the documents.) | Manda o documento pra mim. (Send me the document.) |

⚠️ **Common mistakes**
- Mixing nominalization with a verb in the same clause: "A aprovação aprovou o projeto" is redundant — choose either the nominalized form as subject or a full verbal clause.
- Forgetting that "embora" and "mesmo que" both require the subjunctive, while "como" (causal, meaning "since") takes the indicative.

💡 **Tip:** At this level, try rewriting colloquial sentences in formal register and vice versa — this is the single best exercise for mastering register-switching, which is what truly advanced fluency depends on.

## Key vocabulary

• o adiamento — the postponement
• decepcionar — to disappoint
• a aprovação — the approval
• a renúncia — the resignation
• o lançamento — the launch
• a negociação — the negotiation
• insistir — to insist
• alegar — to claim
• a greve — the strike
• exigir — to require
• prosseguir — to proceed
• tratar com cuidado — to handle with care`,
    exercises: [{ sentences: [
      { prompt: 'The postponement of the event disappointed many fans.', answers: ['O adiamento do evento decepcionou muitos fãs.', 'Adiar o evento decepcionou muita gente.'] },
      { prompt: 'Even though it was raining, they decided to go out.', answers: ['Embora estivesse chovendo, eles decidiram sair.', 'Mesmo chovendo, decidiram sair.'] },
      { prompt: 'She said she would call back as soon as possible.', answers: ['Ela disse que retornaria a ligação assim que possível.', 'Ela falou que ligaria de volta o quanto antes.'] },
      { prompt: 'When the results come out, let me know immediately.', answers: ['Quando os resultados saírem, me avise imediatamente.', 'Assim que sair o resultado, me fala logo.'] },
      { prompt: 'The approval of the proposal took longer than expected.', answers: ['A aprovação da proposta demorou mais do que o esperado.', 'Aprovar a proposta levou mais tempo do que esperávamos.'] },
      { prompt: 'He behaved as though nothing had happened, which bothered everyone.', answers: ['Ele se comportou como se nada tivesse acontecido, o que incomodou a todos.', 'Ele agiu como se nada tivesse ocorrido, o que chateou todo mundo.'] },
      { prompt: 'Since he had not prepared, the presentation was a disaster.', answers: ['Como não tinha se preparado, a apresentação foi um desastre.', 'Por não ter se preparado, a apresentação foi terrível.'] },
      { prompt: 'She told me to be careful with what I say.', answers: ['Ela me disse para ter cuidado com o que eu falo.', 'Ela me pediu para eu tomar cuidado com o que digo.'] },
      { prompt: 'Despite the difficulties, the team completed the project on time.', answers: ['Apesar das dificuldades, a equipe concluiu o projeto no prazo.', 'Mesmo com as dificuldades, o time entregou o projeto no prazo.'] },
      { prompt: 'The resignation of the director shocked the entire company.', answers: ['A renúncia do diretor chocou toda a empresa.', 'O diretor pedir demissão chocou todos na empresa.'] },
      { prompt: 'As soon as the contract is signed, we can proceed.', answers: ['Assim que o contrato for assinado, podemos prosseguir.', 'Quando assinar o contrato, a gente pode continuar.'] },
      { prompt: 'He insisted that we review the numbers again.', answers: ['Ele insistiu que revisássemos os números novamente.', 'Ele insistiu para a gente checar os números de novo.'] },
      { prompt: 'The launch of the product generated great expectations.', answers: ['O lançamento do produto gerou grandes expectativas.', 'Lançar o produto gerou muita expectativa.'] },
      { prompt: 'Even if you disagree, please respect the decision.', answers: ['Mesmo que você discorde, por favor respeite a decisão.', 'Mesmo não concordando, respeita a decisão, por favor.'] },
      { prompt: 'She asked whether I had already spoken with the manager.', answers: ['Ela perguntou se eu já tinha falado com o gerente.', 'Ela quis saber se eu já tinha conversado com o chefe.'] },
      { prompt: 'Due to the strike, the trains were not running.', answers: ['Por conta da greve, os trens não estavam circulando.', 'Devido à greve, os trens pararam de funcionar.'] },
      { prompt: 'The negotiation of the contract requires great care.', answers: ['A negociação do contrato requer muito cuidado.', 'Negociar o contrato exige bastante atenção.'] },
      { prompt: 'Provided that you follow the instructions, it will work.', answers: ['Desde que você siga as instruções, vai funcionar.', 'Contanto que siga as instruções, vai dar certo.'] },
      { prompt: 'He claimed to have been unfairly treated.', answers: ['Ele alegou ter sido tratado injustamente.', 'Ele disse que foi tratado de forma injusta.'] },
      { prompt: 'The more complex the task, the more time it requires.', answers: ['Quanto mais complexa a tarefa, mais tempo ela exige.', 'Quanto mais difícil a tarefa, mais tempo precisa.'] },
    ]}],
    dialogExercise: {
      audioText: 'Apesar de termos enfrentado vários obstáculos ao longo do projeto, conseguimos entregá-lo dentro do prazo. Gostaria de agradecer a todos os membros da equipe pela dedicação.',
      question: 'What did the speaker emphasize?',
      options: [
        { text: 'Despite obstacles, the project was delivered on time and the team was thanked.', correct: true },
        { text: 'The project was delayed but the quality was excellent.', correct: false },
        { text: 'The team failed to meet the deadline despite working hard.', correct: false },
        { text: 'The project was cancelled due to too many obstacles.', correct: false },
      ],
    },
  },
];
