/**
 * Created by vschool on 6/8/17.
 */
var mongoose = require("mongoose");


var postSchema = new mongoose.Schema({
    userPost: String,
    comment: String
});

var userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    name: {
        firstName: String,
        middleInitial: String,
        lastName: String,
    },
    age: Number,
    contactInfo: {
        phone: Number,
        email: String
    },
    daysSinceLastPost: Number,
    activeMember: Boolean,
    posts: [String]
});

module.exports = mongoose.model("User", userSchema);