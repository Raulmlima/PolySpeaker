import { MODULES_EN } from './modules_en';
import { MODULES_DE } from './modules_de';
import { MODULES_FR } from './modules_fr';
import { MODULES_IT } from './modules_it';
import { MODULES_PT } from './modules_pt';
import { MODULES_AR } from './modules_ar';
import { MODULES_ZH } from './modules_zh';

export const STAGES = ['Alfabeto', 'Fundamentos', 'Básico', 'Intermediário', 'Avançado', 'Variados'];

export const modules = [

  // ═══════════════════════════════════════════════════════════════
  //  FUNDAMENTOS
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'fund-1', stage: 'Fundamentos', order: 1,
    title: 'Quem sou eu?',
    subtitle: 'Ser e pronomes pessoais',
    theory: `## Pronomes pessoais

| Singular              | Plural                          |
|-----------------------|---------------------------------|
| yo (eu)               | nosotros/nosotras (nós)         |
| tú (você informal)    | vosotros/vosotras (vocês — ES)  |
| él / ella             | ellos / ellas                   |
| usted (você formal)   | ustedes (vocês formal)          |

Note que "vosotros" só é usado na Espanha. Em toda a América Latina, "ustedes" serve tanto para o formal quanto para o informal no plural.

## O verbo SER no presente

| Pronome      | SER   |
|--------------|-------|
| yo           | soy   |
| tú           | eres  |
| él/ella      | es    |
| nosotros     | somos |
| vosotros     | sois  |
| ellos/ellas  | son   |

## Exemplos

• Soy de Brasil. (Sou do Brasil.)
• ¿Eres profesor? (Você é professor?)
• Nosotros somos amigos desde la infancia. (Nós somos amigos desde a infância.)

⚠️ Cuidado com "tú" vs "usted": "tú" é informal (amigos, família, colegas); "usted" é formal (desconhecidos, situações de respeito). Misturar os dois numa mesma frase é um erro comum de quem traduz literalmente do português, que usa "você" para ambos os registros.

💡 O pronome sujeito é frequentemente omitido em espanhol — "Soy Pedro" soa mais natural do que "Yo soy Pedro". Use o pronome apenas para dar ênfase ou evitar ambiguidade (já que "es" sozinho pode ser ele, ela ou você-formal).

## Vocabulário-chave

• español — espanhol
• estudiante — estudante
• profesor / profesora — professor / professora
• amigo / amiga — amigo / amiga
• la infancia — a infância
• médico / médica — médico / médica`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu sou espanhol.', answers: ['Yo soy español.', 'Soy español.'] },
          { prompt: 'Você é estudante.', answers: ['Tú eres estudiante.', 'Eres estudiante.'] },
          { prompt: 'Ela é médica.', answers: ['Ella es médica.', 'Es médica.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Nós somos amigos.', answers: ['Nosotros somos amigos.', 'Somos amigos.', 'Nosotras somos amigas.', 'Somos amigas.'] },
          { prompt: 'Vocês são professores.', answers: ['Vosotros sois profesores.', 'Sois profesores.', 'Ustedes son profesores.', 'Son profesores.', 'Vosotras sois profesoras.', 'Ustedes son profesoras.'] },
          { prompt: 'Eles são estudantes.', answers: ['Ellos son estudiantes.', 'Son estudiantes.', 'Ellas son estudiantes.'] },
        ],
      },
    ],
  },

  {
    id: 'fund-2', stage: 'Fundamentos', order: 2,
    title: 'Como estou e onde estou',
    subtitle: 'O verbo estar',
    theory: `## O verbo ESTAR no presente

| Pronome      | ESTAR  |
|--------------|--------|
| yo           | estoy  |
| tú           | estás  |
| él/ella      | está   |
| nosotros     | estamos|
| vosotros     | estáis |
| ellos/ellas  | están  |

## Quando usar ESTAR

• Localização — "El libro está en la mesa." (O livro está na mesa.)
• Estados físicos ou emocionais — "Estoy cansado." (Estou cansado.)
• Resultado de uma ação — "La ventana está abierta." (A janela está aberta.)
• Ações contínuas (com gerúndio) — "Estoy comiendo." (Estou comendo.)

## Mais exemplos

• ¿Cómo estás? (Como você está?)
• Estamos en Madrid de vacaciones. (Estamos em Madrid de férias.)
• El café está frío. (O café está frio.)

⚠️ "Estar" se conjuga com acento na 2ª e 3ª pessoa do singular (estás, está) — é comum esquecer o acento ao escrever, mudando a entonação da palavra.

💡 Dica rápida: se a característica pode mudar com o tempo (humor, localização, estado), use ESTAR; se for algo definidor e estável, normalmente é SER (veja o próximo módulo para a comparação completa).

## Vocabulário-chave

• cansado — cansado
• la casa — a casa
• feliz — feliz
• caliente — quente
• frío — frio
• listo — pronto`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu estou cansado.', answers: ['Yo estoy cansado.', 'Estoy cansado.'] },
          { prompt: 'Ela está em casa.', answers: ['Ella está en casa.', 'Está en casa.'] },
          { prompt: 'Nós estamos felizes.', answers: ['Nosotros estamos felices.', 'Estamos felices.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'O café está quente.', answers: ['El café está caliente.'] },
          { prompt: 'Onde você está?', answers: ['¿Dónde estás?', '¿Dónde estás tú?', '¿Dónde está?', '¿Dónde está usted?'] },
          { prompt: 'Vocês estão prontos.', answers: ['Vosotros estáis listos.', 'Estáis listos.', 'Ustedes están listos.', 'Están listos.'] },
        ],
      },
    ],
  },

  {
    id: 'fund-3', stage: 'Fundamentos', order: 3,
    title: 'Ser ou Estar?',
    subtitle: 'A distinção que muda tudo',
    theory: `## SER → características permanentes ou essenciais

• Identidade — "Soy Pedro." (Sou o Pedro.)
• Origem/nacionalidade — "Ella es francesa." (Ela é francesa.)
• Profissão — "Es médico." (É médico.)
• Hora e data — "Son las tres." (São três horas.)
• Material — "La mesa es de madera." (A mesa é de madeira.)
• Relações — "Es mi hermano." (É meu irmão.)

## ESTAR → estados, condições, localização

• Localização — "El museo está en el centro." (O museu está no centro.)
• Estado físico/emocional — "Estoy enfermo. / Está triste." (Estou doente. / Está triste.)
• Resultado de uma ação — "La puerta está cerrada." (A porta está fechada.)
• Ação contínua — "Estoy trabajando." (Estou trabalhando.)

## Adjetivos que mudam de sentido

| Adjetivo  | Com SER (característica)      | Com ESTAR (estado temporário) |
|-----------|--------------------------------|--------------------------------|
| aburrido  | é chato (a pessoa em si)       | está entediado                 |
| listo     | é esperto/inteligente          | está pronto                    |
| malo      | é mau (caráter)                | está doente/ruim               |
| bueno     | é bom (caráter)                | está gostoso/atraente          |
| vivo      | é vivo/espevitado              | está vivo (oposto de morto)    |

## Erros comuns

⚠️ "Él es aburrido." (ele é uma pessoa chata) ≠ "Él está aburrido." (ele está entediado naquele momento) — confundir os dois muda completamente o sentido da frase.
⚠️ Português usa "estar" e "ser" de forma mais flexível que o espanhol; ao traduzir literalmente frases como "ela é cansada" (errado em ambas as línguas, mas o erro de transferência é comum), lembre-se: cansaço é sempre ESTAR — "Está cansada."

💡 Truque de memorização: SER responde "o que é" (identidade, essência); ESTAR responde "como está" (condição, localização no momento).

## Vocabulário-chave

• inteligente — inteligente
• cerrado — fechado
• enfermo — doente
• la sopa — a sopa
• la capital — a capital
• aburrido — entediado / chato`,
    exercises: [
      {
        sentences: [
          { prompt: 'Ela é inteligente.', answers: ['Ella es inteligente.', 'Es inteligente.'] },
          { prompt: 'O museu está fechado.', answers: ['El museo está cerrado.'] },
          { prompt: 'Ele é médico, mas hoje está doente.', answers: ['Él es médico, pero hoy está enfermo.', 'Es médico, pero hoy está enfermo.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'A sopa está quente.', answers: ['La sopa está caliente.'] },
          { prompt: 'Madrid é a capital da Espanha.', answers: ['Madrid es la capital de España.'] },
          { prompt: 'Estou entediado em casa.', answers: ['Estoy aburrido en casa.', 'Yo estoy aburrido en casa.'] },
        ],
      },
    ],
  },

  {
    id: 'fund-4', stage: 'Fundamentos', order: 4,
    title: 'O, A, Um, Uma',
    subtitle: 'Dominar os artigos',
    theory: `## Artigos definidos (o/a/os/as)
  el (o — masc. sing.)    los (os — masc. pl.)
  la (a — fem. sing.)     las (as — fem. pl.)

## Artigos indefinidos (um/uma/uns/umas)
  un / una / unos / unas

## Contrações obrigatórias
  a + el → al     "Voy al mercado." (Vou ao mercado.)
  de + el → del   "Vengo del trabajo." (Venho do trabalho.)

Não existe contração com "la": "a la", "de la" ficam separados.

⚠️ Femininos que começam com "a" tônico usam "el" no singular (apenas por som, o gênero continua feminino):
  el agua, el águila, el hacha — mas no plural volta ao normal: las aguas, las águilas

⚠️ Muitas palavras têm gênero diferente do português: el coche (carro), el viaje (viagem), la leche (o leite), la sangre (o sangue), el puente (a ponte), la nariz (o nariz). Não dá para confiar na intuição — vale memorizar caso a caso.

💡 Dica: ao aprender vocabulário novo, sempre memorize a palavra junto com seu artigo (ex.: "la leche", não só "leche") para fixar o gênero automaticamente.

## Vocabulário-chave

• el libro — o livro
• interesante — interessante
• la niña — a menina
• la puerta — a porta
• el mercado — o mercado`,
    exercises: [
      {
        sentences: [
          { prompt: 'O livro é interessante.', answers: ['El libro es interesante.'] },
          { prompt: 'Uma menina está na porta.', answers: ['Una niña está en la puerta.'] },
          { prompt: 'Vou ao mercado.', answers: ['Voy al mercado.'] },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  //  BÁSICO
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'bas-1', stage: 'Básico', order: 1,
    title: 'Presente do indicativo — verbos em -ar',
    subtitle: 'falar, trabalhar, estudar e mais',
    theory: `## Verbos em -AR — modelo HABLAR (falar)

| Pronome      | HABLAR  |
|--------------|---------|
| yo           | hablo   |
| tú           | hablas  |
| él/ella      | habla   |
| nosotros     | hablamos|
| vosotros     | habláis |
| ellos/ellas  | hablan  |

A maioria dos verbos terminados em -ar segue exatamente este padrão regular.

## Verbos -ar comuns
trabajar, caminar, escuchar, estudiar, cantar, viajar, bailar, cocinar, dibujar, nadar, mirar, llamar, comprar, buscar, soplar, abrazar, observar, explicar, descansar.

## Exemplos
• Trabajo en una oficina. (Trabalho em um escritório.)
• Ella estudia español los lunes. (Ela estuda espanhol às segundas.)
• Ellos viajan mucho por trabajo. (Eles viajam muito por trabalho.)

⚠️ "Llamar" não é "chamar" no sentido de "convidar" — "llamar" significa ligar/telefonar ou chamar pelo nome. Para "convidar alguém", use "invitar".

💡 Para fixar a conjugação regular em -ar, repare no padrão das terminações: -o, -as, -a, -amos, -áis, -an — vale praticamente para todos os verbos -ar do espanhol, com poucas excepções (ver módulo de irregulares).

## Vocabulário-chave

• la oficina — o escritório
• el hospital — o hospital
• el viento — o vento
• el río — o rio
• la música — a música
• la lección — a lição
• con paciencia — com paciência`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu falo espanhol todos os dias.', answers: ['Yo hablo español todos los días.', 'Hablo español todos los días.'] },
          { prompt: 'Ela trabalha no hospital.', answers: ['Ella trabaja en el hospital.', 'Trabaja en el hospital.'] },
          { prompt: 'Nós cantamos juntos.', answers: ['Nosotros cantamos juntos.', 'Cantamos juntos.'] },
          { prompt: 'Vocês estudam muito.', answers: ['Vosotros estudiáis mucho.', 'Estudiáis mucho.', 'Ustedes estudian mucho.', 'Estudian mucho.'] },
          { prompt: 'Eles viajam para a França.', answers: ['Ellos viajan a Francia.', 'Viajan a Francia.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'O vento sopra forte hoje.', answers: ['El viento sopla fuerte hoy.', 'Sopla fuerte hoy.'] },
          { prompt: 'Ela desenha muito bem.', answers: ['Ella dibuja muy bien.', 'Dibuja muy bien.'] },
          { prompt: 'Eles nadam no rio.', answers: ['Ellos nadan en el río.', 'Nadan en el río.'] },
          { prompt: 'Você abraça as suas amigas.', answers: ['Tú abrazas a tus amigas.', 'Abrazas a tus amigas.', 'Usted abraza a sus amigas.', 'Abraza a sus amigas.'] },
          { prompt: 'Eu escuto música quando cozinho.', answers: ['Yo escucho música cuando cocino.', 'Escucho música cuando cocino.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ela caminha até a escola todas as manhãs.', answers: ['Ella camina hasta la escuela todas las mañanas.', 'Camina hasta la escuela todas las mañanas.'] },
          { prompt: 'Nós falamos sobre política no jantar.', answers: ['Nosotros hablamos de política en la cena.', 'Hablamos de política en la cena.', 'Nosotros hablamos sobre política en la cena.', 'Hablamos sobre política en la cena.'] },
          { prompt: 'O gato observa os pássaros pela janela.', answers: ['El gato observa los pájaros por la ventana.'] },
          { prompt: 'Vocês dançam flamenco?', answers: ['¿Vosotros bailáis flamenco?', '¿Bailáis flamenco?', '¿Ustedes bailan flamenco?', '¿Bailan flamenco?'] },
          { prompt: 'O professor explica a lição com paciência.', answers: ['El profesor explica la lección con paciencia.'] },
        ],
      },
    ],
  },

  {
    id: 'bas-2', stage: 'Básico', order: 2,
    title: 'Presente do indicativo — verbos em -er e -ir',
    subtitle: 'comer, beber, viver, escrever',
    theory: `## Verbos em -ER — modelo COMER

| Pronome      | COMER   |
|--------------|---------|
| yo           | como    |
| tú           | comes   |
| él/ella      | come    |
| nosotros     | comemos |
| vosotros     | coméis  |
| ellos/ellas  | comen   |

## Verbos em -IR — modelo VIVIR

| Pronome      | VIVIR   |
|--------------|---------|
| yo           | vivo    |
| tú           | vives   |
| él/ella      | vive    |
| nosotros     | vivimos |
| vosotros     | vivís   |
| ellos/ellas  | viven   |

Note que -er e -ir só diferem nas formas de "nosotros" e "vosotros" (-emos/-éis vs. -imos/-ís); o resto é idêntico.

## Vocabulário

Verbos -er comuns: beber, leer, correr, vender, aprender, comprender, comer, responder, conocer.
Verbos -ir comuns: escribir, abrir, recibir, subir, dividir, vivir, compartir, discutir.

## Exemplos
• Vivo en Buenos Aires desde hace dos años. (Vivo em Buenos Aires há dois anos.)
• ¿Comes carne o eres vegetariano? (Você come carne ou é vegetariano?)
• Escribimos cartas a mano. (Escrevemos cartas à mão.)

⚠️ "Conocer" significa conhecer pessoas/lugares, não confundir com "saber" (saber fatos/habilidades) — "Conozco a María" vs. "Sé nadar."

💡 Muitos verbos -er e -ir têm irregularidades só na 1ª pessoa (ex.: conocer → conozco) ou sofrem diptongação na raiz (ex.: pedir → pido, dormir → duermo) — esses serão vistos em módulos futuros sobre irregulares.

## Vocabulário-chave

• el arroz — o arroz
• el perro — o cão
• el parque — o parque
• los abuelos — os avós
• la pregunta — a pergunta
• el escritor — o escritor
• la familia — a família`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu como muito arroz.', answers: ['Yo como mucho arroz.', 'Como mucho arroz.'] },
          { prompt: 'Eles bebem café pela manhã.', answers: ['Ellos beben café por la mañana.', 'Beben café por la mañana.'] },
          { prompt: 'Ela vive em Barcelona.', answers: ['Ella vive en Barcelona.', 'Vive en Barcelona.'] },
          { prompt: 'Nós aprendemos espanhol juntos.', answers: ['Nosotros aprendemos español juntos.', 'Aprendemos español juntos.'] },
          { prompt: 'Você lê muito?', answers: ['¿Tú lees mucho?', '¿Lees mucho?'] },
        ],
      },
      {
        sentences: [
          { prompt: 'O cão corre pelo parque.', answers: ['El perro corre por el parque.'] },
          { prompt: 'Vocês escrevem cartas aos avós.', answers: ['Vosotros escribís cartas a los abuelos.', 'Escribís cartas a los abuelos.', 'Ustedes escriben cartas a los abuelos.', 'Escriben cartas a los abuelos.'] },
          { prompt: 'Ele abre a janela de manhã.', answers: ['Él abre la ventana por la mañana.', 'Abre la ventana por la mañana.'] },
          { prompt: 'Eu compreendo a pergunta.', answers: ['Yo comprendo la pregunta.', 'Comprendo la pregunta.'] },
          { prompt: 'Elas vendem flores no mercado.', answers: ['Ellas venden flores en el mercado.', 'Venden flores en el mercado.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'O escritor escreve três horas por dia.', answers: ['El escritor escribe tres horas al día.', 'El escritor escribe durante tres horas al día.'] },
          { prompt: 'Nós recebemos cartas da família.', answers: ['Nosotros recibimos cartas de la familia.', 'Recibimos cartas de la familia.'] },
          { prompt: 'Ela bebe água antes de dormir.', answers: ['Ella bebe agua antes de dormir.', 'Bebe agua antes de dormir.'] },
          { prompt: 'Você corre todos os dias?', answers: ['¿Tú corres todos los días?', '¿Corres todos los días?'] },
          { prompt: 'Eles compartilham tudo na vida.', answers: ['Ellos comparten todo en la vida.', 'Comparten todo en la vida.', 'Ellos lo comparten todo en la vida.', 'Lo comparten todo en la vida.'] },
        ],
      },
    ],
  },

  {
    id: 'bas-3', stage: 'Básico', order: 3,
    title: 'Cuidado com os falsos amigos',
    subtitle: 'palavras traiçoeiras do espanhol',
    theory: `## Falsos amigos clássicos

Parecem iguais ao português, mas significam outra coisa:

• embarazada → grávida (não: "envergonhada" = avergonzada)
• borracho → bêbado (não: borracha = goma/caucho)
• polvo → pó/poeira (não: polvo = pulpo)
• exquisito → delicioso/refinado (não: esquisito = raro/extraño)
• largo → longo (não: largo = ancho)
• éxito → sucesso (não: saída = salida)
• constipado → resfriado/gripado (não: constipado intestinal = estreñido)
• pretender → tentar/querer/pretender (em alguns contextos ES = cortejar/namorar antigamente)
• borrar → apagar/rasgar
• sensible → sensível (em ES significa também razoável — equivalente a "sensato" do português)
• rojo → vermelho (não: roxo = morado/púrpura)
• apellido → sobrenome (não: apelido = apodo/mote)
• vaso → copo (não: vaso de planta = florero/maceta)
• cena → jantar (não: cena de filme = escena)
• taller → ateliê/oficina mecânica (não: talher = cubierto)

## Por que isso acontece

O português e o espanhol compartilham origem latina, então muitas palavras parecem idênticas mas evoluíram com sentidos diferentes em cada língua — são os "falsos cognatos" ou "falsos amigos".

⚠️ O falso amigo mais perigoso da lista é "embarazada": dizer "estoy avergonzada" quando quer dizer "estou envergonhada" é seguro, mas confundir os dois pode gerar um mal-entendido e tanto.

💡 Dica: sempre que uma palavra em espanhol parecer "suspeita" por ser muito parecida com o português, vale a pena confirmar o significado antes de usá-la com confiança — é melhor checar do que arriscar um vexame.

## Vocabulário-chave

• salado — salgado
• el estante — a prateleira
• el pastel / la tarta — o bolo / a torta
• la calle — a rua
• la pizarra / el pizarrón — a lousa/o quadro
• raro — estranho`,
    exercises: [
      {
        sentences: [
          { prompt: 'Ela está grávida de seis meses.', answers: ['Ella está embarazada de seis meses.'] },
          { prompt: 'Não coma tanto, está tudo muito salgado.', answers: ['No comas tanto, todo está muy salado.'] },
          { prompt: 'Tem muito pó nessa prateleira.', answers: ['Hay mucho polvo en ese estante.'] },
          { prompt: 'Este bolo está delicioso.', answers: ['Este pastel está exquisito.', 'Esta tarta está exquisita.'] },
          { prompt: 'A mesa é muito longa.', answers: ['La mesa es muy larga.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'O homem bêbado caiu na rua.', answers: ['El hombre borracho se cayó en la calle.', 'El hombre borracho cayó en la calle.'] },
          { prompt: 'O filme foi um grande sucesso.', answers: ['La película fue un gran éxito.'] },
          { prompt: 'O polvo é um animal muito inteligente.', answers: ['El pulpo es un animal muy inteligente.'] },
          { prompt: 'Que pessoa estranha!', answers: ['¡Qué persona tan rara!', '¡Qué persona más rara!'] },
          { prompt: 'Apaga a lousa, por favor.', answers: ['Borra la pizarra, por favor.', 'Borra el pizarrón, por favor.', 'Borra el tablero, por favor.'] },
        ],
      },
    ],
  },

  {
    id: 'bas-4', stage: 'Básico', order: 4,
    title: 'Os verbos que todo mundo usa',
    subtitle: 'Ir, ter, poder, querer, fazer e mais',
    theory: `## Verbos irregulares essenciais no presente

| Pronome  | IR   | TENER  | VENIR  | PODER  | QUERER  |
|----------|------|--------|--------|--------|---------|
| yo       | voy  | tengo  | vengo  | puedo  | quiero  |
| tú       | vas  | tienes | vienes | puedes | quieres |
| él/ella  | va   | tiene  | viene  | puede  | quiere  |
| nosotros | vamos| tenemos| venimos| podemos| queremos|
| vosotros | vais | tenéis | venís  | podéis | queréis |
| ellos    | van  | tienen | vienen | pueden | quieren |

| Pronome  | HACER | DECIR | SABER | SALIR |
|----------|-------|-------|-------|-------|
| yo       | hago  | digo  | sé    | salgo |
| tú       | haces | dices | sabes | sales |
| él/ella  | hace  | dice  | sabe  | sale  |
| nosotros | hacemos| decimos| sabemos| salimos|
| vosotros | hacéis| decís | sabéis| salís |
| ellos    | hacen | dicen | saben | salen |

## Padrões de irregularidade

• IR é o verbo mais irregular do espanhol — não se parece nada com o infinitivo.
• TENER, VENIR, QUERER, PODER têm diptongação na raiz (e→ie, o→ue) em quase todas as pessoas, exceto nosotros/vosotros.
• HACER, DECIR, SABER, SALIR só são irregulares na 1ª pessoa do singular (hago, digo, sé, salgo) — o resto segue o padrão regular.

## Exemplos
• Quiero ir al cine esta noche. (Quero ir ao cinema esta noite.)
• ¿Sabes qué hora es? (Você sabe que horas são?)
• Hacemos la tarea juntos. (Fazemos a tarefa juntos.)

⚠️ "Tener" muitas vezes substitui "estar com" em expressões de sensação física: "tengo hambre" (estou com fome), "tengo sed" (estou com sede), "tengo frío/calor" (estou com frio/calor) — nunca se usa "estar" nesses casos, ao contrário do que a tradução literal do português sugeriria.

💡 Mnemônico: TENER e VENIR têm a mesma estrutura de conjugação (tengo/vengo, tienes/vienes...) — aprender um ajuda a fixar o outro.

## Vocabulário-chave

• el cine — o cinema
• el ejercicio — o exercício
• la cena — o jantar
• la llave — a chave
• la verdad — a verdade
• las vacaciones — as férias
• los deberes — os deveres de casa`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu vou ao mercado agora.', answers: ['Yo voy al mercado ahora.', 'Voy al mercado ahora.'] },
          { prompt: 'Ela tem um cão e dois gatos.', answers: ['Ella tiene un perro y dos gatos.', 'Tiene un perro y dos gatos.'] },
          { prompt: 'Não posso sair esta noite.', answers: ['No puedo salir esta noche.', 'Yo no puedo salir esta noche.'] },
          { prompt: 'Eles fazem exercício todas as manhãs.', answers: ['Ellos hacen ejercicio todas las mañanas.', 'Hacen ejercicio todas las mañanas.'] },
          { prompt: 'O que você quer para o jantar?', answers: ['¿Qué quieres para la cena?', '¿Qué quieres cenar?'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu sei onde está a chave.', answers: ['Yo sé dónde está la llave.', 'Sé dónde está la llave.'] },
          { prompt: 'Você vem comigo ou fica?', answers: ['¿Tú vienes conmigo o te quedas?', '¿Vienes conmigo o te quedas?'] },
          { prompt: 'Ela sempre diz a verdade.', answers: ['Ella siempre dice la verdad.', 'Siempre dice la verdad.'] },
          { prompt: 'Vocês saem às oito?', answers: ['¿Vosotros salís a las ocho?', '¿Salís a las ocho?', '¿Ustedes salen a las ocho?', '¿Salen a las ocho?'] },
          { prompt: 'Nós queremos aprender espanhol.', answers: ['Nosotros queremos aprender español.', 'Queremos aprender español.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu faço o jantar enquanto ela faz os deveres.', answers: ['Yo hago la cena mientras ella hace los deberes.', 'Hago la cena mientras ella hace los deberes.'] },
          { prompt: 'Eles vêm de Bilbao esta tarde.', answers: ['Ellos vienen de Bilbao esta tarde.', 'Vienen de Bilbao esta tarde.'] },
          { prompt: 'Eu tenho muito trabalho hoje.', answers: ['Yo tengo mucho trabajo hoy.', 'Tengo mucho trabajo hoy.'] },
          { prompt: 'Ela não sabe a resposta.', answers: ['Ella no sabe la respuesta.', 'No sabe la respuesta.'] },
          { prompt: 'Para onde você vai de férias?', answers: ['¿Adónde vas de vacaciones?', '¿A dónde vas de vacaciones?'] },
        ],
      },
    ],
  },

  {
    id: 'bas-5', stage: 'Básico', order: 5,
    title: 'Como perguntar e negar',
    subtitle: 'Interrogação, negação e as dúvidas do dia a dia',
    theory: `## Negação
Apenas "no" antes do verbo — sem auxiliar como o "do/does not" do inglês.
  "No hablo inglés." (Não falo inglês.)
  "Ella no trabaja los domingos." (Ela não trabalha nos domingos.)

## Perguntas
Entonação + sinais ¿...? — ou inverter o sujeito.
  "¿Hablas español?" (Você fala espanhol?)
  "¿Dónde vives?" (Onde você mora?)

## Palavras interrogativas

| Espanhol     | Português     |
|--------------|---------------|
| ¿qué?        | o quê?        |
| ¿quién?      | quem?         |
| ¿dónde?      | onde?         |
| ¿cuándo?     | quando?       |
| ¿cómo?       | como?         |
| ¿cuánto?     | quanto?       |
| ¿por qué?    | por quê?      |
| ¿cuál?       | qual?         |
| ¿adónde?     | para onde?    |

## Confirmação (tag question)
  "Hablas español, ¿verdad?" (Você fala espanhol, não é?)
  "No tienes coche, ¿no?" (Você não tem carro, não é?)

⚠️ Todas as palavras interrogativas levam acento gráfico em espanhol, mesmo em perguntas indiretas: "No sé qué hacer" (não "que", sem acento, quando funciona como interrogativo).

⚠️ Não confunda "¿por qué?" (por quê — pergunta, duas palavras com acento) com "porque" (porque — resposta/conjunção, uma palavra sem acento) e "porqué" (o porquê — substantivo).

💡 Os sinais de abertura ¿ e ¡ são obrigatórios em espanhol escrito — esquecê-los é um dos erros mais comuns de falantes de português, que não têm esse recurso.

## Vocabulário-chave

• los hermanos — os irmãos
• triste — triste
• la fiesta — a festa
• la mujer — a mulher
• el tren — o trem
• cocinar — cozinhar`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu não falo francês.', answers: ['Yo no hablo francés.', 'No hablo francés.'] },
          { prompt: 'Ela não tem irmãos.', answers: ['Ella no tiene hermanos.', 'No tiene hermanos.'] },
          { prompt: 'Onde você mora?', answers: ['¿Dónde vives?', '¿Dónde vives tú?', '¿Dónde vive usted?', '¿Dónde vive?'] },
          { prompt: 'Como você se chama?', answers: ['¿Cómo te llamas?', '¿Cómo te llamas tú?', '¿Cómo se llama usted?', '¿Cómo se llama?'] },
          { prompt: 'Por que você está triste?', answers: ['¿Por qué estás triste?', '¿Por qué estás tú triste?', '¿Por qué está usted triste?', '¿Por qué está triste?'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Quantos irmãos você tem?', answers: ['¿Cuántos hermanos tienes?', '¿Cuántos hermanos tienes tú?', '¿Cuántos hermanos tiene usted?', '¿Cuántos hermanos tiene?'] },
          { prompt: 'Nós não vamos à festa esta noite.', answers: ['Nosotros no vamos a la fiesta esta noche.', 'No vamos a la fiesta esta noche.'] },
          { prompt: 'Quem é aquela mulher?', answers: ['¿Quién es aquella mujer?', '¿Quién es esa mujer?'] },
          { prompt: 'Quando chega o trem?', answers: ['¿Cuándo llega el tren?'] },
          { prompt: 'Ele não sabe cozinhar, pois não?', answers: ['No sabe cocinar, ¿verdad?', 'Él no sabe cocinar, ¿verdad?', 'No sabe cocinar, ¿no?', 'Él no sabe cocinar, ¿no?'] },
        ],
      },
    ],
  },

  {
    id: 'bas-6', stage: 'Básico', order: 6,
    title: 'O que aconteceu — passado regular',
    subtitle: 'Pretérito indefinido',
    theory: `## Formação

Pretérito indefinido — ações concluídas em ponto específico no passado:

| Pronome  | HABLAR (-ar) | COMER (-er) | VIVIR (-ir) |
|----------|--------------|-------------|-------------|
| yo       | hablé        | comí        | viví        |
| tú       | hablaste     | comiste     | viviste     |
| él/ella  | habló        | comió       | vivió       |
| nosotros | hablamos     | comimos     | vivimos     |
| vosotros | hablasteis   | comisteis   | vivisteis   |
| ellos    | hablaron     | comieron    | vivieron    |

Note que -er e -ir compartilham as mesmas terminações no pretérito indefinido.

## Marcadores temporais
ayer (ontem), anteayer (anteontem), la semana pasada (semana passada), el año pasado (ano passado), hace dos días (há dois dias), en 2020 (em 2020), entonces (então), aquella tarde (aquela tarde), de repente (de repente).

## Exemplos
• Ayer hablé con mi madre por teléfono. (Ontem falei com minha mãe por telefone.)
• Comimos en un restaurante nuevo el sábado. (Comemos em um restaurante novo no sábado.)
• Vivieron tres años en Italia. (Viveram três anos na Itália.)

⚠️ Atenção ao acento na 1ª e 3ª pessoa do singular: "hablé" e "habló" mudam completamente de sentido pelo acento (eu falei / ele falou) — esquecer o acento é um erro comum na escrita.

💡 Use o pretérito indefinido sempre que a ação tiver começo e fim claros e definidos no passado — diferente do imperfecto, que descreve hábitos ou cenários (veja o módulo seguinte).

## Vocabulário-chave

• trabajé / habló / comimos / vivieron — trabalhei / ele falou / comemos / viveram
• la boda — o casamento
• el vino — o vinho
• la maratón — a maratona
• abrir — abrir`,
    exercises: [
      {
        sentences: [
          { prompt: 'Ontem trabalhei oito horas.', answers: ['Ayer trabajé ocho horas.'] },
          { prompt: 'Ela falou com o médico esta manhã.', answers: ['Ella habló con el médico esta mañana.', 'Habló con el médico esta mañana.'] },
          { prompt: 'Nós comemos pizza na sexta-feira.', answers: ['Nosotros comimos pizza el viernes.', 'Comimos pizza el viernes.'] },
          { prompt: 'Vocês viajaram para Madrid no ano passado?', answers: ['¿Vosotros viajasteis a Madrid el año pasado?', '¿Viajasteis a Madrid el año pasado?'] },
          { prompt: 'Eles viveram em Paris durante dois anos.', answers: ['Ellos vivieron en París durante dos años.', 'Vivieron en París durante dos años.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu aprendi muito nessa aula.', answers: ['Yo aprendí mucho en esa clase.', 'Aprendí mucho en esa clase.'] },
          { prompt: 'Você bebeu todo o vinho.', answers: ['Tú bebiste todo el vino.', 'Bebiste todo el vino.'] },
          { prompt: 'Ela abriu a janela e entrou o frio.', answers: ['Ella abrió la ventana y entró el frío.', 'Abrió la ventana y entró el frío.'] },
          { prompt: 'Eu cantei no casamento do meu irmão.', answers: ['Yo canté en la boda de mi hermano.', 'Canté en la boda de mi hermano.'] },
          { prompt: 'Eles correram a maratona em menos de quatro horas.', answers: ['Ellos corrieron la maratón en menos de cuatro horas.', 'Corrieron la maratón en menos de cuatro horas.', 'Ellos corrieron el maratón en menos de cuatro horas.', 'Corrieron el maratón en menos de cuatro horas.'] },
        ],
      },
    ],
  },

  {
    id: 'bas-7', stage: 'Básico', order: 7,
    title: 'Fui, fiz, disse',
    subtitle: 'Passado irregular — os mais usados',
    theory: `## Verbos irregulares no pretérito indefinido

| Pronome  | SER/IR | TENER  | HACER  | ESTAR   |
|----------|--------|--------|--------|---------|
| yo       | fui    | tuve   | hice   | estuve  |
| tú       | fuiste | tuviste| hiciste| estuviste|
| él/ella  | fue    | tuvo   | hizo   | estuvo  |
| nosotros | fuimos | tuvimos| hicimos| estuvimos|
| vosotros | fuisteis|tuvisteis|hicisteis|estuvisteis|
| ellos    | fueron | tuvieron|hicieron|estuvieron|

| Pronome  | DECIR  | PODER  | VENIR  | VER  |
|----------|--------|--------|--------|------|
| yo       | dije   | pude   | vine   | vi   |
| tú       | dijiste| pudiste| viniste| viste|
| él/ella  | dijo   | pudo   | vino   | vio  |
| nosotros | dijimos| pudimos| vinimos| vimos|
| vosotros | dijisteis|pudisteis|vinisteis|visteis|
| ellos    | dijeron|pudieron|vinieron|vieron|

Note que estes verbos irregulares no pretérito NÃO levam acento — diferente dos regulares (hablé, comió). É um padrão consistente entre todos os irregulares: tuve, hice, dije, vine, etc.

## SER e IR — atenção

SER e IR têm exatamente as mesmas formas no pretérito indefinido (fui, fuiste, fue...) — o contexto da frase indica qual é qual.
  "Fui a la playa." (Fui à praia — verbo IR.)
  "Fui profesor durante diez años." (Fui professor durante dez anos — verbo SER.)

## Exemplos
• Tuve que trabajar el fin de semana. (Tive que trabalhar no fim de semana.)
• Ella dijo que no podía venir. (Ela disse que não podia vir.)
• Estuvimos en la playa todo el día. (Ficamos na praia o dia todo.)

⚠️ "Hizo" (de hacer) e "izo" não devem ser confundidos com "hubo" (de haber, no pretérito) — são raízes diferentes mesmo parecendo similares para quem está começando.

💡 Quase todos os verbos irregulares no pretérito seguem o mesmo padrão de terminações sem acento: -e, -iste, -o, -imos, -isteis, -ieron. Aprender essa "família" de terminações facilita memorizar vários verbos de uma vez.

## Vocabulário-chave

• el sueño — o sonho
• extraño / raro — estranho
• dormir — dormir
• querer — querer
• la película — o filme`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu fui ao cinema ontem.', answers: ['Yo fui al cine ayer.', 'Fui al cine ayer.'] },
          { prompt: 'Ela foi a primeira a chegar.', answers: ['Ella fue la primera en llegar.', 'Fue la primera en llegar.'] },
          { prompt: 'O que você fez no fim de semana?', answers: ['¿Qué hiciste el fin de semana?', '¿Qué hiciste tú el fin de semana?'] },
          { prompt: 'Eu tive um sonho muito estranho.', answers: ['Yo tuve un sueño muy extraño.', 'Tuve un sueño muy extraño.', 'Yo tuve un sueño muy raro.', 'Tuve un sueño muy raro.'] },
          { prompt: 'Eles disseram a verdade.', answers: ['Ellos dijeron la verdad.', 'Dijeron la verdad.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Não consegui dormir ontem à noite.', answers: ['No pude dormir anoche.', 'Yo no pude dormir anoche.'] },
          { prompt: 'Ela veio à minha casa ontem à tarde.', answers: ['Ella vino a mi casa ayer por la tarde.', 'Vino a mi casa ayer por la tarde.'] },
          { prompt: 'Ficamos em Sevilha durante uma semana.', answers: ['Estuvimos en Sevilla durante una semana.', 'Nosotros estuvimos en Sevilla durante una semana.'] },
          { prompt: 'Ele não quis comer nada.', answers: ['Él no quiso comer nada.', 'No quiso comer nada.'] },
          { prompt: 'Eu vi aquele filme três vezes.', answers: ['Yo vi aquella película tres veces.', 'Vi aquella película tres veces.', 'Yo vi esa película tres veces.', 'Vi esa película tres veces.'] },
        ],
      },
    ],
  },

  {
    id: 'bas-8', stage: 'Básico', order: 8,
    title: 'Quando eu era criança…',
    subtitle: 'Hábitos e cenários do passado — imperfecto',
    theory: `## Formação

Pretérito imperfecto — ação habitual ou contínua no passado:

| Pronome  | HABLAR (-ar) | COMER (-er/-ir) |
|----------|--------------|-----------------|
| yo       | hablaba      | comía           |
| tú       | hablabas     | comías          |
| él/ella  | hablaba      | comía           |
| nosotros | hablábamos   | comíamos        |
| vosotros | hablabais    | comíais         |
| ellos    | hablaban     | comían          |

Irregulares (só 3!): ser → era / ir → iba / ver → veía. Todo o resto dos verbos espanhóis é regular no imperfecto — é o tempo verbal mais fácil de conjugar.

## Quando usar

• Hábito passado — "De niño, comía mucho." (Quando criança, comia muito.)
• Cenário/descrição — "Hacía frío y llovía." (Fazia frio e chovia.)
• Ação em andamento interrompida — "Dormía cuando llamaste." (Dormia quando você ligou.)
• Hora no passado — "Eran las tres de la tarde." (Eram três da tarde.)
• Idade no passado — "Tenía veinte años." (Tinha vinte anos.)

## Imperfecto vs. indefinido

| Imperfecto (hábito/cenário)            | Indefinido (ação concluída)        |
|------------------------------------------|--------------------------------------|
| Todos los días caminaba al trabajo.     | Ayer caminé al trabajo.             |
| Hacía sol cuando salí.                  | Salí a las ocho.                    |

⚠️ É comum o falante de português, que usa o pretérito imperfeito de forma mais livre, aplicar o imperfecto onde o espanhol exige indefinido (ação pontual concluída) — preste atenção se a ação tem início e fim definidos (indefinido) ou é um pano de fundo/repetição (imperfecto).

💡 Frase clássica para fixar a diferença: "Cuando era niño, vivía en el campo, pero un día nos mudamos a la ciudad." — o imperfecto descreve o cenário contínuo, o indefinido marca o evento pontual que mudou a história.

## Vocabulário-chave

• el campo — o campo
• la universidad — a universidade
• llover — chover
• el invierno — o inverno
• ganar — ganhar
• tímido — tímido`,
    exercises: [
      {
        sentences: [
          { prompt: 'Quando era criança, vivia no campo.', answers: ['Cuando era niño, vivía en el campo.', 'Cuando era pequeño, vivía en el campo.', 'Cuando era niña, vivía en el campo.', 'Cuando era pequeña, vivía en el campo.'] },
          { prompt: 'Ela estudava todos os dias na universidade.', answers: ['Ella estudiaba todos los días en la universidad.', 'Estudiaba todos los días en la universidad.'] },
          { prompt: 'Chovia muito naquele inverno.', answers: ['Llovía mucho ese invierno.', 'Llovía mucho aquel invierno.'] },
          { prompt: 'Eu dormia quando você ligou.', answers: ['Yo dormía cuando tú llamaste.', 'Dormía cuando llamaste.'] },
          { prompt: 'Eram duas da manhã quando chegamos.', answers: ['Eran las dos de la madrugada cuando llegamos.', 'Eran las dos de la mañana cuando llegamos.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Antes, íamos à praia todos os verões.', answers: ['Antes, íbamos a la playa todos los veranos.', 'Íbamos a la playa todos los veranos.'] },
          { prompt: 'Ele era muito tímido quando criança.', answers: ['Él era muy tímido de niño.', 'Era muy tímido de niño.'] },
          { prompt: 'Quando trabalhava nessa empresa, ganhava bem.', answers: ['Cuando trabajaba en esa empresa, ganaba bien.', 'Cuando trabajaba en esa empresa, cobraba bien.', 'Cuando yo trabajaba en esa empresa, ganaba bien.'] },
          { prompt: 'Elas assistiam televisão enquanto comiam.', answers: ['Ellas veían la televisión mientras comían.', 'Veían la televisión mientras comían.'] },
          { prompt: 'Que horas eram quando você saiu?', answers: ['¿Qué hora era cuando saliste?', '¿Qué horas eran cuando saliste?'] },
        ],
      },
    ],
  },

  {
    id: 'bas-9', stage: 'Básico', order: 9,
    title: 'O que vai acontecer',
    subtitle: 'Futuro simples e futuro próximo',
    theory: `## Futuro simples — infinitivo + terminação

| Pronome  | HABLAR (regular) |
|----------|-----------------|
| yo       | hablaré         |
| tú       | hablarás        |
| él/ella  | hablará         |
| nosotros | hablaremos      |
| vosotros | hablaréis       |
| ellos    | hablarán        |

Todas as terminações têm acento, exceto "nosotros" — é a mesma terminação para -ar, -er, -ir.

Irregulares: tener→tendré, hacer→haré, poder→podré, venir→vendré, ir→iré, decir→diré, saber→sabré, salir→saldré, poner→pondré.

## Futuro próximo — IR + A + infinitivo
Mais comum no dia a dia, equivalente ao "vou + infinitivo" do português:
  "Voy a hablar." (Vou falar.)
  "Vamos a comer." (Vamos comer.)
  "¿Vas a salir?" (Você vai saír?)

## Exemplos
• Mañana iré al médico. (Amanhã irei ao médico.)
• El año que viene viviremos en otra ciudad. (No próximo ano viveremos em outra cidade.)
• ¿Qué harás este verano? (O que você fará neste verão?)

💡 O futuro simples também expressa suposição ou probabilidade no presente, sem ideia de tempo futuro:
  "¿Dónde estará Juan?" (Onde será que está o João?)
  "Tendrá unos cuarenta años." (Ele deve ter uns quarenta anos.)

⚠️ No espanhol falado cotidiano, sobretudo na América Latina, o futuro próximo (ir + a + infinitivo) é muito mais usado que o futuro simples — reserve o futuro simples para contextos mais formais ou escritos, ou para expressar suposição.

## Vocabulário-chave

• el jefe — o chefe
• el verano — o verão
• cenar — jantar
• el problema — o problema
• abrir un restaurante — abrir um restaurante`,
    exercises: [
      {
        sentences: [
          { prompt: 'Amanhã vou falar com meu chefe.', answers: ['Mañana hablaré con mi jefe.', 'Mañana voy a hablar con mi jefe.'] },
          { prompt: 'Eles vão ir à praia no verão.', answers: ['Ellos van a ir a la playa en verano.', 'Ellos irán a la playa en verano.', 'Van a ir a la playa en verano.', 'Irán a la playa en verano.'] },
          { prompt: 'Você vai ter tempo para jantar conosco?', answers: ['¿Vas a tener tiempo para cenar con nosotros?', '¿Tendrás tiempo para cenar con nosotros?'] },
          { prompt: 'Ela vai fazer o bolo amanhã.', answers: ['Ella va a hacer el pastel mañana.', 'Va a hacer el pastel mañana.', 'Ella hará el pastel mañana.'] },
          { prompt: 'No próximo ano vamos morar na Espanha.', answers: ['El año que viene vamos a vivir en España.', 'El año que viene viviremos en España.', 'El próximo año vamos a vivir en España.', 'El próximo año viviremos en España.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu vou estudar esta noite.', answers: ['Voy a estudiar esta noche.', 'Yo voy a estudiar esta noche.'] },
          { prompt: 'Você vai ligar mais tarde?', answers: ['¿Vas a llamar más tarde?', '¿Llamarás más tarde?'] },
          { prompt: 'Não haverá problema, não se preocupe.', answers: ['No habrá problema, no te preocupes.', 'No habrá ningún problema, no te preocupes.'] },
          { prompt: 'Onde será que está a minha chave?', answers: ['¿Dónde estará mi llave?'] },
          { prompt: 'Eles vão abrir um restaurante novo.', answers: ['Ellos van a abrir un restaurante nuevo.', 'Van a abrir un restaurante nuevo.', 'Ellos abrirán un restaurante nuevo.', 'Abrirán un restaurante nuevo.'] },
        ],
      },
    ],
  },

  {
    id: 'bas-10', stage: 'Básico', order: 10,
    title: 'Como perguntar e negar — aprofundamento',
    subtitle: 'Negação dupla e partículas interrogativas',
    theory: `## Negação dupla
Em espanhol, ao contrário do português formal escrito, a negação dupla é natural e obrigatória quando a palavra negativa vem depois do verbo:
  "No hay nadie aquí." (Não há ninguém aqui.)
  "No tengo nada." (Não tenho nada.)
  "No voy nunca." (Não vou nunca.)

Quando a palavra negativa vem ANTES do verbo, o "no" desaparece:
  "Nadie está aquí." (não: ~~No nadie está aquí~~)
  "Nunca voy a ese bar." (não: ~~No nunca voy~~)

## Palavras negativas
nadie (ninguém), nada (nada), nunca/jamás (nunca), ningún/ninguno (nenhum), tampoco (também não).

## Perguntas indiretas
  "¿Sabes dónde está?" (Você sabe onde está?)
  "No sé si viene." (Não sei se ele vem.)
  "Me preguntó qué quería." (Ele me perguntou o que eu queria.)

Note que, em perguntas indiretas, as palavras interrogativas mantêm o acento (qué, dónde, cómo), mas perdem os sinais ¿...?.

⚠️ "Ninguno/ninguna" se torna "ningún" antes de substantivo masculino singular: "ningún libro" (não: ~~ninguno libro~~), igual ocorre com "un/uno".

💡 Para responder "também não" a uma frase negativa, use "tampoco": "—No me gusta el café. —A mí tampoco." (—Não gosto de café. —Eu também não.)

## Vocabulário-chave

• la sala — a sala
• la carne — a carne
• el museo — o museu
• oír — ouvir
• la espinaca — o espinafre
• el alumno — o aluno
• aprobar el examen — passar no exame`,
    exercises: [
      {
        sentences: [
          { prompt: 'Não há ninguém na sala.', answers: ['No hay nadie en la sala.'] },
          { prompt: 'Eu nunca como carne.', answers: ['Yo nunca como carne.', 'No como carne nunca.'] },
          { prompt: 'Ela não tem nada para dizer.', answers: ['Ella no tiene nada que decir.', 'No tiene nada que decir.'] },
          { prompt: 'Você sabe onde fica o museu?', answers: ['¿Sabes dónde está el museo?', '¿Sabes dónde queda el museo?'] },
          { prompt: 'Eu não sei se ele vem.', answers: ['Yo no sé si viene.', 'No sé si viene.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Não ouço nada.', answers: ['No oigo nada.', 'Yo no oigo nada.'] },
          { prompt: 'Ela também não gosta de espinafre.', answers: ['A ella tampoco le gusta la espinaca.'] },
          { prompt: 'Nenhum aluno passou no exame.', answers: ['Ningún alumno aprobó el examen.', 'No aprobó ningún alumno el examen.'] },
          { prompt: 'Não digo isso nunca mais.', answers: ['No digo eso nunca más.', 'Nunca más digo eso.'] },
          { prompt: 'Você me perguntou o que eu queria.', answers: ['Me preguntaste qué quería.', 'Tú me preguntaste qué quería.'] },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  //  INTERMEDIÁRIO
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'int-1', stage: 'Intermediário', order: 1,
    title: 'Acordar, vestir-se, chamar-se',
    subtitle: 'Verbos reflexivos',
    theory: `## Formação
Verbos reflexivos — a ação recai sobre o próprio sujeito.
Pronomes reflexivos: me, te, se, nos, os, se

| Pronome  | LLAMARSE   | LEVANTARSE   |
|----------|------------|--------------|
| yo       | me llamo   | me levanto   |
| tú       | te llamas  | te levantas  |
| él/ella  | se llama   | se levanta   |
| nosotros | nos llamamos| nos levantamos|
| vosotros | os llamáis | os levantáis |
| ellos    | se llaman  | se levantan  |

## Outros reflexivos comuns
despertarse (acordar), ducharse (tomar banho), vestirse (vestir-se), sentirse (sentir-se), acostarse (deitar-se), quedarse (ficar), preocuparse (preocupar-se), casarse (casar-se), divertirse (divertir-se), peinarse (pentear-se), afeitarse (fazer a barba), lavarse (lavar-se).

## Posição do pronome
Antes do verbo conjugado ou aglutinado ao infinitivo/gerúndio/imperativo afirmativo:
  "Me levanto." / "Quiero levantarme." (= "Me quiero levantar.")
  "Estoy duchándome." (= "Me estoy duchando.")
  "¡Levántate!" (Levanta-te!)

## Exemplos
• Me despierto a las siete todos los días. (Acordo às sete todos os dias.)
• Ella se preocupa demasiado por todo. (Ela se preocupa demais com tudo.)
• Nos divertimos mucho en la fiesta. (Nos divertimos muito na festa.)

⚠️ Muitos verbos mudam de sentido com e sem o "se": "ir" (ir) vs. "irse" (ir-se, partir); "dormir" (dormir) vs. "dormirse" (adormecer); "quedar" (combinar/ficar bem) vs. "quedarse" (permanecer num lugar).

💡 Quando o verbo está no infinitivo aglutinado a outro verbo, o pronome reflexivo concorda com o sujeito, não fica sempre em "se": "Quiero levantarme" (eu), "Quieres levantarte" (você) — erro comum é deixar "se" fixo independente da pessoa.

## Vocabulário-chave

• encontrarse — encontrar-se
• rápido — rápido
• demasiado — demais
• acostarse — deitar-se
• ducharse / bañarse — tomar banho`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu me chamo Ana.', answers: ['Yo me llamo Ana.', 'Me llamo Ana.'] },
          { prompt: 'Ela se levanta às sete da manhã.', answers: ['Ella se levanta a las siete de la mañana.', 'Se levanta a las siete de la mañana.'] },
          { prompt: 'Você se veste rápido.', answers: ['Tú te vistes rápido.', 'Te vistes rápido.'] },
          { prompt: 'Nós nos encontramos no café.', answers: ['Nosotros nos encontramos en el café.', 'Nos encontramos en el café.'] },
          { prompt: 'Eles se casaram no verão passado.', answers: ['Ellos se casaron el verano pasado.', 'Se casaron el verano pasado.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu me sinto cansado hoje.', answers: ['Yo me siento cansado hoy.', 'Me siento cansado hoy.', 'Yo me siento cansada hoy.', 'Me siento cansada hoy.'] },
          { prompt: 'Ela toma banho antes de dormir.', answers: ['Ella se ducha antes de dormir.', 'Se ducha antes de dormir.', 'Ella se baña antes de dormir.', 'Se baña antes de dormir.'] },
          { prompt: 'Você se preocupa demais.', answers: ['Tú te preocupas demasiado.', 'Te preocupas demasiado.'] },
          { prompt: 'Nós nos divertimos muito na festa.', answers: ['Nosotros nos divertimos mucho en la fiesta.', 'Nos divertimos mucho en la fiesta.'] },
          { prompt: 'Eles se deitam tarde todas as noites.', answers: ['Ellos se acuestan tarde todas las noches.', 'Se acuestan tarde todas las noches.'] },
        ],
      },
    ],
  },

  {
    id: 'int-2', stage: 'Intermediário', order: 2,
    title: 'Eu o vi, ela a conhece',
    subtitle: 'Pronomes de objeto direto',
    theory: `## Formação
Pronomes de objeto direto (substituem o que é recebido diretamente pela ação):

| Pronome         | OD       |
|-----------------|----------|
| eu              | me       |
| você (informal) | te       |
| ele/ela/isso    | lo / la  |
| nós             | nos      |
| vocês           | os       |
| eles/elas       | los / las|

## Posição
Antes do verbo conjugado.
  "¿Ves el libro?" → "Sí, lo veo." (Você vê o livro? Sim, eu o vejo.)
  "¿Conoces a María?" → "Sí, la conozco." (Conhece a María? Sim, a conheço.)

Com infinitivo ou gerúndio: antes OU colado ao final (ambas formas são corretas).
  "Quiero verlo." = "Lo quiero ver." (Quero vê-lo.)
  "Estoy leyéndolo." = "Lo estoy leyendo." (Estou lendo-o.)

Com imperativo afirmativo: sempre colado ao final.
  "¡Cómpralo!" (Compre-o!) — nunca "Lo compra".

## Exemplos
• Yo la quiero mucho. (Eu a amo muito.)
• ¿Tienes las llaves? Sí, las tengo. (Você tem as chaves? Sim, eu as tenho.)

⚠️ Quando o objeto direto é uma pessoa específica, usa-se a preposição "a" antes do substantivo (chamado "a" pessoal): "Veo a Juan", mas o pronome substituto continua sendo "lo": "Lo veo." Não existe "a pessoal" no português, então é fácil esquecer esse "a" ao montar a frase original.

💡 Quando colado ao gerúndio, acrescenta-se acento gráfico para manter a sílaba tônica original: leyendo → leyéndolo (não "leyendolo").

## Vocabulário-chave

• entender — entender
• recoger — buscar/pegar
• comprar — comprar
• hacer — fazer
• ver — ver`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu o vejo todos os dias.', answers: ['Yo lo veo todos los días.', 'Lo veo todos los días.'] },
          { prompt: 'Ela a chama no telefone.', answers: ['Ella la llama por teléfono.', 'Ella la llama al teléfono.', 'La llama por teléfono.', 'La llama al teléfono.'] },
          { prompt: 'Você os conhece?', answers: ['¿Tú los conoces?', '¿Los conoces?'] },
          { prompt: 'Nós as compramos ontem.', answers: ['Nosotros las compramos ayer.', 'Las compramos ayer.'] },
          { prompt: 'Eu não o entendo.', answers: ['Yo no lo entiendo.', 'No lo entiendo.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ele a ama muito.', answers: ['Él la quiere mucho.', 'Él la ama mucho.', 'La quiere mucho.', 'La ama mucho.'] },
          { prompt: 'Você pode buscá-la?', answers: ['¿Puedes recogerla?', '¿Tú puedes recogerla?', '¿La puedes recoger?'] },
          { prompt: 'Eu preciso vê-los amanhã.', answers: ['Necesito verlos mañana.', 'Yo necesito verlos mañana.'] },
          { prompt: 'Ela não as quer.', answers: ['Ella no las quiere.', 'No las quiere.'] },
          { prompt: 'Vamos fazê-lo agora mesmo.', answers: ['Vamos a hacerlo ahora mismo.', 'Lo vamos a hacer ahora mismo.'] },
        ],
      },
    ],
  },

  {
    id: 'int-3', stage: 'Intermediário', order: 3,
    title: 'Dar algo a alguém',
    subtitle: 'Pronomes de objeto indireto',
    theory: `## Formação
Pronomes de objeto indireto (para quem a ação é direcionada):

| Pronome         | OI  |
|-----------------|-----|
| para mim        | me  |
| para você       | te  |
| para ele/ela    | le  |
| para nós        | nos |
| para vocês      | os  |
| para eles/elas  | les |

"Le doy el libro." (Dou-lhe o livro.)
"Les escribo una carta." (Escrevo-lhes uma carta.)

## Combinação de OD + OI

⚠️ Quando OD e OI se combinam na mesma frase, le/les se transformam em "se":
  "¿Le das el libro a María?" → "Sí, se lo doy." (não: ~~le lo doy~~)
  "¿Les enviaste los documentos?" → "Sí, se los envié."

A ordem é sempre OI + OD: "Se lo doy" (a ela + isso, nessa ordem).

## Duplicação com "a + pessoa"
É comum e natural reforçar o pronome com "a + pessoa", mesmo parecendo redundante:
  "Le digo la verdad a mi madre." (Digo a verdade à minha mãe.)
  "Les compré un regalo a mis hijos." (Comprei um presente para meus filhos.)

## Exemplos
• Te explico el problema. (Explico-te o problema.)
• Nos mandaron una invitación. (Mandaram-nos um convite.)

💡 Pense no OI como resposta à pergunta "para quem?" ou "a quem?", e o OD como resposta a "o quê?" — "Le (a ela) doy el libro (o quê)."

## Vocabulário-chave

• contar — contar
• mostrar — mostrar
• ayudar — ajudar
• mandar — mandar/enviar
• el regalo — o presente
• pedir un favor — pedir um favor`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu te conto tudo mais tarde.', answers: ['Yo te cuento todo más tarde.', 'Te cuento todo más tarde.'] },
          { prompt: 'Ela nos mostrou as fotos.', answers: ['Ella nos mostró las fotos.', 'Nos mostró las fotos.'] },
          { prompt: 'Você pode me ajudar?', answers: ['¿Tú puedes ayudarme?', '¿Puedes ayudarme?', '¿Me puedes ayudar?'] },
          { prompt: 'Eu lhe dei as chaves.', answers: ['Yo le di las llaves.', 'Le di las llaves.'] },
          { prompt: 'Eles nos mandaram um presente.', answers: ['Ellos nos mandaron un regalo.', 'Nos mandaron un regalo.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu te comprei um presente.', answers: ['Yo te compré un regalo.', 'Te compré un regalo.'] },
          { prompt: 'Ela lhe explicou o problema.', answers: ['Ella le explicó el problema.', 'Le explicó el problema.'] },
          { prompt: 'Podem me dizer onde fica o hotel?', answers: ['¿Pueden decirme dónde está el hotel?', '¿Me pueden decir dónde está el hotel?', '¿Pueden decirme dónde queda el hotel?', '¿Me pueden decir dónde queda el hotel?'] },
          { prompt: 'Ele me pediu um favor.', answers: ['Él me pidió un favor.', 'Me pidió un favor.'] },
          { prompt: 'Eu lhes mandei um email.', answers: ['Yo les mandé un correo.', 'Les mandé un correo.', 'Yo les mandé un email.'] },
        ],
      },
    ],
  },

  {
    id: 'int-4', stage: 'Intermediário', order: 4,
    title: 'Por amor ou para sempre?',
    subtitle: 'Por vs. Para — a distinção que confunde',
    theory: `## PARA — finalidade, destino, destinatário, prazo, opinião

  "Estudio para aprender." (finalidade — Estudo para aprender.)
  "Este regalo es para ti." (destinatário — Este presente é para você.)
  "Salgo para Madrid." (destino — Saio para Madrid.)
  "Lo necesito para el lunes." (prazo — Preciso disso até segunda.)
  "Para mí, es difícil." (opinião — Para mim, é difícil.)

## POR — causa/motivo, troca, duração, meio, lugar percorrido

  "Lo hice por amor." (causa — Fiz isso por amor.)
  "Te llamo por teléfono." (meio — Te chamo por telefone.)
  "Caminé por el parque." (lugar percorrido — Caminhei pelo parque.)
  "Gracias por tu ayuda." (motivo — Obrigado pela sua ajuda.)
  "Estudié por dos horas." (duração — Estudei por duas horas.)
  "Cambié mi coche por una moto." (troca — Troquei meu carro por uma moto.)
  "Lo compré por diez euros." (preço — Comprei por dez euros.)

## Tabela-resumo

| Ideia                  | Preposição |
|--------------------------|------------|
| Finalidade/objetivo       | para       |
| Destinatário              | para       |
| Destino (para onde vou)   | para       |
| Causa/motivo              | por        |
| Meio (como)               | por        |
| Lugar percorrido (por onde)| por       |
| Duração aproximada        | por        |
| Troca/preço               | por        |

⚠️ "Por" e "para" são uma das maiores fontes de erro para lusofalantes, já que o português usa "por" para boa parte dos dois sentidos. Teste útil: se a pergunta é "para quê/quem?" use PARA; se é "por quê/causa de quê?" use POR.

💡 Frase de fixação: "Trabajo para vivir, no vivo para trabajar." (Trabalho para viver, não vivo para trabalhar.) — repare que "para" sempre aponta para um objetivo futuro, nunca para uma causa passada.

## Vocabulário-chave

• necesitar — precisar
• caminar — caminhar
• el lunes — segunda-feira
• la ayuda — a ajuda`,
    exercises: [
      {
        sentences: [
          { prompt: 'Este presente é para você.', answers: ['Este regalo es para ti.'] },
          { prompt: 'Estudo espanhol para falar com espanhóis.', answers: ['Estudio español para hablar con españoles.'] },
          { prompt: 'Preciso disso para segunda-feira.', answers: ['Necesito esto para el lunes.'] },
          { prompt: 'Para mim, é muito difícil.', answers: ['Para mí, es muy difícil.'] },
          { prompt: 'Vou para Madrid amanhã.', answers: ['Salgo para Madrid mañana.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Obrigado pela sua ajuda.', answers: ['Gracias por tu ayuda.', 'Gracias por su ayuda.'] },
          { prompt: 'Falei com ela por telefone.', answers: ['Hablé con ella por teléfono.'] },
          { prompt: 'Caminhei pelo parque.', answers: ['Caminé por el parque.'] },
          { prompt: 'Fiz isso por amor.', answers: ['Lo hice por amor.'] },
          { prompt: 'Estudo duas horas por dia.', answers: ['Estudio dos horas por día.'] },
        ],
      },
    ],
  },

  {
    id: 'int-5', stage: 'Intermediário', order: 5,
    title: 'Faz isso! Não faças aquilo.',
    subtitle: 'Imperativo afirmativo e negativo',
    theory: `## Imperativo afirmativo
  tú: igual à forma de 3ª pessoa do presente do indicativo: habla, come, vive
  vosotros: troca -r do infinitivo por -d: hablad, comed, vivid
  Irregulares (tú): ven (venir), di (decir), haz (hacer), ten (tener), sé (ser), sal (salir), pon (poner), ve (ir)

## Imperativo negativo
Usa o presente do subjuntivo para tú, vosotros, usted e ustedes:
  No hables. / No comas. / No vayas. / No salgas.
  vosotros: No habléis. / No comáis.

## Forma formal (usted/ustedes)
Sempre usa o presente do subjuntivo, afirmativo e negativo:
  Hable. / Hablen. / Coman. / Vengan. / No salga.

## Posição dos pronomes
No imperativo afirmativo, os pronomes se colam ao final do verbo; no negativo, ficam antes:
  "¡Dímelo!" (Diz-me isso!) vs. "¡No me lo digas!" (Não me diga isso!)
  "¡Siéntate!" (Sente-se!) vs. "¡No te sientes!" (Não se sente!)

⚠️ O imperativo afirmativo de "tú" usa uma forma diferente do imperativo negativo — não basta colocar "no" antes do imperativo afirmativo: "Habla" (fala) mas "No hables" (não fale), nunca "no habla".

💡 Para memorizar os irregulares do imperativo de tú, note que muitos têm apenas uma sílaba: ven, di, haz, ten, sé, sal, pon, ve — vale criar uma frase mnemônica com todos juntos.

## Vocabulário-chave

• despacio — devagar
• el plato — o prato
• ahora mismo — agora mesmo
• sentarse — sentar-se
• entrar — entrar
• sola — sozinha`,
    exercises: [
      {
        sentences: [
          { prompt: 'Fala mais devagar, por favor.', answers: ['Habla más despacio, por favor.'] },
          { prompt: 'Come tudo no prato.', answers: ['Come todo lo que hay en el plato.', 'Cómete todo el plato.', 'Acábate el plato.'] },
          { prompt: 'Vem aqui agora mesmo.', answers: ['Ven aquí ahora mismo.'] },
          { prompt: 'Me diz a verdade.', answers: ['Dime la verdad.', 'Cuéntame la verdad.'] },
          { prompt: 'Por favor, entre. (formal)', answers: ['Por favor, entre.', 'Pase, por favor.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Não fala tão rápido.', answers: ['No hables tan rápido.', 'No hables tan rápidamente.'] },
          { prompt: 'Não come na cama.', answers: ['No comas en la cama.'] },
          { prompt: 'Não vai lá sozinha.', answers: ['No vayas allí sola.', 'No vayas allá sola.'] },
          { prompt: 'Por favor, sente-se. (formal)', answers: ['Por favor, siéntese.', 'Tome asiento, por favor.'] },
          { prompt: 'Coloque aqui, por favor. (formal)', answers: ['Ponga aquí, por favor.', 'Colóquelo aquí, por favor.', 'Déjelo aquí, por favor.'] },
        ],
      },
    ],
  },

  {
    id: 'int-6', stage: 'Intermediário', order: 6,
    title: 'Quero que você venha',
    subtitle: 'Presente do subjuntivo',
    theory: `## Formação
Presente do subjuntivo — usado para expressar desejo, dúvida, emoção, hipótese, ordem indireta.

Formação: parte-se da 1ª pessoa do presente do indicativo e troca-se a vogal temática (-ar → e; -er/-ir → a).

| Pronome  | HABLAR (-ar) | COMER (-er) | VIVIR (-ir) |
|----------|--------------|-------------|-------------|
| yo       | hable        | coma        | viva        |
| tú       | hables       | comas       | vivas       |
| él/ella  | hable        | coma        | viva        |
| nosotros | hablemos     | comamos     | vivamos     |
| vosotros | habléis      | comáis      | viváis      |
| ellos    | hablen       | coman       | vivan       |

Irregulares: sea (ser), esté (estar), vaya (ir), tenga (tener), haga (hacer), diga (decir), pueda (poder), sepa (saber).

## Principais usos (com "que")

• Desejo — "Quiero que vengas." (Quero que você venha.)
• Emoção — "Me alegra que estés bien." (Me alegra que você esteja bem.)
• Dúvida/negação — "No creo que sea verdad." (Não acho que seja verdade.)
• Expressões impessoais — "Es importante que estudies." (É importante que você estude.)
• Pedido/sugestão — "Te pido que me ayudes." (Peço que me ajude.)
• Antecedente indefinido/inexistente — "Busco a alguien que hable francés." (Procuro alguém que fale francês.)

## Indicativo vs. subjuntivo

| Indicativo (fato/certeza)         | Subjuntivo (desejo/dúvida/emoção)     |
|--------------------------------------|------------------------------------------|
| Creo que viene. (acredito que vem)  | No creo que venga. (não acredito que venha) |
| Sé que es verdad.                    | Dudo que sea verdad.                     |

⚠️ Verbos de opinião/crença afirmativos (creer, pensar) normalmente pedem indicativo; quando negados, mudam para subjuntivo: "Creo que es así" mas "No creo que sea así."

💡 Para fixar o subjuntivo, lembre o macete WEIRDO (em inglês): Wishes (desejos), Emotions (emoções), Impersonal expressions (expressões impessoais), Recommendations (recomendações), Doubt/denial (dúvida/negação), Ojalá — todos esses gatilhos pedem subjuntivo.

## Vocabulário-chave

• inocente — inocente
• posible — possível
• preferir — preferir
• mañana — amanhã (advérbio)`,
    exercises: [
      {
        sentences: [
          { prompt: 'Quero que você venha amanhã.', answers: ['Quiero que vengas mañana.'] },
          { prompt: 'Espero que tudo esteja bem.', answers: ['Espero que todo esté bien.', 'Espero que todo vaya bien.'] },
          { prompt: 'É importante que você estude.', answers: ['Es importante que estudies.'] },
          { prompt: 'Não acredito que ele seja inocente.', answers: ['No creo que él sea inocente.', 'No creo que sea inocente.'] },
          { prompt: 'Peça-lhe que fale mais devagar.', answers: ['Pídele que hable más despacio.', 'Pídele que hable más lento.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ela quer que eu a ajude.', answers: ['Ella quiere que la ayude.', 'Quiere que la ayude.'] },
          { prompt: 'Quando você tiver tempo, me liga.', answers: ['Cuando tengas tiempo, llámame.', 'Cuando tengas tiempo, llámame por teléfono.'] },
          { prompt: 'Não há nada que eu possa fazer.', answers: ['No hay nada que yo pueda hacer.', 'No hay nada que pueda hacer.'] },
          { prompt: 'Prefiro que você não vá.', answers: ['Prefiero que no vayas.'] },
          { prompt: 'É possível que ele chegue tarde.', answers: ['Es posible que llegue tarde.'] },
        ],
      },
    ],
  },

  {
    id: 'int-7', stage: 'Intermediário', order: 7,
    title: 'Gostaria, poderia, faria…',
    subtitle: 'Condicional simples',
    theory: `## Formação
Condicional simples — ação hipotética ou pedido cortês.

Regulares: infinitivo + terminações (-ía, -ías, -ía, -íamos, -íais, -ían) — as mesmas terminações para -ar, -er e -ir.

| Pronome  | HABLAR (condicional) |
|----------|----------------------|
| yo       | hablaría             |
| tú       | hablarías            |
| él/ella  | hablaría             |
| nosotros | hablaríamos          |
| vosotros | hablaríais           |
| ellos    | hablarían            |

Irregulares (usam as mesmas raízes irregulares do futuro):
  tener → tendría   hacer → haría   poder → podría
  venir → vendría   decir → diría   saber → sabría
  poner → pondría   salir → saldría

## Usos

• Hipótese — "Con más tiempo, viajaría más." (Com mais tempo, viajaria mais.)
• Cortesia/pedido educado — "¿Podría ayudarme?" / "¿Te importaría cerrar?" (Poderia me ajudar? / Você se importaria de fechar?)
• Suposição no passado — "Serían las tres cuando llegó." (Seriam as três quando ele chegou.)
• Conselho — "Yo que tú, hablaría con ella." (Eu no seu lugar, falaria com ela.)

⚠️ O condicional simples é o tempo verbal usado na parte principal das condicionais hipotéticas do tipo 2 (si + imperfecto subjuntivo): "Si tuviera dinero, viajaría" — nunca use o futuro nessa estrutura.

💡 Em pedidos formais, o condicional suaviza o tom e soa mais educado que o presente do indicativo: "¿Podría traerme la cuenta?" é mais cortês que "¿Puede traerme la cuenta?"

## Vocabulário-chave

• el mundo — o mundo
• importar — importar-se
• pedir disculpas — pedir desculpa
• la práctica — a prática`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu gostaria de um café, por favor.', answers: ['Me gustaría un café, por favor.'] },
          { prompt: 'Você poderia me ajudar?', answers: ['¿Podrías ayudarme?', '¿Tú podrías ayudarme?', '¿Me podrías ayudar?'] },
          { prompt: 'Com mais dinheiro, viajaria pelo mundo.', answers: ['Con más dinero, viajaría por el mundo.'] },
          { prompt: 'Eu nunca faria isso.', answers: ['Yo nunca haría eso.', 'Nunca haría eso.'] },
          { prompt: 'Ela diria a verdade se soubesse.', answers: ['Ella diría la verdad si supiera.', 'Diría la verdad si supiera.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Você se importaria de fechar a janela?', answers: ['¿Te importaría cerrar la ventana?'] },
          { prompt: 'Seriam umas três quando ele chegou.', answers: ['Serían las tres cuando llegó.', 'Serían como las tres cuando llegó.'] },
          { prompt: 'Eles gostariam de saber mais.', answers: ['Les gustaría saber más.', 'A ellos les gustaría saber más.', 'Querrían saber más.'] },
          { prompt: 'Na sua posição, eu pediria desculpa.', answers: ['En tu lugar, pediría disculpas.', 'En tu posición, pediría disculpas.'] },
          { prompt: 'Eu falaria melhor com mais prática.', answers: ['Hablaría mejor con más práctica.'] },
        ],
      },
    ],
  },

  {
    id: 'int-8', stage: 'Intermediário', order: 8,
    title: 'O que estou fazendo agora',
    subtitle: 'Presente e passado contínuo',
    theory: `## Formação do gerúndio
ESTAR + gerúndio — ação em andamento, em curso.

  -AR → -ando: hablando, trabajando, cantando
  -ER/-IR → -iendo: comiendo, viviendo, saliendo

Irregulares: diciendo (decir), viniendo (venir), yendo (ir), pudiendo (poder), durmiendo (dormir), leyendo (leer), siguiendo (seguir), pidiendo (pedir).

## Presente e passado contínuo

PRESENTE CONTÍNUO: "Estoy comiendo." (Estou comendo.)
PASSADO CONTÍNUO: "Estaba comiendo cuando llegaste." (Estava comendo quando você chegou.)

## Exemplos
• Estamos estudiando para el examen. (Estamos estudando para a prova.)
• ¿Qué estabas haciendo anoche? (O que você estava fazendo ontem à noite?)

⚠️ Em espanhol NÃO se usa o contínuo para hábitos ou rotinas — ao contrário do que pode parecer pela tradução literal do português ou pela influência do inglês.
  "Trabalho aqui." = "Trabajo aquí." (não: ~~Estoy trabajando aquí~~ para hábito)
  "Vivo en Madrid." = "Vivo en Madrid." (não: ~~Estoy viviendo en Madrid~~, salvo se for algo temporário)

💡 O contínuo combina bem com advérbios como "ahora mismo" (agora mesmo) e "en este momento" (neste momento) para reforçar que a ação está acontecendo exatamente naquele instante.

## Vocabulário-chave

• mentir — mentir
• construir — construir
• el edificio — o prédio
• vestirse — vestir-se`,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu estou comendo agora.', answers: ['Yo estoy comiendo ahora.', 'Estoy comiendo ahora.'] },
          { prompt: 'Ela está lendo um livro.', answers: ['Ella está leyendo un libro.', 'Está leyendo un libro.'] },
          { prompt: 'O que você está fazendo?', answers: ['¿Qué estás haciendo?', '¿Qué estás haciendo tú?'] },
          { prompt: 'Eles estão dormindo.', answers: ['Ellos están durmiendo.', 'Están durmiendo.'] },
          { prompt: 'Nós estamos aprendendo espanhol.', answers: ['Nosotros estamos aprendiendo español.', 'Estamos aprendiendo español.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Você está mentindo para mim.', answers: ['Tú me estás mintiendo.', 'Me estás mintiendo.'] },
          { prompt: 'Ela estava se vestindo para a festa.', answers: ['Ella se estaba vistiendo para la fiesta.', 'Estaba vistiéndose para la fiesta.'] },
          { prompt: 'Estão construindo um prédio novo ali.', answers: ['Están construyendo un edificio nuevo allí.', 'Se está construyendo un edificio nuevo allí.', 'Están construyendo un nuevo edificio allí.'] },
          { prompt: 'Eu estava dormindo quando você ligou.', answers: ['Yo estaba durmiendo cuando llamaste.', 'Estaba durmiendo cuando llamaste.'] },
          { prompt: 'Ele está vindo agora.', answers: ['Él viene ahora.', 'Él ya viene.', 'Está viniendo ahora.', 'Él está viniendo ahora.'] },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  //  AVANÇADO
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'adv-1', stage: 'Avançado', order: 1,
    title: 'Hoje fiz vs. ontem fiz',
    subtitle: 'Pretérito perfecto vs. indefinido',
    theory: `## Formação
Pretérito perfecto (he hablado) — ação passada ligada ao presente, com efeito ou relevância ainda atual.
  Formação: haber (presente) + participio
  he, has, ha, hemos, habéis, han + hablado / comido / vivido

Participios irregulares mais comuns: hecho (hacer), dicho (decir), puesto (poner), visto (ver), vuelto (volver), abierto (abrir), escrito (escribir), roto (romper), muerto (morir), ido (ir).

## Uso na Espanha vs. América Latina

Na Espanha, o perfecto se usa para o "presente expandido" (hoje, esta semana, este mês, na minha vida):
  "Hoy he comido bien." (Hoje comi bem — o dia ainda está em curso.)
  "Ayer comí bien." (Ontem comi bem — tempo concluído = pretérito indefinido.)

Já na maior parte da América Latina (México, Argentina, Colômbia etc.) o pretérito indefinido domina mesmo para o passado recente, e o perfecto é menos frequente no dia a dia oral — por isso é importante dominar os dois tempos e reconhecer ambos.

## Exemplos
• ¿Has estado alguna vez en Perú? (Você já esteve no Peru alguma vez?)
• Nunca he probado el sushi. (Nunca provei sushi.)
• Esta mañana he desayunado tarde. (Esta manhã tomei café da manhã tarde.)

⚠️ Não confunda "ha" (verbo haber, 3ª pessoa) com "a" (preposição) — são homófonos e um erro comum na escrita: "Él ha llegado" (ele chegou), não "Él a llegado".

💡 Dica de marcadores temporais: hoy, esta semana, este mes, este año, alguna vez, nunca, ya, todavía no — geralmente pedem o perfecto; ayer, la semana pasada, en + ano específico pedem o indefinido.

## Vocabulário-chave

• almorzar — almoçar
• trabajar — trabalhar
• nacer — nascer
• cambiar — mudar
• hace poco — há pouco`,
    exercises: [
      {
        sentences: [
          { prompt: 'Hoje almocei bem.', answers: ['Hoy he comido bien.', 'Hoy he almorzado bien.'] },
          { prompt: 'Esta semana trabalhei muito.', answers: ['Esta semana he trabajado mucho.'] },
          { prompt: 'Nunca fui à Espanha.', answers: ['Nunca he estado en España.', 'Nunca he ido a España.'] },
          { prompt: 'Você já comeu hoje?', answers: ['¿Ya has comido hoy?', '¿Ya almorzaste hoy?'] },
          { prompt: 'Ela chegou há pouco.', answers: ['Ella ha llegado hace poco.', 'Ha llegado hace poco.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ontem dormi oito horas.', answers: ['Ayer dormí ocho horas.'] },
          { prompt: 'Em 2015, morei em Madrid.', answers: ['En 2015, viví en Madrid.'] },
          { prompt: 'No ano passado, conheci a minha namorada.', answers: ['El año pasado, conocí a mi novia.'] },
          { prompt: 'Picasso nasceu em Málaga.', answers: ['Picasso nació en Málaga.'] },
          { prompt: 'Naquela tarde, tudo mudou.', answers: ['Aquella tarde, todo cambió.'] },
        ],
      },
    ],
  },

  {
    id: 'adv-2', stage: 'Avançado', order: 2,
    title: 'Já tinha ido quando você chegou',
    subtitle: 'Pluscuamperfecto',
    theory: `## Formação
Pluscuamperfecto — ação anterior a outra ação no passado ("tinha feito"):
  haber (imperfecto) + participio
  había, habías, había, habíamos, habíais, habían + participio

## Exemplos
• "Cuando llegué, ella ya había salido." (Quando cheguei, ela já tinha saído.)
• "No había comido nada." (Não tinha comido nada.)
• "Cuando empezó a llover, ya habíamos llegado a casa." (Quando começou a chover, já tínhamos chegado em casa.)

É o equivalente ao "had done" do inglês ou "tinha feito" do português — denota uma ação que aconteceu antes de outro ponto de referência no passado, criando uma sequência clara de eventos.

## Estrutura típica
Geralmente aparece com "cuando", "ya", "todavía no" conectando duas ações passadas:
  "Cuando llegamos al cine, la película ya había empezado." (Quando chegamos ao cinema, o filme já tinha começado.)

⚠️ Não confunda o pluscuamperfecto (había hablado) com o pretérito perfecto (he hablado) — o primeiro sempre se refere a um ponto anterior a outro evento passado; o segundo conecta o passado ao presente.

💡 Pense no pluscuamperfecto como o "passado do passado" — útil para contar histórias com flashbacks ou explicar a causa de algo que já tinha acontecido antes do momento principal da narrativa.

## Vocabulário-chave

• descubrir — descobrir
• mentir — mentir
• recordar / acordarse — lembrar(-se)
• dejar — deixar
• terminar — terminar
• la dirección equivocada — o caminho errado`,
    exercises: [
      {
        sentences: [
          { prompt: 'Quando cheguei, ela já tinha saído.', answers: ['Cuando llegué, ella ya había salido.'] },
          { prompt: 'Ele não tinha comido nada desde a manhã.', answers: ['No había comido nada desde la mañana.', 'Él no había comido nada desde la mañana.'] },
          { prompt: 'Eu nunca tinha visto nada assim.', answers: ['Nunca había visto nada así.', 'Yo nunca había visto nada así.'] },
          { prompt: 'Eles já tinham terminado quando começamos.', answers: ['Ellos ya habían terminado cuando empezamos.', 'Ya habían terminado cuando empezamos.'] },
          { prompt: 'Ela descobriu que ele tinha mentido.', answers: ['Ella descubrió que él había mentido.', 'Descubrió que había mentido.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu me lembrei de que tinha deixado as chaves em casa.', answers: ['Recordé que había dejado las llaves en casa.', 'Me acordé de que había dejado las llaves en casa.'] },
          { prompt: 'Quando chegamos ao cinema, o filme já tinha começado.', answers: ['Cuando llegamos al cine, la película ya había empezado.'] },
          { prompt: 'Ela nunca tinha provado comida japonesa.', answers: ['Ella nunca había probado comida japonesa.', 'Nunca había probado comida japonesa.', 'Ella nunca había probado la comida japonesa.', 'Nunca había probado la comida japonesa.'] },
          { prompt: 'Ele me disse que tinha trabalhado lá durante anos.', answers: ['Me dijo que había trabajado allí durante años.'] },
          { prompt: 'Percebemos que tínhamos tomado a direção errada.', answers: ['Nos dimos cuenta de que habíamos tomado la dirección equivocada.', 'Nos dimos cuenta de que habíamos tomado la dirección incorrecta.'] },
        ],
      },
    ],
  },

  {
    id: 'adv-3', stage: 'Avançado', order: 3,
    title: 'Se eu tivesse dinheiro…',
    subtitle: 'Condicionais com si — os três tipos',
    theory: `## Tipo 1 — real/possível (presente ou futuro)
  Si + presente indicativo → presente / futuro / imperativo
  "Si tengo tiempo, te llamo." (Se eu tiver tempo, te ligo.)
  "Si llueve, no salgas." (Se chover, não saia.)

## Tipo 2 — hipotético (improvável ou contrário ao presente)
  Si + imperfecto de subjuntivo → condicional simples
  "Si tuviera dinero, viajaría." (Se tivesse dinheiro, viajaria.)
  "Si fuera tú, no lo haría." (Se eu fosse você, não faria isso.)

## Tipo 3 — impossível (passado que não aconteceu)
  Si + pluscuamperfecto de subjuntivo → condicional composto
  "Si hubiera estudiado, habría aprobado." (Se tivesse estudado, teria passado.)
  "Si hubieras llegado antes, lo habrías visto." (Se tivesse chegado antes, teria visto.)

## Quadro-resumo

| Tipo | Cláusula com "si"             | Cláusula principal       |
|------|----------------------------------|---------------------------|
| 1    | presente indicativo              | presente/futuro/imperativo|
| 2    | imperfecto subjuntivo            | condicional simples        |
| 3    | pluscuamperfecto subjuntivo      | condicional composto       |

⚠️ NUNCA se usa futuro nem presente do subjuntivo diretamente depois de "si" condicional — é um erro comum de quem tenta traduzir literalmente do português ("se eu for" tenta soar como subjuntivo futuro, mas em espanhol isso vira presente do indicativo: "si voy").

💡 Os tipos 2 e 3 frequentemente se misturam numa mesma frase quando a condição é passada mas a consequência é presente: "Si hubiera estudiado, ahora tendría un buen trabajo." (Se tivesse estudado, agora teria um bom emprego.)

## Vocabulário-chave

• aprobar — passar (num exame)
• ponerse furioso — ficar furioso
• avisar — avisar
• quedarse en casa — ficar em casa`,
    exercises: [
      {
        sentences: [
          { prompt: 'Se tiver tempo, ligo para você.', answers: ['Si tengo tiempo, te llamo.'] },
          { prompt: 'Se chover, ficamos em casa.', answers: ['Si llueve, nos quedamos en casa.'] },
          { prompt: 'Se você estudar, vai passar no exame.', answers: ['Si estudias, aprobarás el examen.', 'Si estudias, vas a aprobar el examen.'] },
          { prompt: 'Se eu tivesse dinheiro, viajaria pelo mundo.', answers: ['Si tuviera dinero, viajaría por el mundo.'] },
          { prompt: 'Se você fosse eu, o que faria?', answers: ['Si fueras yo, ¿qué harías?'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Se ela soubesse a verdade, ficaria furiosa.', answers: ['Si supiera la verdad, se pondría furiosa.', 'Si supiera la verdad, estaría furiosa.'] },
          { prompt: 'Se tivéssemos estudado mais, teríamos passado.', answers: ['Si hubiéramos estudiado más, habríamos aprobado.'] },
          { prompt: 'Se ele não tivesse chegado tarde, não teria perdido o emprego.', answers: ['Si no hubiera llegado tarde, no habría perdido el trabajo.'] },
          { prompt: 'Se você não comer, vai ter fome.', answers: ['Si no comes, tendrás hambre.'] },
          { prompt: 'Se ela vier, avisa-me.', answers: ['Si ella viene, avísame.'] },
        ],
      },
    ],
  },

  {
    id: 'adv-4', stage: 'Avançado', order: 4,
    title: 'Foi construído, fala-se aqui',
    subtitle: 'Voz passiva',
    theory: `## Dois tipos de passiva em espanhol

### 1. Passiva com SER + participio
O participio concorda em gênero e número com o sujeito, igual ao português:
  "La carta fue escrita por él." (A carta foi escrita por ele.)
  "Los libros fueron vendidos ayer." (Os livros foram vendidos ontem.)

### 2. Passiva reflexa com SE
Mais comum no espanhol falado e escrito cotidiano, principalmente quando o agente não é mencionado:
  "Se habla español aquí." (Fala-se espanhol aqui.)
  "Se venden pisos." (Vendem-se apartamentos.)
  "Se necesita camarero." (Procura-se garçom.)
  "Aquí se come muy bien." (Aqui se come muito bem.)

## Quando usar cada uma

A passiva com SER é preferida quando o agente é explícito ("por + agente") ou em registros mais formais/escritos (notícias, textos acadêmicos). A passiva com SE é natural na fala diária, principalmente em avisos, placas e instruções gerais.

⚠️ O espanhol usa a voz passiva com muito menos frequência que o português ou o inglês — sempre que possível, os falantes nativos preferem a voz ativa ou a construção com "se". Traduzir passivas do português ao pé da letra costuma gerar frases que soam artificiais em espanhol.

💡 Para anúncios e placas, "se" é praticamente a norma: "Se prohíbe fumar" (Proibido fumar), "Se alquila" (Aluga-se), "Se busca" (Procura-se).

## Vocabulário-chave

• escribir — escrever
• romper — quebrar
• firmar — assinar
• detener / capturar — prender (criminoso)
• el piso / el apartamento — o apartamento
• el cocinero — o cozinheiro`,
    exercises: [
      {
        sentences: [
          { prompt: 'O livro foi escrito por Cervantes.', answers: ['El libro fue escrito por Cervantes.'] },
          { prompt: 'A janela foi quebrada por uma pedra.', answers: ['La ventana fue rota por una piedra.', 'La ventana fue rompida por una piedra.'] },
          { prompt: 'Os documentos foram assinados pelo diretor.', answers: ['Los documentos fueron firmados por el director.'] },
          { prompt: 'A casa foi construída há cem anos.', answers: ['La casa fue construida hace cien años.'] },
          { prompt: 'O ladrão foi preso pela polícia.', answers: ['El ladrón fue detenido por la policía.', 'El ladrón fue capturado por la policía.', 'El ladrón fue arrestado por la policía.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Fala-se espanhol aqui.', answers: ['Se habla español aquí.'] },
          { prompt: 'Vendem-se apartamentos.', answers: ['Se venden pisos.', 'Se venden apartamentos.', 'Se venden departamentos.'] },
          { prompt: 'Não se pode fumar aqui.', answers: ['No se puede fumar aquí.'] },
          { prompt: 'Como se diz "obrigado" em espanhol?', answers: ['¿Cómo se dice "gracias" en español?'] },
          { prompt: 'Procura-se cozinheiro experiente.', answers: ['Se busca cocinero con experiencia.', 'Se busca cocinero experimentado.', 'Se necesita cocinero con experiencia.'] },
        ],
      },
    ],
  },

  {
    id: 'adv-5', stage: 'Avançado', order: 5,
    title: 'O livro que li, a pessoa com quem falei',
    subtitle: 'Pronomes relativos',
    theory: `## QUE — o mais comum
Usado para pessoas e coisas, sujeito ou objeto, sem preposição:
  "El libro que leí era interesante." (O livro que li era interessante.)
  "La chica que vino ayer es mi prima." (A garota que veio ontem é minha prima.)

## QUIEN/QUIENES — só pessoas
Especialmente depois de preposição:
  "La persona con quien hablé." (A pessoa com quem falei.)
  "El amigo de quien te hablé." (O amigo de quem te falei.)

## EL QUE / LA QUE / LOS QUE / LAS QUE
Com preposição, ou para dar ênfase ("aquele que..."):
  "La casa en la que vivo." (A casa em que vivo.)
  "El que llegue primero, gana." (Quem chegar primeiro, ganha.)

## EL CUAL / LA CUAL — registro mais formal
Comum em textos escritos e jurídicos, com preposições mais longas:
  "El problema, el cual fue resuelto ayer…" (O problema, o qual foi resolvido ontem...)

## LO QUE — refere-se a uma ideia inteira (não a um substantivo específico)
  "Lo que me dices es increíble." (O que você me diz é incrível.)
  "No entiendo lo que pasó." (Não entendo o que aconteceu.)

⚠️ Em espanhol, "que" relativo NUNCA pode ser omitido como às vezes acontece informalmente no português falado ("o livro [que] eu li") — é sempre obrigatório: "el libro que leí", nunca "el libro leí".

💡 Truque rápido: se a frase relativa descreve uma "coisa" inteira ou uma situação (não um substantivo específico), use "lo que"; se descreve um substantivo específico, use "que", "quien" ou "el que" conforme o contexto.

## Vocabulário-chave

• recomendar — recomendar
• simpático — simpático
• antiguo — antigo
• imposible — impossível
• resolver — resolver
• grave — grave`,
    exercises: [
      {
        sentences: [
          { prompt: 'O livro que li era muito bom.', answers: ['El libro que leí era muy bueno.'] },
          { prompt: 'A pessoa que me ajudou foi muito simpática.', answers: ['La persona que me ayudó fue muy simpática.'] },
          { prompt: 'Aquele é o restaurante que eu te recomendei.', answers: ['Ese es el restaurante que te recomendé.', 'Aquel es el restaurante que te recomendé.'] },
          { prompt: 'O homem com quem falei é médico.', answers: ['El hombre con quien hablé es médico.', 'El hombre con el que hablé es médico.'] },
          { prompt: 'Isso é tudo o que tenho.', answers: ['Esto es todo lo que tengo.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'A casa em que vivemos é muito antiga.', answers: ['La casa en la que vivimos es muy antigua.', 'La casa en que vivimos es muy antigua.'] },
          { prompt: 'O que você me disse é impossível.', answers: ['Lo que me dijiste es imposible.', 'Lo que me has dicho es imposible.'] },
          { prompt: 'Ela é a amiga de quem te falei.', answers: ['Ella es la amiga de quien te hablé.'] },
          { prompt: 'Quem muito quer, nada tem.', answers: ['Quien mucho quiere, nada tiene.', 'El que mucho quiere, nada tiene.'] },
          { prompt: 'O problema, que foi resolvido ontem, era grave.', answers: ['El problema, el cual fue resuelto ayer, era grave.', 'El problema, que fue resuelto ayer, era grave.'] },
        ],
      },
    ],
  },

  {
    id: 'adv-6', stage: 'Avançado', order: 6,
    title: 'Ela disse que estava cansada',
    subtitle: 'Discurso indireto — relatar o que foi dito',
    theory: `## Mudanças de tempo verbal
Quando relatamos o que alguém disse no passado, o tempo verbal "recua":

| Discurso direto         | Discurso indireto              |
|----------------------------|-----------------------------------|
| presente                  | imperfecto                        |
| pretérito indefinido      | pluscuamperfecto                  |
| futuro simples            | condicional simples               |
| imperativo                | subjuntivo (imperfecto)           |

Exemplos:
  "Estoy cansado." → "Dijo que estaba cansado." (Disse que estava cansado.)
  "Fui." → "Dijo que había ido." (Disse que tinha ido.)
  "Iré." → "Dijo que iría." (Disse que iria.)
  "¡Ven!" → "Me dijo que fuera." (Me disse que fosse/viesse.)

## Perguntas relatadas

Sim/Não: "¿Vienes?" → "Preguntó si venía." (Perguntou se eu vinha.)
Com interrogativo: "¿Dónde vives?" → "Preguntó dónde vivía." (Perguntou onde eu morava.)

Note que no discurso indireto a pergunta perde os sinais ¿...? e a inversão de sujeito.

⚠️ Quando o verbo introdutor ("dijo", "preguntó") está no presente, não é necessário fazer o recuo de tempo: "Dice que está cansado" (verbo introdutor no presente, sem mudança).

💡 Se o fato relatado ainda é válido/atual no momento da fala, alguns falantes mantêm o tempo original mesmo com verbo introdutor no passado: "Me dijo que vive en Madrid" (e ainda vive) é aceitável, embora "vivía" também funcione.

## Vocabulário-chave

• preguntar — perguntar
• callarse — calar-se
• contar — contar
• explicar — explicar
• preocuparse — preocupar-se`,
    exercises: [
      {
        sentences: [
          { prompt: 'Ela disse que estava muito cansada.', answers: ['Ella dijo que estaba muy cansada.', 'Dijo que estaba muy cansada.'] },
          { prompt: 'Ele perguntou se eu falava espanhol.', answers: ['Él preguntó si hablaba español.', 'Preguntó si hablaba español.'] },
          { prompt: 'Ela me disse que ia chegar tarde.', answers: ['Ella me dijo que iba a llegar tarde.', 'Me dijo que iba a llegar tarde.'] },
          { prompt: 'Eles nos perguntaram onde ficava o museu.', answers: ['Ellos nos preguntaron dónde estaba el museo.', 'Nos preguntaron dónde estaba el museo.'] },
          { prompt: 'Ela me pediu que ficasse em silêncio.', answers: ['Ella me pidió que me callara.', 'Me pidió que me callara.', 'Ella me pidió que guardara silencio.', 'Me pidió que guardara silencio.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ele me contou que tinha vivido em Paris.', answers: ['Me contó que había vivido en París.'] },
          { prompt: 'Ela me perguntou o que ia fazer no fim de semana.', answers: ['Me preguntó qué iba a hacer el fin de semana.'] },
          { prompt: 'Disseram-nos que o restaurante estava fechado.', answers: ['Nos dijeron que el restaurante estaba cerrado.'] },
          { prompt: 'Ele me disse para não me preocupar.', answers: ['Me dijo que no me preocupara.', 'Me dijo que no me preocupase.'] },
          { prompt: 'Ela explicou que não podia vir.', answers: ['Explicó que no podía venir.', 'Ella explicó que no podía venir.'] },
        ],
      },
    ],
  },

  {
    id: 'adv-7', stage: 'Avançado', order: 7,
    title: 'Meter la pata e dar en el clavo',
    subtitle: 'Expressões idiomáticas do espanhol',
    theory: `## Expressões idiomáticas essenciais

• Meter la pata → meter os pés pelas mãos / errar
• Dar en el clavo → acertar em cheio
• Estar en las nubes → estar nas nuvens / distraído
• Tomar el pelo → gozar com alguém / enganar
• Costar un ojo de la cara → custar uma fortuna
• Ponerse las pilas → meter mãos à obra / se animar
• No hay mal que por bien no venga → não há mal que não venha para bem
• Más vale tarde que nunca → melhor tarde do que nunca
• ¡No me digas! → Nossa! / Não me diga!
• Volver loco a alguien → enlouquecer alguém / irritar muito
• Estar como una cabra → ser meio loco/excêntrico
• Echar de menos → ter saudade de
• Hacer la vista gorda → fazer vista grossa
• Ser pan comido → ser muito fácil ("mamão com açúcar")
• Estar hasta las narices → estar de saco cheio

## Como usar
Expressões idiomáticas não devem ser traduzidas literalmente — cada idioma constrói suas próprias imagens. "Tomar el pelo" não tem nada a ver com cabelo no sentido literal, é só a forma fixa da expressão.

⚠️ "Echar de menos" (ter saudade) é facilmente confundido pelo lusofalante, que tenta usar "tener saudades" — essa expressão não existe em espanhol, já que "saudade" não tem tradução direta; use sempre "echar de menos" ou "extrañar" (mais comum na América Latina).

💡 Aprender expressões idiomáticas em contexto (com uma frase completa) ajuda a memorizar melhor do que aprender a tradução isolada — tente sempre criar uma frase pessoal com a expressão nova.

## Vocabulário-chave

• otra vez — de novo
• increíble — incrível
• la atención — a atenção
• ya era hora — já era hora`,
    exercises: [
      {
        sentences: [
          { prompt: 'Ele está metendo os pés pelas mãos outra vez.', answers: ['Él está metiendo la pata otra vez.', 'Está metiendo la pata otra vez.'] },
          { prompt: 'Esse carro me custou uma fortuna.', answers: ['Ese coche me costó un ojo de la cara.', 'Ese carro me costó un ojo de la cara.'] },
          { prompt: 'Eu acertei em cheio com a resposta.', answers: ['Di en el clavo con la respuesta.', 'Yo di en el clavo con la respuesta.'] },
          { prompt: 'Não fique nas nuvens, presta atenção!', answers: ['¡No estés en las nubes, presta atención!', '¡No estés con la cabeza en las nubes, presta atención!'] },
          { prompt: 'Não me diga! Isso é incrível.', answers: ['¡No me digas! Eso es increíble.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Mais vale tarde do que nunca.', answers: ['Más vale tarde que nunca.'] },
          { prompt: 'Você está me gozando?', answers: ['¿Me estás tomando el pelo?'] },
          { prompt: 'Ela me está enlouquecendo com essa música.', answers: ['Ella me está volviendo loco con esa música.', 'Me está volviendo loco con esa música.', 'Ella me está volviendo loca con esa música.', 'Me está volviendo loca con esa música.'] },
          { prompt: 'Bote pilha! Já era hora.', answers: ['¡Ponte las pilas! Ya era hora.'] },
          { prompt: 'Não há mal que não venha para bem.', answers: ['No hay mal que por bien no venga.'] },
        ],
      },
    ],
  },

  {
    id: 'adv-8', stage: 'Avançado', order: 8,
    title: 'Formal, informal e o espanhol real',
    subtitle: 'Registros, variedades e espanhol coloquial',
    theory: `## Registro formal
Em contextos profissionais ou com desconhecidos:
• "usted" em vez de "tú"
• Condicional para pedidos: "¿Podría decirme...?" (Poderia me dizer...?)
• Vocabulário: solicitar, informar, agradecer, comunicar

## Registro informal (coloquial da Espanha)
Com amigos, em contextos casuais:
• "tío/tía" (cara/mana), "mola" (é fixe/é legal), "guay" (fixe/legal)
• "currar" (trabalhar), "pasta" (dinheiro), "chaval" (rapaz)
• "¡Venga!" (vai lá! / anda! / combinado!)
• "flipar" (pasmar/se surpreender), "rollo" (assunto/chatice)

## Espanha vs. América Latina — vocabulário

| Espanha     | América Latina |
|---------------|--------------------|
| ordenador     | computadora        |
| móvil         | celular             |
| coche         | carro/auto          |
| piso          | apartamento/depa    |
| vosotros      | ustedes             |
| coger (pegar) | tomar/agarrar       |
| zumo          | jugo                |
| patata        | papa                |

⚠️ Na América Latina, "coger" pode ter conotação vulgar em alguns países (México, por exemplo); prefira "tomar" ou "agarrar" para "pegar algo" fora da Espanha — um erro clássico de quem aprendeu espanhol europeu e viaja para a América Latina.

💡 Ao assistir filmes/séries, preste atenção em qual variante o personagem fala (espanhol da Espanha, mexicano, argentino, etc.) — o vocabulário e até a entonação variam bastante, mas a gramática-base é a mesma para todos.

## Vocabulário-chave

• la estación — a estação
• agradecer — agradecer
• la reserva — a reserva
• ayudar — ajudar
• solicitar — solicitar`,
    exercises: [
      {
        sentences: [
          { prompt: 'Poderia me dizer onde fica a estação? (formal)', answers: ['¿Podría decirme dónde está la estación?'] },
          { prompt: 'Agradecemos a sua visita. (formal)', answers: ['Le agradecemos su visita.'] },
          { prompt: 'Gostaria de fazer uma reserva para dois. (formal)', answers: ['Me gustaría hacer una reserva para dos.'] },
          { prompt: 'Em que posso ajudá-lo? (formal)', answers: ['¿En qué puedo ayudarle?', '¿En qué puedo ayudarlo?'] },
          { prompt: 'Solicito a sua atenção para este assunto. (formal)', answers: ['Solicito su atención para este asunto.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Esse cara é muito legal. (informal ES)', answers: ['Ese tío mola mucho.'] },
          { prompt: 'Que calor que faz hoje! (informal ES)', answers: ['¡Qué calor hace hoy, tío!', '¡Menudo calor!'] },
          { prompt: 'Tenho que trabalhar amanhã, que saco. (informal ES)', answers: ['Tengo que currar mañana, qué rollo.'] },
          { prompt: 'Estou sem dinheiro nenhum. (informal ES)', answers: ['Estoy sin pasta.', 'No tengo pasta.'] },
          { prompt: 'Vamos tomar algo? (informal ES)', answers: ['¿Vamos a tomar algo?'] },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  //  VARIADOS
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'var-1', stage: 'Variados', order: 1,
    title: 'Treino geral — nível médio',
    subtitle: 'Presente, passado e futuro misturados',
    theory: null,
    exercises: [
      {
        sentences: [
          { prompt: 'Ela trabalha num hospital e adora o seu trabalho.', answers: ['Ella trabaja en un hospital y adora su trabajo.'] },
          { prompt: 'Ontem fui ao mercado e comprei muitas coisas.', answers: ['Ayer fui al mercado y compré muchas cosas.'] },
          { prompt: 'O café estava quente mas eu bebi tudo.', answers: ['El café estaba caliente pero lo bebí todo.'] },
          { prompt: 'Eles não sabem onde estão as chaves.', answers: ['Ellos no saben dónde están las llaves.', 'No saben dónde están las llaves.'] },
          { prompt: 'Quando era jovem, corria todos os dias.', answers: ['Cuando era joven, corría todos los días.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ela viajou para Sevilha e ficou encantada.', answers: ['Ella viajó a Sevilla y se quedó encantada.'] },
          { prompt: 'O que você prefere: praia ou montanha?', answers: ['¿Qué prefieres: playa o montaña?'] },
          { prompt: 'Eu ia falar com ela mas ela já tinha saído.', answers: ['Iba a hablar con ella pero ya había salido.'] },
          { prompt: 'Eles vão abrir um restaurante novo no verão.', answers: ['Van a abrir un restaurante nuevo en verano.', 'Ellos van a abrir un restaurante nuevo en verano.'] },
          { prompt: 'Se você estudar todos os dias, aprenderá depressa.', answers: ['Si estudias todos los días, aprenderás rápido.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ela disse que precisava de ajuda urgente.', answers: ['Dijo que necesitaba ayuda urgente.'] },
          { prompt: 'O museu fecha às seis, por isso temos que nos apressar.', answers: ['El museo cierra a las seis, así que tenemos que darnos prisa.'] },
          { prompt: 'Há quanto tempo você mora nesta cidade?', answers: ['¿Cuánto tiempo llevas viviendo en esta ciudad?', '¿Cuánto tiempo hace que vives en esta ciudad?'] },
          { prompt: 'O livro que você me recomendou foi incrível.', answers: ['El libro que me recomendaste fue increíble.'] },
          { prompt: 'Nós nunca tínhamos ido a um concerto de flamenco.', answers: ['Nosotros nunca habíamos ido a un concierto de flamenco.', 'Nunca habíamos ido a un concierto de flamenco.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Tenho que terminar este relatório antes de amanhã.', answers: ['Tengo que terminar este informe antes de mañana.'] },
          { prompt: 'Eles ainda não decidiram onde vão morar.', answers: ['Todavía no han decidido dónde van a vivir.'] },
          { prompt: 'A reunião foi cancelada por falta de participantes.', answers: ['La reunión fue cancelada por falta de participantes.'] },
          { prompt: 'Enquanto ela cozinhava, eu punha a mesa.', answers: ['Mientras ella cocinaba, yo ponía la mesa.'] },
          { prompt: 'Pode me dizer a que horas sai o próximo trem?', answers: ['¿Me puede decir a qué hora sale el próximo tren?'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu adoraria ir à sua festa, mas tenho outro compromisso.', answers: ['Me encantaría ir a tu fiesta, pero tengo otro compromiso.'] },
          { prompt: 'Desde que comecei a estudar espanhol, viajei muito mais.', answers: ['Desde que empecé a estudiar español, he viajado mucho más.'] },
          { prompt: 'Ela passou a noite toda a ler sem dormir nada.', answers: ['Pasó toda la noche leyendo sin dormir nada.'] },
          { prompt: 'Você consegue me ajudar a carregar estas caixas?', answers: ['¿Puedes ayudarme a cargar estas cajas?', '¿Me puedes ayudar a cargar estas cajas?'] },
          { prompt: 'O tempo hoje está lindo, perfeito para sair a caminhar.', answers: ['Hace un tiempo estupendo hoy, perfecto para salir a pasear.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Não consigo dormir quando fico preocupado com o trabalho.', answers: ['No puedo dormir cuando me preocupo por el trabajo.', 'No consigo dormir cuando me preocupo por el trabajo.'] },
          { prompt: 'Ela vai casar em junho e está muito animada.', answers: ['Se casa en junio y está muy emocionada.', 'Va a casarse en junio y está muy emocionada.'] },
          { prompt: 'Eu nunca tinha comido paella antes de ir a Valência.', answers: ['Nunca había comido paella antes de ir a Valencia.'] },
          { prompt: 'O gato estava deitado no sofá quando eu cheguei.', answers: ['El gato estaba tumbado en el sofá cuando llegué.'] },
          { prompt: 'Você tem razão — devo ter mais paciência com ela.', answers: ['Tienes razón, debería tener más paciencia con ella.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Vamos jantar fora esta noite para comemorar?', answers: ['¿Salimos a cenar esta noche para celebrarlo?'] },
          { prompt: 'Ela aprendeu a dirigir com vinte e dois anos.', answers: ['Aprendió a conducir con veintidós años.'] },
          { prompt: 'Esqueci o carregador em casa e o celular está morrendo.', answers: ['Se me olvidó el cargador en casa y el móvil se está muriendo.', 'Se me olvidó el cargador en casa y el teléfono se está quedando sin batería.'] },
          { prompt: 'Eles moravam perto do mar quando eram crianças.', answers: ['Vivían cerca del mar cuando eran niños.'] },
          { prompt: 'O filme começa às nove — temos tempo de jantar antes.', answers: ['La película empieza a las nueve; tenemos tiempo de cenar antes.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ele perdeu o emprego e está à procura de outro.', answers: ['Ha perdido el trabajo y está buscando otro.'] },
          { prompt: 'Será que vai chover amanhã? Leva um guarda-chuva.', answers: ['¿Crees que lloverá mañana? Llévate un paraguas.'] },
          { prompt: 'A criança chorou tanto que acabou por adormecer.', answers: ['El niño lloró tanto que acabó quedándose dormido.'] },
          { prompt: 'Você já foi a Granada? É uma cidade linda.', answers: ['¿Has estado en Granada? Es una ciudad preciosa.'] },
          { prompt: 'Nós tínhamos combinado às oito mas ele chegou às nove.', answers: ['Habíamos quedado a las ocho pero él llegó a las nueve.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ela manda mensagens enquanto come, o que me irrita.', answers: ['Manda mensajes mientras come, lo que me irrita.', 'Manda mensajes mientras come, y eso me irrita.'] },
          { prompt: 'Comprei uma planta para o escritório mas já está a morrer.', answers: ['Compré una planta para la oficina pero ya se está muriendo.'] },
          { prompt: 'Eles vão mudar para uma casa maior no próximo mês.', answers: ['Van a mudarse a una casa más grande el mes que viene.'] },
          { prompt: 'Quando tinha doze anos, queria ser astronauta.', answers: ['Cuando tenía doce años, quería ser astronauta.'] },
          { prompt: 'Seu irmão ligou enquanto você estava tomando banho.', answers: ['Tu hermano llamó mientras te duchabas.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Hoje de manhã não houve tempo para o café da manhã.', answers: ['Esta mañana no hubo tiempo para el desayuno.'] },
          { prompt: 'Ela trouxe-me flores sem qualquer razão — foi tão bonito.', answers: ['Me trajo flores sin ninguna razón; fue muy bonito.'] },
          { prompt: 'Você vai ao ginásio esta semana ou já desististe?', answers: ['¿Vas al gimnasio esta semana o ya lo has dejado?'] },
          { prompt: 'O meu chefe pediu-me para ficar mais tarde ontem.', answers: ['Mi jefe me pidió que me quedara más tarde ayer.'] },
          { prompt: 'Já comi tanto que não consigo mais comer.', answers: ['Ya he comido tanto que no puedo más.', 'Ya he comido tanto que no puedo comer más.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ela está aprendendo a tocar guitarra desde setembro.', answers: ['Lleva aprendiendo a tocar la guitarra desde septiembre.'] },
          { prompt: 'Faz muito frio hoje — deve haver gelo nas estradas.', answers: ['Hace mucho frío hoy; debe de haber hielo en las carreteras.'] },
          { prompt: 'Ele prometeu que chegaria na hora mas não cumpriu.', answers: ['Prometió que llegaría a tiempo pero no cumplió.'] },
          { prompt: 'Não se preocupe — tudo vai correr bem.', answers: ['No te preocupes, todo va a salir bien.'] },
          { prompt: 'Eles se conheceram numa viagem de trem há dez anos.', answers: ['Se conocieron en un viaje de tren hace diez años.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ela perguntou-me se eu queria ir ao concerto com ela.', answers: ['Me preguntó si quería ir al concierto con ella.'] },
          { prompt: 'O supermercado já fechou — você tem que esperar até amanhã.', answers: ['El supermercado ya cerró; tienes que esperar hasta mañana.', 'El supermercado ya cerró; debes esperar hasta mañana.'] },
          { prompt: 'Estou tão cansado que vou para a cama já.', answers: ['Ya me voy a la cama de lo cansado que estoy.', 'Estoy tan cansado que ya me voy a la cama.'] },
          { prompt: 'Ela deixou o carro na rua e levou uma multa.', answers: ['Dejó el coche en la calle y le pusieron una multa.'] },
          { prompt: 'Nunca pensei que ia gostar tanto desta cidade.', answers: ['Nunca pensé que me iba a gustar tanto esta ciudad.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Você sabe que horas o banco abre amanhã?', answers: ['¿Sabes a qué hora abre el banco mañana?'] },
          { prompt: 'Ela cortou o cabelo e ficou completamente diferente.', answers: ['Se cortó el pelo y quedó completamente diferente.'] },
          { prompt: 'Tenho uma reunião às três — não posso almoçar contigo.', answers: ['Tengo una reunión a las tres; no puedo almorzar contigo.'] },
          { prompt: 'Ele caiu da bicicleta mas não se magoou.', answers: ['Se cayó de la bicicleta pero no se hizo daño.'] },
          { prompt: 'Desde que fiz ioga, durmo muito melhor.', answers: ['Desde que hago yoga, duermo mucho mejor.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eu devia ter reservado o hotel mais cedo.', answers: ['Debería haber reservado el hotel antes.', 'Debería haber reservado el hotel más temprano.'] },
          { prompt: 'Ela saiu de casa sem dizer nada a ninguém.', answers: ['Salió de casa sin decirle nada a nadie.', 'Salió de casa sin decir nada a nadie.'] },
          { prompt: 'O bebê começou a andar há duas semanas.', answers: ['El bebé empezó a andar hace dos semanas.', 'El bebé empezó a caminar hace dos semanas.'] },
          { prompt: 'Já são onze da noite — onde está ele?', answers: ['Ya son las once de la noche; ¿dónde está?'] },
          { prompt: 'Ela sempre traz o almoço de casa para economizar dinheiro.', answers: ['Siempre trae el almuerzo de casa para ahorrar dinero.', 'Siempre se trae el almuerzo de casa para ahorrar dinero.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Não me lembro de onde pus as minhas chaves.', answers: ['No recuerdo dónde puse mis llaves.'] },
          { prompt: 'Eles viajaram para o México e adoraram a comida.', answers: ['Viajaron a México y les encantó la comida.'] },
          { prompt: 'Tenho lido muito mais desde que comecei a trabalhar em casa.', answers: ['He estado leyendo mucho más desde que empecé a trabajar en casa.'] },
          { prompt: 'Ela é muito tímida mas quando te conhece é muito divertida.', answers: ['Es muy tímida pero cuando te conoce es muy divertida.', 'Es muy tímida pero cuando te va conociendo es muy divertida.'] },
          { prompt: 'O avião chegou com uma hora de atraso.', answers: ['El avión llegó con una hora de retraso.'] },
        ],
      },
    ],
  },

  {
    id: 'var-2', stage: 'Variados', order: 2,
    title: 'Treino geral — nível avançado',
    subtitle: 'Subjuntivo, condicionais e tempos compostos',
    theory: null,
    exercises: [
      {
        sentences: [
          { prompt: 'Se tivéssemos chegado mais cedo, teríamos conseguido entrar.', answers: ['Si hubiéramos llegado antes, habríamos podido entrar.'] },
          { prompt: 'A obra foi restaurada por especialistas durante dois anos.', answers: ['La obra fue restaurada por especialistas durante dos años.'] },
          { prompt: 'Não há ninguém que me entenda melhor do que ela.', answers: ['No hay nadie que me entienda mejor que ella.'] },
          { prompt: 'Quando soube que ela tinha partido, senti um vazio enorme.', answers: ['Cuando supe que se había ido, sentí un vacío enorme.'] },
          { prompt: 'Ele insistiu para que eu ficasse até o fim.', answers: ['Insistió en que me quedara hasta el final.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Se eu fosse você, não diria isso agora.', answers: ['Si fuera tú, no diría eso ahora.'] },
          { prompt: 'Duvido que eles consigam terminar a tempo.', answers: ['Dudo que consigan terminar a tiempo.'] },
          { prompt: 'Por mais que eu tente, não consigo pronunciar bem.', answers: ['Por más que intente, no consigo pronunciarlo bien.', 'Por más que lo intente, no consigo pronunciarlo bien.'] },
          { prompt: 'Era como se o tempo tivesse parado.', answers: ['Era como si el tiempo se hubiera detenido.'] },
          { prompt: 'A notícia que você me deu ontem foi uma surpresa total.', answers: ['La noticia que me diste ayer fue una sorpresa total.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Quanto mais eu pratico, mais fácil fica.', answers: ['Cuanto más practico, más fácil me resulta.', 'Cuanto más practico, más fácil se vuelve.'] },
          { prompt: 'Ela me pediu que não contasse o que eu tinha visto.', answers: ['Me pidió que no contara lo que había visto.'] },
          { prompt: 'Aconteça o que acontecer, estou aqui.', answers: ['Pase lo que pase, aquí estoy.'] },
          { prompt: 'Faz tempo que não nos vemos — como você está?', answers: ['Hace tiempo que no nos vemos, ¿cómo estás?'] },
          { prompt: 'O fato de ele não ter aparecido me preocupou muito.', answers: ['El hecho de que no hubiera aparecido me preocupó mucho.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Não me parece que seja boa ideia ir hoje com esta chuva.', answers: ['No me parece que sea buena idea ir hoy con esta lluvia.'] },
          { prompt: 'Ela teria chegado a horas se não tivesse perdido o metro.', answers: ['Habría llegado a tiempo si no hubiera perdido el metro.'] },
          { prompt: 'Por mais que tente, não consigo me lembrar do nome dela.', answers: ['Por más que intente, no consigo recordar su nombre.', 'Por más que lo intente, no consigo recordar su nombre.'] },
          { prompt: 'Quando você souber a resposta, me diga imediatamente.', answers: ['Cuando sepas la respuesta, dímelo inmediatamente.'] },
          { prompt: 'O professor insistiu em que todos entregassem o trabalho a tempo.', answers: ['El profesor insistió en que todos entregaran el trabajo a tiempo.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Nunca tinha experimentado nada tão bom como aquele vinho.', answers: ['Nunca había probado nada tan bueno como ese vino.'] },
          { prompt: 'O que me surpreendeu foi que ninguém disse nada.', answers: ['Lo que me sorprendió fue que nadie dijo nada.'] },
          { prompt: 'Mesmo que eu tivesse dinheiro, não compraria aquilo.', answers: ['Aunque tuviera dinero, no compraría eso.'] },
          { prompt: 'A situação está a piorar dia após dia.', answers: ['La situación va empeorando día a día.'] },
          { prompt: 'Ele agiu como se não tivesse ouvido nada do que eu disse.', answers: ['Actuó como si no hubiera oído nada de lo que dije.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Espero que tenhas trazido o que te pedi.', answers: ['Espero que hayas traído lo que te pedí.'] },
          { prompt: 'Se ao menos tivéssemos mais tempo, poderíamos fazer melhor.', answers: ['Si al menos tuviéramos más tiempo, podríamos hacerlo mejor.'] },
          { prompt: 'O relatório está pronto, não obstante a falta de dados.', answers: ['El informe está listo a pesar de la falta de datos.'] },
          { prompt: 'Ela fala como se soubesse tudo sobre o assunto.', answers: ['Habla como si supiera todo sobre el tema.'] },
          { prompt: 'É fundamental que todos os membros participem na reunião.', answers: ['Es fundamental que todos los miembros participen en la reunión.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Não há nada que eu possa fazer para mudar a sua opinião.', answers: ['No hay nada que pueda hacer para cambiar su opinión.', 'No hay nada que pueda hacer para cambiar tu opinión.'] },
          { prompt: 'Ela teria ido ao médico se os sintomas tivessem piorado.', answers: ['Habría ido al médico si los síntomas hubieran empeorado.', 'Habría ido al médico si los síntomas hubiesen empeorado.'] },
          { prompt: 'A decisão foi tomada sem que ninguém consultasse a equipe.', answers: ['La decisión se tomó sin que nadie consultara al equipo.', 'La decisión se tomó sin que nadie consultase al equipo.'] },
          { prompt: 'Lamento que as coisas não tenham corrido como esperavas.', answers: ['Lamento que las cosas no hayan salido como esperabas.'] },
          { prompt: 'Por muito que me esforce, não consigo perceber esta gramática.', answers: ['Por mucho que me esfuerce, no consigo entender esta gramática.', 'Por mucho que me esfuerce, no logro entender esta gramática.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Peço que me envie o documento antes do final do dia.', answers: ['Le pido que me envíe el documento antes de que acabe el día.', 'Te pido que me envíes el documento antes de que acabe el día.'] },
          { prompt: 'Se eu soubesse dançar, convidava-a para dançar.', answers: ['Si supiera bailar, la invitaría a bailar.', 'Si supiese bailar, la invitaría a bailar.'] },
          { prompt: 'Não me parece que ela esteja dizendo a verdade.', answers: ['No me parece que esté diciendo la verdad.'] },
          { prompt: 'A empresa cresceu muito desde que mudamos de estratégia.', answers: ['La empresa ha crecido mucho desde que cambiamos de estrategia.'] },
          { prompt: 'Seja como for, você tem de tomar uma decisão antes de sexta.', answers: ['Sea como sea, tienes que tomar una decisión antes del viernes.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Eles propuseram que adiássemos a reunião para a próxima semana.', answers: ['Propusieron que aplazáramos la reunión para la semana que viene.', 'Propusieron que aplazásemos la reunión para la semana que viene.'] },
          { prompt: 'Duvido que ele consiga terminar o projeto a tempo.', answers: ['Dudo que consiga terminar el proyecto a tiempo.'] },
          { prompt: 'O texto foi revisto por três editores antes de ser publicado.', answers: ['El texto fue revisado por tres editores antes de publicarse.', 'El texto fue revisado por tres editores antes de ser publicado.'] },
          { prompt: 'É provável que chova esta tarde — leva o guarda-chuva.', answers: ['Es probable que llueva esta tarde; llévate el paraguas.'] },
          { prompt: 'Ela negou ter dito aquilo, o que me surpreendeu muito.', answers: ['Negó haber dicho eso, lo que me sorprendió mucho.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Tivemos de cancelar a viagem devido ao mau tempo.', answers: ['Tuvimos que cancelar el viaje debido al mal tiempo.'] },
          { prompt: 'Preferia que você me dissesse a verdade, mesmo que doesse.', answers: ['Preferiría que me dijeras la verdad, aunque duela.'] },
          { prompt: 'A situação está se tornando insustentável para todo mundo.', answers: ['La situación se está volviendo insostenible para todo el mundo.'] },
          { prompt: 'Não havia ninguém que pudesse resolver o problema.', answers: ['No había nadie que pudiera resolver el problema.'] },
          { prompt: 'É uma pena que não tenhas podido vir à nossa festa.', answers: ['Es una pena que no hayas podido venir a nuestra fiesta.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ao chegarem ao hotel, perceberam que tinham perdido os passaportes.', answers: ['Al llegar al hotel, se dieron cuenta de que habían perdido los pasaportes.'] },
          { prompt: 'Ela insistiu em pagar, embora eu protestasse.', answers: ['Insistió en pagar aunque yo protesté.', 'Insistió en pagar, aunque yo protestara.', 'Insistió en pagar, aunque yo protestase.'] },
          { prompt: 'O contrato foi assinado antes de serem conhecidas todas as condições.', answers: ['El contrato fue firmado antes de que se conocieran todas las condiciones.'] },
          { prompt: 'Quer chova quer faça sol, vou correr amanhã.', answers: ['Llueva o haga sol, voy a correr mañana.'] },
          { prompt: 'Ninguém esperava que ele se candidatasse ao cargo.', answers: ['Nadie esperaba que se presentara al cargo.', 'Nadie esperaba que se presentase al cargo.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Se eu tivesse estudado mais, teria tirado uma nota melhor.', answers: ['Si hubiera estudiado más, habría sacado una nota mejor.'] },
          { prompt: 'Receio que já seja tarde de mais para mudar de ideia.', answers: ['Me temo que ya es demasiado tarde para cambiar de idea.'] },
          { prompt: 'A reunião decorreu sem que houvesse qualquer incidente.', answers: ['La reunión transcurrió sin que hubiera ningún incidente.'] },
          { prompt: 'Oxalá tivéssemos tomado essa decisão mais cedo.', answers: ['Ojalá hubiéramos tomado esa decisión antes.', 'Ojalá hubiésemos tomado esa decisión antes.'] },
          { prompt: 'Por mais que tente explicar, ele nunca entende.', answers: ['Por más que intente explicarlo, él nunca entiende.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Suponho que já saibas o que aconteceu ontem.', answers: ['Supongo que ya sepas lo que pasó ayer.'] },
          { prompt: 'Ela conseguiu o emprego apesar de ter pouca experiência.', answers: ['Consiguió el trabajo a pesar de tener poca experiencia.'] },
          { prompt: 'O prazo terminou sem que o projeto estivesse concluído.', answers: ['El plazo terminó sin que el proyecto estuviera terminado.'] },
          { prompt: 'Caso haja algum problema, avisa-me imediatamente.', answers: ['En caso de que haya algún problema, avísame de inmediato.'] },
          { prompt: 'Ela fez tudo sozinha, sem que ninguém a ajudasse.', answers: ['Lo hizo todo sola, sin que nadie la ayudara.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Não é possível que ele ainda não tenha respondido ao email.', answers: ['No es posible que todavía no haya respondido al correo.'] },
          { prompt: 'Se continuares assim, vais acabar por adoecer.', answers: ['Si sigues así, vas a acabar enfermando.'] },
          { prompt: 'A notícia foi confirmada depois de horas de especulação.', answers: ['La noticia fue confirmada tras horas de especulación.'] },
          { prompt: 'Embora não seja perfeito, é a melhor solução que temos.', answers: ['Aunque no sea perfecto, es la mejor solución que tenemos.'] },
          { prompt: 'Ela recusa-se a admitir que estava errada.', answers: ['Se niega a admitir que estaba equivocada.'] },
        ],
      },
    ],
  },

  {
    id: 'var-3', stage: 'Variados', order: 3,
    title: 'Fluente no mundo real',
    subtitle: 'Conversação, situações reais e vocabulário específico',
    theory: null,
    exercises: [
      {
        sentences: [
          { prompt: 'Desculpe, poderia falar mais devagar? Estou aprendendo espanhol.', answers: ['Perdona, ¿podrías hablar más despacio? Estoy aprendiendo español.', 'Perdone, ¿podría hablar más despacio? Estoy aprendiendo español.'] },
          { prompt: 'Uma mesa para duas pessoas, por favor. Temos reserva.', answers: ['Una mesa para dos, por favor. Tenemos reserva.'] },
          { prompt: 'Onde posso trocar dinheiro aqui perto?', answers: ['¿Dónde puedo cambiar dinero por aquí cerca?'] },
          { prompt: 'Meu voo foi cancelado. O que posso fazer?', answers: ['Mi vuelo ha sido cancelado. ¿Qué puedo hacer?', 'Mi vuelo fue cancelado. ¿Qué puedo hacer?'] },
          { prompt: 'Tenho alergia a frutos do mar. Tem algum prato sem?', answers: ['Soy alérgico al marisco. ¿Tiene algún plato sin marisco?', 'Tengo alergia al marisco. ¿Tiene algún plato sin marisco?', 'Soy alérgico a los mariscos. ¿Tiene algún plato sin mariscos?'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Preciso de um quarto com cama de casal e vista para o mar.', answers: ['Necesito una habitación con cama de matrimonio y vistas al mar.'] },
          { prompt: 'O trânsito estava horrível e cheguei atrasado à reunião.', answers: ['El tráfico estaba horrible y llegué tarde a la reunión.', 'El tráfico estaba fatal y llegué tarde a la reunión.'] },
          { prompt: 'Tem alguma coisa para dor de cabeça? Tenho uma enxaqueca terrível.', answers: ['¿Tiene algo para el dolor de cabeza? Tengo una migraña terrible.', '¿Tiene algo para el dolor de cabeza? Tengo una jaqueca terrible.'] },
          { prompt: 'Posso pagar com cartão ou só aceitam dinheiro?', answers: ['¿Puedo pagar con tarjeta o solo aceptan efectivo?'] },
          { prompt: 'Ela estava tão cansada que adormeceu no sofá com a televisão ligada.', answers: ['Estaba tan cansada que se quedó dormida en el sofá con la tele encendida.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ela tem uma memória incrível — lembra-se de tudo com detalhe.', answers: ['Tiene una memoria increíble; se acuerda de todo con detalle.'] },
          { prompt: 'Eu tenho tantas coisas para fazer que não sei por onde começar.', answers: ['Tengo tantas cosas que hacer que no sé por dónde empezar.'] },
          { prompt: 'Que coincidência encontrá-lo aqui! Quanto tempo!', answers: ['¡Qué casualidad encontrarte aquí! ¡Cuánto tiempo!'] },
          { prompt: 'Aprendi a valorizar as pequenas coisas desde que fiquei doente.', answers: ['Aprendí a valorar las pequeñas cosas desde que estuve enfermo.'] },
          { prompt: 'A conferência foi adiada por falta de oradores confirmados.', answers: ['La conferencia fue aplazada por falta de ponentes confirmados.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Você tem troco para vinte euros?', answers: ['¿Tienes cambio de veinte euros?'] },
          { prompt: 'Ele chegou sem avisar e todos ficamos surpreendidos.', answers: ['Llegó sin avisar y todos nos quedamos sorprendidos.'] },
          { prompt: 'Não vejo a hora de chegar a casa e descansar.', answers: ['No puedo esperar a llegar a casa y descansar.', 'Estoy deseando llegar a casa y descansar.'] },
          { prompt: 'Você tem de pedir desculpas pelo que disse ontem.', answers: ['Tienes que pedir perdón por lo que dijiste ayer.'] },
          { prompt: 'A exposição ficará aberta até o final do mês.', answers: ['La exposición estará abierta hasta finales de mes.', 'La exposición estará abierta hasta el final del mes.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Pelo amor de Deus, baixa o volume — estou tentando dormir!', answers: ['¡Por el amor de Dios, baja el volumen, que intento dormir!', '¡Por favor, baja el volumen, que intento dormir!'] },
          { prompt: 'Talvez a gente devesse reservar mesa com antecedência.', answers: ['Quizás deberíamos reservar mesa con antelación.', 'A lo mejor deberíamos reservar mesa con antelación.'] },
          { prompt: 'Acabei de me lembrar que tenho que ligar para a minha mãe.', answers: ['Acabo de recordar que tengo que llamar a mi madre.', 'Acabo de acordarme de que tengo que llamar a mi madre.'] },
          { prompt: 'Tomar essa decisão me custou muito, mas foi a certa.', answers: ['Me costó mucho tomar esa decisión, pero fue la correcta.'] },
          { prompt: 'Você pode me passar o sal, por favor?', answers: ['¿Me pasas la sal, por favor?', '¿Me puedes pasar la sal, por favor?'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Que calor! Não aguento mais — vamos para a sombra.', answers: ['¡Qué calor! No aguanto más; vamos a la sombra.'] },
          { prompt: 'Ela tem muita cara de pau — pede sempre favores e nunca retribui.', answers: ['Tiene mucha cara; pide siempre favores y nunca devuelve.', 'Tiene mucho descaro; pide siempre favores y nunca devuelve.'] },
          { prompt: 'Estava tão aborrecido que adormeci no sofá sem querer.', answers: ['Estaba tan aburrido que me quedé dormido en el sofá sin querer.'] },
          { prompt: 'Você sabe onde fica a saída de emergência? Só por precaução.', answers: ['¿Sabes dónde está la salida de emergencia? Solo por si acaso.'] },
          { prompt: 'Ele é craque no xadrez — nunca ninguém consegue vencer ele.', answers: ['Es un crack jugando al ajedrez; nadie consigue ganarle.', 'Es un crack jugando al ajedrez; nadie logra ganarle.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ontem à noite saímos até tarde e hoje estou destruído.', answers: ['Anoche salimos hasta tarde y hoy estoy destrozado.'] },
          { prompt: 'Há tanto barulho aqui que mal consigo pensar.', answers: ['Hay tanto ruido aquí que apenas puedo pensar.'] },
          { prompt: 'Ela ficou chateada porque eu me esqueci do aniversário dela.', answers: ['Se enfadó porque me olvidé de su cumpleaños.'] },
          { prompt: 'Você tem que vir a esse restaurante — a comida é uma delícia.', answers: ['Tienes que venir a este restaurante; la comida está para chuparse los dedos.', 'Tienes que venir a este restaurante; la comida está buenísima.'] },
          { prompt: 'Acabei por não ir à festa porque me deu preguiça.', answers: ['Al final no fui a la fiesta porque me dio pereza.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ele é capaz de comer uma pizza inteira sozinho sem pestanejar.', answers: ['Es capaz de comerse una pizza entera él solo sin despeinarse.'] },
          { prompt: 'Não vou mentir — a reunião foi uma seca total.', answers: ['No voy a mentir; la reunión fue un rollo total.'] },
          { prompt: 'Dá pra baixar um pouco o volume? Estou no telefone.', answers: ['¿Puedes bajar un poco el volumen? Estoy al teléfono.'] },
          { prompt: 'Ficamos sem gasolina no meio da rodovia — que vergonha.', answers: ['Se nos acabó la gasolina en medio de la autopista; una vergüenza.'] },
          { prompt: 'Ela tem muita sorte — tudo dá certo pra ela sempre.', answers: ['Tiene mucha suerte; todo le sale bien siempre.', 'Tiene mucha suerte; todo le va bien siempre.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'A conta de luz desse mês foi astronômica — precisamos economizar mais.', answers: ['La factura de la luz este mes fue astronómica; tenemos que ahorrar más.'] },
          { prompt: 'Não esquenta — o que não te mata te deixa mais forte.', answers: ['No te rayes; lo que no te mata te hace más fuerte.'] },
          { prompt: 'Ela trabalha como uma louca mas ganha uma miséria.', answers: ['Trabaja como una loca pero gana una miseria.'] },
          { prompt: 'Você pode me deixar em casa? Fica bem no caminho.', answers: ['¿Me puedes acercar a casa? Me pilla de camino.'] },
          { prompt: 'Não me apetece cozinhar hoje — pedimos uma pizza?', answers: ['No me apetece cocinar hoy; ¿pedimos una pizza?'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Ele chega sempre em cima da hora — é insuportável.', answers: ['Siempre llega en el último momento; es insoportable.', 'Siempre llega justo a tiempo; es insoportable.'] },
          { prompt: 'Que horas a cozinha fecha? Ainda dá tempo de jantar?', answers: ['¿A qué hora cierra la cocina? ¿Llegamos a tiempo para cenar?'] },
          { prompt: 'Ela está aprontando as dela de novo — não aprende.', answers: ['Está haciendo de las suyas otra vez; no aprende.'] },
          { prompt: 'Mandei uma mensagem mas ficou no visto. Que grosseria.', answers: ['Le mandé un mensaje y me dejó en visto. Qué maleducado.', 'Le mandé un mensaje y me dejó en visto. ¡Qué grosería!'] },
          { prompt: 'Não se mete — isso não é com você.', answers: ['No te metas; esto no va contigo.'] },
        ],
      },
      {
        sentences: [
          { prompt: 'O autocarro passou mesmo à minha frente e não parou.', answers: ['El autobús pasó justo delante de mí y no paró.'] },
          { prompt: 'Ela é das pessoas mais sinceras que conheço — nunca mente.', answers: ['Es de las personas más sinceras que conozco; nunca miente.'] },
          { prompt: 'Ontem fiz anos e ninguém se lembrou. Que tristeza.', answers: ['Ayer fue mi cumpleaños y nadie se acordó. Qué pena.'] },
          { prompt: 'Você tem que experimentar o café daqui — é o melhor da cidade.', answers: ['Tienes que probar el café de aquí; es el mejor de la ciudad.'] },
          { prompt: 'Já não aguento mais este calor — quando é que chega o outono?', answers: ['Ya no aguanto más este calor; ¿cuándo llega el otoño?'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Foram embora sem pagar — ficaram a ver navios.', answers: ['Se fueron sin pagar; se quedaron sin cobrar.', 'Se fueron sin pagar; los dejaron con las manos vacías.'] },
          { prompt: 'Ele é tão distraído que perdeu as chaves três vezes esta semana.', answers: ['Es tan despistado que perdió las llaves tres veces esta semana.'] },
          { prompt: 'Acabou de abrir um barzinho novo na esquina.', answers: ['Acaban de abrir un bar nuevo a la vuelta de la esquina.'] },
          { prompt: 'Ela cantou tão bem que ficámos todos arrepiados.', answers: ['Cantó tan bien que se nos pusieron los pelos de punta.'] },
          { prompt: 'Estou morrendo de fome — o que tem para comer?', answers: ['Me muero de hambre; ¿qué hay para comer?'] },
        ],
      },
      {
        sentences: [
          { prompt: 'Me deixa falar — não me corta a palavra.', answers: ['Déjame hablar; no me cortes.', 'Déjame hablar; no me interrumpas.'] },
          { prompt: 'Ele ficou com a cara vermelha quando a viu entrar.', answers: ['Se le puso la cara roja cuando la vio entrar.'] },
          { prompt: 'Eles deram-se conta tarde demais de que tinham tomado a estrada errada.', answers: ['Se dieron cuenta demasiado tarde de que habían tomado la carretera equivocada.'] },
          { prompt: 'Não sei se rir ou chorar com esta situação.', answers: ['No sé si reír o llorar con esta situación.'] },
          { prompt: 'Ela me chateou tanto que acabei desligando o telefone.', answers: ['Me molestó tanto que acabé colgando el teléfono.', 'Me hartó tanto que acabé colgando el teléfono.'] },
        ],
      },
    ],
  },
  // ── REVISÕES ─────────────────────────────────────────────────────
  {
    id: 'rev-fund', stage: 'Fundamentos', order: 99, isReview: true,
    title: 'Revisão — Fundamentos',
    subtitle: 'Ser, estar, artigos e pronomes misturados',
    theory: null,
    exercises: [
      {
        sentences: [
          { prompt: 'Eu sou brasileiro e ela é espanhola.', answers: ['Yo soy brasileño y ella es española.', 'Soy brasileño y ella es española.'] },
          { prompt: 'O museu está fechado hoje.', answers: ['El museo está cerrado hoy.'] },
          { prompt: 'Eles são médicos, mas hoje estão cansados.', answers: ['Ellos son médicos, pero hoy están cansados.', 'Son médicos, pero hoy están cansados.'] },
          { prompt: 'Vou ao supermercado com um amigo.', answers: ['Voy al supermercado con un amigo.'] },
          { prompt: 'A água está fria esta manhã.', answers: ['El agua está fría esta mañana.'] },
          { prompt: 'Nós somos estudantes de espanhol.', answers: ['Nosotros somos estudiantes de español.', 'Somos estudiantes de español.'] },
          { prompt: 'Onde está a chave do carro?', answers: ['¿Dónde está la llave del coche?', '¿Dónde está la llave del carro?'] },
          { prompt: 'Ela é muito inteligente e sempre está pronta.', answers: ['Ella es muy inteligente y siempre está lista.', 'Es muy inteligente y siempre está lista.'] },
        ],
      },
    ],
    dialogExercise: {
      audioText: '¿Eres estudiante o ya trabajas? Yo soy médico, llevo cinco años en el hospital.',
      question: 'O que a pessoa diz sobre si mesma?',
      options: [
        { text: 'É médico e trabalha no hospital há cinco anos.', correct: true },
        { text: 'Era médico, mas agora está no hospital.', correct: false },
        { text: 'É estudante de medicina no hospital.', correct: false },
        { text: 'Trabalha numa farmácia perto do hospital.', correct: false },
      ],
    },
  },
  {
    id: 'rev-bas', stage: 'Básico', order: 99, isReview: true,
    title: 'Revisão — Básico',
    subtitle: 'Verbos, perguntas e passado misturados',
    theory: null,
    exercises: [
      {
        sentences: [
          { prompt: 'Ontem não pude ir à aula porque estava doente.', answers: ['Ayer no pude ir a clase porque estaba enfermo.'] },
          { prompt: 'O que você faz quando não tem trabalho?', answers: ['¿Qué haces cuando no tienes trabajo?', '¿Qué haces cuando no tienes trabajo tú?'] },
          { prompt: 'Ela nunca come carne e ele não bebe álcool.', answers: ['Ella nunca come carne y él no bebe alcohol.'] },
          { prompt: 'Quando era criança, ia ao parque todos os dias.', answers: ['Cuando era niño, iba al parque todos los días.'] },
          { prompt: 'Amanhã vamos jantar num restaurante novo.', answers: ['Mañana vamos a cenar en un restaurante nuevo.', 'Mañana cenaremos en un restaurante nuevo.'] },
          { prompt: 'Não há ninguém em casa e o cão está sozinho.', answers: ['No hay nadie en casa y el perro está solo.'] },
          { prompt: 'Eu soube a verdade quando já era tarde demais.', answers: ['Supe la verdad cuando ya era demasiado tarde.'] },
          { prompt: 'Ela trabalha muito mas sempre tem tempo para a família.', answers: ['Ella trabaja mucho pero siempre tiene tiempo para la familia.'] },
        ],
      },
    ],
    dialogExercise: {
      audioText: 'Ayer fui al mercado pero estaba cerrado. Entonces fui a la tienda pequeña de la esquina y compré lo que necesitaba.',
      question: 'O que a pessoa fez no fim?',
      options: [
        { text: 'Foi a uma loja pequena e comprou o que precisava.', correct: true },
        { text: 'Foi ao mercado e comprou muitas coisas.', correct: false },
        { text: 'Ficou em casa porque as lojas estavam fechadas.', correct: false },
        { text: 'Voltou ao mercado no dia seguinte.', correct: false },
      ],
    },
  },
  {
    id: 'rev-int', stage: 'Intermediário', order: 99, isReview: true,
    title: 'Revisão — Intermediário',
    subtitle: 'Reflexivos, pronomes, imperativo e subjuntivo',
    theory: null,
    exercises: [
      {
        sentences: [
          { prompt: 'Levanta-te e veste-te rapidamente, já tarde!', answers: ['¡Levántate y vístete rápido, ya es tarde!'] },
          { prompt: 'Eu o vi ontem mas não lhe disse nada.', answers: ['Lo vi ayer pero no le dije nada.', 'Yo lo vi ayer pero no le dije nada.'] },
          { prompt: 'Espero que você consiga o que quer.', answers: ['Espero que consigas lo que quieres.', 'Espero que consiga lo que quiere.'] },
          { prompt: 'Ela está se preparando para a entrevista.', answers: ['Ella se está preparando para la entrevista.', 'Está preparándose para la entrevista.'] },
          { prompt: 'Não lhes contes o que aconteceu.', answers: ['No les cuentes lo que pasó.'] },
          { prompt: 'Fiz isso para você, por amor.', answers: ['Lo hice para ti, por amor.'] },
          { prompt: 'Ela prefere que eu fique em casa.', answers: ['Ella prefiere que me quede en casa.', 'Prefiere que me quede en casa.'] },
          { prompt: 'Quando você se sentir melhor, me liga.', answers: ['Cuando te sientas mejor, llámame.'] },
        ],
      },
    ],
    dialogExercise: {
      audioText: 'Se me olvidó el paraguas y me mojé toda. ¿Me puedes dejar el tuyo? Te lo devuelvo mañana sin falta.',
      question: 'O que a pessoa está pedindo?',
      options: [
        { text: 'Emprestado o guarda-chuva, prometendo devolver amanhã.', correct: true },
        { text: 'Emprestado o guarda-chuva, mas pode demorar.', correct: false },
        { text: 'Que a outra pessoa vá buscar o guarda-chuva dela.', correct: false },
        { text: 'Dinheiro para comprar um guarda-chuva novo.', correct: false },
      ],
    },
  },
  {
    id: 'rev-adv', stage: 'Avançado', order: 99, isReview: true,
    title: 'Revisão — Avançado',
    subtitle: 'Compostos, condicionais, passiva e discurso indireto',
    theory: null,
    exercises: [
      {
        sentences: [
          { prompt: 'Se tivéssemos chegado antes, teríamos encontrado o museu aberto.', answers: ['Si hubiéramos llegado antes, habríamos encontrado el museo abierto.'] },
          { prompt: 'A obra foi escrita por um autor que ninguém conhecia.', answers: ['La obra fue escrita por un autor que nadie conocía.'] },
          { prompt: 'Ele me disse que tinha trabalhado ali durante anos.', answers: ['Me dijo que había trabajado allí durante años.'] },
          { prompt: 'Não há nada que possamos fazer agora.', answers: ['No hay nada que podamos hacer ahora.'] },
          { prompt: 'Fala-se muito sobre isso mas ninguém faz nada.', answers: ['Se habla mucho de eso pero nadie hace nada.'] },
          { prompt: 'Hoje almocei com ela, mas ontem não a vi.', answers: ['Hoy he comido con ella, pero ayer no la vi.'] },
          { prompt: 'A pessoa com quem falei era muito simpática.', answers: ['La persona con quien hablé era muy simpática.'] },
          { prompt: 'Quanto mais pratico, mais fácil fica.', answers: ['Cuanto más practico, más fácil me resulta.'] },
        ],
      },
    ],
    dialogExercise: {
      audioText: 'Si hubiera sabido que el examen era tan difícil, habría estudiado mucho más. Ahora tendré que repetirlo el mes que viene.',
      question: 'Por que a pessoa vai repetir o exame?',
      options: [
        { text: 'Porque não estudou o suficiente para um exame difícil.', correct: true },
        { text: 'Porque estudou muito, mas o exame foi cancelado.', correct: false },
        { text: 'Porque o exame era fácil e ela não se preparou.', correct: false },
        { text: 'Porque perdeu o exame por causa de doença.', correct: false },
      ],
    },
  },
];

export function getTotalSentences(mod) {
  if (!mod.exercises?.length) return 0;
  return mod.exercises.reduce((sum, ex) => sum + (ex.sentences?.length ?? 0), 0);
}

export function getModulesByStage() {
  const result = {};
  for (const stage of STAGES) {
    result[stage] = modules.filter(m => m.stage === stage);
  }
  return result;
}

// Tag all Spanish modules
const MODULES_ES = modules.map(m => ({ ...m, language: 'es' }));
const _allExtra = [...(MODULES_EN ?? []), ...(MODULES_DE ?? []), ...(MODULES_FR ?? []), ...(MODULES_IT ?? []), ...(MODULES_PT ?? []), ...(MODULES_AR ?? []), ...(MODULES_ZH ?? [])];

export function getModulesForLang(lang) {
  if (!lang || lang === 'es') return MODULES_ES;
  return _allExtra.filter(m => m.language === lang);
}

export function getAllLanguageModules() {
  return [...MODULES_ES, ..._allExtra];
}
