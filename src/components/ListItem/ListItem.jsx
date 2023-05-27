import React, { useState } from 'react'
import InfoCard from '../Info/InfoCard'
import Star from '../svgs/Star'
import Subtasks from '../svgs/Subtasks'
import TaskName from '../TaskName/TaskName'
import CheckBox from '../CheckBox/CheckBox'
import styles from './ListItem.module.scss'
import Cal from '../svgs/Cal'
import Tag from '../../Tag/Tag'
import Modal from '../Modal/Modal'
import TaskNameModal from '../TaskModal/TaskName/TaskNameModal'
import TaskDescription from '../TaskModal/TaskDescription/TaskDescription'
import Subtask from '../TaskModal/Subtask/Subtask'
import SubtaskInput from '../TaskModal/SubtaskInput/SubtaskInput'
import Projects from '../svgs/Projects'
import Calend from '../TaskModal/Calendar/Calendar'
import TagInput from '../TaskModal/TagInput/TagInput'
import TagColorSection from '../TaskModal/TagColorSection/TagColorSection'
import AllTags from '../TaskModal/AllTags/AllTags'

const ListItem = ({
  name,
  description,
  checked: initialChecked,
  date,
  subtasksCounter,
  subtasks,
  favorite,
  tags,
  project,
}) => {
  const [checked, setChecked] = useState(initialChecked || false)
  const [open, setOpen] = useState(false)
  const [isFavorite, setIsFavorite] = useState(favorite || false)

  const toggleChecked = () => {
    setChecked(!checked)
  }

  const handleOpenModal = () => {
    setOpen(true)
  }

  const handleCloseModal = () => {
    setOpen(false)
  }

  const handleToggleFavorite = (e) => {
    e.stopPropagation()
    setIsFavorite(!isFavorite)
  }

  return (
    <div>
      <div className={styles.body} onClick={handleOpenModal}>
        <button className={styles.checkbox} onClick={toggleChecked}>
          <CheckBox checked={checked} toggleChecked={toggleChecked} />
        </button>
        <div className={styles.clickable}>
          <div className='flex flex-raw justify-between items-start w-full'>
            <div className='flex flex-grow'>
              <TaskName name={name} />
            </div>
            <div className='flex mt-[2px]'>
              {date && <InfoCard svg={<Cal />} children={date} />}
              {subtasks && (
                <InfoCard svg={<Subtasks />} children={subtasksCounter} />
              )}
              {project && (
                <InfoCard svg={<Projects />} children={project.name} />
              )}
              <button
                className={isFavorite ? styles.favourite : styles.notFavourite}
                onClick={handleToggleFavorite}>
                <Star />
              </button>
            </div>
          </div>
          <div className='flex'>
            {tags && (
              <div className='flex'>
                {tags.map((tag, index) => (
                  <Tag color={tag.color} tagName={tag.name} key={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.devider}></div>
      <Modal open={open} onClose={handleCloseModal}>
        <div className='flex flex-row justify-between items-center text-gray mb-3'>
          <p className='text-12'>Created at 10/02/23</p>
          <div className='flex flex-row justify-end'>
            {date && <InfoCard svg={<Cal />} children={date} />}
            {subtasksCounter && (
              <InfoCard svg={<Subtasks />} children={subtasksCounter} />
            )}
            <button
              className={isFavorite ? styles.favourite : styles.notFavourite}
              onClick={handleToggleFavorite}>
              <Star />
            </button>
          </div>
        </div>
        <div className={styles.sectionDevider}></div>
        <TaskNameModal name={name} />
        <TaskDescription description={description} />
        {tags && (
          <div className='flex ml-4 mr-2 mt-1 mb-3'>
            {tags.map((tag, index) => (
              <Tag
                color={tag.color}
                tagName={tag.name}
                deleteTag={true}
                key={index}
              />
            ))}
          </div>
        )}
        {subtasks &&
          subtasks.map((subtask, index) => (
            <div key={index} className='flex items-start mx-2 mb-3'>
              <button className={styles.checkbox}>
                <CheckBox />
              </button>
              <Subtask subtask={subtask.name} />
            </div>
          ))}
        <SubtaskInput />
        <div className='flex mx-2'>
          <Calend />
          <div className='flex flex-col mt-8 ml-8 w-full'>
            <TagInput />
            <div className='flex mt-2'>
              <TagColorSection />
              <AllTags />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ListItem
