import React, { useState } from 'react'
import InfoCard from '../Info/InfoCard'
import Subtasks from '../svgs/Subtasks'
import Star from '../svgs/Star'
import Cal from '../svgs/Cal'
import CheckBox from '../CheckBox/CheckBox'
import styles from './EditModal.module.scss'
import TaskNameModal from '../TaskModal/TaskName/TaskNameModal'
import TaskDescription from '../TaskModal/TaskDescription/TaskDescription'
import Subtask from '../TaskModal/Subtask/Subtask'
import SubtaskInput from '../TaskModal/SubtaskInput/SubtaskInput'
import TagForm from '../TaskModal/TagForm/TagForm'
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
  addTaskSubtask,
  deleteTaskSubtask,
  updateTaskSubtaskName,
  updateTaskSubtaskChecked,
} from '../../features/tasksSlice'

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

  const [subtaskInput, setSubtaskInput] = useState('')
  const [selectedDate, setSelectedDate] = useState(expirationDate)
  const [selectedTags, setSelectedTags] = useState(tags)

  const dispatch = useDispatch()

  console.log('name:', name)

  const handleEditClick = () => {
    setIsOpen(true)
  }

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

  const handleAddSubtask = (subtask) => {
    dispatch(addTaskSubtask({ id: task.id, subtask }))
  }

  const handleDeleteSubtask = (subtaskId) => {
    dispatch(deleteTaskSubtask({ id: task.id, subtaskId }))
  }

  const handleSubtaskNameChange = (subtaskId, subtaskName) => {
    dispatch(updateTaskSubtaskName({ id: task.id, subtaskId, subtaskName }))
  }

  const handleSubtaskCheckedChange = (subtaskId, checked) => {
    dispatch(updateTaskSubtaskChecked({ id: task.id, subtaskId, checked }))
  }

  const handleExpirationDateChange = (expirationDate) => {
    const dateString = expirationDate
    dispatch(
      updateTaskExpirationDate({ id: task.id, expirationDate: dateString })
    )
  }

  const handleSubtaskSubmit = (e) => {
    e.preventDefault()
    if (subtaskInput.trim()) {
      const newSubtask = {
        id: new Date(),
        name: subtaskInput,
        checked: false,
      }
      handleAddSubtask(newSubtask)
      setSubtaskInput('')
    }
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

      {subtasks &&
        subtasks.map((subtask) => (
          <div key={subtask.id} className='flex items-start mx-2 mb-3'>
            <button
              className={styles.checkbox}
              onClick={() =>
                handleSubtaskCheckedChange(subtask.id, !subtask.checked)
              }>
              {subtask.checked ? <CheckBoxChecked /> : <CheckBox />}
            </button>
            <Subtask
              subtask={subtask.name}
              onChange={(e) =>
                handleSubtaskNameChange(subtask.id, e.target.value)
              }
            />
          </div>
        ))}

      <SubtaskInput
        value={subtaskInput}
        onChange={(e) => setSubtaskInput(e.target.value)}
        onSubmit={handleSubtaskSubmit}
      />

      <div className='flex mx-2'>
        <Calend value={selectedDate} onChange={handleDateChange} taskId={id} />
        <TagForm value={selectedTags} onChange={handleTagChange} taskId={id} />
      </div>
    </div>
  )
}

export default EditTaskModal
