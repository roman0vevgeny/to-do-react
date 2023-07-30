import React, { useRef, useEffect } from 'react'
import Edit from '../../svgs/Edit'
import styles from './TaskDescription.module.scss'
import ModalButton from '../../Button/ModalButton'
import { useDispatch, useSelector } from 'react-redux'
import { updateTaskDescription } from '../../../features/tasksSlice'

const TaskDescription = ({ id, checked }) => {
  const description = useSelector(
    (state) => state.tasks.tasks.find((t) => t.id === id).description
  )

  const inputRef = useRef(null)

  const dispatch = useDispatch()

  const handleFocus = () => {
    inputRef.current.focus()

    const range = document.createRange()
    range.selectNodeContents(inputRef.current)
    range.collapse(false)

    const selection = window.getSelection()
    selection.removeAllRanges()
    selection.addRange(range)
  }

  const handleBlur = () => {
    const newText = inputRef.current.textContent.trim()
    if (newText !== description) {
      dispatch(updateTaskDescription({ id, description: newText }))
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      inputRef.current.blur()
    }
  }

  useEffect(() => {
    inputRef.current.textContent = description || '+ Add a description'
  }, [description])

  return (
    <div className='flex flex-row justify-between mx-2 items-start my-2'>
      <div
        className={checked ? styles.inputChecked : styles.input}
        ref={inputRef}
        contentEditable='true'
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
      />
      <div className='flex flex-row mt-1'>
        <ModalButton svg={<Edit />} onClick={handleFocus} />
      </div>
    </div>
  )
}

export default TaskDescription
