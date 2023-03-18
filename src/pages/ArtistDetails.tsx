import React, { useCallback, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useAsyncAction } from '../hooks/UseAyncAction';
import { getArtistInfo, getArtistSongs } from '../services/api/artistsApi';
import { Helmet } from "react-helmet";
import { SongItem } from '../components/SongItem';
import { CircularProgress, List, Pagination } from '@mui/material';
import { ArtistCard } from '../components/ArtistCard';
import { FullScreenLoader } from '../components/FullScreenLoader';
import { Box } from '@mui/system';
import { useTypedSelector } from '../hooks/UseTypedSelector';

export const ArtistDetails = () => {
  const { id } = useParams<{ id: string }>();
  const limit = 5
  const pagesLength = 2
  const [pageNumber, setPageNumber] = useState(1)
  const songAction = useCallback(() => getArtistSongs(limit, pageNumber, id), [id, pageNumber, limit])
  const artistAction = useCallback(() => getArtistInfo(id), [id])
  const { value: artistSongs, isLoading: isLoadingSongs } = useAsyncAction(songAction, true)
  const { value: artistData, isLoading: isLoadingArtist } = useAsyncAction(artistAction, true)
  const likedSongs = useTypedSelector((s) => s.artist.likedSongs)

  if (isLoadingArtist && isLoadingSongs) return <FullScreenLoader />

  return (
    <div>
      <Helmet>
        <title>{artistSongs?.[0]?.artistName}</title>
      </Helmet>
      <Box>
        {artistData && <ArtistCard classes={{ margin: "auto" }} artist={artistData} />}
      </Box>

      {artistSongs ?
        <List>
          {artistSongs?.map((song) => {
            ///ideally this information (about liked or not) should come from the API
            const statusLike = likedSongs.some((liked) => liked.id === song.id)
            return <SongItem statusLike={statusLike} key={song.id} song={song} />
          })}
        </List>
        :
        <Box sx={{ minHeight: "calc(100vh - 325px)", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <CircularProgress />
        </Box>
      }
      <Pagination
        sx={{ padding: "16px" }}
        count={pagesLength}
        page={pageNumber}
        onChange={(e, p) => setPageNumber(p)}
        color="primary" />
    </div>
  )
}
