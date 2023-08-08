import React, { useState, useEffect } from 'react'
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
import Button from '../Button/Button'

const CreateTaskModal = ({ onClose, today }) => {
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

  const [error, setError] = useState(null)

  useEffect(() => {
    if (today && !task.expirationDate) {
      setTask({ ...task, expirationDate: new Date().toISOString() })
    }
  }, [today])

  const dispatch = useDispatch()
  const { expirationDate } = task

  const allTags = useSelector((state) => state.tags)

  const handleCreateTask = () => {
    if (!task.name || task.name === 'Untitled') {
      setError('Please enter a valid task name')
    } else {
      setError(null)
      dispatch(
        addTask({
          ...task,
          expirationDate: expirationDate,
        })
      )
      onClose()
    }
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
          expirationDate={expirationDate}
          task={task}
          onChange={(newExpirationDate) =>
            setTask({
              ...task,
              expirationDate: newExpirationDate,
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
      <div className='flex justify-center'>
        <Button
          type={'submit'}
          children={'Create task'}
          onClick={handleCreateTask}
          svgLeft={<Plus />}
        />
      </div>
      {error && (
        <p className='flex p-2 mt-2 rounded-md text-redTag bg-redTag text-14 justify-center'>
          {error}
        </p>
      )}
    </div>
  )
}

export default CreateTaskModal
