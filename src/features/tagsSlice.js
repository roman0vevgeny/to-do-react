import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    addTag(state, action) {
      state.push(action.payload)
    },

    deleteTag(state, action) {
      const index = state.findIndex((tag) => tag.id === action.payload)
      state.splice(index, 1)
      return state
    },

    updateTagName(state, action) {
      const index = state.findIndex((tag) => tag.id === action.payload.id)
      if (index > -1) {
        state[index].name = action.payload.name
      }
    },

    updateTagColor(state, action) {
      const index = state.findIndex((tag) => tag.id === action.payload.id)
      if (index > -1) {
        state[index].color = action.payload.color
      }
    },
  },
})

export default tagsSlice.reducer

export const { addTag, deleteTag, updateTagName, updateTagColor } =
  tagsSlice.actions
