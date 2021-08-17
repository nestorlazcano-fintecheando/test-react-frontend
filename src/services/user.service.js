import { gql } from '@apollo/client';
import { client } from '../App';

const USER_UPDATE = gql`
    mutation Mutation($user: InputUsers!) {
        updateUser(user: $user) {
            success
            text
        }
    }
`

class User {
    updateUser(user) {
        return client.mutate({
                variables: { user },
                mutation: USER_UPDATE
            }).then( result => {
                console.log(result)
                return result;
            } )
    }
}

export default new User();