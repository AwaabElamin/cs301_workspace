"use strict";
/**
 * Write a function, isArrayEqual, 
 * that returns true if two arrays have === elements, else returns false.
 * @param {array} arr1 first array
 * @param {array} arr2 second array
 * @returns {boolean} true if equal else false
 */
function isArrayEqual(arr1, arr2) {
    let returnResult = true;
    if (arr1.length === arr2.length) {
        for (let i = 0; i < arr1.leng1; i++) {
            if (arr1[i] !== arr2[i]) {
                returnResult = false;
                break;
            }
        }
    } else {
        returnResult = false;
    }
    return returnResult;
}
/**
 * 1.Write a function addend(arr) that accepts an array of numbers as parameters 
 * and returns the sum of first and last elements of the array.
 * @param {[]} numbers is array of numbers
 * @return {number} sumission of first and last number on the array 
 */
function addend(numbers) {
    return numbers[0] + numbers[numbers.length - 1];
}

/** 2.Write a function named getMiddle that returns the value of the middle element in an array.
 * If the array has an even number of elements, then this function must return the average 
 * of the two middle elements. 
 * @param {[]} numbers is array of numbers
 * @returns {number} the number in the middle of the array
 */
function getMiddle(numbers) {
    if (numbers.length % 2 === 0) {
        let middlePosition = numbers.length / 2;
        let firstMidNumber = numbers[middlePosition];
        let secondNumber = numbers[middlePosition - 1];
        return (firstMidNumber + secondNumber) / 2;
    } else {
        let middlePosition = Math.floor(numbers.length / 2);
        return numbers[middlePosition];
    }
}
/**
 * 
 * @param {number} arrayOfNumbers array of numbers
 * @returns {Array} array elements after rotate left
 */
function rotateLeft(arrayOfNumbers) {
    let rotatedNumber = arrayOfNumbers.shift();
    arrayOfNumbers.push(rotatedNumber);
    return arrayOfNumbers;
}

/**
 * 
 * @param {number} arrayOfNumbers array of numbers
 * @returns {Array} array elements after rotate right
 */
function rotateRight(arrayOfNumbers) {
    let rotatedNumber = arrayOfNumbers.pop();
    arrayOfNumbers.unshift(rotatedNumber);
    return arrayOfNumbers;
}

/**
 * 
 * @param {number} arrayOfNumbers array contains numbers
 * @param {number} numberOfRotate times of shift
 * @return {[]} array after rotated
 */
function rotateNRight(arrayOfNumbers, numberOfRotate) {
    let result = arrayOfNumbers;
    for (let i = 0; i < numberOfRotate; i++) {
        result = rotateRight(result);
    }
    return result;

}
/**
 * 
 * Given an expression array exp, write a program to examine whether the pairs and 
 * the orders of “{“, “}”, “(“, “)”, “[“, “]” are correct in exp.
 * Example:
 *       Input: exp = ["(", ")", "[", "{", "}", "]"]
 *       Output: Balanced
 *       Input: exp = ["[", "(", "]", ")"]
 *       Output: Not Balanced
 * @param {number} arr array of numbers
 * @return {string} 'Balanced' or 'Not Balanced'
 */
function exp(arr) {
    let openSymbols = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "(" || arr[i] === "[" || arr[i] === "{") {
            openSymbols.push(arr[i]);
        } else if (arr[i] === ")" || arr[i] === "]" || arr[i] === "}") {
            if (openSymbols.length === 0) {
                return "Not Balanced";
            } else {
                if (openSymbols[openSymbols.length - 1] === "(" && arr[i] !== ")") {
                    return "Not Balanced";
                } else if (openSymbols[openSymbols.length - 1] === "[" && arr[i] !== "]") {
                    return "Not Balanced";
                } else if (openSymbols[openSymbols.length - 1] === "{" && arr[i] !== "}") {
                    return "Not Balanced";
                }
                openSymbols.pop();
            }
        }
    }
    if (openSymbols.length === 0) {
        return "Balanced";
    } else {
        return "Not Balanced";
    }

}

/**
 * Write a function that merges two sorted arrays into one single sorted array. 
 * Make use of shift and push array methods.
 * @param {Array} firstArray contains array of numbers
 * @param {Array} secondArray contains array of numbers
 * @return {array} merged and sorted an array
 */
function mergeTwoSortedArray(firstArray, secondArray) {
    let result = [];
    let firstlength = firstArray.length;
    for (let i = 0; i < firstlength; i++) {
        result.push(firstArray.shift());
    }
    let secondLength = secondArray.length;
    for (let i = 0; i < secondLength; i++) {
        result.push(secondArray.shift());
    }
    return result.sort((first, second) => first - second);
}

/**
 * Write a function that transforms a given array as following. 
 * Use appropriate array methods.
 *      Input (Array)                            Output (String)
 * ['Quick', 'Brown', 'Fox']                    "Fox_Brown_Quick"
 * @param {Array} arr is array that contains words
 * @returns {string} return transformed words
 */
function reverse2String(arr) {
    arr.reverse();
    let result = "";
    result = arr.shift();
    while (arr.length != 0) {
        result += "_" + arr.shift();
    }
    return result;
}

/**
 * Write a JavaScript function named enhancedIncludes that takes two parameters, 
 * an array, and a value to search in the array 
 * and return an array result with three values.
 *  a. First value is boolean representing if the search value exists in the array.
 *  b. Second value is the first index of value found in the array or -1
 *  c. Third value is the last index of value found in the array or -1.
 * @param {array} arr contains elements
 * @param {number} searchingValue to search in the array
 * @returns {array} array contains {true|flase, indexNumber| -1, indexNumber|-1} 
 */
function enhancedIncludes(arr, searchingValue) {
    let number = (item) => item === searchingValue;
    let secondValue = arr.findIndex(number);
    let isExist = false;
    let lastIndex = -1;
    if (secondValue > 0) {
        isExist = true;
       lastIndex = arr.indexOf(searchingValue,secondValue +1);
    }
    return [isExist,secondValue,lastIndex];
}
//let firstArray = [1, 2, 3,2];
//let secondArray = [5, 9, 7, 6];
//console.log(enhancedIncludes(firstArray,2));
module.exports = {
    isArrayEqual, addend, getMiddle, rotateLeft, rotateRight,
    rotateNRight, exp, mergeTwoSortedArray, reverse2String, enhancedIncludes
};
