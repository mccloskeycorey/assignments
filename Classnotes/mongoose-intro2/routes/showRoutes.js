// don't forget command are you can look up any word and change it.
var express = require("express");
var showRoutes = express.Router();

showRoutes.use(function (req, res, next) {
    console.log("You're in the show routes");
    next();
});

showRoutes.get("/", function (req, res) {
    res.send("GET /shows");
});

showRoutes.post("/", function (req, res) {
    res.send("POST /shows");
});

showRoutes.get("/", function (req, res) {
    res.send("GET  /shows/:id");
});

showRoutes.post("/", function (req, res) {
    res.send("POST /shows/:id");
});

showRoutes.put("/", function (req, res) {
    res.send("PUT /shows/:id");
});

showRoutes.delete("/", function (req, res) {
    res.send("DELETE /shows/:id");
});

module.exports()