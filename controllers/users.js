const db = require("../models");
const express = require("express");
const router = express.Router();
const passport = require("../config/passport");

router.get("/", async (req, res) => {
    try {
        const users = await db.User.findAll({attributes: ["name", "gender"]});
        res.json(users.map(user => {return {name: user.name, gender: user.gender}}));    
    }

    catch {
        res.sendStatus(500);
    }
});

router.post("/login", passport.authenticate("local"), (req, res) => {
    console.log("The Login Route Went Off Without a Hitch");
    res.json(req.user);
});

router.post("/signup", (req, res) => {
    db.User.create({
        name: req.body.name,
        password: req.body.password,
        gender: req.body.gender
    }).then(dbUser => {
        res.json(dbUser);
    }).catch(err => console.log(err));
})


router.get("/oneUser/:userId", async (req, res) => {
    try {
        const user = await db.User.findOne({where: {id: req.params.userId}});
        if (user) {
            res.json(user);
        }
        res.sendStatus(500);
    }

    catch {
        res.sendStatus(500, "You screwed up");
    }
});


module.exports = router;