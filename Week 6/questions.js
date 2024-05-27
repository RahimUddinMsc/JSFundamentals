//What are some common functions to update the style and attributes of html elements (provide a sample example)?
document.getElementById().setAttribute('style', 'display:none');
document.getElementById().style.display = "none";
document.getElementById().classList.add("hide")

//What are some common methods to modify/add HTML elements (provide a sample example)?
document.querySelector().insertAdjacentHTML('beforeend','<p>test</p>')
document.querySelector().appendChild(document.createElement("p"))
document.querySelector().innerHTML = "<p>test</p>"

//What are come commong approaches to adding click events to the DOM (provide a sample example)?
//<button onClick="click">Click ME</button>
document.getElementById().addEventListener('click', e => {
    alert("clicked")
})

//What are some common mouse/keyboard listeners provide any sampe examples of your choosing
document.addEventListener('mouseenter', () => {})
document.addEventListener('keyup', e => { 
    if(e.key === "")
        alert("pressed")    
})
