import React, { useState, useRef, useEffect } from 'react'
import Edit from '../../../svgs/Edit'
import styles from './Subtask.module.scss'
import Close from '../../../svgs/Close'
import ModalButton from '../../../Button/ModalButton'

const Subtask = ({ subtask, onDelete, onChange }) => {
  const [text, setText] = useState(subtask.name)
  const [prevText, setPrevText] = useState(subtask.name)
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
    onChange(subtask.id, text)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      inputRef.current.blur()
      onChange(subtask.id, text)
    }
  }

  const handleInput = () => {
    setText(inputRef.current.textContent)
  }

  useEffect(() => {
    inputRef.current.textContent = text
  }, [text])

  useEffect(() => {
    setPrevText(subtask.name)
    setText(subtask.name)
  }, [subtask])

  return (
    <div className='flex flex-row justify-between items-start w-full'>
      <div
        className={styles.input}
        placeholder={subtask}
        ref={inputRef}
        contentEditable='true'
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        onInput={handleInput}
      />
      <div className='flex'>
        <div className='flex flex-row mt-[1px]'>
          <ModalButton svg={<Edit />} onClick={handleFocus} />
        </div>
        <div className='flex flex-row mt-[1px] hover:bg-redBg hover:text-redTag'>
          <ModalButton svg={<Close />} onClick={onDelete} />
        </div>
      </div>
    </div>
  )
}

export default Subtask
