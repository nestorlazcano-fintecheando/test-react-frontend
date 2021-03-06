import React, { useState, useEffect } from 'react'
import './ShoppingList.css'
import { Link, withRouter } from "react-router-dom";
import Swal from 'sweetalert2'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import shoppingListService from '../../../services/shopping-list.service';


const ShoppingList = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          shoppingListService.getAll().then( resp => {
            if (resp.data.shoppingLists) {
                setProducts( resp.data.shoppingLists.map( item => ({
                    id: item.id,
                    index: item.index, 
                    product: item.product, 
                    amount: item.amount
                }) ) )
            }
            return resp
          } );

        }
    
        fetchData()
      }, []);

    const reorganizeProducts = (sourceIndex, destinationIndex) => {
        const item = products[sourceIndex]
        let arrayAux = products
        arrayAux.splice(sourceIndex, 1)
        arrayAux.splice(destinationIndex, 0, item)
        arrayAux = arrayAux.map( (item, index) => ({ ...item, index: (index+1) }) )
        console.log(arrayAux);
        shoppingListService.updateList(arrayAux).then( result => {
            console.log(result)
        } )
        setProducts(arrayAux)
    }

    const deleteElem = (id) => {
        Swal.fire({
            title: '¿Desea eliminar este producto?',
            text: "¡La operación no podrá revertirse!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Aceptar'
          }).then((result) => {
            if (result.isConfirmed) {
              shoppingListService.deleteList(id).then( result => {
                  if (result.data.deleteShoppingList) {
                    Swal.fire(
                        '¡Producto eliminado!',
                        '¡La operación se realizo exitosamente!',
                        'success'
                    )
                    setProducts(
                        products.filter( item => item.id !== id )
                    )
                  }
              } )
            }
        })
    }

    return (
        <>
            <h3>  
                <Link to="/home/admin-product">
                    <button type="button" className="btn btn-rounded btn-primary mr-1">   
                        <i className="fas fa-plus"></i>
                    </button>
                 </Link>
                Agregar Producto
            </h3>

            <DragDropContext onDragEnd={ (result) => {
                const { source, destination } = result
                reorganizeProducts(source.index, destination.index)
            } }>

                <div>
           
                    <Droppable droppableId="shoppingList">
                        {
                            (droppableProvided) => (
                                <ul className="list-group"
                                    { ...droppableProvided.droppableProps }
                                    ref={ droppableProvided.innerRef }>
                                        <li className="list-group-item active">
                                            <div className="row">
                                                <div className="col-3">
                                                    ID
                                                </div>
                                                <div className="col-3">
                                                   CANTIDAD 
                                                </div>
                                                <div className="col-3">
                                                    NOMBRE
                                                </div>
                                                <div className="col-3">
                                                    <i className="fa fa-cogs"></i>
                                                </div>
                                            </div>
                                        </li>
                                    {
                                        products.map( (product, index) => {
                                            return (
                                                <Draggable key={product.id} draggableId={product.id+''} index={index}>
                                                    {
                                                        (draggableProvided) => (
                                                            <li { ...draggableProvided.draggableProps }
                                                                ref={ draggableProvided.innerRef }
                                                                { ...draggableProvided.dragHandleProps }
                                                                className="list-group-item">
                                                                <div className="row">
                                                                    <div className="col-3">
                                                                        { product.id }
                                                                    </div>
                                                                    <div className="col-3">
                                                                        { product.amount }
                                                                    </div>
                                                                    <div className="col-3">
                                                                        { product.product }
                                                                    </div>
                                                                    <div className="col-3">
                                                                        <Link to={ `/home/admin-product/${product.id}` }>
                                                                            <button type="button" className="btn btn-sm btn-warning mr-2">
                                                                                <i className="fas fa-edit"></i>
                                                                            </button>
                                                                        </Link>
                                                                        <button onClick={ () => deleteElem(product.id) } type="button" className="btn btn-sm btn-danger">
                                                                            <i className="fas fa-trash-alt"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        )
                                                    }
                                                </Draggable>
                                            )
                                        } )
                                    }
                                    { droppableProvided.placeholder }
                                </ul>
                            )
                        }
                        
                    </Droppable>
                
                </div>
                
            </DragDropContext>

            <div className="line"></div>
        </>
    )
}

export default withRouter(ShoppingList)
