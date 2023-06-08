import React, { useRef } from 'react'
import styles from './TagInput.module.scss'
import Close from '../../../svgs/Close'

const TagInput = ({ name, onNameChange }) => {
  const inputRef = useRef(null)

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      console.log(name)
      onNameChange('')
      inputRef.current.value = ''
    }
  }

  const handleClearInput = () => {
    onNameChange('')
    inputRef.current.value = ''
  }

  return (
    <div className='relative flex h-fit items-center w-full'>
      <input
        className={styles.input}
        placeholder='+ Add a tag'
        onKeyUp={handleKeyUp}
        onChange={(e) => onNameChange(e.target.value)}
        value={name}
        ref={inputRef}></input>
      <div className={styles.editBtn}>
        {name && (
          <button className={styles.close} onClick={handleClearInput}>
            <Close />
          </button>
        )}
      </div>
    </div>
  )
}

export default TagInput
