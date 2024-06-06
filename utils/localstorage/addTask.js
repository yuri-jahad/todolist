export default (todolist) => {
  console.log(todolist)
  localStorage.setItem("todos", JSON.stringify([...todolist]));
};
