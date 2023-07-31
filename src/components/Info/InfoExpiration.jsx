import React from 'react'
import styles from './InfoExpiration.module.scss'

const InfoExpiration = ({ svg, children, expirationDate }) => {
  return (
    <div className={styles.main}>
      <div className='flex w-[25px] h-[25px] justify-center items-center'>
        {svg}
      </div>
      {children && <div className='whitespace-nowrap'>{children}</div>}
    </div>
  )
}

export default InfoExpiration
