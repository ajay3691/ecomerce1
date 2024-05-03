import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  if (!product) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <h1>Product Details</h1>
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">Price: ${product.price}</p>
          <p className="card-text">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
