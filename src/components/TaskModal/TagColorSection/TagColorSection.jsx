import React from 'react'
import TagBubble from '../../TagBubble/TagBubble'

const TagColorSection = () => {
  return (
    <div className='flex w-[60px] flex-wrap'>
      <TagBubble color='red' />
      <TagBubble color='yellow' />
      <TagBubble color='blue' />
      <TagBubble color='sea' />
      <TagBubble color='green' />
      <TagBubble color='purple' />
      <TagBubble color='gray' />
    </div>
  )
}

export default TagColorSection
