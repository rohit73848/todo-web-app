let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
// console.log(tasks)
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

let input = document.querySelector("input");
let taskBtn = document.querySelector(".add-task-btn");
let taskList = document.querySelector(".task-list");

function addTask() {
  if (input.value === "" || input.value === " ") {
    document.querySelector("small").style.display = "initial";
  } else {
    tasks.push({
      text: input.value,
      completed: false,
      id: Date.now(),
    });
    saveTasks();
    render();
    document.querySelector("small").style.display = "none";
    input.value = "";
  }
}

taskBtn.addEventListener("click", (e) => {
  addTask();
});
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
      addTask();
  }
});

function render() {
  let html = tasks
    .map((task) => {
      return `
            <li data-id="${task.id}">
                <span class="${task.completed === true ? "completed" : ""}">${task.text}</span>
                <div class="toggle-box ${task.completed === true ? "checked" : ""}"></div>
                <span class="delete-btn">✕</span>
            </li>
        `;
    })
    .join("");

  document.querySelector(".task-list").innerHTML = html;
}
taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("toggle-box")) {
    let li = e.target.closest("li");
    let id = Number(li.dataset.id);

    let tsk = tasks.find((T) => T.id === id);
    tsk.completed = !tsk.completed;
    render();
    saveTasks();
  } else if (e.target.classList.contains("delete-btn")) {
    let li = e.target.closest("li");
    let id = Number(li.dataset.id);

    tasks = tasks.filter((T) => T.id !== id);
    render();
    saveTasks();
  }
});
render();
