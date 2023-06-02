import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

   const [user, saveUser] = useState({
      email: '',
      password: ''
   })


   const changeFn = (e) => {
      //esta fn toma copia de lo que ya se inreso en user (email o passw), y le agrega el otro campo dinamicamente usando los atributos name y value
      saveUser({
         ...user,
         [e.target.name]: e.target.value
      })
   }

   const submitFn = (e) => {
      e.preventDefault()
   }

   return (
      <div className='user_form'>
         <div className='containter_form dark_shadow'>
            <h1> Iniciar sesion </h1>

            <form onSubmit={submitFn} >

               <div className="form_field">
                  <label htmlFor="email">Email</label>
                  <input
                     type="email"
                     id="email"
                     name="email"
                     placeholder="nombre@mail.com"
                     value={user.email}
                     onChange={changeFn}
                  />
               </div>

               <div className="form_field">
                  <label htmlFor="pass">Password</label>
                  <input
                     type="password"
                     id="pass"
                     name="password"
                     placeholder="******"
                     value={user.password}
                     onChange={changeFn}
                  />
               </div>

               <div className="form_field">
                  <input type="submit" className="btn btn_primary btn-block" 
                  value="Iniciar Sesión" />
               </div>
            </form>

            <div className='enlace-cuenta'>
               <p> No tenes cuenta? </p>
               <Link to={'/new-acount'}>
                  Crear nueva cuenta
               </Link>
            </div>

         </div>
      </div>
   )
}

export default Login