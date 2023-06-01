import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from '../features/tasksSlice'
import tagsReducer from '../features/tagsSlice'

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    tags: tagsReducer,
  },
})
console.log(store.getState())
