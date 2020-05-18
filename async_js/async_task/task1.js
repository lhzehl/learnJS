// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
// xhr.addEventListener("load", () => {
//   const response = JSON.parse(xhr.responseText);
//   console.log(response);
// });
// xhr.send();

const btn = document.querySelector("button");
const container = document.querySelector(".container");
function getUsers(cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
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

function renderUsers(response) {
  const fragment = document.createDocumentFragment();
  response.forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const username = document.createElement("h5");
    username.classList.add("card-title");
    username.textContent = user.username;

    username.addEventListener("click", loadFullInfoHandler);
    function loadFullInfoHandler({ target }) {
      //   console.log(target);
      parent = target.closest(".card-body");
      if (parent.querySelector("ul")) return;
      const userFullInfoFragment = document.createDocumentFragment();
      response.forEach((user) => {
        if (user.username === target.textContent) {
        //   console.log(user);
          const ul = document.createElement("ul");
          const name = document.createElement("li");
          name.textContent = `name: ${user.name}`;
          const email = document.createElement("li");
          email.textContent = `email: ${user.email}`;

          const phone = document.createElement("li");
          phone.textContent = `phone : ${user.phone}`;

          const website = document.createElement("li");
          website.textContent = `website: ${user.website}`;

          ul.appendChild(name);
          ul.appendChild(email);
          ul.appendChild(phone);
          ul.appendChild(website);
          userFullInfoFragment.appendChild(ul);
        }
        parent.appendChild(userFullInfoFragment);
      });

      //   console.log(parent);
    }

    // const article = document.createElement("p");
    // article.textContent = user.username;
    // article.classList.add("card-text");
    cardBody.appendChild(username);
    // cardBody.appendChild(article);
    card.appendChild(cardBody);
    fragment.appendChild(card);
  });
  container.appendChild(fragment);
}

btn.addEventListener("click", (e) => {
  getUsers(renderUsers);
});
