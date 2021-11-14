import React, { Component } from 'react';
import Product from '../product/Product';

class ProductList extends React.Component {

    state = {
        products: [
           { title:"React.js", price:"99 $", id:1 },
           { title:"Node.js", price:"89 $", id:2 },
           { title:"JavaScript", price:"79 $", id:3 },
          ],
        }

    render() { 
        return(
            <div>
            {this.state.products.map((product) => {
           return(
            <Product name={product.title} price={product.price} key={product.id}  />
           )
         })}
        </div>
        )
    }
}
 
export default ProductList;