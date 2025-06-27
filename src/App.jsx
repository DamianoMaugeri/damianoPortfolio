import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GlobalContext from './context/globalContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    

    <GlobalContext.Provider value={{}}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout/>} >
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>


  
    </>
  )
}

export default App
