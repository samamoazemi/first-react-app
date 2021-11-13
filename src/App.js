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

clickhandler = (newTitle) => {
  console.log("change price")
  this.setState({
    products: [
       { title:"React.js", price:"89 $", id:1},
       { title: newTitle, price:"79 $", id:2},
       { title:"JavaScript", price:"69 $", id:3},
    ]
  })
}

// // constructor(props){
// //   super(props);
// //   this.countHandler = this.countHandler.bind(this);
//   // console.log("constructor", this);

// }

countHandler = (id) => {
  console.log("count clicked", id)
  this.setState({ count: this.state.count + 1 });
}

  render(){
    return(
      <div className="container" id="title">
         <h1>shopping App</h1>
         {this.state.products.map((product) => {
           return(
            <Product 
            name={product.title} 
            price={product.price} 
            key={product.id} 
            click={ () => this.clickhandler("new title")} 
            />
           )
         })}
         <button onClick={ () => this.countHandler(2)} className="product">
           counter : {this.state.count}
           </button>
       </div>
    )
  }
}
export default App;