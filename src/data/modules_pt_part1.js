export const MODULES_PT_PART1 = [
  // ─── STAGE: FUNDAMENTOS ────────────────────────────────────────────────────

  {
    id: 'fund-pt-1',
    language: 'pt',
    stage: 'Fundamentos',
    title: 'Ser and Estar',
    subtitle: 'Learn the difference between ser and estar in Brazilian Portuguese.',
    theory: `Portuguese has two verbs for the English "to be": **ser** and **estar**. Choosing the right one is one of the first big hurdles for English speakers, because English just uses "to be" for everything.

## Ser vs. Estar — the core idea

**SER** is for permanent or essential characteristics: identity, origin, profession, nationality, what something fundamentally *is*.

**ESTAR** is for temporary states: emotions, location, conditions that can change.

## Conjugation (present tense)

| Pronoun              | ser   | estar  |
|----------------------|-------|--------|
| eu (I)                | sou   | estou  |
| você / ele / ela (you/he/she) | é | está |
| nós (we)              | somos | estamos|
| vocês / eles / elas (you all/they) | são | estão |

## Examples with SER

- Eu sou brasileiro. (I am Brazilian.)
- Ela é professora. (She is a teacher.)
- Nós somos amigos. (We are friends.)
- Ele é alto. (He is tall.) — a lasting physical trait
- Isso é importante. (This is important.)

## Examples with ESTAR

- Eu estou bem. (I am well.)
- Ele está cansado. (He is tired.)
- Nós estamos em casa. (We are at home.)
- Ela está com fome. (She is hungry.) — note: with hunger/thirst/cold, Portuguese uses "estar com" + noun, not an adjective.
- O céu está nublado hoje. (The sky is cloudy today.)

## The same adjective, two different meanings

Some adjectives can take either verb, and the choice changes the meaning:

- Ela é bonita. (She is beautiful. — a general, lasting trait.)
- Ela está bonita. (She looks beautiful [today/right now]. — a temporary impression.)
- Ele é nervoso. (He is a nervous person. — personality.)
- Ele está nervoso. (He is nervous [right now]. — a current state.)

💡 **Tip:** Ask yourself "is this likely to change soon?" If yes → **estar**. If it's a defining trait → **ser**. This isn't a perfect rule, but it works for the vast majority of cases.

⚠️ **Common mistakes**
- Don't use **ser** for location — location always takes **estar**: "Ele está no Brasil" (He is in Brazil), never "Ele é no Brasil."
- Don't translate "I am hungry/cold/thirsty" with an adjective the way English does. Portuguese says "estar com fome/frio/sede" (literally "to be with hunger"): Estou com frio (I am cold), not "Eu sou frio" (which would mean "I am a cold/distant person").
- Remember that **estar** is irregular — it is not a regular -ar verb (eu estou, not "esto").

## Key vocabulary

• brasileiro/brasileira — Brazilian
• professora — teacher (female)
• amigos — friends
• cansado — tired
• em casa — at home
• gentil / simpático — kind, nice
• felizes — happy
• médico — doctor
• com fome — hungry
• estudante / aluno — student
• aberta — open (fem.)
• pronto — ready
• inteligente — intelligent
• quente — hot`,
    exercises: [{ sentences: [
      { prompt: 'I am Brazilian.', answers: ['Eu sou brasileiro.', 'Sou brasileiro.', 'Eu sou brasileira.', 'Sou brasileira.'] },
      { prompt: 'She is a teacher.', answers: ['Ela é professora.', 'Ela é uma professora.'] },
      { prompt: 'We are friends.', answers: ['Nós somos amigos.', 'Somos amigos.', 'A gente é amigo.'] },
      { prompt: 'I am well.', answers: ['Eu estou bem.', 'Estou bem.', 'Tô bem.'] },
      { prompt: 'He is tired.', answers: ['Ele está cansado.', 'Ele tá cansado.'] },
      { prompt: 'We are at home.', answers: ['Nós estamos em casa.', 'Estamos em casa.', 'A gente está em casa.', 'A gente tá em casa.'] },
      { prompt: 'You are very kind.', answers: ['Você é muito gentil.', 'Você é muito simpático.', 'Você é muito simpática.'] },
      { prompt: 'They are happy.', answers: ['Eles estão felizes.', 'Elas estão felizes.', 'Eles tão felizes.'] },
      { prompt: 'I am not at home.', answers: ['Eu não estou em casa.', 'Não estou em casa.', 'Não tô em casa.'] },
      { prompt: 'He is a doctor.', answers: ['Ele é médico.', 'Ele é um médico.'] },
      { prompt: 'She is beautiful.', answers: ['Ela é bonita.', 'Ela está bonita.'] },
      { prompt: 'I am hungry.', answers: ['Eu estou com fome.', 'Estou com fome.', 'Tô com fome.'] },
      { prompt: 'Where are you?', answers: ['Onde você está?', 'Cadê você?', 'Onde cê tá?'] },
      { prompt: 'They are students.', answers: ['Eles são estudantes.', 'Elas são estudantes.', 'Eles são alunos.'] },
      { prompt: 'I am from São Paulo.', answers: ['Eu sou de São Paulo.', 'Sou de São Paulo.'] },
      { prompt: 'The door is open.', answers: ['A porta está aberta.', 'A porta tá aberta.'] },
      { prompt: 'We are ready.', answers: ['Nós estamos prontos.', 'Estamos prontos.', 'A gente tá pronto.'] },
      { prompt: 'She is very intelligent.', answers: ['Ela é muito inteligente.', 'Ela é super inteligente.'] },
      { prompt: 'The coffee is hot.', answers: ['O café está quente.', 'O café tá quente.'] },
      { prompt: 'I am fine, thank you.', answers: ['Estou bem, obrigado.', 'Estou bem, obrigada.', 'Tô bem, obrigado.', 'Tô bem, valeu.'] },
    ]}],
  },

  {
    id: 'fund-pt-2',
    language: 'pt',
    stage: 'Fundamentos',
    title: 'Articles and Gender',
    subtitle: 'Learn definite and indefinite articles and noun gender in Portuguese.',
    theory: `In Portuguese, every noun has a **gender** — masculine or feminine — even for objects that have no natural gender in English (a table, a book, an idea). Articles ("the," "a/an") must agree with the gender AND number of the noun they accompany.

## Definite Articles ("the")

| Gender    | Singular | Plural |
|-----------|----------|--------|
| Masculine | o        | os     |
| Feminine  | a        | as     |

## Indefinite Articles ("a/an" and "some")

| Gender    | Singular | Plural |
|-----------|----------|--------|
| Masculine | um       | uns    |
| Feminine  | uma      | umas   |

## General gender rules

- Words ending in **-o** → usually masculine: o livro (the book), o carro (the car), o gato (the cat)
- Words ending in **-a** → usually feminine: a casa (the house), a mesa (the table), a gata (the [female] cat)
- Words ending in **-ção, -dade, -gem** → almost always feminine: a nação (the nation), a cidade (the city), a viagem (the trip)
- Exceptions to memorize: o dia (the day), o mapa (the map), o problema (the problem), a mão (the hand), o coração (the heart)

## Contractions with prepositions

Portuguese fuses certain prepositions with the article that follows them — you cannot keep them separate.

| Preposition + Article | Result | Example |
|------------------------|--------|---------|
| de + o                 | do     | o livro do professor (the teacher's book) |
| de + a                 | da     | a porta da casa (the door of the house) |
| de + os                | dos    | os carros dos vizinhos (the neighbors' cars) |
| de + as                | das    | as chaves das portas (the keys of the doors) |
| em + o                 | no     | no parque (in the park) |
| em + a                 | na     | na cidade (in the city) |
| em + os                | nos    | nos Estados Unidos (in the United States) |
| em + as                | nas    | nas férias (during the holidays) |

## More examples

- O livro está na mesa. (The book is on the table.)
- Eu preciso de uma caneta. (I need a pen.)
- Ela mora na cidade. (She lives in the city.)

💡 **Tip:** When you learn a new noun, always learn it WITH its article (o carro, not just "carro"). That habit fixes the gender in your memory far better than memorizing rules.

⚠️ **Common mistakes**
- Don't assume gender always matches English logic — "a viagem" (the trip) is feminine even though "trip" feels neutral in English.
- Forgetting the contraction is a very common learner error: "Eu moro em a cidade" is wrong — it must be "Eu moro na cidade."
- Plural agreement applies to adjectives too, not just articles: "os carros caros" (the expensive cars), not "os carros caro."

## Key vocabulary

• mesa — table
• caneta — pen
• carro — car
• casa — house
• gato — cat
• água — water
• cachorro / cão — dog
• parque — park
• filme — movie
• cidade — city
• maçã — apple
• criança — child
• médico — doctor
• café — coffee
• problema — problem`,
    exercises: [{ sentences: [
      { prompt: 'The book is on the table.', answers: ['O livro está na mesa.', 'O livro tá na mesa.'] },
      { prompt: 'I need a pen.', answers: ['Eu preciso de uma caneta.', 'Preciso de uma caneta.'] },
      { prompt: 'The cars are expensive.', answers: ['Os carros são caros.', 'Os carros custam caro.'] },
      { prompt: 'She bought a house.', answers: ['Ela comprou uma casa.', 'Ela comprou uma casa nova.'] },
      { prompt: 'The cat is sleeping.', answers: ['O gato está dormindo.', 'O gato tá dormindo.'] },
      { prompt: 'I want the water.', answers: ['Eu quero a água.', 'Quero a água.'] },
      { prompt: 'He has a dog.', answers: ['Ele tem um cachorro.', 'Ele tem um cão.'] },
      { prompt: 'The girls are in the park.', answers: ['As meninas estão no parque.', 'As meninas tão no parque.'] },
      { prompt: 'I saw a movie.', answers: ['Eu vi um filme.', 'Vi um filme.'] },
      { prompt: 'The door of the house is red.', answers: ['A porta da casa é vermelha.', 'A porta lá de casa é vermelha.'] },
      { prompt: 'He lives in the city.', answers: ['Ele mora na cidade.', 'Ele vive na cidade.'] },
      { prompt: 'I want some apples.', answers: ['Eu quero umas maçãs.', 'Quero umas maçãs.', 'Eu quero algumas maçãs.'] },
      { prompt: 'The children are playing.', answers: ['As crianças estão brincando.', 'As crianças tão brincando.'] },
      { prompt: 'I need a doctor.', answers: ['Eu preciso de um médico.', 'Preciso de um médico.'] },
      { prompt: 'The sun is shining.', answers: ['O sol está brilhando.', 'O sol tá brilhando.'] },
      { prompt: 'She is reading a book.', answers: ['Ela está lendo um livro.', 'Ela tá lendo um livro.'] },
      { prompt: 'The boys are tall.', answers: ['Os meninos são altos.', 'Os meninos são bem altos.'] },
      { prompt: 'I drank the coffee.', answers: ['Eu bebi o café.', 'Bebi o café.'] },
      { prompt: 'There is a problem.', answers: ['Há um problema.', 'Tem um problema.'] },
      { prompt: 'The women are talking.', answers: ['As mulheres estão conversando.', 'As mulheres tão falando.'] },
    ]}],
  },

  {
    id: 'fund-pt-3',
    language: 'pt',
    stage: 'Fundamentos',
    title: 'Numbers, Days and Months',
    subtitle: 'Learn to count and say days of the week and months in Portuguese.',
    theory: `## Numbers 1–20

| Number | Portuguese  | Number | Portuguese          |
|--------|-------------|--------|----------------------|
| 1      | um / uma    | 11     | onze                 |
| 2      | dois / duas | 12     | doze                 |
| 3      | três        | 13     | treze                |
| 4      | quatro      | 14     | quatorze / catorze   |
| 5      | cinco       | 15     | quinze               |
| 6      | seis        | 16     | dezesseis            |
| 7      | sete        | 17     | dezessete            |
| 8      | oito        | 18     | dezoito              |
| 9      | nove        | 19     | dezenove             |
| 10     | dez         | 20     | vinte                |

Note that **um/dois** have feminine forms (**uma/duas**) that must agree with the noun: um carro (one car) but uma casa (one house); dois meninos (two boys) but duas meninas (two girls). All other numbers stay the same regardless of gender.

## Larger numbers

| Number | Portuguese  |
|--------|-------------|
| 30     | trinta      |
| 40     | quarenta    |
| 50     | cinquenta   |
| 60     | sessenta    |
| 70     | setenta     |
| 80     | oitenta     |
| 90     | noventa     |
| 100    | cem / cento |
| 1000   | mil         |

Compound numbers use "e" (and) between tens and units: vinte e um (21), trinta e cinco (35), cento e dez (110).

## Days of the week

In Portuguese, days are NOT capitalized, and four of them are literally numbered ("second fair day," "third fair day," etc. — "feira" historically meant "market day").

| English   | Portuguese     |
|-----------|----------------|
| Monday    | segunda-feira  |
| Tuesday   | terça-feira    |
| Wednesday | quarta-feira   |
| Thursday  | quinta-feira   |
| Friday    | sexta-feira    |
| Saturday  | sábado         |
| Sunday    | domingo        |

In casual speech, "-feira" is often dropped: "Te vejo na segunda" (See you on Monday).

## Months of the year

| English   | Portuguese | English   | Portuguese |
|-----------|------------|-----------|------------|
| January   | janeiro    | July      | julho      |
| February  | fevereiro  | August    | agosto     |
| March     | março      | September | setembro   |
| April     | abril      | October   | outubro    |
| May       | maio       | November  | novembro   |
| June      | junho      | December  | dezembro   |

## Examples

- Eu tenho dois irmãos. (I have two brothers.)
- Hoje é segunda-feira. (Today is Monday.)
- Meu aniversário é em janeiro. (My birthday is in January.)
- Ela tem trinta anos. (She is thirty years old.)

💡 **Tip:** To say a date, Portuguese uses "dia + number + de + month": "Hoje é dia quinze de maio" (Today is May 15th) — literally "day fifteen of May."

⚠️ **Common mistakes**
- Don't capitalize days or months — "Segunda-feira" and "Janeiro" with capital letters look wrong in Portuguese, unlike English.
- Don't forget gender agreement on um/dois: "duas meninas," not "dois meninas."
- "Cem" is used for exactly 100; "cento" is used when followed by another number (cento e dez = 110).`,
    exercises: [{ sentences: [
      { prompt: 'I have two brothers.', answers: ['Eu tenho dois irmãos.', 'Tenho dois irmãos.'] },
      { prompt: 'Today is Monday.', answers: ['Hoje é segunda-feira.', 'Hoje é segunda.'] },
      { prompt: 'My birthday is in January.', answers: ['Meu aniversário é em janeiro.', 'Eu faço aniversário em janeiro.'] },
      { prompt: 'She has three children.', answers: ['Ela tem três filhos.', 'Ela tem três crianças.'] },
      { prompt: 'The meeting is on Friday.', answers: ['A reunião é na sexta-feira.', 'A reunião é na sexta.'] },
      { prompt: 'December is a cold month.', answers: ['Dezembro é um mês frio.', 'Dezembro é bem frio.'] },
      { prompt: 'I work five days a week.', answers: ['Eu trabalho cinco dias por semana.', 'Trabalho cinco dias por semana.'] },
      { prompt: 'He was born on July 4th.', answers: ['Ele nasceu no dia quatro de julho.', 'Ele nasceu em quatro de julho.'] },
      { prompt: 'There are twenty students in the class.', answers: ['Há vinte alunos na turma.', 'Tem vinte alunos na turma.'] },
      { prompt: 'Sunday is my favorite day.', answers: ['Domingo é meu dia favorito.', 'Domingo é o meu dia favorito.'] },
      { prompt: 'The store is closed on Saturday.', answers: ['A loja está fechada no sábado.', 'A loja fecha no sábado.'] },
      { prompt: 'I have a class on Wednesday.', answers: ['Eu tenho aula na quarta-feira.', 'Tenho aula na quarta.'] },
      { prompt: 'March is the third month of the year.', answers: ['Março é o terceiro mês do ano.', 'Março é o terceiro mês.'] },
      { prompt: 'I need twelve eggs.', answers: ['Eu preciso de doze ovos.', 'Preciso de doze ovos.'] },
      { prompt: 'The year has twelve months.', answers: ['O ano tem doze meses.', 'Um ano tem doze meses.'] },
      { prompt: 'She is thirty years old.', answers: ['Ela tem trinta anos.', 'Ela está com trinta anos.'] },
      { prompt: 'I will travel in June.', answers: ['Eu vou viajar em junho.', 'Vou viajar em junho.'] },
      { prompt: 'Thursday is before Friday.', answers: ['Quinta-feira vem antes de sexta-feira.', 'Quinta vem antes da sexta.'] },
      { prompt: 'We have a hundred chairs.', answers: ['Nós temos cem cadeiras.', 'Temos cem cadeiras.'] },
      { prompt: 'Today is the fifteenth of May.', answers: ['Hoje é quinze de maio.', 'Hoje é o dia quinze de maio.'] },
    ]}],
  },

  {
    id: 'fund-pt-4',
    language: 'pt',
    stage: 'Fundamentos',
    title: '-ar Verbs in the Present',
    subtitle: 'Learn to conjugate regular -ar verbs in the present indicative.',
    theory: `Verbs ending in **-ar** follow a regular conjugation pattern in the present tense, and they're the most common verb group in Portuguese — once you master this pattern, you can conjugate hundreds of verbs.

## Conjugation pattern

Drop the **-ar** ending and add the endings below.

| Pronoun                | Ending  | falar (to speak) | trabalhar (to work) | morar (to live) |
|-------------------------|---------|-------------------|----------------------|-------------------|
| eu (I)                  | -o      | falo              | trabalho             | moro              |
| você / ele / ela (you/he/she) | -a | fala              | trabalha             | mora              |
| nós (we)                 | -amos  | falamos           | trabalhamos          | moramos           |
| vocês / eles / elas (you all/they) | -am | falam | trabalham            | moram             |

## Common -ar verbs

| Infinitive | Meaning        | Infinitive | Meaning         |
|------------|----------------|------------|------------------|
| falar      | to speak       | comprar    | to buy           |
| trabalhar  | to work        | estudar    | to study         |
| morar      | to live/reside | comer*     | to eat           |
| gostar     | to like        | ajudar     | to help          |
| precisar   | to need        | esperar    | to wait/hope     |
| amar       | to love        | olhar      | to look          |
| chamar     | to call        | começar    | to start/begin   |

*comer is actually an -er verb, but it's so common it's worth learning alongside these.

## Examples

- Eu falo português. (I speak Portuguese.)
- Ela trabalha num hospital. (She works in a hospital.)
- Nós estudamos todo dia. (We study every day.)
- Ele gosta de pizza. (He likes pizza.)

## "Gostar" needs "de"

Unlike English "to like something," Portuguese "gostar" always requires the preposition **de** before its object: "Eu gosto de café" (I like coffee) — never "Eu gosto café."

💡 **Tip:** In colloquial Brazilian Portuguese, **"a gente"** (literally "the people," meaning "we") takes the **3rd person singular** verb form, not the "nós" form: "A gente fala" (We speak), "A gente trabalha muito" (We work a lot) — same ending as "ele/ela."

⚠️ **Common mistakes**
- Don't forget "de" after gostar: "gosto de pizza," not "gosto pizza."
- Don't mix up "nós" conjugation with "a gente" conjugation — "nós falamos" but "a gente fala" (never "a gente falamos").
- The "eu" form ending in **-o** is silent on stress but spelled consistently: falo, moro, trabalho — don't add an accent.

## Key vocabulary

• hospital — hospital
• legumes / verduras — vegetables
• mercado — market
• inglês — English (language)
• família — family
• mãe — mother
• medicina — medicine (subject)
• estrelas — stars
• manhã — morning
• aula — class
• devagar — slowly
• coisas — things
• carro — car
• à noite — at night`,
    exercises: [{ sentences: [
      { prompt: 'I speak Portuguese.', answers: ['Eu falo português.', 'Falo português.'] },
      { prompt: 'She works in a hospital.', answers: ['Ela trabalha num hospital.', 'Ela trabalha em um hospital.'] },
      { prompt: 'They live in Rio de Janeiro.', answers: ['Eles moram no Rio de Janeiro.', 'Elas moram no Rio de Janeiro.'] },
      { prompt: 'We study every day.', answers: ['Nós estudamos todo dia.', 'Estudamos todo dia.', 'A gente estuda todo dia.'] },
      { prompt: 'He likes pizza.', answers: ['Ele gosta de pizza.', 'Ele curte pizza.'] },
      { prompt: 'I need help.', answers: ['Eu preciso de ajuda.', 'Preciso de ajuda.'] },
      { prompt: 'She buys vegetables at the market.', answers: ['Ela compra legumes no mercado.', 'Ela compra verduras no mercado.'] },
      { prompt: 'They speak English very well.', answers: ['Eles falam inglês muito bem.', 'Elas falam inglês muito bem.'] },
      { prompt: 'We work a lot.', answers: ['Nós trabalhamos muito.', 'Trabalhamos muito.', 'A gente trabalha muito.'] },
      { prompt: 'I love my family.', answers: ['Eu amo minha família.', 'Amo minha família.'] },
      { prompt: 'He calls his mother every day.', answers: ['Ele liga pra mãe todo dia.', 'Ele liga para a mãe todo dia.'] },
      { prompt: 'She studies medicine.', answers: ['Ela estuda medicina.', 'Ela faz medicina.'] },
      { prompt: 'I am looking at the stars.', answers: ['Eu estou olhando para as estrelas.', 'Estou olhando as estrelas.', 'Tô olhando as estrelas.'] },
      { prompt: 'We wait here every morning.', answers: ['Nós esperamos aqui toda manhã.', 'Esperamos aqui toda manhã.', 'A gente espera aqui toda manhã.'] },
      { prompt: 'The class starts at eight.', answers: ['A aula começa às oito.', 'A aula começa às oito horas.'] },
      { prompt: 'I help my friends.', answers: ['Eu ajudo meus amigos.', 'Ajudo meus amigos.'] },
      { prompt: 'She speaks slowly.', answers: ['Ela fala devagar.', 'Ela fala bem devagar.'] },
      { prompt: 'They buy many things.', answers: ['Eles compram muitas coisas.', 'Elas compram muitas coisas.'] },
      { prompt: 'He needs a car.', answers: ['Ele precisa de um carro.', 'Ele tá precisando de um carro.'] },
      { prompt: 'I study at night.', answers: ['Eu estudo à noite.', 'Estudo à noite.'] },
    ]}],
  },

  {
    id: 'fund-pt-5',
    language: 'pt',
    stage: 'Fundamentos',
    title: 'Pronouns and Possessives',
    subtitle: 'Learn personal and possessive pronouns in Brazilian Portuguese.',
    theory: `## Subject Pronouns

| English          | Portuguese                |
|------------------|----------------------------|
| I                | eu                         |
| you (singular)   | você / tu (regional)       |
| he               | ele                        |
| she              | ela                        |
| we               | nós / a gente (colloquial) |
| you (plural)     | vocês                      |
| they             | eles / elas                |

In colloquial Brazilian Portuguese, **"a gente"** (literally "the people") is used very often instead of "nós" to mean "we" — but remember it takes a 3rd-person-singular verb (see the -ar verbs module).

**"Tu"** is used in some regions (Rio Grande do Sul, Pará, parts of Rio de Janeiro), but **"você"** is the national standard and what you should default to.

## Possessive Pronouns

This is a key difference from English: Portuguese possessives agree with the **gender and number of the object possessed**, not with the person who owns it.

| English    | Masc. Sing. | Fem. Sing. | Masc. Plural | Fem. Plural |
|------------|-------------|------------|----------------|---------------|
| my         | meu         | minha      | meus           | minhas        |
| your       | seu / teu   | sua / tua  | seus / teus    | suas / tuas   |
| his / her  | seu / dele / dela | sua / dele / dela | seus | suas |
| our        | nosso       | nossa      | nossos         | nossas        |
| their      | seu / deles / delas | sua / deles / delas | seus | suas |

So "my car" is "meu carro" (masculine object) but "my house" is "minha casa" (feminine object) — regardless of whether the speaker is male or female.

## Examples

- Meu nome é João. (My name is John.)
- Este é o livro dele. (This is his book.)
- Nossa casa é grande. (Our house is big.)
- Eu amo minha mãe. (I love my mother.)

## Avoiding ambiguity with "seu/sua"

"Seu/sua" can mean "your," "his," "her," or "their," depending on context — which creates real ambiguity. To be clear, Brazilians often replace "seu/sua" with **dele (his) / dela (her) / deles (their, masc.) / delas (their, fem.)** placed AFTER the noun:

- Eu vi a casa dela. (I saw her house.) — clearer than "Eu vi a sua casa," which could also mean "your house."
- Ele esqueceu as chaves dele. (He forgot his keys.)

💡 **Tip:** When in doubt about whose object it is, use "dele/dela/deles/delas" after the noun instead of "seu/sua" before it — it almost always removes ambiguity.

⚠️ **Common mistakes**
- Don't match the possessive to the owner's gender — match it to the object's gender: a male speaker still says "minha casa" (not "meu casa") because "casa" is feminine.
- Don't overuse "seu/sua" when context is unclear — it's a common source of confusion even for native listeners.
- "Tu" conjugates differently from "você" in some dialects — stick to "você" conjugations unless you're specifically learning a "tu"-using region.

## Key vocabulary

• nome — name
• livro — book
• carro — car
• casa — house
• filhos — children/kids
• chaves — keys
• ajuda — help
• celular / telefone — phone
• ideia — idea
• cidade — city
• apartamento — apartment
• cor favorita — favorite color
• irmão — brother
• país — country
• amigos — friends`,
    exercises: [{ sentences: [
      { prompt: 'My name is John.', answers: ['Meu nome é João.', 'Meu nome é John.', 'Me chamo João.'] },
      { prompt: 'What is your name?', answers: ['Qual é o seu nome?', 'Qual o seu nome?', 'Como você se chama?'] },
      { prompt: 'This is his book.', answers: ['Este é o livro dele.', 'Esse é o livro dele.'] },
      { prompt: 'I like her car.', answers: ['Eu gosto do carro dela.', 'Gosto do carro dela.'] },
      { prompt: 'Our house is big.', answers: ['Nossa casa é grande.', 'A nossa casa é grande.'] },
      { prompt: 'Their children are very cute.', answers: ['Os filhos deles são muito fofos.', 'As crianças deles são muito fofas.'] },
      { prompt: 'I love my mother.', answers: ['Eu amo minha mãe.', 'Amo minha mãe.'] },
      { prompt: 'He forgot his keys.', answers: ['Ele esqueceu as chaves dele.', 'Ele esqueceu as suas chaves.'] },
      { prompt: 'We need your help.', answers: ['Nós precisamos da sua ajuda.', 'Precisamos da sua ajuda.', 'A gente precisa da sua ajuda.'] },
      { prompt: 'She is talking to her friend.', answers: ['Ela está falando com a amiga dela.', 'Ela tá falando com a amiga dela.'] },
      { prompt: 'My phone is broken.', answers: ['Meu celular está quebrado.', 'Meu telefone está quebrado.', 'Meu celular tá quebrado.'] },
      { prompt: 'Your idea is great.', answers: ['A sua ideia é ótima.', 'Sua ideia é ótima.'] },
      { prompt: 'He likes our city.', answers: ['Ele gosta da nossa cidade.', 'Ele curte nossa cidade.'] },
      { prompt: 'I visited her house.', answers: ['Eu visitei a casa dela.', 'Visitei a casa dela.'] },
      { prompt: 'They sold their apartment.', answers: ['Eles venderam o apartamento deles.', 'Elas venderam o apartamento delas.'] },
      { prompt: 'My favorite color is blue.', answers: ['Minha cor favorita é azul.', 'Minha cor favorita é o azul.'] },
      { prompt: 'He is with his brother.', answers: ['Ele está com o irmão dele.', 'Ele tá com o irmão dele.'] },
      { prompt: 'We love our country.', answers: ['Nós amamos nosso país.', 'A gente ama nosso país.'] },
      { prompt: 'Your bag is here.', answers: ['A sua bolsa está aqui.', 'Sua mochila está aqui.', 'Sua bolsa tá aqui.'] },
      { prompt: 'I miss my friends.', answers: ['Eu sinto falta dos meus amigos.', 'Sinto saudade dos meus amigos.', 'Tô com saudade dos meus amigos.'] },
    ]}],
  },

  {
    id: 'rev-fund-pt',
    language: 'pt',
    stage: 'Fundamentos',
    title: 'Fundamentals Review',
    subtitle: 'Review ser/estar, articles, numbers, -ar verbs and possessive pronouns.',
    theory: `## Review: Fundamentos Stage

This review pulls together everything from the Fundamentos stage. Use it as a quick-reference checklist before moving on.

### 1. Ser vs. Estar
- **Ser** → permanent characteristics (identity, profession, origin): Eu sou brasileiro. (I am Brazilian.)
- **Estar** → temporary states (emotions, location): Ela está em casa. (She is at home.)

### 2. Articles

| Type       | Masc. Sing. | Fem. Sing. | Masc. Pl. | Fem. Pl. |
|------------|-------------|------------|-----------|----------|
| Definite   | o           | a          | os        | as       |
| Indefinite | um          | uma        | uns       | umas     |

Remember the contractions: de + o = do, em + a = na, etc.

### 3. Numbers and Time

- um, dois, três... dez, vinte, cem, mil
- Days: segunda, terça, quarta, quinta, sexta, sábado, domingo — lowercase!
- Months: janeiro to dezembro — lowercase!

### 4. -AR Verbs in the Present

| Pronoun        | Ending |
|----------------|--------|
| eu             | -o     |
| você/ele/ela   | -a     |
| nós            | -amos  |
| vocês/eles     | -am    |

Remember "a gente" takes the 3rd-person singular ending: a gente fala (we speak).

### 5. Possessives

Possessives agree with the object possessed, not the owner.

| English  | Portuguese (masc.) | Portuguese (fem.) |
|----------|----------------------|----------------------|
| my       | meu                  | minha                |
| your     | seu                  | sua                  |
| his/her  | dele / dela          | dele / dela          |
| our      | nosso                | nossa                |

💡 **Tip:** When reviewing, say each example sentence out loud. Pronunciation fluency comes from repetition, not just recognition.

⚠️ **Common mistakes to watch for in this review**
- Mixing up ser/estar with location (always estar) and identity (always ser).
- Forgetting article-preposition contractions (na, do, nos...).
- Using "seu/sua" where "dele/dela" would be clearer.

## Key vocabulary

• ingressos / bilhetes — tickets
• professora — teacher
• idiomas / línguas — languages
• pão — bread
• reunião — meeting
• hospital — hospital
• rua — street
• um pouco — a little`,
    exercises: [{ sentences: [
      { prompt: 'My brother is a doctor.', answers: ['Meu irmão é médico.', 'O meu irmão é médico.'] },
      { prompt: 'She is at home today.', answers: ['Ela está em casa hoje.', 'Ela tá em casa hoje.'] },
      { prompt: 'The children are playing in the park.', answers: ['As crianças estão brincando no parque.', 'As crianças tão brincando no parque.'] },
      { prompt: 'I need three tickets.', answers: ['Eu preciso de três ingressos.', 'Preciso de três ingressos.', 'Eu preciso de três bilhetes.'] },
      { prompt: 'Her name is Maria.', answers: ['O nome dela é Maria.', 'Ela se chama Maria.'] },
      { prompt: 'We work on Mondays.', answers: ['Nós trabalhamos nas segundas-feiras.', 'Trabalhamos às segundas.', 'A gente trabalha nas segundas.'] },
      { prompt: 'He likes his job.', answers: ['Ele gosta do trabalho dele.', 'Ele gosta do seu trabalho.'] },
      { prompt: 'The store opens at nine.', answers: ['A loja abre às nove.', 'A loja abre às nove horas.'] },
      { prompt: 'I am twenty-five years old.', answers: ['Eu tenho vinte e cinco anos.', 'Tenho vinte e cinco anos.'] },
      { prompt: 'Our teacher speaks three languages.', answers: ['Nossa professora fala três idiomas.', 'Nossa professora fala três línguas.', 'O nosso professor fala três idiomas.'] },
      { prompt: 'She buys bread every morning.', answers: ['Ela compra pão toda manhã.', 'Ela compra pão todo dia de manhã.'] },
      { prompt: 'The meeting is on Thursday at two.', answers: ['A reunião é na quinta-feira às duas.', 'A reunião é quinta às duas.'] },
      { prompt: 'I am not tired.', answers: ['Eu não estou cansado.', 'Não estou cansado.', 'Não tô cansado.', 'Eu não estou cansada.'] },
      { prompt: 'They are from Argentina.', answers: ['Eles são da Argentina.', 'Elas são da Argentina.'] },
      { prompt: 'His birthday is in November.', answers: ['O aniversário dele é em novembro.', 'Ele faz aniversário em novembro.'] },
      { prompt: 'I study Portuguese every day.', answers: ['Eu estudo português todo dia.', 'Estudo português todo dia.', 'Estudo português todos os dias.'] },
      { prompt: 'We need a new car.', answers: ['Nós precisamos de um carro novo.', 'Precisamos de um carro novo.', 'A gente precisa de um carro novo.'] },
      { prompt: 'The hospital is on this street.', answers: ['O hospital fica nessa rua.', 'O hospital está nessa rua.'] },
      { prompt: 'She loves her children.', answers: ['Ela ama os filhos dela.', 'Ela ama os seus filhos.'] },
      { prompt: 'I speak a little Portuguese.', answers: ['Eu falo um pouco de português.', 'Falo um pouquinho de português.'] },
    ]}],
    dialogExercise: {
      audioText: 'Oi! Eu me chamo Carlos. Sou professor e trabalho numa escola particular. Tenho dois filhos.',
      question: 'What does Carlos say about himself?',
      options: [
        { text: 'He is a teacher with two children.', correct: true },
        { text: 'He is a doctor with two children.', correct: false },
        { text: 'He is a teacher with three children.', correct: false },
        { text: 'He works at a public hospital.', correct: false },
      ],
    },
  },

  // ─── STAGE: BÁSICO ─────────────────────────────────────────────────────────

  {
    id: 'bas-pt-1',
    language: 'pt',
    stage: 'Básico',
    title: 'Common Irregular Verbs',
    subtitle: 'Learn the most common irregular verbs in Brazilian Portuguese.',
    theory: `Some of the most frequently used verbs in Portuguese are irregular — their present-tense conjugations don't follow the regular -ar/-er/-ir pattern. You'll use these constantly, so it's worth memorizing them early.

## TER (to have)

| Pronoun              | ter   |
|-----------------------|-------|
| eu                     | tenho |
| você / ele / ela       | tem   |
| nós                    | temos |
| vocês / eles / elas    | têm   |

## IR (to go)

| Pronoun              | ir    |
|-----------------------|-------|
| eu                     | vou   |
| você / ele / ela       | vai   |
| nós                    | vamos |
| vocês / eles / elas    | vão   |

## FAZER (to do / to make)

| Pronoun              | fazer   |
|-----------------------|---------|
| eu                     | faço    |
| você / ele / ela       | faz     |
| nós                    | fazemos |
| vocês / eles / elas    | fazem   |

## PODER (can / to be able to)

| Pronoun              | poder   |
|-----------------------|---------|
| eu                     | posso   |
| você / ele / ela       | pode    |
| nós                    | podemos |
| vocês / eles / elas    | podem   |

## QUERER (to want)

| Pronoun              | querer   |
|-----------------------|----------|
| eu                     | quero    |
| você / ele / ela       | quer     |
| nós                    | queremos |
| vocês / eles / elas    | querem   |

## Examples

- Eu tenho uma pergunta. (I have a question.)
- Ela vai para a escola todo dia. (She goes to school every day.)
- O que você faz? (What do you do?)
- Eu posso te ajudar. (I can help you.)
- Eu quero um café, por favor. (I want a coffee, please.)

## Using these verbs together

These verbs often combine with an infinitive to express ability, desire, or near-future plans:

- Eu posso ir. (I can go.)
- Ela quer viajar. (She wants to travel.)
- Nós vamos estudar. (We are going to study.) — this is also how the near future is formed; see the Futuro module.

💡 **Tip:** "Ter" is also used where English uses "there is/are" in casual speech: "Tem um problema" (There is a problem) is extremely common in spoken Brazilian Portuguese, alongside the more formal "Há um problema."

⚠️ **Common mistakes**
- Don't conjugate these like regular -er/-ir verbs — "ele tem," not "ele tene"; "eu faço," not "eu fazo."
- "Tem" (3rd person of ter) is also the everyday substitute for "há" (there is) — don't confuse it with possession only.
- Note the accent on "têm" (3rd person plural) versus "tem" (3rd person singular) — same sound family, different forms.

## Key vocabulary

• pergunta — question
• escola — school
• ajudar — to help
• gatos — cats
• praia — beach
• jantar — dinner
• ouvir / consegue — to hear / to manage to
• viajar — to travel
• dinheiro — money
• reunião — meeting
• academia — gym
• momento / minutinho — moment`,
    exercises: [{ sentences: [
      { prompt: 'I have a question.', answers: ['Eu tenho uma pergunta.', 'Tenho uma pergunta.'] },
      { prompt: 'She goes to school every day.', answers: ['Ela vai para a escola todo dia.', 'Ela vai pra escola todo dia.'] },
      { prompt: 'What do you do?', answers: ['O que você faz?', 'O que cê faz?'] },
      { prompt: 'I can help you.', answers: ['Eu posso te ajudar.', 'Posso te ajudar.', 'Posso ajudar você.'] },
      { prompt: 'I want a coffee, please.', answers: ['Eu quero um café, por favor.', 'Quero um café, por favor.'] },
      { prompt: 'He has two cats.', answers: ['Ele tem dois gatos.', 'Ele tem dois gatinhos.'] },
      { prompt: 'We are going to the beach.', answers: ['Nós vamos para a praia.', 'Vamos pra praia.', 'A gente vai pra praia.'] },
      { prompt: 'She makes dinner every night.', answers: ['Ela faz o jantar toda noite.', 'Ela faz jantar toda noite.'] },
      { prompt: 'Can you hear me?', answers: ['Você pode me ouvir?', 'Cê pode me ouvir?', 'Consegue me ouvir?'] },
      { prompt: 'They want to travel.', answers: ['Eles querem viajar.', 'Elas querem viajar.'] },
      { prompt: 'I do not have money.', answers: ['Eu não tenho dinheiro.', 'Não tenho dinheiro.'] },
      { prompt: 'Where are you going?', answers: ['Onde você vai?', 'Onde cê vai?', 'Pra onde você vai?'] },
      { prompt: 'I cannot come today.', answers: ['Eu não posso vir hoje.', 'Não posso vir hoje.'] },
      { prompt: 'He wants to eat pizza.', answers: ['Ele quer comer pizza.', 'Ele tá com vontade de comer pizza.'] },
      { prompt: 'We have a meeting tomorrow.', answers: ['Nós temos uma reunião amanhã.', 'Temos uma reunião amanhã.', 'A gente tem reunião amanhã.'] },
      { prompt: 'She goes to the gym three times a week.', answers: ['Ela vai à academia três vezes por semana.', 'Ela vai na academia três vezes por semana.'] },
      { prompt: 'What are you doing?', answers: ['O que você está fazendo?', 'O que cê tá fazendo?', 'O que você faz?'] },
      { prompt: 'I want to learn Portuguese.', answers: ['Eu quero aprender português.', 'Quero aprender português.'] },
      { prompt: 'They can speak French.', answers: ['Eles podem falar francês.', 'Eles sabem falar francês.'] },
      { prompt: 'Do you have a moment?', answers: ['Você tem um momento?', 'Tem um minuto?', 'Você tem um minutinho?'] },
    ]}],
  },

  {
    id: 'bas-pt-2',
    language: 'pt',
    stage: 'Básico',
    title: 'Negation',
    subtitle: 'Learn to form negative sentences in Brazilian Portuguese.',
    theory: `In Portuguese, negation is formed mainly with the word **não** (no/not), placed before the verb.

## Basic structure

Subject + **não** + verb + complement

> Eu **não** falo alemão. (I do not speak German.)

## Double negation — common and correct in Brazilian Portuguese

Subject + **não** + verb + negative word

> Eu **não** sei **nada**. (I don't know anything.)
> Não tem **ninguém** aqui. (There is nobody here.)

This pairing of "não" with another negative word (nada, ninguém, nunca) is grammatically required in natural Brazilian speech — it is NOT a mistake the way double negatives are in English.

## Negative words

| English              | Portuguese        |
|------------------------|--------------------|
| no / not                | não                |
| nothing                 | nada               |
| nobody / no one         | ninguém            |
| never                   | nunca / jamais     |
| nowhere                 | em lugar nenhum    |
| not yet                 | ainda não          |
| no more / no longer     | não mais           |
| neither... nor          | nem... nem...      |

## Examples of natural double negation

- Não quero **nada**. (I don't want anything.)
- Não vi **ninguém**. (I didn't see anyone.)
- Não faço isso **nunca**. / **Nunca** faço isso. (I never do that.)
- Eu não tenho dinheiro nenhum. (I don't have any money at all.)

## Word order flexibility with "nunca"

Negative time words like "nunca" can go either before the verb (without "não") or after the verb (with "não"):

- **Nunca** vou lá. (I never go there.)
- Não vou lá **nunca**. (same meaning, more emphatic)

💡 **Tip:** If you've been taught that double negatives are wrong, unlearn that instinct here — in Brazilian Portuguese, "não" + a negative word is the normal, expected pattern, not an error.

⚠️ **Common mistakes**
- Don't drop the "não" just because you used "nunca," "nada," or "ninguém" — Portuguese still wants both: "Não vi ninguém," not just "Vi ninguém."
- Don't translate "anymore" literally — use "não mais" or "mais" placed correctly: "Eles não moram mais aqui" (They don't live here anymore).
- "Jamais" is stronger/more formal than "nunca" — use "nunca" in everyday speech.`,
    exercises: [{ sentences: [
      { prompt: 'I do not speak German.', answers: ['Eu não falo alemão.', 'Não falo alemão.'] },
      { prompt: 'She does not like coffee.', answers: ['Ela não gosta de café.', 'Ela não curte café.'] },
      { prompt: 'I do not know anything.', answers: ['Eu não sei nada.', 'Não sei nada.'] },
      { prompt: 'There is nobody here.', answers: ['Não tem ninguém aqui.', 'Não há ninguém aqui.'] },
      { prompt: 'He never lies.', answers: ['Ele nunca mente.', 'Ele não mente nunca.'] },
      { prompt: 'I am not tired.', answers: ['Eu não estou cansado.', 'Não estou cansada.', 'Não tô cansado.'] },
      { prompt: 'We do not have time.', answers: ['Nós não temos tempo.', 'Não temos tempo.', 'A gente não tem tempo.'] },
      { prompt: 'She never eats meat.', answers: ['Ela nunca come carne.', 'Ela não come carne nunca.'] },
      { prompt: 'I did not see anyone.', answers: ['Eu não vi ninguém.', 'Não vi ninguém.'] },
      { prompt: 'He does not want to go.', answers: ['Ele não quer ir.', 'Ele não quer aparecer.'] },
      { prompt: 'I am not ready yet.', answers: ['Eu ainda não estou pronto.', 'Ainda não estou pronto.', 'Ainda não tô pronto.'] },
      { prompt: 'They do not live here anymore.', answers: ['Eles não moram mais aqui.', 'Elas não moram mais aqui.'] },
      { prompt: 'I want nothing to eat.', answers: ['Não quero nada para comer.', 'Não quero comer nada.'] },
      { prompt: 'Neither he nor she came.', answers: ['Nem ele nem ela vieram.', 'Nem ele nem ela apareceram.'] },
      { prompt: 'I never go there.', answers: ['Eu nunca vou lá.', 'Nunca vou lá.', 'Não vou lá nunca.'] },
      { prompt: 'She does not understand.', answers: ['Ela não entende.', 'Ela não compreende.'] },
      { prompt: 'I do not have any money.', answers: ['Eu não tenho dinheiro.', 'Não tenho dinheiro nenhum.', 'Não tenho grana nenhuma.'] },
      { prompt: 'He cannot do it.', answers: ['Ele não pode fazer isso.', 'Ele não consegue fazer isso.'] },
      { prompt: 'We are not going anywhere.', answers: ['Nós não vamos a lugar nenhum.', 'Não vamos a lugar nenhum.', 'A gente não vai a lugar nenhum.'] },
      { prompt: 'I do not know him.', answers: ['Eu não o conheço.', 'Não conheço ele.', 'Não conheço ele não.'] },
    ]}],
  },

  {
    id: 'bas-pt-3',
    language: 'pt',
    stage: 'Básico',
    title: 'Simple Past (Pretérito Perfeito)',
    subtitle: 'Learn to talk about completed past actions using the pretérito perfeito.',
    theory: `The **pretérito perfeito** is the verb tense for completed actions in the past — it corresponds to the English simple past ("I spoke," "she ate," "we went").

## -AR verbs (e.g., falar)

| Pronoun              | falar    | comprar   | trabalhar    |
|-----------------------|----------|-----------|--------------|
| eu                     | falei    | comprei   | trabalhei    |
| você / ele / ela       | falou    | comprou   | trabalhou    |
| nós                    | falamos  | compramos | trabalhamos  |
| vocês / eles / elas    | falaram  | compraram | trabalharam  |

## -ER verbs (e.g., comer)

| Pronoun              | comer    | beber    | vender    |
|-----------------------|----------|----------|-----------|
| eu                     | comi     | bebi     | vendi     |
| você / ele / ela       | comeu    | bebeu    | vendeu    |
| nós                    | comemos  | bebemos  | vendemos  |
| vocês / eles / elas    | comeram  | beberam  | venderam  |

## -IR verbs (e.g., partir)

| Pronoun              | partir    | abrir     | dividir    |
|-----------------------|-----------|-----------|------------|
| eu                     | parti     | abri      | dividi     |
| você / ele / ela       | partiu    | abriu     | dividiu    |
| nós                    | partimos  | abrimos   | dividimos  |
| vocês / eles / elas    | partiram  | abriram   | dividiram  |

## Key irregular verbs

| Infinitive | eu    | você/ele | nós     | eles    |
|------------|-------|----------|---------|---------|
| ser / ir   | fui   | foi      | fomos   | foram   |
| ter        | tive  | teve     | tivemos | tiveram |
| fazer      | fiz   | fez      | fizemos | fizeram |
| ver        | vi    | viu      | vimos   | viram   |
| vir        | vim   | veio     | viemos  | vieram  |

⚠️ **Watch out:** "ser" (to be) and "ir" (to go) share the EXACT same forms in this tense (fui, foi, fomos, foram). You can only tell them apart from context: "Eu fui ao mercado" (I went to the market) vs. "Eu fui professor" (I was a teacher).

## Examples

- Eu falei com o médico. (I spoke with the doctor.)
- Ela comeu toda a pizza. (She ate all the pizza.)
- Nós fomos à praia ontem. (We went to the beach yesterday.)
- Eles compraram uma casa nova. (They bought a new house.)
- Eu tive uma boa ideia. (I had a good idea.)

## Note on "nós" forms

For regular -ar verbs, the "nós" form in the present and in the pretérito perfeito look identical in writing (falamos = "we speak" or "we spoke"). Context and surrounding words (like "ontem," yesterday) tell you which is meant.

💡 **Tip:** Time markers help signal this tense — look for words like "ontem" (yesterday), "semana passada" (last week), "ano passado" (last year), "já" (already).

⚠️ **Common mistakes**
- Don't confuse "fui" (I went/I was) with "foi" (he/she went/was) — easy to mix up since they look similar.
- Regular -ar "nós" forms are identical in present and past tense — rely on context words, not the verb alone.
- Don't apply the regular -ar pattern to irregular verbs like "fazer" — "eu fiz," never "eu fazei."

## Key vocabulary

• médico — doctor
• pizza — pizza
• praia — beach
• ontem — yesterday
• filme — movie
• casa nova — new house
• ideia — idea
• erro — mistake
• café — coffee
• porta — door
• festa — party
• café da manhã — breakfast
• cedo / tarde — early / late
• parque — park`,
    exercises: [{ sentences: [
      { prompt: 'I spoke with the doctor.', answers: ['Eu falei com o médico.', 'Falei com o médico.'] },
      { prompt: 'She ate all the pizza.', answers: ['Ela comeu toda a pizza.', 'Ela comeu toda pizza.'] },
      { prompt: 'We went to the beach yesterday.', answers: ['Nós fomos à praia ontem.', 'Fomos pra praia ontem.', 'A gente foi pra praia ontem.'] },
      { prompt: 'He worked all day.', answers: ['Ele trabalhou o dia todo.', 'Ele trabalhou o dia inteiro.'] },
      { prompt: 'I saw a great movie.', answers: ['Eu vi um ótimo filme.', 'Vi um filme ótimo.'] },
      { prompt: 'They bought a new house.', answers: ['Eles compraram uma casa nova.', 'Elas compraram uma casa nova.'] },
      { prompt: 'She came from Europe.', answers: ['Ela veio da Europa.', 'Ela chegou da Europa.'] },
      { prompt: 'I had a good idea.', answers: ['Eu tive uma boa ideia.', 'Tive uma boa ideia.'] },
      { prompt: 'He made a mistake.', answers: ['Ele cometeu um erro.', 'Ele fez um erro.'] },
      { prompt: 'We studied for three hours.', answers: ['Nós estudamos por três horas.', 'Estudamos por três horas.', 'A gente estudou por três horas.'] },
      { prompt: 'I drank too much coffee.', answers: ['Eu bebi muito café.', 'Bebi café demais.'] },
      { prompt: 'She opened the door.', answers: ['Ela abriu a porta.', 'Foi ela que abriu a porta.'] },
      { prompt: 'They traveled to Japan.', answers: ['Eles viajaram para o Japão.', 'Elas viajaram pro Japão.'] },
      { prompt: 'He sold his car.', answers: ['Ele vendeu o carro dele.', 'Ele vendeu o seu carro.'] },
      { prompt: 'I did not go to the party.', answers: ['Eu não fui à festa.', 'Não fui na festa.'] },
      { prompt: 'She did not eat breakfast.', answers: ['Ela não tomou café da manhã.', 'Ela não comeu de manhã.'] },
      { prompt: 'We left early.', answers: ['Nós saímos cedo.', 'Saímos cedo.', 'A gente saiu cedo.'] },
      { prompt: 'I called you yesterday.', answers: ['Eu te liguei ontem.', 'Te liguei ontem.'] },
      { prompt: 'He arrived late.', answers: ['Ele chegou tarde.', 'Ele chegou atrasado.'] },
      { prompt: 'I met her at the park.', answers: ['Eu a conheci no parque.', 'Conheci ela no parque.'] },
    ]}],
  },

  {
    id: 'bas-pt-4',
    language: 'pt',
    stage: 'Básico',
    title: 'Imperfect Past (Pretérito Imperfeito)',
    subtitle: 'Learn to describe habitual or ongoing past actions with the pretérito imperfeito.',
    theory: `The **pretérito imperfeito** describes:
1. Habitual actions in the past ("used to")
2. Ongoing/in-progress actions in the past ("was/were doing")
3. Descriptions and states in the past

It roughly corresponds to "used to + verb" or "was/were + -ing" in English. Unlike the pretérito perfeito (a single completed event), the imperfeito frames the past as a background, an ongoing habit, or a scene-setting description.

## -AR verbs (e.g., falar)

| Pronoun              | falar     | morar     | trabalhar     |
|-----------------------|-----------|-----------|----------------|
| eu                     | falava    | morava    | trabalhava     |
| você / ele / ela       | falava    | morava    | trabalhava     |
| nós                    | falávamos | morávamos | trabalhávamos  |
| vocês / eles / elas    | falavam   | moravam   | trabalhavam    |

## -ER verbs (e.g., comer)

| Pronoun              | comer    | viver    | beber    |
|-----------------------|----------|----------|----------|
| eu                     | comia    | vivia    | bebia    |
| você / ele / ela       | comia    | vivia    | bebia    |
| nós                    | comíamos | vivíamos | bebíamos |
| vocês / eles / elas    | comiam   | viviam   | bebiam   |

## -IR verbs (e.g., partir)

| Pronoun              | partir    | abrir     |
|-----------------------|-----------|-----------|
| eu                     | partia    | abria     |
| você / ele / ela       | partia    | abria     |
| nós                    | partíamos | abríamos  |
| vocês / eles / elas    | partiam   | abriam    |

## Key irregular verbs

| Infinitive | eu    | você/ele | nós      | eles    |
|------------|-------|----------|----------|---------|
| ser        | era   | era      | éramos   | eram    |
| ter        | tinha | tinha    | tínhamos | tinham  |
| ir         | ia    | ia       | íamos    | iam     |
| vir        | vinha | vinha    | vínhamos | vinham  |

## Examples

- Eu morava em Nova York. (I used to live in New York.)
- Ela estava falando ao telefone. (She was speaking on the phone.)
- Nós comíamos juntos todo domingo. (We used to eat together every Sunday.)
- Eu era uma criança naquela época. (I was a child at that time.)
- A casa era velha e pequena. (The house was old and small.)

## Imperfeito vs. Pretérito Perfeito

This is the trickiest part for English speakers, since English doesn't mark this distinction as clearly.

| Use the **imperfeito** for...    | Use the **pretérito perfeito** for... |
|-----------------------------------|------------------------------------------|
| habits / repeated past actions    | a single, completed event                 |
| background description / scene    | the main event that happened              |
| ongoing action interrupted by another | the interrupting action               |

> Eu **estava** dormindo quando o telefone **tocou**. (I was sleeping [imperfeito, ongoing] when the phone rang [perfeito, single event].)

💡 **Tip:** If you can naturally say "used to..." or "was ...-ing" in English, that's your cue to reach for the imperfeito.

⚠️ **Common mistakes**
- Don't use the pretérito perfeito for ongoing background description — "A casa era velha" (imperfeito, describing) sounds right; "A casa foi velha" sounds odd.
- Watch the accent marks: "íamos," "éramos," "vínhamos" all carry a written accent — don't drop it.
- "Estar" in the imperfeito ("estava") + gerund is the closest match to English "was/were doing": "Ela estava falando" (She was speaking).

## Key vocabulary

• telefone — phone
• domingo — Sunday
• cachorro / cão — dog
• criança — child
• banco — bank
• parque — park
• naquela época / naquele tempo — back then, at that time
• chovendo / chovia — raining
• com frequência — frequently
• futebol — soccer
• velha e pequena — old and small (describing a thing)
• a pé — on foot`,
    exercises: [{ sentences: [
      { prompt: 'I used to live in New York.', answers: ['Eu morava em Nova York.', 'Morava em Nova York.'] },
      { prompt: 'She was speaking on the phone.', answers: ['Ela estava falando ao telefone.', 'Ela falava ao telefone.'] },
      { prompt: 'We used to eat together every Sunday.', answers: ['Nós comíamos juntos todo domingo.', 'A gente comia junto todo domingo.'] },
      { prompt: 'He used to have a dog.', answers: ['Ele tinha um cachorro.', 'Ele tinha um cão.'] },
      { prompt: 'I was a child then.', answers: ['Eu era uma criança naquela época.', 'Era criança naquele tempo.'] },
      { prompt: 'They were talking when I arrived.', answers: ['Eles estavam conversando quando eu cheguei.', 'Eles falavam quando eu cheguei.'] },
      { prompt: 'She used to work at the bank.', answers: ['Ela trabalhava no banco.', 'Ela trabalhava num banco.'] },
      { prompt: 'I used to go to the park every day.', answers: ['Eu ia ao parque todo dia.', 'Ia no parque todo dia.'] },
      { prompt: 'He was living in Brazil at the time.', answers: ['Ele morava no Brasil naquela época.', 'Ele estava morando no Brasil na época.'] },
      { prompt: 'We used to be friends.', answers: ['Nós éramos amigos.', 'A gente era amigo.'] },
      { prompt: 'She used to drink a lot of coffee.', answers: ['Ela bebia muito café.', 'Ela tomava muito café.'] },
      { prompt: 'It was raining when I left.', answers: ['Estava chovendo quando eu saí.', 'Chovia quando eu saí.'] },
      { prompt: 'I used to study every night.', answers: ['Eu estudava toda noite.', 'Estudava todo dia à noite.'] },
      { prompt: 'They used to come here often.', answers: ['Eles vinham aqui com frequência.', 'Elas vinham aqui sempre.'] },
      { prompt: 'He used to play soccer as a child.', answers: ['Ele jogava futebol quando era criança.', 'Ele jogava bola quando era menino.'] },
      { prompt: 'I was watching TV when the phone rang.', answers: ['Eu estava assistindo TV quando o telefone tocou.', 'Eu tava assistindo televisão quando o telefone tocou.'] },
      { prompt: 'She used to sing beautifully.', answers: ['Ela cantava muito bem.', 'Ela cantava lindamente.'] },
      { prompt: 'We used to travel every year.', answers: ['Nós viajávamos todo ano.', 'A gente viajava todo ano.'] },
      { prompt: 'The house was old and small.', answers: ['A casa era velha e pequena.', 'A casa era antiga e pequena.'] },
      { prompt: 'I used to walk to school.', answers: ['Eu ia à escola a pé.', 'Ia pra escola andando.'] },
    ]}],
  },

  {
    id: 'bas-pt-5',
    language: 'pt',
    stage: 'Básico',
    title: 'Future Tense',
    subtitle: 'Learn to express future actions in Brazilian Portuguese.',
    theory: `Brazilian Portuguese has two main ways to express the future.

## 1. "Ir" + infinitive (the natural, everyday way)

This is by far the most common way to talk about the future in spoken Brazilian Portuguese — it works just like English "going to."

ir (present tense) + verb in the infinitive

> Eu **vou falar** amanhã. (I am going to speak tomorrow.)

| Pronoun              | ir + infinitive |
|-----------------------|------------------|
| eu                     | vou falar        |
| você / ele / ela       | vai falar        |
| nós                    | vamos falar      |
| vocês / eles / elas    | vão falar        |

## 2. Futuro do presente (more formal/written)

Drop the final vowel of the infinitive and add these endings — note these endings are the same across -ar, -er, and -ir verbs, which makes this tense easier than most.

| Pronoun              | falar      | comer      | partir      |
|-----------------------|------------|------------|-------------|
| eu                     | falarei    | comerei    | partirei    |
| você / ele / ela       | falará     | comerá     | partirá     |
| nós                    | falaremos  | comeremos  | partiremos  |
| vocês / eles / elas    | falarão    | comerão    | partirão    |

## Irregular verbs in the futuro do presente

| Infinitive | eu     | você/ele | nós      | eles    |
|------------|--------|----------|----------|---------|
| fazer      | farei  | fará     | faremos  | farão   |
| dizer      | direi  | dirá     | diremos  | dirão   |
| trazer     | trarei | trará    | traremos | trarão  |

## Examples

- Eu vou te ligar amanhã. (I will call you tomorrow.)
- Ela vai viajar na semana que vem. (She is going to travel next week.)
- Vai chover amanhã. (It will rain tomorrow.)
- Eu não vou mais comer carne. (I will not eat meat anymore.)
- Ela trará os documentos. (She will bring the documents.) — formal register

💡 **Tip:** Use "ir + infinitivo" by default — it sounds natural in virtually any spoken context. Save the futuro do presente for writing, news, formal speech, or when you want to sound more emphatic/certain ("Eu falarei a verdade" — I WILL tell the truth).

⚠️ **Common mistakes**
- Don't overuse the futuro do presente in casual conversation — it can sound stiff or unnatural compared to "vou + infinitivo."
- Don't forget that "ir" itself is irregular in the present (vou, vai, vamos, vão) — that's the part that's conjugated, not the infinitive after it.
- The accent matters in the futuro do presente: "falará" (he/she will speak) vs. "falara" (an older literary past form) — don't drop the accent.

## Key vocabulary

• amanhã — tomorrow
• semana que vem — next week
• festa — party
• fim de semana — weekend
• casa nova — new house
• jantar — dinner
• documentos — documents
• verdade — truth
• chegar — to arrive
• ganhar / vencer — to win
• esquecer — to forget`,
    exercises: [{ sentences: [
      { prompt: 'I will call you tomorrow.', answers: ['Eu vou te ligar amanhã.', 'Vou te ligar amanhã.', 'Eu te ligarei amanhã.'] },
      { prompt: 'She is going to travel next week.', answers: ['Ela vai viajar na semana que vem.', 'Ela vai viajar semana que vem.'] },
      { prompt: 'We will go to the party.', answers: ['Nós vamos à festa.', 'Vamos pra festa.', 'A gente vai pra festa.'] },
      { prompt: 'He will not come today.', answers: ['Ele não vai vir hoje.', 'Ele não vai aparecer hoje.'] },
      { prompt: 'I am going to study this weekend.', answers: ['Eu vou estudar nesse fim de semana.', 'Vou estudar esse final de semana.'] },
      { prompt: 'They will buy a new house.', answers: ['Eles vão comprar uma casa nova.', 'Elas vão comprar uma casa nova.'] },
      { prompt: 'I will make dinner tonight.', answers: ['Eu vou fazer o jantar hoje à noite.', 'Vou fazer jantar hoje à noite.'] },
      { prompt: 'She will be there at eight.', answers: ['Ela vai estar lá às oito.', 'Ela estará lá às oito.'] },
      { prompt: 'Will you help me?', answers: ['Você vai me ajudar?', 'Cê vai me ajudar?', 'Você me ajudará?'] },
      { prompt: 'It will rain tomorrow.', answers: ['Vai chover amanhã.', 'Choverá amanhã.'] },
      { prompt: 'I am going to learn Portuguese.', answers: ['Eu vou aprender português.', 'Vou aprender português.'] },
      { prompt: 'We will see each other later.', answers: ['A gente se vê depois.', 'Nós vamos nos ver depois.', 'Nos vemos depois.'] },
      { prompt: 'He is going to work on Saturday.', answers: ['Ele vai trabalhar no sábado.', 'Ele vai trabalhar sábado.'] },
      { prompt: 'I will not eat meat anymore.', answers: ['Eu não vou mais comer carne.', 'Não vou comer mais carne.'] },
      { prompt: 'She will bring the documents.', answers: ['Ela vai trazer os documentos.', 'Ela trará os documentos.'] },
      { prompt: 'What are you going to do?', answers: ['O que você vai fazer?', 'O que cê vai fazer?'] },
      { prompt: 'I will tell the truth.', answers: ['Eu vou falar a verdade.', 'Vou dizer a verdade.', 'Direi a verdade.'] },
      { prompt: 'They are going to arrive late.', answers: ['Eles vão chegar tarde.', 'Eles vão chegar atrasados.'] },
      { prompt: 'I will never forget this.', answers: ['Eu nunca vou esquecer isso.', 'Jamais vou esquecer isso.', 'Nunca esquecerei isso.'] },
      { prompt: 'We are going to win.', answers: ['A gente vai ganhar.', 'Nós vamos ganhar.', 'Vamos vencer.'] },
    ]}],
  },

  {
    id: 'rev-bas-pt',
    language: 'pt',
    stage: 'Básico',
    title: 'Basics Review',
    subtitle: 'Review irregular verbs, negation, simple past, imperfect and future.',
    theory: `## Review: Básico Stage

This review pulls together everything from the Básico stage.

### 1. Common Irregular Verbs

| Infinitive | eu    | você/ele | nós      | eles     |
|------------|-------|----------|----------|----------|
| ter        | tenho | tem      | temos    | têm      |
| ir         | vou   | vai      | vamos    | vão      |
| fazer      | faço  | faz      | fazemos  | fazem    |
| poder      | posso | pode     | podemos  | podem    |
| querer     | quero | quer     | queremos | querem   |

### 2. Negation

- não + verb → negative sentence: Eu não falo alemão. (I don't speak German.)
- nunca / nada / ninguém → reinforce the negation alongside "não" (double negation is normal in Portuguese): Não sei nada. (I don't know anything.)

### 3. Pretérito Perfeito (completed past actions)

Eu falei / comi / fui / tive / fiz — equivalent to English simple past.

### 4. Pretérito Imperfeito (habits/states in the past)

Eu falava / comia / era / tinha / ia — equivalent to "used to" or "was/were doing."

### 5. Futuro

- ir + infinitive: Eu vou falar. (colloquial, everyday)
- futuro do presente: Eu falarei. (formal, written)

## Putting tenses together

Notice how perfeito and imperfeito often combine in the same sentence: "Eu estava dormindo quando você ligou" (I was sleeping [imperfeito, background] when you called [perfeito, the interrupting event]).

💡 **Tip:** When telling a story in the past, use the imperfeito for descriptions/background and the pretérito perfeito for the actual events that move the story forward.

⚠️ **Common mistakes**
- Mixing up "fui" (I went/was) with "foi" (he/she went/was) — context is everything since ser and ir share forms in the perfeito.
- Forgetting "não" before negative words like "nunca" or "nada" — Portuguese needs both.
- Defaulting to the formal futuro do presente in casual speech instead of the much more natural "vou + infinitivo."

## Key vocabulary

• Natal — Christmas
• família — family
• cinema — movies/cinema
• tímida — shy
• jantar — dinner
• evento — event
• padaria — bakery
• pão e queijo — bread and cheese`,
    exercises: [{ sentences: [
      { prompt: 'I used to live in Brazil, but now I live in Canada.', answers: ['Eu morava no Brasil, mas agora moro no Canadá.', 'Morava no Brasil, mas agora moro no Canadá.'] },
      { prompt: 'She will never do that again.', answers: ['Ela nunca vai fazer isso de novo.', 'Ela jamais vai fazer isso de novo.'] },
      { prompt: 'We went to the movies last night.', answers: ['Nós fomos ao cinema ontem à noite.', 'Fomos no cinema ontem à noite.', 'A gente foi no cinema ontem.'] },
      { prompt: 'Can you come tomorrow?', answers: ['Você pode vir amanhã?', 'Cê pode vir amanhã?', 'Você consegue vir amanhã?'] },
      { prompt: 'He did not see anything.', answers: ['Ele não viu nada.', 'Ele não viu coisa nenhuma.'] },
      { prompt: 'I am going to visit my family this Christmas.', answers: ['Eu vou visitar minha família nesse Natal.', 'Vou visitar minha família no Natal.'] },
      { prompt: 'They used to work together.', answers: ['Eles trabalhavam juntos.', 'Elas trabalhavam juntas.'] },
      { prompt: 'She wants to go, but she cannot.', answers: ['Ela quer ir, mas não pode.', 'Ela quer ir, mas não dá.'] },
      { prompt: 'I had a lot of friends as a child.', answers: ['Eu tinha muitos amigos quando era criança.', 'Tinha muitos amigos quando era criança.'] },
      { prompt: 'He will not come to the party.', answers: ['Ele não vai vir à festa.', 'Ele não vai aparecer na festa.'] },
      { prompt: 'I did not understand what she said.', answers: ['Eu não entendi o que ela disse.', 'Não entendi o que ela falou.'] },
      { prompt: 'We are going to eat out tonight.', answers: ['A gente vai comer fora hoje à noite.', 'Nós vamos jantar fora hoje.'] },
      { prompt: 'She used to be very shy.', answers: ['Ela era muito tímida.', 'Ela era bem tímida.'] },
      { prompt: 'He made dinner and we ate together.', answers: ['Ele fez o jantar e nós comemos juntos.', 'Ele fez jantar e a gente comeu junto.'] },
      { prompt: 'I never want to go back there.', answers: ['Eu nunca quero voltar lá.', 'Nunca quero voltar pra lá.'] },
      { prompt: 'They will arrive early tomorrow.', answers: ['Eles vão chegar cedo amanhã.', 'Elas vão chegar cedo amanhã.'] },
      { prompt: 'I was sleeping when you called.', answers: ['Eu estava dormindo quando você ligou.', 'Tava dormindo quando você ligou.'] },
      { prompt: 'Nobody came to the event.', answers: ['Ninguém veio ao evento.', 'Não veio ninguém no evento.'] },
      { prompt: 'I want to go, but I have no money.', answers: ['Eu quero ir, mas não tenho dinheiro.', 'Quero ir, mas não tenho grana.'] },
      { prompt: 'Will you be here tomorrow?', answers: ['Você vai estar aqui amanhã?', 'Cê vai tá aqui amanhã?', 'Você estará aqui amanhã?'] },
    ]}],
    dialogExercise: {
      audioText: 'Ontem eu fui ao mercado mas estava fechado. Aí fui na padaria do bairro e comprei pão e queijo.',
      question: 'What did the person end up doing?',
      options: [
        { text: 'Bought bread and cheese at the neighborhood bakery.', correct: true },
        { text: 'Went back home without buying anything.', correct: false },
        { text: 'Bought groceries at the supermarket.', correct: false },
        { text: 'Ordered food delivery instead.', correct: false },
      ],
    },
  },
];
