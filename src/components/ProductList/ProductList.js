import React, { Component } from 'react';
import Product from '../product/Product';

class ProductList extends React.Component {

    state = {
        products: [
           { title:"React.js", price:"99 $", id:1, quantity:1 },
           { title:"Node.js", price:"89 $", id:2, quantity:2 },
           { title:"JavaScript", price:"79 $", id:3, quantity:3 },
          ]
        }

        //state => Handler !

        changeHandler = (event, id) => {
            // console.log(event.target.value, id);
            const products = [...this.state.products];
            const selectedItem = products.find((p) => p.id == id)
            selectedItem.title = event.target.value;
            this.setState({products: products });
        }

        decrementHandler = (id) => {
            const products = [...this.state.products];
            const selectedItem = products.find((p) => p.id === id)
            if(selectedItem.quantity === 1){
              const filteredProducts = products.filter((p) => p.id !== id)
              this.setState({ products : filteredProducts })
            }
            else{
                selectedItem.quantity--;
                this.setState({products : products})
            }
        }

        incrementHandler = (id) => {
            const products = [...this.state.products];
            const selectedItem = products.find((p) => p.id === id)
            selectedItem.quantity++;
            this.setState({products : products})
            // console.log(products)
        }

        removeHandler = (id) => {
            console.log("clicked", id)
            const fiteredProducts = this.state.products.filter((p) => p.id !== id)
            this.setState({ products: fiteredProducts })
        }

    render() { 

        if(this.state.products.length === 0) 
        return <div>There is no product in your cart</div>

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
                    onIncrement={() => this.incrementHandler (product.id)}
                    onDelete={() => this.removeHandler(product.id)} 
                    onChange={(e) => this.changeHandler(e, product.id)}
                    onDecrement={() => this.decrementHandler(product.id)}
                    />
             
             
                )
            })}
            </div>
        )
    }
}
 
export default ProductList;