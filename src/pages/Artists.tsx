import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { ArtistCard } from '../components/ArtistCard'
import { FullScreenLoader } from '../components/FullScreenLoader'
import { useAsyncAction } from '../hooks/UseAyncAction'
import { getArtists } from '../services/api/artistsApi'
import * as route from '../services/routes'

export const Artists = () => {
  const { value: artists, isLoading } = useAsyncAction(getArtists, true)

  if (isLoading) return <FullScreenLoader />

  return (
    <Box sx={{ display: "grid", gridGap: "20px", justifyContent: "start", gridAutoFlow: "column" }}>
      {artists?.map((artist) => (
        <Link key={artist.id} to={`${route.artristDetail}/${artist.id}`}>
          <ArtistCard artist={artist} />
        </Link>
      ))}
    </Box>
  )
}
