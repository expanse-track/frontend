import { addTodo, changeTodo, removeTodo, setTodos } from '../actions/todo';

const intialState = {
    todos: []
}

export const todoReducer = (state = intialState, action) => {
    switch (action.type) {
        case setTodos: {
            return {
                ...state,
                todos: action.payload
            }
        }
        case addTodo:
            return {
                ...state,
                todos: [action.payload, ...state.todos]
            }
        case removeTodo:
            return {
                ...state,
                todos: state.todos.filter(todo => todo._id !== action.payload._id)
            }
        case changeTodo:
            const fliteredTodos = state.todos.filter(todo => todo._id !== action.payload._id)
            return {
                ...state,
                todos: [action.payload, ...fliteredTodos]

            }

        default:
            return state
    }
}