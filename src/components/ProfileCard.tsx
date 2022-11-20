import React, { FunctionComponent } from 'react'
import Grow from '@mui/material/Grow';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
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
      <Card className="card">
        <Grid className="card-header">
          <Typography variant="h5" component="div" className="card-title">
            {user.name.first}
          </Typography>
        </Grid>
        <Grid className="card-body">
          <CardMedia
            component="img"
            height="180"
            image={user.picture.large}
            alt="profile photo"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {user.name.title} {user.name.last}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {lorem.generateSentences(2)}
            </Typography>
          </CardContent>

        </Grid>
        <Grid className="card-footer">
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
