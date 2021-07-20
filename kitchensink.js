"use strict";
exports.__esModule = true;
// Name Variable
var marques = 'Marques';
// Number of States
var stateNum = 50;
// Algorithm results
var results = 5 + 4;
// Say Hello function
function sayHello(value) {
    console.log(value);
}
// Call say hello function
sayHello('Hello World!');
// Check age function
function checkAge(name, age) {
    if (age < 21) {
        console.log("Sorry " + name + ", you aren't old enough to view this page!");
    }
}
// Call checkAge
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);
// Vegetables array
var vegeta = ["Burdock", "Carrot", "Radish", "Broccoli"];
console.log(vegeta);
// Pet object
var pet = { name: "roofus", breed: "pitbull" };
// Display object
console.log(pet);
// Avengers Object
var avengers = [
    { name: "Steve", age: 102 },
    { name: "Tony", age: 55 },
    { name: "Bruce", age: 37 },
    { name: "Carmen", age: 20 },
    { name: "Isaiah", age: 17 }
];
// For loop
var i;
for (i = 0; i < avengers.length; i++) {
    console.log(avengers[i]);
}
// getLength function
var sample = "HelloWorld!";
var result = getLength();
function getLength() {
    return sample.length;
}
if (result % 2 == 0) {
    console.log("The world is nice and even!");
}
else {
    console.log("The world is an odd place!");
}
