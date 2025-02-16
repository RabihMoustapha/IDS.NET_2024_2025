document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("create-post-form").addEventListener("submit", async function (event) {
        event.preventDefault();
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const content = document.getElementById("content").value;

        const post = {
            title: title,
            description: description,
            content: content
        };

        try {
            const response = await fetch("https://localhost:7136/api/Posts/Create", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
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
    });
});
