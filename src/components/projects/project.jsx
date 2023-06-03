import React from 'react'

const Project = ({projectProp}) => {

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        // onClick={() => seleccionarProyecto(project._id)}
      >{projectProp.projName} </button>
    </li>
  )
}

export default Project