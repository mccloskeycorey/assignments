var express = require("express");
var app = express();
var port = process.env.PORT || 7530;
var path = require("path");// if you want to use path you need to require it.
var morgan = require("morgan"):
var mongoose = require("mongoose");


app.use(express.static(path.join("public")));// will correctly join the path that it needs

app.listen(port, function () {
    console.log("Server is running on port " + port);
});