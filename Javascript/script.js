"use strict";
/**
 * @returns {string} text that append to output
 */
function appendInputToOutput() {
    let input = document.getElementById("input").value;
    let output = document.getElementById("output").value;
    output += input;
    document.getElementById("input").value = "";
    document.getElementById("output").value = output;
}
let calculator = function (operator) {
    const firstNumber = document.getElementById("firstValue");
    const secondNumber = document.getElementById("secondValue");
    let num1 = parseFloat(firstNumber.value);
    let num2 = parseFloat(secondNumber.value);
    switch (operator) {
        case "+":
            document.getElementById("result").innerHTML = num1 + num2;
            break;
        case "-":
            document.getElementById("result").innerHTML = num1 - num2;
            break;
        case "x":
            document.getElementById("result").innerHTML = num1 * num2;
            break;
    }

}
/**
 * @returns {string} calculation of input
 */
function plus() {
    calculator("+");
}
/**
 * @returns {string} calculation of input
 */
function minus() {
    calculator("-");
}
/**
 * @returns {string} calculation of input
 */
function multiply() {
    calculator("x");
}
//console.log(appendInputToOutput());