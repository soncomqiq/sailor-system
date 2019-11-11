module.exports = (sequelize, DataTypes) => {
    const Reserve = require('./reserve')(sequelize, DataTypes)
    const Sailor = sequelize.define('sailor', {
        name: {
            type: DataTypes.STRING(45)
        },
        rating: {
            type: DataTypes.INTEGER
        },
        age: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            validate: {
                notNull: true, 
                max: 100
            }
        }
    }, {});

    Sailor.associate = (models) => {
        Sailor.belongsToMany(models.boat, { through: Reserve }) // models.reserves ต้องเป็นชื่อที่่อยู่หลัง Define
    }

    return Sailor
}