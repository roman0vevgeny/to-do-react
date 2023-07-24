import React, { useState } from 'react'
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
  addTaskTag,
  deleteTaskTag,
} from '../../features/tasksSlice'
import SubtaskBlock from './SubtaskBlock/SubtaskBlock'
import TaskHeader from './TaskHeader/TaskHeader'

const EditTaskModal = ({ handleCloseModal, task }) => {
  const { id, name, description, tags } = task

  const expirationDate = useSelector(
    (state) => state.tasks.tasks.find((t) => t.id === id).expirationDate
  )

  const [selectedTags, setSelectedTags] = useState(tags)

  const dispatch = useDispatch()

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

  console.log(expirationDate)

  return (
    <div onClose={handleCloseModal}>
      <TaskHeader taskId={id} />
      <TaskNameModal name={name} onChange={handleNameChange} />
      <TaskDescription
        description={description}
        onChange={handleDescriptionChange}
      />

      {tags && (
        <div className='flex flex-wrap ml-4 mt-1 mb-3 max-w-[530px]'>
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
      <SubtaskBlock task={task} />
      <div className='flex ml-2'>
        <Calend
          expirationDate={expirationDate}
          dispatch={dispatch}
          task={task}
        />
        <TagForm value={selectedTags} onChange={handleTagChange} taskId={id} />
      </div>
    </div>
  )
}

export default EditTaskModal
