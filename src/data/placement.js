// 20 perguntas por idioma, 5 por nível (Fundamentos→Avançado)
// Resultado: 0-5 → iniciante | 6-10 → basico | 11-15 → intermediario | 16-20 → avancado

export const PLACEMENT_QUESTIONS = {
  es: [
    // FUNDAMENTOS (1-5)
    { prompt: 'Eu me chamo Ana e tenho vinte anos.', answers: ['Me llamo Ana y tengo veinte años.'], level: 'iniciante' },
    { prompt: 'Onde fica o banheiro, por favor?', answers: ['¿Dónde está el baño, por favor?'], level: 'iniciante' },
    { prompt: 'Eu gosto de café com leite pela manhã.', answers: ['Me gusta el café con leche por la mañana.'], level: 'iniciante' },
    { prompt: 'Eles moram numa casa grande perto do parque.', answers: ['Viven en una casa grande cerca del parque.'], level: 'iniciante' },
    { prompt: 'Que horas são? São três e meia.', answers: ['¿Qué hora es? Son las tres y media.'], level: 'iniciante' },
    // BÁSICO (6-10)
    { prompt: 'Ontem fui ao supermercado e comprei pão e fruta.', answers: ['Ayer fui al supermercado y compré pan y fruta.'], level: 'basico' },
    { prompt: 'Ela vai viajar para a Argentina no próximo mês.', answers: ['Ella va a viajar a Argentina el mes que viene.', 'Ella va a viajar a Argentina el próximo mes.'], level: 'basico' },
    { prompt: 'Podes falar mais devagar? Não entendo bem o espanhol.', answers: ['¿Puedes hablar más despacio? No entiendo bien el español.'], level: 'basico' },
    { prompt: 'Quando era criança, brincava todos os dias na rua.', answers: ['Cuando era niño, jugaba todos los días en la calle.', 'Cuando era niña, jugaba todos los días en la calle.'], level: 'basico' },
    { prompt: 'Tenho de estudar mais se quero passar no exame.', answers: ['Tengo que estudiar más si quiero aprobar el examen.'], level: 'basico' },
    // INTERMEDIÁRIO (11-15)
    { prompt: 'Já visitei Madrid três vezes, mas nunca fui a Barcelona.', answers: ['He visitado Madrid tres veces, pero nunca he estado en Barcelona.'], level: 'intermediario' },
    { prompt: 'Se tivesse mais tempo, aprenderia a tocar guitarra.', answers: ['Si tuviera más tiempo, aprendería a tocar la guitarra.'], level: 'intermediario' },
    { prompt: 'O relatório foi enviado ao diretor antes da reunião.', answers: ['El informe fue enviado al director antes de la reunión.'], level: 'intermediario' },
    { prompt: 'Ela pediu que eu chegasse cedo para ajudá-la.', answers: ['Me pidió que llegara temprano para ayudarla.'], level: 'intermediario' },
    { prompt: 'Quanto mais pratico, mais fluente me torno.', answers: ['Cuanto más practico, más fluido me vuelvo.', 'Cuanto más practico, más fluente me vuelvo.'], level: 'intermediario' },
    // AVANÇADO (16-20)
    { prompt: 'Se eu tivesse estudado mais, teria tirado uma nota melhor.', answers: ['Si hubiera estudiado más, habría sacado una nota mejor.'], level: 'avancado' },
    { prompt: 'Oxalá pudéssemos ficar mais um dia — a cidade é linda.', answers: ['Ojalá pudiéramos quedarnos un día más; la ciudad es preciosa.'], level: 'avancado' },
    { prompt: 'É fundamental que todos os participantes apresentem os seus documentos.', answers: ['Es fundamental que todos los participantes presenten sus documentos.'], level: 'avancado' },
    { prompt: 'Por muito que me esforce, nunca consigo chegar a horas.', answers: ['Por mucho que me esfuerce, nunca consigo llegar a tiempo.'], level: 'avancado' },
    { prompt: 'O facto de ele não ter respondido deixou-me sem palavras.', answers: ['El hecho de que no haya respondido me dejó sin palabras.'], level: 'avancado' },
  ],

  en: [
    // FUNDAMENTOS
    { prompt: 'Eu me chamo Ana e tenho vinte anos.', answers: ['My name is Ana and I am twenty years old.', 'My name is Ana and I\'m twenty years old.'], level: 'iniciante' },
    { prompt: 'Onde fica o banheiro, por favor?', answers: ['Where is the bathroom, please?', 'Where is the toilet, please?'], level: 'iniciante' },
    { prompt: 'Eu gosto de café com leite pela manhã.', answers: ['I like coffee with milk in the morning.'], level: 'iniciante' },
    { prompt: 'Eles moram numa casa grande perto do parque.', answers: ['They live in a big house near the park.'], level: 'iniciante' },
    { prompt: 'Que horas são? São três e meia.', answers: ['What time is it? It\'s half past three.', 'What time is it? It\'s three thirty.'], level: 'iniciante' },
    // BÁSICO
    { prompt: 'Ontem fui ao supermercado e comprei pão e fruta.', answers: ['Yesterday I went to the supermarket and bought bread and fruit.'], level: 'basico' },
    { prompt: 'Ela vai viajar para a Argentina no próximo mês.', answers: ['She is going to travel to Argentina next month.', 'She will travel to Argentina next month.'], level: 'basico' },
    { prompt: 'Podes falar mais devagar? Não entendo bem o inglês.', answers: ['Can you speak more slowly? I don\'t understand English very well.', 'Could you speak more slowly? I don\'t understand English very well.'], level: 'basico' },
    { prompt: 'Quando era criança, brincava todos os dias na rua.', answers: ['When I was a child, I used to play in the street every day.', 'When I was a child, I played in the street every day.'], level: 'basico' },
    { prompt: 'Tenho de estudar mais se quero passar no exame.', answers: ['I have to study more if I want to pass the exam.', 'I need to study more if I want to pass the exam.'], level: 'basico' },
    // INTERMEDIÁRIO
    { prompt: 'Já visitei Londres três vezes, mas nunca fui a Oxford.', answers: ['I have visited London three times, but I have never been to Oxford.', 'I\'ve visited London three times, but I\'ve never been to Oxford.'], level: 'intermediario' },
    { prompt: 'Se tivesse mais tempo, aprenderia a tocar guitarra.', answers: ['If I had more time, I would learn to play the guitar.', 'If I had more time, I\'d learn to play the guitar.'], level: 'intermediario' },
    { prompt: 'O relatório foi enviado ao diretor antes da reunião.', answers: ['The report was sent to the director before the meeting.'], level: 'intermediario' },
    { prompt: 'Ela pediu que eu chegasse cedo para ajudá-la.', answers: ['She asked me to arrive early to help her.', 'She asked that I arrive early to help her.'], level: 'intermediario' },
    { prompt: 'Quanto mais pratico, mais fluente me torno.', answers: ['The more I practise, the more fluent I become.', 'The more I practice, the more fluent I become.'], level: 'intermediario' },
    // AVANÇADO
    { prompt: 'Se eu tivesse estudado mais, teria tirado uma nota melhor.', answers: ['If I had studied more, I would have got a better grade.', 'If I had studied more, I would have gotten a better grade.'], level: 'avancado' },
    { prompt: 'Oxalá pudéssemos ficar mais um dia — a cidade é linda.', answers: ['I wish we could stay one more day — the city is beautiful.'], level: 'avancado' },
    { prompt: 'É fundamental que todos os participantes apresentem os seus documentos.', answers: ['It is essential that all participants present their documents.', 'It is essential that all participants submit their documents.'], level: 'avancado' },
    { prompt: 'Por muito que me esforce, nunca consigo chegar a horas.', answers: ['No matter how hard I try, I never manage to arrive on time.', 'However hard I try, I never manage to arrive on time.'], level: 'avancado' },
    { prompt: 'O facto de ele não ter respondido deixou-me sem palavras.', answers: ['The fact that he did not reply left me speechless.', 'The fact that he didn\'t reply left me speechless.'], level: 'avancado' },
  ],

  de: [
    // FUNDAMENTOS
    { prompt: 'Eu me chamo Ana e tenho vinte anos.', answers: ['Ich heiße Ana und bin zwanzig Jahre alt.'], level: 'iniciante' },
    { prompt: 'Onde fica o banheiro, por favor?', answers: ['Wo ist die Toilette, bitte?', 'Wo ist das WC, bitte?'], level: 'iniciante' },
    { prompt: 'Eu gosto de café com leite pela manhã.', answers: ['Ich trinke morgens gerne Kaffee mit Milch.', 'Ich mag Kaffee mit Milch am Morgen.'], level: 'iniciante' },
    { prompt: 'Eles moram numa casa grande perto do parque.', answers: ['Sie wohnen in einem großen Haus in der Nähe des Parks.'], level: 'iniciante' },
    { prompt: 'Que horas são? São três e meia.', answers: ['Wie spät ist es? Es ist halb vier.'], level: 'iniciante' },
    // BÁSICO
    { prompt: 'Ontem fui ao supermercado e comprei pão e fruta.', answers: ['Gestern bin ich in den Supermarkt gegangen und habe Brot und Obst gekauft.'], level: 'basico' },
    { prompt: 'Ela vai viajar para a Argentina no próximo mês.', answers: ['Sie wird nächsten Monat nach Argentinien reisen.', 'Sie fährt nächsten Monat nach Argentinien.'], level: 'basico' },
    { prompt: 'Podes falar mais devagar? Não entendo bem o alemão.', answers: ['Können Sie langsamer sprechen? Ich verstehe Deutsch nicht so gut.', 'Kannst du langsamer sprechen? Ich verstehe Deutsch nicht so gut.'], level: 'basico' },
    { prompt: 'Quando era criança, brincava todos os dias na rua.', answers: ['Als ich ein Kind war, habe ich jeden Tag auf der Straße gespielt.', 'Als ich klein war, spielte ich jeden Tag draußen.'], level: 'basico' },
    { prompt: 'Tenho de estudar mais se quero passar no exame.', answers: ['Ich muss mehr lernen, wenn ich die Prüfung bestehen will.'], level: 'basico' },
    // INTERMEDIÁRIO
    { prompt: 'Já visitei Berlim três vezes, mas nunca estive em Munique.', answers: ['Ich habe Berlin dreimal besucht, aber ich war noch nie in München.'], level: 'intermediario' },
    { prompt: 'Se tivesse mais tempo, aprenderia a tocar guitarra.', answers: ['Wenn ich mehr Zeit hätte, würde ich Gitarre spielen lernen.'], level: 'intermediario' },
    { prompt: 'O relatório foi enviado ao diretor antes da reunião.', answers: ['Der Bericht wurde vor der Besprechung an den Direktor geschickt.'], level: 'intermediario' },
    { prompt: 'Ela pediu que eu chegasse cedo para ajudá-la.', answers: ['Sie bat mich, früh zu kommen, um ihr zu helfen.'], level: 'intermediario' },
    { prompt: 'Quanto mais pratico, mais fluente me torno.', answers: ['Je mehr ich übe, desto fließender werde ich.', 'Je mehr ich übe, desto besser wird mein Deutsch.'], level: 'intermediario' },
    // AVANÇADO
    { prompt: 'Se eu tivesse estudado mais, teria tirado uma nota melhor.', answers: ['Wenn ich mehr gelernt hätte, hätte ich eine bessere Note bekommen.'], level: 'avancado' },
    { prompt: 'Oxalá pudéssemos ficar mais um dia — a cidade é linda.', answers: ['Schade, dass wir nicht einen Tag länger bleiben können — die Stadt ist wunderschön.', 'Wenn wir doch einen Tag länger bleiben könnten — die Stadt ist so schön.'], level: 'avancado' },
    { prompt: 'É fundamental que todos os participantes apresentem os seus documentos.', answers: ['Es ist unbedingt notwendig, dass alle Teilnehmer ihre Unterlagen vorlegen.'], level: 'avancado' },
    { prompt: 'Por muito que me esforce, nunca consigo chegar a horas.', answers: ['Egal wie sehr ich mich bemühe, ich schaffe es nie, pünktlich anzukommen.'], level: 'avancado' },
    { prompt: 'O facto de ele não ter respondido deixou-me sem palavras.', answers: ['Die Tatsache, dass er nicht geantwortet hat, hat mich sprachlos gemacht.'], level: 'avancado' },
  ],

  zh: [
    // FUNDAMENTOS (1-5)
    { prompt: 'Como se diz "olá" em mandarim?', answers: ['nǐ hǎo', 'ni hao', '你好'], level: 'iniciante' },
    { prompt: 'Como se diz "obrigado" em mandarim?', answers: ['xièxiè', 'xie xie', '谢谢'], level: 'iniciante' },
    { prompt: 'Eu sou estudante.', answers: ['wǒ shì xuéshēng', 'wo shi xuesheng', '我是学生'], level: 'iniciante' },
    { prompt: 'Minha mãe é médica.', answers: ['wǒ māma shì yīshēng', 'wo mama shi yisheng', '我妈妈是医生'], level: 'iniciante' },
    { prompt: 'Eu tenho dois irmãos.', answers: ['wǒ yǒu liǎng gè gēgē', 'wo you liang ge gege', 'wǒ yǒu liǎng gè dìdi', 'wo you liang ge didi', '我有两个哥哥', '我有两个弟弟'], level: 'iniciante' },
    // BÁSICO (6-10)
    { prompt: 'Eu gosto de comer comida chinesa.', answers: ['wǒ xǐhuān chī zhōngguó cài', 'wo xihuan chi zhongguo cai', '我喜欢吃中国菜'], level: 'basico' },
    { prompt: 'O banco fica à esquerda do supermercado.', answers: ['yínháng zài chāoshì zuǒbiān', 'yinhang zai chaoshi zuobian', '银行在超市左边'], level: 'basico' },
    { prompt: 'Hoje é quarta-feira.', answers: ['jīntiān shì xīngqīsān', 'jintian shi xingqisan', '今天是星期三'], level: 'basico' },
    { prompt: 'Quanto custa este livro?', answers: ['zhè běn shū duōshǎo qián', 'zhe ben shu duoshao qian', '这本书多少钱'], level: 'basico' },
    { prompt: 'O metrô é mais rápido que o ônibus.', answers: ['dìtiě bǐ gōngchē kuài', 'ditie bi gongche kuai', '地铁比公车快'], level: 'basico' },
    // INTERMEDIÁRIO (11-15)
    { prompt: 'Eu já terminei o trabalho.', answers: ['wǒ yǐjīng zuò wán gōngzuò le', 'wo yijing zuo wan gongzuo le', '我已经做完工作了'], level: 'intermediario' },
    { prompt: 'Você deveria descansar mais.', answers: ['nǐ yīnggāi duō xiūxi', 'ni yinggai duo xiuxi', '你应该多休息'], level: 'intermediario' },
    { prompt: 'Estudo mandarim há dois anos.', answers: ['wǒ xué pǔtōnghuà yǐjīng liǎng nián le', 'wo xue putonghua yijing liang nian le', '我学普通话已经两年了'], level: 'intermediario' },
    { prompt: 'Por que você não veio ontem?', answers: ['nǐ zuótiān wèishénme méi lái', 'ni zuotian weishenme mei lai', '你昨天为什么没来'], level: 'intermediario' },
    { prompt: 'Ela fala tão bem quanto um nativo.', answers: ['tā shuō de gēn běndìrén yīyàng hǎo', 'ta shuo de gen bendi ren yiyang hao', '她说得跟本地人一样好'], level: 'intermediario' },
    // AVANÇADO (16-20)
    { prompt: 'Nunca provei durian.', answers: ['wǒ cónglái méi chī guò liúlián', 'wo conglai mei chi guo liulian', '我从来没吃过榴莲'], level: 'avancado' },
    { prompt: 'Se chover amanhã, não vamos sair.', answers: ['rúguǒ míngtiān xià yǔ, wǒmen jiù bù chūqù', 'ruguo mingtian xia yu, women jiu bu chuqu', '如果明天下雨，我们就不出去'], level: 'avancado' },
    { prompt: 'Embora seja difícil, é muito interessante.', answers: ['suīrán hěn nán, dànshì hěn yǒuyìsi', 'suiran hen nan, danshi hen youyisi', '虽然很难，但是很有意思'], level: 'avancado' },
    { prompt: 'Ela estava sorrindo enquanto falava.', answers: ['tā xiào zhe shuō huà', 'ta xiao zhe shuo hua', '她笑着说话'], level: 'avancado' },
    { prompt: 'Desde que se esforce, pode ter sucesso.', answers: ['zhǐyào nǔlì, jiù néng chénggōng', 'zhiyao nuli, jiu neng chenggong', '只要努力，就能成功'], level: 'avancado' },
  ],

  it: [
    // FUNDAMENTOS (1-5)
    { prompt: 'Me chamo Ana e tenho vinte anos.', answers: ["Mi chiamo Ana e ho vent'anni.", "Mi chiamo Ana e ho venti anni."], level: 'iniciante' },
    { prompt: 'Onde fica o banheiro, por favor?', answers: ["Dov'è il bagno, per favore?", 'Dove si trova il bagno, per favore?'], level: 'iniciante' },
    { prompt: 'Gosto de café com leite pela manhã.', answers: ['Mi piace il caffè con il latte la mattina.', 'Mi piace il caffelatte la mattina.'], level: 'iniciante' },
    { prompt: 'Eles moram numa casa grande perto do parque.', answers: ['Abitano in una casa grande vicino al parco.', 'Vivono in una casa grande vicino al parco.'], level: 'iniciante' },
    { prompt: 'Que horas são? São três e meia.', answers: ['Che ora è? Sono le tre e mezza.', 'Che ore sono? Sono le tre e mezza.'], level: 'iniciante' },
    // BÁSICO (6-10)
    { prompt: 'Ontem fui ao supermercado e comprei pão e fruta.', answers: ['Ieri sono andato al supermercato e ho comprato pane e frutta.', 'Ieri sono andata al supermercato e ho comprato pane e frutta.'], level: 'basico' },
    { prompt: 'Ela vai viajar para a Argentina no próximo mês.', answers: ['Il mese prossimo andrà in Argentina.', 'Il mese prossimo viaggierà in Argentina.'], level: 'basico' },
    { prompt: 'Pode falar mais devagar? Não entendo bem o italiano.', answers: ["Può parlare più lentamente? Non capisco bene l'italiano.", "Puoi parlare più lentamente? Non capisco bene l'italiano."], level: 'basico' },
    { prompt: 'Quando era criança, brincava todos os dias na rua.', answers: ['Da bambino, giocavo ogni giorno in strada.', 'Da bambina, giocavo ogni giorno in strada.'], level: 'basico' },
    { prompt: 'Preciso estudar mais se quero passar no exame.', answers: ["Devo studiare di più se voglio superare l'esame.", "Ho bisogno di studiare di più se voglio passare l'esame."], level: 'basico' },
    // INTERMEDIÁRIO (11-15)
    { prompt: 'Já visitei Roma três vezes, mas nunca fui a Florença.', answers: ['Ho visitato Roma tre volte, ma non sono mai stato a Firenze.', 'Ho visitato Roma tre volte, ma non sono mai stata a Firenze.'], level: 'intermediario' },
    { prompt: 'Se tivesse mais tempo, aprenderia a tocar guitarra.', answers: ['Se avessi più tempo, imparerei a suonare la chitarra.'], level: 'intermediario' },
    { prompt: 'É importante que todos participem da reunião.', answers: ['È importante che tutti partecipino alla riunione.'], level: 'intermediario' },
    { prompt: 'Ela pediu que eu chegasse cedo para ajudá-la.', answers: ['Mi ha chiesto di arrivare presto per aiutarla.', 'Ha chiesto che io arrivassi presto per aiutarla.'], level: 'intermediario' },
    { prompt: 'Quanto mais pratico, mais fluente fico.', answers: ['Più pratico, più divento fluente.', 'Più pratico, più miglioro.'], level: 'intermediario' },
    // AVANÇADO (16-20)
    { prompt: 'Se eu tivesse estudado mais, teria tirado uma nota melhor.', answers: ['Se avessi studiato di più, avrei preso un voto migliore.', 'Se avessi studiato di più, avrei ottenuto un voto migliore.'], level: 'avancado' },
    { prompt: 'Oxalá pudéssemos ficar mais um dia — a cidade é linda.', answers: ['Magari potessimo restare un altro giorno — la città è bellissima.', 'Magari potessimo fermarci un altro giorno — la città è splendida.'], level: 'avancado' },
    { prompt: 'É fundamental que todos os participantes apresentem os seus documentos.', answers: ['È fondamentale che tutti i partecipanti presentino i propri documenti.'], level: 'avancado' },
    { prompt: 'Por mais que me esforce, nunca consigo chegar na hora.', answers: ['Per quanto mi sforzi, non riesco mai ad arrivare in orario.'], level: 'avancado' },
    { prompt: 'O fato de ele não ter respondido me deixou sem palavras.', answers: ['Il fatto che lui non abbia risposto mi ha lasciato senza parole.', 'Il fatto che non abbia risposto mi ha lasciata senza parole.'], level: 'avancado' },
  ],
};

export function scorePlacement(answers, questions) {
  let correct = 0;
  questions.forEach((q, i) => {
    const userNorm = answers[i]?.toLowerCase().trim()
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[.,!?¿¡;:'"()\-]/g, '').replace(/\s+/g, ' ').trim();
    const match = q.answers.some(a =>
      a.toLowerCase().trim()
        .normalize('NFD').replace(/[̀-ͯ]/g, '')
        .replace(/[.,!?¿¡;:'"()\-]/g, '').replace(/\s+/g, ' ').trim() === userNorm
    );
    if (match) correct++;
  });
  return correct;
}

export function levelFromScore(score) {
  if (score >= 16) return 'avancado';
  if (score >= 11) return 'intermediario';
  if (score >= 6)  return 'basico';
  return 'iniciante';
}
