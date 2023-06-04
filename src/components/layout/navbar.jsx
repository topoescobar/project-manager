import React from 'react'

const Navbar = () => {
  return (

    <header className="app-header">
      <p className='nombre-usuario'>Topo-Dev</p>
    {/* {usuario ? <p className="nombre-usuario">Hola <span>{usuario.nombre} </span> </p> : null} */}
    

    <nav className="nav-principal">
        <button 
            className="btn btn-blank cerrar-sesion"
            // onClick={() => cerrarSesion() }
        >Cerrar Sesión</button>
    </nav>
</header>
  )
}

export default Navbar