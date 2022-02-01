import Appbar from './components/Appbar'
import Header from './components/Header/Header';
import Posts from './components/posts/Posts';
import Sidebar from './components/sidebar/sideBar';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Appbar />
      <Home />
      <Header />
      <Posts />
      <Sidebar />
    </>
    
  );
}

export default App;
