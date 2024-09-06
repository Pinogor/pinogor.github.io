import React, { useState } from 'react';
import { ThemeProvider } from '../components/theme/ThemeProvider';
import { LanguageProvider } from '../components/i18n/LanguageProvider';
import Layout from '../components/layout/Layout';
import ProductList from '../components/productList/ProductList';
import { useTranslation } from 'react-i18next'; // Импортируем useTranslation для перевода
import '../components/i18n/i18n'; // Инициализация i18n
import '../index.css'; // Глобальные стили

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
};

const App: React.FC = () => {
  const { t } = useTranslation(); // Используем хук useTranslation для перевода

  // Инициализируем начальные продукты
  const initialProducts: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      description: 'Description for product 1.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 49.99,
      description: 'Description for product 2.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 19.99,
      description: 'Description for product 3.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 19.99,
      description: 'Description for product 4.',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  const [products, setProducts] = useState<Product[]>(initialProducts);

  // Функция для создания случайного продукта
  const createRandomProduct = (): Product => {
    const id = products.length + 1;
    return {
      id,
      name: `Product ${id}`,
      price: parseFloat((Math.random() * 100).toFixed(2)),
      description: 'This is a randomly generated product.',
      imageUrl: 'https://via.placeholder.com/150',
    };
  };

  // Функция для добавления нового случайного продукта
  const addProduct = () => {
    const newProduct = createRandomProduct();
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Layout>
          <div className="app-content">
            <button onClick={addProduct} style={{ marginBottom: '20px' }}>
              {t('addProductButton')} {/* Используем перевод для текста кнопки */}
            </button>
            <ProductList products={products} />
          </div>
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
