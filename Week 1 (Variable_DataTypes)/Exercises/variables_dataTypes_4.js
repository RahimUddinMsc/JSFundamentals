//I have the following piece of code i am expecting the console to log 'Equal' how can i achieve this without changing the value of the variable?

let name = "John";
let obj = { name: "John" };

if (name == obj) { //Solution Change obj to obj.name
    console.log("Equal");
} else {
    console.log("Not Equal");
}
