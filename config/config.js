require("dotenv").config();

module.exports = {
    development: {
        username: "root",
        password : "root",
        database : "fullstacks",
        host : "127.0.0.1",
        dialect : "mysql",
        secretKey: process.env.SECRET
    },
    test: {
      username: "root",
      password: null,
      database: "database_test",
      host: "127.0.0.1",
      dialect: "mysql"
    },
    production: {
      use_env_variable : "JAWSDB_URL",
      dialect: "mysql"
    }
}