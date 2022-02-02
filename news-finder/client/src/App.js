import Appbar from './components/Appbar'
import Home from './pages/Home/Home';
import Single from './pages/Home/single/Single';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import react from 'react';
import LoginForm from './components/LoginForm/LoginForm';

function App() {
  return (
    <Router>
      <Appbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      {/* <Home /> */}
      {/* <Single /> */}


    </Router>
    
  );
}

export default App;
