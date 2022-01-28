import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Auth from './pages/Auth/Login'
import Home from './pages/Home/Home'
import React, { useState, useEffect } from 'react'



const App = () => {

  const [news, setNews] = useState([])
  const [term, setTerm] = useState('politics')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_NEWS_API_KEY}&category=${term}`
        )
        const news = await res.json()
        console.log(news)
        setNews(news.results.title)
      } catch (error) {
        console.log(error);
      }
    }

    fetchNews()
  }, [])

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
