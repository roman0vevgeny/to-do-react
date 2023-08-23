import React, { useState } from 'react'
import InfoCard from '../Info/InfoCard'
import Star from '../svgs/Star'
import TaskName from '../TaskName/TaskName'
import CheckBox from '../CheckBox/CheckBox'
import styles from './CardItem.module.scss'
import Cal from '../svgs/Cal'
import Tag from '../Tag/Tag'
import EditTaskModal from '../TaskModal/EditTaskModal'
import { useSelector, useDispatch } from 'react-redux'
import {
  updateTaskChecked,
  updateTaskIsFavorite,
  updateTaskSubtasks,
} from '../../features/tasksSlice'
import InfoExpiration from '../Info/InfoExpiration'
import { selectTaskById } from '../../helpers/selectTaskById'
import Modal from '../Modal/Modal'
import TaskDescription from '../TaskDescription/TaskDescription'
import TaskSubtasks from '../TaskSubtasks/TaskSubtasks'
import Folder from '../svgs/Folder'

const CardItem = ({ taskId }) => {
  const task = useSelector((state) => selectTaskById(state, taskId))
  // console.log(task)

  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const checked = task.checked
  const favorite = task.favorite

  const handleToggleFavorite = (e) => {
    dispatch(updateTaskIsFavorite({ id: task.id, favorite: !task.favorite }))
    e.stopPropagation()
  }

  const handleSubtasksChange = (newSubtasks) => {
    dispatch(updateTaskSubtasks({ id: taskId, subtasks: newSubtasks }))
  }

  const toggleChecked = () => {
    dispatch(updateTaskChecked(taskId))
  }

  const handleOpenModal = () => {
    setOpen(true)
  }

  const handleCloseModal = () => {
    setOpen(false)
  }

  const allTags = useSelector((state) => state.tags)
  const allProjects = useSelector((state) => state.projects)

  const renderProjects = () => {
    if (task.projects.length === 1) {
      const project = allProjects.find(
        (project) => project.id === task.projects[0]
      )
      return <InfoCard svg={<Folder />} children={project.name} />
    } else if (task.projects.length > 1) {
      const firstProject = allProjects.find(
        (project) => project.id === task.projects[0]
      )
      return (
        <>
          <InfoCard svg={<Folder />} children={`${firstProject.name}...`} />
        </>
      )
    }
    return null
  }

  return (
    <div className='relative w-full my-4'>
      <div
        className={checked ? styles.bodyChecked : styles.body}
        onClick={handleOpenModal}>
        <button className={styles.checkbox} onClick={toggleChecked}>
          <CheckBox checked={checked} toggleChecked={toggleChecked} />
        </button>
        <div className={styles.clickable}>
          <div className='flex flex-raw justify-between items-start w-full'>
            <div className='flex flex-grow'>
              <TaskName name={task.name} checked={task.checked} cards={true} />
            </div>
            <div className='flex mt-[2px]'>
              {renderProjects()}
              {task.expirationDate && (
                <InfoExpiration
                  svg={<Cal />}
                  children={new Date(task.expirationDate).toLocaleDateString(
                    navigator.language,
                    {
                      day: '2-digit',
                      month: '2-digit',
                      year: '2-digit',
                    }
                  )}
                  expirationDate={task.expirationDate}
                  checked={task.checked}
                />
              )}
              <button
                className={favorite ? styles.favorite : styles.notFavorite}
                onClick={handleToggleFavorite}>
                <Star />
              </button>
            </div>
          </div>
          {task.description ? (
            <div>
              <TaskDescription
                description={task.description}
                checked={task.checked}
              />
            </div>
          ) : (
            <div className='h-[5px]'></div>
          )}
          {task.subtasks.length > 0 && (
            <div className='flex flex-wrap'>
              <TaskSubtasks
                subtasks={task.subtasks}
                onSubtasksChange={handleSubtasksChange}
                checked={task.checked}
              />
            </div>
          )}
          <div className='flex'>
            {task.tags.length > 0 && (
              <div className='flex max-w-[600px] flex-wrap'>
                {task.tags.map((tagId, index) => {
                  const tag = allTags.find((tag) => tag.id === tagId)
                  return (
                    tag && (
                      <Tag
                        color={tag.color}
                        tagName={tag.name}
                        key={index}
                        checked={checked}
                      />
                    )
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleCloseModal}
        children={
          <EditTaskModal
            task={task}
            onClose={(e) => handleCloseModal()}
            // formatDate={formatDate}
          />
        }
      />
    </div>
  )
}

export default CardItem
