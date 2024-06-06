import lsAddTask from "../utils/localstorage/addTask.js";

export default (todolist) => {
  window.addEventListener("unload", e => {
    e.preventDefault();
    lsAddTask(todolist);
  });
};
