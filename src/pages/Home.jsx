import React, { useEffect, useRef } from 'react'
import Button from '../components/Button/Button'
import Plus from '../components/svgs/Plus'
import ListItem from '../components/ListItem/ListItem'
import SectionName from '../components/SectionName/SectionName'
import NoTasks from '../components/svgs/NoTasks'
import styles from './Home.module.scss'

const Home = () => {
  return (
    <div>
      <div className={styles.startDevider}></div>
      <section className='mb-8'>
        <div className={styles.listContainer}>
          <SectionName name={'Today'} />
        </div>
        <ListItem
          name={
            'Some extra important task. Very long name. And very long description'
          }
          description={'Super important description'}
          date={'07.05.23'}
          subtasksCounter={'0/2'}
          subtasks={[{ name: 'Subtask 1' }, { name: 'Subtask 2' }]}
          tags={[{ name: 'Work', color: 'purple' }]}
          project={{ name: 'Work project', section: 'Todo' }}
        />
        <ListItem
          name={'Some extra important task'}
          checked={true}
          date={'19.05.23'}
          tags={[
            { name: 'Programming', color: 'green' },
            { name: 'Work', color: 'purple' },
          ]}
          favorite={true}
          project={{ name: 'Work project', section: 'In progress' }}
        />
        <ListItem
          name={'Some extra important task'}
          description={'Super important description'}
          checked={true}
          subtasksCounter={'0/1'}
          subtasks={[{ name: 'Subtask 1' }]}
          tags={[{ name: 'sport', color: 'yellow' }]}
          project={{ name: 'Work project', section: 'Done' }}
        />
      </section>
      <section>
        <div className={styles.listContainer}>
          <SectionName name={'Tomorrow'} />
        </div>
        <ListItem
          name={'Some extra important task'}
          date={'21.10.23'}
          subtasksCounter={'0/3'}
          subtasks={[
            { name: 'Subtask 1' },
            { name: 'Subtask 2' },
            { name: 'Subtask 3' },
          ]}
          tags={[{ name: 'Swiming', color: 'blue' }]}
        />
        <ListItem
          name={'Some extra important task'}
          date={'07.05.23'}
          subtasksCounter={'0/2'}
          subtasks={[{ name: 'Subtask 1' }, { name: 'Subtask 2' }]}
          tags={[
            { name: 'Another', color: 'gray' },
            { name: 'Tag', color: 'red' },
          ]}
          favorite={true}
        />
        <ListItem
          name={
            'Some extra important task with very long name and very long description and very long subtasks'
          }
          description={'Super important description'}
          date={'01.12.23'}
        />
        <ListItem
          name={'Some extra important task'}
          subtasksCounter={'0/2'}
          subtasks={[{ name: 'Subtask 1' }, { name: 'Subtask 2' }]}
          tags={[{ name: 'diving', color: 'sea' }]}
        />
        <ListItem
          name={'Some extra important task'}
          description={'Super important description'}
          date={'11.11.23'}
          subtasksCounter={'0/3'}
          subtasks={[
            { name: 'Subtask 1' },
            { name: 'Subtask 2' },
            { name: 'Subtask 3' },
          ]}
          tags={[{ name: 'adventure', color: 'red' }]}
        />
      </section>
      <div className={styles.emptyStateContainer}>
        <div className='my-10 flex justify-center text-imageColor'>
          <NoTasks />
        </div>
        <div className='text-task m-0'>
          <p>There are no tasks for today</p>
          <p className='text-gray text-16 font-medium mb-4 leading-1'>
            Let's create a new one
          </p>
        </div>
        <div className='flex flex-row my-2 justify-center items-center'>
          <Button children={'Create task'} svgLeft={<Plus />} />
        </div>
      </div>
      <div className='h-20'></div>
    </div>
  )
}

export default Home
