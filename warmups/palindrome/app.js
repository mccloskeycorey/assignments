// I want function to return true or false if the string is a palindrome

function isPalindrome(str) {
    str = str.toLowerCase();
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "!" || str[i] === "," || str[i] === "?" || str[i] === " ") {
            //            console.log(str);
            str = str.replace(str[i], "");
            i--;
        }
    };
    for (var i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}



console.log(isPalindrome("aba"));
console.log(isPalindrome("Star Rats!")); // true  
console.log(isPalindrome("palindrome")); // false  
console.log(isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!"));
