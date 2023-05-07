import React from 'react'
import Button from '../components/Button/Button'
import Plus from '../components/svgs/Plus'
import Edit from '../components/svgs/Edit'

const Home = () => {
  return (
    <div>
      <Button children={'Hello'} svgLeft={<Plus />} />
      <Button svgLeft={<Plus />} />
      <Button svgLeft={<Edit />} />
    </div>
  )
}

export default Home
