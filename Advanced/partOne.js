
// what does Promise.allSettled[p1,p2,p3] do and how does it compate to 'race' and 'all'?

// what is static property in classes?

// What will happen in the negation for the following code with reason?

// let val = ""
// val = !!val 

// Write some code using js classes with inheritace along with getters and setters

// In Js what is a set give me an example of how it might be used in an array?





















































// what does Promise.allSettled[p1,p2,p3] do and how does it compate to 'race' and 'all'?

// promise.race will trigger when first promise comes back
// promise.all will wait for all promises however will hit catch and stop waiting for any remainding promises if one errors
// promis.allSettled however will wait for all promises to return regardless of any errors

// what is static property in classes?

// class Car {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }

//   static isCar(obj) {
//     return obj instanceof Car;
//   }

//   static numberOfWheels() {
//     return 4;
//   }
// }

// const myCar = new Car('Toyota', 'Camry');

// console.log(Car.isCar(myCar)); // Output: true
// console.log(Car.numberOfWheels()); // Output: 4

// What will happen in the negation for the following code with reason?

// let val = ""
// val = !!val 

// Answer: false
// First exclamation checks if true or false and second does the variable conversion


// Write some code using js classes with inheritace along with getters and setters

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   // Getter for name
//   get animalName() {
//     return this.name;
//   }

//   // Setter for name
//   set animalName(newName) {
//     this.name = newName;
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name);
//     this.breed = breed;
//   }

//   // Getter for breed
//   get dogBreed() {
//     return this.breed;
//   }

//   // Setter for breed
//   set dogBreed(newBreed) {
//     this.breed = newBreed;
//   }
// }

// // Create a new Dog instance
// const myDog = new Dog('Buddy', 'Labrador');

// // Access and modify properties using getters and setters
// console.log(myDog.animalName); // Output: Buddy
// console.log(myDog.dogBreed); // Output: Labrador

// myDog.animalName = 'Max'; // Using setter to change name
// console.log(myDog.animalName); // Output: Max

// myDog.dogBreed = 'Golden Retriever'; // Using setter to change breed
// console.log(myDog.dogBreed); // Output: Golden Retriever


// In Js what is a set give me an example of how it might be used in an array?

// In JavaScript, a Set is a built-in object that allows you to store unique values of any type, whether primitive values 
// or object references. Sets are collections of values where each value can occur only once within the set. Sets provide #
// methods for adding, removing, and checking for the presence of values.

// Array with duplicate values
// const arrayWithDuplicates = [1, 2, 3, 4, 2, 3, 5];

// Create a Set from the array to remove duplicates
// const uniqueSet = new Set(arrayWithDuplicates);

// Convert the Set back to an array to get rid of duplicates
// const arrayWithoutDuplicates = [...uniqueSet];

// console.log(arrayWithoutDuplicates); // Output: [1, 2, 3, 4, 5]







