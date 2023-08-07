import { createSelector } from '@reduxjs/toolkit'

export const selectTotalTasks = createSelector(
  (state) => state,
  (state) => state.tasks.tasks.length
)

export const selectDueTasks = createSelector(
  (state) => state,
  (state) => {
    const today = new Date().toISOString()
    console.log(today)
    const dueTasks = state.tasks.tasks.filter(
      (task) =>
        task.expirationDate &&
        task.expirationDate.toString().slice(0, 10) === today
    )
    return dueTasks.length
  }
)

// export const selectDueTasks = createSelector(
//   (state) => state,
//   (state) => {
//     const today = new Date().toLocaleDateString()
//     console.log(today)
//     const dueTasks = state.tasks.tasks.filter(
//       (task) =>
//         task.expirationDate && task.expirationDate.slice(0, 10) === today
//     )
//     return dueTasks.length
//   }
// )
