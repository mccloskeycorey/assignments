var str = "ggggggggxkljfvlsjkfg";

function findNoRepeat(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "g") {
            console.log("nope not yet");
        } else {
            console.log("you did it stupid way but it works");
            return str[i];
        }
    }
}

console.log(findNoRepeat(str));
