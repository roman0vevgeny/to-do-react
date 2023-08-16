import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject(state, action) {
      state.push(action.payload)
    },

    deleteProject(state, action) {
      const index = state.findIndex((project) => project.id === action.payload)
      state.splice(index, 1)
      return state
    },

    updateProjectName(state, action) {
      const index = state.findIndex(
        (project) => project.id === action.payload.id
      )
      if (index > -1) {
        state[index].name = action.payload.name
      }
    },
  },
})

export default projectSlice.reducer

export const { addProject, deleteProject, updateProjectName } =
  projectSlice.actions
