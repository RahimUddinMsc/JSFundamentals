const sum = (a, b) => {
    return a + b;
}

const minus = (a, b) => {
    // return a + b;
    return a - b;
    // solution - change to minus
}

const divide = (a , b) => {
    if(a == 0 || b == 0)
        return 0

    // return a * b
    return a/b;
    // solution - change to divide
}

// solution
const multiply = (a, b) => a * b

module.exports = {
    sum: sum,
    minus: minus,
    divide: divide,
    multiply: multiply
};
