const profile = "https://localhost:7136/api/Profiles/Create";
const email = document.getElementById("email");
const password = document.getElementById("password");
const username = document.getElementById("username");

async function Create() {
    const userData = {
        username: username.value,
        email: email.value,
        password: password.value
    };

    try {
        const response = await fetch(profile, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            const result = await response.json();
            alert("Signup successful!");
            window.location.href = "../Home.html";
        } else {
            alert("Signup failed. Please try again.");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}