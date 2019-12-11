const Sequelize = require("sequelize");

const modelComodityTypes = require("./dbComodityTypes");
const modelCompanies = require("./dbCompanies");
const modelContracts = require("./dbContracts");
const modelItemReg = require("./dbItemResgistration");
const modelModal = require("./dbModal");

sequelize = new Sequelize('DataBaseTest', 'root', 'ICTSD@tabase', {
    host : 'localhost',
    dialect: 'mysql'
});

const dbModal = modelModal(sequelize, Sequelize);
const dbComodityTypes= modelComodityTypes(sequelize, Sequelize);
const dbCompanies = modelCompanies(sequelize, Sequelize);
const dbContracts = modelContracts(sequelize, Sequelize);
const dbItemReg = modelItemReg(sequelize, Sequelize);

// sequelize.sync({ force: true })
//   .then(() => {
//     console.log(`Database & tables created!`)
//   })

module.exports = {
    sequelize,
    dbComodityTypes,
    dbCompanies,
    dbContracts,
    dbItemReg,
    dbModal,
};
