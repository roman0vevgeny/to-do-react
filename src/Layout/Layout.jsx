import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import styles from './Layout.module.scss'

const Layout = () => {
  return (
    <div>
      <Header />
      <div className={styles.main}>
        <nav className={styles.nav}>
          <Navbar />
        </nav>
        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
