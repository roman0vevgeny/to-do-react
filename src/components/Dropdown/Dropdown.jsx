import React, { useState } from 'react'
import Tag from '../Tag/Tag'
import Arrow from '../svgs/Arrow'
import styles from './Dropdown.module.scss'

const capitalizeFirstLetter = (string) => {
  return string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase()
}

const Dropdown = ({ children, items, onDeleteTag, svg }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isRotated, setIsRotated] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const toggleRotation = () => {
    setIsRotated(!isRotated)
  }

  return (
    <div>
      <button
        className={isOpen ? styles.open : styles.main}
        onClick={() => {
          toggleDropdown()
          toggleRotation()
        }}>
        <div className={styles.icon}>
          {svg && svg}
          {typeof children === 'string'
            ? capitalizeFirstLetter(children)
            : children}
        </div>
        <div className={styles.counter}>
          <div>{<Arrow rotate={isRotated} />}</div>
        </div>
      </button>
      <div
        className={`flex flex-col w-full mt-[1px] bg-mainBg rounded-b-md max-h-0 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'opacity-0'
        }`}>
        <ul className='divide-y divide-gray-500 py-2'>
          {items.map((item) => (
            <li key={item.name} className='px-8 pt-[1px] hover:bg-gray-100'>
              <Tag
                color={item.color}
                tagName={item.name}
                deleteTag={true}
                key={item.id}
                onDelete={() => onDeleteTag(item)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Dropdown
