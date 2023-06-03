import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NewAccount = () => {


  const [user, saveUser] = useState({
    email: '',
    userName: '',
    password: '',
    passwordRep: ''

  })


  const fnChange = (e) => {
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
        <h1> Crear cuenta </h1>

        <form onSubmit={submitFn} >

          <div className="form_field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="usuario@mail.com"
              value={user.email}
              onChange={fnChange}
            />
          </div>

          <div className="form_field">
            <label htmlFor="user">Nombre de usuario</label>
            <input
              type="text"
              id="user"
              name="userName"
              placeholder="usuario_99"
              value={user.userName}
              onChange={fnChange}
            />
          </div>

          <div className="form_field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="*****"
              value={user.password}
              onChange={fnChange}
            />
          </div>

          <div className="form_field">
            <label htmlFor="password_rep">Repetir password</label>
            <input
              type="password"
              id="password_rep"
              name="passwordRep"
              placeholder="*****"
              value={user.passwordRep}
              onChange={fnChange}
            />
          </div>


          <div className="form_field">
            <input type="submit" className="btn btn_primary btn-block"
              value="Registrar" />
          </div>
        </form>

        <div className='enlace-cuenta'>
               <p> Ya tenes cuenta? </p>
               <Link to={'/login'}>
                  Iniciar sesión
               </Link>
            </div>

      </div>
    </div>
  )

}

export default NewAccount