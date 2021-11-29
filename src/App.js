import React, { useState }  from "react";
import ProductList from "./components/ProductList/ProductList";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Wrapper from "./components/HOC/Wrapper";
import ProductsProvider, { useProducts, useProductsActions } from "./components/Providers/ProductsProvider";


const App = () => {

  const products = useProducts(); 
  const setProducts = useProductsActions();

const changeHandler = (event, id) => {
    
  const index = products.findIndex((item) => item.id === id)
  console.log(index);
  const product = {...products[index]}
  product.title = event.target.value;
  const updatedProducts = [...products]
  updatedProducts[index] = product;
  setProducts(updatedProducts);
}

const decrementHandler = (id) => {
    
  const index = products.findIndex((item) => item.id === id)
  const product = {...products[index]}
  if(product.quantity === 1){
    const filteredProducts = products.filter((p) => p.id !== id) 
    setProducts(filteredProducts)
  }
  else{
    const updatedProducts = [...products]
    product.quantity--;
    updatedProducts[index] = product;
    setProducts(updatedProducts);
  }
}

const incrementHandler = (id) => {
  const index = products.findIndex((item) => item.id === id)
  // console.log(index);
  const product = {...products[index]}
  product.quantity++;
  const updatedProducts = [...products]
  updatedProducts[index] = product;
  setProducts(updatedProducts);
}

const removeHandler = (id) => {
    // console.log("clicked", id)
    const fiteredProducts = products.filter((p) => p.id !== id)
    setProducts(fiteredProducts)
}

  return(
    <>
        <ProductsProvider>
           <NavBar/>
           <ProductList 
           products={products} 
           onChange={changeHandler}
           onDecrement={decrementHandler}
           onIncrement={incrementHandler}
           onRemove={removeHandler}
           />
        </ProductsProvider>
    </>
  )
}
 
export default Wrapper(App, "container");