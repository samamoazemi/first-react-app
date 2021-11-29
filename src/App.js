import React, { useState }  from "react";
import ProductList from "./components/ProductList/ProductList";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Wrapper from "./components/HOC/Wrapper";
import Filter from "./components/Filter/Filter";
import ProductsProvider from "./components/Providers/ProductsProvider";


const App = () => {

  return(
    <>
        <ProductsProvider>
           <NavBar />
           <Filter />
           <ProductList />
        </ProductsProvider>
    </>
  )
}
 
export default Wrapper(App, "container");