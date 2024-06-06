import createDiv from "./createDiv.js";
import getDate from "./getDate.js";
import taskDelete from "../handler/taskDelete.js";
import taskUpdate from "../handler/taskUpdate.js";
import score from "./score.js";

const containerTask = document.querySelector(".containerTask");
const input = document.querySelector("#new-task");

/**
 * Créer une tâche et ajoute les listeners
 */
export default (value, todolist) => {
  const task = createDiv("div", containerTask, "task");
  const updateShow = createDiv('div', task, 'updateShow open')
  const taskStyle = { display: "flex" }
  createDiv("div", updateShow, "taskName", value, taskStyle);
  const containerButtons = createDiv("div", updateShow, "containerButtons");
  const buttonDelete = createDiv("button", containerButtons, "deleteTask");
  const buttonUpdate = createDiv(
    "button",
    containerButtons,
    "updateTask",
    "..."
  );
  createDiv("div", updateShow, "date", getDate());
  taskDelete(todolist, value, buttonDelete)
  taskUpdate(value, buttonUpdate, todolist)
  todolist.add(value);
  input.value = "";
  score(todolist);
};
