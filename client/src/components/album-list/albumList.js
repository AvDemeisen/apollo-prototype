import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { ALBUMS_QUERY } from '../../queries/queries'
import AlbumPanel from '../album-panel/AlbumPanel'
import './AlbumList.scss'

const AlbumList = () => (
  <div>
    <h2>Album List</h2>
    <Albums />
  </div>
)

const Albums = () => {
  const [album, setAlbum] = useState()
	const { loading, error, data } = useQuery(ALBUMS_QUERY);

  return loading ? <Loading /> : error ? <Error /> : data.albums.map(({ id, name, artist }) =>
    <div key={id}>
      <li className='album-row' onClick={() => setAlbum(album !== id ? id : '')}>
        <p className='album-row__text'>{name}</p>
        <p className='album-row__text'>{artist.name}</p>
      </li>
      {album && album === id ? <AlbumPanel selectedAlbum={album} /> : null}
    </div>
  )
}

const Loading = () => <div>loading</div>
const Error = () => <div>error</div>

export default AlbumList