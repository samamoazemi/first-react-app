import React, { Component } from 'react';
import Product from '../product/Product';

class ProductList extends React.Component {

      renderProduct = () => {
          if(this.props.products.length === 0) 
          return <div>There is no product in your cart</div>

          return this.props.products.map((product) => {
            return(
              <Product
                //  name={product.title} 
                //  price={product.price} 
                //  quantity={product.quantity}
                product={product}
                key={product.id} 
                onIncrement={() => this.props.onIncrement(product.id)}
                onDelete={() => this.props.onRemove(product.id)} 
                onChange={(e) => this.props.onChange(e, product.id)}
                onDecrement={() => this.props.onDecrement(product.id)}
              />
           )
          })
      }

    render() { 
      return (
         <div>
           {!this.props.products.length && <div>Go to shopping</div> }
           {this.renderProduct()}
         </div>
        )
    }
}
 
export default ProductList;