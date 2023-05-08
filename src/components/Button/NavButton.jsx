import React from 'react'
import styles from './NavButton.module.scss'

const capitalizeFirstLetter = (string) => {
  return string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase()
}

const NavButton = ({ svgLeft, children, counter }) => {
  return (
    <button className={styles.main}>
      <div className={styles.icon}>
        {svgLeft && svgLeft}
        {typeof children === 'string'
          ? capitalizeFirstLetter(children)
          : children}
      </div>
      <p>3</p>
    </button>
  )
}

export default NavButton
