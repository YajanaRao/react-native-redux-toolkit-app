import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './features/todos/todosSlice';
export const store = configureStore({
  reducer: {
    todos: todoSlice
  },
})