import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layout/Layout.jsx'
import Home from './Home.jsx'
import ErrorPage from './ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
])

export default router
