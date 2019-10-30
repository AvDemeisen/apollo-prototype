import React from 'react';
import useForm from '../../hooks/Hooks';
import Input from '../input/Input';
import Select from '../select/Select';
import { ARTISTS_QUERY, ADD_ALBUM, ALBUMS_QUERY } from '../../queries/queries';
import { useMutation } from '@apollo/react-hooks';

import './AlbumForm.scss';

const AlbumForm = () => {
  const { values, handleChange, handleSubmit } = useForm(addAlbum);
  const [addTodo] = useMutation(ADD_ALBUM);

  function addAlbum() {

    addTodo({
      variables: {
        name: values.albumName,
        release: values.releaseYear,
        genre: values.genre,
        artistId: values.artistId
      },
      refetchQueries: [{ query: ALBUMS_QUERY }]
    })
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form-field form-field--major'>
        <Input type='text' change={handleChange} name='albumName' label='Album Name' />
      </div>
      <div className='form-field form-field--minor'>
        <Input type='number' change={handleChange} name='releaseYear' label='Release Year' />
      </div>
      <div className='form-field'>
        <Input type='text' change={handleChange} name='genre' label='Genre' />
      </div>
      <div className='form-field'>
        <Select change={handleChange} name='artistId' query={ARTISTS_QUERY} />
      </div>
      <button className='submit-button' type='submit'>
        ADD ALBUM
      </button>
    </form>
  )
}


export default AlbumForm;
