//function func1(lyrics) {
//    return lyrics.slice()
//}
//
//
//
//console.log(func1(["This", "hit", "that", "ice", "cold",
//              "Michelle", "Pfeiffer", "that", "white",
//              "gold", "This", "one", "for", "them",
//              "hood", "girls", "Them", "good", "girls",
//              "straight", "masterpieces", "Stylin'",
//              "whilen'", "livin'", "it", "up", "in",
//              "the", "city", "Got", "Chucks", "on",
//              "with", "Saint", "Laurent", "Gotta", "kiss",
//              "myself", "I'm", "so", "pretty"]));
//
//function func2() {
//
//}

var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];

function upFunc1(lyrics) {
    var newWord = "";
    for (var i = 0; i < lyrics.length; i++) {
        var letsPrint = lyrics[i];
        newWord = newWord + " " + letsPrint
    }
    return newWord;
}

function upFunc2(lyrics) {
    var newWord = "";
    for (var i = 0; i < lyrics.length; i++) {
        var letsPrint = lyrics[i];
        newWord = letsPrint + " " + newWord
    }
    return newWord
}

function upFun3(lyrics) {
    var printOut = "";
    for (i = 0; i < lyrics.length; i++) {
        var newLyric = lyrics[i];
        if (i % 2 === 0) {
            printOut += " " + newLyric;
        }
    }
    return printOut;
}
// Did not do this is mikes i just kinda put this down for notes.
//function upFunc4(lyrics) {
//    for (i = 0; i < lyrics.length; i += 2) {
//        process.stdout.write(lyrics[i + 1] + " " + lyrics[i] + " ");
//    }
//}

// This one is Jordans i just put it down so i had a few notes to look at!
function upFunc4(lyrics) {
    var printOut = " ";
    for (var i = 0; i < lyrics.length; i++) {
        var newLyric = lyrics[i];
        var reverseOrder = lyrics[i + 1];
        if (i % 2 === 0) {
            printOut += " " + reverseOrder + " " + newLyric;
        }
    }
    return printOut;
}


console.log(upFunc1(lyrics));

console.log(upFunc2(lyrics));

console.log(upFun3(lyrics));

console.log(upFunc4(lyrics));
