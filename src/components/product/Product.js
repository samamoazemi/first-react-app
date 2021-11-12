import "./product.css";

const Product = (props) => {
    console.log(props)
    return(
        <div className="product">
            <p>product name : {props.name} course</p>
            <p>product price : {props.price} </p>
            {props.children}
        </div>
    );
};
 
export default Product;