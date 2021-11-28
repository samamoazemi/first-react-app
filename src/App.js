import React, { useState }  from "react";
import ProductList from "./components/ProductList/ProductList";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Wrapper from "./components/HOC/Wrapper";


const App = () => {

const[products, setProducts] = useState(
  [
    { title:"React.js", price:"99 $", id:1, quantity:1 },
    { title:"Node.js", price:"89 $", id:2, quantity:2 },
    { title:"JavaScript", price:"79 $", id:3, quantity:3 },
  ]
)

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
         <NavBar totalItems={products.filter((p) => p.quantity > 0).length}/>
         <ProductList 
          products={products} 
          onChange={changeHandler}
          onDecrement={decrementHandler}
          onIncrement={incrementHandler}
          onRemove={removeHandler}/>
    </>
  )
}
 
export default Wrapper(App, "container");