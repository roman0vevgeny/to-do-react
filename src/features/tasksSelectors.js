import { createSelector } from '@reduxjs/toolkit'

export const selectTotalTasks = createSelector(
  (state) => state,
  (state) => state.tasks.tasks.length
)

export const selectDueTasks = createSelector(
  (state) => state,
  (state) => {
    const today = new Date()
    const offset = today.getTimezoneOffset()
    today.setMinutes(today.getMinutes() + offset)
    const todayString = today.toISOString().slice(0, 10)
    const dueTasks = state.tasks.tasks.filter((task) => {
      if (task.expirationDate) {
        const expirationDateObject = new Date(task.expirationDate)
        expirationDateObject.setMinutes(
          expirationDateObject.getMinutes() - offset
        )
        const expirationDateString = expirationDateObject
          .toISOString()
          .slice(0, 10)
        return expirationDateString === todayString
      } else {
        return false
      }
    })
    return dueTasks.length
  }
)

export const todayTasksSelector = createSelector(
  (state) => state,
  (state) => {
    const today = new Date()
    const offset = today.getTimezoneOffset()
    today.setMinutes(today.getMinutes() + offset)
    const todayString = today.toISOString().slice(0, 10)

    const dueTasks = state.tasks.tasks.filter((task) => {
      if (task.expirationDate) {
        const expirationDateObject = new Date(task.expirationDate)
        expirationDateObject.setMinutes(
          expirationDateObject.getMinutes() - offset
        )
        const expirationDateString = expirationDateObject
          .toISOString()
          .slice(0, 10)

        return expirationDateString === todayString
      } else {
        return false
      }
    })
    return dueTasks
  }
)
