async function Delete() {
    try {
        const post = {
            id: GetID()
        };

        const response = await fetch(`https://localhost:7136/api/Posts/Delete?ID=${GetID()}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        });

        if (response.ok) {
            alert("Post has been deleted.");
            window.location.href = "View.html";
        } else {
            throw new Error("Failed to delete post.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error: " + error.message);
    }
}

function GetID() {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const id = params.get("id");
    return id;
}