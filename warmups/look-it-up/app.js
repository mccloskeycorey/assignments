// In efficient algorithm

//var dictionary = ['a', 'b', 'c'];
//
//function isWorkINDictionary(word, dictionary) {
//    return dictionary.forEach(function (currentWord) {
//        var val = false;
//        if (word === currentWord) {
//            return true;
//        }
//    })
//    return val;
//}
//
//console(isWorkINDictionary('b', dictionary));


var dictionary = [];

function isWorkINDictionary(word, dictionary) {
    return dictionary.forEach(function (currentWord) {
        var val = false;
        if (word === currentWord) {
            return true;
        }
    })
    return val;
}

console(isWorkINDictionary('b', dictionary));
