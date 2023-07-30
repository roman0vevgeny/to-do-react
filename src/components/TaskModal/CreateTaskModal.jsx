import React, { useState } from 'react'
import styles from './EditTaskModal.module.scss'
import CreateTaskName from './TaskName/CreateTaskName'
import CreateTaskDescription from './TaskDescription/CreateTaskDescription'
import TagForm from './TagForm/TagForm'
import Calend from './Calendar/Calendar'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../../features/tasksSlice'
import Plus from '../svgs/Plus'
import Tag from '../Tag/Tag'
import TaskHeader from './TaskHeader/TaskHeader'
import SubtaskBlock from './SubtaskBlock/SubtaskBlock'

const CreateTaskModal = ({ onClose }) => {
  const [task, setTask] = useState({
    id: Date.now(),
    name: '',
    description: '',
    tags: [],
    expirationDate: null,
    subtasks: [],
    checked: false,
    favorite: false,
  })

  const dispatch = useDispatch()
  const allTags = useSelector((state) => state.tags)

  const handleCreateTask = () => {
    dispatch(addTask(task))
    onClose()
  }

  return (
    <div>
      <TaskHeader
        task={task}
        onFavoriteChange={(newFavorite) =>
          setTask({ ...task, favorite: newFavorite })
        }
        isNewTask={true}
      />
      <CreateTaskName
        name={task.name}
        setName={(newName) => setTask({ ...task, name: newName })}
      />
      <CreateTaskDescription
        description={task.description}
        setDescription={(newDescription) =>
          setTask({ ...task, description: newDescription })
        }
      />
      <div className='flex flex-wrap ml-4 mt-1 mb-3 max-w-[530px]'>
        {task.tags.map((tagId) => {
          const tag = allTags.find((tag) => tag.id === tagId)
          return (
            tag && (
              <Tag
                color={tag.color}
                tagName={tag.name}
                deleteTag={true}
                key={tagId}
                onDelete={() =>
                  setTask({
                    ...task,
                    tags: task.tags.filter((id) => id !== tagId),
                  })
                }
              />
            )
          )
        })}
      </div>
      <SubtaskBlock
        subtasks={task.subtasks}
        onSubtasksChange={(newSubtasks) =>
          setTask({ ...task, subtasks: newSubtasks })
        }
        isNewTask={true}
      />
      <div className='flex ml-2'>
        <Calend
          expirationDate={task.expirationDate}
          onChange={(newExpirationDate) =>
            setTask({
              ...task,
              expirationDate: newExpirationDate.toISOString(),
            })
          }
        />
        <TagForm
          value={task.tags}
          onChange={(newTags) => setTask({ ...task, tags: newTags })}
          isNewTask={true}
          taskId={null}
        />
      </div>
      <div className='flex w-full justify-center'>
        <button
          type={'submit'}
          className='flex p-1 rounded-[5px] text-gray text-14 font-bold bg-gray items-center hover:bg-grayHover hover:text-grayHover my-1 h-fit px-2 ml-2'
          onClick={handleCreateTask}>
          <Plus />
          <p className='mx-1'>Create task</p>
        </button>
      </div>
    </div>
  )
}

export default CreateTaskModal
