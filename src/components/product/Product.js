import styles from "./product.module.css";
import { BsTrash } from "react-icons/bs";

const Product = (props) => {

    return(
        <div className={styles.product}>
          <p>product name : {props.product.title} course</p>
          <p>product price : {props.product.price} </p>
          <span className={styles.value}>{props.product.quantity}</span>

          <input 
           className={styles.input}
           type="text" 
           onChange={props.onChange}
           value={props.product.title}
           />

          <button onClick={props.onDecrement} 
            className={`${styles.button} ${props.product.quantity === 1 && styles.remove}`}>
            {props.product.quantity > 1 ? "-" : <BsTrash/>}
           </button>

          <button
           onClick={props.onIncrement} 
           className={`${styles.button} ${styles.inc}`}>+</button>

          <button 
           onClick={props.onDelete} 
           className={styles.button}>Delete</button>

        </div>
    )
}
 
export default Product;