import React from 'react'
import NewProject from '../projects/new-project'
import ProjectList from '../projects/project-list'

const Sidebar = () => {
  return (
    <>
      <aside>
        <h1>MERN <span>Project manager</span> </h1>
        <NewProject/>
        <div className="projects_sidebar">
          <h2>Mis proyectos</h2>
          <ProjectList />
        </div>
      </aside>
    </>
    )
}

export default Sidebar