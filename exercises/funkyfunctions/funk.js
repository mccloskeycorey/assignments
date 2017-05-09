// function 1 from functions exercise.
//function sumOfTwo(num1, num2) {
//    return num1 + num2;
//}
//
//console.log(sumOfTwo(45, 48));

//// function 2 of functions exercise.
//function greaterOfTheThree(bezhig, niizh, niswe) {
//    if (bezhig >= niizh && bezhig >= niswe) {
//        return bezhig;
//    } else if (niizh >= niswe && niizh >= bezhig) {
//        return niizh;
//    } else {
//        return niswe;
//    }
//}
//
//console.log(greaterOfTheThree(466, 2945754, 28455));

// function 3 of functions exercise.
//function evenOdd(numberInQuestion) {
//    //    var evenNumber = numberInQuestion === 0;
//    //    var oddNumber = numberInQuestion === 1;
//    if (numberInQuestion % 2 === 0) {
//        return "even";
//    } else {
//        return "odd";
//    }
//}
//
//console.log(evenOdd(33));
//console.log(evenOdd(36));

function theString(stringSplit) {
    if (stringSplit.length <= 20) {
        return stringSplit.repeat(2);
    } else {
        return stringSplit.slice(0, stringSplit.length / 2)
    }
}

console.log(theString("I really hope that I was able to figure things out this time! that is why this string is going to be longer than the index of 20", " "));
console.log(theString("lets try this", " "));


console.log(theString("I wonder if this will work or not?", " "));
console.log(theString("Now try this!!", " "));
console.log(theString("I think I may have done this problem wrong :0 And I might have to wait for class on Monday!", ""));
console.log(String("I, think, the, way, i, have, it, set, it, will, only, split, by, way, of, the, comma, ., So, I, tried,it, this, way, hahaha", ","));
console.log(theString("Oh Yeah I got this!!!", ""));



// always try to make the value or grab it later. ex input.value instead of var input = document.getElementById("input");
//var input = document.getElementById("input");
//var button = document.getElementById("button").addEventListener("click", function () {
//    input.value = "LOL YoU GoT hAcKeD!11!!";
//})
