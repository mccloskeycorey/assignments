var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");
var port = process.env.PORT || 7000;

app.use(bodyParser.json());
app.use(morgan("dev"));

app.use(require("./routes/fruitsRoutes"));
app.use(require("./routes/vegetablesRoutes"));

app.listen(port, function () {
	console.log("Server is running on port: " + port);
});

// Task 2
// Create 2 route files for seperate routes. (/vegetable and /fruits)
// Include GET (all), POST, GET (one), PUT, DELETE handler
// They can be empty
// In other files (not in server.js)
