export const DIALOGOS = {
  basico: {
    label: 'Básico',
    desc: 'Situações simples do dia a dia',
    dialogos: [
      {
        id: 'bas-1',
        title: 'No café',
        context: 'Você entra numa cafeteria em Madrid e faz um pedido.',
        lines: [
          { speaker: 'Garçom', pt: 'Bom dia! O que vai querer?', es: 'Buenos días. ¿Qué va a querer?' },
          { speaker: 'Você', pt: 'Um café com leite e um croissant, por favor.', es: 'Un café con leche y un cruasán, por favor.' },
          { speaker: 'Garçom', pt: 'Com açúcar?', es: '¿Con azúcar?' },
          { speaker: 'Você', pt: 'Não, obrigado. Quanto é?', es: 'No, gracias. ¿Cuánto es?' },
          { speaker: 'Garçom', pt: 'São três euros e cinquenta.', es: 'Son tres euros cincuenta.' },
        ],
      },
      {
        id: 'bas-2',
        title: 'Apresentações',
        context: 'Você conhece alguém numa festa.',
        lines: [
          { speaker: 'Você', pt: 'Olá! Como você se chama?', es: '¡Hola! ¿Cómo te llamas?' },
          { speaker: 'Ana', pt: 'Chamo-me Ana. E você?', es: 'Me llamo Ana. ¿Y tú?' },
          { speaker: 'Você', pt: 'Eu me chamo Carlos. De onde você é?', es: 'Me llamo Carlos. ¿De dónde eres?' },
          { speaker: 'Ana', pt: 'Sou de Valencia. E você, de onde é?', es: 'Soy de Valencia. ¿Y tú, de dónde eres?' },
          { speaker: 'Você', pt: 'Sou do Brasil, mas moro em Madrid há dois anos.', es: 'Soy de Brasil, pero vivo en Madrid desde hace dos años.' },
        ],
      },
      {
        id: 'bas-3',
        title: 'Pedindo informações',
        context: 'Você está perdido na cidade e pede ajuda.',
        lines: [
          { speaker: 'Você', pt: 'Com licença, sabe onde fica a estação de metro?', es: 'Perdona, ¿sabes dónde está la estación de metro?' },
          { speaker: 'Pessoa', pt: 'Claro! Siga em frente e vire à esquerda.', es: 'Claro. Siga todo recto y gire a la izquierda.' },
          { speaker: 'Você', pt: 'Fica longe daqui?', es: '¿Está lejos de aquí?' },
          { speaker: 'Pessoa', pt: 'Não, são uns cinco minutos a pé.', es: 'No, son unos cinco minutos a pie.' },
          { speaker: 'Você', pt: 'Muito obrigado, você foi muito gentil.', es: 'Muchas gracias, ha sido muy amable.' },
        ],
      },
      {
        id: 'bas-4',
        title: 'Na farmácia',
        context: 'Você não está bem e entra numa farmácia.',
        lines: [
          { speaker: 'Farmacêutico', pt: 'Bom dia! Em que posso ajudá-lo?', es: 'Buenos días. ¿En qué puedo ayudarle?' },
          { speaker: 'Você', pt: 'Tenho dor de garganta e um pouco de febre.', es: 'Tengo dolor de garganta y un poco de fiebre.' },
          { speaker: 'Farmacêutico', pt: 'Há quantos dias tem esses sintomas?', es: '¿Cuántos días lleva con estos síntomas?' },
          { speaker: 'Você', pt: 'Desde anteontem. Pode me recomendar alguma coisa?', es: 'Desde anteayer. ¿Me puede recomendar algo?' },
          { speaker: 'Farmacêutico', pt: 'Sim, este xarope e estas pastilhas. Tome de oito em oito horas.', es: 'Sí, este jarabe y estas pastillas. Tómelas cada ocho horas.' },
          { speaker: 'Você', pt: 'Preciso de receita para isso?', es: '¿Necesito receta para esto?' },
          { speaker: 'Farmacêutico', pt: 'Não, pode levar sem receita. São dez euros no total.', es: 'No, puede llevarlo sin receta. Son diez euros en total.' },
        ],
      },
      {
        id: 'bas-5',
        title: 'De compras',
        context: 'Você está numa loja de roupas em Barcelona.',
        lines: [
          { speaker: 'Vendedora', pt: 'Olá! Está à procura de alguma coisa em especial?', es: '¡Hola! ¿Está buscando algo en especial?' },
          { speaker: 'Você', pt: 'Sim, procuro uma camisa para ir ao trabalho.', es: 'Sí, busco una camisa para ir al trabajo.' },
          { speaker: 'Vendedora', pt: 'Que tamanho veste?', es: '¿Qué talla usa?' },
          { speaker: 'Você', pt: 'Acho que sou M, mas às vezes uso L também.', es: 'Creo que soy M, pero a veces uso la L también.' },
          { speaker: 'Vendedora', pt: 'Posso mostrar-lhe estas duas. São as novidades desta temporada.', es: 'Le puedo mostrar estas dos. Son las novedades de esta temporada.' },
          { speaker: 'Você', pt: 'Posso experimentar a azul?', es: '¿Puedo probarme la azul?' },
          { speaker: 'Vendedora', pt: 'Claro! Os provadores estão ao fundo à direita.', es: 'Claro. Los probadores están al fondo a la derecha.' },
        ],
      },
      {
        id: 'bas-6',
        title: 'No hotel',
        context: 'Você faz o check-in num hotel em Sevilha.',
        lines: [
          { speaker: 'Rececionista', pt: 'Boa tarde! Tem reserva?', es: 'Buenas tardes. ¿Tiene reserva?' },
          { speaker: 'Você', pt: 'Sim, uma reserva para três noites em nome de Silva.', es: 'Sí, una reserva para tres noches a nombre de Silva.' },
          { speaker: 'Rececionista', pt: 'Perfeito. Posso ver o seu passaporte?', es: 'Perfecto. ¿Me puede enseñar el pasaporte?' },
          { speaker: 'Você', pt: 'Claro, aqui está. O quarto tem ar condicionado?', es: 'Claro, aquí tiene. ¿La habitación tiene aire acondicionado?' },
          { speaker: 'Rececionista', pt: 'Sim, todos os quartos têm. O seu é o 214, no segundo andar.', es: 'Sí, todas las habitaciones tienen. La suya es la 214, en el segundo piso.' },
          { speaker: 'Você', pt: 'Ótimo. A que horas é o pequeno-almoço?', es: 'Genial. ¿A qué hora es el desayuno?' },
          { speaker: 'Rececionista', pt: 'Das sete e meia às dez e meia. Bom descanso!', es: 'De siete y media a diez y media. ¡Que descanse!' },
        ],
      },
      {
        id: 'bas-7',
        title: 'No restaurante',
        context: 'Você jantar num restaurante e precisa de ajuda.',
        lines: [
          { speaker: 'Garçom', pt: 'Boa noite! Tem reserva ou é sem reserva?', es: 'Buenas noches. ¿Tiene reserva o es sin reserva?' },
          { speaker: 'Você', pt: 'Sem reserva. Há mesa para duas pessoas?', es: 'Sin reserva. ¿Hay mesa para dos?' },
          { speaker: 'Garçom', pt: 'Claro, por aqui. Aqui tem a ementa.', es: 'Claro, por aquí. Aquí tiene la carta.' },
          { speaker: 'Você', pt: 'O que é a especialidade da casa?', es: '¿Cuál es la especialidad de la casa?' },
          { speaker: 'Garçom', pt: 'O cocido madrileño é o nosso prato estrela.', es: 'El cocido madrileño es nuestro plato estrella.' },
          { speaker: 'Você', pt: 'Então tomo esse. E uma garrafa de água com gás, por favor.', es: 'Entonces me llevo ese. Y una botella de agua con gas, por favor.' },
        ],
      },
      {
        id: 'bas-8',
        title: 'No aeroporto',
        context: 'Você precisa de informações no aeroporto.',
        lines: [
          { speaker: 'Você', pt: 'Com licença, sabe onde fica o balcão da companhia Iberia?', es: 'Perdone, ¿sabe dónde está el mostrador de Iberia?' },
          { speaker: 'Funcionária', pt: 'Sim, está na terminal T4, ao fundo à direita.', es: 'Sí, está en la terminal T4, al fondo a la derecha.' },
          { speaker: 'Você', pt: 'Obrigado. E onde posso encontrar as bagagens?', es: 'Gracias. ¿Y dónde puedo recoger el equipaje?' },
          { speaker: 'Funcionária', pt: 'As bagagens ficam nas esteiras, depois do controlo de passaportes.', es: 'Las maletas están en las cintas, después del control de pasaportes.' },
          { speaker: 'Você', pt: 'O meu voo saiu de Lisboa. Sabe em que esteira?', es: '¿Sabe en qué cinta? Mi vuelo salió de Lisboa.' },
          { speaker: 'Funcionária', pt: 'Esteira número seis. Pode verificar nos ecrãs também.', es: 'Cinta número seis. También puede comprobarlo en las pantallas.' },
        ],
      },
      {
        id: 'bas-9',
        title: 'Combinando um encontro',
        context: 'Você combina um plano com um amigo espanhol.',
        lines: [
          { speaker: 'Você', pt: 'Que planos tens para este fim de semana?', es: '¿Qué planes tienes para este fin de semana?' },
          { speaker: 'Diego', pt: 'Ainda não sei. Talvez vá ao cinema. E tu?', es: 'Todavía no sé. Quizás vaya al cine. ¿Y tú?' },
          { speaker: 'Você', pt: 'Queria visitar o museu do Prado. Vens comigo?', es: 'Quería visitar el Museo del Prado. ¿Vienes conmigo?' },
          { speaker: 'Diego', pt: 'Boa ideia! A que horas queres ir?', es: '¡Buena idea! ¿A qué hora quieres ir?' },
          { speaker: 'Você', pt: 'Às dez da manhã? Assim temos tempo para almoçar depois.', es: '¿A las diez de la mañana? Así tenemos tiempo de almorzar después.' },
          { speaker: 'Diego', pt: 'Perfeito. Encontramo-nos na entrada do museu.', es: 'Perfecto. Nos vemos en la entrada del museo.' },
        ],
      },
      {
        id: 'bas-10',
        title: 'No banco',
        context: 'Você precisa de ajuda num banco espanhol.',
        lines: [
          { speaker: 'Funcionário', pt: 'Bom dia! Em que posso ajudá-lo?', es: 'Buenos días. ¿En qué le puedo ayudar?' },
          { speaker: 'Você', pt: 'Queria abrir uma conta bancária. O que preciso?', es: 'Quería abrir una cuenta bancaria. ¿Qué necesito?' },
          { speaker: 'Funcionário', pt: 'Precisa do passaporte, do NIF e de um comprovativo de morada.', es: 'Necesita el pasaporte, el NIE y un justificante de domicilio.' },
          { speaker: 'Você', pt: 'Tenho o passaporte mas não sei o que é o NIF.', es: 'Tengo el pasaporte pero no sé qué es el NIE.' },
          { speaker: 'Funcionário', pt: 'É o número de identificação de estrangeiro. Tem de pedir nas finanças primeiro.', es: 'Es el número de identificación de extranjero. Primero tiene que solicitarlo en Hacienda.' },
          { speaker: 'Você', pt: 'Entendo. Volto quando tiver tudo. Obrigado pela ajuda.', es: 'Entiendo. Vuelvo cuando tenga todo. Gracias por la ayuda.' },
        ],
      },
    ],
  },

  intermediario: {
    label: 'Intermediário',
    desc: 'Situações mais elaboradas com mais vocabulário',
    dialogos: [
      {
        id: 'int-1',
        title: 'No médico',
        context: 'Você tem dor de cabeça forte e vai ao médico.',
        lines: [
          { speaker: 'Médico', pt: 'Bom dia. O que está sentindo?', es: 'Buenos días. ¿Qué le pasa?' },
          { speaker: 'Você', pt: 'Tenho uma dor de cabeça muito forte desde ontem à noite.', es: 'Tengo un dolor de cabeza muy fuerte desde anoche.' },
          { speaker: 'Médico', pt: 'Tem febre ou está tonto?', es: '¿Tiene fiebre o está mareado?' },
          { speaker: 'Você', pt: 'Não tenho febre, mas estou um pouco tonto, sim.', es: 'No tengo fiebre, pero estoy un poco mareado, sí.' },
          { speaker: 'Médico', pt: 'Tem dormido bem? O estresse pode causar esse tipo de dor.', es: '¿Ha dormido bien? El estrés puede causar este tipo de dolor.' },
          { speaker: 'Você', pt: 'Não muito. Trabalho muito últimamente e não consigo descansar.', es: 'No mucho. Últimamente trabajo mucho y no consigo descansar.' },
        ],
      },
      {
        id: 'int-3',
        title: 'Devolvendo um produto',
        context: 'Você comprou um produto com defeito e vai à loja.',
        lines: [
          { speaker: 'Você', pt: 'Bom dia. Comprei esta cafeteira há uma semana e já está com defeito.', es: 'Buenos días. Compré esta cafetera hace una semana y ya tiene un defecto.' },
          { speaker: 'Atendente', pt: 'Entendo. Tem o talão de compra?', es: 'Entiendo. ¿Tiene el tíquet de compra?' },
          { speaker: 'Você', pt: 'Sim, aqui está. Gostaria de trocá-la ou receber o dinheiro de volta.', es: 'Sí, aquí tiene. Me gustaría cambiarla o que me devuelvan el dinero.' },
          { speaker: 'Atendente', pt: 'Vou verificar no sistema. Tem garantia de dois anos, por isso não há problema.', es: 'Voy a comprobarlo en el sistema. Tiene garantía de dos años, así que no hay ningún problema.' },
          { speaker: 'Você', pt: 'Ótimo. Prefiro a devolução do dinheiro se for possível.', es: 'Perfecto. Prefiero la devolución del dinero si es posible.' },
          { speaker: 'Atendente', pt: 'Claro. Será creditado no seu cartão em três a cinco dias úteis.', es: 'Claro. Se abonará en su tarjeta en tres a cinco días hábiles.' },
        ],
      },
      {
        id: 'int-4',
        title: 'Encontro com um amigo',
        context: 'Você encontra um amigo espanhol que não via há meses.',
        lines: [
          { speaker: 'Amigo', pt: 'Ei! Quanto tempo! Como tens estado?', es: '¡Eh! ¿Cuánto tiempo! ¿Cómo has estado?' },
          { speaker: 'Você', pt: 'Muito bem! Trabalhei muito ultimamente, mas estou bem. E você?', es: 'Muy bien. He trabajado mucho últimamente, pero estoy bien. ¿Y tú?' },
          { speaker: 'Amigo', pt: 'Eu mudei de emprego. Agora trabalho numa startup de tecnologia.', es: 'Yo he cambiado de trabajo. Ahora trabajo en una startup de tecnología.' },
          { speaker: 'Você', pt: 'A sério? E está a gostar?', es: '¿En serio? ¿Y te está gustando?' },
          { speaker: 'Amigo', pt: 'Muito! Aprendo coisas novas todos os dias. Tens de vir a um evento nosso.', es: '¡Mucho! Aprendo cosas nuevas cada día. Tienes que venir a un evento nuestro.' },
          { speaker: 'Você', pt: 'Adoraria. Quando é o próximo?', es: 'Me encantaría. ¿Cuándo es el próximo?' },
        ],
      },
      {
        id: 'int-5',
        title: 'Num ginásio',
        context: 'Você quer inscrever-se num ginásio em Madrid.',
        lines: [
          { speaker: 'Recepcionista', pt: 'Bom dia! É a primeira vez que nos visita?', es: 'Buenos días. ¿Es la primera vez que nos visita?' },
          { speaker: 'Você', pt: 'Sim. Gostaria de saber as opções de mensalidade.', es: 'Sí. Me gustaría saber las opciones de cuota mensual.' },
          { speaker: 'Recepcionista', pt: 'Temos três planos: básico, premium e premium com personal trainer.', es: 'Tenemos tres planes: básico, premium y premium con entrenador personal.' },
          { speaker: 'Você', pt: 'E quais são as diferenças entre o básico e o premium?', es: '¿Y cuáles son las diferencias entre el básico y el premium?' },
          { speaker: 'Recepcionista', pt: 'O premium inclui acesso às aulas de grupo e à piscina.', es: 'El premium incluye acceso a las clases grupales y a la piscina.' },
          { speaker: 'Você', pt: 'Pode fazer-me uma visita guiada antes de decidir?', es: '¿Me puede hacer una visita guiada antes de decidir?' },
          { speaker: 'Recepcionista', pt: 'Claro, com muito gosto. Siga-me por aqui.', es: 'Por supuesto, con mucho gusto. Sígame por aquí.' },
        ],
      },
      {
        id: 'int-6',
        title: 'Discutindo um projeto',
        context: 'Você e um colega discutem um projeto de trabalho.',
        lines: [
          { speaker: 'Colega', pt: 'Vi a tua proposta. Gostei da ideia geral mas tenho algumas dúvidas.', es: 'Vi tu propuesta. Me gustó la idea general, pero tengo algunas dudas.' },
          { speaker: 'Você', pt: 'Claro, diz. Para isso é que serve a reunião.', es: 'Claro, dime. Para eso sirve la reunión.' },
          { speaker: 'Colega', pt: 'O orçamento parece-me um pouco alto para o que propomos fazer.', es: 'El presupuesto me parece un poco alto para lo que proponemos hacer.' },
          { speaker: 'Você', pt: 'Entendo a preocupação, mas inclui os custos de formação da equipa.', es: 'Entiendo la preocupación, pero incluye los costes de formación del equipo.' },
          { speaker: 'Colega', pt: 'Nesse caso, faz sentido. Podemos reduzir noutras áreas?', es: 'En ese caso, tiene sentido. ¿Podemos recortar en otras áreas?' },
          { speaker: 'Você', pt: 'Vamos analisar linha por linha. Tens tempo agora?', es: '¿Analizamos línea por línea? ¿Tienes tiempo ahora?' },
        ],
      },
      {
        id: 'int-7',
        title: 'Alugando um carro',
        context: 'Você aluga um carro numa empresa de aluguer.',
        lines: [
          { speaker: 'Você', pt: 'Boa tarde. Tenho uma reserva para um carro de médio porte.', es: 'Buenas tardes. Tengo una reserva para un coche de tamaño mediano.' },
          { speaker: 'Atendente', pt: 'Perfeito. Em nome de quem está a reserva?', es: 'Perfecto. ¿A nombre de quién está la reserva?' },
          { speaker: 'Você', pt: 'Em nome de Mariana Ferreira.', es: 'A nombre de Mariana Ferreira.' },
          { speaker: 'Atendente', pt: 'Muito bem. Quer incluir seguro a todo o risco?', es: 'Muy bien. ¿Quiere incluir el seguro a todo riesgo?' },
          { speaker: 'Você', pt: 'Quanto custa a mais por dia?', es: '¿Cuánto cuesta más al día?' },
          { speaker: 'Atendente', pt: 'São mais doze euros por dia, mas cobre qualquer dano.', es: 'Son doce euros más al día, pero cubre cualquier daño.' },
          { speaker: 'Você', pt: 'Inclua então. Onde posso devolver o carro?', es: 'Inclúyalo entonces. ¿Dónde puedo devolver el coche?' },
        ],
      },
      {
        id: 'int-8',
        title: 'Pedindo uma opinião',
        context: 'Você pede conselho a um amigo sobre uma decisão difícil.',
        lines: [
          { speaker: 'Você', pt: 'Preciso da tua opinião sobre uma coisa. Recebi uma oferta de emprego noutro país.', es: 'Necesito tu opinión sobre algo. He recibido una oferta de trabajo en otro país.' },
          { speaker: 'Amiga', pt: 'A sério? Onde?', es: '¿En serio? ¿Dónde?' },
          { speaker: 'Você', pt: 'Em Berlim. O salário é melhor mas tenho de deixar tudo aqui.', es: 'En Berlín. El sueldo es mejor, pero tendría que dejar todo aquí.' },
          { speaker: 'Amiga', pt: 'É uma decisão muito difícil. Quando tens de dar resposta?', es: 'Es una decisión muy difícil. ¿Cuándo tienes que dar una respuesta?' },
          { speaker: 'Você', pt: 'Até ao final do mês. Sinceramente, o que farias tu?', es: 'Hasta finales de mes. Sinceramente, ¿qué harías tú?' },
          { speaker: 'Amiga', pt: 'Eu iria. Novas experiências enriquecem sempre. Mas tem de ser uma decisão tua.', es: 'Yo iría. Las nuevas experiencias siempre enriquecen. Pero tiene que ser una decisión tuya.' },
        ],
      },
      {
        id: 'int-9',
        title: 'No médico de família',
        context: 'Você vai ao médico de família para uma consulta de rotina.',
        lines: [
          { speaker: 'Médico', pt: 'Olá! O que o traz hoje por cá?', es: 'Hola, ¿qué le trae por aquí hoy?' },
          { speaker: 'Você', pt: 'Venho para uma revisão de rotina. Faz um ano desde a última.', es: 'Vengo para una revisión rutinaria. Hace un año de la última.' },
          { speaker: 'Médico', pt: 'Perfeito. Como tem estado a dormir? Come bem?', es: 'Perfecto. ¿Cómo ha dormido? ¿Come bien?' },
          { speaker: 'Você', pt: 'Durmo razoavelmente. Às vezes sinto-me cansado sem razão aparente.', es: 'Duermo razonablemente. A veces me siento cansado sin razón aparente.' },
          { speaker: 'Médico', pt: 'Pode ser falta de vitamina D. Vou pedir análises para confirmar.', es: 'Puede ser falta de vitamina D. Voy a pedir análisis para confirmarlo.' },
          { speaker: 'Você', pt: 'De acordo. E quanto ao colesterol — devo preocupar-me?', es: 'De acuerdo. ¿Y en cuanto al colesterol? ¿Debo preocuparme?' },
          { speaker: 'Médico', pt: 'Os valores da última vez estavam bons. Mas evite alimentos gordurosos.', es: 'Los valores de la última vez estaban bien. Pero evite los alimentos grasos.' },
        ],
      },
      {
        id: 'int-10',
        title: 'No supermercado',
        context: 'Você precisa de ajuda num supermercado espanhol.',
        lines: [
          { speaker: 'Você', pt: 'Com licença, sabe onde estão as conservas?', es: 'Perdone, ¿sabe dónde están las conservas?' },
          { speaker: 'Funcionária', pt: 'Estão no corredor seis, ao lado dos cereais.', es: 'Están en el pasillo seis, al lado de los cereales.' },
          { speaker: 'Você', pt: 'Obrigado. E o azeite, também lá?', es: 'Gracias. ¿Y el aceite de oliva, también ahí?' },
          { speaker: 'Funcionária', pt: 'Não, o azeite está no corredor dois, perto das massas.', es: 'No, el aceite está en el pasillo dos, cerca de las pastas.' },
          { speaker: 'Você', pt: 'Há alguma promoção esta semana?', es: '¿Hay alguna oferta esta semana?' },
          { speaker: 'Funcionária', pt: 'Sim, os produtos frescos têm vinte por cento de desconto até domingo.', es: 'Sí, los productos frescos tienen un veinte por ciento de descuento hasta el domingo.' },
        ],
      },
      {
        id: 'int-2',
        title: 'Alugando um apartamento',
        context: 'Você fala com um proprietário sobre alugar um apartamento.',
        lines: [
          { speaker: 'Proprietário', pt: 'O apartamento tem dois quartos, sala ampla e cozinha equipada.', es: 'El piso tiene dos habitaciones, salón amplio y cocina equipada.' },
          { speaker: 'Você', pt: 'Quanto custa o aluguel por mês?', es: '¿Cuánto cuesta el alquiler al mes?' },
          { speaker: 'Proprietário', pt: 'Oitocentos euros, incluindo as despesas de condomínio.', es: 'Ochocientos euros, incluyendo los gastos de comunidad.' },
          { speaker: 'Você', pt: 'É possível ver o apartamento esta tarde?', es: '¿Es posible ver el piso esta tarde?' },
          { speaker: 'Proprietário', pt: 'Claro, posso às cinco. Funciona para você?', es: 'Claro, puedo a las cinco. ¿Le viene bien?' },
          { speaker: 'Você', pt: 'Perfeito. Você pode me mandar o endereço exato?', es: '¿Me puede mandar la dirección exacta?' },
        ],
      },
    ],
  },

  avancado: {
    label: 'Avançado',
    desc: 'Conversas complexas com nuances e expressões naturais',
    dialogos: [
      {
        id: 'adv-1',
        title: 'Entrevista de emprego',
        context: 'Você está numa entrevista para uma vaga de marketing.',
        lines: [
          { speaker: 'Entrevistador', pt: 'Fale um pouco sobre sua experiência anterior.', es: 'Cuénteme un poco sobre su experiencia anterior.' },
          { speaker: 'Você', pt: 'Trabalhei durante três anos numa agência de publicidade onde geria campanhas digitais para clientes internacionais.', es: 'Trabajé durante tres años en una agencia de publicidad donde gestionaba campañas digitales para clientes internacionales.' },
          { speaker: 'Entrevistador', pt: 'E o que o motivou a mudar de emprego?', es: '¿Y qué le motivó a cambiar de trabajo?' },
          { speaker: 'Você', pt: 'Estou buscando novos desafios e acredito que esta empresa me oferece oportunidades de crescimento que eu não tinha antes.', es: 'Estoy buscando nuevos retos y creo que esta empresa me ofrece oportunidades de crecimiento que antes no tenía.' },
          { speaker: 'Entrevistador', pt: 'Quais são seus pontos fracos?', es: '¿Cuáles son sus puntos débiles?' },
          { speaker: 'Você', pt: 'Às vezes sou demasiado perfeccionista, o que pode atrasar os projetos, mas aprendi a equilibrar a qualidade com os prazos.', es: 'A veces soy demasiado perfeccionista, lo que puede retrasar los proyectos, pero he aprendido a equilibrar la calidad con los plazos.' },
        ],
      },
      {
        id: 'adv-3',
        title: 'Reunião de trabalho',
        context: 'Você apresenta uma proposta ao seu chefe espanhol.',
        lines: [
          { speaker: 'Você', pt: 'Queria apresentar-lhe a proposta para o novo projeto. Tenho aqui os números.', es: 'Quería presentarle la propuesta para el nuevo proyecto. Aquí tengo los números.' },
          { speaker: 'Chefe', pt: 'Perfeito. Vamos ver. Qual é o orçamento estimado?', es: 'Perfecto. Veamos. ¿Cuál es el presupuesto estimado?' },
          { speaker: 'Você', pt: 'Calculamos um investimento inicial de cinquenta mil euros, com retorno esperado em dezoito meses.', es: 'Calculamos una inversión inicial de cincuenta mil euros, con retorno esperado en dieciocho meses.' },
          { speaker: 'Chefe', pt: 'Parece razoável. Que recursos humanos seria necessário?', es: 'Parece razonable. ¿Qué recursos humanos harían falta?' },
          { speaker: 'Você', pt: 'Uma equipa de quatro pessoas no mínimo: dois programadores, um designer e eu a coordenar.', es: 'Un equipo de cuatro personas como mínimo: dos programadores, un diseñador y yo coordinando.' },
          { speaker: 'Chefe', pt: 'Dê-me até sexta para analisar com a direção. Envie-me o dossier completo.', es: 'Dame hasta el viernes para analizarlo con la dirección. Envíame el dossier completo.' },
        ],
      },
      {
        id: 'adv-4',
        title: 'Discutindo um livro',
        context: 'Você está num clube do livro espanhol.',
        lines: [
          { speaker: 'Moderadora', pt: 'O que acharam do final do romance? Foi surpreendente?', es: '¿Qué les pareció el final de la novela? ¿Les sorprendió?' },
          { speaker: 'Você', pt: 'Para mim foi o ponto alto do livro. O autor conseguiu subverter todas as expectativas.', es: 'Para mí fue el punto álgido del libro. El autor consiguió subvertir todas las expectativas.' },
          { speaker: 'Participante', pt: 'Eu achei demasiado previsível, na verdade. Já se via o que ia acontecer desde o primeiro capítulo.', es: 'A mí me pareció demasiado previsible, la verdad. Ya se veía lo que iba a pasar desde el primer capítulo.' },
          { speaker: 'Você', pt: 'Não concordo. Acho que essa sensação de déjà vu era intencional — faz parte da técnica narrativa.', es: 'No estoy de acuerdo. Creo que esa sensación de déjà vu era intencionada; forma parte de la técnica narrativa.' },
          { speaker: 'Moderadora', pt: 'Interessante perspetiva. E a personagem principal — identificaram-se com ela?', es: 'Perspectiva interesante. ¿Y el personaje principal? ¿Se identificaron con él?' },
        ],
      },
      {
        id: 'adv-2',
        title: 'Debate sobre tecnologia',
        context: 'Dois amigos discutem o impacto das redes sociais.',
        lines: [
          { speaker: 'Amigo', pt: 'Acho que as redes sociais fazem mais mal do que bem. As pessoas estão cada vez mais isoladas.', es: 'Creo que las redes sociales hacen más mal que bien. La gente está cada vez más aislada.' },
          { speaker: 'Você', pt: 'Entendo o que você quer dizer, mas não concordo totalmente. Tudo depende de como as usamos.', es: 'Entiendo lo que quieres decir, pero no estoy del todo de acuerdo. Todo depende de cómo las usemos.' },
          { speaker: 'Amigo', pt: 'Mas você não acha que criaram uma cultura de comparação constante que é tóxica?', es: '¿Pero no crees que han creado una cultura de comparación constante que es tóxica?' },
          { speaker: 'Você', pt: 'Em parte sim. Mas também permitiram que pessoas de diferentes países se conectem e compartilhem experiências valiosas.', es: 'En parte sí. Pero también han permitido que personas de distintos países se conecten y compartan experiencias valiosas.' },
        ],
      },
      {
        id: 'adv-5',
        title: 'Negociando um salário',
        context: 'Você está a negociar o salário numa nova empresa.',
        lines: [
          { speaker: 'RH', pt: 'Gostámos muito do seu perfil. Antes de avançar, qual são as suas expectativas salariais?', es: 'Nos ha gustado mucho su perfil. Antes de avanzar, ¿cuáles son sus expectativas salariales?' },
          { speaker: 'Você', pt: 'Com base na minha experiência e no mercado atual, estaria à espera de algo entre quarenta e cinco e cinquenta mil euros anuais.', es: 'Basándome en mi experiencia y en el mercado actual, esperaría algo de entre cuarenta y cinco y cincuenta mil euros anuales.' },
          { speaker: 'RH', pt: 'É um intervalo razoável. Podemos oferecer quarenta e dois mil com revisão aos seis meses.', es: 'Es un rango razonable. Podemos ofrecer cuarenta y dos mil con revisión a los seis meses.' },
          { speaker: 'Você', pt: 'Aprecio a proposta. Seria possível chegar aos quarenta e quatro se eu atingir os objetivos no primeiro trimestre?', es: '¿Sería posible llegar a los cuarenta y cuatro si alcanzo los objetivos en el primer trimestre?' },
          { speaker: 'RH', pt: 'Isso pode negociar-se. Deixe-me consultar com a direção e volto a contactá-lo amanhã.', es: 'Eso se puede negociar. Déjeme consultar con la dirección y le contacto mañana.' },
        ],
      },
      {
        id: 'adv-6',
        title: 'Explicando um mal-entendido',
        context: 'Você tenta resolver um mal-entendido com um amigo.',
        lines: [
          { speaker: 'Amigo', pt: 'Fiquei chateado com o que disseste na reunião. Pareceu que me estaves a criticar à frente de todos.', es: 'Me molestó lo que dijiste en la reunión. Pareció que me estabas criticando delante de todos.' },
          { speaker: 'Você', pt: 'Percebo que tenhas ficado assim, mas não era essa a minha intenção.', es: 'Entiendo que te hayas sentido así, pero no era mi intención.' },
          { speaker: 'Amigo', pt: 'E então qual era? Porque soou muito mal.', es: '¿Y cuál era entonces? Porque sonó muy mal.' },
          { speaker: 'Você', pt: 'Estava a tentar mostrar que o projeto tinha dificuldades, não que tu tinhas falhado.', es: 'Intentaba mostrar que el proyecto tenía dificultades, no que tú hubieras fallado.' },
          { speaker: 'Amigo', pt: 'Deverias ter sido mais claro. Da próxima vez fala comigo primeiro.', es: 'Deberías haber sido más claro. La próxima vez habla conmigo primero.' },
          { speaker: 'Você', pt: 'Tens toda a razão. Peço desculpa — não volto a cometer esse erro.', es: 'Tienes toda la razón. Lo siento; no volveré a cometer ese error.' },
        ],
      },
      {
        id: 'adv-7',
        title: 'Numa conferência',
        context: 'Você está numa conferência profissional e aborda um palestrante.',
        lines: [
          { speaker: 'Você', pt: 'Muito obrigado pela sua apresentação. Foi muito esclarecedora.', es: 'Muchas gracias por su presentación. Fue muy esclarecedora.' },
          { speaker: 'Palestrante', pt: 'Obrigado! Fico contente que tenha sido útil. Tem alguma questão?', es: 'Gracias. Me alegra que haya sido útil. ¿Tiene alguna pregunta?' },
          { speaker: 'Você', pt: 'Sim. Mencionou que a inteligência artificial vai transformar o setor nos próximos dois anos. Não acha que é um prazo demasiado otimista?', es: 'Sí. Mencionó que la inteligencia artificial va a transformar el sector en los próximos dos años. ¿No cree que es un plazo demasiado optimista?' },
          { speaker: 'Palestrante', pt: 'É uma boa questão. Concordo que dois anos é ambicioso, mas os dados mais recentes apontam para uma aceleração.', es: 'Es una buena pregunta. Coincido en que dos años es ambicioso, pero los últimos datos apuntan a una aceleración.' },
          { speaker: 'Você', pt: 'Entendo. Podemos manter o contacto? Estou a investigar exatamente esta área.', es: 'Entiendo. ¿Podemos mantenernos en contacto? Estoy investigando exactamente esta área.' },
        ],
      },
      {
        id: 'adv-8',
        title: 'Reclamação formal',
        context: 'Você faz uma reclamação ao responsável de um serviço.',
        lines: [
          { speaker: 'Você', pt: 'Preciso falar com o responsável. Recebi um serviço que não corresponde ao que contratei.', es: 'Necesito hablar con el responsable. He recibido un servicio que no corresponde con lo que contraté.' },
          { speaker: 'Responsável', pt: 'Sou eu. O que aconteceu exatamente?', es: 'Soy yo. ¿Qué ocurrió exactamente?' },
          { speaker: 'Você', pt: 'Contratei uma instalação em dois dias úteis e já levo uma semana à espera.', es: 'Contraté una instalación en dos días hábiles y llevo una semana esperando.' },
          { speaker: 'Responsável', pt: 'Peço desculpa pelo transtorno. Houve um problema logístico que já foi resolvido.', es: 'Disculpe las molestias. Hubo un problema logístico que ya está resuelto.' },
          { speaker: 'Você', pt: 'Que garantias me dão de que vai ser feito esta semana?', es: '¿Qué garantías me dan de que se va a hacer esta semana?' },
          { speaker: 'Responsável', pt: 'Comprometo-me a fazê-lo amanhã de manhã e a aplicar um desconto de vinte por cento.', es: 'Me comprometo a hacerlo mañana por la mañana y a aplicarle un descuento del veinte por ciento.' },
        ],
      },
      {
        id: 'adv-9',
        title: 'Conversando sobre cultura',
        context: 'Você e um espanhol discutem diferenças culturais.',
        lines: [
          { speaker: 'Você', pt: 'Uma coisa que me surpreendeu em Espanha foi como as pessoas jantam tão tarde. Às dez da noite?', es: 'Una cosa que me sorprendió en España fue lo tarde que se cena. ¿A las diez de la noche?' },
          { speaker: 'Carlos', pt: 'Para nós é completamente normal! No Brasil jantam cedo?', es: 'Para nosotros es completamente normal. ¿En Brasil cenan pronto?' },
          { speaker: 'Você', pt: 'Muito mais cedo. Entre as seis e as sete da tarde na maioria das casas.', es: 'Mucho antes. Entre las seis y las siete de la tarde en la mayoría de los hogares.' },
          { speaker: 'Carlos', pt: 'Que curioso. E o almoço, é a refeição mais importante?', es: 'Qué curioso. ¿Y el almuerzo es la comida más importante?' },
          { speaker: 'Você', pt: 'Depende. Nas grandes cidades cada vez menos — o ritmo de trabalho não permite.', es: 'Depende. En las grandes ciudades cada vez menos; el ritmo de trabajo no lo permite.' },
          { speaker: 'Carlos', pt: 'Igual aqui em Madrid. A siesta já quase não existe nas cidades.', es: 'Igual aquí en Madrid. La siesta ya casi no existe en las ciudades.' },
        ],
      },
      {
        id: 'adv-10',
        title: 'Planeando uma viagem',
        context: 'Você planeia uma viagem com um amigo espanhol.',
        lines: [
          { speaker: 'Você', pt: 'Tenho duas semanas de férias em agosto. Queres vir comigo a algum sítio?', es: 'Tengo dos semanas de vacaciones en agosto. ¿Quieres venir conmigo a algún sitio?' },
          { speaker: 'Amiga', pt: 'Que boa ideia! Onde estás a pensar?', es: '¡Qué buena idea! ¿Dónde estás pensando?' },
          { speaker: 'Você', pt: 'Talvez o norte de Espanha — País Basco e Cantábria. Nunca estive.', es: 'Quizás el norte de España; el País Vasco y Cantabria. Nunca he estado.' },
          { speaker: 'Amiga', pt: 'Excelente escolha! A gastronomia do País Basco é das melhores do mundo.', es: '¡Excelente elección! La gastronomía del País Vasco es de las mejores del mundo.' },
          { speaker: 'Você', pt: 'E as paisagens devem ser lindíssimas. Vamos de carro ou de comboio?', es: 'Y los paisajes deben ser preciosos. ¿Vamos en coche o en tren?' },
          { speaker: 'Amiga', pt: 'Prefiro de carro — assim temos mais liberdade para parar onde quisermos.', es: 'Prefiero en coche; así tenemos más libertad para parar donde queramos.' },
        ],
      },
    ],
  },

  fluente: {
    label: 'Fluente',
    desc: 'Linguagem natural, expressões idiomáticas e nuances culturais',
    dialogos: [
      {
        id: 'flu-1',
        title: 'Com o proprietário do hostal',
        context: 'Negociando uma estadia mais longa num hostal de Sevilha.',
        lines: [
          { speaker: 'Você', pt: 'Escuta, estou pensando em ficar mais uns dias. Você consegue me fazer um preço especial?', es: 'Mira, estoy pensando en quedarme unos días más. ¿Me puedes hacer un precio especial?' },
          { speaker: 'Proprietário', pt: 'Depende de quantos dias você fica. Se ficar mais de uma semana, consigo te dar dez por cento de desconto.', es: 'Depende de cuántos días te quedas. Si te quedas más de una semana, puedo hacerte un diez por ciento de descuento.' },
          { speaker: 'Você', pt: 'E se eu ficar duas semanas? Porque a verdade é que gostei muito do bairro e não tenho pressa nenhuma.', es: '¿Y si me quedo dos semanas? Porque la verdad es que me ha encantado el barrio y no tengo ninguna prisa.' },
          { speaker: 'Proprietário', pt: 'Duas semanas… Vou te fazer quinze por cento. Mas só porque você mola muito como hóspede.', es: 'Dos semanas… Te hago el quince por ciento. Pero solo porque molas mucho como huésped.' },
          { speaker: 'Você', pt: 'Feito! Você acabou de me convencer. Posso deixar as coisas no quarto hoje mais tarde?', es: '¡Trato hecho! Me has convencido. ¿Puedo dejar las cosas en la habitación esta tarde?' },
        ],
      },
      {
        id: 'flu-3',
        title: 'Reclamando do trânsito',
        context: 'Você e um colega chegam atrasados a um almoço em Madrid.',
        lines: [
          { speaker: 'Colega', pt: 'Desculpem o atraso, ficámos retidos no trânsito da M-30. Uma loucura.', es: 'Disculpad el retraso, nos quedamos atascados en el tráfico de la M-30. Una locura.' },
          { speaker: 'Você', pt: 'Pois. E ainda houve um acidente na rotunda da Castellana. Estivemos vinte minutos parados.', es: 'Ya ves. Y encima hubo un accidente en la rotonda de la Castellana. Estuvimos veinte minutos parados.' },
          { speaker: 'Amiga', pt: 'Ah, isso explicaria. Eu vim de metro e mesmo assim cheguei justa.', es: 'Ah, eso lo explica. Yo vine en metro y aun así llegué justa.' },
          { speaker: 'Você', pt: 'Devíamos ter feito o mesmo. Nunca mais venho de carro a esta zona a esta hora.', es: 'Tendríamos que haber hecho lo mismo. No vuelvo a venir en coche a esta zona a esta hora.' },
          { speaker: 'Colega', pt: 'Bom, já estamos aqui. O importante é que chegámos. Pedimos logo?', es: 'Bueno, ya estamos aquí. Lo importante es que hemos llegado. ¿Pedimos ya?' },
        ],
      },
      {
        id: 'flu-4',
        title: 'Negociando num mercado',
        context: 'Você está num mercado de antiguidades em Sevilha.',
        lines: [
          { speaker: 'Você', pt: 'Quanto custa esta gravura antiga?', es: '¿Cuánto vale este grabado antiguo?' },
          { speaker: 'Vendedor', pt: 'Para si, oitenta euros. É do século XIX, uma peça única.', es: 'Para usted, ochenta euros. Es del siglo XIX, una pieza única.' },
          { speaker: 'Você', pt: 'Oitenta? Está bem cara. Não me faz um preço melhor?', es: '¿Ochenta? Está bastante cara. ¿No me hace un precio mejor?' },
          { speaker: 'Vendedor', pt: 'Olhe, pelos vistos é um bom entendedor. Sessenta e cinco, e não baixo mais.', es: 'Mire, se ve que es buen entendedor. Sesenta y cinco, y no bajo más.' },
          { speaker: 'Você', pt: 'E se levar os dois — este e aquele postal antigo?', es: '¿Y si me llevo los dos, este y esa postal antigua?' },
          { speaker: 'Vendedor', pt: 'Os dois por setenta e cinco. Trato fechado.', es: 'Los dos por setenta y cinco. Trato hecho.' },
          { speaker: 'Você', pt: 'Feito! Pode embrulhar com cuidado? É para oferecer.', es: '¡Hecho! ¿Me lo envuelve con cuidado? Es para regalar.' },
        ],
      },
      {
        id: 'flu-2',
        title: 'Entre amigos espanhóis',
        context: 'Conversando com amigos num bar depois do trabalho.',
        lines: [
          { speaker: 'Miguel', pt: 'Tio, que semana tão pesada. Estou frito.', es: 'Tío, qué semana más dura. Estoy hecho polvo.' },
          { speaker: 'Você', pt: 'Eu também, cara. Meu chefe me matou com relatórios. Já enjoei.', es: 'Yo también, macho. Mi jefe me machacó con informes. Estoy hasta las narices.' },
          { speaker: 'Laura', pt: 'Parem de reclamar e peçam outra rodada. Isso é o que cura.', es: 'Dejad de quejaros y pedid otra ronda. Eso es lo que cura.' },
          { speaker: 'Você', pt: 'Laura tem razão. Vamos beber e esquecer. Amanhã é outro dia.', es: 'Laura tiene razón. Vamos a beber y a olvidar. Mañana será otro día.' },
          { speaker: 'Miguel', pt: 'A esses! Pela saúde de todos.', es: '¡Por esos! Por la salud de todos.' },
        ],
      },
      {
        id: 'flu-5',
        title: 'Despedindo-se de um colega',
        context: 'O seu colega vai embora da empresa e há uma festa de despedida.',
        lines: [
          { speaker: 'Você', pt: 'Então, é mesmo verdade que partes? Ainda não acredito.', es: '¿Entonces es verdad que te vas? Todavía no me lo creo.' },
          { speaker: 'Colega', pt: 'Pois, é. Começo na nova empresa em setembro. Já era hora de dar um salto.', es: 'Pues sí. Empiezo en la nueva empresa en septiembre. Ya era hora de dar el salto.' },
          { speaker: 'Você', pt: 'Vais fazer falta. Quem é que me vai aturar nas reuniões de segunda?', es: 'Se te va a echar de menos. ¿Quién me va a aguantar en las reuniones del lunes?' },
          { speaker: 'Colega', pt: 'Vais ter de te aguentar sozinho, tio. Mas ficamos em contacto.', es: 'Te vas a tener que aguantar solo, tío. Pero quedamos en contacto.' },
          { speaker: 'Você', pt: 'Com certeza. E se alguma vez precisares de uma referência, já sabes.', es: 'Por supuesto. Y si alguna vez necesitas una referencia, ya sabes.' },
          { speaker: 'Colega', pt: 'Obrigado. Boa sorte para ti também — mereces tudo o que anda para vir.', es: 'Gracias. Buena suerte también para ti; te mereces todo lo que está por venir.' },
        ],
      },
      {
        id: 'flu-6',
        title: 'Reclamando do governo',
        context: 'Dois amigos falam de política numa esplanada.',
        lines: [
          { speaker: 'Amigo', pt: 'Viste as notícias? Mais uma vez aumentaram os impostos.', es: '¿Has visto las noticias? Otra vez han subido los impuestos.' },
          { speaker: 'Você', pt: 'Já vi. É uma vergonha — e o salário não aumenta na mesma proporção.', es: 'Ya lo vi. Es una vergüenza; y el sueldo no sube en la misma proporción.' },
          { speaker: 'Amigo', pt: 'Exactamente. Trabalhas como um burro e a metade fica para o Estado.', es: 'Exactamente. Trabajas como un burro y la mitad se la queda el Estado.' },
          { speaker: 'Você', pt: 'O pior é que os serviços públicos cada vez pior. Os hospitais estão a rebentar pelas costuras.', es: 'Lo peor es que los servicios públicos están cada vez peor. Los hospitales están al límite.' },
          { speaker: 'Amigo', pt: 'E ninguém faz nada. Na próxima eleição tens de ir votar.', es: 'Y nadie hace nada. En las próximas elecciones tienes que ir a votar.' },
          { speaker: 'Você', pt: 'Já não fico em casa. Mas às vezes pergunto-me se faz alguma diferença.', es: 'Ya no me quedo en casa. Pero a veces me pregunto si sirve de algo.' },
        ],
      },
      {
        id: 'flu-7',
        title: 'Ajudando um turista',
        context: 'Um turista está perdido e você ajuda em espanhol.',
        lines: [
          { speaker: 'Turista', pt: 'Desculpe, fala inglês? Estou completamente perdido.', es: 'Perdone, ¿habla inglés? Estoy completamente perdido.' },
          { speaker: 'Você', pt: 'Um pouco, mas posso tentar ajudar em espanhol também. O que procura?', es: 'Un poco, pero puedo intentar ayudar en español también. ¿Qué busca?' },
          { speaker: 'Turista', pt: 'Procuro a Sagrada Família. O Google Maps não funciona.', es: 'Busco la Sagrada Família. El Google Maps no me funciona.' },
          { speaker: 'Você', pt: 'Está quase! Siga esta rua até ao fim, vire à direita e vai ver a torre.', es: '¡Está cerca! Siga esta calle hasta el final, gire a la derecha y verá la torre.' },
          { speaker: 'Turista', pt: 'Quantos minutos a pé?', es: '¿Cuántos minutos andando?' },
          { speaker: 'Você', pt: 'Uns dez minutos. Não tem perda — é inconfundível.', es: 'Unos diez minutos. No tiene pérdida; es inconfundible.' },
          { speaker: 'Turista', pt: 'Muito obrigado! O seu espanhol é excelente.', es: 'Muchas gracias. ¡Su español es excelente!' },
        ],
      },
      {
        id: 'flu-8',
        title: 'Discutindo um apartamento',
        context: 'Você e um amigo procuram apartamento para partilhar.',
        lines: [
          { speaker: 'Você', pt: 'Vi um apartamento interessante perto do metro. Queres ver as fotos?', es: 'Vi un piso interesante cerca del metro. ¿Quieres ver las fotos?' },
          { speaker: 'Amigo', pt: 'Claro. Quanto pede de renda?', es: 'Claro. ¿Cuánto pide de alquiler?' },
          { speaker: 'Você', pt: 'Novecentos euros. Dividindo pelos dois, dá quatrocentos e cinquenta cada.', es: 'Novecientos euros. Dividiéndolo entre los dos, salen cuatrocientos cincuenta cada uno.' },
          { speaker: 'Amigo', pt: 'Não está mau. Quantos quartos tem?', es: 'No está mal. ¿Cuántas habitaciones tiene?' },
          { speaker: 'Você', pt: 'Dois quartos, sala grande e duas casas de banho. E tem terraço.', es: 'Dos habitaciones, salón amplio y dos baños. Y tiene terraza.' },
          { speaker: 'Amigo', pt: 'Terraço? Já me convenceu. Liga ao senhorio e marca uma visita.', es: '¿Terraza? Ya me has convencido. Llama al casero y pide una visita.' },
        ],
      },
      {
        id: 'flu-9',
        title: 'No médico com urgência',
        context: 'Você acompanha um amigo às urgências do hospital.',
        lines: [
          { speaker: 'Enfermeira', pt: 'Boa tarde. O que se passa?', es: 'Buenas tardes. ¿Qué ocurre?' },
          { speaker: 'Você', pt: 'O meu amigo está com dores no peito desde há meia hora. Ficámos preocupados.', es: 'Mi amigo lleva media hora con dolor en el pecho. Nos hemos preocupado.' },
          { speaker: 'Enfermeira', pt: 'Certo. Vai entrar de imediato. Tem alguma doença cardíaca conhecida?', es: 'De acuerdo. Va a pasar de inmediato. ¿Tiene alguna enfermedad cardíaca conocida?' },
          { speaker: 'Você', pt: 'Não que eu saiba. Ele também tem dificuldade em respirar.', es: 'No que yo sepa. También tiene dificultad para respirar.' },
          { speaker: 'Enfermeira', pt: 'Fique tranquilo. Está em boas mãos. Pode esperar aqui na sala.', es: 'Quédese tranquilo. Está en buenas manos. Puede esperar aquí en la sala.' },
          { speaker: 'Você', pt: 'Obrigado. É possível avisarem-me assim que souberem algo?', es: 'Gracias. ¿Es posible que me avisen en cuanto sepan algo?' },
        ],
      },
      {
        id: 'flu-10',
        title: 'Filosofando sobre a vida',
        context: 'Conversa profunda entre dois amigos à noite.',
        lines: [
          { speaker: 'Amiga', pt: 'Às vezes pergunto-me para que é que trabalho tanto. No fim, a vida passa e não aproveitamos nada.', es: 'A veces me pregunto para qué trabajo tanto. Al final, la vida pasa y no aprovechamos nada.' },
          { speaker: 'Você', pt: 'Sei ao que te referes. Mas acho que depende do que chamas de aproveitar.', es: 'Sé a lo que te refieres. Pero creo que depende de lo que llames aprovechar.' },
          { speaker: 'Amiga', pt: 'Para mim é estar presente, criar memórias, não correr sempre atrás de algo.', es: 'Para mí es estar presente, crear recuerdos, no correr siempre detrás de algo.' },
          { speaker: 'Você', pt: 'Concordo. O problema é que o sistema não te deixa parar — senão ficas para trás.', es: 'Estoy de acuerdo. El problema es que el sistema no te deja parar; si no, te quedas atrás.' },
          { speaker: 'Amiga', pt: 'Então talvez a solução seja redefinir o que é ficar para trás.', es: 'Entonces quizás la solución sea redefinir qué es quedarse atrás.' },
          { speaker: 'Você', pt: 'Isso é mais fácil dizer do que fazer. Mas tenho de admitir que tens razão.', es: 'Es más fácil decirlo que hacerlo. Pero tengo que admitir que tienes razón.' },
        ],
      },
    ],
  },
};

// Renamed: DIALOGOS is Spanish. Use getDialogosForLang(lang) in screens.
export const DIALOGOS_ES = DIALOGOS;

let _dialogosExtra = null;
function loadDialogosExtra() {
  if (_dialogosExtra) return _dialogosExtra;
  try {
    const en = require('./dialogos_en').DIALOGOS_EN;
    const de = require('./dialogos_de').DIALOGOS_DE;
    _dialogosExtra = { en, de };
  } catch {
    _dialogosExtra = {};
  }
  return _dialogosExtra;
}

export function getDialogosForLang(lang) {
  if (!lang || lang === 'es') return DIALOGOS;
  const extra = loadDialogosExtra();
  return extra[lang] ?? DIALOGOS;
}
