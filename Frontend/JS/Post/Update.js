async function updatePost(endpoint, data) {
    try {
        const response = await fetch(`https://localhost:7136/api/Posts/${endpoint}?ID=${GetID()}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            window.location.href = "../View.html";
        } else {
            throw new Error(`Failed to update ${endpoint}.`);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error: " + error.message);
    }
}

async function UpdateTitle() {
    const title = document.getElementById("title").value;
    await updatePost("UpdateTitle", { Title: title });
}

async function UpdateDescription() {
    const description = document.getElementById("description").value;
    await updatePost("UpdateDescription", { Description: description });
}

function GetID() {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const id = params.get("id");
    return id;
}