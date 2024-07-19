// I have this existing test function ulitising the 'sum' function from the sum.js file
// I have simulated an async call that returns test object with properties 'firstValue' and 'secondValue' which i want to use as the input value
// Complete this test file so it uses Jest 'beforAll' functionality to setup the object for the tests

const {sum} = require("../helpers/sum.js");

let inputValues;

const getValues = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          firstValue: 5,
          secondValue: 2
        });
      }, 1000);
    });
};

// Solution
beforeAll(async () => {
    inputValues = await getValues();
});

test('Should add together two values', () => {
    expect(sum(inputValues.firstValue, inputValues.secondValue)).toBe(7);
});

