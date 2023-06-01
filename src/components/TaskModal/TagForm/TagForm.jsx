import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTag } from '../../../features/tagsSlice'
import TagInput from '../TagInput/TagInput'
import TagColorSection from '../TagColorSection/TagColorSection'
import AllTags from '../AllTags/AllTags'
import ErrorMessage from '../ErrorMessage'
import Plus from '../../svgs/Plus'

const TagForm = ({ value, onChange, taskId }) => {
  const dispatch = useDispatch()

  // внутреннее состояние для имени нового тега
  const [name, setName] = useState('')
  // внутреннее состояние для цвета нового тега
  const [color, setColor] = useState('')
  // внутреннее состояние для ошибки
  const [error, setError] = useState('')

  // функция для обработки изменения имени нового тега
  const handleNameChange = (value) => {
    setName(value)
    setError('') // сбрасываем ошибку при изменении имени
  }

  // функция для обработки выбора цвета нового тега
  const handleColorSelect = (value) => {
    setColor(value)
    setError('') // сбрасываем ошибку при выборе цвета
  }

  // функция для обработки отправки формы
  const handleSubmit = (e) => {
    e.preventDefault()
    // проверяем, что имя и цвет не пустые
    if (name && color) {
      // создаем новый тег с уникальным id
      const newTag = {
        id: Date.now().toString(),
        name,
        color,
      }
      // диспатчим экшен для добавления нового тега в стор
      dispatch(addTag(newTag))
      // сбрасываем имя и цвет
      setName('')
      setColor('')
    } else {
      // устанавливаем ошибку, если имя или цвет пустые
      setError('Enter a name and select a color')
    }
  }

  const tags = useSelector((state) => state.tags)

  // функция для обработки выбора тега из списка
  const handleTagSelect = (tagId) => {
    onChange(tagId) // передаем id тега в родительский компонент
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
