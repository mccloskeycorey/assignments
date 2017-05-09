function fixTeen(n) {
    if (n === 16 || n === 15) {
        return n;
    }
    if (n <= 12 || n >= 20) {
        return n;
    }
    if (n >= 13 || n <= 19) {
        return 0;
    }
}


function noTeenSum(a, b, c) {
    a = fixTeen(a);
    b = fixTeen(b);
    c = fixTeen(c);
    return a + b + c
}

console.log(noTeenSum(1, 2, 3));
console.log(noTeenSum(2, 13, 1));
console.log(noTeenSum(2, 1, 14));
console.log(noTeenSum(2, 15, 14));
