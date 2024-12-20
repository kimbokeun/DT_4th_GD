let posts = [];

function displayPosts() {
  const postsContainer = document.getElementById("posts");
  postsContainer.innerHTML = "";
  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
      <h3 id="title-${post.id}">${post.title}</h3>
      <p id="body-${post.id}">${post.body}</p>
      <button type="button" onclick="deletePost(${post.id})">삭제</button>
      <button type="button" onclick="startEditPost(${post.id})">수정</button>
    `;
    postsContainer.appendChild(postElement);
  });
}

function fetchPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      posts = data.slice(0, 10);
      displayPosts();
    })
    .catch((err) => console.error(err));
}

document.getElementById("fetchPosts").addEventListener("click", fetchPosts);

function startEditPost(id) {
  const post = posts.find((post) => post.id === id);
  if (!post) return;

  const titleElement = document.getElementById(`title-${id}`);
  const bodyElement = document.getElementById(`body-${id}`);

  titleElement.innerHTML = `<input type="text" id="edit-title-${id}" value="${post.title}">`;
  bodyElement.innerHTML = `<textarea id="edit-body-${id}">${post.body}</textarea>`;
  const editButton = document.querySelector(
    `button[onclick="startEditPost(${id})"]`,
  );
  editButton.textContent = `저장`;
  editButton.setAttribute("onclick", `saveEditPost(${id})`);
}

function saveEditPost(id) {
  const editedTitle = document.getElementById(`edit-title-${id}`).value;
  const editedBody = document.getElementById(`edit-body-${id}`).value;

  const postIndex = posts.findIndex((post) => post.id === id);
  if (postIndex > -1) {
    posts[postIndex].title = editedTitle;
    posts[postIndex].body = editedBody;
    displayPosts();
  }
}

function deletePost(id) {
  posts = posts.filter((post) => {
    
  })
}