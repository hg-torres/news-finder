import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react'

export default function SelectBox({ searchText }) {

  const [news, setNews] = useState([])
  const [searchState, setSearchState] = useState({search: '', category: ''})
  const [categoryState, setCategoryState] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const handleInputChange = ({ target: { name, value } }) => {
    setSearchState({ ...searchState, [name]: value })
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    console.log(searchState, categoryState)

    //         searchText(text)
    // }
    //     const fetchNews = async () => {
  //   try {
  //     const res = await fetch(
  //       `https://newsdata.io/api/1/news?apikey=pub_4031193b8e4e6a29a91c4ed164279d46890f&q=${searchState}&country=us&language=en&category=${categoryState}`
  //     )
  //     const news = await res.json()
  //     console.log(news)
  //     setNews(news.results)
  //     setIsLoading(false)
  //   } catch (error) {
  //     console.log(error);
  //   }
  }

  useEffect(() => {


    // fetchNews()
  }, [])

  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <Box
      component="form"
      onSubmit={handleSearch}
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
      
      >
        <TextField name="search" onChange={handleInputChange} fullWidth label="search" id="keyword" />
 
       <button type="submit">Search</button>
      </Box>
    
      {/* <section>
        {news.map((newsArticle) => {
          const { title, link, creator, description, pubDate, source_id, _id } = newsArticle
        })}
      </section> */}
    </Stack>
  );

}

// newsdata Categories
const categorySelection = [
  { category: "business" },
  { category: "entertainment" },
  { category: "health" },
  { category: "politics" },
  { category: "science" },
  { category: "sports" },
  { category: "technology" },
  { category: "top" },
  { category: "world" },
]

const countrySelection = [
  { country: "Argentina" },
  { country: "Australia" },
  { country: "Austria" },
  { country: "Belgium" },
  { country: "Brazil" },
  { country: "Bulgaria" },
  { country: "Canada" },
  { country: "China" },
  { country: "Colombia" },
  { country: "Cuba" },
  { country: "Czech Republic" },
  { country: "Egypt" },
  { country: "France" },
  { country: "Germany" },
  { country: "Greece" },
  { country: "Hong Kong" },
  { country: "Hungary" },
  { country: "India" },
  { country: "Indonesia" },
  { country: "Ireland" },
  { country: "Israel" },
  { country: "Italy" },
  { country: "Japan" },
  { country: "Latvia" },
  { country: "Lebanon" },
  { country: "Lithuania" },
  { country: "Malaysia" },
  { country: "France" },
  { country: "Germany" },
  { country: "Greece" },
  { country: "Hong Kong" },
  { country: "Hungary" },
  { country: "India" },
  { country: "Indonesia" },
  { country: "Ireland" },
  { country: "Israel" },
  { country: "Italy" },
  { country: "Japan" },
  { country: "Latvia" },
  { country: "Lebanon" },
  { country: "Lithuania" },
  { country: "Malaysia" },
  { country: "Mexico" },
  { country: "Morocco" },
  { country: "Netherland" },
  { country: "New Zealand" },
  { country: "Nigeria" },
  { country: "North Korea" },
  { country: "Norway" },
  { country: "Pakistan" },
  { country: "Philippines" },
  { country: "Poland" },
  { country: "Portugal" },
  { country: "Romania" },
  { country: "Russia" },
  { country: "Saudi arabia" },
  { country: "Serbia" },
  { country: "Singapore" },
  { country: "Slovakia" },
  { country: "Slovenia" },
  { country: "South Africa" },
  { country: "South Korea" },
  { country: "Spain" },
  { country: "Sweden" },
  { country: "Switzerland" },
  { country: "Taiwan" },
  { country: "Thailand" },
  { country: "Turkey" },
  { country: "United arab emirates" },
  { country: "United kingdom" },
  { country: "United states of america" },
  { country: "Venezuela" },
]

const languageSelection = [
  { language: "Arabic" },
  { language: "Bosnian" },
  { language: "Bulgarian" },
  { language: "Chinese" },
  { language: "Croatian" },
  { language: "Czech" },
  { language: "Dutch" },
  { language: "English" },
  { language: "French" },
  { language: "German" },
  { language: "Greek" },
  { language: "Hebrew" },
  { language: "Hindi" },
  { language: "Hungarian" },
  { language: "Indonesian" },
  { language: "Italian" },
  { language: "Japanese" },
  { language: "Korean" },
  { language: "Latvian" },
  { language: "Lithuanian" },
  { language: "Malay" },
  { language: "Norwegian" },
  { language: "Polish" },
  { language: "Portuguese" },
  { language: "Romanian" },
  { language: "Russian" },
  { language: "Serbian" },
  { language: "Slovak" },
  { language: "Slovenian" },
  { language: "Spanish" },
  { language: "Swedish" },
  { language: "Thai" },
  { language: "Turkish" },
  { language: "Ukrainian" },
]

