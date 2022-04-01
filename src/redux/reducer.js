const initState = {
    filter: {
        search: '',
        status: 'ALL',
        priority: []
         
    },
    todoList: [
        {id:1, name :'Hoc js', completed: false , priority:'Medium'}
    ]
}
const rootReducer = ( state = initState, action) => {
    
    switch(action.type) {
        case 'todoList/addTodo':
            return {
            ...state,
            todoList: [
                ...state.todoList,
                action.payload
            ]
        }
        case 'todoMenu/searchTodo':
            return {
            ...state,
            filter: {
                ...state.filter,
                search: action.payload
            }
        }
        default:
            return state;
    }
}
export default rootReducer;