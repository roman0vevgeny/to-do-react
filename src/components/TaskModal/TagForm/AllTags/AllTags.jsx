import React from 'react'
import Tag from '../../../Tag/Tag'
import styles from './AllTags.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addTaskTag } from '../../../../features/tasksSlice'

const AllTags = ({ tags, taskId }) => {
  const dispatch = useDispatch()

  const handleAddTag = (tagId) => {
    dispatch(addTaskTag({ id: taskId, tagId }))
  }

  // Проверяем, есть ли у задачи уже добавленный тег
  const task = useSelector((state) =>
    state.tasks.tasks.find((task) => task.id === taskId)
  )
  const taskTags = task ? task.tags : []

  return (
    <div className={styles.tags}>
      {tags.map((tag) => (
        <button
          key={tag.id}
          onClick={() => handleAddTag(tag.id)}
          disabled={taskTags.includes(tag.id)}>
          <Tag color={tag.color} tagName={tag.name} />
        </button>
      ))}
    </div>
  )
}

export default AllTags
