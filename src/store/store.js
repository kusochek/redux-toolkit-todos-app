import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todos/todos";

export default configureStore({
    reducer: todoSlice,
})