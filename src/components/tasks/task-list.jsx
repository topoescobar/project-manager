import React from 'react'
import Task from './task'

const TaskList = () => {
  const projectTasks = [
    { name: 'oram', state: true },
    { name: 'lab', state: true },
    { name: 'portfolio', state: false },
    { name: 'regularidad materias', state: false }
  ]
  return (
    <>
      <h2>Proyecto_: maspkdmasmd</h2>
      <ul className='listado-tareas'>
        {projectTasks.length === 0
          ? (<li className='tarea'> No hay tareas </li>)
          : projectTasks.map(tsk =>
            (<Task task={tsk} />))
        }
      </ul>
    </>
  )
}

export default TaskList