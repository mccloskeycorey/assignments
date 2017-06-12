/**
 * Created by vschool on 6/8/17.
 */

var express = require("express");
var userRoutes = express.Router();
var User = require("../schema/schemaRoute")

userRoutes.get("/", function (req, res) {
    User.find(function (err, users) {
        if(err) return res.status(500).send(err);
        return res.send(users);
    })
});

userRoutes.post("/", function (req, res) {
    var user = new User(req.body);
    User.save(function (err, newUser) {
        if(err) return res.status(500).send(err);
        return res.status(201).send(newUser)
    })
});

userRoutes.get("/:id", function (req, res) {
    // user.findOne({_id: req.params.id});
    User.findById(req.params.id, function (err, user) {
        if(err) return res.status(500).send(err);
        return res.send(user)
    });
});

userRoutes.put("/:id", function (req, res) {
    // First find the user
    // Second update the user
    // Third, call '.save()' again.
    // Or
    User.findByIdAndUpdate(req.params.id, req.body, function (err, updatedUser) {
        User.findById(req.params.id, function (err, user) {
            if(err) return res.status(500).send(err);
            return res.send(updatedUser);
        });
    })
});

userRoutes.delete("/:id", function (req, res) {
    //first find the user
    //second call .remove on the user
    //or
    User.findByIdAndRemove(req.params.id, function (err, user) {
        if(err) return res.status(500).send(err);
        return res.send(user);
    })
});

module.exports = userRoutes;