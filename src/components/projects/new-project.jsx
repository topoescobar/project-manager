import React, { useState } from 'react'

const NewProject = () => {

  const [project, setProject] = useState({
    projName: '',

  })

  const fnChangeProject = (e) => {
    setProject({
      ...project,
      [e.target.name] : e.target.value
    })
  }

  const fnSubmitProject = e => {
    e.preventDefault()
  }

  return (
    <>
      <button type="button"
        className="btn btn-block btn_primary"
      // onClick={onClickFormulario}
      > Nuevo Proyecto </button>

      <form
        className="new_project_form"
       onSubmit={fnSubmitProject}
      >
        <input type="text"
          className="input-text"
          placeholder="Nombre Proyecto"
          name="projName"
          // value={project.name} //no entiendo el uso
          onChange={fnChangeProject}
        />

        <input
          type="submit"
          className="btn btn_primary btn-block"
          value="Agregar Proyecto"
        />

      </form>
    </>
  )
}

export default NewProject