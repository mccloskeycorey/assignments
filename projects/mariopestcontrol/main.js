var goombaCost = 5;
var bobombCost = 7;
var cheepCost = 11;
var numberOfGoomba = document.getElementById("caughtGoomba");
var numberOfBobomb = document.getElementById("caughtBobomb");
var numberOfCheeps = document.getElementById("caughtCheep");

function totalGoomba() {
    document.getElementById("totalGoombaCost").innerHTML = goombaCost * numberOfGoomba.value;
}

function totalBobomb() {
    document.getElementById("totalBobombCost").innerHTML = bobombCost * numberOfBobomb.value;
}

function totalCheep() {
    document.getElementById("totalCheepCost").innerHTML = cheepCost * numberOfCheeps.value;
}

function totalOfAll() {
    document.getElementById("finalTotal").innerHTML = (goombaCost * numberOfGoomba.value) + (goombaCost * numberOfGoomba.value) + (cheepCost * numberOfCheeps.value);
}
