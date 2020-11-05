const db = require("../models");
const express = require("express");
const router = express.Router();
const passport = require("../config/passport");

router.post("/test", function(req, res) {
    db.Post.create({
        title: "test",
        body: "test",
        userId: 2
    }).then(function(dbPost) {
        console.log(dbPost);
        res.json(dbPost);
    }).catch(err => console.log(err));
})


module.exports = router;