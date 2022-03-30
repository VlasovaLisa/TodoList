export function checkTodo(todo) {
    return !todo.name || /^\s*$/.test(todo.name)
}