import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos: [
        { id: 1, title: "Text 1", completed: false },
        { id: 2, title: "Text 2", completed: false },
        { id: 3, title: "Text 3", completed: false },
    ],
    loading: false,
}

export const fetchAllTodos = createAsyncThunk(
    'todos/fetchAllTodos',
    async () => {
        const response = await fetch("https://612687da3ab4100017a68fd8.mockapi.io/todos");
        const data = await response.json();

        return data;
    }
)

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        toggleState: (state, { type, payload }) => {
            const todoEdit = state.todos.find(todo => todo.id === payload);
            todoEdit.completed = !todoEdit.completed;
        },
    },
    extraReducers: (builder) => {
        builder.addCase((fetchAllTodos.pending), (state, action) => {
            state.loading = true;
        }).addCase(fetchAllTodos.fulfilled, (state, action) => {
            state.todos = action.payload;
            state.loading = false;
        })
    }
})

export const { toggleState } = todoSlice.actions;

export default todoSlice.reducer;