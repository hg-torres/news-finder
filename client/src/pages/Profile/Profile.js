import axios from 'axios';
import { useEffect, useState } from 'react';
import Appbar from '../../components/Appbar';
import ProfileCard from "../../components/ProfileCard";
import Grid from '@mui/material/Grid'
import { TextField } from '@mui/material';
import Box from '@mui/material/Box'



const Profile = () => {

  const [articleState, setArticleState] = useState({
    articles: [],
    username: '',
    id: ''
  })

  useEffect(() => {
    axios.get('/api/users', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('user')}`
      }

    })
      .then(res => {
        //console.log(res)
        setArticleState({ ...articleState, articles: res.data.news, username: res.data.username, id: res.data._id })
      })
  }, [])


  const handleInputChange = ({ target: { name, value } }) => {
    setArticleState({ ...articleState, [name]: value })
    //console.log(articleState.id )
    let newUsername = {
      username: articleState.username
    }
    axios.put(`/api/users/${articleState.id}`, newUsername, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('user')}`
      }
    }
    ).then(res => {
      //console.log(res)
    })
  }

  const handleUsernamChange = (event) => {
    event.preventDefault()
  }
  return (
    <>
      <Appbar articleState={articleState}></Appbar>
      <Box component="form" onSubmit={handleUsernamChange} noValidate sx={{ mt: 1 }}>
      <TextField name="username" label="change username" onChange={handleInputChange}></TextField>
      </Box>
      <Grid container>
        {articleState.articles.map((article, i) =>

        <Grid item xs={12} sm={12} md={3} key={i}>

          <ProfileCard
            id={article._id}
            title={article.title}
            creator={article.creator}
            description={article.description}
            pubDate={article.pubDate}
            image_url={article.image}
            source={article.source_id}
            link={article.link}

            article={article}

          ></ProfileCard>

        </Grid>


      )}
      </Grid>
      
    </>
  )
}

export default Profile