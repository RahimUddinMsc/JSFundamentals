// Update the html with button that when on click it calls a function in this that will delete my my localStorage item (pass in the key to the function)

document.getElementById('storage-delete').addEventListener('click', e => {
    deleteLocalStorageItem(e.target.dataset.key)
})

const deleteLocalStorageItem = key => localStorage.removeItem(key)
