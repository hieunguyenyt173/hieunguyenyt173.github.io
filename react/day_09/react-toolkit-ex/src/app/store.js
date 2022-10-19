import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../featutes/Counter/couterSlice'
import todoReducer from '../featutes/TodoList/todoSlice'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos : todoReducer,
    }
})

export default store