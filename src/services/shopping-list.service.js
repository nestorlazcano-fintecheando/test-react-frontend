import { gql } from '@apollo/client';
import { client } from '../App';

const SHOPPING_LIST_ALL = gql`
    query Query {
        shoppingLists {
            id
            product
            amount
            index
        }
    }
`

const SHOPPING_LIST = gql`
    query Query($id: String!) {
        shoppingList(id: $id) {
            id
            product
            amount
            index
        }
    }
`

const SHOPPING_LIST_UPDATE = gql`
    mutation Mutation($shoppingList: [ShoppingListInput!]!) {
        updateShoppingList(shoppingList: $shoppingList) {
            success
            text
        }
    }
`

const SHOPPING_LIST_DELETE = gql`
    mutation Mutation($id: String!) {
        deleteShoppingList(id: $id) {
            success
            text
        }
    }
`

const SHOPPING_LIST_CREATE = gql`
    mutation Mutation($shoppingList: ShoppingListInput) {
        createShoppingList(shoppingList: $shoppingList) {
            id
            index
            product
            amount
        }
    }
`

class ShoppingList {
    getAll() {
        return client.query({
                query: SHOPPING_LIST_ALL
            }).then( result => {
                console.log(result);
                return result;
            } )

    }

    getList(id) {
        return client.query({
                variables: { id },
                query: SHOPPING_LIST
            }).then( result => {
                console.log(result);
                return result;
            } )

    }

    updateList(shoppingList) {
        return client.mutate({
                variables: { shoppingList },
                mutation: SHOPPING_LIST_UPDATE
            }).then( result => {
                console.log(result)
                return result;
            } )
    }

    deleteList(id) {
        return client.mutate({
                variables: { id },
                mutation: SHOPPING_LIST_DELETE
            }).then( result => {
                console.log(result)
                return result;
            } )
    }

    createList(shoppingList) {
        return client.mutate({
                variables: { shoppingList },
                mutation: SHOPPING_LIST_CREATE
            }).then( result => {
                console.log(result)
                return result;
            } )
    }
}

export default new ShoppingList();