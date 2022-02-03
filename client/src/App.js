import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
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
  
  )
}

export default App
