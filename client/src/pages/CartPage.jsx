import React, { useState, useEffect } from 'react';

function CartPage() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/carts')
            .then(res => res.json())
            .then(data => setCartItems(data))
            .catch(error => console.error('Error fetching cart items:', error));
    }, []);

    return (
        <div className="container">
            <h1>Cart</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(item => (
                        <tr key={item.id}>
                            <td>{item.product ? item.product.title : 'N/A'}</td>
                            <td>{item.quantity}</td>
                            <td>${item.product ? item.product.price * item.quantity : 'N/A'}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}

export default CartPage;
