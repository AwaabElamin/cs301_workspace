"use strict";
const assert = require("assert");
const question4 = require("./question4.js");
describe("HCF of two numbers",function(){
    it("HCF of 12,13 = 1",function(){
        assert.strictEqual(question4.hCF(12,13));
    });
});