import React, { useState } from 'react'
import Arrow from '../svgs/Arrow'
import styles from './Dropdown.module.scss'
import Modal from '../Modal/Modal'
import EditTaskModal from '../TaskModal/EditTaskModal'
import { formatDate } from '../../helpers/formatDate'

const capitalizeFirstLetter = (string) => {
  return string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase()
}

const DropdownFavorites = ({ children, items = [], svg }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isRotated, setIsRotated] = useState(false)
  const [openModal, setOpenModal] = useState(null)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const toggleRotation = () => {
    setIsRotated(!isRotated)
  }

  const handleOpenModal = (item) => {
    setOpenModal(item)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  console.log(items)
  items.map((item) => console.log(item.name))

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
        <ul className='py-2 w-[270px]'>
          {items.length > 0 ? (
            items.map((item) => (
              <li
                key={item.name}
                className={styles.item}
                onClick={() => handleOpenModal(item)}>
                <span className='text-14 text-gray truncate'>{item.name}</span>
              </li>
            ))
          ) : (
            <p className='text-14 flex px-7 text-gray truncate'>
              No favorites yet
            </p>
          )}
        </ul>
      </div>
      {openModal && (
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          children={
            <EditTaskModal
              task={openModal}
              onClose={(e) => handleCloseModal()}
              formatDate={formatDate}
            />
          }
        />
      )}
    </div>
  )
}

export default DropdownFavorites
