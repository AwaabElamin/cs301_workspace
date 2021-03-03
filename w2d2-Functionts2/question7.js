/*
Write a function "compute", that takes three parameters. 
First parameter is a call back a function that does the actual operation, 
second and third are the operands.
For e.g., compute (add, 2,3) should return 5
    - Write compute function as a function expression.
    - Write add function as a function expression 
        and call compute passing add as a callback.
        o Refactor to pass add logic as an anonymous function. (Make a copy first)
        o Refactor to pass add logic as an arrow function. (Make a copy first)
*/
// function add (num1,num2){
//     return num1 + num2;
// }
// function compute(add,num1,num2){
//     return add(num1,num2);
// }
// console.log(compute(add,2,3));

// let a = function add(num1, num2) {
//     return num1 + num2;
// }
// let b = function compute(add, num1, num2) {
//     return add(num1, num2);
// }
// console.log(b(a, 2, 3));

// let add = function(num1,num2){
//     return num1 + num2;
// }
// let compute = function(add,num1,num2){
//     return add(num1,num2);
// }
// console.log(compute(add,2,3));

let add = (num1,num2) => num1 + num2;
let compute = (add,num1,num2) => add(num1,num2);
console.log(compute(add,2,3));