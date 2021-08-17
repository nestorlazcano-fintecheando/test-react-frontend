import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import authorizationService from '../../../services/authorization.service'
import './Sidebar.css'


const Sidebar = () => {

    useEffect( () => {

    }, [] )

    return (
        <>
            <nav id="sidebar">
                <div className="sidebar-header">
                    <img src="https://res.cloudinary.com/prixz/image/upload/w_100/v1623108241/items/icons/prixz-optimizado.webp" alt="" />
                </div>

                <ul className="list-unstyled components">
                    <li className="active">
                        <Link to="/home">
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                            &nbsp;
                            Lista de Compra
                        </Link>
                    </li>
                </ul>

                <ul className="list-unstyled CTAs">
                    <li>
                        <Link to="/home/settings" className="download">
                            <i className="fa fa-cogs" aria-hidden="true"></i>
                            &nbsp;
                            Configuración
                        </Link>
                    </li>
                    <li>
                        <Link onClick={ () => authorizationService.logout() } to="/login" className="article">
                            <i className="fas fa-sign-out-alt"></i>
                            &nbsp;
                            Cerrar Sesión
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Sidebar
