/*
    create a function that loops through the list items and append the number based on what indext the list item is on e.g first item would be 'Item: 1'
    (Do not change the HTML)
*/

const loopItemList = selector => {
    document.querySelectorAll(selector).forEach((el,index) => {                
        el.innerText += index
    });
}

loopItemList('.list-item')