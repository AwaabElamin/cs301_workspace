/*
Write a JavaScript program that gives the user three tries to guess the correct pin of the
account. You set the pin as a constant. When correct display “Correct, welcome back.” When
incorrect display “Incorrect, try again.”. When run out of tries display “Sorry but you have been
locked out.
*/
let prompt = require("prompt-sync")();
let inputPin = +prompt("Please enter the PIN number: ");
const PIN = 1982;
let index = 0;
while (index < 3) {
    if (inputPin == PIN) {
        console.log("Correct, welcome back.");
    }else{
        inputPin = +prompt("Incorrect, try again: ");
        index++;
    }
}
if (index ==3) {
    console.log("Sorry but you have been locked out.");
}
