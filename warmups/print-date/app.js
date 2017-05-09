//function findingTheDay(date) {
//    var months = [
//    "January", "February", "March",
//    "April", "May", "June", "July",
//    "August", "September", "October",
//    "November", "December"
//  ];
//
//    var day = date.getDate();
//    var monthIndex = date.getMonth();
//    var year = date.getFullYear();
//    var hours = date.getHours();
//    var minuts = date.getMinutes();
//
//    return day + " " + hours + " " + minuts + " " + months[monthIndex] + " " + year;
//}
//
//console.log(findingTheDay(new Date()));


var d = new Date();
var day = d.getDay();
var ampm = d.getHours() < 12 ? "am" : "pm";
var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
var currentTime = d.toLocaleDateString();

console.log("current time is: " + currentTime);



//console.log("current time is: " + time + " " + ampm);
