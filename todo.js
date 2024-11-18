window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   const addButton = document.getElementById("add-btn");
   const newTaskInput = document.getElementById("new-task");

   addButton.addEventListener("click", addBtnClick);

   newTaskInput.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
         addBtnClick();
      }
   });
}

function addBtnClick() {
   const newTaskInput = document.getElementById("new-task");
   const task = newTaskInput.value.trim(); 

   if (task === "") {
      return;
   }

   addTask(task);

   newTaskInput.value = "";
   newTaskInput.focus();
}

function addTask(task) {
   const newTaskElement = document.createElement("li");
   newTaskElement.innerHTML = `<span class="task-text">${task}</span><button class="done-btn">&#10006;</button>`;

   const taskList = document.querySelector("ol");
   taskList.appendChild(newTaskElement);

   const doneButton = newTaskElement.querySelector(".done-btn");
   doneButton.addEventListener("click", removeTask);
}

function removeTask(event) {
   const listItem = event.target.parentNode; 
   const taskList = document.querySelector("ol");

   taskList.removeChild(listItem);
}
