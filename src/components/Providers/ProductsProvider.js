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

export const useProductsActions = () => useContext(ProductContextDispatcher)
