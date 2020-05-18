const tasks = [
  {
    _id: "5d2ca9e2e03d40b326596aa7",
    completed: false,
    body:
      "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
    title: "Eu ea incididunt sunt consectetur fugiat non.",
  },
  {
    _id: "5d2ca9e29c8a94095c1288e0",
    completed: false,
    body:
      "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
    title:
      "Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.",
  },
  {
    _id: "5d2ca9e2e03d40b3232496aa7",
    completed: true,
    body:
      "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
    title: "Eu ea incididunt sunt consectetur fugiat non.",
  },
  {
    _id: "5d2ca9e29c8a94095564788e0",
    completed: false,
    body:
      "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
    title:
      "Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.",
  },
];
//! Filter by complited
function displayAllTask() {
  const AllTask = document.querySelectorAll("li");
  AllTask.forEach((element) => {
    element.classList.remove("d-md-none");
  });
}

function displayComplitedTask() {
  const notComplited = [...document.querySelectorAll("li")].filter((a) =>
    a.closest(".completed")
  );
  notComplited.forEach((element) => {
    element.classList.add("d-md-none");
  });
  console.log(notComplited);
}

const divs = document.querySelector(".tasks-list-section");

const showAllTaskButton = document.createElement("button");
showAllTaskButton.classList.add(
  "btn",
  "btn-info",
  "mr-auto",
  "mt-auto",
  "mb-auto",
  "all-btn"
);
showAllTaskButton.addEventListener("click", displayAllTask);
showAllTaskButton.textContent = "Show All Task";

const showCompletedTaskButton = document.createElement("button");
showCompletedTaskButton.classList.add(
  "btn",
  "btn-secondary",
  "mr-auto",
  "mt-auto",
  "mb-auto",
  "complited-btn"
);
showCompletedTaskButton.addEventListener("click", displayComplitedTask);
showCompletedTaskButton.textContent = "Show UnComplited Task";

divs.insertAdjacentElement("afterbegin", showCompletedTaskButton);
divs.insertAdjacentElement("afterbegin", showAllTaskButton);
//! Sort by Uncomplited
function sortTask() {
  tasksAll = document.querySelectorAll("li");
  tasksAll.forEach((element) => {
    if (element.classList.contains("completed")) {
      element.parentNode.insertBefore(element, tasksAll[tasksAll.length]);
    }
  });
}

// ! Check tasks

