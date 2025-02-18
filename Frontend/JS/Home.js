const container = document.getElementById("posts-list");

function isLoggedIn() {
    return localStorage.getItem("ProfileID");
}

if (!isLoggedIn()) {
    window.location.href = "Profile/Login.html";
}

async function Search() {

}

async function Display() {
    try {
        const response = await fetch("https://localhost:7136/api/Posts", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) throw new Error("Login Failed");
        const data = await response.json();
        console.log(data);

        if (data.success && Array.isArray(data.item)) {
            container.innerHTML = "";
            data.item.forEach(element => {
                container.innerHTML += `
                        <div>
                            <p>${element.profileName}</p>
                            <p>${element.title}</p>
                            <p>${element.description}</p>
                        </div>
                    `;
            });
        } else {
            alert("Data failed: " + (data.message || "Invalid data structure"));
        }
    } catch (err) {
        console.error("Data error:", err);
        alert("An error occurred during fetching.");
    }
}

function Logout() {
    localStorage.removeItem("ProfileID");
    window.location.href = "Profile/Login.html";
}