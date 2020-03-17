//postgres
/*module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'barber',
  define: {
    // garante que tem uma coluna createUp e updateAt dentro de cada tabela do banco de dados
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};*/

//mysql
module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'mysql',
  database: 'sabm',
  define: {
    // garante que tem uma coluna createUp e updateAt dentro de cada tabela do banco de dados
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

//umbler
/*module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  username: 'sabm',
  password: 'sabm1234',
  database: 'sabm',
  define: {
    // garante que tem uma coluna createUp e updateAt dentro de cada tabela do banco de dados
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};*/

