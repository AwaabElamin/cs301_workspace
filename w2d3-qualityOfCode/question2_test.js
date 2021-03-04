"use strict";
const assert = require("assert");
const question2 = require("./question2.js");
describe("testing the volume of cylinder",function(){
    it("are of a circle with a radius 10 = 314.16 ",function(){
        assert.strictEqual(question2.areaOfCircle(10),314.16);
    });
    it("volume of cylinder with radius 10 and height 5 = 1570.8 ",function(){
        assert.strictEqual(question2.volumeOfCylinder(10,5),1570.80);
    });
});