import React, { useState } from 'react'
import InfoCard from '../Info/InfoCard'
import Star from '../svgs/Star'
import Subtasks from '../svgs/Subtasks'
import TaskName from '../TaskName/TaskName'
import CheckBox from '../CheckBox/CheckBox'
import styles from './CardItem.module.scss'
import Cal from '../svgs/Cal'
import Tag from '../Tag/Tag'
import Projects from '../svgs/Projects'
import EditTaskModal from '../TaskModal/EditTaskModal'
import { useSelector, useDispatch } from 'react-redux'
import {
  updateTaskChecked,
  updateTaskIsFavorite,
} from '../../features/tasksSlice'
import InfoExpiration from '../Info/InfoExpiration'
import { selectTaskById } from '../../helpers/selectTaskById'
import Modal from '../Modal/Modal'
import TaskDescription from '../TaskDescription/TaskDescription'
import Subtask from '../TaskModal/SubtaskBlock/Subtask/Subtask'
import SubtaskBlock from '../TaskModal/SubtaskBlock/SubtaskBlock'

const CardItem = ({ taskId }) => {
  const task = useSelector((state) => selectTaskById(state, taskId))
  console.log(task)

  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()

  const checked = task.checked
  const favorite = task.favorite

  const handleToggleFavorite = (e) => {
    dispatch(updateTaskIsFavorite({ id: task.id, favorite: !task.favorite }))
    e.stopPropagation()
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

  const totalSubtasks = task.subtasks.length
  const completedSubtasks = task.subtasks.filter(
    (subtask) => subtask.checked
  ).length
  const subtasksCounter = `${completedSubtasks}/${totalSubtasks}`

  return (
    <div className='relative w-full my-2'>
      <div className={styles.body} onClick={handleOpenModal}>
        <button className={styles.checkbox} onClick={toggleChecked}>
          <CheckBox checked={checked} toggleChecked={toggleChecked} />
        </button>
        <div className={styles.clickable}>
          <div className='flex flex-raw justify-between items-start w-full'>
            <div className='flex flex-grow'>
              <TaskName name={task.name} checked={task.checked} />
            </div>
            <div className='flex mt-[2px]'>
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
              {task.subtasks && task.subtasks.length > 0 && (
                <InfoCard svg={<Subtasks />} children={subtasksCounter} />
              )}
              {task.project && (
                <InfoCard svg={<Projects />} children={task.project.name} />
              )}
              <button
                className={favorite ? styles.favorite : styles.notFavorite}
                onClick={handleToggleFavorite}>
                <Star />
              </button>
            </div>
          </div>
          <div>
            <TaskDescription
              description={task.description}
              checked={task.checked}
            />
          </div>
          {task.subtasks.length > 0 && (
            <div className='flex flex-wrap'>
              <SubtaskBlock subtasks={task.subtasks} />
            </div>
            // <div className='flex flex-wrap'>
            //   {task.subtasks.map((subtask, index) => (
            //     <div key={subtask.id} className='flex w-full'>
            //       <Subtask subtask={subtask} />
            //     </div>
            //   ))}
            // </div>
          )}
          <div className='flex'>
            {task.tags.length > 0 && (
              <div className='flex max-w-[600px] flex-wrap'>
                {task.tags.map((tagId, index) => {
                  const tag = allTags.find((tag) => tag.id === tagId)
                  return (
                    tag && (
                      <Tag color={tag.color} tagName={tag.name} key={index} />
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
