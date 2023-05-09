import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from './Button'
import Plus from '../svgs/Plus'
import Modal from '../Modal/Modal'
import { openModal, closeModal } from '../features/modalSlice'

const CreateButton = ({ children }) => {
  const modalState = useSelector((state) => state.modal)
  const dispatch = useDispatch()

  const handleOpen = () => {
    dispatch(openModal())
  }

  const handleClose = () => {
    dispatch(closeModal())
  }

  return (
    <>
      <Button svgLeft={<Plus />} onClick={handleOpen} />
      <Modal
        isOpen={modalState.open}
        onClose={handleClose}
        children={children}
        contentLabel='Create new task'
      />
    </>
  )
}

export default CreateButton
