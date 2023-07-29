// import React, { useEffect, useState } from 'react'
// import styles from './EditTaskModal.module.scss'
// import TaskNameModal from './TaskName/TaskNameModal'
// import TaskDescription from './TaskDescription/TaskDescription'
// import TagForm from './TagForm/TagForm'
// import Tag from '../Tag/Tag'
// import Calend from './Calendar/Calendar'
// import { useDispatch, useSelector } from 'react-redux'
// import {
//   addTask,
//   addTaskTag,
//   deleteTaskTag,
//   updateTaskExpirationDate,
// } from '../../features/tasksSlice'
// import SubtaskBlock from './SubtaskBlock/SubtaskBlock'
// import TaskHeader from './TaskHeader/TaskHeader'

// const EditTaskModal = ({ handleCloseModal, task, isNewTask }) => {
//   const { id, description, tags, expirationDate } = task

//   const [selectedTags, setSelectedTags] = useState(tags)
//   // const [selectedTags, setSelectedTags] = useState(task.tags)

//   const dispatch = useDispatch()

//   useEffect(() => {
//     if (isNewTask) {
//       dispatch(addTask(task))
//     }
//   }, [dispatch, task, isNewTask])

//   const allTags = useSelector((state) => state.tags)

//   const handleAddTag = (tagId) => {
//     dispatch(addTaskTag({ id: task.id, tagId }))
//   }

//   const handleDeleteTag = (tagId) => {
//     dispatch(deleteTaskTag({ id: task.id, tagId }))
//   }

//   const handleTagChange = (tagId) => {
//     if (selectedTags.includes(tagId)) {
//       const newSelectedTags = selectedTags.filter((id) => id !== tagId)
//       setSelectedTags(newSelectedTags)
//       handleDeleteTag(tagId)
//     } else {
//       const newSelectedTags = [...selectedTags, tagId]
//       setSelectedTags(newSelectedTags)
//       handleAddTag(tagId)
//     }
//     dispatch(updateTaskTags({ id: task.id, tags: selectedTags }))
//   }

//   return (
//     <div onClose={handleCloseModal}>
//       <TaskHeader taskId={id} />
//       <TaskNameModal id={id} />
//       <TaskDescription id={id} />
//       {tags && (
//         <div className='flex flex-wrap ml-4 mt-1 mb-3 max-w-[530px]'>
//           {tags.map((tagId, index) => {
//             const tag = allTags.find((tag) => tag.id === tagId)
//             return (
//               tag && (
//                 <Tag
//                   color={tag.color}
//                   tagName={tag.name}
//                   deleteTag={true}
//                   key={index}
//                   onDelete={() => handleDeleteTag(tagId)}
//                 />
//               )
//             )
//           })}
//         </div>
//       )}
//       <SubtaskBlock task={task} />
//       <div className='flex ml-2'>
//         <Calend
//           expirationDate={task.expirationDate}
//           dispatch={dispatch}
//           task={task}
//         />
//         <TagForm value={selectedTags} onChange={handleTagChange} taskId={id} />
//       </div>
//     </div>
//   )
// }

// export default EditTaskModal

// import React, { useState } from 'react'
// import styles from './EditTaskModal.module.scss'
// import TaskNameModal from './TaskName/TaskNameModal'
// import TaskDescription from './TaskDescription/TaskDescription'
// import TagForm from './TagForm/TagForm'
// import Calend from './Calendar/Calendar'
// import { useDispatch } from 'react-redux'
// import { updateTask } from '../../features/tasksSlice'
// import Plus from '../svgs/Plus'

// const EditTaskModal = ({ task, handleCloseModal }) => {
//   const [taskName, setTaskName] = useState(task.name)
//   const [taskDescription, setTaskDescription] = useState(task.description)
//   const [selectedTags, setSelectedTags] = useState(task.tags)
//   const [expirationDate, setExpirationDate] = useState(task.expirationDate)

//   const dispatch = useDispatch()

//   const handleUpdateTask = () => {
//     const updatedTask = {
//       ...task,
//       name: taskName,
//       description: taskDescription,
//       tags: selectedTags,
//       expirationDate: expirationDate ? expirationDate.toISOString() : null,
//     }
//     dispatch(updateTask(updatedTask))
//     handleCloseModal()
//   }

//   return (
//     <div onClose={handleCloseModal}>
//       <div>
//         <TaskNameModal name={taskName} setName={setTaskName} />
//         <TaskDescription
//           description={taskDescription}
//           setDescription={setTaskDescription}
//         />
//         <div className='flex ml-2'>
//           <Calend
//             expirationDate={expirationDate}
//             onChange={setExpirationDate}
//             task={task}
//           />
//           <TagForm
//             value={selectedTags}
//             onChange={setSelectedTags}
//             taskId={task.id}
//           />{' '}
//         </div>
//       </div>
//       <div className='flex w-full justify-center'>
//         <button
//           type={'submit'}
//           className='flex p-1 rounded-[5px] text-gray text-14 font-bold bg-gray items-center hover:bg-grayHover hover:text-grayHover my-1 h-fit px-2 ml-2'
//           onClick={handleUpdateTask}>
//           <Plus />
//           <p className='mx-1'>Update task</p>
//         </button>
//       </div>
//     </div>
//   )
// }

// export default EditTaskModal

import React, { useEffect, useState } from 'react'
import styles from './EditTaskModal.module.scss'
import TaskNameModal from './TaskName/TaskNameModal'
import TaskDescription from './TaskDescription/TaskDescription'
import TagForm from './TagForm/TagForm'
import Tag from '../Tag/Tag'
import Calend from './Calendar/Calendar'
import { useDispatch, useSelector } from 'react-redux'
import {
  addTask,
  addTaskTag,
  deleteTaskTag,
  updateTaskExpirationDate,
  updateTaskTags,
} from '../../features/tasksSlice'
import SubtaskBlock from './SubtaskBlock/SubtaskBlock'
import TaskHeader from './TaskHeader/TaskHeader'

const EditTaskModal = ({ handleCloseModal, task, isNewTask }) => {
  const { id, description, tags, expirationDate } = task

  const dispatch = useDispatch()

  useEffect(() => {
    if (isNewTask) {
      dispatch(addTask(task))
    }
  }, [dispatch, task, isNewTask])

  const allTags = useSelector((state) => state.tags)

  const handleAddTag = (tagId) => {
    console.log('Adding tag to task:', tagId)
    dispatch(addTaskTag({ id: task.id, tagId }))
  }

  const handleDeleteTag = (tagId) => {
    console.log('Deleting tag from task:', tagId)
    dispatch(deleteTaskTag({ id: task.id, tagId }))
  }

  return (
    <div onClose={handleCloseModal}>
      <TaskHeader taskId={id} />
      <TaskNameModal id={id} />
      <TaskDescription id={id} />
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
          expirationDate={task.expirationDate}
          dispatch={dispatch}
          task={task}
        />
        <TagForm
          value={tags}
          onChange={(newTags) =>
            dispatch(updateTaskTags({ id: task.id, tags: newTags }))
          }
          taskId={id}
          onAddTag={handleAddTag}
          onDeleteTag={handleDeleteTag}
        />{' '}
      </div>
      {console.log('Tags:', tags)}
    </div>
  )
}

export default EditTaskModal
