import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Auth from './pages/Auth/Login'
import Home from './pages/Home/Home'
import React, { useState, useEffect } from 'react'
import SearchField from './components/SearchField'



const App = () => {


  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Auth />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
  
  )
}

export default App
