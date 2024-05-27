/*
    The HTML has section called 'Form' which is a compilation of form inputs.    
    Add an event that catches the submit button firing.
    This event should take all the value of the inputs and create a submission object and then log them to the console make the keys appropiate to the value e.g name:'TOM'    
    (Do not change the HTML)
*/

const form = document.getElementById('form-input');

form.addEventListener('submit', event => {
    event.preventDefault(); 

    const submission = {
        name: document.getElementById('name').value,
        color: document.getElementById('color').value,
        availability: document.querySelector('input[name="availability"]:checked').value,
        timeslots: Array.from(document.querySelectorAll('input[name="timeslots"]:checked')).map(checkbox => checkbox.value),
        comments: document.getElementById('comments').value
    };

    console.log(submission);
});

