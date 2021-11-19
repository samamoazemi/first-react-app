import styles from "./product.module.css";
import { BsTrash } from "react-icons/bs";
import React, { useEffect } from "react";

const Product = ({ product, onChange, onDecrement, onIncrement, onDelete }) => {

  console.log("Product.js render");

  // CDM + CDU + CWUM => useEffect()
  // CDM =>  useEffect( () => {} )
  // CDU =>  useEffect( () => {} , [name])
  // CWUM =>  useEffect( () => { return () =>{} } , [])

  useEffect(() => {
    console.log("Product.js useEffect");
    return () => {
      console.log("Product CWUM")
    }
  }, []);

    return(
        <div className={styles.product}>
          <p>product name : {product.title} course</p>
          <p>product price : {product.price} </p>
          <span className={styles.value}>{product.quantity}</span>

          <input 
           className={styles.input}
           type="text" 
           onChange={onChange}
           value={product.title}
           />

          <button onClick={onDecrement} 
            className={`${styles.button} ${product.quantity === 1 && styles.remove}`}>
            {product.quantity > 1 ? "-" : <BsTrash/>}
           </button>

          <button
           onClick={onIncrement} 
           className={`${styles.button} ${styles.inc}`}>+</button>

          <button 
           onClick={onDelete} 
           className={styles.button}>Delete</button>

        </div>
    )
}
 
export default Product;


