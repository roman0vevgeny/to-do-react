import React, { useEffect } from 'react'
import styles from './Modal.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { openModal, closeModal } from '../features/modalSlice'

export default function Modal({ children }) {
  const open = useSelector((state) => state.modal.open)
  const dispatch = useDispatch()

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(closeModal())
    }
  }

  const handleEscapePress = (e) => {
    if (e.key === 'Escape') {
      dispatch(closeModal())
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleEscapePress)
    return () => window.removeEventListener('keydown', handleEscapePress)
  }, [])

  if (!open) return null

  return (
    <>
      <div className={styles.overlay} onClick={handleOverlayClick} />
      <div className={styles.modal}>{children}</div>
    </>
  )
}
