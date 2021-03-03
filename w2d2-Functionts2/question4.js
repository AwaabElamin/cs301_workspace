/*
Write a function to compute HCF of two numbers. Write it as a function expression.
*/

let hCF = (num1, num2) => {
    let returnValue = undefined;
    for (let i = 1; i <= num1 && i <= num2; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            returnValue = i;
        }
    }
    return returnValue;
}

console.log(hCF(12,13));
