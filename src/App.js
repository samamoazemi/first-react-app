import react from "react";
import Product from "./components/product/Product";

class App extends react.Component{
  render(){
    return(
      <div className="container" id="title">
         <h1>shopping App</h1>
         <Product name="React.js" price="99 $" />
         <Product name="Node.js" price="89 $" />
         <Product name="JavaScript" price="79$">
             <p>discout is 15%</p>
         </Product>
       </div>
    )
  }
}

// const App = () => {
//     return (
//       <div className="container" id="title">
//         <h1>shopping App</h1>
//         <Product name="React.js" price="99 $" />
//         <Product name="Node.js" price="89 $" />
//         <Product name="JavaScript" price="79$">
//             <p>discout is 15%</p>
//         </Product>
//       </div>
//     );
// };

export default App;