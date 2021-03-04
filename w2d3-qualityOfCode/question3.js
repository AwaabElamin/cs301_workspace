/*
Write a program that calculates the total volume of a house, 
including the volume of the roof space. 
Your program must allow the user to enter width, depth, height and sweep 
as shown in figure below. 
Here are some helpful formulas:
houseVolume = livingVolume + roofVolume
livingVolume = width * height * depth
roofVolume = triangleArea*width
triangleArea = √s(s−a)(s−b)(s−c)
s = (a+b+c)/2
Write main formulas as a separate function.
*/
"use strict";
/**
 * 
 * @param {number} width the width of the tringle
 * @param {number} sweep the sweep of the tringle
 * @return {number} the tringle areae
 */
function triangleArea(width,sweep){
    let total = (width * sweep * sweep) / 2;
    let fWidth = total - width;
    let fSweep = total - sweep;
    let multi = fWidth * fSweep * fSweep;
    return parseFloat(Math.sqrt(total * multi).toFixed(2));
}
/**
 * 
 * @param {number} width the width of the roof 
 * @param {number} sweep the sweep of the roof (tringle)
 * @return {number} the volume of the roof
 */
function roofVolume(width,sweep){
    return parseFloat((triangleArea(width,sweep) * width).toFixed(2));
}

/**
 * 
 * @param {number} width the width of the living room
 * @param {number} depth the depth of the living room
 * @param {number} height the hight of the living room
 * @return {number} the volume of the living room
 */
function livingVolume(width, depth, height){
   return parseFloat((width * depth * height).toFixed(2));
}

/**
 * 
 * @param {number} width the width of the house 
 * @param {number} depth the depth of the house 
 * @param {number} height the height of the house 
 * @param {number} sweep the weep of the roof
 * @return {number} the volume of the house
 */
function houseVolume(width,depth,height,sweep){
    return parseFloat((livingVolume(width,depth,height) + roofVolume(width,sweep)).toFixed(2));
}
//console.log(houseVolume(5,10,10,5));
//console.log(triangleArea(5,5));
module.exports = {houseVolume, livingVolume, roofVolume, triangleArea};