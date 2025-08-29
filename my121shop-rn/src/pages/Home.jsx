import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const products = [
    { id: 1, name: 'Product 1', price: '₹500' },
    { id: 2, name: 'Product 2', price: '₹800' }
  ];

  return (
    <div>
      <h1>Welcome to My121Shop</h1>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            <Link to={`/product/${p.id}`}>{p.name} - {p.price}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}