import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { useState,useEffect } from 'react'

export default function SelectBox({ searchText }) {

  const [news, setNews] = useState([])
  const [searchState, setSearchState] = useState('')
  const [categoryState, setCategoryState] = useState('')
  const [countryState, setCountryState] = useState('')
  const [languageState, setLanguageState] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const handleSearch = async (e) => {
    e.preventDefault()
    console.log(searchState, countryState, categoryState, languageState, `https://newsdata.io/api/1/news?apikey=pub_4031193b8e4e6a29a91c4ed164279d46890f&q=${searchState}&country=${countryState}&language=${languageState}&category=${categoryState}`)

    //         searchText(text)
    // }
    //     const fetchNews = async () => {
    try {
      const res = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_4031193b8e4e6a29a91c4ed164279d46890f&q=${searchState}&country=${countryState}&language=${languageState}&category=${categoryState}`
      )
      const news = await res.json()
      console.log(news)
      setNews(news.results)
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {


    // fetchNews()
  }, [])

  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <Box
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
      >
        <TextField onChange={(e) => setSearchState(e.target.value)} fullWidth label="keyword" id="keyword" />
        <button onClick={handleSearch} type="submit">Search</button>
      </Box>
      );
      <Autocomplete
        multiple
        id="tags-standard"
        options={countrySelection}
        getOptionLabel={(option) => option.country}
        defaultValue={[countrySelection[70]]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="country"
            placeholder="Country"
            value={countryState}
            onChange={(e) => setCountryState(e.target.value)}
          />
        )}
      />
      <Autocomplete
        multiple
        id="tags-outlined"
        options={categorySelection}
        getOptionLabel={(option) => option.category}
        defaultValue={[categorySelection[1]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="categories"
            placeholder="Categories"
            value={categoryState}
            onChange={(e) => setCategoryState(e.target.value)}
          />
        )}
      />
      <Autocomplete
        multiple
        id="tags-outlined"
        options={languageSelection}
        getOptionLabel={(option) => option.language}
        defaultValue={[languageSelection[7]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="language"
            placeholder="Language"
            value={languageState}
            onChange={(e) => setLanguageState(e.target.value)}
          />
        )}
      />
      <section>
        {news.map((newsArticle) => {
          const { title, link, creator, description, pubDate, source_id, _id } = newsArticle
        })}
      </section>
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

