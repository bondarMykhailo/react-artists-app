import { artistReducer } from './artist-reducer';
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

export type RootState = ReturnType<typeof store.getState>

export const store = configureStore({
  reducer: {
    artist: artistReducer
  },
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
