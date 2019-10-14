import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { BOOKS_QUERY } from '../../queries/queries'

const AlbumList = () => (
  <div>
    <h2>Album List</h2>
    <Albums />
  </div>
)

const Albums = () => {
  const { loading, error, data } = useQuery(BOOKS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.albums.map(({ name, artist }) => (
    <div key={name}>
		<span>{name}</span>
    <span>{artist.name}</span>
    </div>
  ));
}
export default AlbumList
