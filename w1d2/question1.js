/*Write a JavaScript program that ask a user for a volume in quarts then converts that value in
liters.*/
const prompt = require ('prompt-sync')();
let input = +prompt("Please enter a quarts value that need to convert: ");
const stand = 0.95;
let result = input * stand;
console.log(`${input} quarts = ${result} litters`);
