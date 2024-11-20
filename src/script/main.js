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

const addOrUpdateTask = () => {
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

  updateTaskContainer();
  reset();
};

const updateTaskContainer = () => {
tasksContainer.innerHTML = "";
  taskData.forEach(({ id, title, date, description }) => {
    tasksContainer.innerHTML += `<div class="task" id="${id}">
    <p><strong>Title: </strong>${title}</p>
    <p><strong>Date: </strong>${date}</p>
    <p><strong>Description: </strong>${description}</p>
    <button type="button" class="btn">Edit</button>
    <button type="button" class="btn">Delete</button>
    </div>`;
  });

};

const reset = () => {
  titleInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";

  taskForm.classList.toggle("hidden");
  currentTask = {};
};

openTaskFormBtn.addEventListener("click", () => {
  taskForm.classList.toggle("hidden");
});

closeTaskFormBtn.addEventListener("click", () => {
  const formInputsContainValues =
    titleInput.value || dateInput.value || descriptionInput.value;
  if (formInputsContainValues) {
    confirmCloseDialog.showModal();
  } else {
    reset();
  }
});

cancelBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
});

discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  reset();
});

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addOrUpdateTask()
});
