// Create a test for the 'minus' function present in the 'sum.js' file 
// make any neccessary ammendments to get the test working using any input values

const {minus} = require("../helpers/sum.js");

test('Should perform minus calculation', () => {
    expect(minus(2, 1)).toBe(1); //minus function in test file wrong change from  '-' -> '+' on return
});