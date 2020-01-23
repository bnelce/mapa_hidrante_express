module.exports = {
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
};
