import React from 'react'
import styles from './Button.module.scss'

const Button = () => {
  return (
    <button className={styles.main}>
      <p className={styles.text}>Button</p>
    </button>
  )
}

export default Button
