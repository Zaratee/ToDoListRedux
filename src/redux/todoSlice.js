import { createSlice } from '@reduxjs/toolkit'


const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        {
            id: 1,
            title: 'Wake up!',
            completed: false
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

        }
    }
});

export const {
    addTodo
} = todoSlice.actions;

export default todoSlice.reducer