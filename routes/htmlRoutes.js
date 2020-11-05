const router = require("express").Router();
const path = require("path");
const isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/", function(req, res) {
    if (req.user) {
        res.redirect("/secret");
    }

    else {
        res.sendFile(path.join(__dirname, "../public/bacon.html"));
    }
});

router.get("/login", function(req, res) {
    console.log(req.user);
    res.sendFile(path.join(__dirname, "../public/bacon.html"));
})

router.get("/secret", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/secret.html"));
});

module.exports = router;