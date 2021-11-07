import Product from "./components/product/Product";

const App = () => {
    return (
        <div className="container" id="title">
            <h1>shopping App</h1>
            <Product />
            <Product />
            <Product />
        </div>
    );
};

export default App;