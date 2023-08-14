import React from 'react'
import styles from './InfoExpiration.module.scss'
import { isNotExpired } from '../../helpers/isNotExpired'
import { isToday } from '../../helpers/isToday'

const InfoExpiration = ({ svg, children, expirationDate, checked }) => {
  const notExpired = isNotExpired(expirationDate, checked)
  const today = isToday(expirationDate, checked)
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
              : 'whitespace-nowrap text-expired'
          }>
          {today ? 'Today' : children}
        </div>
      )}
    </div>
  )
}

export default InfoExpiration
