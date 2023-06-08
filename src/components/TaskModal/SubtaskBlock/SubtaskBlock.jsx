import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addTaskSubtask,
  deleteTaskSubtask,
  updateTaskSubtaskName,
  updateTaskSubtaskChecked,
} from '../../../features/tasksSlice'
import CheckBox from '../../CheckBox/CheckBox'
import Subtask from './Subtask/Subtask'
import SubtaskInput from './SubtaskInput/SubtaskInput'

const SubtaskBlock = () => {
  const task = useSelector((state) => state.tasks)
  const subtasks = task.subtasks
  const [subtaskInput, setSubtaskInput] = useState('')
  const dispatch = useDispatch()
  const handleAddSubtask = (subtask) => {
    dispatch(addTaskSubtask({ id: task.id, subtask }))
  }
  const handleDeleteSubtask = (subtaskId) => {
    dispatch(deleteTaskSubtask({ id: task.id, subtaskId }))
  }
  const handleSubtaskNameChange = (subtaskId, subtaskName) => {
    dispatch(updateTaskSubtaskName({ id: task.id, subtaskId, subtaskName }))
  }
  const handleSubtaskCheckedChange = (subtaskId, checked) => {
    dispatch(updateTaskSubtaskChecked({ id: task.id, subtaskId, checked }))
  }
  const handleSubtaskSubmit = (e) => {
    e.preventDefault()
    if (subtaskInput.trim()) {
      const newSubtask = {
        id: new Date(),
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
        subtasks.map((subtask) => (
          <div key={subtask.id} className='flex items-start mx-2 mb-3'>
            <button
              className={styles.checkbox}
              onClick={() =>
                handleSubtaskCheckedChange(subtask.id, !subtask.checked)
              }>
              {subtask.checked ? <CheckBoxChecked /> : <CheckBox />}
            </button>
            <Subtask
              subtask={subtask.name}
              onChange={(e) =>
                handleSubtaskNameChange(subtask.id, e.target.value)
              }
            />
            <button
              className={styles.delete}
              onClick={() => handleDeleteSubtask(subtask.id)}>
              <Delete />
            </button>
          </div>
        ))}

      <SubtaskInput
        value={subtaskInput}
        onChange={(e) => setSubtaskInput(e.target.value)}
        onSubmit={handleSubtaskSubmit}
      />
    </div>
  )
}

export default SubtaskBlock
