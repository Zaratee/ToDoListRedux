import { createSlice } from '@reduxjs/toolkit'


const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        {
            id: 1,
            title: 'Wake up!',
            completed: false
        },
        {
            id: 2,
            title: 'Sleep!',
            completed: true
        }
    ],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false
            };
            state.push(newTodo);
        },
        completeTodo: (state, action) => {
            const index = (element) => element.id == action.payload.id;
            const indexToUpdate = state.findIndex(index);
            state[indexToUpdate].completed = true;
        }
    }
});

export const {
    addTodo,
    completeTodo
} = todoSlice.actions;

export const todoList = state => state.todos;


export default todoSlice.reducer