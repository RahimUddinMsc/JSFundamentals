// const {sum, minus} = require("./Helpers/sum.js");

const {sum} = require("./helpers/sum.js");

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

