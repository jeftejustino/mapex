import pic1 from '../../assets/images/pictogramas/pictograma_praca_prisco.svg'
import pic2 from '../../assets/images/pictogramas/pictograma_bct.svg'
import pic3 from '../../assets/images/pictogramas/pictograma_reitoria.svg'
import pic4 from '../../assets/images/pictogramas/pictograma_seara.svg'
import pic5 from '../../assets/images/pictogramas/pictograma_mauc.svg'
import pic6 from '../../assets/images/pictogramas/pictograma_bloco_smd.svg'

const points = [
  {
    id: 1,
    latLng: [-3.7387407698346773, -38.56944200339161],
    pictograma: pic1,
    soundcloud:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/988430944&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    title: 'Praça Prisco Bezerra',
    desc: `Revitalizado em 2019, A praça Prisco Bezerra está  localizada na entrada do campus do Pici via Humberto monte e trata de uma homenagem a Prisco Bezerra que foi diretor do que hoje é o atual Centro de Ciências Agrárias.
Na UFC, foi também o primeiro Presidente da Comissão Central de Pesquisa, embrião da atual Pró-Reitoria de Pesquisa e Pós-Graduação, e exerceu o cargo de Pró-Reitor de Planejamento e Finanças.
Temos ainda a obra “Quadrados” do artista cearense Sérvulo esmeraldo, conhecido como o poeta das linhas graças aos seus trabalhos com linhas, luz e sombra. A obra é datada de 1987.`,
    refs: [
      'https://www.fortaleza.ce.gov.br/noticias/prefeitura-entrega-requalificacao-da-praca-prisco-bezerra-no-pici-neste-sabado-30-11',
      'https://diariodonordeste.verdesmares.com.br/metro/morre-o-artista-plastico-servulo-esmeraldo-1.1697816',
    ],
  },
  {
    id: 2,
    latLng: [-3.742497700250048, -38.57429267935315],
    pictograma: pic2,
    soundcloud:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/988882933&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    title: 'Biblioteca Central do Campus do Pici',
    desc: `A Biblioteca Central do Campus do Pici Prof. Francisco José de Abreu Matos - BCCP -  é uma das 05 bibliotecas integrantes do Sistema de Bibliotecas da uFC no Campus do Pici.
Seu acervo, constituído por livros, periódicos científicos, anais de eventos, mapas, entre outros tipos de documentos. A Biblioteca atente diversos cursos de graduação e pós-graduação de diversos Centros e Institutos da univesidade.
As Bibliotecas da Universidade Federal do Ceará foram surgindo à medida que novas unidades de ensino foram sendo incorporadas ou criadas, desde meados de 1957, integrando e centralizando bibliotecas  de diversas áreas da ciência e tecnologia.`,
    refs: [
      'https://biblioteca.ufc.br/pt/bibliotecas-do-sistema/biblioteca-central-do-campus-do-pici-bccp/',
      'https://biblioteca.ufc.br/pt/sobre-a-biblioteca-universitaria/historico-do-sbu/',
    ],
  },
  {
    id: 3,
    latLng: [-3.741930779825919, -38.5390806288496],
    pictograma: pic3,
    soundcloud:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/995065387&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    title: 'Reitoria da UFC',
    desc: `A chácara onde atualmente está a Reitoria da ufc foi vendida em 1909 pelo proprietário Henrique Alfredo Garcia ao Dr. José Gentil Alves de Carvalho. Um ano após a compra, o Reitor Martins Filho resolveu demolir o casarão, construído em 1918, mandando projetar, pelo Departamento de Obras da UFC, a atual sede da Reitoria.
No terreno onde se encontra a atual Reitoria da UFC, ergueiram-se duas casas, posteriormente demolidas para dar espaço às atuais proporções ao parque em torno do edifício e possibilitar a construção da Concha Acústica. No prédio da Reitoria, além dos Gabinetes do Reitor e do Vice-Reitor, funcionam a Pró-Reitoria de Planejamento e Administração, a Pró-Reitoria de Relações Internacionais e Desenvolvimento Institucional, o Cerimonial, dentre outros.`,
    refs: [
      'http://www.ufc.br/a-universidade/reitoria-da-ufc/47-historia-da-reitoria',
    ],
  },
  {
    id: 4,
    latLng: [-3.739214531013888, -38.56944122599653],
    pictograma: pic4,
    soundcloud:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/992437390&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    title: 'Seara da Ciência',
    desc: `A Seara da Ciência é um equipamento de divulgação e educação científica da Universidade Federal do Ceará, foi criada como órgão suplementar em dezembro de 1999. Em 2020, a Seara da Ciência passou a fazer parte da Pró-Reitoria de Extensão como uma de suas coordenadorias.
Com o intuito de divulgar e popularizar a ciência para alunos, professores e o público em geral, A Seara  funciona em um prédio, com uma área de 3.500 m², localizado na entrada do Campus do Pici e seu prédio conta com: Um teatro para 200 pessoas, 05 salas de aula, 04 laboratórios didáticos, uma biblioteca com um acervo de mais de mil obras de Divulgação Científica, um observatório astronômico, um Museu do Audiovisual, equipamentos interativos e muito mais.`,
    refs: ['https://seara.ufc.br/pt/sobre-a-seara-da-ciencia/'],
  },
  {
    id: 5,
    latLng: [-3.7408918532587885, -38.539668432298754],
    pictograma: pic5,
    soundcloud:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/992512858&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    title: 'Museu de Arte da UFC',
    desc: `Inaugurado a 25 de junho de 1961, o Museu de Arte da UFC - MAUC, preserva e difunde a cultura artística, atuando como uma ponte entre a obra de arte e o público. Antônio Martins Filho, primeiro Reitor da UFC, criou o museu com a idéia de relacionar universalidade e regionalidade. Esse espírito é mantido ainda hoje, através do acervo do MAUC, formado por obras populares e eruditas.
O MAUC tem 9 salas destinadas à exposição de longa duração, sendo 4 coletiva e 5 individuais. Integra ainda o circuito do museu, a escultura “Cristo”, de ferro e cobre, localizada no Hall de entrada e o painel “Jangadas”, ambas de autoria de Zenon Barreto e produzida para a inauguração do novo prédio do MAUC, em 1965. conta ainda com 3 espaços destinados às exposições de curta e média duração e muito mais.`,
    refs: [
      'http://www.ufc.br/cultura-e-arte/equipamentos-culturais/2043-museu-de-arte-da-ufc',
    ],
  },
  {
    id: 6,
    latLng: [-3.748749484796008, -38.579266107525825],
    pictograma: pic6,
    soundcloud:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/989140939&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    title: 'Bloco Acadêmico SMD',
    desc: `No dia 30 de agosto de 2016, aconteceu a mudança dos professores, técnicos e alunos do Curso Sistemas e Mídias Digitais - SMD - para o novo Bloco Acadêmico do Instituto Universidade Virtual. 
O Bloco era aguardado desde a criação do Instituto, sendo o primeiro a ser entregue, entre os três prédios que comporão as instalações definitivas do Instituto.     
Possui uma área coberta total de 3.387 metros quadrados, dispostos em 3 pavimentos com elevadores e projeto de acessibilidade. Os alunos contam agora com maior conforto, com salas amplas e climatizadas, laboratórios, salas de estudo e de atendimento dos professores, dentre outros.`,
    refs: [
      'https://smd.ufc.br/pt/curso-de-sistemas-e-midias-digitais-recebe-seu-espaco-oficial-2/',
    ],
  },
]

export default points
