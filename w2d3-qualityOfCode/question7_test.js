"use strict";
const assert = require("assert");
const question7 = require("./question7.js");

describe("Test the compute mehtod that sum two numbers", function(){
    it("test add method 3 + 3 = 6",function(){
        assert.strictEqual(question7.add(3,3), 6);
    });
    it("test compute by add,3,3 = 6",function(){
        assert.strictEqual(question7.compute(question7.add,3,3), 6);
    });
});
