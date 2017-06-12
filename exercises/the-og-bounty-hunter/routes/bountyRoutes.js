var express = require("express");
var bountyRoutes = express.Router();
var Bounty = require("../models/bounty");

bountyRoutes.get("/", function (req, res) {
    // Find will find everything.
    Bounty.find(function (err, bounties) {
        if(err) return res.status(500).send(err);
        return res.send(bounties);
    })
});

bountyRoutes.post("/", function (req, res) {

});

bountyRoutes.get("/:id", function (req, res) {

});

bountyRoutes.put("/:id", function (req, res) {

});

bountyRoutes.delete("/:id", function (req, res) {

});

module.exports = bountyRoutes;





















