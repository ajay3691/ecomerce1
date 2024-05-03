import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">${product.price}</p>
        <p className="card-text">{product.description}</p>
        <p className="card-text">Category: {product.category}</p>
        <p className="card-text">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
      </div>
    </div>
  );
}

export default ProductCard;
