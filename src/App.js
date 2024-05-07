import './App.css';
import ProductList from './containers/product-list';
import Cart from './containers/cart';

function App() {
  return (
    <div className="App">
      <ProductList/>
      <Cart/>
    </div>
  );
}

export default App;
