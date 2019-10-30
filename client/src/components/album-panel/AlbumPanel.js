import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ALBUM_QUERY } from '../../queries/queries';
import './AlbumPanel.scss'

const AlbumPanel = ({ selectedAlbum }) => {
    const { loading, error, data } = useQuery(ALBUM_QUERY, {
        variables: { id: selectedAlbum }
    });
    
    return loading ? <Loading /> : error ? <Error /> : <Details details={data.album} />
}

const Loading = () => <div>loading</div>
const Error = () => <div>error</div>

const Details = ({ details: { name, genre, artist } }) => (
    <div className='panel'>
        <span>{name}</span>
        <p>{genre}</p>
        <span>{artist.name}</span>
    </div>
)

export default AlbumPanel
