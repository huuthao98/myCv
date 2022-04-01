export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload:data
    }
}
export const searchTodo = (text) => {
    return {
        type: 'todoMenu/searchTodo',
        payload:text
    }
}