// Update the html with button that when on click it calls a function in this that will delete my 'persistentCookie' (pass in the key to the function)

document.getElementById('cookie-delete').addEventListener('click', e => {
    deleteCookie("persistentCookie")
})

function deleteCookie(name) {
    // // Delete for the root path
    // document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    
    // // Delete for the specific path
    // document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/Week%207/;";
    
    // Delete without specifying path (fallback)
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

    console.log("Attempted to delete cookie:", name);
    console.log("Cookies after deletion attempt:", document.cookie);
}

// // alternative
// function deleteCookie(name) {
//     document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
//}