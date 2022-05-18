import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Checkout } from '../components/Checkout';
import Navbar from '../components/Navbar';
import { Product } from '../components/Product';
import { NEXT_URL } from '../constants';
import { Footer } from '../components/Footer';

// const products = [
//   {
//     id: 1,
//     image: '/images/shirt.jpg',
//     name: 'Mens Casual Premium Slim Fit T-Shirts',
//     price: 19,
//   },
//   {
//     id: 2,
//     image: '/images/9fbb62343426e1f157144f26d9b59be1629ef7c1-600x600.webp',
//     name: 'boAt Party Pal 50',
//     price: 56,
//   },
//   {
//     id: 3,
//     image: '/images/71li-ujtlUL._AC_UX679_.jpg',
//     name: 'Mens Cotton Jacket',
//     price: 55.99,
//   },
//   {
//     id: 4,
//     image: '/images/81QpkIctqPL._AC_SX679_.jpg',
//     name: 'Acer SB220Q bi 21.5 inches Full HD',
//     price: 599,
//   },
// ];

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${NEXT_URL}/api/products`);
        setProducts(data.data.products);
        setLoading(false);
      } catch (err) {
        console.error(err.message);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-white max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products && products.map((product) => <Product key={product.id} {...product} />)}
      </div>
      <Checkout />
      <Footer />
    </div>
  );
}
