import createTask from "../utils/createTask.js";

const input = document.querySelector("#new-task");
const buttonAdd = document.querySelector("#add-task");

export default (todolist) => {
    buttonAdd.addEventListener("click", (e) => createTask(input.value, todolist));
}

