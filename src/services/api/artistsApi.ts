import { Song } from './../../models/ArtistModel';
import { Artist } from "../../models/ArtistModel"
import { axiosInstance } from "./api.config"

export const getArtists= async (): Promise<Artist[]> => {
  return axiosInstance.get(`api/artists`)
  .then((res) => res.data)
}

export const getArtistInfo= async (id?: string): Promise<Artist> => {
  return axiosInstance.get(`api/artists/${id}`)
  .then((res) => res.data)
}

export const getArtistSongs= async (limit: number, page:number, id?: string): Promise<Song[]> => {
  return axiosInstance.get(`api/artists/${id}/songs?page=${page}&limit=${limit}`)
  .then((res) => res.data)
}