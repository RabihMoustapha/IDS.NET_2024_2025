async function Create() {
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const userData = {
        username: username.value,
        email: email.value,
        password: password.value
    };

    try {
        const response = await fetch("https://localhost:7136/api/profiles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem('token'),
            },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            const result = await response.json();
            alert("Signup successful!");
            console.log(result);
            localStorage.setItem("token", result.token);
        } else {
            alert("Signup failed. Please try again.");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}