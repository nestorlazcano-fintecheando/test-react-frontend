import React, { useState, useEffect } from 'react'
import './AdminProduct.css';
import { useParams, Link, useHistory } from 'react-router-dom';
import shoppingListService from '../../../services/shopping-list.service';
import alertService from '../../../services/alert.service';

const AdminProduct = () => {

    const { id } = useParams();

    const history = useHistory()

    const [product, setProduct] = useState({
        id: "",
        amount: 1,
        index: 0,
        product: ""
    })

    useEffect(() => {
        const fetchData = async () => {

            shoppingListService.getList(id).then( resp => {
                if (resp.data.shoppingList) {
                    const auxProduct = { ...resp.data.shoppingList }
                    delete auxProduct['__typename']
                    setProduct( auxProduct )
                }
                return resp
              } );

        }

        if (id) {
            fetchData()
        }
    
    }, [id])

    const updataProduct = () => {
        console.log(product)

        alertService.showLoading()

        shoppingListService.updateList([ product ]).then( result => {
            console.log(result)
            if (result.data.updateShoppingList) {
                history.push('/home')
            }
            alertService.showSuccess()
            return result
        } ).catch( () => alertService.showError() )
    }

    const createProduct = () => {
        console.log(product)

        alertService.showLoading()

        shoppingListService.createList(product).then( result => {
            console.log(result)
            if (result.data.createShoppingList) {
                history.push('/home')
            }
            alertService.showSuccess()
        } ).catch( () => alertService.showError() )
    }

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
                        <input onChange={ (e) => setProduct({ ...product, product: e.target.value }) } value={ product.product } type="text" maxLength="50" className="form-control" placeholder="Nombre" aria-label="name" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-4">
                        <div className="input-group-prepend">
                            <button onClick={ () => product.amount > 1 ? setProduct({ ...product, amount: product.amount - 1 }) : '' } className="btn btn-outline-danger" type="button" id="button-addon1">
                                <i className="fa fa-minus" aria-hidden="true"></i>
                            </button>
                        </div>
                        <input onChange={ (e) => setProduct({ ...product, amount: e.target.value }) } value={ product.amount } type="text" className="form-control" disabled="disabled" placeholder="Cantidad" aria-label="Example text with button addon" aria-describedby="button-addon2" />
                        <div className="input-group-append">
                            <button onClick={ () => setProduct({ ...product, amount: product.amount + 1 })  } className="btn btn-outline-primary" type="button" id="button-addon2">
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
                        <button disabled={ !product.product || product.amount < 1 } onClick={ updataProduct } type="button" className="btn btn-warning float-right mt-5 mb-2">Editar</button> : 
                        <button disabled={ !product.product || product.amount < 1 } onClick={ createProduct } type="button" className="btn btn-primary float-right mt-5 mb-2">Agregar</button>
                        
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default AdminProduct
