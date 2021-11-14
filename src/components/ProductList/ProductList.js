import React, { Component } from 'react';
import Product from '../product/Product';

class ProductList extends React.Component {

    state = {
        products: [
           { title:"React.js", price:"99 $", id:1, quantity:1 },
           { title:"Node.js", price:"89 $", id:2, quantity:2 },
           { title:"JavaScript", price:"79 $", id:3, quantity:3 },
          ],
        }

        //state => Handler !

    removeHandler = (id) => {
            console.log("clicked", id)
            const fiteredProducts = this.state.products.filter((p) => p.id !== id)
            this.setState({ products: fiteredProducts })
    
        }

    render() { 
        return(
            <div>
            {this.state.products.map((product) => {
           return(
            <Product
            //  name={product.title} 
            //  price={product.price} 
            //  quantity={product.quantity}
             product={product}
             key={product.id} 
             onDelete={() => this.removeHandler(product.id)} />
           )
         })}
        </div>
        )
    }
}
 
export default ProductList;