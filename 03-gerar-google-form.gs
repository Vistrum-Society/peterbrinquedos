/**
 * Peter Brinquedos - Gerador do Google Forms "Ponto de Partida"
 *
 * COMO USAR (leva 1 minuto):
 * 1 - Acesse https://script.google.com e clique em "Novo projeto".
 * 2 - Apague o conteudo padrao, cole TODO este arquivo.
 * 3 - Clique em Executar (Run) na funcao criarFormularioPeter.
 *     Autorize o acesso quando pedir (e sua propria conta).
 * 4 - Abra "Registros de execucao" (View > Logs). Os links do
 *     formulario (para responder e para editar) aparecem la.
 *
 * O formulario nasce na sua conta Google, e seu, editavel, e as
 * respostas caem organizadas (pode ligar a uma planilha depois).
 */

function criarFormularioPeter() {
  var form = FormApp.create('Peter Brinquedos - Nosso Ponto de Partida');

  form.setDescription(
    'Um raio-x rapido, feito para comecarmos do jeito certo.\n\n' +
    'Sao perguntas curtas, a maioria e so marcar uma opcao. Nao existe ' +
    'resposta certa ou errada, e leva por volta de 10 minutos. Responda ' +
    'com sinceridade, e do jeito que a Peter e de verdade que a gente ' +
    'acerta o tom.'
  );
  form.setProgressBar(true);
  form.setShowLinkToRespondAgain(false);

  // ----- BLOCO 1 -----
  form.addPageBreakItem()
    .setTitle('Bloco 1 - A marca em poucas palavras');

  form.addCheckboxItem()
    .setTitle('Se a Peter Brinquedos fosse uma pessoa, como ela falaria?')
    .setHelpText('Marque quantas combinarem.')
    .setChoiceValues([
      'Divertida e brincalhona',
      'Especialista, tipo "quem entende de brinquedo"',
      'Proxima e familiar',
      'Confiavel e tradicional',
      'Moderna e antenada no que e tendencia',
      'O melhor custo-beneficio da regiao'
    ]);

  form.addTextItem()
    .setTitle('Complete a frase: "Quando alguem compra na Peter, a gente quer que a pessoa sinta ______."');

  form.addParagraphTextItem()
    .setTitle('O que a Peter faz melhor que qualquer concorrente (da cidade ou online)?')
    .setHelpText('Uma ou duas linhas bastam.');

  form.addParagraphTextItem()
    .setTitle('Tem algo que voces NAO querem parecer de jeito nenhum?')
    .setHelpText('Ex.: "loja de camelo", "cara demais", "infantil de mais", "amadora".');

  // ----- BLOCO 2 -----
  form.addPageBreakItem()
    .setTitle('Bloco 2 - Quem compra hoje e quem voces querem alcancar');

  form.addCheckboxItem()
    .setTitle('Quem mais compra na Peter hoje?')
    .setHelpText('Marque os 2 principais.')
    .setChoiceValues([
      'Maes e pais presenteando os filhos',
      'Avos, tios, padrinhos (o presente)',
      'O proprio adulto que coleciona (kidult)',
      'Escolas e instituicoes',
      'Revendedores'
    ])
    .showOtherOption(true);

  form.addCheckboxItem()
    .setTitle('Quais destes "novos nichos" voce sente que estao crescendo e a Peter ainda nao explora direito?')
    .setHelpText('Marque os que interessam.')
    .setChoiceValues([
      'Colecionaveis e kidult (Pokemon, LEGO adulto, action figures, Funko)',
      'Brinquedo educativo e STEAM (aprender brincando)',
      'Jogos de tabuleiro e cartas',
      'Bebe e primeira infancia',
      'Presente pronto para datas (Natal, aniversario, corporativo)',
      'Licenciados e virais (o "brinquedo do momento")'
    ])
    .showOtherOption(true);

  form.addParagraphTextItem()
    .setTitle('Existe um tipo de cliente que voce adoraria atrair, mas que hoje "nao entra na loja"? Quem e?');

  form.addMultipleChoiceItem()
    .setTitle('Onde voces querem crescer mais nos proximos meses?')
    .setChoiceValues([
      'No fisico e na regiao',
      'No online, vendendo para o Brasil todo',
      'Nos dois, sem preferencia'
    ]);

  // ----- BLOCO 3 -----
  form.addPageBreakItem()
    .setTitle('Bloco 3 - Produtos: o que mostrar e quando');

  form.addParagraphTextItem()
    .setTitle('Se voce so pudesse divulgar 3 produtos ou categorias no proximo mes, quais seriam?');

  form.addParagraphTextItem()
    .setTitle('Tem algum produto com margem boa, exclusivo ou "que sobra no estoque" que voces adorariam vender mais? Qual?');

  form.addCheckboxItem()
    .setTitle('Quais datas realmente movem o caixa de voces?')
    .setHelpText('Marque as fortes.')
    .setChoiceValues([
      'Dia das Criancas',
      'Natal',
      'Black Friday',
      'Pascoa',
      'Volta as aulas',
      'Aniversarios (o ano inteiro)'
    ])
    .showOtherOption(true);

  form.addParagraphTextItem()
    .setTitle('Chega novidade com frequencia na loja? Voces gostam de anunciar "acabou de chegar"?');

  // ----- BLOCO 4 -----
  form.addPageBreakItem()
    .setTitle('Bloco 4 - Conteudo: o que ja existe e quem topa aparecer');

  form.addMultipleChoiceItem()
    .setTitle('Hoje, quem cuida das redes sociais?')
    .setChoiceValues([
      'Ninguem fixo',
      'Alguem da equipe nas horas vagas',
      'Uma agencia ou freelancer anterior',
      'O proprio dono'
    ]);

  form.addMultipleChoiceItem()
    .setTitle('Voces tem um banco de fotos e videos dos produtos?')
    .setChoiceValues([
      'Sim, organizado',
      'Sim, mas baguncado',
      'Quase nada, so o que fotografamos na correria'
    ]);

  form.addMultipleChoiceItem()
    .setTitle('Alguem da loja topa aparecer em video curto (mostrar um brinquedo, dar uma dica de presente)?')
    .setChoiceValues([
      'Sim, o dono topa',
      'Sim, alguem da equipe topa',
      'Preferimos sem rosto, so o produto'
    ]);

  form.addMultipleChoiceItem()
    .setTitle('Podemos gravar e fotografar dentro da loja, usando as prateleiras e o estoque como cenario?')
    .setChoiceValues([
      'Livre, a vontade',
      'Com combinacao de horario',
      'Preferimos foto de estudio ou fundo neutro'
    ]);

  form.addParagraphTextItem()
    .setTitle('Manda 1 ou 2 perfis do Instagram (de qualquer segmento) que voce acha lindos ou bem feitos.')
    .setHelpText('Serve de referencia de estilo.');

  // ----- BLOCO 5 -----
  form.addPageBreakItem()
    .setTitle('Bloco 5 - A politica de marketing (as regras do jogo)');

  form.addMultipleChoiceItem()
    .setTitle('Ate onde o tom de voz pode ir confortavelmente?')
    .setChoiceValues([
      'Pode ser bem descontraido, com humor e memes',
      'Alegre, mas sobrio e caprichado',
      'Mais informativo, tipo curador que indica o brinquedo certo'
    ]);

  form.addMultipleChoiceItem()
    .setTitle('Voces querem mostrar preco e promocao nos posts?')
    .setChoiceValues([
      'Sim, sempre que der',
      'So em campanha especifica',
      'Preferimos chamar para o direct ou WhatsApp'
    ]);

  form.addParagraphTextItem()
    .setTitle('Tem alguma regra inegociavel para a marca?')
    .setHelpText('Ex.: nao falar de politica, nao citar concorrente pelo nome, cuidado com marcas registradas, nada apelativo.');

  form.addCheckboxItem()
    .setTitle('Como a venda acontece hoje?')
    .setHelpText('Marque todas que valem.')
    .setChoiceValues([
      'Loja fisica',
      'WhatsApp',
      'Instagram e direct',
      'Magazine Luiza e outros marketplaces',
      'Site proprio'
    ]);

  form.addParagraphTextItem()
    .setTitle('Daqui a 3 meses, onde voce MAIS quer que o cliente termine comprando?');

  // ----- BLOCO 6 -----
  form.addPageBreakItem()
    .setTitle('Bloco 6 - Objetivo e como vamos tocar');

  form.addParagraphTextItem()
    .setTitle('Termine a frase: "Nos proximos 90 dias, se a gente conseguir ______, tera valido muito a pena."');

  form.addParagraphTextItem()
    .setTitle('O que fez voces procurarem ajuda com marketing agora? (o estopim)');

  form.addMultipleChoiceItem()
    .setTitle('Quem aprova o conteudo antes de publicar?')
    .setChoiceValues([
      'Eu mesmo',
      'O dono',
      'Ninguem, confiamos no time',
      'A definir'
    ]);

  form.addMultipleChoiceItem()
    .setTitle('Que ritmo voces imaginam para comecar?')
    .setChoiceValues([
      'Testar leve (2 a 3 posts por semana)',
      'Encher o tanque (conteudo quase diario)',
      'Quero a recomendacao de voces'
    ]);

  form.addParagraphTextItem()
    .setTitle('Tem algo que eu nao perguntei e que voce acha importante eu saber? Campo livre.');

  // ----- Fim -----
  form.setConfirmationMessage(
    'Obrigado por dedicar esses minutos. Ja volto com uma conversa rapida ' +
    'e um plano de por onde comecar, pensado para a temporada mais forte ' +
    'do ano de brinquedos que esta chegando.'
  );

  Logger.log('Formulario criado com sucesso.');
  Logger.log('Link para RESPONDER (enviar ao Peter): ' + form.getPublishedUrl());
  Logger.log('Link para EDITAR (seu): ' + form.getEditUrl());
}
