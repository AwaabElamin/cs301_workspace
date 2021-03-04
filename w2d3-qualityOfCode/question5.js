/*
Write a function to find LCM of any two numbers using the HCF function from previous
question. Write it as a function expression.
a. Now write a program that asks two numbers from the user and displays HCF and LCM of
the two numbers.
Hint: search for relation between HCF and LCM.
*/
"use strict";
let hCF = function(num1, num2){
    let returnValue = undefined;
    for (let i = 1; i <= num1 && i <= num2; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            returnValue = i;
        }
    }
    return returnValue;
};
let lCM = (num1,num2) => (num1 * num2) / hCF(num1,num2);

// let prompt = require("prompt-sync")();
// let num1 = +prompt("Please enter the first number: ");
// let num2 = +prompt("and the second number: ");
// let hcf = hCF(num1,num2);
// let lcm = lCM(num1,num2);
// console.log(`The HCF of ${num1}, ${num2} is ${hcf}
// and the LCM is ${lcm}`);

module.exports = {hCF,lCM};