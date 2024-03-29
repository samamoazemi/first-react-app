import React, { useContext, useReducer } from "react";
import {productData} from "../../DB/Products";
import _, { filter } from "lodash";

const ProductContext = React.createContext()   // state
const ProductContextDispatcher = React.createContext()   // setState

// const initialState = [
//     { title:"React.js", price:"99 $", id:1, quantity:1 },
//     { title:"Node.js", price:"89 $", id:2, quantity:2 },
//     { title:"JavaScript", price:"79 $", id:3, quantity:3 },
//       ]

const reducer = (state, action) => {
  switch (action.type) {

    case "increment" :{
        const index = state.findIndex((item) => item.id === action.id)
        const product = {...state[index]}
        product.quantity++;
        const updatedProducts = [...state]
        updatedProducts[index] = product;
      return updatedProducts;
    }
      
    case "decrement" :{
        const index = state.findIndex((item) => item.id === action.id)
        const product = {...state[index]}
        if(product.quantity === 1){
        const filteredProducts = state.filter((p) => p.id !== action.id) 
        return filteredProducts;
        }
        else{
        const updatedProducts = [...state]
        product.quantity--;
        updatedProducts[index] = product;
        return updatedProducts;
        }
    }
        
    case "edit" :{
         
    const index = state.findIndex((item) => item.id === action.id)
    console.log(index);
    const product = {...state[index]}
    product.title = action.event.target.value;
    const updatedProducts = [...state]
    updatedProducts[index] = product;
    return updatedProducts;
    }

    case "remove" :{
        const fiteredProducts = state.filter((p) => p.id !== action.id)
        return fiteredProducts;
    }

    case "filter" :{
      // console.log(action.selectedOption.value);
      const value = action.selectedOption.value;
      if (value === "") {
       return productData;
     }else{
      const updatedProducts = productData.filter(
        (p) => p.availableSizes.indexOf(value) >=0);
      return updatedProducts;
     }
    }

    case "sort" :{
      const value = action.selectedOption.value;
      const products = [...state];
      if (value === "lowest"){
        return _.orderBy(products, ["price"], ["asc"]); 
      }
      else{
        return _.orderBy(products, ["price"], ["desc"]);
      }
    }

    case "search" :{
      const value = action.event.target.value;
      if (value === "") {
       return state;
     }else{
      const filteredProducts = state.filter((p) => 
        p.title.toLowerCase().includes(value.toLowerCase())
        )
        return filteredProducts;
     }
    }

    default :
      return state;
    }
}

const ProductsProvider = ({children}) => {
    const[products,dispatch] = useReducer(reducer, productData);

    return(
        <ProductContext.Provider value={products}>
             <ProductContextDispatcher.Provider value={dispatch}>
              {children}
             </ProductContextDispatcher.Provider>
        </ProductContext.Provider>
    )
}
 
export default ProductsProvider;

export const useProducts = () => useContext(ProductContext)

export const useProductsActions = () => useContext(ProductContextDispatcher)

