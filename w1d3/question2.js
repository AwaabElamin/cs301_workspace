/*
Write a program that reads from the keyboard a student's name and number of completed 
credits and then outputs the student's name and label on following rules: 

        a. "Freshman" if 0<credits<30 

        b. "Sophomore" if 30<=credits<60 

        c. "Junior" if 60<=credits<90 

        d. "Senior" if credits>90 

*/
let prompt = require ("prompt-sync")();
let studentName = prompt("What is you name? ");
let numberCredits = +prompt("How many credits you got till now? ");
if (numberCredits > 0 && numberCredits < 30){
    console.log(`${studentName} you are Freshman.`);
} else if (numberCredits >= 30 && numberCredits < 60){
    console.log(`${studentName} you are Sophomore.`);
} else if (numberCredits >= 60 && numberCredits < 90){
    console.log(`${studentName} you are Junior.`);
} else if (numberCredits >= 90 ){
    console.log(`${studentName} you are Senior.`);
} 