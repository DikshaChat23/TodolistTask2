// DOM references
const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Event listener to add a task
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    addTask(taskText);
    taskInput.value = "";
  }
});

// Add task function
function addTask(taskText) {
  const li = document.createElement("li");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  // Mark as completed
  taskSpan.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("remove-btn");

  removeBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(taskSpan);
  li.appendChild(removeBtn);
  taskList.appendChild(li);
}
