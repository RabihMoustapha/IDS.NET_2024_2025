const postId = document.getElementById('post-id').value;
const title = document.getElementById('title').value;
const description = document.getElementById('description').value;

async function Update() {
    const postId = document.getElementById('post-id').value;
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    // Example of updating a post (replace with actual implementation)
    console.log(`Updating post ${postId} with title: ${title} and description: ${description}`);

    // Add your update logic here (e.g., API call to update the post)
}

function Delete() {
    const postId = document.getElementById('post-id').value;

    // Example of deleting a post (replace with actual implementation)
    console.log(`Deleting post ${postId}`);

    // Add your delete logic here (e.g., API call to delete the post)
}

function GetID(){
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    postId = id;
}
