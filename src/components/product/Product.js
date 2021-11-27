import styles from "./product.module.css";
import { BsTrash } from "react-icons/bs";
import React, { useContext, useEffect } from "react";
import { UserContext, WebsiteContext } from "../../App";

const Product = ({ product, onChange, onDecrement, onIncrement, onDelete }) => {

  useEffect(() => {
   
    return () => {
      
    }
  }, []);

   const user = useContext(UserContext)
   const website = useContext(WebsiteContext)
   console.log(user, website)

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


