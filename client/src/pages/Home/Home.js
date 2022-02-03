import SelectBox from "../../components/SelectBox/SelectBox"
import ToggleButton from "../../components/ToggleButton/ToggleButton"
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import axios from 'axios'
import Grid from '@mui/material/Grid'
import MediaCard from "../../components/MediaCard";
import Container from '@mui/material/Container'
import Appbar from '../../components/Appbar'




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

  const [articleState, setArticleState] = useState({
    articles: []
  })

  let profile = {
    username: 'Profile'
  }
  
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
      .then(({ data: articles }) => {
        console.log(articles)
        setArticleState({ ...articleState, articles: articles.results })
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    console.log(articleState, url)
  }, [])

  

  return (
    <>
    <Appbar articleState={profile}></Appbar>
    <Grid container>
      <Grid item xs={12} sm={12} md={10} >
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
      </Grid>
      </Grid>
      <Grid container
        > 


      {articleState.articles.map( article => 

        <Grid item xs={12} sm={12} md={3}>

        <MediaCard 
        title={article.title}
        creator={article.creator}
        description={article.description}
        pubDate={article.pubDate}
        image_url={article.image_url}
        source={article.source_id}
        link={article.link}
        
        article={article}

        ></MediaCard>
         
    </Grid>


      )}
    </Grid>
    </>
  )
}

export default Home
