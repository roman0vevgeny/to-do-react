import React from 'react'
import styles from './TagBubble.module.scss'

const TagBubble = ({ color }) => {
  const getTagType = (color) => {
    switch (color) {
      case 'red':
        return 'red'
      case 'blue':
        return 'blue'
      case 'green':
        return 'green'
      case 'yellow':
        return 'yellow'
      case 'purple':
        return 'purple'
      case 'sea':
        return 'sea'
      case 'gray':
        return 'gray'
      default:
        return 'gray'
    }
  }

  const tagType = getTagType(color)

  return (
    <div
      className={
        color
          ? `${styles.tagOuter} ${styles[`${tagType}Outer`]}`
          : styles.tagOuter
      }>
      <div
        className={
          color
            ? `${styles.tagInner} ${styles[`${tagType}Inner`]}`
            : styles.Inner
        }></div>
    </div>
  )
}

export default TagBubble
