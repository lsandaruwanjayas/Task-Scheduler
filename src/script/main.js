const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close");
const openTaskFormBtn = document.getElementById("new-task");
const closeTaskFormBtn = document.getElementById("close");
const addOrUpdateTaskBtn = document.getElementById("add-task");
const cancelBtn = document.getElementById("cancel");
const discardBtn = document.getElementById("discard");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title");
const dateInput = document.getElementById("date");
const descriptionInput = document.getElementById("description");

const taskData = [];
let currentTask = {};

openTaskFormBtn.addEventListener("click", () => {
  taskForm.classList.toggle("hidden");
});

closeTaskFormBtn.addEventListener("click", () => {
  confirmCloseDialog.showModal();
});

cancelBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
});

discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  taskForm.classList.toggle("hidden");
});

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);

  const taskObj = {
    id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
    title: titleInput.value,
    date: dateInput.value,
    description: descriptionInput.value,
  };

  if (dataArrIndex === -1) {
    taskData.unshift(taskObj);
  }
  taskData.forEach(({ id, title, date, description }) => {
    tasksContainer.innerHTML += `<div class="task" id="${id}"></div>
    <p><strong>Title: </strong>${title}</p>
    <p><strong>Date: </strong>${date}</p>
    <p><strong>Description: </strong>${description}</p>`
  });
});
