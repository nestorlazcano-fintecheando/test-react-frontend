import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import alertService from '../../services/alert.service'
import authorizationService from '../../services/authorization.service'
import './Login.css'


const Login = () => {

    const history = useHistory()

    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })

    const onLogin = (e) => {
        e.preventDefault()

        alertService.showLoading()

        authorizationService.login(loginForm).then( resp => {
            console.log(resp);
            if (resp.data.login) {
                //history.push('/home')
                /**
                 * Para que se cargen correctamente todos los scripts de Boostrap y Jquery
                 * cabe mencionar que es una mejor practica escribir las funcionalidades en React o Vanilla js 
                 * y descartar toda dependencia de Jquery
                 */
                setTimeout( () => {
                    window.location.href = window.location.href.replace('login', 'home');
                }, 500 )
            }
            alertService.showSuccessLogin()
            return resp
        } ).catch( () => alertService.showErrorLogin() )
    }

    return (
        <>
            <nav className="navbar navbar-light">
                <img src="https://res.cloudinary.com/prixz/image/upload/w_100/v1623108241/items/icons/prixz-optimizado.webp" alt="" />
            </nav>
            <div className="bg">
                <div className="card">
                    <div className="card-body">
                        <div className="container">
                            <h3 className="text-center">  
                                <i className="fas fa-sign-in-alt"></i>                                
                                &nbsp;
                                Iniciar Sesión
                                
                            </h3>
                            
                            <hr />

                            <div className="input-group mb-4 mt-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <input onChange={ (e) => setLoginForm({ ...loginForm, username: e.target.value }) } value={ loginForm.username } type="text" maxLength="50" 
                                    className="form-control" placeholder="Usuario" aria-label="name" aria-describedby="basic-addon1" />
                            </div>

                            <div className="input-group mb-3 mt-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">
                                        <i className="fa fa-lock" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <input onChange={ (e) => setLoginForm({ ...loginForm, password: e.target.value }) } value={ loginForm.password } type="password" maxLength="50" 
                                    className="form-control" placeholder="Contraseña" aria-label="name" aria-describedby="basic-addon1" />
                            </div>

                            <button type="button" className="btn btn-link mt-4 mb-2">
                                <Link to="/login">Cancelar</Link>
                            </button>

                            <button disabled={ !loginForm.password || !loginForm.username } onClick={ onLogin } type="submit" className="btn btn-primary float-right mt-4 mb-2">
                                Iniciar Sesión
                            </button>
                        
                        </div>
                    </div>
                </div>
             
            </div>
               
        </>
       
    )
}

export default Login
