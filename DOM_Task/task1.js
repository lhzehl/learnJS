const head = document.head;
const body = document.body;
console.log(head);
console.log(body);
console.log(body.children);
div = document.querySelector("div");
console.log(div);
console.log(div.children);
let arr = Array.from(div.children);
console.log(arr);
arr.pop();
arr.shift();
console.log(arr);
console.log(div.firstChild);
//////

function isParent(parent, child) {
  let newParent = child.parentElement;
  while (newParent) {
    if (parent != newParent) {
      newParent = newParent.parentElement;
      //   return newParent;
    } else {
      return newParent === parent;
    }
  }
  return newParent === parent;
}
console.log(
  isParent(document.body.children[0], document.querySelector("mark"))
);
console.log(
  isParent(document.querySelector("ul"), document.querySelector("mark"))
);

// console.clear();

ul = document.querySelector("ul");
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);

href = document.querySelectorAll("a");
console.dir(href);
for (let i = 0; i < href.length; i++) {
  if (isParent(ul, href[i])) {
    continue;
  } else {
    console.log(href[i], href[i].href);
  }
}
