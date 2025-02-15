const profile = "https://localhost:7136/api/Profiles/login";
const email = document.getElementById("email");
const password = document.getElementById("password");

async function Login() {
    const item = {
        email: email.value,
        password: password.value
    };

    try {
        const response = await fetch(profile, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        });

        if (response.ok) {
            const result = await response.json();
            alert("Login successful!");
            localStorage.setItem("token", result.token);
            window.location.href = "../Home.html";
        } else {
            throw new Error("Login failed. Please try again.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error: " + error.message);
    }
}