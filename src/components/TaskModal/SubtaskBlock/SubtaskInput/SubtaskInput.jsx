import React, { useState } from 'react'
import styles from './SubtaskInput.module.scss'

const SubtaskInput = ({ value, onChange, onSubmit }) => {
  const [text, setText] = useState(value)

  const handleFocus = () => {
    setText('')
  }

  const handleBlur = () => {
    if (text === '') {
      setText(value)
    }
  }

  const handleChange = (e) => {
    setText(e.target.value)
    onChange(e.target.value)
  }

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      onSubmit(e)
    }
  }

  return (
    <div className='flex flex-row justify-between ml-2 items-start my-2'>
      <input
        className={styles.input}
        type='text'
        value={text}
        onKeyUp={handleKeyUp}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={handleChange}
      />
    </div>
  )
}

export default SubtaskInput
