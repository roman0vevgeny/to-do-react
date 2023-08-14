import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layout/Layout.jsx'
import Home from './Home.jsx'
import ErrorPage from './ErrorPage.jsx'
import Today from './Today.jsx'
import ExpiredTasks from './ExpiredTasks.jsx'
import List from './List.jsx'
import Cards from './Cards.jsx'
import Boards from './Boards.jsx'
import Account from './Account.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/home',
        element: <Home />,
        children: [
          {
            path: '/home/list',
            element: <List />,
          },
          {
            path: '/home/cards',
            element: <Cards />,
          },
          {
            path: '/home/boards',
            element: <Boards />,
          },
        ],
      },
      {
        path: '/today',
        element: <Today />,
        children: [
          {
            path: '/today/list',
            element: <List />,
          },
          {
            path: '/today/cards',
            element: <Cards />,
          },
          {
            path: '/today/boards',
            element: <Boards />,
          },
        ],
      },
      {
        path: '/expired',
        element: <ExpiredTasks />,
        children: [
          {
            path: '/expired/list',
            element: <List />,
          },
          {
            path: '/expired/cards',
            element: <Cards />,
          },
          {
            path: '/expired/boards',
            element: <Boards />,
          },
        ],
      },
      {
        path: '/account',
        element: <Account />,
      },
    ],
  },
])

export default router
