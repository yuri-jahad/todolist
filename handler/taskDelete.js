import score from "../utils/score.js";

/**
 * Supprime une tâche
 * @param {*} value
 * @param {*} element
 */

const containerTask = document.querySelector(".containerTask");

export default (todolist, value, buttonDeleteElement) => {
  buttonDeleteElement.addEventListener("click", (e) => {
      const parent = e.target.parentElement.parentElement.parentElement;
      todolist.delete(value);
      containerTask.removeChild(parent);
      score(todolist)
  });
}

