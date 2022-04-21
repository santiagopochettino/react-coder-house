import React, { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import {CartContextProvider} from "../context/CartContext"

import '../css/ItemDetail.css'

//ItemDetail recibe los datos del producto encontrado por id previamente y los muestra

const ItemDetail = ({ item}) => {
  const [ contador, setContador ] = useState(0)
  const [compra, setCompra] = useState(false)

  const { agregarAlCarrito } = useContext(CartContextProvider)

  function onAdd(count){
      setContador(count)
      setCompra(true)
  }
  function handledClick(){
    agregarAlCarrito(item)
  }
  
  return (
    <article className="product-detail">
      <img src={item.thumbnailUrl} alt="" className="product-detail__img  "/>
      <div className="product-detail__info">
        <h2 className="name">Carrito</h2>
        <ul className="info-grid">
          <li className="name-li">Article name:</li>
          <li>{item.name}</li>
          <li className="name-li">Price:</li>
          <li>$ {item.price}</li>
          <li className="name-li">Cantidad:</li>
          <li> </li>
          <li className="name-li">description:</li>
          <li>{item.description}</li>
        </ul>
        {
          compra? 
          <div><Link to={`/cart`}><button  className='countContainer__counter--button--finish' onClick={handledClick} >Ir al carrito</button></Link>  </div> :
          <ItemCount stock={item.stock} initial={1} onAdd={ onAdd}></ItemCount>
        }
      </div>
    </article>
  );
};

export default ItemDetail;
