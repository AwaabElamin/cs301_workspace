"use strict";
const assert = require("assert");
const question1 = require("./question1.js");
describe("check if the number is Prime",function(){
    it("37 is prime number", function(){
        assert.strictEqual(question1.checkPrime(37), true);
    });
});