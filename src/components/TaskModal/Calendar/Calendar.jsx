import React, { useState } from 'react'
import Calendar from 'react-calendar'
import Arrow from '../../svgs/Arrow'

const Calend = () => {
  const [value, onChange] = useState(new Date())

  return (
    <div className='flex mt-8'>
      <Calendar
        className='react-calendar'
        onChange={onChange}
        value={value}
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
        // showNeighboringMonth={false}
      />
    </div>
  )
}

export default Calend
