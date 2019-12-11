/* eslint-disable max-len */

module.exports = function(sequelize, Sequelize) {
    const MODAL = sequelize.define("modals", {
        modal_id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        sendBy: { //TODO - IMPEDIR STRINGS VAZIAS
            type: Sequelize.STRING(20),//[10],
            notEmpty: true,
            unique: true,
            allowNull: false,
        },
    });

    return MODAL;
};
