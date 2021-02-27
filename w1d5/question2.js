/*
Write a function that computes and returns area of a circle based on the value of input radius.
a. Write a function that compute volume of a cylinder and making use of function that
computes area of a circle.

*/
function areaOfCircle (radius){
    return (Math.PI * Math.pow(radius,2));
}
function volumeOfCylinder (radius, height){
    return (areaOfCircle(radius) * height);
}
console.log(volumeOfCylinder(10,5).toFixed(2));