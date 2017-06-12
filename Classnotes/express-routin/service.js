var express = require('express');

var app = express();

var bodyParser = require("body-parser");
var port = process.env.PORT || 3000;
var morgan = require("morgan");

app.use(morgan('dev'));
app.use(bodyParser.json());

var vegetableRoutes = express.Router();

app.get("/vegetables", function (req, res) {

})
app.post("/vegetables", function (req, res) {

})
app.get("/vegetables/:id", function (req, res) {

})
app.put("/vegetables/:id", function (req, res) {

})
app.delete("/vegetables/:id", function (req, res) {

})

var fruitRoutes = express.Router();

app.get("/fruits", function (req, res) {

})
app.post("/fruits", function (req, res) {

})
app.get("/fruits/:id", function (req, res) {

})
app.put("/fruits/:id", function (req, res) {

})
app.delete("/fruits/:id", function (req, res) {

})


app.listen(port, function () {
	console.log("Server is running on port " + port)
})
