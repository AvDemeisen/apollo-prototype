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

export { ARTISTS_QUERY, ALBUMS_QUERY, ADD_ALBUM };