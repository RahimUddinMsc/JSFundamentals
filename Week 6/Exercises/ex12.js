/*
    The HTML has section called 'Multi Click' which has two divs 'first click' and 'second click'
    Create some code which attaches the 'clickEvent' function in the helpers.js to both divs passing the id as the argument
    Once both events are added when the 'second click' is click two alerts trigger one after another
    What is the reason for this happening and how can i fix it so only one event triggers with the correct associated id?

    (Do not change the HTML)
*/

document.getElementById('first-click').addEventListener('click', e => clickEvent(e.target.id))
document.getElementById('second-click').addEventListener('click', e => {
    e.stopPropagation();
    clickEvent(e.target.id);
});