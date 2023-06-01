import React from 'react'
import Button from './Button'
import Plus from '../svgs/Plus'
import Modal from '../Modal/Modal'

const CreateButton = ({ children }) => {
  const handleOpen = () => {
    // dispatch(openModal())
  }

  const handleClose = () => {
    // dispatch(closeModal())
  }

  return (
    <>
      <Button svgLeft={<Plus />} onClick={handleOpen} />
      <Modal
        // isOpen={modalState.open}
        // onClose={handleClose}
        children={children}
        contentLabel='Create new task'
      />
    </>
  )
}

export default CreateButton
