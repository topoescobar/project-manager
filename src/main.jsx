import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/auth/login.jsx';
import NewAccount from './components/auth/new-account.jsx';
import RouteError from './components/error/route-error.jsx'
import Projects from './components/projects/projects.jsx';

const router = createBrowserRouter ([
  {
    path: "/",
    element:<App />,
    errorElement: <RouteError />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/new-acount',
        element: <NewAccount/>
      },
      {
        path: '/projects',
        element: <Projects/>
      }
    ]
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
