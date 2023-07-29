// import React, { useState } from 'react'
// import styles from './EditTaskModal.module.scss'
// import CreateTaskName from './TaskName/CreateTaskName'
// import CreateTaskDescription from './TaskDescription/CreateTaskDescription'
// import TagForm from './TagForm/TagForm'
// import Calend from './Calendar/Calendar'
// import { useDispatch } from 'react-redux'
// import { addTask } from '../../features/tasksSlice'
// import Plus from '../svgs/Plus'

// const CreateTaskModal = ({ handleCloseModal }) => {
//   const [taskName, setTaskName] = useState('')
//   const [taskDescription, setTaskDescription] = useState('')
//   const [selectedTags, setSelectedTags] = useState([])
//   const [expirationDate, setExpirationDate] = useState(null)

//   const dispatch = useDispatch()

//   const handleCreateTask = () => {
//     const newTask = {
//       id: Date.now(),
//       name: taskName,
//       description: taskDescription,
//       tags: selectedTags,
//       expirationDate: expirationDate ? expirationDate.toISOString() : null,
//       subtasks: [],
//       completed: false,
//     }
//     dispatch(addTask(newTask))
//     handleCloseModal()
//   }

//   const handleTagChange = (tagId) => {
//     if (selectedTags.includes(tagId)) {
//       const newSelectedTags = selectedTags.filter((id) => id !== tagId)
//       setSelectedTags(newSelectedTags)
//     } else {
//       const newSelectedTags = [...selectedTags, tagId]
//       setSelectedTags(newSelectedTags)
//     }
//   }

//   return (
//     <div onClose={handleCloseModal}>
//       <div>
//         <CreateTaskName name={taskName} setName={setTaskName} />
//         <CreateTaskDescription
//           description={taskDescription}
//           setDescription={setTaskDescription}
//         />
//         <div className='flex ml-2'>
//           <Calend
//             expirationDate={expirationDate}
//             onChange={setExpirationDate}
//           />
//           <TagForm value={selectedTags} onChange={handleTagChange} />
//         </div>
//       </div>
//       <div className='flex w-full justify-center'>
//         <button
//           type={'submit'}
//           className='flex p-1 rounded-[5px] text-gray text-14 font-bold bg-gray items-center hover:bg-grayHover hover:text-grayHover my-1 h-fit px-2 ml-2'
//           onClick={handleCreateTask}>
//           <Plus />
//           <p className='mx-1'>Create task</p>
//         </button>
//       </div>
//     </div>
//   )
// }

// export default CreateTaskModal

import React, { useState } from 'react'
import styles from './EditTaskModal.module.scss'
import CreateTaskName from './TaskName/CreateTaskName'
import CreateTaskDescription from './TaskDescription/CreateTaskDescription'
import TagForm from './TagForm/TagForm'
import Calend from './Calendar/Calendar'
import { useDispatch } from 'react-redux'
import { addTask } from '../../features/tasksSlice'
import Plus from '../svgs/Plus'

const CreateTaskModal = ({ handleCloseModal }) => {
  const [taskName, setTaskName] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [selectedTags, setSelectedTags] = useState([])
  const [expirationDate, setExpirationDate] = useState(null)

  const dispatch = useDispatch()

  const handleCreateTask = () => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      description: taskDescription,
      tags: selectedTags,
      expirationDate: expirationDate ? expirationDate.toISOString() : null,
      subtasks: [],
      completed: false,
    }
    dispatch(addTask(newTask))
    handleCloseModal()
  }

  return (
    <div onClose={handleCloseModal}>
      <div>
        <CreateTaskName name={taskName} setName={setTaskName} />
        <CreateTaskDescription
          description={taskDescription}
          setDescription={setTaskDescription}
        />
        <div className='flex ml-2'>
          <Calend
            expirationDate={expirationDate}
            onChange={setExpirationDate}
          />
          <TagForm onChange={setSelectedTags} />
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
