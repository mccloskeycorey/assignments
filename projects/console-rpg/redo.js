var readlineSync = require("readline-sync");

var name = readlineSync.question("Welcome to Grootland! A land full of beutiful and terrifying things. May I have your name brave traveler? So I may pray for your safe return.");
user = new User(name);
enemy = new Enemy();
while (user.health >= 0) {
    var input = readlineSync.question("To continue press 'w', or to check your inventory press 'p'.").toLowerCase();
    if (input === "w") {
        walk()
    } else if (input === "p") {
        user.print();
    }
}

var myRandom = Math.random()

function walk() {
    var possibility = Math.random();
    if (possibility <= .33) {
        // Finish the enemyCreation

        var action = readlineSync.question("What are you going to do 'f' for fight, or 'r' for run").toLowerCase();
        if (action === "f") {
            fight();
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
        console.log(user.name + " " + user.health);
    }
}
// create 1 of 3 enemys
function Enemy() {
    this.name = function () {
        if (myRandom <= .33) {
            this.name = "Orc";
        } else if (myRandom <= .66) {
            this.name = "Dark Elf";
        } else {
            this.name = "Carl";
        }
    };
    this.health = function () {
        if (Enemy.name === "Orc") {
            this.health = Math.floor(Math.random() * (30 - 15) + 15);
        } else if (enemy.name === "Dark Elf") {
            this.health = Math.floor(Math.random() * (45 - 35) + 35);
        } else if (enemy.name === "Carl") {
            this.health = Math.floor(Math.random() * (55 - 35) + 35);
        }
    };
    this.attack = function () {
        if (Enemy.name === "Orc") {
            this.attack = Math.floor(Math.random() * (15 - 5) + 5);
        } else if (Enemy.name === "Dark Elf") {
            this.attack = Math.floor(Math.random() * (30 - 25) + 25);
        } else if (Enemy.name === "Carl") {
            this.attack = Math.floor(Math.random() * (45 - 35) + 35);
        }
    }

}


function fight() {
    while (user.health >= 0 || enemy.health >= 0)
        enemy.health -= user.attack;
    user.health -= enemy.attack;
    if (enemy.health <= 0) {
        console.log("You won the battle!! What a surprise I totally thought you were gonna die.");
    } else if (user.health <= 0) {
        console.log("You have lost! Your family has been disgraced. Go to the next world knowing your a failure.");
    }

}


//function enemyCreation() {
//    var newEnemy = Enemy();
//}
