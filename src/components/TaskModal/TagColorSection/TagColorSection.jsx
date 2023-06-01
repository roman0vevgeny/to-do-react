import React from 'react'
import TagBubble from '../../TagBubble/TagBubble'

const TagColorSection = ({ color, onColorSelect }) => {
  // массив с возможными цветами
  const colors = ['red', 'yellow', 'blue', 'sea', 'green', 'purple', 'gray']

  return (
    <div className='flex w-[60px] flex-wrap'>
      {colors.map((c) => (
        <TagBubble
          key={c}
          color={c}
          onColorSelect={onColorSelect} // передаем функцию из пропса
          selected={c === color} // проверяем, выбран ли данный цвет
        />
      ))}
    </div>
  )
}

export default TagColorSection
