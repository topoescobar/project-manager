import React from 'react'
import Sidebar from '../layout/sidebar'
import Navbar from '../layout/navbar'
import TaskForm from '../tasks/task-form'
import TaskList from '../tasks/task-list'

const Projects = () => {
  return (
    <div className='app_container'>
      <Sidebar/>

      <div className="main_section">
        <Navbar/>
        <main>
          <TaskForm/>
          <div className="task_container">
            <TaskList/>
          </div>
        </main>
      </div>

    </div>
  )
}

export default Projects