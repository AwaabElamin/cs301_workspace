/*
Write a defining table and JavaScript program to Display Fibonacci series up to N terms. 
N being positive integer from user input. 
The Fibonacci series is a sequence such that each number is the sum of the two preceding ones,
starting from 0 and 1. That is, fib(0) = 0, fib(1) = 1, fib(n) = fib(n – 1) + fib(n – 2) for n > 1.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
*/
/*
                    defining table
Input               process                                  Output
N value             firstNumber = 0                         Fibonacci series  
                    secondNumber = 1
                    Loop through the numbers
                    from 1 to N and do:
                      -print firstNumber
                      -adding firstNumber to secondNumber, 
                        then store the result to next.
                      -assign value of secondNumber to firstNumber
                      -assign value of next to secondNumber  
*/
let prompt = require("prompt-sync")();
const N = +prompt('Enter the number of terms: ');
let firstNumber = 0, secondNumber = 1, next;
let row = `Fibonacci Series for ${N} is `;
for (let index = 1; index <= N; index++) {
    row += `${firstNumber}, `;
    next = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = next;
}
console.log(row);