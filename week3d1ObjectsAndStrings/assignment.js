"use strict";

/**
 * Write the code, one line for each action:
 *  a. Create an empty object car
 *  b. Add the property name make with value Toyota
 *  c. Add the property name model with value Camry
 *  d. Print the object
 *  e. Without modifying the code structure of the object, 
 *      change the value of the model to RAV4.
 *  f. Print the object
 *  g. Without modifying the code structure of the object, 
 *      Remove property make from the object
 *  h. Print the object
 */
let car = {};
car.make = "Toyota";
car.model = "Camry";
console.log(car);
car.model = "RAV4";
console.log(car);
delete car.make;
console.log(car);

/**
 * Write the function countProperties(obj) 
 * which returns number of properties of an object.
 * @param {object} obj contains an object refrence
 * @returns {number} number of properities
 */
function countProperties(obj) {
    return Object.keys(obj).length;
}

/**
 * Write a function checkSpam(str) 
 * that returns true if str contains text "lottery" or "prize", 
 * otherwise return false.
 * @param {string} str is string 
 * @returns {boolean} true if str contains "lottery" or "prize"
 */
function checkSpam(str) {
    let result = false;
    let words = str.split(" ");
    for (const word of words) {
        if (word.toLowerCase() === "lottery" || word.toLowerCase() === "prize") {
            result = true;
            break;
        }
    }
    return result;
}

/**
 * Write a function named suffix 
 * that returns the common suffix of two strings. 
 * For example, the common suffix of “swimming” and “walking” is “ing”. 
 * This function takes two parameters and returns the common suffix.
 * @param {string} word1 first word
 * @param {string} word2 second word
 * @returns {string} common sufix
 */
function suffix(word1, word2) {
    let result = "";
    let first = word1.split("").reverse();
    let second = word2.split("").reverse();
    for (let i = 0; i < first.length; i++) {
        if (first[i].toLowerCase() === second[i].toLowerCase()) {
            result += first[i].toLowerCase();
        } else {
            break;
        }
    }
    result = result.split("").reverse().join("");
    return result;
}

/**
 * Write a function named titleCase with one parameter named s. 
 * This function returns a copy of s 
 * but with the first letter of each word capitalized.
 * @param {string} str string of letters
 * @returns {string} return str with the first letter capital
 */
function titleCase(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        let temp = words[i].split("");
        temp[0] = temp[0].toUpperCase();
        words[i] = temp.join("");
    }
    return words.join(" ");
}

/**
 * 
 * @param {Array} users array of objects with two properties name and age
 * @return {number} the average age
 */
function getAverageAge(users) {
    let average = 0;
    users.forEach(user => average += user.age);
    // for (let i = 0; i < users.length; i++) {
    //     average += users[i].age;        
    // }
    return average / users.length;
}

/**
 * Write a swap function that takes two parameters of number type 
 * and swap the values of the passed parameters. 
 * @param {number} num1 first number
 * @param {number} num2 second number
 * @returns {undefined}
 */
// function swap(num1, num2) {
//     let temp = num1;
//     num1 = num2;
//     num2 = temp;
// }
// let firstNumber = 5;
// let secondNumber = 7;
// console.log(firstNumber,secondNumber); // 5, 7
// swap(firstNumber,secondNumber);
// console.log(firstNumber,secondNumber);
module.exports = { countProperties, checkSpam, suffix, titleCase, getAverageAge };
//console.log(getAverageAge([{name:"abc", age:20},{name:"xyz", age:10}]));