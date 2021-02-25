/*
A university library that loans book to students, faculty, and the public 
has a written policy that determines how long someone may borrow a book before it is due, 
which is shown on the table below. 
Write a defining table and JavaScript program that determines how long a person may borrow a book.
Status          Number of books Overdue             Loan duration in weeks
Student                 0                               6
                    fewer than 3                        4
                    3 or more                           2
Faculty                 0                               12
                    fewer than 3                        10
                    3 or more                           8
Other                   0                               4
                    fewer than 3                        3
                    3 or more                           2
*/
let prompt = require("prompt-sync")();
let status = prompt("What is the status of the person (Student,Fauculty, Other)");
let numoberOfBook = +prompt("How many books want to borrow? ");
let duration = 0;
switch (status) {
    case "Student":
        if (numoberOfBook == 0) {
            duration = 6;
        } else if (numoberOfBook > 0 && numoberOfBook < 3) {
            duration = 4;
        } else if (numoberOfBook >= 3) {
            duration = 2;
        }
        break;
    case "Faculty":
        if (numoberOfBook == 0) {
            duration = 12;
        } else if (numoberOfBook > 0 && numoberOfBook < 3) {
            duration = 10;
        } else if (numoberOfBook >= 3) {
            duration = 8;
        }
        break;
    case "Other":
        if (numoberOfBook == 0) {
            duration = 4;
        } else if (numoberOfBook > 0 && numoberOfBook < 3) {
            duration = 3;
        } else if (numoberOfBook >= 3) {
            duration = 2;
        }
        break;
}
console.log(`the due is ${duration} days`);
