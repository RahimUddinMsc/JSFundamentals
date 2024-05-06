// i have a person object below how can i update this to use a class instead passing in the firstName and lastName as args?
const person = {
    firstName: "John",
    lastName: "Doe"    
}

console.log(person)

//Solution
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const example = new Person("John","Doe")

console.log(example);