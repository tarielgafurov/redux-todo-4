import { createActionsTodo } from "./actions/Action"

export const addTodo = (text , id) => {
    return {
        type: createActionsTodo.ADD_TODO,
        text,
        id
    }
}

export const deleteTodo = (id) => {
    return {
        type: createActionsTodo.DELETE_TODO,
        id
    }
}