import { useState } from 'react'
import NavBar from './NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Body from './Body'
import Profile from './Profile'
import Login from './Login'
import appStore from '../utils/appStore'
import Connections from './Connections'
import Requests from './Requests'
import { Provider } from 'react-redux'

function App() {

  return (
    <>
    <Provider store={appStore}>
    <BrowserRouter basename='/'>
     <Routes>
     <Route path='/' element={<Body/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/connections' element={<Connections/>}/>
      <Route path='/requests' element={<Requests/>}/>
     </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
