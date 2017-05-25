var readlineSync = require("readline-sync");

var name = readlineSync.question("Welcome to Grootland! A land full of beutiful and terrifying things. May I have your name brave traveler? So I may pray for your safe return.");

var user = new User(name);

while (user.health >= 0) {
    var input = readlineSync.question("To continue press 'w', or to check your inventory press 'p'.").toLowerCase();
    if (input === "w") {
        walk();
    } else if (input === "p") {
        user.print();
    }
}



function walk() {

    var possibility = Math.random();

    if (possibility <= .33) {
        // Finish the enemyCreation

        var enemy = new Enemy();

        var action = readlineSync.question("You have encountered a: " + enemy.name + "\nWhat are you going to do 'f' for fight, or 'r' for run. ").toLowerCase();

        if (action === "f") {
            fight(enemy);
        } else if (action === "r") {
            console.log("You have shown your true colors. You yellow belly!");

        }
    } else {
        console.log("You didn't encounter an enemy")
    }
}

function User(name) {
    this.name = name;
    this.health = 500;
    this.attack = Math.floor(Math.random() * (50 - 25) + 25);
    this.inventory = ["Small Dagger"]
    this.print = function () {
        console.log("Name: " + user.name + "\nHealth: " + user.health + "\nInventory: " + user.inventory);
    }
}

// create 1 of 3 enemys
function setName() {
    var ranName = Math.random();
    if (ranName <= .33) {
        return "Orc";
    } else if (ranName <= .66) {
        return "Dark Elf";
    } else {
        return "Carl";
    }
};

function setHealth(monster) {
    if (Math.random() < .33) {
        return Math.floor(Math.random() * (30 - 15) + 15);
    } else if (Math.random() < .66) {
        return Math.floor(Math.random() * (45 - 35) + 35);
    } else {
        return Math.floor(Math.random() * (55 - 35) + 35);
    }
}

function setAttackEnemy(monster) {
    var ranAttack = Math.random()
    if (ranAttack < .33) {
        return Math.floor(Math.random() * (15 - 5) + 5);
    } else if (ranAttack < .66) {
        return Math.floor(Math.random() * (30 - 25) + 25);
    } else {
        return Math.floor(Math.random() * (45 - 35) + 35);
    }
}

function itemGen() {
    var rand = Math.random()
    if (rand < .1 && (user.inventory != "A Fork you got a Fork of awesomeness!")) {
        user.inventory = "Fork of awesomeness";
        console.log("You found an 'Fork of awesomeness'!")
    } else if (rand < .5 && (user.inventory !== ("You found an 'Fork of awesomeness" || "A Staff"))) {
        user.inventory = "A Staff";
        console.log("You now have a Staff to poke people with.");
    }
}

function Enemy() {
    this.name = setName();
    this.health = setHealth();
    this.attack = setAttackEnemy();
}


function fight(enemy) {
    while (user.health > 0 || enemy.health > 0) {
        console.log("Your health is:" +
            user.health + "\nEnemy health is: " + enemy.health);

        enemy.health -= user.attack;
        user.health -= enemy.attack;
        if (enemy.health <= 0) {

            console.log("You won the battle!! What a surprise I totally thought you were gonna die. Your health is now at: " + user.health);
            itemGen();
            return;

        } else if (user.health <= 0) {
            console.log("You have lost! Your family has been disgraced. Go to the next world knowing your a failure.");
        }
    }
}




//function enemyCreation() {
//    var newEnemy = Enemy();
//}
