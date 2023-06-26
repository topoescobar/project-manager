import React, { useReducer } from 'react'
import projectReducer from './projectReducer'
import ProjectContext from './projectContext'
import { PROJECT_FORM } from '../../types'

const ProjectState = props => {
  const initialState = {
    form: false
  }

  //dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(projectReducer, initialState)

  //func para CRUD, llaman al reducer
  const displayFormFn = () => {
    dispatch({
      type: PROJECT_FORM
    })
  }

  return (
    //permite pasar los props del state global al resto de la app
    <ProjectContext.Provider value={{form: state.form, displayFormFn}} >
      {props.children}
    </ProjectContext.Provider>
  )
}

export default ProjectState