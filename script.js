let tasks = [];

let input = document.querySelector("input");
let taskBtn = document.querySelector(".add-task-btn");
let taskList = document.querySelector(".task-list");

taskBtn.addEventListener("click", (e) => {
  if (input.value === "") {
    document.querySelector("small").style.display = "initial";
  } else {
    tasks.push({
      text: input.value,
      completed: false,
      id: Date.now(),
    });
    render()
    console.log(tasks);
    document.querySelector("small").style.display = "none";
    input.value = "";
  }
});
function render() {
  let html = tasks
    .map((task) => {
      return `
            <li data-id="${task.id}">
                <span>${task.text}</span>
                <div class="toggle-box"></div>
                <span class="delete-btn">✕</span>
            </li>
        `;
    })
    .join("");

  document.querySelector(".task-list").innerHTML = html;
}
