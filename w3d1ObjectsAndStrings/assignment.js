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
function titleCase(str){
    let words = str;
    words = words.split(" ");
    for (let word of words) {
       word = word.split("");
       word[0] = "s";
        console.log(word);
    }

    return words;
}
module.exports = { countProperties, checkSpam, suffix, titleCase };
console.log(titleCase("awaab elamin"));