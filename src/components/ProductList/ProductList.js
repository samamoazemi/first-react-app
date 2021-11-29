import React from 'react';
import Product from '../product/Product';
import { useProducts, useProductsActions } from '../Providers/ProductsProvider';

const ProductList = (props) => {

  const products = useProducts();

  const dispatch = useProductsActions();
  
  const renderProduct = () => {

      if(products.length === 0) return <div>There is no product in your cart</div>

      return products.map((product) => {
        return(
          <Product
            product={product}
            key={product.id} 
            onChange={(e) =>dispatch({type:"edit", id : product.id, event : e})}
            onDecrement={() => dispatch({type:"decrement", id : product.id})}
            onIncrement={() =>dispatch({type:"increment", id : product.id})}
            onDelete={() =>dispatch({type:"remove", id : product.id})} 
          />
        )
      })
    }
     return (
        <div>
         {!products.length && <div>Go to shopping</div> }
         {renderProduct()}
        </div>
      )
}
 
export default ProductList;