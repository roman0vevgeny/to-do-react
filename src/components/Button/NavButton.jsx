import React from 'react'
import styles from './NavButton.module.scss'
import Arrow from '../svgs/Arrow'

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
      <div className={styles.counter}>
        {!counter && <div>{<Arrow />}</div>}
        {counter && <p>{counter}</p>}
      </div>
    </button>
  )
}

export default NavButton
