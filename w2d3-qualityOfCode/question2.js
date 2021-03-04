/*
Write a function that computes and returns area of a circle based on the value of input radius.
a. Write a function that compute volume of a cylinder and making use of function that
computes area of a circle.
*/
"use strict";
/**
 * 
 * @param {number} radius the readius of the circle
 * @return {number} the area of the circle
 */
function areaOfCircle (radius){
    return parseFloat((Math.PI * Math.pow(radius,2)).toFixed(2));
}

/**
 * 
 * @param {number} radius the radius of base (circle)
 * @param {number} height the height of cylinder
 * @return {number} the volume of the cylinder
 */
function volumeOfCylinder (radius, height){
    return parseFloat((areaOfCircle(radius) * height).toFixed(2));
}
// let s = volumeOfCylinder(10,5);
// console.log(typeof(s));
// console.log(s);

module.exports = {areaOfCircle, volumeOfCylinder};