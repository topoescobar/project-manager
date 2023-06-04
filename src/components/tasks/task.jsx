import React from 'react'

const Task = ({task}) => { //recibo la tarea como props de tasklist
  return (
    <li className="tarea sombra">
    <p>{task.name} </p>

    <div className="estado">
        {task.status 
        ?  
            (
                <button
                    type="button"
                    className="completo"
                    // onClick={() => cambiarEstado(tarea)}
                >Completo</button>
            )
        : 
            (
                <button
                    type="button"
                    className="incompleto"
                    // onClick={() => cambiarEstado(tarea)}
                >Incompleto</button>
            )
        }
    </div>

    <div className="acciones">
        <button 
            type="button"
            className="btn btn-primario"
            // onClick={() => seleccionarTarea(tarea) }
        >Editar</button>

        <button
            type="button"
            className="btn btn-secundario"
            // onClick={() => tareaEliminar(tarea._id)}
        >Eliminar</button>
    </div>
</li>  )
}

export default Task