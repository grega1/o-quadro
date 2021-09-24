const dataBase = {
  filmes: [{
    id: '1',
    img: { src: '/imagens/teste/previaCard.png', desc: 'descrição da imagem', titulo: 'Titulo da Imagem' },
    galeria: [{ src: '/imagens/teste/previaCard.png', desc: 'descrição da imagem', titulo: 'Titulo da Imagem' }, { src: '/imagens/teste/previaCard.png', desc: 'descrição da imagem', titulo: 'Titulo da Imagem' }, { src: '/imagens/teste/previaCard.png', desc: 'descrição da imagem', titulo: 'Titulo da Imagem' }, { src: '/imagens/teste/previaCard.png', desc: 'descrição da imagem', titulo: 'Titulo da Imagem' }, { src: '/imagens/teste/previaCard.png', desc: 'descrição da imagem', titulo: 'Titulo da Imagem' }],
    titulo: 'Terror Noturno',
    imgDestaque: { src: '/imagens/teste/posterTerrorGrande.png', desc: 'descrição da imagem', titulo: 'Titulo da Imagem' },
    galeriaImagens: '',
    sinopse: 'Após uma festa com muita bebedeira e diversão, um casal desperta no dia seguinte sem qualquer recordação sobre os eventos da noite anterior. Quando encontram vestígios de um provável atropelamento no para-choque do carro, passam a acreditar que podem ter cometido um assassinato.',
    autor: 'evandro scorsin',
    participacao: 'Gustavo Piaskoski e Marrara Mara',
    categoria: 'Curta Metragem',
    ano: 2019,
    linkVideo: '',
    tags: [],
    equipe: {
      principal: ` <DivFlex eColuna={false}>
      <TextoVerde>Direção e roteiro:</TextoVerde>
      <span>Evandro Scorsin</span>
    </DivFlex>
    <DivFlex eColuna={false}>
      <TextoVerde>Produção:</TextoVerde>
      <span>Anderson Simão</span>
    </DivFlex>
    <DivFlex eColuna={false}>
      <TextoVerde>Montagem:</TextoVerde>
      <span>Christopher Faust</span>
    </DivFlex>
    <DivFlex eColuna={false}>
      <TextoVerde>Produção:</TextoVerde>
      <span>Wellington Sari</span>
    </DivFlex>
    <DivFlex eColuna={false}>
      <TextoVerde>Coordenação:</TextoVerde>
      <span>Gustavo Duarte</span>
    </DivFlex>
    <DivFlex eColuna={false}>
      <TextoVerde>Direção de fotografia:</TextoVerde>
      <span>André Senna</span>
    </DivFlex>
    <DivFlex eColuna={false}>
      <TextoVerde>Trilha Sonora:</TextoVerde>
      <span>Felipe Ayres</span>
    </DivFlex>
    <DivFlex eColuna={false}>
      <TextoVerde>Finalização de som:</TextoVerde>
      <span>Vitor Coroa e Vitor Morales</span>
    </DivFlex>
`,
      adicional: `<TextoVerde>Elenco de apoio:</TextoVerde>
      <span>Martha Chapieski e Altamar Cezar</span>
      <TextoVerde>Operador de câmera:</TextoVerde>
      <span>André Senna |</span>
      <TextoVerde>Assistente de câmera:</TextoVerde>
      <span>Bianca Ono | </span>
      <TextoVerde>Assistente de fotografia:</TextoVerde>
      <span>Murilo Lazarin |</span>
      <TextoVerde>Elétrica:</TextoVerde>
      <span>Morgana Horst |</span>
      <TextoVerde>Arte, figurino e maquiagem:</TextoVerde>
      <span>Lucas Machado |</span>
      <TextoVerde>Estúdio de correção de cor: </TextoVerde>
      <span>House Films |</span>
      <TextoVerde>Correção de cor:</TextoVerde>
      <span>Lucas Machado |</span>
      <TextoVerde>Logger e assistente de direção:</TextoVerde>
      <span>Christopher Faust |</span>
      <TextoVerde>Som direto:</TextoVerde>
      <span>Anderson Simão |</span>
      <TextoVerde>Edição de som:</TextoVerde>
      <span>Rodrigo Sacic, Vitor Coroa e Vitor Moraes |</span>
      <TextoVerde>Foley:</TextoVerde>
      <span>Vitor Moraes |</span>
      <TextoVerde>Dublagem:</TextoVerde>
      <span>Luiz Lepchak |</span>
      <TextoVerde>Estúdio de mixagem:</TextoVerde>
      <span>Estúdio Desterro</span>
      <TextoVerde>Designer gráfico:</TextoVerde>
      <span>Pietro Luigi</span>
      <TextoVerde>Acessibilidade:</TextoVerde>
      <span>Etc Filmes</span>
      <TextoVerde>Traduções:</TextoVerde>
      <span>O Editorial – Traduções e Edições</span>
      <TextoVerde>Sincronização português e tradução inglês:</TextoVerde>
      <span>Paulo Scarpa</span>
      <TextoVerde>Tradução espanhol:</TextoVerde>
      <span>Niala Pessuto</span>`,

    },
  },
  {
    img: { src: '/imagens/teste/previaCard.png', desc: 'descrição da imagem', titulo: 'Titulo da Imagem' },
    galeria: [{ src: '/imagens/teste/previaCard.png', desc: 'descrição da imagem', titulo: 'Titulo da Imagem' }],
    titulo: 'Média Metragem',
    imgDestaque: 'posterTerror',
    galeriaImagens: '',
    sinopse: 'Após uma festa com muita bebedeira e diversão, um casal desperta no dia seguinte sem qualquer recordação sobre os eventos da noite anterior. Quando encontram vestígios de um provável atropelamento no para-choque do carro, passam a acreditar que podem ter cometido um assassinato.',
    autor: 'de evandro scorsin',
    participacao: 'Gustavo Piaskoski e Marrara Mara',
    categoria: 'Média Metragem',
    linkVideo: '',
    tags: [],
    equipe: {
      direcao: 'Evandro SCORSIN',
      producao: 'Anderson Simao',
      coordenacao: 'Wellington Sari',
      montagem: 'Christopher Faust',
      direcaoFotografia: 'André Senna',
      trilhaSonora: 'Felipe Ayres',
      finalizacaoSom: 'Vitor Coroa e Vitor Morales',
      maisEquipe: {
        elenco: 'Martha Chapieski',
        operadorCamera: 'André Senna',
        assistenteCamera: 'Bianca Ono',
        assistenteFotografia: 'Murilo Lazarin',
        eletrica: 'Morgana Horst',
        arteFigurinoMaquiagem: 'Lucas Machado',
        estudioCorrecaoCor: 'House Films',
        correcaoCor: 'Lucas Machado',
        loggerEAssistenteDirecao: 'Christopher Faust',
        somDireto: 'Anderson Simão',
        edicaoSom: 'Rodrigo Sacic, Vitor Coroa e Vitor Moraes',
        foley: 'Vitor Moraes',
        dublagem: 'Luiz Lepchak',
        estudioMixagem: 'Estúdio Desterro',
        designerGrafico: 'Pietro Luigi',
        acessibilidade: 'Etc Filmes',
        traducoes: 'O Editorial - Traduções e Edições',
        sincronizacaoPTBREtraducaoEN: 'Paulo Scarpa',
        traducaoEspanhol: 'Niala Pessuto',
      },
    },

  },
  {
    img: '/imagens/teste/previaCard.png',
    galeria: [{ src: '/imagens/teste/previaCard.png', desc: 'descrição da imagem', titulo: 'Titulo da Imagem' }],
    titulo: 'Longa Metragem',
    imgDestaque: 'posterTerror',
    galeriaImagens: '',
    sinopse: 'Após uma festa com muita bebedeira e diversão, um casal desperta no dia seguinte sem qualquer recordação sobre os eventos da noite anterior. Quando encontram vestígios de um provável atropelamento no para-choque do carro, passam a acreditar que podem ter cometido um assassinato.',
    autor: 'de evandro scorsin',
    participacao: 'Gustavo Piaskoski e Marrara Mara',
    categoria: 'Longa Metragem',
    linkVideo: '',
    tags: [],
    equipe: {
      direcao: 'Evandro SCORSIN',
      producao: 'Anderson Simao',
      coordenacao: 'Wellington Sari',
      montagem: 'Christopher Faust',
      direcaoFotografia: 'André Senna',
      trilhaSonora: 'Felipe Ayres',
      finalizacaoSom: 'Vitor Coroa e Vitor Morales',
      maisEquipe: {
        elenco: 'Martha Chapieski',
        operadorCamera: 'André Senna',
        assistenteCamera: 'Bianca Ono',
        assistenteFotografia: 'Murilo Lazarin',
        eletrica: 'Morgana Horst',
        arteFigurinoMaquiagem: 'Lucas Machado',
        estudioCorrecaoCor: 'House Films',
        correcaoCor: 'Lucas Machado',
        loggerEAssistenteDirecao: 'Christopher Faust',
        somDireto: 'Anderson Simão',
        edicaoSom: 'Rodrigo Sacic, Vitor Coroa e Vitor Moraes',
        foley: 'Vitor Moraes',
        dublagem: 'Luiz Lepchak',
        estudioMixagem: 'Estúdio Desterro',
        designerGrafico: 'Pietro Luigi',
        acessibilidade: 'Etc Filmes',
        traducoes: 'O Editorial - Traduções e Edições',
        sincronizacaoPTBREtraducaoEN: 'Paulo Scarpa',
        traducaoEspanhol: 'Niala Pessuto',
      },
    },

  },
  {
    img: '/imagens/teste/previaCard.png',
    galeria: [{ src: '/imagens/teste/previaCard.png', desc: 'descrição da imagem', titulo: 'Titulo da Imagem' }],
    titulo: 'Terror Noturno',
    imgDestaque: 'posterTerror',
    galeriaImagens: '',
    sinopse: 'Após uma festa com muita bebedeira e diversão, um casal desperta no dia seguinte sem qualquer recordação sobre os eventos da noite anterior. Quando encontram vestígios de um provável atropelamento no para-choque do carro, passam a acreditar que podem ter cometido um assassinato.',
    autor: 'de evandro scorsin',
    participacao: 'Gustavo Piaskoski e Marrara Mara',
    categoria: '',
    tags: [],
    equipe: {
      direcao: 'Evandro SCORSIN',
      producao: 'Anderson Simao',
      coordenacao: 'Wellington Sari',
      montagem: 'Christopher Faust',
      direcaoFotografia: 'André Senna',
      trilhaSonora: 'Felipe Ayres',
      finalizacaoSom: 'Vitor Coroa e Vitor Morales',
      maisEquipe: {
        elenco: 'Martha Chapieski',
        operadorCamera: 'André Senna',
        assistenteCamera: 'Bianca Ono',
        assistenteFotografia: 'Murilo Lazarin',
        eletrica: 'Morgana Horst',
        arteFigurinoMaquiagem: 'Lucas Machado',
        estudioCorrecaoCor: 'House Films',
        correcaoCor: 'Lucas Machado',
        loggerEAssistenteDirecao: 'Christopher Faust',
        somDireto: 'Anderson Simão',
        edicaoSom: 'Rodrigo Sacic, Vitor Coroa e Vitor Moraes',
        foley: 'Vitor Moraes',
        dublagem: 'Luiz Lepchak',
        estudioMixagem: 'Estúdio Desterro',
        designerGrafico: 'Pietro Luigi',
        acessibilidade: 'Etc Filmes',
        traducoes: 'O Editorial - Traduções e Edições',
        sincronizacaoPTBREtraducaoEN: 'Paulo Scarpa',
        traducaoEspanhol: 'Niala Pessuto',
      },
    },

  }],
  editora: {
    img: '/imagens/teste/previaCard.png',
    textos: ['A Edições A Quadro, selo para publicações da produtora audiovisual O Quadro, embora criada recentemente, era um desejo antigo da empresa, quando na criação do seu CNPJ, há 10 anos, estabeleceu entre as atividades econômicas a possibilidade de edição e publicação de textos. Ela surge após um período de experiências diversas dos seus idealizadores que, concomitante à produção de flmes, exercitaram a escrita crítica sobre cinema, em revistas eletrônicas, blogs e os mais diversos catálogos e publicações afins, exerceram e exercem atividades de ensino do audiovisual, a partir de oficinas, cineclubes, cursos livres, palestras e debates sobre a sétima arte, e realizam pesquisas acadêmicas, na conclusão de graduações e mestrados.', 'Para Coleção Escrever o Cinema, a editora recém criada, Edições A Quadro, alia-se à profissionais, autores e pesquisadores, com experiências acadêmicas bastante consistentes, tanto na escrita, como na revisão e na organização de publicações diversas, é o caso do professor e cineasta Doutor Eduardo Túlio Baggio, organizador de diversas publicações, do professor Doutor Pedro de Andrade Lima Faissol, do cineasta e doutorando Alexandre Rafael Garcia, e da Mestre Juliana Rodrigues Pereira. Atualmente, enquanto produz os 4 primeiros volumes da Coleção Escrever o Cinema, paralelamente busca a viabilização de mais 4 volumes determinados para nova fase da coleção, enquanto matura e idealiza demais projetos de escrita e publicação.'],
  },
  publicacoes: [{
    url: 'contos-morais',
    img: '/imagens/teste/previaCard.png',
    titulo: 'CONTOS MORAIS E O CINEMA DE ÉRIC ROHMER',
    autor: 'DE ALEXANDRE GARCIA',
    sobreoAutor: 'Nascido em 1985, em Curitiba, é pesquisador, realizador e professor de cinema. Trabalha na Universidade Estadual do Paraná (Unespar) e no Colégio Medianeira. É doutorando em História na UFPR, mestre em Multimeios no Instituto de Artes da Unicamp e graduado em Cinema pela Faculdade de Artes do Paraná (Unespar). Fundou e foi sócio da produtora O Quadro de 2010 a 2015.',
    sinopse: 'Alexandre Garcia segue o estilo de Rohmer na precisão seca do corte. Testemunha a matéria-prima do cineasta dos afetos e das sensações, dos gestos no mundo, em seu modo prosaico de fazer cena e reivindicar moral. Para Rohmer, vale mais o suspiro que a ilação, o inefável que o postulado – e assim atravessa a forma dura do mundo. As grandes emoções não se deixam levar, nem as grandes frases empoladas – os momentos cruciais não têm circunstância. O traço do moralismo como lição de afetos transpira com fôlego de juventude nos Contos morais, em toda intensidade e delicadeza. Garcia sabe captar este movimento e acerta na mosca do olhar rohmeriano. Pois Rohmer é o poeta do prosaico e das pequenas emoções que se expressam em micro movimentos, das superfícies do mundo, dos traços sutis na expressão, das paisagens e cenografias delicadamente construídas. - Fernão Pessoa Ramos',
    participacao: 'Gustavo Piaskoski e Marrara Mara',
    tags: [],
    fichaTecnica: ` Editora ‏ : ‎ Arte & Letra
    1ª edição (21 março 2019)
    Idioma ‏ : ‎ Português
    Capa comum ‏ : ‎ 171 páginas
    ISBN-10 ‏ : ‎ 8560499997
    ISBN-13 ‏ : ‎ 978-8560499991
    Dimensões ‏ : ‎ 16 x 1 x 23 cm `
    ,
  }, {
    img: '/imagens/teste/previaCard.png',
    titulo: 'CONTOS MORAIS E O CINEMA DE ÉRIC ROHMER',
    autor: 'DE ALEXANDRE GARCIA',
    sobreoAutor: 'Nascido em 1985, em Curitiba, é pesquisador, realizador e professor de cinema. Trabalha na Universidade Estadual do Paraná (Unespar) e no Colégio Medianeira. É doutorando em História na UFPR, mestre em Multimeios no Instituto de Artes da Unicamp e graduado em Cinema pela Faculdade de Artes do Paraná (Unespar). Fundou e foi sócio da produtora O Quadro de 2010 a 2015.',
    sinopse: 'Alexandre Garcia segue o estilo de Rohmer na precisão seca do corte. Testemunha a matéria-prima do cineasta dos afetos e das sensações, dos gestos no mundo, em seu modo prosaico de fazer cena e reivindicar moral. Para Rohmer, vale mais o suspiro que a ilação, o inefável que o postulado – e assim atravessa a forma dura do mundo. As grandes emoções não se deixam levar, nem as grandes frases empoladas – os momentos cruciais não têm circunstância. O traço do moralismo como lição de afetos transpira com fôlego de juventude nos Contos morais, em toda intensidade e delicadeza. Garcia sabe captar este movimento e acerta na mosca do olhar rohmeriano. Pois Rohmer é o poeta do prosaico e das pequenas emoções que se expressam em micro movimentos, das superfícies do mundo, dos traços sutis na expressão, das paisagens e cenografias delicadamente construídas. - Fernão Pessoa Ramos',
    participacao: 'Gustavo Piaskoski e Marrara Mara',
    tags: [],
    fichaTecnica: ` Editora ‏ : ‎ Arte & Letra
    1ª edição (21 março 2019)
    Idioma ‏ : ‎ Português
    Capa comum ‏ : ‎ 171 páginas
    ISBN-10 ‏ : ‎ 8560499997
    ISBN-13 ‏ : ‎ 978-8560499991
    Dimensões ‏ : ‎ 16 x 1 x 23 cm `
    ,
  }, {
    img: '/imagens/teste/previaCard.png',
    titulo: 'CONTOS MORAIS E O CINEMA DE ÉRIC ROHMER',
    autor: 'DE ALEXANDRE GARCIA',
    sobreoAutor: 'Nascido em 1985, em Curitiba, é pesquisador, realizador e professor de cinema. Trabalha na Universidade Estadual do Paraná (Unespar) e no Colégio Medianeira. É doutorando em História na UFPR, mestre em Multimeios no Instituto de Artes da Unicamp e graduado em Cinema pela Faculdade de Artes do Paraná (Unespar). Fundou e foi sócio da produtora O Quadro de 2010 a 2015.',
    sinopse: 'Alexandre Garcia segue o estilo de Rohmer na precisão seca do corte. Testemunha a matéria-prima do cineasta dos afetos e das sensações, dos gestos no mundo, em seu modo prosaico de fazer cena e reivindicar moral. Para Rohmer, vale mais o suspiro que a ilação, o inefável que o postulado – e assim atravessa a forma dura do mundo. As grandes emoções não se deixam levar, nem as grandes frases empoladas – os momentos cruciais não têm circunstância. O traço do moralismo como lição de afetos transpira com fôlego de juventude nos Contos morais, em toda intensidade e delicadeza. Garcia sabe captar este movimento e acerta na mosca do olhar rohmeriano. Pois Rohmer é o poeta do prosaico e das pequenas emoções que se expressam em micro movimentos, das superfícies do mundo, dos traços sutis na expressão, das paisagens e cenografias delicadamente construídas. - Fernão Pessoa Ramos',
    participacao: 'Gustavo Piaskoski e Marrara Mara',
    tags: [],
    fichaTecnica: ` Editora ‏ : ‎ Arte & Letra
    1ª edição (21 março 2019)
    Idioma ‏ : ‎ Português
    Capa comum ‏ : ‎ 171 páginas
    ISBN-10 ‏ : ‎ 8560499997
    ISBN-13 ‏ : ‎ 978-8560499991
    Dimensões ‏ : ‎ 16 x 1 x 23 cm `
    ,
  }, {
    img: '/imagens/teste/previaCard.png',
    titulo: 'CONTOS MORAIS E O CINEMA DE ÉRIC ROHMER',
    autor: 'DE ALEXANDRE GARCIA',
    sobreoAutor: 'Nascido em 1985, em Curitiba, é pesquisador, realizador e professor de cinema. Trabalha na Universidade Estadual do Paraná (Unespar) e no Colégio Medianeira. É doutorando em História na UFPR, mestre em Multimeios no Instituto de Artes da Unicamp e graduado em Cinema pela Faculdade de Artes do Paraná (Unespar). Fundou e foi sócio da produtora O Quadro de 2010 a 2015.',
    sinopse: 'Alexandre Garcia segue o estilo de Rohmer na precisão seca do corte. Testemunha a matéria-prima do cineasta dos afetos e das sensações, dos gestos no mundo, em seu modo prosaico de fazer cena e reivindicar moral. Para Rohmer, vale mais o suspiro que a ilação, o inefável que o postulado – e assim atravessa a forma dura do mundo. As grandes emoções não se deixam levar, nem as grandes frases empoladas – os momentos cruciais não têm circunstância. O traço do moralismo como lição de afetos transpira com fôlego de juventude nos Contos morais, em toda intensidade e delicadeza. Garcia sabe captar este movimento e acerta na mosca do olhar rohmeriano. Pois Rohmer é o poeta do prosaico e das pequenas emoções que se expressam em micro movimentos, das superfícies do mundo, dos traços sutis na expressão, das paisagens e cenografias delicadamente construídas. - Fernão Pessoa Ramos',
    participacao: 'Gustavo Piaskoski e Marrara Mara',
    tags: [],
    fichaTecnica: ` Editora ‏ : ‎ Arte & Letra
    1ª edição (21 março 2019)
    Idioma ‏ : ‎ Português
    Capa comum ‏ : ‎ 171 páginas
    ISBN-10 ‏ : ‎ 8560499997
    ISBN-13 ‏ : ‎ 978-8560499991
    Dimensões ‏ : ‎ 16 x 1 x 23 cm `
    ,
  },

  ],
  quemSomos: {
    titulo: 'QUEM SOMOS',
    imgDestaque: 'posterTerror',
    texto: ` Formada em 2010, O Quadro é uma produtora voltada para os filmes, com a paixão de quem gosta de fazer cinema porque ama ver cinema.

    Depois de mais de uma dezena de curtas-metragens premiados, com circulação nos principais festivais de cinema nacionais, além de canais de TV, como TNT, Canal Brasil, TCM, entre outros), a produtora lançou, em 2017, seu primeiro longa-metragem, “Bye Bye Jaqueline”. Com estreia em diversas capitais e exibido em festivais em Portugal e na África do Sul, o filme é uma comédia de espírito livre, que reúne diversas das características dos curtas-metragens realizados pela produtora ao longo dos anos.
    
    A partir de 2017, O Quadro passou a apontar o telescópio para outros quadrantes da galáxia, criando o Metrô – Festival do Cinema Universitário Brasileiro e produzindo o longa-metragem “Euller Miller Entre Dois Mundos”, dirigido por Fernando Severo.
    
    Isso é só o começo.`,

    autores: [{
      nome: '',
      img: '',
      sobre: 'lorem ipsum dolor sit',
    }],

  },

  metro: {
    titulo: 'FESTIVAL METRÔ',
    texto: 'Desde 2017, O Quadro produz o Metrô – Festival do Cinema Universitário Brasileiro. Voltado para a exibição, a reflexão e o debate sobre o cinema e as coisas da vida, o festival busca construir uma estação imaginária em que se encontrem e se cruzem diferentes formas de criação artística e de pessoas.',
    img: '/imagens/teste/previaCard.png',

  },

};
export default dataBase;
