export const MODULES_IT_ALPHABET = [
  {
    id: 'alpha-it-1',
    language: 'it',
    stage: 'Alfabeto',
    order: 1,
    title: 'Pronúncia italiana',
    subtitle: 'Sons que diferem do português',
    theory: `## Sons do italiano que diferem do português

O italiano é fonético e regular (quase tudo se lê como se escreve), mas tem algumas combinações que soam diferente do português:

| Letra/Grupo | Antes de | Som | Exemplos |
|-------------|----------|-----|---------|
| c | a, o, u | [k] | **c**asa, **c**orpo, **c**ura |
| c | e, i | [tʃ] (= "tch") | **c**ena, **c**ibo |
| ch | e, i | [k] | **ch**e, **ch**i, **ch**iave |
| g | a, o, u | [g] | **g**atto, **g**orgo |
| g | e, i | [dʒ] (= "dj") | **g**ente, **g**iro, orolo**g**io |
| gh | e, i | [g] | **gh**e, **gh**i, spa**gh**etti |
| gli | — | [λ] (≈ lh) | **gli** amici, fi**gli**o, ma**gli**a |
| gn | — | [ɲ] (≈ nh) | **gn**occhi, ba**gn**o, monta**gn**a |
| sc | e, i | [ʃ] (= "sh") | **sc**ena, pe**sc**e, **sc**iarpa |
| sc | a, o, u | [sk] | **sc**arpa, **sc**uola |
| z | — | [ts] ou [dz] | **z**io, pi**zz**a, **z**ero |
| consoante dupla | — | prolongada | cas**sa**, bel**lo**, mam**ma** |

### Exemplos em frase

- **Che bello questo gioco!** (Que bonito esse jogo!)
- **Mio fratello mangia gli spaghetti.** (Meu irmão come o espaguete.)
- **La pizza è calda.** (A pizza está quente.)
- **Conosci quella ragazza?** (Você conhece aquela moça?)

⚠️ Atenção: para o falante de português, a tentação é pronunciar consoantes duplas como se fossem simples. Em italiano elas mudam o sentido da palavra e devem ser realmente "alongadas" na fala — não é apenas ortografia decorativa.

💡 Consoantes duplas fazem diferença de significado: "nono" (nono) ≠ "nonno" (avô); "pala" (palavra) ≠ "palla" (bola); "sete" (sede) ≠ "sette" (sete).

💡 Dica de leitura: **c** e **g** seguem a mesma lógica — som "duro" antes de a/o/u, som "suave" antes de e/i. Para manter o som duro antes de e/i, insere-se um **h** (che, ghi); para manter o som suave antes de a/o/u, insere-se um **i** (cia, gio).`,
    exercises: [
      {
        sentences: [
          { prompt: 'Escreva "peixe" em italiano (sc antes de e)', answers: ['pesce'] },
          { prompt: 'Escreva "filho" em italiano (gli = lh)', answers: ['figlio'] },
          { prompt: 'Escreva "jantar" em italiano (c antes de e = tch)', answers: ['cena'] },
          { prompt: 'Escreva "banho" em italiano (gn = nh)', answers: ['bagno'] },
          { prompt: 'Escreva "quem" em italiano (ch antes de i = k)', answers: ['chi'] },
          { prompt: 'Escreva "amigos" em italiano (gh antes de i = g)', answers: ['amici'] },
          { prompt: 'Como se chama o avô em italiano? (consoante dupla)', answers: ['nonno'] },
          { prompt: 'Escreva "pizza" em italiano (zz = ts)', answers: ['pizza'] },
          { prompt: 'Escreva "noite" em italiano (consoante dupla)', answers: ['notte'] },
          { prompt: 'Escreva "belo" em italiano (consoante dupla)', answers: ['bello'] },
        ],
      },
    ],
  },

  {
    id: 'alpha-it-2',
    language: 'it',
    stage: 'Alfabeto',
    order: 2,
    title: 'Artigos e gênero',
    subtitle: 'il/lo/la/i/gli/le/un/uno/una',
    theory: `## Artigos em italiano

Todo substantivo tem gênero (masculino ou feminino). O artigo concorda com o gênero, o número e a letra inicial do substantivo.

### Artigos definidos (o/a/os/as)

| | Masc. sing. | Fem. sing. | Masc. pl. | Fem. pl. |
|---|---|---|---|---|
| Antes de consoante comum | **il** | **la** | **i** | **le** |
| Antes de s+cons., z, ps, gn, x | **lo** | **la** | **gli** | **le** |
| Antes de vogal | **l'** | **l'** | **gli** | **le** |

Exemplos: **il** libro, **lo** studente, **lo** zaino, **la** casa, **l'**amico, **l'**isola, **gli** amici, **gli** studenti, **le** case.

### Artigos indefinidos (um/uma)

| | Masc. sing. | Fem. sing. |
|---|---|---|
| Antes de consoante comum | **un** | **una** |
| Antes de s+cons., z, ps, gn, x | **uno** | — |
| Antes de vogal | **un** | **un'** |

Exemplos: **un** ragazzo, **uno** zio, **uno** psicologo, **una** ragazza, **un'**amica, **un'**idea.

### Frases de exemplo

- **Lo zaino è sulla sedia.** (A mochila está na cadeira.)
- **Gli studenti studiano l'italiano.** (Os estudantes estudam italiano.)
- **Ho un'idea fantastica!** (Tenho uma ideia fantástica!)
- **Uno zio simpatico vive a Roma.** (Um tio simpático vive em Roma.)

⚠️ Atenção: em português usamos "o" antes de quase qualquer consoante, mas em italiano "lo" (não "il") é obrigatório antes de **s+consoante, z, gn, ps, x** — mesmo no plural masculino, onde **todos** esses casos (e também vogal) usam **gli**, nunca "i". Erro comum: dizer "il studente" em vez de **lo studente**, ou "i amici" em vez de **gli amici**.

💡 Dica: -o no final → geralmente masculino; -a no final → geralmente feminino; -e pode ser qualquer gênero (il padre, la madre) — nesses casos é preciso memorizar o artigo junto com a palavra.

💡 O apóstrofo (l', un') só existe diante de vogal e nunca muda o som: ele simplesmente substitui a vogal final do artigo, mantendo a fala fluida (l'amico, não "lo amico").`,
    exercises: [
      {
        sentences: [
          { prompt: 'O livro é interessante.', answers: ['Il libro è interessante.'] },
          { prompt: 'A casa é bonita.', answers: ['La casa è bella.'] },
          { prompt: 'O amigo é simpático.', answers: ["L'amico è simpatico."] },
          { prompt: 'Os livros são interessantes.', answers: ['I libri sono interessanti.'] },
          { prompt: 'As casas são bonitas.', answers: ['Le case sono belle.'] },
          { prompt: 'Os amigos são simpáticos.', answers: ['Gli amici sono simpatici.'] },
          { prompt: 'Um cão está aqui.', answers: ['Un cane è qui.', 'C\'è un cane qui.'] },
          { prompt: 'Uma mulher entra na loja.', answers: ['Una donna entra nel negozio.'] },
          { prompt: 'Um estudante pergunta. (s+cons.)', answers: ['Uno studente domanda.', 'Uno studente fa una domanda.'] },
          { prompt: 'Uma amiga me ligou. (vogal fem.)', answers: ["Un'amica mi ha chiamato.", "Un'amica mi ha telefonato."] },
        ],
      },
    ],
  },
];
