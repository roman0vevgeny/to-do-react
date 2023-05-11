import React from 'react'
import InfoCard from '../Info/InfoCard'
import Star from '../svgs/Star'
import Subtasks from '../svgs/Subtasks'
import TaskName from '../TaskName/TaskName'
import CheckBox from '../CheckBox/CheckBox'
import styles from './ListItem.module.scss'
import { Link } from 'react-router-dom'
import Calendar from '../svgs/Calendar'

const ListItem = ({ name, checked, date, subtasks, favorite }) => {
  return (
    <div>
      <Link className={styles.body}>
        <button className={styles.checkbox}>
          <CheckBox checked={checked} />
        </button>
        <div className={styles.clickable}>
          <div className='flex flex-raw justify-between items-start w-full'>
            <div className='flex flex-grow'>
              <TaskName name={name} />
            </div>
            <div className='flex flex-row mt-[2px]'>
              {date && <InfoCard svgLeft={<Calendar />} date={date} />}
              {subtasks && (
                <InfoCard svgLeft={<Subtasks />} subtasksCounter={subtasks} />
              )}
              <button
                className={favorite ? styles.favourite : styles.notFavourite}>
                <Star />
              </button>
            </div>
          </div>
          <div className='flex flex-raw'>
            <Tag size={'small'} color={red} children={'programming'} />
            <Tag size={'small'} color={blue} children={'gaming'} />
          </div>
        </div>
      </Link>
      <div className={styles.devider}></div>
    </div>
  )
}

export default ListItem
