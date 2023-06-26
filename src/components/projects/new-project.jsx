import React, { useContext, useState } from 'react'
import ProjectContext from '../../../context/projects/projectContext'

const NewProject = () => {

  //obteniendo state del form, se puede consumir a traves de todo el nodo sin pasarlo por props 
  const projectContext = useContext(ProjectContext)

  const [project, setProject] = useState({
    projName: '',

  })

  const fnChangeProject = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value
    })
  }

  const fnSubmitProject = e => {
    e.preventDefault()
  }

  return (
    <>
      <button type="button"
        className="btn btn-block btn-primario"
      // onClick={onClickFormulario}
      > Nuevo Proyecto </button>

      {
        projectContext.form ?
          (<><h3>ProjectState Verdadero </h3>
            <form
              className="new_project_form"
              onSubmit={fnSubmitProject}
            >
              <input type="text"
                className="input-text"
                placeholder="Nombre Proyecto"
                name="projName"
                // value={project.name} //no entiendo el uso
                onChange={fnChangeProject} />

              <input
                type="submit"
                className="btn btn-primario btn-block"
                value="Agregar Proyecto" />

            </form></>
          ) :
          (<h3>ProjectState False</h3>)
      }

    </>
  )
}

export default NewProject