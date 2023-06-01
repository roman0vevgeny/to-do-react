import React from 'react'

const ErrorMessage = ({ message }) => {
  return (
    <div className='flex px-2 py-[3px] my-1 bg-redTag text-redTag rounded-md text-start text-14 w-fit'>
      {message}
    </div>
  )
}

export default ErrorMessage
