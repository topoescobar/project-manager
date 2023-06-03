import React from 'react'
import Project from './project'

const ProjectList = () => {

  const projectsArr = [
    { projName: 'turnos veterinaria' },
    { projName: 'presupuesto' },
    { projName: 'oram' }
  ]
  return (
    <div>
      <p>listado proyectos: </p>
      <ul className='listado-proyectos'>
        {projectsArr.map(proj => (
          <Project
            projectProp={proj}
          ></Project>
        ))}
      </ul>
    </div>
  )
}

export default ProjectList