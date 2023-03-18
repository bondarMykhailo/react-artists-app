import { createSlice } from "@reduxjs/toolkit"
import { Song } from "../models/ArtistModel"

interface State {
  likedSongs: Song[]
}

const initialState: State = {
  ///this data can be stored and taken from the local store
  likedSongs: [],
}

const artistSlice = createSlice({
  name: 'ARTIST',
  initialState,
  reducers: {
    addToLikedList: (state, action) => {
      void state.likedSongs.push(action.payload)
    },
    removeFromLiked: (state, action) => {
      state.likedSongs = state.likedSongs.filter(song => song.id !== action.payload)
    }
  },
  extraReducers: {},
})

export const artistReducer = artistSlice.reducer
export const { addToLikedList, removeFromLiked } = artistSlice.actions