/*
 * Given an array of integers, return the product (multiplication) of
 * all the numbers in the array
 * */

function findProduct(arr) {
    var sum = arr.reduce(function (acc, current) {
        return acc * current
    });
    return sum
}

console.log(findProduct([2, 3,5,6,35,473]));



