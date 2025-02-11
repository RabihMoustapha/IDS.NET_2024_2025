async function Login() {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const userData = {
        email: email.value,
        password: password.value
    };

    try {
        const response = await fetch("https://localhost:7136/api/profile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token"),
            },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            const result = await response.json();
            alert("Login successful!");
            localStorage.setItem("token", result.token);
            window.location.href = "home.html";
        } else {
            alert("Login failed. Please try again.");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}