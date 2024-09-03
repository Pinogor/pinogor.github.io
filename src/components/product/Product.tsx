import React from 'react';
import './product.css';

type ProductProps = {
  product: {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
  };
};

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default Product;
