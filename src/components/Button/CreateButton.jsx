import React, { useState } from 'react'
import Button from './Button'
import Plus from '../svgs/Plus'
import Modal from '../Modal/Modal'
import CreateTaskModal from '../TaskModal/CreateTaskModal'

const CreateButton = ({ children, today }) => {
  const [open, setOpen] = useState(false)

  const onClose = () => {
    setOpen(false)
  }

  const handleOpenModal = () => {
    setOpen(true)
  }

  return (
    <div>
      <Button
        svgLeft={<Plus />}
        onClick={handleOpenModal}
        children={'Add task'}
      />
      <Modal
        open={open}
        onClose={onClose}
        children={<CreateTaskModal onClose={onClose} today={today} />}
      />
    </div>
  )
}

export default CreateButton
