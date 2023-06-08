import React, { useState } from 'react'
import InfoCard from '../Info/InfoCard'
import Subtasks from '../svgs/Subtasks'
import Star from '../svgs/Star'
import Cal from '../svgs/Cal'
import styles from './EditTaskModal.module.scss'
import TaskNameModal from './TaskName/TaskNameModal'
import TaskDescription from './TaskDescription/TaskDescription'
import TagForm from './TagForm/TagForm'
import Tag from '../Tag/Tag'
import Calend from './Calendar/Calendar'
import { useDispatch, useSelector } from 'react-redux'
import {
  updateTaskName,
  updateTaskDescription,
  updateTaskIsFavorite,
  updateTaskExpirationDate,
  addTaskTag,
  deleteTaskTag,
} from '../../features/tasksSlice'
import SubtaskBlock from './SubtaskBlock/SubtaskBlock'

const EditTaskModal = ({ handleCloseModal, task, formatDate }) => {
  const {
    id,
    name,
    description,
    creationDate,
    tags,
    subtasks,
    expirationDate,
  } = task

  const [selectedDate, setSelectedDate] = useState(expirationDate)
  const [selectedTags, setSelectedTags] = useState(tags)

  const dispatch = useDispatch()

  console.log('name:', name)

  const handleToggleFavorite = () => {
    dispatch(updateTaskIsFavorite(task.id))
  }

  const handleNameChange = (e) => {
    dispatch(updateTaskName({ id: task.id, name: e.target.value }))
  }

  const handleDescriptionChange = (e) => {
    dispatch(
      updateTaskDescription({ id: task.id, description: e.target.value })
    )
  }

  const allTags = useSelector((state) => state.tags)

  const handleAddTag = (tagId) => {
    dispatch(addTaskTag({ id: task.id, tagId }))
  }

  const handleDeleteTag = (tagId) => {
    dispatch(deleteTaskTag({ id: task.id, tagId }))
  }

  const handleExpirationDateChange = (expirationDate) => {
    const dateString = expirationDate
    dispatch(
      updateTaskExpirationDate({ id: task.id, expirationDate: dateString })
    )
  }

  const handleDateChange = () => {
    setSelectedDate(expirationDate)
    handleExpirationDateChange(expirationDate)
  }

  const handleTagChange = (tagId) => {
    if (selectedTags.includes(tagId)) {
      const newSelectedTags = selectedTags.filter((id) => id !== tagId)
      setSelectedTags(newSelectedTags)
      handleDeleteTag(tagId)
    } else {
      const newSelectedTags = [...selectedTags, tagId]
      setSelectedTags(newSelectedTags)
      handleAddTag(tagId)
    }
    dispatch(updateTaskTags({ id: task.id, tags: selectedTags }))
  }

  return (
    <div onClose={handleCloseModal}>
      <div className='flex flex-row justify-between items-center text-gray mb-3'>
        <p className='text-12'>Created at {formatDate(creationDate)}</p>
        <div className='flex flex-row justify-end'>
          {expirationDate && (
            <InfoCard svg={<Cal />} children={formatDate(expirationDate)} />
          )}
          {subtasks && (
            <InfoCard
              svg={<Subtasks />}
              children={`${
                subtasks.filter((subtask) => subtask.checked).length
              }/${subtasks.length}`}
            />
          )}
          <button
            className={task.isFavorite ? styles.favourite : styles.notFavourite}
            onClick={handleToggleFavorite}>
            <Star />
          </button>
        </div>
      </div>
      <div className={styles.sectionDevider}></div>

      <TaskNameModal name={name} onChange={handleNameChange} />
      <TaskDescription
        description={description}
        onChange={handleDescriptionChange}
      />

      {tags && (
        <div className='flex ml-4 mr-2 mt-1 mb-3'>
          {tags.map((tagId, index) => {
            const tag = allTags.find((tag) => tag.id === tagId)
            return (
              tag && (
                <Tag
                  color={tag.color}
                  tagName={tag.name}
                  deleteTag={true}
                  key={index}
                  onDelete={() => handleDeleteTag(tagId)}
                />
              )
            )
          })}
        </div>
      )}
      <SubtaskBlock />
      <div className='flex mx-2'>
        <Calend value={selectedDate} onChange={handleDateChange} taskId={id} />
        <TagForm value={selectedTags} onChange={handleTagChange} taskId={id} />
      </div>
    </div>
  )
}

export default EditTaskModal
