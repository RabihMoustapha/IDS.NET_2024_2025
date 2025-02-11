const url = "https://localhost:7136/api/Profile/login";
const email = document.getElementById("email");
const password = document.getElementById("password");

async function Login() {
    const userData = {
        email: email.value,
        password: password.value
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            const result = await response.json();
            alert("Login successful!");
            localStorage.setItem("token", result.token);
            window.location.href = "Home.html";
        } else {
            alert("Login failed. Please try again.");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}