import React, { useRef, useEffect, useState } from 'react'
import Edit from '../../svgs/Edit'
import styles from './TaskNameModal.module.scss'
import ModalButton from '../../Button/ModalButton'

const CreateTaskName = ({ name, setName }) => {
  const inputRef = useRef(null)

  const [text, setText] = useState(name || 'Untitled')

  const handleFocus = () => {
    inputRef.current.focus()

    const range = document.createRange()
    range.selectNodeContents(inputRef.current)
    range.collapse(false)

    const selection = window.getSelection()
    selection.removeAllRanges()
    selection.addRange(range)
    if (inputRef.current.textContent === 'Untitled') {
      setText('')
    }
  }

  const handleBlur = () => {
    const newText = inputRef.current.textContent.trim()
    if (!newText) {
      inputRef.current.textContent = name
    } else if (newText !== name) {
      setName(newText)
    } else if (newText === '') {
      setText('Untitled')
    }
    if (inputRef.current.textContent === '') {
      inputRef.current.textContent = 'Untitled'
    }
  }

  const handleClearInput = () => {
    if (inputRef.current.textContent === 'Untitled') {
      inputRef.current.textContent = ''
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      inputRef.current.blur()
    }
  }

  useEffect(() => {
    inputRef.current.textContent = text
  }, [text])

  useEffect(() => {
    setText(name || 'Untitled')
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
        onFocus={handleClearInput}
      />
      <div className='flex flex-row mt-1'>
        <ModalButton svg={<Edit />} onClick={handleFocus} />
      </div>
    </div>
  )
}

export default CreateTaskName
