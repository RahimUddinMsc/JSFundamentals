// There is a 'getUser' function in the utils.js file
// Create a function that test to see if the 'loggedInUser' matches that of the one returned in the from the function
// Make any neccessary ammendments to get the test working

const {getUser} = require("../helpers/utils.js");

const loggedInUser = {
    firstName: "John",
    // lastName: "Do", solution - change to Doe
    lastName: "Doe",
    age: 20
}

test('logged in user matches that of the returned user', () => {
    expect(getUser()).toEqual(loggedInUser);
});