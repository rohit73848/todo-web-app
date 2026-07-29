let tasks = [];

let input = document.querySelector("input");
let taskBtn = document.querySelector(".add-task-btn");

taskBtn.addEventListener("click", (e) => {
  if (input.value === "") {
    document.querySelector("small").style.display = "initial";
  } else {
    tasks.push({
      text: input.value,
      completed: false,
      id: Date.now(),
    });
    console.log(tasks);
    document.querySelector("small").style.display = "none";
    input.value = "";
  }
});
