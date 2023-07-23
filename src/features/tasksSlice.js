import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: [
    {
      id: 1,
      name: 'Первая задача с очень длинным текстом',
      description: 'Описание первой задачи',
      creationDate: '20.02.2022',
      expirationDate: null,
      subtasks: [{ id: 1, name: 'Подзадача 1', checked: false }],
      favorite: false,
      tags: [],
      project: null,
    },
    {
      id: 2,
      name: 'Вторая задача',
      description: 'Описание второй задачи',
      creationDate: '21.02.2022',
      expirationDate: null,
      subtasks: [],
      favorite: false,
      tags: [],
      project: null,
    },
  ],
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push({
        ...action.payload,
        creationDate: new Date().toISOString(),
        expirationDate: null,
      })
    },

    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload)
    },

    updateTaskName(state, action) {
      const { id, name } = action.payload
      const task = state.tasks.find((task) => task.id === id)
      if (task) {
        task.name = name
      }
    },

    updateTaskDescription(state, action) {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      )
      if (index > -1) {
        state.tasks[index].description = action.payload.description
      }
    },

    addTaskTag(state, action) {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      )
      if (index > -1) {
        state.tasks[index].tags.push(action.payload.tagId)
      }
    },

    deleteTaskTag(state, action) {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      )
      if (index > -1) {
        const tagIndex = state.tasks[index].tags.findIndex(
          (tagId) => tagId === action.payload.tagId
        )
        state.tasks[index].tags.splice(tagIndex, 1)
      }
    },

    addTaskSubtask(state, action) {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      )
      if (index > -1) {
        state.tasks[index].subtasks.push(action.payload.subtask)
      }
    },

    deleteTaskSubtask(state, action) {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      )
      if (index > -1) {
        state.tasks[index].subtasks = state.tasks[index].subtasks.filter(
          (subtask) => subtask.id !== action.payload.subtaskId
        )
      }
    },

    updateTaskSubtaskName(state, action) {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      )
      if (index > -1) {
        const subtaskIndex = state.tasks[index].subtasks.findIndex(
          (subtask) => subtask.id === action.payload.subtaskId
        )
        if (subtaskIndex > -1) {
          state.tasks[index].subtasks[subtaskIndex].name =
            action.payload.subtaskName
        }
      }
    },

    updateTaskSubtaskChecked(state, action) {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      )
      if (index > -1) {
        const subtaskIndex = state.tasks[index].subtasks.findIndex(
          (subtask) => subtask.id === action.payload.subtaskId
        )
        if (subtaskIndex > -1) {
          state.tasks[index].subtasks[subtaskIndex].checked =
            action.payload.checked
        }
      }
    },

    updateTaskExpirationDate(state, action) {
      const { id, expirationDate } = action.payload
      const task = state.tasks.findIndex((task) => task.id === id)
      if (task) {
        task.expirationDate = expirationDate
      }
    },

    updateTaskChecked(state, action) {
      const index = state.tasks.findIndex((task) => task.id === action.payload)
      if (index > -1) {
        state.tasks[index].checked = !state.tasks[index].checked
      }
    },

    updateTaskIsFavorite(state, action) {
      const index = state.tasks.findIndex((task) => task.id === action.payload)
      if (index > -1) {
        state.tasks[index].favorite = !state.tasks[index].favorite
      }
    },
  },
})

export default tasksSlice.reducer

export const {
  addTask,
  deleteTask,
  updateTaskName,
  updateTaskDescription,
  addTaskTag,
  deleteTaskTag,
  addTaskSubtask,
  deleteTaskSubtask,
  updateTaskSubtaskName,
  updateTaskSubtaskChecked,
  updateTaskExpirationDate,
  updateTaskChecked,
  updateTaskIsFavorite,
} = tasksSlice.actions
