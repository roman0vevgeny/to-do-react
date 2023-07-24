import React, { useState, useRef } from 'react'
import {
  addTaskSubtask,
  deleteTaskSubtask,
  updateTaskSubtaskName,
  updateTaskSubtaskChecked,
} from '../../../features/tasksSlice'
import CheckBox from '../../CheckBox/CheckBox'
import Subtask from './Subtask/Subtask'
import SubtaskInput from './SubtaskInput/SubtaskInput'
import styles from './SubtaskBlock.module.scss'
import { useDispatch, useSelector } from 'react-redux'

const SubtaskBlock = ({ task }) => {
  const [subtaskInput, setSubtaskInput] = useState('')
  const inputRef = useRef(null)
  const subtasks = task.subtasks
  const dispatch = useDispatch()

  const checked = useSelector((state) =>
    state.tasks.tasks
      .find((t) => t.id === task.id)
      .subtasks.map((subtask) => subtask.checked)
  )

  const subtaskId = subtasks.map((subtask) => subtask.id)

  const handleAddSubtask = (subtask) => {
    dispatch(addTaskSubtask({ id: task.id, subtask }))
  }

  const handleDeleteSubtask = (subtaskId) => {
    dispatch(deleteTaskSubtask({ id: task.id, subtaskId }))
  }

  const handleSubtaskCheckedChange = (subtaskId, checked) => {
    dispatch(updateTaskSubtaskChecked({ id: task.id, subtaskId, checked }))
  }

  const handleSubtaskNameChange = (subtaskId, subtaskName) => {
    dispatch(updateTaskSubtaskName({ id: task.id, subtaskId, subtaskName }))
  }

  const handleSubtaskSubmit = (e) => {
    e.preventDefault()
    if (subtaskInput.trim()) {
      const newSubtask = {
        id: new Date().getTime(),
        name: subtaskInput,
        checked: false,
      }
      handleAddSubtask(newSubtask)
      setSubtaskInput('')
    }
  }

  return (
    <div>
      {subtasks &&
        subtasks.map((subtask, index) => (
          <div
            key={`${subtask.id}-${subtasks.length}`}
            className='flex items-start mx-2 mb-3'>
            <button
              className={styles.checkbox}
              onClick={(e) => {
                e.preventDefault()
                handleSubtaskCheckedChange(
                  subtaskId[index],
                  !checked[subtasks.findIndex((s) => s.id === subtaskId[index])]
                )
              }}>
              <CheckBox
                checked={
                  checked[subtasks.findIndex((s) => s.id === subtaskId[index])]
                }
                toggleChecked={() =>
                  handleSubtaskCheckedChange(
                    subtaskId[index],
                    !checked[
                      subtasks.findIndex((s) => s.id === subtaskId[index])
                    ]
                  )
                }
              />
            </button>

            <Subtask
              subtask={subtask}
              onChange={handleSubtaskNameChange}
              onDelete={() => handleDeleteSubtask(subtask.id)}
            />
          </div>
        ))}

      <SubtaskInput
        value={subtaskInput}
        onChange={(e) => setSubtaskInput(e.target.value)}
        onSubmit={handleSubtaskSubmit}
        inputRef={inputRef}
      />
    </div>
  )
}

export default SubtaskBlock
