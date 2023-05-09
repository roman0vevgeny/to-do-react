import { configureStore } from '@reduxjs/toolkit'
import modalReducer from '../components/features/modalSlice'

export const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
})
