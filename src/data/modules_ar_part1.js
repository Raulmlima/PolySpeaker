export const MODULES_AR_PART1 = [
  // ========== FUNDAMENTOS ==========
  {
    id: 'fund-ar-1',
    language: 'ar',
    stage: 'Fundamentos',
    title: 'التحيات والتقديم',
    subtitle: 'تعلم كيفية قول مرحبا وتقديم نفسك بالبرتغالية',
    theory: `في هذا الدرس، ستتعلم أهم عبارات التحية والتقديم في البرتغالية البرازيلية.

## التحيات الأساسية

| العربية            | البرتغالية البرازيلية |
|--------------------|----------------------|
| مرحبا              | Olá / Oi             |
| صباح الخير         | Bom dia              |
| مساء الخير         | Boa tarde            |
| مساء النور / تصبح على خير | Boa noite   |
| مع السلامة         | Tchau / Até logo     |
| إلى اللقاء         | Até mais             |

**Oi** أكثر عفوية من **Olá**، تشبه "هاي" بالعربية العامية، بينما "Olá" أقرب لـ"مرحبا" الرسمية.

## التعريف بالنفس

| العربية                | البرتغالية البرازيلية     |
|------------------------|--------------------------|
| اسمي ...               | Meu nome é ... / Me chamo ... |
| أنا من ...             | Eu sou de ...            |
| كيف حالك؟             | Como vai você? / Tudo bem? |
| أنا بخير، شكرا        | Estou bem, obrigado/a    |
| من فضلك               | Por favor                |
| شكرا                  | Obrigado (مذكر) / Obrigada (مؤنث) |
| عفوا                  | De nada                  |
| آسف / معذرة           | Desculpe / Com licença   |

## ضمير الخطاب "você"

بعكس العربية التي تفرّق بين "أنتَ" و"أنتِ" (مذكر/مؤنث) و"أنتم/أنتن" (جمع)، فإن **você** في البرتغالية البرازيلية المحكية يُستخدم لمخاطبة أي شخص، رجلاً أو امرأة، بصيغة واحدة فقط. الفرق الوحيد يظهر في الصفة المرافقة:
- Você é simpático. (إذا خاطبت رجلا)
- Você é simpática. (إذا خاطبت امرأة)

## أمثلة إضافية

- مرحبا، كيف حالك اليوم؟ → Oi, como você está hoje?
- تشرفت بمعرفتك. → Foi um prazer te conhecer.
- أراك الأسبوع القادم. → Te vejo semana que vem.

💡 **نصيحة:** "Obrigado/Obrigada" يتوافق مع جنس **المتكلم** نفسه، لا مع الشخص المخاطَب — عكس بعض القواعد في العربية التي قد تربط الصيغة بالمستمع.

⚠️ **أخطاء شائعة:** لا تترجم "كيف حالك" حرفيا بـ"Como você é؟" لأن "ser" يُستخدم للصفات الدائمة لا للحالة المؤقتة؛ الصحيح هو "Como você está؟" أو ببساطة "Tudo bem؟".

## المفردات الأساسية

• conhecer — يتعرّف على / يعرف
• prazer — سرور / شرف (المقابلة)
• vejo (ver) — أرى
• vem (vir) — يأتي
• semana — أسبوع
• hoje — اليوم
• cedo / depois — مبكرا / لاحقا
• certo — صحيح / مضبوط`,
    exercises: [{ sentences: [
      { prompt: 'مرحبا!', answers: ['Olá!', 'Oi!'] },
      { prompt: 'صباح الخير.', answers: ['Bom dia.'] },
      { prompt: 'مساء الخير.', answers: ['Boa tarde.'] },
      { prompt: 'مساء النور.', answers: ['Boa noite.'] },
      { prompt: 'كيف حالك؟', answers: ['Como vai você?', 'Tudo bem?', 'Como você está?'] },
      { prompt: 'أنا بخير، شكرا.', answers: ['Estou bem, obrigado.', 'Estou bem, obrigada.', 'Tô bem, obrigado.'] },
      { prompt: 'اسمي كريم.', answers: ['Meu nome é Karim.', 'Me chamo Karim.'] },
      { prompt: 'ما اسمك؟', answers: ['Qual é o seu nome?', 'Como você se chama?'] },
      { prompt: 'أنا من مصر.', answers: ['Eu sou do Egito.', 'Sou do Egito.'] },
      { prompt: 'من أين أنت؟', answers: ['De onde você é?', 'Você é de onde?'] },
      { prompt: 'شكرا جزيلا.', answers: ['Muito obrigado.', 'Muito obrigada.'] },
      { prompt: 'عفوا.', answers: ['De nada.'] },
      { prompt: 'معذرة.', answers: ['Desculpe.', 'Com licença.'] },
      { prompt: 'من فضلك.', answers: ['Por favor.'] },
      { prompt: 'مع السلامة.', answers: ['Tchau.', 'Até logo.', 'Até mais.'] },
      { prompt: 'يسعدني مقابلتك.', answers: ['Prazer em te conhecer.', 'Muito prazer.'] },
      { prompt: 'الشرف لي.', answers: ['O prazer é meu.'] },
      { prompt: 'كل شيء بخير؟', answers: ['Tudo bem?', 'Tudo certo?'] },
      { prompt: 'نعم، كل شيء بخير.', answers: ['Sim, tudo bem.', 'Tudo ótimo.'] },
      { prompt: 'أراك لاحقا.', answers: ['Te vejo depois.', 'A gente se vê depois.'] },
    ]}],
  },

  {
    id: 'fund-ar-2',
    language: 'ar',
    stage: 'Fundamentos',
    title: 'فعل الكون: ser و estar',
    subtitle: 'تعلم الفرق بين فعلَي الكون الرئيسيين في البرتغالية',
    theory: `في البرتغالية فعلان يعنيان "يكون": **ser** و **estar**. هذا تحدٍّ مهم للناطقين بالعربية، لأن العربية غالبا لا تحتاج فعل "يكون" في الجملة الاسمية الحاضرة (مثل "هو طالب")، بينما البرتغالية تتطلب دوما فعلا واضحا (ser أو estar)، تماما كما تحتاج العربية لفعل "كان" في الماضي.

## متى نستخدم كل منهما؟

- **ser** → للصفات الدائمة والثابتة (الجنسية، المهنة، الشخصية، الأصل، الهوية)
- **estar** → للحالات المؤقتة والمتغيرة (المشاعر، الموقع، الصحة، الطقس)

## تصريف فعل SER (يكون - دائم)

| الضمير البرتغالي | الضمير العربي | التصريف |
|------------------|---------------|---------|
| Eu               | أنا           | sou     |
| Você / Ele / Ela | أنت / هو / هي | é       |
| Nós              | نحن           | somos   |
| Vocês / Eles     | أنتم / هم     | são     |

## تصريف فعل ESTAR (يكون - مؤقت)

| الضمير البرتغالي | الضمير العربي | التصريف |
|------------------|---------------|---------|
| Eu               | أنا           | estou   |
| Você / Ele / Ela | أنت / هو / هي | está    |
| Nós              | نحن           | estamos |
| Vocês / Eles     | أنتم / هم     | estão   |

## أمثلة مقارنة

- أنا طالب (دائم) → Eu **sou** estudante
- أنا متعب الآن (مؤقت) → Eu **estou** cansado
- هي برازيلية (دائم) → Ela **é** brasileira
- هي في المنزل (موقع) → Ela **está** em casa
- الطعام لذيذ بطبعه → A comida **é** gostosa
- الطعام اليوم بارد (حالة عابرة) → A comida **está** fria hoje
- هو طبيب → Ele **é** médico
- هو متوتر الآن لأن لديه امتحانا → Ele **está** nervoso

## حالة خاصة: الصفة قد تغيّر معناها

بعض الصفات تعطي معنى مختلفا حسب الفعل المستخدم:

| الصفة | مع ser (صفة ثابتة) | مع estar (حالة مؤقتة) |
|-------|----------------------|------------------------|
| bonito | Ela é bonita (هي جميلة بطبعها) | Ela está bonita (تبدو جميلة اليوم) |
| chato | Ele é chato (هو شخص مزعج بطبعه) | Ele está chato (يتصرف بإزعاج الآن) |

💡 **نصيحة:** فكّر في "ser" كهوية الشخص و"estar" كصورة لحظية له. إذا كان الجواب صحيحا بعد سنوات، استخدم ser؛ وإذا كان قد يتغير غدا، استخدم estar.

⚠️ **خطأ شائع:** لا تستخدم "estar" مع المهن أو الجنسيات (لا تقل "Eu estou estudante")، ولا تستخدم "ser" مع المواقع المؤقتة (لا تقل "Ela é em casa" — الصحيح "Ela está em casa").

## المفردات الأساسية

• estudante — طالب
• cansado — متعب
• feliz — سعيد
• com fome — جائع
• com medo — خائف
• doente — مريض
• atrasado — متأخر
• amigo — صديق
• trabalho — عمل
• escola — مدرسة`,
    exercises: [{ sentences: [
      { prompt: 'أنا طالب.', answers: ['Eu sou estudante.', 'Sou estudante.'] },
      { prompt: 'أنا متعب.', answers: ['Eu estou cansado.', 'Tô cansado.'] },
      { prompt: 'هو برازيلي.', answers: ['Ele é brasileiro.'] },
      { prompt: 'هي في المنزل.', answers: ['Ela está em casa.'] },
      { prompt: 'نحن سعداء.', answers: ['Nós estamos felizes.', 'A gente está feliz.'] },
      { prompt: 'أنت طيب.', answers: ['Você é legal.', 'Você é gentil.'] },
      { prompt: 'هم في المدرسة.', answers: ['Eles estão na escola.'] },
      { prompt: 'أنا جائع.', answers: ['Eu estou com fome.', 'Tô com fome.'] },
      { prompt: 'هي مهندسة.', answers: ['Ela é engenheira.'] },
      { prompt: 'أنا من السعودية.', answers: ['Eu sou da Arábia Saudita.', 'Sou da Arábia Saudita.'] },
      { prompt: 'هو مريض اليوم.', answers: ['Ele está doente hoje.'] },
      { prompt: 'نحن في البيت.', answers: ['Nós estamos em casa.', 'A gente está em casa.'] },
      { prompt: 'الطقس جميل.', answers: ['O tempo está bonito.', 'O dia está lindo.'] },
      { prompt: 'أنت متأخر.', answers: ['Você está atrasado.'] },
      { prompt: 'هم أصدقاء.', answers: ['Eles são amigos.'] },
      { prompt: 'أنا خائف.', answers: ['Eu estou com medo.', 'Tô com medo.'] },
      { prompt: 'هي معلمة.', answers: ['Ela é professora.'] },
      { prompt: 'الطعام لذيذ.', answers: ['A comida está deliciosa.', 'A comida está gostosa.'] },
      { prompt: 'نحن برازيليون.', answers: ['Nós somos brasileiros.'] },
      { prompt: 'هو في العمل.', answers: ['Ele está no trabalho.', 'Ele está no serviço.'] },
    ]}],
  },

  {
    id: 'fund-ar-3',
    language: 'ar',
    stage: 'Fundamentos',
    title: 'الأرقام والألوان وأيام الأسبوع',
    subtitle: 'تعلم الأرقام والألوان وأيام الأسبوع بالبرتغالية',
    theory: `## الأرقام من 1 إلى 20

| العربية        | البرتغالية  |
|----------------|------------|
| واحد / واحدة   | um / uma   |
| اثنان / اثنتان | dois / duas|
| ثلاثة          | três       |
| أربعة          | quatro     |
| خمسة           | cinco      |
| ستة            | seis       |
| سبعة           | sete       |
| ثمانية         | oito       |
| تسعة           | nove       |
| عشرة           | dez        |
| أحد عشر        | onze       |
| اثنا عشر       | doze       |
| عشرون          | vinte      |

**ملاحظة مهمة:** "um" و"dois" يتغيران حسب جنس الاسم: **um livro** (كتاب) لكن **uma casa** (بيت)، **dois meninos** (ولدان) لكن **duas meninas** (بنتان). باقي الأرقام (três، quatro...) لا تتغير حسب الجنس.

## الألوان

| العربية  | البرتغالية      |
|----------|----------------|
| أحمر     | vermelho       |
| أزرق     | azul           |
| أخضر     | verde          |
| أصفر     | amarelo        |
| أسود     | preto          |
| أبيض     | branco         |
| بني      | marrom         |
| برتقالي  | laranja        |

معظم الألوان توافق جنس الاسم الذي تصفه. لاحظ أن "carro" (سيارة) مذكر في البرتغالية رغم أن "السيارة" مؤنثة في العربية — لهذا نقول **o carro é vermelho** (مذكر) بينما **a blusa é vermelha** (مؤنث، القميص النسائي). لكن "azul" و"laranja" و"verde" لا تتغيران بين المذكر والمؤنث (ثابتة الشكل).

## أيام الأسبوع

| العربية    | البرتغالية  |
|------------|------------|
| الإثنين    | segunda-feira |
| الثلاثاء   | terça-feira   |
| الأربعاء   | quarta-feira  |
| الخميس     | quinta-feira  |
| الجمعة     | sexta-feira   |
| السبت      | sábado        |
| الأحد      | domingo       |

لاحظ أن أيام الأسبوع (من الإثنين إلى الجمعة) تُبنى من الأرقام الترتيبية + "feira" (بمعنى "السوق/يوم العمل")، بينما السبت والأحد لهما أسماء خاصة، تماما كما يختلف "السبت" و"الأحد" عن باقي الأيام في العربية المعدودة بالأرقام الترتيبية (الإثنين، الثلاثاء...).

## أمثلة إضافية

- لدي عشرون صديقا في المدرسة. → Eu tenho vinte amigos na escola.
- اللون المفضل لدي هو الأسود. → Minha cor favorita é o preto.
- يوم السبت أذهب إلى السوق. → No sábado eu vou ao mercado.

💡 **نصيحة:** في الحديث اليومي يُحذف "-feira" غالبا: "na segunda" بدلا من "na segunda-feira".

⚠️ **خطأ شائع:** لا تقل "um casa" — لأن "casa" مؤنثة يجب أن تكون "uma casa". تذكّر دوما أن المقالات والأرقام (um/uma، dois/duas) تتبع جنس الاسم في البرتغالية، تماما كما تتبع الصفات والأفعال جنس الفاعل في العربية.`,
    exercises: [{ sentences: [
      { prompt: 'لدي ثلاثة كتب.', answers: ['Eu tenho três livros.', 'Tenho três livros.'] },
      { prompt: 'السيارة حمراء.', answers: ['O carro é vermelho.'] },
      { prompt: 'اليوم هو الإثنين.', answers: ['Hoje é segunda-feira.', 'Hoje é segunda.'] },
      { prompt: 'عندي خمسة أخوة.', answers: ['Eu tenho cinco irmãos.', 'Tenho cinco irmãos.'] },
      { prompt: 'السماء زرقاء.', answers: ['O céu é azul.'] },
      { prompt: 'غدا هو الجمعة.', answers: ['Amanhã é sexta-feira.', 'Amanhã é sexta.'] },
      { prompt: 'أريد اثنين من القهوة.', answers: ['Quero dois cafés.'] },
      { prompt: 'الشجرة خضراء.', answers: ['A árvore é verde.'] },
      { prompt: 'أنا أعمل يوم الأربعاء.', answers: ['Eu trabalho na quarta-feira.', 'Trabalho na quarta.'] },
      { prompt: 'عدد الطلاب هو عشرون.', answers: ['O número de alunos é vinte.'] },
      { prompt: 'قميصه أبيض.', answers: ['A camisa dele é branca.'] },
      { prompt: 'السبت والأحد عطلة.', answers: ['Sábado e domingo são folga.', 'No fim de semana a gente descansa.'] },
      { prompt: 'أحب اللون الأزرق.', answers: ['Eu gosto da cor azul.', 'Gosto de azul.'] },
      { prompt: 'الجلسة يوم الخميس.', answers: ['A reunião é na quinta-feira.', 'A reunião é na quinta.'] },
      { prompt: 'اشتريت اثني عشر بيضة.', answers: ['Comprei doze ovos.'] },
      { prompt: 'شعرها بني.', answers: ['O cabelo dela é castanho.', 'O cabelo dela é marrom.'] },
      { prompt: 'دروسي يوم الثلاثاء.', answers: ['Minhas aulas são na terça-feira.', 'Minhas aulas são na terça.'] },
      { prompt: 'عندي سبع تفاحات.', answers: ['Eu tenho sete maçãs.', 'Tenho sete maçãs.'] },
      { prompt: 'الشمس صفراء.', answers: ['O sol é amarelo.'] },
      { prompt: 'نلتقي يوم الأحد.', answers: ['A gente se encontra no domingo.', 'Nos vemos no domingo.'] },
    ]}],
  },

  {
    id: 'fund-ar-4',
    language: 'ar',
    stage: 'Fundamentos',
    title: 'المقالات والجنس والتوافق في البرتغالية',
    subtitle: 'فهم التذكير والتأنيث وأدوات التعريف والنكرة',
    theory: `في البرتغالية، لكل اسم جنس: إما **مذكر** أو **مؤنث**. وهذا يؤثر على المقالات (أدوات التعريف والنكرة) والصفات. هذا النظام يشبه نظام التذكير والتأنيث في العربية، لكنه يختلف في نقطة جوهرية: **جنس الاسم في البرتغالية لا يمكن التنبؤ به دائما من معناه**، وعليك حفظه مع كل كلمة جديدة (كما تحفظ "الشمس" مؤنثة و"القمر" مذكر في العربية دون قاعدة واضحة).

## أدوات التعريف

| الجنس   | العربية   | البرتغالية |
|---------|-----------|-----------|
| مذكر مفرد | الـ (مذكر) | o         |
| مؤنث مفرد | الـ (مؤنث) | a         |
| مذكر جمع  | الـ (جمع مذكر) | os    |
| مؤنث جمع  | الـ (جمع مؤنث) | as    |

## أدوات النكرة

| الجنس   | العربية   | البرتغالية |
|---------|-----------|-----------|
| مذكر مفرد | ـ (نكرة مذكر) | um     |
| مؤنث مفرد | ـ (نكرة مؤنث) | uma    |
| مذكر جمع  | ـ (نكرة جمع مذكر) | uns |
| مؤنث جمع  | ـ (نكرة جمع مؤنث) | umas|

## أمثلة للتوافق

| المذكر           | المؤنث            |
|------------------|-------------------|
| o menino bonito  | a menina bonita   |
| um livro novo    | uma casa nova     |
| os carros rápidos| as moças altas    |

## القاعدة العامة واستثناءاتها

معظم الأسماء التي تنتهي بـ **-o** مذكرة، وتلك التي تنتهي بـ **-a** مؤنثة. لكن هناك استثناءات يجب حفظها:

| الكلمة | الجنس الحقيقي | الملاحظة |
|--------|----------------|----------|
| o dia (اليوم) | مذكر | ينتهي بـ -a لكنه مذكر |
| a mão (اليد) | مؤنث | ينتهي بـ -o لكنه مؤنث |
| o problema (المشكلة) | مذكر | كلمات يونانية الأصل بـ -ema/-oma غالبا مذكرة |
| a foto (الصورة) | مؤنث | اختصار لـ "fotografia" المؤنثة |

كثير من الأسماء لا تنتهي بـ -o أو -a (مثل الكلمات المنتهية بـ -e أو ساكن)، وجنسها يجب حفظه: **a noite** (الليل، مؤنث)، **o sol** (الشمس، مذكر — عكس العربية تماما!).

## جمع الأسماء

عند الجمع، تتبع الأسماء المنتهية بحرف ساكن إضافة "-es": **professor → professores**، وتلك المنتهية بـ "-ão" قد تتحول إلى "-ões": **lição → lições**.

💡 **نصيحة:** تعلّم كل اسم جديد **مع** أداة تعريفه (o/a) من البداية، بدل تعلّم الكلمة المجردة، فهذا يثبّت الجنس في الذاكرة تلقائيا.

⚠️ **خطأ شائع:** الناطقون بالعربية يميلون لترجمة جنس الكلمة من العربية إلى البرتغالية (مثلا تخيل أن "الشمس" مؤنثة فيقولون "a sol")، لكن الصحيح هو "**o sol**" لأنه مذكر في البرتغالية. لا تعتمد على جنس الكلمة في لغتك الأم أبدا.`,
    exercises: [{ sentences: [
      { prompt: 'الولد طويل.', answers: ['O menino é alto.'] },
      { prompt: 'البنت جميلة.', answers: ['A menina é bonita.'] },
      { prompt: 'رأيت كتابا جديدا.', answers: ['Vi um livro novo.', 'Eu vi um livro novo.'] },
      { prompt: 'لدي بيت كبير.', answers: ['Eu tenho uma casa grande.', 'Tenho uma casa grande.'] },
      { prompt: 'الرجل قوي.', answers: ['O homem é forte.'] },
      { prompt: 'المرأة ذكية.', answers: ['A mulher é inteligente.'] },
      { prompt: 'السيارات سريعة.', answers: ['Os carros são rápidos.'] },
      { prompt: 'الفتيات طويلات.', answers: ['As meninas são altas.'] },
      { prompt: 'اشتريت قميصا أبيض.', answers: ['Comprei uma camisa branca.'] },
      { prompt: 'هذا كلب كبير.', answers: ['É um cachorro grande.', 'Esse cachorro é grande.'] },
      { prompt: 'هذه قطة صغيرة.', answers: ['É uma gata pequena.', 'Essa gata é pequena.'] },
      { prompt: 'المعلمون متعبون.', answers: ['Os professores estão cansados.'] },
      { prompt: 'المعلمات سعيدات.', answers: ['As professoras estão felizes.'] },
      { prompt: 'أريد قهوة باردة.', answers: ['Quero um café gelado.'] },
      { prompt: 'الطعام لذيذ.', answers: ['A comida está gostosa.', 'A comida é deliciosa.'] },
      { prompt: 'لدي أخ أكبر مني.', answers: ['Eu tenho um irmão mais velho.', 'Tenho um irmão mais velho.'] },
      { prompt: 'رأيت فيلما جيدا.', answers: ['Vi um filme bom.', 'Eu vi um filme bom.'] },
      { prompt: 'هذه مدرسة جديدة.', answers: ['Esta é uma escola nova.', 'Essa escola é nova.'] },
      { prompt: 'الأولاد يلعبون.', answers: ['Os meninos estão brincando.'] },
      { prompt: 'البنات يدرسن.', answers: ['As meninas estão estudando.'] },
    ]}],
  },

  {
    id: 'fund-ar-5',
    language: 'ar',
    stage: 'Fundamentos',
    title: 'أفعال المجموعة الأولى (-ar) في المضارع',
    subtitle: 'تعلم تصريف الأفعال المنتهية بـ -ar في المضارع البسيط',
    theory: `أفعال المجموعة الأولى في البرتغالية هي تلك التي تنتهي بـ **-ar** في المصدر. وهي الأكثر شيوعا (أكثر من 90% من الأفعال الجديدة في البرتغالية تُصاغ على هذا النمط).

بخلاف العربية التي تصرّف الفعل بحسب الجنس والعدد بدقة (هو يتكلم / هي تتكلم / هم يتكلمون / هن يتكلمن)، فإن البرتغالية المحكية تستخدم تصريفا واحدا فقط لـ "você/ele/ela" (المفرد) ولـ "vocês/eles/elas" (الجمع)، دون تمييز بين المذكر والمؤنث في الفعل نفسه.

## مثال: فعل FALAR (يتكلم)

| الضمير       | الضمير العربي    | التصريف  |
|--------------|-----------------|---------|
| Eu           | أنا             | falo    |
| Você/Ele/Ela | أنت/هو/هي       | fala    |
| Nós          | نحن             | falamos |
| Vocês/Eles   | أنتم/هم         | falam   |

## أفعال مهمة من هذه المجموعة

| المصدر   | المعنى        |
|----------|--------------|
| falar    | يتكلم        |
| trabalhar| يعمل         |
| estudar  | يدرس         |
| morar    | يسكن         |
| gostar   | يحب / يعجبه  |
| comprar  | يشتري        |
| precisar | يحتاج        |
| ajudar   | يساعد        |
| escutar  | يسمع / يصغي  |
| chegar   | يصل          |

## أفعال تتبعها حروف جر ثابتة

بعض أفعال -ar ترتبط دوما بحرف جر معين، وهذا يجب حفظه كوحدة واحدة:
- **gostar de** → Eu gosto **de** música. (أحب الموسيقى)
- **precisar de** → Eu preciso **de** ajuda. (أحتاج إلى مساعدة)
- **chegar a/em** → Eu chego **ao** trabalho. (أصل إلى العمل)

## أمثلة إضافية

- نحن نعمل في الصباح وندرس في المساء. → A gente trabalha de manhã e estuda de noite.
- هل تحتاج إلى شيء؟ → Você precisa de alguma coisa?
- هم يصلون دائما متأخرين. → Eles sempre chegam atrasados.

💡 **نصيحة:** بمجرد حفظ تصريف فعل واحد من -ar مثل "falar"، يمكنك تطبيق نفس النمط (-o, -a, -amos, -am) على آلاف الأفعال الأخرى المنتهية بـ -ar.

⚠️ **خطأ شائع:** لا تقل "Eu gosto música" بحذف "de" — فالفعل "gostar" يتطلب دوما حرف الجر "de" بعده، بعكس الفعل العربي "أحب" الذي يأخذ المفعول به مباشرة دون حرف جر.

## المفردات الأساسية

• verdura / legume — خضار
• ajuda — مساعدة
• pão — خبز
• tempo — وقت
• universidade — جامعة
• perto — قريب
• depressa — بسرعة
• manhã / noite — صباح / مساء`,
    exercises: [{ sentences: [
      { prompt: 'أنا أتكلم البرتغالية.', answers: ['Eu falo português.', 'Falo português.'] },
      { prompt: 'هو يعمل كثيرا.', answers: ['Ele trabalha muito.'] },
      { prompt: 'أنا أدرس كل يوم.', answers: ['Eu estudo todo dia.', 'Estudo todo dia.'] },
      { prompt: 'هي تسكن في ساو باولو.', answers: ['Ela mora em São Paulo.'] },
      { prompt: 'أنا أحب الموسيقى.', answers: ['Eu gosto de música.', 'Gosto de música.'] },
      { prompt: 'أنا أشتري الخضار.', answers: ['Eu compro as verduras.', 'Compro as verduras.', 'Compro legumes.'] },
      { prompt: 'أحتاج إلى مساعدة.', answers: ['Eu preciso de ajuda.', 'Preciso de ajuda.'] },
      { prompt: 'هو يساعد أمه.', answers: ['Ele ajuda a mãe dele.', 'Ele ajuda a mãe.'] },
      { prompt: 'نحن نتكلم بالعربية.', answers: ['Nós falamos árabe.', 'A gente fala árabe.'] },
      { prompt: 'هم يدرسون في الجامعة.', answers: ['Eles estudam na universidade.'] },
      { prompt: 'أنا أصل إلى العمل في الثامنة.', answers: ['Eu chego ao trabalho às oito.', 'Chego no serviço às oito.'] },
      { prompt: 'أنت تتكلم بسرعة.', answers: ['Você fala rápido.', 'Você fala depressa.'] },
      { prompt: 'نحن نسكن بالقرب من هنا.', answers: ['A gente mora perto daqui.', 'Nós moramos perto daqui.'] },
      { prompt: 'هي تحب القهوة.', answers: ['Ela gosta de café.'] },
      { prompt: 'أنا أصغي إلى البودكاست.', answers: ['Eu escuto podcast.', 'Escuto podcast.'] },
      { prompt: 'هو يشتري خبزا كل صباح.', answers: ['Ele compra pão todo dia de manhã.', 'Ele compra pão toda manhã.'] },
      { prompt: 'أنا أحتاج إلى وقت.', answers: ['Eu preciso de tempo.', 'Preciso de tempo.'] },
      { prompt: 'هم يعملون من البيت.', answers: ['Eles trabalham de casa.', 'Eles trabalham em casa.'] },
      { prompt: 'أنت تدرس جيدا.', answers: ['Você estuda bem.'] },
      { prompt: 'نحن نتعلم البرتغالية.', answers: ['A gente aprende português.', 'Nós aprendemos português.'] },
    ]}],
  },

  {
    id: 'rev-fund-ar',
    language: 'ar',
    stage: 'Fundamentos',
    title: 'مراجعة الأساسيات',
    subtitle: 'راجع كل ما تعلمته في مرحلة الأساسيات',
    theory: `هذا درس المراجعة الشاملة لمرحلة الأساسيات.

**ما تعلمناه حتى الآن:**

**1. التحيات والتقديم**
- Olá / Oi — مرحبا
- Bom dia / Boa tarde / Boa noite — صباح/مساء/تصبح على خير
- Meu nome é... / Me chamo... — اسمي...

**2. فعلا الكون: ser و estar**

| الضمير | ser  | estar  |
|--------|------|--------|
| Eu     | sou  | estou  |
| Você   | é    | está   |
| Nós    | somos| estamos|
| Eles   | são  | estão  |

**3. الأرقام والألوان والأيام**
- um, dois, três... — واحد، اثنان، ثلاثة...
- vermelho, azul, verde... — أحمر، أزرق، أخضر...
- segunda, terça, quarta... — الإثنين، الثلاثاء، الأربعاء...

**4. المقالات والجنس**
- o/a (مُعرَّف) — um/uma (نكرة)
- الأسماء توافق الصفات والمقالات في الجنس والعدد

**5. أفعال -ar**
- falar → falo, fala, falamos, falam
- trabalhar, estudar, morar, gostar, comprar...

## أمثلة شاملة تجمع كل القواعد

- مرحبا، أنا مهندس وأسكن في البرازيل منذ سنتين. → Oi, eu sou engenheiro e moro no Brasil há dois anos.
- هي متعبة اليوم لأنها عملت كثيرا. → Ela está cansada hoje porque trabalhou muito.
- لدي ثلاثة كتب جديدة وأحب القراءة. → Eu tenho três livros novos e gosto de ler.

💡 **نصيحة للمراجعة:** اربط كل قاعدة بمثال شخصي من حياتك — هذا يثبّت التصريفات في الذاكرة أفضل من الحفظ الجاف.

⚠️ **تذكير بالأخطاء الشائعة:** لا تخلط بين **ser** (دائم) و **estar** (مؤقت)، ولا تنسَ أن المقالات (o/a, um/uma) والصفات تتبع جنس الاسم، حتى لو اختلف هذا الجنس عن مرادفه في العربية.`,
    exercises: [{ sentences: [
      { prompt: 'مرحبا، اسمي أحمد.', answers: ['Olá, meu nome é Ahmed.', 'Oi, me chamo Ahmed.'] },
      { prompt: 'أنا طالب وأدرس كل يوم.', answers: ['Eu sou estudante e estudo todo dia.', 'Sou estudante e estudo todo dia.'] },
      { prompt: 'هي تسكن في ريو دي جانيرو.', answers: ['Ela mora no Rio de Janeiro.'] },
      { prompt: 'كيف حالك اليوم؟', answers: ['Como você está hoje?', 'Tudo bem hoje?'] },
      { prompt: 'أنا بخير شكرا، وأنت؟', answers: ['Estou bem, obrigado. E você?', 'Tô bem, obrigado. E você?'] },
      { prompt: 'لدي ثلاثة كتب وقلمان.', answers: ['Eu tenho três livros e duas canetas.', 'Tenho três livros e duas canetas.'] },
      { prompt: 'السيارة الحمراء جديدة.', answers: ['O carro vermelho é novo.'] },
      { prompt: 'نلتقي يوم الخميس.', answers: ['A gente se vê na quinta.', 'Nos encontramos na quinta-feira.'] },
      { prompt: 'أنا أحب القهوة البرازيلية.', answers: ['Eu gosto de café brasileiro.', 'Gosto de café brasileiro.'] },
      { prompt: 'هو مريض ولا يعمل اليوم.', answers: ['Ele está doente e não trabalha hoje.'] },
      { prompt: 'المعلمة جديدة في المدرسة.', answers: ['A professora é nova na escola.'] },
      { prompt: 'نحن نتكلم البرتغالية في الصف.', answers: ['A gente fala português na aula.', 'Nós falamos português na aula.'] },
      { prompt: 'اشتريت قميصا أزرق يوم الجمعة.', answers: ['Comprei uma camisa azul na sexta.', 'Eu comprei uma camisa azul na sexta-feira.'] },
      { prompt: 'من أين أنت؟ أنا من المغرب.', answers: ['De onde você é? Sou do Marrocos.'] },
      { prompt: 'الطلاب يدرسون في المكتبة.', answers: ['Os alunos estão estudando na biblioteca.', 'Os estudantes estudam na biblioteca.'] },
      { prompt: 'أحتاج إلى اثني عشر دقيقة.', answers: ['Preciso de doze minutos.', 'Eu preciso de doze minutos.'] },
      { prompt: 'هي تعمل يوم الأحد أيضا.', answers: ['Ela trabalha no domingo também.'] },
      { prompt: 'مع السلامة، أراك يوم الإثنين.', answers: ['Tchau, te vejo na segunda.', 'Até mais, a gente se vê na segunda-feira.'] },
      { prompt: 'الولد الصغير يلعب في الحديقة.', answers: ['O menino pequeno está brincando no parque.', 'O menino pequeno brinca no jardim.'] },
      { prompt: 'أنا أصل إلى المدرسة في التاسعة.', answers: ['Eu chego na escola às nove.', 'Chego na escola às nove.'] },
    ]}],
    dialogExercise: {
      audioText: 'Oi! Meu nome é Fatima. Eu tenho trinta anos e sou de Marrocos. Moro no Brasil há dois anos.',
      question: 'What does Fatima say about herself?',
      options: [
        { text: 'She is 30 years old, from Morocco, and has lived in Brazil for 2 years.', correct: true },
        { text: 'She is 30 years old, from Brazil, and lives in Morocco.', correct: false },
        { text: 'She is 20 years old and recently arrived from Morocco.', correct: false },
        { text: 'She has been in Brazil for 5 years and is from Portugal.', correct: false },
      ],
    },
  },

  // ========== BÁSICO ==========
  {
    id: 'bas-ar-1',
    language: 'ar',
    stage: 'Básico',
    title: 'الأفعال الشاذة الرئيسية',
    subtitle: 'تعلم أهم الأفعال الشاذة في البرتغالية: ser / ter / ir / fazer / poder / querer',
    theory: `الأفعال الشاذة (verbos irregulares) لا تتبع القاعدة العامة في التصريف (إضافة -o, -a, -amos, -am لجذر ثابت)، بل يتغير جذرها من ضمير إلى آخر. يجب حفظها فرديا، تماما كما تحفظ الأفعال "المعتلة" أو "الناقصة" في العربية (مثل قال، رأى) التي لا تتبع نمط الفعل الصحيح.

## فعل TER (يملك / لديه)

| الضمير | التصريف |
|--------|---------|
| Eu     | tenho   |
| Você   | tem     |
| Nós    | temos   |
| Eles   | têm     |

## فعل IR (يذهب)

| الضمير | التصريف |
|--------|---------|
| Eu     | vou     |
| Você   | vai     |
| Nós    | vamos   |
| Eles   | vão     |

## فعل FAZER (يفعل / يعمل)

| الضمير | التصريف |
|--------|---------|
| Eu     | faço    |
| Você   | faz     |
| Nós    | fazemos |
| Eles   | fazem   |

## فعل PODER (يستطيع)

| الضمير | التصريف |
|--------|---------|
| Eu     | posso   |
| Você   | pode    |
| Nós    | podemos |
| Eles   | podem   |

## فعل QUERER (يريد)

| الضمير | التصريف |
|--------|---------|
| Eu     | quero   |
| Você   | quer    |
| Nós    | queremos|
| Eles   | querem  |

## استخدامات مهمة

- **TER** يُستخدم أيضا للتعبير عن العمر: "Eu **tenho** vinte anos" (لدي عشرون سنة)، وهذا يختلف عن العربية التي تستخدم "أنا في العشرين" أو "عمري عشرون سنة" دون فعل "يملك".
- **IR** يُستخدم لبناء زمن المستقبل القريب: "Eu **vou** estudar" (سأدرس)، تماما كما نستخدم "رايح أدرس" في العربية العامية.
- **PODER** و **QUERER** غالبا تتبعهما أفعال في صيغة المصدر مباشرة دون حرف ربط: "Eu **quero** comer" (أريد أن آكل) — لا حاجة لما يعادل "أن" بين الفعلين.

## أمثلة إضافية

- لدي اجتماع في العاشرة. → Eu tenho uma reunião às dez.
- هل تريد الذهاب معنا؟ → Você quer ir com a gente?
- لا أستطيع فعل هذا الآن. → Eu não posso fazer isso agora.

💡 **نصيحة:** هذه الأفعال الخمسة (ter, ir, fazer, poder, querer) هي من أكثر الأفعال استخدما في الحديث اليومي — احفظها جيدا قبل الانتقال للأفعال الأقل شيوعا.

⚠️ **خطأ شائع:** لا تقل "Eu quero que comer" — البرتغالية لا تحتاج كلمة رابطة (تعادل "أن") بين فعلين متتاليين عندما يكون الفاعل نفسه، بعكس بعض تراكيب العربية.

## المفردات الأساسية

• carro — سيارة
• trabalho / serviço — عمل
• reunião — اجتماع
• festa — حفلة
• praia — شاطئ/بحر
• loja / mercado — متجر/سوق
• tarefa / lição — واجب
• conseguir — يستطيع / ينجح في`,
    exercises: [{ sentences: [
      { prompt: 'لدي سيارة جديدة.', answers: ['Eu tenho um carro novo.', 'Tenho um carro novo.'] },
      { prompt: 'أنا أذهب إلى العمل.', answers: ['Eu vou ao trabalho.', 'Vou pro trabalho.'] },
      { prompt: 'ماذا تفعل؟', answers: ['O que você faz?', 'O que você está fazendo?'] },
      { prompt: 'أستطيع المساعدة.', answers: ['Eu posso ajudar.', 'Posso te ajudar.'] },
      { prompt: 'أريد قهوة.', answers: ['Eu quero um café.', 'Quero um café.'] },
      { prompt: 'هو لديه أخوان.', answers: ['Ele tem dois irmãos.'] },
      { prompt: 'نذهب إلى البحر.', answers: ['A gente vai à praia.', 'Nós vamos à praia.'] },
      { prompt: 'هي تعمل في مطعم.', answers: ['Ela trabalha em restaurante.'] },
      { prompt: 'لا أستطيع المجيء اليوم.', answers: ['Não posso vir hoje.', 'Eu não posso ir hoje.'] },
      { prompt: 'هم يريدون ماءً.', answers: ['Eles querem água.'] },
      { prompt: 'ماذا تريد أن تأكل؟', answers: ['O que você quer comer?'] },
      { prompt: 'نحن نذهب إلى المدرسة معا.', answers: ['A gente vai à escola junto.', 'Nós vamos à escola juntos.'] },
      { prompt: 'أنا أفعل واجبي كل يوم.', answers: ['Eu faço minha tarefa todo dia.', 'Faço minha lição todo dia.'] },
      { prompt: 'هل تستطيع التحدث بالعربية؟', answers: ['Você pode falar árabe?', 'Você consegue falar árabe?'] },
      { prompt: 'لديها وقت الآن.', answers: ['Ela tem tempo agora.'] },
      { prompt: 'أريد أن أتعلم البرتغالية.', answers: ['Eu quero aprender português.', 'Quero aprender português.'] },
      { prompt: 'هو يذهب إلى المتجر.', answers: ['Ele vai ao mercado.', 'Ele vai na loja.'] },
      { prompt: 'نحن نستطيع فعل ذلك.', answers: ['A gente consegue fazer isso.', 'Nós podemos fazer isso.'] },
      { prompt: 'لدينا الكثير من العمل.', answers: ['A gente tem muito trabalho.', 'Nós temos muito trabalho.'] },
      { prompt: 'هم يذهبون إلى الحفل.', answers: ['Eles vão à festa.', 'Eles vão pro show.'] },
    ]}],
  },

  {
    id: 'bas-ar-2',
    language: 'ar',
    stage: 'Básico',
    title: 'النفي في البرتغالية',
    subtitle: 'كيفية نفي الجمل باستخدام não / nunca / nada / ninguém',
    theory: `للنفي في البرتغالية نضع **não** قبل الفعل مباشرة. وهناك كلمات نفي أخرى مهمة. هذا يشبه استخدام "لا" أو "لم" أو "لن" في العربية، لكن البرتغالية لا تغيّر شكل الفعل بحسب نوع النفي (الماضي/المضارع) كما تفعل العربية (لا أذهب / لم أذهب / لن أذهب) — كلمة "não" واحدة تكفي لكل الأزمنة.

## كلمات النفي

| العربية    | البرتغالية |
|------------|-----------|
| لا / لا... | não       |
| أبدا       | nunca     |
| لا شيء    | nada      |
| لا أحد    | ninguém   |
| ليس بعد / لم يحدث بعد | ainda não |
| ولا حتى   | nem       |

## القواعد الأساسية

1. نضع não قبل الفعل دوما، بلا تغيير في تصريف الفعل نفسه: Eu **não** falo inglês.
2. يمكن استخدام نفيين معا (ازدواج النفي)، وهذا أمر طبيعي وصحيح في البرتغالية البرازيلية (بعكس الإنجليزية، لكن قريب من بعض تراكيب العربية العامية): Eu **não** fiz **nada** = لم أفعل شيئا (حرفيا: "أنا لا فعلت لا شيء").
3. "nunca" تأتي قبل الفعل أو بعد não: **Nunca** fui ao Japão / Eu **não** vou **nunca**.
4. "ninguém" يمكن أن يأتي في بداية الجملة (بدون não) أو بعد الفعل المنفي بـ não: **Ninguém** sabe / **Não** sabe **ninguém**.

## ترتيب الكلمات في النفي المزدوج

| البرتغالية | الترتيب |
|-----------|---------|
| Não vejo ninguém. | não + فعل + ninguém |
| Ninguém vem. | ninguém + فعل (بدون não) |
| Nunca vou lá. | nunca + فعل (بدون não) |

## أمثلة إضافية

- لا أملك شيئا الآن. → Eu não tenho nada agora.
- لم يتصل بي أحد اليوم. → Ninguém me ligou hoje. / Não me ligou ninguém hoje.
- هو لا يشرب القهوة ولا الشاي. → Ele não bebe café nem chá.

💡 **نصيحة:** في الحديث السريع، البرازيليون يكررون "não" في نهاية الجملة للتوكيد: "Eu não vou, não" (أنا لن أذهب، لا) — هذا طبيعي تماما وليس خطأ.

⚠️ **خطأ شائع:** لا تترجم "لم أفعل شيئا" بجملة فيها نفي واحد فقط مثل "Eu fiz nada" — هذا خطأ، لأن "nada" بمفردها بدون "não" تعني معنى مختلفا أو تبدو ناقصة. الصحيح هو الإبقاء على النفي المزدوج: "Eu **não** fiz **nada**".

## المفردات الأساسية

• dormir — ينام
• ligar — يتصل (هاتفيا)
• entender — يفهم
• beber — يشرب
• problema — مشكلة
• álcool — كحول
• vir — يأتي
• ainda — لا يزال`,
    exercises: [{ sentences: [
      { prompt: 'أنا لا أتكلم الإسبانية.', answers: ['Eu não falo espanhol.', 'Não falo espanhol.'] },
      { prompt: 'هو لا يأكل اللحم أبدا.', answers: ['Ele nunca come carne.', 'Ele não come carne nunca.'] },
      { prompt: 'لم أفعل شيئا.', answers: ['Eu não fiz nada.', 'Não fiz nada.'] },
      { prompt: 'لا يوجد أحد في البيت.', answers: ['Não tem ninguém em casa.', 'Não há ninguém em casa.'] },
      { prompt: 'أنا لا أحب القهوة.', answers: ['Eu não gosto de café.', 'Não gosto de café.'] },
      { prompt: 'هي لم تذهب بعد.', answers: ['Ela ainda não foi.', 'Ela não foi ainda.'] },
      { prompt: 'لم أفهم شيئا.', answers: ['Eu não entendi nada.', 'Não entendi nada.'] },
      { prompt: 'هو لا يعمل هنا.', answers: ['Ele não trabalha aqui.'] },
      { prompt: 'أنا لا أريد ذلك.', answers: ['Eu não quero isso.', 'Não quero isso.'] },
      { prompt: 'لا أحد يعرف.', answers: ['Ninguém sabe.', 'Não sabe ninguém.'] },
      { prompt: 'هم لا يسكنون هنا.', answers: ['Eles não moram aqui.'] },
      { prompt: 'أنا لم أنم جيدا.', answers: ['Eu não dormi bem.', 'Não dormi bem.'] },
      { prompt: 'هي لا تشرب الكحول أبدا.', answers: ['Ela nunca bebe álcool.', 'Ela não bebe álcool nunca.'] },
      { prompt: 'لا توجد مشكلة.', answers: ['Não tem problema.', 'Sem problema.'] },
      { prompt: 'أنا لا أحتاج إلى مساعدة.', answers: ['Eu não preciso de ajuda.', 'Não preciso de ajuda.'] },
      { prompt: 'هو لم يتصل بي.', answers: ['Ele não me ligou.'] },
      { prompt: 'نحن لا نذهب اليوم.', answers: ['A gente não vai hoje.', 'Nós não vamos hoje.'] },
      { prompt: 'لم يأت أحد إلى الحفل.', answers: ['Ninguém veio à festa.', 'Não veio ninguém na festa.'] },
      { prompt: 'أنا لست متعبا.', answers: ['Eu não estou cansado.', 'Não tô cansado.'] },
      { prompt: 'هذا لم يحدث أبدا.', answers: ['Isso nunca aconteceu.', 'Isso não aconteceu nunca.'] },
    ]}],
  },

  {
    id: 'bas-ar-3',
    language: 'ar',
    stage: 'Básico',
    title: 'الماضي البسيط (Pretérito Perfeito)',
    subtitle: 'تعلم كيفية التحدث عن أحداث انتهت في الماضي',
    theory: `الماضي البسيط (Pretérito Perfeito) يُعبَّر به عن أحداث وقعت وانتهت في الماضي بشكل محدد ومكتمل — يشبه استخدام الفعل الماضي البسيط في العربية (ذهبتُ، أكلتُ، تكلمتُ) لحدث منتهٍ تماما.

## أفعال -ar في الماضي

| الضمير | falar → | comprar → |
|--------|---------|-----------|
| Eu     | falei   | comprei   |
| Você   | falou   | comprou   |
| Nós    | falamos | compramos |
| Eles   | falaram | compraram |

## أفعال -er في الماضي

| الضمير | comer → | beber → |
|--------|---------|---------|
| Eu     | comi    | bebi    |
| Você   | comeu   | bebeu   |
| Nós    | comemos | bebemos |
| Eles   | comeram | beberam |

## أفعال شاذة مهمة

| المصدر | أنا (Eu) | أنت/هو (Você) |
|--------|----------|----------------|
| ser / ir | fui    | foi            |
| ter    | tive     | teve           |
| fazer  | fiz      | fez            |
| vir    | vim      | veio           |
| ver    | vi       | viu            |
| dizer  | disse    | disse          |

ملاحظة لافتة: **ser** و **ir** يتشاركان نفس التصريف في هذا الزمن (fui، foi...)؛ يُفهم المعنى المقصود من سياق الجملة.

## مؤشرات الماضي

ontem (أمس)، antes (قبل)، já (بالفعل)، no ano passado (العام الماضي)، na semana passada (الأسبوع الماضي)، há dois dias (منذ يومين)

## أمثلة إضافية

- هل أكلت بالفعل؟ → Você já comeu?
- لم نر هذا الفيلم من قبل. → A gente nunca viu esse filme antes.
- قالوا لي الحقيقة. → Eles me disseram a verdade.

💡 **نصيحة:** لاحظ أن الفعل "dizer" يحتفظ بنفس الشكل لـ Eu و Você في صيغة الغائب (disse)؛ السياق أو الضمير المذكور هو ما يوضح الفاعل.

⚠️ **خطأ شائع:** لا تخلط بين الماضي البسيط (حدث منتهٍ ومحدد: "Eu fui ao Brasil em 2020") والماضي الاستمراري (عادة أو وضع مستمر: "Eu ia ao Brasil todo ano") — استخدام الزمن الخطأ يغيّر المعنى تماما، وهذا فرق لا وجود له بنفس الوضوح في تصريف الفعل الماضي بالعربية.

## المفردات الأساسية

• ontem — أمس
• comprar — يشتري
• vir — يأتي
• ver — يرى
• dizer — يقول
• chegar — يصل
• aeroporto — مطار
• presente — هدية
• já — بالفعل`,
    exercises: [{ sentences: [
      { prompt: 'ذهبت إلى السوق أمس.', answers: ['Eu fui ao mercado ontem.', 'Fui no mercado ontem.'] },
      { prompt: 'أكلت بيتزا يوم الجمعة.', answers: ['Eu comi pizza na sexta.', 'Comi pizza na sexta-feira.'] },
      { prompt: 'هو تكلم مع مديره.', answers: ['Ele falou com o chefe dele.'] },
      { prompt: 'اشتريت حذاءً جديدا.', answers: ['Eu comprei um sapato novo.', 'Comprei um tênis novo.'] },
      { prompt: 'جئت من المطار.', answers: ['Eu vim do aeroporto.', 'Vim do aeroporto.'] },
      { prompt: 'هي رأت فيلما أمس.', answers: ['Ela viu um filme ontem.'] },
      { prompt: 'كان لدي اجتماع الصباح.', answers: ['Eu tive uma reunião de manhã.', 'Tive uma reunião de manhã.'] },
      { prompt: 'ماذا أكلت؟', answers: ['O que você comeu?', 'O que cê comeu?'] },
      { prompt: 'هم ذهبوا إلى الشاطئ.', answers: ['Eles foram à praia.'] },
      { prompt: 'فعلت واجبي.', answers: ['Eu fiz minha tarefa.', 'Fiz minha lição de casa.'] },
      { prompt: 'شربت عصيرا.', answers: ['Eu bebi um suco.', 'Bebi um suco.'] },
      { prompt: 'قالت لي شيئا مهما.', answers: ['Ela me disse algo importante.'] },
      { prompt: 'نحن ذهبنا إلى المطعم.', answers: ['A gente foi ao restaurante.', 'Nós fomos ao restaurante.'] },
      { prompt: 'هو لم يأت.', answers: ['Ele não veio.'] },
      { prompt: 'تكلمت مع أمي.', answers: ['Eu falei com minha mãe.', 'Falei com minha mãe.'] },
      { prompt: 'اشترينا الهدايا.', answers: ['A gente comprou os presentes.', 'Nós compramos os presentes.'] },
      { prompt: 'هي جاءت متأخرة.', answers: ['Ela chegou tarde.', 'Ela veio atrasada.'] },
      { prompt: 'رأيت أصدقائي.', answers: ['Eu vi meus amigos.', 'Vi meus amigos.'] },
      { prompt: 'ماذا فعلت في الإجازة؟', answers: ['O que você fez nas férias?'] },
      { prompt: 'أكلوا في المطعم.', answers: ['Eles comeram no restaurante.'] },
    ]}],
  },

  {
    id: 'bas-ar-4',
    language: 'ar',
    stage: 'Básico',
    title: 'الماضي الاستمراري (Pretérito Imperfeito)',
    subtitle: 'التعبير عن عادات وأوضاع مستمرة في الماضي',
    theory: `الماضي الاستمراري (Pretérito Imperfeito) يُستخدم لـ:
1. **العادات في الماضي**: ما كنا نفعله باستمرار (يشبه "كان + فعل مضارع" في العربية: "كنت أذهب")
2. **الأوضاع المستمرة**: كيف كانت الأشياء
3. **الأفعال المتزامنة**: ما كان يحدث بينما...

هذا الزمن يقابل تقريبا تركيب "كان + يفعل" بالعربية، بعكس الماضي البسيط (fiz) الذي يقابل "فعلتُ" المنتهي والمحدد.

## تصريف أفعال -ar في الماضي الاستمراري

| الضمير | falar →  | morar →  |
|--------|----------|----------|
| Eu     | falava   | morava   |
| Você   | falava   | morava   |
| Nós    | falávamos| morávamos|
| Eles   | falavam  | moravam  |

## تصريف أفعال -er و -ir

| الضمير | comer →  | vir →   |
|--------|----------|---------|
| Eu     | comia    | vinha   |
| Você   | comia    | vinha   |
| Nós    | comíamos | vínhamos|
| Eles   | comiam   | vinham  |

## أفعال شاذة

| المصدر | Eu      | Você    |
|--------|---------|---------|
| ser    | era     | era     |
| ter    | tinha   | tinha   |
| ir     | ia      | ia      |

## مؤشرات الزمن

sempre (دائما)، antes (قبلا)، quando era criança (عندما كنت صغيرا)، naquela época (في ذلك الوقت)، todo dia (كل يوم - في سياق ماضٍ)

## الماضي البسيط مقابل الماضي الاستمراري

| الجملة | الزمن | المعنى |
|--------|-------|--------|
| Eu fui à praia ontem. | ماضي بسيط | ذهبت إلى الشاطئ أمس (حدث واحد منتهٍ) |
| Eu ia à praia todo verão. | ماضي استمراري | كنت أذهب إلى الشاطئ كل صيف (عادة متكررة) |

## أمثلة إضافية

- بينما كانت تطبخ، كان هو يقرأ. → Enquanto ela cozinhava, ele lia.
- في صغري كنت أعيش مع جدتي. → Quando eu era criança, eu morava com minha avó.
- كان الجو حارا جدا في ذلك اليوم. → Estava muito calor naquele dia.

💡 **نصيحة:** إذا كانت ترجمة الجملة العربية تحتاج "كان + فعل مضارع" (كنت أدرس، كان يلعب)، فالزمن المناسب في البرتغالية هو غالبا الـ Imperfeito.

⚠️ **خطأ شائع:** لا تستخدم الماضي البسيط لوصف عادة متكررة في الماضي. الجملة "كنا نلعب كل يوم" يجب أن تترجم "A gente **brincava** todo dia" (imperfeito) لا "A gente **brincou** todo dia" (perfeito)، لأن الثانية تعني حدثا واحدا محددا فقط.

## المفردات الأساسية

• brincar — يلعب (طفل)
• sorrir — يبتسم
• fábrica — مصنع
• criança — طفل
• cedo — مبكرا
• verão — صيف
• junto — معا
• naquela época — في ذلك الوقت`,
    exercises: [{ sentences: [
      { prompt: 'كنت أسكن في القاهرة.', answers: ['Eu morava no Cairo.', 'Morava no Cairo.'] },
      { prompt: 'كان دائما يأكل الإفطار.', answers: ['Ele sempre comia o café da manhã.', 'Ele sempre tomava café.'] },
      { prompt: 'كنا نلعب كثيرا وأنا صغير.', answers: ['A gente brincava muito quando eu era pequeno.', 'Quando era criança, a gente brincava muito.'] },
      { prompt: 'كانت تأتي كل يوم جمعة.', answers: ['Ela vinha toda sexta-feira.', 'Ela vinha toda sexta.'] },
      { prompt: 'كانوا يدرسون ليلا.', answers: ['Eles estudavam de noite.', 'Eles estudavam à noite.'] },
      { prompt: 'كنت أحب الشيكولاتة كثيرا.', answers: ['Eu adorava chocolate.', 'Eu gostava muito de chocolate.'] },
      { prompt: 'كان يعمل في مصنع.', answers: ['Ele trabalhava em uma fábrica.'] },
      { prompt: 'كنا نذهب إلى الشاطئ كل صيف.', answers: ['A gente ia à praia todo verão.', 'Nós íamos à praia todo verão.'] },
      { prompt: 'كانت دائما تبتسم.', answers: ['Ela sempre sorria.'] },
      { prompt: 'كنت طفلا مشاغبا.', answers: ['Eu era uma criança bagunceira.', 'Era uma criança arteira.'] },
      { prompt: 'كانوا يتكلمون كثيرا.', answers: ['Eles falavam muito.'] },
      { prompt: 'كان يملك سيارة قديمة.', answers: ['Ele tinha um carro velho.'] },
      { prompt: 'كنت أنام مبكرا دائما.', answers: ['Eu sempre dormia cedo.', 'Sempre dormia cedo.'] },
      { prompt: 'كانوا يعيشون في بيت كبير.', answers: ['Eles moravam em uma casa grande.'] },
      { prompt: 'ماذا كنت تفعل؟', answers: ['O que você fazia?'] },
      { prompt: 'كنت أشاهد التلفزيون كل مساء.', answers: ['Eu assistia televisão todo dia à noite.', 'Assistia TV toda noite.'] },
      { prompt: 'كان الطقس باردا.', answers: ['O tempo estava frio.', 'Fazia frio.'] },
      { prompt: 'كنا نأكل معا كل يوم أحد.', answers: ['A gente comia junto todo domingo.', 'Nós comíamos juntos todo domingo.'] },
      { prompt: 'كانت تحب الموسيقى كثيرا.', answers: ['Ela amava música.', 'Ela gostava muito de música.'] },
      { prompt: 'كان يأتي كل أسبوع.', answers: ['Ele vinha toda semana.'] },
    ]}],
  },

  {
    id: 'bas-ar-5',
    language: 'ar',
    stage: 'Básico',
    title: 'المستقبل في البرتغالية',
    subtitle: 'كيفية التعبير عن أفعال مستقبلية بطريقتين',
    theory: `في البرتغالية البرازيلية المحكية، المستقبل يُعبَّر عنه بطريقتين رئيسيتين. هذا يشبه إلى حد ما استخدام "سوف/سـ" في العربية، لكن البرتغالية المحكية تفضّل بشدة تركيبا يعادل "رايح أفعل" بالعامية، بدل صيغة المستقبل الرسمية.

## الطريقة الأولى (الأكثر استخداما): ir + مصدر الفعل

| الضمير | ir     | + مصدر    |
|--------|--------|-----------|
| Eu     | vou    | falar     |
| Você   | vai    | comer     |
| Nós    | vamos  | trabalhar |
| Eles   | vão    | estudar   |

**مثال:**
- سأتكلم معه غدا → Eu **vou falar** com ele amanhã.
- هي ستأكل هنا → Ela **vai comer** aqui.

## الطريقة الثانية: المستقبل البسيط (أكثر رسمية)

| الضمير | falar →     | comer →  |
|--------|-------------|----------|
| Eu     | falarei     | comerei  |
| Você   | falará      | comerá   |
| Nós    | falaremos   | comeremos|
| Eles   | falarão     | comerão  |

في اللغة المحكية، يُستخدم "vou + مصدر" أكثر بكثير من المستقبل البسيط؛ هذا الأخير يظهر غالبا في الكتابة الرسمية، الأخبار، والعقود.

## مؤشرات المستقبل

amanhã (غدا)، daqui a pouco (بعد قليل)، semana que vem (الأسبوع القادم)، logo (قريبا)، no futuro (في المستقبل)، mês que vem (الشهر القادم)

## مقارنة الصيغتين

| السياق | الصيغة المفضلة |
|--------|------------------|
| حديث يومي عفوي | vou + مصدر (Eu vou viajar) |
| كتابة رسمية / خطاب | المستقبل البسيط (Eu viajarei) |

## أمثلة إضافية

- ماذا ستفعل في عطلة نهاية الأسبوع؟ → O que você vai fazer no fim de semana?
- سنلتقي قريبا إن شاء الله. → A gente vai se encontrar logo.
- هل ستكونون جاهزين غدا؟ → Vocês vão estar prontos amanhã?

💡 **نصيحة:** عند الشك بين الصيغتين، استخدم "vou/vai/vamos/vão + مصدر" دائما — فهي مفهومة وصحيحة في كل السياقات المحكية وأغلب السياقات المكتوبة غير الرسمية.

⚠️ **خطأ شائع:** لا تنسَ أن الفعل بعد "ir" يبقى في صيغة المصدر دون تصريف، حتى مع تغيّر الفاعل: "Eles **vão estudar**" لا "Eles vão estudam" — الفعل الثاني (estudar) لا يتأثر بضمير الفاعل أبدا.

## المفردات الأساسية

• amanhã — غدا
• viajar — يسافر
• chover — يمطر
• trazer — يحضر/يجلب
• começar — يبدأ
• banco — بنك
• prova — امتحان
• daqui a pouco — بعد قليل`,
    exercises: [{ sentences: [
      { prompt: 'سأذهب إلى البنك غدا.', answers: ['Eu vou ao banco amanhã.', 'Vou no banco amanhã.'] },
      { prompt: 'هو سيتكلم معها.', answers: ['Ele vai falar com ela.'] },
      { prompt: 'سنذهب إلى الحفل.', answers: ['A gente vai à festa.', 'Nós vamos à festa.'] },
      { prompt: 'هي ستدرس الليلة.', answers: ['Ela vai estudar hoje à noite.', 'Ela vai estudar esta noite.'] },
      { prompt: 'سأشتري هدية لأمي.', answers: ['Eu vou comprar um presente para a minha mãe.', 'Vou comprar um presente pra minha mãe.'] },
      { prompt: 'هم سيأتون الأسبوع القادم.', answers: ['Eles vão vir semana que vem.', 'Eles vêm semana que vem.'] },
      { prompt: 'سأتصل بك بعد قليل.', answers: ['Eu vou te ligar daqui a pouco.', 'Te ligo daqui a pouco.'] },
      { prompt: 'هي ستسافر إلى البرتغال.', answers: ['Ela vai viajar para Portugal.'] },
      { prompt: 'سوف نأكل في المطعم.', answers: ['A gente vai comer no restaurante.', 'Vamos comer no restaurante.'] },
      { prompt: 'هل ستأتي معنا؟', answers: ['Você vai vir com a gente?', 'Você vem com a gente?'] },
      { prompt: 'سأتعلم البرتغالية جيدا.', answers: ['Eu vou aprender português direito.', 'Vou aprender português bem.'] },
      { prompt: 'هو سيعمل الأسبوع القادم.', answers: ['Ele vai trabalhar semana que vem.'] },
      { prompt: 'سيمطر غدا.', answers: ['Vai chover amanhã.'] },
      { prompt: 'سنرى ذلك.', answers: ['A gente vai ver.', 'Vamos ver.'] },
      { prompt: 'هي ستحضر الاجتماع.', answers: ['Ela vai participar da reunião.', 'Ela vai na reunião.'] },
      { prompt: 'سأسافر الشهر القادم.', answers: ['Eu vou viajar mês que vem.', 'Vou viajar no próximo mês.'] },
      { prompt: 'هم سيدرسون للامتحان.', answers: ['Eles vão estudar para a prova.'] },
      { prompt: 'سأكون هناك.', answers: ['Eu vou estar lá.', 'Vou estar lá.'] },
      { prompt: 'هو سيحضر الطعام.', answers: ['Ele vai trazer a comida.'] },
      { prompt: 'سنبدأ غدا.', answers: ['A gente vai começar amanhã.', 'Vamos começar amanhã.'] },
    ]}],
  },

  {
    id: 'rev-bas-ar',
    language: 'ar',
    stage: 'Básico',
    title: 'مراجعة المستوى الأساسي',
    subtitle: 'راجع كل ما تعلمته في المستوى الأساسي',
    theory: `مراجعة شاملة للمستوى الأساسي.

**1. الأفعال الشاذة الرئيسية**

| المصدر | Eu     | Você  |
|--------|--------|-------|
| ter    | tenho  | tem   |
| ir     | vou    | vai   |
| fazer  | faço   | faz   |
| poder  | posso  | pode  |
| querer | quero  | quer  |

**2. النفي**
- não + فعل → Eu **não** falo inglês.
- nunca → Ele **nunca** come carne.
- nada → Não fiz **nada**.
- ninguém → **Ninguém** veio.

**3. الأزمنة الثلاثة**

| الزمن                  | المثال              |
|------------------------|---------------------|
| المضارع                | Eu falo             |
| الماضي البسيط          | Eu falei            |
| الماضي الاستمراري      | Eu falava           |
| المستقبل               | Eu vou falar        |

## أمثلة شاملة للمراجعة

- لم أذهب إلى السوق أمس لأنني كنت متعبا. → Eu não fui ao mercado ontem porque eu estava cansado.
- كنت أعمل هناك كل يوم، لكنني سأبدأ عملا جديدا الأسبوع القادم. → Eu trabalhava lá todo dia, mas vou começar um trabalho novo semana que vem.
- هل تستطيع المساعدة؟ لا أستطيع فعل هذا بمفردي. → Você pode ajudar? Eu não consigo fazer isso sozinho.

💡 **نصيحة للمراجعة الشاملة:** عند بناء أي جملة، اسأل نفسك أولا: هل الحدث ماضٍ منتهٍ (perfeito)، عادة ماضية (imperfeito)، أم مستقبل (vou + مصدر)؟ هذا التمييز الثلاثي هو مفتاح الزمن الصحيح في البرتغالية.

⚠️ **تذكير بأكثر الأخطاء شيوعا لدى الناطقين بالعربية:** الخلط بين ser/estar، نسيان توافق الجنس بين الاسم والصفة والمقال، واستخدام الماضي البسيط في مكان الماضي الاستمراري (أو العكس).`,
    exercises: [{ sentences: [
      { prompt: 'لدي سؤال مهم.', answers: ['Eu tenho uma pergunta importante.', 'Tenho uma pergunta.'] },
      { prompt: 'ذهبت إلى السوق أمس.', answers: ['Eu fui ao mercado ontem.', 'Fui no mercado ontem.'] },
      { prompt: 'كنت أسكن في القاهرة قبلا.', answers: ['Eu morava no Cairo antes.', 'Antes eu morava no Cairo.'] },
      { prompt: 'سأتصل بك غدا.', answers: ['Eu vou te ligar amanhã.', 'Te ligo amanhã.'] },
      { prompt: 'هو لا يأكل اللحم أبدا.', answers: ['Ele nunca come carne.'] },
      { prompt: 'ماذا فعلت في الإجازة؟', answers: ['O que você fez nas férias?'] },
      { prompt: 'كانوا يلعبون كل يوم.', answers: ['Eles brincavam todo dia.'] },
      { prompt: 'هي ستذهب إلى الجامعة.', answers: ['Ela vai à universidade.', 'Ela vai para a faculdade.'] },
      { prompt: 'أستطيع المساعدة إذا أردت.', answers: ['Eu posso ajudar se você quiser.', 'Posso te ajudar se precisar.'] },
      { prompt: 'لم أقل شيئا.', answers: ['Eu não disse nada.', 'Não falei nada.'] },
      { prompt: 'كنا نذهب إلى الشاطئ كل صيف.', answers: ['A gente ia à praia todo verão.'] },
      { prompt: 'هو سيجيء بعد قليل.', answers: ['Ele vai chegar daqui a pouco.', 'Ele vem já já.'] },
      { prompt: 'لا أريد شيئا.', answers: ['Eu não quero nada.', 'Não quero nada.'] },
      { prompt: 'اشترت هدية لصديقتها.', answers: ['Ela comprou um presente para a amiga dela.'] },
      { prompt: 'كان دائما يبتسم.', answers: ['Ele sempre sorria.'] },
      { prompt: 'سنبدأ الدراسة الأسبوع القادم.', answers: ['A gente vai começar a estudar semana que vem.', 'Vamos começar as aulas semana que vem.'] },
      { prompt: 'هم لا يعيشون هنا.', answers: ['Eles não moram aqui.'] },
      { prompt: 'فعلت الواجب البارحة.', answers: ['Eu fiz a tarefa ontem.', 'Fiz a lição ontem.'] },
      { prompt: 'كانت تحب القراءة.', answers: ['Ela gostava de ler.', 'Ela adorava leitura.'] },
      { prompt: 'هل تستطيع أن تفعل ذلك؟', answers: ['Você consegue fazer isso?', 'Você pode fazer isso?'] },
    ]}],
    dialogExercise: {
      audioText: 'Ontem eu fui ao banco mas não consegui resolver meu problema. Vou tentar de novo amanhã.',
      question: 'What did the person say?',
      options: [
        { text: 'They went to the bank but could not solve their problem, will try again tomorrow.', correct: true },
        { text: 'They solved their problem at the bank and will not go back.', correct: false },
        { text: 'They forgot to go to the bank and will go tomorrow.', correct: false },
        { text: 'They went to the bank and everything worked out fine.', correct: false },
      ],
    },
  },
];
