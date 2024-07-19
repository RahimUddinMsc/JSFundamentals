// You should now have a total of 4 functions presents in the sum.js file following the previous exercise.
// Original - 'sum', 'minus', 'divide'
// New - 'multiply'
// Copy over the test exectutions to this file and then use jest 'describe' to group them into their respective categories with their respective description (test should still run without issue)

const {sum, minus, divide, multiply} = require("../helpers/sum.js");

describe("Original", () => {
    test('Should perform addition calculation', () => {
        expect(sum(1, 2)).toBe(3);
    });
    
    test('Should perform minus calculation', () => {
        expect(minus(2, 1)).toBe(1); //minus function in test file wrong change from  '-' -> '+' on return
    });
    
    test('divides correctly for valid inputs and returns 0 when either a or b is 0', () => {
        expect(divide(10, 2)).toBe(5);
        expect(divide(0, 5)).toBe(0);
        expect(divide(5, 0)).toBe(0);    
    });       
})

describe("New", () => {
    test('Should multiply two numbers together', () => {
        expect(multiply(2, 3)).toBe(6);    
    });
})