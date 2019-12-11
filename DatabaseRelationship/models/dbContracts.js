/* eslint-disable max-len */

module.exports = function(sequelize, Sequelize) {
    const CONTRACT = sequelize.define("contracts", {
        contract_id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            unique: true,
            notEmpty: true,
            autoIncrement: true,
        },

        nrContract: {
            type: Sequelize.STRING(10),//[10],
            unique: true,
            notEmpty: true,
            allowNull: false,
        },

        currency: {
            type: Sequelize.STRING(5),//[5],
            notEmpty: true,
            allowNull: false,
        },

        country: {
            type: Sequelize.STRING(20),//[20],
        },

        fk_Modal_Id: {
            type: Sequelize.INTEGER,
            notEmpty: true,
            allowNull: false,
            references: {
                model: "modals",
                key: "modal_id"
            }
        },

        fk_CompanyRegister_Id: {
            type: Sequelize.INTEGER,
            notEmpty: true,
            allowNull: false,
            references: {
                model: "companies",
                key: "company_id"
            }
        },
    });

    CONTRACT.associate = function(models) {
        models.contracts.belongsTo(models.companies, {
            foreignKey: "company_id",
        });
        models.contracts.belongsTo(models.modal, {
            foreignKey: "modal_id",
        });
    };

    return CONTRACT;
};
