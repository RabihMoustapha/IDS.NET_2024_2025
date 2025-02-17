const title = document.getElementById("title").value;
const description = document.getElementById("description").value;
const content = document.getElementById("content").value;
const profileID = localStorage.getItem("profileID");

async function Create(){
        const post = {
            title: title,
            description: description,
            content: content
        };

        try {
            const response = await fetch("https://localhost:7136/api/Posts/Create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({post, profileID})
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