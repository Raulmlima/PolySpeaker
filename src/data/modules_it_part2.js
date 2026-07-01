export const MODULES_IT_PART2 = [

  // ─── INTERMEDIÁRIO ──────────────────────────────────────────────────────────

  {
    id: 'int-it-1',
    language: 'it',
    stage: 'Intermediário',
    order: 1,
    title: 'Passato prossimo',
    subtitle: 'Essere e avere + participio passato',
    theory: `## Passato prossimo — o passado recente

Formação: **avere** ou **essere** (presente) + **participio passato**

⚠️ Atenção: em português usamos só "ter" (eu tenho comido), mas o italiano **divide os verbos em dois grupos de auxiliar** — é o erro nº1 dos lusófonos: usar sempre "avere" como se fosse o "ter" universal do português.

### Com AVERE (maioria dos verbos transitivos):
mangiare→mangiato | bere→bevuto | scrivere→scritto | leggere→letto | vedere→visto | fare→fatto | dire→detto | prendere→preso | aprire→aperto | chiudere→chiuso | mettere→messo

*Ho mangiato una pizza.* (Comi uma pizza.) | *Hai visto quel film?* (Você viu aquele filme?) | *Abbiamo aperto la finestra.* (Abrimos a janela.)

### Com ESSERE (verbos de movimento/mudança de estado + reflexivos):
Il participio **concorda em gênero e número** com o sujeito: -o/-a/-i/-e — outro ponto sem equivalente direto no português!

andare→andato/a | venire→venuto/a | partire→partito/a | arrivare→arrivato/a | uscire→uscito/a | tornare→tornato/a | essere→stato/a | nascere→nato/a | morire→morto/a | rimanere→rimasto/a | diventare→diventato/a | cadere→caduto/a | crescere→crescuto/a (popular) / cresciuto/a (correto)

*Sono andato al cinema.* (Fui ao cinema — fala um homem.) | *Lei è arrivata tardi.* (Ela chegou tarde.) | *Siamo partiti lunedì.* (Partimos na segunda.) | *Maria e Anna sono tornate insieme.* (Maria e Anna voltaram juntas.)

⚠️ Verbos reflexivos (mi sono svegliato, ti sei lavata) usam **sempre essere**, e o participio também concorda com o sujeito: *Mi sono lavata le mani.* (Lavei as minhas mãos — fala uma mulher.)

## Verbos com duplo auxiliar
Alguns verbos de movimento podem ser transitivos (com avere) ou intransitivos (com essere), mudando o sentido:
- *Ho corso una maratona.* (Corri uma maratona — objeto direto → avere)
- *Sono corso a casa.* (Corri para casa — movimento → essere)

## Participi passati irregolari mais comuns

| Infinitivo | Participio | Infinitivo | Participio |
|------------|------------|------------|------------|
| essere | stato | fare | fatto |
| dire | detto | bere | bevuto |
| prendere | preso | chiedere | chiesto |
| rispondere | risposto | scegliere | scelto |
| vincere | vinto | perdere | perso/perduto |
| rimanere | rimasto | nascere | nato |
| morire | morto | venire | venuto |

💡 Dica: a maioria dos participi irregolari termina em **-to**, **-so** ou **-sto** — quando tiver dúvida, tente uma dessas terminações antes de chutar a forma regular.

⚠️ Não confunda *stato* (participio de essere/stare) com o substantivo "estado" — em italiano, *Sono stato a Roma* significa "Estive em Roma", não "Fui um estado".

## Vocabulário-chave

• ieri — ontem
• deliziosa — deliciosa
• spiaggia — praia
• presto — cedo
• tardi — tarde
• verità — verdade
• messaggio — mensagem
• professoressa — professora`,
    exercises: [
      {
        sentences: [
          { prompt: 'Ontem comi uma pizza deliciosa.', answers: ['Ieri ho mangiato una pizza deliziosa.'] },
          { prompt: 'Você foi ao cinema ontem?', answers: ['Sei andato al cinema ieri?', 'Sei andata al cinema ieri?'] },
          { prompt: 'Ela chegou às três.', answers: ['È arrivata alle tre.', 'È arrivato alle tre.'] },
          { prompt: 'Nós fomos à praia no verão.', answers: ["Siamo andati in spiaggia d'estate.", 'Siamo andati al mare questa estate.'] },
          { prompt: 'O que você fez ontem?', answers: ['Cosa hai fatto ieri?'] },
          { prompt: 'Ele bebeu três cafés.', answers: ['Ha bevuto tre caffè.', 'Lui ha bevuto tre caffè.'] },
          { prompt: 'Saí do trabalho cedo.', answers: ['Sono uscito dal lavoro presto.', 'Sono uscita dal lavoro presto.'] },
          { prompt: 'Você já esteve na Itália?', answers: ['Sei mai stato in Italia?', 'Sei mai stata in Italia?'] },
          { prompt: 'Eles partiram na segunda-feira.', answers: ['Sono partiti lunedì.', 'Loro sono partiti lunedì.'] },
          { prompt: 'Escrevi um e-mail para ele.', answers: ["Ho scritto un'e-mail a lui.", 'Ho scritto un messaggio a lui.'] },
          { prompt: 'Ela voltou para casa tarde.', answers: ['È tornata a casa tardi.'] },
          { prompt: 'Você leu esse livro?', answers: ['Hai letto questo libro?'] },
          { prompt: 'Nós vimos um ótimo filme.', answers: ['Abbiamo visto un ottimo film.', 'Noi abbiamo visto un ottimo film.'] },
          { prompt: 'Ele disse a verdade.', answers: ['Ha detto la verità.', 'Lui ha detto la verità.'] },
          { prompt: 'Eu não entendi nada.', answers: ['Non ho capito niente.', 'Io non ho capito niente.'] },
          { prompt: 'Eles chegaram antes de nós.', answers: ['Sono arrivati prima di noi.', 'Loro sono arrivati prima di noi.'] },
          { prompt: 'Você veio de carro?', answers: ['Sei venuto in macchina?', 'Sei venuta in macchina?'] },
          { prompt: 'Ela foi professora por vinte anos.', answers: ["È stata professoressa per vent'anni.", "Lei è stata professoressa per vent'anni."] },
        ],
      },
    ],
  },

  {
    id: 'int-it-2',
    language: 'it',
    stage: 'Intermediário',
    order: 2,
    title: 'Imperfetto',
    subtitle: 'Hábitos e descrições no passado',
    theory: `## Imperfetto — estados, hábitos e cenários no passado

Formação: raiz do infinitivo (sem -re) + terminações

| Pronome | -ARE (parlare) | -ERE (scrivere) | -IRE (dormire) |
|---------|----------------|-----------------|----------------|
| io | parlavo | scrivevo | dormivo |
| tu | parlavi | scrivevi | dormivi |
| lui/lei | parlava | scriveva | dormiva |
| noi | parlavamo | scrivevamo | dormivamo |
| voi | parlavate | scrivevate | dormivate |
| loro | parlavano | scrivevano | dormivano |

**Irregulares**: essere→ero/eri/era/eravamo/eravate/erano | avere→avevo/avevi/aveva/avevamo/avevate/avevano | fare→facevo/facevi/faceva/facevamo/facevate/facevano | dire→dicevo/dicevi/diceva/dicevamo/dicevate/dicevano | bere→bevevo/bevevi/beveva...

**Usos**:
- Hábito no passado: *Da bambino, giocavo in strada.* (Quando criança, brincava na rua.)
- Descrição/cenário: *Era una bella giornata.* (Era um belo dia.)
- Ação em andamento: *Dormivo quando sei arrivato.* (Eu dormia quando você chegou.)
- Tempo/idade no passado: *Avevo dieci anni.* (Eu tinha dez anos.)
- Duas ações simultâneas no passado: *Mentre io cucinavo, lui guardava la TV.* (Enquanto eu cozinhava, ele via TV.)

## Imperfetto x Passato prossimo — a maior dúvida do lusófono

Em português, o pretérito imperfeito (*eu falava*) e o pretérito perfeito (*eu falei*) também existem — então a lógica é parecida, mas o italiano é mais rígido na distinção:

| Imperfetto (continuidade/hábito) | Passato prossimo (evento concluído) |
|-----------------------------------|--------------------------------------|
| *Quando ero piccolo, abitavo a Roma.* | *Ieri sono andato a Roma.* |
| *Pioveva tutto il giorno.* | *Ieri ha piovuto per un'ora.* |
| *Mentre studiavo, è suonato il telefono.* | *Ho studiato per due ore.* |

⚠️ Erro comum: usar o passato prossimo para descrever cenários/estados de fundo. *Ieri pioveva* (estava chovendo, cenário) é diferente de *Ieri ha piovuto* (choveu, evento pontual com começo/fim implícito).

💡 Truque mental: se a frase em português usa "estava fazendo", "costumava", "ficava" → imperfetto. Se é uma ação pontual e concluída → passato prossimo.

## Vocabulário-chave

• da bambino/a — quando criança
• felice — feliz
• banca — banco
• periodo — época/período
• timida — tímida
• soldi — dinheiro
• alzarsi — levantar-se
• giovane — jovem`,
    exercises: [
      {
        sentences: [
          { prompt: 'Quando era criança, morava no sul da Itália.', answers: ["Quando ero bambino, abitavo nel sud d'Italia.", "Quando ero bambina, abitavo nel sud d'Italia."] },
          { prompt: 'Ela sempre cantava quando estava feliz.', answers: ['Lei cantava sempre quando era felice.', 'Cantava sempre quando era felice.'] },
          { prompt: 'Antes trabalhava num banco.', answers: ['Prima lavoravo in una banca.', 'Io prima lavoravo in banca.'] },
          { prompt: 'Nós íamos à praia todo verão.', answers: ["D'estate andavamo sempre in spiaggia.", 'Ogni estate andavamo in spiaggia.'] },
          { prompt: 'Chovia muito naquela época.', answers: ['Pioveva molto in quel periodo.', 'Allora pioveva molto.'] },
          { prompt: 'Ele tinha um cão chamado Rex.', answers: ['Aveva un cane che si chiamava Rex.', 'Lui aveva un cane di nome Rex.'] },
          { prompt: 'Você gostava de espinafre quando era criança?', answers: ['Ti piacevano gli spinaci da bambino?', 'Ti piacevano gli spinaci da bambina?'] },
          { prompt: 'Eles sempre chegavam atrasados.', answers: ['Arrivavano sempre in ritardo.', 'Loro arrivavano sempre in ritardo.'] },
          { prompt: 'Eu dormia oito horas por noite naquela época.', answers: ['Allora dormivo otto ore per notte.', 'In quel periodo dormivo otto ore per notte.'] },
          { prompt: 'Ela era muito tímida quando jovem.', answers: ['Era molto timida da giovane.', 'Lei era molto timida quando era giovane.'] },
          { prompt: 'Nós morávamos perto do centro.', answers: ['Abitavamo vicino al centro.', 'Noi abitavamo vicino al centro.'] },
          { prompt: 'O trem saía às seis da manhã.', answers: ['Il treno partiva alle sei di mattina.', 'Il treno partiva alle sei del mattino.'] },
          { prompt: 'Você sabia que ela era italiana?', answers: ['Sapevi che era italiana?', 'Sapeva che era italiana?'] },
          { prompt: 'Eles tinham muito dinheiro naquela época.', answers: ['Avevano molti soldi in quel periodo.', 'Loro avevano molti soldi allora.'] },
          { prompt: 'Eu não entendia nada de francês.', answers: ['Non capivo niente di francese.', 'Io non capivo niente di francese.'] },
          { prompt: 'Ela se levantava sempre cedo.', answers: ['Si alzava sempre presto.', 'Lei si alzava sempre presto.'] },
          { prompt: 'Quando era jovem, adorava dançar.', answers: ['Da giovane, mi piaceva molto ballare.', 'Quando ero giovane, amavo ballare.'] },
          { prompt: 'Nós estudávamos juntos na universidade.', answers: ["Studiavamo insieme all'università.", "Noi studiavamo insieme all'università."] },
        ],
      },
    ],
  },

  {
    id: 'int-it-3',
    language: 'it',
    stage: 'Intermediário',
    order: 3,
    title: 'Futuro e condizionale',
    subtitle: 'Futuro semplice + condizionale presente',
    theory: `## Futuro semplice — ações futuras

Formação: infinitivo (verbos -ere: remove -e final) + terminações. ⚠️ Note que -ARE muda para -ER- no futuro: *parlare → parlerò* (não "parlarò").

| Pronome | -ARE/-ERE | -IRE |
|---------|-----------|------|
| io | parlerò / prenderò | dormirò |
| tu | parlerai / prenderai | dormirai |
| lui/lei | parlerà / prenderà | dormirà |
| noi | parleremo / prenderemo | dormiremo |
| voi | parlerete / prenderete | dormirete |
| loro | parleranno / prenderanno | dormiranno |

**Irregulares**: essere→sarò/sarai/sarà/saremo/sarete/saranno | avere→avrò/avrai/avrà... | andare→andrò | venire→verrò | fare→farò | dire→dirò | potere→potrò | volere→vorrò | dovere→dovrò | sapere→saprò | vedere→vedrò

💡 No italiano falado, é muito comum usar o **presente** para falar de planos próximos e certos: *Domani vado a Roma* tem o mesmo efeito de *Domani andrò a Roma* — diferente do português, em que "vou" e "irei" também coexistem, mas o italiano usa o presente com mais frequência ainda.

## Condizionale presente — hipóteses e polidez

Terminações: -ei, -esti, -ebbe, -emmo, -este, -ebbero (adicionadas à raiz do futuro — incluindo as irregularidades).

| Pronome | parlare | essere | avere |
|---------|---------|--------|-------|
| io | parlerei | sarei | avrei |
| tu | parleresti | saresti | avresti |
| lui/lei | parlerebbe | sarebbe | avrebbe |
| noi | parleremmo | saremmo | avremmo |
| voi | parlereste | sareste | avreste |
| loro | parlerebbero | sarebbero | avrebbero |

*Vorrei un caffè.* (Queria um café.) | *Potrebbe aiutarmi?* (Poderia me ajudar?) | *Mi piacerebbe visitare Roma.* (Eu gostaria de visitar Roma.) | *Saresti disposto ad aiutarmi?* (Você estaria disposto a me ajudar?)

⚠️ Cuidado com a ortografia: o condizionale dobra o "b" em -ebbe/-ebbero (*parlerebbe*, não "parlerebe") — erro comum por influência do português, que não tem essa consoante dobrada.

⚠️ Não confunda futuro e condizionale na escrita: *parlerò* (futuro, eu falarei) vs. *parlerei* (condizionale, eu falaria) — a terminação -ò/-ei é o que diferencia, mas falantes lusófonos às vezes trocam por semelhança sonora com o português.

## Vocabulário-chave

• resterai/rimanere — ficar
• festa — festa
• aiutare — ajudar
• viaggiare — viajar
• piovere — chover
• volentieri — com prazer
• tornare — voltar`,
    exercises: [
      {
        sentences: [
          { prompt: 'Amanhã vou a Roma.', answers: ['Domani andrò a Roma.', 'Domani vado a Roma.'] },
          { prompt: 'Você vai vir à minha festa?', answers: ['Verrai alla mia festa?', 'Verrà alla mia festa?'] },
          { prompt: 'Ela será uma ótima médica.', answers: ["Sarà un'ottima medica.", "Sarà una bravissima medica."] },
          { prompt: 'Nós partiremos na sexta de manhã.', answers: ['Partiremo venerdì mattina.', 'Noi partiremo venerdì mattina.'] },
          { prompt: 'Quanto tempo você vai ficar?', answers: ['Quanto tempo resterai?', 'Per quanto tempo rimarrà?'] },
          { prompt: 'Gostaria de um café, por favor.', answers: ['Vorrei un caffè, per favore.'] },
          { prompt: 'Você poderia me ajudar?', answers: ['Potresti aiutarmi?', 'Potrebbe aiutarmi?', 'Mi potresti aiutare?'] },
          { prompt: 'Com mais tempo, viajaria mais.', answers: ['Con più tempo, viaggerei di più.'] },
          { prompt: 'Eu nunca faria isso!', answers: ['Non lo farei mai!', 'Io non lo farei mai!'] },
          { prompt: 'No próximo ano, vou morar em Milão.', answers: ["L'anno prossimo abiterò a Milano.", "L'anno prossimo vivrò a Milano."] },
          { prompt: 'Eles dirão a verdade.', answers: ['Diranno la verità.', 'Loro diranno la verità.'] },
          { prompt: 'Você saberia me dizer que horas são?', answers: ['Sapresti dirmi che ore sono?', 'Saprebbe dirmi che ore sono?'] },
          { prompt: 'Ela gostaria de visitar o Brasil.', answers: ['Le piacerebbe visitare il Brasile.', 'Vorrebbe visitare il Brasile.'] },
          { prompt: 'Amanhã vai chover.', answers: ['Domani pioverà.'] },
          { prompt: 'Não poderíamos fazer isso.', answers: ['Non potremmo fare questo.', 'Non potremmo farlo.'] },
          { prompt: 'Nós iríamos, mas não temos tempo.', answers: ['Andremmo, ma non abbiamo tempo.', 'Ci andrebbero, ma non hanno tempo.'] },
          { prompt: 'Eu faria isso por você.', answers: ['Lo farei per te.', 'Lo farei per te volentieri.'] },
          { prompt: 'Quando você voltar, me ligue.', answers: ['Quando tornerai, chiamami.', 'Quando tornerà, mi chiami.'] },
        ],
      },
    ],
  },

  {
    id: 'int-it-4',
    language: 'it',
    stage: 'Intermediário',
    order: 4,
    title: 'Pronomi diretti e indiretti',
    subtitle: 'lo/la/li/le + mi/ti/gli/le/ci/vi',
    theory: `## Pronomi diretti (substituem o objeto direto)

| Pessoa | Singular | Plural |
|--------|----------|--------|
| 1ª | mi (me) | ci (nos) |
| 2ª | ti (te) | vi (vos) |
| 3ª masc. | lo (o) | li (os) |
| 3ª fem. | la (a) | le (as) |

*Vedo Mario.* → *Lo vedo.* (Eu o vejo.) | *Chiamo Maria.* → *La chiamo.* (Eu a chamo.)

## Pronomi indiretti (substituem o objeto indireto — para quem)

| Pessoa | Singular | Plural |
|--------|----------|--------|
| 1ª | mi (me) | ci (nos) |
| 2ª | ti (te) | vi (vos) |
| 3ª masc. | gli (lhe) | gli (lhes) |
| 3ª fem. | le (lhe) | gli (lhes) |

*Do il libro a Mario.* → *Gli do il libro.* (Dou-lhe o livro.) | *Scrivo a Maria.* → *Le scrivo.* (Escrevo-lhe.)

⚠️ Erro clássico: em português usamos "lhe" tanto para masculino quanto feminino, mas o italiano distingue: **gli** (para ele) e **le** (para ela) — não troque os dois.

## Concordância do participio com pronomi diretti

Quando um pronome direto (lo/la/li/le) precede um verbo no passato prossimo, o participio **concorda** com ele:
*Ho visto Maria* → *L'ho vista.* (Eu a vi.) | *Ho comprato le mele* → *Le ho comprate.* (Eu as comprei.)

⚠️ Com pronomi indiretti (mi, ti, gli, le, ci, vi) o participio **não concorda**: *Le ho scritto.* (Escrevi-lhe — fica invariável "scritto", não "scritta").

## Combinazione de pronomi diretti + indiretti

Quando os dois aparecem juntos, o indireto vem primeiro e sofre mudança de forma: mi/ti/ci/vi + lo/la/li/le → **me lo, te la, ce li, ve le**. Já gli/le + lo/la/li/le se fundem em **glielo, gliela, glieli, gliele**.

*Mi dai il libro?* → *Me lo dai?* (Você me dá ele?) | *Le do il libro* → *Glielo do.* (Dou-o a ela.)

💡 Posição: antes do verbo conjugado ou colado ao infinitivo: *Voglio vederlo.* = *Lo voglio vedere.* O mesmo vale para gerúndio e imperativo afirmativo: *Guardalo!* (Olhe para ele!)

💡 Outros exemplos úteis: *Ci penso io.* (Eu cuido disso / deixa comigo.) | *Ne ho due.* (Tenho dois deles — pronome "ne" para quantidades, sem equivalente direto em português.)

## Vocabulário-chave

• chiamare — chamar/ligar
• spiegare — explicar
• invitare — convidar
• prestare — emprestar
• minuto — minuto
• amare — amar`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu o vejo todos os dias.', answers: ['Lo vedo ogni giorno.', 'Io lo vedo ogni giorno.'] },
          { prompt: 'Você a conhece?', answers: ['La conosci?', 'La conosce?'] },
          { prompt: 'Ele me ligou ontem.', answers: ['Mi ha chiamato ieri.', 'Lui mi ha chiamato ieri.'] },
          { prompt: 'Eu lhe disse a verdade.', answers: ['Gli ho detto la verità.', 'Le ho detto la verità.'] },
          { prompt: 'Ela os comprou.', answers: ['Li ha comprati.', 'Lei li ha comprati.'] },
          { prompt: 'Você pode me ajudar?', answers: ['Puoi aiutarmi?', 'Può aiutarmi?', 'Mi puoi aiutare?'] },
          { prompt: 'Eu não a entendo.', answers: ['Non la capisco.', 'Io non la capisco.'] },
          { prompt: 'Eles te viram ontem?', answers: ['Ti hanno visto ieri?', 'Ti hanno vista ieri?'] },
          { prompt: 'Me dê um minuto, por favor.', answers: ['Dammi un minuto, per favore.'] },
          { prompt: 'Você lhe escreveu?', answers: ['Gli hai scritto?', 'Le hai scritto?'] },
          { prompt: 'Nós os convidamos para a festa.', answers: ['Li abbiamo invitati alla festa.', 'Noi li abbiamo invitati alla festa.'] },
          { prompt: 'Eu te amo.', answers: ['Ti amo.', 'Io ti amo.'] },
          { prompt: 'Ele nos explicou o problema.', answers: ['Ci ha spiegato il problema.', 'Lui ci ha spiegato il problema.'] },
          { prompt: 'Você pode me telefonar?', answers: ['Puoi telefonarmi?', 'Mi puoi telefonare?'] },
          { prompt: 'Ela me deu o livro.', answers: ['Mi ha dato il libro.', 'Lei mi ha dato il libro.'] },
          { prompt: 'Eu os vi no parque.', answers: ['Li ho visti al parco.', 'Io li ho visti al parco.'] },
          { prompt: 'Pode me emprestar o carro?', answers: ['Puoi prestarmi la macchina?', 'Mi puoi prestare la macchina?'] },
          { prompt: 'Ele a amava muito.', answers: ['La amava molto.', 'Lui la amava molto.'] },
        ],
      },
    ],
  },

  {
    id: 'int-it-5',
    language: 'it',
    stage: 'Intermediário',
    order: 5,
    title: 'Comparativi e superlativi',
    subtitle: 'più...di, meno...di, il più, -issimo',
    theory: `## Comparativos

- **Superioridade**: più + agg. + di/che — *È più alta di me.* (Ela é mais alta que eu.)
- **Inferioridade**: meno + agg. + di/che — *È meno caro di quello.* (É menos caro que aquele.)
- **Igualdade**: (tanto)...quanto / (così)...come — *È tanto brava quanto te.* (Ela é tão competente quanto você.)

**di** → compara dois substantivos/pronomes: *Marco è più alto di Luca.* | **che** → compara dois adjetivos/verbos/quantidade no mesmo termo: *È più simpatico che intelligente.* (Ele é mais simpático que inteligente.)

⚠️ Erro comum: usar sempre "che" como em português ("mais alto que"). Em italiano, quando se compara duas pessoas/coisas distintas, o correto é **di**: *più alto di Mario* (não "più alto che Mario").

## Superlativos

- **Relativo**: il/la/i/le più + agg. — *È la città più bella d'Italia.* (É a cidade mais bonita da Itália.)
- **Assoluto**: agg. + **-issimo/a/i/e** ou **molto** + agg. — *stanchissimo / molto stanco* (cansadíssimo / muito cansado)

💡 O superlativo absoluto em -issimo é muito produtivo no italiano falado e soa mais natural do que "molto + agg." em muitos contextos: *Che buonissimo!* (Que delícia!)

## Irregulares importantes

| Adjetivo | Comparativo | Superlativo relativo | Superlativo absoluto |
|----------|-------------|----------------------|------------------------|
| buono | migliore | il migliore | ottimo |
| cattivo | peggiore | il peggiore | pessimo |
| grande | maggiore | il maggiore | massimo |
| piccolo | minore | il minore | minimo |

⚠️ Não confunda **migliore/peggiore** (comparativos, "melhor/pior" comparando coisas) com **meglio/peggio** (advérbios, usados com verbos): *Questo vino è migliore.* (adjetivo) vs. *Parla meglio di me.* (advérbio — fala melhor do que eu). É comum o lusófono usar "meglio" como adjetivo por analogia com "melhor" em português, que serve para ambos os casos.

💡 Outra construção comum: *più...possibile* — *Il più presto possibile.* (O mais rápido possível.)

## Vocabulário-chave

• alto — alto
• caro — caro
• importante — importante
• classe — turma
• facile — fácil
• stanco — cansado
• disponibile — disponível
• professionista — profissional`,
    exercises: [
      {
        sentences: [
          { prompt: 'Ela é mais alta que ele.', answers: ['Lei è più alta di lui.', 'È più alta di lui.'] },
          { prompt: 'Esse restaurante é o melhor da cidade.', answers: ['Questo ristorante è il migliore della città.', 'Questo è il miglior ristorante della città.'] },
          { prompt: 'O café aqui é melhor do que no bar.', answers: ['Il caffè qui è migliore che al bar.'] },
          { prompt: 'Esse hotel é menos caro que aquele.', answers: ['Questo albergo è meno caro di quello.'] },
          { prompt: 'É a coisa mais importante para mim.', answers: ['È la cosa più importante per me.'] },
          { prompt: 'Ela é a aluna mais inteligente da turma.', answers: ['È la studentessa più intelligente della classe.', 'Lei è la studentessa più intelligente della classe.'] },
          { prompt: 'Esse problema é pior do que eu pensava.', answers: ['Questo problema è peggiore di quanto pensassi.', 'È peggio di quello che pensavo.'] },
          { prompt: 'A pizza aqui é ótima!', answers: ['La pizza qui è ottima!'] },
          { prompt: 'Tô cansadíssimo!', answers: ['Sono stanchissimo!', 'Sono stanchissima!'] },
          { prompt: 'Ela fala italiano melhor do que eu.', answers: ['Parla italiano meglio di me.', 'Lei parla italiano meglio di me.'] },
          { prompt: 'É a cidade mais bonita da Itália?', answers: ["È la città più bella d'Italia?"] },
          { prompt: 'Quanto mais pratico, mais entendo.', answers: ['Più pratico, più capisco.', 'Più studio, più capisco.'] },
          { prompt: 'É muito mais fácil do que parece.', answers: ['È molto più facile di quanto sembri.', 'È molto più facile di quanto sembra.'] },
          { prompt: 'Nós somos tão cansados quanto vocês.', answers: ['Siamo tanto stanchi quanto voi.', 'Siamo così stanchi come voi.'] },
          { prompt: 'A situação está piorando.', answers: ['La situazione sta peggiorando.'] },
          { prompt: 'Esse é o menor apartamento disponível?', answers: ["È l'appartamento più piccolo disponibile?", "Questo è il più piccolo appartamento disponibile?"] },
          { prompt: 'Ela canta tão bem quanto uma profissional.', answers: ['Canta tanto bene quanto una professionista.', 'Canta così bene come una professionista.'] },
          { prompt: 'Este hotel é péssimo!', answers: ['Questo albergo è pessimo!', "Quest'albergo è pessimo!"] },
        ],
      },
    ],
  },

  // ─── AVANÇADO ───────────────────────────────────────────────────────────────

  {
    id: 'adv-it-1',
    language: 'it',
    stage: 'Avançado',
    order: 1,
    title: 'Congiuntivo presente',
    subtitle: 'penso che, voglio che, bisogna che, sebbene',
    theory: `## Congiuntivo presente

Formação: raiz da 1ª pessoa singular + terminações. ⚠️ Note que **io, tu e lui/lei têm a mesma forma** — diferente do português, em que o presente do subjuntivo também unifica essas pessoas, mas aqui a ambiguidade é total: só o contexto ou o pronome explícito (que costuma ser obrigatório) resolve.

| Pronome | parlare | essere | avere | andare | fare |
|---------|---------|--------|-------|--------|------|
| io | parli | sia | abbia | vada | faccia |
| tu | parli | sia | abbia | vada | faccia |
| lui/lei | parli | sia | abbia | vada | faccia |
| noi | parliamo | siamo | abbiamo | andiamo | facciamo |
| voi | parliate | siate | abbiate | andiate | facciate |
| loro | parlino | siano | abbiano | vadano | facciano |

Outros irregulares frequentes: potere→possa | volere→voglia | sapere→sappia | venire→venga | dire→dica | dovere→debba/deva | stare→stia | dare→dia

**Usos principais** (sempre após "che"):
- Desejo/vontade: *Voglio che tu venga.* (Quero que você venha.)
- Opinião/crença: *Penso che sia vero.* (Penso que seja verdade.)
- Expressões impessoais: *È importante che studi.* (É importante que estude.)
- Emoção: *Sono contento che tu sia qui.* (Estou contente que você esteja aqui.)
- Concessão: *Sebbene / benché / nonostante + congiuntivo*
- Finalidade: *Affinché + congiuntivo*
- Dúvida/incerteza: *Non sono sicuro che venga.* (Não tenho certeza de que ele venha.)
- Após superlativos relativos e "il primo/unico/ultimo che": *È la persona più gentile che conosca.* (É a pessoa mais gentil que conheço.)

## Comparação com o português

O gatilho básico (verbos de opinião, desejo, dúvida + "che/que") é parecido nas duas línguas, mas o italiano usa o subjuntivo em **mais contextos** do que o português moderno:
⚠️ Depois de **penso che / credo che** o italiano exige subjuntivo (*Penso che sia vero*), enquanto em português coloquial muitos diriam "Penso que é verdade" (indicativo) — não traduza literalmente "penso que" mantendo o indicativo.

⚠️ Outro erro comum: usar o indicativo após **bisogna che, è necessario che, basta che** — essas expressões impessoais sempre pedem subjuntivo: *Bisogna che tu vada.* (É preciso que você vá — não "Bisogna che tu vai").

💡 Truque: se a frase principal expressa fato 100% certo e objetivo (*È vero che...*, *So che...*), usa-se indicativo. Se envolve opinião, dúvida, desejo ou emoção, usa-se congiuntivo.

## Vocabulário-chave

• sperare — esperar (desejo)
• credere — acreditar
• dubitare — duvidar
• sebbene/benché — embora
• affinché — para que
• purché — contanto que
• partecipare — participar
• rimanere — ficar/permanecer`,
    exercises: [
      {
        sentences: [
          { prompt: 'Espero que você esteja bem.', answers: ['Spero che tu stia bene.', 'Spero che stia bene.'] },
          { prompt: 'Ele acha que ela seja italiana.', answers: ['Pensa che sia italiana.', 'Lui pensa che lei sia italiana.'] },
          { prompt: 'Quero que você venha comigo.', answers: ['Voglio che tu venga con me.'] },
          { prompt: 'É importante que você estude.', answers: ['È importante che tu studi.', 'È importante che studi.'] },
          { prompt: 'Não acredito que ele diga a verdade.', answers: ['Non credo che lui dica la verità.', 'Non credo che dica la verità.'] },
          { prompt: 'Embora esteja cansada, vai continuar.', answers: ['Sebbene sia stanca, continuerà.', 'Benché sia stanca, continuerà.'] },
          { prompt: 'Peço que você chegue cedo.', answers: ['Ti chiedo che tu arrivi presto.', 'Le chiedo che arrivi presto.'] },
          { prompt: 'É possível que eles não venham.', answers: ['È possibile che non vengano.'] },
          { prompt: 'Para que você entenda, vou explicar devagar.', answers: ['Affinché tu capisca, spiego lentamente.', 'Perché tu capisca, spiego lentamente.'] },
          { prompt: 'Antes que você vá, tenho algo a dizer.', answers: ['Prima che tu vada, ho qualcosa da dirti.'] },
          { prompt: 'Não há ninguém que saiba a resposta.', answers: ["Non c'è nessuno che sappia la risposta."] },
          { prompt: 'Prefiro que você fique em casa.', answers: ['Preferisco che tu rimanga a casa.', 'Preferisco che tu stia a casa.'] },
          { prompt: 'Ela quer que nós façamos isso.', answers: ['Vuole che noi facciamo questo.', 'Vuole che lo facciamo.'] },
          { prompt: 'É necessário que todos participem.', answers: ['È necessario che tutti partecipino.'] },
          { prompt: 'Embora seja difícil, vou tentar.', answers: ['Sebbene sia difficile, ci proverò.', 'Anche se è difficile, ci proverò.'] },
          { prompt: 'Duvido que ele venha.', answers: ['Dubito che venga.', 'Dubito che lui venga.'] },
          { prompt: 'Ela tem medo de que algo aconteça.', answers: ['Ha paura che succeda qualcosa.', 'Lei ha paura che accada qualcosa.'] },
          { prompt: 'Contanto que você esteja aqui.', answers: ['Purché tu sia qui.', 'A patto che tu sia qui.'] },
        ],
      },
    ],
  },

  {
    id: 'adv-it-2',
    language: 'it',
    stage: 'Avançado',
    order: 2,
    title: 'Verbi modali',
    subtitle: 'dovere, potere, volere, sapere, conoscere',
    theory: `## Verbos modais em italiano

| Pronome | dovere (dever) | potere (poder) | volere (querer) |
|---------|----------------|----------------|-----------------|
| io | devo | posso | voglio |
| tu | devi | puoi | vuoi |
| lui/lei | deve | può | vuole |
| noi | dobbiamo | possiamo | vogliamo |
| voi | dovete | potete | volete |
| loro | devono | possono | vogliono |

**SAPERE** (saber como fazer algo / saber que): *So nuotare.* (Sei nadar.) | *So che è vero.* (Sei que é verdade.) | *Sai guidare?* (Você sabe dirigir?)
vs.
**CONOSCERE** (conhecer pessoas/lugares/coisas por experiência): *Conosco Roma.* (Conheço Roma.) | *Conosco Maria.* (Conheço a Maria.)

⚠️ Erro típico do lusófono: usar "sapere" para "conhecer pessoas/lugares" por analogia com o uso mais amplo de "saber" em algumas frases do português. Em italiano essa distinção é rígida: *Conosco questa città* (correto) ≠ *So questa città* (errado).

## Modais no passato: avere ou essere?

⚠️ Ponto sutil: quando um modal (dovere/potere/volere) acompanha um verbo que normalmente usa **essere**, o auxiliar do modal também pode virar essere:
*Sono dovuto andare via.* (Tive que ir embora.) — mas no italiano falado moderno também se aceita *Ho dovuto andare via.* Ambas formas circulam, mas a regra "tradicional" segue o auxiliar do verbo principal.

## DOVERE — também expressa probabilidade
*Deve essere tardi.* (Deve ser tarde — probabilidade, não obrigação.) | *Devono essere già arrivati.* (Devem já ter chegado.)

💡 Os modais podem ser seguidos de infinitivo diretamente, sem preposição:
*Devo studiare.* (Preciso estudar.) | *Posso venire?* (Posso vir?) | *Voglio imparare.* (Quero aprender.)

⚠️ Diferente do português, que às vezes intercala preposição ("tenho de estudar"), o italiano nunca usa preposição entre o modal e o infinitivo: nunca diga "devo di studiare".

## Vocabulário-chave

• guidare — dirigir
• nuotare — nadar
• riuscire — conseguir
• tavolo — mesa
• lingue — idiomas
• quarantina — uns quarenta (anos)`,
    exercises: [
      {
        sentences: [
          { prompt: 'Preciso estudar mais.', answers: ['Devo studiare di più.', 'Io devo studiare di più.'] },
          { prompt: 'Você pode me ajudar?', answers: ['Puoi aiutarmi?', 'Può aiutarmi?'] },
          { prompt: 'Ele quer morar na Itália.', answers: ['Vuole abitare in Italia.', 'Lui vuole abitare in Italia.'] },
          { prompt: 'Você sabe cozinhar?', answers: ['Sai cucinare?', 'Tu sai cucinare?'] },
          { prompt: 'Eu conheço muito bem Roma.', answers: ['Conosco molto bene Roma.', 'Io conosco bene Roma.'] },
          { prompt: 'Não posso vir hoje.', answers: ['Non posso venire oggi.', 'Io non posso venire oggi.'] },
          { prompt: 'Ela sabe falar três idiomas.', answers: ['Sa parlare tre lingue.', 'Lei sa parlare tre lingue.'] },
          { prompt: 'Vocês devem chegar às oito.', answers: ['Dovete arrivare alle otto.', 'Voi dovete arrivare alle otto.'] },
          { prompt: 'Quero aprender a tocar guitarra.', answers: ['Voglio imparare a suonare la chitarra.', 'Io voglio imparare a suonare la chitarra.'] },
          { prompt: 'Você conhece Maria?', answers: ['Conosci Maria?', 'Tu conosci Maria?'] },
          { prompt: 'Ele não consegue dormir direito.', answers: ['Non riesce a dormire bene.', 'Non può dormire bene.'] },
          { prompt: 'Nós sabemos onde fica.', answers: ['Sappiamo dove si trova.', 'Noi sappiamo dove si trova.'] },
          { prompt: 'Elas querem ir ao concerto.', answers: ['Vogliono andare al concerto.', 'Loro vogliono andare al concerto.'] },
          { prompt: 'Você sabe nadar?', answers: ['Sai nuotare?', 'Tu sai nuotare?'] },
          { prompt: 'Não conheço essa cidade.', answers: ['Non conosco questa città.', 'Io non conosco questa città.'] },
          { prompt: 'Ele deve ter uns quarenta anos.', answers: ["Deve avere una quarantina d'anni.", 'Avrà circa quarant\'anni.'] },
          { prompt: 'Posso entrar?', answers: ['Posso entrare?'] },
          { prompt: 'Nós queremos uma mesa para quatro.', answers: ['Vogliamo un tavolo per quattro.', 'Noi vogliamo un tavolo per quattro.'] },
        ],
      },
    ],
  },

  {
    id: 'adv-it-3',
    language: 'it',
    stage: 'Avançado',
    order: 3,
    title: 'Periodo ipotetico',
    subtitle: 'Se + indicativo / congiuntivo / condizionale',
    theory: `## Período hipotético — três tipos

### Tipo 1 — Reale (possível/real)
*Se + presente indicativo → presente/futuro*
*Se hai tempo, vieni con me.* (Se você tiver tempo, venha comigo.) | *Se pioverà, resteremo a casa.* (Se chover, ficaremos em casa.)

💡 No tipo 1, é comum (e aceito) usar presente nas duas partes, mesmo falando do futuro: *Se piove, restiamo a casa* — funciona como em português coloquial ("se chove, ficamos em casa").

### Tipo 2 — Possibile/Irreale presente (hipotético)
*Se + congiuntivo imperfetto → condizionale presente*

Congiuntivo imperfetto de essere: fossi, fossi, fosse, fossimo, foste, fossero
Congiuntivo imperfetto de avere: avessi, avessi, avesse, avessimo, aveste, avessero
-ARE: parlassi, parlassi, parlasse, parlassimo, parlaste, parlassero | -ERE: scrivessi... | -IRE: dormissi...

*Se avessi tempo, viaggerei di più.* (Se eu tivesse tempo, viajaria mais.)
*Se fossi ricco, comprerei una casa.* (Se eu fosse rico, compraria uma casa.)
*Se lei studiasse di più, capirebbe meglio.* (Se ela estudasse mais, entenderia melhor.)

### Tipo 3 — Irreale passato (contrafatual)
*Se + congiuntivo trapassato → condizionale passato*

Congiuntivo trapassato = congiuntivo imperfetto de avere/essere + participio passato: *avessi studiato* / *fossi andato/a*
Condizionale passato = condizionale presente de avere/essere + participio passato: *avrei capito* / *sarei andato/a*

*Se avessi studiato, avrei capito.* (Se eu tivesse estudado, teria entendido.)
*Se fossi venuto, ti saresti divertito.* (Se você tivesse vindo, teria se divertido.) ⚠️ atenção: é *saresti*, não "avresti", pois *divertirsi* é reflexivo e usa essere.

## Erros comuns

⚠️ O erro mais frequente do lusófono é misturar tempos: usar indicativo na parte do "se" quando deveria ser congiuntivo. Em português, "Se eu tivesse dinheiro" já carrega a noção de hipótese pelo próprio verbo "tivesse", mas em italiano a estrutura **se + congiuntivo imperfetto/trapassato** é obrigatória nos tipos 2 e 3 — nunca diga "Se ho i soldi, comprerei" quando quer dizer hipótese irreal (isso soa como tipo 1, possível/real).

⚠️ Não confunda o congiuntivo imperfetto (*fossi, avessi*) com o condizionale (*sarei, avrei*) — o "se" sempre vem com o congiuntivo, nunca com condizionale: "Se sarei ricco" está errado; o correto é *Se fossi ricco*.

💡 Dica prática: pense na estrutura como um espelho com o português formal "Se eu fosse rico, compraria" — aí sim a lógica bate quase 1:1 com o italiano.

## Vocabulário-chave

• ricco — rico
• divertirsi — divertir-se
• superare (l'esame) — passar (na prova)
• bisogno (avere bisogno di) — precisar
• posto — lugar/posição
• diversamente — diferentemente`,
    exercises: [
      {
        sentences: [
          { prompt: 'Se você estudar, vai passar no exame.', answers: ['Se studi, passerai l\'esame.', "Se studi, passi l'esame."] },
          { prompt: 'Se tivesse dinheiro, compraria uma casa.', answers: ['Se avessi i soldi, comprerei una casa.', 'Se avessi i soldi, comprerei casa.'] },
          { prompt: 'Se eu tivesse estudado mais, teria passado.', answers: ['Se avessi studiato di più, avrei passato.', 'Se avessi studiato di più, avrei superato l\'esame.'] },
          { prompt: 'Se fizer sol amanhã, vamos à praia.', answers: ['Se fa bello domani, andiamo in spiaggia.', 'Se farà bello domani, andremo in spiaggia.'] },
          { prompt: 'Se você for à Itália, deve visitar Roma.', answers: ['Se vai in Italia, devi visitare Roma.', 'Se andrai in Italia, devi visitare Roma.'] },
          { prompt: 'Se ela fosse italiana, faria diferente.', answers: ['Se fosse italiana, farebbe diversamente.', 'Se fosse italiana, agirebbe diversamente.'] },
          { prompt: 'Se tivéssemos chegado antes, teríamos encontrado o museu aberto.', answers: ['Se fossimo arrivati prima, avremmo trovato il museo aperto.'] },
          { prompt: 'Se eu soubesse, teria te contado.', answers: ['Se avessi saputo, te lo avrei detto.', 'Se lo avessi saputo, te lo avrei detto.'] },
          { prompt: 'Se chover, ficamos em casa.', answers: ['Se piove, restiamo a casa.', 'Se pioverà, resteremo a casa.'] },
          { prompt: 'Na sua posição, eu faria diferente.', answers: ['Al tuo posto, farei diversamente.', 'Al posto tuo, avrei fatto diversamente.'] },
          { prompt: 'Se eu fosse você, não faria isso.', answers: ['Se fossi in te, non lo farei.', 'Se fossi al tuo posto, non lo farei.'] },
          { prompt: 'Se você precisar de ajuda, me ligue.', answers: ['Se hai bisogno di aiuto, chiamami.', 'Se avrai bisogno di aiuto, chiamami.'] },
          { prompt: 'Se tivesse tempo, aprenderia a tocar guitarra.', answers: ['Se avessi tempo, imparerei a suonare la chitarra.'] },
          { prompt: 'O que você faria se pudesse?', answers: ['Cosa faresti se potessi?', 'Cosa farebbe se potesse?'] },
          { prompt: 'Se o tempo estivesse melhor, sairíamos.', answers: ['Se il tempo fosse migliore, usciremmo.', 'Se ci fosse bel tempo, usciremmo.'] },
          { prompt: 'Se você tivesse vindo, teria gostado.', answers: ['Se fossi venuto, ti sarebbe piaciuto.', 'Se fossi venuta, ti sarebbe piaciuto.'] },
          { prompt: 'E se ele não vier?', answers: ['E se non viene?', 'E se non venisse?'] },
          { prompt: 'Se eu tivesse mais tempo, dormia mais.', answers: ['Se avessi più tempo, dormirei di più.'] },
        ],
      },
    ],
  },

  {
    id: 'adv-it-4',
    language: 'it',
    stage: 'Avançado',
    order: 4,
    title: 'Espressioni idiomatiche e colloquiale',
    subtitle: 'Expressões fixas, provérbios e italiano do dia a dia',
    theory: `## Expressões idiomáticas essenciais

| Expressão | Significado |
|-----------|-------------|
| In bocca al lupo! | Boa sorte! (resp: Crepi!) |
| Essere al verde | Estar sem grana |
| Costare un occhio della testa | Custar um olho da cara |
| Avere la testa tra le nuvole | Estar com a cabeça nas nuvens |
| Prendere due piccioni con una fava | Matar dois pássaros com uma pedra |
| Essere in gamba | Ser competente/ótimo |
| Magari! | Oxalá! / Tomara! |
| Figurati! | Imagina! / Nem precisa! |
| Meno male! | Ainda bem! |
| Mannaggia! | Droga! / Caramba! |
| Dai! | Vai lá! / Vamos! |
| Che noia! | Que chato! |
| Un casino | Uma bagunça / confusão |
| Non vedo l'ora! | Estou ansioso/animado! (lit. "não vejo a hora") |
| Acqua in bocca! | Segredo absoluto! (lit. "água na boca") |
| Avere le mani in pasta | Estar envolvido em algo / ter influência |
| Tagliare la corda | Dar no pé / fugir |
| In gamba | de pé, esperto (usado também como cumprimento) |

**Provérbios**: *Chi va piano, va lontano.* (Devagar se vai ao longe.) | *Chi non risica, non rosica.* (Quem não arrisca, não petisca.) | *Tra il dire e il fare c'è di mezzo il mare.* (Falar é fácil, fazer é difícil — lit. "entre o dizer e o fazer há um mar de permeio.") | *L'erba del vicino è sempre più verde.* (A grama do vizinho é sempre mais verde.)

⚠️ Falsos amigos a evitar: **"In bocca al lupo"** não tem nenhuma tradução literal útil para o português — não tente decompor; trate como bloco fixo, e a resposta obrigatória é *Crepi (il lupo)!*, nunca "grazie".

💡 **Magari** é uma das palavras mais versáteis do italiano coloquial: pode significar "tomara", "talvez" ou até "quem sabe, né" dependendo do tom — não tem um equivalente único em português.

⚠️ Cuidado com **"Dai!"**: não é o verbo "dar" (apesar da grafia idêntica) — é uma interjeição de incentivo ("vai!", "anda!", "qualé!"). Em contexto, *Dai, andiamo!* = "Vamos lá, bora!"`,
    exercises: [
      {
        sentences: [
          { prompt: 'Boa sorte no exame!', answers: ["In bocca al lupo per l'esame!", 'In bocca al lupo!'] },
          { prompt: 'Tô sem grana.', answers: ['Sono al verde.', 'Non ho un soldo.'] },
          { prompt: 'Esse carro custou um olho da cara.', answers: ['Questa macchina è costata un occhio della testa.', 'Questa macchina è costata un patrimonio.'] },
          { prompt: 'Que bagunça!', answers: ['Che casino!', 'Che confusione!'] },
          { prompt: 'Oxalá! Seria ótimo.', answers: ['Magari! Sarebbe ottimo.', 'Magari! Sarebbe meraviglioso.'] },
          { prompt: 'Imagina! Não precisa.', answers: ["Figurati! Non c'è bisogno.", 'Figurati! Non era necessario.'] },
          { prompt: 'Ainda bem que você veio!', answers: ['Meno male che sei venuto!', 'Meno male che sei venuta!'] },
          { prompt: 'Vamos, que tô com pressa!', answers: ['Dai, che ho fretta!', 'Andiamo, ho fretta!'] },
          { prompt: 'Quem não arrisca, não petisca.', answers: ['Chi non risica, non rosica.'] },
          { prompt: 'Ele está sempre com a cabeça nas nuvens.', answers: ['Ha sempre la testa tra le nuvole.', 'Lui ha sempre la testa tra le nuvole.'] },
          { prompt: 'Matei dois pássaros com uma pedra.', answers: ['Ho preso due piccioni con una fava.'] },
          { prompt: 'Que trabalho chato!', answers: ['Che noia questo lavoro!', 'Che lavoro noioso!'] },
          { prompt: 'Droga! Esqueci a carteira.', answers: ['Mannaggia! Ho dimenticato il portafoglio.', 'Cavolo! Ho dimenticato il portafoglio.'] },
          { prompt: 'Ele é ótimo no trabalho.', answers: ['È molto in gamba al lavoro.', 'Lui è molto in gamba.'] },
          { prompt: 'Devagar se vai ao longe.', answers: ['Chi va piano, va lontano.'] },
          { prompt: 'Caramba, que calor!', answers: ['Mannaggia, che caldo!', 'Mamma mia, che caldo!'] },
          { prompt: 'Foi sem querer, prometo!', answers: ['Non era mia intenzione, promesso!', 'Non lo ho fatto apposta, giuro!'] },
          { prompt: 'Você está de brincadeira!', answers: ['Stai scherzando!', 'Ma dai, stai scherzando!'] },
        ],
      },
    ],
  },

  // ─── Revisão Intermediário ───────────────────────────────────────────────
  {
    id: 'rev-int-it', stage: 'Intermediário', language: 'it', order: 99, isReview: true,
    title: 'Revisione — Intermedio',
    subtitle: 'Congiuntivo, pronomes, passiva e imperfetto',
    theory: null,
    exercises: [
      {
        sentences: [
          { prompt: 'È necessário che tu venga subito.', answers: ['È necessario che tu venga subito.'] },
          { prompt: 'Quando ero bambino, giocavo in giardino ogni giorno.', answers: ['Quando ero bambino, giocavo in giardino ogni giorno.'] },
          { prompt: 'O livro foi escrito por um famoso autore.', answers: ['Il libro è stato scritto da un famoso autore.'] },
          { prompt: 'Espero que tu stia bene.', answers: ['Spero che tu stia bene.'] },
          { prompt: 'Ela me deu il libro che cercavo.', answers: ['Mi ha dato il libro che cercavo.', 'Lei mi ha dato il libro che cercavo.'] },
          { prompt: 'Antes de uscire, lui ha spento le luci.', answers: ['Prima di uscire, ha spento le luci.'] },
          { prompt: 'Não sabia che lei era già arrivata.', answers: ['Non sapevo che lei fosse già arrivata.', 'Non sapevo che era già arrivata.'] },
          { prompt: 'Dimmi cosa pensi di questo.', answers: ['Dimmi cosa pensi di questo.', 'Dimmi quello che pensi di questo.'] },
        ],
      },
    ],
    dialogExercise: {
      audioText: "Quando ero giovane, abitavo in campagna. Adesso vivo in città, ma spero che i miei figli possano conoscere la natura.",
      question: 'O que a pessoa espera para os filhos?',
      options: [
        { text: 'Que possam conhecer a natureza.', correct: true },
        { text: 'Que morem no campo como ela.', correct: false },
        { text: 'Que estudem em escola rural.', correct: false },
        { text: 'Que gostem da vida na cidade.', correct: false },
      ],
    },
  },

  // ─── Revisão Avançado ────────────────────────────────────────────────────
  {
    id: 'rev-adv-it', stage: 'Avançado', language: 'it', order: 99, isReview: true,
    title: 'Revisione — Avanzato',
    subtitle: 'Congiuntivo passato, condizionale passato e expressões idiomáticas',
    theory: null,
    exercises: [
      {
        sentences: [
          { prompt: 'Se avessi studiato di più, avrei superato l\'esame.', answers: ["Se avessi studiato di più, avrei superato l'esame."] },
          { prompt: 'Mi ha detto che aveva finito il progetto.', answers: ['Mi ha detto che aveva finito il progetto.'] },
          { prompt: 'Più mi esercito, più divento fluente.', answers: ['Più mi esercito, più divento fluente.', 'Più pratico, più divento fluente.'] },
          { prompt: 'Nonostante la stanchezza, ha finito il rapporto.', answers: ['Nonostante la stanchezza, ha finito il rapporto.'] },
          { prompt: 'Ho preso due piccioni con una fava.', answers: ['Ho preso due piccioni con una fava.'] },
          { prompt: 'Non c\'è niente che io possa fare adesso.', answers: ["Non c'è niente che io possa fare adesso.", "Non c'è nulla che possa fare adesso."] },
          { prompt: 'La persona con cui ha parlato era la mia professoressa.', answers: ['La persona con cui ha parlato era la mia professoressa.'] },
          { prompt: 'Devagar se vai ao longe.', answers: ['Chi va piano, va lontano.'] },
        ],
      },
    ],
    dialogExercise: {
      audioText: "Se avessi saputo che il treno era in ritardo, non sarei uscito così presto. Mamma mia, che perdita di tempo!",
      question: 'O que a pessoa lamenta?',
      options: [
        { text: 'Ter saído cedo sem necessidade por causa do atraso do trem.', correct: true },
        { text: 'Ter perdido o trem por sair tarde.', correct: false },
        { text: 'Ter ficado em casa e perdido o trem.', correct: false },
        { text: 'Ter comprado passagem errada.', correct: false },
      ],
    },
  },

  // ─── VARIADOS ───────────────────────────────────────────────────────────────

  {
    id: 'var-it-1',
    language: 'it',
    stage: 'Variados',
    order: 1,
    title: 'Treino geral — iniciante a básico',
    subtitle: 'Saudações, ser/ter, verbos, artigos, localização',
    theory: null,
    exercises: [
      { sentences: [
        { prompt: 'Olá, me chamo Luca.', answers: ['Ciao, mi chiamo Luca.'] },
        { prompt: 'Bom dia! Como vai?', answers: ['Buongiorno! Come va?', 'Buongiorno! Come stai?'] },
        { prompt: 'Estou bem, obrigado.', answers: ['Sto bene, grazie.'] },
        { prompt: 'Prazer em te conhecer.', answers: ['Piacere di conoscerti.', 'Piacere!'] },
        { prompt: 'Tchau! Até amanhã!', answers: ['Ciao! A domani!'] },
      ]},
      { sentences: [
        { prompt: 'Eu sou estudante.', answers: ['Sono studente.', 'Io sono studente.'] },
        { prompt: 'Ela é professora de italiano.', answers: ['È professoressa di italiano.', 'Lei è professoressa di italiano.'] },
        { prompt: 'Eles são muito simpáticos.', answers: ['Sono molto simpatici.', 'Loro sono molto simpatici.'] },
        { prompt: 'Tenho vinte e cinco anos.', answers: ['Ho venticinque anni.', 'Io ho venticinque anni.'] },
        { prompt: 'Você tem irmãos?', answers: ['Hai fratelli?', 'Tu hai fratelli?'] },
      ]},
      { sentences: [
        { prompt: 'Eu falo português e inglês.', answers: ['Parlo portoghese e inglese.', 'Io parlo portoghese e inglese.'] },
        { prompt: 'Ela mora em Roma.', answers: ['Abita a Roma.', 'Lei abita a Roma.'] },
        { prompt: 'Nós trabalhamos juntos.', answers: ['Lavoriamo insieme.', 'Noi lavoriamo insieme.'] },
        { prompt: 'Você estuda italiano?', answers: ["Studi l'italiano?", "Tu studi l'italiano?"] },
        { prompt: 'Eles comem pizza toda sexta.', answers: ['Mangiano la pizza ogni venerdì.', 'Loro mangiano pizza ogni venerdì.'] },
      ]},
      { sentences: [
        { prompt: 'Quanto custa isso?', answers: ['Quanto costa questo?', 'Quanto costa?'] },
        { prompt: 'Custa vinte euros.', answers: ['Costa venti euro.'] },
        { prompt: 'Tenho quarenta e dois anos.', answers: ['Ho quarantadue anni.', 'Io ho quarantadue anni.'] },
        { prompt: 'São três horas da tarde.', answers: ['Sono le tre del pomeriggio.', 'Sono le quindici.'] },
        { prompt: 'Um café, por favor.', answers: ['Un caffè, per favore.'] },
      ]},
      { sentences: [
        { prompt: 'Meu pai se chama Roberto.', answers: ['Mio padre si chiama Roberto.'] },
        { prompt: 'Tenho dois irmãos.', answers: ['Ho due fratelli.', 'Io ho due fratelli.'] },
        { prompt: 'Minha irmã é médica.', answers: ['Mia sorella è medica.'] },
        { prompt: 'Os meus pais moram em Nápoles.', answers: ['I miei genitori abitano a Napoli.'] },
        { prompt: 'Ele tem três filhos.', answers: ['Ha tre figli.', 'Lui ha tre figli.'] },
      ]},
      { sentences: [
        { prompt: 'Onde fica o banheiro?', answers: ["Dov'è il bagno?", 'Dove si trova il bagno?'] },
        { prompt: 'O banco fica à esquerda.', answers: ['La banca è a sinistra.'] },
        { prompt: 'Tem um mercado aqui perto?', answers: ["C'è un supermercato qui vicino?", "C'è un mercato da queste parti?"] },
        { prompt: 'O museu fica no centro.', answers: ['Il museo è in centro.'] },
        { prompt: 'Moro perto do parque.', answers: ['Abito vicino al parco.', 'Vivo vicino al parco.'] },
      ]},
      { sentences: [
        { prompt: 'Você lê muito?', answers: ['Leggi molto?', 'Tu leggi molto?'] },
        { prompt: 'Ela dorme oito horas.', answers: ['Dorme otto ore.', 'Lei dorme otto ore.'] },
        { prompt: 'Escrevo um e-mail agora.', answers: ["Scrivo un'e-mail adesso.", 'Scrivo un messaggio adesso.'] },
        { prompt: 'Você entende italiano?', answers: ["Capisci l'italiano?", "Tu capisci l'italiano?"] },
        { prompt: 'O trabalho acaba às seis.', answers: ['Il lavoro finisce alle sei.'] },
      ]},
      { sentences: [
        { prompt: 'Gosto muito de pizza.', answers: ['Mi piace molto la pizza.'] },
        { prompt: 'Você gosta de cinema?', answers: ['Ti piace il cinema?'] },
        { prompt: 'Não gosto de acordar cedo.', answers: ['Non mi piace alzarmi presto.'] },
        { prompt: 'Nós gostamos de viagens.', answers: ['Ci piacciono i viaggi.', 'Ci piace viaggiare.'] },
        { prompt: 'Eles não gostam de verduras.', answers: ['Non gli piacciono le verdure.', 'A loro non piacciono le verdure.'] },
      ]},
      { sentences: [
        { prompt: 'Hoje é terça-feira.', answers: ['Oggi è martedì.'] },
        { prompt: 'Amanhã é feriado.', answers: ['Domani è un giorno festivo.', 'Domani è festa.'] },
        { prompt: 'Que dia da semana é hoje?', answers: ['Che giorno è oggi?'] },
        { prompt: 'Em que mês estamos?', answers: ['In che mese siamo?'] },
        { prompt: 'O trem parte às oito e meia.', answers: ['Il treno parte alle otto e mezza.'] },
      ]},
      { sentences: [
        { prompt: 'Não falo francês.', answers: ['Non parlo francese.', 'Io non parlo francese.'] },
        { prompt: 'Ele não tem carro.', answers: ['Non ha la macchina.', 'Lui non ha la macchina.'] },
        { prompt: 'Onde você mora?', answers: ['Dove abiti?', 'Dove abita?'] },
        { prompt: 'Por que você está triste?', answers: ['Perché sei triste?', 'Perché è triste?'] },
        { prompt: 'Quando chega o trem?', answers: ['Quando arriva il treno?'] },
      ]},
      { sentences: [
        { prompt: 'Tô com fome. O que tem pra comer?', answers: ["Ho fame. Cosa c'è da mangiare?", 'Ho fame. Cosa mangiamo?'] },
        { prompt: 'Tô com sono.', answers: ['Ho sonno.', 'Io ho sonno.'] },
        { prompt: 'Estou com frio.', answers: ['Ho freddo.', 'Io ho freddo.'] },
        { prompt: 'Estou com calor.', answers: ['Ho caldo.', 'Io ho caldo.'] },
        { prompt: 'Estou com sede.', answers: ['Ho sete.', 'Io ho sete.'] },
      ]},
      { sentences: [
        { prompt: 'O livro é muito interessante.', answers: ['Il libro è molto interessante.'] },
        { prompt: 'A cidade é muito bonita.', answers: ['La città è molto bella.'] },
        { prompt: 'Um café, por favor!', answers: ['Un caffè, per favore!'] },
        { prompt: 'Tem um estudante aqui.', answers: ["C'è uno studente qui."] },
        { prompt: 'As flores são lindas.', answers: ['I fiori sono belli.', 'Le rose sono belle.'] },
      ]},
      { sentences: [
        { prompt: 'Por favor, pode repetir?', answers: ['Per favore, può ripetere?', 'Puoi ripetere, per favore?'] },
        { prompt: 'Não entendo.', answers: ['Non capisco.'] },
        { prompt: 'Com licença!', answers: ['Scusi!', 'Scusa!'] },
        { prompt: 'Obrigado! De nada.', answers: ['Grazie! Prego.'] },
        { prompt: 'Desculpe o atraso.', answers: ['Scusa il ritardo.', 'Mi scusi per il ritardo.'] },
      ]},
      { sentences: [
        { prompt: 'Quanto custa essa jaqueta?', answers: ['Quanto costa questa giacca?'] },
        { prompt: 'Tem esse em azul?', answers: ["Ce l'avete in blu?", "Lo avete in blu?"] },
        { prompt: 'Posso pagar com cartão?', answers: ['Posso pagare con carta?', 'Posso pagare con la carta?'] },
        { prompt: 'Preciso de um recibo.', answers: ['Ho bisogno di uno scontrino.', 'Ho bisogno di una ricevuta.'] },
        { prompt: 'Está em promoção?', answers: ["È in offerta?", "È in sconto?"] },
      ]},
      { sentences: [
        { prompt: 'Onde fica a estação de metrô?', answers: ["Dov'è la fermata della metro?", "Dov'è la stazione della metro?"] },
        { prompt: 'Um bilhete para Milão, por favor.', answers: ['Un biglietto per Milano, per favore.'] },
        { prompt: 'O ônibus está atrasado.', answers: ["L'autobus è in ritardo.", 'Il bus è in ritardo.'] },
        { prompt: 'Qual ônibus vai para o centro?', answers: ['Quale autobus va in centro?', 'Quale bus va in centro?'] },
        { prompt: 'Quanto tempo leva de trem?', answers: ['Quanto ci vuole in treno?'] },
      ]},
      { sentences: [
        { prompt: 'Me levanto às sete da manhã.', answers: ['Mi alzo alle sette di mattina.', 'Mi alzo alle sette del mattino.'] },
        { prompt: 'Tomo café da manhã em casa.', answers: ['Faccio colazione a casa.'] },
        { prompt: 'Trabalho das nove às cinco.', answers: ['Lavoro dalle nove alle cinque.'] },
        { prompt: 'Almoço na cantina.', answers: ['Pranzo alla mensa.', 'Pranzo in mensa.'] },
        { prompt: 'À noite, janto com a família.', answers: ['La sera, ceno con la famiglia.', 'Di sera ceno con la famiglia.'] },
      ]},
      { sentences: [
        { prompt: 'Tenho olhos castanhos.', answers: ['Ho gli occhi marroni.', 'Ho gli occhi castani.'] },
        { prompt: 'Ele é alto e moreno.', answers: ['È alto e bruno.', 'Lui è alto e bruno.'] },
        { prompt: 'Ela tem cabelo comprido e loiro.', answers: ['Ha i capelli lunghi e biondi.', 'Lei ha i capelli lunghi e biondi.'] },
        { prompt: 'Sou baixo e magro.', answers: ['Sono basso e magro.', 'Sono bassa e magra.'] },
        { prompt: 'Ele tem barba.', answers: ['Ha la barba.', 'Lui ha la barba.'] },
      ]},
      { sentences: [
        { prompt: 'Tenho um apartamento no centro.', answers: ['Ho un appartamento in centro.', 'Io ho un appartamento in centro.'] },
        { prompt: 'A cozinha é pequena mas funcional.', answers: ['La cucina è piccola ma funzionale.'] },
        { prompt: 'Tenho dois quartos.', answers: ['Ho due camere da letto.', 'Ho due stanze.'] },
        { prompt: 'O banheiro fica ao lado do quarto.', answers: ['Il bagno è accanto alla camera.'] },
        { prompt: 'Moro no terceiro andar.', answers: ['Abito al terzo piano.', 'Vivo al terzo piano.'] },
      ]},
      { sentences: [
        { prompt: 'Adoro a cozinha italiana!', answers: ['Adoro la cucina italiana!'] },
        { prompt: 'A pizza margherita é a minha favorita.', answers: ['La pizza margherita è la mia preferita.'] },
        { prompt: 'Você prefere café ou chá?', answers: ['Preferisci il caffè o il tè?', 'Preferisce il caffè o il tè?'] },
        { prompt: 'O risotto está delicioso.', answers: ['Il risotto è delizioso.', 'Il risotto è squisito.'] },
        { prompt: 'Vou pagar a conta.', answers: ['Pago io.', 'Pago il conto.'] },
      ]},
      { sentences: [
        { prompt: 'Foi um prazer!', answers: ['È stato un piacere!'] },
        { prompt: 'Até a próxima!', answers: ['Alla prossima!'] },
        { prompt: 'Cuide-se!', answers: ['Prenditi cura di te!', 'Stammi bene!'] },
        { prompt: 'Tenha uma boa viagem!', answers: ['Buon viaggio!'] },
        { prompt: 'Boa sorte!', answers: ['In bocca al lupo!', 'Buona fortuna!'] },
      ]},
    ],
  },

  {
    id: 'var-it-2',
    language: 'it',
    stage: 'Variados',
    order: 2,
    title: 'Treino geral — nível intermediário',
    subtitle: 'Passado, futuro, pronomes, modais e comparativos',
    theory: null,
    exercises: [
      { sentences: [
        { prompt: 'Ontem fui ao cinema.', answers: ['Ieri sono andato al cinema.', 'Ieri sono andata al cinema.'] },
        { prompt: 'Você comeu?', answers: ['Hai mangiato?'] },
        { prompt: 'Ela chegou atrasada.', answers: ['È arrivata in ritardo.'] },
        { prompt: 'Nós vimos um ótimo filme.', answers: ['Abbiamo visto un ottimo film.'] },
        { prompt: 'O que você fez no fim de semana?', answers: ['Cosa hai fatto nel fine settimana?', 'Cosa hai fatto questo fine settimana?'] },
      ]},
      { sentences: [
        { prompt: 'Quando era criança, morava no campo.', answers: ['Da bambino, abitavo in campagna.', 'Da bambina, abitavo in campagna.'] },
        { prompt: 'Ela sempre cantava quando estava feliz.', answers: ['Cantava sempre quando era felice.', 'Lei cantava sempre quando era felice.'] },
        { prompt: 'Antes não gostava de verduras.', answers: ['Prima non mi piacevano le verdure.', 'Da piccolo non mi piacevano le verdure.'] },
        { prompt: 'Nós íamos ao parque todo domingo.', answers: ['Andavamo al parco ogni domenica.', 'Noi andavamo al parco ogni domenica.'] },
        { prompt: 'Ele era muito tímido quando jovem.', answers: ['Era molto timido da giovane.', 'Lui era molto timido quando era giovane.'] },
      ]},
      { sentences: [
        { prompt: 'Amanhã vou para Roma.', answers: ['Domani vado a Roma.', 'Domani andrò a Roma.'] },
        { prompt: 'O que você vai fazer nas férias?', answers: ['Cosa farai in vacanza?', 'Cosa farai nelle vacanze?'] },
        { prompt: 'Ela será uma ótima professora.', answers: ["Sarà un'ottima professoressa.", 'Sarà una bravissima professoressa.'] },
        { prompt: 'No próximo ano vou morar na Itália.', answers: ["L'anno prossimo abiterò in Italia.", "L'anno prossimo vivrò in Italia."] },
        { prompt: 'Vai chover amanhã.', answers: ['Pioverà domani.', 'Domani pioverà.'] },
      ]},
      { sentences: [
        { prompt: 'Gostaria de um café, por favor.', answers: ['Vorrei un caffè, per favore.'] },
        { prompt: 'Você poderia me ajudar?', answers: ['Potresti aiutarmi?', 'Potrebbe aiutarmi?'] },
        { prompt: 'Com mais dinheiro, viajaria mais.', answers: ['Con più soldi, viaggerei di più.'] },
        { prompt: 'Eu nunca faria isso.', answers: ['Non lo farei mai.', 'Io non lo farei mai.'] },
        { prompt: 'Ela gostaria de visitar o Brasil.', answers: ['Le piacerebbe visitare il Brasile.', 'Vorrebbe visitare il Brasile.'] },
      ]},
      { sentences: [
        { prompt: 'Eu o vejo todos os dias.', answers: ['Lo vedo ogni giorno.', 'Io lo vedo ogni giorno.'] },
        { prompt: 'Você a conhece?', answers: ['La conosci?', 'La conosce?'] },
        { prompt: 'Eu não a entendo.', answers: ['Non la capisco.', 'Io non la capisco.'] },
        { prompt: 'Eles me chamaram ontem.', answers: ['Mi hanno chiamato ieri.', 'Loro mi hanno chiamato ieri.'] },
        { prompt: 'Posso ajudá-lo?', answers: ['Posso aiutarti?', 'Posso aiutarla?'] },
      ]},
      { sentences: [
        { prompt: 'Ele me disse a verdade.', answers: ['Mi ha detto la verità.', 'Lui mi ha detto la verità.'] },
        { prompt: 'Escrevi um e-mail para ele.', answers: ["Gli ho scritto un'e-mail.", 'Gli ho mandato un messaggio.'] },
        { prompt: 'Ela nos explicou o problema.', answers: ['Ci ha spiegato il problema.', 'Lei ci ha spiegato il problema.'] },
        { prompt: 'Você pode me dar o número?', answers: ['Puoi darmi il numero?', 'Mi puoi dare il numero?'] },
        { prompt: 'Eles te mandaram uma mensagem.', answers: ['Ti hanno mandato un messaggio.', 'Ti hanno inviato un messaggio.'] },
      ]},
      { sentences: [
        { prompt: 'Ela é mais alta que ele.', answers: ['Lei è più alta di lui.', 'È più alta di lui.'] },
        { prompt: 'Esse hotel é mais barato que aquele.', answers: ['Questo albergo è più economico di quello.', 'Questo albergo costa meno di quello.'] },
        { prompt: 'É o melhor restaurante da cidade!', answers: ['È il miglior ristorante della città!', 'È il migliore ristorante della città!'] },
        { prompt: 'O italiano é mais fácil que o alemão pra mim.', answers: ["L'italiano è più facile del tedesco per me."] },
        { prompt: 'Ela fala italiano melhor do que eu.', answers: ['Parla italiano meglio di me.', 'Lei parla italiano meglio di me.'] },
      ]},
      { sentences: [
        { prompt: 'Espero que você esteja bem.', answers: ['Spero che tu stia bene.', 'Spero che stia bene.'] },
        { prompt: 'É possível que eles não venham.', answers: ['È possibile che non vengano.'] },
        { prompt: 'Ele acha que ela seja italiana.', answers: ['Pensa che sia italiana.', 'Lui pensa che lei sia italiana.'] },
        { prompt: 'É importante que você chegue na hora.', answers: ['È importante che tu arrivi in orario.', 'È importante che arrivi puntuale.'] },
        { prompt: 'Embora seja difícil, vou tentar.', answers: ['Sebbene sia difficile, ci proverò.', 'Benché sia difficile, ci proverò.'] },
      ]},
      { sentences: [
        { prompt: 'Devo estudar mais.', answers: ['Devo studiare di più.', 'Io devo studiare di più.'] },
        { prompt: 'Você sabe cozinhar?', answers: ['Sai cucinare?', 'Tu sai cucinare?'] },
        { prompt: 'Ela quer morar na Itália.', answers: ['Vuole abitare in Italia.', 'Lei vuole abitare in Italia.'] },
        { prompt: 'Não posso vir hoje.', answers: ['Non posso venire oggi.', 'Io non posso venire oggi.'] },
        { prompt: 'Você conhece a Roma?', answers: ['Conosci Roma?', 'Conosce Roma?'] },
      ]},
      { sentences: [
        { prompt: 'Se você estudar, vai passar.', answers: ['Se studi, passerai.', "Se studi, passerai l'esame."] },
        { prompt: 'Se fizer sol, vamos à praia.', answers: ['Se fa bello, andiamo in spiaggia.', 'Se farà bello, andremo in spiaggia.'] },
        { prompt: 'Se você tiver tempo, me ligue.', answers: ['Se hai tempo, chiamami.', 'Se avrai tempo, chiamami.'] },
        { prompt: 'Se ele chegar cedo, podemos começar.', answers: ['Se arriva presto, possiamo cominciare.'] },
        { prompt: 'Se ela quiser, pode ficar.', answers: ['Se vuole, può restare.', 'Se lei vuole, può rimanere.'] },
      ]},
      { sentences: [
        { prompt: 'Se tivesse dinheiro, compraria uma casa.', answers: ['Se avessi i soldi, comprerei una casa.'] },
        { prompt: 'Se eu fosse você, não faria isso.', answers: ['Se fossi in te, non lo farei.', 'Se fossi al tuo posto, non lo farei.'] },
        { prompt: 'Se pudesse, viajaria todo mês.', answers: ['Se potessi, viaggerei ogni mese.'] },
        { prompt: 'O que você faria se pudesse?', answers: ['Cosa faresti se potessi?', 'Cosa farebbe se potesse?'] },
        { prompt: 'Na sua posição, eu pediria ajuda.', answers: ['Al tuo posto, chiederei aiuto.', 'Al posto tuo, chiederei aiuto.'] },
      ]},
      { sentences: [
        { prompt: 'Ontem me levantei às sete, tomei café e fui trabalhar.', answers: ['Ieri mi sono alzato alle sette, ho fatto colazione e sono andato a lavorare.', 'Ieri mi sono alzata alle sette, ho fatto colazione e sono andata a lavorare.'] },
        { prompt: 'No fim de semana, fui ao museu com amigos.', answers: ['Nel fine settimana, sono andato al museo con degli amici.', 'Nel fine settimana, sono andata al museo con degli amici.'] },
        { prompt: 'Ontem à noite, jantamos num restaurante italiano.', answers: ['Ieri sera abbiamo cenato in un ristorante italiano.'] },
        { prompt: 'Na sexta à noite, saímos e voltamos tarde.', answers: ['Venerdì sera siamo usciti e siamo tornati tardi.', 'Venerdì sera siamo uscite e siamo tornate tardi.'] },
        { prompt: 'Ele acordou, se vestiu e saiu sem tomar café.', answers: ['Si è alzato, si è vestito e è uscito senza fare colazione.', 'Si è alzato, si è vestito e se ne è andato senza fare colazione.'] },
      ]},
      { sentences: [
        { prompt: 'Você pode fechar a janela?', answers: ['Puoi chiudere la finestra?', 'Può chiudere la finestra?'] },
        { prompt: 'Gostaria de uma mesa para dois.', answers: ['Vorrei un tavolo per due.'] },
        { prompt: 'Podemos ir amanhã?', answers: ['Possiamo andare domani?'] },
        { prompt: 'Seria melhor partir mais cedo.', answers: ['Sarebbe meglio partire prima.', 'Sarebbe meglio partire più presto.'] },
        { prompt: 'Eu sugeriria aquele restaurante.', answers: ['Suggerirei quel ristorante.', 'Io consiglierei quel ristorante.'] },
      ]},
      { sentences: [
        { prompt: 'Ontem choveu muito.', answers: ['Ieri ha piovuto molto.'] },
        { prompt: 'Faz dois anos que moro em Roma.', answers: ["È da due anni che abito a Roma.", 'Sono due anni che abito a Roma.'] },
        { prompt: 'Há cinco minutos chegou uma mensagem.', answers: ['Cinque minuti fa è arrivato un messaggio.'] },
        { prompt: 'Já comi, obrigado.', answers: ['Ho già mangiato, grazie.'] },
        { prompt: 'Você ainda não acabou?', answers: ['Non hai ancora finito?', 'Non ha ancora finito?'] },
      ]},
      { sentences: [
        { prompt: 'Tô procurando um hotel.', answers: ['Sto cercando un albergo.', 'Sto cercando un hotel.'] },
        { prompt: 'Tem quartos disponíveis?', answers: ['Avete camere libere?', 'Ci sono camere disponibili?'] },
        { prompt: 'Quero um quarto para duas noites.', answers: ['Vorrei una camera per due notti.'] },
        { prompt: 'A que horas é o check-in?', answers: ['A che ora è il check-in?'] },
        { prompt: 'Posso deixar as malas aqui?', answers: ['Posso lasciare le valigie qui?'] },
      ]},
      { sentences: [
        { prompt: 'Tenho uma reunião às dez.', answers: ['Ho una riunione alle dieci.', 'Io ho una riunione alle dieci.'] },
        { prompt: 'Você pode mandar o relatório por e-mail?', answers: ['Puoi mandare il rapporto per e-mail?', 'Può mandare il rapporto per e-mail?'] },
        { prompt: 'Estamos trabalhando num projeto importante.', answers: ['Stiamo lavorando su un progetto importante.'] },
        { prompt: 'O prazo é sexta-feira.', answers: ['La scadenza è venerdì.', 'Il termine è venerdì.'] },
        { prompt: 'Posso falar com o gerente?', answers: ['Posso parlare con il direttore?', 'Posso parlare con il responsabile?'] },
      ]},
      { sentences: [
        { prompt: 'Não me sinto bem.', answers: ['Non mi sento bene.', 'Non sto bene.'] },
        { prompt: 'Tenho dor de cabeça.', answers: ['Ho mal di testa.', 'Ho un mal di testa.'] },
        { prompt: 'Preciso de um médico.', answers: ['Ho bisogno di un medico.'] },
        { prompt: 'Onde fica o pronto-socorro?', answers: ["Dov'è il pronto soccorso?", 'Dove si trova il pronto soccorso?'] },
        { prompt: 'Estou com febre.', answers: ['Ho la febbre.', 'Io ho la febbre.'] },
      ]},
      { sentences: [
        { prompt: 'Me casei dois anos atrás.', answers: ['Mi sono sposato due anni fa.', 'Mi sono sposata due anni fa.'] },
        { prompt: 'Temos dois filhos.', answers: ['Abbiamo due figli.', 'Noi abbiamo due figli.'] },
        { prompt: 'Meu marido trabalha no banco.', answers: ['Mio marito lavora in banca.'] },
        { prompt: 'A minha filha estuda medicina.', answers: ['Mia figlia studia medicina.'] },
        { prompt: 'Os meus pais moram no sul.', answers: ['I miei genitori abitano al sud.', 'I miei genitori vivono al sud.'] },
      ]},
      { sentences: [
        { prompt: 'Estava lendo quando você ligou.', answers: ['Stavo leggendo quando hai chiamato.', 'Stavo leggendo quando mi hai chiamato.'] },
        { prompt: 'Ele trabalhava aqui quando eu cheguei.', answers: ['Lavorava qui quando sono arrivato.', 'Lavorava qui quando sono arrivata.'] },
        { prompt: 'Choveu enquanto caminhávamos.', answers: ['Ha piovuto mentre camminavamo.', 'Pioveva mentre camminavamo.'] },
        { prompt: 'Ela estava triste mas sorria.', answers: ['Era triste ma sorrideva.', 'Lei era triste ma sorrideva.'] },
        { prompt: 'Eu dormia quando o alarme tocou.', answers: ['Dormivo quando è suonata la sveglia.', 'Dormivo quando la sveglia ha suonato.'] },
      ]},
      { sentences: [
        { prompt: 'Foi uma experiência incrível!', answers: ['È stata un\'esperienza incredibile!', 'È stata un\'esperienza straordinaria!'] },
        { prompt: 'Nunca vou esquecer.', answers: ['Non dimenticherò mai.', 'Non lo dimenticherò mai.'] },
        { prompt: 'Espero te ver de novo em breve!', answers: ['Spero di rivederti presto!', 'Spero di vederti di nuovo presto!'] },
        { prompt: 'Obrigado por tudo!', answers: ['Grazie di tutto!', 'Grazie per tutto!'] },
        { prompt: 'Foi um prazer!', answers: ['È stato un piacere!'] },
      ]},
    ],
  },

  {
    id: 'var-it-3',
    language: 'it',
    stage: 'Variados',
    order: 3,
    title: 'Situazioni reali — viagem, trabalho, restaurante e cotidiano',
    subtitle: 'Italiano prático para a vida real na Itália',
    theory: null,
    exercises: [
      { sentences: [
        { prompt: 'Onde fica o check-in?', answers: ["Dov'è il check-in?", 'Dove si trova il check-in?'] },
        { prompt: 'Preciso de um carrinho para a bagagem.', answers: ['Ho bisogno di un carrello per i bagagli.'] },
        { prompt: 'Meu voo está atrasado.', answers: ['Il mio volo è in ritardo.'] },
        { prompt: 'A minha mala não chegou.', answers: ['La mia valigia non è arrivata.', 'Il mio bagaglio non è arrivato.'] },
        { prompt: 'Qual é o portão de embarque?', answers: ['Qual è il gate di imbarco?', 'Qual è il gate?'] },
      ]},
      { sentences: [
        { prompt: 'Tenho uma reserva no nome de...', answers: ['Ho una prenotazione a nome di...', 'Ho una prenotazione.'] },
        { prompt: 'Quarto para uma pessoa, não fumante.', answers: ['Camera singola, non fumatori.', 'Vorrei una camera singola per non fumatori.'] },
        { prompt: 'Pode me dar a chave do quarto?', answers: ['Mi può dare la chiave della camera?', 'Può darmi la chiave della camera?'] },
        { prompt: 'A que horas é o café da manhã?', answers: ['A che ora è la colazione?'] },
        { prompt: 'Preciso de mais toalhas.', answers: ['Ho bisogno di altri asciugamani.', 'Avrei bisogno di altri asciugamani.'] },
      ]},
      { sentences: [
        { prompt: 'Uma mesa para duas pessoas, por favor.', answers: ['Un tavolo per due, per favore.'] },
        { prompt: 'Você tem uma reserva?', answers: ['Ha una prenotazione?', 'Avete una prenotazione?'] },
        { prompt: 'Posso ver o cardápio?', answers: ['Posso vedere il menù?', 'Posso avere il menù?'] },
        { prompt: 'O que você recomenda?', answers: ['Cosa mi consiglia?', 'Cosa consiglia?'] },
        { prompt: 'Eu sou alérgico/a a glúten.', answers: ['Sono allergico al glutine.', 'Sono allergica al glutine.'] },
      ]},
      { sentences: [
        { prompt: 'Para mim, um risotto, por favor.', answers: ['Per me, un risotto, per favore.'] },
        { prompt: 'O bife ao ponto, por favor.', answers: ['La bistecca al punto, per favore.', 'La bistecca mediamente cotta, per favore.'] },
        { prompt: 'Uma garrafa de água sem gás.', answers: ["Una bottiglia d'acqua naturale.", "Una bottiglia d'acqua senza gas."] },
        { prompt: 'Um vinho da casa.', answers: ['Un vino della casa.'] },
        { prompt: 'Para sobremesa, um tiramisu.', answers: ['Come dessert, un tiramisù.', 'Per dessert, un tiramisù.'] },
      ]},
      { sentences: [
        { prompt: 'Pode trazer a conta, por favor?', answers: ['Può portare il conto, per favore?', 'Il conto, per favore.'] },
        { prompt: 'Vamos dividir a conta.', answers: ['Dividiamo il conto.', 'Facciamo alla romana.'] },
        { prompt: 'O serviço está incluído?', answers: ['Il servizio è incluso?'] },
        { prompt: 'Posso pagar com cartão?', answers: ['Posso pagare con carta?', 'Posso pagare con la carta di credito?'] },
        { prompt: 'Estava ótimo! Obrigado.', answers: ['Era ottimo! Grazie.', 'Era squisito! Grazie.'] },
      ]},
      { sentences: [
        { prompt: 'Um bilhete para Florença, por favor.', answers: ['Un biglietto per Firenze, per favore.'] },
        { prompt: 'Qual plataforma é o trem para Roma?', answers: ['Da quale binario parte il treno per Roma?', 'Su quale binario è il treno per Roma?'] },
        { prompt: 'O trem está atrasado?', answers: ['Il treno è in ritardo?'] },
        { prompt: 'Preciso validar o bilhete?', answers: ['Devo convalidare il biglietto?'] },
        { prompt: 'Esse assento está ocupado?', answers: ['Questo posto è occupato?'] },
      ]},
      { sentences: [
        { prompt: 'Onde fica a estação de metrô?', answers: ["Dov'è la fermata della metro?", "Dov'è la stazione della metro?"] },
        { prompt: 'Que linha devo pegar?', answers: ['Quale linea devo prendere?'] },
        { prompt: 'Onde devo descer?', answers: ['Dove devo scendere?'] },
        { prompt: 'Tem ônibus para o centro?', answers: ["C'è un autobus per il centro?", "C'è un bus per il centro?"] },
        { prompt: 'Quanto custa o bilhete?', answers: ['Quanto costa il biglietto?'] },
      ]},
      { sentences: [
        { prompt: 'Posso experimentar esse?', answers: ['Posso provare questo?', 'Posso provarlo?'] },
        { prompt: 'Tem um tamanho maior?', answers: ['Avete una taglia più grande?', 'Ha una taglia più grande?'] },
        { prompt: 'Isso custa muito.', answers: ['Questo costa troppo.', 'È troppo caro.'] },
        { prompt: 'Você aceita devoluções?', answers: ['Fate i cambi?', 'Accettate i resi?'] },
        { prompt: 'Preciso de uma sacola.', answers: ['Ho bisogno di una borsa.', 'Vorrei un sacchetto.'] },
      ]},
      { sentences: [
        { prompt: 'Você tem algo para dor de cabeça?', answers: ['Ha qualcosa per il mal di testa?', 'Avete qualcosa per il mal di testa?'] },
        { prompt: 'Preciso de um remédio para a tosse.', answers: ['Ho bisogno di qualcosa per la tosse.', 'Vorrei qualcosa per la tosse.'] },
        { prompt: 'Tenho uma receita médica.', answers: ['Ho una ricetta medica.', 'Ho la ricetta.'] },
        { prompt: 'É necessário receita para isso?', answers: ['Ci vuole la ricetta per questo?', 'Serve la ricetta per questo?'] },
        { prompt: 'Onde fica a farmácia mais próxima?', answers: ["Dov'è la farmacia più vicina?", 'Dove si trova la farmacia più vicina?'] },
      ]},
      { sentences: [
        { prompt: 'Onde posso trocar dinheiro?', answers: ['Dove posso cambiare i soldi?', 'Dove posso cambiare valuta?'] },
        { prompt: 'Tem um caixa eletrônico perto?', answers: ["C'è un bancomat qui vicino?", "C'è un bancomat vicino?"] },
        { prompt: 'O meu cartão não funciona.', answers: ['La mia carta non funziona.'] },
        { prompt: 'Qual é o câmbio do real?', answers: ['Qual è il tasso di cambio del real?', 'Qual è il cambio del real?'] },
        { prompt: 'Posso sacar dinheiro aqui?', answers: ['Posso prelevare qui?', 'Posso fare un prelievo qui?'] },
      ]},
      { sentences: [
        { prompt: 'Bom dia, tenho uma reunião com o Sr. Rossi.', answers: ['Buongiorno, ho un appuntamento con il Signor Rossi.'] },
        { prompt: 'Posso falar com ela?', answers: ['Posso parlare con lei?', 'Potrei parlare con lei?'] },
        { prompt: 'Vou mandar por e-mail.', answers: ["Glielo mando per e-mail.", "Lo mando per e-mail."] },
        { prompt: 'O relatório está pronto.', answers: ['Il rapporto è pronto.', 'La relazione è pronta.'] },
        { prompt: 'Precisamos terminar até amanhã.', answers: ['Dobbiamo finire entro domani.'] },
      ]},
      { sentences: [
        { prompt: 'O computador não liga.', answers: ['Il computer non si accende.'] },
        { prompt: 'Há um problema com a conexão.', answers: ["C'è un problema con la connessione.", "C'è un problema di connessione."] },
        { prompt: 'Você pode me ajudar com isso?', answers: ['Puoi aiutarmi con questo?', 'Può aiutarmi con questo?'] },
        { prompt: 'Preciso falar com o suporte técnico.', answers: ["Devo parlare con l'assistenza tecnica.", 'Devo contattare il supporto tecnico.'] },
        { prompt: 'A reunião foi cancelada.', answers: ['La riunione è stata cancellata.', 'Il meeting è stato cancellato.'] },
      ]},
      { sentences: [
        { prompt: 'Me levanto às seis e meia.', answers: ['Mi alzo alle sei e mezza.'] },
        { prompt: 'Tomo banho e me visto.', answers: ['Faccio la doccia e mi vesto.'] },
        { prompt: 'Tomo café da manhã com cappuccino.', answers: ['Faccio colazione con un cappuccino.'] },
        { prompt: 'Saio de casa às oito.', answers: ['Esco di casa alle otto.', 'Esco dalle otto.'] },
        { prompt: 'Chego ao trabalho em meia hora.', answers: ["Arrivo al lavoro in mezz'ora."] },
      ]},
      { sentences: [
        { prompt: 'Almoço no trabalho às uma.', answers: ['Pranzo al lavoro alle tredici.', 'Pranzo al lavoro a mezzogiorno.'] },
        { prompt: 'À tarde tenho muito trabalho.', answers: ['Nel pomeriggio ho molto lavoro.', 'Il pomeriggio ho molto da fare.'] },
        { prompt: 'Saio às cinco e meia.', answers: ['Esco alle cinque e mezza.'] },
        { prompt: 'Às vezes passo no supermercado.', answers: ['A volte passo al supermercato.', 'A volte mi fermo al supermercato.'] },
        { prompt: 'Chego em casa às seis e meia.', answers: ['Arrivo a casa alle sei e mezza.'] },
      ]},
      { sentences: [
        { prompt: 'À noite, janto com a família.', answers: ['La sera, ceno con la famiglia.', 'Di sera ceno con la famiglia.'] },
        { prompt: 'Depois do jantar, assisto TV ou leio.', answers: ['Dopo cena, guardo la TV o leggo.'] },
        { prompt: 'Me deito por volta das onze.', answers: ['Vado a letto verso le undici.', 'Mi corico verso le undici.'] },
        { prompt: 'Às vezes saio com os amigos à noite.', answers: ['A volte esco con gli amici la sera.', 'A volte esco con gli amici di sera.'] },
        { prompt: 'No fim de semana, durmo até tarde.', answers: ['Il fine settimana dormo fino a tardi.', 'Il sabato e la domenica dormo fino a tardi.'] },
      ]},
      { sentences: [
        { prompt: 'Gostaria de visitar o Coliseu.', answers: ['Vorrei visitare il Colosseo.'] },
        { prompt: 'Que horas abre o museu?', answers: ['A che ora apre il museo?'] },
        { prompt: 'Quanto custa a entrada?', answers: ["Quanto costa il biglietto d'ingresso?", 'Quanto costa entrare?'] },
        { prompt: 'Há visita guiada em português?', answers: ["C'è una visita guidata in portoghese?"] },
        { prompt: 'Pode tirar uma foto nossa?', answers: ['Ci può fare una foto?', 'Può farci una foto?'] },
      ]},
      { sentences: [
        { prompt: 'Perdi o passaporte!', answers: ['Ho perso il passaporto!'] },
        { prompt: 'Preciso chamar a polícia.', answers: ['Devo chiamare la polizia.', 'Ho bisogno della polizia.'] },
        { prompt: 'Meu celular foi roubado.', answers: ['Mi hanno rubato il cellulare.', 'Mi hanno rubato il telefono.'] },
        { prompt: 'Onde fica a delegacia?', answers: ["Dov'è il commissariato?", 'Dove si trova la polizia?'] },
        { prompt: 'Preciso de ajuda urgente!', answers: ['Ho bisogno di aiuto urgente!', 'Aiuto!'] },
      ]},
      { sentences: [
        { prompt: 'Você fala português?', answers: ['Parli portoghese?', 'Parla portoghese?'] },
        { prompt: 'Não entendo. Pode repetir mais devagar?', answers: ['Non capisco. Può ripetere più lentamente?', 'Non capisco. Puoi ripetere più lentamente?'] },
        { prompt: 'Pode escrever isso?', answers: ['Può scriverlo?', 'Puoi scriverlo?'] },
        { prompt: 'Como se diz isso em italiano?', answers: ['Come si dice in italiano?', 'Come si dice questo in italiano?'] },
        { prompt: 'Qual é o significado de...?', answers: ['Qual è il significato di...?', 'Cosa significa...?'] },
      ]},
      { sentences: [
        { prompt: 'O que é esse prato?', answers: ["Cos'è questo piatto?", 'Cosa è questo piatto?'] },
        { prompt: 'É feito com carne e tomate.', answers: ['È fatto con carne e pomodoro.', 'È preparato con carne e pomodori.'] },
        { prompt: 'Esse queijo é muito bom!', answers: ['Questo formaggio è molto buono!', 'Questo formaggio è squisito!'] },
        { prompt: 'Quero provar a comida típica.', answers: ['Voglio assaggiare il cibo tipico.', 'Voglio provare la cucina tipica.'] },
        { prompt: 'Qual é o vinho típico da região?', answers: ['Qual è il vino tipico della regione?', 'Qual è il vino locale?'] },
      ]},
      { sentences: [
        { prompt: 'Foi ótimo estar aqui.', answers: ['È stato ottimo stare qui.', 'È stato un piacere stare qui.'] },
        { prompt: 'Obrigado pela hospitalidade.', answers: ["Grazie per l'ospitalità.", "Grazie dell'ospitalità."] },
        { prompt: 'Espero voltar em breve.', answers: ['Spero di tornare presto.', 'Spero di ritornare presto.'] },
        { prompt: 'Até a próxima!', answers: ['Alla prossima!', 'A presto!'] },
        { prompt: 'Boa sorte para todos!', answers: ['In bocca al lupo a tutti!', 'Buona fortuna a tutti!'] },
      ]},
    ],
  },
];
