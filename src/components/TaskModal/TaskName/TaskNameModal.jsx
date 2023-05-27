import React, { useState, useRef, useEffect } from 'react'
import Button from '../../Button/Button'
import Edit from '../../svgs/Edit'
import styles from './TaskNameModal.module.scss'
import ModalButton from '../../Button/ModalButton'

const TaskNameModal = ({ name }) => {
  const [text, setText] = useState(name)
  const [prevText, setPrevText] = useState(name)
  const inputRef = useRef(null)

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
    if (text.trim() === '') {
      setText(prevText)
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
  }

  useEffect(() => {
    inputRef.current.textContent = text
  }, [text])

  useEffect(() => {
    setPrevText(name)
    setText(name)
  }, [name])

  return (
    <div className='flex flex-row justify-between mx-2 items-start my-2'>
      <div
        className={styles.input}
        placeholder={name}
        ref={inputRef}
        contentEditable='true'
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        onInput={handleInput}
      />
      <div className='flex flex-row mt-1'>
        <ModalButton svg={<Edit />} onClick={handleFocus} />
      </div>
    </div>
  )
}

export default TaskNameModal
