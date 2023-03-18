export interface Artist {
  name: string;
  avatar: string;
  id: string;
  songsCount: string;
}

export interface Song {
  name: string;
  cover: string;
  id: string;
  artistId: string;
  artistName: string;
  duration: string;
}