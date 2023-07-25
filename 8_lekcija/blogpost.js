const postsWrapper = document.getElementById("posts-wrapper");

async function getPosts() {
  const postKey = "https://dummyjson.com/posts";

  const response = await fetch(postKey);
  const data = await response.json();

  return data.posts;
}

function drawPost(post) {
  const postElement = document.createElement("div");
  postElement.classList.add("card");

  const tags = post.tags.map((tag) => `<div class="tag">${tag}</div>`);

  postElement.innerHTML = `
    <h3 class="title">${post.title}</h3>
    <p class="description">${post.body}</p>

    <div class="tag-list">
        ${tags.join("")}
    </div>
  `;

  postsWrapper.appendChild(postElement);
}

async function renderPosts() {
  const posts = await getPosts();

  posts.forEach((post) => {
    drawPost(post);
  });
}

async function createPost() {
  const newPost = {
    title: "I am in love with someone.",
    userId: 5,
    body: "I am in love with someone.",
    tags: ["love", "relationship", "life"],
  };

  const apiKey = "https://dummyjson.com/posts/add";

  fetch(apiKey, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPost),
  });
}

async function patchPost() {
  const newContent = {
    title: "I am in love with someone.",
    tags: ["love", "relationship", "life"],
  };

  const apiKey = "https://dummyjson.com/posts/1";

  fetch(apiKey, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newContent),
  });
}

async function putPost() {
  const newContent = {
    title: "I am in love with someone.",
    tags: ["love", "relationship", "life"],
  };

  const apiKey = "https://dummyjson.com/posts/1";

  fetch(apiKey, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newContent),
  });
}

async function deletePost() {
  const apiKey = "https://dummyjson.com/posts/2";

  fetch(apiKey, {
    method: "DELETE",
  });
}

deletePost();

renderPosts();
