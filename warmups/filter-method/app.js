/*
 * Given an array of integers, return an array that
 * only includes the odds from the original array.
 * You must use Array.prototype.filter
 *
 * E.g. odds([1, 2, 3, 4, 5])  => [1, 3, 5]
 * */

function odds(nums) {
    var odds = nums.filter(function (p1) {
        return (nums % 2) === 1;
    });
};

console.log(odds([1, 2, 3, 4, 5]))