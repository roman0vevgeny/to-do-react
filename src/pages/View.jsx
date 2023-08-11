import React from 'react'
import { useParams } from 'react-router-dom'
import List from './List'
import Cards from './Cards'
import Boards from './Boards'

const View = () => {
  const { view } = useParams()

  switch (view) {
    case 'list':
      return <List />
    case 'cards':
      return <Cards />
    case 'boards':
      return <Boards />
    default:
      return null
  }
}

export default View
