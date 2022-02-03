import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
<<<<<<< HEAD
import Auth from './pages/Auth/Login'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Auth />} />
      </Routes>
    </Router>
=======
import Auth from './pages/Auth'
import Home from './pages/Home/'
import Profile from './pages/Profile/'

const App = () => {


  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Auth />}/>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Router>
  
>>>>>>> 0d7e3eba8a94ad3ad6e8934e453eb1242c234c04
  )
}

export default App
