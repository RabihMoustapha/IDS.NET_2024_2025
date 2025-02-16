function isLoggedIn() {
    return localStorage.getItem("ProfileID");
}

if (!isLoggedIn()) {
    window.location.href = "Login.html";
}

function Logout() {
    localStorage.removeItem("ProfileID");
    window.location.href = "Profile/Login.html";
}

async function fetchPosts() {
    try {
        let response = await fetch("https://localhost:7276/api/Posts");
        let posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

function displayPosts(posts) {
    let postsContainer = document.getElementById("posts-container");
    postsContainer.innerHTML = "";

    posts.forEach((post) => {
        let postCard = document.createElement("div");
        postCard.classList.add("post-card");
        postCard.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.description}</p>
          <button id="like-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
<path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
</svg></button>
          <button id="share-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
<path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
</svg></button>
          <div class="share-container">
              
            <button id="share-btn"></button>
              <ul class="share-dropdown">
                <li>
                  <a>Copy Link</a>
                </li>
                <li>
                  <a>Send Link Via Whatsapp</a>
                </li>
                <li>
                  <a>Send Link Via SMS</a>
                </li>
              </ul>
            </div>
        `;
        postsContainer.appendChild(postCard);
    });
}

document.addEventListener("DOMContentLoaded", fetchPosts);

// Search functionality
let searchbar = document.getElementById("search-bar");
searchbar.addEventListener("keyup", function () {
    let searchValue = searchbar.value.toLowerCase();
    let postCards = document.querySelectorAll(".post-card");

    postCards.forEach((postCard) => {
        let postTitle = postCard.querySelector("h2").innerText.toLowerCase();
        if (postTitle.includes(searchValue)) {
            postCard.style.display = "block";
        } else {
            postCard.style.display = "none";
        }
    });
});

// liking functionality
let likeBtns = document.querySelectorAll("#like-btn");
likeBtns.forEach((likeBtn) => {
    likeBtn.addEventListener("click", function () {
        if (likeBtn.style.color === "white") {
            likeBtn.style.color = "black";
            likeBtn.style.backgroundColor = "white";
        } else {
            likeBtn.style.color = "white";
            likeBtn.style.backgroundColor = "#4A148C";
        }
    });
});

// sharing functionality
let shareBtns = document.querySelectorAll("#share-btn");

shareBtns.forEach((shareBtn) => {
    let dropdown = shareBtn.nextElementSibling;

    shareBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        dropdown.style.display =
            dropdown.style.display === "block" ? "none" : "block";
    });

    // dropdown hide
    document.addEventListener("click", function (event) {
        if (
            !shareBtn.contains(event.target) &&
            !dropdown.contains(event.target)
        ) {
            dropdown.style.display = "none";
        }
    });
});