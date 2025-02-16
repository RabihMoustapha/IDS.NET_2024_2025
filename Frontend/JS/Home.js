function isLoggedIn() {
    return localStorage.getItem("ProfileID");
}

if (!isLoggedIn()) {
    window.location.href = "Profile/Login.html";
}

async function Search() {

}

async function Display() {

}

function Logout() {
    localStorage.removeItem("ProfileID");
    window.location.href = "Profile/Login.html";
}