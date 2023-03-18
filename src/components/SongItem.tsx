import { ListItem, IconButton, ListItemAvatar, ListItemText } from '@mui/material';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React, { useState } from 'react'
import { Song } from '../models/ArtistModel';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useAppDispatch } from '../redux/store';
import { addToLikedList, removeFromLiked } from '../redux/artist-reducer';

interface SongProps {
  song: Song
  statusLike: boolean
}

export const SongItem = (props: SongProps) => {
  const { song, statusLike } = props
  const [isLiked, setIsliked] = useState(statusLike)
  const dispatch = useAppDispatch()

  const handleLike = () => {
    setIsliked(!isLiked)

    if (!isLiked) {
      dispatch(addToLikedList(song))
    }
    else dispatch(removeFromLiked(song.id))
  }

  return (
    <ListItem>
      <ListItemAvatar>
        <IconButton onClick={handleLike} edge="end" aria-label="delete">
          {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </ListItemAvatar>

      <ListItemAvatar>
        <img style={{ height: "50px", marginRight: "15px", width: "50px", objectFit: "cover" }} src={song.cover} alt={song.name} />
      </ListItemAvatar>

      <ListItemText
        primary={song.name}
      />

      <ListItemText
        sx={{ flexGrow: "inherit" }}
        secondary={song.duration}
      />
    </ListItem>
  )
}
