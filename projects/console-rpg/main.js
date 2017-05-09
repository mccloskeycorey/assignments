var readlineSync = require('readline-sync')

console.log("Welcome to Grootland, a land that is as treacherous as my mothers cooking!");

userName = readlineSync.question("May I have your name brave traveler?");

console.log("If you wish to continue press 'w' to walk")


function myRan(min, max) {
    Math.floor(Math.random() * (max - min) + min);
}

function user(name, health, attack, items) {
    name = userName;
    health = 500;
    attack = Math.floor((Math.random() * (100 - 50) + 50));
    items = ["Small Dagger"];
}

function walk() {
    console.log("You continue on your way.");
    if (Math.random() < .80) {
        fight();
    } else {
        console.log("It seems the natives haven't noticed you yet! Continue on your way you brave fool, before they see you.");
    }
}
