import { FunctionComponent, useState } from 'react'
import Grow from '@mui/material/Grow';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Grid } from '@mui/material';

import Typography from '@mui/material/Typography';

import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

type Props = {
  user: {
    id: {
      value: string
    },
    login: {
      uuid: string
    },
    gender: {},
    name: {
      title: string,
      first: string,
      last: string
    },
    location: {},
    picture: {
      large: string,
      medium: string,
      thumbnail: string
    },
    email: string,
    phone: string
  }
}


const ProfileCard:FunctionComponent<Props> = ({user}) => {
  
  return (
    <Grow in={true}           
      style={{ transformOrigin: '0 0 0' }}
      {...{timeout: 1000}}>
      <Card sx={{ maxWidth: 345, borderRadius:5, backgroundColor:"#eee" }}>
        <Typography variant="h5" component="div" style={{color:'#fff', backgroundColor:"#333"}}>
          <div className="ml-3">
            {user.name.first}
          </div>
        </Typography>
        <Grid sx={{ backgroundColor:"#eee"}}>
          <CardMedia
            component="img"
            height="180"
            style={{marginLeft: 0, marginRight: 0}}
            image={user.picture.large}
            alt="profile photo"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {user.name.title} {user.name.last}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {lorem.generateSentences(2)}
            </Typography>
          </CardContent>

          <CardActions>
            <Button size="small" color="primary" href={'mailto:'+user.email}>Email</Button>
            <Button size="small" color="primary" href={'tel:'+user.phone}>Phone</Button>
          </CardActions>
          
        </Grid>
      </Card>
    </Grow>

  )
}

export default ProfileCard
