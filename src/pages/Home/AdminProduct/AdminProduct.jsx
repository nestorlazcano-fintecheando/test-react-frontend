import React from 'react'
import './AdminProduct.css';
import { useParams, Link } from 'react-router-dom';

const AdminProduct = () => {

    const { id } = useParams();

    return (
        <div className="card mt-4">
            <div className="card-body">
                <div className="container">
                    <h3>  
                        <i className="fa fa-list-alt" aria-hidden="true"></i>
                        &nbsp;
                        {
                            id ? `Editar Producto #${id}` : 'Agregar Producto'
                        }
                    </h3>
                    
                    <hr />

                    <div className="input-group mb-4 mt-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                <i className="fa fa-list-alt" aria-hidden="true"></i>
                            </span>
                        </div>
                        <input type="text" maxLength="50" className="form-control" placeholder="Nombre" aria-label="name" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-4">
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-danger" type="button" id="button-addon1">
                                <i className="fa fa-minus" aria-hidden="true"></i>
                            </button>
                        </div>
                        <input type="text" className="form-control" disabled="disabled" placeholder="Cantidad" aria-label="Example text with button addon" aria-describedby="button-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-primary" type="button" id="button-addon2">
                                <i className="fa fa-plus" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>

                 
                    <Link to="/home">
                        <button type="button" className="btn btn-link mt-5 mb-2">
                            Cancelar
                        </button>
                    </Link>
                    {
                        id ? 
                        <button type="button" className="btn btn-warning float-right mt-5 mb-2">Editar</button> : 
                        <button type="button" className="btn btn-primary float-right mt-5 mb-2">Agregar</button>
                        
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default AdminProduct
