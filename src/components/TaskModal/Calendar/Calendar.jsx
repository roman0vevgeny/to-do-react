import React from 'react'
import Calendar from 'react-calendar'
import Arrow from '../../svgs/Arrow'
import { updateTaskExpirationDate } from '../../../features/tasksSlice'

const Calend = ({ expirationDate, dispatch, task }) => {
  return (
    <div className='flex mt-8'>
      <Calendar
        className='react-calendar'
        value={expirationDate ? new Date(expirationDate) : null}
        onChange={(value) =>
          dispatch(
            updateTaskExpirationDate({
              id: task.id,
              expirationDate: value.toISOString(),
            })
          )
        }
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
