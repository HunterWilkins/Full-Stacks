const bcrypt = require("bcryptjs");
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

    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    }

    User.associate = (models) => {
        User.hasMany(models.Post, {
            onDelete: "cascade"
        });
    }

    User.addHook("beforeCreate", function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10, null));
    });

    return User;
}