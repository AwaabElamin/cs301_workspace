"use strict";
let subtotalElem, tipElem, totalElem, subtotal, tip, total, btn;
window.onload = calcTip;

/**
 * @returns {undefined}
 */
function calcTip() {
    subtotalElem = document.getElementById("subtotal"); 
    tipElem = document.getElementById("tip"); 
    totalElem = document.getElementById("total");
    btn = document.getElementById("btn");
    btn.onclick = calculate;  
    
}
let calculate = () =>{
    subtotal = subtotalElem.value;
    tip = tipElem.value;
    total =  parseFloat(subtotal) +(parseFloat(tip) / 100);
    totalElem.innerHTML = "$" + total;
    
};

