const Sequelize = require("sequelize");
const modelCategorias = require("./categorias");

sequelize = new Sequelize('blogapp', 'root', 'Ub@tuba0703', {
    host : 'localhost',
    dialect: 'mysql'
});

const dbCategorias = modelCategorias(sequelize, Sequelize);


// sequelize.sync({})
//   .then(() => {
//     console.log(`Database & tables created!`)
//   })

module.exports = {
    sequelize,
    dbCategorias
};
