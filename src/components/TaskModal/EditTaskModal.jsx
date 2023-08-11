import React from 'react'
import TaskNameModal from './TaskName/TaskNameModal'
import TaskDescription from './TaskDescription/TaskDescription'
import TagForm from './TagForm/TagForm'
import Tag from '../Tag/Tag'
import Calend from './Calendar/Calendar'
import { useDispatch, useSelector } from 'react-redux'
import {
  updateTaskExpirationDate,
  updateTaskTags,
  updateTaskSubtasks,
  updateTaskIsFavorite,
} from '../../features/tasksSlice'
import SubtaskBlock from './SubtaskBlock/SubtaskBlock'
import TaskHeader from './TaskHeader/TaskHeader'

const EditTaskModal = ({ handleCloseModal, task }) => {
  const { id, tags } = task
  const dispatch = useDispatch()
  const allTags = useSelector((state) => state.tags)

  const handleDeleteTag = (tagId) => {
    dispatch(
      updateTaskTags({
        id: task.id,
        tags: task.tags.filter((id) => id !== tagId),
      })
    )
  }

  return (
    <div onClose={handleCloseModal}>
      <TaskHeader
        task={task}
        onFavoriteChange={(newFavorite) =>
          dispatch(updateTaskIsFavorite({ id: task.id, favorite: newFavorite }))
        }
      />
      <TaskNameModal id={id} checked={task.checked} />
      <TaskDescription id={id} checked={task.checked} />
      {tags && (
        <div className='flex flex-wrap ml-4 mt-1 mb-3 max-w-[530px]'>
          {tags.map((tagId, index) => {
            const tag = allTags.find((tag) => tag.id === tagId)
            return (
              tag && (
                <Tag
                  color={tag.color}
                  tagName={tag.name}
                  deleteTag={!task.checked ? true : false}
                  key={index}
                  onDelete={() => handleDeleteTag(tagId)}
                />
              )
            )
          })}
        </div>
      )}
      <SubtaskBlock
        subtasks={task.subtasks}
        onSubtasksChange={(newSubtasks) =>
          dispatch(updateTaskSubtasks({ id: task.id, subtasks: newSubtasks }))
        }
        checked={task.checked}
      />
      <div
        className={
          tags && tags.length > 0
            ? 'flex ml-2 mt-[20px]'
            : 'flex ml-2 mt-[47px]'
        }>
        <Calend
          expirationDate={task.expirationDate}
          task={task}
          dispatch={dispatch}
          onChange={(newExpirationDate) =>
            dispatch(
              updateTaskExpirationDate({
                id: task.id,
                expirationDate: newExpirationDate,
              })
            )
          }
          checked={task.checked}
        />

        {!task.checked && (
          <TagForm
            value={tags}
            onChange={(newTags) =>
              dispatch(updateTaskTags({ id: task.id, tags: newTags }))
            }
            isNewTask={false}
            taskId={id}
          />
        )}
      </div>
    </div>
  )
}

export default EditTaskModal
