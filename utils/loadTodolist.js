import createTask from "./createTask.js";

export default (todolist) => {

  for (let i of todolist) createTask(i, todolist);
  console.log("Actualisation terminée..");
};

