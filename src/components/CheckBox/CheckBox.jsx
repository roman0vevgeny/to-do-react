import React from 'react'
import styles from './CheckBox.module.scss'
import Done from '../svgs/Done'

const CheckBox = ({ checked }) => {
  return (
    <div className={!checked ? styles.body : styles.checked}>
      {checked && <Done fill='#FF0000' />}
    </div>
  )
}

export default CheckBox
