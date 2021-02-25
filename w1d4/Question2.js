/*
Write a Java program to calculate the factorial value of a given number.
E.g., factorial 4 = 4*3*2*1 = 24
*/
prompt = require("prompt-sync")();
let num = +prompt("Please enter a number to calculate the factorial value of it: ")
let sum = 1;
for (let index = 2; index <= num; index++) {
    sum *= index;    
}
console.log(sum);