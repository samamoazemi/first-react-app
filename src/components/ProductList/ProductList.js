import React, { Component } from 'react';
import Product from '../product/Product';

class ProductList extends React.Component {
  
      renderProduct = () => {

        const { products, onChange, onDecrement, onIncrement, onRemove } = this.props;

          if(products.length === 0) 
          return <div>There is no product in your cart</div>

          return products.map((product) => {
            return(
              <Product
                //  name={product.title} 
                //  price={product.price} 
                //  quantity={product.quantity}
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

    render() { 
      const { products } = this.props;
      return (
         <div>
           {!products.length && <div>Go to shopping</div> }
           {this.renderProduct()}
         </div>
        )
    }
}
 
export default ProductList;