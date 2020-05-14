const tasks = [
  {
    _id: "5d2ca9e2e03d40b326596aa7",
    completed: true,
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
//! To GET
(function (arrOfTasks) {
  if (!tasks.length) {
    console.error("no task list");
    return;
  }
  const objectOftasks = arrOfTasks.reduce((acc, task) => {
    acc[task._id] = task;
    return acc;
  }, {});
  // console.log(objectOftasks);
  // * Elements UI

  const form = document.forms["addTask"];
  const inputTitle = form.elements["title"];
  const inputBody = form.elements["body"];

  const listContainer = document.querySelector(
    ".tasks-list-section .list-group"
  );

  //! Events
  renderAllTask(objectOftasks);
  form.addEventListener("submit", onFormSubmitHandler);
  listContainer.addEventListener("click", onDeleteHandler);
  //? update
  listContainer.addEventListener("click", onUpdateHandler);
  //   listContainer.addEventListener("click", confirmUpdate);

  function renderAllTask(tasksList) {
    if (!tasksList) {
      console.error("No task list");
      return;
    }
    const fragment = document.createDocumentFragment();
    Object.values(tasksList).forEach((task) => {
      const li = listItemTemplate(task);
      fragment.appendChild(li);
    });
    listContainer.appendChild(fragment);
  }

  function listItemTemplate({ _id, title, body } = {}) {
    const li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "align-items-center",
      "flex-wrap",
      "mt-2"
    );
    li.setAttribute("data-task-id", _id);

    const span = document.createElement("span");
    span.textContent = title;
    span.style.fontWeight = "bold";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete task";
    deleteBtn.classList.add("btn", "btn-danger", "ml-auto", "delete-btn");

    const updateBtn = document.createElement("button");
    updateBtn.textContent = "Update task";
    updateBtn.classList.add("btn", "btn-success", "mr-auto", "update-btn");

    const article = document.createElement("p");
    article.textContent = body;
    article.classList.add("mt-2", "w-100");

    li.appendChild(span);

    li.appendChild(deleteBtn);
    li.appendChild(updateBtn);
    li.appendChild(article);

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
})(tasks);
