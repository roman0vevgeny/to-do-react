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

const CreateTaskModal = ({ handleCloseModal }) => {
  const [taskName, setTaskName] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [selectedTags, setSelectedTags] = useState([])
  const [expirationDate, setExpirationDate] = useState(null)

  const dispatch = useDispatch()

  const allTags = useSelector((state) => state.tags)
  const handleCreateTask = () => {
    const newTask = {
      id: Date.now(),
      checked: false,
      name: taskName,
      description: taskDescription,
      tags: selectedTags,
      expirationDate: expirationDate ? expirationDate.toISOString() : null,
      subtasks: [],
    }
    dispatch(addTask(newTask))
    handleCloseModal()
  }

  const handleDeleteTag = (tagId) => {
    const newSelectedTags = selectedTags.filter((id) => id !== tagId)
    setSelectedTags(newSelectedTags)
  }

  return (
    <div onClose={handleCloseModal}>
      <div>
        <CreateTaskName name={taskName} setName={setTaskName} />
        <CreateTaskDescription
          description={taskDescription}
          setDescription={setTaskDescription}
        />
        <div className='flex flex-wrap ml-4 mt-1 mb-3 max-w-[530px]'>
          {selectedTags.map((tagId) => {
            const tag = allTags.find((tag) => tag.id === tagId)
            return (
              tag && (
                <Tag
                  color={tag.color}
                  tagName={tag.name}
                  deleteTag={true}
                  key={tagId}
                  onDelete={() => handleDeleteTag(tagId)}
                />
              )
            )
          })}
        </div>
        <div className='flex ml-2'>
          <Calend
            expirationDate={expirationDate}
            onChange={setExpirationDate}
          />
          <TagForm
            value={selectedTags}
            onChange={setSelectedTags}
            isNewTask={true}
            taskId={null}
          />
        </div>
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
