import styles from "./product.module.css";
import { BsTrash } from "react-icons/bs";
import React from "react";

class Product extends React.Component {

 componentWillUnmount(){
   console.log("ProductList.js componentWillUnmount");
 }

  render() { 
    console.log("Product render")
    return(
      <div className={styles.product}>
          <p>product name : {this.props.product.title} course</p>
          <p>product price : {this.props.product.price} </p>
          <span className={styles.value}>{this.props.product.quantity}</span>

          <input 
           className={styles.input}
           type="text" 
           onChange={this.props.onChange}
           value={this.props.product.title}
           />

          <button
            onClick={this.props.onDecrement} 
            className={`${styles.button} ${
              this.props.product.quantity === 1 && styles.remove}`}>
            {this.props.product.quantity > 1 ? "-" : <BsTrash/>}
           </button>

          <button
           onClick={this.props.onIncrement} 
           className={`${styles.button} ${styles.inc}`}>+</button>

          <button 
           onClick={this.props.onDelete} 
           className={styles.button}>Delete</button>

        </div>
    );
  }
}
 
export default Product;



// const Product = ({ product, onChange, onDecrement, onIncrement, onDelete }) => {

//   console.log("Product.js render");

//     return(
//         <div className={styles.product}>
//           <p>product name : {product.title} course</p>
//           <p>product price : {product.price} </p>
//           <span className={styles.value}>{product.quantity}</span>

//           <input 
//            className={styles.input}
//            type="text" 
//            onChange={onChange}
//            value={product.title}
//            />

//           <button onClick={onDecrement} 
//             className={`${styles.button} ${product.quantity === 1 && styles.remove}`}>
//             {product.quantity > 1 ? "-" : <BsTrash/>}
//            </button>

//           <button
//            onClick={onIncrement} 
//            className={`${styles.button} ${styles.inc}`}>+</button>

//           <button 
//            onClick={onDelete} 
//            className={styles.button}>Delete</button>

//         </div>
//     )
// }
 
// export default Product;