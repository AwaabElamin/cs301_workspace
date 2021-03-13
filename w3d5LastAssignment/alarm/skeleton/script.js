"use strict";
let goBtn, min, sec, time, result, identinty;
window.onload = () => {
    goBtn = document.getElementById("go");
    min = document.getElementById("min");
    sec = document.getElementById("sec");
    result = document.getElementById("result");
    goBtn.onclick = timer;
};
/**
 * @return {undefined}
 */
function timer(){
    time = parseInt(sec.value) + (parseInt(min.value) * 60);
    identinty = setInterval(updateResult,1000);
    
    
}
/**
 * @returns {undefined}
 */
function updateResult(){
    if (time ==0) {
        clearInterval(identinty);
    }else{
        time--;
        result.innerHTML = time;
    }
    
}