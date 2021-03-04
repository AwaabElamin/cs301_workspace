"use strict";
const assert = require("assert");
const question5 = require("./question5.js");
describe("lCM of two numbers",function(){
    it("HCF of 12,13 = 1",function(){
        assert.strictEqual(question5.hCF(12,13),1);
    });
    it("LCM of 12,13 = 156",function(){
        assert.strictEqual(question5.lCM(12,13),156);
    });
});