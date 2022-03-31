import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import PreHome from './pages/PreHome'
import About from './pages/About'
import Error from './pages/Error'
import Login from './pages/Login'
// import components
import Navbar from './components/Navbar'
import Signup from './pages/Signup'
import SingleMovie from './pages/SingleMovie'
import FormMovie from './components/FormMovie'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<PreHome />} />
        <Route path='/inicio' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/video/:id' element={<SingleMovie />} />
        <Route path='/nuevadata' element={<FormMovie />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
