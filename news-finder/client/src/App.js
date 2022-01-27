import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
// import CategoryButtons from './components/CategoryButtons'
import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp'
import Home from './pages/Home/Home'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
