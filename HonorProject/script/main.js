"use strict";
let salaryAmount, per, hoursPerDay, daysPerWeek;
let holidaysPerYear, vacationDaysPerYear;
let deduction, result, submit;
let day, week, month, year;
let bbc = () => {
    result.value = 0;
    if (checkError()) {

        switch (per.value) {
            case "hourly":
                day = salaryAmount.value * hoursPerDay.value;
                week = day * daysPerWeek.value;
                month = week * 4;
                year = month * 12;
                deduction = day * (parseInt(holidaysPerYear.value)
                    + parseInt(vacationDaysPerYear.value));
                result.value = year - deduction;
                assignResultValue();
                clearErrorSpan();
                break;
            case "daily":
                day = salaryAmount.value;
                week = day * daysPerWeek.value;
                month = week * 4;
                year = month * 12;
                deduction = day * (parseInt(holidaysPerYear.value)
                    + parseInt(vacationDaysPerYear.value));
                result.value = year - deduction;
                assignResultValue();
                clearErrorSpan();
                break;
            case "weekly":
                week = salaryAmount.value;
                day = week / daysPerWeek.value;
                month = week * 4;
                year = month * 12;
                deduction = day * (parseInt(holidaysPerYear.value)
                    + parseInt(vacationDaysPerYear.value));
                result.value = year - deduction;
                assignResultValue();
                clearErrorSpan();
                break;
            case "biWeekly":
                week = salaryAmount.value / 2;
                day = week / daysPerWeek.value;
                month = week * 4;
                year = month * 12;
                deduction = day * (parseInt(holidaysPerYear.value)
                    + parseInt(vacationDaysPerYear.value));
                result.value = year - deduction;
                assignResultValue();
                clearErrorSpan();
                break;
            case "monthly":
                month = salaryAmount.value;
                week = month / 4;
                day = week / daysPerWeek.value;
                year = month * 12;
                deduction = day * (parseInt(holidaysPerYear.value)
                    + parseInt(vacationDaysPerYear.value));
                result.value = year - deduction;
                assignResultValue();
                clearErrorSpan();
                break;
            case "yearly":
                year = salaryAmount.value;
                month = year / 12;
                week = month / 4;
                day = week / daysPerWeek.value;                
                deduction = day * (parseInt(holidaysPerYear.value)
                    + parseInt(vacationDaysPerYear.value));
                result.value = year - deduction;
                assignResultValue();
                clearErrorSpan();
                break;
            default:
                result.value = "";
        }
    }

    document.getElementById("result").innerHTML = result.value;
};
let doit = () => {
    salaryAmount = document.getElementById("salaryAmount");
    per = document.getElementById("per");
    hoursPerDay = document.getElementById("hoursPerDay");
    daysPerWeek = document.getElementById("daysPerWeek");
    holidaysPerYear = document.getElementById("holidaysPerYear");
    vacationDaysPerYear = document.getElementById("vacationDaysPerYear");
    result = document.getElementById("result");
    submit = document.getElementById("btn");
    submit.onclick = bbc;

};

/**
 * @returns {boolean} true if no errors in input
 */
function checkError() {
    if (hoursPerDay.value > 12) {
        document.getElementById("errorHourPerDay").innerHTML = "*";
        result.value = "Hours per day can not be more than 12";
        return false;
    }
    if (daysPerWeek.value > 7) {
        document.getElementById("errordaysPerWeek").innerHTML = "*";
        result.value = "Days per week can not be more than 7";
        return false;
    }
    if (holidaysPerYear.value > 365) {
        document.getElementById("errorHolidaysPerYear").innerHTML = "*";
        result.value = "The holidays can not be more than 365";
        return false;
    }
    if (vacationDaysPerYear.value > 365) {
        document.getElementById("errorHolidaysPerYear").innerHTML = "*";
        result.value = "The vaction days can not be more than 365";
        return false;
    }

    if (hoursPerDay.value > 12) {
        document.getElementById("errorHourPerDay").innerHTML = "*";
        result.value = "Hours per day can not be more than 12";
        return false;
    }
    if (daysPerWeek.value > 7) {
        document.getElementById("errordaysPerWeek").innerHTML = "*";
        result.value = "Days per week can not be more than 7";
        return false;
    }
    if (holidaysPerYear.value > 365) {
        document.getElementById("errorHolidaysPerYear").innerHTML = "*";
        result.value = "The holidays can not be more than 365";
        return false;
    }


    if (isNaN(parseInt(vacationDaysPerYear.value))) {
        vacationDaysPerYear.value = 0;
    }
    if (isNaN(parseInt(daysPerWeek.value))) {
        daysPerWeek.value = 0;
    }
    if (isNaN(parseInt(holidaysPerYear.value))) {
        holidaysPerYear.value = 0;
    }
    if (isNaN(parseInt(vacationDaysPerYear.value))) {
        vacationDaysPerYear.value = 0;
    }

    if (isNaN(parseInt(hoursPerDay.value))) {
        hoursPerDay.value = 0;
    }
    if (isNaN(parseInt(daysPerWeek.value))) {
        daysPerWeek.value = 0;
    }
    if (isNaN(parseInt(holidaysPerYear.value))) {
        holidaysPerYear.value = 0;
    }
    return true;
}
/**
 * @return {undefined}
 */
function clearErrorSpan() {
    document.getElementById("errorHourPerDay").innerHTML = "";
    document.getElementById("errordaysPerWeek").innerHTML = "";
    document.getElementById("errorHolidaysPerYear").innerHTML = "";
    document.getElementById("errorHolidaysPerYear").innerHTML = "";
}

/**
 * @returns {undefined}
 */
function assignResultValue() {
    if (result.value < 0) {
        result.value += " negative values means your vacations days more than your word days";
    } else {
        result.value = "$ " + day + " per day <br>"
            + "$ " + week + " per week<br>"
            + "$ " + month + " per month <br>"
            + "$ " + year + " per year <br>"
            + "<br> deductions <br>$ "
            + deduction + " per year<br>"
            + "total after deduction: $" + result.value + " per year";
    }
}
window.onload = doit;




