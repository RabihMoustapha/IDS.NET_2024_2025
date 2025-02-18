const title = document.getElementById("title").value;
const description = document.getElementById("description").value;

async function Create() {
    const post = {
        profileID: localStorage.getItem("ProfileID"),
        title: title,
        description: description,
        profileName: localStorage.getItem("ProfileName")
    };

    try {
        const response = await fetch("https://localhost:7136/api/Posts/Create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        });

        if (response.ok) {
            alert("Post created successfully!");
            window.location.href = "View.html";
        } else {
            throw new Error("Failed to create post.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error: " + error.message);
    }
}