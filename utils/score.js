
export default (todolist) => {
    const message = todolist.size == 0 ? "Vous avez aucune tâche à faire pour l'instant." : todolist.size == 1 ? "Vous n'avez qu'une seule tâche à faire." : `Vous avez ${todolist.size} tâches à faire.`
    document.querySelector('.score').textContent = message;
}
