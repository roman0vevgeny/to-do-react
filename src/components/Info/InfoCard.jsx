import React from 'react'
import styles from './InfoCard.module.scss'

const InfoCard = ({ svg, children }) => {
  return (
    <div className={styles.main}>
      <div className='flex w-[25px] h-[25px] justify-center items-center'>
        {svg}
      </div>
      {children && <div className='whitespace-nowrap'>{children}</div>}
    </div>
  )
}

export default InfoCard
