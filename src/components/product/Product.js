// import "./product.css";
import styles from "./product.module.css";
import react, { Fragment }  from "react";

const Product = (props) => {
    // console.log(props)
    return(
        <Fragment>
             <p>product name : {props.name} course</p>
            <p>product price : {props.price} </p>
        </Fragment>
    );
};
 
export default Product;


// what is Fragment ?
// 1) All the jsx in react must be in a parent tags (div)
// 2) but sometimes we don't want use from parent tags (div)
// 3) If we do not put jsx in the parent tag, we will get an error
// 4) In this case, we put the jsx in a tag that called *Fragment*

// *But if we want giving style to jsx, we have to use from div *