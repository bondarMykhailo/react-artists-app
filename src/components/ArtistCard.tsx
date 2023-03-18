import { CardActionArea, CardMedia, CardContent, Typography, Card } from '@mui/material'
import React from 'react'
import { Artist } from '../models/ArtistModel';

interface CardProps {
  artist: Artist
  classes?: { [key: string]: string; }
}

export const ArtistCard = (props: CardProps) => {
  const { artist, classes } = props
  return (
    <Card sx={[
      {
        background: "#fff",
        maxWidth: 345,
        ...classes
      },
    ]}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={artist.avatar}
          alt={artist.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {artist.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card >
  )
}
