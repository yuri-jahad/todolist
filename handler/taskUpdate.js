import updateTask from "../utils/updateTask.js";

/**
 * Modifie une tâche
 * @param {*} value
 */

export default (value, buttonUpdate, todolist) => {
    buttonUpdate.addEventListener("click", (e) => {
      const parent = e.target.parentElement.parentElement
      updateTask(value, parent, todolist)
    });
 
};
