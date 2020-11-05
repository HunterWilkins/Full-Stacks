module.exports = function(req, res, next) {
    console.log("The Middleware is Running");
    if (req.user) {
        return next();
    }

    return res.redirect("/");
}