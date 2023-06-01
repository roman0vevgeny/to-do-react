import React from 'react'
import styles from './TagBubble.module.scss'

const TagBubble = ({ color, onColorSelect, selected }) => {
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

  // функция для обработки клика на пузырек
  const handleClick = () => {
    // вызываем функцию из пропса и передаем ей цвет
    onColorSelect(color)
  }

  return (
    <div
      className={
        color
          ? `${styles.tagOuter} ${styles[`${tagType}Outer`]} ${
              selected ? styles.selected : ''
            }`
          : styles.tagOuter
      }
      onClick={handleClick} // добавляем обработчик клика
    >
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
