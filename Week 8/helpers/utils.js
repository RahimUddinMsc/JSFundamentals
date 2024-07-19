const getUser = () => {
    return {
        firstName: "John",
        lastName: "Doe",
        age: 20
    }    
}

// const isTruthy = () => {        
// }

// Solution
const isTruthy = value => !!value

module.exports = {
    getUser: getUser,
    isTruthy: isTruthy
};