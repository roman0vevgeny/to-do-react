import './App.scss'
import { ThemeProvider } from './context/ThemeContext'
import router from './pages/Router'
import { RouterProvider } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import LoadingScreen from './pages/LoadingScreen'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <ThemeProvider>
        {loading ? <LoadingScreen /> : <RouterProvider router={router} />}
      </ThemeProvider>
    </>
  )
}

export default App

// import './App.scss'
// import { ThemeProvider } from './context/ThemeContext'
// import router from './pages/Router'
// import { RouterProvider } from 'react-router-dom'
// import React, { useState, useEffect } from 'react'
// import LoadingScreen from './pages/LoadingScreen'

// function App() {
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false)
//     }, 3000)

//     return () => {
//       clearTimeout(timer)
//     }
//   }, [])

//   return (
//     <>
//       <ThemeProvider>
//         {loading ? <LoadingScreen /> : <RouterProvider router={router} />}
//       </ThemeProvider>
//     </>
//   )
// }

// export default App
