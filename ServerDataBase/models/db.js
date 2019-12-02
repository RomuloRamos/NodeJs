const Sequelize = require("sequelize");

//Configuração de acesso ao Banco de Dados
const sequelize = new Sequelize('postapp', 'root', 'ICTSD@tabase', {
    host : 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}