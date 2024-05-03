import React from 'react';

function CartItem({ cartItem }) {
  return (
    <div>
      <p>Product ID: {cartItem.productId}</p>
      <p>Quantity: {cartItem.quantity}</p>
    </div>
  );
}

export default CartItem;
