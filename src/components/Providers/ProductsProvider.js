import React, { useContext, useState } from "react";

const ProductContext = React.createContext()   // state
const ProductContextDispatcher = React.createContext()   // setState

const ProductsProvider = ({children}) => {
    const[products,setProducts] = useState([
      { title:"React.js", price:"99 $", id:1, quantity:1 },
      { title:"Node.js", price:"89 $", id:2, quantity:2 },
      { title:"JavaScript", price:"79 $", id:3, quantity:3 },
        ])

    return(
        <ProductContext.Provider value={products}>
             <ProductContextDispatcher.Provider value={setProducts}>
              {children}
             </ProductContextDispatcher.Provider>
        </ProductContext.Provider>
    )
}
 
export default ProductsProvider;

export const useProducts = () => useContext(ProductContext)

export const useProductsActions = () => {
   const setProducts = useContext(ProductContextDispatcher)
   const products = useContext(ProductContext)

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

return {changeHandler, decrementHandler, incrementHandler, removeHandler}
}
