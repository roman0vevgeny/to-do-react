import '@bangle.dev/core/style.css'
import '@bangle.dev/tooltip/style.css'
import '@bangle.dev/react-menu/style.css'
import styles from './Bangle.module.scss'
import { useDispatch } from 'react-redux'
import { updateTaskDescription } from '../../features/tasksSlice'
import React, { useState, useEffect } from 'react'
import { BangleEditor, useEditorState } from '@bangle.dev/react'
import {
  link,
  bulletList,
  listItem,
  orderedList,
} from '@bangle.dev/base-components'
import {
  StaticMenu,
  Menu,
  BulletListButton,
  OrderedListButton,
  UndoButton,
  RedoButton,
} from '@bangle.dev/react-menu'

function Bangle({ task }) {
  const [editor, setEditor] = useState()
  const [showEditor, setShowEditor] = useState(
    task.description === ('' || null) ? false : true
  )

  const description = task.description || null
  const dispatch = useDispatch()

  const isEmptyDescription = (description) => {
    return (
      description === '<p><br class="ProseMirror-trailingBreak"></p>' ||
      description === '<br class="ProseMirror-trailingBreak">' ||
      description === ''
    )
  }

  const handleButtonClick = () => {
    setShowEditor(true)
  }

  const handleDescriptionChange = () => {
    const element = document.getElementById('bangle-editor')
    const divElement = element.firstElementChild
    const htmlString = divElement.innerHTML

    let description
    if (isEmptyDescription(htmlString)) {
      description = null
    } else {
      description = htmlString
    }

    dispatch(
      updateTaskDescription({
        id: task.id,
        description: description,
      })
    )
  }

  const editorState = useEditorState({
    specs: [
      link.spec({ openOnClick: true }),
      orderedList.spec(),
      bulletList.spec(),
      listItem.spec(),
    ],
    plugins: () => [
      link.plugins(),
      orderedList.plugins(),
      bulletList.plugins(),
      listItem.plugins(),
    ],
    initialValue: description,
  })

  return (
    <>
      {showEditor && (
        <div className={styles.main}>
          {description !== null ? (
            <BangleEditor
              state={editorState}
              id='bangle-editor'
              onReady={(editor) => {
                setEditor(editor)
                editor.view.dom.blur()
              }}
            />
          ) : (
            <BangleEditor
              state={editorState}
              id='bangle-editor'
              onReady={(editor) => {
                setEditor(editor)
              }}
            />
          )}
          {task.checked ? null : (
            <StaticMenu
              editor={editor}
              tooltipRender={() => null}
              renderMenu={() => (
                <Menu>
                  <BulletListButton />
                  <OrderedListButton />
                  <div className='flex flex-grow space-x-2'>
                    <button
                      className={styles.button}
                      onClick={handleDescriptionChange}>
                      Save
                    </button>
                  </div>
                </Menu>
              )}
            />
          )}
        </div>
      )}
      {!showEditor && !task.checked && (
        <button className={styles.buttonOpen} onClick={handleButtonClick}>
          + Add a description
        </button>
      )}
    </>
  )
}

export default Bangle
