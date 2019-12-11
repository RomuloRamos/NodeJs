/* eslint-disable max-len */

module.exports = function(sequelize, Sequelize) {
    const ITEM_REGISTER = sequelize.define("itemRegister", {
        // TableId
        item_Id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            autoIncrement: true,
        },

        //Parsed from Contract or seted
        partNumber: {
            type: Sequelize.STRING(15),//[15],
            notEmpty: true,
            unique: true,
            allowNull: false,
        },

        purchasePercent: {
            type: Sequelize.INTEGER,
            notEmpty: true,
            allowNull: false,
        },

        //From Contract or seted to default
        fk_ContractNumb: {
            type: Sequelize.INTEGER,
            notEmpty: true,
            allowNull: false,
            references: {
                model: "contracts",
                key: "contract_id",
            }
        },

        //  From Contract or seted
        unitPrice: {
            type: Sequelize.FLOAT(14, 5),
            notEmpty: true,
            allowNull: false,
        },

        //Must be seted by user
        division: {
            type: Sequelize.STRING(10),//[10],
        },
        //Parsed from contract
        firstDescription: {
            type: Sequelize.STRING(50),//[50],
            notEmpty: true,
            allowNull: false,
        },
        //Must be seted by user
        secoundDescription: {
            type: Sequelize.STRING(50),//[50],
        },

        //Must be seted by user
        marker: {
            type: Sequelize.STRING(20),//[20],
        },

        //Must be seted by user
        markerCode: {
            type: Sequelize.STRING(20),//[20],
        },

        //Parsed from contract
        unitType: {
            type: Sequelize.STRING(4),//[4],
            notEmpty: true,
            allowNull: false,
        },

        //Must be seted by user
        localUnitType: {
            type: Sequelize.STRING(4),//[4],
        },

        minQtt: {
            type: Sequelize.INTEGER,
            notEmpty: true,
            allowNull: false,
        },

        //Must be seted by user
        phaseIn: {
            type: Sequelize.DATEONLY,
        },

        //Must be seted by user
        phaseOut: {
            type: Sequelize.DATEONLY,
        },

        //Must be seted by user
        fk_CmdtyType_id: {
            type: Sequelize.INTEGER,
            references: {
                model: "comodityTypes",
                key: "comodityType_id"
            }
        },
    });

    ITEM_REGISTER.associate = function(models) {
        models.itemRegister.belongsTo(models.comodityTypes, {
            foreignKey: "comodityType_id",
        });
        models.itemRegister.belongsTo(models.contracts, {
            foreignKey: "contract_id",
        });
    };

    return ITEM_REGISTER;
};
