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

const Home = () => {
  return (
    <div>
      <ListItem
        name={
          'Какая-то очень важная задача, которая очень длинная и не влезает в одну строку'
        }
        date={'07.05.23'}
        subtasks={'0/2'}
      />
      <ListItem
        name={'Какая-то очень важная задача'}
        checked={true}
        // date={'07.05.23'}
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
        <Button svgLeft={<Plus />} />
        <Button svgLeft={<Edit />} />
        <InfoCard svgLeft={<Calendar />} date={'20.02.23'} />
        <InfoCard svgLeft={<Subtasks />} subtasksCounter={'0/5'} />
        <Button svgLeft={<Star />} />
        <CheckBox />
      </div>
    </div>
  )
}

export default Home
