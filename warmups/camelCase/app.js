//function camelCase(str) {
//    for (var i = 0; i < str.length; i++) {
//        if (str[i] === " " || str[i] === "_" || str[i] === "-") {
//            var nextLetter = str[i + 1];
//            nextLetter = nextLetter.toUpperCase();
//            str = str.replace(nextLetter, nextLetter);
//            str = str.replace(" ", "");
//            str = str.replace("_", "");
//            str = str.replace("-", "");
//
//            console.log(str)
//        }
//    }
//}
//
//
//camelCase("hello_world-good day");


function camelCase(str) {
    var underScore = "_";
    var hyphen = "-";
    var space = " ";
    var newString = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] === underScore || str[i] === hyphen || str[i] === space) {
            let char = str[i];
            newString += char.toUpperCase();
            i++;
        } else {
            newString += str[i];
        };
    };
    console.log(newString);
    return;
}

camelCase("hello_world-good day");
