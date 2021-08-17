import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import authorizationService from '../../services/authorization.service'


const AuthGuard = ({ children, ...rest }) => {
    return (
      <Route {...rest} render={() => {
        return authorizationService.isAuth()
          ? children
          : <Redirect to='/login' />
      }} />
    )
}

export default AuthGuard
