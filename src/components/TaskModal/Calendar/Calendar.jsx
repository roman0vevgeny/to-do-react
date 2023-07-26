import React from 'react'
import Calendar from 'react-calendar'
import Arrow from '../../svgs/Arrow'
import { updateTaskExpirationDate } from '../../../features/tasksSlice'

const Calend = ({ expirationDate, dispatch, task, onChange }) => {
  const handleDateChange = (value) => {
    const updatedExpirationDate = value ? value.toISOString() : null
    if (task && task.id) {
      dispatch(
        updateTaskExpirationDate({
          id: task.id,
          expirationDate: updatedExpirationDate,
        })
      )
    } else {
      onChange(value)
    }
  }

  return (
    <div className='flex mt-8'>
      <Calendar
        className='react-calendar'
        value={expirationDate ? new Date(expirationDate) : null}
        onChange={handleDateChange}
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
      />
    </div>
  )
}

export default Calend
