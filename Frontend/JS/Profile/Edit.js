document.addEventListener("DOMContentLoaded", async function () {
    const profileID = localStorage.getItem("ProfileID");
    if (!profileID) {
        alert("No profile ID found. Please log in.");
        window.location.href = "../Login.html";
        return;
    }

    const profileUrl = `https://localhost:7136/api/Profiles/GetProfileByID/${profileID}`;

    try {
        const response = await fetch(profileUrl);
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

    document.getElementById("edit-profile-form").addEventListener("submit", async function (event) {
        event.preventDefault();
        const updatedName = document.getElementById("name").value;
        const updatedPassword = document.getElementById("password").value;

        try {
            if (updatedName !== "") {
                const nameResponse = await fetch(`https://localhost:7136/api/Profiles/UpdateName/${profileID}`, {
                    method: "PUT",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ name: updatedName })
                });

                if (!nameResponse.ok) {
                    throw new Error("Failed to update name.");
                }
            }

            if (updatedPassword !== "") {
                const passwordResponse = await fetch(`https://localhost:7136/api/Profiles/UpdatePassword/${profileID}`, {
                    method: "PUT",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ password: updatedPassword })
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
    });

    document.getElementById("toggle-password").addEventListener("click", function () {
        const passwordField = document.getElementById("password");
        const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
        passwordField.setAttribute("type", type);
        this.textContent = type === "password" ? "👁️" : "👁️‍🗨️";
    });
});
