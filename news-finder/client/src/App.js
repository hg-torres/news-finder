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
  const [categoryState, setCategoryState] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `https://newsdata.io/api/1/news?apikey=pub_4031193b8e4e6a29a91c4ed164279d46890f&country=${countryState}&language=${languageState}&category=${categoryState}`
        )
        const news = await res.json()
        console.log(news)
        setNews(news.results)
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
      {/* <section>
        {news.map((news) => {
          const {title, }
        })}
      </section> */}
    </Router>
  
  )
}

export default App
