import React, { useState } from 'react'
import Arrow from '../svgs/Arrow'
import styles from './Dropdown.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import {
  updateProjectsOrder,
  deleteProject,
  // removeProjectFromTasks,
} from '../../features/projectSlice'
import ProjectDraggable from '../TaskModal/ProjectForm/Project/ProjectDraggable'

const capitalizeFirstLetter = (string) => {
  return string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase()
}

const DropdownProjects = ({ children, svg }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isRotated, setIsRotated] = useState(false)

  const dispatch = useDispatch()
  const projects = useSelector((state) => state.projects)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const toggleRotation = () => {
    setIsRotated(!isRotated)
  }

  const handleDeleteProject = (project) => {
    dispatch(deleteProject(project.id))
    // dispatch(removeProjectFromTasks({ projectId: project.id }))
  }

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

    const newProjects = [...projects]
    const [removed] = newProjects.splice(source.index, 1)
    newProjects.splice(destination.index, 0, removed)
    dispatch(
      updateProjectsOrder({
        projects: newProjects,
      })
    )
  }

  console.log('projects', projects)

  return (
    <div>
      <button
        className={isOpen ? styles.open : styles.main}
        onClick={() => {
          toggleDropdown()
          toggleRotation()
        }}>
        <div className={styles.icon}>
          {svg && svg}
          <div className='pt-[2px]'>
            {typeof children === 'string'
              ? capitalizeFirstLetter(children)
              : children}
          </div>
        </div>
        <div className={styles.counter}>
          <div
            className={
              isRotated
                ? '-rotate-120 transition-all duration-200 ease-in-out'
                : '-rotate-90 transition-all duration-200 ease-in-out'
            }>
            {<Arrow />}
          </div>
        </div>
      </button>
      <div
        className={`flex flex-col w-full mt-[1px] bg-mainBg rounded-b-md max-h-0 overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'opacity-0'
        }`}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId={'1'}>
            {(provided, snapshot) => (
              <div
                className={
                  snapshot.isDraggingOver
                    ? 'pb-[7px] pt-[7px] w-full'
                    : 'pb-[7px] pt-[7px] w-full'
                }
                ref={provided.innerRef}
                {...provided.droppableProps}>
                {projects && projects.length > 0 ? (
                  projects.map((project, index) => (
                    <Draggable
                      key={project.id}
                      draggableId={`${project.id}`}
                      index={index}>
                      {(provided, snapshot) => (
                        <li
                          className='flex'
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}>
                          <ProjectDraggable
                            projectName={project.name}
                            deleteProject={true}
                            onDelete={() => handleDeleteProject(project)}
                            isDragging={snapshot.isDragging}
                          />
                        </li>
                      )}
                    </Draggable>
                  ))
                ) : (
                  <p className='text-14 flex px-7 py-[2px] text-gray'>
                    No projects yet
                  </p>
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  )
}

export default DropdownProjects
