import React, { useState } from 'react'
import Button from './Button'
import Plus from '../svgs/Plus'
import Modal from '../Modal/Modal'
import CreateTaskModal from '../TaskModal/CreateTaskModal'

const CreateButton = ({ children }) => {
  const [open, setOpen] = useState(false)

  const handleOpenModal = () => {
    console.log('Button clicked')
    setOpen(true)
  }

  const handleCloseModal = () => {
    setOpen(false)
  }

  return (
    <>
      <Button svgLeft={<Plus />} onClick={handleOpenModal} />
      <Modal
        open={open}
        onClose={handleCloseModal}
        children={<CreateTaskModal onClose={handleCloseModal} />}
      />
    </>
  )
}

export default CreateButton
