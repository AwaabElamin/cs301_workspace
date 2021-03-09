"use strict";

/**
 * 
 * @param {number} num number
 * @return {number} number of digit in num 
 */
function countDigits(num){
    if (num === 0) {
        return 0;
    }
    return 1+ countDigits(parseInt(num /10)) ;
}

/**
 * 
 * @param {string} str string
 * @return {string} str after reversed
 */
function reverse(str){
    if (str === "") {
        return "";
    }
    return reverse(str.substr(1)) + str[0];
}

/**
 * 
 * @param {number} base number that shoul multyply pow times
 * @param {number} pow power that base should multiply
 * @returns {number} result of base * pow numbers
 */
function power(base, pow){
    if (pow === 0) 
   {
    return 1;
    }
  else 
  {
    return base * power(base, pow-1);
  }
}
//console.log(power(10,4));
module.exports = {countDigits, reverse, power};