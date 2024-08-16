// src/components/ProductList.js
import React from 'react';

function ProductList({ products, onAddToCart }) {
    return (
        <div className="row">
            {products.map((product) => (
                <div key={product.id} className="col-md-4">
                    <div className="card mb-4">
                        <img 
                            src={product.imagePath} 
                            alt={product.brand || product.title} 
                            className="card-img-top" 
                            style={{ width: '100%', height: 'auto' }}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{product.brand || product.title}</h5>
                            <p className="card-text">{product.description_name}</p>
                            <p className="card-text">Rs. {product.price}</p>
                            <button
                                className="btn btn-primary"
                                onClick={() => onAddToCart(product)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
