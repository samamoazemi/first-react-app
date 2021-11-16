import react  from "react";
import ProductList from "./components/ProductList/ProductList";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";


class App extends react.Component {

  state={
    products: [
      { title:"React.js", price:"99 $", id:1, quantity:1 },
      { title:"Node.js", price:"89 $", id:2, quantity:2 },
      { title:"JavaScript", price:"79 $", id:3, quantity:3 },
     ]
  }
    
  changeHandler = (event, id) => {
    // console.log(event.target.value, id);
    const products = [...this.state.products];
    const selectedItem = products.find((p) => p.id == id)
    selectedItem.title = event.target.value;
    this.setState({products: products });
}

  decrementHandler = (id) => {
      const products = [...this.state.products];
      const selectedItem = products.find((p) => p.id === id)
      if(selectedItem.quantity === 1){
        const filteredProducts = products.filter((p) => p.id !== id)
        this.setState({ products : filteredProducts })
      }
      else{
          selectedItem.quantity--;
          this.setState({products : products})
      }
  }

  incrementHandler = (id) => {
      const products = [...this.state.products];
      const selectedItem = products.find((p) => p.id === id)
      selectedItem.quantity++;
      this.setState({products : products})
      // console.log(products)
  }

  removeHandler = (id) => {
      console.log("clicked", id)
      const fiteredProducts = this.state.products.filter((p) => p.id !== id)
      this.setState({ products: fiteredProducts })
  }

 
  render(){
    return(
      <div className="container" id="title">
         <NavBar totalItems={this.state.products.filter((p) => p.quantity > 0).length}/>
         <ProductList 
          products={this.state.products} 
          onChange={this.changeHandler}
          onDecrement={this.decrementHandler}
          onIncrement={this.incrementHandler}
          onRemove={this.removeHandler}/>
       </div>
    )
  }
}
export default App;
