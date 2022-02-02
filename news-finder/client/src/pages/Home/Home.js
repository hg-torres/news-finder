import SelectBox from "../../components/SelectBox/SelectBox"
import ToggleButton from "../../components/ToggleButton/ToggleButton"
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import axios from 'axios'




const Home = () => {

  const [category, setCategory] = useState('')
  const handleFormat = (event, newCategory) => {
    if (newCategory.length < 6) { setCategory(newCategory) }
  };

  const [searchState, setSearchState] = useState({ search: '' })


  const handleInputChange = ({ target: { name, value } }) => {
    setSearchState({ ...searchState, [name]: value })
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    console.log()
  }

  const [articles, setArticles] = useState({
    article: {}
  })


  let url = `https://newsdata.io/api/1/news?apikey=pub_4031193b8e4e6a29a91c4ed164279d46890f&country=us&language=en`

  const handleRequest = event => {
    event.preventDefault()
    // let categorySelected = category.join()


    if (!(category === '')) {
      url += `&category=${category}`
    }

    if (!(searchState.search === '')) {
      url += `&q=${searchState.search}`
    }


    axios.get(url)
      .then(({ data: article }) => {

        setArticles({ ...articles, article })
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    console.log(articles, url)
  }, [articles])

  

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          '& > *': {
            m: 1,
          },
        }}
      >
        <ToggleButton onChange={handleFormat} category={category} />
      </Box>
      <Stack
        direction="row"
        spacing={2}
      >
         <Box
        sx={{
          display: 'flex',
          '& > *': {
            m: 1,
          },
        }}
      >
        <SelectBox onSubmit={handleSearch} handleInputChange={handleInputChange} searchState={searchState} />
        <Button variant="contained" onClick={handleRequest}> Search</Button>
        </Box>
      </Stack>
      {articles.results.map((article) => {
        const {title, creator, description, pub_date, image_url, source_id, link} = article
        <>
        

      })}
    </>
  )
}

export default Home
