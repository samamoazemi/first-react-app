import react  from "react";
import ProductList from "./components/ProductList/ProductList";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ClassCounter from "./components/ClassCounter";
import FunctionalCounter from "./components/FunctionalCounter";
import ClassTimer from "./components/ClassTimer";
import FunctionalTimer from "./components/FunctionalTimer";

class App extends react.Component {

  constructor(props){
    super(props)
    console.log("App.js constructor");
  }

  state={
    products: [
      { title:"React.js", price:"99 $", id:1, quantity:1 },
      { title:"Node.js", price:"89 $", id:2, quantity:2 },
      { title:"JavaScript", price:"79 $", id:3, quantity:3 },
     ],
     
     isShow : true
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
      <div className="container" id="title">
        <button onClick={() => this.setState({isShow : !this.state.isShow})} >
          {this.state.isShow ? "hide" : "show"}
          </button>
            {this.state.isShow  && <FunctionalTimer/>} 
        {/* {this.state.isShow  && <ClassTimer/>} */}
        {/* <ClassCounter/> */}
        {/* <FunctionalCounter/> */}
         {/* <NavBar totalItems={this.state.products.filter((p) => p.quantity > 0).length}/>
         <ProductList 
          products={this.state.products} 
          onChange={this.changeHandler}
          onDecrement={this.decrementHandler}
          onIncrement={this.incrementHandler}
          onRemove={this.removeHandler}/> */}
       </div>
    )
  }
}
export default App;
