import react  from "react";
import ProductList from "./components/ProductList/ProductList";
import "./App.css";


class App extends react.Component {
 
  render(){
    return(
      <div className="container" id="title">
         <h1>shopping App</h1>
         <ProductList/>
       </div>
    )
  }
}
export default App;
