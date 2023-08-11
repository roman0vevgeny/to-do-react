// import React from 'react'
// import { createBrowserRouter } from 'react-router-dom'
// import Layout from '../Layout/Layout.jsx'
// import Home from './Home.jsx'
// import ErrorPage from './ErrorPage.jsx'
// import Today from './Today.jsx'
// import ExpiredTasks from './ExpiredTasks.jsx'
// import View from './View.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: '/',
//         element: <Home />,
//         children: [
//           {
//             path: ':view',
//             element: <View />,
//           },
//         ],
//       },
//       {
//         path: '/today',
//         element: <Today />,
//         children: [
//           {
//             path: ':view',
//             element: <View />,
//           },
//         ],
//       },
//       {
//         path: '/expired',
//         element: <ExpiredTasks />,
//         children: [
//           {
//             path: ':view',
//             element: <View />,
//           },
//         ],
//       },
//     ],
//   },
// ])

// export default router

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
import { useSelector } from 'react-redux'
import {
  allTasksSelector,
  todayTasksSelector,
  expiredTasksSelector,
} from '../features/tasksSelectors'

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
    ],
  },
])

export default router

// import React from 'react'
// import { createBrowserRouter } from 'react-router-dom'
// import Layout from '../Layout/Layout.jsx'
// import Home from './Home.jsx'
// import ErrorPage from './ErrorPage.jsx'
// import Today from './Today.jsx'
// import ExpiredTasks from './ExpiredTasks.jsx'
// import List from './List.jsx'
// import Cards from './Cards.jsx'
// import Boards from './Boards.jsx'
// import {
//   allTasksSelector,
//   todayTasksSelector,
//   expiredTasksSelector,
// } from '../features/tasksSelectors'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: '/home',
//         element: <Home />,
//         loader: () => {
//           return allTasksSelector()
//         },
//         children: [
//           {
//             path: '/home/list',
//             element: <List />,
//           },
//           {
//             path: '/home/cards',
//             element: <Cards />,
//           },
//           {
//             path: '/home/boards',
//             element: <Boards />,
//           },
//         ],
//       },
//       {
//         path: '/today',
//         element: <Today />,
//         loader: () => {
//           return todayTasksSelector()
//         },
//         children: [
//           {
//             path: '/today/list',
//             element: <List today={true} />,
//           },
//           {
//             path: '/today/cards',
//             element: <Cards />,
//           },
//           {
//             path: '/today/boards',
//             element: <Boards />,
//           },
//         ],
//       },
//       {
//         path: '/expired',
//         element: <ExpiredTasks />,
//         loader: () => {
//           return expiredTasksSelector()
//         },
//         children: [
//           {
//             path: '/expired/list',
//             element: <List />,
//           },
//           {
//             path: '/expired/cards',
//             element: <Cards />,
//           },
//           {
//             path: '/expired/boards',
//             element: <Boards />,
//           },
//         ],
//       },
//     ],
//   },
// ])

// export default router
