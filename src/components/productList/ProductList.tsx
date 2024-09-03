import React, { useState, useRef, useCallback } from 'react';
import Product from '../product/Product';
import './productList.css';

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
};

type ProductListProps = {
  products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>(products.slice(0, 10));
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastProductRef = useRef<HTMLDivElement | null>(null);

  // Функция для создания случайного товара
  const createRandomProduct = (): Product => {
    const id = Math.floor(Math.random() * 1000);
    return {
      id,
      name: `Product ${id}`,
      price: Math.random() * 100,
      description: 'This is a randomly generated product.',
      imageUrl: 'https://via.placeholder.com/150',
    };
  };

  // Функция для загрузки большего количества товаров
  const loadMoreProducts = () => {
    const newProducts = [...displayedProducts, ...Array.from({ length: 10 }, createRandomProduct)];
    setDisplayedProducts(newProducts);
  };

  // Используем IntersectionObserver для загрузки большего количества товаров при прокрутке
  const lastProductCallback = useCallback(
    (node: HTMLDivElement | null) => {
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMoreProducts();
        }
      });
      if (node) observerRef.current.observe(node);
    },
    [displayedProducts]
  );

  return (
    <div className="product-list">
      {displayedProducts.map((product, index) => (
        <div ref={index === displayedProducts.length - 1 ? lastProductCallback : null} key={product.id}>
          <Product product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
