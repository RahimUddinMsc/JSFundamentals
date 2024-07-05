//Create some code which produces a 'persistent' cookie on page load, call it 'persistentCookie' with any value

const expirationDate = new Date();
expirationDate.setDate(expirationDate.getDate() + 1); 

document.cookie = "persistentCookie=MyCookie; expires=" + expirationDate.toUTCString();