/*
    Add a keyboard event to the document so when the backspace button on the keyboard button is pressed i get and alert of 'hello'
    (Do not change the HTML)
*/

document.addEventListener('keyup', e => {
    if (e.key === 'Backspace') 
        alert('hello');      
})