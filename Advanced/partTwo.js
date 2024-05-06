// How to access an object foo's property bar using object destructuring var test = { foo : "example"}?

// Which term represents a vulnerability where a hacker can embed a malicious JavaScript script into a website? 

// what happens when i console log 'this' and what is the common reasoning for what 'this' when utilising it?

//what will be the value of 'this' in this code snippit?

// function talk() {
//     return this
// }

// what will be the value of this when doing this?

// function talk() {
//     return this
// }

// const me = {
//     name: 'Sina',
//     talk
// }

// me.talk()


// How can if force the following function to use the 'me' object?

// function talk() {
//     return `i am ${this.name}`
// }

// const me = {
//     name: 'Sina',    
// }


// What if i did not want to use bind an wanted to use this without assinging it to a new variable along having arguments like so function talk(lang, isPolite)

// What will happen if use something like a constructor function with callback within it like below what will the value of 'this' be?

// function Person(n) {
//     this.name = n;

//     setTimeout(function() {
//         console.log(this)
//     },100)
// }


// What are the two methods to fix this?


// What value prints to the console in the following code snippet?
// this.greeting = "Hello, Universe!";

// let person = {
//   greeting: "Hello, World!",
//   greetUser: () => {
//     console.log(this.greeting);
//   }
// };

// person.greetUser();


// If i have nodelist form let nodes = document.querySelector('*') how can i convert this to an array


// What is a Symbol and how would you create one?


// what is the most common case for use of Symbols, provide a example


// What is an iterator provide a code example also


// Do i need to use the symbol to create an iterator?


// What is a generator and can you give me an example of implementation


// what is object.is()?




























































// How to access an object foo's property bar using object destructuring var test = { foo : "example"}?
// var test = { foo : "example"}

// const {foo} = test;

// Which term represents a vulnerability where a hacker can embed a malicious JavaScript script into a website? 
// Cross-site scripting 

// what happens when i console log 'this'?
// you will get the this object back
// usually the calling method will be the 'this' handler

//what will be the value of 'this' in this code snippit?
// Will be the window object

// what will be the value of this when doing this?
// {name:'Sinal', talk: f}

// How can if force the following function to use the 'me' object?
// const newFunc = talk.bind(me)
// newFunc()
// Use bind this this will create a new function bound to the new me object then executr

// What if i did not want to use bind an wanted to use this without assinging it to a new variable along having arguments like so function talk(lang, isPolite)
// you would use call directly and if it has args it would be as the second argument like so
// talk.call(me,"eng",true)

//What will happen if use something like a constructor function with callback within it like below what will the value of 'this' be?
//The value will be the window object

// What are the two methods to fix this?
//use bind or arrow functions

// function Person(n) {
//     this.name = n;

//     setTimeout(function() {
//         console.log(this)
//     }.bind(this),100)
// }

// function Person(n) {
//     this.name = n;

//     setTimeout(() => {
//         console.log(this)
//     },100)
// }

// What value prints to the console in the following code snippet?
// "Hello, Universe!" So, when greetUser is executed as person.greetUser(), this inside the arrow function still refers to the person object, where this.greeting is "Hello, Universe!".


// If i have nodelist form let nodes = document.querySelector('*') how can i convert this to an array
// let arrNode = Array.from(nodes)

// What is a Symbol and how would you create one?
// A symbol is of a primitive type that when created like so Symbol() creates a unique value. You can optionally provide a label to a symbol like so 'Symbol("test")' but is not required

// What is an iterator provide a code example also
// provides a means of iteration through each individual value of an array often usedd with a collection

// const iterableObject = {
//     // Data to iterate over
//     data: [1, 2, 3, 4, 5],
  
//     // Implementation of the iterable protocol
//     [Symbol.iterator]() {
//       let index = 0;
  
//       // This function will be called on each iteration
//       return {
//         // This method is required for an iterator
//         next: () => {
//           if (index < this.data.length) {
//             // Return the current element and move to the next index
//             return { value: this.data[index++], done: false };
//           } else {
//             // Indicate that iteration has finished
//             return { done: true };
//           }
//         }
//       };
//     }
//   };
  
//   // Iterate over the iterable object using a for...of loop
//   for (const element of iterableObject) {
//     console.log(element); // Output each element
//   }

// Do i need to use the symbol to create an iterator?
// No, Any object that implements a next() method adhering to the iterator protocol can be considered an iterator.

  
// What is a generator and can you give me an example of implementation
// function* test(){
//     yield 1
//     yield 2
//     yield 3
// }

// let generator = test();

// generator.next()
// generator.next()
// generator.next()

// what is object.is()?
// A method similiar to '===' with the exception that it can handle edge cases like NaN Object.is(NaN, NaN)) // true
