module.exports = (sequelize, DataTypes) => {
    const Reserve = require('./reserve')(sequelize, DataTypes)
    const Boat = sequelize.define('boat', {
        name: {
            type: DataTypes.STRING(45)
        },
        color: {
            type: DataTypes.STRING(45)
        }
    }, {});

    Boat.associate = (models) => {
        Boat.belongsToMany(models.sailor, { through: Reserve })
    };

    return Boat
}