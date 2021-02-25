/*
Write a JavaScript program to compute sum of all the digits in a given integer number
Input Output
123     6
102     3
8       8
*/
let prompt = require("prompt-sync")();
let userNumber = +prompt("Please enter a number to sum its digits: ");
let digits = 0, sum = 0;
while (userNumber != 0) {
    digits++;
    sum += (userNumber % 10);
    userNumber = Math.floor(userNumber / 10);
}
console.log(`The sum of the digits is ${sum}`);