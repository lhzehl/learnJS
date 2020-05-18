// console.log(1);

// console.log(2);

// setTimeout(() => {
//   console.log(3);
// }, 0);
// console.log(4);

const btn = document.querySelector("button");
const container = document.querySelector(".container");
function getPosts(cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  // console.log(xhr);

  xhr.addEventListener("load", () => {
    const response = JSON.parse(xhr.responseText);
    // console.log(response);
    cb(response);
  });

  xhr.addEventListener("error", () => {
    console.log("error");
  });

  xhr.send();
}
function renderPosts(response) {
  const fragment = document.createDocumentFragment();
  response.forEach((post) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = post.title;
    const article = document.createElement("p");
    article.textContent = post.body;
    article.classList.add("card-text");
    cardBody.appendChild(title);
    cardBody.appendChild(article);
    card.appendChild(cardBody);
    fragment.appendChild(card);
  });
  container.appendChild(fragment);
}

btn.addEventListener("click", (e) => {
  getPosts(renderPosts);
});
