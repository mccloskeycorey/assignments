var express = require("express");
var characterRoutes = express.Router();

characterRoutes.use(function (req, res, next) {
	console.log("You're in the characters routes");
	next();
});

characterRoutes.get("/", function (req, res) {
	res.send("GET /characters");
});

characterRoutes.post("/", function (req, res) {
	res.send("POST /characters");
});

characterRoutes.get("/", function (req, res) {
	res.send("GET  /characters/:id");
});

characterRoutes.post("/", function (req, res) {
	res.send("POST /characters/:id");
});

characterRoutes.put("/", function (req, res) {
	res.send("PUT /characters/:id");
});

characterRoutes.delete("/", function (req, res) {
	res.send("DELETE /characters/:id");
});

module.exports = mongoose.model("Show", showSchema);
