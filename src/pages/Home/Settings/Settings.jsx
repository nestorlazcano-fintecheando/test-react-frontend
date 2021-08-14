import React from 'react'
import './Settings.css'
import { Link } from 'react-router-dom';

const Settings = () => {
    return (
        <div className="card mt-4">
            <div className="card-body">
                <div className="container">
                    <h3>  
                        <i className="fa fa-cogs" aria-hidden="true"></i>
                        &nbsp;
                        Configuración
                    </h3>
                    
                    <hr />

                    <label htmlFor="country">País</label>
                    <div className="input-group mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                <i className="fa fa-list-alt" aria-hidden="true"></i>
                            </span>
                        </div>
                        <select className="form-control" id="country">
                            <option>México</option>
                            <option>Estados Unidos</option>
                            <option>Canada</option>
                            <option>Argentina</option>
                            <option>España</option>
                        </select>
                    </div>
                    
                    <label htmlFor="city">Ciudad</label>
                    <div className="input-group mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                <i className="fa fa-list-alt" aria-hidden="true"></i>
                            </span>
                        </div>
                        <input id="city" type="text" maxLength="50" className="form-control" placeholder="Ciudad" aria-label="name" aria-describedby="basic-addon1" />
                    </div>

                    <label htmlFor="addres">Dirección</label>
                    <div className="input-group mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                <i className="fa fa-list-alt" aria-hidden="true"></i>
                            </span>
                        </div>
                        <input id="addres" type="text" maxLength="50" className="form-control" placeholder="Dirección" aria-label="name" aria-describedby="basic-addon1" />
                    </div>

                    <label htmlFor="phone">Teléfono</label>
                    <div className="input-group mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                <i className="fa fa-list-alt" aria-hidden="true"></i>
                            </span>
                        </div>
                        <input id="phone" type="tel" maxLength="10" className="form-control" placeholder="Teléfono" aria-label="name" aria-describedby="basic-addon1" />
                    </div>

                    <label htmlFor="email">Email</label>
                    <div className="input-group mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                <i className="fa fa-list-alt" aria-hidden="true"></i>
                            </span>
                        </div>
                        <input id="email" type="text" maxLength="50" className="form-control" placeholder="Email" aria-label="name" aria-describedby="basic-addon1" />
                    </div>

                    <label htmlFor="file">Foto</label>
                    <div className="input-group mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                <i className="fa fa-list-alt" aria-hidden="true"></i>
                            </span>
                        </div>
                        <input id="file" type="file" maxLength="50" className="form-control" placeholder="Foto" aria-label="name" aria-describedby="basic-addon1" />
                    </div>

                    
                    <button type="button" className="btn btn-link mt-5 mb-2">
                        <Link to="/home">Cancelar</Link>
                    </button>

                    <button type="button" className="btn btn-primary float-right mt-5 mb-2">Guardar</button>
                    
                </div>
            </div>
        </div>
    )
}

export default Settings
