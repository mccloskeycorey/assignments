var readlineSync = require('readline-sync')

console.log("Welcome to Grootland, a land that is as treacherous as my mothers cooking!");

var userName = readlineSync.question("May I have your name brave traveler?");

function walk() {
    console.log("You continue on your way.");
    if (Math.random() < .25) {
        console.log("Your luck is terrible you have encoutered: " + generateEnemy)
        fight();
    } else {
        console.log("It seems the natives haven't noticed you yet! Continue on your way you brave fool, before they see you. Press 'w' to continue.");
    }
}

while (user.health > 0) {
    var input = readlineSync.question("Press 'w' to walk on, or 'p' to check inventory.");
    if (input === "w") {
        walk();
    }
    if (input === "p") {
        return user
    }
}

function myRan(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function Enemy(name, health, damage) {
    this.name = name;
    this.health = health;
    this.damage = damage;
}

function user(name, health, attack, items) {
    name = userName;
    health = 500;
    attack = Math.floor(myRan(50, 80));
    items = ["Small Dagger"];
}


function generateEnemy() {
    var currentEnemy;
    if (mathRan < .33) {
        currentEnemy = new Enemy("Orc", myRan(20, 50), myRan(15, 30));
    }
    if (mathRan < .66) {
        currentEnemy = new Enemy("Dark Elf", myRan(15, 30), myRan(25, 45));
    } else {
        currentEnemy = new Enemy("Carl", myRan(80, 100), myRan(50, 75));
    }
    console.log(currentEnemy);
    return currentEnemy
}



//    function enemyAttacks(user.health, enemy.damage)
