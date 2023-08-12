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
// import { createBrowserRouter, redirect } from 'react-router-dom'
// import Layout from '../Layout/Layout.jsx'
// import Home from './Home.jsx'
// import ErrorPage from './ErrorPage.jsx'
// import Today from './Today.jsx'
// import ExpiredTasks from './ExpiredTasks.jsx'
// import List from './List.jsx'
// import Cards from './Cards.jsx'
// import Boards from './Boards.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     errorElement: <ErrorPage />,
//     action() {
//       const view = localStorage.getItem('view')
//       if (view) {
//         return redirect(`home/${view}`)
//       } else {
//         return redirect('/home/list')
//       }
//     },
//     children: [
//       {
//         path: '/home',
//         element: <Home />,
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
//         children: [
//           {
//             path: '/today/list',
//             element: <List />,
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

// import React from 'react'
// import { createBrowserRouter } from 'react-router-dom'
// import { Redirect } from 'react-router-dom'
// import Layout from '../Layout/Layout.jsx'
// import Home from './Home.jsx'
// import ErrorPage from './ErrorPage.jsx'
// import Today from './Today.jsx'
// import ExpiredTasks from './ExpiredTasks.jsx'
// import List from './List.jsx'
// import Cards from './Cards.jsx'
// import Boards from './Boards.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: '/home',
//         element: <Home />,
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
//         children: [
//           {
//             path: '/today/list',
//             element: <List />,
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
//       {
//         path: '/',
//         action() {
//           const view = localStorage.getItem('view')
//           if (view) {
//             return (
//               <Redirect
//                 to={{ pathname: `home/${view}`, state: { from: '/' } }}
//                 push
//               />
//             )
//           } else {
//             return (
//               <Redirect
//                 to={{ pathname: '/home/list', state: { from: '/' } }}
//                 push
//               />
//             )
//           }
//         },
//       },
//     ],
//   },
// ])

// export default router

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
// import useLocalStorageLocation from '../helpers/useLocalStorageLocation'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: '/home',
//         element: () => {
//           const location = useLocalStorageLocation()
//           return <Home />
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
//         element: () => {
//           const location = useLocalStorageLocation()
//           return <Today />
//         },
//         children: [
//           {
//             path: '/today/list',
//             element: <List />,
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
//         element: () => {
//           const location = useLocalStorageLocation()
//           return <ExpiredTasks />
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
