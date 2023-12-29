import { Link, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home'
import Product from './Product';
import Cart from './Cart';
import Account from './Account';
import ProductItem from './ProductItem';

const App = () =>{
  return (
    <>
    <div className="App">
      <div className="header">
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <h1 className='logoText'>Fashionista</h1>
          </div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/product">Products</Link></li>
              <li><a href="">Favorites</a></li>
              <li><a href="">Payment</a></li>
            </ul>
          </nav>
          <div className="search">
            <Link to="/profile"><img src={require('./resources/ProfileLogo.png')} height="30px" width="30px"/></Link>
          </div>
          <div className="cart">
            <Link to="/cart"><img src={require('./resources/bag.png')} height="25px" width="25px" /></Link>
          </div>
        </div>
      </div>
    </div>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/profile" element={<Account/>}/>
      <Route path="/product/:id" element={<ProductItem/>}/>
    </Routes>
    </div>

    </>
  );
}

export default App;
