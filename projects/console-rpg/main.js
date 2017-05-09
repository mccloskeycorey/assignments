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

function Enemy(name, health, damage, inventory) {
    this.name = name;
    this.health = health;
    this.damage = damage;
    this.inventory = inventory;
}

function generateEnemy() {
    var currentEnemy;
    if (mathRan < .33) {
        currentEnemy = new Enemy("Orc", myRan(20, 50), myRan(15, 30), ["Wooden Club"]);
    }
    if (mathRan < .66) {
        currentEnemy = new Enemy("Dark Elf", myRan(15, );
        }
        else {
            currentEnemy = new Enemy("Carl", Math.floor(Math.random() * 100 + 1));
        }
        console.log(currentEnemy);
        return currentEnemy
    }


    function walk() {
        console.log("You continue on your way.");
        if (Math.random() < .80) {
            fight();
        } else {
            console.log("It seems the natives haven't noticed you yet! Continue on your way you brave fool, before they see you.");
        }
    }

    function enemyAttacks(user.health, enemy.damage)
