const { urlencoded } = require("express");
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
    console.log("Server Listening on " + PORT);
});