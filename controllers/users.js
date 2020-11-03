const db = require("../models");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const users = await db.User.findAll({attributes: ["name", "gender"]});
        res.json(users.map(user => {return {name: user.name, gender: user.gender}}));    
    }

    catch {
        res.sendStatus(500);
    }
});

router.get("/:userId", async (req, res) => {
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
})

module.exports = router;