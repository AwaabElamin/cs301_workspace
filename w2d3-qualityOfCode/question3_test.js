"use strict";
const assert = require("assert");
const question3 = require("./question3.js");
describe("testing the methods of calculating the volume of a house ",function(){
    it("Area of a triangle with a width 5 and weep 5 = 3447 ",function(){
        assert.strictEqual(question3.triangleArea(5,5), 3447);
    });
    it("Volume of roof with width 5 and sweep 5 = 17,235 ",function(){
        assert.strictEqual(question3.roofVolume(5,5), 17235);
    });
    it("Volume of living room with width 5, depth 10 and height 10 = 1000",function(){
        assert.strictEqual(question3.livingVolume(5,10,10),500);
    });
    it("Volume of a house with width 5,depth 10,height 10,sweep 5 = 17735",function(){
        assert.strictEqual(question3.houseVolume(5,10,10,5), 17735);
    });
});