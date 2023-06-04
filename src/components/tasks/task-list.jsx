import React from 'react'
import Task from './task'

const TaskList = () => {
  const projectTasks = [
    { name: 'oram', status: true },
    { name: 'lab', status: true },
    { name: 'portfolio', status: false },
    { name: 'regularidad materias', status: false }
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

      <button
      type='button'
      className='btn btn-eliminar'>
        Eliminar Proyecto &times;
      </button>
    </>
  )
}

export default TaskList