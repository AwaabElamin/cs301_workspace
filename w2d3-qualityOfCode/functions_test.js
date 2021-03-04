"use strict";
const assert = require("assert");
let app = require("./question1.js");

describe("checkPrime", function () {
    it("7 is a prime", function () {
        assert.strictEqual(app.checkPrime(7), true);
    });

    it("9 is not a prime ", function () {
        assert.strictEqual(app.checkPrime(9), false);
    });
});

app = require("./question3.js");
describe("triangleArea", function () {
    it("Area of triangle with sides 3,4 and 5 is 6", function () {
        assert.strictEqual(app.triangleArea(3, 4, 5), 6);
    });

    it("Area of triangle with sides 3,4 and 5 is 6", function () {
        assert.strictEqual(app.triangleArea(6, 8, 10), 24);
    });

});

// Write test specification for roofVolume

app = require("./question3.js");
describe("testing the methods of calculating the volume of a roof ",function(){
    it("Volume of roof with width 5 and sweep 5 = 17,235 ",function(){
        assert.strictEqual(app.roofVolume(5,5), 17235);
    });
});


describe("hcf", function () {
    it("HCF of 3 and 9 is 3 ", function () {
        assert.strictEqual(app.hcf(3, 9), 3);
    });

    it("HCF of 7 and 11 is 1", function () {
        assert.strictEqual(app.hcf(7, 11), 1);
    });
    it("HCF of 12 and 16 is 4", function () {
        assert.strictEqual(app.hcf(12, 16), 4);
    });
});

// Write test specification for LCM
const question5 = require("./question5.js");
describe("lCM of two numbers",function(){
    it("LCM of 12,13 = 156",function(){
        assert.strictEqual(question5.lCM(12,13),156);
    });
});