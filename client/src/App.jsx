// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDeatils';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import UserAccount from './pages/UserAccount';
import Login from './pages/Login';
import Register from './pages/Register';
import UserForm from './components/UserForm'; 

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account" element={<UserAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userform" element={<UserForm />} /> {/* Add this line */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
