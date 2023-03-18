import { Box, CircularProgress } from '@mui/material'
import React from 'react'

export const FullScreenLoader = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", width: "calc(100vw - 60px)", height: "calc(100vh - 124px)" }}>
      <CircularProgress />
    </Box>
  )
}
