import React, { useEffect, useState } from 'react';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  return (
    <div className="container">
      <h1 className="my-5">Products</h1>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
