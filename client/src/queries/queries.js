import { gql } from 'apollo-boost';

const ARTISTS_QUERY = gql`
   {
        artists {
            name
            id
        }
    }
`

const ALBUMS_QUERY = gql`
    {
        albums {
            name
            id
            artist {
                name
            }
        }
    }
`;

const ADD_ALBUM = gql`
    mutation AddAlbum($name: String!, $release: Int!, $genre: String!,  $artistId: ID!){
        addAlbum(name: $name, genre: $genre, release: $release, artistId: $artistId){
            name
            id
        }
    }
`;

const ALBUM_QUERY = gql`
        query GetAlbum($id: ID){
        album(id: $id) {
            id
            name
            genre
            artist {
                id
                name
                albums {
                    name
                    id
                }
            }
        }
    }
`

export { ARTISTS_QUERY, ALBUMS_QUERY, ADD_ALBUM, ALBUM_QUERY };