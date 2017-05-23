var readlineSync = require('readline-sync');

var name = readlineSync.question("Welcome to the land of Grootland, may I have your name?");
user = new User(name);

console.log("Grootland is a dangerous land that either the really brave, or stupid venture in. I wonder what category you fall in.");

var currentEnemy = "";


while (user.health > 0) {

    var input = readlineSync.question("Press 'w' to walk on, or 'p' to check inventory.");

    if (input === "w") {
        console.log("walk");
        walk();
    }
    if (input === "p") {
        console.log(user);
    }
}

function User(name) {
    this.name = name;
    this.health = 600;
    this.attack = Math.floor(Math.random() * (75 - 50) + 50);
    this.inventory = ["Small Dagger"];
}


function walk() {
    console.log("You continue on your way.");
    if (Math.random() < .80) {
        fight();
    } else {
        console.log("It seems the natives haven't noticed you yet! Continue on your way you brave fool, before they see you.");
    }
}

function fight() {
    var fightResponse = readlineSync.question("Oh no!!!! You have encountered: " + currentEnemy + " What are you going to do? [f] Fight, or [r] flight.")
    currentEnemy = generateEnemy();
    var escape = Math.random();

}

function fightLogic(response, escape) {
    if (response === 'f') {
        // do they hit?
        console.log("You have chosen to fight! I hope you made the right choice.");

        while (currentEnemy.health >= 0 || user.health >= 0) {
            enemy.health -= damage;
            user.health -= damage;
        }
        if (currentEnemy.health <= 0) {
            console.log("You won the battle!! what a surpise I totally thought you were gonna die.");
        } else if (user.health <= 0) {
            console.log("You have lost! Your family has been disgraced.")
        }

    } else {
        if (escape < .50) {
            // get hit and re-run 
            fight();
        } else {
            // successfully escape
            console.log("You have successfully escaped the enemy! But now doubt yourself and lose " + doubt(user) + " health. Maybe next time you won't be such a coward");
        }
    }
}


function doubt(user) {
    user.health -= 5
}

function EnemyAttack() {
    User.health -= Enemy.attack
}

function attackEnemy() {
    currentEnemy.health -= Math.floor((Math.random() * 75) + 25);

}

function die() {
    if (user.health <= 0) {
        console.log("You have made a foolish mistake. And now you have paid for it with your life.");
    }
}

function dropedItem() {
    var mathRandom = Math.random()
    if (mathRandom < .33) {
        var dropedItem = user.inventory.push("Rusty Sword");
    }
    if (mathRandom < .66) {
        var dropedItem = user.inventory.push("Shield");
    } else {
        var dropedItem = user.inventory.push("Magic Staff");
    }
    console.log
}

function enemyDie() {
    if (enemyHealth <= 0) {
        console.log("You managed to take em down")
        dropedItem();
    } else {
        fightOrFlight();
    }
}


function generateEnemy() {
    var mathRan = Math.random();
    if (mathRan < .33) {
        currentEnemy = new Enemy("Orc", Math.floor(Math.random() * 50 + 1), Math.floor(Math.random() * (25 - 10) + 10));
    }
    if (mathRan < .66) {
        currentEnemy = new Enemy("Dark Elf", Math.floor(Math.random() * 75 + 1), Math.floor(Math.random() * (45 - 35) + 35));
    } else {
        currentEnemy = new Enemy("Carl", Math.floor(Math.random() * 100 + 1), Math.floor(Math.random() * (60 - 35) + 35));
    }
    console.log(currentEnemy);
    return currentEnemy
}


function Enemy(name, health, attack) {
    this.name = name;
    this.health = health;
    this.attack = attack;
}

var baddie = generateEnemy();
