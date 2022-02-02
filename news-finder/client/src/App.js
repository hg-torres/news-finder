import Appbar from './components/Appbar'
import Home from './pages/Home/Home';
import Single from './pages/Home/single/Single';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import react from 'react';

function App() {
  return (
    <Router>
      <Appbar />
        <Switch>

        </Switch>

      <Home />
      {/* <Single /> */}


    </Router>
    
  );
}

export default App;
