import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'


const Login = () => {
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
                                <input type="text" maxLength="50" className="form-control" placeholder="Usuario" aria-label="name" aria-describedby="basic-addon1" />
                            </div>

                            <div className="input-group mb-3 mt-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">
                                        <i className="fa fa-lock" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <input type="password" maxLength="50" className="form-control" placeholder="Contraseña" aria-label="name" aria-describedby="basic-addon1" />
                            </div>

                            <button type="button" className="btn btn-link mt-4 mb-2">
                                <Link to="/home">Cancelar</Link>
                            </button>

                            <Link to="/home">
                                <button type="button" className="btn btn-primary float-right mt-4 mb-2">
                                    Iniciar Sesión
                                </button>
                            </Link>
                        
                        </div>
                    </div>
                </div>
             
            </div>
               
        </>
       
    )
}

export default Login
