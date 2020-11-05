const config = require("../config/config");
module.exports = {
    users: require("./users"),
    posts: require("./posts"),
    secret: config.development.secretKey
}