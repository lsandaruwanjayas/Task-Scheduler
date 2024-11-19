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

openTaskFormBtn.addEventListener("click",  () => {
    taskForm.classList.toggle("hidden")
})