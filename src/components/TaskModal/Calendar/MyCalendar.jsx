import { useState } from 'react'
import { updateTaskExpirationDate } from '../../../features/tasksSlice'
import './MyCalendar.module.scss'

function MyCalendar({
  value,
  onChange,
  className,
  showNavigation,
  tileClassName,
  prevLabel,
  nextLabel,
  next2Label,
  prev2Label,
  defaultView,
  minDetail,
  locale,
  showWeekNumbers,
  formatDay,
  dispatch,
  task,
}) {
  const [currentMonth, setCurrentMonth] = useState(
    value ? new Date(value).getMonth() : new Date().getMonth()
  )
  const [currentYear, setCurrentYear] = useState(
    value ? new Date(value).getFullYear() : new Date().getFullYear()
  )

  const getDaysInMonth = (year, month) => {
    let date = new Date(year, month + 1, 0)
    return date.getDate()
  }

  const getFirstDayOfWeek = (year, month) => {
    let date = new Date(year, month, 1)
    return date.getDay()
  }

  const getDaysArray = (year, month) => {
    let daysInMonth = getDaysInMonth(year, month)
    let firstDayOfWeek = getFirstDayOfWeek(year, month)
    let daysArray = []
    for (let i = 0; i < firstDayOfWeek; i++) {
      daysArray.push('')
    }
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i)
    }
    while (daysArray.length % 7 !== 0) {
      daysArray.push('')
    }
    return daysArray
  }

  const handleMonthChange = (direction) => {
    if (direction === 'prev') {
      if (currentMonth === 0) {
        setCurrentYear((prevYear) => prevYear - 1)
        setCurrentMonth(11)
      } else {
        setCurrentMonth((prevMonth) => prevMonth - 1)
      }
    }
    if (direction === 'next') {
      if (currentMonth === 11) {
        setCurrentYear((prevYear) => prevYear + 1)
        setCurrentMonth(0)
      } else {
        setCurrentMonth((prevMonth) => prevMonth + 1)
      }
    }
  }

  const handleDateSelect = (day) => {
    let date = new Date(currentYear, currentMonth, day)
    let dateString = date.toISOString()
    onChange(dateString)
    dispatch(
      updateTaskExpirationDate({
        id: task.id,
        expirationDate: dateString,
      })
    )
  }

  const isCurrentDate = (year, month, day) => {
    let currentDate = new Date()
    let currentYear = currentDate.getFullYear()
    let currentMonth = currentDate.getMonth()
    let currentDay = currentDate.getDate()
    if (year === currentYear && month === currentMonth && day === currentDay) {
      return true
    } else {
      return false
    }
  }

  const isEqualDate = (date1, date2) => {
    if (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    ) {
      return true
    } else {
      return false
    }
  }

  return (
    <div className='text-12 text-task w-[200px]'>
      {showNavigation && (
        <div className='flex w-full justify-between'>
          <button onClick={() => handleMonthChange('prev')}>{prevLabel}</button>
          <span>
            {new Date(currentYear, currentMonth).toLocaleString(locale, {
              month: 'long',
              year: 'numeric',
            })}
          </span>
          <button
            className='rotate-180'
            onClick={() => handleMonthChange('next')}>
            {nextLabel}
          </button>
        </div>
      )}
      <div className='grid gap-1 grid-cols-7 grid-rows-1 mt-2'>
        {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((dayName) => (
          <div className='mt-[8px] h-[20px]' key={dayName}>
            {dayName}
          </div>
        ))}
        {getDaysArray(currentYear, currentMonth).map((day, index) => (
          <div
            className={`mx-1 bg-main p-1 w-[25px] h-[25px] rounded-full ${
              day === '' ? '' : 'px-1'
            } ${
              isCurrentDate(currentYear, currentMonth, day) ? 'bg-red-300' : ''
            } ${
              isEqualDate(
                new Date(value),
                new Date(currentYear, currentMonth, day)
              )
                ? 'bg-red-500'
                : ''
            }`}
            key={index}
            onClick={() => handleDateSelect(day)}>
            {formatDay(new Date(currentYear, currentMonth, day)).slice(0, 2)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyCalendar
