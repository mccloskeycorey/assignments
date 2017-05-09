var readlineSync = require('readline-sync');
var name = readlineSync.question("Welcome to the land of Grootland, may I have your name?")
console.log("Grootland is a dangerous land that either the really brave, or stupid venture in. I wonder what category you fall in.");
var walkPrint = readlineSync.question("If you wish to go I cannot stop you. Press 'w' to continue on you way, or 'p' to see what you have in your inventory.")

var fightOrFlight = 

//if (walkPrint === "w") {
//    walk()
//} if (walkPrint === "p") {
//    console.log(user.inventory);
//}


function user(name) {
    this.name = "",
        this.health = Math.floor((Math.random() * 200) + 1);
    this.inventory = ["Small Dagger"];
}

function enemyAttack() {
    if (enemy === "Ork") {
        return attack = Math.floor((Math.random() * 35) + 1);
    }
    if (enemy === "Dark Elf") {
        return attack = Math.floor((Math.random() * 50) + 1);
    } else {
        return attack = Math.floor((Math.random() * 75) + 1);
    }
}

function enemy() {
    if (Math.random() < .33) {
        enemyName = "Ork";
        enemyHealth = Math.floor(Math.random() * 50 + 1);

        return "Enemy Type: " + enemyName + "\nEnemy attack: " + enemyAttack + "\nEnemy health: " + enemyHealth;
    }
    if (Math.random() < .66) {
        enemyName = "Dark Elf";
        enemyHealth = Math.floor(Math.random() * 40 + 1);
        return "Enemy Type: " + enemyName + "\nEnemy attack: " + enemyAttack + "\nEnemy health: " + enemyHealth;

    } else {
        enemyName = "Carl";
        enemyHealth = Math.floor(Math.random() * 100 + 1);
        return "Enemy Type: " + enemyName + "\nEnemy attack: " + enemyAttack + "\nEnemy health: " + enemyHealth;
    }
}

function walk() {
    console.log("You continue on your way.")
    if (Math.random() < .25) {
        return "You are under attack by: " + enemy() + "\n" + user;
    } else {
        return "It seems the natives haven't noticed you yet! Continue on your way you brave fool, before they see you.";
    }
}

function fight() {
    var userAttack = Math.floor(Math.random() * 80 + 20);
    var fightOrFligh
}
