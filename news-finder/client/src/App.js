import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Auth from './pages/Auth/Login'
import Home from './pages/Home/Home'

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
