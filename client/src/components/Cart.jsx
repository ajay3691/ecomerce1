import React, { useState, useEffect } from 'react';

function Cart() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/carts')
      .then(res => res.json())
      .then(json => setCarts(json))
      .catch(error => console.error('Error fetching carts:', error));
  }, []);

  return (
    <div className="container">
      <h1>Cart</h1>
      <ul>
        {carts.map(cart => (
          <li key={cart.id}>
            User: {cart.userId}, Date: {cart.date}, Products: {JSON.stringify(cart.products)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
