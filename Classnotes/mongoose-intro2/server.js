var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var app = express();
var port = process.env.PORT || 7000;

mongoose.connect("mongodb://localhost/tv");

// SCHEMAS

var showSchema = new mongoose.Schema({
    title: String,
    rating: Number,
    duration: String,
    price: Number,
    actors: [String],
    locations: [{
        street: String,
        city: String,
        state: String,
        country: String,
        coords: [{
            latitude: Number,
            longitude: Number
        }]
    }]
});

var Show = mongoose.model("Show", showSchema);
var starTrek = new Show({title: "Star Trek the Next Generation"});
starTrek.save();

Show.find(function (err, shows) {
    console.log(shows);
});

var characterSchema = new mongoose.Schema({
    name: String,
    age: Number,
    movies: [String],
    female: Boolean,
    friends: [{
        name: String,
        age: Number,
        famous: Boolean,
        yearsKnown: Number
    }],
    married: Boolean
});

app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/characters", require("./routes/characters"));
app.use("/shows", require("./routes/shows"));

app.listen(port, function () {
    console.log("Server is running");
});
