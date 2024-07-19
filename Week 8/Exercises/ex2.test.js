// Create a test for the 'divide' function present in the 'sum.js' ensure that code coverage is at 100% once test is executed
// Make any neccessary ammendments to get the test working using any input values


const {divide} = require("../helpers/sum.js");

test('divides correctly for valid inputs and returns 0 when either a or b is 0', () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(0, 5)).toBe(0);
    expect(divide(5, 0)).toBe(0);    
});
