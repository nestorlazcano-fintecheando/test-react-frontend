import React from 'react'
import {
    Switch,
    Route
  } from "react-router-dom";
import AdminProduct from '../AdminProduct/AdminProduct';
import Settings from '../Settings/Settings';
import ShoppingList from '../ShoppingList/ShoppingList';

const Content = () => {

    return (
        <div id="content">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <button type="button" id="sidebarCollapse" className="btn btn-info">
                        <i className="fas fa-align-left"></i>
                    </button>

                    <div id="navbarSupportedContent">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a href="#" className="nav-link" onClick={ (e) => e.preventDefault() }>
                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                    &nbsp;
                                    Lista de Compra
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Switch>
                <Route path='/home/admin-product/:id'>
                    <AdminProduct />
                </Route>
                <Route path='/home/admin-product'>
                    <AdminProduct />
                </Route>
                <Route path='/home/settings'>
                    <Settings />
                </Route>
                <Route path='/home'>
                    <ShoppingList />
                </Route>
            </Switch>
        </div>
    )
}

export default Content
