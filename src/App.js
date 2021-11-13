import react  from "react";
import ProductList from "./components/ProductList/ProductList";
import { useState } from "react";
import "./App.css";


class App extends react.Component {
  state={
    count : 0 ,
}

clickhandler = (newTitle) => {
  // console.log("change price")
  // this.setState({
  //   products: [
  //      { title:"React.js", price:"89 $", id:1},
  //      { title: newTitle, price:"79 $", id:2},
  //      { title:"JavaScript", price:"69 $", id:3},
  //   ]
  // })
}

countHandler = (id) => {
  console.log("count clicked", id)
  this.setState({ count: this.state.count + 1 });
}

  render(){
    return(
      <div className="container" id="title">
         <h1>shopping App</h1>
         <ProductList/>
         <button onClick={ () => this.countHandler(2)} 
         className="product">
         counter : {this.state.count}
         </button>
       </div>
    )
  }
}
export default App;

// App => ProductList => 3*Product + ...