import React from 'react'

const Login = () => {
   const onChange = () => {
   }

   const onSubmit = () => { }

   return (
      <div className='form-usuario'>
         <div className='contenedor-form sombra-dark'>
            <h1> Iniciar sesion </h1>

            <form onSubmit={onSubmit} >

               <div className="campo-form">
                  <label htmlFor="email">Email</label>
                  <input
                     type="email"
                     id="email"
                     name="email"
                     placeholder="Tu Email"
                     //  value={email}
                     onChange={onChange}
                  />
               </div>

               <div className="campo-form">
                  <label htmlFor="password">Password</label>
                  <input
                     type="password"
                     id="password"
                     name="password"
                     placeholder="Tu Password"
                     //  value={password}
                     onChange={onChange}
                  />
               </div>

               <div className="campo-form">
                  <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sesión" />
               </div>
            </form>

         </div>
      </div>
   )
}

export default Login