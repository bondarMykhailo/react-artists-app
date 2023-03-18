import React from 'react'
import { Helmet } from 'react-helmet'
import { SongItem } from '../components/SongItem'
import { useTypedSelector } from '../hooks/UseTypedSelector'

export const Favorites = () => {
  const songs = useTypedSelector((s) => s.artist.likedSongs)

  return (
    <div>
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      {songs.length ? songs?.map((song) => {
        const statusLike = songs.some((liked) => liked.id === song.id)
        return <SongItem key={song.id} statusLike={statusLike} song={song} />
      })
        :
        <div>The list of favorites is empty yet</div>
      }
    </div>
  )
}
