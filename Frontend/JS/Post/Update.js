const title = document.getElementById("title");
const description = document.getElementById("description");

async function UpdateTitle() {
    try {
        const post = {
            id: GetID(),
            title: title.value
        };

        const response = await fetch(`https://localhost:7136/api/Posts/UpdateTitle/ID=${GetID()}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        });

        if (response.ok) {
            window.location.href = "../View.html";
        } else {
            throw new Error("Failed to update title.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error: " + error.message);
    }
}

async function UpdateDescription() {
    try {
        const post = {
            id: GetID(),
            description: description.value
        };

        const response = await fetch(`https://localhost:7136/api/Posts/UpdateDescription/ID=${GetID()}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        });

        if (response.ok) {
            window.location.href = "../View.html";
        } else {
            throw new Error("Failed to update description.");
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
