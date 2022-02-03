import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DefaultPic from '../../components/Header/default_pic.png'
import axios from 'axios';
import { Box } from '@mui/system';

const MediaCard = ({title, creator, description, pubDate, image_url, source_id, link, article}) => {
  console.log(image_url)

  const saveArticle = ()=> {
    let newArticle = {
     title: title,
    description,
    date: pubDate,
    image: image_url,
    }

axios.post('/api/news', newArticle, {
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('user')}`
  }
})
.then(res => {
  console.log(res.data)
})
  .catch(err => window.location = "/login")

  }
  return (
    <Card sx={{ maxWidth: 345, m: 1 }}>
      { 
      image_url === null ? <CardMedia
      component="img"
      height="140"
      image= {DefaultPic}
      alt="newstest"
    /> :
      <CardMedia
        component="img"
        height="140"
        image= {image_url}
        alt="newstest"
      />
    }
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography style={{ fontWeight: 1000}} variant="body2" color="text.secondary">
        {creator}
        </Typography>
        <Typography style={{ fontWeight: 1000}} variant="body2" color="text.secondary">
          {pubDate}
        </Typography>
        <Box sx={{mt: 2}}>
        <Typography variant="body2" color="text.secondary">
        {description}
        </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
        {source_id}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={saveArticle} className="save" variant="contained" size="small"> Save</Button>
        <Button size="small" href={link} target="_blank">Read</Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard