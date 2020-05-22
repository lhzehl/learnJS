// add-favorite

function takeDataFromTicket(parent) {
  const img = parent.querySelector("img").src;
  const id = parent.id;
  const airline_name = parent.querySelector(".ticket-airline-name").textContent;
  const [origin_el, destination_el] = parent
    .querySelector(".ticket-destination")
    .querySelectorAll("span");
  const [data_el, price_el] = parent
    .querySelector(".ticket-time-price")
    .querySelectorAll("span");
  const [transfers_el, flight_number_el] = parent
    .querySelector(".ticket-additional-info")
    .querySelectorAll("span");

  const origin_name = origin_el.textContent;
  const destination_name = destination_el.textContent;
  const data = data_el.textContent;
  const price = price_el.textContent;
  const transfers = transfers_el.textContent;
  const flight_number = flight_number_el.textContent;
  return {
    img,
    id,
    airline_name,
    origin_name,
    destination_name,
    data,
    price,
    transfers,
    flight_number,
  };
}

function addNewTicketsToFavorite(data) {
  const fragment = document.createDocumentFragment();
  const div1 = document.createElement("div");
  div1.classList.add("favorite-item", "d-flex", "align-items-start");
  div1.id = data.id;
  const img = document.createElement("img");
  img.classList.add("favorite-item-airline-img");
  img.src = data.img;
  const div2 = document.createElement("div");
  div2.classList.add("favorite-item-info", "d-flex", "flex-column");
  const div3 = document.createElement("div");
  div3.classList.add(
    "favorite-item-destination",
    "d-flex",
    "align-items-center"
  );
  const div4 = document.createElement("div");
  div4.classList.add("d-flex", "align-items-center", "mr-auto");
  const span1 = document.createElement("span");
  span1.classList.add("favorite-item-city");
  span1.textContent = data.origin_name;
  const i1 = document.createElement("i");
  i1.classList.add("medium", "material-icons");
  i1.textContent = "flight_takeoff";
  div4.appendChild(span1);
  div4.appendChild(i1);

  const div5 = document.createElement("div");
  div5.classList.add("d-flex", "align-items-center");
  const span2 = document.createElement("span");
  span2.classList.add("favorite-item-city");
  span2.textContent = data.destination_name;
  const i2 = document.createElement("i");
  i2.classList.add("medium", "material-icons");
  i2.textContent = "flight_land";
  div5.appendChild(span2);
  div5.appendChild(i2);
  div3.appendChild(div4);
  div3.appendChild(div5);

  const div6 = document.createElement("div");
  div6.classList.add("ticket-time-price", "d-flex", "align-items-center");
  const span3 = document.createElement("span");
  span3.classList.add("ticket-time-departure");
  span3.textContent = data.data;
  const span4 = document.createElement("span");
  span4.classList.add("ticket-price", "ml-auto");
  span4.textContent = data.price;
  div6.appendChild(span3);
  div6.appendChild(span4);

  const div7 = document.createElement("div");
  div7.classList.add("ticket-additional-info");
  const span5 = document.createElement("span");
  span5.classList.add("ticket-transfers");
  span5.textContent = data.transfers;
  const span6 = document.createElement("span");
  span6.classList.add("ticket-flight-number");
  span6.textContent = data.flight_number;
  div7.appendChild(span5);
  div7.appendChild(span6);

  const delbtn = document.createElement("a");
  delbtn.classList.add(
    "waves-effect",
    "waves-light",
    "btn-small",
    "pink", "darken-3",
    "delete-favorite",
    "ml-auto"
  );
  delbtn.textContent = "Delete";
  delbtn.addEventListener("click", onDelete);

  div1.appendChild(img);

  div2.appendChild(div3);
  div2.appendChild(div6);
  div2.appendChild(div7);
  div2.appendChild(delbtn);
  div1.appendChild(div2);
  fragment.appendChild(div1);

  return fragment;
}
function onDelete({ target }) {
  console.log(target);
}

function FavoriteHandler({ target }) {
  const placeToAdd = document.querySelector(".favorites");

  const parent = target.closest(".ticket-card");
  const data = takeDataFromTicket(parent);
  if (document.getElementById(`f${data.id}`)) {
    return;
  }
  const favoriteTicket = addNewTicketsToFavorite(data);
  const dropdown = document.querySelector(".dropdown-content");
  const add = dropdown.appendChild(favoriteTicket);

  //   if (!document.querySelector(".favorite-item").length) {
  //     return;
  //   } else {
  //     const deletebtns = document.querySelectorAll(".favorite-item");
  //     deletebtns.forEach((el) => {
  //       del = el.querySelector(".delete-favorite");
  //       del.addEventListener('click', onDelete)
  //     });
  //   }
}

class AddToFavoriteUI {
  constructor() {
    this.addbtns = {};
  }
  action(container) {
    this.addbtns = container.querySelectorAll(".add-favorite");
    this.addbtns.forEach((btn) => {
      btn.addEventListener("click", FavoriteHandler);
    });
  }
}
// function addToFavoriteHandler(target) {
//   console.log(target);
// }

const addToFavoriteUI = new AddToFavoriteUI();
export default addToFavoriteUI;

// const addToFavoriteBtn = document.querySelectorAll(".add-favorite");
// addToFavoriteBtn.addEventListener("click", addToFavoriteHandler);

//  export default function addToFavoriteHandler(target){
//     console.log(target)
// }
