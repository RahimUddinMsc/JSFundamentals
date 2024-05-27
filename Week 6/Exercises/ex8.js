/*
    The HTML has section called 'Remove Me' which is just a basic div with a heading
    Create a function that identifies the element and removes the element from DOM completely
    (Do not change the HTML)
*/


const removeElement = selector => {
    document.querySelector(selector).remove()
}

removeElement('#remove-me')