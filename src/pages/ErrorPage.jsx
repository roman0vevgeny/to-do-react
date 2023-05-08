import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import Plus from '../components/svgs/Plus'
import Button from '../components/Button/Button'
import AppIcon from '../components/svgs/AppIcon'

const ErrorPage = () => {
  const error = useRouteError()
  console.log(error)

  return (
    <div>
      <div id='error-page' className='m-8 p-8 bg-main rounded-md text-center'>
        <h1 className='font-bold text-menu'>Oops!</h1>
        <p className='font-bold text-menu mb-8'>
          Sorry, an unexpected error has occurred.
        </p>
        <p>
          <i className='font-extrabold text-menu text-40'>
            {error.statusText || error.message}
          </i>
        </p>
      </div>
      <div>
        {error.statusText === 'Not Found' && (
          <div className='flex m-8 p-8 rounded-md justify-center items-centre'>
            {<Link to='/'>{<Button children={'Go Home'} />}</Link>}
          </div>
        )}
      </div>
      <div className='flex justify-center'>
        <AppIcon />
      </div>
    </div>
  )
}

export default ErrorPage
