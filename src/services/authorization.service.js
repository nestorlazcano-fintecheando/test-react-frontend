import { gql } from '@apollo/client';
import { client } from '../App';

const LOGIN_MUTATION = gql`
    mutation Mutation($loginInput: LoginInput!) {
        login(login: $loginInput) {
            token
            user {
                id
                name
                username
                email
                country
                city
                phone
                address
                photo
            }
        }
    }
`

class Autorization {
    login(loginInput) {
        return client.mutate({
                variables: { loginInput },
                mutation: LOGIN_MUTATION
            }).then( result => {
                if (result.data.login) {
                    const { token, user } = result.data.login;
                    localStorage.setItem('token', token);
                    localStorage.setItem('user', JSON.stringify(user))
                }
                return result;
            } )

    }

    logout() {
        localStorage.clear()
    }

    getCurrentUser() {
        return JSON.parse( localStorage.getItem('user') )
    }

    getToken() {
        return localStorage.getItem('token')
    }

    isAuth() {
        return !!localStorage.getItem('user')
    }
}

export default new Autorization();