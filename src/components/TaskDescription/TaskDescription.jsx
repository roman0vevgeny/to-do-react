import React from 'react'
import styles from './TaskDescription.module.scss'
import parse, { domToReact } from 'html-react-parser'

const TaskDescription = ({ description }) => {
  const listStyle = {
    listStyleType: 'disc',
    listStylePosition: 'outside',
    display: 'inline-block',
  }

  const listStyleBullet = {
    listStyleType: 'decimal',
    listStylePosition: 'outside',
    display: 'inline-block',
  }

  const listItemStyle = {
    display: 'inline-block',
    verticalAlign: 'middle',
    listStylePosition: 'outside',
  }

  return (
    <div className={styles.text}>
      <div>
        {parse(description, {
          replace: (domNode) => {
            if (domNode.name === 'ul') {
              return (
                <div
                  className='flex ml-4 my-1 w-full list-inside px-2'
                  style={listStyle}>
                  {domToReact(domNode.children)}
                </div>
              )
            } else if (domNode.name === 'ol') {
              return (
                <div
                  className='flex ml-4 my-1 w-full list-inside px-2'
                  style={listStyleBullet}>
                  {domToReact(domNode.children)}
                </div>
              )
            } else if (domNode.name === 'li') {
              return (
                <div
                  className='flex  ml-4 my-1 w-full list-inside px-2'
                  style={listItemStyle}>
                  {domToReact(domNode.children)}
                </div>
              )
            } else if (domNode.name === 'p') {
              return (
                <h6 className={styles.textH}>
                  {domToReact(
                    domNode.children.map((child) => {
                      if (child.name === 'a') {
                        const style = {
                          width: '300px',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          display: 'block',
                        }

                        const styleString = Object.entries(style)
                          .map(([key, value]) => `${key}: ${value}`)
                          .join('; ')

                        return {
                          ...child,
                          attribs: {
                            ...child.attribs,
                            href: child.attribs.href,
                            target: '_blank',
                            rel: 'noopener noreferrer nofollow',
                            style: styleString,
                          },
                        }
                      } else {
                        return child
                      }
                    })
                  )}
                </h6>
              )
            }
          },
        })}
      </div>
    </div>
  )
}

export default TaskDescription
