//What does Object.defineProperty do?
//The Object.defineProperty() method is used to define a new property or modify an existing one on an object.

//Write me showing how i would use it
// const obj = {};
// Object.defineProperty(obj, 'myProperty', {
//     value: 42,
//     writable: false,
//     enumerable: true,
//     configurable: false
// });


// What happens when you run the following code?
// function func1(arg1) {
//   arguments[0] = 99;
//   console.log(arg1);
// }

// function func2(arg1) {
//   arg1 = 99;
//   console.log(arguments[1]);
// }

// func1(10);
// func2(10);

//func1(10) logs 99 because the value of arg1 is modified through arguments.
//func2(10) logs undefined because no second argument is passed, and arguments[1] is accessed, resulting in undefined.


// You create an array that holds the names of the major oceans on Earth. You want to write a loop that writes out each ocean name. The following code is your first attempt and it does not do that:
// const oceans = ["Atlantic", "Pacific", "Indian", "Arctic", "Southern"];

// for (e in oceans) 
//     document.write(e);

// What change can you make so that your code is correct?
// use or for of loop
// Update the write statement to document.write(oceans[e]);

// Which method tests whether a provided value is a double precision number?
// Number.isSafeInteger()


// what are labels in js?
// A label is defined by placing an identifier (label name) followed by a colon (:) directly before a statement.
// The statement associated with the label can be any valid JavaScript statement, such as a loop, conditional statement, or block statement.

// How should you change the following snippet so that both loops conclude at the same time?
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5; j++) {
//     // exit both loops from here
//   }
// }

// outerloop:
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5; j++) {
//     // exit both loops from here
//     if (condition) {
//       break outerloop;
//     }
//   }
// }


// What happens when the following code runs?
// let foo = {    
//   get name(){    
//     return this.name;  
//   },    
//   set name(n){    
//     this.name = n;  
//   }
// }
// foo.name = "foo";

// A recursive call to the setter causes a RangeError to be thrown because it exceeds the maximum call stack size.


// what does Object.assign do (provide some code)?
// Object.assign() is a method in JavaScript used for copying the values of all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
// const target = { a: 1, b: 2 };
// const source1 = { b: 3, c: 4 };
// const source2 = { d: 5 };
// const result = Object.assign(target, source1, source2);


// what are mixins?
// In ES6, you can achieve multiple inheritance of different methods for a given class using mixins by using class composition and the extends keyword along with mixin classes. Mixin classes are classes that contain methods that you want to mix into other classes.


//provide some code showing inheritance with a mixin for jump with a dog who inherits from an animal
// Define mixin classes
// class JumpMixin {
//     jump() {
//       console.log(`${this.constructor.name} is jumping!`);
//     }
// }
    
// Define main class
// class Animal {}

// Mixin functionality into the main class
// class Dog extends Animal {}

// Use class composition to mix in methods from mixins
// Object.assign(Dog.prototype, JumpMixin.prototype);

// Create instances and use methods
// const dog = new Dog();
// dog.jump(); 


// Why does this implementation of the .then() a code error? 

// myPromise.then(
// );

// The code myPromise.then(); results in an error because the .then() method expects at least one argument, which should be a function. This function is used to handle the fulfillment of the promise (when it resolves successfully) or the rejection of the promise (when it fails).

// How do i hand both a fufilled and rejected when using then give me a code example of both resolved and rejected?

//   Creating a promise that resolves after a delay
//   const resolvedPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise resolved successfully!"); // Resolve the promise with a value
//     }, 1000);
//   });
  
//   /Creating a promise that rejects immediately
//   const rejectedPromise = new Promise((resolve, reject) => {
//     reject("Promise rejected!"); // Reject the promise with a reason
//   });
  
//   Consuming the promises
//   resolvedPromise.then(
//     function(value) {
//       console.log("Resolved:", value);
//     },
//     function(error) {
//       console.error("Rejected:", error);
//     }
//   );
  
//   rejectedPromise.then(
//     function(value) {
//       console.log("Resolved:", value); // This won't be called since the promise is rejected
//     },
//     function(error) {
//       console.error("Rejected:", error);
//     }
//   );

// Write me a perfect fetch request without the need for the second arg to handle a rejection
// fetch('https://api.example.com/data')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Failed to fetch data');
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Handle successful response (status code 200)
//     console.log(data);
//   })
//   .catch(error => {
//     // Handle rejected response (status code 401 or other errors)
//     console.error(error);
//   });


// What does Object.create do?
// Object.create() is a method that creates a new object with the specified prototype object and properties. It allows you to create an object that inherits properties from another object (the prototype) without the need for constructor functions. 


// How would you add extra properties to a new object, bar, to be created from another object, foo, with Object.create()?
// Define the prototype object (foo)
// const foo = {
//     a: 1,
//     b: 2
//   };
  
// Create a new object (bar) with foo as its prototype and add extra properties
// const bar = Object.create(foo, {
//     c: { value: 3 },    // Add property 'c' with value 3
//     d: { value: 4 }     // Add property 'd' with value 4
// });
