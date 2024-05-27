/*
    The HTML has section called 'Background Switch' which is an styled element with a header
    Create an event that triggers when then 'Background Switch' text is clicked
    This event should alternate the background color of the element evertime it is clicked between green and red (class to use provided in style.css file)

    (Do not change the HTML)
*/

document.getElementById('bg-switch').addEventListener('click', e => {    
    document.querySelector('.bg-default').classList.toggle('bg-red')
});

