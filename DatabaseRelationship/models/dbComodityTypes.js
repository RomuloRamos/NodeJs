/* eslint-disable max-len */

module.exports = function(sequelize, Sequelize) {
    const COMODITY_TYPES = sequelize.define("comodityTypes", {
        comodityType_id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },

        typeName: {
            type: Sequelize.STRING(15),//[10],
            notEmpty: true,
            unique: true,
            allowNull: false,
        },
    });

    return COMODITY_TYPES;
};