import React from 'react'
import Button from '../components/Button/Button'
import Plus from '../components/svgs/Plus'
import Edit from '../components/svgs/Edit'
import InfoCard from '../components/Info/InfoCard'
import Calendar from '../components/svgs/Calendar'
import Subtasks from '../components/svgs/Subtasks'
import Star from '../components/svgs/Star'
import CheckBox from '../components/CheckBox/CheckBox'
import ListItem from '../components/ListItem/ListItem'
import CreateButton from '../components/Button/CreateButton'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import SectionName from '../components/SectionName/SectionName'

const Home = () => {
  return (
    <div>
      <SectionName name={'Today'} editable={true} />
      <ListItem
        name={'Какая-то очень важная задача'}
        date={'07.05.23'}
        subtasks={'0/2'}
      />
      <ListItem
        name={'Какая-то очень важная задача'}
        checked={true}
        date={'19.05.23'}
        // subtasks={'0/2'}
      />
      <ListItem
        name={'Какая-то очень важная задача'}
        checked={true}
        date={'07.05.23'}
        subtasks={'0/2'}
      />
      <div className='flex flex-row m-2 justify-center items-center'>
        <Button children={'Hello'} svgLeft={<Plus />} />
      </div>
      <SectionName name={'Today'} />
      <ListItem
        name={'Какая-то очень важная задача'}
        date={'07.05.23'}
        subtasks={'0/2'}
      />
    </div>
  )
}

export default Home
