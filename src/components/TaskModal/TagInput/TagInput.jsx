import React, { useState, useRef } from 'react'
import styles from './TagInput.module.scss'
import Close from '../../svgs/Close'

const TagInput = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef(null)

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      console.log(value)
      setValue('')
      inputRef.current.value = ''
    }
  }

  const handleClearInput = () => {
    setValue('')
    inputRef.current.value = ''
  }

  return (
    <div className='relative flex h-fit items-center w-full'>
      <input
        className={styles.input}
        placeholder='+ Add a tag'
        onKeyUp={handleKeyUp}
        onChange={(e) => setValue(e.target.value)}
        ref={inputRef}></input>
      <div className={styles.editBtn}>
        {value && (
          <button className={styles.close} onClick={handleClearInput}>
            <Close />
          </button>
        )}
      </div>
    </div>
  )
}

export default TagInput
