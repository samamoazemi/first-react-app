import react  from "react";
import Product from "./components/product/Product";
import { useState } from "react";
import "./App.css";


class App extends react.Component {
  state = {
    products: [
       { title:"React.js", price:"99 $", id:1 },
       { title:"Node.js", price:"89 $", id:2 },
       { title:"JavaScript", price:"79 $", id:3 },
    ],

   count : 0 ,

  }

clickhandler = () => {
  this.setState({
    products: [
       { title:"React.js", price:"89 $" },
       { title:"Node.js", price:"79 $" },
       { title:"JavaScript", price:"69 $" },
    ]
  })
}


constructor(props){
  super(props);
  this.countHandler = this.countHandler.bind(this);
  // console.log("constructor", this);

}
countHandler(){
  // console.log("count clicked", this)
  this.setState({ count: this.state.count + 1 });
}


  render(){
    return(
      <div className="container" id="title">
         <h1>shopping App</h1>
         {this.state.products.map((product) => {
           return(
            <Product name={product.title} price={product.price} key={product.id}/>
           )
         })}
         <button onClick={this.countHandler}>change price</button>
       </div>
    )
  }
}
export default App;