/*
Write a defining table and then a program that determines what time a child should go to bed.
Your program must read a child’s age and the season (winter, spring, summer, or fall) 
from the keyboard and output the child’s bedtime according to this table: 
    Age             Season              Bed Time
5 or younger    summer, fall            8:30 PM 
                winter, spring          8:00 PM 

6 to 12         summer                  9:30 PM 
                winter, spring, fall    8:30 PM 

13 and older    summer                  10:30 PM 
                winter, spring, fall    9:30 PM 

*/
/*defining table:
    Input                       Calcualte                                   Output
  -age of the child     if the chiled age greater than 0 and less than 6:
  -the season               if the season is 
                              * summer or fall:
                                    print "The bed time is 8:30".
                              * winter or spring:
                                    print "The bed time is 8:00". 
                        if childe age greater than 5 and less than 12:
                            if the season is
                              * sumer: print "The bed time is 10:30".
                              * All other seasons:
                                print "The bed time is 8:30";
*/
let prompt = require("prompt-sync")();
let age = +prompt("What is the age? ");
let season = prompt("What is the seaseon(winter, spring, summer, or fall)");
if (age > 0 && age < 6) {
    switch (season) {
        case "summer":
        case "fall":
            console.log(`The bed time is 8:30`);
            break;
        case "winter":
        case "spring":
            console.log(`The bed time is 8:00`);
            break;
    }
}else if (age > 5 && age <= 12) {
    switch (season) {
        case "summer":
            console.log(`The bed time is 10:30`);
            break;
        default:
            console.log(`The bed time is 8:30`);
            break;
    }
}else if (age > 12) {
    switch (season) {
        case "summer":
            console.log(`The bed time is 9:30`);
            break;
        default:
            console.log(`The bed time is 9:30`);
            break;
    }
}