export const MODULES_AR_PART2 = [
  // ─── INTERMEDIÁRIO ───────────────────────────────────────────────
  {
    id: 'int-ar-1',
    language: 'ar',
    stage: 'Intermediário',
    title: 'المضارع الشرطي (Subjuntivo Presente)',
    subtitle: 'تعلم استخدام صيغة المضارع الشرطي في البرتغالية مع عبارات مثل: آمل أن / أريد أن / من المهم أن',
    theory: `في البرتغالية، يُستخدم المضارع الشرطي (Subjuntivo Presente) بعد عبارات معينة تعبّر عن الأمل أو الرغبة أو الشك أو الضرورة. هذه الصيغة تشبه إلى حد ما استخدام "أنْ" الناصبة في العربية مع الفعل المضارع المنصوب بعد أفعال مثل "أريد أن"، "أتمنى أن"، لكن البرتغالية تُصرّف الفعل نفسه بشكل خاص في الجملة الثانية.

## العبارات الشائعة التي تستدعي Subjuntivo

| العربية                  | البرتغالية                        |
|--------------------------|-----------------------------------|
| آمل أن                   | Espero que                        |
| أريد أن                  | Quero que                         |
| من المهم أن              | É importante que                  |
| من الضروري أن            | É necessário que                  |
| أتمنى أن                 | Tomara que / Oxalá                |
| يمكن أن                  | É possível que                    |
| أنصح بأن                 | Recomendo que                     |
| أشك أن                   | Duvido que                        |
| أطلب أن                  | Peço que                          |
| لا أعتقد أن              | Não acho que                      |

## تصريف الأفعال في Subjuntivo Presente

| الضمير       | falar     | comer    | abrir    | ser    | estar    |
|--------------|-----------|----------|----------|--------|----------|
| eu           | fale      | coma     | abra     | seja   | esteja   |
| você/ele/ela | fale      | coma     | abra     | seja   | esteja   |
| nós          | falemos   | comamos  | abramos  | sejamos| estejamos|
| vocês/eles   | falem     | comam    | abram    | sejam  | estejam  |

### القاعدة العامة للتصريف
ينطلق Subjuntivo Presente عادةً من جذع تصريف "eu" في المضارع العادي (Presente do Indicativo)، فتُحذف "-o" النهائية ويُضاف العكس بين -ar و-er/-ir:
- **-ar** ← تصريف falo → fal + e/es/e/emos/eis/em
- **-er / -ir** ← تصريف como → com + a/as/a/amos/ais/am

## ملاحظة بنيوية
الجملة الرئيسية يكون فعلها في المضارع العادي (Indicativo)، أما الفعل في الجملة الثانية (بعد "que") فيكون في Subjuntivo — لأن الجملة الثانية تعبّر عن أمر غير واقعي أو غير مؤكد بعد، وليس عن حقيقة.

**مثال:** Espero que você **venha** amanhã. (آمل أن تأتي غدًا.)
**مثال:** Duvido que ele **saiba** a resposta. (أشك أن يعرف الإجابة.)
**مثال:** Não acredito que isso **seja** verdade. (لا أصدق أن هذا حقيقي.)

⚠️ خطأ شائع: لا تستخدم Subjuntivo عند التأكد من معلومة. "Sei que ele **vem**." (أعرف أنه يأتي) تستخدم Indicativo لأنها حقيقة مؤكدة، بخلاف "Espero que ele **venha**." التي تعبّر عن أمل غير مؤكد.

💡 نصيحة: لاحظ أن أفعال الشك والنفي مثل "duvidar" و"não acreditar" تستدعي Subjuntivo، بعكس "acreditar" و"saber" المُستخدمة وحدها (بدون نفي) التي تستدعي Indicativo لأنها تفيد التأكد.

## المفردات الأساسية

• amanhã — غدًا
• cedo — مبكرًا
• passar na prova — النجاح في الامتحان
• vá — اذهب (شرطي)
• atrasado — متأخر
• tempo — الوقت / الطقس
• documentos — الوثائق
• chova — تمطر (شرطي)
• reunião — اجتماع
• regras — القواعد`,
    exercises: [{ sentences: [
      { prompt: 'آمل أن تأتي غدًا.', answers: ['Espero que você venha amanhã.'] },
      { prompt: 'أريد أن تتعلم البرتغالية.', answers: ['Quero que você aprenda português.'] },
      { prompt: 'من المهم أن تنام مبكرًا.', answers: ['É importante que você durma cedo.'] },
      { prompt: 'أتمنى أن تنجح في الامتحان.', answers: ['Tomara que você passe na prova.', 'Oxalá você passe na prova.'] },
      { prompt: 'من الضروري أن نتحدث.', answers: ['É necessário que a gente converse.', 'É necessário que nós conversemos.'] },
      { prompt: 'أنصح بأن تذهب إلى الطبيب.', answers: ['Recomendo que você vá ao médico.'] },
      { prompt: 'يمكن أن تكون في التأخير.', answers: ['É possível que ela esteja atrasada.', 'É possível que ele esteja atrasado.'] },
      { prompt: 'آمل أن الطقس يكون جميلًا.', answers: ['Espero que o tempo fique bom.', 'Espero que o clima fique bom.'] },
      { prompt: 'أريد أن تكون سعيدًا.', answers: ['Quero que você seja feliz.'] },
      { prompt: 'من المهم أن تشرب ماء كافيًا.', answers: ['É importante que você beba água suficiente.'] },
      { prompt: 'آمل أن يصل في الوقت.', answers: ['Espero que ele chegue no horário.', 'Espero que ele chegue a tempo.'] },
      { prompt: 'أريد أن نخرج معًا الليلة.', answers: ['Quero que a gente saia junto hoje à noite.'] },
      { prompt: 'من الضروري أن تحضر الوثائق.', answers: ['É necessário que você traga os documentos.'] },
      { prompt: 'أتمنى أن لا يمطر اليوم.', answers: ['Oxalá não chova hoje.', 'Tomara que não chova hoje.'] },
      { prompt: 'أنصح بأن تأكل قبل الاجتماع.', answers: ['Recomendo que você coma antes da reunião.'] },
      { prompt: 'من المهم أن نحترم الآخرين.', answers: ['É importante que a gente respeite os outros.'] },
      { prompt: 'آمل أن تعجبك الهدية.', answers: ['Espero que você goste do presente.'] },
      { prompt: 'يمكن أن يكون مشغولًا.', answers: ['É possível que ele esteja ocupado.'] },
      { prompt: 'أريد أن تتصل بي لاحقًا.', answers: ['Quero que você me ligue mais tarde.'] },
      { prompt: 'من الضروري أن تفهم القواعد.', answers: ['É necessário que você entenda as regras.'] },
    ]}],
  },

  {
    id: 'int-ar-2',
    language: 'ar',
    stage: 'Intermediário',
    title: 'الضمائر المفعول به (Pronomes Oblíquos)',
    subtitle: 'تعلم استخدام ضمائر مثل: me / lhe / o / a / nos وموضعها الصحيح في الجملة',
    theory: `الضمائر المفعول به (Pronomes Oblíquos) تحل محل الاسم الذي يقع عليه الفعل، تمامًا كضمائر النصب والجر المتصلة في العربية (ـه، ـها، ـني، ـنا) التي تُضاف لاحقة بالفعل. الفرق الأساسي أن البرتغالية البرازيلية المحكية تميل لوضع الضمير **قبل** الفعل، لا بعده كما في الفصحى الرسمية.

## الضمائر الأساسية

| الضمير الفاعل | مفعول مباشر | مفعول غير مباشر | المعادل العربي |
|----------------|-------------|-----------------|-----------------|
| eu             | me          | me              | ـني / لي        |
| você / ele     | o           | lhe             | ـه / له         |
| você / ela     | a           | lhe             | ـها / لها       |
| nós            | nos         | nos             | ـنا / لنا       |
| vocês / eles   | os          | lhes            | ـهم / لهم       |

## الموضع في الجملة البرازيلية

في البرتغالية البرازيلية المحكية، يكثر وضع الضمير **قبل** الفعل (proclise)، بخلاف البرتغالية الأوروبية والكتابة الرسمية التي تضعه غالبًا بعد الفعل (ênclise):

| مثال                         | الترجمة                    |
|------------------------------|----------------------------|
| Ele **me** ligou.            | هو اتصل بي.                |
| Eu **te** amo.               | أنا أحبك.                  |
| Ela **nos** ajudou.          | هي ساعدتنا.                |
| Eu **o** vi ontem.           | رأيته أمس.                 |
| Você **lhe** deu o livro?    | هل أعطيته الكتاب؟           |

## البديل العامي الشائع جدًا
في الحديث اليومي البرازيلي، كثيرًا ما يُستبدل "o/a/os/as" (المفعول المباشر الرسمي) بالضمير الفاعل نفسه بعد الفعل، أو بإعادة الاسم:
- الرسمي: Eu **o** vi ontem. → العامي: Eu vi **ele** ontem.
- الرسمي: Ele **a** beijou. → العامي: Ele beijou **ela**.

وبالمثل، "lhe" غالبًا ما يُستبدل بـ "para/pra + ضمير": Ele **lhe** deu o livro. ≈ Ele deu o livro **pra ela**.

## ملاحظة عن نطق "te" و"lhe"
في البرازيل، "te" يُستخدم بشكل واسع في الكلام اليومي حتى مع أفعال تتطلب نظريًا "lhe" أو "o/a" في القواعد الرسمية: "Eu **te** amo" أكثر شيوعًا من "Eu **a/o** amo".

⚠️ خطأ شائع: لا تخلط بين "lhe" (مفعول غير مباشر، يعني "له/لها") و"o/a" (مفعول مباشر، يعني "ـه/ـها"). الجملة "Eu lhe vi" خاطئة نحويًا؛ الصحيح "Eu **o** vi" (المفعول المباشر) لأن فعل "ver" يأخذ مفعولًا مباشرًا لا غير مباشر.

💡 نصيحة: في الكلام اليومي، إن شككت في الضمير الصحيح، استخدم البنية الأسهل "verbo + pra/para + اسم/ضمير" مثل "comprei um presente **pra ela**" بدلًا من "comprei-**lhe** um presente" — مفهومة وصحيحة في كل السجلات.

## المفردات الأساسية

• ligar — يتصل (هاتفيًا)
• ajudar — يساعد
• ver — يرى
• beijar — يقبّل
• mandar — يرسل
• ensinar — يعلّم
• perguntar — يسأل
• visitar — يزور
• conhecer — يعرف (شخصًا)
• encontrar — يجد / يقابل
• mensagem — رسالة
• presente — هدية`,
    exercises: [{ sentences: [
      { prompt: 'هو اتصل بي أمس.', answers: ['Ele me ligou ontem.'] },
      { prompt: 'أنا أحبك كثيرًا.', answers: ['Eu te amo muito.'] },
      { prompt: 'هي ساعدتنا في الانتقال.', answers: ['Ela nos ajudou na mudança.'] },
      { prompt: 'رأيته في السوبرماركت.', answers: ['Eu o vi no supermercado.', 'Vi ele no supermercado.'] },
      { prompt: 'هل أعطيتها الرسالة؟', answers: ['Você lhe deu a carta?', 'Você deu a carta pra ela?'] },
      { prompt: 'هم لم يتصلوا بنا.', answers: ['Eles não nos ligaram.', 'Eles não ligaram pra gente.'] },
      { prompt: 'أنا سأساعدك غدًا.', answers: ['Eu vou te ajudar amanhã.'] },
      { prompt: 'هو قبّلها على الخد.', answers: ['Ele a beijou no rosto.', 'Ele beijou ela no rosto.'] },
      { prompt: 'هي أرسلت لي رسالة.', answers: ['Ela me mandou uma mensagem.'] },
      { prompt: 'هل يمكنك مساعدتنا؟', answers: ['Você pode nos ajudar?', 'Você pode ajudar a gente?'] },
      { prompt: 'أنا لم أره من زمان.', answers: ['Eu não o vi faz tempo.', 'Eu não vi ele faz tempo.'] },
      { prompt: 'هم أرسلوا لها هدية.', answers: ['Eles lhe mandaram um presente.', 'Eles mandaram um presente pra ela.'] },
      { prompt: 'هو علّمني البرتغالية.', answers: ['Ele me ensinou português.'] },
      { prompt: 'هي سألتني سؤالًا غريبًا.', answers: ['Ela me fez uma pergunta estranha.'] },
      { prompt: 'أنا سأزورك قريبًا.', answers: ['Eu vou te visitar em breve.'] },
      { prompt: 'هل تعرفني؟', answers: ['Você me conhece?'] },
      { prompt: 'هو اشترى لها وردًا.', answers: ['Ele lhe comprou flores.', 'Ele comprou flores pra ela.'] },
      { prompt: 'أنا سأحجز لكم طاولة.', answers: ['Eu vou reservar uma mesa pra vocês.'] },
      { prompt: 'هي أخبرتني الخبر.', answers: ['Ela me contou a novidade.'] },
      { prompt: 'هم وجدونا في المطعم.', answers: ['Eles nos encontraram no restaurante.', 'Eles encontraram a gente no restaurante.'] },
    ]}],
  },

  {
    id: 'int-ar-3',
    language: 'ar',
    stage: 'Intermediário',
    title: 'المبني للمجهول (Voz Passiva)',
    subtitle: 'تعلم بناء الجملة المبنية للمجهول في البرتغالية: تم بناؤه / يجري إنجازه',
    theory: `المبني للمجهول (Voz Passiva) يُستخدم عندما يكون الفاعل غير معروف أو غير مهم، أو نريد التركيز على من/ما حدث له الفعل — تمامًا كصيغة المبني للمجهول في العربية (بُنِيَ، كُتِبَ).

## هيكل الجملة المبنية للمجهول

**ser + particípio passado (+ por + الفاعل)**

| الزمن        | المبني للمعلوم           | المبني للمجهول                        |
|--------------|--------------------------|---------------------------------------|
| الماضي       | Construíram a casa.      | A casa foi construída.                |
| الحاضر       | Fazem o serviço.         | O serviço é feito.                    |
| المضارع المستمر | Estão fazendo o trabalho. | O trabalho está sendo feito.       |
| المستقبل     | Vão abrir a loja.        | A loja vai ser aberta.                |
| الماضي التام  | Tinham terminado o projeto. | O projeto tinha sido terminado.    |

## تطابق particípio مع الاسم
نقطة مهمة: عندما يُستخدم particípio بعد "ser"، فإنه يتطابق في الجنس والعدد مع فاعل الجملة المجهولة — تمامًا كتطابق صفة المؤنث والجمع في العربية.

| الاسم    | particípio |
|----------|------------|
| o livro  | escrito    |
| a carta  | escrita    |
| os livros| escritos   |
| as cartas| escritas   |

**مثال:** As cartas foram **escritas** por ela. (الرسائل كُتِبت من قِبَلها — لاحظ "-as" للجمع المؤنث.)

## استخدام "por" لذكر الفاعل
نستخدم "por" (+ الفاعل) لذكر من قام بالفعل، بمعنى "من قِبَل" أو "بواسطة":
- O quadro foi pintado **por** um artista famoso. (اللوحة رسمها فنان مشهور.)

## المبني للمجهول البرازيلي غير الرسمي
في اللغة العامية البرازيلية، يُستخدم "se" بدلًا من المبني للمجهول الرسمي في كثير من الأحيان، خصوصًا في اللوحات والإعلانات:
- Aluga-se apartamento. (شقة للإيجار.)
- Vende-se carro. (سيارة للبيع.)
- Precisa-se de funcionários. (مطلوب موظفون.)

⚠️ خطأ شائع: لا تخلط بين "foi construída" (حدث منتهٍ) و"estava sendo construída" (حدث مستمر في الماضي). الأول يعني انتهى البناء، والثاني يعني كان البناء جاريًا فقط.

💡 نصيحة: في المحادثة اليومية، البرازيليون يفضّلون غالبًا فاعلًا غير محدد مثل "eles" أو صيغة "se" بدلًا من المبني للمجهول الرسمي. فمثلًا "Disseram que..." (قالوا إن...) أكثر طبيعية من "Foi dito que..." في الحديث العادي.

## المفردات الأساسية

• construir — يبني
• abrir — يفتح
• gravar — يصوّر / يسجّل
• preparar — يُحضّر
• enviar — يرسل
• consertar — يصلح
• concluir — ينجز / يُنهي
• alugar — يؤجّر
• encontrar — يجد
• assinar — يوقّع
• resolver — يحل (مشكلة)
• prazo — الموعد النهائي`,
    exercises: [{ sentences: [
      { prompt: 'تم بناء المنزل عام ألفين.', answers: ['A casa foi construída em dois mil.'] },
      { prompt: 'الباب يجري فتحه الآن.', answers: ['A porta está sendo aberta agora.'] },
      { prompt: 'الفيلم صُوِّر في ريو دي جانيرو.', answers: ['O filme foi gravado no Rio de Janeiro.'] },
      { prompt: 'الطعام يُحضَّر في المطبخ.', answers: ['A comida é preparada na cozinha.'] },
      { prompt: 'الرسالة أُرسِلت أمس.', answers: ['A carta foi enviada ontem.'] },
      { prompt: 'الجسر يجري إصلاحه.', answers: ['A ponte está sendo consertada.'] },
      { prompt: 'المتجر سيُفتح غدًا.', answers: ['A loja vai ser aberta amanhã.'] },
      { prompt: 'الكتاب كُتِب في البرازيل.', answers: ['O livro foi escrito no Brasil.'] },
      { prompt: 'الأطفال يُعلَّمون في المدرسة.', answers: ['As crianças são ensinadas na escola.'] },
      { prompt: 'المشروع أُنجِز في الوقت.', answers: ['O projeto foi concluído no prazo.'] },
      { prompt: 'الشقة تُؤجَّر بسعر مناسب.', answers: ['O apartamento é alugado por um preço bom.'] },
      { prompt: 'السيارة تجري إصلاحها الآن.', answers: ['O carro está sendo consertado agora.'] },
      { prompt: 'الحفلة ستُنظَّم في الشهر القادم.', answers: ['A festa vai ser organizada no mês que vem.'] },
      { prompt: 'المسروقات وُجِدت في الحديقة.', answers: ['Os objetos roubados foram encontrados no parque.'] },
      { prompt: 'الموقع الإلكتروني تم تحديثه.', answers: ['O site foi atualizado.'] },
      { prompt: 'المنح الدراسية ستُوزَّع غدًا.', answers: ['As bolsas vão ser distribuídas amanhã.'] },
      { prompt: 'العقد وُقِّع من قِبَل المدير.', answers: ['O contrato foi assinado pelo diretor.'] },
      { prompt: 'الفواتير تُدفَع كل شهر.', answers: ['As contas são pagas todo mês.'] },
      { prompt: 'النتائج ستُعلَن الأسبوع القادم.', answers: ['Os resultados vão ser divulgados na semana que vem.'] },
      { prompt: 'المشكلة تجري معالجتها.', answers: ['O problema está sendo resolvido.'] },
    ]}],
  },

  {
    id: 'int-ar-4',
    language: 'ar',
    stage: 'Intermediário',
    title: 'الكلام غير المباشر (Discurso Indireto)',
    subtitle: 'تعلم نقل الكلام بصيغة غير مباشرة: قال إنه / سألت إذا',
    theory: `الكلام غير المباشر (Discurso Indireto) هو نقل كلام شخص ما دون الاقتباس الحرفي — يشبه قولنا في العربية "قال إنه..." بدلًا من اقتباس الجملة كما قيلت بالضبط.

## التحويل من المباشر إلى غير المباشر

| الكلام المباشر                   | الكلام غير المباشر                        |
|----------------------------------|------------------------------------------|
| Ele disse: "Estou cansado."      | Ele disse que estava cansado.            |
| Ela perguntou: "Você vem?"       | Ela perguntou se eu ia.                  |
| Eles falaram: "Vamos sair."      | Eles falaram que iam sair.               |

## تغييرات الضمائر والملكية

| المباشر | غير المباشر |
|---------|-------------|
| eu      | ele / ela   |
| você    | eu          |
| meu     | dele / dela |
| aqui    | ali / lá    |
| agora   | naquele momento |
| hoje    | naquele dia |

## الأفعال الشائعة في الكلام غير المباشر

| الفعل      | الاستخدام           |
|------------|---------------------|
| dizer que  | قال إنه             |
| falar que  | قال إنه (عامي)      |
| perguntar se | سأل إذا كان       |
| responder que | أجاب بأنه        |
| contar que | حكى أن             |
| explicar que | شرح أن            |
| afirmar que | أكّد أن            |

## جدول تحويل الأزمنة (Correlação Verbal)
عند نقل كلام قيل في الماضي، يتحول الزمن للوراء خطوة واحدة — تمامًا كقاعدة "تحويل الكلام المباشر إلى غير مباشر" في العربية حين نحوّل بعض الأفعال:

| الزمن في الكلام المباشر | يتحول في غير المباشر إلى |
|--------------------------|---------------------------|
| Presente (Estou cansado) | Pretérito Imperfeito (estava cansado) |
| Futuro (Vou viajar)      | Imperfeito do verbo ir (ia viajar)    |
| Pretérito Perfeito (Cheguei) | Pretérito Mais-que-perfeito (tinha chegado) |
| Imperativo (Faça isso)   | Subjuntivo Imperfeito (fizesse isso)  |

**مثال:** "Cheguei tarde." → Ele disse que **tinha chegado** tarde. (قال إنه وصل متأخرًا.)
**مثال:** "Faça o trabalho." → Ela pediu que eu **fizesse** o trabalho. (طلبت أن أقوم بالعمل.)

⚠️ خطأ شائع: لا تنسَ تحويل "se" بدل "?" عند نقل سؤال نعم/لا: "Você vem?" تصبح "perguntou **se** eu ia"، وليس "perguntou que eu ia".

💡 نصيحة: في الكلام اليومي البرازيلي، كثيرًا ما يتم تجاهل القاعدة الصارمة لتحويل الزمن، خصوصًا حين يكون الحدث المنقول لا يزال صحيحًا في الحاضر: "Ele disse que **mora** em São Paulo." (قال إنه يعيش في ساو باولو) شائعة بدل الصيغة الرسمية "morava".

## المفردات الأساسية

• cansado — متعب
• arranjar um emprego — إيجاد وظيفة
• gostosa — لذيذة (مؤنث)
• cancelada — مُلغاة
• reunião — اجتماع
• prova — امتحان
• difícil — صعب
• entender — يفهم
• ligar mais tarde — يتصل لاحقًا
• esperar — ينتظر`,
    exercises: [{ sentences: [
      { prompt: 'قال إنه متعب.', answers: ['Ele disse que estava cansado.'] },
      { prompt: 'سألت إذا كنت سأحضر.', answers: ['Ela perguntou se eu ia.'] },
      { prompt: 'قالوا إنهم سيخرجون.', answers: ['Eles falaram que iam sair.'] },
      { prompt: 'أجابت بأنها لا تعرف.', answers: ['Ela respondeu que não sabia.'] },
      { prompt: 'شرح أن الاجتماع ألغي.', answers: ['Ele explicou que a reunião tinha sido cancelada.'] },
      { prompt: 'حكت أنها وجدت وظيفة جديدة.', answers: ['Ela contou que tinha arranjado um emprego novo.'] },
      { prompt: 'قال إن الطعام لذيذ.', answers: ['Ele falou que a comida estava gostosa.'] },
      { prompt: 'سألوا إذا كان المحل مفتوحًا.', answers: ['Eles perguntaram se a loja estava aberta.'] },
      { prompt: 'أجاب بأنه سيفكر في الأمر.', answers: ['Ele respondeu que ia pensar no assunto.'] },
      { prompt: 'قالت إنها تحب البرازيل.', answers: ['Ela disse que amava o Brasil.'] },
      { prompt: 'شرح المعلم أن الاختبار صعب.', answers: ['O professor explicou que a prova era difícil.'] },
      { prompt: 'سألني إذا كنت أعمل هنا.', answers: ['Ele me perguntou se eu trabalhava ali.'] },
      { prompt: 'قالت إنها ستتصل لاحقًا.', answers: ['Ela disse que ia ligar mais tarde.'] },
      { prompt: 'قال إنه لم يفهم السؤال.', answers: ['Ele falou que não tinha entendido a pergunta.'] },
      { prompt: 'حكوا أن الحفلة كانت رائعة.', answers: ['Eles contaram que a festa tinha sido ótima.'] },
      { prompt: 'أجابت بأنها لا تستطيع المجيء.', answers: ['Ela respondeu que não podia vir.'] },
      { prompt: 'سأل إذا كان هناك مكان للجلوس.', answers: ['Ele perguntou se tinha lugar pra sentar.'] },
      { prompt: 'قال إنه ينتظر منذ ساعة.', answers: ['Ele disse que estava esperando há uma hora.'] },
      { prompt: 'شرحت أن السعر تغيّر.', answers: ['Ela explicou que o preço tinha mudado.'] },
      { prompt: 'قالوا إنهم وصلوا.', answers: ['Eles falaram que tinham chegado.'] },
    ]}],
  },

  {
    id: 'int-ar-5',
    language: 'ar',
    stage: 'Intermediário',
    title: 'أدوات الربط (Conectivos)',
    subtitle: 'تعلم استخدام أدوات الربط: embora / porém / portanto / a menos que وغيرها',
    theory: `أدوات الربط (Conectivos) تربط الجمل وتوضح العلاقة بينها.

## أدوات الاستدراك (contraste)

| البرتغالية       | العربية              | مثال                                           |
|------------------|----------------------|------------------------------------------------|
| embora           | رغم أن               | Embora esteja cansado, vou trabalhar.          |
| apesar de        | بالرغم من            | Apesar de tudo, continuei.                     |
| porém / contudo  | ولكن / غير أن        | Queria ir, porém não pude.                     |
| no entanto       | على الرغم من ذلك     | Estudei muito. No entanto, não passei.         |

## أدوات النتيجة (conclusão)

| البرتغالية        | العربية           | مثال                                           |
|-------------------|-------------------|------------------------------------------------|
| portanto          | لذلك / إذن        | Não estudei, portanto reprovei.                |
| por isso          | لهذا السبب        | Estava doente, por isso faltei.                |
| logo              | إذن / وبالتالي    | Penso, logo existo.                            |

## أدوات الشرط

| البرتغالية        | العربية           | مثال                                           |
|-------------------|-------------------|------------------------------------------------|
| a menos que       | إلا إذا           | Vou, a menos que chova.                        |
| desde que         | بشرط أن           | Pode ir, desde que volte cedo.                 |
| caso              | في حال أن         | Caso precise, me ligue.                        |

## أدوات الإضافة (adição)

| البرتغالية        | العربية           | مثال                                           |
|-------------------|-------------------|------------------------------------------------|
| além disso        | علاوة على ذلك     | Estudou muito. Além disso, praticou todo dia.  |
| também            | أيضًا             | Ele fala inglês e também espanhol.             |
| inclusive         | حتى / بل          | Todos vieram, inclusive os mais velhos.        |

## ملاحظة مهمة عن Subjuntivo
بعد **embora** و**a menos que** و**caso** و**desde que**، يأتي الفعل في صيغة **Subjuntivo** وليس في صيغة Indicativo العادية، لأن هذه الأدوات تعبّر عن شرط أو احتمال أو تنازل غير مؤكد. هذا مشابه إلى حد ما لاستخدام "إن" الشرطية في العربية التي تستدعي صيغة معينة من الفعل.

⚠️ خطأ شائع: لا تقل "Embora ele **está** cansado" — الصحيح "Embora ele **esteja** cansado" (Subjuntivo). بالمقابل، بعد "porém" و"portanto" و"no entanto" يبقى الفعل في Indicativo العادي لأنها لا تفترض شكًا، بل تربط حقائق.

💡 نصيحة: "mas" هي الأداة الأكثر استخدامًا في الكلام اليومي لمعنى "لكن"، بينما "porém" و"contudo" و"no entanto" أكثر شيوعًا في الكتابة الرسمية والخطابة — لكن معناها واحد تقريبًا ويمكن استخدامها للتلوين الأسلوبي.`,
    exercises: [{ sentences: [
      { prompt: 'رغم أنه تعبان، ذهب للعمل.', answers: ['Embora estivesse cansado, foi trabalhar.'] },
      { prompt: 'أردت الحضور، لكن لم أستطع.', answers: ['Queria ir, porém não pude.', 'Queria ir, mas não pude.'] },
      { prompt: 'درست كثيرًا، لذلك نجحت.', answers: ['Estudei muito, portanto passei.', 'Estudei muito, por isso passei.'] },
      { prompt: 'كانت مريضة، لهذا غابت.', answers: ['Ela estava doente, por isso faltou.'] },
      { prompt: 'سأذهب إلا إذا أمطرت.', answers: ['Vou, a menos que chova.'] },
      { prompt: 'بشرط أن ترجع مبكرًا، يمكنك الذهاب.', answers: ['Pode ir, desde que volte cedo.'] },
      { prompt: 'رغم كل شيء، استمررت.', answers: ['Apesar de tudo, continuei.'] },
      { prompt: 'في حال احتجت مساعدة، اتصل بي.', answers: ['Caso precise de ajuda, me ligue.'] },
      { prompt: 'الطقس كان سيئًا، ومع ذلك خرجنا.', answers: ['O tempo estava ruim, no entanto saímos.'] },
      { prompt: 'لم يأكل شيئًا، لذلك يشعر بالجوع الآن.', answers: ['Não comeu nada, portanto está com fome agora.'] },
      { prompt: 'رغم أن الفيلم طويل، إلا أنه ممتع.', answers: ['Embora o filme seja longo, é interessante.'] },
      { prompt: 'من الممكن الحل، بشرط أن نتعاون.', answers: ['É possível resolver, desde que a gente coopere.'] },
      { prompt: 'الثمن مرتفع، لكنه يستحق.', answers: ['O preço é alto, porém vale a pena.'] },
      { prompt: 'كنت متأخرًا، لذا أسرعت.', answers: ['Estava atrasado, por isso me apressei.'] },
      { prompt: 'رغم أنه لا يتحدث البرتغالية، يسافر كثيرًا للبرازيل.', answers: ['Embora não fale português, viaja muito para o Brasil.'] },
      { prompt: 'تعلم لغة جديدة، وبالتالي ستجد فرصًا أفضل.', answers: ['Aprenda uma língua nova, logo vai ter melhores oportunidades.'] },
      { prompt: 'سأساعدك إلا إذا كنت مشغولًا جدًا.', answers: ['Vou te ajudar, a menos que eu esteja muito ocupado.'] },
      { prompt: 'في حال تأخرت، ابدأ بدوني.', answers: ['Caso eu me atrase, começa sem mim.'] },
      { prompt: 'أراد الاستقالة، غير أنه فكّر مرة أخرى.', answers: ['Queria pedir demissão, contudo pensou melhor.'] },
      { prompt: 'لم يدرس، لذلك رسب في الامتحان.', answers: ['Não estudou, portanto foi reprovado na prova.'] },
    ]}],
  },

  // ─── AVANÇADO ────────────────────────────────────────────────────
  {
    id: 'adv-ar-1',
    language: 'ar',
    stage: 'Avançado',
    title: 'المستقبل الشرطي (Futuro do Subjuntivo)',
    subtitle: 'تعلم استخدام الفعل الشرطي المستقبل مع: عندما أصل / إذا أمطرت',
    theory: `الفعل الشرطي المستقبل (Futuro do Subjuntivo) يُستخدم للتحدث عن أحداث مستقبلية غير مؤكدة.

## متى يُستخدم؟

بعد هذه الأدوات:

| الأداة      | المعنى           | مثال                                        |
|-------------|------------------|---------------------------------------------|
| quando      | عندما            | Quando eu chegar, te aviso.                 |
| se          | إذا              | Se chover, não vou.                         |
| assim que   | حالما            | Assim que terminar, ligo.                   |
| enquanto    | بينما / طالما   | Enquanto você estudar, vai crescer.         |
| logo que    | بمجرد ما        | Logo que souber, te conto.                  |

## التصريف

| الضمير     | falar     | comer    | partir   | ser/ir   |
|------------|-----------|----------|----------|----------|
| eu         | falar     | comer    | partir   | for      |
| você/ele   | falar     | comer    | partir   | for      |
| nós        | falarmos  | comermos | partirmos| formos   |
| vocês/eles | falarem   | comerem  | partirem | forem    |

## ملاحظة مهمة
الجملة الرئيسية تكون في المستقبل البسيط أو في صيغة "ir + infinitivo"، أما الجملة الشرطية (بعد quando/se/assim que...) فتكون في Futuro do Subjuntivo.

## مقارنة مع Subjuntivo Presente
لا تخلط بين Futuro do Subjuntivo وSubjuntivo Presente: الأول يتحدث عن شرط مستقبلي محتمل الحدوث (إذا/عندما حدث كذا في المستقبل)، بينما الثاني يعبّر عن رغبة أو شك حاليين.
- Futuro do Subjuntivo: **Quando** ele **chegar**, avise-me. (عندما يصل — حدث مستقبلي مفترض)
- Subjuntivo Presente: **Espero que** ele **chegue** bem. (آمل أن يصل بخير — رغبة حالية)

## الأفعال الشاذة الأكثر استخدامًا
بعض الأفعال لها جذع شاذ في Futuro do Subjuntivo يجب حفظه:

| الفعل (infinitivo) | eu/você/ele | nós       | vocês/eles |
|---------------------|-------------|-----------|------------|
| ser / ir            | for         | formos    | forem      |
| ter                 | tiver       | tivermos  | tiverem    |
| fazer               | fizer       | fizermos  | fizerem    |
| poder               | puder       | pudermos  | puderem    |
| vir                 | vier        | viermos   | vierem     |
| dizer               | disser      | dissermos | disserem   |

⚠️ خطأ شائع: لا تستخدم المستقبل العادي (Futuro do Presente) بعد "quando" أو "se" للحديث عن المستقبل. الخطأ: "Quando eu **chegarei**, te aviso." الصحيح: "Quando eu **chegar**, te aviso." الفعل بعد هذه الأدوات يكون دومًا في Futuro do Subjuntivo، لا في المستقبل البسيط.

💡 نصيحة: لاحظ أن "ser" و"ir" لهما نفس تصريف Futuro do Subjuntivo بالضبط (for, fores, for, formos, fordes, forem)؛ السياق يحدد المعنى المقصود.

## المفردات الأساسية

• chegar — يصل
• chover — تمطر
• terminar — ينهي
• crescer — يكبر / ينمو
• achar — يجد / يظن
• mudar-se — ينتقل (للسكن)
• se aposentar — يتقاعد
• juntar dinheiro — يجمع المال
• chateado — زعلان
• curtir — يستمتع بـ`,
    exercises: [{ sentences: [
      { prompt: 'عندما أصل، سأخبرك.', answers: ['Quando eu chegar, te aviso.'] },
      { prompt: 'إذا أمطرت، لن أذهب.', answers: ['Se chover, não vou.'] },
      { prompt: 'حالما أنتهي، أتصل بك.', answers: ['Assim que terminar, ligo.'] },
      { prompt: 'عندما يكون لديك وقت، تعال لزيارتي.', answers: ['Quando você tiver tempo, vem me visitar.'] },
      { prompt: 'إذا نجحت، سنحتفل.', answers: ['Se você passar, a gente comemora.'] },
      { prompt: 'بمجرد ما أعرف، سأخبرك.', answers: ['Logo que eu souber, te conto.'] },
      { prompt: 'عندما تكبر، ستفهم.', answers: ['Quando você crescer, vai entender.'] },
      { prompt: 'إذا كان الثمن مناسبًا، سأشتريه.', answers: ['Se o preço estiver bom, vou comprar.'] },
      { prompt: 'بينما تدرس، ستتقدم.', answers: ['Enquanto você estudar, vai crescer.'] },
      { prompt: 'عندما تصل إلى البرازيل، تمتع بكل شيء.', answers: ['Quando você chegar ao Brasil, curte tudo.'] },
      { prompt: 'إذا وجدت وظيفة، سأنتقل.', answers: ['Se eu achar emprego, vou me mudar.'] },
      { prompt: 'حالما تنتهي من العمل، تعال.', answers: ['Assim que terminar o trabalho, vem.'] },
      { prompt: 'عندما يكونون جاهزين، سنبدأ.', answers: ['Quando eles estiverem prontos, a gente começa.'] },
      { prompt: 'إذا احتجت مساعدة، اطلب.', answers: ['Se precisar de ajuda, pede.'] },
      { prompt: 'بمجرد ما تصل الرسالة، أجب عليها.', answers: ['Logo que a mensagem chegar, responde.'] },
      { prompt: 'عندما يكون الطقس جيدًا، نخرج.', answers: ['Quando o tempo estiver bom, a gente sai.'] },
      { prompt: 'إذا فهمت البرتغالية، ستحب البرازيل أكثر.', answers: ['Se você entender o português, vai amar o Brasil ainda mais.'] },
      { prompt: 'حالما أوفر المال، سأسافر.', answers: ['Assim que eu juntar dinheiro, vou viajar.'] },
      { prompt: 'عندما يتقاعد، سيسافر حول العالم.', answers: ['Quando ele se aposentar, vai viajar pelo mundo.'] },
      { prompt: 'إذا لم تحضر، سأكون زعلان.', answers: ['Se você não vier, vou ficar chateado.'] },
    ]}],
  },

  {
    id: 'adv-ar-2',
    language: 'ar',
    stage: 'Avançado',
    title: 'المصدر الشخصي (Infinitivo Pessoal)',
    subtitle: 'تعلم استخدام المصدر الشخصي: من المهم أن نذهب / لكي يخرجوا',
    theory: `المصدر الشخصي (Infinitivo Pessoal) هو خاصية مميزة للغة البرتغالية، إذ يُصرَّف المصدر مع الضمائر.

## متى يُستخدم؟

- بعد حروف جر: **para**, **por**, **sem**, **após**, **antes de**
- عندما يكون فاعل الجملة الثانية مختلفًا عن الأول
- للتأكيد على الفاعل

## التصريف

| الضمير      | falar     | comer    | partir   |
|-------------|-----------|----------|----------|
| eu          | falar     | comer    | partir   |
| você/ele/ela| falar     | comer    | partir   |
| nós         | falarmos  | comermos | partirmos|
| vocês/eles  | falarem   | comerem  | partirem |

## أمثلة

| الجملة                                  | الترجمة                           |
|-----------------------------------------|-----------------------------------|
| É importante irmos cedo.               | من المهم أن نذهب مبكرًا.          |
| Para eles saírem, precisam de permissão.| لكي يخرجوا، يحتاجون إذنًا.        |
| Sem vocês falarem, não há solução.     | بدون أن تتحدثوا، لا يوجد حل.      |
| Após eles chegarem, começamos.         | بعد وصولهم، نبدأ.                  |

## ملاحظة
في اللغة العامية البرازيلية، يُستخدم Infinitivo Pessoal أقل من اللغة الرسمية، لكنه مهم في الكتابة والتحدث الرسمي.

## الفرق بين Infinitivo Pessoal وInfinitivo Impessoal
عندما يكون فاعل الفعلين في الجملة (الرئيسية والثانوية) نفس الشخص، يبقى المصدر بدون تصريف (Infinitivo Impessoal):
- É importante **estudar**. (من المهم أن يدرس [أي شخص] — عام، غير محدد)
- É importante **estudarmos**. (من المهم أن ندرس [نحن بالتحديد] — محدد بفاعل واضح)

هذه خاصية فريدة في البرتغالية لا توجد مباشرة في العربية أو الإنجليزية أو الإسبانية، لأن المصدر (infinitivo) يحمل علامة الفاعل والعدد مثل الفعل المصرَّف، بينما "أنْ + فعل مضارع منصوب" في العربية لا تتغير صورته بحسب الفاعل في حد ذاتها (التغيير يكون في الفعل نفسه بعد "أنْ").

## أدوات شائعة تستدعي Infinitivo Pessoal
| الأداة     | المعنى       |
|------------|--------------|
| para       | لكي / من أجل  |
| por        | بسبب         |
| sem        | بدون         |
| após       | بعد          |
| antes de   | قبل          |
| até        | حتى          |

⚠️ خطأ شائع: لا تضع "que" بعد هذه الحروف مع المصدر الشخصي. الخطأ: "Para que eles saírem..." الصحيح: "**Para** eles **saírem**..." (بدون que) — لأن المصدر الشخصي يحل محل "que + Subjuntivo" في هذه الحالة.

💡 نصيحة: يمكن غالبًا استخدام "para que + Subjuntivo" كبديل رسمي مكافئ للمصدر الشخصي بعد "para": "Para eles saírem" = "Para que eles saiam" (بمعنى قريب جدًا)، لكن البنية بـ infinitivo pessoal أكثر شيوعًا وأقصر.

## المفردات الأساسية

• sair — يخرج
• chegar — يصل
• descansar — يستريح
• decidir — يقرر
• viajar — يسافر
• negociar — يتفاوض
• progredir — يتقدّم
• comunicar-se — يتواصل
• permissão — إذن
• passaporte — جواز سفر`,
    exercises: [{ sentences: [
      { prompt: 'من المهم أن نذهب مبكرًا.', answers: ['É importante irmos cedo.'] },
      { prompt: 'لكي يخرجوا، يحتاجون إذنًا.', answers: ['Para eles saírem, precisam de permissão.'] },
      { prompt: 'بعد وصولهم، بدأنا.', answers: ['Após eles chegarem, começamos.'] },
      { prompt: 'بدون أن تتحدثوا، لا يوجد حل.', answers: ['Sem vocês falarem, não tem solução.'] },
      { prompt: 'من المهم أن يدرسوا كل يوم.', answers: ['É importante eles estudarem todo dia.'] },
      { prompt: 'قبل أن نخرج، تحدثنا.', answers: ['Antes de sairmos, conversamos.'] },
      { prompt: 'لكي نفهم البرتغالية، يجب أن نتدرب.', answers: ['Para entendermos o português, precisamos praticar.'] },
      { prompt: 'بعد انتهائهم من العمل، استرحوا.', answers: ['Após terminarem o trabalho, descansaram.'] },
      { prompt: 'يُعقل أن يتفاوضوا على الراتب.', answers: ['Faz sentido eles negociarem o salário.'] },
      { prompt: 'بدون أن نحاول، لن ننجح.', answers: ['Sem tentarmos, não vamos conseguir.'] },
      { prompt: 'من الأفضل أن نقرر معًا.', answers: ['É melhor decidirmos juntos.'] },
      { prompt: 'لكي يسافروا، يحتاجون جوازات سفر.', answers: ['Para eles viajarem, precisam de passaporte.'] },
      { prompt: 'قبل أن يبدأوا، تأكدوا من كل شيء.', answers: ['Antes de começarem, verificaram tudo.'] },
      { prompt: 'هناك أسباب وجيهة لاستراحتنا.', answers: ['Há boas razões para descansarmos.'] },
      { prompt: 'بعد أن نأكل، سنتحدث.', answers: ['Após comermos, vamos conversar.'] },
      { prompt: 'لكي يتقدموا في الحياة، يحتاجون التعليم.', answers: ['Para eles progredirem na vida, precisam de educação.'] },
      { prompt: 'من المهم أن تتعلموا احترام الآخرين.', answers: ['É importante vocês aprenderem a respeitar os outros.'] },
      { prompt: 'بدون أن يتواصلوا، لن يحلوا المشكلة.', answers: ['Sem se comunicarem, não vão resolver o problema.'] },
      { prompt: 'قبل أن نقرر، نحتاج مزيدًا من المعلومات.', answers: ['Antes de decidirmos, precisamos de mais informações.'] },
      { prompt: 'الهدف هو أن يحقق الجميع النجاح.', answers: ['O objetivo é todos alcançarem o sucesso.'] },
    ]}],
  },

  {
    id: 'adv-ar-3',
    language: 'ar',
    stage: 'Avançado',
    title: 'التعبيرات الاصطلاحية البرازيلية (Expressões Idiomáticas)',
    subtitle: 'تعلم التعبيرات الاصطلاحية الشائعة في البرتغالية البرازيلية',
    theory: `التعبيرات الاصطلاحية (Expressões Idiomáticas) هي عبارات لا يمكن فهمها من معنى كلماتها الحرفي.

## تعبيرات شائعة جدًا

| التعبير البرتغالي         | المعنى الحرفي          | المعنى الحقيقي                  |
|---------------------------|------------------------|----------------------------------|
| estar duro/liso           | يكون قاسيًا/ناعمًا    | لا يملك مالًا (مفلس)            |
| não tem jeito             | لا يوجد طريقة         | لا حل / لا فائدة                |
| que saudade!              | أي شوق!               | كم اشتقت!                       |
| dar um jeitinho           | إيجاد طريقة صغيرة    | التحايل / إيجاد حل              |
| ficar de olho             | البقاء بعين           | مراقبة / الانتباه               |
| passar a perna            | تمرير الرجل           | خداع / الغش                     |
| não é mole não            | ليس ناعمًا            | ليس سهلًا                       |
| todo mundo                | كل العالم             | الجميع                          |
| fazer vista grossa        | عمل رؤية خشنة        | تجاهل عن عمد                   |
| bater papo                | ضرب المحادثة          | الدردشة / الثرثرة               |
| pé frio                   | قدم باردة             | شخص يجلب الحظ السيئ             |
| estar na mão              | في اليد               | في متناول اليد / متاح           |

## تعبيرات المشاعر

| التعبير                   | المعنى                              |
|---------------------------|--------------------------------------|
| ficar com o coração na mão| الخوف الشديد / التوتر                |
| ficar de boca aberta      | الدهشة والاستغراب                    |
| perder a cabeça           | فقدان الأعصاب                        |
| dar nó nos dedos          | التلعثم/الارتباك عند الكلام أو العمل |
| segurar as pontas         | الصبر والتحمل في وضع صعب             |

⚠️ خطأ شائع: لا تترجم التعبيرات الاصطلاحية حرفيًا. مثلًا "dar um jeitinho" لا تعني فعليًا "إعطاء طريقة صغيرة"، بل "التحايل بذكاء لإيجاد حل" — وهي جزء من الثقافة البرازيلية المعروفة بـ"jeitinho brasileiro".

💡 نصيحة: أفضل طريقة لتعلم التعبيرات الاصطلاحية هي حفظها كوحدة كاملة مع سياقها، لا ترجمة كل كلمة على حدة — فهي كالأمثال العربية ("ضرب عصفورين بحجر واحد") التي لا تُفهم من مجموع كلماتها.`,
    exercises: [{ sentences: [
      { prompt: 'أنا مفلس تمامًا هذا الشهر.', answers: ['Estou duro esse mês.', 'Estou liso esse mês.'] },
      { prompt: 'لا فائدة، هذا الجهاز انتهى.', answers: ['Não tem jeito, esse aparelho acabou.'] },
      { prompt: 'كم اشتقت إليك!', answers: ['Que saudade de você!'] },
      { prompt: 'سنجد حلًا ما، لا تقلق.', answers: ['A gente dá um jeitinho, não se preocupa.'] },
      { prompt: 'خذ بالك من حقيبتك في المترو.', answers: ['Fica de olho na sua bolsa no metrô.'] },
      { prompt: 'هو خدعني وأخذ مالي.', answers: ['Ele passou a perna em mim e ficou com meu dinheiro.'] },
      { prompt: 'تعلم البرتغالية ليس سهلًا.', answers: ['Aprender português não é mole não.'] },
      { prompt: 'الجميع يعرف هذا المطعم.', answers: ['Todo mundo conhece esse restaurante.'] },
      { prompt: 'المدير تجاهل التأخير.', answers: ['O chefe fez vista grossa pro atraso.'] },
      { prompt: 'جلسنا نتحدث ساعات.', answers: ['A gente ficou batendo papo por horas.'] },
      { prompt: 'لا تدعوه يأتي للمباراة، إنه يجلب الحظ السيئ.', answers: ['Não deixa ele vir pro jogo, ele é pé frio.'] },
      { prompt: 'كل ما تحتاجه متاح في السوبرماركت.', answers: ['Tudo que você precisa está na mão no supermercado.'] },
      { prompt: 'فقدت أعصابي في حادثة السيارة.', answers: ['Perdi a cabeça no acidente de carro.'] },
      { prompt: 'بقيت مندهشًا من العرض.', answers: ['Fiquei de boca aberta com o show.'] },
      { prompt: 'قلبي يكاد يقف من الخوف.', answers: ['Meu coração ficou na mão de tanto medo.'] },
      { prompt: 'هذا الكلب يجلب الحظ السيئ دائمًا.', answers: ['Esse cachorro é muito pé frio.'] },
      { prompt: 'أنا مشتاقة جدًا لوالدتي.', answers: ['Estou com muita saudade da minha mãe.'] },
      { prompt: 'نحن سنجد حلًا كما هو عادتنا.', answers: ['A gente dá um jeitinho como sempre.'] },
      { prompt: 'لا فائدة من الجدال معه.', answers: ['Não tem jeito de discutir com ele.'] },
      { prompt: 'هم دردشوا طوال الليل.', answers: ['Eles ficaram batendo papo a noite toda.'] },
    ]}],
  },

  {
    id: 'adv-ar-4',
    language: 'ar',
    stage: 'Avançado',
    title: 'اللغة الرسمية مقابل العامية (Registro Formal vs Coloquial)',
    subtitle: 'تعلم الفروقات بين اللغة الرسمية والعامية في البرتغالية البرازيلية',
    theory: `البرتغالية البرازيلية لها مستويات مختلفة: رسمي (formal) وعامي (coloquial).

## الفروقات الأساسية

### الضمائر

| الرسمية           | العامية                | المعنى     |
|-------------------|------------------------|------------|
| Tu fazes          | Você faz               | أنت تفعل   |
| Vós fazeis        | Vocês fazem            | أنتم تفعلون|
| Nós fazemos       | A gente faz            | نحن نفعل   |

### الأفعال والتراكيب

| الرسمية                    | العامية                   | المعنى              |
|----------------------------|---------------------------|---------------------|
| Estou cansado.             | Tô cansado.               | أنا تعبان.          |
| Vou fazer isso.            | Vou fazer isso.           | سأفعل هذا.          |
| Não sei onde está.         | Num sei onde tá.          | لا أعرف أين هو.     |
| Está muito bom.            | Tá muito bom.             | إنه جيد جدًا.       |

### المفردات

| الرسمية         | العامية          | المعنى       |
|-----------------|------------------|--------------|
| criança         | moleque / guri   | طفل          |
| carro           | carrão / carro   | سيارة        |
| muito           | demais / pra caramba | كثيرًا   |
| bom             | maneiro / gente fina | جيد / رائع|
| bonito          | chique / top     | جميل         |

### السياقات

| السياق            | المستوى المناسب |
|-------------------|-----------------|
| مقابلة عمل        | رسمي            |
| رسالة رسمية       | رسمي            |
| مع الأصدقاء       | عامي            |
| رسائل واتساب      | عامي            |

## ظاهرة لغوية: حذف الحروف في العامية
البرتغالية البرازيلية المحكية تحذف أحرفًا كثيرة لتسهيل النطق السريع — ظاهرة مشابهة للعامية المصرية أو الشامية التي تختصر الفصحى. أشهر مثال هو "está" التي تتحول إلى "tá"، و"não" التي تتحول أحيانًا إلى "num" قبل الفعل.

⚠️ خطأ شائع: لا تستخدم الصيغ العامية (tá, num sei, pra) في الكتابة الرسمية أو الرسائل الإلكترونية المهنية — فهذا يُعتبر ركيكًا وغير مهنيًا، حتى لو كانت مفهومة تمامًا في الحديث الشفهي.

💡 نصيحة: كمتعلم، ابدأ بالصيغ الرسمية لأنها تُفهم في كل السياقات، ثم أضف العامية تدريجيًا للتواصل الطبيعي مع البرازيليين في الحياة اليومية — معرفة الفرق بين السجلين أهم من اختيار واحد فقط.`,
    exercises: [{ sentences: [
      { prompt: 'كيف حالك؟ (رسمي)', answers: ['Como o senhor está?', 'Como a senhora está?'] },
      { prompt: 'كيف حالك؟ (عامي)', answers: ['Como você tá?', 'E aí, tudo bem?'] },
      { prompt: 'أنا لا أعرف. (رسمي)', answers: ['Eu não sei.', 'Não sei.'] },
      { prompt: 'أنا لا أعرف. (عامي)', answers: ['Num sei.', 'Não sei não.'] },
      { prompt: 'نحن سنذهب غدًا. (رسمي)', answers: ['Nós iremos amanhã.', 'Nós vamos ir amanhã.'] },
      { prompt: 'نحن سنذهب غدًا. (عامي)', answers: ['A gente vai amanhã.'] },
      { prompt: 'هذا الطعام لذيذ جدًا. (رسمي)', answers: ['Esta comida está muito boa.'] },
      { prompt: 'هذا الطعام لذيذ جدًا. (عامي)', answers: ['Essa comida tá boa demais!', 'Essa comida tá uma delícia!'] },
      { prompt: 'إنه تعبان. (رسمي)', answers: ['Ele está cansado.'] },
      { prompt: 'إنه تعبان. (عامي)', answers: ['Ele tá cansado.'] },
      { prompt: 'أود تقديم طلب. (رسمي)', answers: ['Gostaria de fazer uma solicitação.'] },
      { prompt: 'اعطيني. (عامي)', answers: ['Me dá.', 'Me passa.'] },
      { prompt: 'هل يمكنك مساعدتي؟ (رسمي)', answers: ['O senhor poderia me ajudar?', 'Poderia me ajudar?'] },
      { prompt: 'هل يمكنك مساعدتي؟ (عامي)', answers: ['Você pode me ajudar?', 'Me ajuda aí?'] },
      { prompt: 'الطفل كان يلعب. (رسمي)', answers: ['A criança estava brincando.'] },
      { prompt: 'الطفل كان يلعب. (عامي)', answers: ['O moleque tava brincando.', 'O guri tava brincando.'] },
      { prompt: 'هذا رائع جدًا. (رسمي)', answers: ['Isto é muito bom.', 'Isso é excelente.'] },
      { prompt: 'هذا رائع جدًا. (عامي)', answers: ['Isso é maneiro demais!', 'Isso é top!'] },
      { prompt: 'أنا تعبان. (رسمي)', answers: ['Estou cansado.'] },
      { prompt: 'أنا تعبان. (عامي)', answers: ['Tô cansado.', 'Tô destruído.'] },
    ]}],
  },

  // ─── VARIADOS ────────────────────────────────────────────────────
  {
    id: 'var-ar-1',
    language: 'ar',
    stage: 'Variados',
    title: '100 جملة من الحياة اليومية',
    subtitle: 'مشتريات، مطعم، مواصلات، عمل — 100 جملة يومية عملية',
    theory: `هذا الوحدة تحتوي على 100 جملة من الحياة اليومية في البرازيل.

## المواضيع

| الموضوع         | عدد الجمل |
|-----------------|-----------|
| التسوق          | 25        |
| المطعم          | 25        |
| المواصلات       | 25        |
| العمل           | 25        |

## نصائح

- في المطعم: يقول البرازيليون "uma mesa pra dois" (طاولة لشخصين)
- في المواصلات: "metrô" هو المترو و"ônibus" هو الأتوبيس
- في العمل: "reunião" هي الاجتماع و"prazo" هو الموعد النهائي

💡 نصيحة: في البرازيل، عبارة "por favor" (من فضلك) لا تُستخدم بقدر "obrigado/a" (شكرًا)؛ غالبًا يكفي نغمة الصوت المهذبة + الفعل المباشر مثل "Me dá a conta?" لتبدو مهذبًا بشكل طبيعي.

⚠️ خطأ شائع: لا تترجم "من فضلك" حرفيًا في بداية كل جملة كما في العربية؛ البرازيليون يضعونها غالبًا في نهاية الطلب: "A conta, **por favor**." وليس في البداية.

## المفردات الأساسية

• custar — يكلّف (السعر)
• experimentar — يجرّب
• devolver — يُرجع
• desconto — خصم
• cardápio — قائمة الطعام
• recomendar — ينصح / يوصي
• cobrir — يغطّي (دوامًا)
• reserva — حجز
• estacionamento — موقف سيارات
• folga — يوم إجازة
• salário — راتب
• endereço — عنوان`,
    exercises: [{ sentences: [
      // التسوق
      { prompt: 'كم ثمن هذا؟', answers: ['Quanto custa isso?', 'Qual o preço disso?'] },
      { prompt: 'هل يوجد هذا بمقاس أكبر؟', answers: ['Tem esse num tamanho maior?'] },
      { prompt: 'أريد أن أجرب هذا القميص.', answers: ['Quero experimentar essa camisa.'] },
      { prompt: 'أين غرفة القياس؟', answers: ['Onde fica o provador?'] },
      { prompt: 'هل يمكنني الدفع ببطاقة الائتمان؟', answers: ['Posso pagar no cartão?'] },
      { prompt: 'هل يوجد خصم؟', answers: ['Tem desconto?'] },
      { prompt: 'أريد إرجاع هذه البضاعة.', answers: ['Quero devolver essa mercadoria.'] },
      { prompt: 'هل يوجد هذا باللون الأسود؟', answers: ['Tem esse na cor preta?'] },
      { prompt: 'كم سعر هذا في الكيلو؟', answers: ['Quanto é o quilo disso?'] },
      { prompt: 'أريد نصف كيلو من اللحم.', answers: ['Quero meio quilo de carne.'] },
      { prompt: 'أين قسم الملابس؟', answers: ['Onde fica a seção de roupas?'] },
      { prompt: 'هل هذا المنتج في العرض؟', answers: ['Esse produto está em promoção?'] },
      { prompt: 'يمكنني تقسيط الدفع؟', answers: ['Posso parcelar?'] },
      { prompt: 'هل تقبلون الدفع نقدًا؟', answers: ['Vocês aceitam dinheiro?'] },
      { prompt: 'أعطني الفاتورة من فضلك.', answers: ['Me dá a nota fiscal, por favor.'] },
      { prompt: 'هل هذا المنتج أصلي؟', answers: ['Esse produto é original?'] },
      { prompt: 'أريد أن أشتري هدية.', answers: ['Quero comprar um presente.'] },
      { prompt: 'هل يمكنكم تغليفه كهدية؟', answers: ['Vocês podem embrulhar como presente?'] },
      { prompt: 'أين الصندوق؟', answers: ['Onde fica o caixa?'] },
      { prompt: 'هذا غالٍ جدًا بالنسبة لي.', answers: ['Tá muito caro pra mim.'] },
      { prompt: 'هل هذا المنتج تحت الضمان؟', answers: ['Esse produto tem garantia?'] },
      { prompt: 'أريد شراء شيء للمنزل.', answers: ['Quero comprar alguma coisa pra casa.'] },
      { prompt: 'هل توصلون للمنازل؟', answers: ['Vocês entregam em casa?'] },
      { prompt: 'ما هو آخر موعد للإرجاع؟', answers: ['Qual é o prazo para devolução?'] },
      { prompt: 'هل هذا المنتج مصنوع في البرازيل؟', answers: ['Esse produto é fabricado no Brasil?'] },
      // المطعم
      { prompt: 'أريد طاولة لشخصين.', answers: ['Uma mesa pra dois, por favor.'] },
      { prompt: 'قائمة الطعام من فضلك.', answers: ['O cardápio, por favor.'] },
      { prompt: 'ماذا توصي أن آكل؟', answers: ['O que você recomenda?'] },
      { prompt: 'أريد اللحم جيد النضج.', answers: ['Quero a carne bem passada.'] },
      { prompt: 'هل الطعام يحتوي على جلوتين؟', answers: ['Tem glúten nessa comida?'] },
      { prompt: 'أنا نباتي، ماذا تقترحون؟', answers: ['Sou vegetariano, o que vocês têm?'] },
      { prompt: 'أريد الفاتورة من فضلك.', answers: ['A conta, por favor.'] },
      { prompt: 'هل يوجد بوفيه اليوم؟', answers: ['Tem bufê hoje?'] },
      { prompt: 'أريد ماء باردًا بدون غاز.', answers: ['Quero água gelada sem gás.'] },
      { prompt: 'الطعام كان لذيذًا جدًا.', answers: ['A comida estava uma delícia.'] },
      { prompt: 'هل يوجد حلوى خاصة اليوم؟', answers: ['Tem sobremesa especial hoje?'] },
      { prompt: 'كم وقت الانتظار؟', answers: ['Qual é o tempo de espera?'] },
      { prompt: 'أريد تناول الغداء هنا.', answers: ['Quero almoçar aqui.'] },
      { prompt: 'هل يمكنني الجلوس بالخارج؟', answers: ['Posso sentar do lado de fora?'] },
      { prompt: 'أريد الطلب لأخذه معي.', answers: ['Quero pedir pra levar.'] },
      { prompt: 'هل يمكنني حجز طاولة؟', answers: ['Posso fazer uma reserva?'] },
      { prompt: 'الطعام تأخر كثيرًا.', answers: ['A comida demorou muito.'] },
      { prompt: 'هل يوجد موقف للسيارات؟', answers: ['Tem estacionamento?'] },
      { prompt: 'أريد شيئًا خفيفًا.', answers: ['Quero algo leve.'] },
      { prompt: 'هل تقبلون الدفع ببطاقة الائتمان؟', answers: ['Aceitam cartão de crédito?'] },
      { prompt: 'أريد إضافة بقشيش.', answers: ['Quero adicionar a gorjeta.'] },
      { prompt: 'هذا الطبق لا يحتوي على لحم خنزير؟', answers: ['Esse prato não tem carne de porco?'] },
      { prompt: 'هل يوجد عرض خاص اليوم؟', answers: ['Tem alguma promoção hoje?'] },
      { prompt: 'الطعام ليس ما طلبته.', answers: ['A comida não é o que eu pedi.'] },
      { prompt: 'أريد تغيير طلبي.', answers: ['Quero trocar o meu pedido.'] },
      // المواصلات
      { prompt: 'أين محطة المترو؟', answers: ['Onde fica a estação de metrô?'] },
      { prompt: 'كم ثمن تذكرة الأتوبيس؟', answers: ['Quanto custa a passagem de ônibus?'] },
      { prompt: 'هل هذا الأتوبيس يذهب لوسط المدينة؟', answers: ['Esse ônibus vai pro centro?'] },
      { prompt: 'أين أنزل للذهاب للمطار؟', answers: ['Onde eu desço pra ir pro aeroporto?'] },
      { prompt: 'أريد سيارة أجرة من فضلك.', answers: ['Quero um táxi, por favor.'] },
      { prompt: 'هل يمكنك استدعاء أوبر؟', answers: ['Você pode chamar um Uber?'] },
      { prompt: 'كم مسافة من هنا للفندق؟', answers: ['Qual a distância daqui até o hotel?'] },
      { prompt: 'هل يوجد تأخير في المترو اليوم؟', answers: ['Tem atraso no metrô hoje?'] },
      { prompt: 'أريد تذكرة ذهابًا وإيابًا.', answers: ['Quero uma passagem de ida e volta.'] },
      { prompt: 'في أي ساعة يغلق المترو؟', answers: ['A que horas o metrô fecha?'] },
      { prompt: 'هذا الطريق مزدحم جدًا.', answers: ['Essa estrada está muito congestionada.'] },
      { prompt: 'أين يمكنني إيجاد سيارة للإيجار؟', answers: ['Onde posso alugar um carro?'] },
      { prompt: 'كم تكلف رحلة الأوبر لهذا العنوان؟', answers: ['Quanto custa o Uber até esse endereço?'] },
      { prompt: 'هل يوجد دراجة للإيجار هنا؟', answers: ['Tem bicicleta pra alugar aqui?'] },
      { prompt: 'أريد الذهاب لهذا العنوان.', answers: ['Quero ir para esse endereço.'] },
      { prompt: 'هل يمكنني الدفع ببطاقة في الأتوبيس؟', answers: ['Posso pagar com cartão no ônibus?'] },
      { prompt: 'الحافلة فاتتني.', answers: ['Perdi o ônibus.'] },
      { prompt: 'في أي رصيف يغادر القطار؟', answers: ['De qual plataforma parte o trem?'] },
      { prompt: 'أريد مقعدًا بجانب النافذة.', answers: ['Quero um assento perto da janela.'] },
      { prompt: 'هل هذا الطريق الأسرع؟', answers: ['Esse é o caminho mais rápido?'] },
      { prompt: 'أين أجد تاكسي الليلة؟', answers: ['Onde acho um táxi à noite?'] },
      { prompt: 'في أي وقت تأتي الحافلة التالية؟', answers: ['A que horas chega o próximo ônibus?'] },
      { prompt: 'هل هذا الطريق يمر من الشاطئ؟', answers: ['Esse caminho passa pela praia?'] },
      { prompt: 'أريد التنقل بالدراجة في المدينة.', answers: ['Quero me locomover de bicicleta pela cidade.'] },
      { prompt: 'الحركة المرورية شديدة اليوم.', answers: ['O trânsito tá muito pesado hoje.'] },
      // العمل
      { prompt: 'الاجتماع سيبدأ في الساعة التاسعة.', answers: ['A reunião começa às nove.'] },
      { prompt: 'هل يمكنك إرسال التقرير بالبريد الإلكتروني؟', answers: ['Você pode mandar o relatório por e-mail?'] },
      { prompt: 'الموعد النهائي هو الجمعة.', answers: ['O prazo é sexta-feira.'] },
      { prompt: 'أريد التحدث مع المدير.', answers: ['Quero falar com o gerente.'] },
      { prompt: 'أنا في إجازة الأسبوع القادم.', answers: ['Estou de férias semana que vem.'] },
      { prompt: 'هل يمكنك تغطية دوامي؟', answers: ['Você pode cobrir meu turno?'] },
      { prompt: 'أحتاج مزيدًا من الوقت لإنهاء المشروع.', answers: ['Preciso de mais tempo pra terminar o projeto.'] },
      { prompt: 'الاجتماع ألغي.', answers: ['A reunião foi cancelada.'] },
      { prompt: 'أريد تقديم طلب إجازة.', answers: ['Quero pedir um dia de folga.'] },
      { prompt: 'هل يمكنني العمل من المنزل اليوم؟', answers: ['Posso trabalhar de casa hoje?'] },
      { prompt: 'الراتب يُدفع كل أول من الشهر.', answers: ['O salário cai todo primeiro do mês.'] },
      { prompt: 'أحتاج مساعدة في هذه المهمة.', answers: ['Preciso de ajuda nessa tarefa.'] },
      { prompt: 'هل يوجد تدريب للموظفين الجدد؟', answers: ['Tem treinamento para novos funcionários?'] },
      { prompt: 'يجب أن نلتزم بالموعد النهائي.', answers: ['A gente precisa respeitar o prazo.'] },
      { prompt: 'أريد جدولة اجتماعًا.', answers: ['Quero marcar uma reunião.'] },
      { prompt: 'هل أنت متاح يوم الثلاثاء؟', answers: ['Você está disponível na terça?'] },
      { prompt: 'أنا أعمل منذ الساعة السابعة صباحًا.', answers: ['Tô trabalhando desde as sete da manhã.'] },
      { prompt: 'هذا المشروع مهم جدًا للشركة.', answers: ['Esse projeto é muito importante pra empresa.'] },
      { prompt: 'أحتاج توقيعك على هذا العقد.', answers: ['Preciso da sua assinatura nesse contrato.'] },
      { prompt: 'العمل اليوم كان شاقًا.', answers: ['O trabalho hoje foi puxado.'] },
    ]}],
  },

  {
    id: 'var-ar-2',
    language: 'ar',
    stage: 'Variados',
    title: '100 جملة متوسطة المستوى',
    subtitle: 'آراء، مواقف اجتماعية، أوصاف — 100 جملة للمستوى المتوسط',
    theory: `هذه الوحدة تتضمن جملًا للتعبير عن الآراء والمشاعر والمواقف الاجتماعية.

## المواضيع

| الموضوع                    | عدد الجمل |
|----------------------------|-----------|
| التعبير عن الآراء          | 25        |
| المواقف الاجتماعية         | 25        |
| الأوصاف والمقارنات         | 25        |
| المشاعر والحالة النفسية    | 25        |

## تعابير مفيدة

| العربية              | البرتغالية                |
|----------------------|---------------------------|
| في رأيي              | Na minha opinião          |
| أعتقد أن             | Acho que                  |
| من وجهة نظري         | Do meu ponto de vista     |
| لا أوافق             | Discordo                  |
| أوافق تمامًا         | Concordo totalmente       |

## المقارنة: قواعد سريعة
- **mais...que/do que** = أكثر من (للتفوّق): Ela é mais alta **que** ele.
- **menos...que/do que** = أقل من: Esse é menos caro **que** aquele.
- **tão...quanto** = بقدر / مثل: Ele é tão inteligente **quanto** o irmão.

💡 نصيحة: "do que" و"que" يمكن استخدامهما بالتبادل تقريبًا بعد "mais/menos"، لكن "do que" أكثر شيوعًا في الكتابة الدقيقة، خاصة قبل الأفعال: "Ele correu mais **do que** eu esperava."

⚠️ خطأ شائع: لا تستخدم "como" بمعنى "من" في المقارنة. الخطأ: "mais alto **como** ele". الصحيح: "mais alto **que/do que** ele".

## المفردات الأساسية

• concordar — يوافق
• discordar — لا يوافق
• polêmica — جدل
• apresentar — يقدّم (شخصًا)
• convidado — مدعو
• orgulhoso — فخور
• chateado — زعلان
• ansioso — قلق
• aliviado — مرتاح
• grato — ممتنّ
• variado — متنوّع`,
    exercises: [{ sentences: [
      // الآراء
      { prompt: 'في رأيي، التعليم هو أهم شيء.', answers: ['Na minha opinião, a educação é o mais importante.'] },
      { prompt: 'أعتقد أن البرازيل بلد جميل.', answers: ['Acho que o Brasil é um país lindo.'] },
      { prompt: 'لا أوافق على هذا القرار.', answers: ['Discordo dessa decisão.'] },
      { prompt: 'من وجهة نظري، الأمر ليس بالغ التعقيد.', answers: ['Do meu ponto de vista, a situação não é tão complicada.'] },
      { prompt: 'أعتقد أنك محق في هذا.', answers: ['Acho que você tem razão nisso.'] },
      { prompt: 'هذا الفيلم ليس بتلك الجودة كما توقعت.', answers: ['Esse filme não é tão bom quanto eu esperava.'] },
      { prompt: 'أوافق تمامًا على ما قلته.', answers: ['Concordo totalmente com o que você falou.'] },
      { prompt: 'هذا الموضوع يثير جدلًا كبيرًا.', answers: ['Esse assunto gera muita polêmica.'] },
      { prompt: 'أعتقد أن الحياة في المدينة صعبة.', answers: ['Acho que a vida na cidade é difícil.'] },
      { prompt: 'لا أعتقد أن هذه الفكرة ستنجح.', answers: ['Não acho que essa ideia vai dar certo.'] },
      { prompt: 'هذا القرار سيؤثر على الجميع.', answers: ['Essa decisão vai afetar todo mundo.'] },
      { prompt: 'أرى أن الوضع يمكن تحسينه.', answers: ['Vejo que a situação pode melhorar.'] },
      { prompt: 'هذه مسألة شخصية.', answers: ['É uma questão pessoal.'] },
      { prompt: 'أعتقد أننا نحتاج مزيدًا من الحوار.', answers: ['Acho que precisamos de mais diálogo.'] },
      { prompt: 'لا يهمني ما يقوله الناس.', answers: ['Não me importo com o que as pessoas falam.'] },
      { prompt: 'من المهم احترام اختلاف الآراء.', answers: ['É importante respeitar a diferença de opiniões.'] },
      { prompt: 'أعتقد أن المشكلة أعمق من ذلك.', answers: ['Acho que o problema é mais profundo que isso.'] },
      { prompt: 'هذا يعتمد على زاوية النظر.', answers: ['Depende do ponto de vista.'] },
      { prompt: 'أنا لست متأكدًا من هذا.', answers: ['Não tenho certeza sobre isso.'] },
      { prompt: 'لكل شخص رأيه الخاص.', answers: ['Cada um tem a sua própria opinião.'] },
      { prompt: 'في رأيي، يجب أن نكون أكثر تسامحًا.', answers: ['Na minha opinião, precisamos ser mais tolerantes.'] },
      { prompt: 'أعتقد أن هذا الأمر يستحق التفكير.', answers: ['Acho que esse assunto vale a pena pensar.'] },
      { prompt: 'لا أرى فائدة من هذا الجدال.', answers: ['Não vejo utilidade nessa discussão.'] },
      { prompt: 'هذا الموضوع معقد جدًا.', answers: ['Esse assunto é muito complexo.'] },
      { prompt: 'أوافق جزئيًا على ما قلته.', answers: ['Concordo parcialmente com o que você falou.'] },
      // المواقف الاجتماعية
      { prompt: 'كيف حالك؟ منذ زمان لم أرك.', answers: ['Como você está? Faz tempo que não te vejo.'] },
      { prompt: 'كنت أفكر بك.', answers: ['Estava pensando em você.'] },
      { prompt: 'يسعدني التعرف عليك.', answers: ['Prazer em te conhecer.'] },
      { prompt: 'هل يمكنك أن تقدمني لأصدقائك؟', answers: ['Você pode me apresentar aos seus amigos?'] },
      { prompt: 'نسعد بزيارتكم في أي وقت.', answers: ['Vocês são sempre bem-vindos.'] },
      { prompt: 'أتمنى لك يومًا جيدًا.', answers: ['Tenha um ótimo dia.'] },
      { prompt: 'نأسف جدًا لما حدث.', answers: ['Sentimos muito pelo que aconteceu.'] },
      { prompt: 'ألف مبروك على الزواج.', answers: ['Parabéns pelo casamento!'] },
      { prompt: 'كيف سارت حفلة العيد الميلاد؟', answers: ['Como foi a festa de aniversário?'] },
      { prompt: 'هل حضرت حفلة الأمس؟', answers: ['Você foi à festa ontem?'] },
      { prompt: 'أدعوك لتناول العشاء عندي.', answers: ['Você está convidado para jantar na minha casa.'] },
      { prompt: 'يسعدني الانضمام إليكم.', answers: ['Vai ser um prazer me juntar a vocês.'] },
      { prompt: 'أريد أن أطرح عليك سؤالًا.', answers: ['Quero te fazer uma pergunta.'] },
      { prompt: 'هل أنت بخير؟ تبدو متعبًا.', answers: ['Você está bem? Parece cansado.'] },
      { prompt: 'شكرًا جزيلًا على مساعدتك.', answers: ['Muito obrigado pela sua ajuda.'] },
      { prompt: 'لا شكر على واجب.', answers: ['De nada.', 'Por nada.'] },
      { prompt: 'آسف على التأخير.', answers: ['Desculpa o atraso.'] },
      { prompt: 'تفضل، اجلس.', answers: ['Pode sentar.', 'Fique à vontade.'] },
      { prompt: 'هل تريد شيئًا للشرب؟', answers: ['Quer beber alguma coisa?'] },
      { prompt: 'كنا نتحدث عنك بالأمس.', answers: ['A gente estava falando sobre você ontem.'] },
      { prompt: 'كيف حال عائلتك؟', answers: ['Como está sua família?'] },
      { prompt: 'أخبرني عن نفسك.', answers: ['Me conta sobre você.'] },
      { prompt: 'هل تتذكرني؟ تعرفنا في الحفلة.', answers: ['Você se lembra de mim? A gente se conheceu na festa.'] },
      { prompt: 'من الجيد رؤيتك مجددًا.', answers: ['É bom te ver de novo.'] },
      { prompt: 'أتمنى أن نلتقي قريبًا.', answers: ['Espero que a gente se encontre em breve.'] },
      // الأوصاف والمقارنات
      { prompt: 'البرازيل أكبر من الأرجنتين.', answers: ['O Brasil é maior que a Argentina.'] },
      { prompt: 'هذا المنزل أقدم من منزلنا.', answers: ['Essa casa é mais antiga que a nossa.'] },
      { prompt: 'هي أطول منه.', answers: ['Ela é mais alta que ele.'] },
      { prompt: 'ريو دي جانيرو أكثر شهرة من بيلو هوريزونتي.', answers: ['Rio de Janeiro é mais famoso que Belo Horizonte.'] },
      { prompt: 'هذا الكتاب أصعب من الأول.', answers: ['Esse livro é mais difícil que o primeiro.'] },
      { prompt: 'الصيف في البرازيل حار جدًا.', answers: ['O verão no Brasil é muito quente.'] },
      { prompt: 'المدينة أصخب من القرية.', answers: ['A cidade é mais barulhenta que o interior.'] },
      { prompt: 'هذا المطعم أرخص من ذاك.', answers: ['Esse restaurante é mais barato que aquele.'] },
      { prompt: 'البرتغالية أسهل للعرب مما يظنون.', answers: ['O português é mais fácil para os árabes do que eles pensam.'] },
      { prompt: 'الطقس اليوم أجمل من أمس.', answers: ['O tempo hoje está mais bonito que ontem.'] },
      { prompt: 'هذه السيارة أسرع من تلك.', answers: ['Esse carro é mais rápido do que aquele.'] },
      { prompt: 'هذا المنتج أفضل جودةً.', answers: ['Esse produto tem melhor qualidade.'] },
      { prompt: 'الشاطئ هنا أجمل من أي مكان رأيته.', answers: ['A praia aqui é mais bonita do que qualquer lugar que já vi.'] },
      { prompt: 'هذا الكمبيوتر أبطأ من كمبيوتري.', answers: ['Esse computador é mais lento que o meu.'] },
      { prompt: 'المنزل الجديد أقرب للعمل.', answers: ['A casa nova fica mais perto do trabalho.'] },
      { prompt: 'الطعام البرازيلي متنوع جدًا.', answers: ['A comida brasileira é muito variada.'] },
      { prompt: 'هذا المسلسل أطول من المسلسل الأول.', answers: ['Essa série é mais longa do que a primeira.'] },
      { prompt: 'المدرسة البلدية أكثر قربًا من بيتنا.', answers: ['A escola pública fica mais perto da nossa casa.'] },
      { prompt: 'هذه الوصفة أسهل من تلك.', answers: ['Essa receita é mais fácil do que aquela.'] },
      { prompt: 'هو أكثر هدوءًا من أخيه.', answers: ['Ele é mais calmo do que o irmão dele.'] },
      { prompt: 'البرتغالية البرازيلية مختلفة عن البرتغالية الأوروبية.', answers: ['O português brasileiro é diferente do português europeu.'] },
      { prompt: 'هذه المدينة أنظف من تلك.', answers: ['Essa cidade é mais limpa do que aquela.'] },
      { prompt: 'الشتاء في الجنوب أبرد من الشمال.', answers: ['O inverno no Sul é mais frio do que no Norte.'] },
      { prompt: 'هذا الفيلم أكثر إثارة مما توقعت.', answers: ['Esse filme é mais emocionante do que eu esperava.'] },
      { prompt: 'هذا الطريق أطول لكنه أجمل.', answers: ['Esse caminho é mais longo, mas é mais bonito.'] },
      // المشاعر
      { prompt: 'أنا سعيد جدًا اليوم.', answers: ['Estou muito feliz hoje.'] },
      { prompt: 'أشعر بالقلق حيال هذا الموضوع.', answers: ['Estou preocupado com esse assunto.'] },
      { prompt: 'أنا متحمس للسفر للبرازيل.', answers: ['Estou animado pra viajar pro Brasil.'] },
      { prompt: 'شعرت بالإحراج في تلك اللحظة.', answers: ['Me senti envergonhado naquele momento.'] },
      { prompt: 'أنا خائف من هذا الامتحان.', answers: ['Estou com medo dessa prova.'] },
      { prompt: 'أشعر بالفخر بما أنجزت.', answers: ['Me sinto orgulhoso do que conquistei.'] },
      { prompt: 'هذا الخبر أفرحني كثيرًا.', answers: ['Essa notícia me deixou muito feliz.'] },
      { prompt: 'أنا زعلان من ما حدث.', answers: ['Estou chateado com o que aconteceu.'] },
      { prompt: 'أشعر بالضياع في هذه المدينة الكبيرة.', answers: ['Me sinto perdido nessa cidade grande.'] },
      { prompt: 'هذا الموقف جعلني عصبيًا.', answers: ['Essa situação me deixou nervoso.'] },
      { prompt: 'أنا سعيد بقراري.', answers: ['Estou feliz com a minha decisão.'] },
      { prompt: 'أشعر بالوحدة أحيانًا.', answers: ['Me sinto sozinho às vezes.'] },
      { prompt: 'الخبر جعلني أبكي من الفرح.', answers: ['A notícia me fez chorar de alegria.'] },
      { prompt: 'أنا مرتاح بعد الإجازة.', answers: ['Estou descansado depois das férias.'] },
      { prompt: 'أشعر بالتعب من كثرة العمل.', answers: ['Estou cansado de tanto trabalho.'] },
      { prompt: 'هذا الوضع يجعلني قلقًا.', answers: ['Essa situação me deixa ansioso.'] },
      { prompt: 'أنا ممتنّ لكل شيء لدي.', answers: ['Sou grato por tudo que tenho.'] },
      { prompt: 'شعرت بالدفء عند استقبالهم.', answers: ['Me senti acolhido quando eles me receberam.'] },
      { prompt: 'هذا الموسيقى يريحني كثيرًا.', answers: ['Essa música me relaxa muito.'] },
      { prompt: 'أنا متحمس لبدء مشروع جديد.', answers: ['Estou animado pra começar um projeto novo.'] },
      { prompt: 'الخسارة أحزنتني كثيرًا.', answers: ['A derrota me deixou muito triste.'] },
      { prompt: 'أشعر بالارتياح بعد الحديث معك.', answers: ['Me sinto aliviado depois de conversar com você.'] },
      { prompt: 'هذا الفيلم أثّر في كثيرًا.', answers: ['Esse filme me tocou muito.'] },
      { prompt: 'أنا خجول بطبيعتي.', answers: ['Sou tímido por natureza.'] },
      { prompt: 'الموقف كان محرجًا للغاية.', answers: ['A situação foi muito constrangedora.'] },
    ]}],
  },

  {
    id: 'var-ar-3',
    language: 'ar',
    stage: 'Variados',
    title: '100 جملة متقدمة المستوى',
    subtitle: 'حجج، تعبيرات اصطلاحية، تراكيب معقدة — 100 جملة للمستوى المتقدم',
    theory: `هذه الوحدة للمستوى المتقدم وتتضمن تراكيب لغوية معقدة وتعبيرات اصطلاحية.

## المواضيع

| الموضوع                        | عدد الجمل |
|--------------------------------|-----------|
| الحجج والنقاشات                | 25        |
| التعبيرات الاصطلاحية           | 25        |
| التراكيب المعقدة               | 25        |
| المصطلحات الأكاديمية والمهنية  | 25        |

## نصائح للمستوى المتقدم

- استخدم **Subjuntivo** بعد أفعال الشك والرغبة والتمني
- تعلم الفرق بين **ser** و**estar** في السياقات المختلفة
- الحجج المنطقية تستخدم: **portanto**, **no entanto**, **além disso**, **por outro lado**

## بنى متقدمة جديرة بالملاحظة
- **Quanto mais... mais...** (كلما... كلما...): Quanto mais estudo, mais aprendo.
- **Não só... como também...** (ليس فقط... بل أيضًا...): يفيد التأكيد على إضافة معلومة.
- **Por mais que + Subjuntivo** (بقدر ما / مهما): Por mais que eu **tente**, não consigo.

💡 نصيحة: في الكتابة الأكاديمية والمهنية، تفضَّل الأفعال الاسمية (nominalização) مثل "a análise" بدل "analisar" لإعطاء نَفَس أكثر رسمية، تمامًا كاستخدام المصدر بدل الفعل في الكتابة الأكاديمية العربية.

⚠️ خطأ شائع: لا تستخدم "por mais que" مع Indicativo. الخطأ: "Por mais que eu **tento**..." الصحيح: "Por mais que eu **tente**..." (Subjuntivo) لأنها تعبّر عن تنازل افتراضي.

## المفردات الأساسية

• argumento — حجة
• apoiar — يدعم
• considerar — يعتبر / يأخذ بعين الاعتبار
• conclusão — استنتاج
• abordagem — مقاربة
• hipótese — فرضية
• pesquisa — بحث
• financiamento — تمويل
• metodologia — منهجية
• requerer — يستلزم
• estabelecer — يحدّد / يضع`,
    exercises: [{ sentences: [
      // الحجج والنقاشات
      { prompt: 'علينا أن ننظر للموضوع من زاوية مختلفة.', answers: ['Precisamos ver o assunto de um ângulo diferente.'] },
      { prompt: 'هذه الحجة لا تقف على أساس منطقي.', answers: ['Esse argumento não se sustenta logicamente.'] },
      { prompt: 'علاوة على ذلك، يجب أن نأخذ هذا العامل بعين الاعتبار.', answers: ['Além disso, precisamos levar esse fator em consideração.'] },
      { prompt: 'من ناحية أخرى، الأمر له جوانب إيجابية.', answers: ['Por outro lado, o assunto tem aspectos positivos.'] },
      { prompt: 'هذه البيانات تدعم وجهة نظرنا.', answers: ['Esses dados apoiam nosso ponto de vista.'] },
      { prompt: 'الدراسات تشير إلى أن التعليم المبكر أساسي.', answers: ['Os estudos indicam que a educação precoce é fundamental.'] },
      { prompt: 'يجب أن نحكم بناءً على الوقائع، لا على التخمينات.', answers: ['Precisamos julgar com base nos fatos, não em suposições.'] },
      { prompt: 'هذه المقارنة ليست دقيقة.', answers: ['Essa comparação não é precisa.'] },
      { prompt: 'بالرغم من ذلك، لا يمكننا تجاهل التكاليف.', answers: ['Apesar disso, não podemos ignorar os custos.'] },
      { prompt: 'هذا الاستنتاج يبدو متسرعًا.', answers: ['Essa conclusão parece precipitada.'] },
      { prompt: 'الحل الأمثل هو الجمع بين الخيارين.', answers: ['A solução ideal é combinar as duas opções.'] },
      { prompt: 'لا يمكننا التعميم بناءً على حالة واحدة.', answers: ['Não podemos generalizar a partir de um único caso.'] },
      { prompt: 'هناك أدلة تؤيد كلا الرأيين.', answers: ['Há evidências que apoiam os dois pontos de vista.'] },
      { prompt: 'ينبغي النظر في العواقب طويلة الأمد.', answers: ['Devemos considerar as consequências a longo prazo.'] },
      { prompt: 'هذه مشكلة متعددة الأوجه لا تقبل حلًا بسيطًا.', answers: ['Esse é um problema multifacetado que não aceita uma solução simples.'] },
      { prompt: 'يتوجب علينا إعادة النظر في مقاربتنا.', answers: ['Precisamos rever nossa abordagem.'] },
      { prompt: 'هذا المقترح يستحق دراسة متأنية.', answers: ['Essa proposta merece uma análise cuidadosa.'] },
      { prompt: 'الجانب الاقتصادي لا يمكن إغفاله.', answers: ['O aspecto econômico não pode ser ignorado.'] },
      { prompt: 'هذه النقطة محورية في النقاش.', answers: ['Esse ponto é central no debate.'] },
      { prompt: 'لا يوجد حل مثالي في هذه الحالة.', answers: ['Não existe uma solução perfeita nesse caso.'] },
      { prompt: 'يجب أن يستند قرارنا إلى أدلة موضوعية.', answers: ['Nossa decisão deve se basear em evidências objetivas.'] },
      { prompt: 'الوضع أكثر تعقيدًا مما يبدو.', answers: ['A situação é mais complexa do que parece.'] },
      { prompt: 'هذا يثير تساؤلات جوهرية.', answers: ['Isso levanta questões fundamentais.'] },
      { prompt: 'يجب أن نميز بين السبب والنتيجة.', answers: ['Precisamos distinguir entre a causa e o efeito.'] },
      { prompt: 'الأدلة المتاحة لا تكفي للتوصل لاستنتاج قاطع.', answers: ['As evidências disponíveis não são suficientes para uma conclusão definitiva.'] },
      // التعبيرات الاصطلاحية
      { prompt: 'هذا الأمر يستحق التأمل.', answers: ['Esse assunto vale a pena refletir.'] },
      { prompt: 'دعنا نضع النقاط على الحروف.', answers: ['Vamos botar os pingos nos "is".'] },
      { prompt: 'لا يمكنني أن أعض لساني في هذا الموضوع.', answers: ['Não posso ficar de boca fechada sobre esse assunto.'] },
      { prompt: 'هذا الشخص لا يعمل بالتساوي مع الآخرين.', answers: ['Essa pessoa não puxa o seu peso.'] },
      { prompt: 'هو يبحث عن إبرة في كومة قش.', answers: ['Ele está procurando uma agulha num palheiro.'] },
      { prompt: 'هذا الشخص يعرف ما يريد.', answers: ['Essa pessoa sabe o que quer.', 'Ela sabe onde quer chegar.'] },
      { prompt: 'أخيرًا وصلنا لصلب الموضوع.', answers: ['Finalmente chegamos ao ponto principal.'] },
      { prompt: 'لا تغمض عينيك عن الحقيقة.', answers: ['Não feche os olhos para a realidade.'] },
      { prompt: 'هو يحمل الأمر أكثر مما ينبغي.', answers: ['Ele está carregando muito nas costas.'] },
      { prompt: 'هذا الموضوع حساس للغاية.', answers: ['Esse assunto é muito delicado.'] },
      { prompt: 'أنت تعرف كيف تتصرف في المواقف الصعبة.', answers: ['Você sabe se virar nas situações difíceis.'] },
      { prompt: 'ليس كل ما يلمع ذهبًا.', answers: ['Nem tudo que reluz é ouro.'] },
      { prompt: 'يجب أن نضع الأمور في نصابها الصحيح.', answers: ['Precisamos colocar as coisas no lugar.'] },
      { prompt: 'هذا القرار يقع على عاتقك.', answers: ['Essa decisão recai sobre você.', 'Essa decisão é sua.'] },
      { prompt: 'من السهل قول الشيء، لكن الصعب تطبيقه.', answers: ['É fácil falar, mas difícil é fazer.'] },
      { prompt: 'الوقت يمر دون أن ندري.', answers: ['O tempo passa sem a gente perceber.'] },
      { prompt: 'الصبر هو مفتاح النجاح.', answers: ['A paciência é a chave do sucesso.'] },
      { prompt: 'لا تجعل الجبل من حبة رمل.', answers: ["Não faça tempestade num copo d'água."] },
      { prompt: 'هو ينتظر مجيء الفرج دون أن يعمل.', answers: ['Ele fica esperando cair o maná do céu.'] },
      { prompt: 'الجميع يُخطئ، المهم أن تتعلم من أخطائك.', answers: ['Todo mundo erra, o importante é aprender com os erros.'] },
      { prompt: 'الأمور لا تسير دائمًا كما نريد.', answers: ['As coisas nem sempre saem como a gente quer.'] },
      { prompt: 'لا تعض اليد التي تطعمك.', answers: ['Não morde a mão que te alimenta.'] },
      { prompt: 'هذه الحالة تتطلب اتخاذ قرار حاسم.', answers: ['Essa situação exige uma decisão firme.'] },
      { prompt: 'الحل البسيط ليس دائمًا الأفضل.', answers: ['A solução simples nem sempre é a melhor.'] },
      { prompt: 'يجب أن تكون مستعدًا للأسوأ.', answers: ['Você precisa estar preparado para o pior.'] },
      // التراكيب المعقدة
      { prompt: 'إذا كنت قد عرفت ذلك مبكرًا، لكنت تصرفت بشكل مختلف.', answers: ['Se eu tivesse sabido antes, teria agido de forma diferente.'] },
      { prompt: 'بالرغم من كل الصعوبات، استطعنا إنهاء المشروع.', answers: ['Apesar de todas as dificuldades, conseguimos terminar o projeto.'] },
      { prompt: 'كلما زاد مستوى التحديات، كلما زادت فرص التطور.', answers: ['Quanto maiores os desafios, maiores as oportunidades de crescimento.'] },
      { prompt: 'ليس فقط أنه لم يساعد، بل أنه عرقل العمل.', answers: ['Ele não só não ajudou, como também atrapalhou o trabalho.'] },
      { prompt: 'لو كان الأمر بيدي، لاخترت طريقة مختلفة.', answers: ['Se dependesse de mim, teria escolhido uma maneira diferente.'] },
      { prompt: 'ما يُقلقني هو أن الوضع قد يتدهور.', answers: ['O que me preocupa é que a situação pode piorar.'] },
      { prompt: 'سواء كنت موافقًا أم لا، القرار اتُّخذ.', answers: ['Concorde ou não, a decisão foi tomada.'] },
      { prompt: 'من الجدير بالذكر أن هذا التغيير أحدث فارقًا كبيرًا.', answers: ['Vale mencionar que essa mudança fez uma grande diferença.'] },
      { prompt: 'المشكلة ليست في ما قلته، بل في كيفية قولته.', answers: ['O problema não é o que você disse, mas como você disse.'] },
      { prompt: 'بقدر ما أحب البرازيل، أجدني أفتقد وطني.', answers: ['Por mais que eu ame o Brasil, sinto falta da minha terra.'] },
      { prompt: 'في ظل هذه الظروف، من الصعب اتخاذ قرار.', answers: ['Nessas circunstâncias, é difícil tomar uma decisão.'] },
      { prompt: 'الشخص الذي أثّر في أكثر هو معلمي الأول.', answers: ['A pessoa que mais me influenciou foi meu primeiro professor.'] },
      { prompt: 'ما لم تتغير الظروف، سيكون الوضع صعبًا.', answers: ['A menos que as circunstâncias mudem, a situação vai ser difícil.'] },
      { prompt: 'يُعدّ هذا الإنجاز نتيجة لسنوات من الجهد المتواصل.', answers: ['Essa conquista é resultado de anos de esforço contínuo.'] },
      { prompt: 'على الرغم من أن النتائج مشجعة، إلا أنها ليست نهائية.', answers: ['Embora os resultados sejam encorajadores, eles não são definitivos.'] },
      { prompt: 'من المحتمل أن هذا الاتجاه سيستمر في المستقبل.', answers: ['É provável que essa tendência continue no futuro.'] },
      { prompt: 'اعتمادًا على الموقف، يمكن تطبيق أساليب مختلفة.', answers: ['Dependendo da situação, diferentes abordagens podem ser aplicadas.'] },
      { prompt: 'ليس من السهل أن تُغيّر عادات راسخة.', answers: ['Não é fácil mudar hábitos arraigados.'] },
      { prompt: 'بينما يعمل بعضهم في الخارج، يفضل آخرون البقاء.', answers: ['Enquanto alguns trabalham no exterior, outros preferem ficar.'] },
      { prompt: 'كل ما نعرفه هو أننا بحاجة لتغيير النهج.', answers: ['O que sabemos é que precisamos mudar a abordagem.'] },
      { prompt: 'بمجرد ما يتضح الوضع، سنتخذ قرارنا.', answers: ['Assim que a situação ficar clara, tomaremos nossa decisão.'] },
      { prompt: 'لن يتحسن الوضع ما لم نتخذ إجراءات.', answers: ['A situação não vai melhorar a menos que tomemos providências.'] },
      { prompt: 'هذا هو بالضبط ما توقعته.', answers: ['Isso é exatamente o que eu esperava.'] },
      { prompt: 'من المثير للاهتمام أن هذا النمط يتكرر.', answers: ['É interessante notar que esse padrão se repete.'] },
      { prompt: 'يبدو أن الأمور تسير في الاتجاه الصحيح.', answers: ['Parece que as coisas estão indo na direção certa.'] },
      // المصطلحات الأكاديمية والمهنية
      { prompt: 'هذا البحث يهدف إلى دراسة العلاقة بين المتغيرين.', answers: ['Esta pesquisa visa estudar a relação entre as duas variáveis.'] },
      { prompt: 'يجب الإشارة إلى المصادر الأولية.', answers: ['É necessário citar as fontes primárias.'] },
      { prompt: 'البيانات تشير إلى وجود تباين كبير.', answers: ['Os dados indicam uma grande variação.'] },
      { prompt: 'هذه الفرضية تحتاج إلى اختبار تجريبي.', answers: ['Essa hipótese precisa ser testada empiricamente.'] },
      { prompt: 'يستلزم هذا الموضوع تحليلًا متعمقًا.', answers: ['Esse tema requer uma análise aprofundada.'] },
      { prompt: 'النتائج تتوافق مع الدراسات السابقة.', answers: ['Os resultados estão de acordo com estudos anteriores.'] },
      { prompt: 'هذا الاقتراح قيد المراجعة من قِبَل اللجنة.', answers: ['Essa proposta está sendo analisada pelo comitê.'] },
      { prompt: 'يجب أن نحدد المنهجية المتبعة في البحث.', answers: ['Precisamos definir a metodologia adotada na pesquisa.'] },
      { prompt: 'هذا المشروع يتطلب تمويلًا إضافيًا.', answers: ['Este projeto requer financiamento adicional.'] },
      { prompt: 'ينبغي توثيق كل مرحلة من مراحل العمل.', answers: ['Cada etapa do trabalho deve ser documentada.'] },
      { prompt: 'هذا الاكتشاف يُعيد تشكيل فهمنا للموضوع.', answers: ['Essa descoberta reformula nossa compreensão do assunto.'] },
      { prompt: 'يجب أن تخضع هذه البيانات للتحقق.', answers: ['Esses dados precisam ser verificados.'] },
      { prompt: 'الاجتماع السنوي للشركاء سيُعقد الشهر القادم.', answers: ['A reunião anual dos parceiros vai acontecer no próximo mês.'] },
      { prompt: 'يجب إعداد تقرير مفصّل بنهاية الربع.', answers: ['É necessário preparar um relatório detalhado até o fim do trimestre.'] },
      { prompt: 'الفريق نجح في تجاوز جميع الأهداف المحددة.', answers: ['A equipe conseguiu superar todas as metas estabelecidas.'] },
      { prompt: 'هذا الإجراء يستلزم موافقة الإدارة العليا.', answers: ['Esse procedimento requer aprovação da alta gestão.'] },
      { prompt: 'النشرة المالية ستصدر في نهاية الأسبوع.', answers: ['O boletim financeiro será publicado no final da semana.'] },
      { prompt: 'يجب علينا الالتزام بمعايير الجودة المعتمدة.', answers: ['Precisamos cumprir com os padrões de qualidade estabelecidos.'] },
      { prompt: 'هذه الاستراتيجية تهدف إلى تحسين الأداء على المدى البعيد.', answers: ['Essa estratégia visa melhorar o desempenho a longo prazo.'] },
      { prompt: 'تم الاتفاق على بنود العقد بعد مفاوضات مطولة.', answers: ['As cláusulas do contrato foram acordadas após longas negociações.'] },
      { prompt: 'يجب تقديم الطلب قبل الموعد المحدد.', answers: ['A solicitação deve ser enviada antes do prazo estabelecido.'] },
      { prompt: 'الشركة تسعى إلى توسيع حضورها في السوق.', answers: ['A empresa busca expandir sua presença no mercado.'] },
      { prompt: 'هذا القطاع يشهد نموًا ملحوظًا في السنوات الأخيرة.', answers: ['Esse setor tem registrado um crescimento notável nos últimos anos.'] },
      { prompt: 'يجب أن يستوفي المرشح جميع شروط الوظيفة.', answers: ['O candidato deve atender a todos os requisitos do cargo.'] },
      { prompt: 'التقرير النهائي سيُرفع للإدارة في نهاية الشهر.', answers: ['O relatório final será entregue à diretoria no final do mês.'] },
    ]}],
  },

  {
    id: 'rev-int-ar',
    language: 'ar',
    stage: 'Intermediário',
    isReview: true,
    title: 'مراجعة المستوى المتوسط',
    subtitle: 'راجع المضارع الناقص، الصفات، الربط، الشرط والمجهول',
    theory: `مراجعة شاملة للمستوى المتوسط:

**1. المضارع الناقص (Pretérito Imperfeito)**
- يُعبّر عن عادات ماضية أو حالة مستمرة في الماضي
- كنت أسكن هناك → Eu morava lá

**2. المستقبل (Futuro)**
- ir + infinitivo: Eu vou falar (محادثة)
- المستقبل المباشر: Eu falarei (رسمي)

**3. المجهول (Voz Passiva)**
- O projeto foi aprovado. (تم اعتماد المشروع)
- A carta foi escrita por ela.

**4. الضمائر النسبية**
- que, quem, onde, cujo/cuja

**5. الجمل الشرطية**
- Se eu tiver tempo, viajarei. (مستقبل)
- Se eu tivesse tempo, viajaria. (ماض افتراضي)

## جدول مقارنة سريع للجمل الشرطية

| النوع                | الشرط (se)              | النتيجة                  | المعنى                    |
|-----------------------|--------------------------|---------------------------|----------------------------|
| شرط مستقبلي محتمل     | Futuro do Subjuntivo (tiver) | Futuro (viajarei) / ir+inf | إذا حدث، سأفعل (واقعي)     |
| شرط افتراضي حاضر/مستقبل | Imperfeito do Subjuntivo (tivesse) | Futuro do Pretérito (viajaria) | لو حدث، كنت سأفعل (غير واقعي) |
| شرط افتراضي ماضٍ      | Mais-que-perfeito do Subjuntivo (tivesse tido) | Futuro do Pretérito Composto (teria viajado) | لو كان قد حدث، لكنت فعلت |

⚠️ خطأ شائع: لا تخلط بين "Se eu tiver" (شرط واقعي محتمل) و"Se eu tivesse" (شرط افتراضي بعيد عن الواقع) — الفرق دقيق لكنه جوهري في المعنى.

💡 نصيحة: تذكّر أن الضمائر النسبية "que" تُستخدم للأشياء والأشخاص، أما "quem" فقط للأشخاص بعد حرف جر، و"cujo/cuja" تقابل "الذي/التي... له/لها" وتتطابق مع الاسم الذي يليها لا الذي يسبقها.

## المفردات الأساسية

• morar — يسكن
• construir — يبني
• consultar — يستشير
• apresentar — يقدّم
• biblioteca — مكتبة
• recado — رسالة (مُترَكة)
• resolver — يحل
• rapidamente — بسرعة`,
    exercises: [{ sentences: [
      { prompt: 'كانت تعيش في البرازيل عندما كانت صغيرة.', answers: ['Ela morava no Brasil quando era pequena.', 'Ela vivia no Brasil quando era criança.'] },
      { prompt: 'إذا درست جيداً، ستنجح في الامتحان.', answers: ['Se você estudar bem, vai passar no exame.', 'Se você estudar muito, você passa.'] },
      { prompt: 'تم بناء هذه المدرسة منذ خمسين سنة.', answers: ['Essa escola foi construída há cinquenta anos.'] },
      { prompt: 'الشخص الذي اتصل لم يترك رسالة.', answers: ['A pessoa que ligou não deixou recado.', 'Quem ligou não deixou mensagem.'] },
      { prompt: 'كنت أذهب إلى الجامعة كل يوم.', answers: ['Eu ia para a universidade todo dia.', 'Ia pra faculdade todo dia.'] },
      { prompt: 'لو كان لدي وقت، كنت سأسافر.', answers: ['Se eu tivesse tempo, viajaria.', 'Se tivesse tempo, ia viajar.'] },
      { prompt: 'القرار اتُّخذ دون استشارة الفريق.', answers: ['A decisão foi tomada sem consultar a equipe.', 'Decidiram sem ouvir a equipe.'] },
      { prompt: 'المدينة التي ولدت فيها تغيّرت كثيراً.', answers: ['A cidade onde nasci mudou muito.', 'A cidade em que nasci mudou bastante.'] },
      { prompt: 'كانوا يعملون معاً كل يوم.', answers: ['Eles trabalhavam juntos todo dia.', 'Elas trabalhavam juntas todos os dias.'] },
      { prompt: 'المشروع سيُقدَّم غداً أمام المدير.', answers: ['O projeto vai ser apresentado amanhã para o diretor.', 'O projeto será apresentado amanhã ao diretor.'] },
      { prompt: 'كنت أحب القراءة وأنا صغير.', answers: ['Eu gostava de ler quando era pequeno.', 'Gostava de ler quando era criança.'] },
      { prompt: 'إذا جاء، سنبدأ الاجتماع.', answers: ['Se ele vier, vamos começar a reunião.', 'Se ele chegar, a gente começa.'] },
      { prompt: 'الرسالة أُرسلت الأسبوع الماضي.', answers: ['A carta foi enviada semana passada.'] },
      { prompt: 'الشخص الذي يتحدث هو مديرنا.', answers: ['A pessoa que está falando é nosso diretor.', 'Quem está falando é o nosso gerente.'] },
      { prompt: 'كانت تعمل في مكتبة عندما كانت طالبة.', answers: ['Ela trabalhava numa biblioteca quando era estudante.', 'Ela trabalhava em livraria quando estudava.'] },
      { prompt: 'لو كنت مكانك، ما كنت سأفعل ذلك.', answers: ['Se eu fosse você, não faria isso.', 'No seu lugar, não faria isso.'] },
      { prompt: 'الباب كان مفتوحاً عندما وصلت.', answers: ['A porta estava aberta quando cheguei.'] },
      { prompt: 'هذا هو المكان الذي التقينا فيه أول مرة.', answers: ['Esse é o lugar onde nos conhecemos pela primeira vez.', 'É aqui que a gente se conheceu pela primeira vez.'] },
      { prompt: 'المشكلة حُلَّت بسرعة كبيرة.', answers: ['O problema foi resolvido rapidamente.', 'O problema foi solucionado com rapidez.'] },
      { prompt: 'كانت تنتظر الحافلة كل يوم في السادسة.', answers: ['Ela esperava o ônibus todo dia às seis.', 'Ela ficava esperando o ônibus todo dia às seis.'] },
    ]}],
    dialogExercise: {
      audioText: 'Precisava de ajuda com minha inscrição no curso. A atendente disse que o prazo já tinha passado, mas me indicou outra turma que ainda está aberta.',
      question: 'What happened with the enrollment?',
      options: [
        { text: 'The deadline had passed, but the attendant suggested another open class.', correct: true },
        { text: 'The enrollment was completed successfully before the deadline.', correct: false },
        { text: 'There were no classes available and the person had to wait.', correct: false },
        { text: 'The attendant refused to help with the enrollment.', correct: false },
      ],
    },
  },

  {
    id: 'rev-adv-ar',
    language: 'ar',
    stage: 'Avançado',
    isReview: true,
    title: 'مراجعة المستوى المتقدم',
    subtitle: 'راجع الخطاب غير المباشر، التعميمات، الأسلوب الرسمي وبنى الجمل المعقدة',
    theory: `مراجعة المستوى المتقدم:

**1. الخطاب غير المباشر (Discurso Indireto)**
- "Vou vir amanhã" → Ele disse que *viria* no dia seguinte.
- "Faça isso" → Ela pediu que eu *fizesse* isso.

**2. الجمل التنازلية والسببية**
- *Embora* chova, sairemos. (رغم أن)
- *Como* estava cansado, foi dormir. (لأنه)
- *Por conta de* atrasos, cancelou. (بسبب)

**3. المصدر اللفظي (Nominalização)**
- Decidir → a decisão / Partir → a partida

**4. المستقبل الشرطي (Futuro do Subjuntivo)**
- Quando você *chegar*, me avise.
- Se ele *vier*, podemos começar.

**5. الفرق بين السجل الرسمي والعامي**
- رسمي: Solicito que envie os documentos.
- عامي: Manda o documento pra mim.

## نقاط إضافية للمراجعة المتقدمة

**6. الفرق بين "porque", "por que", "por quê", "porquê"**
| الصيغة     | الاستخدام                          |
|------------|-------------------------------------|
| porque     | لأن (في الجواب)                    |
| por que    | لماذا (في السؤال أو قبل que/de)     |
| por quê    | لماذا؟ (في آخر الجملة الاستفهامية)  |
| o porquê   | السبب (اسم)                         |

**7. الجمل الشرطية الافتراضية المركبة**
- Se eu **tivesse sabido**, **teria agido** diferente. (لو كنت عرفت، لكنت تصرفت بشكل مختلف.)

⚠️ خطأ شائع: لا تخلط "como se" (كأن) مع Indicativo. الصحيح دائمًا Subjuntivo: "Ele agiu **como se** nada **tivesse** acontecido."

💡 نصيحة: في الكتابة الرسمية والمهنية، استبدال الفعل بمصدر اسمي (nominalização) — مثل "o lançamento" بدل "lançar" — يضفي نَفَسًا أكثر احترافية، تمامًا كاستخدام المصدر الصريح في التقارير الرسمية بالعربية.

## المفردات الأساسية

• concluir — ينجز / يُنهي
• causar — يسبّب
• chocar — يصدم
• superar — يتجاوز
• negociar — يتفاوض
• alegar — يدّعي
• exigir — يتطلّب
• aprovação — موافقة
• ignorar — يتجاهل`,
    exercises: [{ sentences: [
      { prompt: 'قال إنه سيعود في الأسبوع القادم.', answers: ['Ele disse que voltaria na semana seguinte.', 'Ele falou que ia voltar na semana que vem.'] },
      { prompt: 'رغم المصاعب، أنهى الفريق المشروع في الوقت المحدد.', answers: ['Apesar das dificuldades, a equipe concluiu o projeto no prazo.', 'Mesmo com as dificuldades, o time entregou no prazo.'] },
      { prompt: 'عندما يصل الجميع، سنبدأ الاجتماع.', answers: ['Quando todos chegarem, vamos começar a reunião.', 'Quando todo mundo chegar, começamos.'] },
      { prompt: 'التأخير في التسليم سبّب مشاكل كبيرة.', answers: ['O atraso na entrega causou grandes problemas.', 'O atraso na entrega trouxe muitos problemas.'] },
      { prompt: 'طلبت مني أن أكون حذراً فيما أقوله.', answers: ['Ela me pediu que eu tivesse cuidado com o que digo.', 'Ela me disse pra ter cuidado com o que falo.'] },
      { prompt: 'بسبب الإضراب، لم تعمل القطارات.', answers: ['Por conta da greve, os trens não estavam funcionando.', 'Devido à greve, os trens pararam.'] },
      { prompt: 'إقالة المدير صدمت جميع الموظفين.', answers: ['A demissão do diretor chocou todos os funcionários.', 'O diretor ser demitido chocou todo mundo.'] },
      { prompt: 'رغم أنك لا توافق، يُرجى احترام القرار.', answers: ['Mesmo que você discorde, por favor respeite a decisão.', 'Mesmo não concordando, respeita a decisão.'] },
      { prompt: 'النتيجة تجاوزت كل توقعاتنا.', answers: ['O resultado superou todas as nossas expectativas.', 'O resultado foi além do que esperávamos.'] },
      { prompt: 'سألتني إذا كنت قد تحدثت مع المدير.', answers: ['Ela me perguntou se eu tinha falado com o gerente.', 'Ela quis saber se eu já tinha conversado com o chefe.'] },
      { prompt: 'كلما كانت المهمة أصعب، كلما تطلبت وقتاً أكثر.', answers: ['Quanto mais difícil a tarefa, mais tempo ela exige.', 'Quanto mais complexa a tarefa, mais tempo precisa.'] },
      { prompt: 'التفاوض على العقد يتطلب عناية فائقة.', answers: ['A negociação do contrato requer muito cuidado.', 'Negociar o contrato exige bastante atenção.'] },
      { prompt: 'ادّعى أنه عومل بشكل غير عادل.', answers: ['Ele alegou ter sido tratado injustamente.', 'Ele disse que foi tratado de forma injusta.'] },
      { prompt: 'ما لم يُذكر في العقد لا يُعتدّ به.', answers: ['O que não está no contrato não tem validade.', 'O que não foi mencionado no contrato não vale.'] },
      { prompt: 'طالما التزمت بالتعليمات، ستنجح.', answers: ['Desde que você siga as instruções, vai dar certo.', 'Contanto que siga as instruções, funciona.'] },
      { prompt: 'لإطلاق المنتج توقعات كبيرة في السوق.', answers: ['O lançamento do produto gerou grandes expectativas no mercado.', 'Lançar o produto criou muita expectativa.'] },
      { prompt: 'الحل المُقترح يستلزم موافقة الإدارة العليا.', answers: ['A solução proposta requer aprovação da alta gestão.', 'A proposta precisa ser aprovada pela diretoria.'] },
      { prompt: 'طلب أن نراجع الأرقام مرة أخرى.', answers: ['Ele pediu que revisássemos os números mais uma vez.', 'Ele pediu pra a gente checar os números de novo.'] },
      { prompt: 'كانت تتصرف كأن شيئاً لم يحدث.', answers: ['Ela se comportou como se nada tivesse acontecido.', 'Ela agiu como se nada tivesse ocorrido.'] },
      { prompt: 'لا يمكننا بعد الآن تجاهل هذه المسألة.', answers: ['Não podemos mais ignorar essa questão.', 'Não dá mais pra fechar os olhos pra isso.'] },
    ]}],
    dialogExercise: {
      audioText: 'Apesar de termos recebido várias propostas, optamos por trabalhar com a empresa local. Acreditamos que essa decisão vai fortalecer nossa parceria com a comunidade.',
      question: 'What decision was made and why?',
      options: [
        { text: 'They chose the local company to strengthen community partnership.', correct: true },
        { text: 'They rejected all proposals and decided to work alone.', correct: false },
        { text: 'They accepted the cheapest proposal from a foreign company.', correct: false },
        { text: 'They are still reviewing proposals and have not decided yet.', correct: false },
      ],
    },
  },
];
