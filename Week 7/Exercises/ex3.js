// Create and call a function that retrieves the value of the 'persistentCookie' created in the last exercise
function getCookie(name) {
    const cookieString = decodeURIComponent(document.cookie);
    const cookies = cookieString.split('; ');
    const cookie = cookies.find(cookie => cookie.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
}

console.log(getCookie('persistentCookie'))