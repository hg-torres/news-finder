import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SingUp'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App
