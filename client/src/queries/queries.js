import { gql } from 'apollo-boost';

const BOOKS_QUERY = gql`
    {
        albums {
            name
            artist {
                name
            }
        }
    }
`;

export { BOOKS_QUERY };