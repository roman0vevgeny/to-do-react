import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from '../features/tasksSlice'
import tagsReducer from '../features/tagsSlice'
import navbarReducer from '../features/navbarSlice'

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    tags: tagsReducer,
    navbar: navbarReducer,
  },
})
