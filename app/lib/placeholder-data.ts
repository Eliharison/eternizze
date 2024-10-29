import { v4 as uuidv4 } from 'uuid';

export const users = [
  {
    id: uuidv4(), // Exemplo de ID UUID
    username: 'Eloisa',
    email: 'eloisa.teste@gmail.com',
    password: '123456789', // Senha em texto plano para a seed
  },
  {
    id: uuidv4(),
    username: 'Eliharison',
    email: 'eliharison@example.com',
    password: '123456789',
  },
  // Adicione mais usuários conforme necessário
];

export const stories = [
  {
    id: uuidv4(),
    title: 'Encontro Romântico',
    subtitle:
      'Foi o nosso primeiro encontro romântico para um restaurante, aqui realmente foi um dos dias mais marcantes',
    content: 'Detalhes completos sobre o nosso primeiro encontro romântico...',
    cover_image_url: '/images/encontro_romantico.jpg',
    author_id: users[0].id,
  },
  {
    id: uuidv4(),
    title: 'Comida Japonesa',
    subtitle:
      'Um role no Sushi Satoshi onde comemos muito e demos muito prejuízo!',
    content: 'A história completa do nosso dia no Sushi Satoshi...',
    cover_image_url: '/images/comida_japonesa.jpg',
    author_id: users[0].id,
  },
  {
    id: uuidv4(),
    title: 'Nossa Formatura!',
    subtitle: 'Um momento marcante! e cheio de gafes por parte do boy!',
    content:
      'Narrativa completa de como foi nossa formatura e as situações engraçadas...',
    cover_image_url: '/images/formatura.jpg',
    author_id: users[0].id,
  },
  {
    id: uuidv4(),
    title: 'Nosso primeiro Beijo!',
    subtitle: 'Uma coisa linda de se ver! perto do banheiro do bar..',
    content: 'A história divertida e inesperada do nosso primeiro beijo...',
    cover_image_url: '/images/primeiro_beijo.jpg',
    author_id: users[0].id,
  },
  {
    id: uuidv4(),
    title: 'Pedido de Namoro',
    subtitle: 'Não foi como esperávamos mas esta valendo!',
    content:
      'Os detalhes do pedido de namoro e como as coisas não saíram como planejado...',
    cover_image_url: '/images/pedido_namoro.jpg',
    author_id: users[0].id,
  },
  {
    id: uuidv4(),
    title: 'Dia dos Namorados!',
    subtitle: 'Aqui a mulher não esperava o que à aguardava...',
    content: 'Um dia dos namorados surpreendente, com muitas emoções...',
    cover_image_url: '/images/dia_namorados.jpg',
    author_id: users[0].id,
  },
  {
    id: uuidv4(),
    title: 'Passamos na Faculdade!',
    subtitle:
      'Um momento de tristeza, dúvidas e ansiedades que resultaram em muita alegria!',
    content:
      'A jornada de como passamos na faculdade e o que isso significou para nós...',
    cover_image_url: '/images/faculdade.jpg',
    author_id: users[0].id,
  },
  {
    id: uuidv4(),
    title: 'Quem chegou em quem?',
    subtitle:
      'Aqui você vai descobrir quem e como foi esse momento decisivo em nosso relacionamento.',
    content: 'A revelação de como nos conhecemos e quem tomou a iniciativa...',
    cover_image_url: '/images/quem_chegou.jpg',
    author_id: users[1].id,
  },
];
