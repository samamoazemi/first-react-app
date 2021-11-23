import react  from "react";
import ProductList from "./components/ProductList/ProductList";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Wrapper from "./components/HOC/Wrapper";
import ClickCounter from "./components/HocExample/ClickCounter";
import HoverCounter from "./components/HocExample/HoverCounter";
import ParentComp from "./components/PureMemoComp/ParentComp";
import ClassRef from "./components/Ref/ClassRef";
import FunctionalRef from "./components/Ref/FunctionalRef";

;

class App extends react.Component {

  state={
    products: [
      { title:"React.js", price:"99 $", id:1, quantity:1 },
      { title:"Node.js", price:"89 $", id:2, quantity:2 },
      { title:"JavaScript", price:"79 $", id:3, quantity:3 },
     ]
  }
    
  changeHandler = (event, id) => {
    
    const index = this.state.products.findIndex((item) => item.id === id)
    console.log(index);
    const product = {...this.state.products[index]}
    product.title = event.target.value;
    const products = [...this.state.products]
    products[index] = product;
    this.setState({ products });
  }

  decrementHandler = (id) => {
      
    const index = this.state.products.findIndex((item) => item.id === id)
    const product = {...this.state.products[index]}
    if(product.quantity === 1){
      const filteredProducts = this.state.products.filter((p) => p.id !== id) 
      this.setState({products: filteredProducts })
    }
    else{
      const products = [...this.state.products]
      product.quantity--;
      products[index] = product;
      this.setState({ products });

    }
  }

  incrementHandler = (id) => {
    // 1.id
    // 2.index
    const index = this.state.products.findIndex((item) => item.id === id)
    console.log(index);
    // 3. clone the selected index and update the qty
    const product = {...this.state.products[index]}
    product.quantity++;
    // 4. update products
    const products = [...this.state.products]
    products[index] = product;
    this.setState({ products });
  }

  removeHandler = (id) => {
      console.log("clicked", id)
      const fiteredProducts = this.state.products.filter((p) => p.id !== id)
      this.setState({ products: fiteredProducts })
  }
  
  render(){

    return(
      <>
         <FunctionalRef/>
         {/* <ClassRef/> */}
         {/* <NavBar totalItems={this.state.products.filter((p) => p.quantity > 0).length}/>
         <ProductList 
          products={this.state.products} 
          onChange={this.changeHandler}
          onDecrement={this.decrementHandler}
          onIncrement={this.incrementHandler}
          onRemove={this.removeHandler}
          /> */}
      </>
    )
  }
}
export default Wrapper(App, "container");
