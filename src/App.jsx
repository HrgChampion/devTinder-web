import { useState } from 'react'
import NavBar from './NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Body from './Body'
import Profile from './Profile'
import Login from './Login'

function App() {

  return (
    <>
    <BrowserRouter basename='/'>
     <Routes>
     <Route path='/' element={<Body/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/profile' element={<Profile/>}/>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
