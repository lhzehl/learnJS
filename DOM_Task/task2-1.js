// * Part1
const ul = document.querySelector("ul");
const p = document.querySelector("p");
console.log(p.textContent);

function nodeInfo(node) {
  return {
    typeNode: node.nodeType,
    nameNode: node.nodeName,
    nubmerOfChildNodes: node.childNodes.length,
  };
}
span = document.querySelector("span");

// console.log(nodeInfo(ul))
console.log(ul.children);
function getTextFromUl(ul) {
  let a = [];
  for (let i = 0; i < ul.children.length; i++) {
    a.push(ul.children[i].textContent);
  }
  return a;
}
console.log(getTextFromUl(ul));

console.log(p.childNodes);
function changer(el) {
  let text = "";
  nodes = el.childNodes;
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].nodeName === "#text") {
      console.log(nodes[i].textContent);
      nodes[i].textContent = "-text-";
    }
    text += nodes[i];
  }
  return el;
}
console.log(changer(p));
//? class custom-link, list; id link
console.clear();
//* Part2
ul.classList.add("list");
console.dir(ul);
const a = document.querySelectorAll("a");

// a.classList.add("custom-link");
a.forEach((element) => {
  //?task4 +2
  element.classList.add("custom-link");
  //?task2
  let prev = element.previousElementSibling;
  if (prev != ul) {
    while (prev) {
      prev = prev.previousElementSibling;
    }
  } else {
    element.id = "link";
  }
});

console.log(a);

const li = document.querySelectorAll("li");
for (let i = 0; i < li.length; i++) {
  if (i % 2 == 0) {
    li[i].classList.add("item");
  }
}
console.log(li);
console.clear();
//* Part 3. final
// console.log(ul);

const newli = ul.querySelectorAll("li");
const l = newli.length;
for (let i = newli.length; i < l + 5; i++) {
  ul.insertAdjacentHTML("beforeend", `<li class="newitem">item ${i + 1} </li>`);
}
console.log(ul);
//! same with create element
const counts = 4;
const totalCounts = ul.children.length + counts;
for (let i = ul.children.length; i < totalCounts; i++) {
  const li = document.createElement("li");
  li.classList.add("new-item2");
  li.textContent = `item2 ${i + 1}`;
  ul.appendChild(li);
}
//!
let newLi = document.querySelectorAll("li");

const strong1 = document.createElement("strong");
console.log(strong1);
newLi.forEach((element) => {
  // var strong = document.querySelector('strong')
  if (element.querySelector("a")) {
    // element.textContent = `<strong> ${element.textContent} </strong>`;
    // element.insertAdjacentHTML("afterend", ` </strong>`);
    // strong.insertAdjacentHTML('beforebegin', f)
    // f.insertAdjacentElement('beforeend', strong1);
  }
});
console.log(newLi);
const body = document.body;
const image = document.createElement("img");
image.src = "#";
image.alt = "newbatman";
body.insertAdjacentElement("afterbegin", image);

const mark = document.querySelector("mark");
mark.textContent += " green";
mark.classList.add("green");

console.log(mark);