import React from 'react'
import TaskNameModal from './TaskName/TaskNameModal'
import styles from './EditTaskModal.module.scss'
import TaskDescription from './TaskDescription/TaskDescription'
import TagForm from './TagForm/TagForm'
import Tag from '../Tag/Tag'
import Calend from './Calendar/Calendar'
import Plus from '../svgs/Plus'
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
      <div>
        <TaskHeader
          task={task}
          onFavoriteChange={(newFavorite) =>
            dispatch(
              updateTaskIsFavorite({ id: task.id, favorite: newFavorite })
            )
          }
        />
      </div>

      <div className='flex flex-row'>
        <div className='flex flex-col justify-between'>
          <div>
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
                dispatch(
                  updateTaskSubtasks({ id: task.id, subtasks: newSubtasks })
                )
              }
              checked={task.checked}
            />
          </div>
          <div className='m-2 flex'>
            <button
              type={'submit'}
              className='flex p-1 rounded-[5px] text-gray text-14 font-bold bg-gray justify-center items-center hover:bg-grayHover hover:text-grayHover my-1 h-fit px-2 w-full'>
              <div>
                <Plus />
              </div>
              <p className='flex justify-center ml-1'>View history</p>
            </button>
          </div>
        </div>

        {!task.checked && (
          <>
            <div className={styles.verticalDevider}></div>
            <div className='ml-5 mt-2'>
              <div>
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
                <TagForm
                  value={tags}
                  onChange={(newTags) =>
                    dispatch(updateTaskTags({ id: task.id, tags: newTags }))
                  }
                  isNewTask={false}
                  taskId={id}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default EditTaskModal
