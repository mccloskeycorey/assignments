/**
 * Created by vschool on 6/8/17.
 */
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");
var mongoose = require("mongoose");
var port = process.env.PORT || 7555;


mongoose.connect("mongodb://localhost/reddit");

app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/users", require("./routes/userRoutes"))

app.listen(port, function () {
    console.log("You are in the port Good sir!");
});