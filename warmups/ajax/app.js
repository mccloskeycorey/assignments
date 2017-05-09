var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr chr.status === 200) {
        document.getElementById("data").textContent = < jadadadafsafddsdfsdfeafseddaddsdd
    }
}

xhr.open("GET", "https://coursework.vschool.io/postman-pokestuff/", true);
xhr.send();

if (xhr.readyState === 4 && xhr.status)


    // how to make a ajax call
    if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        console.log(data);
        var resultsText = "";
        for (var prop in data) {
            resultsText += "<h3>" + prop + ": " + data[prop] + "</h3>"
        }
        document.getElementById("results").innerHTML = resultsText;
    }
``
`Primitive/Immutable/Pass by Value Types
 ------------------
 String
 Number
 Boolean
 undefined
 NaN
 null

 Reference/Mutable/Pass by Reference Types
 ------------------
 Array
 Object

var myString = "happy birthday";
myString = myString + "!";
console.log(myString);

var fruits = ["apple", "banana", "orange"];
fruits[0] = "mango";
console.log(fruits);

var myCar = {  
    year: 2002,
    make: "Toyota",
    model: "Camry"
}
console.log(myCar.year)  // prints 2002  
myCar.year = 2016;  
console.log(myCar.year) // prints 2016

var a = [30];
var b = a;
a.splice(0, 1, "lol");
//console.log(b); 
a = [40];
console.log(b);
console.log(a);

var person = {  
    name: "Susan",
    age: 43,
    eyeColor: "blue"
};
var another = person;  
person.age++;  
console.log(another.age);  
another.age++  
console.log(person.age);

var person = {  
    name: "Susan",
    age: 43,
    eyeColor: "blue"
};

var another = {};
another.age = person.age;
person.age++;
console.log(another.age);

`
``

[3: 14]
Data Types Notes

    [3: 15]
``
`var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    // Add elements to the DOM
    // OR
    // Do SOMETHING with the data I asked for
    if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        console.log(data);
        document.getElementById("results").innerHTML = "<h1>" + data.name + "</h1><h3>" + data.birth_year + "</h3><h3>" + data.eye_color + "</h3>"
    }
}
xhr.open("GET", "http://swapi.co/api/people/1/");
xhr.send();`
`` /
Synchronous vs.asynchronous
//
//
//
//setTimeout(function(){
//    console.log("Yay");
//}, 2000);
//
////
////for (var i = 0; i < 1000000; i++) {
////    console.log(i);
////}
//
//// Functions are considered "first class" in JavaScript
//
////Strings
////Booleans
////Numbers
////Array
////Objects
////Function
//
//function hammer() {
//    console.log("Swing at the nail!");
//}
//
//function saw() {
//    console.log("Cut the wood");
//}
//
//function useToolWithDelay(tool, timeToWait) {
//    // Do a bunch of really cool coding here
//    // Then, whenever you're ready (maybe wait for "timeToWait" amount of time):
//    tool();
//}
//
//useToolWithDelay(saw, 2000);
//
//
//function sayHi() {
//    
//}
//
//var sayHi = function() {
//    
//}
//
//
//var person = {
//    name: "June",
//    speak: function() {
//        console.log("My name is June");
//    }
//}
//
//function getData(callback) {
//    for (var i = 0; i < 1000000; i++) {
//        if(i === 500000) {
//            callback(data);
//        }
//    }
//}
//
//function processData(data) {
//    console.log(data);
//}
//
//getData(processData);


// Higher order function examples

//var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var fruits = ["apple", "banana", "orange"];

//numbers.forEach(function(num) {
//    console.log(num * 2);
//});


//Array.prototype.bobsForEach = function(callback) {
//    for (var i = 0; i < this.length; i++) {
//        callback(this[i]);
//    }
//}
//
//fruits.bobsForEach(function(fruit) {
//    if (fruit === "orange") {
//        console.log(fruit + " is my favorite");
//    } else {
//        console.log(fruit + "s are just kinda okay");
//    }
//});

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var odds = numbers.filter(function (num) {
    return num % 2 === 0;
});

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

//var oldies = voters.filter(function(person) {
//    return person.age > 24;
//});
//
//console.log(oldies);

var older = voters.map(function (person) {
    return person.age;
});

console.log(older);

//console.log(evens);

// Aside - falsey values:
// false
// 0
// ""
// undefined
// null
// NaN
