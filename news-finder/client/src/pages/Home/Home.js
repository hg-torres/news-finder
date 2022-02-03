import { useState } from 'react'
import SearchBar from "../../components/example"
import SearchContext from "../../utils/SearchContext"

const Home = () => {

  const [searchState, setSearchState] = useState({
    keyword: '',
    country: '',
    language: '',
    category: ''
  })

  searchState.handleInputChange = ({ target: { name, value } }) => setSearchState({ ...searchState, [name]: value })

  searchState.handleSearch = event => {
    event.preventDefault()
    console.log(searchState.keyword, searchState.country, searchState.language, searchState.category)
  }

  return (
    <SearchContext.Provider value={searchState}>
      < SearchBar />
    </SearchContext.Provider>
  )
}


export default Home