import React, { useReducer } from 'react'
import projectReducer from './projectReducer'
import ProjectContext from './projectContext'

const ProjectState = props => {
  const initialState = {
    form: false
  }

  //dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(projectReducer, initialState)

  //func para CRUD

  return (
    //permite pasar los props del state global al resto de la app
    <ProjectContext.Provider value={{form: state.form}} >
      {props.children}
    </ProjectContext.Provider>
  )
}

export default ProjectState