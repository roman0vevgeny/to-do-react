import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTag } from '../../../features/tagsSlice'
import TagInput from './TagInput/TagInput'
import TagColorSection from './TagColorSection/TagColorSection'
import AllTags from './AllTags/AllTags'
import ErrorMessage from '../ErrorMessage'
import Plus from '../../svgs/Plus'

const TagForm = ({ value, onChange, taskId }) => {
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [color, setColor] = useState('')
  const [error, setError] = useState('')

  // const handleNameChange = (value) => {
  //   setName(value)
  //   setError('')
  // }

  const handleNameChange = (value) => {
    setName(value)
    if (value.length > 20) {
      setError('20 charecters max')
    } else {
      setError('')
    }
  }

  const handleColorSelect = (value) => {
    setColor(value)
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && color) {
      if (name.length > 20) {
        setError('20 charecters max')
        return false
      }
      const newTag = {
        id: Date.now().toString(),
        name,
        color,
      }
      dispatch(addTag(newTag))
      setName('')
      setColor('')
    } else {
      setError('Enter a name and select a color')
    }
  }

  const tags = useSelector((state) => state.tags)

  const handleTagSelect = (tagId) => {
    onChange(tagId)
  }

  return (
    <form className='flex flex-col mt-8 ml-8 w-full' onSubmit={handleSubmit}>
      <TagInput name={name} onNameChange={handleNameChange} />
      <div className='flex mt-2'>
        <TagColorSection color={color} onColorSelect={handleColorSelect} />{' '}
        <AllTags tags={tags} onSelect={handleTagSelect} taskId={taskId} />
      </div>
      <div className='flex justify-end mr-2'>
        {error && <ErrorMessage message={error} />}
        <button
          type={'submit'}
          className='flex p-1 rounded-[5px] text-gray text-14 font-bold bg-gray items-center hover:bg-grayHover hover:text-grayHover my-1 h-fit px-2 ml-2'>
          <Plus />
          <p className='mx-1'>Create</p>
        </button>
      </div>
    </form>
  )
}

export default TagForm
