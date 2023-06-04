import React from 'react'

const TaskForm = () => {
  return (
    <div className='formulario'>
      <form action="">
        <div className="contenedor-input">
          <input
            type="text"
            className='input-text'
            name="" id=""
            placeholder='Nombre-proyecto'
            />
        </div>

        <div className="contenedor-input">
          <input
            type='submit'
            className='btn btn_primary btn-submit btn-block'
            value='Agregar proyecto'
            />
        </div>
      </form>
    </div>
  )
}

export default TaskForm