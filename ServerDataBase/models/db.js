const Sequelize = require("sequelize");

//Configuração de acesso ao Banco de Dados
// const sequelize = new Sequelize('DATABASE_NAME', 'root', 'PASSWORD', {
//     host : 'localhost',
//     dialect: 'mysql'
// });

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}