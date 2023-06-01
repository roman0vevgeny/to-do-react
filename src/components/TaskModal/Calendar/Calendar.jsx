import React from 'react'
import Calendar from 'react-calendar'
import Arrow from '../../svgs/Arrow'
import { useDispatch } from 'react-redux'
import { updateTaskExpirationDate } from '../../../features/tasksSlice'

const Calend = ({ value, onChange, taskId }) => {
  const dispatch = useDispatch()

  // const taskId = useSelector((state) => state.tasks.selectedTaskId)
  // console.log(taskId)

  const handleDateChange = (value) => {
    const dateString = value.toISOString()
    onChange(value)
    dispatch(
      updateTaskExpirationDate({ id: taskId, expirationDate: dateString })
    )
  }

  // const formattedValue = value instanceof Date ? value.toISOString() : value

  return (
    <div className='flex mt-8'>
      <Calendar
        className='react-calendar'
        onChange={handleDateChange}
        value={value}
        // value={formattedValue}
        showNavigation={true}
        tileClassName='react-calendar__tile'
        prevLabel={<Arrow />}
        nextLabel={<Arrow />}
        next2Label={null}
        prev2Label={null}
        defaultView='month'
        minDetail='month'
        locale='en-GB'
        showWeekNumbers={false}
        // formatLongDate={(locale, date) => date.toISOString()}
      />
    </div>
  )
}

export default Calend
