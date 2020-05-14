const div = document.querySelector("div");
const titles = document.querySelectorAll("h1");
////
console.log(Array.from(titles));

console.log([...titles]);
console.log(titles);
link = div.querySelector(".link");
////

div.classList.add("link", "custom");
div.classList.remove("link");
// div.classList.toggle('toggle')
// console.log(div.classList)
// console.log(link.href)

// div.setAttribute('id', 'batman')
// div.hasAttribute('id')
// div.removeAttribute('id')
// div.dataset
// *DOM Manipulations
const title = document.querySelector("h1");
// title.innerHTML = "<span>text</span>";
// title.textContent = "<span>text</span>";

// title.appendChild("<span>text</span>");
// title.insertAdjacentHTML("beforebegin", "<h2>h2 title</h2>");
// title.insertAdjacentElement
// title.innerHTML += "<span>text</span>";
// const span = title.querySelector("span");
// console.log(span);
// title.innerHTML += "<span>new text 2</span>";
// span.textContent = "sdfsdf";

// *Create Element

const span = document.createElement("span");
span.textContent = "span created by created element";
span.classList.add("custom-class");
console.log(span);
title.appendChild(span);

// div.appendChild(span); // ! span nodes only at 1 place, need double(?)

const fragment = document.createDocumentFragment();
const colors = ["black", "yellow", "orange"];
colors.forEach((color) => {
  const item = document.createElement("div");
  item.classList.add(`bd-${color}`);
  item.style.background = color;
  item.textContent = color;
  fragment.appendChild(item);
});

document.body.appendChild(fragment);

// * Delete Element
// title.remove()
// title.parentElement.removeChild(title) //? IE 10<

