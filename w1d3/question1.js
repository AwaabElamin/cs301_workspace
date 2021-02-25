/*
Write a program that helps a user choose the correct footwear for the day’s weather 
based on the table shown below. 
        hot sandals 
        rain galoshes 
        snow boots
If the user enters any other weather type, your program should output 
“sneakers”  
*/
const prompt = require('prompt-sync')();
let weather = prompt("What is the weather type ");
if (weather === "hot") {
    console.log ("sandals");
} else if (weather === "rains"){
    console.log("galoshes");
}else if(weather === "snow"){
    console.log("boots");
}else{
    console.log("sneakers");
}