// Create a new multiply funtion in the sum.js file this should be similiar to the add function but multiply two values instead, Call this function 'multiply'
// Create test for this new 'multiply' function ensure that code coverage is at 100% once test is executed

const {multiply} = require("../helpers/sum.js");

test('Should multiply two numbers together', () => {
    expect(multiply(2, 3)).toBe(6);    
});
