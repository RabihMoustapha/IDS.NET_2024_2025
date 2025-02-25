const profileID = localStorage.getItem("ProfileID");
const profileURL = `https://localhost:7136/api/Profiles/GetProfileByID/${profileID}`;

if (!profileID) {
    alert("No profile ID found. Please log in.");
    window.location.href = "../Login.html";
}

async function UpdateName() {
    const Name = document.getElementById("name").value;
    try {
        const nameResponse = await fetch(`https://localhost:7136/api/Profiles/UpdateName?ID=${profileID}`, {
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

        alert("Profile name updated successfully!");
        window.location.href = "../View.html";
    } catch (error) {
        console.error("Error:", error);
        alert("Error: " + error.message);
    }
}

async function UpdatePassword() {
    const Password = document.getElementById("password").value;
    try {
        const nameResponse = await fetch(`https://localhost:7136/api/Profiles/UpdatePassword?ID=${profileID}`, {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ password: Password })
        });

        if (!nameResponse.ok) {
            throw new Error("Failed to update password.");
        }

        alert("Profile password updated successfully!");
        window.location.href = "../View.html";
    } catch (error) {
        console.error("Error:", error);
        alert("Error: " + error.message);
    }
}