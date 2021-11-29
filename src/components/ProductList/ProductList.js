import React from 'react';
import Product from '../product/Product';
import { useProducts } from '../Providers/ProductsProvider';

const ProductList = (props) => {

  const products = useProducts();

  const { onChange, onDecrement, onIncrement, onRemove } = props;
  
  const renderProduct = () => {
    
      if(products.length === 0) return <div>There is no product in your cart</div>

      return products.map((product) => {
        return(
          <Product
            product={product}
            key={product.id} 
            onChange={(e) => onChange(e, product.id)}
            onDecrement={() => onDecrement(product.id)}
            onIncrement={() => onIncrement(product.id)}
            onDelete={() => onRemove(product.id)} 
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