const profileID = localStorage.getItem("ProfileID");
const url = `https://localhost:7136/api/Profiles/GetProfileByID/${profileID}`;
const Name = document.getElementById("name").value;
const Password = document.getElementById("password").value;

if (!profileID) {
    alert("No profile ID found. Please log in.");
    window.location.href = "../Login.html";
    return;
}

try {
    const response = await fetch(url);
    if (response.ok) {
        const profile = await response.json();
        document.getElementById("name").value = profile.name;
        document.getElementById("password").value = profile.password;
    } else {
        throw new Error("Failed to fetch profile details.");
    }
} catch (error) {
    console.error("Error:", error);
    alert("Error: " + error.message);
}

async function Update() {
    try {
        if (Name !== "") {
            const nameResponse = await fetch(`https://localhost:7136/api/Profiles/UpdateName/${profileID}`, {
                method: "PUT",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name: Name })
            });

            if (!nameResponse.ok) {
                throw new Error("Failed to update name.");
            }
        }

        if (Password !== "") {
            const passwordResponse = await fetch(`https://localhost:7136/api/Profiles/UpdatePassword/${profileID}`, {
                method: "PUT",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ password: Password })
            });

            if (!passwordResponse.ok) {
                throw new Error("Failed to update password.");
            }
        }

        alert("Profile updated successfully!");
        window.location.href = "View.html";
    } catch (error) {
        console.error("Error:", error);
        alert("Error: " + error.message);
    }
}

document.getElementById("toggle-password").addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
    this.textContent = type === "password" ? "👁️" : "👁️‍🗨️";
});