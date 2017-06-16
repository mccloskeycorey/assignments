/*
 * Given an array of strings, return an object where the properties are one of the
 * strings, and the value is how many times that string appeared in the array
 *
 * E.g. var votes = ["angular", "react", "react"];
 *
 * countVotes(votes) => {angular: 1, react: 2}
 * */

// var votes = ["angular", "react", "react", "angular", "react", "ember", "vanilla", "angular", "react", "meteor", "angular"];
//
// function countVotes(arr) {
//     var totalVotes = arr.reduce(function (prev, current) {
//         for (key in votes) {
//             console.log(key + ": " + 1);
//         }
//     });
//     return totalVotes;
// }
//
// console.log(countVotes(votes));




// function countVotes(arr) {
//     return arr.reduce(function (prev, current) {
//         if (!prev.hasOwnProperty(current)) {
//             prev[current] = 0;
//         }
//         prev[current]++;
//         return prev;
//     }, {});
// }
//
// console.log(countVotes(votes));

var votes = ["angular", "react", "react", "angular", "react", "ember", "vanilla", "angular", "react", "meteor", "angular"];

function countVoutes(arr) {
    var totalVotes = arr.reduce(function (prev, current) {
        if(!prev[current]) {
            prev[current]++;
        } else {
            prev[current]++;
        }

    }, {});
    return totalVotes;
}

console.log(countVotes(votes));

