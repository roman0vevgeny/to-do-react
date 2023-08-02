import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './NavButton.module.scss'
import Arrow from '../svgs/Arrow'

const capitalizeFirstLetter = (string) => {
  return string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase()
}

const NavButton = ({ children, svgLeft, counter, to }) => {
  return (
    <NavLink
      to={to}
      className={(navData) => (navData.isActive ? styles.active : styles.main)}>
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
    </NavLink>
  )
}

export default NavButton
