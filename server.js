const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();
let db = require("./models");
const controllers = require("./controllers");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.use("/api/users", controllers.users);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

db.sequelize.sync().then(function() {
    app.listen(PORT, () => {
        console.log("Server Listening on " + PORT);
    });
});