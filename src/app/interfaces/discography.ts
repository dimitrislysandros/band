export interface Album{
  id:string;
  title:string;
  type:string;
  iframe:string;
  // songs: Song[];
  releaseDate: Date;
  comments: AlbumComment[];
  cover: string;
  credits: Credits[];
}

export interface Song{
  songid:string;
  iframe:string;
  title:string;
  comments: SongComment[];
}

export interface AlbumComment{
  albunCommentId: string;
  text:string;
  commentor: string;
}


export interface SongComment{
  songCommentId:string;
  text:string;
  commentor: string;
}


export interface Credits {
  creditId:string;
  name:string;
  role: string;
}
