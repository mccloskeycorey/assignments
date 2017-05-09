var people = {
    name: "Jordan",
    age: 17,
    height: "6ft 3in",
    type: "Really smart",
    tryingToWriteThisOut: function () {
        console.log(this.name + " is " + this.age + " and " + this.height);
    },
    toHisRight: {
        name: "Mike",
        age: 173,
        height: "3ft 7in",
        type: "Crazy nice",
        tryingToWriteThisOut: function () {
            console.log(this.name + " is " + this.type);
        }
    }
}

var tetyanna = {
    name: "Tetyanna",
    height: "12ft 57in",
    type: "Incredibly fun to hangout with",
    friend: true,
    methodTime: function () {
        console.log(this.name + " is " + this.height + " I know crazy tall!");
    }
};

var teacher = {
    name: "Mark Dog",
    height: "3in",
    type: "An awsome teacher",
    friend: "Heck Yeah",
    letsDoAFuntion: function () {
        console.log(this.name + " runs crazy fast even tho " + this.name + " is " + this.height + " he still is " + this.type);
    }
};

var chair = {
    legs: 4,
    height: "2.5ft",
    color: "black",
    holes: function () {
        console.log("Why does a chair that is " + this.height + this.color + " with " + this.legs + " have holes in it?");
    }
};

var column = {
    height: 8,
    color: "white",
    decorated: true,
    annoying: function () {
        console.log("This giant " + this.height + " foot tall " + this.color + " column is really ANNOYING!!!!!");
    }
};

var computer = {
    type: "mac",
    screenSize: 13,
    reallyCool: function () {
        console.log("I have a " + this.type + " and its screen size is " + this.screenSize);
    }
};

var backPack = {
    color: ["Yellow", "black", "white"],
    pockets: 7,
    inside: ["beef sticks", "colored pens", "mechanical pencil"],
    mechanicalPencil: true,
    whatIf: function () {
        if (backPack.color = "green") {
            console.log("I have no sense of color");
        } else {
            console.log("My favorite color is bright green");

        }
    }
}

var leatherJacket = {
    color: "black",
    type: "Biker jacket",
    age: "Before I was born so I dont know",
    letsSee: function () {
        if (this.color === "gray") {
            return "I really must be color blind";
        } else {
            return "I work as a security gaurd and all I want to do is go home and code!";
        }
    }
}

var towel = {
    texture: "rough",
    dirty: true,
    favorite: false,
    color: function () {
        if (this.texture === false) {
            return "Why don't I use this towel more often?";
        } else if (this.favorite === true) {
            return this.texture + " towels make Corey sad " + this.dirty;
        } else {
            return "The color is teal";
        }
    }
}


people.tryingToWriteThisOut();
people.toHisRight.tryingToWriteThisOut();
tetyanna.methodTime();
teacher.letsDoAFuntion();
chair.holes();
column.annoying();
computer.reallyCool();
backPack.whatIf();
console.log(leatherJacket.letsSee());
console.log(towel.color());
