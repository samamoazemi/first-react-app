import react from "react";
import Product from "./components/product/Product";

class App extends react.Component {
  state = {
    products: [
       { title:"React.js", price:"99 $" },
       { title:"Node.js", price:"89 $" },
       { title:"JavaScript", price:"79 $" },
    ],
  };

clickhandler = () => {
  this.setState({
    products: [
       { title:"React.js", price:"89 $" },
       { title:"Node.js", price:"79 $" },
       { title:"JavaScript", price:"69 $" },
    ],
  })
}

  render(){
    return(
      <div className="container" id="title">
         <h1>shopping App</h1>
         {this.state.products.map((product) => {
           return <Product name={product.title} price={product.price} />;
         })}
         <button onClick={this.clickhandler}>change price</button>
       </div>
    );
  }
}
export default App;