// var express = require("express");
var mongoose = require("mongoose");

var bountySchema = new mongoose.Schema({
    credits: Number,
    bountyName: String

});

module.exports = mongoose.model("Bounty", bountySchema);