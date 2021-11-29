import React from 'react';
import Product from '../product/Product';
import { useProducts, useProductsActions } from '../Providers/ProductsProvider';

const ProductList = (props) => {

  const products = useProducts();

  const  {changeHandler, decrementHandler, incrementHandler, removeHandler} = useProductsActions();
  
  const renderProduct = () => {

      if(products.length === 0) return <div>There is no product in your cart</div>

      return products.map((product) => {
        return(
          <Product
            product={product}
            key={product.id} 
            onChange={(e) => changeHandler(e, product.id)}
            onDecrement={() => decrementHandler(product.id)}
            onIncrement={() => incrementHandler(product.id)}
            onDelete={() => removeHandler(product.id)} 
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