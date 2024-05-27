/*
    The HTML has section called 'Hide Me' which is just a basic div with a heading
    Create a function that identifies the element and uses a classList to remove the element from the DOM (class to use exists in style.css)
    (Do not change the HTML)
*/


const hideElement = (selector, cls) => {
    document.querySelector(selector).classList.add(cls)
}

hideElement('#hide-me', 'hide')
