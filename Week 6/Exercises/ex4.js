/*
    The HTML has section called 'Missing Child Index' the middle element is missing the index number is should read as 'Child Item: 1'
    Create a function that identifies the element and appends the element with the index number
    (Do not change the HTML)
*/

const appendIndex = (selector, node, value) => {    
    document.getElementById(selector).childNodes[node].innerText += value
}

appendIndex('missing-child-index', 5, 1)