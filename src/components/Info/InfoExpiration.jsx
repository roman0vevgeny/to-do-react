import React from 'react'
import styles from './InfoExpiration.module.scss'
import { isNotExpired } from '../../helpers/isNotExpired'

const InfoExpiration = ({ svg, children, expirationDate, checked }) => {
  const notExpired = isNotExpired(expirationDate, checked)
  return (
    <div className={notExpired ? styles.notExpired : styles.expired}>
      <div className='flex w-[25px] h-[25px] justify-center items-center'>
        {svg}
      </div>
      {children && (
        <div
          className={
            notExpired
              ? 'whitespace-nowrap text-gray'
              : 'whitespace-nowrap text-redTag'
          }>
          {children}
        </div>
      )}
    </div>
  )
}

export default InfoExpiration
