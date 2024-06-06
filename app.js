import loadTodolist from "./utils/loadTodolist.js";
import taskAdd from "./handler/taskAdd.js";
import unload from "./handler/unload.js";
import score from "./utils/score.js";


const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
const todolist = new Set(storedTodos);


loadTodolist(todolist);
taskAdd(todolist);
unload(todolist)
score(todolist)


