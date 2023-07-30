import React, { useState } from 'react'
import Button from './Button'
import Plus from '../svgs/Plus'
import Modal from '../Modal/Modal'
import CreateTaskModal from '../TaskModal/CreateTaskModal'

const CreateButton = ({ children }) => {
  const [open, setOpen] = useState(false)

  const onClose = () => {
    console.log('Button clicked')
    setOpen(false)
  }

  const handleOpenModal = () => {
    setOpen(true)
  }

  return (
    <>
      <Button svgLeft={<Plus />} onClick={handleOpenModal} />
      <Modal
        open={open}
        onClose={onClose}
        children={<CreateTaskModal onClose={onClose} />}
      />
    </>
  )
}

export default CreateButton
