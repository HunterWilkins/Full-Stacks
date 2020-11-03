module.exports = function(sequelize, DataTypes) {
    let User = sequelize.define("User", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender: {
            type: DataTypes.BOOLEAN,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return User;
}