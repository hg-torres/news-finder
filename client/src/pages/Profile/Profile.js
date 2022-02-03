import axios from 'axios';
import { useEffect, useState } from 'react';
import Appbar from '../../components/Appbar';
import ProfileCard from "../../components/ProfileCard";
import Grid from '@mui/material/Grid'
import { TextField } from '@mui/material';



const Profile = () => {

    const [articleState, setArticleState] = useState({
        articles: [],
        username: ''
      })

      useEffect(() => {
axios.get('/api/users', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('user')}`
    }

  })
  .then(res => {
      console.log(res)
      setArticleState({...articleState, articles: res.data.news, username: res.data.username})
  })
    }, [])


    const handleInputChange = ({ target: { name, value } }) => {
        setArticleState({ ...articleState, [name]: value })
        let newUsername= {
            username: articleState.username
        }
        axios.put('/api/users', newUsername, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('user')}`
            }
          }
    ) .then(res => {
        console.log(res)
    })
      }


return (
    <>
<Appbar></Appbar>

<TextField name="username" defaultValue={articleState.username} onChange={handleInputChange}>{articleState.username}</TextField>

{articleState.articles.map( article => 

<Grid item xs={12} sm={12} md={3}>

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
    </>
)}

export default Profile