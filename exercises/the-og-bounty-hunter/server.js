var express  = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");
var mongoose = require("mongoose");
var port = process.env.PORT || 6000;

mongoose.connect("mongodb://localhost/goku");

// remember to put the routes after the app.use(bodyParser.json());

app.use(morgan("dev"));
app.use(bodyParser.json());

app.use("/bounties", require("./routes/bountyRoutes"));



app.listen(port, function () {
    console.log("You are in the sever");
});