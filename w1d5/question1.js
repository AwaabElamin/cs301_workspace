/*
1. checkPrime
    a. Write a function named checkPrime that accepts a parameter and returns true 
        if the argument is a prime number otherwise returns false.
    b. Now write a program that prompts user to input a number and calls the function checkPrime 
    to see if the entered number is a prime number or not
*/
"use strict"
function checkPrime(num) {

    if (num === 2) {
      return true;
    } else if (num > 1) {
      for (let i = 2; i < num; i++) {
  
        if (num % i !== 0) {
          return true;
        } else if (num === i * i) {
          return false
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  
  }
  let prompt =  require("prompt-sync")();
  let userInput = +prompt("Please Enter a number to check if it is a prime: ");
  let isPrime = checkPrime(userInput);
  if (isPrime) {
    console.log(`${userInput} is a prime number` );
  }else{
    console.log(`${userInput} is not a prime number` );  
  }
  