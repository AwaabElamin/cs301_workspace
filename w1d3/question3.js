/*
Write a program that calculates down payment for a home loan
based on following rules.
    $0 to less than 50K 5% of the cost
    $50K to less than 100K $1000 + 10% of (cost - $50K)
    $100K to less than 200K $2000 + 15% of (cost - $100K)
    $200K and above $5000 + 10% of (cost - $200K)

*/
let prompt = require("prompt-sync")();
let homeCost = +prompt("What is the cost of the home?: ");
let downPayment = 0;
if (homeCost >= 0 && homeCost < 50000) {
    downPayment = homeCost * 0.05;
} else if (homeCost >= 50000 && homeCost < 100000) {
    downPayment = 1000 + ((homeCost - 50000) * 0.10);
} else if (homeCost >= 100000 && homeCost < 200000) {
    downPayment = 2000 + ((homeCost - 100000) * 0.15);
} else if (homeCost >= 200000) {
    downPayment = 5000 + ((homeCost - 200000) * 0.10);
} 
console.log(` The down payment of home cost ${homeCost} is ${downPayment}`);