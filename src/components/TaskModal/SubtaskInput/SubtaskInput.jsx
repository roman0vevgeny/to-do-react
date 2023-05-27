import React, { useRef, useState, useEffect } from 'react'
import styles from './SubtaskInput.module.scss'
import Edit from '../../svgs/Edit'
import ModalButton from '../../Button/ModalButton'

const SubtaskInput = () => {
  const [text, setText] = useState('+ Add a subtask')
  const inputRef = useRef(null)

  const handleFocus = () => {
    setText('')
    inputRef.current.focus()
  }

  const handleBlur = () => {
    if (text === '') {
      setText('+ Add a subtask')
    }
  }

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      inputRef.current.blur()
    }
  }

  useEffect(() => {
    inputRef.current.textContent = text
  }, [text])

  return (
    <div className='flex flex-row justify-between ml-2 items-start my-2'>
      <div
        className={styles.input}
        contentEditable
        ref={inputRef}
        onKeyUp={handleKeyUp}
        onBlur={handleBlur}
        onFocus={handleFocus}></div>
    </div>
  )
}

export default SubtaskInput
