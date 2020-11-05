const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
const isAuthenticated = require("./config/middleware/isAuthenticated");
const path = require("path");
const routes = require("./routes");

const PORT = process.env.PORT || 3000;
let db = require("./models");
const controllers = require("./controllers");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.use(session({secret: "keyboard cat", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());



app.use("/api/users", controllers.users);
app.use("/api/posts", controllers.posts);
app.use("/", routes.htmlRoutes);

// app.get("/", function(req, res) {
//     console.log("Req.User is not null: " + (req.user != null));
//     if (req.user) {
//         console.log("Found User");
//         res.redirect("/secret");
//     }
//     else {
//         console.log("Didn't Find User");
//         res.sendFile(path.join(__dirname, "./public/index.html"));
//     }
// });

// app.get("/secret", isAuthenticated, function(req, res) {
//     res.sendFile(path.join(__dirname, "./public/secret.html"));
// });

db.sequelize.sync().then(function() {
    app.listen(PORT, () => {
        console.log("Server Listening on " + PORT);
    });
});