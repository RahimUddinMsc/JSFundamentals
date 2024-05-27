/*
    The HTML has section called 'Change Color' which is just a basic heading
    Create a function that identifies the element and uses the style attribute to change the color of the text to red
    (Do not change the HTML)
*/


const changeColor = (selector, color) => {
    document.querySelector(selector).style.color = color
}

changeColor('#color-switch', 'red')

