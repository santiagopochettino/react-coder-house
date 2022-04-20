import React, { useEffect, useState } from 'react'
import Item from './Item'
import { productList } from '../data/data.js';
// import Loading from './Loading';
import CircularProgress from '@mui/material/CircularProgress';
//css
import '../css/ItemList.css'

const ItemList = () => {
  const [products, setProducts] = useState([]);
  const [contador, setContador] = useState(0)

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productList);
    }, 2000);
  });
  const getProductsData = async () => {
    try {
      const result = await getProducts;
      setProducts(result);
    } catch (error) {
      console.log(error);
      alert('No podemos mostrar los productos en este momento');
    }
  };
  useEffect(() => {
    getProductsData();
  }, );
  const agregarClick = (e) => {
    e.stopPropagation()
    setContador(contador + 1)
}

  return (
    <div className="product-list-container">
      {
        
        products.length ? ( 
          <>
            {
              products.map((item) => {
                return (
                  <div key={item.id} action={agregarClick}>
                    <Item
                      name={item.name}
                      thumbnailUrl={item.thumbnailUrl}
                      price={item.price}
                      stock={item.stock}
                      id={item.id}
                    />
                  </div>
                );
              })
            }
          </>
        ) : (
         <><CircularProgress/></>
        ) 
      }
    </div>
  )
}

export default ItemList