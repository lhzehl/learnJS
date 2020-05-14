const btn = document.querySelector("button");
const link = document.querySelector("a");
// btn.onclick = function(){
//     console.log('click')
// }

// btn.addEventListener('click', function (event) {
//     console.log(event)
// })

// function clickHandler(e) {
//   e.preventDefault();
//   console.log(this);
//   console.log("click");
// }

// link.addEventListener("click", clickHandler);

// link.removeEventListener("click", clickHandler);

// btn.addEventListener("click", (e) => {
//   console.log(this);
//   console.log(e);
// });

// console.dir(btn);
const container = document.querySelector(".container");
btn.addEventListener("click", (e) => {
  const div = document.createElement("div");
  const nestedBtn = document.createElement("button");
  nestedBtn.textContent = "button";
  div.textContent = Math.random();
  div.appendChild(nestedBtn);
  container.appendChild(div);
});

function asf(e) {
  console.dir(e.target);

  if (e.target.tagName === "BUTTON") {
    e.stopPropagation();
    e.target.classList.add("btn-primary");
    console.log("button clicked");
  }
}
// container.addEventListener("mouseover", asf);
// container.removeEventListener("mouseout", asf);
