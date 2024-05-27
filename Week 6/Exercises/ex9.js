/*
    The HTML has a section with no content with an id of 'add-element'
    Create a function that adds the following html element <h4>Added Element</h4> ass a child to the 'add-element' div
    (Do not change the HTML)
*/

const addElement = (selector, html) => {
    document.querySelector(selector).insertAdjacentHTML('beforeend',html)
}

addElement('#add-element','<h4>Added Element</h4>')