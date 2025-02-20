const postId = document.getElementById("post-id").value;
const title = document.getElementById("title").value;
const description = document.getElementById("description").value;

async function Update() {
    try {
        const post = {
            id: GetID(),
            title: title,
            description: description
        };

        const response = await fetch("https://localhost:7136/api/Posts/UpdateTitle", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        });

        if (response.ok) {
            try {
                const post = {
                    id: postId,
                    title: title,
                    description: description
                };

                const response = await fetch("https://localhost:7136/api/Posts/UpdateDescription", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(post)
                });

                if (response.ok) {
                    window.location.href = "View.html";
                } else {
                    throw new Error("Failed to update post.");
                }
            } catch (error) {
                console.error("Error:", error);
                alert("Error: " + error.message);
            }
        } else {
            throw new Error("Failed to update post.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error: " + error.message);
    }
}

async function Delete() {

}

function GetID() {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const id = params.get("id");
    return id;
}
