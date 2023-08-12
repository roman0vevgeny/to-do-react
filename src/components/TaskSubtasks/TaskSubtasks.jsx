import React from 'react'
import CheckBox from '../CheckBox/CheckBox'
import styles from './TaskSubtasks.module.scss'
import { updateTaskSubtaskChecked } from '../../features/tasksSlice'
import { useDispatch } from 'react-redux'
import TaskSubtask from './TaskSubtask/TaskSubtask'

const TaskSubtasks = ({ taskId, subtasks, checked }) => {
  const dispatch = useDispatch()
  console.log('subtasks', subtasks)

  const handleSubtaskCheckedChange = (subtaskId, checked) => {
    subtasks.map((subtask) =>
      dispatch(
        updateTaskSubtaskChecked(
          taskId,
          subtaskId,
          checked,
          subtask.id === subtaskId ? { ...subtask, checked: !checked } : subtask
        )
      )
    )
  }

  return (
    <div>
      {subtasks &&
        subtasks.map((subtask) => (
          <div key={subtask.id} className='flex items-start mr-2 mb-1'>
            <button
              className={styles.checkbox}
              onClick={(e) => {
                e.preventDefault()
                handleSubtaskCheckedChange(subtask.id, !subtask.checked)
              }}>
              <CheckBox
                checked={subtask.checked}
                toggleChecked={() =>
                  handleSubtaskCheckedChange(subtask.id, !subtask.checked)
                }
              />
            </button>
            <TaskSubtask subtask={subtask} checked={subtask.checked} />
          </div>
        ))}
    </div>
  )
}

export default TaskSubtasks
