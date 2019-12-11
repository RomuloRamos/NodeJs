/* eslint-disable max-len */

module.exports = function(sequelize, Sequelize) {
    const COMPANIES = sequelize.define("companies", {
        company_id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            unique: true,
            notEmpty: true,
            autoIncrement: true,
        },

        city: {
            type: Sequelize.STRING(20),//[20],
        },

        postalCode: {
            type: Sequelize.STRING(15),//[15],
        },

        country: {
            type: Sequelize.STRING(20),//[20],
            notEmpty: true,
            defaultValue: "Outros"
        },

        contactName: {
            type: Sequelize.STRING(50),//[50],
        },

        email: {
            type: Sequelize.STRING(60),//[60],
        },

        companyName: {
            type: Sequelize.STRING(50),//[50],
            notEmpty: true,
            allowNull: false,
        },
    });

    return COMPANIES;
};
