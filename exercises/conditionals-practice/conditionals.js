function printLow(numOne, numTwo) {
    if (numOne > numTwo) {
        console.log(numTwo);
    } else if (numOne < numTwo) {
        console.log(numOne);
    } else {
        console.log('they are equal')
    }
}
printLow(3, 6);
printLow(18, 12);
printLow(6, 6);

function monkeyTrouble(aSmile, bSmile) {
    return aSmile === bSmile;
}

console.log("We are in trouble: " + monkeyTrouble(true, false));
function gettingTheDate(timeCurrent) {
    if (timeCurrent < 1159) {
        console.log("Good Morning");
    } else if (timeCurrent < 1600) {
        console.log("Good Aftenoon");
    } else {
        console.log("Good Evening")
    }
}

gettingTheDate(1455);
gettingTheDate(1732);
gettingTheDate(1021);
