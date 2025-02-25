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
            document.getElementById("profile-name").textContent = profile.name;
            document.getElementById("profile-password").textContent = profile.password;
        } else {
            throw new Error("Failed to fetch profile details.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error: " + error.message);
    }

    document.getElementById("edit-profile").addEventListener("click", function () {
        const location = prompt("Enter your update location: Name or Password");
        if (location === "Name") {
            window.location.href="Update/Name.html";
        } else if (location === "Password") {
            window.location.href="Update/Password.html";
        } else {
            alert("Invalid location");
        }
    });
});
