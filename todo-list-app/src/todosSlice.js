import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        value: [{
            text: 'Go to the store',
            isCompleted: true,
        },{
            text: 'Watch a movie',
            isCompleted: false,
        }]
    },
    reducers: {
        createTodo: state => {  // ...state -> get the existing value
            state.value = [ ...state.value, {
                text: 'New Todo',
                isCompleted: false,
            }]
        },
        markTodoAsCompleted: state => {
            const text = 'New Todo';
            const todo = state.value.find(t => t.text === text);
            todo.isCompleted = true;
        },
        deleteTodo: state => {
            const text = 'New Todo';
            state.value = state.value.filter(t => t.text !== text);
            //Keep only those items (t) where t.text is not equal to the variable text.
        },
    }
});

export const { createTodo, markTodoAsCompleted, deleteTodo } = todosSlice.actions; // export the action creators