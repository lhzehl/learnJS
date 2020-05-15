//* Реализовать примитивный дропдаун. Изначально все dropdown-menu скрыты через класс .d-none.
//*  При клике на dropdown-item должен отображаться блок dropdown-menu
//*  который вложен именно в тот  dropdown-item на котором произошел клик.
//*  При повторном клике на этот же dropdown-item блок dropdown-menu должен закрыться.
//*   При клике на любой другой dropdown-item уже открытый dropdown-menu должен закрываться
//*   а на тот который кликнули открываться.

const dropdownItem = document.querySelector(".dropdown-item");
const dropdownItem2 = document.querySelectorAll(".dropdown-item");

for (let i = 0; i < dropdownItem2.length; i++) {
  dropdownItem2[i].addEventListener("click", hideOrDisplay);
}



function changeOtherItems(parent) {
  let prev = parent.previousElementSibling;

  while (prev) {
    
    if (prev.classList.contains("dropdown-item")) {

      const changePrevItem = prev.querySelector(".dropdown-menu");
      console.log(changePrevItem);
      if (changePrevItem.classList.contains("d-none")) {
        break;
      } else {
        changePrevItem.classList.add("d-none");
      }
    }
    prev = prev.previousElementSibling;
  }

  let next = parent.nextElementSibling;
  while (next) {
    
    if (next.classList.contains("dropdown-item")) {
        
      let changeNextItem = next.querySelector(".dropdown-menu");
      console.log(changeNextItem);
      if (changeNextItem.classList.contains("d-none")) {
        break;
      } else {
        changeNextItem.classList.add("d-none");
      }
    }
    next = next.nextElementSibling;
  }
}

function hideOrDisplay({ target }) {
  const parent = target.closest(".dropdown-item");

  const changeClassItem = parent.querySelector(".dropdown-menu");

  if (changeClassItem.classList.contains("d-none")) {
    changeClassItem.classList.remove("d-none");
    changeOtherItems(parent);
  } else {

    changeClassItem.classList.add("d-none");
  }

}

