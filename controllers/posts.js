const db = require("../models");
const express = require("express");
const router = express.Router();

router.get("/all", function(req, res) {
    db.Post.findAll({
        attributes: ["title", "body", "id"]
    }).then(dbPosts =>{
        res.json(dbPosts);
    }).catch(err => res.json(err));
});

router.get("/post/:id", function(req, res) {
    db.Post.findOne({
        where: {
            id: req.params.id
        },
        include: {
            model: db.User,
            attributes: ["name"]
        },
        attributes: ["title", "body", "id"]
    }).then((dbPost) => {
        res.json(dbPost);
    }).catch(err => console.log(err));
});

router.post("/", function(req, res) {
    db.Post.create({
        title: req.body.title,
        body: req.body.body,
        UserId: req.user.id
    }).then(dbPost => {
        res.json(dbPost);
    }).catch(err => console.log(err));
})


module.exports = router;