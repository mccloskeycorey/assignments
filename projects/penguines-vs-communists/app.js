//Create two parties (Create a Javascript constructor function and use the new keyword to instantiate the parties)
//Each party has a name ("Penguins" and "Communists" - or whatever you want)
//
//Each party has a starting population of 1,000,000


function Team(name, population) {
    this.name = name;
    this.population = population;
}

penguins = new Team("Penguins", 1000000);

communists = new Team("Communists", 1000000);

//Flip a coin (random number between 1 and 2) to see which party attacks first

function coinFlip () {
    var flip = Math.floor(Math.random() * 2 + 1);
    if (flip === 1) {
        console.log("The Penguins won the coin toss! Now lets see if they will hit.");
        sendNuke(communists, onMiss, onHit);
    } else {
        console.log("The Communists won the coin toss! Now lets see if they will hit.");
        sendNuke(penguins, onMiss, onHit);
    };
}

//Create a function called sendNuke(party, onHit, onMiss) where:
//the first parameter party is the Javascript object of the party that will be attacked
//the second parameter onHit is a callback function that will be called if the attack is successful
//the third parameter onMiss is a callback function that will be called if the attack is unsuccessfu



function sendNuke(party, onMiss, onHit) {
    if(Math.random() < .4) {
        onHit(party);
    } else {
        onMiss(party);
    };
}


//the onHit and onMiss functions each take one parameter of type party (just forwarding the party you already passed into sendNuke)
//Print messages in the callbacks that are appropriate - e.g. if the attack missed then it would log "The Penguins' nuke missed the Communists and instead landed in the ocean" or something along those lines

function ranNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1))
}

function onHit(party) {
    party.population -= ranNum(10000, 200000);
    console.log(party.name + " got nuked and have " + party.population + " population left.");
}

function onMiss(party) {
    console.log(party.name + " Missed and still have " + party.population + " population left.");
}

while (penguins.population >= 0 && communists.population >= 0) {
    sendNuke(communists, onMiss, onHit);
    sendNuke(penguins, onMiss, onHit);
}

if(penguins.population <= 0) {
    console.log("The penguins have lost the battle.");
} else if(communists.population <= 0) {
    console.log("The Penguins have won! and are planning a victory party and you all are invited........... P.S. I hope you like fish?!");
}

//var flipCoin = Math.floor((Math.random() * 2 + 1))
//
//function Penguins() {
//    this.name = "Penguines";
//    this.population = 1000000;
//}
//
//penguins = new Penguins();
//
//function Communists() {
//    this.name = "Communists";
//    this.population = 1000000;
//}
//
//communists = new Communists()
//
//
//function onHit(party) {
//    party.population -= Math.floor((Math.random() * 180000 + 120000) + 1);
//    console.log(party.name + " was hit and now has a population of: " + party.population)
//}
//
//function onMiss(party) {
//
//}
//
//function sendNuke(party, onHit, onMiss) {
//
//}