function checkli() {
  if (document.querySelectorAll("li").length) {
    p = document.querySelector(".notask");
    if (p) {
      p.remove();
    }
  }
  if (!document.querySelectorAll("li").length) {
    p = document.createElement("p");
    ul = document.querySelector("ul");
    p.textContent = "no task";
    p.classList.add("notask");
    ul.appendChild(p);
    return ul;
  }
}
//! To GET
(function (arrOfTasks) {
  const objectOftasks = arrOfTasks.reduce((acc, task) => {
    acc[task._id] = task;
    return acc;
  }, {});
  //? themes
  const themes = {
    default: {
      "--base-text-color": "#212529",
      "--header-bg": "#007bff",
      "--completed-bg": "blueviolet",
      "--header-text-color": "#fff",
      "--default-btn-bg": "#007bff",
      "--default-btn-text-color": "#fff",
      "--default-btn-hover-bg": "#0069d9",
      "--default-btn-border-color": "#0069d9",
      "--danger-btn-bg": "#dc3545",
      "--danger-btn-text-color": "#fff",
      "--danger-btn-hover-bg": "#bd2130",
      "--danger-btn-border-color": "#dc3545",
      "--success-btn-bg": "mediumseagreen",
      "--success-btn-text-color": "#fff",
      "--success-btn-hover-bg": "green",
      "--success-btn-border-color": "mediumseagreen",
      "--input-border-color": "#ced4da",
      "--input-bg-color": "#fff",
      "--input-text-color": "#495057",
      "--input-focus-bg-color": "#fff",
      "--input-focus-text-color": "#495057",
      "--input-focus-border-color": "#80bdff",
      "--input-focus-box-shadow": "0 0 0 0.2rem rgba(0, 123, 255, 0.25)",
    },
    dark: {
      "--base-text-color": "#212529",
      "--header-bg": "#343a40",
      "--completed-bg": "cadetblue",
      "--header-text-color": "#fff",
      "--default-btn-bg": "#58616b",
      "--default-btn-text-color": "#fff",
      "--default-btn-hover-bg": "#292d31",
      "--default-btn-border-color": "#343a40",
      "--default-btn-focus-box-shadow":
        "0 0 0 0.2rem rgba(141, 143, 146, 0.25)",
      "--danger-btn-bg": "#b52d3a",
      "--danger-btn-text-color": "#fff",
      "--danger-btn-hover-bg": "#88222c",
      "--danger-btn-border-color": "#88222c",
      "--success-btn-bg": "darkolivegreen",
      "--success-btn-text-color": "#fff",
      "--success-btn-hover-bg": "darkgreen",
      "--success-btn-border-color": "darkolivegreen",
      "--input-border-color": "#ced4da",
      "--input-bg-color": "#fff",
      "--input-text-color": "#495057",
      "--input-focus-bg-color": "#fff",
      "--input-focus-text-color": "#495057",
      "--input-focus-border-color": "#78818a",
      "--input-focus-box-shadow": "0 0 0 0.2rem rgba(141, 143, 146, 0.25)",
    },
    light: {
      "--base-text-color": "#212529",
      "--header-bg": "#fff",
      "--completed-bg": "aquamarine",
      "--header-text-color": "#212529",
      "--default-btn-bg": "#fff",
      "--default-btn-text-color": "#212529",
      "--default-btn-hover-bg": "#e8e7e7",
      "--default-btn-border-color": "#343a40",
      "--default-btn-focus-box-shadow":
        "0 0 0 0.2rem rgba(141, 143, 146, 0.25)",
      "--danger-btn-bg": "#f1b5bb",
      "--danger-btn-text-color": "#212529",
      "--danger-btn-hover-bg": "#ef808a",
      "--danger-btn-border-color": "#e2818a",
      "--success-btn-bg": "lightgreen",
      "--success-btn-text-color": "#fff",
      "--success-btn-hover-bg": "lime",
      "--success-btn-border-color": "lightgreen",
      "--input-border-color": "#ced4da",
      "--input-bg-color": "#fff",
      "--input-text-color": "#495057",
      "--input-focus-bg-color": "#fff",
      "--input-focus-text-color": "#495057",
      "--input-focus-border-color": "#78818a",
      "--input-focus-box-shadow": "0 0 0 0.2rem rgba(141, 143, 146, 0.25)",
    },
  };
  let lastSelectedTheme = localStorage.getItem("app_theme") || "default";
  // ! Elements UI

  const form = document.forms["addTask"];
  const inputTitle = form.elements["title"];
  const inputBody = form.elements["body"];

  const listContainer = document.querySelector(
    ".tasks-list-section .list-group"
  );
  const themeSelect = document.getElementById("themeSelect");

  //! Events
  setThame(lastSelectedTheme);
  themeSelect.value = lastSelectedTheme;
  renderAllTask(objectOftasks);
  sortTask();
  checkli();
  //* Post
  form.addEventListener("submit", onFormSubmitHandler);
  //* Delete
  listContainer.addEventListener("click", onDeleteHandler);
  //* Update
  listContainer.addEventListener("click", onUpdateHandler);
  //* Theme select
  themeSelect.addEventListener("change", onThemeSelectHandler);
  //! Render Task
  function renderAllTask(tasksList) {
    const fragment = document.createDocumentFragment();
    Object.values(tasksList).forEach((task) => {
      const li = listItemTemplate(task);
      fragment.appendChild(li);
    });
    listContainer.appendChild(fragment);
  }

  function listItemTemplate({ _id, title, body, completed } = {}) {
    const li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "align-items-center",
      "flex-wrap",
      "mt-2"
    );
    if (!!completed) {
      li.classList.add("completed");
    }
    li.setAttribute("data-task-id", _id);
    //! task title
    const span = document.createElement("span");
    span.textContent = title;
    span.style.fontWeight = "bold";
    //! Delete task button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete task";
    deleteBtn.classList.add("btn", "btn-danger", "ml-auto", "delete-btn");
    //! Update task button
    const updateBtn = document.createElement("button");
    updateBtn.textContent = "Update task";
    updateBtn.classList.add("btn", "btn-success", "mr-auto", "update-btn");
    // ! Complited checkbox
    const completeBtn = document.createElement("input");
    completeBtn.type = "checkbox";
    completeBtn.name = "complite";
    completeBtn.id = `check-${_id}`;
    if (!!completed) {
      completeBtn.checked = true;
    }
    //! Event on complited checkbox
    completeBtn.addEventListener("change", compliteFunction);

    //? complited checkbox title
    const completeBtnTitle = document.createElement("label");
    completeBtnTitle.htmlFor = `check-${_id}`;
    completeBtnTitle.appendChild(document.createTextNode(`complited?`));
    //? task body
    const article = document.createElement("p");
    article.textContent = body;
    article.classList.add("mt-2", "w-100");

    li.appendChild(span);

    li.appendChild(deleteBtn);
    li.appendChild(updateBtn);

    li.appendChild(article);
    li.appendChild(completeBtn);
    li.appendChild(completeBtnTitle);

    return li;
  }
  //! To POST
  function onFormSubmitHandler(e) {
    e.preventDefault();
    const titleValue = inputTitle.value;
    const bodyValue = inputBody.value;

    if (!titleValue || !bodyValue) {
      alert("Please enter title and body");
      return;
    }
    const task = createNewTask(titleValue, bodyValue);
    const listItem = listItemTemplate(task);
    listContainer.insertAdjacentElement("afterbegin", listItem);
    checkli();
    form.reset();
  }

  function createNewTask(title, body) {
    const newTask = {
      title,
      body,
      completed: false,
      _id: `task-${Math.random()}`,
    };
    objectOftasks[newTask._id] = newTask;
    return { ...newTask };
  }
  //! To DELETE
  function deleteTask(id) {
    const { title } = objectOftasks[id];
    const isConfirm = confirm(`A you sure to delete task : ${title}?`);
    if (!isConfirm) return isConfirm;
    delete objectOftasks[id];
    return isConfirm;
  }
  function deleteTaskFromHtml(el, confirmed) {
    if (!confirmed) return;
    el.remove();
  }

  function onDeleteHandler({ target }) {
    if (target.classList.contains("delete-btn")) {
      const parent = target.closest("[data-task-id]");
      const id = parent.dataset.taskId;
      const confirmed = deleteTask(id);
      deleteTaskFromHtml(parent, confirmed);
      checkli();
    }
  }
  //! To UPDATE
  function generateUpdateForm(parent, id) {
    const form = document.createElement("form");

    const newTitle = document.createElement("input");
    newTitle.setAttribute("type", "text");
    newTitle.setAttribute("name", "upd-title");
    newTitle.setAttribute(
      "value",
      `${parent.querySelector("span").textContent}`
    );
    newTitle.setAttribute("id", "upd-title");
    newTitle.classList.add("form-control");

    const newBody = document.createElement("input");
    newBody.setAttribute("type", "text");
    newBody.setAttribute("name", "upd-body");
    newBody.setAttribute("value", `${parent.querySelector("p").textContent}`);
    newBody.setAttribute("id", "upd-body");
    newBody.classList.add("form-control", "mt-3");

    const updBtn = document.createElement("button");
    updBtn.setAttribute("type", "submit");
    updBtn.setAttribute("id", "upd-btn");
    updBtn.textContent = "update";
    updBtn.classList.add("btn", "btn-primary", "mt-4");

    const resetBtn = document.createElement("button");
    resetBtn.setAttribute("type", "reset");
    resetBtn.setAttribute("id", `reset-btn`);
    resetBtn.textContent = "reset";
    resetBtn.classList.add("btn", "btn-warning", "mt-4");

    form.appendChild(newTitle);
    form.appendChild(newBody);
    form.appendChild(updBtn);
    form.appendChild(resetBtn);
    form.setAttribute("data-form-id", `form-${id}`);
    return form;
  }

  function onUpdateHandler({ target }) {
    if (target.classList.contains("update-btn")) {
      const parent = target.closest("[data-task-id]");
      const id = parent.dataset.taskId;
      const formUpdate = generateUpdateForm(parent, id);
      if (parent.querySelector("form")) return;
      const newForm = parent.insertAdjacentElement("beforeend", formUpdate);
      const remove = newForm.querySelector(".btn-warning");
      const update = newForm.querySelector(".btn-primary");
      const newTitle = newForm.elements["upd-title"].value;
      const newBody = newForm.elements["upd-body"].value;
      update.onclick = function (e) {
        e.preventDefault();
        if (!newTitle || !newBody) {
          alert("Please enter title and body");
          return;
        }
        const title = parent.querySelector("span");
        const body = parent.querySelector("p");
        title.textContent = newTitle;
        body.textContent = newBody;
        newForm.remove();
      };
      remove.onclick = function (e) {
        newForm.remove();
      };
    }
  }
  function compliteFunction({ target }) {
    target.parentElement.classList.toggle("completed");
    sortTask();
  }

  //! to change theme

  function onThemeSelectHandler(e) {
    const selectedTheme = themeSelect.value;
    const isConfirmed = confirm(
      ` Are you sure to change theme ${selectedTheme}`
    );
    if (!isConfirmed) {
      themeSelect.value = lastSelectedTheme;
      return;
    }
    setThame(selectedTheme);
    lastSelectedTheme = selectedTheme;
    localStorage.setItem("app_theme", selectedTheme);
  }

  function setThame(name) {
    const selectedThemObj = themes[name];
    Object.entries(selectedThemObj).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
    
  }
})(tasks);
