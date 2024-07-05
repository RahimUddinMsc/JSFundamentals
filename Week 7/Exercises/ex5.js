// I have a basic object below save the object to localStorage with a key of case-1

const caseObj = {
    firstName:"Tom",
    lastName: "Wright"
}

localStorage.setItem('case-1', JSON.stringify(caseObj))

//What would happen if i did not stringify it
//saves it as [object Object]