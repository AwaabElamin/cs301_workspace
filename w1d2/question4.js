/*
Write JavaScript program to compute the mileage of a vehicle. 
Your program should allow the user to enter the beginning and ending odometer readings 
and the number of gallons of gas used 
and should output the mileage in miles per gallon. 
*/
const prompt = require ('prompt-sync')();
let beginningOdometer = +prompt("Please enter the odometer reading in the beginning: ");
let endingOdometer = +prompt("Please enter the odometer reading in the ending: ");
let gasUsed = +prompt("Please enter the number of gallons of gas used: ");

let miles = endingOdometer - beginningOdometer;
let result = miles / gasUsed;
console.log(`The mileage is ${result} miles per gallon`);