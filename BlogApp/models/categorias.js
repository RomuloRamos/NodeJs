module.exports = function(sequelize, Sequelize) {
    const CATEGORIAS = sequelize.define("categorias", {
        categorias_id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },

        name: {
            type: Sequelize.STRING(25),
            notEmpty: true,
            unique: true,
            allowNull: false,
        },
        slug: {
            type: Sequelize.STRING(100),
            notEmpty: true,
            unique: true,
            allowNull: false,
        },
        // date: {
        //     type: Date,
        //     default: Date.now()
        // }
    });

    return CATEGORIAS;
};