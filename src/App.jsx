import { useState } from 'react'
import './App.css'
import Login from './components/auth/login'
import NewAccount from './components/auth/new-account'
import Projects from './components/projects/projects'
import { Outlet, Link } from 'react-router-dom'
import ProjectState from '../context/projects/projectState'
// import {BrowserRouter, Switch, Route} from 'react-router-dom'


function App() {

  return (
    <>
      <ProjectState>
        <nav>
          <Link to={`/`} >
            <h1> MERN-tasks navbar</h1>
          </Link>
          <ul>
            <li>
              <Link to={`/login`}>Login</Link>
            </li>
            <li>
              <Link to={`/projects`}>Projects</Link>
            </li>
          </ul>
        </nav>
        <div>
          {/* outlet permite renderizar los componentes hijos definidos en main */}
          <Outlet></Outlet>
        </div>
      </ProjectState>


      {/*       <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
