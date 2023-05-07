import './App.scss'
import { ThemeProvider } from './context/ThemeContext'
import router from './pages/Router'
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
