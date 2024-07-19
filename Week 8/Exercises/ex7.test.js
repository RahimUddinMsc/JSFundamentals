// Below is a test that has allready been created to check for truthy values to simulate test driven development
// In the utils file complete the 'IsTruthy' functions so that all tests pass

const {isTruthy} = require("../helpers/utils.js");

test('isTruthy returns true for all tests', () => {
    expect(isTruthy(true)).toBeTruthy();
    expect(isTruthy(1)).toBeTruthy();
    expect(isTruthy('hello')).toBeTruthy();
    expect(isTruthy({})).toBeTruthy();
    expect(isTruthy([])).toBeTruthy();
});