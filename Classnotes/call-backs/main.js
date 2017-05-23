//// Synchronous vs. asynchronus
//
//// asynchronus
//
//// functions are considered "first calss" in Javascript
//
////strings
////Boolean
////Number
////Array
////Objects
////function
//// if you put parrentheses in the property at the end of the func tells it that you want it to stop and excute that first.
//// if you 
////function blah(func) {
////    // do some cool stuff
////    func()
////}
//
//function hammer() {
//    console.log("Swing at the nail!");
//}
//
//function saySaw() {
//    console.log("Cut the wood")
//}
//
//function useToolWithDelay(tool, timeToWait) {
//    // do some cool stuff (like wait for "timeToWait" amount of time)
//    console.log("About to use the tool")
//    setTimeout(tool, timeToWait)
//}
//
//useToolWithDelay(saw, 2000)
//
//
////setTimeout(sayHi, 500);
////
////console.log("I'm done with the code");
////
////for (var i = 0; i < 100000; i++) {
////    console.log(i);
////}


//
//function getData(callback) {
//    // Get the data via http
//    // Keep checking to see if the data has come back 
//    //    if (dataIsAvailable) {
//    //        callback(data)
//    //    }
//}
//
//function processData(data) {
//    // Stuff
//    console.log(data);
//}
//
//getData(processData);

//var myData = getData();




// Mongoose w/ Express and MongoDB

//function handleData(data) {
//    // Do something with the data form the database
//}
//Snowboards.find()


// Some examples of higher order functions

//var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//var fruits = ["banana", "apple", "oranges"];
//
//// Javascript built in way to do a for loop
//numbers.forEach(function (num) {
//    console.log(num);
//});
//
//
//numbers.forEach(function (num) {
//    console.log(num * 2);
//})
//
//Array.prototype.bobsForEach = function (callback) {
//    for (var i = 0; i < this.length; i++) {
//        callback(this[i]);
//    }
//}
//
//fruits.bobsForEach(function (fruit) {
//    if (fruit === "orange") {
//        console.log(fruit + " is my favorite");
//    } else {
//        console.log(fruit + "s are kinda okay");
//    }
//})



//Array.prototype.bobsforEach = function () {
//    console.log("LoL i HAckEd tha ArrAy ConStruCtoR!!!11!1");
//}
//
//numbers.bobsforEach();
//
//Array.prototype.bobsLogEveryItemFunction = function () {
//    for (var i = 0; i < this.length; i++) {
//        console.log(this[i]);
//    }
//}
//
//numbers.bobsLogEveryItemFunction();

//String.prototype.displayBackwards = function () {
//    backWards = "I wonder what this will look like backwards";
//    console.log();
//}
//
//String.prototype.displayBackwards();



var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var voters = [
    {
        name: "Sally",
        age: 30
    },
    {
        name: "Jim",
        age: 12
    },
    {
        name: "Brock",
        age: 42
    },
    {
        name: "Aaron",
        age: 65
    },
    {
        name: "Blake",
        age: 90
    },
    {
        name: "Denise",
        age: 23
    },
]

var oldies = voters.filter(function (person) {
    return person.age > 24;
});
var older = voters.map(function (person) {
    person.age++;
    return person.age;
})

console.log(oldies);

console.log(older);

var odds = numbers.filter(function (num) {
    return num % 2 === 0;
});



//var evens = numbers.filter(function (num) {
//    if (num % 2 === 0) {
//        return true;
//    } else {
//        return false;
//    }
//});


console.log(odds);
