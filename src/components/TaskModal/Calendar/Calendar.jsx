import React from 'react'
import Calendar from 'react-calendar'
import Arrow from '../../svgs/Arrow'
import { updateTaskExpirationDate } from '../../../features/tasksSlice'

const Calend = ({ expirationDate, dispatch, task, onChange, checked }) => {
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
        className={
          !checked
            ? 'react-calendar' && 'text-task'
            : 'react-calendar' && 'text-gray'
        }
        value={expirationDate ? new Date(expirationDate) : null}
        onChange={!checked ? handleDateChange : null}
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
