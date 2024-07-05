// Create a function that takes in the key of the of the of the localStorage  item created from the previous exercise and logs the object value to the console

const logLocalStorageItem = key =>  console.log(JSON.parse(localStorage.getItem(key)))

logLocalStorageItem("case-1")


//What would happen if i don't parse it?
//outputs it as string