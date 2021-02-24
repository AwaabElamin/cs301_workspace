/* Write a JavaScript program that asks a user for a distance in kilometers and then convert that
value in miles.*/
const prompt = require ('prompt-sync')();
let input = +prompt("Please enter a distance in kilometers that need to convert: ");
const stand = 0.62;
let result = input * stand;
console.log(`${input} kilometers = ${result} miles`);