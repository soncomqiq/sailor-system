module.exports = (sequelize, DataTypes) => {
    const Reserve = sequelize.define('reserve', {
        // sailorId: {
        //     type: DataTypes.INTEGER
        // },
        // boatId: {
        //     type: DataTypes.INTEGER
        // },
        date: {
            type: DataTypes.DATE
        }
    })

    Reserve.associate = (models) => {
        // erve.belongsTo(models.sailor, { foreignKey: 'sailorId' })
        // erve.belongsTo(models.boat, { foreignKey: 'boatId' })
    }

    return Reserve
}