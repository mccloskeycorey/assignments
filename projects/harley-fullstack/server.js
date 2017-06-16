var express = require("express");
var app = express();
var morgan = require("morgan");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var port = process.env.PORT || 6500;


mongoose.connect("mongodb://localhost/harley");

app.use(express.static("public"));
// to call schema kinda like this Show.find(function(err, shows)); calling the Show

app.use(bodyParser.json());
app.use(morgan("dev"));

app.post("/api/blogpost", createPost);

function createPost(req, res) {
    console.log("Hello from server CreatePost()")
}

app.listen(port, function () {
    console.log("Server is running");
});