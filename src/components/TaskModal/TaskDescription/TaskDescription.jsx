import React, { useState, useRef, useEffect } from 'react'
import Button from '../../Button/Button'
import Edit from '../../svgs/Edit'
import styles from './TaskDescription.module.scss'
import ModalButton from '../../Button/ModalButton'

const TaskDescription = ({ description }) => {
  const [text, setText] = useState(description || '+ Add a description')
  const [showEditButton, setShowEditButton] = useState(false)
  const inputRef = useRef(null)

  const handleFocus = () => {
    inputRef.current.focus()

    const range = document.createRange()
    range.selectNodeContents(inputRef.current)
    range.collapse(false)

    const selection = window.getSelection()
    selection.removeAllRanges()
    selection.addRange(range)

    if (text === '+ Add a description') {
      setShowEditButton(false)
    } else {
      setShowEditButton(true)
    }
  }

  const handleBlur = () => {
    if (text.trim() === '' || text === '+ Add a description') {
      setText('+ Add a description')
      setShowEditButton(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      inputRef.current.blur()
    }
  }

  const handleInput = () => {
    setText(inputRef.current.textContent)
    if (inputRef.current.textContent !== '+ Add a description') {
      setShowEditButton(true)
    }
  }

  useEffect(() => {
    inputRef.current.textContent = text
    setShowEditButton(text !== '+ Add a description')
  }, [text])

  return (
    <div className='flex flex-row justify-between mx-2 items-start my-2'>
      <div
        className={styles.input}
        ref={inputRef}
        contentEditable='true'
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        onInput={handleInput}
        onFocus={() => {
          if (text === '+ Add a description') {
            setText('')
          }
        }}
      />
      <div className='flex flex-row mt-1'>
        {showEditButton && <ModalButton svg={<Edit />} onClick={handleFocus} />}
      </div>
    </div>
  )
}

export default TaskDescription
