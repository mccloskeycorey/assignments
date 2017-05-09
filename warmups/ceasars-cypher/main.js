//var readline = require('readline-sync');
//var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
//var shift = parseInt(readline.question('How many letters would you like to shift? '));
//var alphabet = "abcdefghijklmnopqrstuvwxyz"
//var result = "";
//for (var i = 0; i < input.length; i++) {
//    var charCode = input[i].charCodeAt();
//    if (charCode > "a".charCodeAt() && charCode < "z".charCodeAt())
//}




var readline = require('readline-sync');
var alphabet = "abcdefghijklmnopqrstuvwxyz";
console.log(alphabet.substr(4, 1));
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));
var result = "";
for (var i = 0; i < input.length; i++) {
    //    if (charcode < )
    var charcode = input[i].charCodeAt();
    if (charcode > 'a'.charCodeAt() && charcode < 'z'.charCodeAt()) {
        charcode += shift;
    }
    if (charcode > 'z'.charCodeAt()) {
        charcode -= 26;
    }
    result += String.fromCharCode(charcode);
}
console.log(result);



//
//var readline = require('readline-sync');
//var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
//var shift = parseInt(readline.question('How many letters would you like to shift? '));
//var alphabet = "abcdefghijklmnopqrstuvwxyz";
//
//function caesarShift(input, shift) {
//    var result = "";
//    for (var i = 0; i < input.length; i++) {
//        caesar = alphabet[(alphabet.indexOf(input[i]) + shift + 26) % 26]
//        result += caesar;
//    }
//    return result;
//}
//console.log(caesarShift(input, shift));
//
//



// Tolby
//var currLetter = "";
//for (var i = 0; i <= input.length; i++) {
//    currLetter = input.charAt(i);
//    var newLetter = String.fromCharCode(currLetter.charCodeAt() + shift);
//    console.log(newLetter);
//}


//function codedText(input, shift) {
//    onkeydown.return(input);
//}
