import React from 'react'
import AppIcon from '../components/svgs/AppIcon'
import styles from './LoadingScreen.module.scss'

const LoadingScreen = () => {
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <div className={styles.app}>
        <AppIcon />
      </div>
    </div>
  )
}

export default LoadingScreen
