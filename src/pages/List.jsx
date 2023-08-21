import React, { useState, useRef, useEffect, useCallback } from 'react'
import ListItem from '../components/ListItem/ListItem'
import SectionName from '../components/SectionName/SectionName'
import CreateButton from '../components/Button/CreateButton'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { updateTasksOrder } from '../features/tasksSlice'
import InfoBlock from '../components/Info/IndoBlock'
import ScrollButton from '../components/Button/ScrollButton'
import Modal from '../components/Modal/Modal'
import EditTaskModal from '../components/TaskModal/EditTaskModal'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import {
  todayTasksSelector,
  expiredTasksSelector,
} from '../features/tasksSelectors'

const List = () => {
  const [isShowButton, setIsShowButton] = React.useState(false)
  const [open, setOpen] = useState(false)
  const [selectedTaskId, setSelectedTaskId] = useState(null)

  let location = useLocation()
  const dispatch = useDispatch()

  const handleSelectTask = (taskId) => {
    setSelectedTaskId(taskId)
  }

  const getTasksByPath = (path) => {
    switch (path) {
      case '/home/list':
        return useSelector((state) => state.tasks.tasks)
      case '/today/list':
        return useSelector(todayTasksSelector)
      case '/expired/list':
        return useSelector(expiredTasksSelector)
      default:
        return []
    }
  }

  const tasks = getTasksByPath(location.pathname)

  console.log('Tasks: ', tasks)

  const sectionRef = useRef(null)

  const handleScroll = useCallback(() => {
    const position = sectionRef.current.scrollTop
    if (position > 300) {
      setIsShowButton(true)
    } else {
      setIsShowButton(false)
    }
  }, [sectionRef])

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.addEventListener('scroll', handleScroll)
    }
    return () => {
      if (sectionRef.current) {
        sectionRef.current.removeEventListener('scroll', handleScroll)
      }
    }
  }, [sectionRef])

  const onDragEnd = (result) => {
    const { source, destination } = result

    if (!destination) {
      return
    }

    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    ) {
      return
    }

    dispatch(
      updateTasksOrder({
        startIndex: source.index,
        endIndex: destination.index,
      })
    )
  }

  const renderSectionName = (path) => {
    switch (path) {
      case '/home/list':
        return <SectionName name={'Tasks'} />
      case '/today/list':
        return <SectionName name={'Today'} />
      case '/expired/list':
        return <SectionName name={'Expired'} />
      default:
        return null
    }
  }

  const renderCreateButton = (path) => {
    switch (path) {
      case '/home/list':
        return <CreateButton />
      case '/today/list':
        return <CreateButton today={true} />
      default:
        return null
    }
  }

  const handleOpenModal = () => {
    setOpen(true)
  }

  // const handleCloseModal = () => {
  //   setOpen(false)
  // }

  return (
    <div className='relative h-[calc(100vh-50px)] w-full flex justify-center'>
      {Array.isArray(tasks) && tasks.length === 0 ? (
        <InfoBlock location={location.pathname} />
      ) : (
        <section
          ref={sectionRef}
          className='flex flex-col items-center overflow-y-auto h-[calc(100vh-100px)] w-full pb-10'>
          <div className='mb-[50px]'>
            <div className='sticky top-0 z-[1] bg-mainBg'>
              {renderSectionName(location.pathname)}
            </div>

            <div className='z-[0]'>
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId={'1'} className='z-[0]'>
                  {(provided, snapshot) => {
                    const { droppableProps, innerRef, ...rest } = provided
                    return (
                      <div
                        className={
                          snapshot.isDraggingOver
                            ? 'border-b-1 border-x-1 pb-[3px] border-stroke'
                            : 'border-b-1 border-x-1 pb-[3px] border-borderMain'
                        }
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        {...rest}>
                        {tasks &&
                          tasks.map((task, index) => (
                            <Draggable
                              key={`${task.id}`}
                              draggableId={`${task.id}`}
                              index={index}>
                              {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}>
                                  <div onClick={handleOpenModal}>
                                    <ListItem
                                      taskId={task.id}
                                      onSelectTask={handleSelectTask}
                                      onClick={() => handleSelectTask(task.id)}
                                    />
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          ))}

                        {provided.placeholder}
                      </div>
                    )
                  }}
                </Droppable>
              </DragDropContext>
              <div className='flex justify-between mr-5 mt-5'>
                <div></div>
                {renderCreateButton(location.pathname)}
              </div>
            </div>
          </div>
          {isShowButton && <ScrollButton sectionRef={sectionRef} />}
        </section>
      )}
      <Modal
        open={selectedTaskId !== null}
        onClose={() => handleSelectTask(null)}
        children={
          <EditTaskModal
            task={tasks.find((task) => task.id === selectedTaskId)}
            onClose={() => handleSelectTask(null)}
          />
        }
      />
    </div>
  )
}

export default List
