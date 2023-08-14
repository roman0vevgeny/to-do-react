import React, { useState, useRef } from 'react'
import styles from './Account.module.scss'
import Close from '../components/svgs/Close'

const Account = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleClearEmail = () => {
    setEmail('')
    emailRef.current.focus()
  }

  const handleClearPassword = () => {
    setPassword('')
    passwordRef.current.focus()
  }

  return (
    <div className='relative h-[calc(100vh-50px)] flex justify-center'>
      <div className='flex flex-col mt-8'>
        <h1 className='text-24 font-bold text-task mb-5'>Login</h1>
        <div className='relative flex mb-5'>
          <input
            className={styles.input}
            type='text'
            placeholder='Your email'
            value={email}
            onChange={handleEmailChange}
            ref={emailRef}
          />
          {email ? (
            <button className={styles.close} onClick={handleClearEmail}>
              <Close />
            </button>
          ) : null}
        </div>
        <div className='relative flex mb-5'>
          <input
            className={styles.input}
            type='text'
            placeholder='Your password'
            value={password}
            onChange={handlePasswordChange}
            ref={passwordRef}
          />
          {password ? (
            <button className={styles.close} onClick={handleClearPassword}>
              <Close />
            </button>
          ) : null}
        </div>
        <div>
          <button
            type={'submit'}
            className='flex p-1 rounded-[5px] text-gray text-14 font-bold bg-gray items-center hover:bg-grayHover hover:text-grayHover my-1 h-fit px-2'>
            <p className='mx-1'>Login</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Account
