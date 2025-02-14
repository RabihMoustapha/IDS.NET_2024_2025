function isLoggedIn() {
    return localStorage.getItem("token");
}

if(!isLoggedIn()){
    window.location.href = "Login.php";
}

function Logout() {
    localStorage.removeItem("token");
    window.location.href = "Login.php";
}