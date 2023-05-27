import React from 'react'
import Tag from '../../../Tag/Tag'
import styles from './AllTags.module.scss'

const AllTags = () => {
  return (
    <div className={styles.tags}>
      <Tag color={'green'} tagName={'programming'} />
      <Tag color={'purple'} tagName={'gaming'} />
      <Tag color={'blue'} tagName={'diving'} />
      <Tag color={'red'} tagName={'learning'} />
      <Tag color={'gray'} tagName={'work'} />
    </div>
  )
}

export default AllTags
