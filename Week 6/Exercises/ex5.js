/*
    The HTML has section called 'Missing Option Index' the middle element is missing the index number is should read as 'Option: 1'
    Create a function that identifies the element and appends the element with the index number using the data attribute as the selection
    (Do not change the HTML)
*/

const appendOptionIndex = (selector, value) => {    
    document.querySelector(selector).innerText += value
}

appendOptionIndex('[data-option="2"]', 1)