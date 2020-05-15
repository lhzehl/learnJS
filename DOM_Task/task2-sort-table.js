//! last mentor example
const users = [
  {
    _id: "5d220b10e8265cc978e2586b",
    isActive: true,
    balance: 2853.33,
    age: 20,
    name: "Buckner Osborne",
    gender: "male",
    company: "EMPIRICA",
    email: "bucknerosborne@empirica.com",
    phone: "+1 (850) 411-2997",
    registered: "2018-08-13T04:28:45 -03:00",
    nestedField: { total: 300 },
  },
  {
    _id: "5d220b10144ef972f6c2b332",
    isActive: true,
    balance: 1464.63,
    age: 38,
    name: "Rosalie Smith",
    gender: "female",
    company: "KATAKANA",
    email: "rosaliesmith@katakana.com",
    phone: "+1 (943) 463-2496",
    registered: "2016-12-09T05:15:34 -02:00",
    nestedField: { total: 400 },
  },
  {
    _id: "5d220b1083a0494655cdecf6",
    isActive: false,
    balance: 2923.39,
    age: 40,
    name: "Estrada Davenport",
    gender: "male",
    company: "EBIDCO",
    email: "estradadavenport@ebidco.com",
    phone: "+1 (890) 461-2088",
    registered: "2016-03-04T03:36:38 -02:00",
    nestedField: { total: 200 },
  },
];
const tableSchema = {
  index: "#",
  name: "Name",
  email: "Email",
  balance: "Balance",
};
//! Sort

function sortTable(table, target) {
  let shouldSwitch = true;
  rows = table.querySelectorAll("tr");
  // console.log(target.classList.value);

  let switching = true;
  //* Make a loop that will continue until
  //* no switching has been done:
  while (switching) {
    // * start by saying: no switching is done
    switching = false;
    // * Loop through all list-items
    for (let i = 0; i < rows.length - 1; i++) {

      // * start by saying there should be no switching
      shouldSwith = false;
      // * check if the next item should
      // * switch place with the current item
      // * besed on the button class
      if (target.classList.contains("fa-angle-up")) {
        //* if next item is numerically
        //* lower than current item, mark as a switch
        //* and break the loop
        if (
          Number(
            rows[i].querySelectorAll("td")[
              rows[i].querySelectorAll("td").length - 1
            ].textContent
          ) >
          Number(
            rows[i + 1].querySelectorAll("td")[
              rows[i].querySelectorAll("td").length - 1
            ].textContent
          )
        ) {
          shouldSwitch = true;
          break;
        }
      } else if (target.classList.contains("fa-angle-down")) {
        //* if next item is numerically
        //* higher than current item, mark as a switch
        //* and break the loop
        if (
          Number(
            rows[i].querySelectorAll("td")[
              rows[i].querySelectorAll("td").length - 1
            ].textContent
          ) <
          Number(
            rows[i + 1].querySelectorAll("td")[
              rows[i].querySelectorAll("td").length - 1
            ].textContent
          )
        ) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
      //*   If a switch has been marked, make the switch
      //* and mark that a switch has been done
        // console.log(rows[i]);
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      }
    }
  }
}

function sortClickFunction({ target }) {
  // if (
  //   target.classList.contains("fa-angle-up") ||
  //   target.classList.contains("fa-angle-down")
  // ) {
  //   target.classList.toggle("fa-angle-down");
  //   target.classList.toggle("fa-angle-up");
  // } else {
  //   target.classList.add("fa-angle-up");
  // }
  target.classList.toggle("fa-angle-down");
  target.classList.toggle("fa-angle-up");
  const table = document.querySelector("tbody");
  // rows = tbl.querySelectorAll("tr");
  // console.log("table: ", tbl);
  // console.log("rows :", rows);
  sort = sortTable(table, target);
}

function createSortButton() {
  btn = document.createElement("button");
  btn.classList.add("btn", "btn-primary", "fas", "fa-angle-up");
  btn.textContent = `Sort`;
  btn.addEventListener("click", sortClickFunction);
  return btn;
}

function generateThead(tableSchema) {
  const button = createSortButton();
  const thead = document.createElement("thead");
  const tr = generateTr(tableSchema, "th");
  thead.appendChild(button);
  thead.appendChild(tr);
  return thead;
}

function generateTr(tableSchema, tagName = "td") {
  const tr = document.createElement("tr");
  Object.values(tableSchema).forEach((val) => {
    const td = document.createElement(tagName);
    td.textContent = val;
    tr.appendChild(td);
  });
  return tr;
}

function generateTbody(tableSchema, items) {
  const tbody = document.createElement("tbody");
  items.forEach((item, index) => {
    item.index = index + 1;
    const itemSchema = generateItemsSchema(tableSchema, item);
    const tr = generateTr(itemSchema, "td");
    tbody.appendChild(tr);
  });
  return tbody;
}

function generateItemsSchema(tableSchema, item) {
  const itemSchema = Object.keys(tableSchema).reduce((acc, key) => {
    if (key in item) {
      acc[key] = item[key];
    }
    return acc;
  }, {});
  return itemSchema;
}

function generateTableTemplate() {
  const table = document.createElement("table");
  table.classList.add("table");
  return table;
}

function generateTotalBalance(tableSchema, items) {
  const total = items.reduce((acc, item) => {
    return acc + parseFloat(item.balance);
  }, 0);
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  const columnCounts = Object.keys(tableSchema).length;
  td.insertAdjacentHTML("beforeend", `Total balance: <b>${total}</b>`);
  td.setAttribute("colspan", columnCounts);
  td.setAttribute("align", "right");

  tr.appendChild(td);
  return tr;
}

function initTable(tableSchema, items) {
  const container = document.querySelector(".table-container");
  const table = generateTableTemplate();
  const header = generateThead(tableSchema);
  const body = generateTbody(tableSchema, items);
  const total = generateTotalBalance(tableSchema, items);

  table.appendChild(header);
  table.appendChild(body);

  table.appendChild(total);
  container.appendChild(table);
}

initTable(tableSchema, users);
