/*
Write JS code to print following patterns using nested loops.
1
22
333
4444
55555

1
12
123
1234
12345

55555
4444
333
22
1
*/
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += i +"";        
    } 
    console.log(row);
}
console.log("");
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j +"";        
    } 
    console.log(row);
}
console.log("");
for (let i = 5; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += i +"";        
    } 
    console.log(row);
}