import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: [
    {
      id: 1,
      checked: false,
      name: 'Первая задача с очень длинным текстом',
      description: 'Описание первой задачи',
      creationDate: new Date().toLocaleString('us-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
      expirationDate: null,
      subtasks: [
        { id: 1, name: 'Подзадача 1', checked: true },
        { id: 2, name: 'Подзадача 2', checked: false },
      ],
      favorite: false,
      tags: [],
      project: null,
    },
    {
      id: 8,
      checked: true,
      name: 'Вторая задача',
      description: 'Описание второй задачи',
      creationDate: new Date().toLocaleString('us-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
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
        creationDate: new Date().toLocaleString('us-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }),
        // expirationDate: action.payload.expirationDate,
      })
    },

    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload)
    },

    updateTaskExpirationDate(state, action) {
      const { id, expirationDate } = action.payload
      const task = state.tasks.find((task) => task.id === id)
      if (task) {
        task.expirationDate = expirationDate
      }
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
          const newSubtaskName = action.payload.subtaskName
          state.tasks[index].subtasks[subtaskIndex].name = newSubtaskName
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

    updateTaskChecked(state, action) {
      const index = state.tasks.findIndex((task) => task.id === action.payload)
      if (index > -1) {
        state.tasks[index].checked = !state.tasks[index].checked
      }
    },

    updateTaskIsFavorite(state, action) {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      )
      if (index > -1) {
        state.tasks[index].favorite = action.payload.favorite
      }
    },

    updateTask(state, action) {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      )
      if (index > -1) {
        state.tasks[index] = action.payload
      }
    },
    updateTaskTags(state, action) {
      const { id, tags } = action.payload
      const task = state.tasks.find((task) => task.id === id)
      if (task) {
        task.tags = tags
      }
    },
    updateTaskSubtasks(state, action) {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      )
      if (index > -1) {
        state.tasks[index].subtasks = action.payload.subtasks
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
  updateTask,
  updateTaskTags,
  updateTaskSubtasks,
} = tasksSlice.actions
