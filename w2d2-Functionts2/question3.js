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
function triangleArea(width,sweep){
    let s = (width * sweep * sweep) / 2;
    let fWidth = s - width;
    let fSweep = s - sweep;
    let multi = fWidth * fSweep * fSweep;

    return Math.sqrt(s * multi);
}
function roofVolume(width,sweep){
    return (triangleArea(width,sweep) * width);
}
function livingVolume(width,depth, height){
   return width * depth * height;
}
function houseVolume(width,depth,height,sweep){
    return livingVolume(width,depth,height) + roofVolume(width,sweep);
}
console.log(houseVolume(10,30,50,20).toFixed(2));