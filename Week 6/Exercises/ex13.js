/*
    The HTML has section called 'List Addittion' which is an ordered list of items
    Create an event that triggers when 'Add List Item' button is clicked
    This event should simply add a new list item on every click e.g on first click next item should be '3.System'

    (Do not change the HTML)
*/

document.getElementById('list-add-btn').addEventListener('click', e => {    
    document.getElementById('list-add').insertAdjacentHTML('beforeend', '<li>System</li>')
});