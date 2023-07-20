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
      <button className={styles.main} onClick={toggleDropdown}>
        <div className={styles.icon}>
          {svg && svg}
          {typeof children === 'string'
            ? capitalizeFirstLetter(children)
            : children}
        </div>
        <div className={styles.counter}>
          <div>{<Arrow className={`${isRotated ? 'rotate-180' : ''}`} />}</div>
        </div>
      </button>
      <div
        className={`flex flex-col w-full mt-[1px] rounded-md transition duration-300 max-h-0 overflow-hidden origin-top ${
          isOpen ? 'max-h-screen opacity-100' : 'opacity-0'
        }`}>
        <ul className='divide-y divide-gray-500'>
          {items.map((item) => (
            <li key={item.name} className='px-4 py-[3px] hover:bg-gray-100'>
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
