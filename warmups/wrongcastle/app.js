// Make a constructor function with properties: name, totalCoin, status, star, setName, gotHit, gotPowerup, gameActive



// cunstructor
function Player() {
    this.name = this.setName;
    this.setName = function () {
        // Creating a function that has 1 of 2 possibilitys
        if (Math.random() <= .50) {
            namePicked = "Luigi";
        } else {
            namePicked = "Mario";
        }
    };
    this.totalCoins = 0;
    this.addCoin = function () {
        // We want to add coins to totalCoins
        this.totalCoins += 20;
    }
    this.status = "Small";
    this.gotPowerup = function () {
        // Create a function that checks the status and adds the power up
        if (this.status === "Small") {
            this.status = "Big";
        } else if (this.status === "Big") {
            this.status = "Powered Up";
        }
    };
    this.gotHit = function () {
        if (this.status === "Powered Up") {
            this.status = "Big";
        } else if (this.status === "Big") {
            this.status = "Small";
        } else if (this.status === "Small") {
            this.status = "Dead";
            this.gameActive = false;
        }
    };
    this.star = false;
    this.gameActive = true;
    this.print = function () {
        var properties = ["Powered Up", "Big", "Small", "Dead"];
        // write a functinon that prints to the console the name, totalCoins, status, and star properties.
        console.log("Name: " + this.name + "\nTotal Coins: " + this.totalCoins + "\nStatus: " + this.status + "\nStar Properties: " + properties);
    };
}

function ran() {
    var myRan = Math.floor(Math.random() * 3)
    for (var i = 0; i < 3; i++) {
        if (myRan === 0) {
            player.gotHit();
        } else if (myRan === 1) {
            player.gotPowerup();
        } else if (myRan === 2) {
            player.addCoin();
        }
    }
}

// name
var player = new Player();


player;
ran();
console.log(player)







// Jordans Way
//var player = {
//    name: "Mario",
//    totalCoins: 0,
//    status: "Small",
//    star: false,
//    setName: function (namePicked) {
//        this.name = namePicked
//    },
//    gotHit: function () {
//        if (this.status === "Powered Up") {
//            this.status = "Big"
//        } else if (this.status === "Big") {
//            this.status = "Small"
//        } else if (this.status === "Small") {
//            this.status = "Dead";
//            this.gameActive = false
//        }
//    },
//    gotPowerup: function () {
//        if (this.status === "Big") {
//            this.status = "Powered Up"
//        } else if (this.status === "Small") {
//            this.status = "Big"
//        }
//    },
//    gameActive: true,
//    addCoin: function () {
//        this.totalCoins++
//    },
//    print: function () {
//        console.log("\n\tName: " + this.name + "\n\tTotal Coins: " + this.totalCoins + "\n\tStatus: " + this.status + "\n\tStar: " + this.star + "\n")
//    }
//}
//
//function pickName() {
//    var pick = Math.random();
//    if (pick < .5) {
//        player.setName("Mario")
//    } else {
//        player.setName("Luigi")
//    }
//}
//
//function rand() {
//    var num = Math.floor(Math.random() * 3);
//    if (player.gameActive === false) {
//        console.log("\n\tGAME OVER\n");
//        return
//    }
//    if (num === 0) {
//        player.gotHit();
//        player.print();
//    } else if (num === 1) {
//        player.gotPowerup();
//        player.print();
//    } else if (num === 2) {
//        player.addCoin();
//        player.print();
//    }
//    if (player.status === "Dead") {
//        console.log("\n\tGAME OVER\n");
//        return
//    }
//}
//
//pickName();
//
//rand();
//rand();
//rand();
